# Getting started
## 빌드 하는 법
```bash
npm run build
```
빌드 명령 실행시 `/build` 폴더에 빌드가 됩니다.

#### NPM 패키지
빌드 폴더를 패키지 폴더로 사용하여 NPM에 업로드를 하거나
`npm pack`을 통해 `.tgz` 파일을 생성하고  
원하는 프로젝트에서 인스톨 하여 쓸 수도 있습니다.

```bash
cd /build
npm pack
```
생성된 `.tgz` 파일을 원하는 프로젝트로 이동 후 
```bash
npm i returnvalues-design-1.*.*.tgz
```
## 사용법
Vue.js Plugin 형태로 `webpack` 혹은 `rollup` 등을 통해
`import` 하여 사용합니다.

```javascript
import Vue from 'vue';
import ReturnvaluesDesign from 'returnvalues-design';

Vue.use(ReturnvaluesDesign);
```
## Github Pages 브랜치 빌드 및 업로드
저장소에 푸시 권한이 있는 상태여야 합니다.   
모든 변경 사항을 커밋한 후 아래 명령을 실행하면   
자동으로 빌드 완료 후 `gh-pages` 브랜치에 푸시를 하게 됩니다.

```bash
npm run gh-pages
```