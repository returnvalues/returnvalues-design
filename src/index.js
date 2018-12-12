import RdButton from './RdButton.vue';
import RdButtonGroup from './RdButtonGroup.vue';
import RdButtonRadio from './RdButtonRadio.vue';
import RdButtonCheckbox from './RdButtonCheckbox.vue';
import RdCard from './RdCard.vue';
import RdListGroup from './RdListGroup.vue';
import RdListItem from './RdListItem.vue';
import RdInputGroup from './RdInputGroup.vue';
import RdDropdown from './RdDropdown.vue';
import RdInput from './RdInput.vue';
import RdSelect from './RdSelect.vue';
import RdTextarea from './RdTextarea.vue';
import RdAlert from './RdAlert.vue';
import RdBadge from './RdBadge.vue';
import RdBreadcrumb from './RdBreadcrumb.vue';
import RdCarousel from './RdCarousel.vue';
import RdCollapse from './RdCollapse.vue';
import RdJumbotron from './RdJumbotron.vue';
import RdModal from './RdModal.vue';
import RdNavbar from './RdNavbar.vue';
import RdNavs from './RdNavs.vue';
import RdPagination from './RdPagination.vue';
import RdProgress from './RdProgress.vue';

import 'bootstrap/dist/css/bootstrap.css';


export {
  RdButton,
  RdButtonGroup,
  RdButtonRadio,
  RdButtonCheckbox,
  RdCard,
  RdListGroup,
  RdListItem,
  RdInputGroup,
  RdDropdown,
  RdInput,
  RdSelect,
  RdTextarea,
  RdAlert,
  RdBadge,
  RdBreadcrumb,
  RdCarousel,
  RdCollapse,
  RdJumbotron,
  RdModal,
  RdNavbar,
  RdNavs,
  RdPagination,
  RdProgress,
};

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
if (isBrowser) {
  if (!window.jquery) window.jquery = window.$ = require('jquery'); // eslint-disable-line global-require,no-multi-assign
  if (!window.bootstrap) window.bootstrap = require('bootstrap'); // eslint-disable-line global-require
}
