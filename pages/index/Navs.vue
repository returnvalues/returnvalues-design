<template>
  <div>
    Navs

    Base nav
         <rd-nav>
           <a
             class="active"
             href="javascript:"
           >
             Active
           </a>
           <a
             href="javascript:"
           >
             Link
           </a>
           <a
             href="javascript:"
           >
             Link
           </a>
           <a
             class="disabled"
             href="javascript:"
           >
             Disabled
           </a>
         </rd-nav>

         <rd-nav tag="nav">
           <a
             class="active"
             href="javascript:"
           >
             Active
           </a>
           <a

             href="javascript:"
           >
             Link
           </a>
           <a

             href="javascript:"
           >
             Link
           </a>
           <a
             class="disabled"
             href="javascript:"
           >
             Disabled
           </a>
         </rd-nav>
         Vertical
         <rd-nav
           class="flex-column"
         >
           <a
             class="active"
             href="javascript:"
           >
             Active
           </a>
           <a

             href="javascript:"
           >
             Link
           </a>
           <a

             href="javascript:"
           >
             Link
           </a>
           <a
             class="disabled"
             href="javascript:"
           >
             Disabled
           </a>
         </rd-nav>


         Tabs
         <rd-nav tabs>
           <a
             class="active"
             href="javascript:"
           >
             Active
           </a>
           <a

             href="javascript:"
           >
             Link
           </a>
           <a

             href="javascript:"
           >
             Link
           </a>
           <a
             class="disabled"
             href="javascript:"
           >
             Disabled
           </a>
         </rd-nav>
         Pills
         <rd-nav pills>
           <a
             class="active"
             href="javascript:"
           >
             Active
           </a>
           <a

             href="javascript:"
           >
             Link
           </a>
           <a

             href="javascript:"
           >
             Link
           </a>
           <a
             class="disabled"
             href="javascript:"
           >
             Disabled
           </a>
         </rd-nav>
         Fill
         <rd-nav
           pills
           fill
         >
           <a
             class="active"
             href="javascript:"
           >
             Active
           </a>
           <a

             href="javascript:"
           >
             Longer nav link
           </a>
           <a

             href="javascript:"
           >
             Link
           </a>
           <a
             class="disabled"
             href="javascript:"
           >
             Disabled
           </a>
         </rd-nav>
         <rd-nav
           pills
           fill
         >
           <a
             class=" active"
             href="javascript:"
           >
             Active
           </a>
           <a

             href="javascript:"
           >
             Link
           </a>
           <a

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

         justify
         <rd-nav
           pills
           justified
         >
           <a
             class="active"
             href="javascript:"
           >
             Active
           </a>
           <a

             href="javascript:"
           >
             Longer nav link
           </a>
           <a

             href="javascript:"
           >
             Link
           </a>
           <a
             class="disabled"
             href="javascript:"
           >
             Disabled
           </a>
         </rd-nav>

         Using dropdowns

         <rd-nav tabs>
           <a
             class="active"
             href="javascript:"
           >
             Active
           </a>
           <rd-dropdown>
             <a
               slot="button"
               href="javascript:"
             >
               Dropdown
             </a>
             <a

               href="javascript:"
             >
               Action
             </a>
             <a

               href="javascript:"
             >
               Another action
             </a>
             <a

               href="javascript:"
             >
               Something else here
             </a>
             <div class="dropdown-divider" />
             <a

               href="javascript:"
             >
               Separated link
             </a>
           </rd-dropdown>
           <a

             href="javascript:"
           >
             Link
           </a>
           <a
             class="disabled"
             href="javascript:"
           >
             Disabled
           </a>
         </rd-nav>

         Pills with dropdowns
         <rd-nav pills>
           <a
             class="active"
             href="javascript:"
           >
             Active
           </a>
           <rd-dropdown>
             <a
               slot="button"
               href="javascript:"
             >
               Dropdown
             </a>
             <a

               href="javascript:"
             >
               Action
             </a>
             <a

               href="javascript:"
             >
               Another action
             </a>
             <a

               href="javascript:"
             >
               Something else here
             </a>
             <div class="dropdown-divider" />
             <a

               href="javascript:"
             >
               Separated link
             </a>
           </rd-dropdown>
           <a

             href="javascript:"
           >
             Link
           </a>
           <a
             class="disabled"
             href="javascript:"
           >
             Disabled
           </a>
         </rd-nav>
  </div>
</template>

<script>
import { RdDropdown, RdNav } from '~/src';

export default {
  name: 'Navs',
  components: {
    RdDropdown,
    RdNav
  }
};
</script>
