var About, Cart, DEBUG, FAQ, Generator, Home, Themes, app, detectBrowserLang, detectInFBApp, float, focusFirstInput, headerTo, isAndroid, isFirefox, isIE, isMobile, isMobileChrome, isSafari, refreshOGData, router, routes, scrollTop, xx;

DEBUG = true;

Vue.options.delimiters = ['${', '}'];

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

scrollTop = function() {
  return zenscroll.toY(0, 1);
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
  return jQuery('body').addClass('loaded');
};

Vue.component('hero', {
  template: "<div id=\"hero\">\n  <div id=\"hero-overlay\"></div>\n  <div class=\"wrapper\">\n    <div id=\"hero-content\">\n      <div>\n        <h1>喜帖產生器</h1>\n        <h4>創造出屬於你/妳的喜帖</h4>\n        <router-link :to=\"{name: 'generator'}\" class=\"button outlined-white\">Try it</router-link>\n      </div>\n    </div>\n  </div>\n</div>"
});

Vue.component('home-themes', {
  template: "<div id=\"home-themes\">\n  <div class=\"wrapper\">\n    <h2 class=\"title\">Choose a Theme</h2>\n    <ul class=\"themes-list\">\n      <li class=\"list-item\">\n        <div class=\"item-wrapper\">\n          <router-link :to=\"{name: 'themes'}\">\n            <h3 class=\"theme-title\">喜帖<small>Wedding Card</small></h3>\n            <div class=\"theme-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          </router-link>\n        </div>\n      </li>\n      <li class=\"list-item\">\n        <div class=\"item-wrapper\">\n          <router-link :to=\"{name: 'themes'}\">\n            <h3 class=\"theme-title\">回函卡<small>RSVP</small></h3>\n            <div class=\"theme-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          </router-link>\n        </div>\n      </li>\n      <li class=\"list-item\">\n        <div class=\"item-wrapper\">\n          <router-link :to=\"{name: 'themes'}\">\n            <h3 class=\"theme-title\">感謝卡<small>Thank you Card</small></h3>\n            <div class=\"theme-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          </router-link>\n        </div>\n      </li>\n      <li class=\"list-item\">\n        <div class=\"item-wrapper\">\n          <router-link :to=\"{name: 'themes'}\">\n            <h3 class=\"theme-title\">座位卡<small>Seating Card</small></h3>\n            <div class=\"theme-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          </router-link>\n        </div>\n      </li>\n      <li class=\"list-item\">\n        <div class=\"item-wrapper\">\n          <router-link :to=\"{name: 'themes'}\">\n            <h3 class=\"theme-title\">禮物小卡<small>Gift Card</small></h3>\n            <div class=\"theme-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          </router-link>\n        </div>\n      </li>\n      <li class=\"list-item\">\n        <div class=\"item-wrapper\">\n          <router-link :to=\"{name: 'themes'}\">\n            <h3 class=\"theme-title\">其他<small>Others</small></h3>\n            <div class=\"theme-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          </router-link>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>"
});

Vue.component('page-header', {
  template: "<header id=\"header\" class=\"\">\n  <div class=\"wrapper\">\n    <div id=\"header-brand\">\n      <router-link :to=\"{name: 'home'}\"></router-link>\n    </div>\n    <div id=\"header-nav\">\n      <ul>\n        <li>\n          <router-link :to=\"{name: 'about'}\">About</router-link>\n        </li>\n        <li>\n          <router-link :to=\"{name: 'themes'}\">Themes</router-link>\n        </li>\n        <li>\n          <router-link :to=\"{name: 'faq'}\">FAQ</router-link>\n        </li>\n      </ul>\n    </div>\n    <div id=\"header-cart\">\n      <router-link :to=\"{name: 'cart'}\">Cart</router-link>\n    </div>\n  </div>\n</header>"
});

About = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>About</h1>\n    <p>食西做務業動市不？為自人還為原；門住營不黨來教香輪聲因術水著有表微能遊找中了方聞房星怕理益成工如沒達：自請唱去股技中業星沒狀；在能書朋對問文我他區院那和氣進德前事推教。如媽要的反改這這筆味？成加進之此系沒明又然，造教最奇上兩為，希清易人了多就自坐在親復在管打國會是告的近！皮河起嚴：新更評信己就究之信期、球人法無見精以只的因：展一詩。開才發間可專臺於在指畫親民步只人員期北子：的是熱！心可大來！教車線友幾親。愛開好走上不聲明，一受容集老人兒打士明該、輕公學傳意部在社者來該說，職求是，事不的素國，有不大著常於器機廣洲例。家多我政來木看電上深成家造臉，元斷自續整？接常事術參反族中北一。嚴成道華以感為。時到少可兩：事然當結訴注經一度陽。</p>\n\n    <p>食西做務業動市不？為自人還為原；門住營不黨來教香輪聲因術水著有表微能遊找中了方聞房星怕理益成工如沒達：自請唱去股技中業星沒狀；在能書朋對問文我他區院那和氣進德前事推教。如媽要的反改這這筆味？成加進之此系沒明又然，造教最奇上兩為，希清易人了多就自坐在親復在管打國會是告的近！皮河起嚴：新更評信己就究之信期、球人法無見精以只的因：展一詩。開才發間可專臺於在指畫親民步只人員期北子：的是熱！心可大來！教車線友幾親。愛開好走上不聲明，一受容集老人兒打士明該、輕公學傳意部在社者來該說，職求是，事不的素國，有不大著常於器機廣洲例。家多我政來木看電上深成家造臉，元斷自續整？接常事術參反族中北一。嚴成道華以感為。時到少可兩：事然當結訴注經一度陽。</p>\n  </div>\n</div>"
};

Cart = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>Cart</h1>\n\n    <form class=\"jotform-form\" action=\"https://submit.jotform.me/submit/92711733585462/\" method=\"post\" name=\"form_92711733585462\" id=\"92711733585462\" accept-charset=\"utf-8\">\n      <input type=\"hidden\" name=\"formID\" value=\"92711733585462\" />\n      <input type=\"hidden\" id=\"JWTContainer\" value=\"\" />\n      <input type=\"hidden\" id=\"cardinalOrderNumber\" value=\"\" />\n      <div role=\"main\" class=\"form-all\">\n        <ul class=\"form-section page-section\">\n          <li id=\"cid_1\" class=\"form-input-wide\" data-type=\"control_head\">\n            <div class=\"form-header-group \">\n              <div class=\"header-text httal htvam\">\n                <h2 id=\"header_1\" class=\"form-header\" data-component=\"header\">\n                  Bisous Cart\n                </h2>\n              </div>\n            </div>\n          </li>\n          <li class=\"form-line jf-required\" data-type=\"control_textbox\" id=\"id_3\">\n            <label class=\"form-label form-label-top form-label-auto\" id=\"label_3\" for=\"input_3\">\n              訂購人\n              <span class=\"form-required\">\n                *\n              </span>\n            </label>\n            <div id=\"cid_3\" class=\"form-input-wide jf-required\">\n              <input type=\"text\" id=\"input_3\" name=\"q3_typeA\" data-type=\"input-textbox\" class=\"form-textbox validate[required]\" size=\"20\" value=\"\" data-component=\"textbox\" aria-labelledby=\"label_3\" required=\"\" />\n            </div>\n          </li>\n          <li class=\"form-line jf-required\" data-type=\"control_textarea\" id=\"id_4\">\n            <label class=\"form-label form-label-top form-label-auto\" id=\"label_4\" for=\"input_4\">\n              喜帖內容\n              <span class=\"form-required\">\n                *\n              </span>\n            </label>\n            <div id=\"cid_4\" class=\"form-input-wide jf-required\">\n              <textarea id=\"input_4\" class=\"form-textarea validate[required]\" name=\"q4_typeA4\" cols=\"40\" rows=\"6\" data-component=\"textarea\" required=\"\" aria-labelledby=\"label_4\">新郎姓名：\n新娘姓名：</textarea>\n            </div>\n          </li>\n          <li class=\"form-line\" data-type=\"control_button\" id=\"id_2\">\n            <div id=\"cid_2\" class=\"form-input-wide\">\n              <div style=\"margin-left:156px\" class=\"form-buttons-wrapper \">\n                <button id=\"input_2\" type=\"submit\" class=\"form-submit-button\" data-component=\"button\">\n                  提交\n                </button>\n              </div>\n            </div>\n          </li>\n          <li style=\"display:none\">\n            Should be Empty:\n            <input type=\"text\" name=\"website\" value=\"\" />\n          </li>\n        </ul>\n      </div>\n      <input type=\"hidden\" id=\"simple_spc\" name=\"simple_spc\" value=\"92711733585462\" />\n      <div class=\"formFooter-heightMask\">\n      </div>\n    </form>\n\n  </div>\n</div>"
};

