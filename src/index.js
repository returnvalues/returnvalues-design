import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

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
import RdModalHeader from './RdModalHeader.vue';
import RdModalBody from './RdModalBody.vue';
import RdModalFooter from './RdModalFooter.vue';
import RdNavbar from './RdNavbar.vue';
import RdNav from './RdNav.vue';
import RdPagination from './RdPagination.vue';
import RdProgress from './RdProgress.vue';
import RdNavbarBrand from './RdNavbarBrand.vue';
import RdNavbarToggler from './RdNavbarToggler.vue';
import RdNavbarText from './RdNavbarText.vue';
import RdCardHeader from './RdCardHeader.vue';
import RdCardBody from './RdCardBody.vue';
import RdCardFooter from './RdCardFooter.vue';
import RdPopover from './RdPopover.vue';
import RdQrcode from './RdQrcode.vue';
import RdTooltip from './RdTooltip.vue';
import RdEthInputAddress from './RdEthInputAddress.vue';
import RdEthInput from './RdEthInput.vue';
import RdEthQrcode from './RdEthQrcode.vue';
import RdEthCyptocurrency from './RdEthCyptocurrency.vue';
import {
  RdEthAddress, RdEthHex, RdEthToHex, hexFrom, hexTo, RdEthUnits, RdDate, RdDateLocale
} from './filters';

const filters = {
  RdEthAddress, RdEthHex, RdEthToHex, RdEthUnits, RdDate, RdDateLocale
};
export default {
  install(Vue) {
    Object.assign(Vue.prototype, { RdEth: { hexFrom, hexTo } });
    Object.assign(Vue.prototype, filters);
    Vue.component('RdButton', RdButton);
    Vue.component('RdButtonGroup', RdButtonGroup);
    Vue.component('RdButtonRadio', RdButtonRadio);
    Vue.component('RdButtonCheckbox', RdButtonCheckbox);
    Vue.component('RdCard', RdCard);
    Vue.component('RdListGroup', RdListGroup);
    Vue.component('RdListItem', RdListItem);
    Vue.component('RdInputGroup', RdInputGroup);
    Vue.component('RdDropdown', RdDropdown);
    Vue.component('RdInput', RdInput);
    Vue.component('RdSelect', RdSelect);
    Vue.component('RdTextarea', RdTextarea);
    Vue.component('RdAlert', RdAlert);
    Vue.component('RdBadge', RdBadge);
    Vue.component('RdBreadcrumb', RdBreadcrumb);
    Vue.component('RdCarousel', RdCarousel);
    Vue.component('RdCollapse', RdCollapse);
    Vue.component('RdJumbotron', RdJumbotron);
    Vue.component('RdModal', RdModal);
    Vue.component('RdModalHeader', RdModalHeader);
    Vue.component('RdModalBody', RdModalBody);
    Vue.component('RdModalFooter', RdModalFooter);
    Vue.component('RdNavbar', RdNavbar);
    Vue.component('RdNav', RdNav);
    Vue.component('RdPagination', RdPagination);
    Vue.component('RdProgress', RdProgress);
    Vue.component('RdNavbarBrand', RdNavbarBrand);
    Vue.component('RdNavbarToggler', RdNavbarToggler);
    Vue.component('RdNavbarText', RdNavbarText);
    Vue.component('RdCardHeader', RdCardHeader);
    Vue.component('RdCardBody', RdCardBody);
    Vue.component('RdCardFooter', RdCardFooter);
    Vue.component('RdPopover', RdPopover);
    Vue.component('RdQrcode', RdQrcode);
    Vue.component('RdTooltip', RdTooltip);
    Vue.component('RdEthInputAddress', RdEthInputAddress);
    Vue.component('RdEthInput', RdEthInput);
    Vue.component('RdEthQrcode', RdEthQrcode);
    Vue.component('RdEthCyptocurrency', RdEthCyptocurrency);
    Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
  }
};
