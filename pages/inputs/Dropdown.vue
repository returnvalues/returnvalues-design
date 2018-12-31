<template>
  <div>
    <h1>Dropdown</h1>
    <h2>Example</h2>
    <h3>
      Single button
    </h3>
    <div class="p-3 border">
      <rd-dropdown inline>
        <rd-button
          slot="button"
          primary
        >
          Primary
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
      <rd-dropdown inline>
        <rd-button
          slot="button"
          secondary
        >
          Secondary
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
      <rd-dropdown inline>
        <rd-button
          slot="button"
          success
        >
          Success
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
      <rd-dropdown inline>
        <rd-button
          slot="button"
          info
        >
          Info
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
      <rd-dropdown inline>
        <rd-button
          slot="button"
          warning
        >
          Warning
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
      <rd-dropdown inline>
        <rd-button
          slot="button"
          danger
        >
          Danger
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
    <highlight
      code="<rd-dropdown inline>
  <rd-button
    slot=&quot;button&quot;
    primary
  >
    Primary
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
</rd-dropdown>"
    />


    <h3>
      Split button
    </h3>
    <div class="p-3 border">
      <rd-dropdown>
        <rd-button
          slot="button"
          primary
        >
          Primary
        </rd-button>
        <rd-button
          slot="button"
          primary
        >
          <span class="sr-only">
            Toggle Dropdown
          </span>
        </rd-button>
        <a href="javascript:">
          Action
        </a>
        <a href="javascript:">
          Another action
        </a>
        <a href="javascript:">
          Something else here
        </a>
        <div class="dropdown-divider" />
        <a href="javascript:">
          Separated link
        </a>
      </rd-dropdown>
      <rd-dropdown>
        <rd-button
          slot="button"
          secondary
        >
          Secondary
        </rd-button>
        <rd-button
          slot="button"
          secondary
        >
          <span class="sr-only">
            Toggle Dropdown
          </span>
        </rd-button>
        <a href="javascript:">
          Action
        </a>
        <a href="javascript:">
          Another action
        </a>
        <a href="javascript:">
          Something else here
        </a>
        <div class="dropdown-divider" />
        <a href="javascript:">
          Separated link
        </a>
      </rd-dropdown>
      <rd-dropdown>
        <rd-button
          slot="button"
          success
        >
          Success
        </rd-button>
        <rd-button
          slot="button"
          success
        >
          <span class="sr-only">
            Toggle Dropdown
          </span>
        </rd-button>
        <a href="javascript:">
          Action
        </a>
        <a href="javascript:">
          Another action
        </a>
        <a href="javascript:">
          Something else here
        </a>
        <div class="dropdown-divider" />
        <a href="javascript:">
          Separated link
        </a>
      </rd-dropdown>
      <rd-dropdown>
        <rd-button
          slot="button"
          info
        >
          Info
        </rd-button>
        <rd-button
          slot="button"
          info
        >
          <span class="sr-only">
            Toggle Dropdown
          </span>
        </rd-button>
        <a href="javascript:">
          Action
        </a>
        <a href="javascript:">
          Another action
        </a>
        <a href="javascript:">
          Something else here
        </a>
        <div class="dropdown-divider" />
        <a href="javascript:">
          Separated link
        </a>
      </rd-dropdown>
      <rd-dropdown>
        <rd-button
          slot="button"
          warning
        >
          Warning
        </rd-button>
        <rd-button
          slot="button"
          warning
        >
          <span class="sr-only">
            Toggle Dropdown
          </span>
        </rd-button>
        <a href="javascript:">
          Action
        </a>
        <a href="javascript:">
          Another action
        </a>
        <a href="javascript:">
          Something else here
        </a>
        <div class="dropdown-divider" />
        <a href="javascript:">
          Separated link
        </a>
      </rd-dropdown>
      <rd-dropdown>
        <rd-button
          slot="button"
          danger
        >
          Danger
        </rd-button>
        <rd-button
          slot="button"
          danger
        >
          <span class="sr-only">
            Toggle Dropdown
          </span>
        </rd-button>
        <a href="javascript:">
          Action
        </a>
        <a href="javascript:">
          Another action
        </a>
        <a href="javascript:">
          Something else here
        </a>
        <div class="dropdown-divider" />
        <a href="javascript:">
          Separated link
        </a>
      </rd-dropdown>
    </div>
    <highlight
      code="<rd-dropdown>
  <rd-button
    slot=&quot;button&quot;
    primary
  >
    Primary
  </rd-button>
  <rd-button
    slot=&quot;button&quot;
    primary
  >
    <span class=&quot;sr-only&quot;>
      Toggle Dropdown
    </span>
  </rd-button>
  <a href=&quot;javascript:&quot;>
    Action
  </a>
  <a href=&quot;javascript:&quot;>
    Another action
  </a>
  <a href=&quot;javascript:&quot;>
    Something else here
  </a>
  <div class=&quot;dropdown-divider&quot; />
  <a href=&quot;javascript:&quot;>
    Separated link
  </a>
