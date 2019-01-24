<template>
  <div>
    <h1>Tooltips</h1>
    <p
      class="bd-lead"
    >A tooltip is a lightweight popover for showing additional infromation on hover.</p>
    <h2>Example</h2>
    <example>
      <rd-button
        type="button"
        secondary
        title="Tooltip on top"
        :tooltip="{placement:'top'}"
      >Tooltip on top</rd-button>
      <rd-button
        type="button"
        secondary
        title="Tooltip on right"
        :tooltip="{placement:'right'}"
      >Tooltip on right</rd-button>
      <rd-button
        type="button"
        secondary
        title="Tooltip on bottom"
        :tooltip="{placement:'bottom'}"
      >Tooltip on bottom</rd-button>
      <rd-button
        type="button"
        secondary
        title="Tooltip on left"
        :tooltip="{placement:'left'}"
      >Tooltip on left</rd-button>
    </example>
    <highlight
      code="<rd-button
  type=&quot;button&quot;
  secondary
  title=&quot;Tooltip on top&quot;
  :tooltip=&quot;{placement:'top'}&quot;
>
  Tooltip on top
</rd-button>
<rd-button
  type=&quot;button&quot;
  secondary
  title=&quot;Tooltip on right&quot;
  :tooltip=&quot;{placement:'right'}&quot;
>
  Tooltip on right
</rd-button>
<rd-button
  type=&quot;button&quot;
  secondary
  title=&quot;Tooltip on bottom&quot;
  :tooltip=&quot;{placement:'bottom'}&quot;
>
  Tooltip on bottom
</rd-button>
<rd-button
  type=&quot;button&quot;
  secondary
  title=&quot;Tooltip on left&quot;
  :tooltip=&quot;{placement:'left'}&quot;
>
  Tooltip on left
</rd-button>"
    />
    <h2>Props</h2>
    <properties type="props" :data="props"/>
    <h3>Popover options</h3>
    <properties type="props" :data="propsTooltip"/>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  data() {
    return {
      props: [
        [
          "tag",
          "Tags of HTML elements to be rendered",
          "String",
          "span",
          "span, div ..."
        ],
        ["tooltip", "Tooltip options", "Object", "", ""]
      ],
      propsTooltip: [
        [
          "animation",
          "Apply a CSS fade transition to the tooltip",
          "Boolean",
          "true"
        ],
        [
          "container",
          "Appends the tooltip to a specific element. Example: container: 'body'. This option is particularly useful in that it allows you to position the tooltip in the flow of the document near the triggering element - which will prevent the tooltip from floating away from the triggering element during a window resize.",
          "String | Element | false",
          "false"
        ],
        [
          "delay",
          "Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type\nIf a number is supplied, delay is applied to both hide/show\nObject structure is: delay: { 'show': 500, 'hide': 100 }",
          "Number | Object",
          "0"
        ],
        [
          "html",
          "Allow HTML in the tooltip.\nIf true, HTML tags in the tooltip's title will be rendered in the tooltip. If false, jQuery's textmethod will be used to insert content into the DOM.\nUse text if you're worried about XSS attacks.",
          "Boolean",
          "false"
        ],
        [
          "placement",
          "How to position the tooltip - auto | top | bottom | left | right.\nWhen auto is specified, it will dynamically reorient the tooltip.\nWhen a function is used to determine the placement, it is called with the tooltip DOM node as its first argument and the triggering element DOM node as its second. The this context is set to the tooltip instance.",
          "String | function",
          "top"
        ],
        [
          "selector",
          "If a selector is provided, tooltip objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have popovers added. See this and an informative example.",
          "String | false",
          "false"
        ],
        [
          "template",
          "Base HTML to use when creating the tooltip.\nThe tooltip's title will be injected into the .tooltip-inner.\n.arrow will become the tooltip's arrow.\nThe outermost wrapper element should have the .tooltip class and role='tooltip'.",
          "String",
          ""
        ],
        [
          "title",
          "Default title value if title attribute isn't present.\nIf a function is given, it will be called with its thisreference set to the element that the tooltip is attached to.",
          "String | Element | function",
          ""
        ],
        [
          "trigger",
          "How tooltip is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space.\n'manual' indicates that the tooltip will be triggered programmatically via the .tooltip('show'), .tooltip('hide') and .tooltip('toggle') methods; this value cannot be combined with any other trigger.\n'hover' on its own will result in tooltips that cannot be triggered via the keyboard, and should only be used if alternative methods for conveying the same information for keyboard users is present.",
          "String",
          "hover focus"
        ],
        [
          "offset",
          "Offset of the tooltip relative to its target.",
          "Number | String",
          "0"
        ],
        [
          "fallbackPlacement",
          "Allow to specify which position Popper will use on fallback.",
          "String | array",
          "flip"
        ],
        [
          "boundary",
          "Overflow constraint boundary of the tooltip. Accepts the values of 'viewport', 'window', 'scrollParent', or an HTMLElement reference (JavaScript only).",
          "String | Element",
          "scrollParent"
        ]
      ]
    };
  }
};
</script>
