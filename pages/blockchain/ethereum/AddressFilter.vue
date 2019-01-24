<template>
  <div>
    <h1>Address Filter</h1>
    <p class="bd-lead">It is used to get the length of an account for smart contract address.</p>
    <h2>Example</h2>
    <example style="overflow:auto">
      <rd-list-group>
        <rd-list-item>0xFBC82B9eBBA1F9ab0C36FB6Ca05Be71344DA0c5E</rd-list-item>
        <rd-list-item>{{ '0xFBC82B9eBBA1F9ab0C36FB6Ca05Be71344DA0c5E'|RdEthAddress }}</rd-list-item>
        <rd-list-item>{{ '0xFBC82B9eBBA1F9ab0C36FB6Ca05Be71344DA0c5E'|RdEthAddress(16) }}</rd-list-item>
      </rd-list-group>
    </example>
    <highlight
      :code="`<rd-list-group>
  <rd-list-item>0xFBC82B9eBBA1F9ab0C36FB6Ca05Be71344DA0c5E</rd-list-item>
  <rd-list-item>{{ '0xFBC82B9eBBA1F9ab0C36FB6Ca05Be71344DA0c5E'|RdEthAddress }}</rd-list-item>
  <rd-list-item>
    {{ '0xFBC82B9eBBA1F9ab0C36FB6Ca05Be71344DA0c5E'|RdEthAddress(16) }}
  </rd-list-item>
</rd-list-group>`"
    />
    <h2>Arguments</h2>
    <properties type="args" :data="args"/>
  </div>
</template>

<script>
export default {
  name: "AddressFilter",
  data() {
    return {
      args: [["length", "Length of the address. Minimum 9", "Number", 26]]
    };
  }
};
</script>
