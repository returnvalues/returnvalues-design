<template>
  <div>
    <h1>Card</h1>
    <div class="border p-3">
      <rd-card style="width: 18rem;">
        <img
          slot="top"
          src="https://dummyimage.com/180x100/000/fff"
        >
        <rd-card-body>
          <h5 slot="title">
            Card title
          </h5>
          <p class="aaa">
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
          <rd-button
            tag="a"
            href="javascript:"
            primary
          >
            Go somewhere
          </rd-button>
        </rd-card-body>
      </rd-card>
    </div>
    <highlight
      code="<rd-card style=&quot;width: 18rem;&quot;>
  <img
    slot=&quot;top&quot;
    src=&quot;https://dummyimage.com/180x100/000/fff&quot;
  >
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Card title
    </h5>
    <p class=&quot;aaa&quot;>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
    <rd-button
      tag=&quot;a&quot;
      href=&quot;javascript:&quot;
      primary
    >
      Go somewhere
    </rd-button>
  </rd-card-body>
</rd-card>"
    />
    <h2>Body</h2>
    <div class="border p-3">
      <rd-card>
        <rd-card-body>
          This is some text within a card body.
        </rd-card-body>
      </rd-card>
    </div>
    <highlight
      code="<rd-card>
  <rd-card-body>
    This is some text within a card body.
  </rd-card-body>
</rd-card>"
    />
    <h2>Titles, text, and links</h2>
    <div class="border p-3">
      <rd-card style="width: 18rem;">
        <rd-card-body>
          <h5 slot="title">
            Card title
          </h5>
          <h6
            slot="subtitle"
            class="mb-2 text-muted"
          >
            Card subtitle
          </h6>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
          <a
            slot="link"
            href="javascript"
          >
            Card link
          </a>
          <a
            slot="link"
            href="javascript"
          >
            Another link
          </a>
        </rd-card-body>
      </rd-card>
    </div>
    <highlight
      code="<rd-card style=&quot;width: 18rem;&quot;>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Card title
    </h5>
    <h6
      slot=&quot;subtitle&quot;
      class=&quot;mb-2 text-muted&quot;
    >
      Card subtitle
    </h6>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
    <a
      slot=&quot;link&quot;
      href=&quot;javascript&quot;
    >
      Card link
    </a>
    <a
      slot=&quot;link&quot;
      href=&quot;javascript&quot;
    >
      Another link
    </a>
  </rd-card-body>
</rd-card>"
    />
    <h2>Images</h2>
    <div class="border p-3">
      <rd-card style="width: 18rem;">
        <img
          slot="top"
          src="https://dummyimage.com/180x100/000/fff"
        >
        <rd-card-body>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
    </div>

    <highlight
      code="<rd-card style=&quot;width: 18rem;&quot;>
  <img
    slot=&quot;top&quot;
    src=&quot;https://dummyimage.com/180x100/000/fff&quot;
  >
  <rd-card-body>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>"
    />
    <h2>List groups</h2>
    <div class="border p-3">
      <rd-card style="width: 18rem;">
        <rd-card-header>
          Featured
        </rd-card-header>
        <rd-list-group flush>
          <rd-list-item>Cras justo odio</rd-list-item>
          <rd-list-item>Dapibus ac facilisis in</rd-list-item>
          <rd-list-item>Vestibulum at eros</rd-list-item>
        </rd-list-group>
      </rd-card>
    </div>

    <highlight
      code="<rd-card style=&quot;width: 18rem;&quot;>
  <rd-card-header>
    Featured
  </rd-card-header>
  <rd-list-group flush>
    <rd-list-item>Cras justo odio</rd-list-item>
    <rd-list-item>Dapibus ac facilisis in</rd-list-item>
    <rd-list-item>Vestibulum at eros</rd-list-item>
  </rd-list-group>
</rd-card>"
    />
    <h2>Kitchen sink</h2>
    <div class="border p-3">
      <rd-card
        style="width: 18rem;"
      >
        <img
          slot="top"
          src="https://dummyimage.com/180x100/000/fff"
          alt="Card image cap"
        >
        <rd-card-body>
          <h5>Card title</h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
        <rd-list-group
          class=" "
          flush
        >
          <rd-list-item>Cras justo odio</rd-list-item>
          <rd-list-item>Dapibus ac facilisis in</rd-list-item>
          <rd-list-item>Vestibulum at eros</rd-list-item>
        </rd-list-group>
        <rd-card-body>
          <a
            slot="link"
            href="javascript:"
          >
            Card link
          </a>
          <a
            slot="link"
            href="javascript:"
          >
            Another link
          </a>
        </rd-card-body>
      </rd-card>
    </div>


    <highlight
      code="<rd-card
  style=&quot;width: 18rem;&quot;
