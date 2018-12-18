<template>
  <div>
    <h1>Size</h1>
    <p>
      크기를 조절하는 내부 Mixin 입니다.<br>
      사용하는 컴포넌트는 아래와 같습니다.
    </p>
    <ul>
      <li
        v-for="item of comps"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>

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
export default {
  name: 'Size',
  data() {
    return {
      comps: ['RdButtonGroup',
        'RdButton',
        'RdInput',
        'RdNavbar',
        'RdPagination',
        'RdModal'],
      props: [
        ['sm', 'Small', 'Boolean', 'false', ''],
        ['lg', 'Large', 'Boolean', 'false', ''],
        ['size', 'size를 문자열로 줄 수 있습니다.', 'String', 'false', 'sm,lg'],
      ]
    };
  },
};
</script>
