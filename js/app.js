var About, Cart, DEBUG, Error404, FAQ1, FAQ2, FAQ3, Generator, Home, Thankyou, ThemesGiftCard, ThemesOthers, ThemesRSVP, ThemesSeatingCard, ThemesThankYouCard, ThemesWeddingCard, app, appendFont, detectBrowserLang, detectInFBApp, float, focusFirstInput, forceDownload, headerTo, htmlDecode, htmlEncode, inArray, isAndroid, nl2br, routeRedirect, router, routes, scrollTop, xx;

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

nl2br = function(string) {
  if (typeof string === 'undefined' || string === null) {
    return '';
  }
  string = (string + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1</div><div>$2');
  return string = '<div>' + string + '</div>';
};

forceDownload = function(url, filename) {
  var link;
  link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  return document.body.removeChild(link);
};

inArray = function(needle, haystack) {
  var i, length;
  length = haystack.length;
  i = 0;
  while (i < length) {
    if (haystack[i] === needle) {
      return true;
    }
    i++;
  }
  return false;
};

appendFont = function(font, callback) {
  var link;
  link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.onload = function() {
    return FontFaceOnload(font, {
      success: function() {
        return xx('font expended');
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

routeRedirect = function(route_name, route_params) {
  return router.push({
    name: route_name,
    params: route_params
  });
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
  template: "<header id=\"header\" class=\"\">\n  <div class=\"wrapper\">\n    <div id=\"header-brand\">\n      <router-link :to=\"{name: 'home'}\"></router-link>\n    </div>\n    <div id=\"header-nav\">\n      <ul>\n        <li>\n          <router-link :to=\"{name: 'about'}\">About</router-link>\n        </li>\n        <li>\n          <router-link :to=\"{name: 'generator'}\">Generator</router-link>\n        </li>\n        <li>\n          <a href=\"#\">Themes</a>\n          <ul class=\"sub-nav\">\n            <li><router-link :to=\"{name: 'theme_wedding_card'}\">喜帖</router-link></li>\n            <li><router-link :to=\"{name: 'theme_rsvp'}\">回函卡</router-link></li>\n            <li><router-link :to=\"{name: 'theme_thank_you_card'}\">感謝卡</router-link></li>\n            <li><router-link :to=\"{name: 'theme_seating_card'}\">座位卡</router-link></li>\n            <li><router-link :to=\"{name: 'theme_gift_card'}\">禮物小卡</router-link></li>\n            <li><router-link :to=\"{name: 'theme_others'}\">其他</router-link></li>\n          </ul>\n        </li>\n        <li>\n          <a href=\"#\">FAQ</a>\n          <ul class=\"sub-nav\">\n            <li><router-link :to=\"{name: 'faq_1'}\">計價方式與優惠</router-link></li>\n            <li><router-link :to=\"{name: 'faq_2'}\">下單流程與交期</router-link></li>\n            <li><router-link :to=\"{name: 'faq_3'}\">常見問題</router-link></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n    <div id=\"header-cart\">\n      <router-link :to=\"{name: 'cart'}\">Cart (${$parent.cart.length})</router-link>\n    </div>\n  </div>\n</header>"
});

About = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>關於我們<small>About</small></h1>\n    <h3 class=\"underline\">聯繫方式</h3>\n    <p>\n      ．客服信箱：<a href=\"mailto:info@bisous.com.tw\">info@bisous.com.tw</a><br />\n      ．臉書粉絲團\n    </p>\n  </div>\n</div>"
};

Cart = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>訂購</h1>\n    <div v-if=\"this.$parent.$parent.cart.length == 0\">\n      你的購物車目前沒有東西唷！\n    </div>\n    <div class=\"fields-column-2 pad-full-width\" v-if=\"this.$parent.$parent.cart.length > 0\">\n      <div class=\"column\">\n        <h3 class=\"underline\">訂購表單</h3>\n        <form class=\"jotform-form\" action=\"https://submit.jotform.me/submit/92921919688475/\" method=\"post\" name=\"form_92921919688475\" id=\"92921919688475\" accept-charset=\"utf-8\">\n          <input type=\"hidden\" name=\"formID\" value=\"92921919688475\" />\n          <input type=\"hidden\" id=\"JWTContainer\" value=\"\" />\n          <input type=\"hidden\" id=\"cardinalOrderNumber\" value=\"\" />\n          <div role=\"main\" class=\"form-all\">\n            <ul class=\"form-section page-section\">\n              <li class=\"form-line jf-required\" data-type=\"control_textbox\" id=\"id_3\">\n                <label class=\"form-label form-label-top form-label-auto\" id=\"label_3\" for=\"input_3\">\n                  訂購人\n                  <span class=\"form-required\">\n                    *\n                  </span>\n                </label>\n                <div id=\"cid_3\" class=\"form-input-wide jf-required\">\n                  <input type=\"text\" id=\"input_3\" name=\"q3_typeA\" data-type=\"input-textbox\" class=\"form-textbox validate[required]\" size=\"20\" value=\"\" data-component=\"textbox\" aria-labelledby=\"label_3\" required=\"\" v-model=\"form.order_name\" />\n                </div>\n              </li>\n              <li class=\"form-line jf-required\" data-type=\"control_textbox\" id=\"id_4\">\n                <label class=\"form-label form-label-top form-label-auto\" id=\"label_4\" for=\"input_4\">\n                  聯絡電話\n                  <span class=\"form-required\">\n                    *\n                  </span>\n                </label>\n                <div id=\"cid_4\" class=\"form-input-wide jf-required\">\n                  <input type=\"text\" id=\"input_4\" name=\"q4_typeA4\" data-type=\"input-textbox\" class=\"form-textbox validate[required]\" size=\"20\" value=\"\" data-component=\"textbox\" aria-labelledby=\"label_4\" required=\"\" v-model=\"form.order_phone\" />\n                </div>\n              </li>\n              <li class=\"form-line jf-required\" data-type=\"control_email\" id=\"id_5\">\n                <label class=\"form-label form-label-top form-label-auto\" id=\"label_5\" for=\"input_5\">\n                  Email\n                  <span class=\"form-required\">\n                    *\n                  </span>\n                </label>\n                <div id=\"cid_5\" class=\"form-input-wide jf-required\">\n                  <span class=\"form-sub-label-container\" style=\"vertical-align:top\">\n                    <input type=\"email\" id=\"input_5\" name=\"q5_email\" class=\"form-textbox validate[required, Email]\" size=\"30\" value=\"\" data-component=\"email\" aria-labelledby=\"label_5 sublabel_input_5\" required=\"\" v-model=\"form.order_email\" />\n                    <label class=\"form-sub-label\" for=\"input_5\" id=\"sublabel_input_5\" style=\"min-height:13px\"> 請務必填寫正確，我們會用Email確認訂單 </label>\n                  </span>\n                </div>\n              </li>\n              <li class=\"form-line jf-required\" data-type=\"control_textbox\" id=\"id_6\">\n                <label class=\"form-label form-label-top form-label-auto\" id=\"label_6\" for=\"input_6\">\n                  收件人姓名\n                  <span class=\"form-required\">\n                    *\n                  </span>\n                </label>\n                <div id=\"cid_6\" class=\"form-input-wide jf-required\">\n                  <input type=\"text\" id=\"input_6\" name=\"q6_typeA6\" data-type=\"input-textbox\" class=\"form-textbox validate[required]\" size=\"20\" value=\"\" data-component=\"textbox\" aria-labelledby=\"label_6\" required=\"\" v-model=\"form.shipping_name\" />\n                </div>\n              </li>\n              <li class=\"form-line jf-required\" data-type=\"control_textbox\" id=\"id_7\">\n                <label class=\"form-label form-label-top form-label-auto\" id=\"label_7\" for=\"input_7\">\n                  收件人電話\n                  <span class=\"form-required\">\n                    *\n                  </span>\n                </label>\n                <div id=\"cid_7\" class=\"form-input-wide jf-required\">\n                  <input type=\"text\" id=\"input_7\" name=\"q7_typeA7\" data-type=\"input-textbox\" class=\"form-textbox validate[required]\" size=\"20\" value=\"\" data-component=\"textbox\" aria-labelledby=\"label_7\" required=\"\" v-model=\"form.shipping_phone\" />\n                </div>\n              </li>\n              <li class=\"form-line jf-required\" data-type=\"control_textbox\" id=\"id_8\">\n                <label class=\"form-label form-label-top form-label-auto\" id=\"label_8\" for=\"input_8\">\n                  收件人地址\n                  <span class=\"form-required\">\n                    *\n                  </span>\n                </label>\n                <div id=\"cid_8\" class=\"form-input-wide jf-required\">\n                  <input type=\"text\" id=\"input_8\" name=\"q8_typeA8\" data-type=\"input-textbox\" class=\"form-textbox validate[required]\" size=\"20\" value=\"\" data-component=\"textbox\" aria-labelledby=\"label_8\" required=\"\" v-model=\"form.shipping_address\" />\n                </div>\n              </li>\n              <li class=\"form-line\" data-type=\"control_radio\" id=\"id_10\">\n                <label class=\"form-label form-label-top form-label-auto\" id=\"label_10\" for=\"input_10\"> 寄送方式 </label>\n                <div id=\"cid_10\" class=\"form-input-wide\">\n                  <div class=\"form-single-column\" role=\"group\" aria-labelledby=\"label_10\" data-component=\"radio\">\n                    <span class=\"form-radio-item\" style=\"clear:left\">\n                      <span class=\"dragger-item\">\n                      </span>\n                      <input type=\"radio\" class=\"form-radio\" id=\"input_10_0\" name=\"q10_typeA10\" value=\"郵寄包裹\" v-model=\"form.shipping_method\" />\n                      <label id=\"label_input_10_0\" for=\"input_10_0\"> 郵寄包裹 </label>\n                    </span>\n                    <span class=\"form-radio-item\" style=\"clear:left\">\n                      <span class=\"dragger-item\">\n                      </span>\n                      <input type=\"radio\" class=\"form-radio\" id=\"input_10_1\" name=\"q10_typeA10\" value=\"宅急便包裹\" v-model=\"form.shipping_method\" />\n                      <label id=\"label_input_10_1\" for=\"input_10_1\"> 宅急便包裹 </label>\n                    </span>\n                  </div>\n                </div>\n              </li>\n              <li class=\"form-line\" data-type=\"control_divider\" id=\"id_11\">\n                <div id=\"cid_11\" class=\"form-input-wide\">\n                  <div data-component=\"divider\" style=\"border-bottom:1px solid #e6e6e6;height:1px;margin-left:0px;margin-right:0px;margin-top:16px;margin-bottom:4px\">\n                  </div>\n                </div>\n              </li>\n              <li class=\"form-line jf-required\" data-type=\"control_textbox\" id=\"id_12\">\n                <label class=\"form-label form-label-top form-label-auto\" id=\"label_12\" for=\"input_12\">\n                  結婚人姓名 1\n                  <span class=\"form-required\">\n                    *\n                  </span>\n                </label>\n                <div id=\"cid_12\" class=\"form-input-wide jf-required\">\n                  <input type=\"text\" id=\"input_12\" name=\"q12_typeA12\" data-type=\"input-textbox\" class=\"form-textbox validate[required]\" size=\"20\" value=\"\" data-component=\"textbox\" aria-labelledby=\"label_12\" required=\"\" v-model=\"form.wedding_mate_1\" />\n                </div>\n              </li>\n              <li class=\"form-line jf-required\" data-type=\"control_textbox\" id=\"id_13\">\n                <label class=\"form-label form-label-top form-label-auto\" id=\"label_13\" for=\"input_13\">\n                  結婚人姓名 2\n                  <span class=\"form-required\">\n                    *\n                  </span>\n                </label>\n                <div id=\"cid_13\" class=\"form-input-wide jf-required\">\n                  <input type=\"text\" id=\"input_13\" name=\"q13_typeA13\" data-type=\"input-textbox\" class=\"form-textbox validate[required]\" size=\"20\" value=\"\" data-component=\"textbox\" aria-labelledby=\"label_13\" required=\"\" v-model=\"form.wedding_mate_2\" />\n                </div>\n              </li>\n              <li class=\"form-line jf-required\" data-type=\"control_textbox\" id=\"id_14\">\n                <label class=\"form-label form-label-top form-label-auto\" id=\"label_14\" for=\"input_14\">\n                  喜宴日期\n                  <span class=\"form-required\">\n                    *\n                  </span>\n                </label>\n                <div id=\"cid_14\" class=\"form-input-wide jf-required\">\n                  <input type=\"text\" id=\"input_14\" name=\"q14_typeA14\" data-type=\"input-textbox\" class=\"form-textbox validate[required]\" size=\"20\" value=\"\" data-component=\"textbox\" aria-labelledby=\"label_14\" required=\"\" v-model=\"form.wedding_date\" />\n                </div>\n              </li>\n              <li class=\"form-line jf-required\" data-type=\"control_textbox\" id=\"id_15\">\n                <label class=\"form-label form-label-top form-label-auto\" id=\"label_15\" for=\"input_15\">\n                  喜宴時間\n                  <span class=\"form-required\">\n                    *\n                  </span>\n                </label>\n                <div id=\"cid_15\" class=\"form-input-wide jf-required\">\n                  <input type=\"text\" id=\"input_15\" name=\"q15_typeA15\" data-type=\"input-textbox\" class=\"form-textbox validate[required]\" size=\"20\" value=\"\" data-component=\"textbox\" aria-labelledby=\"label_15\" required=\"\" v-model=\"form.wedding_time\" />\n                </div>\n              </li>\n              <li class=\"form-line jf-required\" data-type=\"control_textbox\" id=\"id_16\">\n                <label class=\"form-label form-label-top form-label-auto\" id=\"label_16\" for=\"input_16\">\n                  喜宴地點\n                  <span class=\"form-required\">\n                    *\n                  </span>\n                </label>\n                <div id=\"cid_16\" class=\"form-input-wide jf-required\">\n                  <input type=\"text\" id=\"input_16\" name=\"q16_typeA16\" data-type=\"input-textbox\" class=\"form-textbox validate[required]\" size=\"20\" value=\"\" data-component=\"textbox\" aria-labelledby=\"label_16\" required=\"\" v-model=\"form.wedding_location\" />\n                </div>\n              </li>\n              <li class=\"form-line jf-required\" data-type=\"control_textarea\" id=\"id_17\">\n                <label class=\"form-label form-label-top form-label-auto\" id=\"label_17\" for=\"input_17\">\n                  喜宴地址/電話\n                  <span class=\"form-required\">\n                    *\n                  </span>\n                </label>\n                <div id=\"cid_17\" class=\"form-input-wide jf-required\">\n                  <textarea id=\"input_17\" class=\"form-textarea validate[required]\" name=\"q17_typeA17\" cols=\"40\" rows=\"6\" data-component=\"textarea\" required=\"\" aria-labelledby=\"label_17\">${form.wedding_address}</textarea>\n                </div>\n              </li>\n              <li class=\"form-line\" data-type=\"control_divider\" id=\"id_18\">\n                <div id=\"cid_18\" class=\"form-input-wide\">\n                  <div data-component=\"divider\" style=\"border-bottom:1px solid #e6e6e6;height:1px;margin-left:0px;margin-right:0px;margin-top:16px;margin-bottom:4px\">\n                  </div>\n                </div>\n              </li>\n              <li class=\"form-line\" data-type=\"control_textarea\" id=\"id_19\">\n                <label class=\"form-label form-label-top form-label-auto\" id=\"label_19\" for=\"input_19\"> 訂單備註 </label>\n                <div id=\"cid_19\" class=\"form-input-wide\">\n                  <textarea id=\"input_19\" class=\"form-textarea\" name=\"q19_typeA19\" cols=\"40\" rows=\"6\" data-component=\"textarea\" aria-labelledby=\"label_19\">${form.order_note}</textarea>\n                </div>\n              </li>\n              <li class=\"form-line\" data-type=\"control_textarea\" id=\"id_20\" style=\"display:none;\">\n                <label class=\"form-label form-label-top form-label-auto\" id=\"label_20\" for=\"input_20\"> 訂單內容 </label>\n                <div id=\"cid_20\" class=\"form-input-wide\">\n                  <textarea id=\"input_20\" class=\"form-textarea\" name=\"q20_typeA20\" cols=\"40\" rows=\"6\" data-component=\"textarea\" aria-labelledby=\"label_20\">${form.order_content}</textarea>\n                </div>\n              </li>\n              <li class=\"form-line\" data-type=\"control_button\" id=\"id_2\">\n                <div id=\"cid_2\" class=\"form-input-wide\">\n                  <div style=\"text-align:left\" class=\"form-buttons-wrapper \">\n                    <button id=\"input_2\" type=\"submit\" class=\"form-submit-button button\" data-component=\"button\">\n                      下單購買\n                    </button>\n                  </div>\n                </div>\n              </li>\n              <li style=\"display:none\">\n                Should be Empty:\n                <input type=\"text\" name=\"website\" value=\"\" />\n              </li>\n            </ul>\n          </div>\n          <input type=\"hidden\" id=\"simple_spc\" name=\"simple_spc\" value=\"92921919688475\" />\n        </form>\n      </div>\n      <div class=\"column\">\n        <div>\n          <h3 class=\"underline\">訂購商品清單</h3>\n          <ul class=\"order-list\">\n            <li class=\"list-item\" v-for=\"(item, index) in this.$parent.$parent.cart\">\n              <div class=\"item-wrapper\">\n                <div class=\"item-image\" :style=\"{ backgroundImage: 'url(/images/templates/thumbnail/' + item.template + '.jpg)' }\"></div>\n                <div class=\"item-content\">\n                  <h4 class=\"item-title\">${item.template}</h4>\n                  <div>\n                    數量：${item.total}\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <div>\n          <h3 class=\"underline\">專人聯繫付款</h3>\n          <p>\n            ．我們會在24小時內審查您的訂單，審查完後會發「訂單確認信」到您Email並發送簡訊告知<br />\n            ．收到訂單確認信後，請回信告知匯款帳號末五碼<br />\n            ．您的訂單在入帳前將不會被排版、印製或出貨<br />\n            ．喜帖屬客製化商品，不適用七天鑑賞期可退貨之規定（商品瑕疵除外）<br />\n            ．喜帖印製需10個工作天（不含校稿時間、週末與假日）\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
  data: function() {
    return {
      form: {}
    };
  },
  mounted: function() {
    if (this.$parent.$parent.cart.length > 0) {
      this.form = this.$parent.$parent.form;
      this.form.order_content = JSON.stringify(this.$parent.$parent.cart);
      return setTimeout(function() {
        return document.getElementById("si" + "mple" + "_spc").value = "92921919688475-92921919688475";
      }, 500);
    }
  }
};

Error404 = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>Page Cannot Be Found</h1>\n    <p>If you are an existing user and are looking for account or theme info, please submit a message to us here.</p>\n  </div>\n</div>"
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
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>喜帖產生器</h1>\n    <div class=\"generator-wrapper\">\n      <div id=\"generator_container\">\n        <div id=\"generator_preview\" ref=\"generator_preview\">\n          <div class=\"preview-area\">\n            <div class=\"preview-area-wrapper\">\n              <div class=\"loading\" v-bind:class=\"{ 'on': loading_preview }\">\n                <div class=\"spinner\">\n                  <div class=\"bounce1\"></div>\n                  <div class=\"bounce2\"></div>\n                  <div class=\"bounce3\"></div>\n                </div>\n              </div>\n              <img :src=\"preview_image\" />\n            </div>\n          </div>\n          <div id=\"output_container\">\n            <img ref=\"template_image\" :src=\"'/images/templates/' + current_template + '.png'\" />\n            <div :class=\"['text-wrapper', current_template]\">\n              <div class=\"wedding_mate_1\" ref=\"wedding_mate_1\" v-text=\"wedding_mate_1\"></div>\n              <div class=\"wedding_mate_2\" ref=\"wedding_mate_2\" v-text=\"wedding_mate_2\"></div>\n              <div class=\"wedding_date\" ref=\"wedding_date\" v-text=\"wedding_date\"></div>\n              <div class=\"wedding_time\" ref=\"wedding_time\" v-text=\"wedding_time\"></div>\n              <div class=\"wedding_location\" ref=\"wedding_location\" v-text=\"wedding_location\"></div>\n              <div class=\"wedding_address\" ref=\"wedding_address\" v-html=\"nl2br(htmlEncode(wedding_address))\"></div>\n            </div>\n          </div>\n        </div>\n        <div id=\"generator_form\">\n          <div class=\"form-input\">\n            <div class=\"form-group\">\n              <h3 v-text=\"'選擇版型'\"></h3>\n              <div id=\"templates_list_container\" class=\"template-select-list\">\n                <label v-for=\"(item, index) in templates\" :class=\"{ 'active' : item == current_template }\">\n                  <div class=\"image-item\" :style=\"{ backgroundImage: 'url(/images/templates/thumbnail/' + item + '.jpg)' }\"></div>\n                  <input type=\"radio\" v-model=\"current_template\" :value=\"item\">\n                </label>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <h3 v-text=\"'結婚人'\"></h3>\n              <input type=\"text\" ref=\"wedding_mate_1_input\" v-model=\"wedding_mate_1_input\" v-on:focus=\"$event.target.select()\" />\n            </div>\n            <div class=\"form-group\">\n              <h3 v-text=\"'結婚人'\"></h3>\n              <input type=\"text\" ref=\"wedding_mate_2_input\" v-model=\"wedding_mate_2_input\" v-on:focus=\"$event.target.select()\" />\n            </div>\n            <div class=\"form-group\">\n              <h3 v-text=\"'日期'\"></h3>\n              <input type=\"text\" ref=\"wedding_date_input\" v-model=\"wedding_date_input\" v-on:focus=\"$event.target.select()\" />\n            </div>\n            <div class=\"form-group\">\n              <h3 v-text=\"'時間'\"></h3>\n              <input type=\"text\" ref=\"wedding_time_input\" v-model=\"wedding_time_input\" v-on:focus=\"$event.target.select()\" />\n            </div>\n            <div class=\"form-group\">\n              <h3 v-text=\"'地點'\"></h3>\n              <input type=\"text\" ref=\"wedding_location_input\" v-model=\"wedding_location_input\" v-on:focus=\"$event.target.select()\" />\n            </div>\n            <div class=\"form-group\">\n              <h3 v-text=\"'地址/電話'\"></h3>\n              <textarea ref=\"wedding_address_input\" v-model=\"wedding_address_input\" v-on:focus=\"$event.target.select()\" /></textarea>\n            </div>\n          </div>\n          <div class=\"form-action\">\n            <div class=\"generator-buttons\">\n              <button type=\"button\" class=\"button\" v-on:click=\"download_image()\">\n                下載\n              </button>\n              <button type=\"button\" class=\"button\" v-on:click=\"add_to_cart()\">\n                訂購\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
  data: function() {
    return {
      preview_image: '/images/templates/TP01.png',
      templates: ['TP01', 'TP02', 'TP03', 'TP04'],
      current_template: 'TP01',
      wedding_mate_1: '',
      wedding_mate_1_default: 'Bisous',
      wedding_mate_1_input: 'Bisous',
      wedding_mate_2: '',
      wedding_mate_2_default: 'Yellowhite',
      wedding_mate_2_input: 'Yellowhite',
      wedding_date: '',
      wedding_date_default: 'MONDAY, SEPTEMBER 30TH, 2019',
      wedding_date_input: 'MONDAY, SEPTEMBER 30TH, 2019',
      wedding_time: '',
      wedding_time_default: 'AT 3:30, IN THE AFTERNOON',
      wedding_time_input: 'AT 3:30, IN THE AFTERNOON',
      wedding_location: '',
      wedding_location_default: 'BISOUS',
      wedding_location_input: 'BISOUS',
      wedding_address: '',
      wedding_address_default: 'WWW.BISOUS.COM.TW',
      wedding_address_input: 'WWW.BISOUS.COM.TW',
      initialed: false,
      loading_preview: false
    };
  },
  beforeMount: function() {
    appendFont('Ramland');
    appendFont('BellMT');
    this.wedding_mate_1 = this.wedding_mate_1_default;
    this.wedding_mate_2 = this.wedding_mate_2_default;
    this.wedding_date = this.wedding_date_default;
    this.wedding_time = this.wedding_time_default;
    this.wedding_location = this.wedding_location_default;
    return this.wedding_address = this.wedding_address_default;
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
    },
    download_image: function() {
      return setTimeout((function() {
        var self;
        self = this;
        return html2canvas(document.querySelector('#output_container'), {
          scale: 1,
          logging: false,
          backgroundColor: null
        }).then(function(canvas) {
          var output;
          output = canvas.toDataURL('image/png');
          if ($is.not.desktop()) {
            return headerTo(output);
          } else {
            return forceDownload(output, 'image.png');
          }
        })["catch"](function(error) {
          return xx(error);
        });
      }).bind(this), 1000);
    },
    add_to_cart: function() {
      var item;
      this.$parent.$parent.form.wedding_mate_1 = this.wedding_mate_1;
      this.$parent.$parent.form.wedding_mate_2 = this.wedding_mate_2;
      this.$parent.$parent.form.wedding_date = this.wedding_date;
      this.$parent.$parent.form.wedding_time = this.wedding_time;
      this.$parent.$parent.form.wedding_location = this.wedding_location;
      this.$parent.$parent.form.wedding_address = this.wedding_address;
      if (inArray(this.current_template, this.$parent.$parent.cart) === false) {
        item = {
          template: this.current_template,
          total: 10
        };
        this.$parent.$parent.cart.push(item);
      }
      return routeRedirect('cart', '');
    }
  },
  watch: {
    current_template: function(value) {
      if (this.initialed) {
        return this.$nextTick(function() {
          return this.generate_preview();
        });
      }
    },
    wedding_mate_1_input: function(value) {
      return this.wedding_mate_1 = value === '' ? this.wedding_mate_1_default : value;
    },
    wedding_mate_1: function(value) {
      if (this.initialed) {
        return this.$nextTick(function() {
          return this.generate_preview();
        });
      }
    },
    wedding_mate_2_input: function(value) {
      return this.wedding_mate_2 = value === '' ? this.wedding_mate_2_default : value;
    },
    wedding_mate_2: function(value) {
      if (this.initialed) {
        return this.$nextTick(function() {
          return this.generate_preview();
        });
      }
    },
    wedding_date_input: function(value) {
      return this.wedding_date = value === '' ? this.wedding_date_default : value;
    },
    wedding_date: function(value) {
      if (this.initialed) {
        return this.$nextTick(function() {
          return this.generate_preview();
        });
      }
    },
    wedding_time_input: function(value) {
      return this.wedding_time = value === '' ? this.wedding_time_default : value;
    },
    wedding_time: function(value) {
      if (this.initialed) {
        return this.$nextTick(function() {
          return this.generate_preview();
        });
      }
    },
    wedding_location_input: function(value) {
      return this.wedding_location = value === '' ? this.wedding_location_default : value;
    },
    wedding_location: function(value) {
      if (this.initialed) {
        return this.$nextTick(function() {
          return this.generate_preview();
        });
      }
    },
    wedding_address_input: function(value) {
      return this.wedding_address = value === '' ? this.wedding_address_default : value;
    },
    wedding_address: function(value) {
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

Thankyou = {
  template: "<div class=\"default-layout\">\n  <div class=\"wrapper\">\n    <h1>感謝您</h1>\n    <h3 class=\"underline\">聯繫方式</h3>\n    <p>\n      ．客服信箱：<a href=\"mailto:info@bisous.com.tw\">info@bisous.com.tw</a><br />\n      ．臉書粉絲團\n    </p>\n  </div>\n</div>"
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
        path: 'thankyou',
        name: 'thankyou',
        component: Thankyou
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
  data: function() {
    return {
      cart: [
        {
          template: 'TP01',
          total: 10
        }
      ],
      form: {
        wedding_mate_1: '',
        wedding_mate_2: '',
        wedding_date: '',
        wedding_time: '',
        wedding_location: '',
        wedding_address: '',
        order_name: '',
        order_phone: '',
        order_email: '',
        order_note: '',
        shipping_name: '',
        shipping_phone: '',
        shipping_address: '',
        shipping_method: ''
      }
    };
  },
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
