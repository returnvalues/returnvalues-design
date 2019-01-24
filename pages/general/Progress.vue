<template>
  <div>
    <h1>Progress</h1>
    <p
      class="bd-lead"
    >Progress bars indicate progress towards the completion of a task or an indeterminate loading state.</p>
    <h2>Example</h2>
    <example>
      <rd-progress :percent="0"/>
      <rd-progress :percent="25" class="mt-2"/>
      <rd-progress :percent="50" class="mt-2"/>
      <rd-progress :percent="75" class="mt-2"/>
      <rd-progress :percent="100" class="mt-2"/>
    </example>
    <highlight
      code="<rd-progress :percent=&quot;0&quot; />
<rd-progress
  :percent=&quot;25&quot;
  class=&quot;mt-2&quot;
/>
<rd-progress
  :percent=&quot;50&quot;
  class=&quot;mt-2&quot;
/>
<rd-progress
  :percent=&quot;75&quot;
  class=&quot;mt-2&quot;
/>
<rd-progress
  :percent=&quot;100&quot;
  class=&quot;mt-2&quot;
/>"
    />
    <h3>Labels</h3>
    <example>
      <rd-progress :percent="25">25%</rd-progress>
    </example>
    <highlight code="<rd-progress
  :percent=&quot;25&quot;
>
  25%
</rd-progress>"/>
    <h3>Height</h3>
    <example>
      <rd-progress style="height: 1px;" :percent="25"/>
      <rd-progress style="height: 20px;" :percent="25" class="mt-2"/>
    </example>
    <highlight
      code="<rd-progress
  style=&quot;height: 1px;&quot;
  :percent=&quot;25&quot;
/>
<rd-progress
  style=&quot;height: 20px;&quot;
  :percent=&quot;25&quot;
  class=&quot;mt-2&quot;
/>"
    />
    <h3>Backgrounds</h3>
    <example>
      <rd-progress success :percent="25"/>
      <rd-progress info :percent="50" class="mt-2"/>
      <rd-progress warning :percent="75" class="mt-2"/>
      <rd-progress danger :percent="100" class="mt-2"/>
    </example>
    <highlight
      code="<rd-progress
  success
  :percent=&quot;25&quot;
/>
<rd-progress
  info
  :percent=&quot;50&quot;
  class=&quot;mt-2&quot;
/>
<rd-progress
  warning
  :percent=&quot;75&quot;
  class=&quot;mt-2&quot;
/>
<rd-progress
  danger
  :percent=&quot;100&quot;
  class=&quot;mt-2&quot;
/>"
    />
    <h3>Multiple bars</h3>
    <example>
      <rd-progress multiple>
        <rd-progress :percent="15"/>
        <rd-progress success :percent="30"/>
        <rd-progress info :percent="20"/>
      </rd-progress>
    </example>
    <highlight
      code="<rd-progress multiple>
  <rd-progress :percent=&quot;15&quot; />
  <rd-progress
    success
    :percent=&quot;30&quot;
  />
  <rd-progress
    info
    :percent=&quot;20&quot;
  />
</rd-progress>"
    />
    <h3>Striped</h3>
    <example>
      <rd-progress striped :percent="10"/>
      <rd-progress success striped :percent="25" class="mt-2"/>
      <rd-progress info striped :percent="50" class="mt-2"/>
      <rd-progress warning striped :percent="75" class="mt-2"/>
      <rd-progress danger striped :percent="100" class="mt-2"/>
    </example>
    <highlight
      code="<rd-progress
  striped
  :percent=&quot;10&quot;
/>
<rd-progress
  success
  striped
  :percent=&quot;25&quot;
  class=&quot;mt-2&quot;
/>
<rd-progress
  info
  striped
  :percent=&quot;50&quot;
  class=&quot;mt-2&quot;
/>
<rd-progress
  warning
  striped
  :percent=&quot;75&quot;
  class=&quot;mt-2&quot;
/>
<rd-progress
  danger
  striped
  :percent=&quot;100&quot;
  class=&quot;mt-2&quot;
/>"
    />
    <h3>Animated stripes</h3>
    <example>
      <rd-progress striped animated :percent="75" class="mt-2"/>
    </example>
    <highlight
      code="<rd-progress
  striped
  animated
  :percent=&quot;75&quot;
  class=&quot;mt-2&quot;
/>"
    />

    <h3>Props</h3>You can use
    <nuxt-link append to="../mixins/semantic">Semantic</nuxt-link>attributes.
    <properties type="props" :data="props"/>
  </div>
</template>

<script>
export default {
  name: "Progress",
  data() {
    return {
      props: [
        ["percent", "show a visible percentage", "Number", "0", ""],
        [
          "multiple",
          "Include multiple progress bars in a progress component if you need.",
          "Boolean",
          "false",
          ""
        ],
        [
          "striped",
          "add stripes to the progress bars ",
          "Boolean",
          "false",
          ""
        ],
        ["animated", "animate the progress bar ", "Boolean", "false", ""]
      ]
    };
  }
};
</script>
