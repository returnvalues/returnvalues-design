<template>
  <div>
    <h1>Getting started</h1>
    <h2>빌드 하는 법</h2>
    <highlight
      type="bash"
      code="npm run build"
    />
    <p>
      빌드 명령 실행시 <code>/build</code> 폴더에 빌드가 됩니다. <br>
    </p>
    <h4>NPM 패키지</h4>
    <p>
      빌드 폴더를 패키지 폴더로 사용하여 NPM에 업로드를 하거나
      <br><code>npm pack</code>을 통해 <code>.tgz</code> 파일을 생성하고<br>
      원하는 프로젝트에서 인스톨 하여 쓸 수도 있습니다.
    </p>
    <highlight
      type="bash"
      code="cd /build
npm pack"
    />
    <p>생성된 <code>.tgz</code> 파일을 원하는 프로젝트로 이동 후 </p>
    <highlight
      type="bash"
      code="npm i returnvalues-design-1.*.*.tgz"
    />
    <h2>사용법</h2>
    <p>
      Vue.js Plugin 형태로 <code>webpack</code> 혹은 <code>rollup</code> 등을 통해
      <code>import</code> 하여 사용합니다.
    </p>
    <highlight
      type="javascript"
      code="import Vue from 'vue';
import ReturnvaluesDesign from 'returnvalues-design';

Vue.use(ReturnvaluesDesign);"
    />
    <h2>Github Pages 브랜치 빌드 및 업로드</h2>
    <p>
      저장소에 푸시 권한이 있는 상태여야 합니다. <br>
      모든 변경 사항을 커밋한 후 아래 명령을 실행하면 <br>
      자동으로 빌드 완료 후 <code>gh-pages</code> 브랜치에 푸시를 하게 됩니다.
    </p>
    <highlight
      type="bash"
      code="npm run gh-pages"
    />
  </div>
</template>

<script>

export default {
  name: 'Index',
};
</script>
