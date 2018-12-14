<template>
  <div>
    Card
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

    Body
    <rd-card>
      <rd-card-body>
        This is some text within a card body.
      </rd-card-body>
    </rd-card>

    Titles, text, and links
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

    Images

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

    List groups
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

    Kitchen sink
    <rd-card
      style="width: 18rem;"
    >
      <img
        slot="top"
        src="https://dummyimage.com/180x100/000/fff"
        alt="Card image cap"
      >
      <rd-card-body>
        <rd-card-header><h5>Card title</h5></rd-card-header>
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
    Header and footer
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
    Navigation
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
    Image caps

    <rd-card class="mb-3">
      <img
        slot="top"
        src="https://dummyimage.com/180x100/000/fff"
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
        src="https://dummyimage.com/180x100/000/fff"
        alt="Card image cap"
      >
    </rd-card>
    Image overlays
    <rd-card class="bg-dark text-white">
      <img
        slot="img"
        src="https://dummyimage.com/180x100/000/fff55595c:#373a3c/text:Card image"
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
    Card styles
    Background and color


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
    Border
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
    Mixins utilities
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
    Card groups
    <div class="card-group">
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
    </div>
    <div class="card-group">
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
          src="https://dummyimage.com/180x100/000/fff"
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
          src="https://dummyimage.com/180x100/000/fff"
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
    </div>
    Card decks
    <rd-card deck>
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
          src="https://dummyimage.com/180x100/000/fff"
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
          src="https://dummyimage.com/180x100/000/fff"
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
          src="https://dummyimage.com/180x100/000/fff"
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
    Card columns
    <div class="card-columns">
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
    </div>
  </div>
</template>

<script>
import {
  RdCard, RdCardBody, RdButton, RdListGroup, RdListItem, RdCardHeader, RdCardFooter, RdNav
} from '~/src';

export default {
  name: 'Card',
  components: {
    RdCard, RdCardBody, RdButton, RdListGroup, RdListItem, RdCardHeader, RdCardFooter, RdNav
  }
};
</script>
