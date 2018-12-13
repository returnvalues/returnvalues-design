<template>
  <div>
    Collapse
    <p>
      <rd-button
        primary
        tag="a"
        href="javascript:"
        @click.native="$refs.collapse1.toggle()"
      >
        Link with href
      </rd-button>
      <rd-button
        primary
        type="button"
        @click.native="$refs.collapse1.toggle()"
      >
        Button with data-target
      </rd-button>
    </p>
    <rd-collapse ref="collapse1">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit,
        enim eiusmod high life accusamus terry richardson ad squid.
        Nihil anim keffiyeh helvetica,
        craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </rd-collapse>

    Multiple targets
    <p>
      <rd-button
        tag="a"
        primary
        href="javascript:"
        @click.native="$refs.collapse2.toggle()"
      >
        Toggle first element
      </rd-button>
      <rd-button
        primary
        type="button"
        @click.native="$refs.collapse3.toggle()"
      >
        Toggle second element
      </rd-button>
      <rd-button
        primary
        type="button"
        @click.native="$refs.collapse2.toggle()&&$refs.collapse3.toggle()"
      >
        Toggle both elements
      </rd-button>
    </p>
    <div class="row">
      <div class="col">
        <rd-collapse
          ref="collapse2"
          class=" multi-collapse"
        >
          <div class="card card-body">
            Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica,
            craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </rd-collapse>
      </div>
      <div class="col">
        <rd-collapse
          ref="collapse3"
          class=" multi-collapse"
        >
          <div class="card card-body">
            Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica,
            craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </rd-collapse>
      </div>
    </div>
    Accordion example
    <div
      id="accordionExample"
      class="accordion"
    >
      <rd-card>
        <div
          slot="header"
        >
          <h5 class="mb-0">
            <rd-button
              link
              type="button"
            >
              Collapsible Group Item #1
            </rd-button>
          </h5>
        </div>

        <rd-collapse slot="bodyTop">
          Anim pariatur cliche reprehenderit,
          enim eiusmod high life accusamus terry richardson ad squid.
          Nihil anim keffiyeh helvetica,
          craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </rd-collapse>
      </rd-card>
      <div class="card">
        <div
          id="headingTwo"
          class="card-header"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Collapsible Group Item #2
            </button>
          </h5>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica,
            craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
      <div class="card">
        <div
          id="headingThree"
          class="card-header"
        >
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Collapsible Group Item #3
            </button>
          </h5>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica,
            craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RdCollapse, RdButton, RdCard } from '~/src';

export default {
  name: 'Collapse',
  components: { RdCollapse, RdButton, RdCard },
};
</script>

<style scoped>

</style>
