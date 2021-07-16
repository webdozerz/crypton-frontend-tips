<template>
  <div class="bem">
    <v-card
      elevation="2"
      class="wrap mt-3"
    >
      <h4>
        Начало работы
      </h4>
      <p class="mt-2">
        На новых проектах верстку следует начинать с UI элементов, которые необходимо выносить в <code>components</code>. К UI элементам относятся: поля вводя, кнопки, чекбоксы, радио-кнопки и так далее.
      </p>
      <p>
        Если в дизайне присутствуют иконки, которые дизайнер вынес в отдельное окно, то можно воспользоваться сервисом
        <a
          href="https://icomoon.io/app/"
          target="_blank"
        >IcoMoon</a> и создать иконочный шрифт.
      </p>
    </v-card>
    <v-card
      elevation="2"
      class="wrap"
    >
      <h4>
        Используемые методологии
      </h4>
      <p class="mt-2">
        Любой проект начинается с верстки. В Crypton.studio мы используем методологию <a
          href="https://ru.bem.info/methodology/quick-start/"
          target="_blank"
        >БЭМ.</a>
      </p>
      <p>
        БЭМ (Блок, Элемент, Модификатор) — компонентный подход к веб-разработке. В его основе лежит принцип разделения интерфейса на независимые блоки.
      </p>
      <h4>
        Пример использования методологии БЭМ
      </h4>
      <p class="mt-2">
        В качестве примера будет служить шапка сайта Crypton.studio.
      </p>
      <v-img
        src="/img/bem-header.png"
        contain
        max-width="991px"
        max-height="112px"
        class="mt-2 mb-2"
      />
      <p>
        Для начала следует разделить шапку на составляющие по методологии БЭМ. Блоками в данном случае будут:
      </p>
      <ul>
        <li>
          Сама шапка <code>.header</code>
        </li>
        <li>
          Логотип <code>.logo</code>
        </li>
        <li>
          Меню (ссылки) <code>.menu</code>
        </li>
        <li>
          Кнопка переключения локализакции <code>.locale</code>
        </li>
      </ul>
      <v-img
        contain
        src="/img/bem-header-blocks.png"
        max-width="991px"
        max-height="112px"
        class="mt-2 mb-2"
      />
      <p>
        Элементами в данном случае являются:
      </p>
      <ul>
        <li>
          Левая часть шапки <code>.header__left</code>
        </li>
        <li>
          Правая часть шапки <code>.header__right</code>
        </li>
        <li>
          Ссылки в меню. <code>.menu__links .menu__link .menu__text</code>
        </li>
      </ul>
      <v-img
        contain
        src="/img/bem-header-elements.png"
        max-width="991px"
        max-height="112px"
        class="mt-2 mb-2"
      />
      <p>
        Модификатор тут будет только один:
      </p>
      <ul>
        <li>
          Нижнее подчеркивание ссылок <code>.menu__link .menu__link_active</code>
        </li>
      </ul>
      <v-img
        contain
        src="/img/bem-header-modification.png"
        max-width="991px"
        max-height="112px"
        class="mt-2 mb-3"
      />
      <v-alert
        type="info"
        dense
        outlined
        class="mt-3"
        max-width="1100px"
      >
        В данном случае, для присвоения модификатора ссылкам (тег <code>nuxt-link</code>), необходимо использовать props  <code> exact-active-class.</code>
        <pre class="language-javascript">
            <code v-pre>
              &lt;nuxt-link
                  v-for="(item, i) in menuItems"
                  :key="`menu__item-${i}`"
                  :to="item.route"
                  exact-active-class="menu__item_active"
                  class="menu__item"
              &gt;
              &lt;span class="menu__text"&gt;
              {{ item.text }}
             &lt;/span&gt;
             &lt;/nuxt-link&gt;
            </code>
        </pre>
      </v-alert>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Bem',
  data: () => ({
    menuItems: [
      {
        text: 'Link',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.bem {

}
</style>
