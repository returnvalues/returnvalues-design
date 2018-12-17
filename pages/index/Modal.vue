<template>
  <div>
    Modal
    <rd-button
      type="button"
      primary
      @click.native="$refs.modal1.show"
    >
      Launch demo modal
    </rd-button>
    <rd-modal ref="modal1">
      <rd-modal-header>
        <h5 title>
          Modal title
        </h5>
        <rd-button
          type="button"
          close
          @click.native="$refs.modal1.hide"
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
          @click.native="$refs.modal1.hide"
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

    <rd-button
      type="button"
      primary
      @click.native="$refs.modal2.show"
    >
      Launch demo modal
    </rd-button>

    <rd-modal ref="modal2">
      <rd-modal-header>
        <h5 title>
          Modal title
        </h5>
        <rd-button
          type="button"
          close
          @click.native="$refs.modal2.hide"
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
          @click.native="$refs.modal2.hide"
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

    <rd-button
      type="button"
      primary
      @click.native="$refs.modal3.show"
    >
      Launch demo modal
    </rd-button>
    <rd-modal
      ref="modal3"
      centered
    >
      <rd-modal-header>
        <h5 title>
          Modal title
        </h5>
        <rd-button
          type="button"
          close
          @click.native="$refs.modal3.hide"
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
          @click.native="$refs.modal3.hide"
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
    <rd-button
      type="button"
      primary
      @click.native="$refs.modal4.show"
    >
      Launch demo modal
    </rd-button>

    <rd-modal ref="modal4">
      <rd-modal-header>
        <h5 title>
          Modal title
        </h5>
        <rd-button
          type="button"
          close
          @click.native="$refs.modal4.hide"
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
          @click.native="$refs.modal4.hide"
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
      @click.native="$refs.modal5.show"
    >
      Large modal
    </rd-button>


    <rd-modal
      ref="modal5"
      lg
    >
      <rd-modal-header>
        <h5 title>
          Modal title
        </h5>
        <rd-button
          type="button"
          close
          @click.native="$refs.modal5.hide"
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
          @click.native="$refs.modal5.hide"
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
      @click.native="$refs.modal6.show"
    >
      Small modal
    </rd-button>


    <rd-modal
      ref="modal6"
      sm
    >
      <rd-modal-header>
        <h5 title>
          Modal title
        </h5>
        <rd-button
          type="button"
          close
          @click.native="$refs.modal6.hide"
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
          @click.native="$refs.modal6.hide"
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
