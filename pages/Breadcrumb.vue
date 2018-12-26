<template>
  <div>
    <h1>Breadcrumb</h1>
    <p>Props가 따로 없는 단순한 컴포넌트 입니다.</p>
    <h2>Example</h2>
    <div class="border p-3">
      <rd-breadcrumb>
        Home
      </rd-breadcrumb>
      <rd-breadcrumb>
        <a href="javascript:">
          Home
        </a>
        Library
      </rd-breadcrumb>

      <rd-breadcrumb>
        <a href="javascript:">
          Home
        </a>
        <a href="javascript:">
          Library
        </a>
        Data
      </rd-breadcrumb>
    </div>
    <highlight
      code="<rd-breadcrumb>
  Home
</rd-breadcrumb>
<rd-breadcrumb>
  <a href=&quot;javascript:&quot;>
    Home
  </a>
  Library
</rd-breadcrumb>

<rd-breadcrumb>
  <a href=&quot;javascript:&quot;>
    Home
  </a>
  <a href=&quot;javascript:&quot;>
    Library
  </a>
  Data
</rd-breadcrumb>"
    />
  </div>
</template>

<script>
import Highlight from '~/components/Highlight.vue';

export default {
  name: 'Breadcrumb',
  components: { Highlight }
};
</script>
