<template>
  <div>
    <h1>Cryptocurrency</h1>
    <p>여러 화폐들의 시세를 보여줍니다.</p>
    <h2>Example</h2>
    <example style="overflow-x:auto">
      <rd-eth-cyptocurrency currency="KRW" />
    </example>
    <highlight code="<rd-eth-cyptocurrency currency=&quot;KRW&quot; />" />

    <h2>Props</h2>
    <properties
      type="props"
      :data="props"
    />
  </div>
</template>
<script>
export default {
  name: 'Cryptocurrency',
  data() {
    return {
      props: [
        ['currency', '보여줄 금액 단위', 'String', 'KRW', 'KRW, USD, GBP, ILS, JPY ...'],
      ],
    };
  },
};
</script>
