<template>
  <div>
    <v-alert
      type="info"
      dense
      outlined
      class="mt-2 code"
    >
      Всегда оборачивайте текст на странице в переменные локализации. Даже если дальнейшая локализация на проекте не предусмотрена.
    </v-alert>
    Пример json файла с локализацией:
    <div
      v-highlight
      class="code"
    >
      <pre class="language-javascript">
            <code>
              {
                "keyName": "value",
                "parent": {
                  "child": "value",
                  "childSecond": "value"
                }
              }
            </code>
        </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'I18n',
};
</script>

<style lang="scss" scoped>

</style>
