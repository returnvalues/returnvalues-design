<template>
  <div>
    <h1>Badges</h1>
    <p
      class="bd-lead"
    >
      Documentation and examples for badges, counting numbers and labeling component
    </p>

    <h2>Example</h2>
    <example>
      <h1>
        Example heading
        <rd-badge secondary>
          New
        </rd-badge>
      </h1>
      <h2>
        Example heading
        <rd-badge secondary>
          New
        </rd-badge>
      </h2>
      <h3>
        Example heading
        <rd-badge secondary>
          New
        </rd-badge>
      </h3>
      <h4>
        Example heading
        <rd-badge secondary>
          New
        </rd-badge>
      </h4>
      <h5>
        Example heading
        <rd-badge secondary>
          New
        </rd-badge>
      </h5>
      <h6>
        Example heading
        <rd-badge secondary>
          New
        </rd-badge>
      </h6>
    </example>
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

    <example>
      <rd-button primary>
        Notifications
        <rd-badge light>
          4
        </rd-badge>
      </rd-button>

      <rd-button primary>
        Profile
        <rd-badge light>
          9
        </rd-badge>
      </rd-button>
    </example>
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

    <example>
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
    </example>
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
    <example>
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
    </example>
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
    <example>
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
    </example>
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
    <h2>Props</h2>We can also use
    <nuxt-link
      append
      to="../mixins/semantic"
    >
      Semantic
    </nuxt-link>attributes.
    <properties
      type="props"
      :data="props"
    />
  </div>
</template>

<script>
export default {
  name: 'Badge',
  data() {
    return {
      props: [
        ['pill', 'Make badges more rounded', 'Boolean', 'false', ''],
        [
          'tag',
          'Tags of HTML elements to be rendered',
          'String',
          '',
          'a, span ...'
        ]
      ]
    };
  }
};
</script>
