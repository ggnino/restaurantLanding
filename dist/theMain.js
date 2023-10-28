/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/heading-component/heading-component-styles.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/heading-component/heading-component-styles.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/imgs/about-bg.png */ "./src/assets/imgs/about-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.heading {
  height: 100%;
  width: clamp(50%, 150rem, 80%);
  background-color: rgba(49, 87, 44, 0.7);
  transition: all 0.5s;
  overflow-y: hidden;
}
.heading-container {
  transition: all 0.2s;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  width: 100%;
  height: 92.5vh;
  display: none;
}
.heading-group {
  width: 100%;
  color: GhostWhite;
  cursor: default;
  padding: 5rem;
  text-align: center;
  gap: 5rem;
}
.heading-group > h1 {
  font-size: 15rem;
}
.heading-group > p {
  font-size: 5rem;
}`, "",{"version":3,"sources":["webpack://./src/components/heading-component/heading-component-styles.scss","webpack://./src/assets/styles/variables.scss"],"names":[],"mappings":"AAEA;EACE,YAAA;EACA,8BAAA;EACA,uCAAA;EACA,oBAAA;EACA,kBAAA;AADF;AAGE;EACE,oBAAA;EACA,kHAAA;EAEA,WAAA;EACA,cCVQ;EDWR,aAAA;AAFJ;AAIE;EACE,WAAA;EACA,iBCnBS;EDoBT,eAAA;EACA,aAAA;EACA,kBAAA;EACA,SAAA;AAFJ;AAII;EACE,gBAAA;AAFN;AAII;EACE,eAAA;AAFN","sourcesContent":["@use \"../../assets/styles/variables.scss\" as _;\n\n.heading {\n  height: 100%;\n  width: clamp(50%, 150rem, 80%);\n  background-color: rgba(_.$bg-color, 0.7);\n  transition: all 0.5s;\n  overflow-y: hidden;\n\n  &-container {\n    transition: all 0.2s;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),\n      url(\"../../assets/imgs/about-bg.png\");\n    width: 100%;\n    height: _.$my-height;\n    display: none;\n  }\n  &-group {\n    width: 100%;\n    color: _.$font-color;\n    cursor: default;\n    padding: 5rem;\n    text-align: center;\n    gap: 5rem;\n\n    & > h1 {\n      font-size: 15rem;\n    }\n    & > p {\n      font-size: 5rem;\n    }\n  }\n}\n","$font-color: GhostWhite;\n$bg-color: #31572c;\n$bg-color2: #90a955;\n$bg-color3: #ecf39e;\n$my-height: calc(100vh - 7.5vh);\n$my-width: clamp(50%, 150rem, 80%);\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/menu-component/menu-component-styles.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/menu-component/menu-component-styles.scss ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/imgs/menu.png */ "./src/assets/imgs/menu.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.menu {
  width: 100%;
  height: 92.5vh;
  background-color: #90a955;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  z-index: 10;
}
.menu-items {
  position: relative;
  width: clamp(50%, 150rem, 80%);
  height: 100%;
  padding: 5rem;
  background-color: rgba(144, 169, 85, 0.7);
}
.menu-items-row {
  align-items: flex-end;
  padding: 1rem;
  gap: 2rem;
  width: 100%;
  max-width: 90rem;
  height: 100%;
  max-height: 35rem;
  overflow: hidden;
}
.menu-items-row-2 {
  justify-content: flex-end;
  align-items: flex-start;
}
.menu-items-item {
  background-color: #31572c;
  width: 100%;
  max-width: 50rem;
  height: 100%;
  max-height: 30rem;
  transform: scale(1);
}
.menu-items-item .description {
  font-size: 2.2rem;
}
.menu-img {
  width: 100%;
  height: 100%;
}
.menu-highlights {
  width: 100%;
  max-width: 35rem;
  height: 100%;
  max-height: 30rem;
  background-color: #31572c;
  text-align: center;
}
.menu-highlights-highlight {
  transition: all 1.5s;
  font-size: 5rem;
}`, "",{"version":3,"sources":["webpack://./src/components/menu-component/menu-component-styles.scss","webpack://./src/assets/styles/variables.scss"],"names":[],"mappings":"AACA;EACE,WAAA;EACA,cCCU;EDAV,yBCFU;EDGV,kHAAA;EAEA,WAAA;AADF;AAGE;EACE,kBAAA;EACA,8BCNO;EDOP,YAAA;EACA,aAAA;EACA,yCAAA;AADJ;AAGI;EACE,qBAAA;EACA,aAAA;EACA,SAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;AADN;AAEM;EACE,yBAAA;EACA,uBAAA;AAAR;AAGI;EACE,yBC9BK;ED+BL,WAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;AADN;AAGM;EACE,iBAAA;AADR;AAME;EACE,WAAA;EACA,YAAA;AAJJ;AAOE;EACE,WAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,yBCrDO;EDsDP,kBAAA;AALJ;AAOI;EACE,oBAAA;EACA,eAAA;AALN","sourcesContent":["@use \"../../assets/styles/variables.scss\" as _;\n.menu {\n  width: 100%;\n  height: _.$my-height;\n  background-color: _.$bg-color2;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n    url(\"../../assets/imgs/menu.png\");\n  z-index: 10;\n\n  &-items {\n    position: relative;\n    width: _.$my-width;\n    height: 100%;\n    padding: 5rem;\n    background-color: rgba(_.$bg-color2, 0.7);\n\n    &-row {\n      align-items: flex-end;\n      padding: 1rem;\n      gap: 2rem;\n      width: 100%;\n      max-width: 90rem;\n      height: 100%;\n      max-height: 35rem;\n      overflow: hidden;\n      &-2 {\n        justify-content: flex-end;\n        align-items: flex-start;\n      }\n    }\n    &-item {\n      background-color: _.$bg-color;\n      width: 100%;\n      max-width: 50rem;\n      height: 100%;\n      max-height: 30rem;\n      transform: scale(1);\n\n      & .description {\n        font-size: 2.2rem;\n      }\n    }\n  }\n\n  &-img {\n    width: 100%;\n    height: 100%;\n  }\n\n  &-highlights {\n    width: 100%;\n    max-width: 35rem;\n    height: 100%;\n    max-height: 30rem;\n    background-color: _.$bg-color;\n    text-align: center;\n\n    &-highlight {\n      transition: all 1.5s;\n      font-size: 5rem;\n    }\n  }\n}\n","$font-color: GhostWhite;\n$bg-color: #31572c;\n$bg-color2: #90a955;\n$bg-color3: #ecf39e;\n$my-height: calc(100vh - 7.5vh);\n$my-width: clamp(50%, 150rem, 80%);\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar-component/navbar-component-styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar-component/navbar-component-styles.scss ***!
  \***************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #31572c;
  box-shadow: 0 0 2.5rem 0.5rem black;
  color: white;
  width: 100%;
  z-index: 10;
}
.nav-logo {
  padding: 0.2rem 13rem;
  font-size: 3rem;
  width: 30%;
  cursor: default;
}
.nav-items {
  list-style: none;
  width: 100%;
}
.nav-items-item {
  font-size: 2rem;
  background-color: transparent;
  transition: all 0.2s linear;
}
.nav-items-item-link {
  display: inline-block;
  text-decoration: none;
  color: var(--font-color);
  transition: all 0.2s linear;
  padding: 3rem 5rem;
  background-color: transparent;
}
.nav-items-item:hover {
  background-color: #90a955;
  color: gold;
}`, "",{"version":3,"sources":["webpack://./src/components/navbar-component/navbar-component-styles.scss","webpack://./src/assets/styles/variables.scss"],"names":[],"mappings":"AACA;EACE,eAAA;EACA,MAAA;EACA,QAAA;EACA,OAAA;EACA,yBCLS;EDMT,mCAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;AAAF;AAEE;EACE,qBAAA;EACA,eAAA;EACA,UAAA;EACA,eAAA;AAAJ;AAEE;EACE,gBAAA;EACA,WAAA;AAAJ;AAEI;EACE,eAAA;EAEA,6BAAA;EACA,2BAAA;AADN;AAEM;EACE,qBAAA;EACA,qBAAA;EACA,wBAAA;EACA,2BAAA;EACA,kBAAA;EACA,6BAAA;AAAR;AAGI;EACE,yBCnCM;EDoCN,WAAA;AADN","sourcesContent":["@use \"../../assets/styles/variables.scss\" as _;\n.nav {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  background-color: _.$bg-color;\n  box-shadow: 0 0 2.5rem 0.5rem black;\n  color: white;\n  width: 100%;\n  z-index: 10;\n\n  &-logo {\n    padding: 0.2rem 13rem;\n    font-size: 3rem;\n    width: 30%;\n    cursor: default;\n  }\n  &-items {\n    list-style: none;\n    width: 100%;\n\n    &-item {\n      font-size: 2rem;\n\n      background-color: transparent;\n      transition: all 0.2s linear;\n      &-link {\n        display: inline-block;\n        text-decoration: none;\n        color: var(--font-color);\n        transition: all 0.2s linear;\n        padding: 3rem 5rem;\n        background-color: transparent;\n      }\n    }\n    &-item:hover {\n      background-color: _.$bg-color2;\n      color: gold;\n    }\n  }\n}\n","$font-color: GhostWhite;\n$bg-color: #31572c;\n$bg-color2: #90a955;\n$bg-color3: #ecf39e;\n$my-height: calc(100vh - 7.5vh);\n$my-width: clamp(50%, 150rem, 80%);\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2??family=Kalam&family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&family=Courgette&family=Shantell+Sans:ital,wght@1,500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Defaults */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
  scrollbar-width: thin;
  scrollbar-color: #31572c #ecf39e;
}

html ::-webkit-scrollbar {
  width: 1rem;
}

html ::-webkit-scrollbar-track {
  background-color: transparent;
}

html ::-webkit-scrollbar-thumb {
  background-color: rgba(49, 87, 44, 0.7529411765);
  border: 0.2rem solid #ecf39e;
  border-radius: 1rem;
}

html ::-webkit-scrollbar-thumb:hover {
  border: 0.2rem solid gold;
}

body {
  color: GhostWhite;
  font-family: "Kalam", cursive;
  background-color: #31572c;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #ecf39e;
}

h1,
h2,
h3,
h4,
h5,
h6,
a,
.btn {
  font-family: "Shantell Sans", cursive;
}

#content {
  margin-top: 7.5vh;
  height: 92.5vh;
  background-color: black;
}

.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.flex-row {
  flex-direction: row;
}
.flex-center {
  justify-content: center;
  align-items: center;
}

.border {
  border: 0.4rem solid black;
}
.border-radius-sm {
  border-radius: 0.5rem;
}
.border-bottom {
  border-bottom: 1.4rem solid black;
}
.border-radius-md {
  border-radius: 1rem;
}
.border-topAndBottom {
  border-top: 0.4rem solid black;
  border-bottom: 0.4rem solid black;
}
.border-sides {
  border-left: 0.4rem solid black;
  border-right: 0.4rem solid black;
}

.bg-img-center {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.btn,
a {
  transition: all 0.2s;
}

.btn {
  display: inline-block;
  font-size: 3rem;
  padding: 3rem;
  color: var(--font-color);
  background-color: black;
  cursor: pointer;
  z-index: 3;
}
.btn:hover {
  transform: scale(1.2);
  color: gold;
}

.title {
  padding: 2rem;
  font-size: 4rem;
  text-align: center;
  background-color: black;
  z-index: 5;
}

.description {
  position: absolute;
  top: 0;
  align-items: center;
  font-size: 2rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
  background-color: rgba(49, 87, 44, 0.9);
  bottom: 0;
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/styles.scss","webpack://./src/index.scss","webpack://./src/assets/styles/variables.scss","webpack://./src/assets/styles/util.scss"],"names":[],"mappings":"AAEA,aAAA;AACA;EACE,sBAAA;EACA,UAAA;EACA,SAAA;ACAF;;ADGA;EACE,uBAAA;EACA,gBAAA;EACA,qBAAA;EACA,gCAAA;ACAF;;ADEA;EACE,WAAA;ACCF;;ADCA;EACE,6BAAA;ACEF;;ADAA;EACE,gDAAA;EACA,4BAAA;EACA,mBAAA;ACGF;;ADDA;EACE,yBAAA;ACIF;;ADFA;EACE,iBE9BW;EF+BX,6BAAA;EACA,yBE/BS;ADoCX;;ADHA;EACE,qBAAA;EACA,cAAA;ACMF;;ADJA;EACE,cEpCU;AD2CZ;;ADLA;;;;;;;;EAQE,qCAAA;ACQF;;ADNA;EACE,iBAAA;EACA,cAAA;EACA,uBAAA;ACSF;;AE9DA;EACE,aAAA;AFiEF;AEhEE;EACE,sBAAA;AFkEJ;AEhEE;EACE,mBAAA;AFkEJ;AEhEE;EACE,uBAAA;EACA,mBAAA;AFkEJ;;AE9DA;EACE,0BAAA;AFiEF;AEhEE;EACE,qBAAA;AFkEJ;AE/DE;EACE,iCAAA;AFiEJ;AE/DE;EACE,mBAAA;AFiEJ;AE/DE;EACE,8BAAA;EACA,iCAAA;AFiEJ;AE/DE;EACE,+BAAA;EACA,gCAAA;AFiEJ;;AE7DA;EACE,2BAAA;EACA,4BAAA;EACA,sBAAA;AFgEF;;AE9DA;;EAEE,oBAAA;AFiEF;;AE/DA;EACE,qBAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;EACA,uBAAA;EACA,eAAA;EACA,UAAA;AFkEF;AEjEE;EACE,qBAAA;EACA,WAAA;AFmEJ;;AE/DA;EACE,aAAA;EACA,eAAA;EACA,kBAAA;EACA,uBAAA;EACA,UAAA;AFkEF;;AE/DA;EACE,kBAAA;EACA,MAAA;EACA,mBAAA;EACA,eAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,uCAAA;EACA,SAAA;AFkEF","sourcesContent":["@use \"./variables.scss\" as _;\n\n/* Defaults */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  font-size: 62.5%;\n  scrollbar-width: thin;\n  scrollbar-color: _.$bg-color _.$bg-color3;\n}\nhtml ::-webkit-scrollbar {\n  width: 1rem;\n}\nhtml ::-webkit-scrollbar-track {\n  background-color: transparent;\n}\nhtml ::-webkit-scrollbar-thumb {\n  background-color: #31572cc0;\n  border: 0.2rem solid _.$bg-color3;\n  border-radius: 1rem;\n}\nhtml ::-webkit-scrollbar-thumb:hover {\n  border: 0.2rem solid gold;\n}\nbody {\n  color: _.$font-color;\n  font-family: \"Kalam\", cursive;\n  background-color: _.$bg-color;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\na:hover {\n  color: _.$bg-color3;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\na,\n.btn {\n  font-family: \"Shantell Sans\", cursive;\n}\n#content {\n  margin-top: 7.5vh;\n  height: calc(100vh - 7.5vh);\n  background-color: black;\n}\n","@use \"./assets/styles/styles.scss\";\n@use \"./assets/styles/util.scss\";\n@import url(\"https://fonts.googleapis.com/css2??family=Kalam&family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&family=Courgette&family=Shantell+Sans:ital,wght@1,500&display=swap\");\n","$font-color: GhostWhite;\n$bg-color: #31572c;\n$bg-color2: #90a955;\n$bg-color3: #ecf39e;\n$my-height: calc(100vh - 7.5vh);\n$my-width: clamp(50%, 150rem, 80%);\n","@use \"./variables.scss\" as _;\n.flex {\n  display: flex;\n  &-col {\n    flex-direction: column;\n  }\n  &-row {\n    flex-direction: row;\n  }\n  &-center {\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n.border {\n  border: 0.4rem solid black;\n  &-radius-sm {\n    border-radius: 0.5rem;\n  }\n\n  &-bottom {\n    border-bottom: 1.4rem solid black;\n  }\n  &-radius-md {\n    border-radius: 1rem;\n  }\n  &-topAndBottom {\n    border-top: 0.4rem solid black;\n    border-bottom: 0.4rem solid black;\n  }\n  &-sides {\n    border-left: 0.4rem solid black;\n    border-right: 0.4rem solid black;\n  }\n}\n\n.bg-img-center {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.btn,\na {\n  transition: all 0.2s;\n}\n.btn {\n  display: inline-block;\n  font-size: 3rem;\n  padding: 3rem;\n  color: var(--font-color);\n  background-color: black;\n  cursor: pointer;\n  z-index: 3;\n  &:hover {\n    transform: scale(1.2);\n    color: gold;\n  }\n}\n\n.title {\n  padding: 2rem;\n  font-size: 4rem;\n  text-align: center;\n  background-color: black;\n  z-index: 5;\n}\n\n.description {\n  position: absolute;\n  top: 0;\n  align-items: center;\n  font-size: 2rem;\n  padding: 1rem;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(_.$bg-color, 0.9);\n  bottom: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/heading-component/heading-component-styles.scss":
/*!************************************************************************!*\
  !*** ./src/components/heading-component/heading-component-styles.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./heading-component-styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/heading-component/heading-component-styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/menu-component/menu-component-styles.scss":
/*!******************************************************************!*\
  !*** ./src/components/menu-component/menu-component-styles.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./menu-component-styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/menu-component/menu-component-styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/navbar-component/navbar-component-styles.scss":
/*!**********************************************************************!*\
  !*** ./src/components/navbar-component/navbar-component-styles.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./navbar-component-styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar-component/navbar-component-styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/heading-component/heading-component.js":
/*!***************************************************************!*\
  !*** ./src/components/heading-component/heading-component.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heading_component_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading-component-styles.scss */ "./src/components/heading-component/heading-component-styles.scss");


function headingComponent() {
  /*
   *********************** Create component elements ***************************************
   */
  const headingContainer = document.createElement("div");
  const headerElement = document.createElement("header");
  const headerContentContainer = document.createElement("div");
  const headerContentHeading = document.createElement("h1");
  const headerContentMsg1 = document.createElement("p");
  const headerContentMsg2 = document.createElement("p");
  const headerBtn = document.createElement("a");

  /*
   *********************** Set component elements attribute ***************************************
   */

  headerContentContainer.setAttribute(
    "class",
    "heading-group flex flex-col flex-center"
  );
  headerContentContainer.setAttribute("id", "hgroup");
  headingContainer.setAttribute(
    "class",
    "heading-container flex flex-row flex-center bg-img-center"
  );
  headerElement.setAttribute(
    "class",
    "heading flex flex-center flex-col border-sides"
  );
  headerElement.setAttribute("id", "home");
  headerBtn.setAttribute("href", "#menu");
  headerBtn.setAttribute("class", "btn border border-radius-md");

  /*
   *********************** Set component elements content ***************************************
   */

  headerContentHeading.textContent = "Tierra";
  headerContentMsg1.textContent = "Welcome to";
  headerContentMsg2.textContent = "The best plant-based restaurant in town.";
  headerBtn.textContent = "Order Now";

  /*
   *********************** Add component elements ***************************************
   */

  headerContentContainer.append(
    headerContentMsg1,
    headerContentHeading,
    headerContentMsg2,
    headerBtn
  );
  headerElement.append(headerContentContainer);
  headingContainer.appendChild(headerElement);

  return headingContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headingComponent);


/***/ }),

/***/ "./src/components/menu-component/menu-component.js":
/*!*********************************************************!*\
  !*** ./src/components/menu-component/menu-component.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils-functions */ "./src/utils/utils-functions.js");
/* harmony import */ var _menu_component_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-component-styles.scss */ "./src/components/menu-component/menu-component-styles.scss");


function menuComponent() {
  /*
   *********************** Create component elements ***************************************
   */
  const menuSectionElement = document.createElement("section");
  const menuItemsContainer = document.createElement("div");
  const menuTitleElement = document.createElement("h2");
  const menuItemsRow1Container = document.createElement("div");
  const menuItemsRow2Container = document.createElement("div");
  const menuHighlightsContainer = document.createElement("h2");
  const menuHighlights = (0,_utils_utils_functions__WEBPACK_IMPORTED_MODULE_0__.createMyElements)("menu-highlights", 3);
  const menuHighlight = document.createElement("h3");
  const menuBtn = document.createElement("button");

  /*
   *********************** Set component elements attribute ***************************************
   */
  menuSectionElement.setAttribute("id", "menu");
  menuSectionElement.setAttribute(
    "class",
    "menu flex flex-col flex-center bg-img-center border-topAndBottom"
  );
  menuSectionElement.setAttribute("tabindex", 0);
  menuItemsContainer.setAttribute(
    "class",
    "menu-items flex flex-col flex-center border border-radius-md"
  );
  menuTitleElement.setAttribute("class", "title border border-radius-md");
  menuItemsRow1Container.setAttribute("class", "flex menu-items-row");
  menuItemsRow2Container.setAttribute(
    "class",
    "flex menu-items-row menu-items-row-2"
  );
  menuHighlightsContainer.setAttribute(
    "class",
    "menu-highlights flex flex-col flex-center border border-radius-sm "
  );
  menuHighlight.setAttribute("class", "menu-highlights-highlight");
  menuBtn.setAttribute("class", "btn border border-radius-md");

  /*
   *********************** Set component elements content ***************************************
   */

  menuTitleElement.textContent = "A taste of what we are cooking";
  menuHighlight.textContent = "Menu Highlights";
  menuBtn.textContent = "Full Menu";

  /*
   *********************** Add component elements ***************************************
   */

  menuHighlightsContainer.appendChild(menuHighlight);
  menuItemsRow1Container.append(menuHighlightsContainer, menuHighlights[0]);
  menuItemsRow2Container.append(menuHighlights[1], menuHighlights[2]);
  menuItemsContainer.append(
    menuTitleElement,
    menuItemsRow1Container,
    menuItemsRow2Container,
    menuBtn
  );
  menuSectionElement.append(menuItemsContainer);
  return menuSectionElement;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuComponent);
/*

******************** Component Blueprint *********************************

<section
				class="menu flex-col flex-center background-img-center border-topAndBottom"
				id="menu"
				tabindex="0"
			>
				<div
					class="menu-items relative flex-col flex-center border border-radius"
				>
					<h2 class="title absolute border border-radius">
						A taste of what we are cooking
					</h2>
					<div class="menu-items-container">
						<div
							class="menu-highlights flex-col flex-center border border-radius"
						>
							<h3 id="menu-highlight">Menu Highlights</h3>
						</div>
						<div class="menu-item border border-radius" id="burger">
							<img
								class="menu-img border-radius"
								src="./imgs/vegan-burger.jpg"
								alt="A vegan burger topped on a brioche bun with a side of potatoes chips and a soft drink of cola."
							/>
							<p class="description absolute border-radius">
								Our vegan burger will leave you stunned by the flavor. Our
								homemade burger patties are not like any other bland patty, ours
								come packed with <strong>protein</strong>, plenty of herbs and
								spices. Dressing up it with our homemade cheddar cheese and
								topped with your choice of lettuce or kale, onions and tomato.
								With our french fries included, your going to be shocked at how
								good a plant based burger can really be.
							</p>
						</div>
					</div>
					<div class="menu-items-container" id="menuContainer2">
						<div class="menu-item border border-radius" id="bistec">
							<img
								class="menu-img border-radius"
								src="./imgs/vegan-steak-and-potatoes.jpg"
								alt="A plate of a grilled vegan steak with potatoes and some collard greens."
							/>
							<p class="description absolute border-radius">
								Yes, that is right, we have steak and of course its plant-based.
								Our homemade steak is based off of <strong>gluten</strong>.
								Seasoned to perfection, you'll love those hints of oregano and
								salt buzzing those taste buds. Served with your choice of two
								sides and a drink, you will be wondering
								<i>why haven't I changed to plant-based diet, yet?</i>
							</p>
						</div>
						<div class="menu-item border border-radius" id="pollo">
							<img
								class="menu-img border-radius"
								src="./imgs/chik'n-and-fries.png"
								alt="A beautiful plate of french fries and fried vegan chicken with side of ketchup and veggies."
							/>
							<p class="description absolute border-radius">
								A plant-based spin on a lovely classic, that we all enjoy. Our
								fried chik'n is more that just finger licking good, it just
								defies everything that you might know about food, especially
								plant-based food. Fried to a cripsy perfection with those lovely
								fries, you will be wondering
								<i> how good will this taste on a sandwich? </i>
							</p>
						</div>
					</div>
				</div>
				<button class="btn border border-radius" title="#notWorkingFullMenuBtn">
					Full Menu
				</button>
			</section>
*****************************************************************************************************************************
*/


/***/ }),

/***/ "./src/components/navbar-component/navbar-component.js":
/*!*************************************************************!*\
  !*** ./src/components/navbar-component/navbar-component.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navbar)
/* harmony export */ });
/* harmony import */ var _navbar_component_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar-component-styles.scss */ "./src/components/navbar-component/navbar-component-styles.scss");
/* harmony import */ var _utils_utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils-functions */ "./src/utils/utils-functions.js");


function navbar() {
  /*
   *********************** Create component elements ***************************************
   */
  const navbar = document.createElement("nav");
  const navLogoContainer = document.createElement("div");
  const navLogo = document.createElement("h2");
  const navItemsContainer = document.createElement("ul");
  const navItems = (0,_utils_utils_functions__WEBPACK_IMPORTED_MODULE_1__.createMyElements)("nav", 3);

  /*
   *********************** Set component elements attribute ***************************************
   */

  navbar.setAttribute("class", "nav flex flex-col flex-center border-bottom");
  navItemsContainer.setAttribute(
    "class",
    "nav-items flex flex-row flex-center"
  );
  navLogoContainer.setAttribute(
    "class",
    "nav-logo flex flex-center border-radius-sm"
  );

  /*
   *********************** Set component elements content ***************************************
   */

  navLogo.textContent = "Tierra";

  /*
   *********************** Add component elements ***************************************
   */

  navLogoContainer.appendChild(navLogo);
  navItemsContainer.append(...navItems);

  navbar.append(navLogoContainer, navItemsContainer);

  return navbar;
}


/***/ }),

/***/ "./src/utils/utils-functions.js":
/*!**************************************!*\
  !*** ./src/utils/utils-functions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMyElements: () => (/* binding */ createMyElements)
/* harmony export */ });
function createMyElements(element, num) {
  const elements = [];

  for (let x = 0; x < num; x++) {
    if (element === "nav") {
      const liElement = document.createElement("li");
      const navLink = document.createElement("a");
      liElement.setAttribute("class", "nav-items-item border-radius-sm");

      if (x === 0) {
        navLink.setAttribute("href", "#home");
        navLink.setAttribute("class", "nav-items-item-link");
        navLink.textContent = "Home";
      } else if (x === 1) {
        navLink.setAttribute("href", "#menu");
        navLink.setAttribute("class", "nav-items-item-link");
        navLink.textContent = "Menu";
      } else {
        navLink.setAttribute("href", "#about-us");
        navLink.setAttribute("class", "nav-items-item-link ");
        navLink.textContent = "About";
      }

      liElement.appendChild(navLink);

      elements.push(liElement);
    } else if (true) {
      const menuItemContainer = document.createElement("div");
      const menuItemImg = document.createElement("img");
      const menuItemDesc = document.createElement("p");
      menuItemContainer.setAttribute(
        "class",
        "menu-items-item border border-radius-md"
      );
      menuItemImg.setAttribute("class", "menu-img border-radius");
      menuItemDesc.setAttribute("class", "description flex border-radius");

      if (x === 0) {
        menuItemImg.setAttribute("src", "../src/assets/imgs/vegan-burger.jpg");
        menuItemDesc.textContent = `Our vegan burger will leave you stunned by the flavor. Our
        homemade burger patties are not like any other bland patty, ours
        come packed with protein, plenty of herbs and
        spices. Dressing up it with our homemade cheddar cheese and
        topped with your choice of lettuce or kale, onions and tomato.
        With our french fries included, your going to be shocked at how
        good a plant based burger can really be.`;
      } else if (x === 1) {
        menuItemImg.setAttribute(
          "src",
          "../src/assets/imgs/vegan-steak-and-potatoes.jpg"
        );
        menuItemDesc.textContent = `Yes, that is right, we have steak and of course its plant-based.
        Our homemade steak is based off of gluten.
        Seasoned to perfection, you'll love those hints of oregano and
        salt buzzing those taste buds. Served with your choice of two
        sides and a drink, you will be wondering
        why haven't I changed to plant-based diet, yet?`;
      } else {
        menuItemImg.setAttribute(
          "src",
          "../src/assets/imgs/chik'n-and-fries.png"
        );
        menuItemDesc.textContent = `A plant-based spin on a lovely classic, that we all enjoy. Our
        fried chik'n is more that just finger licking good, it just
        defies everything that you might know about food, especially
        plant-based food. Fried to a cripsy perfection with those lovely
        fries, you will be wondering how good will this taste on a sandwich?`;
      }
      menuItemContainer.append(menuItemImg, menuItemDesc);
      elements.push(menuItemContainer);
    }
  }
  return elements;
}



