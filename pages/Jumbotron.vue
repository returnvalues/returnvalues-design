<template>
  <div>
    <h1>
      Jumbotron
    </h1>
    <h2>Example</h2>
    <div class="p-3 border">
      <rd-jumbotron>
        <h1 class="display-4">
          Hello, world!
        </h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <hr class="my-4">
        <p>
          It uses utility classes for typography and spacing to space content out within the larger
          container.
        </p>
        <a
          class="btn btn-primary btn-lg"
          href="#"
          role="button"
        >
          Learn more
        </a>
      </rd-jumbotron>
    </div>
    <highlight
      code="<rd-jumbotron>
  <h1 class=&quot;display-4&quot;>
    Hello, world!
  </h1>
  <p class=&quot;lead&quot;>
    This is a simple hero unit, a simple jumbotron-style component for calling extra attention
    to featured content or information.
  </p>
  <hr class=&quot;my-4&quot;>
  <p>
    It uses utility classes for typography and spacing to space content out within the larger
    container.
  </p>
  <a
    class=&quot;btn btn-primary btn-lg&quot;
    href=&quot;#&quot;
    role=&quot;button&quot;
  >
    Learn more
  </a>
</rd-jumbotron>"
    />


    <div class="border p-3">
      <rd-jumbotron fluid>
        <h1 class="display-4">
          Fluid jumbotron
        </h1>
        <p class="lead">
          This is a modified jumbotron that occupies the entire horizontal space of its parent.
        </p>
      </rd-jumbotron>
    </div>
    <highlight
      code="<rd-jumbotron fluid>
  <h1 class=&quot;display-4&quot;>
    Fluid jumbotron
  </h1>
  <p class=&quot;lead&quot;>
    This is a modified jumbotron that occupies the entire horizontal space of its parent.
  </p>
</rd-jumbotron>"
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

export default {
  name: 'Jumbotron',
  data() {
    return {
      props: [
        ['fluid', 'occupies the entire horizontal space of its parent.', 'Boolean', 'false', ''],
      ],
    };
  },
};
</script>
