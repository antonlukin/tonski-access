# TON.SKI Access
Use TON.SKI web service or browser extension to proxy your traffic to the TON private network.

## Extensions
The extension solves one single task - redirecting 
traffic for the first level domains `.ton` and `.adnl` to the proxied address. 
The user can choose which proxy to use:
- Public proxy: `http://in1.ton.org:8080`
- Secure proxy: `https://in.tonxy.pro:8443`
- Any custom address including local proxy

How a private proxy works, read below.

### Development
1. Clone this repo from GitHub
2. Load an unpacked extension to [Google Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) or [Mozilla Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing) browser.
3. Update code and debug extension


## Secure Proxy
This proxy that encrypts the traffic between client and server, preventing MIT-type attacks on this section of the traffic exchange. At the moment, the proxy uses the public node `http://in1.ton.org:8080`. In the future, traffic will be proxied on the same server where nginx is installed

**The server does not collect any user data.**