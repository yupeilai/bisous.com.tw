var About, Cart, DEBUG, Error404, FAQ, FAQ1, FAQ2, FAQ3, Generator, Home, ThemesGiftCard, ThemesOthers, ThemesRSVP, ThemesSeatingCard, ThemesThankYouCard, ThemesWeddingCard, app, appendFont, detectBrowserLang, detectInFBApp, float, focusFirstInput, headerTo, htmlDecode, htmlEncode, isAndroid, isFirefox, isIE, isMobile, isMobileChrome, isSafari, nl2br, refreshOGData, router, routes, scrollTop, xx;

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

nl2br = function(string) {
  if (typeof string === 'undefined' || string === null) {
    return '';
  }
  string = (string + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1</div><div>$2');
  return string = '<div>' + string + '</div>';
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

appendFont = function(font, callback) {
  var link;
  link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.onload = function() {
    return FontFaceOnload(font, {
      success: function() {
        return callback();
      }
    });
  };
  link.setAttribute('href', '/fonts/' + font + '/font.css?v=1.0');
  return document.getElementsByTagName('head')[0].appendChild(link);
};

htmlEncode = function(value) {
  return jQuery('<div/>').text(value).html();
};

htmlDecode = function(value) {
  return jQuery('<div/>').html(value).text();
};

window.onload = function() {
  return jQuery('body').addClass('loaded');
};

Vue.mixin({
  methods: {
    nl2br: function(text) {
      return nl2br(text);
    },
    htmlEncode: function(value) {
      return htmlEncode(value);
    }
  }
});

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
  template: "<header id=\"header\" class=\"\">\n  <div class=\"wrapper\">\n    <div id=\"header-brand\">\n      <router-link :to=\"{name: 'home'}\"></router-link>\n    </div>\n    <div id=\"header-nav\">\n      <ul>\n        <li>\n          <router-link :to=\"{name: 'about'}\">About</router-link>\n        </li>\n        <li>\n          <router-link :to=\"{name: 'generator'}\">Generator</router-link>\n        </li>\n        <li>\n          <a href=\"#\">Themes</a>\n          <ul class=\"sub-nav\">\n            <li><router-link :to=\"{name: 'theme_wedding_card'}\">喜帖</router-link></li>\n            <li><router-link :to=\"{name: 'theme_rsvp'}\">回函卡</router-link></li>\n            <li><router-link :to=\"{name: 'theme_thank_you_card'}\">感謝卡</router-link></li>\n            <li><router-link :to=\"{name: 'theme_seating_card'}\">座位卡</router-link></li>\n            <li><router-link :to=\"{name: 'theme_gift_card'}\">禮物小卡</router-link></li>\n            <li><router-link :to=\"{name: 'theme_others'}\">其他</router-link></li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"#\">FAQ</a>\n          <ul class=\"sub-nav\">\n            <li><router-link :to=\"{name: 'faq_1'}\">計價方式與優惠</router-link></li>\n            <li><router-link :to=\"{name: 'faq_2'}\">下單流程與交期</router-link></li>\n            <li><router-link :to=\"{name: 'faq_3'}\">常見問題</router-link></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n    <div id=\"header-cart\">\n      <router-link :to=\"{name: 'cart'}\">Cart</router-link>\n    </div>\n  </div>\n</header>"
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

FAQ1 = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>計價方式與優惠</h1>\n    <div>\n      <h3 class=\"underline\">明信片式單卡喜帖</h3>\n      <p class=\"indent\">．10份起訂，每份30元</p>\n      <p class=\"indent hint\">\n        每份皆含喜帖(單面印刷) + 信封(無燙金地址) + 公版封口貼紙<br />\n        喜帖尺寸：10.9x15.1cm &nbsp;&nbsp; 喜帖材質：進口水彩紙<br />\n        信封尺寸：12x16cm &nbsp;&nbsp; 信封材質：______磅美術紙\n      </p>\n    </div>\n    <div class=\"fields-column-2 pad-full-width\">\n      <div class=\"column\">\n        <h3 class=\"underline\">回函卡</h3>\n        <p class=\"indent\">\n          ．10份起訂，每份10元<br />\n          ．喜帖加購價，每份8元\n        </p>\n        <p class=\"indent hint\">\n          回函卡尺寸：10x7cm &nbsp;&nbsp; 喜帖材質：象牙卡\n        </p>\n      </div>\n      <div class=\"column\">\n        <h3 class=\"underline\">感謝卡</h3>\n        <p class=\"indent\">\n          ．10份起訂，每份10元<br />\n          ．喜帖加購價，每份8元\n        </p>\n        <p class=\"indent hint\">\n          感謝卡尺寸：10x7cm &nbsp;&nbsp; 喜帖材質：進口水彩紙\n        </p>\n      </div>\n    </div>\n    <div class=\"fields-column-2 pad-full-width\">\n      <div class=\"column\">\n        <h3 class=\"underline\">座位卡</h3>\n        <p class=\"indent\">\n          ．10份起訂，每份5元<br />\n          ．喜帖加購價，每份3元\n        </p>\n        <p class=\"indent hint\">\n          座位卡尺寸：5x8.2cm &nbsp;&nbsp; 喜帖材質：進口美術紙\n        </p>\n      </div>\n      <div class=\"column\">\n        <h3 class=\"underline\">禮物小卡</h3>\n        <p class=\"indent\">\n          ．10份起訂，每份10元<br />\n          ．喜帖加購價，每份8元\n        </p>\n        <p class=\"indent hint\">\n          禮物小卡尺寸：10x7cm &nbsp;&nbsp; 喜帖材質：進口美術紙\n        </p>\n      </div>\n    </div>\n    <div>\n      <h3 class=\"underline\">murmur</h3>\n      <p class=\"indent\">\n        ．總價=單價x份數+運費。<br />\n        ．訂購喜帖滿20份以上，即可享有喜帖加購價格。<br />\n        ．一起寄出的訂購商品僅收一趟運費。<br />\n        ．郵局包裹運費80元；宅急便包裹運費135元；海外運費另外報價。<br />\n        ．少量喜帖，信封寄件地址不建議燙金，會額外增加很多的費用。<br />\n        ．材質如果是進口美術紙，紙張顏色會根據每筆訂單搭配適合的顏色。\n      </p>\n    </div>\n  </div>\n</div>"
};

FAQ2 = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>計價方式與優惠</h1>\n    <div>\n      <h3 class=\"underline\">如何下單</h3>\n      <p class=\"indent\">\n        ．選擇喜歡的款式，加入購物車。<br />\n        ．在購物車畫面檢查資料、數量無誤後就可以按「下單購買」。<br />\n        ．我們審核訂單後，24小時內會Email給您，包含訂購資訊、內容、金額及匯款資訊，沒收到可到垃圾信　中找一下，並幫忙標示為非垃圾信。<br />\n        ．收到匯款後，我們會用Email和您校稿，每個工作天至少都會出一個版本和您校對，校對完成並繳清全額款項後就會送印，送印後就無法更改，所以要請大家詳細確認。\n      </p>\n      <p class=\"indent hint\">\n        若還有其他疑問，歡迎來 BISOUS臉書 私訊詢問\n      </p>\n    </div>\n    <div>\n      <h3 class=\"underline\">製作時間及交期</h3>\n      <p class=\"indent\">\n        ．確認收到匯款及訂單資訊後，1~2個工作天會收到第一版的排版。<br />\n        ．基本提供三次的修改(不含第一版的排版)，最多不超過五次的修改，<br />\n        ．收到第一次排版，可和長輩、家人討論詳細後，回覆信件告訴我們需要修改的地方，也可以善用一開始訂單的備註欄位喔。<br />\n        ．校稿無誤送印後，最慢10個工作天之內可以寄出喜帖。\n      </p>\n      <p class=\"indent hint\">\n        建議發送喜帖的前3~4周訂購喜帖，也就是婚期的前兩個月<br />\n        喜帖為客製商品，送印後不接受退換貨喔\n      </p>\n    </div>\n    <div>\n      <h3 class=\"underline\">murmur</h3>\n      <p class=\"indent\">\n        ．建議發送喜帖前3~4周可以開始訂購，也就是婚期前兩個月，若是有寄海外的需求，那時程就得提早到三至六個月囉！<br />\n        ．所有商品皆為客製商品，送印後不接受退換貨喔，所以校稿時請務必詳細確認內容。<br />\n        ．BISOUS提供少量10份起印，希望大家可以少量訂購，避免不必要的浪費喔！\n      </p>\n    </div>\n  </div>\n</div>"
};

