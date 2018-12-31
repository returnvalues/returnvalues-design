<template>
  <div>
    <h1>Carousel</h1>
    <h2>Example</h2>
    <div class="border p-3">
      <rd-carousel v-model="test">
        <img
          src="http://dummyimage.com/800x400/777777/555555&text=First slide"
          alt="First slide"
        >
        <img
          src="http://dummyimage.com/800x400/666666/444444&text=Second slide"
          alt="Second slide"
        >
        <img
          src="http://dummyimage.com/800x400/555555/333333&text=Third slide"
          alt="Third slide"
        >
      </rd-carousel>
    </div>
    <highlight
      code="<rd-carousel v-model=&quot;test&quot;>
  <img
    src=&quot;http://dummyimage.com/800x400/777777/555555&text=First slide&quot;
    alt=&quot;First slide&quot;
  >
  <img
    src=&quot;http://dummyimage.com/800x400/666666/444444&text=Second slide&quot;
    alt=&quot;Second slide&quot;
  >
  <img
    src=&quot;http://dummyimage.com/800x400/555555/333333&text=Third slide&quot;
    alt=&quot;Third slide&quot;
  >
</rd-carousel>"
    />
    <h3>With controls</h3>
    <div class="border p-3">
      <rd-carousel control>
        <img
          src="http://dummyimage.com/800x400/777777/555555&text=First slide"
          alt="First slide"
        >      <img
          src="http://dummyimage.com/800x400/666666/444444&text=Second slide"
          alt="Second slide"
        >      <img
          src="http://dummyimage.com/800x400/555555/333333&text=Third slide"
          alt="Third slide"
        >
      </rd-carousel>
    </div>
    <highlight
      code="<rd-carousel control>
  <img
    src=&quot;http://dummyimage.com/800x400/777777/555555&text=First slide&quot;
    alt=&quot;First slide&quot;
  >      <img
    src=&quot;http://dummyimage.com/800x400/666666/444444&text=Second slide&quot;
    alt=&quot;Second slide&quot;
  >      <img
    src=&quot;http://dummyimage.com/800x400/555555/333333&text=Third slide&quot;
    alt=&quot;Third slide&quot;
  >
</rd-carousel>"
    />
    <h3>With indicators</h3>
    <div class="border p-3">
      <rd-carousel
        control
        indicator
      >
        <img
          src="http://dummyimage.com/800x400/777777/555555&text=First slide"
          alt="First slide"
        >
        <img
          src="http://dummyimage.com/800x400/666666/444444&text=Second slide"
          alt="Second slide"
        >
        <img
          src="http://dummyimage.com/800x400/555555/333333&text=Third slide"
          alt="Third slide"
        >
      </rd-carousel>
    </div>
    <highlight
      code="<rd-carousel
  control
  indicator
>
  <img
    src=&quot;http://dummyimage.com/800x400/777777/555555&text=First slide&quot;
    alt=&quot;First slide&quot;
  >
  <img
    src=&quot;http://dummyimage.com/800x400/666666/444444&text=Second slide&quot;
    alt=&quot;Second slide&quot;
  >
  <img
    src=&quot;http://dummyimage.com/800x400/555555/333333&text=Third slide&quot;
    alt=&quot;Third slide&quot;
  >
</rd-carousel>"
    />
    <h3>With captions</h3>
    <div class="border p-3">
      <rd-carousel
        indicator
        control
      >
        <div>
          <img
            src="http://dummyimage.com/800x400/777777/555555&text=First slide"
            alt="First slide"
          >
          <div caption>
            <h5>First slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
        <div>
          <img
            src="http://dummyimage.com/800x400/666666/444444&text=Second slide"
            alt="Second slide"
          >
          <div caption>
            <h5>Second slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
        <div>
          <img
            src="http://dummyimage.com/800x400/555555/333333&text=Third slide"
            alt="Third slide"
          >
          <div caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </rd-carousel>
    </div>
    <highlight
      code="<rd-carousel
  indicator
  control
>
  <div>
    <img
      src=&quot;http://dummyimage.com/800x400/777777/555555&text=First slide&quot;
      alt=&quot;First slide&quot;
    >
    <div caption>
      <h5>First slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </div>
  </div>
  <div>
    <img
      src=&quot;http://dummyimage.com/800x400/666666/444444&text=Second slide&quot;
      alt=&quot;Second slide&quot;
    >
    <div caption>
      <h5>Second slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </div>
  </div>
  <div>
    <img
      src=&quot;http://dummyimage.com/800x400/555555/333333&text=Third slide&quot;
      alt=&quot;Third slide&quot;
    >
    <div caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </div>
  </div>
</rd-carousel>"
    />
    <h3>Crossfade</h3>
    <div class="border p-3">
      <rd-carousel
        fade
        control
      >
        <img
          src="http://dummyimage.com/800x400/777777/555555&text=First slide"
          alt="First slide"
        >
        <img
          src="http://dummyimage.com/800x400/666666/444444&text=Second slide"
          alt="Second slide"
        >
        <img
          src="http://dummyimage.com/800x400/555555/333333&text=Third slide"
          alt="Third slide"
        >
      </rd-carousel>
    </div>
    <highlight
      code="<rd-carousel
  fade
  control
>
  <img
    src=&quot;http://dummyimage.com/800x400/777777/555555&text=First slide&quot;
    alt=&quot;First slide&quot;
  >
  <img
    src=&quot;http://dummyimage.com/800x400/666666/444444&text=Second slide&quot;
    alt=&quot;Second slide&quot;
  >
  <img
    src=&quot;http://dummyimage.com/800x400/555555/333333&text=Third slide&quot;
    alt=&quot;Third slide&quot;
  >
</rd-carousel>"
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
    <h2>Methods</h2>
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th style="width:100px;">
            이름
          </th>
          <th style="width:80px;">
            파라미터
          </th>
          <th>
            설명
          </th>
          <th style="width:80px;">
            리턴값
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row,idx) of methods"
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
  name: 'Carousel',
  data() {
    return {
      test: 1,
      props: [
        ['idx', 'v-model', 'Number', '0', ''],
        ['slide', '슬라이드 효과', 'Boolean', 'false', ''],
        ['control', '페이지 버튼 보이기', 'Boolean', 'false', ''],
        ['indicator', '인디케이터 보이기', 'Boolean', 'false', ''],
        ['fade', 'fade 전환 효과', 'Boolean', 'false', ''],
        ['interval', '반복 시간', 'Number', '5000', ''],
        ['keyboard', '키보드 이벤트 사용 여부', 'Boolean', 'false', ''],
        ['pauseMode', '멈추는 조건', 'String|Boolean', 'hover', '"hover", false'],
        ['ride', 'Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.', 'Boolean', 'false', ''],
        ['wrap', 'Whether the carousel should cycle continuously or have hard stops.', 'Boolean', 'true', ''],
      ],
      methods: [
        ['cycle', '', '순환 시작', ''],
        ['pause', '', '일시정지', ''],
        ['to', 'idx', '해당 슬라이드로 이동', ''],
        ['prev', '', '이전 슬라이드', ''],
        ['next', '', '다음 슬라이드', ''],
      ]
    };
  }
};
</script>
