<template>
  <div>
    <h1>Alert</h1>
    <p class="bd-lead">
      유연한 알림 메시지를 통해 일반적 사용자 작업에 대한 상황별 피드백 메시지를 제공하십시오.
    </p>

    <h2>Example</h2>
    <example>
      <rd-alert primary>
        A simple primary alert—check it out!
      </rd-alert>
      <rd-alert secondary>
        A simple secondary alert—check it out!
      </rd-alert>
      <rd-alert success>
        A simple success alert—check it out!
      </rd-alert>
      <rd-alert danger>
        A simple danger alert—check it out!
      </rd-alert>
      <rd-alert warning>
        A simple warning alert—check it out!
      </rd-alert>
      <rd-alert info>
        A simple info alert—check it out!
      </rd-alert>
      <rd-alert light>
        A simple light alert—check it out!
      </rd-alert>
      <rd-alert dark>
        A simple dark alert—check it out!
      </rd-alert>
    </example>
    <highlight
      class="border-top-0"
      code="<rd-alert primary>
  A simple primary alert—check it out!
</rd-alert>
<rd-alert secondary>
  A simple secondary alert—check it out!
</rd-alert>
<rd-alert success>
  A simple success alert—check it out!
</rd-alert>
<rd-alert danger>
  A simple danger alert—check it out!
</rd-alert>
<rd-alert warning>
  A simple warning alert—check it out!
</rd-alert>
<rd-alert info>
  A simple info alert—check it out!
</rd-alert>
<rd-alert light>
  A simple light alert—check it out!
</rd-alert>
<rd-alert dark>
  A simple dark alert—check it out!
</rd-alert>"
    />

    <h2>Props</h2>
    <nuxt-link to="/general/mixins/semantic">
      Semantic
    </nuxt-link> 속성을 쓸 수 있습니다.
  </div>
</template>

<script>

export default {
  name: 'Alert',
};
</script>
