import Vue from 'vue';

import Welcome from '~/components/welcome';
import Stack from '~/components/stack';
import Bem from '~/components/bem';
import I18n from '~/components/i18n';
import Nuxt from '~/components/nuxt';
import Axios from '~/components/axios';
import Start from '~/components/start';
import Naming from '~/components/naming';

Vue.component('welcome', Welcome);
Vue.component('stack', Stack);
Vue.component('bem', Bem);
Vue.component('i18n', I18n);
Vue.component('nuxt-component', Nuxt);
Vue.component('axios', Axios);
Vue.component('start', Start);
Vue.component('naming', Naming);
