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
            href="https://ru.nuxtjs.org/"
            target="_blank"
          >
            NuxtJS
          </a> - Vue фреймворк (фреймворк для фреймворка).
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
            href="https://learn.javascript.ru/"
            target="_blank"
          >
            JavaScript (ES2015+)
          </a> - Куда же без него. Знать обязательно.
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
        Библиотеки, с которыми ты будешь работать (практически всегда):
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
      </ul>
      Пример, реализующий получение данных (вызываем в actions):
      <div v-highlight>
        <pre class="language-javascript">
            <code>
              async fetchSomething({ commit }) {
              const response = await this.$axios.$get('https://example.com/api/method');
              return response;
            }
            </code>
        </pre>
      </div>
      Пример, реализующий отправку данных:
      <div v-highlight>
        <pre class="language-javascript">
            <code>
              async postSomething({ commit }) {
              const response = await this.$axios.$post('https://example.com/api/method');
              return response;
            }
            </code>
        </pre>
      </div>
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
