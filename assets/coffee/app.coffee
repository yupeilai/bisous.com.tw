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

  data: ->
    {
    }

  mounted: ->
    xx 'app mounted'

}).$mount '#app'
