<template>
  <div>
    <h4>Локализация</h4>
    <p class="mt-3">
      Начнем с общего требования
    </p>
    <v-alert
      type="info"
      dense
      outlined
      class="mt-2 code"
    >
      Всегда оборачивайте текст на странице в переменные локализации! Даже если дальнейшая локализация на проекте не предусмотрена.
    </v-alert>
    Приведем пример <code>.json</code> файла с локализацией:
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
              {{ $t('parent.child') }}
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
