<template>
  <table class="table table-striped table-sm">
    <thead>
      <tr>
        <th
          v-for="th of columns"
          :key="th.name"
          :style="th.style"
        >
          {{ th.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row,idx) of data"
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
</template>
<script>
export default {
  name: 'Properties',
  props: {
    type: { type: String, default: 'props' },
    data: { type: Array, default: undefined }
  },
  data() {
    return {
      props: {
        columns: [
          { name: '속성', style: { width: '100px' } },
          { name: '설명', },
          { name: '타입', style: { width: '80px' } },
          { name: '기본값', style: { width: '80px' } },
          { name: '사용 가능한 값', style: { width: '200px' } },
        ]
      },
      events: {
        columns: [
          { name: '이벤트명', style: { width: '100px' } },
          { name: '설명' },
          { name: '파라미터', style: { width: '120px' } }
        ]
      },
      methods: {
        columns: [
          { name: '이름', style: { width: '100px' } },
          { name: '파라미터', style: { width: '80px' } },
          { name: '설명' },
          { name: '리턴값', style: { width: '80px' } },
        ]
      },
      args: {
        columns: [
          { name: '이름', style: { width: '100px' } },
          { name: '설명' },
          { name: '타입', style: { width: '80px' } },
          { name: '기본값', style: { width: '80px' } },
        ]
      }
    };
  },
  computed: {
    columns() {
      const ret = this[this.type].columns;
      let slice = 0;
      this.data.forEach(({ length }) => { slice = Math.max(slice, length); });
      return slice ? ret.slice(0, slice) : ret;
    }
  },
};
</script>