>
  <img
    slot=&quot;top&quot;
    src=&quot;https://dummyimage.com/180x100/000/fff&quot;
    alt=&quot;Card image cap&quot;
  >
  <rd-card-body>
    <h5>Card title</h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
  <rd-list-group
    class=&quot; &quot;
    flush
  >
    <rd-list-item>Cras justo odio</rd-list-item>
    <rd-list-item>Dapibus ac facilisis in</rd-list-item>
    <rd-list-item>Vestibulum at eros</rd-list-item>
  </rd-list-group>
  <rd-card-body>
    <a
      slot=&quot;link&quot;
      href=&quot;javascript:&quot;
    >
      Card link
    </a>
    <a
      slot=&quot;link&quot;
      href=&quot;javascript:&quot;
    >
      Another link
    </a>
  </rd-card-body>
</rd-card>"
    />
    <h2>Header and footer</h2>
    <div class="border p-3">
      <rd-card>
        <rd-card-header>
          Featured
        </rd-card-header>
        <rd-card-body>
          <h5 slot="title">
            Special title treatment
          </h5>
          <p>With supporting text below as a natural lead-in to additional content.</p>
          <rd-button
            tag="a"
            href="javascript:"
            class=" "
            primary
          >
            Go somewhere
          </rd-button>
        </rd-card-body>
      </rd-card>
    </div>
    <highlight
      code="<rd-card>
  <rd-card-header>
    Featured
  </rd-card-header>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Special title treatment
    </h5>
    <p>With supporting text below as a natural lead-in to additional content.</p>
    <rd-button
      tag=&quot;a&quot;
      href=&quot;javascript:&quot;
      class=&quot; &quot;
      primary
    >
      Go somewhere
    </rd-button>
  </rd-card-body>
</rd-card>"
    />
    <div class="border p-3">
      <rd-card>
        <rd-card-header>
          <h5>Featured</h5>
        </rd-card-header>
        <rd-card-body>
          <h5 slot="title">
            Special title treatment
          </h5>
          <p>With supporting text below as a natural lead-in to additional content.</p>
          <rd-button
            tag="a"
            href="javascript:"
            class=" "
            primary
          >
            Go somewhere
          </rd-button>
        </rd-card-body>
      </rd-card>
    </div>
    <highlight
      code="<rd-card>
  <rd-card-header>
    <h5>Featured</h5>
  </rd-card-header>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Special title treatment
    </h5>
    <p>With supporting text below as a natural lead-in to additional content.</p>
    <rd-button
      tag=&quot;a&quot;
      href=&quot;javascript:&quot;
      class=&quot; &quot;
      primary
    >
      Go somewhere
    </rd-button>
  </rd-card-body>
</rd-card>"
    />
    <div class="border p-3">
      <rd-card>
        <rd-card-header>
          Quote
        </rd-card-header>
        <rd-card-body>
          <blockquote class="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer posuere erat a ante.
            </p>
            <footer class="blockquote-footer">
              Someone famous in <cite title="Source Title">
                Source Title
              </cite>
            </footer>
          </blockquote>
        </rd-card-body>
      </rd-card>
    </div>
    <highlight
      code="<rd-card>
  <rd-card-header>
    Quote
  </rd-card-header>
  <rd-card-body>
    <blockquote class=&quot;blockquote mb-0&quot;>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer posuere erat a ante.
      </p>
      <footer class=&quot;blockquote-footer&quot;>
        Someone famous in <cite title=&quot;Source Title&quot;>
          Source Title
        </cite>
      </footer>
    </blockquote>
  </rd-card-body>
</rd-card>"
    />
    <div class="border p-3">
      <rd-card class="text-center">
        <rd-card-header>
          Featured
        </rd-card-header>
        <rd-card-body>
          <h5 slot="title">
            Special title treatment
          </h5>
          <p>With supporting text below as a natural lead-in to additional content.</p>
          <rd-button
            tag="a"
            href="javascript:"
            class=" "
            primary
          >
            Go somewhere
          </rd-button>
        </rd-card-body>
        <rd-card-footer class=" text-muted">
          2 days ago
        </rd-card-footer>
      </rd-card>
    </div>

    <highlight
      code="<rd-card class=&quot;text-center&quot;>
  <rd-card-header>
    Featured
  </rd-card-header>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Special title treatment
    </h5>
    <p>With supporting text below as a natural lead-in to additional content.</p>
    <rd-button
      tag=&quot;a&quot;
      href=&quot;javascript:&quot;
      class=&quot; &quot;
      primary
    >
      Go somewhere
    </rd-button>
  </rd-card-body>
  <rd-card-footer class=&quot; text-muted&quot;>
    2 days ago
  </rd-card-footer>
