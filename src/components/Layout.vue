<template>
  <Nav></Nav>
  <router-view></router-view>
</template>

<script>
import Nav from './core/Nav.vue'

export default {
  name: 'Layout',
  components:{
    Nav
  },
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
