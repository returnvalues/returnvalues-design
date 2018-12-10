<template>
  <div>
    <p>
      semantic purpose
               <rd-button semantic="primary">
                 Primary
               </rd-button>
               <rd-button semantic="secondary">
                 Secondary
               </rd-button>
               <rd-button semantic="success">
                 Success
               </rd-button>
               <rd-button semantic="danger">
                 Danger
               </rd-button>
               <rd-button semantic="warning">
                 Warning
               </rd-button>
               <rd-button semantic="info">
                 Info
               </rd-button>
               <rd-button semantic="light">
                 Light
               </rd-button>
               <rd-button semantic="dark">
                 Dark
               </rd-button>
               <rd-button semantic="link">
                 Link
               </rd-button>
    </p>
    <p>
      Button tags
             <rd-button
               tag="a"
               href="javascript:"
               role="button" primary
             >
               Link
             </rd-button>
             <rd-button
               tag="button"
               type="submit" primary
             >
               Button
             </rd-button>
             <rd-button
               tag="input"
               type="button"
               value="Input" primary
             />
             <rd-button
               tag="input"
               type="submit"
               value="Submit" primary
             />
             <rd-button
               tag="input"
               type="reset"
               value="Reset" primary
             />
    </p>
    <p>
      Outline buttons
              <rd-button
                type="button"
                outline="primary"
              >
                Primary
              </rd-button>
              <rd-button
                type="button"
                outline="secondary"
              >
                Secondary
              </rd-button>
              <rd-button
                type="button"
                outline="success"
              >
                Success
              </rd-button>
              <rd-button
                type="button"
                outline="danger"
              >
                Danger
              </rd-button>
              <rd-button
                type="button"
                outline="warning"
              >
                Warning
              </rd-button>
              <rd-button
                type="button"
                outline="info"
              >
                Info
              </rd-button>
              <rd-button
                type="button"
                outline="light"
              >
                Light
              </rd-button>
              <rd-button
                type="button"
                outline="dark"
              >
                Dark
              </rd-button>
    </p>
    <p>
      Sizes
      <rd-button
        type="button"
        semantic="primary"
        size="lg"
      >
        Large button
      </rd-button>
      <rd-button
        type="button"
        semantic="secondary"
        size="lg"
      >
        Large button
      </rd-button>
      <rd-button
        type="button"
        semantic="primary"
        size="sm"
      >
        Small button
      </rd-button>
      <rd-button
        type="button"
        semantic="secondary"
        size="sm"
      >
        Small button
      </rd-button>
      <rd-button
        type="button"
        semantic="primary"
        size="lg"
        block
      >
        Block level button
      </rd-button>
      <rd-button
        type="button"
        semantic="secondary"
        size="lg"
        block
      >
        Block level button
      </rd-button>
    </p>
    <p>
      state
      <rd-button
        tag="a"
        href="javascript:"
        semantic="primary"
        size="lg"
        active
        role="button"
        aria-pressed="true"
      >
        Primary link
      </rd-button>
      <rd-button
        tag="a"
        href="javascript:"
        semantic="secondary"
        size="lg"
        active
        role="button"
        aria-pressed="true"
      >
        Link
      </rd-button>
      <rd-button
        type="button"
        size="lg"
        semantic="primary"
        disabled
      >
        Primary button
      </rd-button>
      <rd-button
        type="button"
        size="lg"
        semantic="secondary"
        disabled
      >
        Button
      </rd-button>
      <rd-button
        tag="a"
        href="javascript:"
        semantic="primary"
        size="lg"
        disabled
        tabindex="-1"
        role="button"
        aria-disabled="true"
      >
        Primary link
      </rd-button>
      <rd-button
        tag="a"
        href="javascript:"
        semantic="secondary"
        size="lg"
        disabled
        tabindex="-1"
        role="button"
        aria-disabled="true"
      >
        Link
      </rd-button>
    </p>
  </div>
</template>

<script>
import { RdButton } from '~/src';

export default {
  name: 'Button',
  components: { RdButton }
};
</script>
