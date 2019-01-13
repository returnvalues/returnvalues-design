<template>
  <div>
    <h1>Breadcrumb</h1>
    <p class="bd-lead">
      Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.
    </p>
    <h2>Example</h2>
    <example>
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
    </example>
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

export default {
  name: 'Breadcrumb',
};
</script>
