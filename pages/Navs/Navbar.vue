<template>
  <div>
    <h1>Navbar</h1>
    <p class="bd-lead">
      부트스트랩의 강력하고 반응형 네비게이션 헤더 인 navbar에 대한 문서와 예제. 컬랩스 플러그인에 대한 지원을 포함하여 브랜딩, 네비게이션 등을 포함 합니다.
    </p>
    <h2>Example</h2>

    <div class="p-3 border">
      <rd-navbar
        lg
        light
        class="bg-light"
      >
        <rd-navbar-brand href="javascript:">
          Navbar
        </rd-navbar-brand>
        <rd-navbar-toggler @click.native="$refs.collapse1.toggle()" />

        <rd-collapse ref="collapse1">
          <rd-nav class="mr-auto">
            <a
              class="nav-lik"
              href="javascript:"
            >
              Home <span class="sr-only">
                (current)
              </span>
            </a>
            <a
              class="nav-link"
              href="javascript:"
            >
              Link
            </a>
            <rd-dropdown>
              <a
                slot="button"
                href="javascript:"
              >
                Dropdown
              </a>
              <a href="javascript:">
                Action
              </a>
              <a href="javascript:">
                Another action
              </a>
              <div class="dropdown-divider" />
              <a href="javascript:">
                Something else here
              </a>
            </rd-dropdown>
            <a
              class="disabled"
              href="javascript:"
            >
              Disabled
            </a>
          </rd-nav>
          <form class="form-inline my-2 my-lg-0">
            <rd-input
              class="mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <rd-button
              outline-success
              class="my-2 my-sm-0"
              type="submit"
            >
              Search
            </rd-button>
          </form>
        </rd-collapse>
      </rd-navbar>
    </div>
    <highlight
      code="<rd-navbar
  lg
  light
  class=&quot;bg-light&quot;
>
  <rd-navbar-brand href=&quot;javascript:&quot;>
    Navbar
  </rd-navbar-brand>
  <rd-navbar-toggler @click.native=&quot;$refs.collapse1.toggle()&quot; />

  <rd-collapse ref=&quot;collapse1&quot;>
    <rd-nav class=&quot;mr-auto&quot;>
      <a
        class=&quot;nav-lik&quot;
        href=&quot;javascript:&quot;
      >
        Home <span class=&quot;sr-only&quot;>
          (current)
        </span>
      </a>
      <a
        class=&quot;nav-link&quot;
        href=&quot;javascript:&quot;
      >
        Link
      </a>
      <rd-dropdown>
        <a
          slot=&quot;button&quot;
          href=&quot;javascript:&quot;
        >
          Dropdown
        </a>
        <a href=&quot;javascript:&quot;>
          Action
        </a>
        <a href=&quot;javascript:&quot;>
          Another action
        </a>
        <div class=&quot;dropdown-divider&quot; />
        <a href=&quot;javascript:&quot;>
          Something else here
        </a>
      </rd-dropdown>
      <a
        class=&quot;disabled&quot;
        href=&quot;javascript:&quot;
      >
        Disabled
      </a>
    </rd-nav>
    <form class=&quot;form-inline my-2 my-lg-0&quot;>
      <rd-input
        class=&quot;mr-sm-2&quot;
        type=&quot;search&quot;
        placeholder=&quot;Search&quot;
      />
      <rd-button
        outline-success
        class=&quot;my-2 my-sm-0&quot;
        type=&quot;submit&quot;
      >
        Search
      </rd-button>
    </form>
  </rd-collapse>
</rd-navbar>"
    />
    <h3>Brand</h3>
    <div class="p-3 border">
      <rd-navbar
        light
        class="bg-light"
      >
        <rd-navbar-brand
          href="javascript:"
        >
          Navbar
        </rd-navbar-brand>
      </rd-navbar>
      <rd-navbar
        light
        class="bg-light mt-3"
      >
        <rd-navbar-brand class="mb-0 h1">
          Navbar
        </rd-navbar-brand>
      </rd-navbar>
    </div>
    <highlight
      code="<rd-navbar
  light
  class=&quot;bg-light&quot;
