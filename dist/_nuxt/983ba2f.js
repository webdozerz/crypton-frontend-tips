(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{311:function(t,e,r){"use strict";var n=r(162);e.a=n.a},329:function(t,e,r){var content=r(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("5db1c400",content,!0,{sourceMap:!1})},330:function(t,e,r){var n=r(15)(!1);n.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=n},335:function(t,e,r){"use strict";r(3),r(2),r(1),r(4),r(5);var n=r(0),o=(r(45),r(329),r(76)),l=r(311),c=r(90),v=r(49),d=r(33),_=r(7).default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=r(11),m=r(14);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(h.a)(o.a,v.a,_).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(n.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},o.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||d.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},355:function(t,e,r){"use strict";r.r(e);var n={name:"I18n"},o=r(75),l=r(163),c=r.n(l),v=r(335),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h4",[t._v("Общее требование")]),t._v(" "),r("v-alert",{staticClass:"mt-2 code",attrs:{type:"info",dense:"",outlined:""}},[t._v("\n    Всегда оборачивайте текст на странице в переменные локализации! Даже если дальнейшая локализация на проекте не предусмотрена.\n  ")]),t._v(" "),r("h4",[t._v("\n    Установка и настройка библиотеки nuxt-i18n\n  ")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code"},[t._m(2)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code"},[t._m(5)]),t._v(" "),t._m(6),t._v(" "),r("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code"},[t._m(7)]),t._v(" "),r("h4",[t._v("Пример использования")]),t._v(" "),t._m(8),t._v(" "),r("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code"},[t._m(9)]),t._v(" "),r("p",[t._v("\n    Вывод текста из .json файла локализации:\n  ")]),t._v(" "),r("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code"},[t._m(10)]),t._v(" "),r("p",[t._v("\n    Для переключения языка необходимо вызвать следующую функцию:\n  ")]),t._v(" "),r("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code"},[t._m(11)]),t._v(" "),t._m(12),t._v(" "),r("v-alert",{staticClass:"mt-2 code",attrs:{type:"info",dense:"",outlined:""}},[t._v("\n    Библиотека nuxt-i18n сама применит нужную локализацию на сайте в соответствии с текущим языком браузера.\n  ")])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"mt-2"},[t._v("\n    Для реализации локализации проекта необходимо установить библиотеку "),r("a",{attrs:{href:"https://i18n.nuxtjs.org/",target:"_blank"}},[t._v("\n      nuxt-i18n\n    ")]),t._v(" командой "),r("code",[t._v("npm install nuxt-i18n")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    После этого в файле "),r("code",[t._v("nuxt.config.js")]),t._v(" в секции "),r("code",[t._v("modules")]),t._v(" необходимо добавить следующее:\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("pre",{staticClass:"language-javascript"},[t._v("      "),r("code",[t._v("\n        modules: [\n          'nuxt-i18n',\n        ],\n      ")]),t._v("\n    ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    Далее создайте в корне проекта папку "),r("code",[t._v("locales")]),t._v(". Внутри нее создайте "),r("code",[t._v(".json")]),t._v(" файл с локализацией. Например, "),r("code",[t._v("localeEn")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    В самом начале файла "),r("code",[t._v("nuxt.config.js")]),t._v(", до "),r("code",[t._v("export default {}")]),t._v(", импортируйте "),r("code",[t._v(".json")]),t._v(" файл с локализацией.\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("pre",{staticClass:"language-javascript"},[t._v("      "),r("code",[t._v("\n        import localeEn from './locales/en.json';\n      ")]),t._v("\n    ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    После закрытия секции "),r("code",[t._v("modules")]),t._v(" добавьте следующее:\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("pre",{staticClass:"language-javascript"},[t._v("      "),r("code",[t._v("\n         i18n: {\n          locales: ['en'],\n          defaultLocale: 'en',\n          strategy: 'no_prefix',\n          vueI18n: {\n            messages: {\n              en: localeEn,\n            },\n          },\n          detectBrowserLanguage: {\n            useCookie: true,\n            cookieKey: 'i18n_redirected',\n            alwaysRedirect: true,\n          },\n        },\n      ")]),t._v("\n    ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"mt-2"},[t._v("\n    Приведем пример "),r("code",[t._v(".json")]),t._v(" файла с локализацией:\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("pre",{staticClass:"language-javascript"},[t._v("          "),r("code",[t._v('\n            {\n              "signIn": "Sign In",\n              "header": {\n                "title": "My blockchain website",\n                "links": {\n                  "about": "About"\n                }\n              }\n            }\n          ')]),t._v("\n      ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("pre",{pre:!0,attrs:{class:"language-javascript"}},[t._v("          "),r("code",[t._v("\n            {{ $t('header.title') }}\n          ")]),t._v("\n      ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("pre",{pre:!0,attrs:{class:"language-javascript"}},[t._v("      "),r("code",[t._v("\n        changeLanguage(locale) {\n          this.$i18n.setLocale(locale);\n        }\n      ")]),t._v("\n      ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    Где вместо locale необходимо передать код локализации. Например, "),r("code",[t._v("this.$i18n.setLocale('en')")]),t._v(" или "),r("code",[t._v("this.$i18n.setLocale('ru')")]),t._v(".\n  ")])}],!1,null,"b9495a20",null);e.default=component.exports;c()(component,{VAlert:v.a})}}]);