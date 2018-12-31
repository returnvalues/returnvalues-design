<template>
  <div>
    <h1>
      Jumbotron
    </h1>
    <p class="bd-lead">
      hero 유닛 스타일 콘텐츠를 보여주는 가볍고 유연한 컴포넌트.
    </p>
    <p>가볍고 유연한 컴포넌트로서 선택적으로 전체 뷰포트를 확장하여 주요 마케팅 메시지를 사이트에 표시 할 수 있습니다.</p>
    <h2>Example</h2>
    <example>
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
    </example>
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


    <example>
      <rd-jumbotron fluid>
        <h1 class="display-4">
          Fluid jumbotron
        </h1>
        <p class="lead">
          This is a modified jumbotron that occupies the entire horizontal space of its parent.
        </p>
      </rd-jumbotron>
    </example>
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
    <properties
      type="props"
      :data="props"
    />
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
