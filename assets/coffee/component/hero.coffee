Vue.component 'hero',
  template: """
    <div id="hero">
      <div id="hero-overlay"></div>
      <div class="wrapper">
        <div id="hero-content">
          <div>
            <h1>喜帖產生器</h1>
            <h4>創造出屬於你/妳的喜帖</h4>
            <router-link :to="{name: 'generator'}" class="button outlined-white">Try it</router-link>
          </div>
        </div>
      </div>
    </div>
  """