>
  <rd-navbar-brand
    href=&quot;javascript:&quot;
  >
    Navbar
  </rd-navbar-brand>
</rd-navbar>
<rd-navbar
  light
  class=&quot;bg-light mt-3&quot;
>
  <rd-navbar-brand class=&quot;mb-0 h1&quot;>
    Navbar
  </rd-navbar-brand>
</rd-navbar>"
    />

    <h3>Nav</h3>
    <div class="p-3 border">
      <rd-navbar
        lg
        light
        class="bg-light"
      >
        <rd-navbar-brand
          href="javascript:"
        >
          Navbar
        </rd-navbar-brand>
        <rd-navbar-toggler @click.native="$refs.collapse2.toggle()" />

        <rd-collapse ref="collapse2">
          <rd-nav>
            <a
              class="active"
              href="javascript:"
            >
              Home
            </a>
            <a
              href="javascript:"
            >
              Features
            </a>
            <a
              href="javascript:"
            >
              Pricing
            </a>
            <a
              class="disabled"
              href="javascript:"
            >
              Disabled
            </a>
          </rd-nav>
        </rd-collapse>
      </rd-navbar>
    </div>
    <highlight
      code="<rd-navbar
  lg
  light
  class=&quot;bg-light&quot;
>
  <rd-navbar-brand
    href=&quot;javascript:&quot;
  >
    Navbar
  </rd-navbar-brand>
  <rd-navbar-toggler @click.native=&quot;$refs.collapse2.toggle()&quot; />

  <rd-collapse ref=&quot;collapse2&quot;>
    <rd-nav>
      <a
        class=&quot;active&quot;
        href=&quot;javascript:&quot;
      >
        Home
      </a>
      <a
        href=&quot;javascript:&quot;
      >
        Features
      </a>
      <a
        href=&quot;javascript:&quot;
      >
        Pricing
      </a>
      <a
        class=&quot;disabled&quot;
        href=&quot;javascript:&quot;
      >
        Disabled
      </a>
    </rd-nav>
  </rd-collapse>
</rd-navbar>"
    />
    <div class="p-3 border">
      <rd-navbar
        lg
        light
        class="bg-light"
      >
        <rd-navbar-brand
          href="javascript:"
        >
          Navbar
        </rd-navbar-brand>
        <rd-navbar-toggler @click.native="$refs.collapse3.toggle()" />

        <rd-collapse ref="collapse3">
          <rd-nav>
            <a
              class="active"
              href="javascript:"
            >
              Home
            </a>
            <a
              href="javascript:"
            >
              Features
            </a>
            <a
              href="javascript:"
            >
              Pricing
            </a>
            <a
              class="disabled"
              href="javascript:"
            >
              Disabled
            </a>
          </rd-nav>
        </rd-collapse>
      </rd-navbar>
    </div>
    <highlight
      code="<rd-navbar
  lg
  light
  class=&quot;bg-light&quot;
>
  <rd-navbar-brand
    href=&quot;javascript:&quot;
  >
    Navbar
  </rd-navbar-brand>
  <rd-navbar-toggler @click.native=&quot;$refs.collapse3.toggle()&quot; />

  <rd-collapse ref=&quot;collapse3&quot;>
    <rd-nav>
      <a
        class=&quot;active&quot;
        href=&quot;javascript:&quot;
      >
        Home
      </a>
      <a
        href=&quot;javascript:&quot;
      >
        Features
      </a>
      <a
        href=&quot;javascript:&quot;
      >
        Pricing
      </a>
      <a
        class=&quot;disabled&quot;
        href=&quot;javascript:&quot;
      >
        Disabled
      </a>
    </rd-nav>
  </rd-collapse>
