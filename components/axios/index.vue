<template>
  <div>
    Пример, реализующий получение данных (вызываем в actions):
    <div
      v-highlight
      class="code"
    >
      <pre class="language-javascript">
            <code>
              async fetchSomething({ commit }) {
                const response = await this.$axios.$get('https://example.com/api/method');
                // commit('setSomething', response.result);
                return response;
              }
            </code>
        </pre>
    </div>
    Пример, реализующий отправку данных:
    <div
      v-highlight
      class="code"
    >
      <pre class="language-javascript">
            <code>
              async postSomething({ commit }, payload) {
                const response = await this.$axios.$post('https://example.com/api/method', payload);
                // commit('setSomething', response.result);
                return response;
              }
            </code>
        </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Axios',
};
</script>

<style lang="scss" scoped>

</style>
