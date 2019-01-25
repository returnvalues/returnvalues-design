<template>
  <div>
    <h1>Semantic</h1>
    <p>
      It is an internal Mixin which has visualization color information.
      <br>We can use components as below.
    </p>
    <ul>
      <li
        v-for="item of comps"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>

    <h2>Props</h2>
    <properties
      type="props"
      :data="props"
    />
  </div>
</template>

<script>
export default {
  name: 'Semantic',
  data() {
    return {
      comps: [
        'RdListItem',
        'RdButton',
        'RdButtonCheckbox',
        'RdButtonRadio',
        'RdAlert',
        'RdBadge',
        'RdNavbar',
        'RdProgress'
      ],
      props: [
        ['primary', '', 'Boolean', 'false', ''],
        ['secondary', '', 'Boolean', 'false', ''],
        ['success', '', 'Boolean', 'false', ''],
        ['danger', '', 'Boolean', 'false', ''],
        ['warning', '', 'Boolean', 'false', ''],
        ['info', '', 'Boolean', 'false', ''],
        ['light', '', 'Boolean', 'false', ''],
        ['dark', '', 'Boolean', 'false', ''],
        [
          'semantic',
          'Color accepts a string',
          'String',
          'false',
          'primary, secondary, success, danger, warning, info, light, dark'
        ]
      ]
    };
  }
};
</script>