</rd-navbar>"
    />
    <div class="p-3 border">
      <rd-navbar
        lg
        light
        class="bg-light"
      >
        <rd-navbar-brand
          href="javascript:"
        >
          Navbar
        </rd-navbar-brand>
        <rd-navbar-toggler @click.native="$refs.collapse4.toggle()" />

        <rd-collapse ref="collapse4">
          <rd-nav>
            <a
              class="active"
              href="javascript:"
            >
              Home
            </a>
            <a
              href="javascript:"
            >
              Features
            </a>

            <a
              href="javascript:"
            >
              Pricing
            </a>
            <rd-dropdown>
              <a
                slot="button"
                href="javascript:"
              >
                Dropdown link
              </a>
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
          </rd-nav>
        </rd-collapse>
      </rd-navbar>
    </div>
    <highlight
      code="<rd-navbar
  lg
  light
  class=&quot;bg-light&quot;
>
  <rd-navbar-brand
    href=&quot;javascript:&quot;
  >
    Navbar
  </rd-navbar-brand>
  <rd-navbar-toggler @click.native=&quot;$refs.collapse4.toggle()&quot; />

  <rd-collapse ref=&quot;collapse4&quot;>
    <rd-nav>
      <a
        class=&quot;active&quot;
        href=&quot;javascript:&quot;
      >
        Home
      </a>
      <a
        href=&quot;javascript:&quot;
      >
        Features
      </a>

      <a
        href=&quot;javascript:&quot;
      >
        Pricing
      </a>
      <rd-dropdown>
        <a
          slot=&quot;button&quot;
          href=&quot;javascript:&quot;
        >
          Dropdown link
        </a>
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
    </rd-nav>
  </rd-collapse>
</rd-navbar>"
    />

    <h3>Forms</h3>
    <div class="p-3 border">
      <rd-navbar
        light
        class="bg-light"
      >
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          >
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </rd-navbar>
    </div>
    <highlight
      code="<rd-navbar
  light
  class=&quot;bg-light&quot;
>
  <form class=&quot;form-inline&quot;>
    <input
      class=&quot;form-control mr-sm-2&quot;
      type=&quot;search&quot;
      placeholder=&quot;Search&quot;
      aria-label=&quot;Search&quot;
    >
    <button
      class=&quot;btn btn-outline-success my-2 my-sm-0&quot;
      type=&quot;submit&quot;
    >
      Search
    </button>
  </form>
</rd-navbar>"
    />
    <div class="p-3 border">
      <rd-navbar
        light
        class="bg-light"
      >
        <rd-navbar-brand>
          Navbar
        </rd-navbar-brand>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          >
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </rd-navbar>
    </div>
    <highlight
      code="<rd-navbar
  light
  class=&quot;bg-light&quot;
>
  <rd-navbar-brand>
    Navbar
  </rd-navbar-brand>
  <form class=&quot;form-inline&quot;>
    <input
      class=&quot;form-control mr-sm-2&quot;
      type=&quot;search&quot;
      placeholder=&quot;Search&quot;
      aria-label=&quot;Search&quot;
    >
    <button
      class=&quot;btn btn-outline-success my-2 my-sm-0&quot;
      type=&quot;submit&quot;
    >
      Search
    </button>
  </form>
</rd-navbar>"
    />
    <div class="p-3 border">
      <rd-navbar
        light
        class="bg-light"
      >
        <form class="form-inline">
          <div class="input-group">
            <div class="input-group-prepend">
              <span
                id="basic-addon1"
                class="input-group-text"
              >
                @
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            >
          </div>
        </form>
      </rd-navbar>
    </div>
    <highlight
      code="<rd-navbar
  light
  class=&quot;bg-light&quot;
