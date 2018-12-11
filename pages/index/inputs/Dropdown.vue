<template>
  <div>
    dropdown

    Single button
           <rd-dropdown>
             <rd-button
               slot="button"
               secondary
             >
               text
             </rd-button>
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
           </rd-dropdown>
           <rd-dropdown>
             <rd-button
               slot="button"
               danger
             >
               Action
             </rd-button>
             <a href="javascript:">
               Action
             </a>
             <a href="javascript:">
               Another action
             </a>
             <a href="javascript:">
               Something else here
             </a>
             <div class="dropdown-divider" />
             <a href="javascript:">
               Separated link
             </a>
           </rd-dropdown>

           Split button

           <rd-dropdown split>
             <rd-button
               slot="button"
               danger
             >
               Action
             </rd-button>
             <rd-button
               slot="button"
               danger
             >
               <span class="sr-only">
                 Toggle Dropdown
               </span>
             </rd-button>
             <a href="javascript:">
               Action
             </a>
             <a href="javascript:">
               Another action
             </a>
             <a href="javascript:">
               Something else here
             </a>
             <div class="dropdown-divider" />
             <a href="javascript:">
               Separated link
             </a>
           </rd-dropdown>

           Sizing
           <rd-dropdown split>
             <rd-button
               slot="button"
               secondary
               lg
             >
               Large button
             </rd-button>

             <a href="javascript:">
               Action
             </a>
             <a href="javascript:">
               Another action
             </a>
             <a href="javascript:">
               Something else here
             </a>
             <div class="dropdown-divider" />
             <a href="javascript:">
               Separated link
             </a>
           </rd-dropdown>
           <rd-dropdown split>
             <rd-button
               slot="button"
               secondary
               lg
             >
               Large split button
             </rd-button>
             <rd-button
               slot="button"
               secondary
               lg
             >
               <span class="sr-only">
                 Toggle Dropdown
               </span>
             </rd-button>

             <a href="javascript:">
               Action
             </a>
             <a href="javascript:">
               Another action
             </a>
             <a href="javascript:">
               Something else here
             </a>
             <div class="dropdown-divider" />
             <a href="javascript:">
               Separated link
             </a>
           </rd-dropdown>

           <!-- Small button groups (default and split) -->
           <rd-dropdown>
             <rd-button
               slot="button"
               secondary
               sm
             >
               Small button
             </rd-button>

             <a href="javascript:">
               Action
             </a>
             <a href="javascript:">
               Another action
             </a>
             <a href="javascript:">
               Something else here
             </a>
             <div class="dropdown-divider" />
             <a href="javascript:">
               Separated link
             </a>
           </rd-dropdown>
           <rd-dropdown split>
             <rd-button
               slot="button"
               secondary
               sm
             >
               Small split button
             </rd-button>
             <rd-button
               slot="button"
               secondary
               sm
             >
               <span class="sr-only">
                 Toggle Dropdown
               </span>
             </rd-button>

             <a href="javascript:">
               Action
             </a>
             <a href="javascript:">
               Another action
             </a>
             <a href="javascript:">
               Something else here
             </a>
             <div class="dropdown-divider" />
             <a href="javascript:">
               Separated link
             </a>
           </rd-dropdown>

           Dropright

           <rd-dropdown right>
             <rd-button
               slot="button"
               secondary
             >
               Dropright
             </rd-button>
             <a href="javascript:">
               Action
             </a>
             <a href="javascript:">
               Another action
             </a>
             <a href="javascript:">
               Something else here
             </a>
             <div class="dropdown-divider" />
             <a href="javascript:">
               Separated link
             </a>
           </rd-dropdown>

           <rd-dropdown
             split
             dropright
           >
             <rd-button
               slot="button"
               secondary
             >
               Split dropright
             </rd-button>
             <rd-button
               slot="button"
               secondary
             >
               <span class="sr-only">
                 Toggle Dropright
               </span>
             </rd-button>
             <a href="javascript:">
               Action
             </a>
             <a href="javascript:">
               Another action
             </a>
             <a href="javascript:">
               Something else here
             </a>
             <div class="dropdown-divider" />
             <a href="javascript:">
               Separated link
             </a>
           </rd-dropdown>

           Dropleft
           <rd-dropdown dropleft>
             <rd-button
               slot="button"
               secondary
             >
               Dropleft
             </rd-button>
             <a href="javascript:">
               Action
             </a>
             <a href="javascript:">
               Another action
             </a>
             <a href="javascript:">
               Something else here
             </a>
             <div class="dropdown-divider" />
             <a href="javascript:">
               Separated link
             </a>
           </rd-dropdown>


           <rd-dropdown split>
             <rd-dropdown
               slot="button"
               dropleft
               split
             >
               <rd-button
                 slot="button"
                 secondary
               >
                 <span class="sr-only">
                   Toggle Dropright
                 </span>
               </rd-button>
               <a href="javascript:">
                 Action
               </a>
               <a href="javascript:">
                 Another action
               </a>
               <a href="javascript:">
                 Something else here
               </a>
               <div class="dropdown-divider" />
               <a href="javascript:">
                 Separated link
               </a>
             </rd-dropdown>
             <rd-button
               slot="button"
               secondary
             >
               Split dropleft
             </rd-button>
           </rd-dropdown>

           Menu items
           <rd-dropdown>
             <rd-button
               slot="button"
               secondary
             >
               Dropdown
             </rd-button>
             <button
               class="dropdown-item"
               type="button"
             >
               Action
             </button>
             <button
               class="dropdown-item"
               type="button"
             >
               Another action
             </button>
             <button
               class="dropdown-item"
               type="button"
             >
               Something else here
             </button>
           </rd-dropdown>

           Menu alignment
           <rd-dropdown alignright>
             <rd-button
               slot="button"
               secondary
             >
               Right-aligned menu
             </rd-button>
             <button
               class="dropdown-item"
               type="button"
             >
               Action
             </button>
             <button
               class="dropdown-item"
               type="button"
             >
               Another action
             </button>
             <button
               class="dropdown-item"
               type="button"
             >
               Something else here
             </button>
           </rd-dropdown>

           Menu content
           Headers

           <rd-dropdown>
             <rd-button
               slot="button"
               secondary
             >
               Header menu
             </rd-button>
             <h6 slot="header">
               Dropdown header
             </h6>
             <a href="javascript:">
               Action
             </a>
             <a href="javascript:">
               Another action
             </a>
           </rd-dropdown>

           Text
           <rd-dropdown>
             <rd-button
               slot="button"
               secondary
             >
               Text menu
             </rd-button>
             <div class="p-4 text-muted">
               <p>Some example text that's free-flowing within the dropdown menu.</p>
               <p class="mb-0">
                 And this is more example text.
               </p>
             </div>
           </rd-dropdown>

    Forms
    <rd-dropdown>
      <rd-button
        slot="button"
        secondary
      >
        Form menu
      </rd-button>
      <form class="px-4 py-3">
        <div class="form-group">
          <label for="exampleDropdownFormEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
        </div>
        <div class="form-group">
          <label for="exampleDropdownFormPassword1">Password</label>
          <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="dropdownCheck">
          <label class="form-check-label" for="dropdownCheck">
            Remember me
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">New around here? Sign up</a>
      <a class="dropdown-item" href="#">Forgot password?</a>
    </rd-dropdown>

  </div>
</template>

<script>
import { RdDropdown, RdButton } from '~/src';

export default {
  name: 'Dropdown',
  components: { RdDropdown, RdButton }
};
</script>

<style scoped>

</style>
