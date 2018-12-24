<template>
  <div>
    <h1>
      Navs
    </h1>

    <h2>Example</h2>
    <div class="p-3 border">
      <rd-nav>
        <a
          class="active"
          href="javascript:"
        >
          Active
        </a>
        <a
          href="javascript:"
        >
          Link
        </a>
        <a
          href="javascript:"
        >
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </div>
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

    <div class="p-3 border">
      <rd-nav tag="nav">
        <a
          class="active"
          href="javascript:"
        >
          Active
        </a>
        <a

          href="javascript:"
        >
          Link
        </a>
        <a

          href="javascript:"
        >
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </div>
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
    <h3>
      Vertical
    </h3>
    <div class="p-3 border">
      <rd-nav
        class="flex-column"
      >
        <a
          class="active"
          href="javascript:"
        >
          Active
        </a>
        <a

          href="javascript:"
        >
          Link
        </a>
        <a

          href="javascript:"
        >
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </div>
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
    <h3>
      Tabs
    </h3>
    <div class="p-3 border">
      <rd-nav tabs>
        <a
          class="active"
          href="javascript:"
        >
          Active
        </a>
        <a

          href="javascript:"
        >
          Link
        </a>
        <a

          href="javascript:"
        >
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </div>
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
    <h3>
      Pills
    </h3>
    <div class="p-3 border">
      <rd-nav pills>
        <a
          class="active"
          href="javascript:"
        >
          Active
        </a>
        <a

          href="javascript:"
        >
          Link
        </a>
        <a

          href="javascript:"
        >
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </div>
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
    <h3>
      Fill and justify
    </h3>
    <div class="p-3 border">
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
        <a

          href="javascript:"
        >
          Longer nav link
        </a>
        <a

          href="javascript:"
        >
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </div>
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

    <div class="p-3 border">
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
        <a

          href="javascript:"
        >
          Longer nav link
        </a>
        <a

          href="javascript:"
        >
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </div>
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
    <h3>
      Using dropdowns
    </h3>
    <div class="p-3 border">
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
          <a

            href="javascript:"
          >
            Action
          </a>
          <a

            href="javascript:"
          >
            Another action
          </a>
          <a

            href="javascript:"
          >
            Something else here
          </a>
          <div class="dropdown-divider" />
          <a

            href="javascript:"
          >
            Separated link
          </a>
        </rd-dropdown>
        <a

          href="javascript:"
        >
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </div>
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
    <h3>
      Pills with dropdowns
    </h3>
    <div class="p-3 border">
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
          <a

            href="javascript:"
          >
            Action
          </a>
          <a

            href="javascript:"
          >
            Another action
          </a>
          <a

            href="javascript:"
          >
            Something else here
          </a>
          <div class="dropdown-divider" />
          <a

            href="javascript:"
          >
            Separated link
          </a>
        </rd-dropdown>
        <a

          href="javascript:"
        >
          Link
        </a>
        <a
          class="disabled"
          href="javascript:"
        >
          Disabled
        </a>
      </rd-nav>
    </div>
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
import Highlight from '~/components/Highlight';

export default {
  name: 'Navs',
  components: {
    Highlight
  },
  data() {
    return {
      props: [
        ['tag', '렌더링 될 HTML 엘리먼트의 태그', 'String', 'ul', 'ul, nav'],
        ['tabs', '탭 모양으로 표시', 'Boolean', 'false', ''],
        ['pills', '둥글게 표시', 'Boolean', 'false', ''],
        ['fill', '꽉 차게 표시', 'Boolean', 'false', ''],
        ['justified', '모두 같은 너비로 꽉차게 표시', 'Boolean', 'false', ''],
      ]
    };
  }
};
</script>
