---
title: 【高自定义化】为hexo网站加上可爱的看板娘
tags: 技术
cover: 'https://proxy.kawaii.cv/https://lain.bgm.tv/r/400/pic/cover/l/29/0b/633834_bJoHd.jpg'
date: 2026-08-04 22:59:26
---
前言：这是我2024年写的文章，OhMyLive2D这个项目如今迁移成了l2d-widget。文章写的方法，与现网站的看板娘实现方法并不一样。我当初投稿到B站给我下架了，留作存档。
***
事情起因是，我在玩Live2d，正好看到隔壁站有live2d看板娘,然而隔壁的live2d看板娘、模型我不太喜欢，而且说的话都是官方设定好的、自定义程度太低、还不会发出声音。于是我思考能不能弄个更高级的live2d看板娘玩。  
虽然我学的并不是计算机专业，本人没有计算机基础，但我爱钻研捣鼓。于是开整!

## 获取模型
研究了一下，这些模型都是Live2D Cubism 生产出来的，然而本人没时间没经验、做模型做得很差)。于是我打开万能的b站，发现有好多人自己制作的模型，然而他们把模型都上传到了Liverdviewerex这款软件上。我打开Steam,发现这玩意儿要26块钱，我就破费买了个。  
买完后、在创意工坊发现好多模型，我下载了个在原七海的。在Steam文件夹里找到模型文件，有lpk文件、config.json文件和png文件，这lpk文件一看就是加密打包过的，模型数据需要自己破解。

## 破解模型
遇事不决上github，很快我便在github发现了工具：https://github.com/ihopenot/LpkUnpacker  
根据作者说的、把模型给破解了。  
部署到网站上  
光有模型没用啊，最重要的放网站上才行。于是我找到了一个名为OhMyLive2Dde的项目，我的是hexo网站、于是按照官方配置，配置了一遍。  
怎么配置呢？把我们下载的模型文件放在一个文件夹里，我这里是Live2d文件夹，丢到souce文件夹里  
配置文件改的话，主要改  
```
- path: 'xxxxx'
```

我的是把模型部署到本地，配置示例:      - path: /live2d/Murasame.model3.json，之后重新部署网站就好了  
当然你也可以部署到CDN上，我部署到jsdeliver上、加载速度比较慢，如果你懒得话直接拿走吧:  
这是七海:fastly.jsdelivr.net/gh/auroraisok/CDN1@1.0/character/model0.json  
这是丛雨:https://fastly.jsdelivr.net/gh/auroraisok/CDN1@1.0/live2d/Murasame.model3.json
