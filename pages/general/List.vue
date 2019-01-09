<template>
  <div>
    <h1>
      List
    </h1>
    <p class="bd-lead">
      목록은 시리즈 컨텐츠를 보여 주는 유연하고 강력한 구성 요소입니다.
      Modify and extend them to support just about any content within.
    </p>
    <h2>Example</h2>
    <h3>
      Basic example
    </h3>
    <example>
      <rd-list-group>
        <rd-list-item>Cras justo odio</rd-list-item>
        <rd-list-item>Dapibus ac facilisis in</rd-list-item>
        <rd-list-item>Morbi leo risus</rd-list-item>
        <rd-list-item>Porta ac consectetur ac</rd-list-item>
        <rd-list-item>Vestibulum at eros</rd-list-item>
      </rd-list-group>
    </example>
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
    <example>
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
    </example>
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
    <properties
      type="props"
      :data="props"
    />
    <h2>RdListItem</h2>
    <h3>Props</h3>
    <p>
      추가로 <nuxt-link to="/general/mixins/semantic">
        Semantic
      </nuxt-link> 속성을 쓸 수 있습니다.
    </p>
    <properties
      type="props"
      :data="propsItem"
    />
  </div>
</template>

<script>

export default {
  name: 'List',
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
