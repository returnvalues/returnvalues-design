<template>
  <div>
    <h1>
      Radio
    </h1>
    내부적으로 쓰이는 믹스인들의 Props는 아래 링크에서 확인하세요.<br>
    <ul>
      <li>
        <nuxt-link to="/buttons/button">
          Button
        </nuxt-link>
      </li>
    </ul>
    <h2>Example</h2>
    <div class="border p-3">
      <rd-button-group>
        <rd-button-radio
          v-model="picked"
          semantic="secondary"
          value="one"
        >
          Active
        </rd-button-radio>
        <rd-button-radio
          v-model="picked"
          semantic="secondary"
          value="two"
        >
          Radio
        </rd-button-radio>
        <rd-button-radio
          v-model="picked"
          semantic="secondary"
          value="three"
        >
          Radio
        </rd-button-radio>
      </rd-button-group>
    </div>
    <highlight
      code="<rd-button-group>
  <rd-button-radio
    v-model=&quot;picked&quot;
    semantic=&quot;secondary&quot;
    value=&quot;one&quot;
  >
    Active
  </rd-button-radio>
  <rd-button-radio
    v-model=&quot;picked&quot;
    semantic=&quot;secondary&quot;
    value=&quot;two&quot;
  >
    Radio
  </rd-button-radio>
  <rd-button-radio
    v-model=&quot;picked&quot;
    semantic=&quot;secondary&quot;
    value=&quot;three&quot;
  >
    Radio
  </rd-button-radio>
</rd-button-group>"
    />
    <h2>Props</h2>
    추가로 <nuxt-link to="/buttons/button">
      Button
    </nuxt-link> 속성을 쓸 수 있습니다.
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
    <h2>Events</h2>
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th style="width:100px;">
            이벤트명
          </th>
          <th>
            설명
          </th>
          <th style="width:120px;">
            파라미터
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row,idx) of events"
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
import { RdButtonGroup, RdButtonRadio } from '~/src';
import Highlight from '~/components/Highlight.vue';

export default {
  name: 'Radio',
  components: { RdButtonGroup, RdButtonRadio, Highlight },
  data() {
    return {
      picked: 'one',
      props: [
        ['modelValue', 'v-model', 'Boolean', 'false', ''],
      ],
      events: [
        ['change', '값이 바뀌었을때 발생', '(value)']
      ],
    };
  },
};
</script>