</rd-card>"
    />
    <h2>Navigation</h2>
    <div class="border p-3">
      <rd-card class="text-center">
        <rd-card-header>
          <rd-nav
            tabs
          >
            <a
              class=" active"
              href="javascript:"
            >
              Active
            </a>
            <a
              class=""
              href="javascript:"
            >
              Link
            </a>
            <a
              class=" disabled"
              href="javascript:"
            >
              Disabled
            </a>
          </rd-nav>
        </rd-card-header>
        <rd-card-body>
          <h5 slot="title">
            Special title treatment
          </h5>
          <p>With supporting text below as a natural lead-in to additional content.</p>
          <rd-button
            tag="a"
            href="javascript:"
            class=" "
            primary
          >
            Go somewhere
          </rd-button>
        </rd-card-body>
      </rd-card>
    </div>
    <highlight
      code="<rd-card class=&quot;text-center&quot;>
  <rd-card-header>
    <rd-nav
      tabs
    >
      <a
        class=&quot; active&quot;
        href=&quot;javascript:&quot;
      >
        Active
      </a>
      <a
        class=&quot;&quot;
        href=&quot;javascript:&quot;
      >
        Link
      </a>
      <a
        class=&quot; disabled&quot;
        href=&quot;javascript:&quot;
      >
        Disabled
      </a>
    </rd-nav>
  </rd-card-header>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Special title treatment
    </h5>
    <p>With supporting text below as a natural lead-in to additional content.</p>
    <rd-button
      tag=&quot;a&quot;
      href=&quot;javascript:&quot;
      class=&quot; &quot;
      primary
    >
      Go somewhere
    </rd-button>
  </rd-card-body>
</rd-card>"
    />
    <div class="border p-3">
      <rd-card class="text-center">
        <rd-card-header>
          <rd-nav
            pills
          >
            <a
              class=" active"
              href="javascript:"
            >
              Active
            </a>
            <a
              class=""
              href="javascript:"
            >
              Link
            </a>
            <a
              class=" disabled"
              href="javascript:"
            >
              Disabled
            </a>
          </rd-nav>
        </rd-card-header>
        <rd-card-body>
          <h5 slot="title">
            Special title treatment
          </h5>
          <p>With supporting text below as a natural lead-in to additional content.</p>
          <rd-button
            tag="a"
            href="javascript:"
            class=" "
            primary
          >
            Go somewhere
          </rd-button>
        </rd-card-body>
      </rd-card>
    </div>

    <highlight
      code="<rd-card class=&quot;text-center&quot;>
  <rd-card-header>
    <rd-nav
      pills
    >
      <a
        class=&quot; active&quot;
        href=&quot;javascript:&quot;
      >
        Active
      </a>
      <a
        class=&quot;&quot;
        href=&quot;javascript:&quot;
      >
        Link
      </a>
      <a
        class=&quot; disabled&quot;
        href=&quot;javascript:&quot;
      >
        Disabled
      </a>
    </rd-nav>
  </rd-card-header>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Special title treatment
    </h5>
    <p>With supporting text below as a natural lead-in to additional content.</p>
    <rd-button
      tag=&quot;a&quot;
      href=&quot;javascript:&quot;
      class=&quot; &quot;
      primary
    >
      Go somewhere
    </rd-button>
  </rd-card-body>
</rd-card>"
    />
    <h2>Image caps</h2>
    <div class="border p-3">
      <rd-card class="mb-3">
        <img
          slot="top"
          src="https://dummyimage.com/841x180/000/fff"
          alt="Card image cap"
        >
        <rd-card-body>
          <h5 slot="title">
            Card title
          </h5>
          <p>
            This is a wider card with supporting text below
            as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p>
            <small class="text-muted">
              Last updated 3 mins ago
            </small>
          </p>
        </rd-card-body>
      </rd-card>
      <rd-card>
        <rd-card-body>
          <h5 slot="title">
            Card title
          </h5>
          <p>
            This is a wider card with supporting text below
            as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p>
            <small class="text-muted">
              Last updated 3 mins ago
            </small>
          </p>
        </rd-card-body>
        <img
          class="card-img-bottom"
          src="https://dummyimage.com/841x180/000/fff"
          alt="Card image cap"
        >
      </rd-card>
    </div>

    <highlight
      code="<rd-card class=&quot;mb-3&quot;>
  <img
    slot=&quot;top&quot;
    src=&quot;https://dummyimage.com/841x180/000/fff&quot;
    alt=&quot;Card image cap&quot;
  >
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Card title
    </h5>
    <p>
      This is a wider card with supporting text below
      as a natural lead-in to additional content. This content is a little bit longer.
    </p>
    <p>
      <small class=&quot;text-muted&quot;>
        Last updated 3 mins ago
      </small>
    </p>
  </rd-card-body>
</rd-card>
<rd-card>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Card title
    </h5>
    <p>
      This is a wider card with supporting text below
      as a natural lead-in to additional content. This content is a little bit longer.
    </p>
    <p>
      <small class=&quot;text-muted&quot;>
        Last updated 3 mins ago
      </small>
    </p>
  </rd-card-body>
  <img
    class=&quot;card-img-bottom&quot;
    src=&quot;https://dummyimage.com/841x180/000/fff&quot;
    alt=&quot;Card image cap&quot;
  >
