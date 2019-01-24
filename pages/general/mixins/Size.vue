<template>
  <div>
    <h1>Size</h1>
    <p>Internal Mixin which adjust the size.
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
      comps: [
        "RdButtonGroup",
        "RdButton",
        "RdInput",
        "RdNavbar",
        "RdPagination",
        "RdModal"
      ],
      props: [
        ["sm", "Small", "Boolean", "false", ""],
        ["lg", "Large", "Boolean", "false", ""],
        [
          "size",
          "We can configure size with string .",
          "String",
          "false",
          "sm,lg"
        ]
      ]
    };
  }
};
</script>
