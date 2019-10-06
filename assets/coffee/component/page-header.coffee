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
              <router-link :to="{name: 'generator'}">Generator</router-link>
            </li>
            <li>
              <a href="#">Themes</a>
              <ul class="sub-nav">
                <li><router-link :to="{name: 'theme_wedding_card'}">喜帖</router-link></li>
                <li><router-link :to="{name: 'theme_rsvp'}">回函卡</router-link></li>
                <li><router-link :to="{name: 'theme_thank_you_card'}">感謝卡</router-link></li>
                <li><router-link :to="{name: 'theme_seating_card'}">座位卡</router-link></li>
                <li><router-link :to="{name: 'theme_gift_card'}">禮物小卡</router-link></li>
                <li><router-link :to="{name: 'theme_others'}">其他</router-link></li>
              </ul>
            </li>
            <li>
              <a href="#">FAQ</a>
              <ul class="sub-nav">
                <li><router-link :to="{name: 'faq_1'}">計價方式與優惠</router-link></li>
                <li><router-link :to="{name: 'faq_2'}">下單流程與交期</router-link></li>
                <li><router-link :to="{name: 'faq_3'}">常見問題</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div id="header-cart">
          <router-link :to="{name: 'cart'}">Cart</router-link>
        </div>
      </div>
    </header>
  """