</rd-card>"
    />
    <h2>Image overlays</h2>
    <div class="border p-3">
      <rd-card class="bg-dark text-white">
        <img
          slot="img"
          src="https://dummyimage.com/841x180/000/fff55595c:#373a3c/text:Card image"
          alt="Card image"
        >
        <rd-card-body overlay>
          <h5 slot="title">
            Card title
          </h5>
          <p>
            This is a wider card with supporting text below
            as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p>Last updated 3 mins ago</p>
        </rd-card-body>
      </rd-card>
    </div>

    <highlight
      code="<rd-card class=&quot;bg-dark text-white&quot;>
  <img
    slot=&quot;img&quot;
    src=&quot;https://dummyimage.com/841x180/000/fff55595c:#373a3c/text:Card image&quot;
    alt=&quot;Card image&quot;
  >
  <rd-card-body overlay>
    <h5 slot=&quot;title&quot;>
      Card title
    </h5>
    <p>
      This is a wider card with supporting text below
      as a natural lead-in to additional content. This content is a little bit longer.
    </p>
    <p>Last updated 3 mins ago</p>
  </rd-card-body>
</rd-card>"
    />
    <h2>Background and color</h2>
    <div class="border p-3">
      <rd-card
        class="text-white bg-primary mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body>
          <h5 slot="title">
            Primary card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
      <rd-card
        class="text-white bg-secondary mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body>
          <h5 slot="title">
            Secondary card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
      <rd-card
        class="text-white bg-success mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body>
          <h5 slot="title">
            Success card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
      <rd-card
        class="text-white bg-danger mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body>
          <h5 slot="title">
            Danger card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
      <rd-card
        class="text-white bg-warning mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body>
          <h5 slot="title">
            Warning card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
      <rd-card
        class="text-white bg-info mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body>
          <h5 slot="title">
            Info card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
      <rd-card
        class="bg-light mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body>
          <h5 slot="title">
            Light card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
      <rd-card
        class="text-white bg-dark mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body>
          <h5 slot="title">
            Dark card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
    </div>
    <highlight
      code="<rd-card
  class=&quot;text-white bg-primary mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Primary card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>
<rd-card
  class=&quot;text-white bg-secondary mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Secondary card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>
<rd-card
  class=&quot;text-white bg-success mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Success card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>
<rd-card
  class=&quot;text-white bg-danger mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Danger card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>
<rd-card
  class=&quot;text-white bg-warning mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Warning card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>
<rd-card
  class=&quot;text-white bg-info mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Info card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>
<rd-card
  class=&quot;bg-light mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Light card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>
<rd-card
  class=&quot;text-white bg-dark mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Dark card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>"
    />
    <h2>Border</h2>
    <div class="border p-3">
      <rd-card
        class="border-primary mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body class=" text-primary">
          <h5 slot="title">
            Primary card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
      <rd-card
        class="border-secondary mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body class=" text-secondary">
          <h5 slot="title">
            Secondary card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
      <rd-card
        class="border-success mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body class=" text-success">
          <h5 slot="title">
            Success card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
      <rd-card
        class="border-danger mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body class=" text-danger">
          <h5 slot="title">
            Danger card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
      <rd-card
        class="border-warning mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body class=" text-warning">
          <h5 slot="title">
            Warning card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
      <rd-card
        class="border-info mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body class=" text-info">
          <h5 slot="title">
            Info card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
      <rd-card
        class="border-light mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body>
          <h5 slot="title">
            Light card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
      <rd-card
        class="border-dark mb-3"
        style="max-width: 18rem;"
      >
        <rd-card-header>Header</rd-card-header>
        <rd-card-body class=" text-dark">
          <h5 slot="title">
            Dark card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
      </rd-card>
    </div>
    <highlight
      code="<rd-card
  class=&quot;border-primary mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body class=&quot; text-primary&quot;>
    <h5 slot=&quot;title&quot;>
      Primary card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>
<rd-card
  class=&quot;border-secondary mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body class=&quot; text-secondary&quot;>
    <h5 slot=&quot;title&quot;>
      Secondary card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>
<rd-card
  class=&quot;border-success mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body class=&quot; text-success&quot;>
    <h5 slot=&quot;title&quot;>
      Success card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>
<rd-card
  class=&quot;border-danger mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body class=&quot; text-danger&quot;>
    <h5 slot=&quot;title&quot;>
      Danger card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>
<rd-card
  class=&quot;border-warning mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body class=&quot; text-warning&quot;>
    <h5 slot=&quot;title&quot;>
      Warning card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>
<rd-card
  class=&quot;border-info mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body class=&quot; text-info&quot;>
    <h5 slot=&quot;title&quot;>
      Info card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>
<rd-card
  class=&quot;border-light mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body>
    <h5 slot=&quot;title&quot;>
      Light card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>
<rd-card
  class=&quot;border-dark mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <rd-card-header>Header</rd-card-header>
  <rd-card-body class=&quot; text-dark&quot;>
    <h5 slot=&quot;title&quot;>
      Dark card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
