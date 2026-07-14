/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/18/Narcissu 杂谈/index.html","08fa1bf317191b296d9b648b38091bbb"],["/2023/07/18/clannad与summer pockets：reflection blue/index.html","0c8040870bade6bdcab76f600d8f56ae"],["/2023/07/20/Gal角色杂谈-宫风夕梨/index.html","9d7fed23feba24198da4224b5618012c"],["/2023/07/20/一篇文章及简单说明/index.html","f4714b438f7f2f3bfcbc6d6c82f1675d"],["/2023/07/21/亚托莉 Trinoline 杂谈/index.html","d8d7738d85597ed3f556966cba868a56"],["/2023/07/24/中二社解包神器fuckpaz/index.html","7388bb83b3823962054007a0109636ca"],["/2023/07/31/一次krkr引擎Gal汉化杂谈/index.html","88819b0975880d5277b58f1fe7c99977"],["/2023/08/02/收集网络资源的一些说明/index.html","3636126dd462269dadbfca11db74b2ca"],["/2023/08/04/aurora的第一篇文章：介绍/index.html","ac560aca1beec939bde4bb05a6c5ad74"],["/2023/08/04/关于Galgame的一些误解/index.html","f9a47e798b109b59b26ab3e3fb283be2"],["/2023/08/04/美少女万华镜5：理与迷宫的少女杂谈/index.html","3a19dcd8a838e32a253842a0efed9416"],["/2023/08/06/推荐给新人的几部galgame/index.html","017167752104339783c0510d5d3d61fb"],["/2023/08/07/一些说明和找资源的途径/index.html","94a80d9743f3665cfeb52f4edbe85af2"],["/2023/10/08/视觉小说常用模拟器和解包工具/index.html","de627021dbf89786f65ae2288af5fda3"],["/2023/10/27/《GINKA》解包记录及作品简评/index.html","384c82bb45423abd1dadcbc379f5663d"],["/2023/12/16/【怀旧向】再看一眼恋爱游戏网/index.html","b8af60db7eaddacfa50d4fdb3c177d10"],["/2023/12/16/拥有一个自己的QQ机器人？gocq部署zerobot心得/index.html","658eb48b880ed594a6b5c0aca9874a0a"],["/2023/12/16/模拟器不会用？ios系统狂喜，试试云电脑推视觉小说吧!/index.html","6b030505867933b3a1fa33968e94a7f8"],["/2023/12/17/aurora的两个个人主页源码分享/index.html","cb9adfc2a5e6fd7e6c49280bb2b72931"],["/2023/12/18/css选择器的学习笔记/index.html","2de662f2eba94d3f0fd90211d73f29fb"],["/2023/12/19/Galgame-汉化破解初级教程：以-BGI-为例，从解包到测试/index.html","7cf3d5488b627628b9c4b81bd94456d6"],["/2023/12/24/【游戏推荐，柚子社】夏空彼方/index.html","440840ba8e72138f805e4be0b7ac512b"],["/2023/12/24/给打算学医学类专业的人的一些建议/index.html","55ba48f663f93897af0b68fa553c1cd2"],["/2023/12/25/【实践笔记】搭建alist网盘/index.html","107a0c1620312147c3d396585063963b"],["/2023/12/27/【感想】使用Alist后随便写写/index.html","34bd5aec6f24a5945894bd3838f1064f"],["/2023/12/28/【技术向】破解压缩包密码/index.html","cf13b08f9232e836113420d344dc2e95"],["/2023/12/31/【实践向】樱韵建站笔记/index.html","d5d7ed7bc315328a40c3ba2b6ea02c41"],["/2024/01/04/非常好的搜索引擎，让我的大脑旋转/index.html","e5bcaf5c687a127ac833f5846ba29b43"],["/2024/01/06/部署QQ机器人中/index.html","55ff095347784ddeb28535e0bcfe0444"],["/2024/01/10/wordpress网站一键备份/index.html","c8545321d41214afea18adad9e426ed6"],["/2024/01/23/【新人向】教你玩galgame-大佬勿喷/index.html","0a1733116a6a3c0239cb336fa82c4b72"],["/2024/01/24/【1000-TB】Alist网盘/index.html","563bde9bd47d17909bec7b65beb0bc0b"],["/2024/01/27/“【抛砖引玉】找冷门同人gal的一些方法”/index.html","be623a17ab5bf13dd5ae042a458a38f9"],["/2024/01/27/【小测试】全国柚子厨选拔考试/index.html","c0343604414b2527fdc1888dfe65aab1"],["/2024/01/29/零代码开发简单游戏/index.html","39c737ca2b5ac56c1a477c95dee4b2b7"],["/2024/01/31/【免费开源】AI语音合成工具——效果堪比真人/index.html","3151ff90974aa23ad93b7a04a2ff6092"],["/2024/01/31/如何访问一些外国技术类网站/index.html","7447d79a9f4fd3733554276e37d09637"],["/2024/02/07/查看帖子隐藏内容？偷看倒卖站点帖子隐藏内容/index.html","903e2dd5a18e226dc4d2f54a762d7fde"],["/2024/02/10/github下载和访问慢？通过镜像站下载/index.html","e6fd71cdc1a2949d2b39f53627659457"],["/2024/02/13/零成本建站：免费搭建一个自己的网站（一）/index.html","77eda2aa8c4cf3d573ca7d1b91326cc4"],["/2024/02/14/零成本建站：免费搭建一个自己的网站（二）/index.html","8e0f53c642d11554f2bd6ddf87f56f23"],["/2024/02/17/如何管理多个博客网站/index.html","432f39694c7cb34e5a237a1200a4322b"],["/2024/02/25/hexo加密插件分享/index.html","be11adb1f565d27057e2016c2085b753"],["/2024/02/29/制作Galgame-——lightvn引擎教程(一)/index.html","95ca9186f398536c059a1ba8144045e6"],["/2024/03/02/【制作视觉小说】lightvn引擎学习/index.html","3d7a644d6340218c187cccc1bd759a63"],["/2024/03/14/群内小游戏制作中/index.html","1d2b1aff6f8b4bb3acbb029cc6c3ed37"],["/2024/03/17/参与gal开发工作/index.html","f8c25f23b80999f7784922630cf40ef2"],["/2024/03/23/【杂谈】关于亚托莉动画化/index.html","aa2cdf6e022ce978bc0c2ef57ff5c213"],["/2024/03/29/水仙十周年杂谈/index.html","55a99bd9d0294ffa88eb313bf3095d86"],["/2024/04/06/自己写的light-vn引擎教程合集/index.html","1bbd6bd0c741b2491087bc4d794126c7"],["/2024/04/08/【杂谈向】最喜欢的几部galgame/index.html","a37acca5c8eb14ffc25989364613be75"],["/2024/04/21/分享几部拯救电子养胃的galgame/index.html","9afad330164df599a5307d7d47204fae"],["/2024/05/23/记录一下我的一些剧本灵感/index.html","644d5ccbbaffb18207a0bcfcc6d0e26f"],["/2024/06/03/《水仙》全家桶介绍/index.html","4fa28677c8ff577cf4b321f979962365"],["/2024/06/14/零成本建站和搭建图床/index.html","269c5b8d778c8b87d5c3c4cdc036f0d0"],["/2024/06/22/低成本建站记录/index.html","d6c76fb8a50ca1508d09a86c95d034b4"],["/2024/06/23/Narcissu全文本/index.html","cbb7878bcbc53b6435b44e0a86e67d2f"],["/2024/06/23/Narcissu小说/index.html","bb3954320a556ff6c124649bdc05e6b9"],["/2024/06/25/island剧情分析/index.html","f7dfdafd67658fb3996ddf4c7bcebb4e"],["/2024/06/25/浅谈国内gal资源站的困境/index.html","f12754a06585267c15ff141eb771e246"],["/2024/06/26/【推荐】一些催泪、深刻的galgame/index.html","bdc1e1b27e1c6e3e3b3eaae7483a71fb"],["/2024/06/26/【杂谈】柚子社历史/index.html","86d329fe7430149501b7c9bcee988bca"],["/2024/06/26/【解包记录】island/index.html","8b4ead9e83587faedf69f1adeda432df"],["/2024/06/27/【个人学习笔记】《ambitious-mission-FD1》汉化程序记录/index.html","5bb5d5bb0279cd05fdaa69c3ff0e6492"],["/2024/06/28/gal圈的记忆——时代的眼泪的网站/index.html","078655eb8bbe8b07c7bda7a5196ca074"],["/2024/06/28/印象深刻的galgame/index.html","90681b2422f3279e2e13f15144506a17"],["/2024/06/29/搭建flarum论坛/index.html","2442f458eb524a3d1531bbde39fb1f93"],["/2026/07/14/博客回归/index.html","1f0591c7c28c03fd0036da210a64c599"],["/404.html","aca71677ba1b747b45a1c261ef739edc"],["/about/index.html","2e372943aec740ec9437828e3c2a9931"],["/archives/2023/07/index.html","652961e74231e57e42bb917b25a2709d"],["/archives/2023/08/index.html","c11799c41fdb35b409d2fdfc9a651ac3"],["/archives/2023/10/index.html","966996d75400ae8bed8a34cf89aef13e"],["/archives/2023/12/index.html","0e8b37fd927844475015f65c4dadbc49"],["/archives/2023/12/page/2/index.html","bfb4a9b20bccbb14bf4bf6a8775293a7"],["/archives/2023/index.html","afa9cf5981452924099d6fee462a55da"],["/archives/2023/page/2/index.html","d433025769a3e9ee485b8de394274d6f"],["/archives/2023/page/3/index.html","6cc4a6fc47efe3a206263e44ed867cd5"],["/archives/2024/01/index.html","58a77fdab15fa0250a62c44b2bab8573"],["/archives/2024/02/index.html","5438030281ac35a5cfeeaac603801721"],["/archives/2024/03/index.html","e2feee14844b84e09200371a62311892"],["/archives/2024/04/index.html","bb3f5772e075824287ffc4feb75ad53e"],["/archives/2024/05/index.html","2f3a8f7815f61ad8e15b12e1c460aedb"],["/archives/2024/06/index.html","1c7ae24ba613d2da8caaf79adfe56535"],["/archives/2024/06/page/2/index.html","a2e150c8e1ba1d0c341162aef41c5d2f"],["/archives/2024/index.html","f2699f78623e33a7151cc2d1f7de77a2"],["/archives/2024/page/2/index.html","2a46c2977dd71e296866da21ed283165"],["/archives/2024/page/3/index.html","12ea1731846543d251078bb5f4cad2dd"],["/archives/2024/page/4/index.html","4cfc6a767d79bfe977e527675b8679f4"],["/archives/2026/07/index.html","10da05f6246b48f7aa431c31b1fd2ef8"],["/archives/2026/index.html","e1e295af82e1bdbf879d1ca5243d0daf"],["/archives/index.html","c2eacf441bdb1cbc3e37aa9562b32e26"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/index.html","e1ce2b3796ba4e580ad08e42b2d76df6"],["/css/app.css","ebad8776ff7e72712f3ed7c8a3bda451"],["/css/comment.css","bd967f589b271e0724a86fec0bd55808"],["/css/mermaid.css","c66db1b09a670a8a932f5941155d4d4b"],["/friends/index.html","a153f0a3cdf78d67543bc3226bc85ef3"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.jpg","72f2710108ff4160fc928066833cf937"],["/images/logo.svg","e67639a80e9511587a08359bc7740624"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","e576cdbf6d4df3f4587202d4795e0887"],["/images/wechatpay.png","b3e68042b2263757df68d1be2cfe9ea3"],["/index.html","a4729c73c31a8833eae8beff22954611"],["/js/app.js","8ac19e33025060019f269b9feeb846cf"],["/liaotian/index.html","00b02a86ef89e4e3158080c8787710ba"],["/liuyan/index.html","d8dfd2787a295be6ca18e12cca2ff1f8"],["/page/2/index.html","5742eacd85232f1f9ae5340a3f8c8308"],["/page/3/index.html","8c08306fe6c1bb33d87d94941d08c270"],["/page/4/index.html","f6f6df003802ca781c419e604cbfbe06"],["/page/5/index.html","7f32e1f0d8bb309977b2b363b5ef253e"],["/page/6/index.html","2a50f5543292b8539fa3b80d302e611d"],["/page/7/index.html","a8034ee1998eaba38ca027c3a3d81285"],["/sw-register.js","c3c9e637128d8eea9150b369a05a157d"],["/tags/Gal杂谈/index.html","65245ee86ff1e7446fd828e8675b9b47"],["/tags/QQ机器人/index.html","6729e5274e666c9188d53e502f0c6afb"],["/tags/gal/index.html","d6d70b8b8c22a696a4a447f97dc5da82"],["/tags/galgame/index.html","9adf5eadb8467452c2999d878a33df65"],["/tags/gal工具/index.html","771480533577ffd264c3700ae6f0f63c"],["/tags/gal测评/index.html","56259c158c1173219d176a42814e0fdd"],["/tags/index.html","a8b203a678f92a89e2dc6689daa8484c"],["/tags/技术/index.html","7036d46cb0a416e8b9eb9b078468c075"],["/tags/技术向/index.html","ea2a58e698aec62284bcb1d9b9433ece"],["/tags/日常/index.html","d6ca206100576daa8825eff1b329d394"],["/tags/杂谈/index.html","be122bded79fd447d0fea84dbcabaeb8"],["/tags/网站/index.html","744d058ba3bfffc0ccaba711e4d84174"],["/tags/视觉小说工具/index.html","10ef8565285e027cd4b62796de105ccd"],["/tags/视觉小说技术，视觉小说测评/index.html","941235295200f093bfff5850e469c7db"],["/tags/闲聊/index.html","c7676e455044d83f353774c68d603d8d"],["/tags/随想/index.html","4faee92055cde0865d238ec2b90754a7"]];
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
