---
title: 一次krkr引擎Gal汉化杂谈
date: 2023-07-31 22:26:18
tags: 日常
cover: 'https://cloud.touchgaloss.com/uploads/20260627075051717.avif'
---
只是一篇杂谈。或许能帮助其它一些想搞汉化或者机翻的新人（其实主要是充当学习笔记给自己看的）

## 前言

7.28日“时停社”新作《俺の瞳で丸裸！ 不可知な未来と視透かす運命》发布，正好想找部日文原版游戏学习汉化，恰巧新作发售，于是选择了这部作品。

注意！以下内容仅是一名萌新的学习记录，大佬请勿喷

1.

首先观察了几个文件的后缀名，有xp3.虽说不知道具体是什么引擎的游戏，总之和krkr应该是跑不了关系了。通过github下载了krkrextract最新版本，将dll、exe文件复制到游戏目录，将游戏启动文件拖krkrextract.exe，打不开乱码!看样子需要破解补丁。本来在思考怎么去制作破解补丁，结果网上找到了有人破解好的 破解补丁，于是我把破解补丁里的exe文件拖到krkrextract.exe打开，把data.xp3直接往krkrextract的窗口一拖，在解包出来的文件（KrkrExtract_Output）中的data文件夹找到了scenario文件夹，用Emeditor打开其中的文件，确定了是游戏文本文件。

2.

再次用上面的方法打开krkrextract.exe，在Pack Setting栏有个“Make Universal Patch”,点一下，回到游戏目录发现多了个exe文件，这就是你的补丁了。游戏目录新建文件夹 ProjectDir，将文本文件用 日语shift jis编码（否则可能乱码），把文本替换成你的汉化文本，保存。将改动后的文本文件复制到 ProjectDir 文件夹目录中。**最后记得要把krkrextract.db .dl .exe 三个文件移出，打开刚刚的exe程序，就会发现游戏文本被替换掉了。基本成功！


3.

缺陷：关于UI界面以及游戏标题之类汉化需要进阶教程，而且krkrextract不是所有krkr引擎的游戏都能解包的。所以以上方法可以用来配合机翻软件自己搞机翻自己玩。。