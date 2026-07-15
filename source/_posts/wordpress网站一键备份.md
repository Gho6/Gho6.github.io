---
title: wordpress网站一键备份
tags: 网站
cover: 'https://cloud.touchgaloss.com/uploads/20260701043029956.avif'
abbrlink: 4ff4be91
date: 2024-01-10 16:50:25
---
写于2024.1.10，当时在折腾wordpress

由于自己入侵了自己的网站“樱韵”，自己在匮乏的技术力下，一怒之下把网站删了（幸好我有备份).然而当我打开我的备份插件All-in-One WP Migration时，发现只能上传50MB文件大小，而我的网站有177MB，扩充上传大小需要付费。我当时忍不住怒骂：是哪个**给我推荐的这个备份插件！

***
但是，有困难就一定有解决方法，在技术社区潜水多日，找到了解决办法。

此方法目前只在[All-in-One WP Migration 6.77](https://wanhebin.lanzoui.com/i69af1g)版本中测试有效：

1.我们找到插件编辑器，并选择All-in-One WP Migration。
![](https://www.wanhebin.com/wp-content/uploads/2019/09/All-in-One-WP-Migration-1.png)
2.打开 Constants.php 文件
![](https://www.wanhebin.com/wp-content/uploads/2019/09/All-in-One-WP-Migration-2.png)
3.编辑 Constants.php 文件，点击Ctrl+F 查找 Max File Size这行代码，会发现这行代码出现在282行上下。
![](https://www.wanhebin.com/wp-content/uploads/2019/09/All-in-One-WP-Migration-3.png)
我们把 2 << 28 修改成4294967296（这是以字节为单位，即4GB，根据个人需要来修改），修改后如下图
![](https://www.wanhebin.com/wp-content/uploads/2019/09/All-in-One-WP-Migration-4.png)
4.保存
![](https://www.wanhebin.com/wp-content/uploads/2019/09/All-in-One-WP-Migration-5.png)
5.回到导入功能选型，此时已经测试成功了。

![](https://www.wanhebin.com/wp-content/uploads/2019/09/All-in-One-WP-Migration-6.png)

***
在这个方法下，直接扩充到4GB（改数字其实可以无限扩充，但4GB已经够我用了）
[感谢大佬的教程](https://www.wanhebin.com/blgd/216.html)