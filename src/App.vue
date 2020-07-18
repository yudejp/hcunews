<template>
  <div id="app">
    <front @change-locale="changeLocale" />
  </div>
</template>

<script>
import front from './components/front.vue'

export default {
  name: 'App',
  components: {
    front
  },
  metaInfo() {
  return { title: this.$t("message.welcome") }
},
methods: {
    changeLocale() {
      this.$i18n.locale = (this.$i18n.locale === 'ja') ? 'en' : 'ja';
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP");
body { font-family: "Noto Sans JP"; }
</style>