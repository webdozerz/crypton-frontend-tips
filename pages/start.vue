<template>
  <div>
    <v-card
      elevation="2"
      class="wrap mt-2"
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
      class="wrap mt-2"
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
          Используя команду <code>node -v</code> в терминале, находясь в директориии проекта;
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
        class="code"
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
      class="wrap mt-2"
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
    <v-card
      elevation="2"
      class="wrap mt-2"
    >
      <h4>Дополнительно</h4>
      <v-alert
        type="info"
        dense
        outlined
        class="code mt-3"
      >
        Не забывайте задавать в новом проекте название сайта (<code>title</code>) и его описание (<code>description</code>). Эти данные необходимо заполнить в файле <code>nuxt.config.js</code>. Самому придумывать их не надо. Вы сможете их взять либо из описания проекта в redmine, либо попросить у менеджера проекта. В <code>package.json</code> необходимо указать <code>name</code> проекта. Его можно составить самому, взяв за основу тот же<code>title</code>.
        <p class="mb-0">
          Также в корне проекта должен находиться заполненный <code>readme.md</code> файл.
        </p>
      </v-alert>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Start',
};
</script>

<style scoped>

</style>
