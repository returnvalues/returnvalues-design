<template>
  <div>
    <h1>
      Checkbox
    </h1>
    <p>내부적으로 RdButton을 쓰는 컴포넌트 입니다.</p>
    <h2>Example</h2>
    <example>
      <rd-button-group>
        <rd-button-checkbox
          v-model="checked"
          semantic="secondary"
        >
          Checked
        </rd-button-checkbox>
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
    <h2>Props</h2>
    추가로 <nuxt-link
      append
      to="../button"
    >
      Button
    </nuxt-link> 속성을 쓸 수 있습니다.
    <properties
      type="props"
      :data="props"
    />
    <h2>Events</h2>
    <properties
      type="events"
      :data="events"
    />
  </div>
</template>

<script>

export default {
  name: 'Checkbox',
  data() {
    return {
      checked: true,
      props: [
        ['modelValue', 'v-model', 'Boolean', 'false', ''],
      ],
      events: [
        ['change', '값이 바뀌었을때 발생', '(value)']
      ],
    };
  },
};
</script>
