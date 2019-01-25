<template>
  <div>
    <h1>Getting started</h1>
    <h2>How to build</h2>
    <p>The repository must have push permissions.
      <br>After committing all the changes,
      <br>Run the following command
      <br>it will build files in the
      <code>/build</code> folder and automatically push to the
      <code>build</code> branch after the build is completed.
    </p>
    <highlight type="bash" code="npm run build:push"/>
    <h2>Installation</h2>
    <highlight
      type="bash"
      code="npm i git+ssh://git@github.com/returnvalues/returnvalues-design.git#build"
    />
    <p>Install the version from the
      <code>build</code> branch
    </p>
    <h2>Usage</h2>
    <p>
      you can
      <code>import</code> the npm package as a Vue.js plugin with
      <code>webpack</code> or
      <code>rollup</code>
    </p>
    <highlight
      type="javascript"
      code="import Vue from 'vue';
import ReturnvaluesDesign from 'returnvalues-design';

Vue.use(ReturnvaluesDesign);"
    />
    <h2>Branch build and upload on Github</h2>
    <p>
      Authentication required to push to a repository.
      <br>Let's commit the files to store the changes you've made.
      <br>And then type the command below to build files and push changes from your commit into the
      <code>gh-pages</code> branch automatically.
    </p>
    <highlight type="bash" code="npm run gh-pages"/>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>
