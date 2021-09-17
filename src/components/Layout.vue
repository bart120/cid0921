<template>
  <Nav></Nav>
  <div>
    <router-view v-slot="{Component, route}">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
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

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .slide-enter-active,
.slide-leave-active {
  transition: all 2s ease-out;
}


.slide-enter-to {
  position: absolute;
  right: 0;
}


.slide-enter-from {
  position: absolute;
  right: -100%;
}


.slide-leave-to {
  position: absolute;
  left: -100%;
}


.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>