</rd-dropdown>"
    />
    <h3>
      Sizing
    </h3>
    <div class="p-3 border">
      <rd-dropdown inline>
        <rd-button
          slot="button"
          secondary
          lg
        >
          Large button
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
      <rd-dropdown>
        <rd-button
          slot="button"
          secondary
          lg
        >
          Large split button
        </rd-button>
        <rd-button
          slot="button"
          secondary
        >
          <span class="sr-only">
            Toggle Dropdown
          </span>
        </rd-button>
        <a href="javascript:">
          Action
        </a>
        <a href="javascript:">
          Another action
        </a>
        <a href="javascript:">
          Something else here
        </a>
        <div class="dropdown-divider" />
        <a href="javascript:">
          Separated link
        </a>
      </rd-dropdown><br><br>
      <rd-dropdown inline>
        <rd-button
          slot="button"
          secondary
          sm
        >
          Small button
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
      <rd-dropdown>
        <rd-button
          slot="button"
          secondary
          sm
        >
          Small split button
        </rd-button>
        <rd-button
          slot="button"
          secondary
          sm
        >
          <span class="sr-only">
            Toggle Dropdown
          </span>
        </rd-button>
        <a href="javascript:">
          Action
        </a>
        <a href="javascript:">
          Another action
        </a>
        <a href="javascript:">
          Something else here
        </a>
        <div class="dropdown-divider" />
        <a href="javascript:">
          Separated link
        </a>
      </rd-dropdown>
    </div>
    <highlight
      code="<rd-dropdown inline>
  <rd-button
    slot=&quot;button&quot;
    secondary
    lg
  >
    Large button
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
</rd-dropdown>
<rd-dropdown>
  <rd-button
    slot=&quot;button&quot;
    secondary
    lg
  >
    Large split button
  </rd-button>
  <rd-button
    slot=&quot;button&quot;
    secondary
  >
    <span class=&quot;sr-only&quot;>
      Toggle Dropdown
    </span>
  </rd-button>
  <a href=&quot;javascript:&quot;>
    Action
  </a>
  <a href=&quot;javascript:&quot;>
    Another action
  </a>
  <a href=&quot;javascript:&quot;>
    Something else here
  </a>
  <div class=&quot;dropdown-divider&quot; />
  <a href=&quot;javascript:&quot;>
    Separated link
  </a>
</rd-dropdown><br><br>
<rd-dropdown inline>
  <rd-button
    slot=&quot;button&quot;
    secondary
    sm
  >
    Small button
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
</rd-dropdown>
<rd-dropdown>
  <rd-button
    slot=&quot;button&quot;
    secondary
    sm
  >
    Small split button
  </rd-button>
  <rd-button
    slot=&quot;button&quot;
    secondary
    sm
  >
    <span class=&quot;sr-only&quot;>
      Toggle Dropdown
    </span>
  </rd-button>
  <a href=&quot;javascript:&quot;>
    Action
  </a>
  <a href=&quot;javascript:&quot;>
    Another action
  </a>
  <a href=&quot;javascript:&quot;>
    Something else here
  </a>
  <div class=&quot;dropdown-divider&quot; />
  <a href=&quot;javascript:&quot;>
    Separated link
  </a>
