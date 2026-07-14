/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/18/Narcissu 杂谈/index.html","8aea93a9627d095b9444058f1acfd08c"],["/2023/07/18/clannad与summer pockets：reflection blue/index.html","c86f6a65e7052475fbb627d2a0b594d9"],["/2023/07/20/Gal角色杂谈-宫风夕梨/index.html","2aee469d7e3951e16c9b5d61aebf03e0"],["/2023/07/20/一篇文章及简单说明/index.html","fb33fd97c535a9d28f37378df860f43b"],["/2023/07/21/亚托莉 Trinoline 杂谈/index.html","65ef4753dd2b62e793af4bbe9a3910fe"],["/2023/07/24/中二社解包神器fuckpaz/index.html","2d416f8e7730f47f589f48e55c87b30b"],["/2023/07/31/一次krkr引擎Gal汉化杂谈/index.html","ef65c4a7b74e19dc8fe095a2318db44e"],["/2023/08/02/收集网络资源的一些说明/index.html","b1b1f1b09f90fbee2dff8b80adb881d7"],["/2023/08/04/aurora的第一篇文章：介绍/index.html","38fbd71094ed756a8eff57ca5122081b"],["/2023/08/04/关于Galgame的一些误解/index.html","d2eb694b83b87666e14d3094c7fd73c6"],["/2023/08/04/美少女万华镜5：理与迷宫的少女杂谈/index.html","b8708af23bac5ccdcf31a4c8982f98b5"],["/2023/08/06/推荐给新人的几部galgame/index.html","171b88a40dd7be385570c4df545ec5f7"],["/2023/08/07/一些说明和找资源的途径/index.html","c8b19b643cfe1d9592e11735a7cfc48f"],["/2023/10/08/视觉小说常用模拟器和解包工具/index.html","ff3aafe3db519b57c3e5a585c502bfbc"],["/2023/10/27/《GINKA》解包记录及作品简评/index.html","d82d4684dcd62990a1f03f6b1b9782a7"],["/2023/12/16/【怀旧向】再看一眼恋爱游戏网/index.html","b19fc39d0b547abbfa40bfd41abb6eed"],["/2023/12/16/拥有一个自己的QQ机器人？gocq部署zerobot心得/index.html","e741e9ac483536aa27649223bb69f7b4"],["/2023/12/16/模拟器不会用？ios系统狂喜，试试云电脑推视觉小说吧!/index.html","1af38b9d7ec73ce2e1a5a4db494c1dec"],["/2023/12/17/aurora的两个个人主页源码分享/index.html","64f6431cc265ca09d14294bfcd4ba454"],["/2023/12/18/css选择器的学习笔记/index.html","661178d9f013047a75c0b47ad96a642f"],["/2023/12/19/Galgame-汉化破解初级教程：以-BGI-为例，从解包到测试/index.html","a47377cc44b8d5afd02a4a621a8ea675"],["/2023/12/24/【游戏推荐，柚子社】夏空彼方/index.html","9cc8d5ea597ee24b5f6a187dcc0fc264"],["/2023/12/24/给打算学医学类专业的人的一些建议/index.html","a07af32a4dff33bb3f1ba60f9e308cda"],["/2023/12/25/【实践笔记】搭建alist网盘/index.html","5d28a30b58efb4c825486bb7f1c79854"],["/2023/12/27/【感想】使用Alist后随便写写/index.html","01aadef58be13e38f2d6d08ebca7642e"],["/2023/12/28/【技术向】破解压缩包密码/index.html","1740c0d276e45380d7e114b4709e2fc0"],["/2023/12/31/【实践向】樱韵建站笔记/index.html","ccc3ddb6476e6a2c9e9a7b9d194aeb1f"],["/2024/01/04/非常好的搜索引擎，让我的大脑旋转/index.html","1ea63b276cf13efba79166c90c92e1e5"],["/2024/01/06/部署QQ机器人中/index.html","578175fb1ab66af029109467d90b6b30"],["/2024/01/10/wordpress网站一键备份/index.html","de4c89aaaa1653bf8d86442cf56a708c"],["/2024/01/23/【新人向】教你玩galgame-大佬勿喷/index.html","a3333914c9a03893a0f8593b196f92e3"],["/2024/01/24/【1000-TB】Alist网盘/index.html","c1a0c7637225ae80eac7eda0d553b63c"],["/2024/01/27/“【抛砖引玉】找冷门同人gal的一些方法”/index.html","5a6ee4ed69614db3dc7274e8b27ee565"],["/2024/01/27/【小测试】全国柚子厨选拔考试/index.html","2a9bb4c5ffc7e4763653b171b4a74bf9"],["/2024/01/29/零代码开发简单游戏/index.html","db4472408b206d1def78fcb1643f61f8"],["/2024/01/31/【免费开源】AI语音合成工具——效果堪比真人/index.html","8405a8bdffcf4c2ab3ee42e000a347ea"],["/2024/01/31/如何访问一些外国技术类网站/index.html","bbe10e18319b3d72f62aae83fcf77297"],["/2024/02/07/查看帖子隐藏内容？偷看倒卖站点帖子隐藏内容/index.html","55642ca70bd469d08f4324e4e2ae996a"],["/2024/02/10/github下载和访问慢？通过镜像站下载/index.html","66d1c080ab4e845437bca33f1b53032d"],["/2024/02/13/零成本建站：免费搭建一个自己的网站（一）/index.html","8bbd692c5dec1e58ca2928f7f10b8eac"],["/2024/02/14/零成本建站：免费搭建一个自己的网站（二）/index.html","211b214dea8d996e2cf55a7cca9c83e3"],["/2024/02/17/如何管理多个博客网站/index.html","ea26c776ba73716774cad23781193362"],["/2024/02/25/hexo加密插件分享/index.html","f0bf40843e8c554cba2529da79af17b7"],["/2024/02/29/制作Galgame-——lightvn引擎教程(一)/index.html","67c2a4557e64e24298864fb55d2ca161"],["/2024/03/02/【制作视觉小说】lightvn引擎学习/index.html","3e41e1e38247308bbd6db3787a026b68"],["/2024/03/14/群内小游戏制作中/index.html","5714ab66f9395f8d8e3c2c76fe0c9f0f"],["/2024/03/17/参与gal开发工作/index.html","798b87b8166d1c3b935e9a0b8d9d0b90"],["/2024/03/23/【杂谈】关于亚托莉动画化/index.html","0cf48b768f14f397495951c2d2a3832e"],["/2024/03/29/水仙十周年杂谈/index.html","a5489ed6dd0ae861dff140b931560ee7"],["/2024/04/06/自己写的light-vn引擎教程合集/index.html","bd501efe8fb36309f49139e8d15219f5"],["/2024/04/08/【杂谈向】最喜欢的几部galgame/index.html","84850feaec477395a3eb4ec6085201cc"],["/2024/04/21/分享几部拯救电子养胃的galgame/index.html","ea24cf2f1b79c5a003cfffbe96ec7b7b"],["/2024/05/23/记录一下我的一些剧本灵感/index.html","7c9fe9b2d37f25c3a26619d866a41062"],["/2024/06/03/《水仙》全家桶介绍/index.html","168108388237719838f0a1eccce2f1de"],["/2024/06/14/零成本建站和搭建图床/index.html","2b8add88a50dbad14ff71854d34543e8"],["/2024/06/22/低成本建站记录/index.html","f586541a5e5c8935191cfce71f100d63"],["/2024/06/23/Narcissu全文本/index.html","0111f7517e0bb7b73b485f4f562b7512"],["/2024/06/23/Narcissu小说/index.html","2a59b653069e0b1c7ad63e5192292f56"],["/2024/06/25/island剧情分析/index.html","2f6f20f579aaf580de97fbefce2ba06f"],["/2024/06/25/浅谈国内gal资源站的困境/index.html","dc701a3fb13f8709ffa11115b2328ad0"],["/2024/06/26/【推荐】一些催泪、深刻的galgame/index.html","4eb1dc073e13505168a73a018d494096"],["/2024/06/26/【杂谈】柚子社历史/index.html","7a72a0154acfa345e1beec5986709f13"],["/2024/06/26/【解包记录】island/index.html","c7170e252869d40e67769e603cdb13f7"],["/2024/06/27/【个人学习笔记】《ambitious-mission-FD1》汉化程序记录/index.html","1fa9d69529067c81accdff4ee34c105a"],["/2024/06/28/gal圈的记忆——时代的眼泪的网站/index.html","d85fdee148a3b4ce84a4da48fdf83162"],["/2024/06/28/印象深刻的galgame/index.html","f98ae79ccf8d28be004ee5c1c7f50bf4"],["/2024/06/29/搭建flarum论坛/index.html","86d0a2e704a0710ed4e8f182ae3c04e0"],["/404.html","e22caa3e7ddd0dd8101d82bb3fcbd2dd"],["/about/index.html","581ed9b5f613e50c195477a98302f795"],["/archives/2023/07/index.html","2376705860b1ba10b6cea33fef36a605"],["/archives/2023/08/index.html","2139a60ced12d30d6a97b1c5115c6632"],["/archives/2023/10/index.html","3e5075bbe268d7d2f305dc24ade45b1d"],["/archives/2023/12/index.html","38ea42931bc57807e87c3d7943b96017"],["/archives/2023/12/page/2/index.html","5fb0ab0377466166e9f80ea09347eeae"],["/archives/2023/index.html","359b38e809c85645468ac116fd6ab045"],["/archives/2023/page/2/index.html","3c53d2d7bd0c904808b63bd463f0c16b"],["/archives/2023/page/3/index.html","05c18d0c32d8e636d55e0231ae7ded47"],["/archives/2024/01/index.html","b780cdea830da95907d709f8ecaa9c83"],["/archives/2024/02/index.html","c5a6f1b90564ca0de4b2b177d2d08000"],["/archives/2024/03/index.html","7488616ebcac6c3bedff8c5117930c1d"],["/archives/2024/04/index.html","fb88f9963a6a975395654b564cf0bc6e"],["/archives/2024/05/index.html","90bc06bf28f84cdc55c2965ddad1d755"],["/archives/2024/06/index.html","f0f651f85f584c98241ad1fe28609f80"],["/archives/2024/06/page/2/index.html","628462ffd1479f67c56800fc2ef2212c"],["/archives/2024/index.html","5d7268b249d4aa932fa4d1aa214d71c9"],["/archives/2024/page/2/index.html","d8ab3cbe6a7b48c89e55712b207023c8"],["/archives/2024/page/3/index.html","f1fbe0f08912f8994ee935212354e26a"],["/archives/2024/page/4/index.html","61d2d392240b77e47084d3941450de65"],["/archives/index.html","e5c4f130ff03c634d8d94134f88cfbd2"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/index.html","200d5e1fdef453c5efdfda0a2e66c290"],["/css/app.css","ebad8776ff7e72712f3ed7c8a3bda451"],["/css/comment.css","bd967f589b271e0724a86fec0bd55808"],["/css/mermaid.css","c66db1b09a670a8a932f5941155d4d4b"],["/friends/index.html","10ffeac126cf78791ec3d26eb57bea4c"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","72f2710108ff4160fc928066833cf937"],["/images/logo.svg","e67639a80e9511587a08359bc7740624"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","b3e68042b2263757df68d1be2cfe9ea3"],["/index.html","03b8bd3de0f9d1561acce122ae1c8fa1"],["/js/app.js","e651d689d43d907a16f9cb55c947e043"],["/liaotian/index.html","bd096218a501d681de8cc044c68e0fd9"],["/liuyan/index.html","27c0952782e1f2bd0cd4f529a7f4703e"],["/page/2/index.html","bff90974e6f58d2cef9b40e5757cf67a"],["/page/3/index.html","89ba5167668c1ec4fe281f80f49c2e1b"],["/page/4/index.html","e3afe18a6fbf3856cf86264e16c0a1b9"],["/page/5/index.html","6f625b75d231a57261aef5596bd750e6"],["/page/6/index.html","95c5005c8222aedc045a649d8f6737ee"],["/page/7/index.html","babd8e225b5f33c74194046ee07295fa"],["/sw-register.js","3173df0808bdde98d5f389b41d314e32"],["/tags/Gal杂谈/index.html","6be059419725677a4cc67cea66705940"],["/tags/QQ机器人/index.html","f7e872f615879478162f32409222789a"],["/tags/gal/index.html","801163f128f0d77eff438d592aaeb58d"],["/tags/galgame/index.html","a038f9d3189d3f1046b69b27a2e80b94"],["/tags/gal工具/index.html","a13945b780996958ed90ea358ce361c7"],["/tags/gal测评/index.html","00d33463578b1f06b8026c5204279726"],["/tags/index.html","79cc99fa8fd54606ce822a24ff85887a"],["/tags/技术/index.html","a063d51e86a2860cbfb956e48b09e794"],["/tags/技术向/index.html","63a20aff68a3a6bd2f05dc9f49d3c09d"],["/tags/日常/index.html","3a4a44df96277ca49fd6bed87c3b5650"],["/tags/杂谈/index.html","9fe7cba1a1f65cee005518cff48db092"],["/tags/网站/index.html","749b486f975df31dc2c04e806e316090"],["/tags/视觉小说工具/index.html","9aa6207369b30c003cea6cd430f9ae1f"],["/tags/视觉小说技术，视觉小说测评/index.html","0670a299abb2fafc7cecc31f1e99d723"],["/tags/闲聊/index.html","761d0faaf9e71d1c722b5b1aa9ee9d3e"],["/tags/随想/index.html","2b2c5ed47c9b6b2dcaa51ea5c2e334e4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
