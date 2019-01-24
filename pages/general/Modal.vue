<template>
  <div>
    <h1>Modal</h1>
    <p
      class="bd-lead"
    >Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
    <h2>Example</h2>
    <example>
      <rd-button type="button" primary @click.native="open=true">Launch demo modal</rd-button>
      <rd-modal v-model="open">
        <rd-modal-header>
          <h5 title>Modal title</h5>
          <rd-button type="button" close @click.native="open=false">&times;</rd-button>
        </rd-modal-header>
        <rd-modal-body>
          <p>Modal body text goes here.</p>
        </rd-modal-body>
        <rd-modal-footer>
          <rd-button type="button" secondary @click.native="open=false">Close</rd-button>
          <rd-button type="button" primary>Save changes</rd-button>
        </rd-modal-footer>
      </rd-modal>
    </example>
    <highlight
      code="<rd-button
  type=&quot;button&quot;
  primary
  @click.native=&quot;open=true&quot;
>
  Launch demo modal
</rd-button>
<rd-modal v-model=&quot;open&quot;>
  <rd-modal-header>
    <h5 title>
      Modal title
    </h5>
    <rd-button
      type=&quot;button&quot;
      close
      @click.native=&quot;open=false&quot;
    >
      &times;
    </rd-button>
  </rd-modal-header>
  <rd-modal-body>
    <p>Modal body text goes here.</p>
  </rd-modal-body>
  <rd-modal-footer>
    <rd-button
      type=&quot;button&quot;
      secondary
      @click.native=&quot;open=false&quot;
    >
      Close
    </rd-button>
    <rd-button
      type=&quot;button&quot;
      primary
    >
      Save changes
    </rd-button>
  </rd-modal-footer>
</rd-modal>"
    />
    <h3>Scrolling long content</h3>
    <example>
      <rd-button type="button" primary @click.native="$refs.modal1.show">Launch demo modal</rd-button>

      <rd-modal ref="modal1">
        <rd-modal-header>
          <h5 title>Modal title</h5>
          <rd-button type="button" close @click.native="$refs.modal1.hide">&times;</rd-button>
        </rd-modal-header>
        <rd-modal-body>
          <p>Modal body text goes here.</p>
        </rd-modal-body>
        <rd-modal-footer>
          <rd-button type="button" secondary @click.native="$refs.modal1.hide">Close</rd-button>
          <rd-button type="button" primary>Save changes</rd-button>
        </rd-modal-footer>
      </rd-modal>
    </example>
    <highlight
      code="<rd-button
  type=&quot;button&quot;
  primary
  @click.native=&quot;$refs.modal1.show&quot;
>
  Launch demo modal
</rd-button>

<rd-modal ref=&quot;modal1&quot;>
  <rd-modal-header>
    <h5 title>
      Modal title
    </h5>
    <rd-button
      type=&quot;button&quot;
      close
      @click.native=&quot;$refs.modal1.hide&quot;
    >
      &times;
    </rd-button>
  </rd-modal-header>
  <rd-modal-body>
    <p>Modal body text goes here.</p>
  </rd-modal-body>
  <rd-modal-footer>
    <rd-button
      type=&quot;button&quot;
      secondary
      @click.native=&quot;$refs.modal1.hide&quot;
    >
      Close
    </rd-button>
    <rd-button
      type=&quot;button&quot;
      primary
    >
      Save changes
    </rd-button>
  </rd-modal-footer>
</rd-modal>"
    />
    <h3>Vertically centered</h3>
    <example>
      <rd-button type="button" primary @click.native="$refs.modal2.show">Launch demo modal</rd-button>
      <rd-modal ref="modal2" centered>
        <rd-modal-header>
          <h5 title>Modal title</h5>
          <rd-button type="button" close @click.native="$refs.modal2.hide">&times;</rd-button>
        </rd-modal-header>
        <rd-modal-body>
          <p>Modal body text goes here.</p>
        </rd-modal-body>
        <rd-modal-footer>
          <rd-button type="button" secondary @click.native="$refs.modal2.hide">Close</rd-button>
          <rd-button type="button" primary>Save changes</rd-button>
        </rd-modal-footer>
      </rd-modal>
    </example>
    <highlight
      code="<rd-button
  type=&quot;button&quot;
  primary
  @click.native=&quot;$refs.modal2.show&quot;
