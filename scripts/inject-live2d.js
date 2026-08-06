hexo.extend.filter.register('theme_inject', function (injects) {
  injects.bodyEnd.raw(
    'l2d-waifu',
    `
<link rel="stylesheet" href="/live2d-plugin/l2d-waifu.css">
<script src="https://unpkg.com/l2d/dist/index.min.js"></script>
<script src="/live2d-plugin/config.js"></script>
<script src="/live2d-plugin/l2d-waifu.js"></script>
    `,
    {},
    { cache: true }
  );
});