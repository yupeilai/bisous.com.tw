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
        jQuery('#header').addClass 'sticky'
      else
        if jQuery('#header').hasClass 'sticky'
          jQuery('#header').removeClass 'sticky'

  created: ->
    window.addEventListener 'scroll', this.handle_scroll

  destroyed: ->
    window.removeEventListener 'scroll', this.handle_scroll

}).$mount '#app'