</rd-card>"
    />
    <h2>Mixins utilities</h2>
    <div class="border p-3">
      <rd-card
        class="border-success mb-3"
        style="max-width: 18rem;"
      >
        <div class="card-header bg-transparent border-success">
          Header
        </div>
        <rd-card-body class=" text-success">
          <h5 slot="title">
            Success card title
          </h5>
          <p>
            Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </p>
        </rd-card-body>
        <rd-card-footer class=" bg-transparent border-success">
          Footer
        </rd-card-footer>
      </rd-card>
    </div>
    <highlight
      code="<rd-card
  class=&quot;border-success mb-3&quot;
  style=&quot;max-width: 18rem;&quot;
>
  <div class=&quot;card-header bg-transparent border-success&quot;>
    Header
  </div>
  <rd-card-body class=&quot; text-success&quot;>
    <h5 slot=&quot;title&quot;>
      Success card title
    </h5>
    <p>
      Some quick example text to build on the card title
      and make up the bulk of the card's content.
    </p>
  </rd-card-body>
  <rd-card-footer class=&quot; bg-transparent border-success&quot;>
    Footer
  </rd-card-footer>
</rd-card>"
    />
    <h2>Card groups</h2>
    <div class="border p-3">
      <rd-card group>
        <rd-card>
          <img
            slot="top"
            src="https://dummyimage.com/280x180/000/fff"
            alt="Card image cap"
          >
          <rd-card-body>
            <h5 slot="title">
              Card title
            </h5>
            <p>
              This is a wider card with supporting text below
              as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <p>
              <small class="text-muted">
                Last updated 3 mins ago
              </small>
            </p>
          </rd-card-body>
        </rd-card>
        <rd-card>
          <img
            slot="top"
            src="https://dummyimage.com/280x180/000/fff"
            alt="Card image cap"
          >
          <rd-card-body>
            <h5 slot="title">
              Card title
            </h5>
            <p>This card has supporting text below as a natural lead-in to additional content.</p>
            <p>
              <small class="text-muted">
                Last updated 3 mins ago
              </small>
            </p>
          </rd-card-body>
        </rd-card>
        <rd-card>
          <img
            slot="top"
            src="https://dummyimage.com/280x180/000/fff"
            alt="Card image cap"
          >
          <rd-card-body>
            <h5 slot="title">
              Card title
            </h5>
            <p>
              This is a wider card with supporting text below
              as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.
            </p>
            <p>
              <small class="text-muted">
                Last updated 3 mins ago
              </small>
            </p>
          </rd-card-body>
        </rd-card>
      </rd-card>
      <rd-card group>
        <rd-card>
          <img
            slot="top"
            src="https://dummyimage.com/280x180/000/fff"
            alt="Card image cap"
          >
          <rd-card-body>
            <h5 slot="title">
              Card title
            </h5>
            <p>
              This is a wider card with supporting text below
              as a natural lead-in to additional content. This content is a little bit longer.
            </p>
          </rd-card-body>
          <rd-card-footer class="">
            <small class="text-muted">
              Last updated 3 mins ago
            </small>
          </rd-card-footer>
        </rd-card>
        <rd-card>
          <img
            slot="top"
            src="https://dummyimage.com/280x180/000/fff"
            alt="Card image cap"
          >
          <rd-card-body>
            <h5 slot="title">
              Card title
            </h5>
            <p>This card has supporting text below as a natural lead-in to additional content.</p>
          </rd-card-body>
          <rd-card-footer class="">
            <small class="text-muted">
              Last updated 3 mins ago
            </small>
          </rd-card-footer>
        </rd-card>
        <rd-card>
          <img
            slot="top"
            src="https://dummyimage.com/280x180/000/fff"
            alt="Card image cap"
          >
          <rd-card-body>
            <h5 slot="title">
              Card title
            </h5>
            <p>
              This is a wider card with supporting text below
              as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.
            </p>
          </rd-card-body>
          <rd-card-footer class="">
            <small class="text-muted">
              Last updated 3 mins ago
            </small>
          </rd-card-footer>
        </rd-card>
      </rd-card>
    </div>
    <highlight
      code="<rd-card group>
  <rd-card>
    <img
      slot=&quot;top&quot;
      src=&quot;https://dummyimage.com/280x180/000/fff&quot;
      alt=&quot;Card image cap&quot;
    >
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title
      </h5>
      <p>
        This is a wider card with supporting text below
        as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      <p>
        <small class=&quot;text-muted&quot;>
          Last updated 3 mins ago
        </small>
      </p>
    </rd-card-body>
  </rd-card>
  <rd-card>
    <img
      slot=&quot;top&quot;
      src=&quot;https://dummyimage.com/280x180/000/fff&quot;
      alt=&quot;Card image cap&quot;
    >
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title
      </h5>
      <p>This card has supporting text below as a natural lead-in to additional content.</p>
      <p>
        <small class=&quot;text-muted&quot;>
          Last updated 3 mins ago
        </small>
      </p>
    </rd-card-body>
  </rd-card>
  <rd-card>
    <img
      slot=&quot;top&quot;
      src=&quot;https://dummyimage.com/280x180/000/fff&quot;
      alt=&quot;Card image cap&quot;
    >
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title
      </h5>
      <p>
        This is a wider card with supporting text below
        as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </p>
      <p>
        <small class=&quot;text-muted&quot;>
          Last updated 3 mins ago
        </small>
      </p>
    </rd-card-body>
  </rd-card>
