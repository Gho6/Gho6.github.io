---
title: 拥有一个自己的QQ机器人？gocq部署zerobot心得（Windows系统）
date: 2023-12-16 10:52:17
tags: QQ机器人
cover: 'https://cloud.touchgaloss.com/uploads/20260627075036385.avif'
---
在2023年11月时,go-cqhttp宣布停止维护，原因大概是腾讯官方的封杀，而现在的情况是，官方机器人尚未成熟，野生机器人较成熟但被封杀。
QQ机器人没有搭建的方法吗？并不是这样，方案有很多，但本人是业余的小白，很多大佬提出的方案可能不懂，于是选择比较简单、可行的方案：继续通过go-cqhttp搭建。关于选择zerobot,因为其功能比较丰富，也比较容易部署（不用瞎折腾）。
***
所需工具：go-cqhttp,zerobot，一台服务器
成本：0元
准备：
<ol>
<li>嫖一台服务器：很多提供商都有免费服务器试用，这里我先选择阿里云（已经嫖了一年了）。新人注册后会有服务器试用三个月的时长，三个月过去后，嫖完服务器后还可以再白嫖无影云电脑三个月。
如果你是学生的话，可以在阿里云搜索“高校计划”，获得300元代金券和一台7个月的服务器。</li>
<li>下载go-cqhttp:打开以下链接：https://github.com/Mrs4s/go-cqhttp/releases/tag/v1.2.0。往下翻到Assets,会发现有很多，因为我们选择的是windows系统，所以下载 go-cqhttp_windows_amd64.exe
或者go-cqhttp_windows_amd64.zip即可
提问：链接打不开？答：因为github是国外网站，处于半墙状态
<ul>方法一：多试几次。</ul>
<ul>方法二：开vpn </ul>
<ul>方法三：下载Steam++ （现更名为 Watt Toolkit），没错就是上steam经常用的，在侧边栏下边能发现github选项，勾选上即可 </ul>
<ul>方法四：下载tor浏览器</ul>
</li>
<li>下载zerobot，有三种方法，在这里推荐本地直接运行和稳定版。

<ul>本地直接运行：打开链接：https://github.com/FloatTech/ZeroBot-Plugin 点击右上角绿色的的code,再点击Download Zip,下载完直接启动就好。机器人的信息全在main.go文件中，用记事本打开就好。修改机器人的名字只需crtl+f搜索 默认昵称，把 椛椛 改成你想要起的名字就好了。把自己设置成管理员，则需要搜索 通过代码写死的方式添加主人账号 ，把代码这样写

***

sus = append(sus, 这里填你自己的QQ号<sub>别傻傻的抄了下去，改成自己的QQ号</sub>) 
// sus = append(sus, 这里随便填)

***
如果要添加插件的话，可参考 https://www.bilibili.com/read/cv22861986/，不需要的功能可以用//注释掉
<font color=blue>还没完，最最重要的一点，在https://studygolang.com/dl 下载Go环境安装部署。需要注意的是，Go的版本需要1.20版本的（亲测1.21版本不能运行机器人），下载时下载amd64.msi。运行的话点击run.ssh后，运行完再运行run.bat就好了</font></ul>

<ul>稳定版：复制以下链接在浏览器打开https://github.com/FloatTech/ZeroBot-Plugin/releases/tag/v1.7.6，找到最新版本的zbp(第一个就是)，同样在Assets中，找到zbp_windows_amd64.zip下载解压，如果直接启动机器人会默认名字叫椛椛，改名字的话参考文档，cmd到zbp.exe的路径，输入：zbp.exe -n 你的机器人的名字。这样机器人就启动了</ul>
</li>
<li>签名服务器和gocq升级。
gocq升级：解压出来的go-cqhttp,运行exe文件，会多出一个bat文件，打开bat文件，让你填数字时填正向连接。它会继续要求你重新运行bat文件，运行一下，会多出device.json文件，不用管。
打开data文件夹里的versions文件夹，新建文件6.json,用记事本对该文件编辑。打开https://github.com/MrXiaoM/qsign/tree/mirai/txlib/，找到最新版本（目前是8.9.90）,打开android_pad.json，把里边的内容全部复制，粘贴到6.json里边，保存。升级完毕
***
签名服务器升级：https://pan.huang1111.cn/s/ZXnvcL 下载一键包，在https://github.com/MrXiaoM/qsign/tree/mirai/txlib下载新的签名服务，右键编辑start.bat，最后一行的最后对应的是签名服务版本（目前似乎只有8.9.85以上的版本才能用）改动数字就可以切换版本了。</li>
<li>登录机器人！先运行zerobot（前文写了如何运行）,再去gocq文件夹里编辑config.yml(记事本打开就好)，uin和password改成机器人的账号（注意：后要有一个空格，还有 ' 这个符号不要删）在sign-servers里的url填签名服务器地址:http://127.0.0.1:服务器端口（端口号需要在unidbg-fetch-qsign-1.1.9\txlib\你选择的服务器版本\config.json文件里的port查看）。备用的话有就填没有就不管。接着是自动注册实例，建议开了。代码改动：
***
 # 由于实现问题，当前建议关闭此项，推荐开启签名服务器的自动注册实例
  auto-register: true
***
最后的代码改成：
***
 # 正向WS设置
  - ws:
      # 正向WS服务器监听地址
      address: 127.0.0.1:6700
      middlewares:
        <<: *default # 引用默认中间件
***
接着启动你的签名服务器（运行unidbg-fetch-qsign-1.1.9里的start.bat），再启动go-cqhttp.bat，登录时有自动提交ticket和手动提交ticket,我自动提交提交不上去，用的手动提交，参考文章https://blog.csdn.net/m0_51607907/article/details/124244034  接下来就是手机号接收验证码，最后现实的登陆成功，恭喜你有自己的QQ机器人啦！</li></ul>

<h2>常见问题</h2>
报错code45。一般有两种情况，一是你机器人的QQ号被封了，解冻一下就好了。二是签名服务和gocq版本太低，这时候就需要升级gocq版本和签名服务版本（前边有写怎么升级）

报错code237:，登录环境异常。这时候需要在自己电脑上，而且手机电脑要连同一个wife距离不超过10米，照着前边的步骤，登录一下gocq。登陆成功后吧session.token文件转移到服务器go-cqhttp目录下就好了。
还有就是你号登录太频繁，过几天再试，没办法。或者换号（237问题很玄学）

签名服务异常闪退：我让ChatGPT帮我写了串代码：
***
import subprocess
import time

def run_bat_program():
    while True:
        # 启动.bat程序
        process = subprocess.Popen(r'C:\Users\Administrator\Downloads\unidbg-fetch-qsign-1.1.9\start.bat', shell=True)
        
        # 等待程序运行完成
        process.wait()
        
        # 检查程序是否正常退出
        if process.returncode == 0:
            print("程序正常退出")
            break
        else:
            print("程序异常退出，将重新启动")
            time.sleep(5)  # 等待5秒后重新启动.bat程序

run_bat_program()

把 C:\Users\Administrator\Downloads\unidbg-fetch-qsign-1.1.9\start.bat 改成你自己的start.bat的路径，保存为.py文件，安装个python运行该py文件就好了，会自动检测程序运行状态并重启。
***

zerobot有很多功能，第一次运行时，你需要把它拉自己的群里，@它发送/响应 才会有反应。发送/服务列表能看见它的功能，挺好玩的，我觉得还不错，可以自己搭建个试试。