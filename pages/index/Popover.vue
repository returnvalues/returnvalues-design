<template>
  <div>
    <h1>
      Popover
    </h1>
    <rd-popover />
    <h2>
      Example
    </h2>

    <div class="p-3 border">
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
    </div>
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
    <div class="p-3 border">
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
    </div>
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
    <div class="p-3 border">
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
    </div>
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
    <div class="p-3 border">
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
    </div>
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
  </div>
</template>

<script>
import { RdPopover, RdButton } from '~/src';
import Highlight from '~/components/Highlight';

export default {
  name: 'Popover',
  components: { RdPopover, Highlight, RdButton }
};
</script>

<style scoped>

</style>