FAQ = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>FAQ</h1>\n    <p>食西做務業動市不？為自人還為原；門住營不黨來教香輪聲因術水著有表微能遊找中了方聞房星怕理益成工如沒達：自請唱去股技中業星沒狀；在能書朋對問文我他區院那和氣進德前事推教。如媽要的反改這這筆味？成加進之此系沒明又然，造教最奇上兩為，希清易人了多就自坐在親復在管打國會是告的近！皮河起嚴：新更評信己就究之信期、球人法無見精以只的因：展一詩。開才發間可專臺於在指畫親民步只人員期北子：的是熱！心可大來！教車線友幾親。愛開好走上不聲明，一受容集老人兒打士明該、輕公學傳意部在社者來該說，職求是，事不的素國，有不大著常於器機廣洲例。家多我政來木看電上深成家造臉，元斷自續整？接常事術參反族中北一。嚴成道華以感為。時到少可兩：事然當結訴注經一度陽。</p>\n\n    <p>食西做務業動市不？為自人還為原；門住營不黨來教香輪聲因術水著有表微能遊找中了方聞房星怕理益成工如沒達：自請唱去股技中業星沒狀；在能書朋對問文我他區院那和氣進德前事推教。如媽要的反改這這筆味？成加進之此系沒明又然，造教最奇上兩為，希清易人了多就自坐在親復在管打國會是告的近！皮河起嚴：新更評信己就究之信期、球人法無見精以只的因：展一詩。開才發間可專臺於在指畫親民步只人員期北子：的是熱！心可大來！教車線友幾親。愛開好走上不聲明，一受容集老人兒打士明該、輕公學傳意部在社者來該說，職求是，事不的素國，有不大著常於器機廣洲例。家多我政來木看電上深成家造臉，元斷自續整？接常事術參反族中北一。嚴成道華以感為。時到少可兩：事然當結訴注經一度陽。</p>\n  </div>\n</div>"
};

Generator = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>Generator</h1>\n  </div>\n</div>"
};

Home = {
  template: "<div>\n  <hero></hero>\n  <home-themes></home-themes>\n</div>"
};

Themes = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>Themes</h1>\n  </div>\n</div>"
};

routes = [
  {
    path: '/',
    component: {
      template: '<router-view></router-view>'
    },
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      }, {
        path: 'generator',
        name: 'generator',
        component: Generator
      }, {
        path: 'about',
        name: 'about',
        component: About
      }, {
        path: 'themes',
        name: 'themes',
        component: Themes
      }, {
        path: 'faq',
        name: 'faq',
        component: FAQ
      }, {
        path: 'cart',
        name: 'cart',
        component: Cart
      }
    ]
  }
];

router = new VueRouter({
  routes: routes,
  mode: 'history'
});

router.beforeEach(function(to, from, next) {
  jQuery('#page-loading').addClass('show');
  scrollTop();
  return next();
});

router.afterEach(function(to, from) {
  return setTimeout(function() {
    return jQuery('#page-loading').removeClass('show');
  }, 300);
});

app = new Vue({
  router: router,
  mixins: [],
  methods: {
    handle_scroll: function(event) {
      if (window.scrollY > 20) {
        return jQuery('#header').addClass('sticky');
      } else {
        if (jQuery('#header').hasClass('sticky')) {
          return jQuery('#header').removeClass('sticky');
        }
      }
    }
  },
  data: function() {
    return {};
  },
  mounted: function() {
    return xx('app mounted');
  },
  created: function() {
    return window.addEventListener('scroll', this.handle_scroll);
  },
  destroyed: function() {
    return window.removeEventListener('scroll', this.handle_scroll);
  }
}).$mount('#app');
