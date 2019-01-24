<template>
  <div>
    <h1>Cryptocurrency</h1>
    <p>View pricing data of the different types of cryptocurrency.</p>
    <h2>Example</h2>
    <example style="overflow-x:auto">
      <rd-eth-cyptocurrency currency="KRW"/>
    </example>
    <highlight code="<rd-eth-cyptocurrency currency=&quot;KRW&quot; />"/>

    <h2>Props</h2>
    <properties type="props" :data="props"/>
  </div>
</template>
<script>
export default {
  name: "Cryptocurrency",
  data() {
    return {
      props: [
        [
          "currency",
          "currency unit",
          "String",
          "KRW",
          "KRW, USD, GBP, ILS, JPY ..."
        ]
      ]
    };
  }
};
</script>
