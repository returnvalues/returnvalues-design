<template>
  <div>
    <h1>ToHex Filter</h1>
    <p class="bd-lead">
      필터를 이용하여 값을 hex 스트링으로 변환합니다.
    </p>
    <h2>Example</h2>
    <example style="overflow:auto">
      <rd-list-group>
        <rd-list-item>{{ 'ReturnValues Design' }}</rd-list-item>
        <rd-list-item>{{ 'ReturnValues Design'|RdEthToHex }}</rd-list-item>
        <rd-list-item>{{ 'ReturnValues Design'|RdEthToHex|RdEthHex }}</rd-list-item>
      </rd-list-group>
    </example>
    <highlight
      :code="`<rd-list-group>
  <rd-list-item>{{ 'ReturnValues Design' }}</rd-list-item>
  <rd-list-item>{{ 'ReturnValues Design'|RdEthToHex }}</rd-list-item>
  <rd-list-item>{{ 'ReturnValues Design'|RdEthToHex|RdEthHex }}</rd-list-item>
</rd-list-group>`"
    />
    <h2>Arguments</h2>
    <properties
      type="args"
      :data="args"
    />
  </div>
</template>

<script>

export default {
  name: 'ToHexFilter',
  data() { return { args: [['from', '값의 형식', 'String', 'utf8', 'ascii, bytes, number, numberString, utf8']] }; }
};
</script>
