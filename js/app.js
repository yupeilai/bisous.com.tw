var About, DEBUG, FAQ, Home, Themes, app, detectBrowserLang, detectInFBApp, float, focusFirstInput, headerTo, isAndroid, isFirefox, isIE, isMobile, isMobileChrome, isSafari, refreshOGData, router, routes, xx;

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
  template: "<div id=\"hero\">\n  <div id=\"hero-overlay\"></div>\n  <div class=\"wrapper\">\n    <div id=\"hero-content\">\n      <div>\n        <h1>喜帖產生器</h1>\n        <h4>創造出屬於你/妳的喜帖</h4>\n      </div>\n    </div>\n  </div>\n</div>"
});

Vue.component('home-themes', {
  template: "<div id=\"home-themes\">\n  <div class=\"wrapper\">\n    <h2 class=\"title\">Choose a Theme</h2>\n    <ul class=\"themes-list\">\n      <li class=\"list-item\">\n        <div class=\"item-wrapper\">\n          <router-link :to=\"{name: 'themes'}\">\n            <h3 class=\"theme-title\">喜帖<small>Wedding Card</small></h3>\n            <div class=\"theme-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          </router-link>\n        </div>\n      </li>\n      <li class=\"list-item\">\n        <div class=\"item-wrapper\">\n          <router-link :to=\"{name: 'themes'}\">\n            <h3 class=\"theme-title\">回函卡<small>RSVP</small></h3>\n            <div class=\"theme-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          </router-link>\n        </div>\n      </li>\n      <li class=\"list-item\">\n        <div class=\"item-wrapper\">\n          <router-link :to=\"{name: 'themes'}\">\n            <h3 class=\"theme-title\">感謝卡<small>Thank you Card</small></h3>\n            <div class=\"theme-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          </router-link>\n        </div>\n      </li>\n      <li class=\"list-item\">\n        <div class=\"item-wrapper\">\n          <router-link :to=\"{name: 'themes'}\">\n            <h3 class=\"theme-title\">座位卡<small>Seating Card</small></h3>\n            <div class=\"theme-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          </router-link>\n        </div>\n      </li>\n      <li class=\"list-item\">\n        <div class=\"item-wrapper\">\n          <router-link :to=\"{name: 'themes'}\">\n            <h3 class=\"theme-title\">禮物小卡<small>Gift Card</small></h3>\n            <div class=\"theme-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          </router-link>\n        </div>\n      </li>\n      <li class=\"list-item\">\n        <div class=\"item-wrapper\">\n          <router-link :to=\"{name: 'themes'}\">\n            <h3 class=\"theme-title\">其他<small>Others</small></h3>\n            <div class=\"theme-image\" :style=\"{ backgroundImage: 'url(http://placehold.jp/600x600.png)' }\"></div>\n          </router-link>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>"
});

Vue.component('page-header', {
  template: "<header id=\"header\" class=\"\">\n  <div class=\"wrapper\">\n    <a href=\"/\" id=\"header-brand\"></a>\n    <ul id=\"header-nav\">\n      <li>\n        <router-link :to=\"{name: 'about'}\">About</router-link>\n      </li>\n      <li>\n        <router-link :to=\"{name: 'themes'}\">Themes</router-link>\n      </li>\n      <li>\n        <router-link :to=\"{name: 'faq'}\">FAQ</router-link>\n      </li>\n    </ul>\n  </div>\n</header>"
});

About = {
  template: "<div>\n  <h1>About</h1>\n</div>"
};

FAQ = {
  template: "<div>\n  <h1>FAQ</h1>\n</div>"
};

Home = {
  template: "<div>\n  <hero></hero>\n  <home-themes></home-themes>\n</div>"
};

Themes = {
  template: "<div>\n  <h1>Themes</h1>\n</div>"
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
      }
    ]
  }
];

router = new VueRouter({
  routes: routes,
  mode: 'history'
});

app = new Vue({
  router: router,
  mixins: [],
  methods: {
    handle_scroll: function(event) {
      if (window.scrollY > 20) {
        return $('#header').addClass('sticky');
      } else {
        if ($('#header').hasClass('sticky')) {
          return $('#header').removeClass('sticky');
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