FAQ3 = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>常見問題</h1>\n    <div>\n      <h3 class=\"underline\">喜帖上可以放照片嗎?</h3>\n      <p class=\"indent\">\n        ．因為印刷會有不可避免的色差問題，BISOUS目前沒有提供放照片的款式喔。\n      </p>\n    </div>\n    <div>\n      <h3 class=\"underline\">喜帖上可以改內文格式嗎?</h3>\n      <p class=\"indent\">\n        ．可以！<br />\n        ．需要酌收排版費用。<br />\n        ．BISOUS預設的內文排版是美式簡約，但也提供傳統中式內文、訂婚、結婚、歸寧或定結一起的內文，若有需要請在訂單備註時註明。\n      </p>\n      <p class=\"indent hint\">\n        如果有需要，請提供雙方主婚人(爺爺奶奶如果還健在也要一起提供喔！)、註明要更改什麼的內文格式\n      </p>\n    </div>\n    <div>\n      <h3 class=\"underline\">喜帖數量怎麼估算比較好？</h3>\n      <p class=\"indent\">\n        ．BISOUS提供少量10份起印，希望大家可以少量訂購，避免不必要的浪費喔！\n      </p>\n    </div>\n    <div>\n      <h3 class=\"underline\">信封上可以燙金寄件地址嗎？</h3>\n      <p class=\"indent\">\n        ．可以！<br />\n        ．若是少量喜帖，信封寄件地址不建議燙金，會額外增加很多很多很多的費用。\n      </p>\n      <p class=\"indent hint\">\n        若有需要請在訂購時於訂單備註註明\n      </p>\n    </div>\n    <div>\n      <h3 class=\"underline\">信封數量會多給嗎？</h3>\n      <p class=\"indent\">\n        ．會！為了避免過多的浪費，僅會多給1~2個喔，若有需求可以備註加購喔。\n      </p>\n      <p class=\"indent hint\">\n        信封加購價8元/個(無寄件地址燙金)\n      </p>\n    </div>\n    <div>\n      <h3 class=\"underline\">運費怎麼計算呢？</h3>\n      <p class=\"indent\">\n        ．郵局包裹運費80元；宅急便包裹運費135元；海外運費另外報價。<br />\n        ．還沒寄出的商品可以合併其他訂單，等所有商品都好了之後一起寄出僅收一趟運費。\n      </p>\n    </div>\n    <div>\n      <h3 class=\"underline\">收到商品後和我想的不一樣可以退換貨嗎？</h3>\n      <p class=\"indent\">\n        ．所有商品皆為客製商品，不適用七天鑑賞期/猶豫期 之規定。<br />\n        ．印刷商品不接受色差問題與想像有落差等問題退換貨。<br />\n        ．如有瑕疵的商品，請將瑕疵的部分拍照，並透過Email或臉書私訊發給我們，我們會儘快給您回覆，並協助您退換貨。\n      </p>\n    </div>\n    <div>\n      <h3 class=\"underline\">murmur</h3>\n      <p class=\"indent\">\n        ．善用BISOUS電子喜帖產生器，捍衛自己的錢包同時也呵護這孕育著您我的大地。\n      </p>\n    </div>\n  </div>\n</div>"
};

