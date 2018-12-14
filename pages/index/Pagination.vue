<template>
  <div>
    Pagination

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
    Working with icons
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
    Disabled and active states
    <rd-pagination>
      <a
        href="javascript:"
        class="disabled"
        :disabled="true"
        tabindex="-1"
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
    Alignment
    <rd-pagination class="justify-content-center">
      <a
        disabled
        href="javascript:"
        tabindex="-1"
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
    <rd-pagination class="justify-content-end">
      <a
        disabled
        href="javascript:"
        tabindex="-1"
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
  </div>
</template>

<script>
import { RdPagination } from '~/src';

export default {
  name: 'Pagination',
  components: { RdPagination }
};
</script>
