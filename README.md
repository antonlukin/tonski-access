# TONxy
Use TONxy web service or browser extension to proxy your traffic to the TON private network.


## Website
Website is an application written in Next.js. 
The input form redirects requests from domains on the TON network to their mirrors on the public Internet.

### Development
The instruction assumes that you have Yarn and pm2 installed globally.

1. Clone this repo from GitHub
2. Navigate to `website` directory
3. Install required modules with `yarn`
4. Start application with `yarn dev`
5. Use `yarn build` command to build
6. Start on port 8000 with `pm2 start yarn --name tonxy -- start`
7. Update `package.json` to change port


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


## TON sites mirror
Mirroring traffic from the internal TON network to the external Internet using nginx. 
All domains like `example.ton` have aliases like `example.tonxy.pro` available on the public Internet.

At the moment, the proxy uses the public node `http://in1.ton.org:8080`. 
Proxied `GET` and `HEAD` requests are cached for 10 minutes. All cookies are deleted.
The server also tries to replace all links like `http://*.ton` with `https://*.tonxy.pro` in order to allow the user to navigate between pages and sites.

**The server does not collect any user data.**

Take a look at the actual `/nginx.conf` to better understand the mirroring process.