/***/ }),

/***/ "./src/assets/imgs/about-bg.png":
/*!**************************************!*\
  !*** ./src/assets/imgs/about-bg.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6dd39f42ea8b90f8f677.png";

/***/ }),

/***/ "./src/assets/imgs/menu.png":
/*!**********************************!*\
  !*** ./src/assets/imgs/menu.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd0c378c009c6c2ca7d2.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _components_heading_component_heading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/heading-component/heading-component */ "./src/components/heading-component/heading-component.js");
/* harmony import */ var _components_navbar_component_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar-component/navbar-component */ "./src/components/navbar-component/navbar-component.js");
/* harmony import */ var _components_menu_component_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu-component/menu-component */ "./src/components/menu-component/menu-component.js");




// import menu from "./components/menu-component/menu";
(function myApp() {
  const pageContainer = document.createElement("main");
  pageContainer.setAttribute("id", "content");

  pageContainer.append((0,_components_heading_component_heading_component__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_components_menu_component_menu_component__WEBPACK_IMPORTED_MODULE_3__["default"])());
  document.body.append((0,_components_navbar_component_navbar_component__WEBPACK_IMPORTED_MODULE_2__["default"])(), pageContainer);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYnlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RCtCO0FBQ3pCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdFQUFnQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7QUFDN0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEp3QztBQUN1QjtBQUNoRDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdFQUFnQjs7QUFFbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsTUFBTSxTQUFTLElBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFFNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQzBEO0FBQ0g7QUFDTjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsMkZBQWdCLElBQUkscUZBQWE7QUFDeEQsdUJBQXVCLHlGQUFlO0FBQ3RDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvaGVhZGluZy1jb21wb25lbnQvaGVhZGluZy1jb21wb25lbnQtc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9jb21wb25lbnRzL21lbnUtY29tcG9uZW50L21lbnUtY29tcG9uZW50LXN0eWxlcy5zY3NzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9zcmMvY29tcG9uZW50cy9uYXZiYXItY29tcG9uZW50L25hdmJhci1jb21wb25lbnQtc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvaGVhZGluZy1jb21wb25lbnQvaGVhZGluZy1jb21wb25lbnQtc3R5bGVzLnNjc3M/OGNkZSIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvbWVudS1jb21wb25lbnQvbWVudS1jb21wb25lbnQtc3R5bGVzLnNjc3M/ZDQ0ZSIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLWNvbXBvbmVudC9uYXZiYXItY29tcG9uZW50LXN0eWxlcy5zY3NzP2ZmNWIiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvaGVhZGluZy1jb21wb25lbnQvaGVhZGluZy1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9jb21wb25lbnRzL21lbnUtY29tcG9uZW50L21lbnUtY29tcG9uZW50LmpzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9zcmMvY29tcG9uZW50cy9uYXZiYXItY29tcG9uZW50L25hdmJhci1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy91dGlscy91dGlscy1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc2xhbmRpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc2xhbmRpbmcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1ncy9hYm91dC1iZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5oZWFkaW5nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogY2xhbXAoNTAlLCAxNTByZW0sIDgwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDksIDg3LCA0NCwgMC43KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbi5oZWFkaW5nLWNvbnRhaW5lciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjQpLCByZ2JhKDAsIDAsIDAsIDAuNCkpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkyLjV2aDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkaW5nLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBHaG9zdFdoaXRlO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBhZGRpbmc6IDVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ2FwOiA1cmVtO1xufVxuLmhlYWRpbmctZ3JvdXAgPiBoMSB7XG4gIGZvbnQtc2l6ZTogMTVyZW07XG59XG4uaGVhZGluZy1ncm91cCA+IHAge1xuICBmb250LXNpemU6IDVyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9oZWFkaW5nLWNvbXBvbmVudC9oZWFkaW5nLWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0Usb0JBQUE7RUFDQSxrSEFBQTtFQUVBLFdBQUE7RUFDQSxjQ1ZRO0VEV1IsYUFBQTtBQUZKO0FBSUU7RUFDRSxXQUFBO0VBQ0EsaUJDbkJTO0VEb0JULGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBRko7QUFJSTtFQUNFLGdCQUFBO0FBRk47QUFJSTtFQUNFLGVBQUE7QUFGTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIiBhcyBfO1xcblxcbi5oZWFkaW5nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiBjbGFtcCg1MCUsIDE1MHJlbSwgODAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXy4kYmctY29sb3IsIDAuNyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG5cXG4gICYtY29udGFpbmVyIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNCksIHJnYmEoMCwgMCwgMCwgMC40KSksXFxuICAgICAgdXJsKFxcXCIuLi8uLi9hc3NldHMvaW1ncy9hYm91dC1iZy5wbmdcXFwiKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogXy4kbXktaGVpZ2h0O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgJi1ncm91cCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogXy4kZm9udC1jb2xvcjtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBwYWRkaW5nOiA1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogNXJlbTtcXG5cXG4gICAgJiA+IGgxIHtcXG4gICAgICBmb250LXNpemU6IDE1cmVtO1xcbiAgICB9XFxuICAgICYgPiBwIHtcXG4gICAgICBmb250LXNpemU6IDVyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIkZm9udC1jb2xvcjogR2hvc3RXaGl0ZTtcXG4kYmctY29sb3I6ICMzMTU3MmM7XFxuJGJnLWNvbG9yMjogIzkwYTk1NTtcXG4kYmctY29sb3IzOiAjZWNmMzllO1xcbiRteS1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3LjV2aCk7XFxuJG15LXdpZHRoOiBjbGFtcCg1MCUsIDE1MHJlbSwgODAlKTtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWdzL21lbnUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkyLjV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwYTk1NTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICB6LWluZGV4OiAxMDtcbn1cbi5tZW51LWl0ZW1zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogY2xhbXAoNTAlLCAxNTByZW0sIDgwJSk7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDQsIDE2OSwgODUsIDAuNyk7XG59XG4ubWVudS1pdGVtcy1yb3cge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGdhcDogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTByZW07XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWVudS1pdGVtcy1yb3ctMiB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLm1lbnUtaXRlbXMtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTU3MmM7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDMwcmVtO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLm1lbnUtaXRlbXMtaXRlbSAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cbi5tZW51LWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWVudS1oaWdobGlnaHRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzVyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzByZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTU3MmM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tZW51LWhpZ2hsaWdodHMtaGlnaGxpZ2h0IHtcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL21lbnUtY29tcG9uZW50L21lbnUtY29tcG9uZW50LXN0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLFdBQUE7RUFDQSxjQ0NVO0VEQVYseUJDRlU7RURHVixrSEFBQTtFQUVBLFdBQUE7QUFERjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSw4QkNOTztFRE9QLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7QUFESjtBQUdJO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRE47QUFFTTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7QUFBUjtBQUdJO0VBQ0UseUJDOUJLO0VEK0JMLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFHTTtFQUNFLGlCQUFBO0FBRFI7QUFNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSko7QUFPRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQ3JETztFRHNEUCxrQkFBQTtBQUxKO0FBT0k7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFMTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIiBhcyBfO1xcbi5tZW51IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBfLiRteS1oZWlnaHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBfLiRiZy1jb2xvcjI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpLFxcbiAgICB1cmwoXFxcIi4uLy4uL2Fzc2V0cy9pbWdzL21lbnUucG5nXFxcIik7XFxuICB6LWluZGV4OiAxMDtcXG5cXG4gICYtaXRlbXMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiBfLiRteS13aWR0aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKF8uJGJnLWNvbG9yMiwgMC43KTtcXG5cXG4gICAgJi1yb3cge1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIGdhcDogMnJlbTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXgtd2lkdGg6IDkwcmVtO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBtYXgtaGVpZ2h0OiAzNXJlbTtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICYtMiB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgfVxcbiAgICB9XFxuICAgICYtaXRlbSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXy4kYmctY29sb3I7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWF4LXdpZHRoOiA1MHJlbTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgbWF4LWhlaWdodDogMzByZW07XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cXG4gICAgICAmIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICYtaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gICYtaGlnaGxpZ2h0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDM1cmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDMwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBfLiRiZy1jb2xvcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAmLWhpZ2hsaWdodCB7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XFxuICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiJGZvbnQtY29sb3I6IEdob3N0V2hpdGU7XFxuJGJnLWNvbG9yOiAjMzE1NzJjO1xcbiRiZy1jb2xvcjI6ICM5MGE5NTU7XFxuJGJnLWNvbG9yMzogI2VjZjM5ZTtcXG4kbXktaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNy41dmgpO1xcbiRteS13aWR0aDogY2xhbXAoNTAlLCAxNTByZW0sIDgwJSk7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE1NzJjO1xuICBib3gtc2hhZG93OiAwIDAgMi41cmVtIDAuNXJlbSBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTA7XG59XG4ubmF2LWxvZ28ge1xuICBwYWRkaW5nOiAwLjJyZW0gMTNyZW07XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgd2lkdGg6IDMwJTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLm5hdi1pdGVtcyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdi1pdGVtcy1pdGVtIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xufVxuLm5hdi1pdGVtcy1pdGVtLWxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIHBhZGRpbmc6IDNyZW0gNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubmF2LWl0ZW1zLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBhOTU1O1xuICBjb2xvcjogZ29sZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL25hdmJhci1jb21wb25lbnQvbmF2YmFyLWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EseUJDTFM7RURNVCxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFGO0FBRUU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUFKO0FBRUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUVJO0VBQ0UsZUFBQTtFQUVBLDZCQUFBO0VBQ0EsMkJBQUE7QUFETjtBQUVNO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBQVI7QUFHSTtFQUNFLHlCQ25DTTtFRG9DTixXQUFBO0FBRE5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1xcXCIgYXMgXztcXG4ubmF2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IF8uJGJnLWNvbG9yO1xcbiAgYm94LXNoYWRvdzogMCAwIDIuNXJlbSAwLjVyZW0gYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwO1xcblxcbiAgJi1sb2dvIHtcXG4gICAgcGFkZGluZzogMC4ycmVtIDEzcmVtO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gIH1cXG4gICYtaXRlbXMge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgJi1pdGVtIHtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcbiAgICAgICYtbGluayB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxuICAgICAgICBwYWRkaW5nOiAzcmVtIDVyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgJi1pdGVtOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBfLiRiZy1jb2xvcjI7XFxuICAgICAgY29sb3I6IGdvbGQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIkZm9udC1jb2xvcjogR2hvc3RXaGl0ZTtcXG4kYmctY29sb3I6ICMzMTU3MmM7XFxuJGJnLWNvbG9yMjogIzkwYTk1NTtcXG4kYmctY29sb3IzOiAjZWNmMzllO1xcbiRteS1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3LjV2aCk7XFxuJG15LXdpZHRoOiBjbGFtcCg1MCUsIDE1MHJlbSwgODAlKTtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyPz9mYW1pbHk9S2FsYW0mZmFtaWx5PUNhbnRhcmVsbDppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZmFtaWx5PUNvdXJnZXR0ZSZmYW1pbHk9U2hhbnRlbGwrU2FuczppdGFsLHdnaHRAMSw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBEZWZhdWx0cyAqL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBmb250LXNpemU6IDYyLjUlO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogIzMxNTcyYyAjZWNmMzllO1xufVxuXG5odG1sIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMXJlbTtcbn1cblxuaHRtbCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmh0bWwgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDksIDg3LCA0NCwgMC43NTI5NDExNzY1KTtcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgI2VjZjM5ZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuaHRtbCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgZ29sZDtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiBHaG9zdFdoaXRlO1xuICBmb250LWZhbWlseTogXCJLYWxhbVwiLCBjdXJzaXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE1NzJjO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjZWNmMzllO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5hLFxuLmJ0biB7XG4gIGZvbnQtZmFtaWx5OiBcIlNoYW50ZWxsIFNhbnNcIiwgY3Vyc2l2ZTtcbn1cblxuI2NvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA3LjV2aDtcbiAgaGVpZ2h0OiA5Mi41dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxleC1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZsZXgtcm93IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiAwLjRyZW0gc29saWQgYmxhY2s7XG59XG4uYm9yZGVyLXJhZGl1cy1zbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMS40cmVtIHNvbGlkIGJsYWNrO1xufVxuLmJvcmRlci1yYWRpdXMtbWQge1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuLmJvcmRlci10b3BBbmRCb3R0b20ge1xuICBib3JkZXItdG9wOiAwLjRyZW0gc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDAuNHJlbSBzb2xpZCBibGFjaztcbn1cbi5ib3JkZXItc2lkZXMge1xuICBib3JkZXItbGVmdDogMC40cmVtIHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IDAuNHJlbSBzb2xpZCBibGFjaztcbn1cblxuLmJnLWltZy1jZW50ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5idG4sXG5hIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgcGFkZGluZzogM3JlbTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAzO1xufVxuLmJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi50aXRsZSB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgei1pbmRleDogNTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OSwgODcsIDQ0LCAwLjkpO1xuICBib3R0b206IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy91dGlsLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsYUFBQTtBQUNBO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUNBRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLDZCQUFBO0FDRUY7O0FEQUE7RUFDRSxnREFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFLHlCQUFBO0FDSUY7O0FERkE7RUFDRSxpQkU5Qlc7RUYrQlgsNkJBQUE7RUFDQSx5QkUvQlM7QURvQ1g7O0FESEE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNNRjs7QURKQTtFQUNFLGNFcENVO0FEMkNaOztBRExBOzs7Ozs7OztFQVFFLHFDQUFBO0FDUUY7O0FETkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ1NGOztBRTlEQTtFQUNFLGFBQUE7QUZpRUY7QUVoRUU7RUFDRSxzQkFBQTtBRmtFSjtBRWhFRTtFQUNFLG1CQUFBO0FGa0VKO0FFaEVFO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBRmtFSjs7QUU5REE7RUFDRSwwQkFBQTtBRmlFRjtBRWhFRTtFQUNFLHFCQUFBO0FGa0VKO0FFL0RFO0VBQ0UsaUNBQUE7QUZpRUo7QUUvREU7RUFDRSxtQkFBQTtBRmlFSjtBRS9ERTtFQUNFLDhCQUFBO0VBQ0EsaUNBQUE7QUZpRUo7QUUvREU7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FGaUVKOztBRTdEQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBRmdFRjs7QUU5REE7O0VBRUUsb0JBQUE7QUZpRUY7O0FFL0RBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBRmtFRjtBRWpFRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBRm1FSjs7QUUvREE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FGa0VGOztBRS9EQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsU0FBQTtBRmtFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuL3ZhcmlhYmxlcy5zY3NzXFxcIiBhcyBfO1xcblxcbi8qIERlZmF1bHRzICovXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxuICBzY3JvbGxiYXItY29sb3I6IF8uJGJnLWNvbG9yIF8uJGJnLWNvbG9yMztcXG59XFxuaHRtbCA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5odG1sIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbmh0bWwgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE1NzJjYzA7XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCBfLiRiZy1jb2xvcjM7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5odG1sIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgZ29sZDtcXG59XFxuYm9keSB7XFxuICBjb2xvcjogXy4kZm9udC1jb2xvcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FsYW1cXFwiLCBjdXJzaXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogXy4kYmctY29sb3I7XFxufVxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbmE6aG92ZXIge1xcbiAgY29sb3I6IF8uJGJnLWNvbG9yMztcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuYSxcXG4uYnRuIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2hhbnRlbGwgU2Fuc1xcXCIsIGN1cnNpdmU7XFxufVxcbiNjb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDcuNXZoO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNy41dmgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblwiLFwiQHVzZSBcXFwiLi9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzXFxcIjtcXG5AdXNlIFxcXCIuL2Fzc2V0cy9zdHlsZXMvdXRpbC5zY3NzXFxcIjtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyPz9mYW1pbHk9S2FsYW0mZmFtaWx5PUNhbnRhcmVsbDppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZmFtaWx5PUNvdXJnZXR0ZSZmYW1pbHk9U2hhbnRlbGwrU2FuczppdGFsLHdnaHRAMSw1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXCIsXCIkZm9udC1jb2xvcjogR2hvc3RXaGl0ZTtcXG4kYmctY29sb3I6ICMzMTU3MmM7XFxuJGJnLWNvbG9yMjogIzkwYTk1NTtcXG4kYmctY29sb3IzOiAjZWNmMzllO1xcbiRteS1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3LjV2aCk7XFxuJG15LXdpZHRoOiBjbGFtcCg1MCUsIDE1MHJlbSwgODAlKTtcXG5cIixcIkB1c2UgXFxcIi4vdmFyaWFibGVzLnNjc3NcXFwiIGFzIF87XFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gICYtY29sIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gICYtcm93IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG4gICYtY2VudGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi5ib3JkZXIge1xcbiAgYm9yZGVyOiAwLjRyZW0gc29saWQgYmxhY2s7XFxuICAmLXJhZGl1cy1zbSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIH1cXG5cXG4gICYtYm90dG9tIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMS40cmVtIHNvbGlkIGJsYWNrO1xcbiAgfVxcbiAgJi1yYWRpdXMtbWQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgfVxcbiAgJi10b3BBbmRCb3R0b20ge1xcbiAgICBib3JkZXItdG9wOiAwLjRyZW0gc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNHJlbSBzb2xpZCBibGFjaztcXG4gIH1cXG4gICYtc2lkZXMge1xcbiAgICBib3JkZXItbGVmdDogMC40cmVtIHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmlnaHQ6IDAuNHJlbSBzb2xpZCBibGFjaztcXG4gIH1cXG59XFxuXFxuLmJnLWltZy1jZW50ZXIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi5idG4sXFxuYSB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuLmJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAzO1xcbiAgJjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY29sb3I6IGdvbGQ7XFxuICB9XFxufVxcblxcbi50aXRsZSB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB6LWluZGV4OiA1O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXy4kYmctY29sb3IsIDAuOSk7XFxuICBib3R0b206IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGluZy1jb21wb25lbnQtc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkaW5nLWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS1jb21wb25lbnQtc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci1jb21wb25lbnQtc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL2hlYWRpbmctY29tcG9uZW50LXN0eWxlcy5zY3NzXCI7XG5cbmZ1bmN0aW9uIGhlYWRpbmdDb21wb25lbnQoKSB7XG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBDcmVhdGUgY29tcG9uZW50IGVsZW1lbnRzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cbiAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBoZWFkZXJDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGVyQ29udGVudEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGhlYWRlckNvbnRlbnRNc2cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGhlYWRlckNvbnRlbnRNc2cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGhlYWRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBTZXQgY29tcG9uZW50IGVsZW1lbnRzIGF0dHJpYnV0ZSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgaGVhZGVyQ29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiaGVhZGluZy1ncm91cCBmbGV4IGZsZXgtY29sIGZsZXgtY2VudGVyXCJcbiAgKTtcbiAgaGVhZGVyQ29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhncm91cFwiKTtcbiAgaGVhZGluZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiaGVhZGluZy1jb250YWluZXIgZmxleCBmbGV4LXJvdyBmbGV4LWNlbnRlciBiZy1pbWctY2VudGVyXCJcbiAgKTtcbiAgaGVhZGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiaGVhZGluZyBmbGV4IGZsZXgtY2VudGVyIGZsZXgtY29sIGJvcmRlci1zaWRlc1wiXG4gICk7XG4gIGhlYWRlckVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xuICBoZWFkZXJCdG4uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNtZW51XCIpO1xuICBoZWFkZXJCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYm9yZGVyIGJvcmRlci1yYWRpdXMtbWRcIik7XG5cbiAgLypcbiAgICoqKioqKioqKioqKioqKioqKioqKioqIFNldCBjb21wb25lbnQgZWxlbWVudHMgY29udGVudCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgaGVhZGVyQ29udGVudEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRpZXJyYVwiO1xuICBoZWFkZXJDb250ZW50TXNnMS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0b1wiO1xuICBoZWFkZXJDb250ZW50TXNnMi50ZXh0Q29udGVudCA9IFwiVGhlIGJlc3QgcGxhbnQtYmFzZWQgcmVzdGF1cmFudCBpbiB0b3duLlwiO1xuICBoZWFkZXJCdG4udGV4dENvbnRlbnQgPSBcIk9yZGVyIE5vd1wiO1xuXG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBBZGQgY29tcG9uZW50IGVsZW1lbnRzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICBoZWFkZXJDb250ZW50Q29udGFpbmVyLmFwcGVuZChcbiAgICBoZWFkZXJDb250ZW50TXNnMSxcbiAgICBoZWFkZXJDb250ZW50SGVhZGluZyxcbiAgICBoZWFkZXJDb250ZW50TXNnMixcbiAgICBoZWFkZXJCdG5cbiAgKTtcbiAgaGVhZGVyRWxlbWVudC5hcHBlbmQoaGVhZGVyQ29udGVudENvbnRhaW5lcik7XG4gIGhlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudCk7XG5cbiAgcmV0dXJuIGhlYWRpbmdDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRpbmdDb21wb25lbnQ7XG4iLCJpbXBvcnQgeyBjcmVhdGVNeUVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzLWZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9tZW51LWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuZnVuY3Rpb24gbWVudUNvbXBvbmVudCgpIHtcbiAgLypcbiAgICoqKioqKioqKioqKioqKioqKioqKioqIENyZWF0ZSBjb21wb25lbnQgZWxlbWVudHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuICBjb25zdCBtZW51U2VjdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY29uc3QgbWVudUl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVudVRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgbWVudUl0ZW1zUm93MUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1lbnVJdGVtc1JvdzJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZW51SGlnaGxpZ2h0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgbWVudUhpZ2hsaWdodHMgPSBjcmVhdGVNeUVsZW1lbnRzKFwibWVudS1oaWdobGlnaHRzXCIsIDMpO1xuICBjb25zdCBtZW51SGlnaGxpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAvKlxuICAgKioqKioqKioqKioqKioqKioqKioqKiogU2V0IGNvbXBvbmVudCBlbGVtZW50cyBhdHRyaWJ1dGUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuICBtZW51U2VjdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xuICBtZW51U2VjdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgIFwiY2xhc3NcIixcbiAgICBcIm1lbnUgZmxleCBmbGV4LWNvbCBmbGV4LWNlbnRlciBiZy1pbWctY2VudGVyIGJvcmRlci10b3BBbmRCb3R0b21cIlxuICApO1xuICBtZW51U2VjdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMCk7XG4gIG1lbnVJdGVtc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjbGFzc1wiLFxuICAgIFwibWVudS1pdGVtcyBmbGV4IGZsZXgtY29sIGZsZXgtY2VudGVyIGJvcmRlciBib3JkZXItcmFkaXVzLW1kXCJcbiAgKTtcbiAgbWVudVRpdGxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlIGJvcmRlciBib3JkZXItcmFkaXVzLW1kXCIpO1xuICBtZW51SXRlbXNSb3cxQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmxleCBtZW51LWl0ZW1zLXJvd1wiKTtcbiAgbWVudUl0ZW1zUm93MkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiZmxleCBtZW51LWl0ZW1zLXJvdyBtZW51LWl0ZW1zLXJvdy0yXCJcbiAgKTtcbiAgbWVudUhpZ2hsaWdodHNDb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgIFwiY2xhc3NcIixcbiAgICBcIm1lbnUtaGlnaGxpZ2h0cyBmbGV4IGZsZXgtY29sIGZsZXgtY2VudGVyIGJvcmRlciBib3JkZXItcmFkaXVzLXNtIFwiXG4gICk7XG4gIG1lbnVIaWdobGlnaHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51LWhpZ2hsaWdodHMtaGlnaGxpZ2h0XCIpO1xuICBtZW51QnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJvcmRlciBib3JkZXItcmFkaXVzLW1kXCIpO1xuXG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBTZXQgY29tcG9uZW50IGVsZW1lbnRzIGNvbnRlbnQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIG1lbnVUaXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBcIkEgdGFzdGUgb2Ygd2hhdCB3ZSBhcmUgY29va2luZ1wiO1xuICBtZW51SGlnaGxpZ2h0LnRleHRDb250ZW50ID0gXCJNZW51IEhpZ2hsaWdodHNcIjtcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiRnVsbCBNZW51XCI7XG5cbiAgLypcbiAgICoqKioqKioqKioqKioqKioqKioqKioqIEFkZCBjb21wb25lbnQgZWxlbWVudHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIG1lbnVIaWdobGlnaHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVIaWdobGlnaHQpO1xuICBtZW51SXRlbXNSb3cxQ29udGFpbmVyLmFwcGVuZChtZW51SGlnaGxpZ2h0c0NvbnRhaW5lciwgbWVudUhpZ2hsaWdodHNbMF0pO1xuICBtZW51SXRlbXNSb3cyQ29udGFpbmVyLmFwcGVuZChtZW51SGlnaGxpZ2h0c1sxXSwgbWVudUhpZ2hsaWdodHNbMl0pO1xuICBtZW51SXRlbXNDb250YWluZXIuYXBwZW5kKFxuICAgIG1lbnVUaXRsZUVsZW1lbnQsXG4gICAgbWVudUl0ZW1zUm93MUNvbnRhaW5lcixcbiAgICBtZW51SXRlbXNSb3cyQ29udGFpbmVyLFxuICAgIG1lbnVCdG5cbiAgKTtcbiAgbWVudVNlY3Rpb25FbGVtZW50LmFwcGVuZChtZW51SXRlbXNDb250YWluZXIpO1xuICByZXR1cm4gbWVudVNlY3Rpb25FbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51Q29tcG9uZW50O1xuLypcblxuKioqKioqKioqKioqKioqKioqKiogQ29tcG9uZW50IEJsdWVwcmludCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuPHNlY3Rpb25cblx0XHRcdFx0Y2xhc3M9XCJtZW51IGZsZXgtY29sIGZsZXgtY2VudGVyIGJhY2tncm91bmQtaW1nLWNlbnRlciBib3JkZXItdG9wQW5kQm90dG9tXCJcblx0XHRcdFx0aWQ9XCJtZW51XCJcblx0XHRcdFx0dGFiaW5kZXg9XCIwXCJcblx0XHRcdD5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzPVwibWVudS1pdGVtcyByZWxhdGl2ZSBmbGV4LWNvbCBmbGV4LWNlbnRlciBib3JkZXIgYm9yZGVyLXJhZGl1c1wiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8aDIgY2xhc3M9XCJ0aXRsZSBhYnNvbHV0ZSBib3JkZXIgYm9yZGVyLXJhZGl1c1wiPlxuXHRcdFx0XHRcdFx0QSB0YXN0ZSBvZiB3aGF0IHdlIGFyZSBjb29raW5nXG5cdFx0XHRcdFx0PC9oMj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtcy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJtZW51LWhpZ2hsaWdodHMgZmxleC1jb2wgZmxleC1jZW50ZXIgYm9yZGVyIGJvcmRlci1yYWRpdXNcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8aDMgaWQ9XCJtZW51LWhpZ2hsaWdodFwiPk1lbnUgSGlnaGxpZ2h0czwvaDM+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0gYm9yZGVyIGJvcmRlci1yYWRpdXNcIiBpZD1cImJ1cmdlclwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJtZW51LWltZyBib3JkZXItcmFkaXVzXCJcblx0XHRcdFx0XHRcdFx0XHRzcmM9XCIuL2ltZ3MvdmVnYW4tYnVyZ2VyLmpwZ1wiXG5cdFx0XHRcdFx0XHRcdFx0YWx0PVwiQSB2ZWdhbiBidXJnZXIgdG9wcGVkIG9uIGEgYnJpb2NoZSBidW4gd2l0aCBhIHNpZGUgb2YgcG90YXRvZXMgY2hpcHMgYW5kIGEgc29mdCBkcmluayBvZiBjb2xhLlwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiZGVzY3JpcHRpb24gYWJzb2x1dGUgYm9yZGVyLXJhZGl1c1wiPlxuXHRcdFx0XHRcdFx0XHRcdE91ciB2ZWdhbiBidXJnZXIgd2lsbCBsZWF2ZSB5b3Ugc3R1bm5lZCBieSB0aGUgZmxhdm9yLiBPdXJcblx0XHRcdFx0XHRcdFx0XHRob21lbWFkZSBidXJnZXIgcGF0dGllcyBhcmUgbm90IGxpa2UgYW55IG90aGVyIGJsYW5kIHBhdHR5LCBvdXJzXG5cdFx0XHRcdFx0XHRcdFx0Y29tZSBwYWNrZWQgd2l0aCA8c3Ryb25nPnByb3RlaW48L3N0cm9uZz4sIHBsZW50eSBvZiBoZXJicyBhbmRcblx0XHRcdFx0XHRcdFx0XHRzcGljZXMuIERyZXNzaW5nIHVwIGl0IHdpdGggb3VyIGhvbWVtYWRlIGNoZWRkYXIgY2hlZXNlIGFuZFxuXHRcdFx0XHRcdFx0XHRcdHRvcHBlZCB3aXRoIHlvdXIgY2hvaWNlIG9mIGxldHR1Y2Ugb3Iga2FsZSwgb25pb25zIGFuZCB0b21hdG8uXG5cdFx0XHRcdFx0XHRcdFx0V2l0aCBvdXIgZnJlbmNoIGZyaWVzIGluY2x1ZGVkLCB5b3VyIGdvaW5nIHRvIGJlIHNob2NrZWQgYXQgaG93XG5cdFx0XHRcdFx0XHRcdFx0Z29vZCBhIHBsYW50IGJhc2VkIGJ1cmdlciBjYW4gcmVhbGx5IGJlLlxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtcy1jb250YWluZXJcIiBpZD1cIm1lbnVDb250YWluZXIyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtIGJvcmRlciBib3JkZXItcmFkaXVzXCIgaWQ9XCJiaXN0ZWNcIj5cblx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwibWVudS1pbWcgYm9yZGVyLXJhZGl1c1wiXG5cdFx0XHRcdFx0XHRcdFx0c3JjPVwiLi9pbWdzL3ZlZ2FuLXN0ZWFrLWFuZC1wb3RhdG9lcy5qcGdcIlxuXHRcdFx0XHRcdFx0XHRcdGFsdD1cIkEgcGxhdGUgb2YgYSBncmlsbGVkIHZlZ2FuIHN0ZWFrIHdpdGggcG90YXRvZXMgYW5kIHNvbWUgY29sbGFyZCBncmVlbnMuXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJkZXNjcmlwdGlvbiBhYnNvbHV0ZSBib3JkZXItcmFkaXVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0WWVzLCB0aGF0IGlzIHJpZ2h0LCB3ZSBoYXZlIHN0ZWFrIGFuZCBvZiBjb3Vyc2UgaXRzIHBsYW50LWJhc2VkLlxuXHRcdFx0XHRcdFx0XHRcdE91ciBob21lbWFkZSBzdGVhayBpcyBiYXNlZCBvZmYgb2YgPHN0cm9uZz5nbHV0ZW48L3N0cm9uZz4uXG5cdFx0XHRcdFx0XHRcdFx0U2Vhc29uZWQgdG8gcGVyZmVjdGlvbiwgeW91J2xsIGxvdmUgdGhvc2UgaGludHMgb2Ygb3JlZ2FubyBhbmRcblx0XHRcdFx0XHRcdFx0XHRzYWx0IGJ1enppbmcgdGhvc2UgdGFzdGUgYnVkcy4gU2VydmVkIHdpdGggeW91ciBjaG9pY2Ugb2YgdHdvXG5cdFx0XHRcdFx0XHRcdFx0c2lkZXMgYW5kIGEgZHJpbmssIHlvdSB3aWxsIGJlIHdvbmRlcmluZ1xuXHRcdFx0XHRcdFx0XHRcdDxpPndoeSBoYXZlbid0IEkgY2hhbmdlZCB0byBwbGFudC1iYXNlZCBkaWV0LCB5ZXQ/PC9pPlxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0gYm9yZGVyIGJvcmRlci1yYWRpdXNcIiBpZD1cInBvbGxvXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cIm1lbnUtaW1nIGJvcmRlci1yYWRpdXNcIlxuXHRcdFx0XHRcdFx0XHRcdHNyYz1cIi4vaW1ncy9jaGlrJ24tYW5kLWZyaWVzLnBuZ1wiXG5cdFx0XHRcdFx0XHRcdFx0YWx0PVwiQSBiZWF1dGlmdWwgcGxhdGUgb2YgZnJlbmNoIGZyaWVzIGFuZCBmcmllZCB2ZWdhbiBjaGlja2VuIHdpdGggc2lkZSBvZiBrZXRjaHVwIGFuZCB2ZWdnaWVzLlwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiZGVzY3JpcHRpb24gYWJzb2x1dGUgYm9yZGVyLXJhZGl1c1wiPlxuXHRcdFx0XHRcdFx0XHRcdEEgcGxhbnQtYmFzZWQgc3BpbiBvbiBhIGxvdmVseSBjbGFzc2ljLCB0aGF0IHdlIGFsbCBlbmpveS4gT3VyXG5cdFx0XHRcdFx0XHRcdFx0ZnJpZWQgY2hpayduIGlzIG1vcmUgdGhhdCBqdXN0IGZpbmdlciBsaWNraW5nIGdvb2QsIGl0IGp1c3Rcblx0XHRcdFx0XHRcdFx0XHRkZWZpZXMgZXZlcnl0aGluZyB0aGF0IHlvdSBtaWdodCBrbm93IGFib3V0IGZvb2QsIGVzcGVjaWFsbHlcblx0XHRcdFx0XHRcdFx0XHRwbGFudC1iYXNlZCBmb29kLiBGcmllZCB0byBhIGNyaXBzeSBwZXJmZWN0aW9uIHdpdGggdGhvc2UgbG92ZWx5XG5cdFx0XHRcdFx0XHRcdFx0ZnJpZXMsIHlvdSB3aWxsIGJlIHdvbmRlcmluZ1xuXHRcdFx0XHRcdFx0XHRcdDxpPiBob3cgZ29vZCB3aWxsIHRoaXMgdGFzdGUgb24gYSBzYW5kd2ljaD8gPC9pPlxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYm9yZGVyIGJvcmRlci1yYWRpdXNcIiB0aXRsZT1cIiNub3RXb3JraW5nRnVsbE1lbnVCdG5cIj5cblx0XHRcdFx0XHRGdWxsIE1lbnVcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L3NlY3Rpb24+XG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKi9cbiIsImltcG9ydCBcIi4vbmF2YmFyLWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IHsgY3JlYXRlTXlFbGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlscy91dGlscy1mdW5jdGlvbnNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcbiAgLypcbiAgICoqKioqKioqKioqKioqKioqKioqKioqIENyZWF0ZSBjb21wb25lbnQgZWxlbWVudHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb25zdCBuYXZMb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmF2TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgbmF2SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IG5hdkl0ZW1zID0gY3JlYXRlTXlFbGVtZW50cyhcIm5hdlwiLCAzKTtcblxuICAvKlxuICAgKioqKioqKioqKioqKioqKioqKioqKiogU2V0IGNvbXBvbmVudCBlbGVtZW50cyBhdHRyaWJ1dGUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIG5hdmJhci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdiBmbGV4IGZsZXgtY29sIGZsZXgtY2VudGVyIGJvcmRlci1ib3R0b21cIik7XG4gIG5hdkl0ZW1zQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcbiAgICBcImNsYXNzXCIsXG4gICAgXCJuYXYtaXRlbXMgZmxleCBmbGV4LXJvdyBmbGV4LWNlbnRlclwiXG4gICk7XG4gIG5hdkxvZ29Db250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgIFwiY2xhc3NcIixcbiAgICBcIm5hdi1sb2dvIGZsZXggZmxleC1jZW50ZXIgYm9yZGVyLXJhZGl1cy1zbVwiXG4gICk7XG5cbiAgLypcbiAgICoqKioqKioqKioqKioqKioqKioqKioqIFNldCBjb21wb25lbnQgZWxlbWVudHMgY29udGVudCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgbmF2TG9nby50ZXh0Q29udGVudCA9IFwiVGllcnJhXCI7XG5cbiAgLypcbiAgICoqKioqKioqKioqKioqKioqKioqKioqIEFkZCBjb21wb25lbnQgZWxlbWVudHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIG5hdkxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobmF2TG9nbyk7XG4gIG5hdkl0ZW1zQ29udGFpbmVyLmFwcGVuZCguLi5uYXZJdGVtcyk7XG5cbiAgbmF2YmFyLmFwcGVuZChuYXZMb2dvQ29udGFpbmVyLCBuYXZJdGVtc0NvbnRhaW5lcik7XG5cbiAgcmV0dXJuIG5hdmJhcjtcbn1cbiIsImZ1bmN0aW9uIGNyZWF0ZU15RWxlbWVudHMoZWxlbWVudCwgbnVtKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yIChsZXQgeCA9IDA7IHggPCBudW07IHgrKykge1xuICAgIGlmIChlbGVtZW50ID09PSBcIm5hdlwiKSB7XG4gICAgICBjb25zdCBsaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBsaUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXYtaXRlbXMtaXRlbSBib3JkZXItcmFkaXVzLXNtXCIpO1xuXG4gICAgICBpZiAoeCA9PT0gMCkge1xuICAgICAgICBuYXZMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjaG9tZVwiKTtcbiAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdi1pdGVtcy1pdGVtLWxpbmtcIik7XG4gICAgICAgIG5hdkxpbmsudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICAgIH0gZWxzZSBpZiAoeCA9PT0gMSkge1xuICAgICAgICBuYXZMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjbWVudVwiKTtcbiAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdi1pdGVtcy1pdGVtLWxpbmtcIik7XG4gICAgICAgIG5hdkxpbmsudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdkxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNhYm91dC11c1wiKTtcbiAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdi1pdGVtcy1pdGVtLWxpbmsgXCIpO1xuICAgICAgICBuYXZMaW5rLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICAgICAgfVxuXG4gICAgICBsaUVsZW1lbnQuYXBwZW5kQ2hpbGQobmF2TGluayk7XG5cbiAgICAgIGVsZW1lbnRzLnB1c2gobGlFbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKFwibWVudS1oaWdobGlnaHRzXCIpIHtcbiAgICAgIGNvbnN0IG1lbnVJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IG1lbnVJdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGNvbnN0IG1lbnVJdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgbWVudUl0ZW1Db250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgICAgICBcImNsYXNzXCIsXG4gICAgICAgIFwibWVudS1pdGVtcy1pdGVtIGJvcmRlciBib3JkZXItcmFkaXVzLW1kXCJcbiAgICAgICk7XG4gICAgICBtZW51SXRlbUltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtaW1nIGJvcmRlci1yYWRpdXNcIik7XG4gICAgICBtZW51SXRlbURlc2Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZXNjcmlwdGlvbiBmbGV4IGJvcmRlci1yYWRpdXNcIik7XG5cbiAgICAgIGlmICh4ID09PSAwKSB7XG4gICAgICAgIG1lbnVJdGVtSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9hc3NldHMvaW1ncy92ZWdhbi1idXJnZXIuanBnXCIpO1xuICAgICAgICBtZW51SXRlbURlc2MudGV4dENvbnRlbnQgPSBgT3VyIHZlZ2FuIGJ1cmdlciB3aWxsIGxlYXZlIHlvdSBzdHVubmVkIGJ5IHRoZSBmbGF2b3IuIE91clxuICAgICAgICBob21lbWFkZSBidXJnZXIgcGF0dGllcyBhcmUgbm90IGxpa2UgYW55IG90aGVyIGJsYW5kIHBhdHR5LCBvdXJzXG4gICAgICAgIGNvbWUgcGFja2VkIHdpdGggcHJvdGVpbiwgcGxlbnR5IG9mIGhlcmJzIGFuZFxuICAgICAgICBzcGljZXMuIERyZXNzaW5nIHVwIGl0IHdpdGggb3VyIGhvbWVtYWRlIGNoZWRkYXIgY2hlZXNlIGFuZFxuICAgICAgICB0b3BwZWQgd2l0aCB5b3VyIGNob2ljZSBvZiBsZXR0dWNlIG9yIGthbGUsIG9uaW9ucyBhbmQgdG9tYXRvLlxuICAgICAgICBXaXRoIG91ciBmcmVuY2ggZnJpZXMgaW5jbHVkZWQsIHlvdXIgZ29pbmcgdG8gYmUgc2hvY2tlZCBhdCBob3dcbiAgICAgICAgZ29vZCBhIHBsYW50IGJhc2VkIGJ1cmdlciBjYW4gcmVhbGx5IGJlLmA7XG4gICAgICB9IGVsc2UgaWYgKHggPT09IDEpIHtcbiAgICAgICAgbWVudUl0ZW1JbWcuc2V0QXR0cmlidXRlKFxuICAgICAgICAgIFwic3JjXCIsXG4gICAgICAgICAgXCIuLi9zcmMvYXNzZXRzL2ltZ3MvdmVnYW4tc3RlYWstYW5kLXBvdGF0b2VzLmpwZ1wiXG4gICAgICAgICk7XG4gICAgICAgIG1lbnVJdGVtRGVzYy50ZXh0Q29udGVudCA9IGBZZXMsIHRoYXQgaXMgcmlnaHQsIHdlIGhhdmUgc3RlYWsgYW5kIG9mIGNvdXJzZSBpdHMgcGxhbnQtYmFzZWQuXG4gICAgICAgIE91ciBob21lbWFkZSBzdGVhayBpcyBiYXNlZCBvZmYgb2YgZ2x1dGVuLlxuICAgICAgICBTZWFzb25lZCB0byBwZXJmZWN0aW9uLCB5b3UnbGwgbG92ZSB0aG9zZSBoaW50cyBvZiBvcmVnYW5vIGFuZFxuICAgICAgICBzYWx0IGJ1enppbmcgdGhvc2UgdGFzdGUgYnVkcy4gU2VydmVkIHdpdGggeW91ciBjaG9pY2Ugb2YgdHdvXG4gICAgICAgIHNpZGVzIGFuZCBhIGRyaW5rLCB5b3Ugd2lsbCBiZSB3b25kZXJpbmdcbiAgICAgICAgd2h5IGhhdmVuJ3QgSSBjaGFuZ2VkIHRvIHBsYW50LWJhc2VkIGRpZXQsIHlldD9gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVudUl0ZW1JbWcuc2V0QXR0cmlidXRlKFxuICAgICAgICAgIFwic3JjXCIsXG4gICAgICAgICAgXCIuLi9zcmMvYXNzZXRzL2ltZ3MvY2hpayduLWFuZC1mcmllcy5wbmdcIlxuICAgICAgICApO1xuICAgICAgICBtZW51SXRlbURlc2MudGV4dENvbnRlbnQgPSBgQSBwbGFudC1iYXNlZCBzcGluIG9uIGEgbG92ZWx5IGNsYXNzaWMsIHRoYXQgd2UgYWxsIGVuam95LiBPdXJcbiAgICAgICAgZnJpZWQgY2hpayduIGlzIG1vcmUgdGhhdCBqdXN0IGZpbmdlciBsaWNraW5nIGdvb2QsIGl0IGp1c3RcbiAgICAgICAgZGVmaWVzIGV2ZXJ5dGhpbmcgdGhhdCB5b3UgbWlnaHQga25vdyBhYm91dCBmb29kLCBlc3BlY2lhbGx5XG4gICAgICAgIHBsYW50LWJhc2VkIGZvb2QuIEZyaWVkIHRvIGEgY3JpcHN5IHBlcmZlY3Rpb24gd2l0aCB0aG9zZSBsb3ZlbHlcbiAgICAgICAgZnJpZXMsIHlvdSB3aWxsIGJlIHdvbmRlcmluZyBob3cgZ29vZCB3aWxsIHRoaXMgdGFzdGUgb24gYSBzYW5kd2ljaD9gO1xuICAgICAgfVxuICAgICAgbWVudUl0ZW1Db250YWluZXIuYXBwZW5kKG1lbnVJdGVtSW1nLCBtZW51SXRlbURlc2MpO1xuICAgICAgZWxlbWVudHMucHVzaChtZW51SXRlbUNvbnRhaW5lcik7XG4gICAgfVxuICB9XG4gIHJldHVybiBlbGVtZW50cztcbn1cbmV4cG9ydCB7IGNyZWF0ZU15RWxlbWVudHMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgaGVhZGluZ0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRpbmctY29tcG9uZW50L2hlYWRpbmctY29tcG9uZW50XCI7XG5pbXBvcnQgbmF2YmFyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyLWNvbXBvbmVudC9uYXZiYXItY29tcG9uZW50XCI7XG5pbXBvcnQgbWVudUNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL21lbnUtY29tcG9uZW50L21lbnUtY29tcG9uZW50XCI7XG4vLyBpbXBvcnQgbWVudSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnUtY29tcG9uZW50L21lbnVcIjtcbihmdW5jdGlvbiBteUFwcCgpIHtcbiAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBwYWdlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcblxuICBwYWdlQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nQ29tcG9uZW50KCksIG1lbnVDb21wb25lbnQoKSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKG5hdmJhckNvbXBvbmVudCgpLCBwYWdlQ29udGFpbmVyKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=