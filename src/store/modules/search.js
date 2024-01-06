export default {
  namespaced: true,
  state () {
    // 搜索数据相关
    return {
      key: '', // 用户输入的内容
      searchInfo: {
        thumbnail: '', // 歌曲缩略图
        name: '', // 歌曲名称
        singer: '', // 歌手名称
        songUrl: ''// 歌曲播放地址url
      }
    }
  },
  mutations: { // 用户输入关键字
    setkeyword (state, newKeyword) {
      state.key = newKeyword
    },
    // 返回的歌曲图片
    setThumbnail (state, newThumbnail) {
      state.searchInfo.thumbnail = newThumbnail
    },
    // 返回的歌曲名称
    setname (state, newName) {
      state.searchInfo.name = newName
    },
    // 返回的歌手名称
    setSingername (state, newSinger) {
      state.searchInfo.singer = newSinger
    },
    // 返回的歌曲播放地址
    setSongPlay (state, newSongUrl) {
      state.searchInfo.songUrl = newSongUrl
    }
  },
  actions: {},
  getters: {
    songUrl: state => state.searchInfo.songUrl
  }

}
