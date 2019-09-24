routes = [
  {
    path: '/'
    component:
      template: '<router-view></router-view>'
    children: [
      { path: '', name: 'home', component: Home }
      { path: 'generator', name: 'generator', component: Generator }
      { path: 'about', name: 'about', component: About }
      { path: 'themes', name: 'themes', component: Themes }
      { path: 'faq', name: 'faq', component: FAQ }
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
  $('#page-loading').addClass 'show'
  scrollTop()
  # setTimeout( ->
  #   xx 'here'
  #   $('#page-loading').addClass 'show'
  #   scrollTop()
  #   window.onbeforeunload = ->
  #     $('body').hide()
  #     scrollTop()
  # , 3000)
  next()

router.afterEach (to, from) ->
  setTimeout( ->
    $('#page-loading').removeClass 'show'
  , 300)
