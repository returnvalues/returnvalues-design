<template>
  <div>
    dropdown

    Single button
    <rd-dropdown>
      <rd-button
        slot="button"
        secondary
      >
        text
      </rd-button>
      <a
        href="javascript:"
      >
        Action
      </a>
      <a
        href="javascript:"
      >
        Another action
      </a>
      <a

        href="javascript:"
      >
        Something else here
      </a>
    </rd-dropdown>
  </div>
</template>

<script>
import { RdDropdown, RdButton } from '~/src';

export default {
  name: 'Dropdown',
  components: { RdDropdown, RdButton }
};
</script>

<style scoped>

</style>
