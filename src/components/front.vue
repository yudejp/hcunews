<template>
<div>
<button type="button" @click="changeLocale">
        {{$t("message.change_locale")}}
      </button>
    <h1>{{$t("message.welcome")}}</h1>
    <p v-html="$t('message.desc')"></p>
    <h2>{{$t("message.whosmaintainer")}}</h2>
      <span v-html="$t('message.desc_maintainer_1')"></span><br>
      <span v-html="$t('message.desc_maintainer_2')"></span>
        <h3>{{$t("message.contact")}}</h3>
    <ul>
            <li>{{$t("message.mail")}}: <a href="mailto:admin@yude.moe">admin@yude.moe</a></li>
            <li>Twitter: <a href="https://twitter.com/yudete">@yudete</a></li>
    </ul>
    <h2>{{$t("message.how")}}</h2>
      <span v-html="$t('message.desc_how_1')"></span><br>
      <span v-html="$t('message.desc_how_2')"></span>
     <ul>
            <li><a href="https://www.hiroshima-cu.ac.jp/news/">お知らせ | 広島市立大学</a></li>
            <li><a href="https://www.hiroshima-cu.ac.jp/news_student/">お知らせ（在学生・保護者の方へ） | 広島市立大学</a></li>
      </ul>
    <h2>{{$t("message.misc")}}</h2>
      <span v-html="$t('message.desc_misc_1')"></span>
    <h2>{{$t("message.related_links")}}</h2>
     <ul>
            <li><a href="https://www.hiroshima-cu.ac.jp/">広島市立大学</a></li>
      </ul>
    <h2>Special Thanks</h2>
    <ul>
            <li><a href="https://ifttt.com/">IFTTT: Every thing works better together</a></li>
            <li><a href="https://vuejs.org/">Vue.js - The Progressive JavaScript Framework.</a></li>
    </ul>
    </div>
</template>

<script>
export default {
  name: 'front',
  methods: {
    changeLocale() {
      this.$emit('change-locale');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
