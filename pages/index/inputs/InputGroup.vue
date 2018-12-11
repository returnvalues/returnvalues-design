<template>
  <div>
    Input
    Basic example
          <rd-input-group class="mb-3">
            <span
              id="basic-addon1"
              slot="prepend"
              text
            >
              @
            </span>
            <input
              type="text"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            >
          </rd-input-group>

          <rd-input-group class="mb-3">
            <input
              type="text"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            >
            <span
              id="basic-addon2"
              slot="append"
              text
            >
              @example.com
            </span>
          </rd-input-group>

          <label for="basic-url">
            Your vanity URL
          </label>
          <rd-input-group class="mb-3">
            <span
              id="basic-addon3"
              slot="prepend"
              text
            >
              https://example.com/users/
            </span>
            <input
              id="basic-url"
              type="text"
              aria-describedby="basic-addon3"
            >
          </rd-input-group>

          <rd-input-group class="mb-3">
            <span
              slot="prepend"
              text
            >
              $
            </span>
            <input
              type="text"
              aria-label="Amount (to the nearest dollar)"
            >
            <span
              slot="append"
              text
            >
              .00
            </span>
          </rd-input-group>

          <rd-input-group class="">
            <span
              slot="prepend"
              text
            >
              With textarea
            </span>
            <textarea
              aria-label="With textarea"
            />
          </rd-input-group>

          Sizing
          <rd-input-group class=" input-group-sm mb-3">
            <span
              id="inputGroup-sizing-sm"
              slot="prepend"
              text
            >
              Small
            </span>
            <input
              type="text"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            >
          </rd-input-group>

          <rd-input-group class=" mb-3">
            <span
              id="inputGroup-sizing-default"
              slot="prepend"
              text
            >
              Default
            </span>
            <input
              type="text"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            >
          </rd-input-group>

          <rd-input-group class=" input-group-lg">
            <span
              id="inputGroup-sizing-lg"
              slot="prepend"
              text
            >
              Large
            </span>
            <input
              type="text"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            >
          </rd-input-group>
  </div>
</template>

<script>
import { RdInputGroup } from '~/src';

export default {
  name: 'InputGroup',
  components: { RdInputGroup }
};
</script>

<style scoped>

</style>
