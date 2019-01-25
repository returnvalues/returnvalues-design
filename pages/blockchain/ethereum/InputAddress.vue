<template>
  <div>
    <h1>Input Address</h1>
    <p
      class="bd-lead"
    >To validate input value whether it is an account , a smart contract address or not.</p>
    <h2>Example</h2>
    <example>
      <rd-eth-input-address v-model="address"/>
      <p>Address: {{ address || '' }}</p>
    </example>
    <highlight
      :code="`<rd-eth-input-address v-model=&quot;address&quot; />
<p>Address: {{ address || '' }}</p>`"
    />

    <h2>Props</h2>
    <properties type="props" :data="props"/>
  </div>
</template>

<script>
export default {
  name: "InputAddress",
  data() {
    return {
      address: null,
      props: [
        [
          "modelValue",
          "you can fills in the value only if v-model value is validate",
          "String",
          "",
          ""
        ]
      ]
    };
  }
};
</script>
