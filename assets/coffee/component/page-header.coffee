Vue.component 'page-header',
  template: """
    <header id="header" class="">
      <div class="wrapper">
        <a href="/" id="header-brand"></a>
        <ul id="header-nav">
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
    </header>
  """