Generator = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>喜帖產生器</h1>\n    <div class=\"generator-wrapper\">\n      <div id=\"generator_container\">\n        <div id=\"generator_preview\" ref=\"generator_preview\">\n          <div class=\"preview-area\">\n            <div class=\"preview-area-wrapper\">\n              <div class=\"loading\" v-bind:class=\"{ 'on': loading_preview }\">\n                <div class=\"spinner\">\n                  <div class=\"bounce1\"></div>\n                  <div class=\"bounce2\"></div>\n                  <div class=\"bounce3\"></div>\n                </div>\n              </div>\n              <img :src=\"preview_image\" />\n            </div>\n          </div>\n          <div id=\"output_container\">\n            <img ref=\"basemap_image\" :src=\"basemap_image\" />\n            <div :class=\"['text-wrapper', template]\">\n              <div class=\"mate_1\" ref=\"mate_1\" v-text=\"mate_1\"></div>\n              <div class=\"mate_2\" ref=\"mate_2\" v-text=\"mate_2\"></div>\n              <div class=\"date\" ref=\"date\" v-text=\"date\"></div>\n              <div class=\"time\" ref=\"time\" v-text=\"time\"></div>\n              <div class=\"location\" ref=\"location\" v-text=\"location\"></div>\n              <div class=\"address\" ref=\"address\" v-html=\"nl2br(htmlEncode(address))\"></div>\n            </div>\n          </div>\n        </div>\n        <div id=\"generator_form\">\n          <div class=\"form-input\">\n            <div class=\"form-group\">\n              <h3 v-text=\"'結婚人'\"></h3>\n              <input type=\"text\" ref=\"mate_1_input\" v-model=\"mate_1_input\" v-on:focus=\"$event.target.select()\" />\n            </div>\n            <div class=\"form-group\">\n              <h3 v-text=\"'結婚人'\"></h3>\n              <input type=\"text\" ref=\"mate_2_input\" v-model=\"mate_2_input\" v-on:focus=\"$event.target.select()\" />\n            </div>\n            <div class=\"form-group\">\n              <h3 v-text=\"'日期'\"></h3>\n              <input type=\"text\" ref=\"date_input\" v-model=\"date_input\" v-on:focus=\"$event.target.select()\" />\n            </div>\n            <div class=\"form-group\">\n              <h3 v-text=\"'時間'\"></h3>\n              <input type=\"text\" ref=\"time_input\" v-model=\"time_input\" v-on:focus=\"$event.target.select()\" />\n            </div>\n            <div class=\"form-group\">\n              <h3 v-text=\"'地點'\"></h3>\n              <input type=\"text\" ref=\"location_input\" v-model=\"location_input\" v-on:focus=\"$event.target.select()\" />\n            </div>\n            <div class=\"form-group\">\n              <h3 v-text=\"'地址/電話'\"></h3>\n              <textarea ref=\"address_input\" v-model=\"address_input\" v-on:focus=\"$event.target.select()\" /></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
  data: function() {
    return {
      basemap_image: '/images/generator/01.png',
      preview_image: '/images/generator/01.png',
      template: 'template_01',
      mate_1: '',
      mate_1_default: 'Bisous',
      mate_1_input: 'Bisous',
      mate_2: '',
      mate_2_default: 'Yellowhite',
      mate_2_input: 'Yellowhite',
      date: '',
      date_default: 'MONDAY, SEPTEMBER 30TH, 2019',
      date_input: 'MONDAY, SEPTEMBER 30TH, 2019',
      time: '',
      time_default: 'AT 3:30, IN THE AFTERNOON',
      time_input: 'AT 3:30, IN THE AFTERNOON',
      location: '',
      location_default: 'BISOUS',
      location_input: 'BISOUS',
      address: '',
      address_default: 'WWW.BISOUS.COM.TW',
      address_input: 'WWW.BISOUS.COM.TW',
      initialed: false,
      loading_preview: false
    };
  },
  beforeMount: function() {
    appendFont('Ramland', this.generate_preview);
    this.mate_1 = this.mate_1_default;
    this.mate_2 = this.mate_2_default;
    this.date = this.date_default;
    this.time = this.time_default;
    this.location = this.location_default;
    return this.address = this.address_default;
  },
  mounted: function() {
    this.generate_preview();
    return this.initialed = true;
  },
  methods: {
    generate_preview: function() {
      this.loading_preview = true;
      return this.create_preview_image();
    },
    generator: function(action) {
      this.output_action = action;
      return this.prepare_generator();
    },
    prepare_generator: function() {
      gogo.start();
      this.show_social_share_popup();
      return this.create_image_html2canvas();
    },
    create_preview_image: function() {
      return setTimeout((function() {
        var self;
        if (jQuery('#output_container').length > 0) {
          self = this;
          return html2canvas(document.querySelector('#output_container'), {
            scale: 1,
            logging: false,
            backgroundColor: null
          }).then(function(canvas) {
            var output;
            output = canvas.toDataURL('image/png');
            if (typeof self.preview_image !== 'undefined') {
              return self.preview_image = output;
            }
          })["catch"](function(error) {
            return xx(error);
          });
        }
      }).bind(this), 500);
    }
  },
  watch: {
    mate_1_input: function(value) {
      return this.mate_1 = value === '' ? this.mate_1_default : value;
    },
    mate_1: function(value) {
      if (this.initialed) {
        return this.$nextTick(function() {
          return this.generate_preview();
        });
      }
    },
    mate_2_input: function(value) {
      return this.mate_2 = value === '' ? this.mate_2_default : value;
    },
    mate_2: function(value) {
      if (this.initialed) {
        return this.$nextTick(function() {
          return this.generate_preview();
        });
      }
    },
    date_input: function(value) {
      return this.date = value === '' ? this.date_default : value;
    },
    date: function(value) {
      if (this.initialed) {
        return this.$nextTick(function() {
          return this.generate_preview();
        });
      }
    },
    time_input: function(value) {
      return this.time = value === '' ? this.time_default : value;
    },
    time: function(value) {
      if (this.initialed) {
        return this.$nextTick(function() {
          return this.generate_preview();
        });
      }
    },
    location_input: function(value) {
      return this.location = value === '' ? this.location_default : value;
    },
    location: function(value) {
      if (this.initialed) {
        return this.$nextTick(function() {
          return this.generate_preview();
        });
      }
    },
    address_input: function(value) {
      return this.address = value === '' ? this.address_default : value;
    },
    address: function(value) {
      if (this.initialed) {
        return this.$nextTick(function() {
          return this.generate_preview();
        });
      }
    },
    preview_image: function(value) {
      return this.loading_preview = false;
    }
  }
};

Home = {
  template: "<div>\n  <hero></hero>\n  <home-themes></home-themes>\n</div>"
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
            path: 'others',
            name: 'theme_others',
            component: ThemesOthers
          }
        ]
      }, {
        path: 'faq',
        component: {
          template: '<router-view></router-view>'
        },
        children: [
          {
            path: 'faq-1',
            name: 'faq_1',
            component: FAQ1
          }, {
            path: 'faq-2',
            name: 'faq_2',
            component: FAQ2
          }, {
            path: 'faq-3',
            name: 'faq_3',
            component: FAQ3
          }
        ]
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
