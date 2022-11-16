(function() {
  const options = {};

  // Set default settings values
  options.custom = 'in1.ton.org:8080';
  options.mode = 'public';

  const content = document.getElementById('content');

  const removeSaved = (saved) => {
    content.disabled = false;
    document.body.appendChild(saved);

    browser.tabs.reload();
  }

  const updateSettings = (label) => {
    const saved = document.getElementById('saved');
    label.appendChild(saved);

    setTimeout(() => removeSaved(saved), 400);
  }

  const saveSettings = (label) => {
    content.disabled = true;

    browser.storage.local.set({options}, () => {
      updateSettings(label);
    });
  }

  const updateCustom = () => {
    const input = content.querySelector('#custom input');
    input.disabled = true;

    if (options.mode === 'custom') {
      input.disabled = false;
    }

    input.value = options.custom;
  }

  const updateMode = () => {
    const inputs = content.querySelectorAll('#mode input');

    inputs.forEach(input => {
      if (input.value === options.mode) {
        input.checked = true;
      }

      input.addEventListener('change', () => {
        options.mode = input.value;

        saveSettings(input.parentNode);
        updateCustom();
      });
    });
  }

  content.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = content.querySelector('#custom input');
    options.custom = input.value;

    const label = content.querySelector('#mode label:last-child');
    saveSettings(label);
  });

  browser.storage.local.get('options', (data) => {
    Object.assign(options, data.options);

    updateMode();
    updateCustom();
  });
})();