routes = [
  {
    path: '/'
    component:
      template: '<router-view></router-view>'
    children: [
      { path: '', name: 'home', component: Home }
      { path: 'generator', name: 'generator', component: Generator }
      { path: 'about', name: 'about', component: About }
      {
        path: 'themes'
        component: template: '<router-view></router-view>'
        children: [
          { path: '', name: 'themes', component: Themes }
          { path: 'wedding-card', name: 'theme_wedding_card', component: ThemesWeddingCard }
          { path: 'rsvp', name: 'theme_rsvp', component: ThemesRSVP }
          { path: 'thank-you-card', name: 'theme_thank_you_card', component: ThemesThankYouCard }
          { path: 'seating-card', name: 'theme_seating_card', component: ThemesSeatingCard }
          { path: 'gift-card', name: 'theme_gift_card', component: ThemesGiftCard }
          { path: 'gift-others', name: 'theme_others', component: ThemesOthers }
        ]
      }
      { path: 'faq', name: 'faq', component: FAQ }
      { path: 'cart', name: 'cart', component: Cart }
      # {
      #   path: '*'
      #   component:
      #     template: '<component v-bind:is="page_template"></component>'
      #     data: ->
      #       {
      #         page_template: 'page-not-found'
      #       }
      #     mounted: -> @$parent.loading = false
      # }
    ]
  }
]

router = new VueRouter(
  routes: routes
  mode: 'history'
)

router.beforeEach (to, from, next) ->
  jQuery('#page-loading').addClass 'show'
  scrollTop()
  # setTimeout( ->
  #   xx 'here'
  #   jQuery('#page-loading').addClass 'show'
  #   scrollTop()
  #   window.onbeforeunload = ->
  #     jQuery('body').hide()
  #     scrollTop()
  # , 3000)
  next()

router.afterEach (to, from) ->
  setTimeout( ->
    jQuery('#page-loading').removeClass 'show'
  , 300)
