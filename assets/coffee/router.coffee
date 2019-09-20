routes = [
  {
    path: '/'
    component:
      template: '<router-view></router-view>'
    children: [
      { path: '', name: 'home', component: Home }
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

# router.beforeEach (to, from, next) ->
#   setTimeout( ->
#     $('#page_loading').show()
#     scroll_top()
#     window.onbeforeunload = ->
#       $('body').hide()
#       scroll_top()
#   , 100)
#   next()

# router.afterEach (to, from) ->
#   setTimeout( ->
#     $('#page_loading').hide()
#   , 100)
