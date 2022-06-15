<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    userInfo: {{userInfo}}
    <br />
    userInfo2: {{userInfo2}}
    <br />
    <button @click="consoleFun">打印按钮</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      userInfo2: {
        a:123,
        b:456
      }
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo
    }
  },
  methods: {
    consoleFun() {
      const u = this.userInfo
      const u2 = this.userInfo2
      u2.c = 4
      u.c = 4
      console.log(u)
      console.log(u2)
      this.$store.commit('setUserInfo', u)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
