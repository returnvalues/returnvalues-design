<template>
  <div>
    Collapse
    <p>
      <rd-button
        primary
        tag="a"
        href="javascript:"
        @click.native="test=!test"
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
    <rd-collapse
      ref="collapse1"
      v-model="test"
    >
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
          <rd-card>
            <rd-card-body>
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica,
              craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </rd-card-body>
          </rd-card>
        </rd-collapse>
      </div>
      <div class="col">
        <rd-collapse
          ref="collapse3"
          class=" multi-collapse"
        >
          <rd-card>
            <rd-card-body>
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica,
              craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </rd-card-body>
          </rd-card>
        </rd-collapse>
      </div>
    </div>
    Accordion example
    <div
      id="accordionExample"
      class="accordion"
    >
      <rd-card>
        <rd-card-header
          id="headingOne"
        >
          <h5 class="mb-0">
            <rd-button
              link
              type="button"
              @click.native="accordion=1"
            >
              Collapsible Group Item #1
            </rd-button>
          </h5>
        </rd-card-header>

        <rd-collapse
          :show="accordion===1"
          @change="v=>v&&(accordion=1)"
        >
          <rd-card-body>
            Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad squid.
            3 wolf moon officia aute,
            non cupidatat skateboard dolor brunch.
            Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor,
            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica,
            craft beer labore wes anderson cred nesciunt sapiente ea proident.
            Ad vegan excepteur butcher vice lomo.
            Leggings occaecat craft beer farm-to-table,
            raw denim aesthetic synth nesciunt
            you probably haven't heard of them accusamus labore sustainable VHS.
          </rd-card-body>
        </rd-collapse>
      </rd-card>
      <rd-card>
        <rd-card-header>
          <h5 class="mb-0">
            <rd-button
              link
              type="button"
              @click.native="accordion=2"
            >
              Collapsible Group Item #2
            </rd-button>
          </h5>
        </rd-card-header>
        <rd-collapse
          :show="accordion===2"
          @change="v=>v&&(accordion=2)"
        >
          <rd-card-body>
            Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad squid.
            3 wolf moon officia aute,
            non cupidatat skateboard dolor brunch.
            Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor,
            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica,
            craft beer labore wes anderson cred nesciunt sapiente ea proident.
            Ad vegan excepteur butcher vice lomo.
            Leggings occaecat craft beer farm-to-table,
            raw denim aesthetic synth nesciunt
            you probably haven't heard of them accusamus labore sustainable VHS.
          </rd-card-body>
        </rd-collapse>
      </rd-card>
      <rd-card>
        <rd-card-header>
          <h5 class="mb-0">
            <rd-button
              link
              type="button"
              @click.native="accordion=3"
            >
              Collapsible Group Item #3
            </rd-button>
          </h5>
        </rd-card-header>
        <rd-collapse
          :show="accordion===3"
          @change="v=>v&&(accordion=3)"
        >
          <rd-card-body>
            Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad squid.
            3 wolf moon officia aute,
            non cupidatat skateboard dolor brunch.
            Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor,
            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica,
            craft beer labore wes anderson cred nesciunt sapiente ea proident.
            Ad vegan excepteur butcher vice lomo.
            Leggings occaecat craft beer farm-to-table,
            raw denim aesthetic synth nesciunt
            you probably haven't heard of them accusamus labore sustainable VHS.
          </rd-card-body>
        </rd-collapse>
      </rd-card>
    </div>
  </div>
</template>

<script>
import {
  RdCollapse,
  RdButton,
  RdCard,
  RdCardHeader,
  RdCardBody
} from '~/src';

export default {
  name: 'Collapse',
  components: {
    RdCardBody,
    RdCollapse,
    RdButton,
    RdCard,
    RdCardHeader,
  },
  data() {
    return { accordion: 1, test: false };
  },
};
</script>

<style scoped>

</style>