</rd-dropdown>"
    />


    <h3>
      Dropup
    </h3>
    <div class="p-3 border">
      <rd-dropdown
        dropup
        inline
      >
        <rd-button
          slot="button"
          secondary
        >
          Dropup
        </rd-button>
        <a href="javascript:">
          Action
        </a>
        <a href="javascript:">
          Another action
        </a>
        <a href="javascript:">
          Something else here
        </a>
        <div class="dropdown-divider" />
        <a href="javascript:">
          Separated link
        </a>
      </rd-dropdown>

      <rd-dropdown
        inline
        dropup
      >
        <rd-button
          slot="button"
          secondary
        >
          Split dropup
        </rd-button>
        <rd-button
          slot="button"
          secondary
        >
          <span class="sr-only">
            Toggle Dropup
          </span>
        </rd-button>
        <a href="javascript:">
          Action
        </a>
        <a href="javascript:">
          Another action
        </a>
        <a href="javascript:">
          Something else here
        </a>
        <div class="dropdown-divider" />
        <a href="javascript:">
          Separated link
        </a>
      </rd-dropdown>
    </div>
    <highlight
      code="<rd-dropdown
  dropup
  inline
>
  <rd-button
    slot=&quot;button&quot;
    secondary
  >
    Dropup
  </rd-button>
  <a href=&quot;javascript:&quot;>
    Action
  </a>
  <a href=&quot;javascript:&quot;>
    Another action
  </a>
  <a href=&quot;javascript:&quot;>
    Something else here
  </a>
  <div class=&quot;dropdown-divider&quot; />
  <a href=&quot;javascript:&quot;>
    Separated link
  </a>
</rd-dropdown>

<rd-dropdown
  inline
  dropup
>
  <rd-button
    slot=&quot;button&quot;
    secondary
  >
    Split dropup
  </rd-button>
  <rd-button
    slot=&quot;button&quot;
    secondary
  >
    <span class=&quot;sr-only&quot;>
      Toggle Dropup
    </span>
  </rd-button>
  <a href=&quot;javascript:&quot;>
    Action
  </a>
  <a href=&quot;javascript:&quot;>
    Another action
  </a>
  <a href=&quot;javascript:&quot;>
    Something else here
  </a>
  <div class=&quot;dropdown-divider&quot; />
  <a href=&quot;javascript:&quot;>
    Separated link
  </a>
</rd-dropdown>"
    />


    <h3>
      Dropright
    </h3>
    <div class="p-3 border">
      <rd-dropdown
        dropright
        inline
      >
        <rd-button
          slot="button"
          secondary
        >
          Dropright
        </rd-button>
        <a href="javascript:">
          Action
        </a>
        <a href="javascript:">
          Another action
        </a>
        <a href="javascript:">
          Something else here
        </a>
        <div class="dropdown-divider" />
        <a href="javascript:">
          Separated link
        </a>
      </rd-dropdown>

      <rd-dropdown
        inline
        dropright
      >
        <rd-button
          slot="button"
          secondary
        >
          Split dropright
        </rd-button>
        <rd-button
          slot="button"
          secondary
        >
          <span class="sr-only">
            Toggle Dropright
          </span>
        </rd-button>
        <a href="javascript:">
          Action
        </a>
        <a href="javascript:">
          Another action
        </a>
        <a href="javascript:">
          Something else here
        </a>
        <div class="dropdown-divider" />
        <a href="javascript:">
          Separated link
        </a>
      </rd-dropdown>
    </div>
    <highlight
      code="<rd-dropdown
  dropright
  inline
