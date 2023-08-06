const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  // autoplay: true,
  audio: [
    {
      name: 'コトダマ紬ぐ未来',
      artist: '桥本美雪',
      url: 'http://music.163.com/song/media/outer/url?id=427419615.mp3',
      cover: 'http://p2.music.126.net/yWCEGRrdrNlZMHZJ5ZFrBg==/1366692968105602.jpg?param=130y130',
    },
    {
      name: "DEAR MY WAKER",
      artist: '米仓千寻',
      url: 'http://music.163.com/song/media/outer/url?id=1476476540.mp3',
      cover: 'http://p2.music.126.net/YKJqAPZh6kwBzqHTCArxjA==/109951165293635691.jpg?param=130y130',
    },
    {
      name: 'little explorer',
      artist: '原田ひとみ',
      url: 'http://music.163.com/song/media/outer/url?id=1476476540.mp3',
      cover: 'http://p2.music.126.net/tSRITWmM45KmvQqLk9WOaA==/3275445140058616.jpg?param=130y130',
    },
    {
      name: 'Squall',
      artist: '米仓千寻',
      url: 'http://music.163.com/song/media/outer/url?id=1476476542.mp3',
      cover: 'http://p2.music.126.net/YKJqAPZh6kwBzqHTCArxjA==/109951165293635691.jpg?param=130y130',
    },
    {
      name: '生きとし生けるもの',
      artist: '天宫エリカ',
      url: 'http://music.163.com/song/media/outer/url?id=411315599.mp3',
      cover: 'http://p1.music.126.net/FZX7XAjsmEPGyVOqm4H7aQ==/109951166361039007.jpg?param=130y130',
    }
  ]
});