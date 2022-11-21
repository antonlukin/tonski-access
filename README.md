# TONxy

Use TONxy web service or browser extension to proxy your traffic to the TON private network.

## nginx config
```nginx
server {
    listen 443 ssl http2;
    server_name  ~^(?<subdomain>.+)\.tonxy\.pro$;

    charset utf-8;

    ssl_certificate /etc/letsencrypt/live/tonxy.pro/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tonxy.pro/privkey.pem;

    access_log off;
    error_log off;

    set $skip_cache 0;

    if ($http_cookie ~* "nginx_no_cache|PHPSESSID") {
        set $skip_cache 1;
    }

    if ($request_uri ~* "/ping|/metrics|/nginx_status|/admin|/login|/feed|sitemap(_index)?.xml") {
        set $skip_cache 1;
    }

    location / {
        subs_filter http://(\w*).ton http://$1.tonxy.pro ir;
        subs_filter_types text/css text/javascript application/json application/javascript;

        proxy_set_header Host "${subdomain}.ton";
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Accept-Encoding "";

        proxy_ignore_headers Expires;
        proxy_ignore_headers Cache-Control;
        proxy_set_header Cookie "";

        proxy_pass http://in1.ton.org:8080;

        proxy_cache tonxy;
        proxy_cache_convert_head off;
        proxy_cache_methods GET HEAD;
        proxy_cache_valid 499 502 503 504 10s;
        proxy_cache_valid any 10m;
        proxy_cache_key $request_method$host$uri$is_args$args;

        proxy_no_cache $http_pragma $http_authorization $skip_cache;
        proxy_cache_bypass $http_pragma $http_authorization $skip_cache;

        add_header X-Proxy-Cache $upstream_cache_status;
    }
}
```