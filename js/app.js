var About, Cart, DEBUG, Error404, FAQ, Generator, Home, Themes, ThemesGiftCard, ThemesOthers, ThemesRSVP, ThemesSeatingCard, ThemesThankYouCard, ThemesWeddingCard, app, detectBrowserLang, detectInFBApp, float, focusFirstInput, headerTo, isAndroid, isFirefox, isIE, isMobile, isMobileChrome, isSafari, refreshOGData, router, routes, scrollTop, xx;

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
  template: "<div id=\"home-themes\">\n  <div class=\"wrapper\">\n    <h2 class=\"title\">Choose a Theme</h2>\n    <ul class=\"themes-list\">\n      <li class=\"list-item\" v-for=\"(item, index) in themes\">\n        <div class=\"item-wrapper\">\n          <router-link :to=\"{name: item.router_name}\">\n            <h3 class=\"theme-title\">${item.title}<small>${item.title_en}</small></h3>\n            <div class=\"theme-image\" :style=\"{ backgroundImage: 'url(' + item.image + ')' }\"></div>\n          </router-link>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>",
  data: function() {
    return {
      themes: [
        {
          router_name: 'theme_wedding_card',
          title: '喜帖',
          title_en: 'Wedding Card',
          image: 'http://placehold.jp/600x600.png'
        }, {
          router_name: 'theme_rsvp',
          title: '回函卡',
          title_en: 'RSVP',
          image: 'http://placehold.jp/600x600.png'
        }, {
          router_name: 'theme_thank_you_card',
          title: '感謝卡',
          title_en: 'Thank you Card',
          image: 'http://placehold.jp/600x600.png'
        }, {
          router_name: 'theme_seating_card',
          title: '座位卡',
          title_en: 'Seating Card',
          image: 'http://placehold.jp/600x600.png'
        }, {
          router_name: 'theme_gift_card',
          title: '禮物小卡',
          title_en: 'Gift Card',
          image: 'http://placehold.jp/600x600.png'
        }, {
          router_name: 'theme_others',
          title: '其他',
          title_en: 'Others',
          image: 'http://placehold.jp/600x600.png'
        }
      ]
    };
  }
});

Vue.component('page-header', {
  template: "<header id=\"header\" class=\"\">\n  <div class=\"wrapper\">\n    <div id=\"header-brand\">\n      <router-link :to=\"{name: 'home'}\"></router-link>\n    </div>\n    <div id=\"header-nav\">\n      <ul>\n        <li>\n          <router-link :to=\"{name: 'about'}\">About</router-link>\n        </li>\n        <li>\n          <router-link :to=\"{name: 'themes'}\">Themes</router-link>\n        </li>\n        <li>\n          <router-link :to=\"{name: 'faq'}\">FAQ</router-link>\n        </li>\n      </ul>\n    </div>\n    <div id=\"header-cart\">\n      <router-link :to=\"{name: 'cart'}\">Cart</router-link>\n    </div>\n  </div>\n</header>"
});

About = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>關於我們<small>About</small></h1>\n    <h3 class=\"underline\">聯繫方式</h3>\n    <p>\n      ．客服信箱：<a href=\"mailto:info@bisous.com.tw\">info@bisous.com.tw</a><br />\n      ．臉書粉絲團\n    </p>\n  </div>\n</div>"
};

Cart = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>Cart</h1>\n    <p>jotForm here</p>\n  </div>\n</div>"
};

Error404 = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>Page Cannot Be Found</h1>\n    <p>If you are an existing user and are looking for account or theme info, please submit a message to us here.</p>\n  </div>\n</div>"
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

ThemesGiftCard = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1 class=\"underline\">禮物小卡<small>Gift Card</small></h1>\n    <ul class=\"card-list\">\n      <li class=\"list-item\" v-for=\"index in 6\" :key=\"index\">\n        <div class=\"item-wrapper\">\n          <div class=\"card-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          <h3 class=\"card-title\">G0${index}</h3>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>"
};

ThemesOthers = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1 class=\"underline\">其他<small>Others</small></h1>\n    <ul class=\"card-list\">\n      <li class=\"list-item\" v-for=\"index in 6\" :key=\"index\">\n        <div class=\"item-wrapper\">\n          <div class=\"card-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          <h3 class=\"card-title\">O0${index}</h3>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>"
};

ThemesRSVP = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1 class=\"underline\">回函卡<small>RSVP</small></h1>\n    <ul class=\"card-list\">\n      <li class=\"list-item\" v-for=\"index in 6\" :key=\"index\">\n        <div class=\"item-wrapper\">\n          <div class=\"card-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          <h3 class=\"card-title\">R0${index}</h3>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>"
};

ThemesSeatingCard = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1 class=\"underline\">座位卡<small>Seating Card</small></h1>\n    <ul class=\"card-list\">\n      <li class=\"list-item\" v-for=\"index in 6\" :key=\"index\">\n        <div class=\"item-wrapper\">\n          <div class=\"card-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          <h3 class=\"card-title\">S0${index}</h3>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>"
};

ThemesThankYouCard = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1 class=\"underline\">感謝卡<small>Thank you Card</small></h1>\n    <ul class=\"card-list\">\n      <li class=\"list-item\" v-for=\"index in 6\" :key=\"index\">\n        <div class=\"item-wrapper\">\n          <div class=\"card-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          <h3 class=\"card-title\">T0${index}</h3>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>"
};

ThemesWeddingCard = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1 class=\"underline\">喜帖<small>Wedding Card</small></h1>\n    <ul class=\"card-list\">\n      <li class=\"list-item\" v-for=\"index in 6\" :key=\"index\">\n        <div class=\"item-wrapper\">\n          <div class=\"card-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          <h3 class=\"card-title\">W0${index}</h3>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>"
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
        component: {
          template: '<router-view></router-view>'
        },
        children: [
          {
            path: '',
            name: 'themes',
            component: Themes
          }, {
            path: 'wedding-card',
            name: 'theme_wedding_card',
            component: ThemesWeddingCard
          }, {
            path: 'rsvp',
            name: 'theme_rsvp',
            component: ThemesRSVP
          }, {
            path: 'thank-you-card',
            name: 'theme_thank_you_card',
            component: ThemesThankYouCard
          }, {
            path: 'seating-card',
            name: 'theme_seating_card',
            component: ThemesSeatingCard
          }, {
            path: 'gift-card',
            name: 'theme_gift_card',
            component: ThemesGiftCard
          }, {
            path: 'gift-others',
            name: 'theme_others',
            component: ThemesOthers
          }
        ]
      }, {
        path: 'faq',
        name: 'faq',
        component: FAQ
      }, {
        path: 'cart',
        name: 'cart',
        component: Cart
      }, {
        path: '*',
        name: 'error404',
        component: Error404
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
  created: function() {
    return window.addEventListener('scroll', this.handle_scroll);
  },
  destroyed: function() {
    return window.removeEventListener('scroll', this.handle_scroll);
  }
}).$mount('#app');
