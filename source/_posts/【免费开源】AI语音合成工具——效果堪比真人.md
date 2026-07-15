---
title: 【免费开源】AI语音合成工具——效果堪比真人
tags: 技术
cover: 'https://cloud.touchgaloss.com/uploads/20260627075036385.avif'
abbrlink: 173232f9
date: 2024-01-31 16:09:10
---
对于一个医学生来说，经常访问github能帮助他开阔计算机视野。前几天在github找到了一个[AI语音合成项目](https://github.com/RVC-Boss/GPT-SoVITS/)，截止目前已经有了7.7kstar,后来知道是b站up主“花儿不哭”大佬和他的团队做的开源免费项目，并在b站发了专门的[视频](https://www.bilibili.com/video/BV12g4y1m7Uw/?spm_id_from=333.337.search-card.all.click)。up讲的比较快我最先也没看懂，推荐看[这个视频](https://www.bilibili.com/video/BV1P541117yn/?spm_id_from=333.337.search-card.all.click)。

这门技术制作出的语音，效果堪比真人，有[AI毕导解说红警的](https://www.bilibili.com/video/BV13N411J7gM/?spm_id_from=333.999.0.0)、有[AI东雪莲的](https://www.bilibili.com/video/BV1aQ4y1w7bF/?spm_id_from=333.337.search-card.all.click)，我用来做[gal杂谈视频](https://www.bilibili.com/video/BV1DB42167MJ/?spm_id_from=333.999.0.0)。效果堪比真人，隔壁毕导的话：我真以为是我在解说！！！我心想我什么时候解说过！！！

***
先放一键整合包链接：
https://pan.baidu.com/s/1OE5qL0KreO-ASHwm6Zl9gA?pwd=mqpi（度盘要氪超级会员才能满速下载）
https://www.123pan.com/s/5tIqVv-GVRcv.html（可满速下载但是要注册账号），接下来写一写使用方法。

***
分以下情况：

# 我是小白，我的电脑显卡配置很好，我用的windows系统

直接下载楼上的一键整合包，按[视频](https://www.bilibili.com/video/BV1P541117yn/?spm_id_from=333.337.search-card.all.click)讲解操作。值得注意的是，在人声和背景音乐分离的步骤，我不清楚是不是bug会报错，如果你也报错的话可以试试这个[在线人声背景音乐分离网站](https://vocalremover.org/zh/)。按着视频讲解走就好

***

# 我有一定代码知识，我会用git，我会用github

直接克隆项目地址：

```
git clone https://github.com/RVC-Boss/GPT-SoVITS.git
```
***
创建环境

```
conda create -n gpt-sovits python=3.9
conda activate gpt-sovits
pip install -r requirements.txt
conda install ffmpeg
```

下载以下两个文件到GPT-SoVITS项目根目录

https://huggingface.co/lj1995/VoiceConversionWebUI/blob/main/ffmpeg.exe

https://huggingface.co/lj1995/VoiceConversionWebUI/blob/main/ffprobe.exe

***
下载模型

在GPT_SoVITS\pretrained_models打开终端输入

```
git clone https://huggingface.co/lj1995/GPT-SoVITS
```
***
因为huggingface是国外的，所以可能会克隆失败，那么我们换用国内的镜像

```
git lfs install
git clone https://www.modelscope.cn/models/AI-ModelScope/GPT-SoVITS
```
***
下载完模型后，将模型文件拷到GPT_SoVITS\pretrained_models目录下。
接着到modelscope下载以下模型

```
git clone https://www.modelscope.cn/iic/speech_paraformer-large_asr_nat-zh-cn-16k-common-vocab8404-pytorch.git
​
git clone https://www.modelscope.cn/iic/speech_fsmn_vad_zh-cn-16k-common-pytorch.git
​
git clone https://www.modelscope.cn/iic/punc_ct-transformer_zh-cn-common-vocab272727-pytorch.git
```
***
将以上模型文件放到tools/damo_asr/models目录下。

如果训练的音频数据有杂音的话，还需要下载UVR5模型对音频先进行去噪处理，放到tools/uvr5/uvr5_weights目录下
```
git clone https://huggingface.co/lj1995/VoiceConversionWebUI
```

配置好环境和模型后，在终端输入
```
python webui.py
```
关于报错，如果是“AssertionError: Torch not compiled with CUDA enabled”，说明装的Torch不是CUDA版本的，需要重装对应的CUDA版本的pytorch。

如果在离线批量ASR时报错“KeyError: 'funasr-pipeline is not in the pipelines registry group auto-speech-recognition. Please make sure the correct version of ModelScope library is used.'”，
改“tools\damo_asr\cmd-asr.py”的代码：

```
path_asr='tools/damo_asr/models/speech_paraformer-large_asr_nat-zh-cn-16k-common-vocab8404-pytorch'
path_vad='tools/damo_asr/models/speech_fsmn_vad_zh-cn-16k-common-pytorch'
path_punc='tools/damo_asr/models/punc_ct-transformer_zh-cn-common-vocab272727-pytorch'
path_asr=path_asr if os.path.exists(path_asr)else "damo/speech_paraformer-large_asr_nat-zh-cn-16k-common-vocab8404-pytorch"
path_vad=path_vad if os.path.exists(path_vad)else "damo/speech_fsmn_vad_zh-cn-16k-common-pytorch"
path_punc=path_punc if os.path.exists(path_punc)else "damo/punc_ct-transformer_zh-cn-common-vocab272727-pytorch"
model = AutoModel(model=path_asr,
vad_model=path_vad,
punc_model=path_punc,
#spk_model="damo/speech_campplus_sv_zh-cn_16k-common",
#spk_model_revision="v2.0.0"
)
opt=[]
for name in os.listdir(dir):
try:
text = model.generate(input="%s/%s"%(dir,name),
batch_size_s=300,
hotword='魔搭')
print(f"asr text:{text}")
opt.append("%s/%s|%s|ZH|%s"%(dir,name,opt_name,text))
except:
print(traceback.format_exc())
...
```

接下来和整合包用法一模一样了（累死我了

***
# 我的显卡太垃圾了，我想云端训练怎么办？
[参考视频](https://www.bilibili.com/video/BV1sg4y127GD/?spm_id_from=333.337.search-card.all.click&vd_source=8da73da88cc8aea936d6cad8f00a442d)
给你们两个镜像：[镜像一](https://www.codewithgpu.com/i/RVC-Boss/GPT-SoVITS/GPT-SoVITS)
[镜像二](https://www.codewithgpu.com/i/RVC-Boss/GPT-SoVITS/GPT-SoVITS-Official)

***
# 我是linux系统用户或者macOS用户，想要本地训练
参考[官方文档](https://github.com/RVC-Boss/GPT-SoVITS/blob/main/docs/cn/README.md)，在CSDN逛一逛、知乎逛一逛，b站逛一逛，写教程的人一大堆。

***
# 我不管，我就想白嫖，直接玩
拿走不谢：

https://www.modelscope.cn/studios/xzjosh/Bert-VITS2/summary

https://www.modelscope.cn/studios/xzjosh/GPT-SoVITS/summary
***
训练出的所有的模型请在法律范围内使用。花儿不哭大佬在视频结尾说的一番话，很耐人寻味。思考这种技术，如果落在某讯某飞手里，我们平常人估计很难接触这项技术，使用的话估计也是收费使用的。而开源项目则让这些技术更能服务于大家，而不是掌握在“少数人手里”——开源项目也可以做得很好。背后咬牙切齿的，就是那批赚不到钱、割不到韭菜的人了。