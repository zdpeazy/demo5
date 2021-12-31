## 下载依赖
```
npm install
```

### 启动
```
star serve
```

### 构建
```
star publish
```

### 开发者本地nginx配置，可以依赖域名开发
```
map $http_upgrade $connection_upgrade {
  default upgrade;
  '' close;
}

server {
    server {
        listen       80;
        server_name  xxx.com;
        charset utf-8;
        autoindex       on;
        autoindex_exact_size    on;
        index index.html;
        
        location ~ / {
            proxy_pass http://127.0.0.1:9001;
            # websocket support
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }
    }
}
```

### 云服务器nginx配置（正则匹配二级目录需要调研）
```
server {
    listen       80;
    server_name  xxx.com;
    root   /web/stars;
    autoindex on;
    add_header Cache-Control "no-cache, must-revalidate";
    location / {
        add_header Access-Control-Allow-Origin *;
    }

    location /demo1 {
        try_files $uri $uri/ /demo1/index.html;
    }
    
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```
