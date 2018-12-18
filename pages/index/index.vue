<template>
  <div>
    index
    <hightlight
      type="html"
      code="<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type=&quot;application/javascript&quot;>
  function $init() {return true;}
</script>

<body>
  <p checked class=&quot;title&quot; id=&quot;title&quot;>Title</p>
  <!-- here goes the rest of the page -->
</body>"
    />
  </div>
</template>

<script>
import Hightlight from '~/components/Hightlight.vue';

export default {
  name: 'Index',
  components: { Hightlight },
};
</script>
