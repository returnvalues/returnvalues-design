<template>
  <div>
    <h1>Units filter</h1>
    <p class="bd-lead">Ethereum unit converter</p>
    <h2>Example</h2>
    <example>
      <rd-list-group>
        <rd-list-item>1 eth = {{ 1|RdEthUnits }} wei</rd-list-item>
        <rd-list-item>1 eth = {{ 1|RdEthUnits('nano') }} nano</rd-list-item>
        <rd-list-item>1 wei = {{ 1|RdEthUnits('wei','eth') }} eth</rd-list-item>
      </rd-list-group>
    </example>
    <highlight
      :code="`<rd-list-group>
  <rd-list-item>1 eth = {{ 1|RdEthUnits }} wei</rd-list-item>
  <rd-list-item>1 eth = {{ 1|RdEthUnits('nano') }} nano</rd-list-item>
  <rd-list-item>1 wei = {{ 1|RdEthUnits('wei','eth') }} eth</rd-list-item>
</rd-list-group>`"
    />
    <h2>Arguments</h2>
    <properties type="args" :data="args"/>
    <h3>Units</h3>
    <ul>
      <li>wei</li>
      <li>kwei</li>
      <li>babbage</li>
      <li>femtoether</li>
      <li>mwei</li>
      <li>lovelace</li>
      <li>picoether</li>
      <li>gwei</li>
      <li>shannon</li>
      <li>nanoether</li>
      <li>nano</li>
      <li>szabo</li>
      <li>microether</li>
      <li>micro</li>
      <li>finney</li>
      <li>milliether</li>
      <li>milli</li>
      <li>ether</li>
      <li>eth</li>
      <li>kether</li>
      <li>grand</li>
      <li>mether</li>
      <li>gether</li>
      <li>tether</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "UnitsFilter",
  data() {
    return {
      args: [
        ["from", "unit of Ether. can be ommited", "String", "eth", "(Units..)"],
        ["to", "return unit", "String", "wei", "(Units..)"]
      ]
    };
  }
};
</script>
