<template>
  <div>
    Tooltips

    <rd-button
      type="button"
      secondary
      title="Tooltip on top"
      :tooltip="{placement:'top'}"
    >
      Tooltip on top
    </rd-button>
    <rd-button
      type="button"
      secondary
      title="Tooltip on right"
      :tooltip="{placement:'right'}"
    >
      Tooltip on right
    </rd-button>
    <rd-button
      type="button"
      secondary
      title="Tooltip on bottom"
      :tooltip="{placement:'bottom'}"
    >
      Tooltip on bottom
    </rd-button>
    <rd-button
      type="button"
      secondary
      title="Tooltip on left"
      :tooltip="{placement:'left'}"
    >
      Tooltip on left
    </rd-button>
  </div>
</template>

<script>
import { RdButton } from '~/src';

export default {
  name: 'Tooltip',
  components: { RdButton }
};
</script>
