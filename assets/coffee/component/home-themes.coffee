Vue.component 'home-themes',
  template: """
    <div id="home-themes">
      <div class="wrapper">
        <h2 class="title">Choose a Theme</h2>
        <ul class="themes-list">
          <li class="list-item">
            <div class="item-wrapper">
              <router-link :to="{name: 'themes'}">
                <h3 class="theme-title">喜帖<small>Wedding Card</small></h3>
                <div class="theme-image" :style="{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }"></div>
              </router-link>
            </div>
          </li>
          <li class="list-item">
            <div class="item-wrapper">
              <router-link :to="{name: 'themes'}">
                <h3 class="theme-title">回函卡<small>RSVP</small></h3>
                <div class="theme-image" :style="{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }"></div>
              </router-link>
            </div>
          </li>
          <li class="list-item">
            <div class="item-wrapper">
              <router-link :to="{name: 'themes'}">
                <h3 class="theme-title">感謝卡<small>Thank you Card</small></h3>
                <div class="theme-image" :style="{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }"></div>
              </router-link>
            </div>
          </li>
          <li class="list-item">
            <div class="item-wrapper">
              <router-link :to="{name: 'themes'}">
                <h3 class="theme-title">座位卡<small>Seating Card</small></h3>
                <div class="theme-image" :style="{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }"></div>
              </router-link>
            </div>
          </li>
          <li class="list-item">
            <div class="item-wrapper">
              <router-link :to="{name: 'themes'}">
                <h3 class="theme-title">禮物小卡<small>Gift Card</small></h3>
                <div class="theme-image" :style="{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }"></div>
              </router-link>
            </div>
          </li>
          <li class="list-item">
            <div class="item-wrapper">
              <router-link :to="{name: 'themes'}">
                <h3 class="theme-title">其他<small>Others</small></h3>
                <div class="theme-image" :style="{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }"></div>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  """
