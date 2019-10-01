ThemesRSVP =
  template: """
    <div class="default-layout">
      <div class="wrapper">
        <h1 class="underline">回函卡<small>RSVP</small></h1>
        <ul class="card-list">
          <li class="list-item" v-for="index in 6" :key="index">
            <div class="item-wrapper">
              <div class="card-image" :style="{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }"></div>
              <h3 class="card-title">R0${index}</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  """
