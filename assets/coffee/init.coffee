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

forceDownload = (url, filename) ->
  link = document.createElement 'a'
  link.href = url
  link.download = filename
  document.body.appendChild link
  link.click();
  document.body.removeChild link


#==============================================================
# Font
#==============================================================
appendFont = (font, callback) ->
  link = document.createElement('link')
  link.setAttribute 'rel', 'stylesheet'
  link.setAttribute 'type', 'text/css'
  link.onload = ->
    FontFaceOnload font,
      success: -> xx 'font expended'
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
