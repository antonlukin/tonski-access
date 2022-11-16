(function() {
  const options = {};

  // Set default settings values
  options.custom = 'in2.ton.org:8080';
  options.mode = 'public';

  const getProxyLink = () => {
    if (options.mode === 'public') {
      return 'PROXY in1.ton.org:8080';
    }

    if (options.mode === 'private') {
      return 'HTTPS in.tonxy.pro:8443';
    }

    const [host, port] = options.custom.split(':');

    if (port === '8443' || port === '443') {
      return 'HTTPS ' + options.custom;
    }

    return 'PROXY ' + options.custom;
  }

  const createProxy = () => {
    const link = getProxyLink();

    const script = `function FindProxyForURL(url, host) {
      return host.endsWith('.ton') || host.endsWith('.adnl') ? '${link}' : 'DIRECT';
    }`;

    browser.proxy.settings.set({value: {
      proxyType: 'autoConfig',
      autoConfigUrl: 'data:text/javascript,' + encodeURIComponent(script),
    }});
  }

  browser.storage.local.get('options', function(data) {
    Object.assign(options, data.options);
    createProxy();
  });

  browser.storage.onChanged.addListener((changes) => {
    if (changes.options?.newValue) {
      Object.assign(options, changes.options.newValue);
    }

    createProxy();
  });
})();