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
            <rd-input
              type="text"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </rd-input-group>

          <rd-input-group class="mb-3">
            <rd-input
              type="text"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
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
            <rd-input
              id="basic-url"
              type="text"
              aria-describedby="basic-addon3"
            />
          </rd-input-group>

          <rd-input-group class="mb-3">
            <span
              slot="prepend"
              text
            >
              $
            </span>
            <rd-input
              type="text"
              aria-label="Amount (to the nearest dollar)"
            >
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
            <textarea
              aria-label="With textarea"
            />
          </rd-input-group>

          Sizing
          <rd-input-group
            class="mb-3"
            sm
          >
            <span
              id="inputGroup-sizing-sm"
              slot="prepend"
              text
            >
              Small
            </span>
            <rd-input
              type="text"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </rd-input-group>

          <rd-input-group class=" mb-3">
            <span
              id="inputGroup-sizing-default"
              slot="prepend"
              text
            >
              Default
            </span>
            <rd-input
              type="text"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </rd-input-group>

          <rd-input-group lg>
            <span
              slot="prepend"
              text
            >
              Large
            </span>
            <rd-input
              type="text"
            />
          </rd-input-group>
          Checkboxes and radios
          <rd-input-group class="mb-3">
            <div
              slot="prepend"
              text
            >
              <rd-input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </div>

            <rd-input
              type="text"
              aria-label="Text input with checkbox"
            />
          </rd-input-group>

          <rd-input-group>
            <div
              slot="prepend"
              text
            >
              <rd-input
                type="radio"
                aria-label="Radio button for following text input"
              />
            </div>

            <rd-input
              type="text"
              aria-label="Text input with radio button"
            />
          </rd-input-group>
          Multiple inputs
          <rd-input-group>
            <span
              slot="prepend"
              text
            >
              First and last name
            </span>
            <rd-input
              type="text"
              aria-label="First name"
            >
              <rd-input
                type="text"
                aria-label="Last name"
              />
            </rd-input>
          </rd-input-group>

          Multiple addons
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

            <rd-input
              type="text"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </rd-input-group>

          <rd-input-group>
            <rd-input
              type="text"
              aria-label="Dollar amount (with dot and two decimal places)"
            >
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
            </rd-input>
          </rd-input-group>
          Button addons
          <rd-input-group class="mb-3">
            <rd-button
              id="button-addon1"
              slot="prepend"
              outline-secondary
              type="button"
            >
              Button
            </rd-button>
            <rd-input
              type="text"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </rd-input-group>

          <rd-input-group class="mb-3">
            <rd-input
              type="text"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            >
              <rd-button
                id="button-addon2"
                slot="append"
                outline-secondary
                type="button"
              >
                Button
              </rd-button>
            </rd-input>
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

            <rd-input
              type="text"
              placeholder=""
              aria-label="Example text with two button addons"
              aria-describedby="button-addon3"
            />
          </rd-input-group>

          <rd-input-group>
            <rd-input
              type="text"
              placeholder="Recipient's username"
              aria-label="Recipient's username with two button addons"
              aria-describedby="button-addon4"
            >
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
            </rd-input>
          </rd-input-group>


          Buttons with dropdowns
          <rd-input-group class="mb-3">
            <rd-button
              slot="append"
              outline-secondary
              class="dropdown-toggle"
              type="button"
            >
              Dropdown
            </rd-button>
            <div
              slot="append"
              class="dropdown-menu"
            >
              <a
                class="dropdown-item"
                href="#"
              >
                Action
              </a>
              <a
                class="dropdown-item"
                href="#"
              >
                Another action
              </a>
              <a
                class="dropdown-item"
                href="#"
              >
                Something else here
              </a>
              <div
                role="separator"
                class="dropdown-divider"
              />
              <a
                class="dropdown-item"
                href="#"
              >
                Separated link
              </a>
            </div>

            <rd-input
              type="text"
              aria-label="Text input with dropdown button"
            />
          </rd-input-group>

          <rd-input-group>
            <rd-input
              type="text"
              aria-label="Text input with dropdown button"
            >
              <rd-button
                slot="prepend"
                outline-secondary
                class="dropdown-toggle"
                type="button"
              >
                Dropdown
              </rd-button>
              <div
                slot="prepend"
                class="dropdown-menu"
              >
                <a
                  class="dropdown-item"
                  href="#"
                >
                  Action
                </a>
                <a
                  class="dropdown-item"
                  href="#"
                >
                  Another action
                </a>
                <a
                  class="dropdown-item"
                  href="#"
                >
                  Something else here
                </a>
                <div
                  role="separator"
                  class="dropdown-divider"
                />
                <a
                  class="dropdown-item"
                  href="#"
                >
                  Separated link
                </a>
              </div>
            </rd-input>
          </rd-input-group>

          Segmented buttons
          <rd-input-group class="mb-3">
            <button
              slot="prepend"
              type="button"
              class="btn btn-outline-secondary"
            >
              Action
            </button>
            <button
              slot="prepend"
              type="button"
              class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="sr-only">
                Toggle Dropdown
              </span>
            </button>
            <div
              slot="prepend"
              class="dropdown-menu"
            >
              <a
                class="dropdown-item"
                href="#"
              >
                Action
              </a>
              <a
                class="dropdown-item"
                href="#"
              >
                Another action
              </a>
              <a
                class="dropdown-item"
                href="#"
              >
                Something else here
              </a>
              <div
                role="separator"
                class="dropdown-divider"
              />
              <a
                class="dropdown-item"
                href="#"
              >
                Separated link
              </a>
            </div>
            <rd-input
              type="text"
              aria-label="Text input with segmented dropdown button"
            />
          </rd-input-group>

          <rd-input-group>
            <rd-input
              type="text"
              aria-label="Text input with segmented dropdown button"
            >
              <button
                slot="append"
                type="button"
                class="btn btn-outline-secondary"
              >
                Action
              </button>
              <button
                slot="append"
                type="button"
                class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="sr-only">
                  Toggle Dropdown
                </span>
              </button>
              <div
                slot="append"
                class="dropdown-menu"
              >
                <a
                  class="dropdown-item"
                  href="#"
                >
                  Action
                </a>
                <a
                  class="dropdown-item"
                  href="#"
                >
                  Another action
                </a>
                <a
                  class="dropdown-item"
                  href="#"
                >
                  Something else here
                </a>
                <div
                  role="separator"
                  class="dropdown-divider"
                />
                <a
                  class="dropdown-item"
                  href="#"
                >
                  Separated link
                </a>
              </div>
            </rd-input>
          </rd-input-group>


          Custom forms

          Custom select
          <rd-input-group class="mb-3">
            <label
              slot="prepend"
              class="input-group-text"
              for="inputGroupSelect01"
            >
              Options
            </label>

            <select
              id="inputGroupSelect01"
              class="custom-select"
            >
              <option selected>
                Choose...
              </option>
              <option value="1">
                One
              </option>
              <option value="2">
                Two
              </option>
              <option value="3">
                Three
              </option>
            </select>
          </rd-input-group>

          <rd-input-group class="mb-3">
            <select
              id="inputGroupSelect02"
              class="custom-select"
            >
              <option selected>
                Choose...
              </option>
              <option value="1">
                One
              </option>
              <option value="2">
                Two
              </option>
              <option value="3">
                Three
              </option>
            </select>

            <label
              slot="append"
              class="input-group-text"
              for="inputGroupSelect02"
            >
              Options
            </label>
          </rd-input-group>

          <rd-input-group class="mb-3">
            <button
              slot="prepend"
              class="btn btn-outline-secondary"
              type="button"
            >
              Button
            </button>

            <select
              id="inputGroupSelect03"
              class="custom-select"
              aria-label="Example select with button addon"
            >
              <option selected>
                Choose...
              </option>
              <option value="1">
                One
              </option>
              <option value="2">
                Two
              </option>
              <option value="3">
                Three
              </option>
            </select>
          </rd-input-group>

          <rd-input-group>
            <select
              id="inputGroupSelect04"
              class="custom-select"
              aria-label="Example select with button addon"
            >
              <option selected>
                Choose...
              </option>
              <option value="1">
                One
              </option>
              <option value="2">
                Two
              </option>
              <option value="3">
                Three
              </option>
            </select>

            <button
              slot="append"
              class="btn btn-outline-secondary"
              type="button"
            >
              Button
            </button>
          </rd-input-group>

          Custom file input
          <rd-input-group class="mb-3">
            <span
              id="inputGroupFileAddon01"
              slot="prepend"
              class="input-group-text"
            >
              Upload
            </span>

            <div class="custom-file">
              <rd-input
                id="inputGroupFile01"
                type="file"
                class="custom-file-input"
                aria-describedby="inputGroupFileAddon01"
              />
              <label class="custom-file-label">
                Choose file
              </label>
            </div>
          </rd-input-group>

          <rd-input-group class="mb-3">
            <div class="custom-file">
              <rd-input
                id="inputGroupFile02"
                type="file"
                class="custom-file-input"
              />
              <label class="custom-file-label">
                Choose file
              </label>
            </div>

            <span
              id="inputGroupFileAddon02"
              slot="append"
              class="input-group-text"
            >
              Upload
            </span>
          </rd-input-group>

          <rd-input-group class="mb-3">
            <button
              id="inputGroupFileAddon03"
              slot="prepend"
              class="btn btn-outline-secondary"
              type="button"
            >
              Button
            </button>

            <div class="custom-file">
              <rd-input
                id="inputGroupFile03"
                type="file"
                class="custom-file-input"
                aria-describedby="inputGroupFileAddon03"
              />
              <label class="custom-file-label">
                Choose file
              </label>
            </div>
          </rd-input-group>

          <rd-input-group>
            <div class="custom-file">
              <rd-input
                id="inputGroupFile04"
                type="file"
                class="custom-file-input"
                aria-describedby="inputGroupFileAddon04"
              />
              <label class="custom-file-label">
                Choose file
              </label>
            </div>

            <button
              id="inputGroupFileAddon04"
              slot="append"
              class="btn btn-outline-secondary"
              type="button"
            >
              Button
            </button>
          </rd-input-group>
  </div>
</template>

<script>
import { RdInputGroup, RdInput, RdButton } from '~/src';

export default {
  name: 'InputGroup',
  components: { RdInputGroup, RdButton, RdInput }
};
</script>
