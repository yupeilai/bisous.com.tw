Vue.component 'home-themes',
  template: """
    <div id="home-themes">
      <div class="wrapper">
        <h2 class="title">Choose a Theme</h2>
        <ul class="themes-list">
          <li class="list-item" v-for="(item, index) in themes">
            <div class="item-wrapper">
              <router-link :to="{name: item.router_name}">
                <h3 class="theme-title">${item.title}<small>${item.title_en}</small></h3>
                <div class="theme-image" :style="{ backgroundImage: 'url(' + item.image + ')' }"></div>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  """

  data: ->
    {
      themes: [
        {
          router_name: 'theme_wedding_card'
          title: '喜帖'
          title_en: 'Wedding Card'
          image: 'http://placehold.jp/600x600.png'
        }
        {
          router_name: 'theme_rsvp'
          title: '回函卡'
          title_en: 'RSVP'
          image: 'http://placehold.jp/600x600.png'
        }
        {
          router_name: 'theme_thank_you_card'
          title: '感謝卡'
          title_en: 'Thank you Card'
          image: 'http://placehold.jp/600x600.png'
        }
        {
          router_name: 'theme_seating_card'
          title: '座位卡'
          title_en: 'Seating Card'
          image: 'http://placehold.jp/600x600.png'
        }
        {
          router_name: 'theme_gift_card'
          title: '禮物小卡'
          title_en: 'Gift Card'
          image: 'http://placehold.jp/600x600.png'
        }
        {
          router_name: 'theme_others'
          title: '其他'
          title_en: 'Others'
          image: 'http://placehold.jp/600x600.png'
        }
      ]
    }
