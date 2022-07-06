<template>
  <div id="app">
    <h2>{{ name }}</h2>
    <router-link to="/main">首页/</router-link>
    <router-link to="/login">登录</router-link>
    <router-view></router-view>
    <el-button>按钮</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    const name = store.state.name

    return {
      name
    }
  }
})
</script>

<style lang="less"></style>