>
  <form class=&quot;form-inline&quot;>
    <div class=&quot;input-group&quot;>
      <div class=&quot;input-group-prepend&quot;>
        <span
          id=&quot;basic-addon1&quot;
          class=&quot;input-group-text&quot;
        >
          @
        </span>
      </div>
      <input
        type=&quot;text&quot;
        class=&quot;form-control&quot;
        placeholder=&quot;Username&quot;
        aria-label=&quot;Username&quot;
        aria-describedby=&quot;basic-addon1&quot;
      >
    </div>
  </form>
</rd-navbar>"
    />
    <div class="p-3 border">
      <rd-navbar
        light
        class="bg-light"
      >
        <form class="form-inline">
          <button
            class="btn btn-outline-success"
            type="button"
          >
            Main button
          </button>
          <button
            class="btn btn-sm btn-outline-secondary"
            type="button"
          >
            Smaller button
          </button>
        </form>
      </rd-navbar>
    </div>
    <highlight
      code="<rd-navbar
  light
  class=&quot;bg-light&quot;
>
  <form class=&quot;form-inline&quot;>
    <button
      class=&quot;btn btn-outline-success&quot;
      type=&quot;button&quot;
    >
      Main button
    </button>
    <button
      class=&quot;btn btn-sm btn-outline-secondary&quot;
      type=&quot;button&quot;
    >
      Smaller button
    </button>
  </form>
</rd-navbar>"
    />

    <h3>Text</h3>
    <div class="p-3 border">
      <rd-navbar
        light
        class="bg-light"
      >
        <rd-navbar-text>
          Navbar text with an inline element
        </rd-navbar-text>
      </rd-navbar>
    </div>
    <highlight
      code="<rd-navbar
  light
  class=&quot;bg-light&quot;
>
  <rd-navbar-text>
    Navbar text with an inline element
  </rd-navbar-text>
</rd-navbar>"
    />
    <div class="p-3 border">
      <rd-navbar
        lg
        light
        class="bg-light"
      >
        <rd-navbar-brand
          href="javascript:"
        >
          Navbar w/ text
        </rd-navbar-brand>
        <rd-navbar-toggler @click.native="$refs.collapse5.toggle()" />

        <rd-collapse ref="collapse5">
          <rd-nav class="mr-auto">
            <a
              class="active"
              href="javascript:"
            >
              Home <span class="sr-only">
                (current)
              </span>
            </a>
            <a
              href="javascript:"
            >
              Features
            </a>
            <a
              href="javascript:"
            >
              Pricing
            </a>
          </rd-nav>
          <rd-navbar-text>
            Navbar text with an inline element
          </rd-navbar-text>
        </rd-collapse>
      </rd-navbar>
    </div>
    <highlight
      code="<rd-navbar
  lg
  light
  class=&quot;bg-light&quot;
>
  <rd-navbar-brand
    href=&quot;javascript:&quot;
  >
    Navbar w/ text
  </rd-navbar-brand>
  <rd-navbar-toggler @click.native=&quot;$refs.collapse5.toggle()&quot; />

  <rd-collapse ref=&quot;collapse5&quot;>
    <rd-nav class=&quot;mr-auto&quot;>
      <a
        class=&quot;active&quot;
        href=&quot;javascript:&quot;
      >
        Home <span class=&quot;sr-only&quot;>
          (current)
        </span>
      </a>
      <a
        href=&quot;javascript:&quot;
      >
        Features
      </a>
      <a
        href=&quot;javascript:&quot;
      >
        Pricing
      </a>
    </rd-nav>
    <rd-navbar-text>
      Navbar text with an inline element
    </rd-navbar-text>
  </rd-collapse>
