<template>
  <div>
    Card
    <rd-card
      img-top="https://dummyimage.com/180x100/000/fff"
      img-bottom="https://dummyimage.com/180x100/000/fff"
      title="Card title"
      subtitle="Subtitle"
    >
      <span slot="header">
        header
      </span>
      Some quick example text to build on the card title and make up the bulk of the card's content.
      <span slot="footer">
        footer
      </span>
    </rd-card>
  </div>
</template>

<script>
import { RdCard } from '~/src';

export default {
  name: 'Card',
  components: { RdCard }
};
</script>

<style scoped>

</style>