>
  <rd-button
    slot=&quot;button&quot;
    secondary
  >
    Dropright
  </rd-button>
  <a href=&quot;javascript:&quot;>
    Action
  </a>
  <a href=&quot;javascript:&quot;>
    Another action
  </a>
  <a href=&quot;javascript:&quot;>
    Something else here
  </a>
  <div class=&quot;dropdown-divider&quot; />
  <a href=&quot;javascript:&quot;>
    Separated link
  </a>
</rd-dropdown>

<rd-dropdown
  inline
  dropright
>
  <rd-button
    slot=&quot;button&quot;
    secondary
  >
    Split dropright
  </rd-button>
  <rd-button
    slot=&quot;button&quot;
    secondary
  >
    <span class=&quot;sr-only&quot;>
      Toggle Dropright
    </span>
  </rd-button>
  <a href=&quot;javascript:&quot;>
    Action
  </a>
  <a href=&quot;javascript:&quot;>
    Another action
  </a>
  <a href=&quot;javascript:&quot;>
    Something else here
  </a>
  <div class=&quot;dropdown-divider&quot; />
  <a href=&quot;javascript:&quot;>
    Separated link
  </a>
</rd-dropdown>"
    />


    <h3>
      Dropleft
    </h3>
    <div class="p-3 border">
      <rd-dropdown
        dropleft
        inline
      >
        <rd-button
          slot="button"
          secondary
        >
          Dropleft
        </rd-button>
        <a href="javascript:">
          Action
        </a>
        <a href="javascript:">
          Another action
        </a>
        <a href="javascript:">
          Something else here
        </a>
        <div class="dropdown-divider" />
        <a href="javascript:">
          Separated link
        </a>
      </rd-dropdown>


      <rd-dropdown inline>
        <rd-dropdown
          slot="button"
          dropleft
          inline
        >
          <rd-button
            slot="button"
            secondary
          >
            <span class="sr-only">
              Toggle Dropright
            </span>
          </rd-button>
          <a href="javascript:">
            Action
          </a>
          <a href="javascript:">
            Another action
          </a>
          <a href="javascript:">
            Something else here
          </a>
          <div class="dropdown-divider" />
          <a href="javascript:">
            Separated link
          </a>
        </rd-dropdown>
        <rd-button
          slot="button"
          secondary
        >
          Split dropleft
        </rd-button>
      </rd-dropdown>
    </div>
    <highlight
      code="<rd-dropdown
        dropleft
        inline
      >
        <rd-button
          slot=&quot;button&quot;
          secondary
        >
          Dropleft
        </rd-button>
        <a href=&quot;javascript:&quot;>
          Action
        </a>
        <a href=&quot;javascript:&quot;>
          Another action
        </a>
        <a href=&quot;javascript:&quot;>
          Something else here
        </a>
        <div class=&quot;dropdown-divider&quot; />
        <a href=&quot;javascript:&quot;>
          Separated link
        </a>
      </rd-dropdown>


      <rd-dropdown inline>
        <rd-dropdown
          slot=&quot;button&quot;
          dropleft
          inline
        >
          <rd-button
            slot=&quot;button&quot;
            secondary
          >
            <span class=&quot;sr-only&quot;>
              Toggle Dropright
            </span>
          </rd-button>
          <a href=&quot;javascript:&quot;>
            Action
          </a>
          <a href=&quot;javascript:&quot;>
            Another action
          </a>
          <a href=&quot;javascript:&quot;>
            Something else here
          </a>
          <div class=&quot;dropdown-divider&quot; />
          <a href=&quot;javascript:&quot;>
            Separated link
          </a>
        </rd-dropdown>
        <rd-button
          slot=&quot;button&quot;
          secondary
        >
          Split dropleft
        </rd-button>
      </rd-dropdown>"
    />


    <h3>
      Menu items
    </h3>
    <div class="p-3 border">
      <rd-dropdown>
        <rd-button
          slot="button"
          secondary
        >
          Dropdown
        </rd-button>
        <button
          class="dropdown-item"
          type="button"
        >
          Action
        </button>
        <button
          class="dropdown-item"
          type="button"
        >
          Another action
        </button>
        <button
          class="dropdown-item"
          type="button"
        >
          Something else here
        </button>
      </rd-dropdown>
    </div>
    <highlight
      code="<rd-dropdown>
  <rd-button
    slot=&quot;button&quot;
    secondary
  >
    Dropdown
  </rd-button>
  <button
    class=&quot;dropdown-item&quot;
    type=&quot;button&quot;
  >
    Action
  </button>
  <button
    class=&quot;dropdown-item&quot;
    type=&quot;button&quot;
  >
    Another action
  </button>
  <button
    class=&quot;dropdown-item&quot;
    type=&quot;button&quot;
  >
    Something else here
  </button>
