<template>
  <div>
    <h1>Checkbox</h1>
    <p>A component that uses RdButton internally.</p>
    <h2>Example</h2>
    <example>
      <rd-button-group>
        <rd-button-checkbox v-model="checked" semantic="secondary">Checked</rd-button-checkbox>
      </rd-button-group>
    </example>
    <highlight
      code="<rd-button-group>
  <rd-button-checkbox
    v-model=&quot;checked&quot;
    semantic=&quot;secondary&quot;
  >
    Checked
  </rd-button-checkbox>
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
  name: "Checkbox",
  data() {
    return {
      checked: true,
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
