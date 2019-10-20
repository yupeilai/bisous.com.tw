Generator =
  template: """
    <div class="default-layout">
      <div class="wrapper">
        <h1>喜帖產生器</h1>
        <div class="generator-wrapper">
          <div id="generator_container">
            <div id="generator_preview" ref="generator_preview">
              <div class="preview-area">
                <div class="preview-area-wrapper">
                  <div class="loading" v-bind:class="{ 'on': loading_preview }">
                    <div class="spinner">
                      <div class="bounce1"></div>
                      <div class="bounce2"></div>
                      <div class="bounce3"></div>
                    </div>
                  </div>
                  <img :src="preview_image" />
                </div>
              </div>
              <div id="output_container">
                <img ref="template_image" :src="'/images/templates/' + current_template + '.png'" />
                <div :class="['text-wrapper', current_template]">
                  <div class="wedding_mate_1" ref="wedding_mate_1" v-text="wedding_mate_1"></div>
                  <div class="wedding_mate_2" ref="wedding_mate_2" v-text="wedding_mate_2"></div>
                  <div class="wedding_date" ref="wedding_date" v-text="wedding_date"></div>
                  <div class="wedding_time" ref="wedding_time" v-text="wedding_time"></div>
                  <div class="wedding_location" ref="wedding_location" v-text="wedding_location"></div>
                  <div class="wedding_address" ref="wedding_address" v-html="nl2br(htmlEncode(wedding_address))"></div>
                </div>
              </div>
            </div>
            <div id="generator_form">
              <div class="form-input">
                <div class="form-group">
                  <h3 v-text="'選擇版型'"></h3>
                  <div id="templates_list_container" class="template-select-list">
                    <label v-for="(item, index) in templates" :class="{ 'active' : item == current_template }">
                      <div class="image-item" :style="{ backgroundImage: 'url(/images/templates/thumbnail/' + item + '.jpg)' }"></div>
                      <input type="radio" v-model="current_template" :value="item">
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <h3 v-text="'結婚人'"></h3>
                  <input type="text" ref="wedding_mate_1_input" v-model="wedding_mate_1_input" v-on:focus="$event.target.select()" />
                </div>
                <div class="form-group">
                  <h3 v-text="'結婚人'"></h3>
                  <input type="text" ref="wedding_mate_2_input" v-model="wedding_mate_2_input" v-on:focus="$event.target.select()" />
                </div>
                <div class="form-group">
                  <h3 v-text="'日期'"></h3>
                  <input type="text" ref="wedding_date_input" v-model="wedding_date_input" v-on:focus="$event.target.select()" />
                </div>
                <div class="form-group">
                  <h3 v-text="'時間'"></h3>
                  <input type="text" ref="wedding_time_input" v-model="wedding_time_input" v-on:focus="$event.target.select()" />
                </div>
                <div class="form-group">
                  <h3 v-text="'地點'"></h3>
                  <input type="text" ref="wedding_location_input" v-model="wedding_location_input" v-on:focus="$event.target.select()" />
                </div>
                <div class="form-group">
                  <h3 v-text="'地址/電話'"></h3>
                  <textarea ref="wedding_address_input" v-model="wedding_address_input" v-on:focus="$event.target.select()" /></textarea>
                </div>
              </div>
              <div class="form-action">
                <div class="generator-buttons">
                  <button type="button" class="button" v-on:click="download_image()">
                    下載
                  </button>
                  <button type="button" class="button" v-on:click="add_to_cart()">
                    訂購
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  """

  data: ->
    {
      preview_image: '/images/templates/TP01.png'

      templates: [
        'TP01'
        'TP02'
        'TP03'
        'TP04'
      ]
      current_template: 'TP01'

      wedding_mate_1: ''
      wedding_mate_1_default: 'Bisous'
      wedding_mate_1_input: 'Bisous'

      wedding_mate_2: ''
      wedding_mate_2_default: 'Yellowhite'
      wedding_mate_2_input: 'Yellowhite'

      wedding_date: ''
      wedding_date_default: 'MONDAY, SEPTEMBER 30TH, 2019'
      wedding_date_input: 'MONDAY, SEPTEMBER 30TH, 2019'

      wedding_time: ''
      wedding_time_default: 'AT 3:30, IN THE AFTERNOON'
      wedding_time_input: 'AT 3:30, IN THE AFTERNOON'

      wedding_location: ''
      wedding_location_default: 'BISOUS'
      wedding_location_input: 'BISOUS'

      wedding_address: ''
      wedding_address_default: 'WWW.BISOUS.COM.TW'
      wedding_address_input: 'WWW.BISOUS.COM.TW'

      initialed: false
      loading_preview: false
    }

  beforeMount: ->
    appendFont 'Ramland'
    appendFont 'BellMT'
    @wedding_mate_1 = @wedding_mate_1_default
    @wedding_mate_2 = @wedding_mate_2_default
    @wedding_date = @wedding_date_default
    @wedding_time = @wedding_time_default
    @wedding_location = @wedding_location_default
    @wedding_address = @wedding_address_default

  mounted: ->
    @generate_preview()
    @initialed = true

  methods:
    generate_preview: ->
      @loading_preview = true
      @create_preview_image()

    generator: (action) ->
      @output_action = action
      @prepare_generator()

    prepare_generator: ->
      @show_social_share_popup()
      @create_image_html2canvas()

    create_preview_image: ->
      setTimeout(( ->
        if jQuery('#output_container').length > 0
          self = @
          html2canvas(document.querySelector('#output_container'), { scale: 1, logging: false, backgroundColor: null }).then((canvas) ->
            output = canvas.toDataURL 'image/png'
            if typeof self.preview_image isnt 'undefined' then self.preview_image = output
          ).catch (error) ->
            xx error
      ).bind(@), 500)

    download_image: ->
      setTimeout(( ->
        self = @
        html2canvas(document.querySelector('#output_container'), { scale: 1, logging: false, backgroundColor: null }).then((canvas) ->
            output = canvas.toDataURL 'image/png'
            if $is.not.desktop()
              headerTo output
            else
              forceDownload output, 'image.png'
          ).catch (error) ->
            xx error
      ).bind(@), 1000)

    add_to_cart: ->
      @$parent.$parent.wedding_mate_1 = @wedding_mate_1
      @$parent.$parent.wedding_mate_2 = @wedding_mate_2
      @$parent.$parent.wedding_date = @wedding_date
      @$parent.$parent.wedding_time = @wedding_time
      @$parent.$parent.wedding_location = @wedding_location
      @$parent.$parent.wedding_address = @wedding_address
      if inArray(@current_template, @$parent.$parent.cart) is false
        item = {
          template: @current_template
          total: 10
        }
        @$parent.$parent.cart.push item
      routeRedirect 'cart', ''

  watch:
    current_template: (value) ->
      if @initialed then @$nextTick -> @generate_preview()

    wedding_mate_1_input: (value) ->
      @wedding_mate_1 = if value is '' then @wedding_mate_1_default else value

    wedding_mate_1: (value) ->
      if @initialed then @$nextTick -> @generate_preview()

    wedding_mate_2_input: (value) ->
      @wedding_mate_2 = if value is '' then @wedding_mate_2_default else value

    wedding_mate_2: (value) ->
      if @initialed then @$nextTick -> @generate_preview()

    wedding_date_input: (value) ->
      @wedding_date = if value is '' then @wedding_date_default else value

    wedding_date: (value) ->
      if @initialed then @$nextTick -> @generate_preview()

    wedding_time_input: (value) ->
      @wedding_time = if value is '' then @wedding_time_default else value

    wedding_time: (value) ->
      if @initialed then @$nextTick -> @generate_preview()

    wedding_location_input: (value) ->
      @wedding_location = if value is '' then @wedding_location_default else value

    wedding_location: (value) ->
      if @initialed then @$nextTick -> @generate_preview()

    wedding_address_input: (value) ->
      @wedding_address = if value is '' then @wedding_address_default else value

    wedding_address: (value) ->
      if @initialed then @$nextTick -> @generate_preview()

    preview_image: (value) ->
      @loading_preview = false
