import Vue from 'vue';
import VueCodeHighlight from 'vue-code-highlight';
import 'vue-code-highlight/themes/duotone-sea.css';
import 'vue-code-highlight/themes/window.css';
// import 'vue-code-highlight/themes/prism.css';

Vue.use(VueCodeHighlight);
Vue.component('vue-code-highlight', VueCodeHighlight);
