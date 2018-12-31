<template>
  <table class="table table-striped table-sm">
    <thead>
      <tr>
        <th
          v-for="th of columns"
          :key="th.name"
          :style="th.style"
          v-text="th.name"
        />
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
          v-text="col"
        />
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
          { name: '속성', style: { width: '7rem' } },
          { name: '설명', style: { minWidth: '18rem' } },
          { name: '타입', style: { width: '6rem' } },
          { name: '기본값', style: { width: '6rem' } },
          { name: '사용 가능한 값', style: { width: '14rem' } },
        ]
      },
      events: {
        columns: [
          { name: '이벤트명', style: { width: '7rem' } },
          { name: '설명', style: { minWidth: '18rem', width: '34rem' } },
          { name: '파라미터', style: { width: '8rem' } }
        ]
      },
      methods: {
        columns: [
          { name: '이름', style: { width: '7rem' } },
          { name: '파라미터', style: { width: '6rem' } },
          { name: '설명', style: { minWidth: '18rem', width: '30rem' } },
          { name: '리턴값', style: { width: '6rem' } },
        ]
      },
      args: {
        columns: [
          { name: '이름', style: { width: '7rem' } },
          { name: '설명', style: { minWidth: '18rem' } },
          { name: '타입', style: { width: '6rem' } },
          { name: '기본값', style: { width: '6rem' } },
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
<style scoped>
  .table{display: block;overflow-x: auto;}
  .table th{white-space: nowrap;}
  .table td{white-space: pre-line;}
</style>
