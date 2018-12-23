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

      <label for="basic-url">
        Your vanity URL
      </label>
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
    <highlight />
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
    <highlight />
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
    <highlight />
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
    <highlight />
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
    <highlight />
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
    <highlight />
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
    <highlight />
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
    <highlight />
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
    <highlight />
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
    <highlight />
  </div>
</template>

<script>
import {
  RdInputGroup, RdInput, RdButton, RdDropdown, RdSelect
} from '~/src';
import Highlight from '~/components/Highlight';

export default {
  name: 'InputGroup',
  components: {
    RdInputGroup, RdButton, RdInput, Highlight, RdDropdown, RdSelect
  }
};
</script>
