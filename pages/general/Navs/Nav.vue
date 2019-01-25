<template>
  <div>
    <h1>Nav</h1>
    <p class="bd-lead">
      Documentation and examples for how to use Bootstrap’s navigation components.
    </p>
    <h2>Example</h2>
    <example>
      <rd-nav>
        <a
          class="active"
          href="javascript:"
        >
          Active
        </a>
        <a href="javascript:">
          Link
        </a>
        <a href="javascript:">
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </example>
    <highlight
      code="<rd-nav>
  <a
    class=&quot;active&quot;
    href=&quot;javascript:&quot;
  >
    Active
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    Link
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    Link
  </a>
  <a
    class=&quot;disabled&quot;
    href=&quot;javascript:&quot;
  >
    Disabled
  </a>
</rd-nav>"
    />

    <example>
      <rd-nav tag="nav">
        <a
          class="active"
          href="javascript:"
        >
          Active
        </a>
        <a href="javascript:">
          Link
        </a>
        <a href="javascript:">
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </example>
    <highlight
      code="<rd-nav tag=&quot;nav&quot;>
  <a
    class=&quot;active&quot;
    href=&quot;javascript:&quot;
  >
    Active
  </a>
  <a

    href=&quot;javascript:&quot;
  >
    Link
  </a>
  <a

    href=&quot;javascript:&quot;
  >
    Link
  </a>
  <a
    class=&quot;disabled&quot;
    href=&quot;javascript:&quot;
  >
    Disabled
  </a>
</rd-nav>"
    />
    <h3>Vertical</h3>
    <example>
      <rd-nav class="flex-column">
        <a
          class="active"
          href="javascript:"
        >
          Active
        </a>
        <a href="javascript:">
          Link
        </a>
        <a href="javascript:">
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </example>
    <highlight
      code="<rd-nav
  class=&quot;flex-column&quot;
>
  <a
    class=&quot;active&quot;
    href=&quot;javascript:&quot;
  >
    Active
  </a>
  <a

    href=&quot;javascript:&quot;
  >
    Link
  </a>
  <a

    href=&quot;javascript:&quot;
  >
    Link
  </a>
  <a
    class=&quot;disabled&quot;
    href=&quot;javascript:&quot;
  >
    Disabled
  </a>
</rd-nav>"
    />
    <h3>Tabs</h3>
    <example>
      <rd-nav tabs>
        <a
          class="active"
          href="javascript:"
        >
          Active
        </a>
        <a href="javascript:">
          Link
        </a>
        <a href="javascript:">
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </example>
    <highlight
      code="<rd-nav tabs>
  <a
    class=&quot;active&quot;
    href=&quot;javascript:&quot;
  >
    Active
  </a>
  <a

    href=&quot;javascript:&quot;
  >
    Link
  </a>
  <a

    href=&quot;javascript:&quot;
  >
    Link
  </a>
  <a
    class=&quot;disabled&quot;
    href=&quot;javascript:&quot;
  >
    Disabled
  </a>
</rd-nav>"
    />
    <h3>Pills</h3>
    <example>
      <rd-nav pills>
        <a
          class="active"
          href="javascript:"
        >
          Active
        </a>
        <a href="javascript:">
          Link
        </a>
        <a href="javascript:">
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </example>
    <highlight
      code="<rd-nav pills>
  <a
    class=&quot;active&quot;
    href=&quot;javascript:&quot;
  >
    Active
  </a>
  <a

    href=&quot;javascript:&quot;
  >
    Link
  </a>
  <a

    href=&quot;javascript:&quot;
  >
    Link
  </a>
  <a
    class=&quot;disabled&quot;
    href=&quot;javascript:&quot;
  >
    Disabled
  </a>
</rd-nav>"
    />
    <h3>Fill and justify</h3>
    <example>
      <rd-nav
        pills
        fill
      >
        <a
          class="active"
          href="javascript:"
        >
          Active
        </a>
        <a href="javascript:">
          Longer nav link
        </a>
        <a href="javascript:">
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </example>
    <highlight
      code="<rd-nav
  pills
  fill
>
  <a
    class=&quot;active&quot;
    href=&quot;javascript:&quot;
  >
    Active
  </a>
  <a

    href=&quot;javascript:&quot;
  >
    Longer nav link
  </a>
  <a

    href=&quot;javascript:&quot;
  >
    Link
  </a>
  <a
    class=&quot;disabled&quot;
    href=&quot;javascript:&quot;
  >
    Disabled
  </a>
