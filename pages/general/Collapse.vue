<template>
  <div>
    <h1>Collapse</h1>
    <p
      class="bd-lead"
    >
      The Collapse element shows and hides content with a built-in slide in/out animation. You might use this to create a panel of settings for your application, with sub-sections that can be expanded and collapsed.
    </p>
    <h2>Example</h2>
    <example>
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
    </example>
    <highlight
      code="<rd-button
  primary
  tag=&quot;a&quot;
  href=&quot;javascript:&quot;
  @click.native=&quot;test=!test&quot;
>
  Link with href
</rd-button>
<rd-button
  primary
  type=&quot;button&quot;
  @click.native=&quot;$refs.collapse1.toggle()&quot;
>
  Button with data-target
</rd-button>
</p>
<rd-collapse
ref=&quot;collapse1&quot;
v-model=&quot;test&quot;
>
<div class=&quot;card card-body&quot;>
  Anim pariatur cliche reprehenderit,
  enim eiusmod high life accusamus terry richardson ad squid.
  Nihil anim keffiyeh helvetica,
  craft beer labore wes anderson cred nesciunt sapiente ea proident.
</div>
</rd-collapse>
"
    />
    <h3>Multiple targets</h3>
    <example>
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
            class="multi-collapse"
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
            class="multi-collapse"
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
    </example>
    <highlight
      code="<p>
  <rd-button
    tag=&quot;a&quot;
    primary
    href=&quot;javascript:&quot;
    @click.native=&quot;$refs.collapse2.toggle()&quot;
  >
    Toggle first element
  </rd-button>
  <rd-button
    primary
    type=&quot;button&quot;
    @click.native=&quot;$refs.collapse3.toggle()&quot;
  >
    Toggle second element
  </rd-button>
  <rd-button
    primary
    type=&quot;button&quot;
    @click.native=&quot;$refs.collapse2.toggle()&&$refs.collapse3.toggle()&quot;
  >
    Toggle both elements
  </rd-button>
</p>
<div class=&quot;row&quot;>
  <div class=&quot;col&quot;>
    <rd-collapse
      ref=&quot;collapse2&quot;
      class=&quot; multi-collapse&quot;
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
  <div class=&quot;col&quot;>
    <rd-collapse
      ref=&quot;collapse3&quot;
      class=&quot; multi-collapse&quot;
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
</div>"
    />

    <h3>Accordion example</h3>
    <example>
      <div
        id="accordionExample"
        class="accordion"
      >
        <rd-card>
          <rd-card-header id="headingOne">
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
              you probably havent heard of them accusamus labore sustainable VHS.
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
              you probably havent heard of them accusamus labore sustainable VHS.
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
              you probably havent heard of them accusamus labore sustainable VHS.
            </rd-card-body>
          </rd-collapse>
        </rd-card>
      </div>
    </example>
    <highlight
      code="<div
  id=&quot;accordionExample&quot;
  class=&quot;accordion&quot;
>
  <rd-card>
    <rd-card-header
      id=&quot;headingOne&quot;
    >
      <h5 class=&quot;mb-0&quot;>
        <rd-button
          link
          type=&quot;button&quot;
          @click.native=&quot;accordion=1&quot;
        >
          Collapsible Group Item #1
        </rd-button>
      </h5>
    </rd-card-header>

    <rd-collapse
      :show=&quot;accordion===1&quot;
      @change=&quot;v=>v&&(accordion=1)&quot;
    >
      <rd-card-body>
        ...
      </rd-card-body>
    </rd-collapse>
  </rd-card>
  <rd-card>
    <rd-card-header>
      <h5 class=&quot;mb-0&quot;>
        <rd-button
          link
          type=&quot;button&quot;
          @click.native=&quot;accordion=2&quot;
        >
          Collapsible Group Item #2
        </rd-button>
      </h5>
    </rd-card-header>
    <rd-collapse
      :show=&quot;accordion===2&quot;
      @change=&quot;v=>v&&(accordion=2)&quot;
    >
      <rd-card-body>
        ...
      </rd-card-body>
    </rd-collapse>
  </rd-card>
  <rd-card>
    <rd-card-header>
      <h5 class=&quot;mb-0&quot;>
        <rd-button
          link
          type=&quot;button&quot;
          @click.native=&quot;accordion=3&quot;
        >
          Collapsible Group Item #3
        </rd-button>
      </h5>
    </rd-card-header>
    <rd-collapse
      :show=&quot;accordion===3&quot;
      @change=&quot;v=>v&&(accordion=3)&quot;
    >
      <rd-card-body>
        ...
      </rd-card-body>
    </rd-collapse>
  </rd-card>
</div>"
    />

    <h2>Props</h2>
    <properties
      type="props"
      :data="props"
    />
    <h2>Methods</h2>
    <properties
      type="methods"
      :data="methods"
    />
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  data() {
    return {
      accordion: 1,
      test: false,
      props: [['show', 'v-model', 'Boolean', 'false', '']],
      methods: [
        [
          'toggle',
          '{Boolean} show',
          'To show Toggles or hide.(optional)',
          'Returns to the caller before the collapsible element has actually been shown or hidden true/false'
        ]
      ]
    };
  }
};
</script>
