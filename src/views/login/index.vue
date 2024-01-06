<template>
  <div class="container">
    <div @click="$router.push('/')" class="logo"></div>
    <span class="threecircles"><img src="@/assets/Frame 5 (1).png" alt=""></span>
<span class="halfcircle"><img class="halfcircle2" src="@/assets/Intersect.png" alt=""></span>
<span class="wave"><img src="@/assets/Vector 3.png" alt=""></span>
<logsign   :value="isSign" @showisSign="handleChange" @showisIdentify="handleChange" v-show="isSign==='Count'" class="locate"></logsign>
<logsign2 :value="isSign" @isCount="handleChange" v-show="isSign==='Sign'"  class="locate2"></logsign2>
<logsign3 :value="isSign" @showisSign="handleChange" @showisCount="handleChange"  v-show="isSign==='Identify'" class="locate3"></logsign3>
  </div>
</template>

<script>
import logsign from '@/components/logsign.vue'
import logsign2 from '@/components/logsign2.vue'
import logsign3 from '@/components/logsign3.vue'

export default {
  name: 'LoginIndex',
  components: {
    logsign,
    logsign2,
    logsign3
  },
  data () {
    return {
      isSign: 'Count' // 用于切换界面

    }
  },
  methods: {
    handleChange (value) {
      this.isSign = value
    }

  }
}
</script>

<style lang="less" scoped>
.container{
    height: 768px;

    position: relative;
    display: flex;
    background-color: #FFFFFF;

}
.logo{
    position: absolute;
    width: 70px;
    height: 70px;
margin-top: 21px;
margin-left: 31px;
border-radius: 20px;
background-image: url("@/assets/Frame 11.png");
box-shadow: 0px 2px  4px  black;
cursor: pointer;
border: none; /* 移除默认的按钮边框 */
transition: transform 0.3s; /* 添加过渡效果，使浮动更加平滑 */
}
.logo:hover{
    transform: scale(1.1);
}
.threecircles{
width: 577px;
height: 557px;
position: absolute;
margin-left: 220px;
margin-top: 90px;
animation: rotate 5s linear infinite;
transform: translateX(500px);
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.halfcircle{
  position:absolute;
  margin-left: 892px;

}
.halfcircle2{
width: 123%;

}

.wave{
  position:absolute;
  margin-top: 775px;

}
.locate{
  position: absolute;
  margin-left: 1100px;
  margin-top: 150px;
}
.locate2{
  position: absolute;
  margin-left: 1000px;
  margin-top: 50px;
}
.locate3{
  position: absolute;
  margin-left: 1100px;
  margin-top: 200px;
}
</style>
