// scripts/inject-l2d-waifu.js
hexo.extend.injector.register('body_end', `
<link rel="stylesheet" href="/live2d-plugin/l2d-waifu.css">
<script src="https://unpkg.com/l2d/dist/index.min.js"></script>
<script src="/live2d-plugin/config.js"></script>
<script src="/live2d-plugin/l2d-waifu.js"></script>
`, 'default');