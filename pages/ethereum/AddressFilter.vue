<template>
  <div>
    <h1>AddressFilter</h1>
    <p class="bd-lead">
      필터를 이용하여 hex 주소를 필요한 길이로 보여 줄 수 있습니다.
    </p>
    <h2>Example</h2>
    <example>
      <rd-list-group>
        <rd-list-item>0xFBC82B9eBBA1F9ab0C36FB6Ca05Be71344DA0c5E</rd-list-item>
        <rd-list-item>{{ '0xFBC82B9eBBA1F9ab0C36FB6Ca05Be71344DA0c5E'|RdEthAddress }}</rd-list-item>
        <rd-list-item>
          {{ '0xFBC82B9eBBA1F9ab0C36FB6Ca05Be71344DA0c5E'|RdEthAddress(16) }}
        </rd-list-item>
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
    <properties
      type="args"
      :data="args"
    />
  </div>
</template>

<script>

export default {
  name: 'AddressFilter',
  data() { return { args: [['length', '표시할 주소의 문자열 길이. 최소 9', 'Number', 26]] }; }
};
</script>
