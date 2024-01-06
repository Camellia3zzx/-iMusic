<template>
   <el-container>
<div class="mainbox">
  <!-- 上边框 -->
  <div><img class="substract" src="@/assets/Subtract.png" alt=""></div>
<!-- 标题 -->
<span class="wordtitle">MUSIC UPLOAD</span>
<!-- 搜索框 -->
<div class="Search"><input class="search" type="text"><button class="searchphoto"></button></div>
<!-- 上传音乐和多选 -->
<div><div>
    <input class="file-input" type="file" ref="fileInput" style="display: none;" @change="uploadFile" />
    <button class="upload-button" @click="triggerFileInput">上传文件</button>
  </div>
   <button  @click="toggleBox" class="mutichoice">多选</button>

</div>
<!-- 已上传音乐 -->
<span class="word3">已上传音乐</span>
<ul class="Upload">
  <li v-for="(item,index) in songs" :key="index" class="li1"><div v-if="!hideBox" class="boxex"></div><div :class="{ 'show-style': isBoxVisible,'addBackimg':isBackground[index] }" class="box" @click="addBackgroundimg(index)" ></div><div class="word">
    <span class="word1">歌曲名称</span>
    <span class="word2">歌手</span>
  </div>
  <div class="icon"><img class="images" src="@/assets/Polygon 2.png" alt=""><img class="images" src="@/assets/trash.png" alt=""></div>
</li>

</ul>
</div>
  </el-container>
</template>
<script>
import axios from 'axios'
export default {
  name: 'UploadIndex',
  data () {
    return {
      isBoxVisible: true, // 判断是否进入多选状态
      hideBox: false, // 占位符
      isBackground: Array.from({ length: 8 }).fill(false),
      songs: Array.from({ length: 8 })
      // 这里加上一段音乐占位符
    }
  },

  methods: {
    triggerFileInput () {
      this.$refs.fileInput.click()
    },
    uploadFile (event) {
      const file = event.target.files[0]
      if (file) {
        // 在这里处理文件上传逻辑，可以使用FormData对象进行文件上传
        const formData = new FormData()
        formData.append('file', file)

        // 发送POST请求到服务器进行文件上传
        // 使用Axios库或其他HTTP库发送请求
        // 这里假设你已经在项目中安装了Axios库

        axios.post('/upload-endpoint', formData)
          .then(response => {
            console.log('文件上传成功')
          })
          .catch(error => {
            console.error('文件上传失败', error)
          })
      } else {
        console.error('未选择文件')
      }
    },
    // 判断是否进入多选状态

    // 控制多选方框的显示和隐藏
    toggleBox () {
      this.isBoxVisible = !this.isBoxVisible
      this.hideBox = !this.hideBox
    },
    // 添加打勾样式
    addBackgroundimg (index) {
      this.$set(this.isBackground, index, !this.isBackground[index])
    }
  }
}
</script>

<style lang="less" scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #E2F3FD;
    color: #333;

  }

  .el-main {
    background-color: #FFFFFF;
    color: #333;
    height: 946px;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .mainbox{
    display: flex;
    position: relative;
  }
//标题
.wordtitle{
  position: absolute;
  width: 322px;
  height: 86px;
    font-family:"po" !important;
    font-size: 24px;
    margin-left:-25px;
    margin-top: -65px;

}
.search{
    position: absolute;
    border-radius: 30px;
width: 230px;
height: 46px;
margin-left: 1000px;
margin-top: 66px;
background-color: #E2F3FD;
box-shadow: 0 2px 2px gray;
border: 1px solid #E2F3FD;
padding-left: 15px;
font-size: 20px;

}
.Search{
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
}
.searchphoto{
    position:absolute;
    width: 30px;
    height: 25px;
    background-color: #E2F3FD;
    background-image: url("@/assets/Rectangle.png");
margin-left: 1191px;
margin-top:80px;
background-repeat: no-repeat;
border: none;
cursor: pointer;
transition:transform 0.3s;
}
.searchphoto:hover{
    transform: scale(1.15);
}
.substract{
  position: absolute;
  transform: scale(1.535);
}
.mutichoice{
position: absolute;
  margin-left: 207px;
  margin-top: 66px;
  width: 144.52px;
  height: 46px;
  border-radius: 10px;
  background-color: #5D7289;
  font-size: 20px;
  cursor: pointer;
  color: #FFFFFF;
  border: none;
  box-shadow: 2px 2px 2px gray;
}
.upload{
  position: absolute;
  margin-left: 22px;
  margin-top: 66px;
  width: 144.52px;
  height: 46px;
  border-radius: 10px;
  background-color: #5D7289;
  font-size: 20px;
  cursor: pointer;
  color: #FFFFFF;
  border: none;
  box-shadow: 2px 2px 2px gray;
}
.upload:active,.mutichoice:active{
  animation: buttonClick 100ms linear;
}
.Upload{
  margin-top: 150px;
  margin-left: 20px;
}
.li1{
  float: left;
  list-style-type: none;
  margin-left: 100px;
  margin-top: 70px;
  width: 580px;
  height: 55px;

}
.box{
  width: 40px;
  height: 40px;
  background-color: #E2F3FD;
  border: 1px solid #E2F3FD;
  box-shadow: -2px -2px 3px gray;
  cursor: pointer;
}
.word{
margin-left: -200px;
margin-top: -90px;
}
.word1{
  position: absolute;
  font-size: 20px;
  margin-top: -20px;
}
.word2{
  position: absolute;
  font-size: 20px;
  margin-top: 5px;
}
.icon{
  margin-top: 60px;
  margin-left: 450px;
}
.images{
  float: left;
  cursor: pointer;
  margin-top: -10px;
  transition: transform 0.3s;
}
@keyframes buttonClick {
  0%{
    transform: scale(1.1);
  }
  50%{
    transform: scale(0.8);
  }
 100%{
    transform: scale(1.1);
  }
}
.images:active{
  animation: buttonClick 200ms linear;
}
.images:nth-child(1){
  margin-right:45px ;
  margin-top: -7px;
}
.word3{
position: absolute;
margin-top: 120px;
font-size: 20px;
color: #000;
}
.uploadd{
  position: absolute;

}
.file-input {
  display: none;
}

/* 上传按钮样式 */
.upload-button {
  position: absolute;
  margin-left: 22px;
  margin-top: 66px;
  width: 144.52px;
  height: 46px;
  border-radius: 10px;
  background-color: #5D7289;
  font-size: 20px;
  cursor: pointer;
  color: #FFFFFF;
  border: none;
  box-shadow: 2px 2px 2px gray;
}
.show-style{
  display: none;
}
.boxex{
   width: 40px;
  height: 40px;
}
.addBackimg{
  background-image: url('../../assets/Group\ 120.png');
  border: 1px solid #E2F3FD;
  box-shadow: -2px -2px 3px gray;
}
</style>
