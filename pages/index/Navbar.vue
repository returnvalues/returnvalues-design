<template>
  <div>
    Navbar
    <rd-navbar class="navbar navbar-expand-lg navbar-light bg-light">
      <a
        class="navbar-brand"
        href="#"
      >
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarNav"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a
              class="nav-link"
              href="#"
            >
              Home <span class="sr-only">
                (current)
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >
              Features
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </rd-navbar>
  </div>
</template>

<script>
import { RdNavbar } from '~/src';


export default {
  name: 'Navbar',
  components: { RdNavbar }
};
</script>

<style scoped>

</style>
