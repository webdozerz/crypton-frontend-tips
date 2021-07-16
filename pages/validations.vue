<template>
  <div>
    <v-card
      elevation="2"
      class="wrap"
    >
      <h4>Валидация форм</h4>
      <p class="mt-2">
        Перед отправкой данных на сервер важно убедиться, что все обязательные поля формы заполнены данными в корректном формате. Это называется валидацией на стороне клиента и помогает убедиться, что данные, введённые в каждый элемент формы, соответствуют требованиям.
      </p>
      <p>
        Для валидации необходимо использовать библиотеку <code>VeeValidate</code>.
      </p>
      <p>
        Валидация формы должна состоять из следующих составляющих:
      </p>
      <ul>
        <li>
          <code>ValidationObserver</code>
        </li>
        <li>
          Тег <code>form</code>
        </li>
        <li>
          <code>ValidationProvider</code>
        </li>
      </ul>
      <h4>Пример валидации</h4>
      <p class="mt-2">
        В качестве примера будет служить форма авторизации
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
              &lt;ValidationObserver
                  ref="observerSignIn"
                  v-slot="{ handleSubmit }"
              >
                 &lt;form
                    action=""
                    @submit.prevent="handleSubmit(signIn)"
                >
                   &lt;div class="auth__fields">
                     &lt;ValidationProvider
                        v-slot="{ errors }"
                        :rules="'required|email'"
                    >
                       &lt;ctm-field
                          v-model="model.email"
                          :placeholder="$t('placeholders.email')"
                          autocomplete="username"
                          :label="$t('fields.email')"
                          :error-text="errors[0]"
                      />
                     &lt;/ValidationProvider>
                     &lt;ValidationProvider
                        v-slot="{ errors }"
                        :rules="'required'"
                    >
                       &lt;ctm-field
                          v-model="model.password"
                          autocomplete="password"
                          :type="'password'"
                          :placeholder="$t('placeholders.password')"
                          :label="$t('fields.password')"
                          :error-text="errors[0]"
                      />
                     &lt;/ValidationProvider>
                   &lt;/div>
                   &lt;button
                      type="submit"
                   >
                    {{ $t('buttons.signIn') }}
                   &lt;/button>
                 &lt;/form>
               &lt;/ValidationObserver>
            </code>
      </pre>
      </div>
      <v-alert
        type="info"
        dense
        outlined
        class="mt-3"
        max-width="1000px"
      >
        Вы можете сократить код, представленный выше, добавив <code>ValidationProvider</code> в сам компонент с <code>input</code> (в данном примере - ctm-field), передав в него необходимые <code>rules</code> и <code>name</code>, используя <code>props</code>.
      </v-alert>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Validations',
};
</script>

<style scoped>

</style>
