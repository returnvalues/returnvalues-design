<template>
  <div>
    <h1>AddressFilter</h1>
    <h2>Example</h2>
    <div class="p-3 border">
      <rd-list-group>
        <rd-list-item>0xFBC82B9eBBA1F9ab0C36FB6Ca05Be71344DA0c5E</rd-list-item>
        <rd-list-item>{{ '0xFBC82B9eBBA1F9ab0C36FB6Ca05Be71344DA0c5E'|RdAddress }}</rd-list-item>
        <rd-list-item>
          {{ '0xFBC82B9eBBA1F9ab0C36FB6Ca05Be71344DA0c5E'|RdAddress(16) }}
        </rd-list-item>
      </rd-list-group>
    </div>
    <highlight
      :code="`<rd-list-group>
  <rd-list-item>0xFBC82B9eBBA1F9ab0C36FB6Ca05Be71344DA0c5E</rd-list-item>
  <rd-list-item>{{ '0xFBC82B9eBBA1F9ab0C36FB6Ca05Be71344DA0c5E'|RdAddress }}</rd-list-item>
  <rd-list-item>
    {{ '0xFBC82B9eBBA1F9ab0C36FB6Ca05Be71344DA0c5E'|RdAddress(16) }}
  </rd-list-item>
</rd-list-group>`"
    />
    <h2>Arguments</h2>
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th style="width:100px;">
            이름
          </th>
          <th>
            설명
          </th>
          <th style="width:80px;">
            타입
          </th>
          <th style="width:80px;">
            기본값
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row,idx) of args"
          :key="idx"
        >
          <td
            v-for="(col,idx2) of row"
            :key="idx2"
          >
            {{ col }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Highlight from '~/components/Highlight.vue';

export default {
  name: 'AddressFilter',
  components: { Highlight },
  data() { return { args: [['length', '표시할 주소의 문자열 길이. 최소 9', 'Number', 26]] }; }
};
</script>
