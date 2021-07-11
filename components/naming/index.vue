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