</rd-dropdown>"
    />


    <h3>
      Menu alignment
    </h3>
    <div class="p-3 border">
      <rd-dropdown alignright>
        <rd-button
          slot="button"
          secondary
        >
          Right-aligned menu
        </rd-button>
        <button
          class="dropdown-item"
          type="button"
        >
          Action
        </button>
        <button
          class="dropdown-item"
          type="button"
        >
          Another action
        </button>
        <button
          class="dropdown-item"
          type="button"
        >
          Something else here
        </button>
      </rd-dropdown>
    </div>
    <highlight
      code="<rd-dropdown alignright>
  <rd-button
    slot=&quot;button&quot;
    secondary
  >
    Right-aligned menu
  </rd-button>
  <button
    class=&quot;dropdown-item&quot;
    type=&quot;button&quot;
  >
    Action
  </button>
  <button
    class=&quot;dropdown-item&quot;
    type=&quot;button&quot;
  >
    Another action
  </button>
  <button
    class=&quot;dropdown-item&quot;
    type=&quot;button&quot;
  >
    Something else here
  </button>
</rd-dropdown>"
    />

    <h3>
      Menu content
    </h3>
    <h4>
      Headers
    </h4>
    <div class="p-3 border">
      <rd-dropdown>
        <rd-button
          slot="button"
          secondary
        >
          Header menu
        </rd-button>
        <h6 slot="header">
          Dropdown header
        </h6>
        <a href="javascript:">
          Action
        </a>
        <a href="javascript:">
          Another action
        </a>
      </rd-dropdown>
    </div>
    <highlight
      code="<rd-dropdown>
  <rd-button
    slot=&quot;button&quot;
    secondary
  >
    Header menu
  </rd-button>
  <h6 slot=&quot;header&quot;>
    Dropdown header
  </h6>
  <a href=&quot;javascript:&quot;>
    Action
  </a>
  <a href=&quot;javascript:&quot;>
    Another action
  </a>
</rd-dropdown>"
    />


    <h4>
      Text
    </h4>
    <div class="p-3 border">
      <rd-dropdown>
        <rd-button
          slot="button"
          secondary
        >
          Text menu
        </rd-button>
        <div class="p-4 text-muted">
          <p>Some example text that's free-flowing within the dropdown menu.</p>
          <p class="mb-0">
            And this is more example text.
          </p>
        </div>
      </rd-dropdown>
    </div>
    <highlight
      code="<rd-dropdown>
  <rd-button
    slot=&quot;button&quot;
    secondary
  >
    Text menu
  </rd-button>
  <div class=&quot;p-4 text-muted&quot;>
    <p>Some example text that's free-flowing within the dropdown menu.</p>
    <p class=&quot;mb-0&quot;>
      And this is more example text.
    </p>
  </div>
