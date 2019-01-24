<template>
  <div>
    <h1>Radio</h1>
    <p>A component that uses RdButton internally.</p>
    <h2>Example</h2>
    <example>
      <rd-button-group>
        <rd-button-radio v-model="picked" semantic="secondary" value="one">Active</rd-button-radio>
        <rd-button-radio v-model="picked" semantic="secondary" value="two">Radio</rd-button-radio>
        <rd-button-radio v-model="picked" semantic="secondary" value="three">Radio</rd-button-radio>
      </rd-button-group>
    </example>
    <highlight
      code="<rd-button-group>
  <rd-button-radio
    v-model=&quot;picked&quot;
    semantic=&quot;secondary&quot;
    value=&quot;one&quot;
  >
    Active
  </rd-button-radio>
  <rd-button-radio
    v-model=&quot;picked&quot;
    semantic=&quot;secondary&quot;
    value=&quot;two&quot;
  >
    Radio
  </rd-button-radio>
  <rd-button-radio
    v-model=&quot;picked&quot;
    semantic=&quot;secondary&quot;
    value=&quot;three&quot;
  >
    Radio
  </rd-button-radio>
</rd-button-group>"
    />
    <h2>Props</h2>We can also use
    <nuxt-link append to="../button">Button</nuxt-link>attributes
    <properties type="props" :data="props"/>

    <h2>Events</h2>
    <properties type="events" :data="events"/>
  </div>
</template>

<script>
export default {
  name: "Radio",
  data() {
    return {
      picked: "one",
      props: [["modelValue", "v-model", "Boolean", "false", ""]],
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
