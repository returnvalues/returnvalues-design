<template>
  <div>
    <h1>Input group</h1>
    <h2>Example</h2>
    <div class="p-3 border">
      <rd-input-group class="mb-3">
        <span
          slot="prepend"
          text
        >
          @
        </span>
        <rd-input
          type="text"
          placeholder="Username"
        />
      </rd-input-group>
      <rd-input-group class="mb-3">
        <rd-input
          type="text"
          placeholder="Recipient's username"
        />
        <span
          slot="append"
          text
        >
          @example.com
        </span>
      </rd-input-group>
      <rd-input-group class="mb-3">
        <span
          slot="prepend"
          text
        >
          https://example.com/users/
        </span>
        <rd-input />
      </rd-input-group>
      <rd-input-group class="mb-3">
        <span
          slot="prepend"
          text
        >
          $
        </span>
        <rd-input>
          <span
            slot="append"
            text
          >
            .00
          </span>
        </rd-input>
      </rd-input-group>
      <rd-input-group>
        <span
          slot="prepend"
          text
        >
          With textarea
        </span>
        <textarea />
      </rd-input-group>
    </div>
    <highlight
      code="<rd-input-group class=&quot;mb-3&quot;>
  <span
    slot=&quot;prepend&quot;
    text
  >
    @
  </span>
  <rd-input
    type=&quot;text&quot;
    placeholder=&quot;Username&quot;
  />
</rd-input-group>
<rd-input-group class=&quot;mb-3&quot;>
  <rd-input
    type=&quot;text&quot;
    placeholder=&quot;Recipient's username&quot;
  />
  <span
    slot=&quot;append&quot;
    text
  >
    @example.com
  </span>
</rd-input-group>
<rd-input-group class=&quot;mb-3&quot;>
  <span
    slot=&quot;prepend&quot;
    text
  >
    https://example.com/users/
  </span>
  <rd-input />
</rd-input-group>
<rd-input-group class=&quot;mb-3&quot;>
  <span
    slot=&quot;prepend&quot;
    text
  >
    $
  </span>
  <rd-input>
    <span
      slot=&quot;append&quot;
      text
    >
      .00
    </span>
  </rd-input>
</rd-input-group>
<rd-input-group>
  <span
    slot=&quot;prepend&quot;
    text
  >
    With textarea
  </span>
  <textarea />
</rd-input-group>"
    />
    <h3>
      Sizing
    </h3>
    <div class="p-3 border">
      <rd-input-group
        class="mb-3"
        sm
      >
        <span
          slot="prepend"
          text
        >
          Small
        </span>
        <rd-input />
      </rd-input-group>
      <rd-input-group class=" mb-3">
        <span
          slot="prepend"
          text
        >
          Default
        </span>
        <rd-input />
      </rd-input-group>
      <rd-input-group lg>
        <span
          slot="prepend"
          text
        >
          Large
        </span>
        <rd-input />
      </rd-input-group>
    </div>
    <highlight
      code="<rd-input-group
  class=&quot;mb-3&quot;
  sm
>
  <span
    slot=&quot;prepend&quot;
    text
  >
    Small
  </span>
  <rd-input />
</rd-input-group>
<rd-input-group class=&quot; mb-3&quot;>
  <span
    slot=&quot;prepend&quot;
    text
  >
    Default
  </span>
  <rd-input />
</rd-input-group>
<rd-input-group lg>
  <span
    slot=&quot;prepend&quot;
    text
  >
    Large
  </span>
  <rd-input />
</rd-input-group>"
    />
    <h3>
      Checkboxes and radios
    </h3>
    <div class="p-3 border">
      <rd-input-group class="mb-3">
        <div
          slot="prepend"
          text
        >
          <rd-input
            type="checkbox"
          />
        </div>

        <rd-input
          type="text"
        />
      </rd-input-group>
      <rd-input-group>
        <div
          slot="prepend"
          text
        >
          <rd-input
            type="radio"
          />
        </div>

        <rd-input
          type="text"
        />
      </rd-input-group>
    </div>
    <highlight
      code="<rd-input-group class=&quot;mb-3&quot;>
  <div
    slot=&quot;prepend&quot;
    text
  >
    <rd-input
      type=&quot;checkbox&quot;
    />
  </div>

  <rd-input
    type=&quot;text&quot;
  />
