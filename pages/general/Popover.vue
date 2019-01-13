<template>
  <div>
    <h1>Popover</h1>
    <p class="bd-lead">
      Popovers display floating content next to a target element.
    </p>
    <rd-popover />
    <h2>
      Example
    </h2>

    <example>
      <rd-button
        type="button"
        lg
        danger
        :popover="{
          title:'Popover title',
          content:'And here\'s some amazing content. It\'s very engaging. Right?'
        }"
      >
        Click to toggle popover
      </rd-button>
    </example>
    <highlight
      code="&lt;rd-button
  type=&quot;button&quot;
  lg
  danger
  :popover=&quot;{
    title:'Popover title',
    content:'And here\'s some amazing content. It\'s very engaging. Right?'
  }&quot;
&gt;
  Click to toggle popover
&lt;/rd-button&gt;"
    />
    <h3>Four directions</h3>
    <example>
      <rd-button
        secondary
        :popover="{
          placement:'top',
          content:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
        }"
      >
        Popover on top
      </rd-button>

      <rd-button
        secondary
        :popover="{
          placement:'right',
          content:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
        }"
      >
        Popover on right
      </rd-button>

      <rd-button
        secondary
        :popover="{
          placement:'bottom',
          content:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
        }"
      >
        Popover on bottom
      </rd-button>

      <rd-button
        secondary
        :popover="{
          placement:'left',
          content:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
        }"
      >
        Popover on left
      </rd-button>
    </example>
    <highlight
      code="&lt;rd-button
  secondary
  :popover=&quot;{
    placement:'top',
    content:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
  }&quot;
&gt;
  Popover on top
&lt;/rd-button&gt;

&lt;rd-button
  secondary
  :popover=&quot;{
    placement:'right',
    content:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
  }&quot;
&gt;
  Popover on right
&lt;/rd-button&gt;

&lt;rd-button
  secondary
  :popover=&quot;{
    placement:'bottom',
    content:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
  }&quot;
&gt;
  Popover on bottom
&lt;/rd-button&gt;

&lt;rd-button
  secondary
  :popover=&quot;{
    placement:'left',
    content:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
  }&quot;
&gt;
  Popover on left
&lt;/rd-button&gt;"
    />
    <h3>Dismiss on next click</h3>
    <example>
      <rd-button
        tag="a"
        lg
        role="button"
        href="javascript:"
        danger
        :popover="{
          trigger:'focus',
          title:'Dismissible popover',
          content:'And here\'s some amazing content. It\'s very engaging. Right?',
        }"
      >
        Dismissible popover
      </rd-button>
    </example>
    <highlight
      code="&lt;rd-button
  tag=&quot;a&quot;
  lg
  role=&quot;button&quot;
  href=&quot;javascript:&quot;
  danger
  :popover=&quot;{
    trigger:'focus',
    title:'Dismissible popover',
    content:'And here\'s some amazing content. It\'s very engaging. Right?',
  }&quot;
&gt;
  Dismissible popover
&lt;/rd-button&gt;"
    />
    <h3>Disabled elements</h3>
    <example>
      <rd-popover
        :popover="{content:'Disabled popover'}"
      >
        <rd-button
          style="pointer-events: none;"
          disabled
          primary
        >
          Disabled button
        </rd-button>
      </rd-popover>
    </example>
    <highlight
      code="&lt;rd-popover
  :popover=&quot;{content:'Disabled popover'}&quot;
&gt;
  &lt;rd-button
    style=&quot;pointer-events: none;&quot;
    disabled
    primary
  &gt;
    Disabled button
  &lt;/rd-button&gt;
&lt;/rd-popover&gt;"
    />
    <h2>Props</h2>
    <properties
      type="props"
      :data="props"
    />
    <h3>Popover options</h3>
    <properties
      type="props"
      :data="propsPopover"
    />
  </div>
</template>

<script>

export default {
  name: 'Popover',
  data() {
    return {
      props: [
        ['tag', '렌더링 될 HTML 엘리먼트의 태그', 'String', 'span', 'span, div ...'],
        ['popover', 'Popover options', 'Object', '', ''],
      ],
      propsPopover: [
        ['animation', 'Apply a CSS fade transition to the popover', 'Boolean', 'true'],
        ['container', 'Appends the popover to a specific element. Example: container: \'body\'. This option is particularly useful in that it allows you to position the popover in the flow of the document near the triggering element - which will prevent the popover from floating away from the triggering element during a window resize.', 'String | element | false', 'false'],
        ['content', 'Default content value if data-content attribute isn\'t present.\nIf a function is given, it will be called with its this reference set to the element that the popover is attached to.', 'String | Element | function', ''],
        ['delay', 'Delay showing and hiding the popover (ms) - does not apply to manual trigger type\nIf a number is supplied, delay is applied to both hide/show\nObject structure is: delay: { "show": 500, "hide": 100 }', 'Number | object', '0'],
        ['html', 'Insert HTML into the popover. If false, jQuery\'s text method will be used to insert content into the DOM. Use text if you\'re worried about XSS attacks.', 'Boolean', 'false'],
        ['placement', 'How to position the popover - auto | top | bottom | left | right.\nWhen auto is specified, it will dynamically reorient the popover.\nWhen a function is used to determine the placement, it is called with the popover DOM node as its first argument and the triggering element DOM node as its second. The this context is set to the popover instance.', 'String | function', 'right'],
        ['selector', 'If a selector is provided, popover objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have popovers added. See this and an informative example.', 'String | false', 'false'],
        ['title', 'Default title value if title attribute isn\'t present.\nIf a function is given, it will be called with its this reference set to the element that the popover is attached to.', 'String | Element | function', ''],
        ['trigger', 'How popover is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space. manual cannot be combined with any other trigger.', 'String', 'click'],
        ['offset', 'Offset of the popover relative to its target.', 'Number | String', '0'],
        ['fallbackPlacement', 'Allow to specify which position Popper will use on fallback.', 'String | Array', 'flip'],
        ['boundary', 'Overflow constraint boundary of the popover. Accepts the values of \'viewport\', \'window\', \'scrollParent\', or an HTMLElement reference (JavaScript only).', 'String | Element', 'scrollParent'],
      ]
    };
  }
};
</script>
