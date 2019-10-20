#=require init.coffee
#=require mixin.coffee
#=require component/*.coffee
#=require pages/*.coffee
#=require router.coffee


#==========================================
# App
#==========================================
app = new Vue({
  router: router
  mixins: []

  data: ->
    {
      cart: [
        {
          template: 'TP01'
          total: 10
        }
      ]
      form: {
        wedding_mate_1: ''
        wedding_mate_2: ''
        wedding_date: ''
        wedding_time: ''
        wedding_location: ''
        wedding_address: ''

        order_name: ''
        order_phone: ''
        order_email: ''
        order_note: ''

        shipping_name: ''
        shipping_phone: ''
        shipping_address: ''
        shipping_method: ''
      }
    }

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
