<template>
  <div>
    <h1>Outline</h1>
    <p>Outline is an internal Mixin.
      <br>Here are the components we can use.
    </p>
    <ul>
      <li v-for="item of comps" :key="item">{{ item }}</li>
    </ul>

    <h2>Props</h2>
    <properties type="props" :data="props"/>
  </div>
</template>

<script>
export default {
  name: "Size",
  data() {
    return {
      comps: ["RdButton", "RdInput"],
      props: [
        ["outlinePrimary", "", "Boolean", "false", ""],
        ["outlineSecondary", "", "Boolean", "false", ""],
        ["outlineSuccess", "", "Boolean", "false", ""],
        ["outlineDanger", "", "Boolean", "false", ""],
        ["outlineWarning", "", "Boolean", "false", ""],
        ["outlineInfo", "", "Boolean", "false", ""],
        ["outlineLight", "", "Boolean", "false", ""],
        ["outlineDark", "", "Boolean", "false", ""],
        [
          "outline",
          "We can configure outline with string.",
          "String",
          "",
          "primary, secondary, success, danger, warning, info, light, dark"
        ]
      ]
    };
  }
};
</script>
