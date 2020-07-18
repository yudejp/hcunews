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
