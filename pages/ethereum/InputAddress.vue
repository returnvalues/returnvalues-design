<template>
  <div>
    <h1>Input Address</h1>
    <h2>Example</h2>
    <div class="p-3 border">
      <rd-eth-input-address v-model="address" />
      <p>Address: {{ address || '' }}</p>
    </div>
    <highlight
      :code="`<rd-eth-input-address v-model=&quot;address&quot; />
<p>Address: {{ address || '' }}</p>`"
    />

    <h2>Props</h2>
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th style="width:100px;">
            속성
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
          <th style="width: 200px">
            사용 가능한 값
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row,idx) of props"
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
import Highlight from '~/components/Highlight';

export default {
  name: 'InputAddress',
  components: { Highlight },
  data() {
    return {
      address: null,
      props: [
        ['modelValue', 'v-model 유효할 경우에만 값이 채워집니다.', 'String', '', '']
      ],
    };
  }
};
</script>
