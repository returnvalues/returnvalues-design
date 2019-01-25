# Getting started
## 빌드 하는 법
저장소에 푸시 권한이 있는 상태여야 합니다.  
모든 변경 사항을 커밋한 후 아래 명령을 실행하면  
`/build` 폴더에 빌드 및 `build` 브랜치에 푸시를 하게 됩니다.
```bash
npm run build:push
```
## 설치법
```bash
npm i git+ssh://git@github.com/returnvalues/returnvalues-design.git#build
```
`build` 브랜치에 올라와 있는 버전으로 설치를 합니다.
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