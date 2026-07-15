---
title: 【解包记录】island
tags: galgame
cover: 'https://proxy.kawaii.cv/https://lain.bgm.tv/r/400/pic/cover/l/29/0b/633834_bJoHd.jpg'
abbrlink: 5f9ce932
date: 2024-06-26 21:10:00
---
写于2024.1.28

今天正好在玩《island》——前翼社的一部全年龄向作品，时间轮回和悬疑类的全年龄作品，推荐大家玩哦！秉着一玩一解包的原则，于是解包《island》。当我打开惯用的Garbro时，发现一些文件解不开。于是记录一下解包过程。
***
<h1>一、如果只提取CG的话...</h1>
https://wwci.lanzouo.com/i33perc  使用这个，直接选择image.int文件，图片格式看自己需求。

优点:方便快捷
缺点:只能提取CG

<h1>二、使用exkifint</h1>
http://asmodean.reverse.net/pages/exkifint.html 这是由外国人制作的，使用起来也不困难，只需基础的命令行知识就好

首先下载后，解压exkifint.zip。将exkifint_v2.exe与你想要提取的Int文件放在同一文件夹，win+R cmd调出命令行。

我们先在命令行运行一下软件，输入软件路径，enter回车，看到：
***

usage: D:\gal\jiebaoceshi\exkifint_v2.exe <input.int> [game id]
         game id = game specific id, probably found in startup.xml (v_code tag)
                   [Default = TSUNABAN-LM]
***
根据我们小学三年级的英语知识能看懂：我们需要int文件的路径和game id,game id在startup.xml里有，是v_code后面的一串字符。于是搜索到xml文件，ctrl+f检索v_code，很容易找到id,复制一下。

每个人的文件夹不同，想解包的文件不同，以我为例，我先看游戏里的视频。我输入了：
D:\gal\jiebaoceshi\exkifint_v2.exe movie.int FW-L3EY8BDY
其中FW-L3EY8BDY是《ISLAND》这款游戏的game id
之后就解包出来文件了

***
游戏使用的是CatSystem2引擎，想要了解更多的小伙伴可参考（文本处理还需要其他软件）
https://ultrapre.github.io/clip/%E5%88%9D%E7%AA%A5Galgame%E6%B1%89%E5%8C%96/2019-10-01-1569942419/index.html

https://www.bilibili.com/video/BV1ph411J7Pf/?vd_source=8da73da88cc8aea936d6cad8f00a442d