</div>
<rd-card group>
  <rd-card>
    <img
      slot=&quot;top&quot;
      src=&quot;https://dummyimage.com/280x180/000/fff&quot;
      alt=&quot;Card image cap&quot;
    >
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title
      </h5>
      <p>
        This is a wider card with supporting text below
        as a natural lead-in to additional content. This content is a little bit longer.
      </p>
    </rd-card-body>
    <rd-card-footer class=&quot;&quot;>
      <small class=&quot;text-muted&quot;>
        Last updated 3 mins ago
      </small>
    </rd-card-footer>
  </rd-card>
  <rd-card>
    <img
      slot=&quot;top&quot;
      src=&quot;https://dummyimage.com/280x180/000/fff&quot;
      alt=&quot;Card image cap&quot;
    >
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title
      </h5>
      <p>This card has supporting text below as a natural lead-in to additional content.</p>
    </rd-card-body>
    <rd-card-footer class=&quot;&quot;>
      <small class=&quot;text-muted&quot;>
        Last updated 3 mins ago
      </small>
    </rd-card-footer>
  </rd-card>
  <rd-card>
    <img
      slot=&quot;top&quot;
      src=&quot;https://dummyimage.com/280x180/000/fff&quot;
      alt=&quot;Card image cap&quot;
    >
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title
      </h5>
      <p>
        This is a wider card with supporting text below
        as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </p>
    </rd-card-body>
    <rd-card-footer class=&quot;&quot;>
      <small class=&quot;text-muted&quot;>
        Last updated 3 mins ago
      </small>
    </rd-card-footer>
  </rd-card>
</rd-card>"
    />
    <h2>Card decks</h2>
    <div class="border p-3">
      <rd-card deck>
        <rd-card>
          <img
            slot="top"
            src="https://dummyimage.com/259x200/000/fff"
            alt="Card image cap"
          >
          <rd-card-body>
            <h5 slot="title">
              Card title
            </h5>
            <p>
              This is a longer card with supporting text below
              as a natural lead-in to additional content.
              This content is a little bit longer.
            </p>
            <p>
              <small class="text-muted">
                Last updated 3 mins ago
              </small>
            </p>
          </rd-card-body>
        </rd-card>
        <rd-card>
          <img
            slot="top"
            src="https://dummyimage.com/259x200/000/fff"
            alt="Card image cap"
          >
          <rd-card-body>
            <h5 slot="title">
              Card title
            </h5>
            <p>This card has supporting text below as a natural lead-in to additional content.</p>
            <p>
              <small class="text-muted">
                Last updated 3 mins ago
              </small>
            </p>
          </rd-card-body>
        </rd-card>
        <rd-card>
          <img
            slot="top"
            src="https://dummyimage.com/259x200/000/fff"
            alt="Card image cap"
          >
          <rd-card-body>
            <h5 slot="title">
              Card title
            </h5>
            <p>
              This is a wider card with supporting text below
              as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.
            </p>
            <p>
              <small class="text-muted">
                Last updated 3 mins ago
              </small>
            </p>
          </rd-card-body>
        </rd-card>
      </rd-card>
      <rd-card deck>
        <rd-card>
          <img
            slot="top"
            src="https://dummyimage.com/259x200/000/fff"
            alt="Card image cap"
          >
          <rd-card-body>
            <h5 slot="title">
              Card title
            </h5>
            <p>
              This is a wider card with supporting text below
              as a natural lead-in to additional content. This content is a little bit longer.
            </p>
          </rd-card-body>
          <rd-card-footer class="">
            <small class="text-muted">
              Last updated 3 mins ago
            </small>
          </rd-card-footer>
        </rd-card>
        <rd-card>
          <img
            slot="top"
            src="https://dummyimage.com/259x200/000/fff"
            alt="Card image cap"
          >
          <rd-card-body>
            <h5 slot="title">
              Card title
            </h5>
            <p>This card has supporting text below as a natural lead-in to additional content.</p>
          </rd-card-body>
          <rd-card-footer class="">
            <small class="text-muted">
              Last updated 3 mins ago
            </small>
          </rd-card-footer>
        </rd-card>
        <rd-card>
          <img
            slot="top"
            src="https://dummyimage.com/259x200/000/fff"
            alt="Card image cap"
          >
          <rd-card-body>
            <h5 slot="title">
              Card title
            </h5>
            <p>
              This is a wider card with supporting text below
              as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.
            </p>
          </rd-card-body>
          <rd-card-footer class="">
            <small class="text-muted">
              Last updated 3 mins ago
            </small>
          </rd-card-footer>
        </rd-card>
      </rd-card>
    </div>
    <highlight
      code="<rd-card deck>
  <rd-card>
    <img
      slot=&quot;top&quot;
      src=&quot;https://dummyimage.com/259x200/000/fff&quot;
      alt=&quot;Card image cap&quot;
    >
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title
      </h5>
      <p>
        This is a longer card with supporting text below
        as a natural lead-in to additional content.
        This content is a little bit longer.
      </p>
      <p>
        <small class=&quot;text-muted&quot;>
          Last updated 3 mins ago
        </small>
      </p>
    </rd-card-body>
  </rd-card>
  <rd-card>
    <img
      slot=&quot;top&quot;
      src=&quot;https://dummyimage.com/259x200/000/fff&quot;
      alt=&quot;Card image cap&quot;
    >
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title
      </h5>
      <p>This card has supporting text below as a natural lead-in to additional content.</p>
      <p>
        <small class=&quot;text-muted&quot;>
          Last updated 3 mins ago
        </small>
      </p>
    </rd-card-body>
  </rd-card>
  <rd-card>
    <img
      slot=&quot;top&quot;
      src=&quot;https://dummyimage.com/259x200/000/fff&quot;
      alt=&quot;Card image cap&quot;
    >
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title
      </h5>
      <p>
        This is a wider card with supporting text below
        as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </p>
      <p>
        <small class=&quot;text-muted&quot;>
          Last updated 3 mins ago
        </small>
      </p>
    </rd-card-body>
  </rd-card>
