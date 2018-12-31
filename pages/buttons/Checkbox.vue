<template>
  <div>
    <h1>
      Checkbox
    </h1>
    내부적으로 쓰이는 믹스인들의 Props는 아래 링크에서 확인하세요.<br>
    <ul>
      <li>
        <nuxt-link to="/buttons/button">
          Button
        </nuxt-link>
      </li>
    </ul>
    <h2>Example</h2>
    <div class="border p-3">
      <rd-button-group>
        <rd-button-checkbox
          v-model="checked"
          semantic="secondary"
        >
          Checked
        </rd-button-checkbox>
      </rd-button-group>
    </div>
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
