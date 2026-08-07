// scripts/inject-l2d-waifu.js
hexo.extend.injector.register('body_end', `
<!-- 1. l2d 官方渲染库（保持不变） -->
<script src="https://unpkg.com/l2d/dist/index.min.js"></script>

<!-- 2. 【重要】后端动态生成的看板娘配置（替代原 config.js） -->
<script src="https://api.yinghu.asia/watcher/config.js"></script>

<!-- 3. 看板娘插件主文件与样式（推荐从后端引用，确保兼容） -->
<link rel="stylesheet" href="https://api.yinghu.asia/watcher/l2d-waifu.css" />
<script src="https://api.yinghu.asia/watcher/l2d-waifu.js"></script>
`, 'default');