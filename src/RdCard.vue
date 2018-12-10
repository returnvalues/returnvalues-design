<template>
  <div class="card">
    <div
      v-if="$slots.header"
      class="card-header"
    >
      <slot name="header" />
    </div>
    <img
      v-if="imgTop"
      :src="imgTop"
      class="card-img-top"
    >
    <slot name="beforeBody" />
    <div class="card-body">
      <h5
        v-if="title"
        class="card-title"
      >
        {{ title }}
      </h5>
      <h6
        v-if="subtitle"
        class="card-subtitle mb-2 text-muted"
      >
        {{ subtitle }}
      </h6>
      <p class="card-text">
        <slot />
      </p>
    </div>
    <slot name="afterBody" />
    <img
      v-if="imgBottom"
      :src="imgBottom"
      class="card-img-bottom"
    >
    <div
      v-if="$slots.footer"
      class="card-footer text-muted"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RdCard',
  props: {
    title: { type: String, default: undefined },
    subtitle: { type: String, default: undefined },
    imgTop: { type: String, default: undefined },
    imgBottom: { type: String, default: undefined }
  }
};
</script>

<style scoped>

</style>
