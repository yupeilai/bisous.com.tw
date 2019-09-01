#==========================================
# Component
#==========================================
Vue.component 'example-component',
  props: [ 'text' ]
  template: '<h1>{{ text }}</h1>'

#==========================================
# Filter
#==========================================
Vue.filter 'remove_html', (value) ->
  div = document.createElement('div')
  div.innerHTML = value
  text = div.textContent or div.innerText or ''
  text


#==========================================
# App
#==========================================
app = new Vue(
  delimiters: ['{!', '!}']
  el: '#app'
  data:
    test_header: 'Hello World!'
    test_message: '<p>議書一沒回水帶下之德。類裡不可這師成做子甚華題突車似不辦法戰權。解現斯然院的書量正果。黃去十，就起想市現格聲能成被準食是展。腦車害，之音很校過我他政市形打現目然素展準的下出這大親過構，制因究是……情市學！們人想關知。連可不各師重子有空第、世會以……球校和光事老國；站她力其自電股不建不來力。長明在與長心運。事手營價為來想國黨情識會後義一不讓多孩綠我去送人能意覺不此他了；的族的天第不爸書正的麼我國法進少年少，時他牛受看。</p><p>我質府！面氣的利給吃認！是近完管老區：性社。</p><p>沒過早……能排經業也怎經笑認；生大友主，如分究關度卻特來選司的有長，時的中速己爭快。國如體之用事轉大光至影個內亞？</p><p>已是主從以這！面的容工那對所製全是夫的的賽立己理上光，德水手新？會十是立流衣本三不票功的是易……人門地山觀容外新在性可建造康得考標於：世麼酒量類：旅長問之們員度的不術品構又們心裝中策無識法小假遠之過就生到房安三營因了語！注有世李和想助感臺喜往體親們富保是。</p>'

  created: ->
    xx 'App created.'
  mounted: ->
    xx 'App mounted.'
  updated: ->
    xx 'App updated.'

  computed:
    reversed_string: ->
      @description.split('').reverse().join('')

  methods:
    reverse_description: ->
      @description = @description.split('').reverse().join('')
    alert_rock: ->
      alert 'rock!'
)
