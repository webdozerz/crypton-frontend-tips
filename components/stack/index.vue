<template>
  <div>
    <v-card
      elevation="2"
      class="stack__wrap"
    >
      <p>
        Начнем со стека основных технологий, используемых фронтами в Crypton.Studio.
      </p>
      <p>
        Ссылки откроются в новом окне.
      </p>
      <ul>
        <li>
          <a
            href="https://learn.javascript.ru/"
            target="_blank"
          >
            JavaScript (ES2015+)
          </a> - Куда же без него. Знать обязательно.
        </li>
        <li>
          <a
            href="https://vuejs.org/"
            target="_blank"
          >
            Vue
          </a> - Не знаешь Vue -> в NuxtJS пока не лезь.
        </li>
        <li>
          <a
            href="https://ru.nuxtjs.org/"
            target="_blank"
          >
            NuxtJS
          </a> - Vue фреймворк (фреймворк для фреймворка).
        </li>
        <li>
          <a
            href="https://bootstrap-vue.org/"
            target="_blank"
          >
            BootstrapVue
          </a> - Почти в каждом проекте. Используем редко. В основном - из-за таблиц.
        </li>
        <li>
          <a
            href="https://sass-lang.com/"
            target="_blank"
          >
            SASS (Синтаксис SCSS)
          </a> - Преподцессор для CSS. Используем для создания красивых вложенностей, миксинов и так далее.
        </li>
      </ul>
      <p>
        Библиотеки, с которыми ты будешь работать:
      </p>
      <ul>
        <li>
          <a
            href="https://axios.nuxtjs.org/"
            target="_blank"
          >
            Axios
          </a> - HTTP-клиент, основанный на промисах.
        </li>
        <li>
          <a
            href="https://vee-validate.logaretm.com/"
            target="_blank"
          >
            VeeValidate
          </a> - Библиотека для валидации форм.
        </li>
        <li>
          <a
            href="https://i18n.nuxtjs.org/"
            target="_blank"
          >
            i18n
          </a> - Локализация
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/bignumber.js"
            target="_blank"
          >
            BigNumber.js
          </a> - Библиотека JavaScript для десятичной и недесятичной арифметики произвольной точности.
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/chart.js"
            target="_blank"
          >
            Chart.js
          </a> - Библиотека для построения графиков.
        </li>
      </ul>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Stack',
};
</script>

<style lang="scss" scoped>
.stack {
  &__wrap {
    padding: 10px;
  }
}
</style>
