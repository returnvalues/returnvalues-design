<template>
  <div>
    <h1>Input Address</h1>
    <p class="bd-lead">
      입력된 데이터가 Account 혹은 스마트컨트랙트 address인지 유효성을 검사하는 컴포넌트
    </p>
    <h2>Example</h2>
    <example>
      <rd-eth-input-address v-model="address" />
      <p>Address: {{ address || '' }}</p>
    </example>
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
