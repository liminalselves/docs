# 阈界人格产品文档

基于 [VitePress](https://vitepress.dev/) 构建的产品文档站点。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 5173 端口）
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 部署

构建后静态文件输出至 `.vitepress/dist/`，部署到任意静态文件服务器即可。

### Nginx 示例（端口 9527）

```nginx
server {
    listen 9527;
    server_name docs.liminalselves.top;
    root /opt/docs/.vitepress/dist;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    # 静态资源缓存
    location /images/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

### 快速部署流程

```bash
# 服务器上拉取仓库
git clone https://github.com/liminalselves/docs.git /opt/docs
cd /opt/docs

# 安装依赖并构建
npm install
npm run build

# 将 dist 目录交给 Nginx 即可
```

## 项目结构

```
docs/
├── .vitepress/
│   └── config.mts        # 站点配置（导航、侧边栏、搜索等）
├── public/
│   └── images/           # 文档图片资源
├── index.md              # 首页
├── guide.md              # 产品文档正文
└── package.json
```

## 功能特性

- 分组侧边栏导航
- 全文本地搜索（Ctrl+K）
- 暗色 / 亮色主题切换
- 页内目录（TOC）
- 响应式移动端适配