<template>
  <div>
    Navbar
    <rd-navbar
      class="bg-light"
      lg
      light
    >
      <rd-navbar-brand
        href="javascript:"
      >
        Navbar
      </rd-navbar-brand>
      <rd-navbar-text>
        short
      </rd-navbar-text>
      <rd-navbar-toggler />
      <rd-navbar-collapse>
        <rd-nav>
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
          <a
            class=" disabled"
            href="javascript:"
          >
            Disabled
          </a>
        </rd-nav>
        <form class="form-inline my-2 my-lg-0">
          <rd-input
            class="mr-sm-2"
            type="search"
          />
          <rd-button
            outline-success
            class="my-2 my-sm-0"
            type="submit"
          >
            Search
          </rd-button>
        </form>
      </rd-navbar-collapse>
    </rd-navbar>
  </div>
</template>

<script>
import {
  RdNavbar, RdNavbarBrand,
  RdNavbarToggler,
  RdNavbarCollapse,
  RdNavbarText,
  RdNav, RdInput
} from '~/src';
import RdButton from '../../src/RdButton';


export default {
  name: 'Navbar',
  components: {
    RdButton,
    RdNav,
    RdNavbarCollapse,
    RdNavbarToggler,
    RdNavbarBrand,
    RdNavbarText,
    RdNavbar,
    RdInput,
  }
};
</script>

<style scoped>

</style>
