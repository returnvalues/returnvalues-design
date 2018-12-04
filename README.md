# returnvalues-design

## 폴더 기본 구성
- web/
  - client/ webpack 기반 vue 프로젝트폴더(프론트엔드)
    - build/ 웹팩 빌드
    - config/ 웹팩 설정
    - dist/ 빌드타겟디렉터리
    - src/
      - assets/ css,image 등
      - components/ ui components
      - layout/ 모바일,데스크탑,여러유형의 레이아웃 들
      - locale/ 언어지원 ko.js, en.js 등등
      - pages/  페이지(Register.vue, Login.vue 등등)
      - plugins/ 추가라이브러리 들
      - router/ 라우터 (index.js 를 기본으로 하고 의미 또는 기능적으로 분리하여 import 하여 처리)
      - service/ request,response handler 명명규칙 :  UserService.js
      - store/ vuex store 디렉터리
      - utils/ 추가유틸리티 들
  - server/ sailsjs 기반 프로젝트폴더(백엔드)
  

클라이언트 디렉터리에서 기본이 되는 것들을 추가시켜놓았고, 대략 이런 정도가 있으면 좀 구조적으로 분리가 되겠다 싶은 것들을 정리한 것이고, 추가적으로 필요하다고 생각되는 것들이나 빼도 되겠다 싶은 것들이나 그외 좋은 의견 및 아이디어는 얼마든지 환영하니까 의견주거나 바로 반영해도 됨.

## 주요 dependency

```
npm install --saved axios bootstrap bootstrap-vue popper.js vue vue-router vuex vue-i18n
```
## devDependency
babel, eslint, webpack, cypress 정도 그 외 eslint 관련 eslint-plugin-vue

## 테스트
테스트는 cypress 사용함.


## ESlint 
es6 = true
아래 eslintrc 파일 설정에 extend 에 vue/recommended, airbnb-base 와 rule 설정 참고해서 봐주면 될 것 같음.

```
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      },
      // 'alias': true
    }
  },
  // add your custom rules here

  rules: {
    'comma-dangle': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  'globals': {
    "$": true
  }
}

```




