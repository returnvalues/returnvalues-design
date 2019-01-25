<template>
  <div>
    <h1>List</h1>
    <p class="bd-lead">
      List groups are a flexible and powerful component for displaying a series of content.
      Modify and extend them to support just about any content within.
    </p>
    <h2>Example</h2>
    <h3>Basic example</h3>
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
    <h3>Active, Disabled items</h3>
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
      You can also use
      <nuxt-link
        append
        to="../mixins/semantic"
      >
        Semantic
      </nuxt-link>attributes .
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
        [
          'tag',
          'Tags of HTML elements to be rendered ',
          'String',
          'ul',
          'ul, div ...'
        ],
        ['flush', 'Remove some borders', 'Boolean', 'false', '']
      ],
      propsItem: [
        [
          'tag',
          'Tags of HTML elements to be rendered ',
          'String',
          'li',
          'li, div ...'
        ],
        ['active', 'active', 'Boolean', 'false', ''],
        ['disabled', 'disabled', 'Boolean', 'false', '']
      ]
    };
  }
};
</script>