</rd-navbar>"
    />


    <h3>
      Color schemes
    </h3>
    <div class="p-3 border">
      <rd-navbar
        dark
        class="bg-dark"
      >
        <rd-nav>
          <a
            class="active"
            href="javascript:"
          >
            Home
          </a>
          <a
            href="javascript:"
          >
            Features
          </a>
          <a
            href="javascript:"
          >
            Pricing
          </a>
          <a
            class="disabled"
            href="javascript:"
          >
            Disabled
          </a>
        </rd-nav>
      </rd-navbar>

      <rd-navbar
        dark
        class="bg-primary mt-3"
      >
        <rd-nav>
          <a
            class="active"
            href="javascript:"
          >
            Home
          </a>
          <a
            href="javascript:"
          >
            Features
          </a>
          <a
            href="javascript:"
          >
            Pricing
          </a>
          <a
            class="disabled"
            href="javascript:"
          >
            Disabled
          </a>
        </rd-nav>
      </rd-navbar>
      <rd-navbar
        light
        class="mt-3"
        style="background-color: #e3f2fd;"
      >
        <rd-nav>
          <a
            class="active"
            href="javascript:"
          >
            Home
          </a>
          <a
            href="javascript:"
          >
            Features
          </a>
          <a
            href="javascript:"
          >
            Pricing
          </a>
          <a
            class="disabled"
            href="javascript:"
          >
            Disabled
          </a>
        </rd-nav>
      </rd-navbar>
    </div>
    <highlight
      code="<rd-navbar
  dark
  class=&quot;bg-dark&quot;
>
  <rd-nav>
    <a
      class=&quot;active&quot;
      href=&quot;javascript:&quot;
    >
      Home
    </a>
    <a
      href=&quot;javascript:&quot;
    >
      Features
    </a>
    <a
      href=&quot;javascript:&quot;
    >
      Pricing
    </a>
    <a
      class=&quot;disabled&quot;
      href=&quot;javascript:&quot;
    >
      Disabled
    </a>
  </rd-nav>
</rd-navbar>

<rd-navbar
  dark
  class=&quot;bg-primary mt-3&quot;
>
  <rd-nav>
    <a
      class=&quot;active&quot;
      href=&quot;javascript:&quot;
    >
      Home
    </a>
    <a
      href=&quot;javascript:&quot;
    >
      Features
    </a>
    <a
      href=&quot;javascript:&quot;
    >
      Pricing
    </a>
    <a
      class=&quot;disabled&quot;
      href=&quot;javascript:&quot;
    >
      Disabled
    </a>
  </rd-nav>
</rd-navbar>
<rd-navbar
  light
  class=&quot;mt-3&quot;
  style=&quot;background-color: #e3f2fd;&quot;
>
  <rd-nav>
    <a
      class=&quot;active&quot;
      href=&quot;javascript:&quot;
    >
      Home
    </a>
    <a
      href=&quot;javascript:&quot;
    >
      Features
    </a>
    <a
      href=&quot;javascript:&quot;
    >
      Pricing
    </a>
    <a
      class=&quot;disabled&quot;
      href=&quot;javascript:&quot;
    >
      Disabled
    </a>
  </rd-nav>
</rd-navbar>"
    />

    <h3>RdNavbar</h3>
    <h4>Props</h4>
    <nuxt-link to="/mixins/semantic">
      Semantic
    </nuxt-link>, <nuxt-link to="/mixins/size">
      Size
    </nuxt-link> 속성을 쓸 수 있습니다.
    <h3>RdNavbarBrand</h3>
    <h4>Props</h4>
    <properties
      type="props"
      :data="propsBrand"
    />
    <h3>RdNavbarText</h3>
    <h4>Props</h4>
    <properties
      type="props"
      :data="propsText"
    />
  </div>
</template>

<script>
// TODO: InputGroup 페이지 작성 후에 여기 form 수정하기

export default {
  name: 'Navbar',
  data() {
    return {
      propsText: [
        ['tag', '렌더링 될 HTML 엘리먼트의 태그', 'String', 'span', 'span, a ...'],
      ],
      propsBrand: [
        ['tag', '렌더링 될 HTML 엘리먼트의 태그', 'String', 'a', 'span, a ...'],
      ],
    };
  }
};
</script>
