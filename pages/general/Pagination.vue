<template>
  <div>
    <h1>Pagination</h1>
    <p class="bd-lead">
      여러 페이지에 일련의 관련 콘텐츠가 있음을 나타내는 페이지 번호 매김을 보여주는 문서와 예제.
    </p>

    <h2>Example</h2>

    <example>
      <rd-pagination>
        <a href="javascript:">
          Previous
        </a>
        <a href="javascript:">
          1
        </a>
        <a href="javascript:">
          2
        </a>
        <a href="javascript:">
          3
        </a>
        <a href="javascript:">
          Next
        </a>
      </rd-pagination>
    </example>
    <highlight
      code="<rd-pagination>
  <a href=&quot;javascript:&quot;>
    Previous
  </a>
  <a href=&quot;javascript:&quot;>
    1
  </a>
  <a href=&quot;javascript:&quot;>
    2
  </a>
  <a href=&quot;javascript:&quot;>
    3
  </a>
  <a href=&quot;javascript:&quot;>
    Next
  </a>
</rd-pagination>"
    />
    <h3>
      Working with icons
    </h3>
    <example>
      <rd-pagination>
        <a
          href="javascript:"
          aria-label="Previous"
        >
          <span aria-hidden="true">
            &laquo;
          </span>
          <span class="sr-only">
            Previous
          </span>
        </a>
        <a
          href="javascript:"
        >
          1
        </a>
        <a
          href="javascript:"
        >
          2
        </a>
        <a
          href="javascript:"
        >
          3
        </a>
        <a
          href="javascript:"
          aria-label="Next"
        >
          <span aria-hidden="true">
            &raquo;
          </span>
          <span class="sr-only">
            Next
          </span>
        </a>
      </rd-pagination>
    </example>
    <highlight
      code="<rd-pagination>
  <a
    href=&quot;javascript:&quot;
    aria-label=&quot;Previous&quot;
  >
    <span aria-hidden=&quot;true&quot;>
      &laquo;
    </span>
    <span class=&quot;sr-only&quot;>
      Previous
    </span>
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    1
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    2
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    3
  </a>
  <a
    href=&quot;javascript:&quot;
    aria-label=&quot;Next&quot;
  >
    <span aria-hidden=&quot;true&quot;>
      &raquo;
    </span>
    <span class=&quot;sr-only&quot;>
      Next
    </span>
  </a>
</rd-pagination>"
    />
    <h3>
      Disabled and active states
    </h3>
    <example>
      <rd-pagination>
        <a
          href="javascript:"
          class="disabled"
          :disabled="true"
        >
          Previous
        </a>
        <a
          href="javascript:"
        >
          1
        </a>
        <a
          href="javascript:"
          class="active"
          active
        >
          2 <span class="sr-only">
            (current)
          </span>
        </a>
        <a
          href="javascript:"
        >
          3
        </a>
        <a
          href="javascript:"
        >
          Next
        </a>
      </rd-pagination>
    </example><highlight
      code="<rd-pagination>
  <a
    href=&quot;javascript:&quot;
    class=&quot;disabled&quot;
    :disabled=&quot;true&quot;
  >
    Previous
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    1
  </a>
  <a
    href=&quot;javascript:&quot;
    class=&quot;active&quot;
    active
  >
    2 <span class=&quot;sr-only&quot;>
      (current)
    </span>
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    3
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    Next
  </a>
</rd-pagination>"
    />

    <example>
      <rd-pagination>
        <span disabled>
          Previous
        </span>
        <a
          href="javascript:"
        >
          1
        </a>
        <span active>
          2
          <span class="sr-only">
            (current)
          </span>
        </span>
        <a
          href="javascript:"
        >
          3
        </a>
        <a
          href="javascript:"
        >
          Next
        </a>
      </rd-pagination>
    </example>
    <highlight
      code="<rd-pagination>
  <span disabled>
    Previous
  </span>
  <a
    href=&quot;javascript:&quot;
  >
    1
  </a>
  <span active>
    2
    <span class=&quot;sr-only&quot;>
      (current)
    </span>
  </span>
  <a
    href=&quot;javascript:&quot;
  >
    3
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    Next
  </a>
</rd-pagination>"
    />

    <h3>
      Sizing
    </h3>
    <example>
      <rd-pagination lg>
        <a
          disabled
          href="javascript:"
        >
          1
        </a>
        <a
          href="javascript:"
        >
          2
        </a>
        <a
          href="javascript:"
        >
          3
        </a>
      </rd-pagination>
    </example>
    <highlight
      code="<rd-pagination lg>
  <a
    disabled
    href=&quot;javascript:&quot;
  >
    1
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    2
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    3
  </a>
</rd-pagination>"
    />
    <example>
      <rd-pagination sm>
        <a
          disabled
          href="javascript:"
        >
          1
        </a>
        <a
          href="javascript:"
        >
          2
        </a>
        <a
          href="javascript:"
        >
          3
        </a>
      </rd-pagination>
    </example>
    <highlight
      code="<rd-pagination sm>
  <a
    disabled
    href=&quot;javascript:&quot;
  >
    1
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    2
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    3
  </a>
</rd-pagination>"
    />

    <h3>
      Alignment
    </h3>
    <example>
      <rd-pagination class="justify-content-center">
        <a
          disabled
          href="javascript:"
        >
          Previous
        </a>
        <a href="javascript:">
          1
        </a>
        <a href="javascript:">
          2
        </a>
        <a href="javascript:">
          3
        </a>
        <a href="javascript:">
          Next
        </a>
      </rd-pagination>
    </example><highlight
      code="<rd-pagination class=&quot;justify-content-center&quot;>
  <a
    disabled
    href=&quot;javascript:&quot;
  >
    Previous
  </a>
  <a href=&quot;javascript:&quot;>
    1
  </a>
  <a href=&quot;javascript:&quot;>
    2
  </a>
  <a href=&quot;javascript:&quot;>
    3
  </a>
  <a href=&quot;javascript:&quot;>
    Next
  </a>
</rd-pagination>"
    />
    <example>
      <rd-pagination class="justify-content-end">
        <a
          disabled
          href="javascript:"
        >
          Previous
        </a>
        <a
          href="javascript:"
        >
          1
        </a>
        <a
          href="javascript:"
        >
          2
        </a>
        <a
          href="javascript:"
        >
          3
        </a>
        <a
          href="javascript:"
        >
          Next
        </a>
      </rd-pagination>
    </example>
    <highlight
      code="<rd-pagination class=&quot;justify-content-end&quot;>
  <a
    disabled
    href=&quot;javascript:&quot;
  >
    Previous
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    1
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    2
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    3
  </a>
  <a
    href=&quot;javascript:&quot;
  >
    Next
  </a>
</rd-pagination>"
    />
    <h3>Props</h3>
    <nuxt-link
      append
      to="../mixins/size"
    >
      Size
    </nuxt-link> 속성을 쓸 수 있습니다.
  </div>
</template>

<script>

export default {
  name: 'Pagination',
};
</script>