</rd-card>
<rd-card deck>
  <rd-card>
    <img
      slot=&quot;top&quot;
      src=&quot;https://dummyimage.com/259x200/000/fff&quot;
      alt=&quot;Card image cap&quot;
    >
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title
      </h5>
      <p>
        This is a wider card with supporting text below
        as a natural lead-in to additional content. This content is a little bit longer.
      </p>
    </rd-card-body>
    <rd-card-footer class=&quot;&quot;>
      <small class=&quot;text-muted&quot;>
        Last updated 3 mins ago
      </small>
    </rd-card-footer>
  </rd-card>
  <rd-card>
    <img
      slot=&quot;top&quot;
      src=&quot;https://dummyimage.com/259x200/000/fff&quot;
      alt=&quot;Card image cap&quot;
    >
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title
      </h5>
      <p>This card has supporting text below as a natural lead-in to additional content.</p>
    </rd-card-body>
    <rd-card-footer class=&quot;&quot;>
      <small class=&quot;text-muted&quot;>
        Last updated 3 mins ago
      </small>
    </rd-card-footer>
  </rd-card>
  <rd-card>
    <img
      slot=&quot;top&quot;
      src=&quot;https://dummyimage.com/259x200/000/fff&quot;
      alt=&quot;Card image cap&quot;
    >
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title
      </h5>
      <p>
        This is a wider card with supporting text below
        as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </p>
    </rd-card-body>
    <rd-card-footer class=&quot;&quot;>
      <small class=&quot;text-muted&quot;>
        Last updated 3 mins ago
      </small>
    </rd-card-footer>
  </rd-card>
