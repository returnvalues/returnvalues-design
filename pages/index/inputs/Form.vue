<template>
  <div>
    Form
    <form>
      <rd-input type="email">
        Email address
        <small
          slot="help"
          class="form-text text-muted"
        >
          We'll never share your email with anyone
          else.
        </small>
      </rd-input>
      <rd-input type="password">
        Password
      </rd-input>
      <rd-input type="checkbox">
        Check me out
      </rd-input>
      <rd-button
        type="submit"
        primary
      >
        Submit
      </rd-button>
    </form>
  </div>
</template>

<script>
import { RdInput, RdButton } from '~/src';

export default {
  name: 'Form',
  components: { RdInput, RdButton }
};
</script>