</rd-input-group>
<rd-input-group>
  <div
    slot=&quot;prepend&quot;
    text
  >
    <rd-input
      type=&quot;radio&quot;
    />
  </div>

  <rd-input
    type=&quot;text&quot;
  />
</rd-input-group>"
    />
    <h3>
      Multiple inputs
    </h3>
    <div class="p-3 border">
      <rd-input-group>
        <span
          slot="prepend"
          text
        >
          First and last name
        </span>
        <rd-input />
        <rd-input />
      </rd-input-group>
    </div>
    <highlight
      code="<rd-input-group>
  <span
    slot=&quot;prepend&quot;
    text
  >
    First and last name
  </span>
  <rd-input />
  <rd-input />
</rd-input-group>"
    />
    <h3>
      Multiple addons
    </h3>
    <div class="p-3 border">
      <rd-input-group class="mb-3">
        <span
          slot="prepend"
          text
        >
          $
        </span>
        <span
          slot="prepend"
          text
        >
          0.00
        </span>
        <rd-input />
      </rd-input-group>
      <rd-input-group>
        <rd-input />
        <span
          slot="append"
          text
        >
          $
        </span>
        <span
          slot="append"
          text
        >
          0.00
        </span>
      </rd-input-group>
    </div>
    <highlight
      code="<rd-input-group class=&quot;mb-3&quot;>
  <span
    slot=&quot;prepend&quot;
    text
  >
    $
  </span>
  <span
    slot=&quot;prepend&quot;
    text
  >
    0.00
  </span>
  <rd-input />
</rd-input-group>
<rd-input-group>
  <rd-input />
  <span
    slot=&quot;append&quot;
    text
  >
    $
  </span>
  <span
    slot=&quot;append&quot;
    text
  >
    0.00
  </span>
</rd-input-group>"
    />
    <h3>
      Button addons
    </h3>
    <div class="p-3 border">
      <rd-input-group class="mb-3">
        <rd-button
          slot="prepend"
          outline-secondary
          type="button"
        >
          Button
        </rd-button>
        <rd-input />
      </rd-input-group>
      <rd-input-group class="mb-3">
        <rd-input placeholder="Recipient's username" />
        <rd-button
          slot="append"
          outline-secondary
          type="button"
        >
          Button
        </rd-button>
      </rd-input-group>
      <rd-input-group class="mb-3">
        <rd-button
          slot="prepend"
          outline-secondary
          type="button"
        >
          Button
        </rd-button>
        <rd-button
          slot="prepend"
          outline-secondary
          type="button"
        >
          Button
        </rd-button>

        <rd-input />
      </rd-input-group>
      <rd-input-group>
        <rd-input placeholder="Recipient's username" />
        <rd-button
          slot="append"
          outline-secondary
          type="button"
        >
          Button
        </rd-button>
        <rd-button
          slot="append"
          outline-secondary
          type="button"
        >
          Button
        </rd-button>
      </rd-input-group>
    </div>
    <highlight
      code="<rd-input-group class=&quot;mb-3&quot;>
  <rd-button
    slot=&quot;prepend&quot;
    outline-secondary
    type=&quot;button&quot;
  >
    Button
  </rd-button>
  <rd-input />
</rd-input-group>
<rd-input-group class=&quot;mb-3&quot;>
  <rd-input placeholder=&quot;Recipient&apos;s username&quot; />
  <rd-button
    slot=&quot;append&quot;
    outline-secondary
    type=&quot;button&quot;
  >
    Button
  </rd-button>
</rd-input-group>
<rd-input-group class=&quot;mb-3&quot;>
  <rd-button
    slot=&quot;prepend&quot;
    outline-secondary
    type=&quot;button&quot;
  >
    Button
  </rd-button>
  <rd-button
    slot=&quot;prepend&quot;
    outline-secondary
    type=&quot;button&quot;
  >
    Button
  </rd-button>

  <rd-input />
