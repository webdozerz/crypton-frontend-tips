<template>
  <div>
    <v-card
      elevation="2"
      class="wrap"
    >
      <h4>Нотация в JS</h4>
      <p class="mt-3">
        В каждом конкретном языке программирования существует общепризнанный — часто официальный — стандарт кодирования.
      </p>
      <p>
        В нашем случае для переменных и функций используется <code>lower camelCase</code>.
      </p>
      <p>
        Классы именуются в <code>CamelCase</code>.
      </p>
      <p>
        Например, функция, которая будет получать список пользователей от сервера, будет иметь название <code>getUsersList()</code>.
      </p>
      <p>
        Пример с классом будет выглядеть так:
      </p>
      <div
        v-highlight
        class="code"
      >
        <pre
          class="language-javascript"
        >
        <code>
          class EnumerableCollection {
            //some code
          }
        </code>
      </pre>
      </div>
      <p>
        Очень важно для нейминга действий (например, функций) использовать глаголы. Нужно выбирать такой глагол. который соответствует типу действия.
      </p>
      <p>
        Например:
      </p>
      <div
        v-highlight
        class="code"
      >
        <pre
          class="language-javascript"
        >
        <code>
          checkNumberIsEven(number) {
            return number % 2 === 0;
          };
        </code>
      </pre>
      </div>
      <p>
        checkNumberIsEven — хорошее название. Сразу понятно, что функция проверяет число на чётность.
      </p>
      <p>
        Также хорошее название isEven — если эта функция лежит в каком — нибудь /plugins/helpers.js, то даже такого короткого названия более чем достаточно.
      </p>
      <p>
        Для булевых переменных, либо для вычесляемых свойств (computed), необходимо использовать префикс <code>is</code>.
      </p>
      <p>
        Например:
      </p>
      <ul>
        <li>
          <code>
            isEmpty
          </code>
        </li>
        <li>
          <code>
            isValid
          </code>
        </li>
        <li>
          <code>
            isBusy
          </code>
        </li>
      </ul>
      <v-alert
        type="info"
        dense
        outlined
        class="mt-3"
        max-width="1000px"
      >
        Касаемо найминга в CSS. Стоит учитывать, что при использовании bootstrap, такие названия классов, как: <code>.card, .container, .collapse, .row, .col</code> и так далее - будут зарезервированы.
        <p class="mb-0">
          Подробнее, про соглашение по именованию, можно прочитать
          <a
            href="https://ru.bem.info/methodology/naming-convention/#%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B8%D0%BC%D0%B5%D0%BD"
            target="_blank"
            class="red--text"
          >тут</a>.
        </p>
      </v-alert>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Naming',
};
</script>

<style scoped>

</style>
