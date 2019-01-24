<template>
  <div>
    <h1>Getting started</h1>
    <h2>빌드 하는 법</h2>
    <p>
      저장소에 푸시 권한이 있는 상태여야 합니다.
                          <br>모든 변경 사항을 커밋한 후 아래 명령을 실행하면
                          <br>
                          <code>/build</code> 폴더에 빌드 및
                          <code>build</code> 브랜치에 푸시를 하게 됩니다.
    </p>
    <highlight
      type="bash"
      code="npm run build:push"
    />
    <h2>Installation</h2>
    <highlight
      type="bash"
      code="npm i git+ssh://git@github.com/returnvalues/returnvalues-design.git#build"
    />
    <p>
      <code>build</code> 브랜치에 올라와 있는 버전으로 설치를 합니다.
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
    <highlight
      type="bash"
      code="npm run gh-pages"
    />
  </div>
</template>

<script>
export default {
  name: 'Index'
};
</script>