</rd-input-group>
<rd-input-group>
  <rd-input placeholder=&quot;Recipient&apos;s username&quot; />
  <rd-button
    slot=&quot;append&quot;
    outline-secondary
    type=&quot;button&quot;
  >
    Button
  </rd-button>
  <rd-button
    slot=&quot;append&quot;
    outline-secondary
    type=&quot;button&quot;
  >
    Button
  </rd-button>
</rd-input-group>"
    />
    <h3>
      Buttons with dropdowns
    </h3>
    <div class="p-3 border">
      <rd-input-group class="mb-3">
        <rd-dropdown slot="prepend">
          <rd-button
            slot="button"
            outline-secondary
            type="button"
          >
            Dropdown
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
          <div class="dropdown-divider" />
          <a
            href="javascript:"
          >
            Separated link
          </a>
        </rd-dropdown>
        <rd-input />
      </rd-input-group>
      <rd-input-group>
        <rd-input />
        <rd-dropdown slot="append">
          <rd-button
            slot="button"
            outline-secondary
            type="button"
          >
            Dropdown
          </rd-button>
          <a
            class="dropdown-item"
            href="javascript:"
          >
            Action
          </a>
          <a
            class="dropdown-item"
            href="javascript:"
          >
            Another action
          </a>
          <a
            class="dropdown-item"
            href="javascript:"
          >
            Something else here
          </a>
          <div
            role="separator"
            class="dropdown-divider"
          />
          <a
            class="dropdown-item"
            href="javascript:"
          >
            Separated link
          </a>
        </rd-dropdown>
      </rd-input-group>
    </div>
    <highlight
      code="<rd-input-group class=&quot;mb-3&quot;>
  <rd-dropdown slot=&quot;prepend&quot;>
    <rd-button
      slot=&quot;button&quot;
      outline-secondary
      type=&quot;button&quot;
    >
      Dropdown
    </rd-button>
    <a
      href=&quot;javascript:&quot;
    >
      Action
    </a>
    <a
      href=&quot;javascript:&quot;
    >
      Another action
    </a>
    <a
      href=&quot;javascript:&quot;
    >
      Something else here
    </a>
    <div class=&quot;dropdown-divider&quot; />
    <a
      href=&quot;javascript:&quot;
    >
      Separated link
    </a>
  </rd-dropdown>
  <rd-input />
</rd-input-group>
<rd-input-group>
  <rd-input />
  <rd-dropdown slot=&quot;append&quot;>
    <rd-button
      slot=&quot;button&quot;
      outline-secondary
      type=&quot;button&quot;
    >
      Dropdown
    </rd-button>
    <a
      class=&quot;dropdown-item&quot;
      href=&quot;javascript:&quot;
    >
      Action
    </a>
    <a
      class=&quot;dropdown-item&quot;
      href=&quot;javascript:&quot;
    >
      Another action
    </a>
    <a
      class=&quot;dropdown-item&quot;
      href=&quot;javascript:&quot;
    >
      Something else here
    </a>
    <div
      role=&quot;separator&quot;
      class=&quot;dropdown-divider&quot;
    />
    <a
      class=&quot;dropdown-item&quot;
      href=&quot;javascript:&quot;
    >
      Separated link
    </a>
  </rd-dropdown>
