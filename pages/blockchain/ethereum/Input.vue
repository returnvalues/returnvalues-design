<template>
  <div>
    <h1>Ethereum Input</h1>
    <p
      class="bd-lead"
    >When you save string in smart contract Ethereum Input converts string into byte values . It returns byte value of a string.</p>
    <h2>Example</h2>
    <example>
      <rd-eth-input v-model="hexData">
        <b>Default</b>
      </rd-eth-input>
      <rd-eth-input v-model="hexData" from="hex">
        <b>from: hex</b>
      </rd-eth-input>
      <p>hexData: {{ hexData }}</p>
      <rd-eth-input v-model="bytesData" class="mt-5" to="bytes">
        <b>to: bytes</b>
      </rd-eth-input>
      <rd-eth-input v-model="bytesData" from="hex" to="bytes">
        <b>from: hex, to: bytes</b>
      </rd-eth-input>
      <p>bytesData: {{ bytesData }}</p>
    </example>
    <highlight
      :code="`<rd-eth-input v-model=&quot;hexData&quot;>
  <b>Default</b>
</rd-eth-input>
<rd-eth-input
  v-model=&quot;hexData&quot;
  from=&quot;hex&quot;
>
  <b>from: hex</b>
</rd-eth-input>
<p>hexData: {{ hexData }}</p>
<rd-eth-input
  v-model=&quot;bytesData&quot;
  class=&quot;mt-5&quot;
  to=&quot;bytes&quot;
>
  <b>to: bytes</b>
</rd-eth-input>
<rd-eth-input
  v-model=&quot;bytesData&quot;
  from=&quot;hex&quot;
  to=&quot;bytes&quot;
>
  <b>from: hex, to: bytes</b>
</rd-eth-input>
<p>bytesData: {{ bytesData }}</p>`"
    />

    <h2>Props</h2>
    <properties type="props" :data="props"/>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      hexData: "0x52657475726e56616c7565732044657369676e",
      bytesData: [
        82,
        101,
        116,
        117,
        114,
        110,
        86,
        97,
        108,
        117,
        101,
        115,
        32,
        68,
        101,
        115,
        105,
        103,
        110
      ],
      props: [
        ["modelValue", "v-model", "Array|String", "", ""],
        [
          "from",
          "input type",
          "String",
          "utf8",
          "ascii, bytes, hex, number, numberString, utf8"
        ],
        [
          "to",
          "output type",
          "String",
          "hex",
          "ascii, bytes, hex, number, numberString, utf8"
        ]
      ]
    };
  }
};
</script>
