<template>
  <div>
    <h4>Работа с Axios</h4>
    <p class="mt-2">
      Для обмена данными с backend, необходимо использовать библиотеку <code>axios</code>.
    </p>
    <p>
      Реализуем обычные запросы. Условно это можно разделить на несколько этапов:
    </p>
    <ul>
      <li>
        Создание <code>actions</code>, <code>mutations</code> (если необходимо) во Vuex.
      </li>
      <li>
        Создание функции в <code>methods</code>.
      </li>
      <li>
        Использование конструкции <code>try...catch</code> внутри функции.
      </li>
      <li>
        Вызов <code>actions</code> внутри конструкции.
      </li>
    </ul>
    <p>
      Пример, реализующий получение данных (GET запрос):
    </p>
    <div
      v-highlight
      class="code"
    >
      <pre class="language-javascript">
            <code>
              // внутри methods
              async getSomethingData() {
                try {
                  const response = await this.$store.dispatch('fetchSomething');
                  if (response?.ok) {
                    // do something
                  }
                } catch (e) {
                  // do something
                }
              };

              // внутри actions
              async fetchSomething({ commit }) {
                const response = await this.$axios.$get('https://example.com/api/method');
                // commit('setSomething', response.result);
                return response;
              }
            </code>
        </pre>
    </div>
    Пример, реализующий отправку данных (POST запрос):
    <div
      v-highlight
      class="code"
    >
      <pre class="language-javascript">
            <code>
              // внутри methods
              async sendSomethingData() {
                try {
                  const payload = {
                    variable: this.value, // Берем из data || computed
                  };

                  const response = await this.$store.dispatch('postSomething', payload);
                  if (response?.ok) {
                    // do something
                  }
                } catch (e) {
                  // do something
                }
              };

              // внутри actions
              async postSomething({ commit }, payload) {
                const response = await this.$axios.$post('https://example.com/api/method', payload);
                // commit('setSomething', response.result);
                return response;
              }
            </code>
        </pre>
    </div>
    <v-alert
      type="info"
      dense
      outlined
      class="code mt-3"
    >
      <p class="mb-0">
        Вы всегда можете найти подробную документацию по нужным методам, добавив к url <code>/api/documentation</code>. Например:
        <a
          href="https://devnet-gate.decimalchain.com/api/documentation#/"
          target="_blank"
          class="red--text"
        >https://devnet-gate.decimalchain.com/api/documentation#/</a>
      </p>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'Axios',
};
</script>

<style lang="scss" scoped>

</style>