</rd-card>"
    />
    <h2>Card columns</h2>
    <div class="border p-3">
      <rd-card columns>
        <rd-card>
          <img
            slot="top"
            src="https://dummyimage.com/180x100/000/fff"
            alt="Card image cap"
          >
          <rd-card-body>
            <h5 slot="title">
              Card title that wraps to a new line
            </h5>
            <p>
              This is a longer card with supporting text below
              as a natural lead-in to additional content.
              This content is a little bit longer.
            </p>
          </rd-card-body>
        </rd-card>
        <rd-card class="p-3">
          <blockquote class="blockquote mb-0 card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer posuere erat a ante.
            </p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">
                  Source Title
                </cite>
              </small>
            </footer>
          </blockquote>
        </rd-card>
        <rd-card>
          <img
            slot="top"
            src="https://dummyimage.com/180x100/000/fff"
            alt="Card image cap"
          >
          <rd-card-body>
            <h5 slot="title">
              Card title
            </h5>
            <p>This card has supporting text below as a natural lead-in to additional content.</p>
            <p>
              <small class="text-muted">
                Last updated 3 mins ago
              </small>
            </p>
          </rd-card-body>
        </rd-card>
        <rd-card class="bg-primary text-white text-center p-3">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
            <footer class="blockquote-footer">
              <small>
                Someone famous in <cite title="Source Title">
                  Source Title
                </cite>
              </small>
            </footer>
          </blockquote>
        </rd-card>
        <rd-card class="text-center">
          <rd-card-body>
            <h5 slot="title">
              Card title
            </h5>
            <p>This card has a regular title and short paragraphy of text below it.</p>
            <p>
              <small class="text-muted">
                Last updated 3 mins ago
              </small>
            </p>
          </rd-card-body>
        </rd-card>
        <rd-card>
          <img
            slot="img"
            src="https://dummyimage.com/180x100/000/fff"
            alt="Card image"
          >
        </rd-card>
        <rd-card class="p-3 text-right">
          <blockquote class="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer posuere erat a ante.
            </p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">
                  Source Title
                </cite>
              </small>
            </footer>
          </blockquote>
        </rd-card>
        <rd-card>
          <rd-card-body>
            <h5 slot="title">
              Card title
            </h5>
            <p>
              This is another card with title and supporting text below.
              This card has some additional content to make it slightly taller overall.
            </p>
            <p>
              <small class="text-muted">
                Last updated 3 mins ago
              </small>
            </p>
          </rd-card-body>
        </rd-card>
      </rd-card>
    </div>
    <highlight
      code="<rd-card columns>
  <rd-card>
    <img
      slot=&quot;top&quot;
      src=&quot;https://dummyimage.com/180x100/000/fff&quot;
      alt=&quot;Card image cap&quot;
    >
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title that wraps to a new line
      </h5>
      <p>
        This is a longer card with supporting text below
        as a natural lead-in to additional content.
        This content is a little bit longer.
      </p>
    </rd-card-body>
  </rd-card>
  <rd-card class=&quot;p-3&quot;>
    <blockquote class=&quot;blockquote mb-0 card-body&quot;>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer posuere erat a ante.
      </p>
      <footer class=&quot;blockquote-footer&quot;>
        <small class=&quot;text-muted&quot;>
          Someone famous in <cite title=&quot;Source Title&quot;>
            Source Title
          </cite>
        </small>
      </footer>
    </blockquote>
  </rd-card>
  <rd-card>
    <img
      slot=&quot;top&quot;
      src=&quot;https://dummyimage.com/180x100/000/fff&quot;
      alt=&quot;Card image cap&quot;
    >
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title
      </h5>
      <p>This card has supporting text below as a natural lead-in to additional content.</p>
      <p>
        <small class=&quot;text-muted&quot;>
          Last updated 3 mins ago
        </small>
      </p>
    </rd-card-body>
  </rd-card>
  <rd-card class=&quot;bg-primary text-white text-center p-3&quot;>
    <blockquote class=&quot;blockquote mb-0&quot;>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
      <footer class=&quot;blockquote-footer&quot;>
        <small>
          Someone famous in <cite title=&quot;Source Title&quot;>
            Source Title
          </cite>
        </small>
      </footer>
    </blockquote>
  </rd-card>
  <rd-card class=&quot;text-center&quot;>
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title
      </h5>
      <p>This card has a regular title and short paragraphy of text below it.</p>
      <p>
        <small class=&quot;text-muted&quot;>
          Last updated 3 mins ago
        </small>
      </p>
    </rd-card-body>
  </rd-card>
  <rd-card>
    <img
      slot=&quot;img&quot;
      src=&quot;https://dummyimage.com/180x100/000/fff&quot;
      alt=&quot;Card image&quot;
    >
  </rd-card>
  <rd-card class=&quot;p-3 text-right&quot;>
    <blockquote class=&quot;blockquote mb-0&quot;>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer posuere erat a ante.
      </p>
      <footer class=&quot;blockquote-footer&quot;>
        <small class=&quot;text-muted&quot;>
          Someone famous in <cite title=&quot;Source Title&quot;>
            Source Title
          </cite>
        </small>
      </footer>
    </blockquote>
  </rd-card>
  <rd-card>
    <rd-card-body>
      <h5 slot=&quot;title&quot;>
        Card title
      </h5>
      <p>
        This is another card with title and supporting text below.
        This card has some additional content to make it slightly taller overall.
      </p>
      <p>
        <small class=&quot;text-muted&quot;>
          Last updated 3 mins ago
        </small>
      </p>
    </rd-card-body>
  </rd-card>
</rd-card>"
    />
  </div>
</template>

<script>
import {
  RdCard, RdCardBody, RdButton, RdListGroup, RdListItem, RdCardHeader, RdCardFooter, RdNav
} from '~/src';
import Highlight from '~/components/Highlight.vue';

export default {
  name: 'Card',
  components: {
    RdCard,
    RdCardBody,
    RdButton,
    RdListGroup,
    RdListItem,
    RdCardHeader,
    RdCardFooter,
    RdNav,
    Highlight
  },
  data() {
    return {
      props: [
        ['tag', '렌더링 될 HTML 엘리먼트의 태그', 'String', '', 'button, input ...'],
        ['block', 'width 100%', 'Boolean', 'false', ''],
        ['active', '활성화 상태', 'Boolean', 'false', ''],
        ['disabled', '비활성화 상태', 'Boolean', 'false', ''],
      ]
    };
  }
};
</script>
