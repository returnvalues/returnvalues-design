<template>
  <div>
    <h1>Alert</h1>
    <p>
      내부적으로 <nuxt-link to="/mixins/semantic">
        Semantic
      </nuxt-link> 믹스인을 사용하여 색상을 표시합니다.<br>
      Props는 <nuxt-link to="/mixins/semantic">
        Semantic
      </nuxt-link>를 참조하세요
    </p>

    <h2>Example</h2>
    <div class="border p-3">
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
    </div>
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
  </div>
</template>

<script>

export default {
  name: 'Alert',
};
</script>
