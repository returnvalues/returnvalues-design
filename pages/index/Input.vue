<template>
  <div>Input
    Basic example
    <rd-input-group class="mb-3">
      <span slot="prepend" class="input-group-text" id="basic-addon1">@</span>
      <input type="text"
             class="form-control"
             placeholder="Username"
             aria-label="Username"
             aria-describedby="basic-addon1">
    </rd-input-group>

    <rd-input-group class="mb-3">
      <input type="text"
             class="form-control"
             placeholder="Recipient's username"
             aria-label="Recipient's username"
             aria-describedby="basic-addon2">
      <span slot="append" class="input-group-text" id="basic-addon2">@example.com</span>
    </rd-input-group>

    <label for="basic-url">Your vanity URL</label>
    <rd-input-group class="mb-3">
      <span slot="prepend"
            class="input-group-text"
            id="basic-addon3">https://example.com/users/</span>
      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
    </rd-input-group>

    <rd-input-group class="mb-3">
      <span class="input-group-text" slot="prepend">$</span>
      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      <span class="input-group-text" slot="append">.00</span>
    </rd-input-group>

    <rd-input-group class="">
      <span class="input-group-text" slot="prepend">With textarea</span>
      <textarea class="form-control" aria-label="With textarea"></textarea>
    </rd-input-group>

    Sizing
    <rd-input-group class=" input-group-sm mb-3">
      <span slot="prepend" class="input-group-text" id="inputGroup-sizing-sm">Small</span>
      <input type="text"
             class="form-control"
             aria-label="Sizing example input"
             aria-describedby="inputGroup-sizing-sm">
    </rd-input-group>

    <rd-input-group class=" mb-3">
      <span slot="prepend" class="input-group-text" id="inputGroup-sizing-default">Default</span>
      <input type="text"
             class="form-control"
             aria-label="Sizing example input"
             aria-describedby="inputGroup-sizing-default">
    </rd-input-group>

    <rd-input-group class=" input-group-lg">
      <span slot="prepend" class="input-group-text" id="inputGroup-sizing-lg">Large</span>
      <input type="text"
             class="form-control"
             aria-label="Sizing example input"
             aria-describedby="inputGroup-sizing-lg">
    </rd-input-group>

  </div>
</template>

<script>
import { RdInputGroup } from '~/src'

export default {
  name: "Input",
  components: { RdInputGroup }
}
</script>

<style scoped>

</style>
