<template>
  <div>
    <h1>Buttons</h1>
    <p class="bd-lead">
      폼 액션, 대화상자 등의 작업에 다양한 크기, 상태 등을 지원하는 사용자 정의 버튼 스타일을 사용하십시오.
    </p>
    <ul>
      <li>
        <nuxt-link to="/mixins/semantic">
          Semantic
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/mixins/outline">
          Outline
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/mixins/size">
          Size
        </nuxt-link>
      </li>
    </ul>
    <h2>Examples</h2>
    <h3>Semantic purpose</h3>
    <example>
      <rd-button semantic="primary">
        Primary
      </rd-button>
      <rd-button semantic="secondary">
        Secondary
      </rd-button>
      <rd-button semantic="success">
        Success
      </rd-button>
      <rd-button semantic="danger">
        Danger
      </rd-button>
      <rd-button semantic="warning">
        Warning
      </rd-button>
      <rd-button semantic="info">
        Info
      </rd-button>
      <rd-button semantic="light">
        Light
      </rd-button>
      <rd-button semantic="dark">
        Dark
      </rd-button>
      <rd-button semantic="link">
        Link
      </rd-button>
    </example>
    <highlight
      code="<rd-button semantic=&quot;primary&quot;>
  Primary
</rd-button>
<rd-button semantic=&quot;secondary&quot;>
  Secondary
</rd-button>
<rd-button semantic=&quot;success&quot;>
  Success
</rd-button>
<rd-button semantic=&quot;danger&quot;>
  Danger
</rd-button>
<rd-button semantic=&quot;warning&quot;>
  Warning
</rd-button>
<rd-button semantic=&quot;info&quot;>
  Info
</rd-button>
<rd-button semantic=&quot;light&quot;>
  Light
</rd-button>
<rd-button semantic=&quot;dark&quot;>
  Dark
</rd-button>
<rd-button semantic=&quot;link&quot;>
  Link
</rd-button>"
    />
    <h3>Button tags</h3>
    <example>
      <rd-button
        tag="a"
        href="javascript:"
        role="button"
        primary
      >
        Link
      </rd-button>
      <rd-button
        tag="button"
        type="submit"
        primary
      >
        Button
      </rd-button>
      <rd-button
        tag="input"
        type="button"
        value="Input"
        primary
      />
      <rd-button
        tag="input"
        type="submit"
        value="Submit"
        primary
      />
      <rd-button
        tag="input"
        type="reset"
        value="Reset"
        primary
      />
    </example>
    <highlight
      code="<rd-button
  tag=&quot;a&quot;
  href=&quot;javascript:&quot;
  role=&quot;button&quot;
  primary
>
  Link
</rd-button>
<rd-button
  tag=&quot;button&quot;
  type=&quot;submit&quot;
  primary
>
  Button
</rd-button>
<rd-button
  tag=&quot;input&quot;
  type=&quot;button&quot;
  value=&quot;Input&quot;
  primary
/>
<rd-button
  tag=&quot;input&quot;
  type=&quot;submit&quot;
  value=&quot;Submit&quot;
  primary
/>
<rd-button
  tag=&quot;input&quot;
  type=&quot;reset&quot;
  value=&quot;Reset&quot;
  primary
/>"
    />

    <h3>Outline buttons</h3>
    <example>
      <rd-button
        type="button"
        outline="primary"
      >
        Primary
      </rd-button>
      <rd-button
        type="button"
        outline="secondary"
      >
        Secondary
      </rd-button>
      <rd-button
        type="button"
        outline="success"
      >
        Success
      </rd-button>
      <rd-button
        type="button"
        outline="danger"
      >
        Danger
      </rd-button>
      <rd-button
        type="button"
        outline="warning"
      >
        Warning
      </rd-button>
      <rd-button
        type="button"
        outline="info"
      >
        Info
      </rd-button>
      <rd-button
        type="button"
        outline="light"
      >
        Light
      </rd-button>
      <rd-button
        type="button"
        outline="dark"
      >
        Dark
      </rd-button>
    </example>
    <highlight
      code="<rd-button
  type=&quot;button&quot;
  outline=&quot;primary&quot;
>
  Primary
</rd-button>
<rd-button
  type=&quot;button&quot;
  outline=&quot;secondary&quot;
>
  Secondary
</rd-button>
<rd-button
  type=&quot;button&quot;
  outline=&quot;success&quot;
>
  Success
</rd-button>
<rd-button
  type=&quot;button&quot;
  outline=&quot;danger&quot;
>
  Danger
</rd-button>
<rd-button
  type=&quot;button&quot;
  outline=&quot;warning&quot;
>
  Warning
</rd-button>
<rd-button
  type=&quot;button&quot;
  outline=&quot;info&quot;
>
  Info
</rd-button>
<rd-button
  type=&quot;button&quot;
  outline=&quot;light&quot;
>
  Light
