import Vue from 'vue'
import vueMoment from 'vue-moment'
import moment from 'moment'
import store from '@/state/store'
import 'moment/locale/ja'
import 'moment/locale/fr'
import 'moment/locale/en-gb'
moment.locale(store.state.site.language.default)
Vue.use(vueMoment, { moment })
