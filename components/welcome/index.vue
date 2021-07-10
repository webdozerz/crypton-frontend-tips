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
    <v-card
      elevation="2"
      class="block__wrap mt-2"
    >
      <h4>Выбор IDE</h4>
      <p class="mt-2">
        Лично я рекомендую сразу устанавливать <a
          href="https://www.jetbrains.com/ru-ru/webstorm/"
          target="_blank"
        >WebStorm</a>. Хоть и с временной лицензией.
      </p>
      <p>Причины:</p>
      <ul>
        <li>
          Умное автодополнение кода;
        </li>
        <li>
          Встроенный отладчик;
        </li>
        <li>
          Инструменты для тестирования Karma, Mocha, Protractor и Jest;
        </li>
        <li>
          Интеграция с популярными системами контролями версий.
        </li>
      </ul>
      <p>
        От себя хочу сказать, что в данной IDE самая шикарная реалзиция работы с git.
        Разрешать конфликты при merge не составляет особых проблем.
      </p>
    </v-card>
    <v-card
      elevation="2"
      class="block__wrap mt-2"
    >
      <h4>Подготовка к работе</h4>
      <p class="mt-2">
        Первым дело необходимо установить Node.js. Сейчас практически на всех проектах используется <a
          href="https://nodejs.org/en/blog/release/v12.21.0/"
          target="_blank"
        >12ая версия Node.js</a>. Но, я настоятельно рекомендую уточнять используемую версию ноды у старшего frontend разработчика.
      </p>
      <p>
        После успешной установки Node.js можно проверить, какая версия будет использоваться для сборки проекта.
      </p>
      <p>
        Это можно сделать двумя способами:
      </p>
      <ul>
        <li>
          Используя команду в терминале, находясь в директориии проекта;
          <v-img
            contain
            max-width="400px"
            src="/img/node-js-terminal-check.png"
            alt="Node"
            class="mb-3 mt-2"
          />
        </li>
        <li>
          В вверхнем меню WebStorm открыть пункт WebStorm -> Preferences -> Ввести в поиске nodejs.
          <v-img
            contain
            max-width="690px"
            src="/img/node-js-pref-check.png"
            alt="Node"
            class="mb-3 mt-2"
          />
        </li>
      </ul>
      <v-alert
        type="info"
        dense
        outlined
      >
        Для переключения между версиями Node.js рекомендую использовать
        <a
          href="https://github.com/nvm-sh/nvm"
          target="_blank"
          class="red--text"
        >nvm.</a>
      </v-alert>
    </v-card>
    <v-card
      elevation="2"
      class="block__wrap mt-2"
    >
      <h4>Настройка ESLint</h4>
      <p class="mt-2">
        После установки всех зависимостей на проекте, выполним настройку ESLint.
      </p>
      <p>
        Для этого в вверхнем меню WebStorm откроем пункт WebStorm -> Preferences -> Ввести в поиске eslint.
      </p>
      <p>
        Далее настраиваем ESLint как показано на изображении ниже.
      </p>
      <v-img
        src="/img/eslint-settings.png"
        contain
        max-width="850px"
        alt="Node"
        class="mb-3 mt-2"
      />
      <p>
        Не забудь поставить галочку в пункте "Run eslint --fix on save"
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