</rd-input-group>"
    />
    <h3>
      Segmented buttons
    </h3>
    <div class="p-3 border">
      <rd-input-group class="mb-3">
        <rd-dropdown
          slot="prepend"
          inline
        >
          <rd-button
            slot="button"
            outline-secondary
          >
            Action
          </rd-button>
          <rd-button
            slot="button"
            outline-secondary
          >
            <span class="sr-only">
              Toggle Dropdown
            </span>
          </rd-button>

          <a
            class="dropdown-item"
            href="javascript:"
          >
            Action
          </a>
          <a
            class="dropdown-item"
            href="javascript:"
          >
            Another action
          </a>
          <a
            class="dropdown-item"
            href="javascript:"
          >
            Something else here
          </a>
          <div
            role="separator"
            class="dropdown-divider"
          />
          <a
            class="dropdown-item"
            href="javascript:"
          >
            Separated link
          </a>
        </rd-dropdown>
        <rd-input />
      </rd-input-group>
      <rd-input-group>
        <rd-input />
        <rd-dropdown slot="append">
          <rd-button
            slot="button"
            type="button"
            outline-secondary
          >
            Action
          </rd-button>
          <rd-button
            slot="button"
            outline-secondary
          >
            <span class="sr-only">
              Toggle Dropdown
            </span>
          </rd-button>
          <a
            class="dropdown-item"
            href="javascript:"
          >
            Action
          </a>
          <a
            class="dropdown-item"
            href="javascript:"
          >
            Another action
          </a>
          <a
            class="dropdown-item"
            href="javascript:"
          >
            Something else here
          </a>
          <div
            role="separator"
            class="dropdown-divider"
          />
          <a
            class="dropdown-item"
            href="javascript:"
          >
            Separated link
          </a>
        </rd-dropdown>
      </rd-input-group>
    </div>
    <highlight
      code="<rd-input-group class=&quot;mb-3&quot;>
  <rd-dropdown
    slot=&quot;prepend&quot;
    inline
  >
    <rd-button
      slot=&quot;button&quot;
      outline-secondary
    >
      Action
    </rd-button>
    <rd-button
      slot=&quot;button&quot;
      outline-secondary
    >
      <span class=&quot;sr-only&quot;>
        Toggle Dropdown
      </span>
    </rd-button>

    <a
      class=&quot;dropdown-item&quot;
      href=&quot;javascript:&quot;
    >
      Action
    </a>
    <a
      class=&quot;dropdown-item&quot;
      href=&quot;javascript:&quot;
    >
      Another action
    </a>
    <a
      class=&quot;dropdown-item&quot;
      href=&quot;javascript:&quot;
    >
      Something else here
    </a>
    <div
      role=&quot;separator&quot;
      class=&quot;dropdown-divider&quot;
    />
    <a
      class=&quot;dropdown-item&quot;
      href=&quot;javascript:&quot;
    >
      Separated link
    </a>
  </rd-dropdown>
  <rd-input />
</rd-input-group>
<rd-input-group>
  <rd-input />
  <rd-dropdown slot=&quot;append&quot;>
    <rd-button
      slot=&quot;button&quot;
      type=&quot;button&quot;
      outline-secondary
    >
      Action
    </rd-button>
    <rd-button
      slot=&quot;button&quot;
      outline-secondary
    >
      <span class=&quot;sr-only&quot;>
        Toggle Dropdown
      </span>
    </rd-button>
    <a
      class=&quot;dropdown-item&quot;
      href=&quot;javascript:&quot;
    >
      Action
    </a>
    <a
      class=&quot;dropdown-item&quot;
      href=&quot;javascript:&quot;
    >
      Another action
    </a>
    <a
      class=&quot;dropdown-item&quot;
      href=&quot;javascript:&quot;
    >
      Something else here
    </a>
    <div
      role=&quot;separator&quot;
      class=&quot;dropdown-divider&quot;
    />
    <a
      class=&quot;dropdown-item&quot;
      href=&quot;javascript:&quot;
    >
      Separated link
    </a>
  </rd-dropdown>
</rd-input-group>"
    />
    <h3>
      Custom select
    </h3>
    <div class="p-3 border">
      <rd-input-group class="mb-3">
        <span
          slot="prepend"
          text
        >
          Options
        </span>
        <rd-select>
          <option value="1">
            One
          </option>
          <option value="2">
            Two
          </option>
          <option value="3">
            Three
          </option>
        </rd-select>
      </rd-input-group>
      <rd-input-group class="mb-3">
        <rd-select>
          <option value="1">
            One
          </option>
          <option value="2">
            Two
          </option>
          <option value="3">
            Three
          </option>
        </rd-select>

        <span
          slot="append"
          text
        >
          Options
        </span>
      </rd-input-group>
      <rd-input-group class="mb-3">
        <rd-button
          slot="prepend"
          type="button"
          outline-secondary
        >
          Button
        </rd-button>

        <rd-select>
          <option value="1">
            One
          </option>
          <option value="2">
            Two
          </option>
          <option value="3">
            Three
          </option>
        </rd-select>
      </rd-input-group>
      <rd-input-group>
        <rd-select>
          <option value="1">
            One
          </option>
          <option value="2">
            Two
          </option>
          <option value="3">
            Three
          </option>
        </rd-select>

        <rd-button
          slot="append"
          outline-secondary
          type="button"
        >
          Button
        </rd-button>
      </rd-input-group>
    </div>
    <highlight
      code="<rd-input-group class=&quot;mb-3&quot;>
  <span
    slot=&quot;prepend&quot;
    text
  >
    Options
  </span>
  <rd-select>
    <option value=&quot;1&quot;>
      One
    </option>
    <option value=&quot;2&quot;>
      Two
    </option>
    <option value=&quot;3&quot;>
      Three
    </option>
  </rd-select>