>
  Launch demo modal
</rd-button>
<rd-modal
  ref=&quot;modal2&quot;
  centered
>
  <rd-modal-header>
    <h5 title>
      Modal title
    </h5>
    <rd-button
      type=&quot;button&quot;
      close
      @click.native=&quot;$refs.modal2.hide&quot;
    >
      &times;
    </rd-button>
  </rd-modal-header>
  <rd-modal-body>
    <p>Modal body text goes here.</p>
  </rd-modal-body>
  <rd-modal-footer>
    <rd-button
      type=&quot;button&quot;
      secondary
      @click.native=&quot;$refs.modal2.hide&quot;
    >
      Close
    </rd-button>
    <rd-button
      type=&quot;button&quot;
      primary
    >
      Save changes
    </rd-button>
  </rd-modal-footer>
</rd-modal>"
    />
    <h3>Tooltips and popovers</h3>
    <example>
      <rd-button type="button" primary @click.native="$refs.modal3.show">Launch demo modal</rd-button>

      <rd-modal ref="modal3">
        <rd-modal-header>
          <h5 title>Modal title</h5>
          <rd-button type="button" close @click.native="$refs.modal3.hide">&times;</rd-button>
        </rd-modal-header>
        <rd-modal-body>
          <h5>Popover in a modal</h5>
          <p>This
            <rd-button
              href="javascript:"
              secondary
              :popover="{
                title:'Popover title',
                content:'Popover body content is set in this attribute.'
              }"
            >button</rd-button>triggers a popover on click.
          </p>
          <hr>
          <h5>Tooltips in a modal</h5>
          <p>
            <rd-tooltip tag="a" href="javascript:" title="Tooltip">This link</rd-tooltip>and
            <rd-tooltip tag="a" href="javascript:" class="tooltip-test" title="Tooltip">that link</rd-tooltip>have tooltips on hover.
          </p>
        </rd-modal-body>
        <rd-modal-footer>
          <rd-button type="button" secondary @click.native="$refs.modal3.hide">Close</rd-button>
          <rd-button type="button" primary>Save changes</rd-button>
        </rd-modal-footer>
      </rd-modal>
    </example>
    <highlight
      code="<rd-button
  type=&quot;button&quot;
  primary
  @click.native=&quot;$refs.modal3.show&quot;
>
  Launch demo modal
</rd-button>

<rd-modal ref=&quot;modal3&quot;>
  <rd-modal-header>
    <h5 title>
      Modal title
    </h5>
    <rd-button
      type=&quot;button&quot;
      close
      @click.native=&quot;$refs.modal3.hide&quot;
    >
      &times;
    </rd-button>
  </rd-modal-header>
  <rd-modal-body>
    <h5>Popover in a modal</h5>
    <p>
      This <rd-button
        href=&quot;javascript:&quot;
        secondary
        :popover=&quot;{
          title:'Popover title',
          content:'Popover body content is set in this attribute.'
        }&quot;
      >
        button
      </rd-button> triggers a popover on click.
    </p>
    <hr>
    <h5>Tooltips in a modal</h5>
    <p>
      <rd-tooltip
        tag=&quot;a&quot;
        href=&quot;javascript:&quot;
        title=&quot;Tooltip&quot;
      >
        This link
      </rd-tooltip> and <rd-tooltip
        tag=&quot;a&quot;
        href=&quot;javascript:&quot;
        class=&quot;tooltip-test&quot;
        title=&quot;Tooltip&quot;
      >
        that link
      </rd-tooltip> have tooltips on hover.
    </p>
  </rd-modal-body>
  <rd-modal-footer>
    <rd-button
      type=&quot;button&quot;
      secondary
      @click.native=&quot;$refs.modal3.hide&quot;
    >
      Close
    </rd-button>
    <rd-button
      type=&quot;button&quot;
      primary
    >
      Save changes
    </rd-button>
  </rd-modal-footer>