</rd-nav>"
    />

    <example>
      <rd-nav
        pills
        justified
      >
        <a
          class="active"
          href="javascript:"
        >
          Active
        </a>
        <a href="javascript:">
          Longer nav link
        </a>
        <a href="javascript:">
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </example>
    <highlight
      code="<rd-nav
  pills
  justified
>
  <a
    class=&quot;active&quot;
    href=&quot;javascript:&quot;
  >
    Active
  </a>
  <a

    href=&quot;javascript:&quot;
  >
    Longer nav link
  </a>
  <a

    href=&quot;javascript:&quot;
  >
    Link
  </a>
  <a
    class=&quot;disabled&quot;
    href=&quot;javascript:&quot;
  >
    Disabled
  </a>
</rd-nav>"
    />
    <h3>Using dropdowns</h3>
    <example>
      <rd-nav tabs>
        <a
          class="active"
          href="javascript:"
        >
          Active
        </a>
        <rd-dropdown>
          <a
            slot="button"
            href="javascript:"
          >
            Dropdown
          </a>
          <a href="javascript:">
            Action
          </a>
          <a href="javascript:">
            Another action
          </a>
          <a href="javascript:">
            Something else here
          </a>
          <div class="dropdown-divider" />
          <a href="javascript:">
            Separated link
          </a>
        </rd-dropdown>
        <a href="javascript:">
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </example>
    <highlight
      code="<rd-nav tabs>
  <a
    class=&quot;active&quot;
    href=&quot;javascript:&quot;
  >
    Active
  </a>
  <rd-dropdown>
    <a
      slot=&quot;button&quot;
      href=&quot;javascript:&quot;
    >
      Dropdown
    </a>
    <a

      href=&quot;javascript:&quot;
    >
      Action
    </a>
    <a

      href=&quot;javascript:&quot;
    >
      Another action
    </a>
    <a

      href=&quot;javascript:&quot;
    >
      Something else here
    </a>
    <div class=&quot;dropdown-divider&quot; />
    <a

      href=&quot;javascript:&quot;
    >
      Separated link
    </a>
  </rd-dropdown>
  <a

    href=&quot;javascript:&quot;
  >
    Link
  </a>
  <a
    class=&quot;disabled&quot;
    href=&quot;javascript:&quot;
  >
    Disabled
  </a>
</rd-nav>"
    />
    <h3>Pills with dropdowns</h3>
    <example>
      <rd-nav pills>
        <a
          class="active"
          href="javascript:"
        >
          Active
        </a>
        <rd-dropdown>
          <a
            slot="button"
            href="javascript:"
          >
            Dropdown
          </a>
          <a href="javascript:">
            Action
          </a>
          <a href="javascript:">
            Another action
          </a>
          <a href="javascript:">
            Something else here
          </a>
          <div class="dropdown-divider" />
          <a href="javascript:">
            Separated link
          </a>
        </rd-dropdown>
        <a href="javascript:">
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </example>
    <highlight
      code="<rd-nav pills>
  <a
    class=&quot;active&quot;
    href=&quot;javascript:&quot;
  >
    Active
  </a>
  <rd-dropdown>
    <a
      slot=&quot;button&quot;
      href=&quot;javascript:&quot;
    >
      Dropdown
    </a>
    <a

      href=&quot;javascript:&quot;
    >
      Action
    </a>
    <a

      href=&quot;javascript:&quot;
    >
      Another action
    </a>
    <a

      href=&quot;javascript:&quot;
    >
      Something else here
    </a>
    <div class=&quot;dropdown-divider&quot; />
    <a

      href=&quot;javascript:&quot;
    >
      Separated link
    </a>
  </rd-dropdown>
  <a

    href=&quot;javascript:&quot;
  >
    Link
  </a>
  <a
    class=&quot;disabled&quot;
    href=&quot;javascript:&quot;
  >
    Disabled
  </a>
</rd-nav>"
    />

    <h2>Props</h2>
    <properties
      type="props"
      :data="props"
    />
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      props: [
        [
          'tag',
          'Tags of HTML elements to be rendered',
          'String',
          'ul',
          'ul, nav'
        ],
        ['tabs', 'Generate a tabbed interface ', 'Boolean', 'false', ''],
        ['pills', 'Make components rounded ', 'Boolean', 'false', ''],
        [
          'fill',
          'Force to contents to extend the full available width',
          'Boolean',
          'false',
          ''
        ],
        [
          'justified',
          'Force to contents to extend the full available width with equal width elements',
          'Boolean',
          'false',
          ''
        ]
      ]
    };
  }
};
</script>
