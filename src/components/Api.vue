<template>
  <button @click="goApi">
    クリック
  </button>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    goApi () {
      axios.get(`${location.href}api/test`)
    }
  }
}
</script>
