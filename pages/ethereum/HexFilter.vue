<template>
  <div>
    <h1>HexFilter</h1>
    <p class="bd-lead">
      필터를 이용하여 hex 스트링을 원하는 형식으로 변환합니다.
    </p>
    <h2>Example</h2>
    <example style="overflow:auto">
      <rd-list-group>
        <rd-list-item>0x52657475726e56616c7565732044657369676e</rd-list-item>
        <rd-list-item>{{ '0x52657475726e56616c7565732044657369676e'|RdEthHex }}</rd-list-item>
        <rd-list-item>
          {{ '0x52657475726e56616c7565732044657369676e'|RdEthHex('ascii') }}
        </rd-list-item>
      </rd-list-group>
    </example>
    <highlight
      :code="`<rd-list-group>
  <rd-list-item>0x52657475726e56616c7565732044657369676e</rd-list-item>
  <rd-list-item>{{ '0x52657475726e56616c7565732044657369676e'|RdEthHex }}</rd-list-item>
  <rd-list-item>
    {{ '0x52657475726e56616c7565732044657369676e'|RdEthHex('ascii') }}
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
  name: 'HexFilter',
  data() { return { args: [['to', '보여줄 형식', 'String', 'utf8', 'utf8, ascii, number, numberString, string']] }; }
};
</script>
