<template>
  <div>
    <h1>Form</h1>
    <p
      class="bd-lead"
    >
      Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
    </p>
    <h2>Example</h2>
    <example>
      <form>
        <rd-input
          v-model="testEmail"
          type="email"
        >
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
        <rd-input
          v-model="testCheckbox"
          type="checkbox"
        >
          Check me out
        </rd-input>
        <rd-button
          type="submit"
          primary
        >
          Submit
        </rd-button>
      </form>
    </example>
    <highlight
      code="<form>
  <rd-input
    v-model=&quot;testEmail&quot;
    type=&quot;email&quot;
  >
    Email address
    <small
      slot=&quot;message&quot;
      class=&quot;form-text text-muted&quot;
    >
      We'll never share your email with anyone
      else.
    </small>
  </rd-input>
  <rd-input type=&quot;password&quot;>
    Password
  </rd-input>
  <rd-input
    v-model=&quot;testCheckbox&quot;
    type=&quot;checkbox&quot;
  >
    Check me out
  </rd-input>
  <rd-button
    type=&quot;submit&quot;
    primary
  >
    Submit
  </rd-button>
</form>"
    />
    <h3>Form controls</h3>
    <example>
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
    </example>
    <highlight
      code="<form>
  <rd-input
    type=&quot;email&quot;
    placeholder=&quot;name@example.com&quot;
  >
    Email address
  </rd-input>
  <rd-select>
    <span slot=&quot;label&quot;>
      Example select
    </span>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </rd-select>
  <rd-select
    v-model=&quot;test&quot;
    multiple
  >
    <span slot=&quot;label&quot;>
      Example multiple select
    </span>
    <option :value=&quot;a&quot;>
      1
    </option>
    <option :value=&quot;b&quot;>
      2
    </option>
    <option>3</option>
    <option :value=&quot;4&quot;>
      4
    </option>
    <option value=&quot;5&quot;>
      5
    </option>
  </rd-select>
  <rd-textarea v-model=&quot;test2&quot;>
    Example textarea
  </rd-textarea>
</form>

<form>
  <rd-input type=&quot;file&quot;>
    Example file input
  </rd-input>
</form>"
    />
    <h3>Sizing</h3>
    <example>
      <rd-input
        lg
        type="text"
        class="mt-1"
        placeholder=".form-control-lg"
      />
      <rd-input
        type="text"
        class="mt-1"
        placeholder="Default input"
      />
      <rd-input
        sm
        type="text"
        class="mt-1"
        placeholder=".form-control-sm"
      />
    </example>
    <highlight
      code="
  lg
  type=&quot;text&quot;
  class=&quot;mt-1&quot;
  placeholder=&quot;.form-control-lg&quot;
/>
<rd-input
  type=&quot;text&quot;
  class=&quot;mt-1&quot;
  placeholder=&quot;Default input&quot;
/>
<rd-input
  sm
  type=&quot;text&quot;
  class=&quot;mt-1&quot;
  placeholder=&quot;.form-control-sm&quot;
/>"
    />
    <h3>Readonly</h3>
    <example>
      <rd-input
        type="text"
        placeholder="Readonly input here…"
        readonly
      />
    </example>
    <highlight
      code="<rd-input
  type=&quot;text&quot;
  placeholder=&quot;Readonly input here…&quot;
  readonly
/>"
    />
    <h3>Readonly plain text</h3>
    <example>
      <form>
        <rd-input
          plaintext
          value="email@example.com"
          readonly
        >
          Email
        </rd-input>
      </form>
    </example>
    <highlight
      code="<form>
  <rd-input
    plaintext
    value=&quot;email@example.com&quot;
    readonly
  >
    Email
  </rd-input>
</form>"
    />
    <h3>Range Inputs</h3>
    <example>
      <form>
        <rd-input type="range">
          Example Range input
        </rd-input>
      </form>
    </example>
    <highlight
      code="<form>
  <rd-input type=&quot;range&quot;>
    Example Range input
  </rd-input>
