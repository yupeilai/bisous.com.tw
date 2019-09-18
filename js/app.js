var DEBUG, app, detectBrowserLang, detectInFBApp, float, focusFirstInput, headerTo, isAndroid, isFirefox, isIE, isMobile, isMobileChrome, isSafari, refreshOGData, xx;

DEBUG = true;

window.countdown = Date.now();

window.requesting = false;

isAndroid = /Android/i.test(navigator.userAgent);

xx = function(x) {
  return DEBUG && console.log(x);
};

float = function(val) {
  return parseFloat(val.replace('px', ''));
};

headerTo = function(path) {
  return window.location = path;
};

focusFirstInput = function() {
  return $('form').find('input[type="text"], textarea').first().focus();
};

detectBrowserLang = function() {
  var language;
  return language = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
};

detectInFBApp = function() {
  var ua;
  ua = navigator.userAgent || navigator.vendor || window.opera;
  return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
};

refreshOGData = function(url) {
  return $.ajax({
    url: 'https://graph.facebook.com',
    type: 'post',
    data: {
      id: url,
      scrape: 'true'
    },
    dataType: 'json'
  });
};

isMobile = function() {
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/BlackBerry/)) {
    return true;
  } else {
    return false;
  }
};

isIE = function() {
  if (navigator.userAgent.indexOf('MSIE ') > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    return true;
  } else {
    return false;
  }
};

isSafari = function() {
  var ua;
  ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('safari') !== -1) {
    if (ua.indexOf('chrome') > -1) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

isFirefox = function() {
  return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
};

isMobileChrome = function() {
  if (navigator.userAgent.match('CriOS')) {
    return true;
  } else {
    return false;
  }
};

window.onload = function() {
  return $('body').addClass('loaded');
};

$(function() {});

Vue.component('hero', {
  template: "<header id=\"header\" class=\"\">\n  <div class=\"wrapper\">\n    <a href=\"/\" id=\"header-brand\"></a>\n    <ul id=\"header-nav\">\n      <li>\n        <a href=\"/about\">About</a>\n      </li>\n      <li>\n        <a href=\"/themes\">Themes</a>\n      </li>\n      <li>\n        <a href=\"/qna\">Q&A</a>\n      </li>\n    </ul>\n  </div>\n</header>"
});

Vue.component('hero', {
  template: "<div id=\"hero\">\n  <h1>Hero</h1>\n</div>"
});

app = new Vue({
  delimiters: ['{!', '!}'],
  el: '#app',
  data: {
    test_header: 'Hello World!',
    test_message: '<p>議書一沒回水帶下之德。類裡不可這師成做子甚華題突車似不辦法戰權。解現斯然院的書量正果。黃去十，就起想市現格聲能成被準食是展。腦車害，之音很校過我他政市形打現目然素展準的下出這大親過構，制因究是……情市學！們人想關知。連可不各師重子有空第、世會以……球校和光事老國；站她力其自電股不建不來力。長明在與長心運。事手營價為來想國黨情識會後義一不讓多孩綠我去送人能意覺不此他了；的族的天第不爸書正的麼我國法進少年少，時他牛受看。</p><p>我質府！面氣的利給吃認！是近完管老區：性社。</p><p>沒過早……能排經業也怎經笑認；生大友主，如分究關度卻特來選司的有長，時的中速己爭快。國如體之用事轉大光至影個內亞？</p><p>已是主從以這！面的容工那對所製全是夫的的賽立己理上光，德水手新？會十是立流衣本三不票功的是易……人門地山觀容外新在性可建造康得考標於：世麼酒量類：旅長問之們員度的不術品構又們心裝中策無識法小假遠之過就生到房安三營因了語！注有世李和想助感臺喜往體親們富保是。</p>'
  },
  created: function() {
    return xx('App created.');
  },
  mounted: function() {
    return xx('App mounted.');
  },
  updated: function() {
    return xx('App updated.');
  }
});
