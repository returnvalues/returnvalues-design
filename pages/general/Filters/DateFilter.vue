<template>
  <div>
    <h1>Date filter</h1>
    <p class="bd-lead">
      날짜 데이터의 표시 및 변환 필터<br>
      내부적으로 Moment.js의 포맷을 사용합니다.
    </p>
    <h2>Example</h2>
    <example>
      <rd-list-group>
        <rd-list-item> 1546268400000 ms = {{ 1546268400000|RdDate }}</rd-list-item>
        <rd-list-item> 1546268400 unix timestamp = {{ 1546268400|RdDate('YYYY-MM-DD','X') }}</rd-list-item>
        <rd-list-item> 1546268400 unix timestamp = {{ 1546268400|RdDate('x','X') }} ms</rd-list-item>
      </rd-list-group>
    </example>
    <highlight
      :code="`<rd-list-group>
  <rd-list-item> 1546268400000 ms = {{ 1546268400000|RdDate }}</rd-list-item>
  <rd-list-item> 1546268400 unix timestamp = {{ 1546268400|RdDate('YYYY-MM-DD','X') }}</rd-list-item>
  <rd-list-item> 1546268400 unix timestamp = {{ 1546268400|RdDate('x','X') }} ms</rd-list-item>
</rd-list-group>`"
    />
    <h3>Functional Use</h3>
    <example>
      <rd-list-group>
        <rd-list-item> 1546268400000 ms = {{ RdDate(1546268400000) }}</rd-list-item>
        <rd-list-item> 1546268400 unix timestamp = {{ RdDate(1546268400,'YYYY-MM-DD','X') }}</rd-list-item>
        <rd-list-item> 1546268400 unix timestamp = {{ RdDate(1546268400,'x','X') }} ms</rd-list-item>
      </rd-list-group>
    </example>
    <highlight
      :code="`<rd-list-group>
  <rd-list-item> 1546268400000 ms = {{ RdDate(1546268400000) }}</rd-list-item>
  <rd-list-item> 1546268400 unix timestamp = {{ RdDate(1546268400,'YYYY-MM-DD','X') }}</rd-list-item>
  <rd-list-item> 1546268400 unix timestamp = {{ RdDate(1546268400,'x','X') }} ms</rd-list-item>
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
  name: 'DateFilter',
  data() {
    return {
      args: [
        ['toFormat', '보여줄 날짜 형식', 'String', 'YYYY-MM-DD', ''],
        ['fromFormat', '입력의 날짜 형식', 'String', '', '']
      ]
    };
  },
};
</script>