</rd-button>
<rd-button
  type=&quot;button&quot;
  outline=&quot;dark&quot;
>
  Dark
</rd-button>"
    />

    <h3>Sizes</h3>
    <example>
      <rd-button
        type="button"
        semantic="primary"
        size="sm"
      >
        Small button
      </rd-button>
      <rd-button
        type="button"
        semantic="secondary"
        size="sm"
      >
        Small button
      </rd-button>
    </example>
    <highlight
      code="<rd-button
  type=&quot;button&quot;
  semantic=&quot;primary&quot;
  size=&quot;sm&quot;
>
  Small button
</rd-button>
<rd-button
  type=&quot;button&quot;
  semantic=&quot;secondary&quot;
  size=&quot;sm&quot;
>
  Small button
</rd-button>"
    />
    <example>
      <rd-button
        type="button"
        semantic="primary"
        size="lg"
        block
      >
        Block level button
      </rd-button>
      <rd-button
        type="button"
        semantic="secondary"
        size="lg"
        block
      >
        Block level button
      </rd-button>
    </example>
    <highlight
      code="<rd-button
  type=&quot;button&quot;
  semantic=&quot;primary&quot;
  size=&quot;lg&quot;
  block
>
  Block level button
</rd-button>
<rd-button
  type=&quot;button&quot;
  semantic=&quot;secondary&quot;
  size=&quot;lg&quot;
  block
>
  Block level button
</rd-button>"
    />
    <h3>State</h3>
    <example>
      <rd-button
        tag="a"
        href="javascript:"
        semantic="primary"
        size="lg"
        active
        role="button"
        aria-pressed="true"
      >
        Primary link
      </rd-button>
      <rd-button
        tag="a"
        href="javascript:"
        semantic="secondary"
        size="lg"
        active
        role="button"
        aria-pressed="true"
      >
        Link
      </rd-button>
    </example>
    <highlight
      code="<rd-button
  tag=&quot;a&quot;
  href=&quot;javascript:&quot;
  semantic=&quot;primary&quot;
  size=&quot;lg&quot;
  active
  role=&quot;button&quot;
  aria-pressed=&quot;true&quot;
>
  Primary link
</rd-button>
<rd-button
  tag=&quot;a&quot;
  href=&quot;javascript:&quot;
  semantic=&quot;secondary&quot;
  size=&quot;lg&quot;
  active
  role=&quot;button&quot;
  aria-pressed=&quot;true&quot;
>
  Link
</rd-button>"
    />
    <example>
      <rd-button
        type="button"
        size="lg"
        semantic="primary"
        disabled
      >
        Primary button
      </rd-button>
      <rd-button
        type="button"
        size="lg"
        semantic="secondary"
        disabled
      >
        Button
      </rd-button>
    </example>
    <highlight
      code="<rd-button
  type=&quot;button&quot;
  size=&quot;lg&quot;
  semantic=&quot;primary&quot;
  disabled
>
  Primary button
</rd-button>
<rd-button
  type=&quot;button&quot;
  size=&quot;lg&quot;
  semantic=&quot;secondary&quot;
  disabled
>
  Button
</rd-button>"
    />
    <example>
      <rd-button
        tag="a"
        href="javascript:"
        semantic="primary"
        size="lg"
        disabled
      >
        Primary link
      </rd-button>
      <rd-button
        tag="a"
        href="javascript:"
        semantic="secondary"
        size="lg"
        disabled
      >
        Link
      </rd-button>
    </example>
    <highlight
      code="<rd-button
  tag=&quot;a&quot;
  href=&quot;javascript:&quot;
  semantic=&quot;primary&quot;
  size=&quot;lg&quot;
  disabled
>
  Primary link
</rd-button>
<rd-button
  tag=&quot;a&quot;
  href=&quot;javascript:&quot;
  semantic=&quot;secondary&quot;
  size=&quot;lg&quot;
  disabled
>
  Link
</rd-button>"
    />
    <h2>Props</h2>
    추가로 <nuxt-link to="/mixins/semantic">
      Semantic
    </nuxt-link>,
    <nuxt-link to="/mixins/outline">
      Outline
    </nuxt-link>, <nuxt-link to="/mixins/size">
      Size
    </nuxt-link>, <nuxt-link to="/popover">
      Popover
    </nuxt-link>, <nuxt-link to="/tooltip">
      Tooltip
    </nuxt-link> 속성을 쓸 수 있습니다.
    <properties
      type="props"
      :data="props"
    />
  </div>
</template>

<script>

export default {
  name: 'Button',
  data() {
    return {
      props: [
        ['tag', '렌더링 될 HTML 엘리먼트의 태그', 'String', 'button', 'button, input ...'],
        ['block', 'width 100%', 'Boolean', 'false', ''],
        ['active', '활성화 상태', 'Boolean', 'false', ''],
        ['disabled', '비활성화 상태', 'Boolean', 'false', ''],
      ]
    };
  }
};
</script>
