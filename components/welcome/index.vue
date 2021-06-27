<template>
  <div>
    <v-card
      elevation="2"
      class="block__wrap"
    >
      <p>
        Приветствую тебя, юный Frontend-разработчик команды Crypton.studio.
      </p>
      <p>
        Здесь собраны полезные подсказки, которые ты будешь использовать в своей повседневной работе.
      </p>
      <p>
        Список пополняется.
      </p>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
};
</script>
<style lang="scss" scoped>
.block {
  &__wrap {
    padding: 10px;
  }
}
</style>
