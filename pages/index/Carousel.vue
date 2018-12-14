<template>
  <div>
    Carousel
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

    With controls
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
    With indicators
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
    With captions
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

    Crossfade
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
</template>

<script>
import { RdCarousel } from '~/src';

export default {
  name: 'Carousel',
  components: { RdCarousel },
  data() { return { test: 1 }; }
};
</script>
