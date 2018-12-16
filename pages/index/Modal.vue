<template>
  <div>
    Modal
    <rd-modal>
      <rd-modal-header>
        <h5 title>
          Modal title
        </h5>
        <rd-button
          type="button"
          close
        >
          &times;
        </rd-button>
      </rd-modal-header>
      <rd-modal-body>
        <p>Modal body text goes here.</p>
      </rd-modal-body>
      <rd-modal-footer>
        <rd-button
          type="button"
          secondary
        >
          Close
        </rd-button>
        <rd-button
          type="button"
          primary
        >
          Save changes
        </rd-button>
      </rd-modal-footer>
    </rd-modal>
    Live demo
    <rd-modal>
      <rd-modal-header>
        <h5 title>
          Modal title
        </h5>
        <rd-button
          type="button"
          close
        >
          &times;
        </rd-button>
      </rd-modal-header>
      <rd-modal-body>
        <p>Modal body text goes here.</p>
      </rd-modal-body>
      <rd-modal-footer>
        <rd-button
          type="button"
          secondary
        >
          Close
        </rd-button>
        <rd-button
          type="button"
          primary
        >
          Save changes
        </rd-button>
      </rd-modal-footer>
    </rd-modal>


    Scrolling long content


    <rd-modal>
      <rd-modal-header>
        <h5 title>
          Modal title
        </h5>
        <rd-button
          type="button"
          close
        >
          &times;
        </rd-button>
      </rd-modal-header>
      <rd-modal-body>
        <p>Modal body text goes here.</p>
      </rd-modal-body>
      <rd-modal-footer>
        <rd-button
          type="button"
          secondary
        >
          Close
        </rd-button>
        <rd-button
          type="button"
          primary
        >
          Save changes
        </rd-button>
      </rd-modal-footer>
    </rd-modal>


    Vertically centered


    <rd-modal centered>
      <rd-modal-header>
        <h5 title>
          Modal title
        </h5>
        <rd-button
          type="button"
          close
        >
          &times;
        </rd-button>
      </rd-modal-header>
      <rd-modal-body>
        <p>Modal body text goes here.</p>
      </rd-modal-body>
      <rd-modal-footer>
        <rd-button
          type="button"
          secondary
        >
          Close
        </rd-button>
        <rd-button
          type="button"
          primary
        >
          Save changes
        </rd-button>
      </rd-modal-footer>
    </rd-modal>


    Tooltips and popovers


    <rd-modal>
      <rd-modal-header>
        <h5 title>
          Modal title
        </h5>
        <rd-button
          type="button"
          close
        >
          &times;
        </rd-button>
      </rd-modal-header>
      <rd-modal-body>
        <h5>Popover in a modal</h5>
        <p>
          This <rd-button
            href="javascript:"
            secondary
          >
            button
          </rd-button> triggers a popover on click.
        </p>
        <hr>
        <h5>Tooltips in a modal</h5>
        <p>
          <a
            href="#"
            class="tooltip-test"
            title="Tooltip"
          >
            This link
          </a> and <a
            href="#"
            class="tooltip-test"
            title="Tooltip"
          >
            that link
          </a> have tooltips on hover.
        </p>
      </rd-modal-body>
      <rd-modal-footer>
        <rd-button
          type="button"
          secondary
        >
          Close
        </rd-button>
        <rd-button
          type="button"
          primary
        >
          Save changes
        </rd-button>
      </rd-modal-footer>
    </rd-modal>


    Optional sizes
    <rd-button
      type="button"
      primary
    >
      Large modal
    </rd-button>


    <rd-modal lg>
      <rd-modal-header>
        <h5 title>
          Modal title
        </h5>
        <rd-button
          type="button"
          close
        >
          &times;
        </rd-button>
      </rd-modal-header>
      <rd-modal-body>
        <p>Modal body text goes here.</p>
      </rd-modal-body>
      <rd-modal-footer>
        <rd-button
          type="button"
          secondary
        >
          Close
        </rd-button>
        <rd-button
          type="button"
          primary
        >
          Save changes
        </rd-button>
      </rd-modal-footer>
    </rd-modal>

    <rd-button
      type="button"
      primary
    >
      Small modal
    </rd-button>


    <rd-modal sm>
      <rd-modal-header>
        <h5 title>
          Modal title
        </h5>
        <rd-button
          type="button"
          close
        >
          &times;
        </rd-button>
      </rd-modal-header>
      <rd-modal-body>
        <p>Modal body text goes here.</p>
      </rd-modal-body>
      <rd-modal-footer>
        <rd-button
          type="button"
          secondary
        >
          Close
        </rd-button>
        <rd-button
          type="button"
          primary
        >
          Save changes
        </rd-button>
      </rd-modal-footer>
    </rd-modal>
  </div>
</template>
<script>
import {
  RdModal, RdModalFooter, RdModalHeader, RdModalBody, RdButton
} from '~/src';

export default {
  name: 'Modal',
  components: {
    RdButton,
    RdModalBody,
    RdModalHeader,
    RdModalFooter,
    RdModal
  }
};
</script>
