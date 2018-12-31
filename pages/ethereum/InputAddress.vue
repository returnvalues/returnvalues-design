<template>
  <div>
    <h1>Input Address</h1>
    <h2>Example</h2>
    <div class="p-3 border">
      <rd-eth-input-address v-model="address" />
      <p>Address: {{ address || '' }}</p>
    </div>
    <highlight
      :code="`<rd-eth-input-address v-model=&quot;address&quot; />
<p>Address: {{ address || '' }}</p>`"
    />

    <h2>Props</h2>
    <properties
      type="props"
      :data="props"
    />
  </div>
</template>

<script>

export default {
  name: 'InputAddress',
  data() {
    return {
      address: null,
      props: [
        ['modelValue', 'v-model 유효할 경우에만 값이 채워집니다.', 'String', '', '']
      ],
    };
  }
};
</script>
