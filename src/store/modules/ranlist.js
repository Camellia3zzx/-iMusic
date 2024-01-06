export default {
  namespaced: true,
  state: {
    // 排行榜信息
    songurl: '', // 歌曲播放地址
    thumbnailrank: ''// 图片缩略图
  },

  mutations: {
    setSongUrl2 (state, newSongU) {
      state.songurl = newSongU
    },
    setThumbnailrank (state, newThumbnail) {
      state.thumbnailrank = newThumbnail
    }
  },
  actions: {},
  getters: {
    songUrl2: state => state.songurl
  }

}
