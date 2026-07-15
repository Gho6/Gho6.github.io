---
title: 【个人学习笔记】《ambitious mission FD1》汉化程序记录
tags: 技术
cover: 'https://proxy.kawaii.cv/https://lain.bgm.tv/r/400/pic/cover/l/67/2d/224415_Y11Hh.jpg'
abbrlink: 45a25b6e
date: 2024-06-27 21:07:22
---
写于2023.11.14，针对krkr引擎的简单破解工作

## <font color=red>本记录只是针对于汉化程序的学习，是一名新人的学习记录（大佬勿喷）。
私自拆包游戏用于商业用途、或者传播可能涉及违法行为，如有相关责任请自负，与本站无关。
</font>

这几天忙着建设新网站（10块钱的主机差评）和部署机器人，以及研究汉化程序和web前端开发。前段阵子把《ambitious mission》通关了，想要立即去玩续作，结果却发现没有汉化。于是自己制作了GPT机翻补丁，现记录一下过程。
程序学习参考了[https://www.bilibili.com/read/cv21304747/](https://www.bilibili.com/read/cv21304747/)

#浏览游戏目录

首先下载游戏，发现里边一堆xp3文件，应该是与krkr引擎脱不了关系了。有个文件吸引了我：**<font color=red>scn.xp3</font>**,再看大小只有十几MB，里边应该是脚本和游戏文本之类的了。于是开始解包scn.xp3文件

#解包

因为是比较新的游戏，猜测用的krkrz引擎，但不确定。先尝试用krkrextract和xp3dumper_gui,均不可以。于是用**krkrdumper**解包，解了出来。我又参考文章[https://blog.ztjal.info/acg](https://blog.ztjal.info/acg "https://blog.ztjal.info/acg") 发现大佬也是用krkrdumper解包的。xp3封包解包完毕。

##继续解包scn文件，GPT翻译后封包
浏览解包出来的文件，非常清晰明了的，那几个scn文件一看就是游戏文本文件，但是直接打是打不开的。
于是我翻了翻我电脑上的工具，首先是freemote,但我解出来的东西，一个scn文件解包出来两个东西...而且我的技术使我无法封装，放弃使用freemote

于是拿出另一款工具：VNTextPatch。（值得一提的是，这个工具用cmd操作起来比较麻烦，可以参考这个链接，有大佬弄出来个图形化操作界面，更方便[https://github.com/XD2333/GalTransl](https://github.com/XD2333/GalTransl)）  但这里我是用的cmd，

打开VNTextPatch的目录，powershell运行，输入：VNTextPatch extractlocal 包含有scn文件的文件夹路径 接收json文件路径，回车（如果输入上边的内容不能执行，输入这个：
.\VNTextPatch extractlocal 包含有scn文件的文件夹路径 接收json文件路径）这样解包出来一堆json文件。

一般的话，因为这个文件还有一堆代码什么的，汉化组可能会把json文件里的日语提取出来给翻译人员（当然你也可以直接改）。但这里我用的是机翻，用Galtransl进行机器翻译，

翻译完后进行封包：输入：VNTextPatch insertlocal 原始scn文件的文件夹路径 包含json文件的文件夹路径 接收新的scn文件的文件夹路径，回车 （如果输入上边的内容不能执行，输入这个：
.\VNTextPatch insertlocal 原始scn文件的文件夹路径 包含json文件的文件夹路径 接收新的scn文件的文件夹路径）这样scn文件就封好了

#最后的封包
因为我只是自己玩，UI汉化、修图都没做，于是就可以直接封了。先去[https://github.com/arcusmaximus/KirikiriTools/releases/tag/1.7](https://github.com/arcusmaximus/KirikiriTools/releases/tag/1.7)下载version.dll文件，接下来用enigma virtual box封装好（使用方法参考文章 [https://www.bilibili.com/read/cv21304747/](https://www.bilibili.com/read/cv21304747/)），最后你应该会得到一份exe文件，先别急着打开，找到游戏原文件以exe.sig为后缀的文件，把他复制一份重命名为：你刚才新得到的exe文件名字.exe.sig

接下来打开游戏就能玩了！