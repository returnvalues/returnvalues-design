<template>
  <div>
    Form
    <form>
      <rd-input type="email">
        Email address
        <small
          slot="message"
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

    Form controls
    <form>
      <rd-input
        type="email"
        placeholder="name@example.com"
      >
        Email address
      </rd-input>
      <rd-select>
        <span slot="label">
          Example select
        </span>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </rd-select>
      <rd-select
        v-model="test"
        multiple
      >
        <span slot="label">
          Example multiple select
        </span>
        <option :value="a">
          1
        </option>
        <option :value="b">
          2
        </option>
        <option>3</option>
        <option :value="4">
          4
        </option>
        <option value="5">
          5
        </option>
      </rd-select>
      <rd-textarea v-model="test2">
        Example textarea
      </rd-textarea>
    </form>

    <form>
      <rd-input type="file">
        Example file input
      </rd-input>
    </form>

    Sizing
    <rd-input
      lg
      type="text"
      placeholder=".form-control-lg"
    />
    <rd-input
      type="text"
      placeholder="Default input"
    />
    <rd-input
      sm
      type="text"
      placeholder=".form-control-sm"
    />


    Readonly
    <rd-input
      type="text"
      placeholder="Readonly input here…"
      readonly
    />


    Readonly plain text

    <form>
      <rd-input
        plaintext
        value="email@example.com"
        readonly
      >
        Email
      </rd-input>
    </form>

    Range Inputs
    <form>
      <rd-input type="range">
        Example Range input
      </rd-input>
    </form>
  </div>
</template>

<script>
import {
  RdInput, RdButton, RdSelect, RdTextarea
} from '~/src';

export default {
  name: 'Form',
  components: {
    RdInput, RdButton, RdSelect, RdTextarea
  },
  data() {
    return {
      test: ['3', 4],
      a: { a: 1 },
      b: { b: 2 },
      c: { c: 3 },
      test2: 'wfwe'
    };
  }
};
</script>
