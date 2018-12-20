<template>
  <div>
    <h1>Badges</h1>
    <p>
      내부적으로 <nuxt-link to="/mixins/semantic">
        Semantic
      </nuxt-link> 믹스인을 사용하여 색상을 표시합니다.<br>
      Props는 <nuxt-link to="/mixins/semantic">
        Semantic
      </nuxt-link>를 참조하세요
    </p>
    <h2>Example</h2>
    <div class="border p-3">
      <h1>
        Example heading <rd-badge secondary>
          New
        </rd-badge>
      </h1>
      <h2>
        Example heading <rd-badge secondary>
          New
        </rd-badge>
      </h2>
      <h3>
        Example heading <rd-badge secondary>
          New
        </rd-badge>
      </h3>
      <h4>
        Example heading <rd-badge secondary>
          New
        </rd-badge>
      </h4>
      <h5>
        Example heading <rd-badge secondary>
          New
        </rd-badge>
      </h5>
      <h6>
        Example heading <rd-badge secondary>
          New
        </rd-badge>
      </h6>
    </div>
    <highlight
      code="<h1>
  Example heading <rd-badge secondary>
  New
</rd-badge>
</h1>
<h2>
  Example heading <rd-badge secondary>
  New
</rd-badge>
</h2>
<h3>
  Example heading <rd-badge secondary>
  New
</rd-badge>
</h3>
<h4>
  Example heading <rd-badge secondary>
  New
</rd-badge>
</h4>
<h5>
  Example heading <rd-badge secondary>
  New
</rd-badge>
</h5>
<h6>
  Example heading <rd-badge secondary>
  New
</rd-badge>
</h6>"
    />


    <div class="border p-3">
      <rd-button primary>
        Notifications <rd-badge light>
          4
        </rd-badge>
      </rd-button>

      <rd-button primary>
        Profile <rd-badge light>
          9
        </rd-badge>
      </rd-button>
    </div>
    <highlight
      code="<rd-button primary>
  Notifications <rd-badge light>
    4
  </rd-badge>
</rd-button>

<rd-button primary>
  Profile <rd-badge light>
    9
  </rd-badge>
</rd-button>"
    />


    <h3>Contextual variations</h3>

    <div class="border p-3">
      <rd-badge primary>
        Primary
      </rd-badge>
      <rd-badge secondary>
        Secondary
      </rd-badge>
      <rd-badge success>
        Success
      </rd-badge>
      <rd-badge danger>
        Danger
      </rd-badge>
      <rd-badge warning>
        Warning
      </rd-badge>
      <rd-badge info>
        Info
      </rd-badge>
      <rd-badge light>
        Light
      </rd-badge>
      <rd-badge dark>
        Dark
      </rd-badge>
    </div>
    <highlight
      code="<rd-badge primary>
  Primary
</rd-badge>
<rd-badge secondary>
  Secondary
</rd-badge>
<rd-badge success>
  Success
</rd-badge>
<rd-badge danger>
  Danger
</rd-badge>
<rd-badge warning>
  Warning
</rd-badge>
<rd-badge info>
  Info
</rd-badge>
<rd-badge light>
  Light
</rd-badge>
<rd-badge dark>
  Dark
</rd-badge>"
    />

    <h3>Pill badges</h3>
    <div class="border p-3">
      <rd-badge
        pill
        primary
      >
        Primary
      </rd-badge>
      <rd-badge
        pill
        secondary
      >
        Secondary
      </rd-badge>
      <rd-badge
        pill
        success
      >
        Success
      </rd-badge>
      <rd-badge
        pill
        danger
      >
        Danger
      </rd-badge>
      <rd-badge
        pill
        warning
      >
        Warning
      </rd-badge>
      <rd-badge
        pill
        info
      >
        Info
      </rd-badge>
      <rd-badge
        pill
        light
      >
        Light
      </rd-badge>
      <rd-badge
        pill
        dark
      >
        Dark
      </rd-badge>
    </div>
    <highlight
      code="<rd-badge
  pill
  primary
>
  Primary
</rd-badge>
<rd-badge
  pill
  secondary
>
  Secondary
</rd-badge>
<rd-badge
  pill
  success
>
  Success
</rd-badge>
<rd-badge
  pill
  danger
>
  Danger
</rd-badge>
<rd-badge
  pill
  warning
>
  Warning
</rd-badge>
<rd-badge
  pill
  info
>
  Info
</rd-badge>
<rd-badge
  pill
  light
>
  Light
</rd-badge>
<rd-badge
  pill
  dark
>
  Dark
</rd-badge>"
    />

    <h3>Links</h3>
    <div class="border p-3">
      <rd-badge
        tag="a"
        href="javascript:"
        primary
      >
        Primary
      </rd-badge>
      <rd-badge
        tag="a"
        href="javascript:"
        secondary
      >
        Secondary
      </rd-badge>
      <rd-badge
        tag="a"
        href="javascript:"
        success
      >
        Success
      </rd-badge>
      <rd-badge
        tag="a"
        href="javascript:"
        danger
      >
        Danger
      </rd-badge>
      <rd-badge
        tag="a"
        href="javascript:"
        warning
      >
        Warning
      </rd-badge>
      <rd-badge
        tag="a"
        href="javascript:"
        info
      >
        Info
      </rd-badge>
      <rd-badge
        tag="a"
        href="javascript:"
        light
      >
        Light
      </rd-badge>
      <rd-badge
        tag="a"
        href="javascript:"
        dark
      >
        Dark
      </rd-badge>
    </div>
    <highlight
      code="<rd-badge
  tag=&quot;a&quot;
  href=&quot;javascript:&quot;
  primary
>
  Primary
</rd-badge>
<rd-badge
  tag=&quot;a&quot;
  href=&quot;javascript:&quot;
  secondary
>
  Secondary
</rd-badge>
<rd-badge
  tag=&quot;a&quot;
  href=&quot;javascript:&quot;
  success
>
  Success
</rd-badge>
<rd-badge
  tag=&quot;a&quot;
  href=&quot;javascript:&quot;
  danger
>
  Danger
</rd-badge>
<rd-badge
  tag=&quot;a&quot;
  href=&quot;javascript:&quot;
  warning
>
  Warning
</rd-badge>
<rd-badge
  tag=&quot;a&quot;
  href=&quot;javascript:&quot;
  info
>
  Info
</rd-badge>
<rd-badge
  tag=&quot;a&quot;
  href=&quot;javascript:&quot;
  light
>
  Light
</rd-badge>
<rd-badge
  tag=&quot;a&quot;
  href=&quot;javascript:&quot;
  dark
>
  Dark
</rd-badge>"
    />
    <h2>Props</h2>
    추가로 <nuxt-link to="/mixins/semantic">
      Semantic
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
  </div>
</template>

<script>
import { RdBadge, RdButton } from '~/src';
import Highlight from '../../components/Highlight';

export default {
  name: 'Badge',
  components: {
    Highlight,
    RdBadge,
    RdButton
  },
  data() {
    return {
      props: [
        ['pill', '둥근 모양', 'Boolean', 'false', ''],
        ['tag', '렌더링 될 HTML 엘리먼트의 태그', 'String', '', 'a, span ...'],
      ]
    };
  }
};
</script>
