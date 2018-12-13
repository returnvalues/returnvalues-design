<template>
  <div>
    Progress
    <rd-progress :percent="0" />
    <rd-progress :percent="25" />
    <rd-progress :percent="50" />
    <rd-progress :percent="75" />
    <rd-progress :percent="100" />

    <rd-progress
      success
      :percent="25"
    />
    <rd-progress
      info
      :percent="50"
    />
    <rd-progress
      warning
      :percent="75"
    />
    <rd-progress
      danger
      :percent="100"
    />

    Multiple bars
    <rd-progress>
      <rd-progress :percent="15" />
      <rd-progress
        success
        :percent="30"
      />
      <rd-progress
        info
        :percent="20"
      />
    </rd-progress>

    Striped
    <rd-progress
      striped
      :percent="10"
    />
    <rd-progress
      success
      striped
      :percent="25"
    />
    <rd-progress
      info
      striped
      :percent="50"
    />
    <rd-progress
      warning
      striped
      :percent="75"
    />
    <rd-progress
      danger
      striped
      :percent="100"
    />
    Animated stripes
    <rd-progress
      striped
      animated
      :percent="75"
    />
  </div>
</template>

<script>
import { RdProgress } from '~/src';

export default {
  name: 'Progress',
  components: { RdProgress }
};
</script>

<style scoped>

</style>
