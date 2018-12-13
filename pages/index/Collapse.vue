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
  </div>
</template>

<script>
import { RdCollapse, RdButton } from '~/src';

export default {
  name: 'Collapse',
  components: { RdCollapse, RdButton },
};
</script>

<style scoped>

</style>
