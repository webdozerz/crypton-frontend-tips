<template>
  <div>
    <h4>Общее требование</h4>
    <v-alert
      type="info"
      dense
      outlined
      class="mt-2 code"
    >
      Всегда оборачивайте текст на странице в переменные локализации! Даже если дальнейшая локализация на проекте не предусмотрена.
    </v-alert>
    <h4>
      Установка и настройка библиотеки nuxt-i18n
    </h4>
    <p class="mt-2">
      Для реализации локализации проекта необходимо установить библиотеку <a
        href="https://i18n.nuxtjs.org/"
        target="_blank"
      >
        nuxt-i18n
      </a> командой <code>npm install nuxt-i18n</code>.
    </p>
    <p>
      После этого в файле <code>nuxt.config.js</code> в секции <code>modules</code> необходимо добавить следующее:
    </p>
    <div
      v-highlight
      class="code"
    >
      <pre class="language-javascript">
        <code>
          modules: [
            'nuxt-i18n',
          ],
        </code>
      </pre>
    </div>
    <p>
      Далее создайте в корне проекта папку <code>locales</code>. Внутри нее создайте <code>.json</code> файл с локализацией. Например, <code>localeEn</code>.
    </p>
    <p>
      В самом начале файла <code>nuxt.config.js</code>, до <code>export default {}</code>, импортируйте <code>.json</code> файл с локализацией.
    </p>
    <div
      v-highlight
      class="code"
    >
      <pre class="language-javascript">
        <code>
          import localeEn from './locales/en.json';
        </code>
      </pre>
    </div>
    <p>
      После закрытия секции <code>modules</code> добавьте следующее:
    </p>
    <div
      v-highlight
      class="code"
    >
      <pre class="language-javascript">
        <code>
           i18n: {
            locales: ['en'],
            defaultLocale: 'en',
            strategy: 'no_prefix',
            vueI18n: {
              messages: {
                en: localeEn,
              },
            },
            detectBrowserLanguage: {
              useCookie: true,
              cookieKey: 'i18n_redirected',
              alwaysRedirect: true,
            },
          },
        </code>
      </pre>
    </div>
    <h4>Пример использования</h4>
    <p class="mt-2">
      Приведем пример <code>.json</code> файла с локализацией:
    </p>
    <div
      v-highlight
      class="code"
    >
      <pre class="language-javascript">
            <code>
              {
                "signIn": "Sign In",
                "header": {
                  "title": "My blockchain website",
                  "links": {
                    "about": "About"
                  }
                }
              }
            </code>
        </pre>
    </div>
    <p>
      Вывод текста из .json файла локализации:
    </p>
    <div
      v-highlight
      class="code"
    >
      <pre
        v-pre
        class="language-javascript"
      >
            <code>
              {{ $t('header.title') }}
            </code>
        </pre>
    </div>
    <p>
      Для переключения языка необходимо вызвать следующую функцию:
    </p>
    <div
      v-highlight
      class="code"
    >
      <pre
        v-pre
        class="language-javascript"
      >
        <code>
          changeLanguage(locale) {
            this.$i18n.setLocale(locale);
          }
        </code>
        </pre>
    </div>
    <p>
      Где вместо locale необходимо передать код локализации. Например, <code>this.$i18n.setLocale('en')</code> или <code>this.$i18n.setLocale('ru')</code>.
    </p>
    <v-alert
      type="info"
      dense
      outlined
      class="mt-2 code"
    >
      Библиотека nuxt-i18n сама применит нужную локализацию на сайте в соответствии с текущим языком браузера.
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'I18n',
};
</script>

<style lang="scss" scoped>

</style>
