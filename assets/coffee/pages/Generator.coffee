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
                <img ref="basemap_image" :src="basemap_image" />
                <div :class="['text-wrapper', template]">
                  <div class="mate_1" ref="mate_1" v-text="mate_1"></div>
                  <div class="mate_2" ref="mate_2" v-text="mate_2"></div>
                  <div class="date" ref="date" v-text="date"></div>
                  <div class="time" ref="time" v-text="time"></div>
                  <div class="location" ref="location" v-text="location"></div>
                  <div class="address" ref="address" v-html="nl2br(htmlEncode(address))"></div>
                </div>
              </div>
            </div>
            <div id="generator_form">
              <div class="form-input">
                <div class="form-group">
                  <h3 v-text="'結婚人'"></h3>
                  <input type="text" ref="mate_1_input" v-model="mate_1_input" v-on:focus="$event.target.select()" />
                </div>
                <div class="form-group">
                  <h3 v-text="'結婚人'"></h3>
                  <input type="text" ref="mate_2_input" v-model="mate_2_input" v-on:focus="$event.target.select()" />
                </div>
                <div class="form-group">
                  <h3 v-text="'日期'"></h3>
                  <input type="text" ref="date_input" v-model="date_input" v-on:focus="$event.target.select()" />
                </div>
                <div class="form-group">
                  <h3 v-text="'時間'"></h3>
                  <input type="text" ref="time_input" v-model="time_input" v-on:focus="$event.target.select()" />
                </div>
                <div class="form-group">
                  <h3 v-text="'地點'"></h3>
                  <input type="text" ref="location_input" v-model="location_input" v-on:focus="$event.target.select()" />
                </div>
                <div class="form-group">
                  <h3 v-text="'地址/電話'"></h3>
                  <textarea ref="address_input" v-model="address_input" v-on:focus="$event.target.select()" /></textarea>
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
      basemap_image: '/images/generator/01.png'
      preview_image: '/images/generator/01.png'

      template: 'template_01'

      mate_1: ''
      mate_1_default: 'Bisous'
      mate_1_input: 'Bisous'

      mate_2: ''
      mate_2_default: 'Yellowhite'
      mate_2_input: 'Yellowhite'

      date: ''
      date_default: 'MONDAY, SEPTEMBER 30TH, 2019'
      date_input: 'MONDAY, SEPTEMBER 30TH, 2019'

      time: ''
      time_default: 'AT 3:30, IN THE AFTERNOON'
      time_input: 'AT 3:30, IN THE AFTERNOON'

      location: ''
      location_default: 'BISOUS'
      location_input: 'BISOUS'

      address: ''
      address_default: 'WWW.BISOUS.COM.TW'
      address_input: 'WWW.BISOUS.COM.TW'

      initialed: false
      loading_preview: false
    }

  beforeMount: ->
    appendFont 'Ramland', @generate_preview
    @mate_1 = @mate_1_default
    @mate_2 = @mate_2_default
    @date = @date_default
    @time = @time_default
    @location = @location_default
    @address = @address_default

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
      gogo.start()
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

  watch:
    mate_1_input: (value) ->
      @mate_1 = if value is '' then @mate_1_default else value

    mate_1: (value) ->
      if @initialed then @$nextTick -> @generate_preview()

    mate_2_input: (value) ->
      @mate_2 = if value is '' then @mate_2_default else value

    mate_2: (value) ->
      if @initialed then @$nextTick -> @generate_preview()

    date_input: (value) ->
      @date = if value is '' then @date_default else value

    date: (value) ->
      if @initialed then @$nextTick -> @generate_preview()

    time_input: (value) ->
      @time = if value is '' then @time_default else value

    time: (value) ->
      if @initialed then @$nextTick -> @generate_preview()

    location_input: (value) ->
      @location = if value is '' then @location_default else value

    location: (value) ->
      if @initialed then @$nextTick -> @generate_preview()

    address_input: (value) ->
      @address = if value is '' then @address_default else value

    address: (value) ->
      if @initialed then @$nextTick -> @generate_preview()

    preview_image: (value) ->
      @loading_preview = false
