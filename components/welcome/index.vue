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
    <v-card
      elevation="2"
      class="block__wrap mt-2"
    >
      <h4>Общая информация</h4>
      <p class="mt-2">
        Если ты новичок, то, скорей всего, ты будешь работать через Pull-реквесты (Github, Bitbucket).
      </p>
      <p>
        Это нужно для того, чтобы твой код смогли проверять более опытные разработчики и оставлять комментарии для дальнейшей доработки.
      </p>
      <p>Не забывай указывать рецензентов.</p>
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
