<template>
  <div>
    <h1>
      List
    </h1>
    <h2>Example</h2>
    <h3>
      Basic example
    </h3>
    <div class="border p-3">
      <rd-list-group>
        <rd-list-item>Cras justo odio</rd-list-item>
        <rd-list-item>Dapibus ac facilisis in</rd-list-item>
        <rd-list-item>Morbi leo risus</rd-list-item>
        <rd-list-item>Porta ac consectetur ac</rd-list-item>
        <rd-list-item>Vestibulum at eros</rd-list-item>
      </rd-list-group>
    </div>
    <highlight
      code="<rd-list-group>
  <rd-list-item>Cras justo odio</rd-list-item>
  <rd-list-item>Dapibus ac facilisis in</rd-list-item>
  <rd-list-item>Morbi leo risus</rd-list-item>
  <rd-list-item>Porta ac consectetur ac</rd-list-item>
  <rd-list-item>Vestibulum at eros</rd-list-item>
</rd-list-group>"
    />
    <h3>
      Active, Disabled items
    </h3>
    <div class="border p-3">
      <rd-list-group tag="div">
        <rd-list-item
          tag="button"
          active
        >
          Cras justo odio
        </rd-list-item>
        <rd-list-item
          tag="button"
          disabled
        >
          Dapibus ac facilisis in
        </rd-list-item>
        <rd-list-item
          tag="button"
          primary
        >
          Morbi leo risus
        </rd-list-item>
        <rd-list-item tag="button">
          Porta ac consectetur ac
        </rd-list-item>
        <rd-list-item tag="button">
          Vestibulum at eros
        </rd-list-item>
      </rd-list-group>
    </div>
    <highlight
      code="<rd-list-group tag=&quot;div&quot;>
  <rd-list-item
    tag=&quot;button&quot;
    active
  >
    Cras justo odio
  </rd-list-item>
  <rd-list-item
    tag=&quot;button&quot;
    disabled
  >
    Dapibus ac facilisis in
  </rd-list-item>
  <rd-list-item
    tag=&quot;button&quot;
    primary
  >
    Morbi leo risus
  </rd-list-item>
  <rd-list-item tag=&quot;button&quot;>
    Porta ac consectetur ac
  </rd-list-item>
  <rd-list-item tag=&quot;button&quot;>
    Vestibulum at eros
  </rd-list-item>
</rd-list-group>"
    />
    <h2>RdListGroup</h2>
    <h3>Props</h3>
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
    <h2>RdListItem</h2>
    <h3>Props</h3>
    <p>
      추가로 <nuxt-link to="/mixins/semantic">
        Semantic
      </nuxt-link> 속성을 쓸 수 있습니다.
    </p>
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
          v-for="(row,idx) of propsItem"
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
import { RdListGroup, RdListItem } from '~/src';
import Highlight from '~/components/Highlight.vue';

export default {
  name: 'List',
  components: { RdListGroup, RdListItem, Highlight },
  data() {
    return {
      props: [
        ['tag', '렌더링 될 HTML 엘리먼트의 태그', 'String', 'ul', 'ul, div ...'],
        ['flush', '보더를 사용하지 않습니다.', 'Boolean', 'false', ''],

      ],
      propsItem: [
        ['tag', '렌더링 될 HTML 엘리먼트의 태그', 'String', 'li', 'li, div ...'],
        ['active', 'active 상태', 'Boolean', 'false', ''],
        ['disabled', 'disabled 상태', 'Boolean', 'false', ''],
      ],
    };
  }
};
</script>
