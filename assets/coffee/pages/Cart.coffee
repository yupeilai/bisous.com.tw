Cart =
  template: """
    <div class="default-layout">
      <div class="wrapper">
        <h1>訂購</h1>
        <div v-if="this.$parent.$parent.cart.length == 0">
          你的購物車目前沒有東西唷！
        </div>
        <div class="fields-column-2 pad-full-width" v-if="this.$parent.$parent.cart.length > 0">
          <div class="column">
            <h3 class="underline">訂購表單</h3>
            <form class="jotform-form" action="https://submit.jotform.me/submit/92921919688475/" method="post" name="form_92921919688475" id="92921919688475" accept-charset="utf-8">
              <input type="hidden" name="formID" value="92921919688475" />
              <input type="hidden" id="JWTContainer" value="" />
              <input type="hidden" id="cardinalOrderNumber" value="" />
              <div role="main" class="form-all">
                <ul class="form-section page-section">
                  <li class="form-line jf-required" data-type="control_textbox" id="id_3">
                    <label class="form-label form-label-top form-label-auto" id="label_3" for="input_3">
                      訂購人
                      <span class="form-required">
                        *
                      </span>
                    </label>
                    <div id="cid_3" class="form-input-wide jf-required">
                      <input type="text" id="input_3" name="q3_typeA" data-type="input-textbox" class="form-textbox validate[required]" size="20" value="" data-component="textbox" aria-labelledby="label_3" required="" v-model="form.order_name" />
                    </div>
                  </li>
                  <li class="form-line jf-required" data-type="control_textbox" id="id_4">
                    <label class="form-label form-label-top form-label-auto" id="label_4" for="input_4">
                      聯絡電話
                      <span class="form-required">
                        *
                      </span>
                    </label>
                    <div id="cid_4" class="form-input-wide jf-required">
                      <input type="text" id="input_4" name="q4_typeA4" data-type="input-textbox" class="form-textbox validate[required]" size="20" value="" data-component="textbox" aria-labelledby="label_4" required="" v-model="form.order_phone" />
                    </div>
                  </li>
                  <li class="form-line jf-required" data-type="control_email" id="id_5">
                    <label class="form-label form-label-top form-label-auto" id="label_5" for="input_5">
                      Email
                      <span class="form-required">
                        *
                      </span>
                    </label>
                    <div id="cid_5" class="form-input-wide jf-required">
                      <span class="form-sub-label-container" style="vertical-align:top">
                        <input type="email" id="input_5" name="q5_email" class="form-textbox validate[required, Email]" size="30" value="" data-component="email" aria-labelledby="label_5 sublabel_input_5" required="" v-model="form.order_email" />
                        <label class="form-sub-label" for="input_5" id="sublabel_input_5" style="min-height:13px"> 請務必填寫正確，我們會用Email確認訂單 </label>
                      </span>
                    </div>
                  </li>
                  <li class="form-line jf-required" data-type="control_textbox" id="id_6">
                    <label class="form-label form-label-top form-label-auto" id="label_6" for="input_6">
                      收件人姓名
                      <span class="form-required">
                        *
                      </span>
                    </label>
                    <div id="cid_6" class="form-input-wide jf-required">
                      <input type="text" id="input_6" name="q6_typeA6" data-type="input-textbox" class="form-textbox validate[required]" size="20" value="" data-component="textbox" aria-labelledby="label_6" required="" v-model="form.shipping_name" />
                    </div>
                  </li>
                  <li class="form-line jf-required" data-type="control_textbox" id="id_7">
                    <label class="form-label form-label-top form-label-auto" id="label_7" for="input_7">
                      收件人電話
                      <span class="form-required">
                        *
                      </span>
                    </label>
                    <div id="cid_7" class="form-input-wide jf-required">
                      <input type="text" id="input_7" name="q7_typeA7" data-type="input-textbox" class="form-textbox validate[required]" size="20" value="" data-component="textbox" aria-labelledby="label_7" required="" v-model="form.shipping_phone" />
                    </div>
                  </li>
                  <li class="form-line jf-required" data-type="control_textbox" id="id_8">
                    <label class="form-label form-label-top form-label-auto" id="label_8" for="input_8">
                      收件人地址
                      <span class="form-required">
                        *
                      </span>
                    </label>
                    <div id="cid_8" class="form-input-wide jf-required">
                      <input type="text" id="input_8" name="q8_typeA8" data-type="input-textbox" class="form-textbox validate[required]" size="20" value="" data-component="textbox" aria-labelledby="label_8" required="" v-model="form.shipping_address" />
                    </div>
                  </li>
                  <li class="form-line" data-type="control_radio" id="id_10">
                    <label class="form-label form-label-top form-label-auto" id="label_10" for="input_10"> 寄送方式 </label>
                    <div id="cid_10" class="form-input-wide">
                      <div class="form-single-column" role="group" aria-labelledby="label_10" data-component="radio">
                        <span class="form-radio-item" style="clear:left">
                          <span class="dragger-item">
                          </span>
                          <input type="radio" class="form-radio" id="input_10_0" name="q10_typeA10" value="郵寄包裹" v-model="form.shipping_method" />
                          <label id="label_input_10_0" for="input_10_0"> 郵寄包裹 </label>
                        </span>
                        <span class="form-radio-item" style="clear:left">
                          <span class="dragger-item">
                          </span>
                          <input type="radio" class="form-radio" id="input_10_1" name="q10_typeA10" value="宅急便包裹" v-model="form.shipping_method" />
                          <label id="label_input_10_1" for="input_10_1"> 宅急便包裹 </label>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li class="form-line" data-type="control_divider" id="id_11">
                    <div id="cid_11" class="form-input-wide">
                      <div data-component="divider" style="border-bottom:1px solid #e6e6e6;height:1px;margin-left:0px;margin-right:0px;margin-top:16px;margin-bottom:4px">
                      </div>
                    </div>
                  </li>
                  <li class="form-line jf-required" data-type="control_textbox" id="id_12">
                    <label class="form-label form-label-top form-label-auto" id="label_12" for="input_12">
                      結婚人姓名 1
                      <span class="form-required">
                        *
                      </span>
                    </label>
                    <div id="cid_12" class="form-input-wide jf-required">
                      <input type="text" id="input_12" name="q12_typeA12" data-type="input-textbox" class="form-textbox validate[required]" size="20" value="" data-component="textbox" aria-labelledby="label_12" required="" v-model="form.wedding_mate_1" />
                    </div>
                  </li>
                  <li class="form-line jf-required" data-type="control_textbox" id="id_13">
                    <label class="form-label form-label-top form-label-auto" id="label_13" for="input_13">
                      結婚人姓名 2
                      <span class="form-required">
                        *
                      </span>
                    </label>
                    <div id="cid_13" class="form-input-wide jf-required">
                      <input type="text" id="input_13" name="q13_typeA13" data-type="input-textbox" class="form-textbox validate[required]" size="20" value="" data-component="textbox" aria-labelledby="label_13" required="" v-model="form.wedding_mate_2" />
                    </div>
                  </li>
                  <li class="form-line jf-required" data-type="control_textbox" id="id_14">
                    <label class="form-label form-label-top form-label-auto" id="label_14" for="input_14">
                      喜宴日期
                      <span class="form-required">
                        *
                      </span>
                    </label>
                    <div id="cid_14" class="form-input-wide jf-required">
                      <input type="text" id="input_14" name="q14_typeA14" data-type="input-textbox" class="form-textbox validate[required]" size="20" value="" data-component="textbox" aria-labelledby="label_14" required="" v-model="form.wedding_date" />
                    </div>
                  </li>
                  <li class="form-line jf-required" data-type="control_textbox" id="id_15">
                    <label class="form-label form-label-top form-label-auto" id="label_15" for="input_15">
                      喜宴時間
                      <span class="form-required">
                        *
                      </span>
                    </label>
                    <div id="cid_15" class="form-input-wide jf-required">
                      <input type="text" id="input_15" name="q15_typeA15" data-type="input-textbox" class="form-textbox validate[required]" size="20" value="" data-component="textbox" aria-labelledby="label_15" required="" v-model="form.wedding_time" />
                    </div>
                  </li>
                  <li class="form-line jf-required" data-type="control_textbox" id="id_16">
                    <label class="form-label form-label-top form-label-auto" id="label_16" for="input_16">
                      喜宴地點
                      <span class="form-required">
                        *
                      </span>
                    </label>
                    <div id="cid_16" class="form-input-wide jf-required">
                      <input type="text" id="input_16" name="q16_typeA16" data-type="input-textbox" class="form-textbox validate[required]" size="20" value="" data-component="textbox" aria-labelledby="label_16" required="" v-model="form.wedding_location" />
                    </div>
                  </li>
                  <li class="form-line jf-required" data-type="control_textarea" id="id_17">
                    <label class="form-label form-label-top form-label-auto" id="label_17" for="input_17">
                      喜宴地址/電話
                      <span class="form-required">
                        *
                      </span>
                    </label>
                    <div id="cid_17" class="form-input-wide jf-required">
                      <textarea id="input_17" class="form-textarea validate[required]" name="q17_typeA17" cols="40" rows="6" data-component="textarea" required="" aria-labelledby="label_17">${form.wedding_address}</textarea>
                    </div>
                  </li>
                  <li class="form-line" data-type="control_divider" id="id_18">
                    <div id="cid_18" class="form-input-wide">
                      <div data-component="divider" style="border-bottom:1px solid #e6e6e6;height:1px;margin-left:0px;margin-right:0px;margin-top:16px;margin-bottom:4px">
                      </div>
                    </div>
                  </li>
                  <li class="form-line" data-type="control_textarea" id="id_19">
                    <label class="form-label form-label-top form-label-auto" id="label_19" for="input_19"> 訂單備註 </label>
                    <div id="cid_19" class="form-input-wide">
                      <textarea id="input_19" class="form-textarea" name="q19_typeA19" cols="40" rows="6" data-component="textarea" aria-labelledby="label_19">${form.order_note}</textarea>
                    </div>
                  </li>
                  <li class="form-line" data-type="control_textarea" id="id_20" style="display:none;">
                    <label class="form-label form-label-top form-label-auto" id="label_20" for="input_20"> 訂單內容 </label>
                    <div id="cid_20" class="form-input-wide">
                      <textarea id="input_20" class="form-textarea" name="q20_typeA20" cols="40" rows="6" data-component="textarea" aria-labelledby="label_20">${form.order_content}</textarea>
                    </div>
                  </li>
                  <li class="form-line" data-type="control_button" id="id_2">
                    <div id="cid_2" class="form-input-wide">
                      <div style="text-align:left" class="form-buttons-wrapper ">
                        <button id="input_2" type="submit" class="form-submit-button button" data-component="button">
                          下單購買
                        </button>
                      </div>
                    </div>
                  </li>
                  <li style="display:none">
                    Should be Empty:
                    <input type="text" name="website" value="" />
                  </li>
                </ul>
              </div>
              <input type="hidden" id="simple_spc" name="simple_spc" value="92921919688475" />
            </form>
          </div>
          <div class="column">
            <div>
              <h3 class="underline">訂購商品清單</h3>
              <ul class="order-list">
                <li class="list-item" v-for="(item, index) in this.$parent.$parent.cart">
                  <div class="item-wrapper">
                    <div class="item-image" :style="{ backgroundImage: 'url(/images/templates/thumbnail/' + item.template + '.jpg)' }"></div>
                    <div class="item-content">
                      <h4 class="item-title">${item.template}</h4>
                      <div>
                        數量：${item.total}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="underline">專人聯繫付款</h3>
              <p>
                ．我們會在24小時內審查您的訂單，審查完後會發「訂單確認信」到您Email並發送簡訊告知<br />
                ．收到訂單確認信後，請回信告知匯款帳號末五碼<br />
                ．您的訂單在入帳前將不會被排版、印製或出貨<br />
                ．喜帖屬客製化商品，不適用七天鑑賞期可退貨之規定（商品瑕疵除外）<br />
                ．喜帖印製需10個工作天（不含校稿時間、週末與假日）
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  """

  data: ->
    {
      form: {}
    }

  mounted: ->
    if @$parent.$parent.cart.length > 0
      @form = @$parent.$parent.form
      @form.order_content = JSON.stringify @$parent.$parent.cart
      setTimeout( ->
        document.getElementById("si" + "mple" + "_spc").value = "92921919688475-92921919688475"
      , 500)
