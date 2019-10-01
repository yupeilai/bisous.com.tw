Vue.component 'page-header',
  template: """
    <header id="header" class="">
      <div class="wrapper">
        <div id="header-brand">
          <router-link :to="{name: 'home'}"></router-link>
        </div>
        <div id="header-nav">
          <ul>
            <li>
              <router-link :to="{name: 'about'}">About</router-link>
            </li>
            <li>
              <router-link :to="{name: 'themes'}">Themes</router-link>
            </li>
            <li>
              <router-link :to="{name: 'faq'}">FAQ</router-link>
            </li>
          </ul>
        </div>
        <div id="header-cart">
          <router-link :to="{name: 'cart'}">Cart</router-link>
        </div>
      </div>
    </header>
  """
