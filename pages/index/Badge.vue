<template>
  <div>
    badge
    Example
    <h1>
      Example heading <rd-badge secondary>
        New
      </rd-badge>
    </h1>
    <h2>
      Example heading <rd-badge secondary>
        New
      </rd-badge>
    </h2>
    <h3>
      Example heading <rd-badge secondary>
        New
      </rd-badge>
    </h3>
    <h4>
      Example heading <rd-badge secondary>
        New
      </rd-badge>
    </h4>
    <h5>
      Example heading <rd-badge secondary>
        New
      </rd-badge>
    </h5>
    <h6>
      Example heading <rd-badge secondary>
        New
      </rd-badge>
    </h6>

    <button
      type="button"
      class="btn btn-primary"
    >
      Notifications <rd-badge light>
        4
      </rd-badge>
    </button>

    <button
      type="button"
      class="btn btn-primary"
    >
      Profile <rd-badge light>
        9
      </rd-badge>
      <span class="sr-only">
        unread messages
      </span>
    </button>

    Contextual variations
    <rd-badge primary>
      Primary
    </rd-badge>
    <rd-badge secondary>
      Secondary
    </rd-badge>
    <rd-badge success>
      Success
    </rd-badge>
    <rd-badge danger>
      Danger
    </rd-badge>
    <rd-badge warning>
      Warning
    </rd-badge>
    <rd-badge info>
      Info
    </rd-badge>
    <rd-badge light>
      Light
    </rd-badge>
    <rd-badge dark>
      Dark
    </rd-badge>

    Pill badges
    <rd-badge
      pill
      primary
    >
      Primary
    </rd-badge>
    <rd-badge
      pill
      secondary
    >
      Secondary
    </rd-badge>
    <rd-badge
      pill
      success
    >
      Success
    </rd-badge>
    <rd-badge
      pill
      danger
    >
      Danger
    </rd-badge>
    <rd-badge
      pill
      warning
    >
      Warning
    </rd-badge>
    <rd-badge
      pill
      info
    >
      Info
    </rd-badge>
    <rd-badge
      pill
      light
    >
      Light
    </rd-badge>
    <rd-badge
      pill
      dark
    >
      Dark
    </rd-badge>

    Links
    <rd-badge
      tag="a"
      href="javascript:"
      primary
    >
      Primary
    </rd-badge>
    <rd-badge
      tag="a"
      href="javascript:"
      secondary
    >
      Secondary
    </rd-badge>
    <rd-badge
      tag="a"
      href="javascript:"
      success
    >
      Success
    </rd-badge>
    <rd-badge
      tag="a"
      href="javascript:"
      danger
    >
      Danger
    </rd-badge>
    <rd-badge
      tag="a"
      href="javascript:"
      warning
    >
      Warning
    </rd-badge>
    <rd-badge
      tag="a"
      href="javascript:"
      info
    >
      Info
    </rd-badge>
    <rd-badge
      tag="a"
      href="javascript:"
      light
    >
      Light
    </rd-badge>
    <rd-badge
      tag="a"
      href="javascript:"
      dark
    >
      Dark
    </rd-badge>
  </div>
</template>

<script>
import RdBadge from '../../src/RdBadge';

export default {
  name: 'Badge',
  components: { RdBadge }
};
</script>