</rd-modal>"
    />
    <h3>Optional sizes</h3>
    <example>
      <rd-button type="button" primary @click.native="$refs.modal4.show">Large modal</rd-button>
      <rd-modal ref="modal4" lg>
        <rd-modal-header>
          <h5 title>Modal title</h5>
          <rd-button type="button" close @click.native="$refs.modal4.hide">&times;</rd-button>
        </rd-modal-header>
        <rd-modal-body>
          <p>Modal body text goes here.</p>
        </rd-modal-body>
        <rd-modal-footer>
          <rd-button type="button" secondary @click.native="$refs.modal4.hide">Close</rd-button>
          <rd-button type="button" primary>Save changes</rd-button>
        </rd-modal-footer>
      </rd-modal>

      <rd-button type="button" primary @click.native="$refs.modal5.show">Small modal</rd-button>
      <rd-modal ref="modal5" sm>
        <rd-modal-header>
          <h5 title>Modal title</h5>
          <rd-button type="button" close @click.native="$refs.modal5.hide">&times;</rd-button>
        </rd-modal-header>
        <rd-modal-body>
          <p>Modal body text goes here.</p>
        </rd-modal-body>
        <rd-modal-footer>
          <rd-button type="button" secondary @click.native="$refs.modal5.hide">Close</rd-button>
          <rd-button type="button" primary>Save changes</rd-button>
        </rd-modal-footer>
      </rd-modal>
    </example>
    <highlight
      code="<rd-button
  type=&quot;button&quot;
  primary
  @click.native=&quot;$refs.modal4.show&quot;
>
  Large modal
</rd-button>
<rd-modal
  ref=&quot;modal4&quot;
  lg
>
  <rd-modal-header>
    <h5 title>
      Modal title
    </h5>
    <rd-button
      type=&quot;button&quot;
      close
      @click.native=&quot;$refs.modal4.hide&quot;
    >
      &times;
    </rd-button>
  </rd-modal-header>
  <rd-modal-body>
    <p>Modal body text goes here.</p>
  </rd-modal-body>
  <rd-modal-footer>
    <rd-button
      type=&quot;button&quot;
      secondary
      @click.native=&quot;$refs.modal4.hide&quot;
    >
      Close
    </rd-button>
    <rd-button
      type=&quot;button&quot;
      primary
    >
      Save changes
    </rd-button>
  </rd-modal-footer>
</rd-modal>

<rd-button
  type=&quot;button&quot;
  primary
  @click.native=&quot;$refs.modal5.show&quot;
>
  Small modal
</rd-button>
<rd-modal
  ref=&quot;modal5&quot;
  sm
>
  <rd-modal-header>
    <h5 title>
      Modal title
    </h5>
    <rd-button
      type=&quot;button&quot;
      close
      @click.native=&quot;$refs.modal5.hide&quot;
    >
      &times;
    </rd-button>
  </rd-modal-header>
  <rd-modal-body>
    <p>Modal body text goes here.</p>
  </rd-modal-body>
  <rd-modal-footer>
    <rd-button
      type=&quot;button&quot;
      secondary
      @click.native=&quot;$refs.modal5.hide&quot;
    >
      Close
    </rd-button>
    <rd-button
      type=&quot;button&quot;
      primary
    >
      Save changes
    </rd-button>
  </rd-modal-footer>
</rd-modal>"
    />
    <h2>Props</h2>You can also use
    <nuxt-link append to="../mixins/size">Size</nuxt-link>attributes.
    <properties type="props" :data="props"/>
    <h2>Methods</h2>
    <properties type="methods" :data="methods"/>
    <h2>Events</h2>
    <properties type="events" :data="events"/>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data() {
    return {
      open: false,
      props: [
        ["open", "v-model", "Boolean", "false", ""],
        [
          "backdrop",
          "Specifies backdrop.  If you specify 'static' for a backdrop, it is not possible to close the modal when clicking outside of it.",
          "Boolean|String",
          "true",
          "true, false, 'static'"
        ],
        ["fade", "ffade effect", "Boolean", "true", ""]
      ],
      methods: [
        ["toggle", "", "Manually toggles a modal ", ""],
        ["show", "", "Manually shows a modal ", ""],
        ["hide", "", "Manually hides a modal.", ""]
      ],
      events: [
        [
          "change",
          "The change event triggers when the value has changed",
          "(value)"
        ]
      ]
    };
  }
};
</script>