</rd-input-group>
<rd-input-group class=&quot;mb-3&quot;>
  <rd-select>
    <option value=&quot;1&quot;>
      One
    </option>
    <option value=&quot;2&quot;>
      Two
    </option>
    <option value=&quot;3&quot;>
      Three
    </option>
  </rd-select>

  <span
    slot=&quot;append&quot;
    text
  >
    Options
  </span>
</rd-input-group>
<rd-input-group class=&quot;mb-3&quot;>
  <rd-button
    slot=&quot;prepend&quot;
    type=&quot;button&quot;
    outline-secondary
  >
    Button
  </rd-button>

  <rd-select>
    <option value=&quot;1&quot;>
      One
    </option>
    <option value=&quot;2&quot;>
      Two
    </option>
    <option value=&quot;3&quot;>
      Three
    </option>
  </rd-select>
</rd-input-group>
<rd-input-group>
  <rd-select>
    <option value=&quot;1&quot;>
      One
    </option>
    <option value=&quot;2&quot;>
      Two
    </option>
    <option value=&quot;3&quot;>
      Three
    </option>
  </rd-select>

  <rd-button
    slot=&quot;append&quot;
    outline-secondary
    type=&quot;button&quot;
  >
    Button
  </rd-button>
</rd-input-group>"
    />
    <h3>
      Custom file input
    </h3>
    <div class="p-3 border">
      <rd-input-group class="mb-3">
        <span
          slot="prepend"
          text
        >
          Upload
        </span>

        <rd-input type="file">
          Choose file
        </rd-input>
      </rd-input-group>
      <rd-input-group class="mb-3">
        <rd-input type="file">
          Choose file
        </rd-input>
        <span
          slot="append"
          text
        >
          Upload
        </span>
      </rd-input-group>
      <rd-input-group class="mb-3">
        <rd-button
          slot="prepend"
          type="button"
          outline-secondary
        >
          Button
        </rd-button>

        <rd-input type="file">
          Choose file
        </rd-input>
      </rd-input-group>
      <rd-input-group>
        <rd-input type="file">
          Choose file
        </rd-input>

        <rd-button
          slot="append"
          outline-secondary
          type="button"
        >
          Button
        </rd-button>
      </rd-input-group>
    </div>
    <highlight
      code="<rd-input-group class=&quot;mb-3&quot;>
  <span
    slot=&quot;prepend&quot;
    text
  >
    Upload
  </span>

  <rd-input type=&quot;file&quot;>
    Choose file
  </rd-input>
</rd-input-group>
<rd-input-group class=&quot;mb-3&quot;>
  <rd-input type=&quot;file&quot;>
    Choose file
  </rd-input>
  <span
    slot=&quot;append&quot;
    text
  >
    Upload
  </span>
</rd-input-group>
<rd-input-group class=&quot;mb-3&quot;>
  <rd-button
    slot=&quot;prepend&quot;
    type=&quot;button&quot;
    outline-secondary
  >
    Button
  </rd-button>

  <rd-input type=&quot;file&quot;>
    Choose file
  </rd-input>
</rd-input-group>
<rd-input-group>
  <rd-input type=&quot;file&quot;>
    Choose file
  </rd-input>

  <rd-button
    slot=&quot;append&quot;
    outline-secondary
    type=&quot;button&quot;
  >
    Button
  </rd-button>
</rd-input-group>"
    />
    <h3>Props</h3>
    <nuxt-link to="/mixins/size">
      Size
    </nuxt-link> 속성을 쓸 수 있습니다.
  </div>
</template>

<script>


export default {
  name: 'InputGroup',
};
</script>
