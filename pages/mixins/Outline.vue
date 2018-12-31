<template>
  <div>
    <h1>Outline</h1>
    <p>
      Outline 내부 Mixin 입니다.<br>
      사용하는 컴포넌트는 아래와 같습니다.
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
  name: 'Size',
  data() {
    return {
      comps: ['RdButton', 'RdInput'],
      props: [
        ['outlinePrimary', '', 'Boolean', 'false', ''],
        ['outlineSecondary', '', 'Boolean', 'false', ''],
        ['outlineSuccess', '', 'Boolean', 'false', ''],
        ['outlineDanger', '', 'Boolean', 'false', ''],
        ['outlineWarning', '', 'Boolean', 'false', ''],
        ['outlineInfo', '', 'Boolean', 'false', ''],
        ['outlineLight', '', 'Boolean', 'false', ''],
        ['outlineDark', '', 'Boolean', 'false', ''],
        ['outline', 'outline을 문자열로 줄 수 있습니다.', 'String', '', 'primary, secondary, success, danger, warning, info, light, dark'],
      ]
    };
  },
};
</script>
