<template>
  <div>
    <h1>Semantic</h1>
    <p>
      시각화 색상 정보를 가지고 있는 내부 Mixin 입니다.<br>
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
  name: 'Semantic',
  data() {
    return {
      comps: ['RdListItem',
        'RdButton',
        'RdButtonCheckbox',
        'RdButtonRadio',
        'RdAlert',
        'RdBadge',
        'RdNavbar',
        'RdProgress'],
      props: [
        ['primary', '', 'Boolean', 'false', ''],
        ['secondary', '', 'Boolean', 'false', ''],
        ['success', '', 'Boolean', 'false', ''],
        ['danger', '', 'Boolean', 'false', ''],
        ['warning', '', 'Boolean', 'false', ''],
        ['info', '', 'Boolean', 'false', ''],
        ['light', '', 'Boolean', 'false', ''],
        ['dark', '', 'Boolean', 'false', ''],
        ['semantic', '색상을 문자열로 줄 수 있습니다.', 'String', 'false', 'primary, secondary, success, danger, warning, info, light, dark'],
      ]
    };
  },
};
</script>