</form>"
    />
    <h3>Checkboxes and radios</h3>
    <example>
      <rd-input type="checkbox">
        Default checkbox
      </rd-input>
      <rd-input
        type="checkbox"
        disabled
      >
        Disabled checkbox
      </rd-input>
      <rd-input
        v-model="test3"
        :value="1"
        type="radio"
      >
        Default radio
      </rd-input>
      <rd-input
        v-model="test3"
        :value="2"
        type="radio"
      >
        Second default radio
      </rd-input>
      <rd-input
        v-model="test3"
        :value="3"
        type="radio"
        disabled
      >
        Disabled radio
      </rd-input>
    </example>
    <highlight
      code="<rd-input type=&quot;checkbox&quot;>
  Default checkbox
</rd-input>
<rd-input
  type=&quot;checkbox&quot;
  disabled
>
  Disabled checkbox
</rd-input>
<rd-input
  v-model=&quot;test3&quot;
  :value=&quot;1&quot;
  type=&quot;radio&quot;
>
  Default radio
</rd-input>
<rd-input
  v-model=&quot;test3&quot;
  :value=&quot;2&quot;
  type=&quot;radio&quot;
>
  Second default radio
</rd-input>
<rd-input
  v-model=&quot;test3&quot;
  :value=&quot;3&quot;
  type=&quot;radio&quot;
  disabled
>
  Disabled radio
</rd-input>"
    />
    <h3>Inline</h3>
    <example>
      <rd-input
        inline
        type="checkbox"
        value="option1"
      >
        1
      </rd-input>
      <rd-input
        inline
        type="checkbox"
        value="option2"
      >
        2
      </rd-input>

      <rd-input
        inline
        type="checkbox"
        value="option3"
        disabled
      >
        3 (disabled)
      </rd-input>
      <rd-input
        inline
        type="radio"
        value="option1"
      >
        1
      </rd-input>
      <rd-input
        inline
        type="radio"
        value="option2"
      >
        2
      </rd-input>

      <rd-input
        inline
        type="radio"
        value="option3"
        disabled
      >
        3 (disabled)
      </rd-input>
    </example>
    <highlight
      code="<rd-input
  inline
  type=&quot;checkbox&quot;
  value=&quot;option1&quot;
>
  1
</rd-input>
<rd-input
  inline
  type=&quot;checkbox&quot;
  value=&quot;option2&quot;
>
  2
</rd-input>

<rd-input
  inline
  type=&quot;checkbox&quot;
  value=&quot;option3&quot;
  disabled
>
  3 (disabled)
</rd-input>
<rd-input
  inline
  type=&quot;radio&quot;
  value=&quot;option1&quot;
>
  1
</rd-input>
<rd-input
  inline
  type=&quot;radio&quot;
  value=&quot;option2&quot;
>
  2
</rd-input>

<rd-input
  inline
  type=&quot;radio&quot;
  value=&quot;option3&quot;
  disabled
>
  3 (disabled)
</rd-input>"
    />
    <h2>RdInput</h2>
    <h3>Props</h3>You can also use
    <nuxt-link
      append
      to="../../mixins/size"
    >
      Size
    </nuxt-link>attributes.
    <properties
      type="props"
      :data="propsInput"
    />
    <h3>Events</h3>
    <properties
      type="events"
      :data="eventsInput"
    />
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      testEmail: '123',
      testCheckbox: true,
      test: ['3', 4],
      a: { a: 1 },
      b: { b: 2 },
      c: { c: 3 },
      test2: 'wfwe',
      test3: 2,
      propsInput: [
        ['modelValue', 'v-model', 'Any', '', ''],
        ['type', 'input type', 'String', 'text', 'text, checkbox, radio ...']
      ],
      eventsInput: [
        [
          'change',
          'The change event triggers when the value has changed',
          '(value)'
        ]
      ]
    };
  }
};
</script>
