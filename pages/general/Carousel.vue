<template>
  <div>
    <h1>Carousel</h1>
    <p
      class="bd-lead"
    >
      A slideshow component for cycling through elements—images or slides of text—like a carousel.
    </p>
    <h2>Example</h2>
    <example>
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
    </example>
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
    <example>
      <rd-carousel control>
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
    </example>
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
    <example>
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
    </example>
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
    <example>
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
    </example>
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
    <example>
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
    </example>
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
    <properties
      type="props"
      :data="props"
    />
    <h2>Methods</h2>
    <properties
      type="methods"
      :data="methods"
    />
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
        ['slide', 'slide', 'Boolean', 'false', ''],
        ['control', 'show page button', 'Boolean', 'false', ''],
        ['indicator', 'show indicator', 'Boolean', 'false', ''],
        ['fade', 'fade effect', 'Boolean', 'false', ''],
        [
          'interval',
          'The amount of the to delay between automatically cycling an item',
          'Number',
          '5000',
          ''
        ],
        [
          'keyboard',
          'Whether the carousel should react to keyboard events',
          'Boolean',
          'false',
          ''
        ],
        [
          'pauseMode',
          'Configuring conditions to pauses the cycling of the carousel',
          'String|Boolean',
          'hover',
          '"hover", false'
        ],
        [
          'ride',
          'Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.',
          'Boolean',
          'false',
          ''
        ],
        [
          'wrap',
          'Whether the carousel should cycle continuously or have hard stops.',
          'Boolean',
          'true',
          ''
        ]
      ],
      methods: [
        [
          'cycle',
          '',
          'Cycles through the carousel items from let to right',
          ''
        ],
        ['pause', '', 'Stops the carousel form cycling', ''],
        ['to', 'idx', "Cycles to the idx'th item", ''],
        ['prev', '', 'Cycles to the previous item', ''],
        ['next', '', 'Cycles to the next item', '']
      ]
    };
  }
};
</script>
