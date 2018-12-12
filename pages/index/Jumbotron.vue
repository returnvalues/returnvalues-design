<template>
  <div>
    Jumbotron
    <rd-jumbotron>
      <h1 class="display-4">
        Hello, world!
      </h1>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
      </p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a
        class="btn btn-primary btn-lg"
        href="#"
        role="button"
      >
        Learn more
      </a>
    </rd-jumbotron>

    <rd-jumbotron fluid>
      <h1 class="display-4">
        Fluid jumbotron
      </h1>
      <p class="lead">
        This is a modified jumbotron that occupies the entire horizontal space of its parent.
      </p>
    </rd-jumbotron>
  </div>
</template>

<script>
import RdJumbotron from '../../src/RdJumbotron';

export default {
  name: 'Jumbotron',
  components: { RdJumbotron }
};
</script>

<style scoped>

</style>
