---
title: 中二社解包神器fuckpaz
date: 2023-07-24 10:07:34
tags: gal工具
cover: 'https://cloud.touchgaloss.com/uploads/20260701043022709.avif'
---
之前在*澄空学院*解包研讨找到的工具， Garbro解不全（pazA,pazB）刚开始我不会用，因为连教程都找不到，自己又太菜。。研究好长时间才弄明白，于是写了一篇博文。在b站也有发过。。可以看这个

[https://www.bilibili.com/read/cv21345057](https://www.bilibili.com/read/cv21345057)
***
![](https://i0.hdslb.com/bfs/article/f672f000ad94738052eed9060387ab569e845326.png@1256w_654h_!web-article-pic.webp)

首先把fuckpaz与paz文件放在同一目录下
最好把paz文件复制一下，单独和fuckpaz.exe放一起。否则到时候可能分不清游戏本体和解包后的文件（就像我一样）

然后，按键盘上的win+R键，调出运行，cmd，确定

![](https://i0.hdslb.com/bfs/article/5b4b96f9a21f789460779a0fed144c103bb225f1.png@!web-article-pic.webp)

***

输入   cd /d  你存放的目录,此处以本人的的电脑为例。 或者直接在目录上调用cmd

![](https://i0.hdslb.com/bfs/article/watermark/33efd91e28a4ffec5ca017f12a1b9c96fd1174ed.png@1256w_828h_!web-article-pic.webp)

***

目录后输入fuckpaz.exe,回车键。接下来的页面可能是这样的（如果不是就按这张图上的数字走。）

![](https://i0.hdslb.com/bfs/article/d9e679d8185ac98de45d4278157d0e7fb10f8ef7.png@!web-article-pic.webp)

***

这些数字，对应的是可解包的游戏的参数。这里我要解包的是trionline 的mov.paz文件，找到参数，21.因此，输入fuckpaz.exe mov.paz 21 回车,当然，不同的游戏和文件输入的也不同。比如我要解包eden的voice.paz文件，就输入fuckpaz.exe voice.paz 7.

之后就能找到我们解包后的文件，在exe目录下，**也就是和fuckpaz.exe在同一个目录。**（推荐将fuckpaz与要解包的文件单独放一起，这样不会乱）

***

如果文件后缀是pazA/pazB之类的，比如mov.paz、mov.pazA、mov.pazB,就把它们全放在同一个文件夹，cmd输入“fuckpaz.exe mov.paz 数字”。