<template>
  <div>
    <h1>
      Radio
    </h1>
    <p>내부적으로 RdButton을 쓰는 컴포넌트 입니다.</p>
    <h2>Example</h2>
    <div class="border p-3">
      <rd-button-group>
        <rd-button-radio
          v-model="picked"
          semantic="secondary"
          value="one"
        >
          Active
        </rd-button-radio>
        <rd-button-radio
          v-model="picked"
          semantic="secondary"
          value="two"
        >
          Radio
        </rd-button-radio>
        <rd-button-radio
          v-model="picked"
          semantic="secondary"
          value="three"
        >
          Radio
        </rd-button-radio>
      </rd-button-group>
    </div>
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
    <h2>Props</h2>
    추가로 <nuxt-link to="/buttons/button">
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
  name: 'Radio',
  data() {
    return {
      picked: 'one',
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
