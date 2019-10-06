#==========================================
# Debug mode
#==========================================
DEBUG = true
# DEBUG = false


#==============================================================
# Vue
#==============================================================
Vue.options.delimiters = ['${', '}']


#==========================================
# Default variables
#==========================================
window.countdown = Date.now()
window.requesting = false
isAndroid = /Android/i.test(navigator.userAgent)


#==========================================
# Default helper
#==========================================
xx = (x) -> DEBUG && console.log x
float = (val) -> parseFloat val.replace 'px', ''
headerTo = (path) -> window.location = path
focusFirstInput = -> $('form').find('input[type="text"], textarea').first().focus()
scrollTop = -> zenscroll.toY 0, 1
detectBrowserLang = -> language = navigator.languages and navigator.languages[0] or navigator.language or navigator.userLanguage

detectInFBApp = ->
  ua = navigator.userAgent or navigator.vendor or window.opera
  return ua.indexOf('FBAN') > -1 or ua.indexOf('FBAV') > -1

refreshOGData = (url) ->
  $.ajax
    url: 'https://graph.facebook.com'
    type: 'post'
    data:
      id: url
      scrape: 'true'
    dataType: 'json'

nl2br = (string) ->
  if typeof string == 'undefined' or string == null then return ''
  string = (string + '').replace /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1</div><div>$2'
  string = '<div>' + string + '</div>'


#==========================================
# Browser check
#==========================================
isMobile = ->
  if navigator.userAgent.match(/Android/i) or navigator.userAgent.match(/webOS/i) or navigator.userAgent.match(/iPhone/i) or navigator.userAgent.match(/iPod/i) or navigator.userAgent.match(/iPad/i) or navigator.userAgent.match(/BlackBerry/) then return true else return false

isIE = ->
  return if navigator.userAgent.indexOf('MSIE ') > 0 or ! !navigator.userAgent.match(/Trident.*rv\:11\./) then true else false

isSafari = ->
  ua = navigator.userAgent.toLowerCase()
  if ua.indexOf('safari') != -1
    return if ua.indexOf('chrome') > -1 then false else true
  else
    return false

isFirefox = ->
  navigator.userAgent.toLowerCase().indexOf('firefox') > -1

isMobileChrome = ->
  return if navigator.userAgent.match('CriOS') then true else false


#==============================================================
# Font
#==============================================================
appendFont = (font, callback) ->
  link = document.createElement('link')
  link.setAttribute 'rel', 'stylesheet'
  link.setAttribute 'type', 'text/css'
  link.onload = ->
    FontFaceOnload font,
      success: -> callback()
  link.setAttribute 'href', '/fonts/' + font + '/font.css?v=1.0'
  document.getElementsByTagName('head')[0].appendChild link


#==============================================================
# HTML encode
#==============================================================
htmlEncode = (value) -> jQuery('<div/>').text(value).html()
htmlDecode = (value) -> jQuery('<div/>').html(value).text()


#==========================================
# Events
#==========================================
window.onload = ->
  jQuery('body').addClass 'loaded'
