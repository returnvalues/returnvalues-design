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
      <rd-input type="email" placeholder="name@example.com">
        Email address
      </rd-input>
      <rd-select>
        <span slot="label">Example select</span>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </rd-select>
      <rd-select multiple v-model="test">
        <span slot="label">Example multiple select</span>
        <option :value="a">1</option>
        <option :value="b">2</option>
        <option>3</option>
        <option :value="4">4</option>
        <option value="5">5</option>
      </rd-select>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
import { RdInput, RdButton, RdSelect } from '~/src';

export default {
  name: 'Form',
  data() {
    return { test: ['3', 4], a: { a: 1 }, b: { b: 2 }, c: { c: 3 } }
  },
  components: { RdInput, RdButton, RdSelect }
};
</script>