</rd-dropdown>"
    />


    <h4>
      Forms
    </h4>
    <div class="p-3 border">
      <rd-dropdown>
        <rd-button
          slot="button"
          secondary
        >
          Form menu
        </rd-button>
        <form class="px-4 py-3">
          <div class="form-group">
            <label for="exampleDropdownFormEmail1">
              Email address
            </label>
            <input
              id="exampleDropdownFormEmail1"
              type="email"
              class="form-control"
              placeholder="email@example.com"
            >
          </div>
          <div class="form-group">
            <label for="exampleDropdownFormPassword1">
              Password
            </label>
            <input
              id="exampleDropdownFormPassword1"
              type="password"
              class="form-control"
              placeholder="Password"
            >
          </div>
          <div class="form-check">
            <input
              id="dropdownCheck"
              type="checkbox"
              class="form-check-input"
            >
            <label
              class="form-check-label"
              for="dropdownCheck"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
          >
            Sign in
          </button>
        </form>
        <div class="dropdown-divider" />
        <a
          class="dropdown-item"
          href="javascript:"
        >
          New around here? Sign up
        </a>
        <a
          class="dropdown-item"
          href="javascript:"
        >
          Forgot password?
        </a>
      </rd-dropdown>
    </div>
    <highlight
      code="<rd-dropdown>
  <rd-button
    slot=&quot;button&quot;
    secondary
  >
    Form menu
  </rd-button>
  <form class=&quot;px-4 py-3&quot;>
    <div class=&quot;form-group&quot;>
      <label for=&quot;exampleDropdownFormEmail1&quot;>
        Email address
      </label>
      <input
        id=&quot;exampleDropdownFormEmail1&quot;
        type=&quot;email&quot;
        class=&quot;form-control&quot;
        placeholder=&quot;email@example.com&quot;
      >
    </div>
    <div class=&quot;form-group&quot;>
      <label for=&quot;exampleDropdownFormPassword1&quot;>
        Password
      </label>
      <input
        id=&quot;exampleDropdownFormPassword1&quot;
        type=&quot;password&quot;
        class=&quot;form-control&quot;
        placeholder=&quot;Password&quot;
      >
    </div>
    <div class=&quot;form-check&quot;>
      <input
        id=&quot;dropdownCheck&quot;
        type=&quot;checkbox&quot;
        class=&quot;form-check-input&quot;
      >
      <label
        class=&quot;form-check-label&quot;
        for=&quot;dropdownCheck&quot;
      >
        Remember me
      </label>
    </div>
    <button
      type=&quot;submit&quot;
      class=&quot;btn btn-primary&quot;
    >
      Sign in
    </button>
  </form>
  <div class=&quot;dropdown-divider&quot; />
  <a
    class=&quot;dropdown-item&quot;
    href=&quot;javascript:&quot;
  >
    New around here? Sign up
  </a>
  <a
    class=&quot;dropdown-item&quot;
    href=&quot;javascript:&quot;
  >
    Forgot password?
  </a>
</rd-dropdown>"
    />
    <h3>Props</h3>
    추가로 <nuxt-link to="/mixins/semantic">
      Semantic
    </nuxt-link> 속성을 쓸 수 있습니다.
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th style="width:100px;">
            속성
          </th>
          <th>
            설명
          </th>
          <th style="width:80px;">
            타입
          </th>
          <th style="width:80px;">
            기본값
          </th>
          <th style="width: 200px">
            사용 가능한 값
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row,idx) of props"
          :key="idx"
        >
          <td
            v-for="(col,idx2) of row"
            :key="idx2"
          >
            {{ col }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Dropdown',
  data() {
    return {
      props: [
        ['tag', '렌더링 될 HTML 엘리먼트의 태그', 'String', 'div', 'div ...'],
        ['inline', 'inline으로 표시. Split 버튼일 경우 필수', 'Boolean', 'false', ''],
        ['dropright', '오른쪽으로 나옵니다.', 'Boolean', 'false', ''],
        ['dropleft', '왼쪽으로 나옵니다.', 'Boolean', 'false', ''],
        ['dropup', '위로 나옵니다.', 'Boolean', 'false', ''],
        ['alignright', '메뉴가 오른쪽으로 붙게 됩니다.', 'Boolean', 'false', ''],
      ]
    };
  }
};
</script>
