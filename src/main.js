import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueMeta from "vue-meta"
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(VueMeta)
new Vue({
  render: h => h(App),
}).$mount('#app')

const messages = {
  en: {
    message: {
      welcome: 'About @hcunews',
      desc: 'This account is <strong>unofficial</strong>, and there\'s no guarantee on it.',
      whosmaintainer: 'Who is the maintainer of this account?',
      desc_maintainer_1: 'This account is maintained by yude, the student of HCU, belongs to 1st grade of Department of Information Science.',
      desc_maintainer_2: 'If there\'s problem with tweets or existence of this bot, please contact by the means written below.',
      how: 'How does this bot work?',
      desc_how_1: 'Microsoft Power Automate obtains the RSS feed of HCU web, and when new article is available it posts notification to Twitter.',
      desc_how_2: 'This bot observes to specific urls listed below.',
      misc: 'Misc',
      desc_misc_1: 'If you get multiple notifications of the same article, it\'s just a specification.',
      related_links: 'Links',
      contact: 'Contact',
      mail: 'E-mail',
      change_locale: '日本語で見る'
    }
  },
  ja: {
    message: {
      welcome: '@hcunews について',
      desc: 'このアカウントは<strong>非公式</strong>アカウントです。また、内容を保証するものではありません。',
      whosmaintainer: 'これは誰が管理しているものですか？',
      desc_maintainer_1: 'このアカウントは広島市立大学 情報科学部 1年の yude によって管理されているものです。',
      desc_maintainer_2: 'アカウントがツイートする内容や、存在そのものに何か問題がある場合、下記の連絡先までお願いします。',
      how: 'これはどうやって動いているのですか？',
      desc_how_1: 'Microsoft Power Automate によって広島市立大学WebページのRSSフィードを取得し、新しい記事が投稿されていたらツイートされます。',
      desc_how_2: '尚、次のURLに更新があったときのみツイートされます。',
      misc: 'その他',
      desc_misc_1: '同じ記事が複数回投稿されることがありますが、これは Microsoft Power Automate の仕様上のものです。',
      related_links: '関連リンク',
      contact: '連絡先',
      mail: '電子メール',
      change_locale: 'View in English'
    }
  }
}

const i18n = new VueI18n({
  locale: 'ja',
  messages,
})
new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')
