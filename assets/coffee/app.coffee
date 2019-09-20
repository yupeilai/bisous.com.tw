#=require init.coffee
#=require component/*.coffee
#=require pages/*.coffee
#=require router.coffee


#==========================================
# App
#==========================================
app = new Vue({
  router: router
  mixins: []

  methods:
    handle_scroll: (event) ->
      if window.scrollY > 20
        $('#header').addClass 'sticky'
      else
        if $('#header').hasClass 'sticky'
          $('#header').removeClass 'sticky'

  data: ->
    {
    }

  mounted: ->
    xx 'app mounted'

  created: ->
    window.addEventListener 'scroll', this.handle_scroll

  destroyed: ->
    window.removeEventListener 'scroll', this.handle_scroll

}).$mount '#app'
