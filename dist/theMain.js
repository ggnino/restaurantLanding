/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/about-component/about-component-styles.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/about-component/about-component-styles.scss ***!
  \*************************************************************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/imgs/restauarant1.jpg */ "./src/assets/imgs/restauarant1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/imgs/about-bg.png */ "./src/assets/imgs/about-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/imgs/customer-info.png */ "./src/assets/imgs/customer-info.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/imgs/us.png */ "./src/assets/imgs/us.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.about-us {
  height: 92.5vh;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
  background-color: #31572c;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
.about-us-container {
  position: relative;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 1;
  overflow: auto;
}
.about-us > div:first-of-type {
  width: clamp(50%, 150rem, 80%);
  background-color: rgba(144, 169, 85, 0.7);
  padding: 10rem;
}
.about-us > div:first-of-type > div {
  max-height: 90rem;
  padding: 2rem 0;
}
.about-us > div:first-of-type > div:first-of-type {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.about-us > div:first-of-type > div:first-of-type + div {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  overflow-y: auto;
  overflow-x: hidden;
}
.about-us > div:first-of-type > div:last-child {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
.about-us .description {
  position: relative;
  font-size: 3rem;
  padding: 3rem;
  width: 100%;
  max-width: 70rem;
  max-height: 70rem;
  background-color: transparent;
  transition: all 0.5s;
  cursor: default;
}
.about-us .description:hover {
  background-color: rgba(49, 87, 44, 0.9);
}
.about-us-form {
  margin: 1rem;
  width: 100%;
  max-width: 50rem;
  background-color: rgba(49, 87, 44, 0.7529411765);
  padding: 1rem;
}
.about-us-form .btn {
  display: block;
  margin: 1rem auto;
}
.about-us-form fieldset {
  padding: 1.2rem;
  font-size: 2rem;
  width: 100%;
  border: none;
}
.about-us-form input, .about-us-form textarea {
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 2rem;
  width: 100%;
  display: inline;
  vertical-align: bottom;
}
.about-us .title {
  position: absolute;
  top: 2vh;
}
.about-us h3 {
  width: 100%;
  max-width: 50rem;
  padding: 1rem;
  margin: 1rem auto;
  font-size: 2rem;
  background-color: rgba(49, 87, 44, 0.7529411765);
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/components/about-component/about-component-styles.scss","webpack://./src/assets/styles/variables.scss"],"names":[],"mappings":"AACA;EACE,cCEU;EDDV,WAAA;EACA,6BAAA;EACA,mBAAA;EACA,UAAA;EACA,yBCNS;EDOT,kHAAA;AAAF;AAEE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,cAAA;EACA,cAAA;AAAJ;AAEE;EACE,8BCfO;EDgBP,yCAAA;EACA,cAAA;AAAJ;AAEI;EACE,iBAAA;EACA,eAAA;AAAN;AAGI;EACE,kHAAA;EACA,4BAAA;EACA,6BAAA;AADN;AAII;EACE,kHAAA;EACA,gBAAA;EACA,kBAAA;AAFN;AAKI;EACE,kHAAA;EACA,+BAAA;EACA,gCAAA;AAHN;AAME;EACE,kBAAA;EACA,eAAA;EACA,aAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,6BAAA;EACA,oBAAA;EACA,eAAA;AAJJ;AAKI;EACE,uCAAA;AAHN;AAME;EACE,YAAA;EACA,WAAA;EACA,gBAAA;EACA,gDAAA;EACA,aAAA;AAJJ;AAMI;EACE,cAAA;EACA,iBAAA;AAJN;AAOI;EACE,eAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;AALN;AAOI;EAEE,eAAA;EACA,gBAAA;EACA,eAAA;EACA,WAAA;EACA,eAAA;EACA,sBAAA;AANN;AASE;EACE,kBAAA;EACA,QAAA;AAPJ;AASE;EACE,WAAA;EACA,gBAAA;EACA,aAAA;EACA,iBAAA;EACA,eAAA;EACA,gDAAA;EACA,kBAAA;AAPJ","sourcesContent":["@use \"../../assets/styles/variables.scss\" as _;\n.about-us {\n  height: _.$my-height;\n  width: 100%;\n  justify-content: space-evenly;\n  align-items: center;\n  z-index: 2;\n  background-color: _.$bg-color;\n  background-image: _.$my-filter, url(\"../../assets/imgs/restauarant1.jpg\");\n\n  &-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    flex-wrap: wrap;\n    flex-grow: 0;\n    flex-shrink: 1;\n    overflow: auto;\n  }\n  & > div:first-of-type {\n    width: _.$my-width;\n    background-color: rgba(_.$bg-color2, 0.7);\n    padding: 10rem;\n\n    & > div {\n      max-height: 90rem;\n      padding: 2rem 0;\n    }\n\n    & > div:first-of-type {\n      background-image: _.$my-filter, url(\"../../assets/imgs/about-bg.png\");\n      border-top-left-radius: 1rem;\n      border-top-right-radius: 1rem;\n    }\n\n    & > div:first-of-type + div {\n      background-image: _.$my-filter, url(\"../../assets/imgs/customer-info.png\");\n      overflow-y: auto;\n      overflow-x: hidden;\n    }\n\n    & > div:last-child {\n      background-image: _.$my-filter, url(\"../../assets/imgs/us.png\");\n      border-bottom-left-radius: 1rem;\n      border-bottom-right-radius: 1rem;\n    }\n  }\n  & .description {\n    position: relative;\n    font-size: 3rem;\n    padding: 3rem;\n    width: 100%;\n    max-width: 70rem;\n    max-height: 70rem;\n    background-color: transparent;\n    transition: all 0.5s;\n    cursor: default;\n    &:hover {\n      background-color: rgba(_.$bg-color, 0.9);\n    }\n  }\n  &-form {\n    margin: 1rem;\n    width: 100%;\n    max-width: 50rem;\n    background-color: #31572cc0;\n    padding: 1rem;\n\n    & .btn {\n      display: block;\n      margin: 1rem auto;\n    }\n\n    & fieldset {\n      padding: 1.2rem;\n      font-size: 2rem;\n      width: 100%;\n      border: none;\n    }\n    & input,\n    & textarea {\n      padding: 0.5rem;\n      margin: 0.5rem 0;\n      font-size: 2rem;\n      width: 100%;\n      display: inline;\n      vertical-align: bottom;\n    }\n  }\n  & .title {\n    position: absolute;\n    top: 2vh;\n  }\n  & h3 {\n    width: 100%;\n    max-width: 50rem;\n    padding: 1rem;\n    margin: 1rem auto;\n    font-size: 2rem;\n    background-color: #31572cc0;\n    text-align: center;\n  }\n}\n","$font-color: GhostWhite;\n$bg-color: #31572c;\n$bg-color2: #90a955;\n$bg-color3: #ecf39e;\n$my-height: calc(100vh - 7.5vh);\n$my-width: clamp(50%, 150rem, 80%);\n$my-filter: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/footer-component/footer-component-styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/footer-component/footer-component-styles.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `footer {
  border-top: 1.4rem solid black;
  text-align: center;
  font-size: 2rem;
  background-color: #ecf39e;
  padding: 2rem;
}

footer p {
  font-size: 2.6rem;
  width: clamp(20%, 80rem, 50%);
  background-color: #31572c;
  margin: 0 auto;
  padding: 2rem 0;
  cursor: default;
}`, "",{"version":3,"sources":["webpack://./src/components/footer-component/footer-component-styles.scss","webpack://./src/assets/styles/variables.scss"],"names":[],"mappings":"AACA;EACE,8BAAA;EACA,kBAAA;EACA,eAAA;EACA,yBCFU;EDGV,aAAA;AAAF;;AAEA;EACE,iBAAA;EACA,6BAAA;EACA,yBCVS;EDWT,cAAA;EACA,eAAA;EACA,eAAA;AACF","sourcesContent":["@use \"../../assets/styles/variables.scss\" as _;\nfooter {\n  border-top: 1.4rem solid black;\n  text-align: center;\n  font-size: 2rem;\n  background-color: _.$bg-color3;\n  padding: 2rem;\n}\nfooter p {\n  font-size: 2.6rem;\n  width: clamp(20%, 80rem, 50%);\n  background-color: _.$bg-color;\n  margin: 0 auto;\n  padding: 2rem 0;\n  cursor: default;\n}\n","$font-color: GhostWhite;\n$bg-color: #31572c;\n$bg-color2: #90a955;\n$bg-color3: #ecf39e;\n$my-height: calc(100vh - 7.5vh);\n$my-width: clamp(50%, 150rem, 80%);\n$my-filter: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  width: 100%;
  height: 92.5vh;
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
}`, "",{"version":3,"sources":["webpack://./src/components/heading-component/heading-component-styles.scss","webpack://./src/assets/styles/variables.scss"],"names":[],"mappings":"AAEA;EACE,YAAA;EACA,8BAAA;EACA,uCAAA;EACA,oBAAA;EACA,kBAAA;AADF;AAGE;EACE,oBAAA;EACA,kHAAA;EACA,WAAA;EACA,cCTQ;ADQZ;AAIE;EACE,WAAA;EACA,iBClBS;EDmBT,eAAA;EACA,aAAA;EACA,kBAAA;EACA,SAAA;AAFJ;AAII;EACE,gBAAA;AAFN;AAII;EACE,eAAA;AAFN","sourcesContent":["@use \"../../assets/styles/variables.scss\" as _;\n\n.heading {\n  height: 100%;\n  width: clamp(50%, 150rem, 80%);\n  background-color: rgba(_.$bg-color, 0.7);\n  transition: all 0.5s;\n  overflow-y: hidden;\n\n  &-container {\n    transition: all 0.2s;\n    background-image: _.$my-filter, url(\"../../assets/imgs/about-bg.png\");\n    width: 100%;\n    height: _.$my-height;\n    // display: none;\n  }\n  &-group {\n    width: 100%;\n    color: _.$font-color;\n    cursor: default;\n    padding: 5rem;\n    text-align: center;\n    gap: 5rem;\n\n    & > h1 {\n      font-size: 15rem;\n    }\n    & > p {\n      font-size: 5rem;\n    }\n  }\n}\n","$font-color: GhostWhite;\n$bg-color: #31572c;\n$bg-color2: #90a955;\n$bg-color3: #ecf39e;\n$my-height: calc(100vh - 7.5vh);\n$my-width: clamp(50%, 150rem, 80%);\n$my-filter: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n"],"sourceRoot":""}]);
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
  font-size: 2rem;
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
}`, "",{"version":3,"sources":["webpack://./src/components/menu-component/menu-component-styles.scss","webpack://./src/assets/styles/variables.scss"],"names":[],"mappings":"AACA;EACE,WAAA;EACA,cCCU;EDAV,yBCFU;EDGV,kHAAA;EACA,WAAA;AAAF;AAGE;EACE,kBAAA;EACA,8BCNO;EDOP,YAAA;EACA,aAAA;EACA,yCAAA;AADJ;AAGI;EACE,qBAAA;EACA,aAAA;EACA,SAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;AADN;AAEM;EACE,yBAAA;EACA,uBAAA;AAAR;AAGI;EACE,yBC9BK;ED+BL,WAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;AADN;AAGM;EACE,eAAA;AADR;AAME;EACE,WAAA;EACA,YAAA;AAJJ;AAOE;EACE,WAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,yBCrDO;EDsDP,kBAAA;AALJ;AAOI;EACE,oBAAA;EACA,eAAA;AALN","sourcesContent":["@use \"../../assets/styles/variables.scss\" as _;\n.menu {\n  width: 100%;\n  height: _.$my-height;\n  background-color: _.$bg-color2;\n  background-image: _.$my-filter, url(\"../../assets/imgs/menu.png\");\n  z-index: 10;\n  // display: none;\n\n  &-items {\n    position: relative;\n    width: _.$my-width;\n    height: 100%;\n    padding: 5rem;\n    background-color: rgba(_.$bg-color2, 0.7);\n\n    &-row {\n      align-items: flex-end;\n      padding: 1rem;\n      gap: 2rem;\n      width: 100%;\n      max-width: 90rem;\n      height: 100%;\n      max-height: 35rem;\n      overflow: hidden;\n      &-2 {\n        justify-content: flex-end;\n        align-items: flex-start;\n      }\n    }\n    &-item {\n      background-color: _.$bg-color;\n      width: 100%;\n      max-width: 50rem;\n      height: 100%;\n      max-height: 30rem;\n      transform: scale(1);\n\n      & .description {\n        font-size: 2rem;\n      }\n    }\n  }\n\n  &-img {\n    width: 100%;\n    height: 100%;\n  }\n\n  &-highlights {\n    width: 100%;\n    max-width: 35rem;\n    height: 100%;\n    max-height: 30rem;\n    background-color: _.$bg-color;\n    text-align: center;\n\n    &-highlight {\n      transition: all 1.5s;\n      font-size: 5rem;\n    }\n  }\n}\n","$font-color: GhostWhite;\n$bg-color: #31572c;\n$bg-color2: #90a955;\n$bg-color3: #ecf39e;\n$my-height: calc(100vh - 7.5vh);\n$my-width: clamp(50%, 150rem, 80%);\n$my-filter: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/components/navbar-component/navbar-component-styles.scss","webpack://./src/assets/styles/variables.scss"],"names":[],"mappings":"AACA;EACE,eAAA;EACA,MAAA;EACA,QAAA;EACA,OAAA;EACA,yBCLS;EDMT,mCAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;AAAF;AAEE;EACE,qBAAA;EACA,eAAA;EACA,UAAA;EACA,eAAA;AAAJ;AAEE;EACE,gBAAA;EACA,WAAA;AAAJ;AAEI;EACE,eAAA;EAEA,6BAAA;EACA,2BAAA;AADN;AAEM;EACE,qBAAA;EACA,qBAAA;EACA,wBAAA;EACA,2BAAA;EACA,kBAAA;EACA,6BAAA;AAAR;AAGI;EACE,yBCnCM;EDoCN,WAAA;AADN","sourcesContent":["@use \"../../assets/styles/variables.scss\" as _;\n.nav {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  background-color: _.$bg-color;\n  box-shadow: 0 0 2.5rem 0.5rem black;\n  color: white;\n  width: 100%;\n  z-index: 10;\n\n  &-logo {\n    padding: 0.2rem 13rem;\n    font-size: 3rem;\n    width: 30%;\n    cursor: default;\n  }\n  &-items {\n    list-style: none;\n    width: 100%;\n\n    &-item {\n      font-size: 2rem;\n\n      background-color: transparent;\n      transition: all 0.2s linear;\n      &-link {\n        display: inline-block;\n        text-decoration: none;\n        color: var(--font-color);\n        transition: all 0.2s linear;\n        padding: 3rem 5rem;\n        background-color: transparent;\n      }\n    }\n    &-item:hover {\n      background-color: _.$bg-color2;\n      color: gold;\n    }\n  }\n}\n","$font-color: GhostWhite;\n$bg-color: #31572c;\n$bg-color2: #90a955;\n$bg-color3: #ecf39e;\n$my-height: calc(100vh - 7.5vh);\n$my-width: clamp(50%, 150rem, 80%);\n$my-filter: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Agbalumo&family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&family=Labrada:wght@300;400;600&family=Shantell+Sans:ital,wght@1,500&display=swap);"]);
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
label,
.btn {
  font-family: "Agbalumo", cursive;
}

#content {
  margin-top: 7.5vh;
  height: 92.5vh;
  background-color: black;
}

p,
input,
textarea,
span,
:placeholder-shown {
  font-family: "Labrada", serif;
  font-weight: 600;
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
  padding: 1rem 3rem;
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
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/styles.scss","webpack://./src/index.scss","webpack://./src/assets/styles/variables.scss","webpack://./src/assets/styles/util.scss"],"names":[],"mappings":"AAEA,aAAA;AACA;EACE,sBAAA;EACA,UAAA;EACA,SAAA;ACAF;;ADGA;EACE,uBAAA;EACA,gBAAA;EACA,qBAAA;EACA,gCAAA;ACAF;;ADEA;EACE,WAAA;ACCF;;ADCA;EACE,6BAAA;ACEF;;ADAA;EACE,gDAAA;EACA,4BAAA;EACA,mBAAA;ACGF;;ADDA;EACE,yBAAA;ACIF;;ADFA;EACE,iBE9BW;EF+BX,6BAAA;EACA,yBE/BS;ADoCX;;ADHA;EACE,qBAAA;EACA,cAAA;ACMF;;ADJA;EACE,cEpCU;AD2CZ;;ADLA;;;;;;;;;EASE,gCAAA;ACQF;;ADNA;EACE,iBAAA;EACA,cAAA;EACA,uBAAA;ACSF;;ADPA;;;;;EAKE,6BAAA;EACA,gBAAA;ACUF;;AExEA;EACE,aAAA;AF2EF;AE1EE;EACE,sBAAA;AF4EJ;AE1EE;EACE,mBAAA;AF4EJ;AE1EE;EACE,uBAAA;EACA,mBAAA;AF4EJ;;AExEA;EACE,0BAAA;AF2EF;AE1EE;EACE,qBAAA;AF4EJ;AEzEE;EACE,iCAAA;AF2EJ;AEzEE;EACE,mBAAA;AF2EJ;AEzEE;EACE,8BAAA;EACA,iCAAA;AF2EJ;AEzEE;EACE,+BAAA;EACA,gCAAA;AF2EJ;;AEvEA;EACE,2BAAA;EACA,4BAAA;EACA,sBAAA;AF0EF;;AExEA;;EAEE,oBAAA;AF2EF;;AEzEA;EACE,qBAAA;EACA,eAAA;EACA,kBAAA;EACA,wBAAA;EACA,uBAAA;EACA,eAAA;EACA,UAAA;AF4EF;AE3EE;EACE,qBAAA;EACA,WAAA;AF6EJ;;AEzEA;EACE,aAAA;EACA,eAAA;EACA,kBAAA;EACA,uBAAA;EACA,UAAA;AF4EF;;AEzEA;EACE,kBAAA;EACA,MAAA;EACA,mBAAA;EACA,eAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,uCAAA;EACA,SAAA;AF4EF","sourcesContent":["@use \"./variables.scss\" as _;\n\n/* Defaults */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  font-size: 62.5%;\n  scrollbar-width: thin;\n  scrollbar-color: _.$bg-color _.$bg-color3;\n}\nhtml ::-webkit-scrollbar {\n  width: 1rem;\n}\nhtml ::-webkit-scrollbar-track {\n  background-color: transparent;\n}\nhtml ::-webkit-scrollbar-thumb {\n  background-color: #31572cc0;\n  border: 0.2rem solid _.$bg-color3;\n  border-radius: 1rem;\n}\nhtml ::-webkit-scrollbar-thumb:hover {\n  border: 0.2rem solid gold;\n}\nbody {\n  color: _.$font-color;\n  font-family: \"Kalam\", cursive;\n  background-color: _.$bg-color;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\na:hover {\n  color: _.$bg-color3;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\na,\nlabel,\n.btn {\n  font-family: \"Agbalumo\", cursive;\n}\n#content {\n  margin-top: 7.5vh;\n  height: calc(100vh - 7.5vh);\n  background-color: black;\n}\np,\ninput,\ntextarea,\nspan,\n:placeholder-shown {\n  font-family: \"Labrada\", serif;\n  font-weight: 600;\n}\n","@use \"./assets/styles/styles.scss\";\n@use \"./assets/styles/util.scss\";\n@import url(\"https://fonts.googleapis.com/css2?family=Agbalumo&family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&family=Labrada:wght@300;400;600&family=Shantell+Sans:ital,wght@1,500&display=swap\");\n","$font-color: GhostWhite;\n$bg-color: #31572c;\n$bg-color2: #90a955;\n$bg-color3: #ecf39e;\n$my-height: calc(100vh - 7.5vh);\n$my-width: clamp(50%, 150rem, 80%);\n$my-filter: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n","@use \"./variables.scss\" as _;\n.flex {\n  display: flex;\n  &-col {\n    flex-direction: column;\n  }\n  &-row {\n    flex-direction: row;\n  }\n  &-center {\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n.border {\n  border: 0.4rem solid black;\n  &-radius-sm {\n    border-radius: 0.5rem;\n  }\n\n  &-bottom {\n    border-bottom: 1.4rem solid black;\n  }\n  &-radius-md {\n    border-radius: 1rem;\n  }\n  &-topAndBottom {\n    border-top: 0.4rem solid black;\n    border-bottom: 0.4rem solid black;\n  }\n  &-sides {\n    border-left: 0.4rem solid black;\n    border-right: 0.4rem solid black;\n  }\n}\n\n.bg-img-center {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.btn,\na {\n  transition: all 0.2s;\n}\n.btn {\n  display: inline-block;\n  font-size: 3rem;\n  padding: 1rem 3rem;\n  color: var(--font-color);\n  background-color: black;\n  cursor: pointer;\n  z-index: 3;\n  &:hover {\n    transform: scale(1.2);\n    color: gold;\n  }\n}\n\n.title {\n  padding: 2rem;\n  font-size: 4rem;\n  text-align: center;\n  background-color: black;\n  z-index: 5;\n}\n\n.description {\n  position: absolute;\n  top: 0;\n  align-items: center;\n  font-size: 2rem;\n  padding: 1rem;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(_.$bg-color, 0.9);\n  bottom: 0;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/components/about-component/about-component-styles.scss":
/*!********************************************************************!*\
  !*** ./src/components/about-component/about-component-styles.scss ***!
  \********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./about-component-styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/about-component/about-component-styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/footer-component/footer-component-styles.scss":
/*!**********************************************************************!*\
  !*** ./src/components/footer-component/footer-component-styles.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./footer-component-styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/footer-component/footer-component-styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_component_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/about-component/about-component.js":
/*!***********************************************************!*\
  !*** ./src/components/about-component/about-component.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils-functions */ "./src/utils/utils-functions.js");
/* harmony import */ var _about_component_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-component-styles.scss */ "./src/components/about-component/about-component-styles.scss");



function aboutComponent() {
  /*
   *********************** Create component elements ***************************************
   */
  const aboutSectionElement = document.createElement("section");
  const aboutUsContainer = document.createElement("div");
  const aboutUsTitle = document.createElement("h2");
  const aboutUsContentContainer = document.createElement("div");
  const aboutUsContent = (0,_utils_utils_functions__WEBPACK_IMPORTED_MODULE_0__.createMyElements)("about-us", 2);
  const aboutUsFormTitle1 = document.createElement("h3");
  const aboutUsFormTitle2 = document.createElement("h3");
  const aboutUsFormAddress = document.createElement("address");
  const aboutUsFormElement = document.createElement("form");
  const aboutUsFormFieldSets = (0,_utils_utils_functions__WEBPACK_IMPORTED_MODULE_0__.createMyElements)("form", 3);
  const formBtn = document.createElement("button");

  /*
   *********************** Set component elements attribute ***************************************
   */
  aboutSectionElement.setAttribute(
    "class",
    "about-us flex flex-row bg-img-center"
  );
  aboutSectionElement.setAttribute("id", "about-us");
  aboutUsContainer.setAttribute(
    "class",
    "about-us-container flex flex-row flex-center border-sides"
  );
  aboutUsTitle.setAttribute("class", "title border border-radius-md");
  aboutUsContentContainer.setAttribute(
    "class",
    "about-us-container flex flex-col flex-center bg-img-center border"
  );
  aboutUsFormTitle1.setAttribute("class", "border border-radius-md");
  aboutUsFormTitle2.setAttribute("class", "border border-radius-md");
  aboutUsFormElement.setAttribute(
    "class",
    "about-us-form border border-radius-md"
  );
  formBtn.setAttribute("class", "btn border border-radius-md");
  formBtn.setAttribute("type", "submit");

  /*
   *********************** Set component elements content ***************************************
   */

  aboutUsTitle.textContent = "About Us";
  aboutUsFormTitle1.textContent = "Opening hours Mon-Sat: 8AM - 10:30PM";
  aboutUsFormAddress.textContent =
    "Address: 123 Placeholder St, City, State 11212, USA.";
  aboutUsFormTitle2.textContent =
    "If you have any thoughts, questions or concerns please reach out to us thru our form or give us a call";
  formBtn.textContent = "Send";

  /*
   *********************** Add component elements ***************************************
   */
  aboutUsFormTitle1.appendChild(aboutUsFormAddress);
  aboutUsFormElement.append(...aboutUsFormFieldSets, formBtn);
  aboutUsContentContainer.append(
    aboutUsFormTitle1,
    aboutUsFormTitle2,
    aboutUsFormElement
  );
  aboutUsContainer.append(
    aboutUsTitle,
    ...aboutUsContent,
    aboutUsContentContainer
  );
  aboutSectionElement.append(aboutUsContainer);
  return aboutSectionElement;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutComponent);
/* 
    ****************************Component Blueprint *****************************
    <section class="about-us flex-row relative" id="about-us">
				<div
					class="about-us-container flex-row border border-radius"
					id="first"
				>
					<h3 class="title absolute border border-radius">About Us</h3>
					<div
						class="about-us-container background-img-center border-topAndBottom"
						id="st1"
					>
						<p class="description relative border-radius">
							We here at Tierra, are very concerned with our planet
							<strong>mother earth</strong>. One of the biggest threats to
							mother earth is <strong> climate change</strong> and one of the
							factors affecting that climate change, is
							<strong>factory farming</strong>. We must change our eating habits
							so we can ease the damage caused by intensive animal farming. We
							have dedicated our lives to help our society transition from
							consuming animal products to plant-based products.
						</p>
					</div>
					<div
						class="about-us-container background-img-center border-topAndBottom"
						id="st"
					>
						<p class="description relative border-radius">
							We know when people think of eating plant-based or vegan, two
							things usually come to mind, <i>boring and taste like dirt</i>.
							But we here at Tierra, made sure that none of our food is boring.
							We went above and beyond to make sure when we serve our food on
							the table, that all the rich and lovely flavor is there and not in
							the <i>dirt</i>. When our customers leave here, they will leave
							here not just satisfied; but even more knowledgeable than before.
							They know now, that the animal products that they use to love
							wasn't all that tasteful. What was tasteful was the way the food
							was prepared. Now, a plant-based lifestyle seems doable and even
							maintainable; for any individual that comes through these doors.
						</p>
					</div>

					<div
						class="about-us-container flex-col flex-center background-img-center border-topAndBottom"
						id="st2"
					>
						<h4 class="border border-radius">
							Opening hours Mon-Sat: 8AM - 10:30PM
							<address>
								Address: 123 Placeholder St, City, State 11212, USA.
							</address>
						</h4>

						<h4 class="border border-radius">
							If you have any thoughts, questions or concerns please reach out
							to us thru our form or give us a <a href="tel:180045454">call</a>.
						</h4>
						<form
							class="about-us-form border border-radius"
							method="post"
							action="https://www.freecodecamp.com/email-submit"
						>
							<fieldset>
								<label for="name">Name:</label>
								<input type="text" id="name" name="name" required />
							</fieldset>
							<fieldset>
								<label for="email">Email:</label>
								<input type="email" id="email" name="email" required />
							</fieldset>
							<fieldset>
								<label for="comments">Comments:</label>
								<textarea
									rows="5"
									cols="25"
									id="comments"
									name="comments"
									placeholder="Enter your comments here..."
								></textarea>
							</fieldset>
							<button class="btn border border-radius" type="submit">
								Send
							</button>
						</form>
					</div>
				</div>
			</section>  
    */


/***/ }),

/***/ "./src/components/footer-component/footer-components.js":
/*!**************************************************************!*\
  !*** ./src/components/footer-component/footer-components.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_component_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-component-styles.scss */ "./src/components/footer-component/footer-component-styles.scss");


function footerComponent() {
  const footerElement = document.createElement("footer");
  const footerContentElement = document.createElement("p");

  footerContentElement.setAttribute("class", "border border-radius-md");
  footerContentElement.textContent =
    "© 2023 Built By Guillermo Gonzalez. All rights reserved.";
  footerElement.appendChild(footerContentElement);

  return footerElement;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerComponent);


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
    "menu-items flex flex-col flex-center border-sides"
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
    } else if (element === "menu-highlights") {
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
        menuItemContainer.setAttribute("id", "burger");
        menuItemImg.setAttribute("src", "../src/assets/imgs/vegan-burger.jpg");
        menuItemDesc.textContent = `Our vegan burger will leave you stunned by the flavor. Our
        homemade burger patties are not like any other bland patty, ours
        come packed with protein, plenty of herbs and
        spices. Dressing up it with our homemade cheddar cheese and
        topped with your choice of lettuce or kale, onions and tomato.
        With our french fries included, your going to be shocked at how
        good a plant based burger can really be.`;
      } else if (x === 1) {
        menuItemContainer.setAttribute("id", "steak");
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
        menuItemContainer.setAttribute("id", "chicken");
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
    } else if (element === "about-us") {
      const aboutUsContentContainer = document.createElement("div");
      const aboutUsContentElement = document.createElement("p");

      aboutUsContentContainer.setAttribute(
        "class",
        "about-us-container flex flex-col flex-center bg-img-center border"
      );
      aboutUsContentElement.setAttribute(
        "class",
        "description flex border-radius-md"
      );

      if (x === 0) {
        aboutUsContentElement.textContent =
          "We here at Tierra, are very concerned with our planet mother earth. One of the biggest threats to mother earth is climate change and one of the factors affecting that climate change, is factory farming. We must change our eating habits so we can ease the damage caused by intensive animal farming. We have dedicated our lives to help our society transition from consuming animal products to plant-based products.";
      } else
        aboutUsContentElement.textContent =
          "We know when people think of eating plant-based or vegan, two things usually come to mind, boring and taste like dirt. But we here at Tierra, made sure that none of our food is boring. We went above and beyond to make sure when we serve our food on the table, that all the rich and lovely flavor is there and not in the dirt. When our customers leave here, they will leave here not just satisfied; but even more knowledgeable than before. They know now, that the animal products that they use to love wasn't all that tasteful. What was tasteful was the way the food was prepared. Now, a plant-based lifestyle seems doable and even maintainable; for any individual that comes through these doors.";

      aboutUsContentContainer.appendChild(aboutUsContentElement);
      elements.push(aboutUsContentContainer);
    } else if (element === "form") {
      const formFieldSet = document.createElement("fieldset");
      const formInput = document.createElement("input");
      const textArea = document.createElement("textarea");
      const formLabel = document.createElement("label");

      if (x === 0) {
        formInput.setAttribute("type", "text");
        formInput.setAttribute("id", "name");
        formInput.setAttribute("name", "name");
        formInput.setAttribute("required", "true");
        formLabel.setAttribute("for", "name");
        formLabel.textContent = "Name:";
      } else if (x === 1) {
        formInput.setAttribute("type", "email");
        formInput.setAttribute("id", "email");
        formInput.setAttribute("name", "email");
        formInput.setAttribute("required", "true");
        formLabel.setAttribute("for", "email");
        formLabel.textContent = "Email:";
      } else {
        textArea.setAttribute("rows", 5);
        textArea.setAttribute("col", 25);
        textArea.setAttribute("id", "comments");
        textArea.setAttribute("name", "comments");
        textArea.setAttribute("placeholder", "Enter your comments here....");
        formLabel.setAttribute("for", "comments");
        formLabel.textContent = "Comments:";
      }

      if (x > 1) formFieldSet.append(formLabel, textArea);
      else formFieldSet.append(formLabel, formInput);

      elements.push(formFieldSet);
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

/***/ "./src/assets/imgs/customer-info.png":
/*!*******************************************!*\
  !*** ./src/assets/imgs/customer-info.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eed82d500d81f0d6b167.png";

/***/ }),

/***/ "./src/assets/imgs/menu.png":
/*!**********************************!*\
  !*** ./src/assets/imgs/menu.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd0c378c009c6c2ca7d2.png";

/***/ }),

/***/ "./src/assets/imgs/restauarant1.jpg":
/*!******************************************!*\
  !*** ./src/assets/imgs/restauarant1.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "feeab1732891aefe6b42.jpg";

/***/ }),

/***/ "./src/assets/imgs/us.png":
/*!********************************!*\
  !*** ./src/assets/imgs/us.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c887b71e9f5baf8ee6c.png";

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
/* harmony import */ var _components_about_component_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about-component/about-component */ "./src/components/about-component/about-component.js");
/* harmony import */ var _components_footer_component_footer_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer-component/footer-components */ "./src/components/footer-component/footer-components.js");







(function myApp() {
  const pageContainer = document.createElement("main");
  pageContainer.setAttribute("id", "content");

  pageContainer.append(
    (0,_components_heading_component_heading_component__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    (0,_components_menu_component_menu_component__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    (0,_components_about_component_about_component__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    (0,_components_footer_component_footer_components__WEBPACK_IMPORTED_MODULE_5__["default"])()
  );
  document.body.append((0,_components_navbar_component_navbar_component__WEBPACK_IMPORTED_MODULE_2__["default"])(), pageContainer);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJOQUEyTixLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxPQUFPLGFBQWEsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxTQUFTLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLd0M7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RVOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVB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Q05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUMwRDtBQUNIO0FBQ047QUFDRztBQUNJOztBQUU5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDJGQUFnQjtBQUNwQixJQUFJLHFGQUFhO0FBQ2pCLElBQUksdUZBQWM7QUFDbEIsSUFBSSwwRkFBZTtBQUNuQjtBQUNBLHVCQUF1Qix5RkFBZTtBQUN0QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9jb21wb25lbnRzL2Fib3V0LWNvbXBvbmVudC9hYm91dC1jb21wb25lbnQtc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci1jb21wb25lbnQvZm9vdGVyLWNvbXBvbmVudC1zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvaGVhZGluZy1jb21wb25lbnQvaGVhZGluZy1jb21wb25lbnQtc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9jb21wb25lbnRzL21lbnUtY29tcG9uZW50L21lbnUtY29tcG9uZW50LXN0eWxlcy5zY3NzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9zcmMvY29tcG9uZW50cy9uYXZiYXItY29tcG9uZW50L25hdmJhci1jb21wb25lbnQtc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQtY29tcG9uZW50L2Fib3V0LWNvbXBvbmVudC1zdHlsZXMuc2Nzcz8yMDhiIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9zcmMvY29tcG9uZW50cy9mb290ZXItY29tcG9uZW50L2Zvb3Rlci1jb21wb25lbnQtc3R5bGVzLnNjc3M/Y2Q2MCIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvaGVhZGluZy1jb21wb25lbnQvaGVhZGluZy1jb21wb25lbnQtc3R5bGVzLnNjc3M/OGNkZSIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvbWVudS1jb21wb25lbnQvbWVudS1jb21wb25lbnQtc3R5bGVzLnNjc3M/ZDQ0ZSIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLWNvbXBvbmVudC9uYXZiYXItY29tcG9uZW50LXN0eWxlcy5zY3NzP2ZmNWIiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQtY29tcG9uZW50L2Fib3V0LWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLWNvbXBvbmVudC9mb290ZXItY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvaGVhZGluZy1jb21wb25lbnQvaGVhZGluZy1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9jb21wb25lbnRzL21lbnUtY29tcG9uZW50L21lbnUtY29tcG9uZW50LmpzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9zcmMvY29tcG9uZW50cy9uYXZiYXItY29tcG9uZW50L25hdmJhci1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy91dGlscy91dGlscy1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc2xhbmRpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc2xhbmRpbmcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1ncy9yZXN0YXVhcmFudDEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltZ3MvYWJvdXQtYmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltZ3MvY3VzdG9tZXItaW5mby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1ncy91cy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hYm91dC11cyB7XG4gIGhlaWdodDogOTIuNXZoO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTU3MmM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbi5hYm91dC11cy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uYWJvdXQtdXMgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XG4gIHdpZHRoOiBjbGFtcCg1MCUsIDE1MHJlbSwgODAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDQsIDE2OSwgODUsIDAuNyk7XG4gIHBhZGRpbmc6IDEwcmVtO1xufVxuLmFib3V0LXVzID4gZGl2OmZpcnN0LW9mLXR5cGUgPiBkaXYge1xuICBtYXgtaGVpZ2h0OiA5MHJlbTtcbiAgcGFkZGluZzogMnJlbSAwO1xufVxuLmFib3V0LXVzID4gZGl2OmZpcnN0LW9mLXR5cGUgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XG59XG4uYWJvdXQtdXMgPiBkaXY6Zmlyc3Qtb2YtdHlwZSA+IGRpdjpmaXJzdC1vZi10eXBlICsgZGl2IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uYWJvdXQtdXMgPiBkaXY6Zmlyc3Qtb2YtdHlwZSA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxcmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcbn1cbi5hYm91dC11cyAuZGVzY3JpcHRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgcGFkZGluZzogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNzByZW07XG4gIG1heC1oZWlnaHQ6IDcwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5hYm91dC11cyAuZGVzY3JpcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ5LCA4NywgNDQsIDAuOSk7XG59XG4uYWJvdXQtdXMtZm9ybSB7XG4gIG1hcmdpbjogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTByZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDksIDg3LCA0NCwgMC43NTI5NDExNzY1KTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5hYm91dC11cy1mb3JtIC5idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59XG4uYWJvdXQtdXMtZm9ybSBmaWVsZHNldCB7XG4gIHBhZGRpbmc6IDEuMnJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuLmFib3V0LXVzLWZvcm0gaW5wdXQsIC5hYm91dC11cy1mb3JtIHRleHRhcmVhIHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4uYWJvdXQtdXMgLnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJ2aDtcbn1cbi5hYm91dC11cyBoMyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbiAgZm9udC1zaXplOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ5LCA4NywgNDQsIDAuNzUyOTQxMTc2NSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2Fib3V0LWNvbXBvbmVudC9hYm91dC1jb21wb25lbnQtc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsY0NFVTtFRERWLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQ05TO0VET1Qsa0hBQUE7QUFBRjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFBSjtBQUVFO0VBQ0UsOEJDZk87RURnQlAseUNBQUE7RUFDQSxjQUFBO0FBQUo7QUFFSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUFOO0FBR0k7RUFDRSxrSEFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFETjtBQUlJO0VBQ0Usa0hBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRk47QUFLSTtFQUNFLGtIQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQUhOO0FBTUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUpKO0FBS0k7RUFDRSx1Q0FBQTtBQUhOO0FBTUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxhQUFBO0FBSko7QUFNSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUpOO0FBT0k7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTE47QUFPSTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBTk47QUFTRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQVBKO0FBU0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtBQVBKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcXFwiIGFzIF87XFxuLmFib3V0LXVzIHtcXG4gIGhlaWdodDogXy4kbXktaGVpZ2h0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogXy4kYmctY29sb3I7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBfLiRteS1maWx0ZXIsIHVybChcXFwiLi4vLi4vYXNzZXRzL2ltZ3MvcmVzdGF1YXJhbnQxLmpwZ1xcXCIpO1xcblxcbiAgJi1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBmbGV4LXNocmluazogMTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICB9XFxuICAmID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICB3aWR0aDogXy4kbXktd2lkdGg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXy4kYmctY29sb3IyLCAwLjcpO1xcbiAgICBwYWRkaW5nOiAxMHJlbTtcXG5cXG4gICAgJiA+IGRpdiB7XFxuICAgICAgbWF4LWhlaWdodDogOTByZW07XFxuICAgICAgcGFkZGluZzogMnJlbSAwO1xcbiAgICB9XFxuXFxuICAgICYgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogXy4kbXktZmlsdGVyLCB1cmwoXFxcIi4uLy4uL2Fzc2V0cy9pbWdzL2Fib3V0LWJnLnBuZ1xcXCIpO1xcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XFxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgJiA+IGRpdjpmaXJzdC1vZi10eXBlICsgZGl2IHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBfLiRteS1maWx0ZXIsIHVybChcXFwiLi4vLi4vYXNzZXRzL2ltZ3MvY3VzdG9tZXItaW5mby5wbmdcXFwiKTtcXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAmID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IF8uJG15LWZpbHRlciwgdXJsKFxcXCIuLi8uLi9hc3NldHMvaW1ncy91cy5wbmdcXFwiKTtcXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxcmVtO1xcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxcmVtO1xcbiAgICB9XFxuICB9XFxuICAmIC5kZXNjcmlwdGlvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA3MHJlbTtcXG4gICAgbWF4LWhlaWdodDogNzByZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKF8uJGJnLWNvbG9yLCAwLjkpO1xcbiAgICB9XFxuICB9XFxuICAmLWZvcm0ge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE1NzJjYzA7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuXFxuICAgICYgLmJ0biB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICAgIH1cXG5cXG4gICAgJiBmaWVsZHNldCB7XFxuICAgICAgcGFkZGluZzogMS4ycmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG4gICAgJiBpbnB1dCxcXG4gICAgJiB0ZXh0YXJlYSB7XFxuICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICB9XFxuICB9XFxuICAmIC50aXRsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAydmg7XFxuICB9XFxuICAmIGgzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNTByZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTU3MmNjMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5cIixcIiRmb250LWNvbG9yOiBHaG9zdFdoaXRlO1xcbiRiZy1jb2xvcjogIzMxNTcyYztcXG4kYmctY29sb3IyOiAjOTBhOTU1O1xcbiRiZy1jb2xvcjM6ICNlY2YzOWU7XFxuJG15LWhlaWdodDogY2FsYygxMDB2aCAtIDcuNXZoKTtcXG4kbXktd2lkdGg6IGNsYW1wKDUwJSwgMTUwcmVtLCA4MCUpO1xcbiRteS1maWx0ZXI6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSk7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBmb290ZXIge1xuICBib3JkZXItdG9wOiAxLjRyZW0gc29saWQgYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMzllO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG5mb290ZXIgcCB7XG4gIGZvbnQtc2l6ZTogMi42cmVtO1xuICB3aWR0aDogY2xhbXAoMjAlLCA4MHJlbSwgNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxNTcyYztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLWNvbXBvbmVudC9mb290ZXItY29tcG9uZW50LXN0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJDRlU7RURHVixhQUFBO0FBQUY7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJDVlM7RURXVCxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIiBhcyBfO1xcbmZvb3RlciB7XFxuICBib3JkZXItdG9wOiAxLjRyZW0gc29saWQgYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBfLiRiZy1jb2xvcjM7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5mb290ZXIgcCB7XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG4gIHdpZHRoOiBjbGFtcCgyMCUsIDgwcmVtLCA1MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogXy4kYmctY29sb3I7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXCIsXCIkZm9udC1jb2xvcjogR2hvc3RXaGl0ZTtcXG4kYmctY29sb3I6ICMzMTU3MmM7XFxuJGJnLWNvbG9yMjogIzkwYTk1NTtcXG4kYmctY29sb3IzOiAjZWNmMzllO1xcbiRteS1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3LjV2aCk7XFxuJG15LXdpZHRoOiBjbGFtcCg1MCUsIDE1MHJlbSwgODAlKTtcXG4kbXktZmlsdGVyOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltZ3MvYWJvdXQtYmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGluZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGNsYW1wKDUwJSwgMTUwcmVtLCA4MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ5LCA4NywgNDQsIDAuNyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4uaGVhZGluZy1jb250YWluZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5Mi41dmg7XG59XG4uaGVhZGluZy1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogR2hvc3RXaGl0ZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwYWRkaW5nOiA1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogNXJlbTtcbn1cbi5oZWFkaW5nLWdyb3VwID4gaDEge1xuICBmb250LXNpemU6IDE1cmVtO1xufVxuLmhlYWRpbmctZ3JvdXAgPiBwIHtcbiAgZm9udC1zaXplOiA1cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvaGVhZGluZy1jb21wb25lbnQvaGVhZGluZy1jb21wb25lbnQtc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBREY7QUFHRTtFQUNFLG9CQUFBO0VBQ0Esa0hBQUE7RUFDQSxXQUFBO0VBQ0EsY0NUUTtBRFFaO0FBSUU7RUFDRSxXQUFBO0VBQ0EsaUJDbEJTO0VEbUJULGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBRko7QUFJSTtFQUNFLGdCQUFBO0FBRk47QUFJSTtFQUNFLGVBQUE7QUFGTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIiBhcyBfO1xcblxcbi5oZWFkaW5nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiBjbGFtcCg1MCUsIDE1MHJlbSwgODAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXy4kYmctY29sb3IsIDAuNyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG5cXG4gICYtY29udGFpbmVyIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IF8uJG15LWZpbHRlciwgdXJsKFxcXCIuLi8uLi9hc3NldHMvaW1ncy9hYm91dC1iZy5wbmdcXFwiKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogXy4kbXktaGVpZ2h0O1xcbiAgICAvLyBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgJi1ncm91cCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogXy4kZm9udC1jb2xvcjtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBwYWRkaW5nOiA1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogNXJlbTtcXG5cXG4gICAgJiA+IGgxIHtcXG4gICAgICBmb250LXNpemU6IDE1cmVtO1xcbiAgICB9XFxuICAgICYgPiBwIHtcXG4gICAgICBmb250LXNpemU6IDVyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIkZm9udC1jb2xvcjogR2hvc3RXaGl0ZTtcXG4kYmctY29sb3I6ICMzMTU3MmM7XFxuJGJnLWNvbG9yMjogIzkwYTk1NTtcXG4kYmctY29sb3IzOiAjZWNmMzllO1xcbiRteS1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3LjV2aCk7XFxuJG15LXdpZHRoOiBjbGFtcCg1MCUsIDE1MHJlbSwgODAlKTtcXG4kbXktZmlsdGVyOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltZ3MvbWVudS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTIuNXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBhOTU1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIHotaW5kZXg6IDEwO1xufVxuLm1lbnUtaXRlbXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBjbGFtcCg1MCUsIDE1MHJlbSwgODAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NCwgMTY5LCA4NSwgMC43KTtcbn1cbi5tZW51LWl0ZW1zLXJvdyB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZ2FwOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5MHJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tZW51LWl0ZW1zLXJvdy0yIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ubWVudS1pdGVtcy1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxNTcyYztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTByZW07XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzByZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4ubWVudS1pdGVtcy1pdGVtIC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5tZW51LWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWVudS1oaWdobGlnaHRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzVyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzByZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTU3MmM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tZW51LWhpZ2hsaWdodHMtaGlnaGxpZ2h0IHtcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL21lbnUtY29tcG9uZW50L21lbnUtY29tcG9uZW50LXN0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLFdBQUE7RUFDQSxjQ0NVO0VEQVYseUJDRlU7RURHVixrSEFBQTtFQUNBLFdBQUE7QUFBRjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSw4QkNOTztFRE9QLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7QUFESjtBQUdJO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRE47QUFFTTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7QUFBUjtBQUdJO0VBQ0UseUJDOUJLO0VEK0JMLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFHTTtFQUNFLGVBQUE7QUFEUjtBQU1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFKSjtBQU9FO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJDckRPO0VEc0RQLGtCQUFBO0FBTEo7QUFPSTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUxOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcXFwiIGFzIF87XFxuLm1lbnUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IF8uJG15LWhlaWdodDtcXG4gIGJhY2tncm91bmQtY29sb3I6IF8uJGJnLWNvbG9yMjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IF8uJG15LWZpbHRlciwgdXJsKFxcXCIuLi8uLi9hc3NldHMvaW1ncy9tZW51LnBuZ1xcXCIpO1xcbiAgei1pbmRleDogMTA7XFxuICAvLyBkaXNwbGF5OiBub25lO1xcblxcbiAgJi1pdGVtcyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IF8uJG15LXdpZHRoO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXy4kYmctY29sb3IyLCAwLjcpO1xcblxcbiAgICAmLXJvdyB7XFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgZ2FwOiAycmVtO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1heC13aWR0aDogOTByZW07XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIG1heC1oZWlnaHQ6IDM1cmVtO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgJi0yIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgJi1pdGVtIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBfLiRiZy1jb2xvcjtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBtYXgtaGVpZ2h0OiAzMHJlbTtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcblxcbiAgICAgICYgLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICYtaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gICYtaGlnaGxpZ2h0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDM1cmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDMwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBfLiRiZy1jb2xvcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAmLWhpZ2hsaWdodCB7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XFxuICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiJGZvbnQtY29sb3I6IEdob3N0V2hpdGU7XFxuJGJnLWNvbG9yOiAjMzE1NzJjO1xcbiRiZy1jb2xvcjI6ICM5MGE5NTU7XFxuJGJnLWNvbG9yMzogI2VjZjM5ZTtcXG4kbXktaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNy41dmgpO1xcbiRteS13aWR0aDogY2xhbXAoNTAlLCAxNTByZW0sIDgwJSk7XFxuJG15LWZpbHRlcjogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKTtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTU3MmM7XG4gIGJveC1zaGFkb3c6IDAgMCAyLjVyZW0gMC41cmVtIGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDtcbn1cbi5uYXYtbG9nbyB7XG4gIHBhZGRpbmc6IDAuMnJlbSAxM3JlbTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICB3aWR0aDogMzAlO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4ubmF2LWl0ZW1zIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2LWl0ZW1zLWl0ZW0ge1xuICBmb250LXNpemU6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG59XG4ubmF2LWl0ZW1zLWl0ZW0tbGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgcGFkZGluZzogM3JlbSA1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5uYXYtaXRlbXMtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MGE5NTU7XG4gIGNvbG9yOiBnb2xkO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLWNvbXBvbmVudC9uYXZiYXItY29tcG9uZW50LXN0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSx5QkNMUztFRE1ULG1DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUY7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBQUo7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUFKO0FBRUk7RUFDRSxlQUFBO0VBRUEsNkJBQUE7RUFDQSwyQkFBQTtBQUROO0FBRU07RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFBUjtBQUdJO0VBQ0UseUJDbkNNO0VEb0NOLFdBQUE7QUFETlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIiBhcyBfO1xcbi5uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogXy4kYmctY29sb3I7XFxuICBib3gtc2hhZG93OiAwIDAgMi41cmVtIDAuNXJlbSBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTA7XFxuXFxuICAmLWxvZ28ge1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMTNyZW07XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgfVxcbiAgJi1pdGVtcyB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAmLWl0ZW0ge1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxuICAgICAgJi1saW5rIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXG4gICAgICAgIHBhZGRpbmc6IDNyZW0gNXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAmLWl0ZW06aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IF8uJGJnLWNvbG9yMjtcXG4gICAgICBjb2xvcjogZ29sZDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIiRmb250LWNvbG9yOiBHaG9zdFdoaXRlO1xcbiRiZy1jb2xvcjogIzMxNTcyYztcXG4kYmctY29sb3IyOiAjOTBhOTU1O1xcbiRiZy1jb2xvcjM6ICNlY2YzOWU7XFxuJG15LWhlaWdodDogY2FsYygxMDB2aCAtIDcuNXZoKTtcXG4kbXktd2lkdGg6IGNsYW1wKDUwJSwgMTUwcmVtLCA4MCUpO1xcbiRteS1maWx0ZXI6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSk7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWdiYWx1bW8mZmFtaWx5PUNhbnRhcmVsbDppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZmFtaWx5PUxhYnJhZGE6d2dodEAzMDA7NDAwOzYwMCZmYW1pbHk9U2hhbnRlbGwrU2FuczppdGFsLHdnaHRAMSw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBEZWZhdWx0cyAqL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBmb250LXNpemU6IDYyLjUlO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogIzMxNTcyYyAjZWNmMzllO1xufVxuXG5odG1sIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMXJlbTtcbn1cblxuaHRtbCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmh0bWwgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDksIDg3LCA0NCwgMC43NTI5NDExNzY1KTtcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgI2VjZjM5ZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuaHRtbCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgZ29sZDtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiBHaG9zdFdoaXRlO1xuICBmb250LWZhbWlseTogXCJLYWxhbVwiLCBjdXJzaXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE1NzJjO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjZWNmMzllO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5hLFxubGFiZWwsXG4uYnRuIHtcbiAgZm9udC1mYW1pbHk6IFwiQWdiYWx1bW9cIiwgY3Vyc2l2ZTtcbn1cblxuI2NvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA3LjV2aDtcbiAgaGVpZ2h0OiA5Mi41dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5wLFxuaW5wdXQsXG50ZXh0YXJlYSxcbnNwYW4sXG46cGxhY2Vob2xkZXItc2hvd24ge1xuICBmb250LWZhbWlseTogXCJMYWJyYWRhXCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxleC1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZsZXgtcm93IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiAwLjRyZW0gc29saWQgYmxhY2s7XG59XG4uYm9yZGVyLXJhZGl1cy1zbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMS40cmVtIHNvbGlkIGJsYWNrO1xufVxuLmJvcmRlci1yYWRpdXMtbWQge1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuLmJvcmRlci10b3BBbmRCb3R0b20ge1xuICBib3JkZXItdG9wOiAwLjRyZW0gc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDAuNHJlbSBzb2xpZCBibGFjaztcbn1cbi5ib3JkZXItc2lkZXMge1xuICBib3JkZXItbGVmdDogMC40cmVtIHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IDAuNHJlbSBzb2xpZCBibGFjaztcbn1cblxuLmJnLWltZy1jZW50ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5idG4sXG5hIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgcGFkZGluZzogMXJlbSAzcmVtO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDM7XG59XG4uYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICBjb2xvcjogZ29sZDtcbn1cblxuLnRpdGxlIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgZm9udC1zaXplOiA0cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB6LWluZGV4OiA1O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ5LCA4NywgNDQsIDAuOSk7XG4gIGJvdHRvbTogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL3V0aWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxhQUFBO0FBQ0E7RUFDRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0UsNkJBQUE7QUNFRjs7QURBQTtFQUNFLGdEQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0UseUJBQUE7QUNJRjs7QURGQTtFQUNFLGlCRTlCVztFRitCWCw2QkFBQTtFQUNBLHlCRS9CUztBRG9DWDs7QURIQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ01GOztBREpBO0VBQ0UsY0VwQ1U7QUQyQ1o7O0FETEE7Ozs7Ozs7OztFQVNFLGdDQUFBO0FDUUY7O0FETkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ1NGOztBRFBBOzs7OztFQUtFLDZCQUFBO0VBQ0EsZ0JBQUE7QUNVRjs7QUV4RUE7RUFDRSxhQUFBO0FGMkVGO0FFMUVFO0VBQ0Usc0JBQUE7QUY0RUo7QUUxRUU7RUFDRSxtQkFBQTtBRjRFSjtBRTFFRTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUY0RUo7O0FFeEVBO0VBQ0UsMEJBQUE7QUYyRUY7QUUxRUU7RUFDRSxxQkFBQTtBRjRFSjtBRXpFRTtFQUNFLGlDQUFBO0FGMkVKO0FFekVFO0VBQ0UsbUJBQUE7QUYyRUo7QUV6RUU7RUFDRSw4QkFBQTtFQUNBLGlDQUFBO0FGMkVKO0FFekVFO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBRjJFSjs7QUV2RUE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUYwRUY7O0FFeEVBOztFQUVFLG9CQUFBO0FGMkVGOztBRXpFQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FGNEVGO0FFM0VFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FGNkVKOztBRXpFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUY0RUY7O0FFekVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxTQUFBO0FGNEVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4vdmFyaWFibGVzLnNjc3NcXFwiIGFzIF87XFxuXFxuLyogRGVmYXVsdHMgKi9cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gIHNjcm9sbGJhci1jb2xvcjogXy4kYmctY29sb3IgXy4kYmctY29sb3IzO1xcbn1cXG5odG1sIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDFyZW07XFxufVxcbmh0bWwgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuaHRtbCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTU3MmNjMDtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIF8uJGJnLWNvbG9yMztcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcbmh0bWwgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCBnb2xkO1xcbn1cXG5ib2R5IHtcXG4gIGNvbG9yOiBfLiRmb250LWNvbG9yO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLYWxhbVxcXCIsIGN1cnNpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBfLiRiZy1jb2xvcjtcXG59XFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuYTpob3ZlciB7XFxuICBjb2xvcjogXy4kYmctY29sb3IzO1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5hLFxcbmxhYmVsLFxcbi5idG4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBZ2JhbHVtb1xcXCIsIGN1cnNpdmU7XFxufVxcbiNjb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDcuNXZoO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNy41dmgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbnAsXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc3BhbixcXG46cGxhY2Vob2xkZXItc2hvd24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYWJyYWRhXFxcIiwgc2VyaWY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cIixcIkB1c2UgXFxcIi4vYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzc1xcXCI7XFxuQHVzZSBcXFwiLi9hc3NldHMvc3R5bGVzL3V0aWwuc2Nzc1xcXCI7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWdiYWx1bW8mZmFtaWx5PUNhbnRhcmVsbDppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZmFtaWx5PUxhYnJhZGE6d2dodEAzMDA7NDAwOzYwMCZmYW1pbHk9U2hhbnRlbGwrU2FuczppdGFsLHdnaHRAMSw1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXCIsXCIkZm9udC1jb2xvcjogR2hvc3RXaGl0ZTtcXG4kYmctY29sb3I6ICMzMTU3MmM7XFxuJGJnLWNvbG9yMjogIzkwYTk1NTtcXG4kYmctY29sb3IzOiAjZWNmMzllO1xcbiRteS1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3LjV2aCk7XFxuJG15LXdpZHRoOiBjbGFtcCg1MCUsIDE1MHJlbSwgODAlKTtcXG4kbXktZmlsdGVyOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpO1xcblwiLFwiQHVzZSBcXFwiLi92YXJpYWJsZXMuc2Nzc1xcXCIgYXMgXztcXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgJi1jb2wge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgJi1yb3cge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbiAgJi1jZW50ZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLmJvcmRlciB7XFxuICBib3JkZXI6IDAuNHJlbSBzb2xpZCBibGFjaztcXG4gICYtcmFkaXVzLXNtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgfVxcblxcbiAgJi1ib3R0b20ge1xcbiAgICBib3JkZXItYm90dG9tOiAxLjRyZW0gc29saWQgYmxhY2s7XFxuICB9XFxuICAmLXJhZGl1cy1tZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB9XFxuICAmLXRvcEFuZEJvdHRvbSB7XFxuICAgIGJvcmRlci10b3A6IDAuNHJlbSBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLWJvdHRvbTogMC40cmVtIHNvbGlkIGJsYWNrO1xcbiAgfVxcbiAgJi1zaWRlcyB7XFxuICAgIGJvcmRlci1sZWZ0OiAwLjRyZW0gc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yaWdodDogMC40cmVtIHNvbGlkIGJsYWNrO1xcbiAgfVxcbn1cXG5cXG4uYmctaW1nLWNlbnRlciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLmJ0bixcXG5hIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG4uYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHBhZGRpbmc6IDFyZW0gM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMztcXG4gICY6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIGNvbG9yOiBnb2xkO1xcbiAgfVxcbn1cXG5cXG4udGl0bGUge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgei1pbmRleDogNTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKF8uJGJnLWNvbG9yLCAwLjkpO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci1jb21wb25lbnQtc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRpbmctY29tcG9uZW50LXN0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGluZy1jb21wb25lbnQtc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUtY29tcG9uZW50LXN0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS1jb21wb25lbnQtc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci1jb21wb25lbnQtc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXItY29tcG9uZW50LXN0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlTXlFbGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlscy91dGlscy1mdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vYWJvdXQtY29tcG9uZW50LXN0eWxlcy5zY3NzXCI7XG5cbmZ1bmN0aW9uIGFib3V0Q29tcG9uZW50KCkge1xuICAvKlxuICAgKioqKioqKioqKioqKioqKioqKioqKiogQ3JlYXRlIGNvbXBvbmVudCBlbGVtZW50cyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG4gIGNvbnN0IGFib3V0U2VjdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY29uc3QgYWJvdXRVc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFib3V0VXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgYWJvdXRVc0NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhYm91dFVzQ29udGVudCA9IGNyZWF0ZU15RWxlbWVudHMoXCJhYm91dC11c1wiLCAyKTtcbiAgY29uc3QgYWJvdXRVc0Zvcm1UaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IGFib3V0VXNGb3JtVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBhYm91dFVzRm9ybUFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYWRkcmVzc1wiKTtcbiAgY29uc3QgYWJvdXRVc0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IGFib3V0VXNGb3JtRmllbGRTZXRzID0gY3JlYXRlTXlFbGVtZW50cyhcImZvcm1cIiwgMyk7XG4gIGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBTZXQgY29tcG9uZW50IGVsZW1lbnRzIGF0dHJpYnV0ZSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG4gIGFib3V0U2VjdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgIFwiY2xhc3NcIixcbiAgICBcImFib3V0LXVzIGZsZXggZmxleC1yb3cgYmctaW1nLWNlbnRlclwiXG4gICk7XG4gIGFib3V0U2VjdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dC11c1wiKTtcbiAgYWJvdXRVc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiYWJvdXQtdXMtY29udGFpbmVyIGZsZXggZmxleC1yb3cgZmxleC1jZW50ZXIgYm9yZGVyLXNpZGVzXCJcbiAgKTtcbiAgYWJvdXRVc1RpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGUgYm9yZGVyIGJvcmRlci1yYWRpdXMtbWRcIik7XG4gIGFib3V0VXNDb250ZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcbiAgICBcImNsYXNzXCIsXG4gICAgXCJhYm91dC11cy1jb250YWluZXIgZmxleCBmbGV4LWNvbCBmbGV4LWNlbnRlciBiZy1pbWctY2VudGVyIGJvcmRlclwiXG4gICk7XG4gIGFib3V0VXNGb3JtVGl0bGUxLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYm9yZGVyIGJvcmRlci1yYWRpdXMtbWRcIik7XG4gIGFib3V0VXNGb3JtVGl0bGUyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYm9yZGVyIGJvcmRlci1yYWRpdXMtbWRcIik7XG4gIGFib3V0VXNGb3JtRWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiYWJvdXQtdXMtZm9ybSBib3JkZXIgYm9yZGVyLXJhZGl1cy1tZFwiXG4gICk7XG4gIGZvcm1CdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYm9yZGVyIGJvcmRlci1yYWRpdXMtbWRcIik7XG4gIGZvcm1CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcblxuICAvKlxuICAgKioqKioqKioqKioqKioqKioqKioqKiogU2V0IGNvbXBvbmVudCBlbGVtZW50cyBjb250ZW50ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICBhYm91dFVzVGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG4gIGFib3V0VXNGb3JtVGl0bGUxLnRleHRDb250ZW50ID0gXCJPcGVuaW5nIGhvdXJzIE1vbi1TYXQ6IDhBTSAtIDEwOjMwUE1cIjtcbiAgYWJvdXRVc0Zvcm1BZGRyZXNzLnRleHRDb250ZW50ID1cbiAgICBcIkFkZHJlc3M6IDEyMyBQbGFjZWhvbGRlciBTdCwgQ2l0eSwgU3RhdGUgMTEyMTIsIFVTQS5cIjtcbiAgYWJvdXRVc0Zvcm1UaXRsZTIudGV4dENvbnRlbnQgPVxuICAgIFwiSWYgeW91IGhhdmUgYW55IHRob3VnaHRzLCBxdWVzdGlvbnMgb3IgY29uY2VybnMgcGxlYXNlIHJlYWNoIG91dCB0byB1cyB0aHJ1IG91ciBmb3JtIG9yIGdpdmUgdXMgYSBjYWxsXCI7XG4gIGZvcm1CdG4udGV4dENvbnRlbnQgPSBcIlNlbmRcIjtcblxuICAvKlxuICAgKioqKioqKioqKioqKioqKioqKioqKiogQWRkIGNvbXBvbmVudCBlbGVtZW50cyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG4gIGFib3V0VXNGb3JtVGl0bGUxLmFwcGVuZENoaWxkKGFib3V0VXNGb3JtQWRkcmVzcyk7XG4gIGFib3V0VXNGb3JtRWxlbWVudC5hcHBlbmQoLi4uYWJvdXRVc0Zvcm1GaWVsZFNldHMsIGZvcm1CdG4pO1xuICBhYm91dFVzQ29udGVudENvbnRhaW5lci5hcHBlbmQoXG4gICAgYWJvdXRVc0Zvcm1UaXRsZTEsXG4gICAgYWJvdXRVc0Zvcm1UaXRsZTIsXG4gICAgYWJvdXRVc0Zvcm1FbGVtZW50XG4gICk7XG4gIGFib3V0VXNDb250YWluZXIuYXBwZW5kKFxuICAgIGFib3V0VXNUaXRsZSxcbiAgICAuLi5hYm91dFVzQ29udGVudCxcbiAgICBhYm91dFVzQ29udGVudENvbnRhaW5lclxuICApO1xuICBhYm91dFNlY3Rpb25FbGVtZW50LmFwcGVuZChhYm91dFVzQ29udGFpbmVyKTtcbiAgcmV0dXJuIGFib3V0U2VjdGlvbkVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0Q29tcG9uZW50O1xuLyogXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKkNvbXBvbmVudCBCbHVlcHJpbnQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICA8c2VjdGlvbiBjbGFzcz1cImFib3V0LXVzIGZsZXgtcm93IHJlbGF0aXZlXCIgaWQ9XCJhYm91dC11c1wiPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3M9XCJhYm91dC11cy1jb250YWluZXIgZmxleC1yb3cgYm9yZGVyIGJvcmRlci1yYWRpdXNcIlxuXHRcdFx0XHRcdGlkPVwiZmlyc3RcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGgzIGNsYXNzPVwidGl0bGUgYWJzb2x1dGUgYm9yZGVyIGJvcmRlci1yYWRpdXNcIj5BYm91dCBVczwvaDM+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJhYm91dC11cy1jb250YWluZXIgYmFja2dyb3VuZC1pbWctY2VudGVyIGJvcmRlci10b3BBbmRCb3R0b21cIlxuXHRcdFx0XHRcdFx0aWQ9XCJzdDFcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiZGVzY3JpcHRpb24gcmVsYXRpdmUgYm9yZGVyLXJhZGl1c1wiPlxuXHRcdFx0XHRcdFx0XHRXZSBoZXJlIGF0IFRpZXJyYSwgYXJlIHZlcnkgY29uY2VybmVkIHdpdGggb3VyIHBsYW5ldFxuXHRcdFx0XHRcdFx0XHQ8c3Ryb25nPm1vdGhlciBlYXJ0aDwvc3Ryb25nPi4gT25lIG9mIHRoZSBiaWdnZXN0IHRocmVhdHMgdG9cblx0XHRcdFx0XHRcdFx0bW90aGVyIGVhcnRoIGlzIDxzdHJvbmc+IGNsaW1hdGUgY2hhbmdlPC9zdHJvbmc+IGFuZCBvbmUgb2YgdGhlXG5cdFx0XHRcdFx0XHRcdGZhY3RvcnMgYWZmZWN0aW5nIHRoYXQgY2xpbWF0ZSBjaGFuZ2UsIGlzXG5cdFx0XHRcdFx0XHRcdDxzdHJvbmc+ZmFjdG9yeSBmYXJtaW5nPC9zdHJvbmc+LiBXZSBtdXN0IGNoYW5nZSBvdXIgZWF0aW5nIGhhYml0c1xuXHRcdFx0XHRcdFx0XHRzbyB3ZSBjYW4gZWFzZSB0aGUgZGFtYWdlIGNhdXNlZCBieSBpbnRlbnNpdmUgYW5pbWFsIGZhcm1pbmcuIFdlXG5cdFx0XHRcdFx0XHRcdGhhdmUgZGVkaWNhdGVkIG91ciBsaXZlcyB0byBoZWxwIG91ciBzb2NpZXR5IHRyYW5zaXRpb24gZnJvbVxuXHRcdFx0XHRcdFx0XHRjb25zdW1pbmcgYW5pbWFsIHByb2R1Y3RzIHRvIHBsYW50LWJhc2VkIHByb2R1Y3RzLlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzPVwiYWJvdXQtdXMtY29udGFpbmVyIGJhY2tncm91bmQtaW1nLWNlbnRlciBib3JkZXItdG9wQW5kQm90dG9tXCJcblx0XHRcdFx0XHRcdGlkPVwic3RcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzPVwiZGVzY3JpcHRpb24gcmVsYXRpdmUgYm9yZGVyLXJhZGl1c1wiPlxuXHRcdFx0XHRcdFx0XHRXZSBrbm93IHdoZW4gcGVvcGxlIHRoaW5rIG9mIGVhdGluZyBwbGFudC1iYXNlZCBvciB2ZWdhbiwgdHdvXG5cdFx0XHRcdFx0XHRcdHRoaW5ncyB1c3VhbGx5IGNvbWUgdG8gbWluZCwgPGk+Ym9yaW5nIGFuZCB0YXN0ZSBsaWtlIGRpcnQ8L2k+LlxuXHRcdFx0XHRcdFx0XHRCdXQgd2UgaGVyZSBhdCBUaWVycmEsIG1hZGUgc3VyZSB0aGF0IG5vbmUgb2Ygb3VyIGZvb2QgaXMgYm9yaW5nLlxuXHRcdFx0XHRcdFx0XHRXZSB3ZW50IGFib3ZlIGFuZCBiZXlvbmQgdG8gbWFrZSBzdXJlIHdoZW4gd2Ugc2VydmUgb3VyIGZvb2Qgb25cblx0XHRcdFx0XHRcdFx0dGhlIHRhYmxlLCB0aGF0IGFsbCB0aGUgcmljaCBhbmQgbG92ZWx5IGZsYXZvciBpcyB0aGVyZSBhbmQgbm90IGluXG5cdFx0XHRcdFx0XHRcdHRoZSA8aT5kaXJ0PC9pPi4gV2hlbiBvdXIgY3VzdG9tZXJzIGxlYXZlIGhlcmUsIHRoZXkgd2lsbCBsZWF2ZVxuXHRcdFx0XHRcdFx0XHRoZXJlIG5vdCBqdXN0IHNhdGlzZmllZDsgYnV0IGV2ZW4gbW9yZSBrbm93bGVkZ2VhYmxlIHRoYW4gYmVmb3JlLlxuXHRcdFx0XHRcdFx0XHRUaGV5IGtub3cgbm93LCB0aGF0IHRoZSBhbmltYWwgcHJvZHVjdHMgdGhhdCB0aGV5IHVzZSB0byBsb3ZlXG5cdFx0XHRcdFx0XHRcdHdhc24ndCBhbGwgdGhhdCB0YXN0ZWZ1bC4gV2hhdCB3YXMgdGFzdGVmdWwgd2FzIHRoZSB3YXkgdGhlIGZvb2Rcblx0XHRcdFx0XHRcdFx0d2FzIHByZXBhcmVkLiBOb3csIGEgcGxhbnQtYmFzZWQgbGlmZXN0eWxlIHNlZW1zIGRvYWJsZSBhbmQgZXZlblxuXHRcdFx0XHRcdFx0XHRtYWludGFpbmFibGU7IGZvciBhbnkgaW5kaXZpZHVhbCB0aGF0IGNvbWVzIHRocm91Z2ggdGhlc2UgZG9vcnMuXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzcz1cImFib3V0LXVzLWNvbnRhaW5lciBmbGV4LWNvbCBmbGV4LWNlbnRlciBiYWNrZ3JvdW5kLWltZy1jZW50ZXIgYm9yZGVyLXRvcEFuZEJvdHRvbVwiXG5cdFx0XHRcdFx0XHRpZD1cInN0MlwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzPVwiYm9yZGVyIGJvcmRlci1yYWRpdXNcIj5cblx0XHRcdFx0XHRcdFx0T3BlbmluZyBob3VycyBNb24tU2F0OiA4QU0gLSAxMDozMFBNXG5cdFx0XHRcdFx0XHRcdDxhZGRyZXNzPlxuXHRcdFx0XHRcdFx0XHRcdEFkZHJlc3M6IDEyMyBQbGFjZWhvbGRlciBTdCwgQ2l0eSwgU3RhdGUgMTEyMTIsIFVTQS5cblx0XHRcdFx0XHRcdFx0PC9hZGRyZXNzPlxuXHRcdFx0XHRcdFx0PC9oND5cblxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzPVwiYm9yZGVyIGJvcmRlci1yYWRpdXNcIj5cblx0XHRcdFx0XHRcdFx0SWYgeW91IGhhdmUgYW55IHRob3VnaHRzLCBxdWVzdGlvbnMgb3IgY29uY2VybnMgcGxlYXNlIHJlYWNoIG91dFxuXHRcdFx0XHRcdFx0XHR0byB1cyB0aHJ1IG91ciBmb3JtIG9yIGdpdmUgdXMgYSA8YSBocmVmPVwidGVsOjE4MDA0NTQ1NFwiPmNhbGw8L2E+LlxuXHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiYWJvdXQtdXMtZm9ybSBib3JkZXIgYm9yZGVyLXJhZGl1c1wiXG5cdFx0XHRcdFx0XHRcdG1ldGhvZD1cInBvc3RcIlxuXHRcdFx0XHRcdFx0XHRhY3Rpb249XCJodHRwczovL3d3dy5mcmVlY29kZWNhbXAuY29tL2VtYWlsLXN1Ym1pdFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxmaWVsZHNldD5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkIC8+XG5cdFx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdFx0XHRcdDxmaWVsZHNldD5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcmVxdWlyZWQgLz5cblx0XHRcdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHRcdFx0PGZpZWxkc2V0PlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJjb21tZW50c1wiPkNvbW1lbnRzOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXG5cdFx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiNVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xzPVwiMjVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJjb21tZW50c1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiY29tbWVudHNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGNvbW1lbnRzIGhlcmUuLi5cIlxuXHRcdFx0XHRcdFx0XHRcdD48L3RleHRhcmVhPlxuXHRcdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJvcmRlciBib3JkZXItcmFkaXVzXCIgdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFNlbmRcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9zZWN0aW9uPiAgXG4gICAgKi9cbiIsImltcG9ydCBcIi4vZm9vdGVyLWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuXG5mdW5jdGlvbiBmb290ZXJDb21wb25lbnQoKSB7XG4gIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBmb290ZXJDb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGZvb3RlckNvbnRlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYm9yZGVyIGJvcmRlci1yYWRpdXMtbWRcIik7XG4gIGZvb3RlckNvbnRlbnRFbGVtZW50LnRleHRDb250ZW50ID1cbiAgICBcIsKpIDIwMjMgQnVpbHQgQnkgR3VpbGxlcm1vIEdvbnphbGV6LiBBbGwgcmlnaHRzIHJlc2VydmVkLlwiO1xuICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnRFbGVtZW50KTtcblxuICByZXR1cm4gZm9vdGVyRWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyQ29tcG9uZW50O1xuIiwiaW1wb3J0IFwiLi9oZWFkaW5nLWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuXG5mdW5jdGlvbiBoZWFkaW5nQ29tcG9uZW50KCkge1xuICAvKlxuICAgKioqKioqKioqKioqKioqKioqKioqKiogQ3JlYXRlIGNvbXBvbmVudCBlbGVtZW50cyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG4gIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgaGVhZGVyQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlckNvbnRlbnRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBoZWFkZXJDb250ZW50TXNnMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBoZWFkZXJDb250ZW50TXNnMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBoZWFkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAvKlxuICAgKioqKioqKioqKioqKioqKioqKioqKiogU2V0IGNvbXBvbmVudCBlbGVtZW50cyBhdHRyaWJ1dGUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIGhlYWRlckNvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgIFwiY2xhc3NcIixcbiAgICBcImhlYWRpbmctZ3JvdXAgZmxleCBmbGV4LWNvbCBmbGV4LWNlbnRlclwiXG4gICk7XG4gIGhlYWRlckNvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZ3JvdXBcIik7XG4gIGhlYWRpbmdDb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgIFwiY2xhc3NcIixcbiAgICBcImhlYWRpbmctY29udGFpbmVyIGZsZXggZmxleC1yb3cgZmxleC1jZW50ZXIgYmctaW1nLWNlbnRlclwiXG4gICk7XG4gIGhlYWRlckVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgIFwiY2xhc3NcIixcbiAgICBcImhlYWRpbmcgZmxleCBmbGV4LWNlbnRlciBmbGV4LWNvbCBib3JkZXItc2lkZXNcIlxuICApO1xuICBoZWFkZXJFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcbiAgaGVhZGVyQnRuLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjbWVudVwiKTtcbiAgaGVhZGVyQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJvcmRlciBib3JkZXItcmFkaXVzLW1kXCIpO1xuXG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBTZXQgY29tcG9uZW50IGVsZW1lbnRzIGNvbnRlbnQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIGhlYWRlckNvbnRlbnRIZWFkaW5nLnRleHRDb250ZW50ID0gXCJUaWVycmFcIjtcbiAgaGVhZGVyQ29udGVudE1zZzEudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG9cIjtcbiAgaGVhZGVyQ29udGVudE1zZzIudGV4dENvbnRlbnQgPSBcIlRoZSBiZXN0IHBsYW50LWJhc2VkIHJlc3RhdXJhbnQgaW4gdG93bi5cIjtcbiAgaGVhZGVyQnRuLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIjtcblxuICAvKlxuICAgKioqKioqKioqKioqKioqKioqKioqKiogQWRkIGNvbXBvbmVudCBlbGVtZW50cyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgaGVhZGVyQ29udGVudENvbnRhaW5lci5hcHBlbmQoXG4gICAgaGVhZGVyQ29udGVudE1zZzEsXG4gICAgaGVhZGVyQ29udGVudEhlYWRpbmcsXG4gICAgaGVhZGVyQ29udGVudE1zZzIsXG4gICAgaGVhZGVyQnRuXG4gICk7XG4gIGhlYWRlckVsZW1lbnQuYXBwZW5kKGhlYWRlckNvbnRlbnRDb250YWluZXIpO1xuICBoZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQpO1xuXG4gIHJldHVybiBoZWFkaW5nQ29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoZWFkaW5nQ29tcG9uZW50O1xuIiwiaW1wb3J0IHsgY3JlYXRlTXlFbGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlscy91dGlscy1mdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vbWVudS1jb21wb25lbnQtc3R5bGVzLnNjc3NcIjtcbmZ1bmN0aW9uIG1lbnVDb21wb25lbnQoKSB7XG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBDcmVhdGUgY29tcG9uZW50IGVsZW1lbnRzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cbiAgY29uc3QgbWVudVNlY3Rpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnN0IG1lbnVJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1lbnVUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IG1lbnVJdGVtc1JvdzFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZW51SXRlbXNSb3cyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVudUhpZ2hsaWdodHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IG1lbnVIaWdobGlnaHRzID0gY3JlYXRlTXlFbGVtZW50cyhcIm1lbnUtaGlnaGxpZ2h0c1wiLCAzKTtcbiAgY29uc3QgbWVudUhpZ2hsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgLypcbiAgICoqKioqKioqKioqKioqKioqKioqKioqIFNldCBjb21wb25lbnQgZWxlbWVudHMgYXR0cmlidXRlICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cbiAgbWVudVNlY3Rpb25FbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcbiAgbWVudVNlY3Rpb25FbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICBcImNsYXNzXCIsXG4gICAgXCJtZW51IGZsZXggZmxleC1jb2wgZmxleC1jZW50ZXIgYmctaW1nLWNlbnRlciBib3JkZXItdG9wQW5kQm90dG9tXCJcbiAgKTtcbiAgbWVudVNlY3Rpb25FbGVtZW50LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuICBtZW51SXRlbXNDb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgIFwiY2xhc3NcIixcbiAgICBcIm1lbnUtaXRlbXMgZmxleCBmbGV4LWNvbCBmbGV4LWNlbnRlciBib3JkZXItc2lkZXNcIlxuICApO1xuICBtZW51VGl0bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGUgYm9yZGVyIGJvcmRlci1yYWRpdXMtbWRcIik7XG4gIG1lbnVJdGVtc1JvdzFDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmbGV4IG1lbnUtaXRlbXMtcm93XCIpO1xuICBtZW51SXRlbXNSb3cyQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcbiAgICBcImNsYXNzXCIsXG4gICAgXCJmbGV4IG1lbnUtaXRlbXMtcm93IG1lbnUtaXRlbXMtcm93LTJcIlxuICApO1xuICBtZW51SGlnaGxpZ2h0c0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjbGFzc1wiLFxuICAgIFwibWVudS1oaWdobGlnaHRzIGZsZXggZmxleC1jb2wgZmxleC1jZW50ZXIgYm9yZGVyIGJvcmRlci1yYWRpdXMtc20gXCJcbiAgKTtcbiAgbWVudUhpZ2hsaWdodC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtaGlnaGxpZ2h0cy1oaWdobGlnaHRcIik7XG4gIG1lbnVCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYm9yZGVyIGJvcmRlci1yYWRpdXMtbWRcIik7XG5cbiAgLypcbiAgICoqKioqKioqKioqKioqKioqKioqKioqIFNldCBjb21wb25lbnQgZWxlbWVudHMgY29udGVudCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgbWVudVRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IFwiQSB0YXN0ZSBvZiB3aGF0IHdlIGFyZSBjb29raW5nXCI7XG4gIG1lbnVIaWdobGlnaHQudGV4dENvbnRlbnQgPSBcIk1lbnUgSGlnaGxpZ2h0c1wiO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gXCJGdWxsIE1lbnVcIjtcblxuICAvKlxuICAgKioqKioqKioqKioqKioqKioqKioqKiogQWRkIGNvbXBvbmVudCBlbGVtZW50cyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgbWVudUhpZ2hsaWdodHNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUhpZ2hsaWdodCk7XG4gIG1lbnVJdGVtc1JvdzFDb250YWluZXIuYXBwZW5kKG1lbnVIaWdobGlnaHRzQ29udGFpbmVyLCBtZW51SGlnaGxpZ2h0c1swXSk7XG4gIG1lbnVJdGVtc1JvdzJDb250YWluZXIuYXBwZW5kKG1lbnVIaWdobGlnaHRzWzFdLCBtZW51SGlnaGxpZ2h0c1syXSk7XG4gIG1lbnVJdGVtc0NvbnRhaW5lci5hcHBlbmQoXG4gICAgbWVudVRpdGxlRWxlbWVudCxcbiAgICBtZW51SXRlbXNSb3cxQ29udGFpbmVyLFxuICAgIG1lbnVJdGVtc1JvdzJDb250YWluZXIsXG4gICAgbWVudUJ0blxuICApO1xuICBtZW51U2VjdGlvbkVsZW1lbnQuYXBwZW5kKG1lbnVJdGVtc0NvbnRhaW5lcik7XG4gIHJldHVybiBtZW51U2VjdGlvbkVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVDb21wb25lbnQ7XG4iLCJpbXBvcnQgXCIuL25hdmJhci1jb21wb25lbnQtc3R5bGVzLnNjc3NcIjtcbmltcG9ydCB7IGNyZWF0ZU15RWxlbWVudHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHMtZnVuY3Rpb25zXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIoKSB7XG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBDcmVhdGUgY29tcG9uZW50IGVsZW1lbnRzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgbmF2TG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG5hdkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IG5hdkl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBuYXZJdGVtcyA9IGNyZWF0ZU15RWxlbWVudHMoXCJuYXZcIiwgMyk7XG5cbiAgLypcbiAgICoqKioqKioqKioqKioqKioqKioqKioqIFNldCBjb21wb25lbnQgZWxlbWVudHMgYXR0cmlidXRlICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICBuYXZiYXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXYgZmxleCBmbGV4LWNvbCBmbGV4LWNlbnRlciBib3JkZXItYm90dG9tXCIpO1xuICBuYXZJdGVtc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjbGFzc1wiLFxuICAgIFwibmF2LWl0ZW1zIGZsZXggZmxleC1yb3cgZmxleC1jZW50ZXJcIlxuICApO1xuICBuYXZMb2dvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcbiAgICBcImNsYXNzXCIsXG4gICAgXCJuYXYtbG9nbyBmbGV4IGZsZXgtY2VudGVyIGJvcmRlci1yYWRpdXMtc21cIlxuICApO1xuXG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBTZXQgY29tcG9uZW50IGVsZW1lbnRzIGNvbnRlbnQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIG5hdkxvZ28udGV4dENvbnRlbnQgPSBcIlRpZXJyYVwiO1xuXG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBBZGQgY29tcG9uZW50IGVsZW1lbnRzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICBuYXZMb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxvZ28pO1xuICBuYXZJdGVtc0NvbnRhaW5lci5hcHBlbmQoLi4ubmF2SXRlbXMpO1xuXG4gIG5hdmJhci5hcHBlbmQobmF2TG9nb0NvbnRhaW5lciwgbmF2SXRlbXNDb250YWluZXIpO1xuXG4gIHJldHVybiBuYXZiYXI7XG59XG4iLCJmdW5jdGlvbiBjcmVhdGVNeUVsZW1lbnRzKGVsZW1lbnQsIG51bSkge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvciAobGV0IHggPSAwOyB4IDwgbnVtOyB4KyspIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gXCJuYXZcIikge1xuICAgICAgY29uc3QgbGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgY29uc3QgbmF2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgbGlFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2LWl0ZW1zLWl0ZW0gYm9yZGVyLXJhZGl1cy1zbVwiKTtcblxuICAgICAgaWYgKHggPT09IDApIHtcbiAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI2hvbWVcIik7XG4gICAgICAgIG5hdkxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXYtaXRlbXMtaXRlbS1saW5rXCIpO1xuICAgICAgICBuYXZMaW5rLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgICB9IGVsc2UgaWYgKHggPT09IDEpIHtcbiAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI21lbnVcIik7XG4gICAgICAgIG5hdkxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXYtaXRlbXMtaXRlbS1saW5rXCIpO1xuICAgICAgICBuYXZMaW5rLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXZMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjYWJvdXQtdXNcIik7XG4gICAgICAgIG5hdkxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXYtaXRlbXMtaXRlbS1saW5rIFwiKTtcbiAgICAgICAgbmF2TGluay50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgICAgIH1cblxuICAgICAgbGlFbGVtZW50LmFwcGVuZENoaWxkKG5hdkxpbmspO1xuXG4gICAgICBlbGVtZW50cy5wdXNoKGxpRWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSBcIm1lbnUtaGlnaGxpZ2h0c1wiKSB7XG4gICAgICBjb25zdCBtZW51SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBtZW51SXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBjb25zdCBtZW51SXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIG1lbnVJdGVtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJjbGFzc1wiLFxuICAgICAgICBcIm1lbnUtaXRlbXMtaXRlbSBib3JkZXIgYm9yZGVyLXJhZGl1cy1tZFwiXG4gICAgICApO1xuICAgICAgbWVudUl0ZW1JbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51LWltZyBib3JkZXItcmFkaXVzXCIpO1xuICAgICAgbWVudUl0ZW1EZXNjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVzY3JpcHRpb24gZmxleCBib3JkZXItcmFkaXVzXCIpO1xuXG4gICAgICBpZiAoeCA9PT0gMCkge1xuICAgICAgICBtZW51SXRlbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1cmdlclwiKTtcbiAgICAgICAgbWVudUl0ZW1JbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2Fzc2V0cy9pbWdzL3ZlZ2FuLWJ1cmdlci5qcGdcIik7XG4gICAgICAgIG1lbnVJdGVtRGVzYy50ZXh0Q29udGVudCA9IGBPdXIgdmVnYW4gYnVyZ2VyIHdpbGwgbGVhdmUgeW91IHN0dW5uZWQgYnkgdGhlIGZsYXZvci4gT3VyXG4gICAgICAgIGhvbWVtYWRlIGJ1cmdlciBwYXR0aWVzIGFyZSBub3QgbGlrZSBhbnkgb3RoZXIgYmxhbmQgcGF0dHksIG91cnNcbiAgICAgICAgY29tZSBwYWNrZWQgd2l0aCBwcm90ZWluLCBwbGVudHkgb2YgaGVyYnMgYW5kXG4gICAgICAgIHNwaWNlcy4gRHJlc3NpbmcgdXAgaXQgd2l0aCBvdXIgaG9tZW1hZGUgY2hlZGRhciBjaGVlc2UgYW5kXG4gICAgICAgIHRvcHBlZCB3aXRoIHlvdXIgY2hvaWNlIG9mIGxldHR1Y2Ugb3Iga2FsZSwgb25pb25zIGFuZCB0b21hdG8uXG4gICAgICAgIFdpdGggb3VyIGZyZW5jaCBmcmllcyBpbmNsdWRlZCwgeW91ciBnb2luZyB0byBiZSBzaG9ja2VkIGF0IGhvd1xuICAgICAgICBnb29kIGEgcGxhbnQgYmFzZWQgYnVyZ2VyIGNhbiByZWFsbHkgYmUuYDtcbiAgICAgIH0gZWxzZSBpZiAoeCA9PT0gMSkge1xuICAgICAgICBtZW51SXRlbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN0ZWFrXCIpO1xuICAgICAgICBtZW51SXRlbUltZy5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgXCJzcmNcIixcbiAgICAgICAgICBcIi4uL3NyYy9hc3NldHMvaW1ncy92ZWdhbi1zdGVhay1hbmQtcG90YXRvZXMuanBnXCJcbiAgICAgICAgKTtcbiAgICAgICAgbWVudUl0ZW1EZXNjLnRleHRDb250ZW50ID0gYFllcywgdGhhdCBpcyByaWdodCwgd2UgaGF2ZSBzdGVhayBhbmQgb2YgY291cnNlIGl0cyBwbGFudC1iYXNlZC5cbiAgICAgICAgT3VyIGhvbWVtYWRlIHN0ZWFrIGlzIGJhc2VkIG9mZiBvZiBnbHV0ZW4uXG4gICAgICAgIFNlYXNvbmVkIHRvIHBlcmZlY3Rpb24sIHlvdSdsbCBsb3ZlIHRob3NlIGhpbnRzIG9mIG9yZWdhbm8gYW5kXG4gICAgICAgIHNhbHQgYnV6emluZyB0aG9zZSB0YXN0ZSBidWRzLiBTZXJ2ZWQgd2l0aCB5b3VyIGNob2ljZSBvZiB0d29cbiAgICAgICAgc2lkZXMgYW5kIGEgZHJpbmssIHlvdSB3aWxsIGJlIHdvbmRlcmluZ1xuICAgICAgICB3aHkgaGF2ZW4ndCBJIGNoYW5nZWQgdG8gcGxhbnQtYmFzZWQgZGlldCwgeWV0P2A7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW51SXRlbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoaWNrZW5cIik7XG4gICAgICAgIG1lbnVJdGVtSW1nLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcInNyY1wiLFxuICAgICAgICAgIFwiLi4vc3JjL2Fzc2V0cy9pbWdzL2NoaWsnbi1hbmQtZnJpZXMucG5nXCJcbiAgICAgICAgKTtcbiAgICAgICAgbWVudUl0ZW1EZXNjLnRleHRDb250ZW50ID0gYEEgcGxhbnQtYmFzZWQgc3BpbiBvbiBhIGxvdmVseSBjbGFzc2ljLCB0aGF0IHdlIGFsbCBlbmpveS4gT3VyXG4gICAgICAgIGZyaWVkIGNoaWsnbiBpcyBtb3JlIHRoYXQganVzdCBmaW5nZXIgbGlja2luZyBnb29kLCBpdCBqdXN0XG4gICAgICAgIGRlZmllcyBldmVyeXRoaW5nIHRoYXQgeW91IG1pZ2h0IGtub3cgYWJvdXQgZm9vZCwgZXNwZWNpYWxseVxuICAgICAgICBwbGFudC1iYXNlZCBmb29kLiBGcmllZCB0byBhIGNyaXBzeSBwZXJmZWN0aW9uIHdpdGggdGhvc2UgbG92ZWx5XG4gICAgICAgIGZyaWVzLCB5b3Ugd2lsbCBiZSB3b25kZXJpbmcgaG93IGdvb2Qgd2lsbCB0aGlzIHRhc3RlIG9uIGEgc2FuZHdpY2g/YDtcbiAgICAgIH1cbiAgICAgIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZChtZW51SXRlbUltZywgbWVudUl0ZW1EZXNjKTtcbiAgICAgIGVsZW1lbnRzLnB1c2gobWVudUl0ZW1Db250YWluZXIpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gXCJhYm91dC11c1wiKSB7XG4gICAgICBjb25zdCBhYm91dFVzQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBhYm91dFVzQ29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgICAgYWJvdXRVc0NvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgICAgICBcImNsYXNzXCIsXG4gICAgICAgIFwiYWJvdXQtdXMtY29udGFpbmVyIGZsZXggZmxleC1jb2wgZmxleC1jZW50ZXIgYmctaW1nLWNlbnRlciBib3JkZXJcIlxuICAgICAgKTtcbiAgICAgIGFib3V0VXNDb250ZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwiY2xhc3NcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvbiBmbGV4IGJvcmRlci1yYWRpdXMtbWRcIlxuICAgICAgKTtcblxuICAgICAgaWYgKHggPT09IDApIHtcbiAgICAgICAgYWJvdXRVc0NvbnRlbnRFbGVtZW50LnRleHRDb250ZW50ID1cbiAgICAgICAgICBcIldlIGhlcmUgYXQgVGllcnJhLCBhcmUgdmVyeSBjb25jZXJuZWQgd2l0aCBvdXIgcGxhbmV0IG1vdGhlciBlYXJ0aC4gT25lIG9mIHRoZSBiaWdnZXN0IHRocmVhdHMgdG8gbW90aGVyIGVhcnRoIGlzIGNsaW1hdGUgY2hhbmdlIGFuZCBvbmUgb2YgdGhlIGZhY3RvcnMgYWZmZWN0aW5nIHRoYXQgY2xpbWF0ZSBjaGFuZ2UsIGlzIGZhY3RvcnkgZmFybWluZy4gV2UgbXVzdCBjaGFuZ2Ugb3VyIGVhdGluZyBoYWJpdHMgc28gd2UgY2FuIGVhc2UgdGhlIGRhbWFnZSBjYXVzZWQgYnkgaW50ZW5zaXZlIGFuaW1hbCBmYXJtaW5nLiBXZSBoYXZlIGRlZGljYXRlZCBvdXIgbGl2ZXMgdG8gaGVscCBvdXIgc29jaWV0eSB0cmFuc2l0aW9uIGZyb20gY29uc3VtaW5nIGFuaW1hbCBwcm9kdWN0cyB0byBwbGFudC1iYXNlZCBwcm9kdWN0cy5cIjtcbiAgICAgIH0gZWxzZVxuICAgICAgICBhYm91dFVzQ29udGVudEVsZW1lbnQudGV4dENvbnRlbnQgPVxuICAgICAgICAgIFwiV2Uga25vdyB3aGVuIHBlb3BsZSB0aGluayBvZiBlYXRpbmcgcGxhbnQtYmFzZWQgb3IgdmVnYW4sIHR3byB0aGluZ3MgdXN1YWxseSBjb21lIHRvIG1pbmQsIGJvcmluZyBhbmQgdGFzdGUgbGlrZSBkaXJ0LiBCdXQgd2UgaGVyZSBhdCBUaWVycmEsIG1hZGUgc3VyZSB0aGF0IG5vbmUgb2Ygb3VyIGZvb2QgaXMgYm9yaW5nLiBXZSB3ZW50IGFib3ZlIGFuZCBiZXlvbmQgdG8gbWFrZSBzdXJlIHdoZW4gd2Ugc2VydmUgb3VyIGZvb2Qgb24gdGhlIHRhYmxlLCB0aGF0IGFsbCB0aGUgcmljaCBhbmQgbG92ZWx5IGZsYXZvciBpcyB0aGVyZSBhbmQgbm90IGluIHRoZSBkaXJ0LiBXaGVuIG91ciBjdXN0b21lcnMgbGVhdmUgaGVyZSwgdGhleSB3aWxsIGxlYXZlIGhlcmUgbm90IGp1c3Qgc2F0aXNmaWVkOyBidXQgZXZlbiBtb3JlIGtub3dsZWRnZWFibGUgdGhhbiBiZWZvcmUuIFRoZXkga25vdyBub3csIHRoYXQgdGhlIGFuaW1hbCBwcm9kdWN0cyB0aGF0IHRoZXkgdXNlIHRvIGxvdmUgd2Fzbid0IGFsbCB0aGF0IHRhc3RlZnVsLiBXaGF0IHdhcyB0YXN0ZWZ1bCB3YXMgdGhlIHdheSB0aGUgZm9vZCB3YXMgcHJlcGFyZWQuIE5vdywgYSBwbGFudC1iYXNlZCBsaWZlc3R5bGUgc2VlbXMgZG9hYmxlIGFuZCBldmVuIG1haW50YWluYWJsZTsgZm9yIGFueSBpbmRpdmlkdWFsIHRoYXQgY29tZXMgdGhyb3VnaCB0aGVzZSBkb29ycy5cIjtcblxuICAgICAgYWJvdXRVc0NvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRVc0NvbnRlbnRFbGVtZW50KTtcbiAgICAgIGVsZW1lbnRzLnB1c2goYWJvdXRVc0NvbnRlbnRDb250YWluZXIpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gXCJmb3JtXCIpIHtcbiAgICAgIGNvbnN0IGZvcm1GaWVsZFNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgICAgIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgY29uc3QgZm9ybUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4gICAgICBpZiAoeCA9PT0gMCkge1xuICAgICAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hbWVcIik7XG4gICAgICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcbiAgICAgICAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgZm9ybUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIik7XG4gICAgICAgIGZvcm1MYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZTpcIjtcbiAgICAgIH0gZWxzZSBpZiAoeCA9PT0gMSkge1xuICAgICAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImVtYWlsXCIpO1xuICAgICAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbWFpbFwiKTtcbiAgICAgICAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJlbWFpbFwiKTtcbiAgICAgICAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgZm9ybUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVtYWlsXCIpO1xuICAgICAgICBmb3JtTGFiZWwudGV4dENvbnRlbnQgPSBcIkVtYWlsOlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicm93c1wiLCA1KTtcbiAgICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiY29sXCIsIDI1KTtcbiAgICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb21tZW50c1wiKTtcbiAgICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbW1lbnRzXCIpO1xuICAgICAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIHlvdXIgY29tbWVudHMgaGVyZS4uLi5cIik7XG4gICAgICAgIGZvcm1MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb21tZW50c1wiKTtcbiAgICAgICAgZm9ybUxhYmVsLnRleHRDb250ZW50ID0gXCJDb21tZW50czpcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHggPiAxKSBmb3JtRmllbGRTZXQuYXBwZW5kKGZvcm1MYWJlbCwgdGV4dEFyZWEpO1xuICAgICAgZWxzZSBmb3JtRmllbGRTZXQuYXBwZW5kKGZvcm1MYWJlbCwgZm9ybUlucHV0KTtcblxuICAgICAgZWxlbWVudHMucHVzaChmb3JtRmllbGRTZXQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbWVudHM7XG59XG5leHBvcnQgeyBjcmVhdGVNeUVsZW1lbnRzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGhlYWRpbmdDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkaW5nLWNvbXBvbmVudC9oZWFkaW5nLWNvbXBvbmVudFwiO1xuaW1wb3J0IG5hdmJhckNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhci1jb21wb25lbnQvbmF2YmFyLWNvbXBvbmVudFwiO1xuaW1wb3J0IG1lbnVDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9tZW51LWNvbXBvbmVudC9tZW51LWNvbXBvbmVudFwiO1xuaW1wb3J0IGFib3V0Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvYWJvdXQtY29tcG9uZW50L2Fib3V0LWNvbXBvbmVudFwiO1xuaW1wb3J0IGZvb3RlckNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3Rlci1jb21wb25lbnQvZm9vdGVyLWNvbXBvbmVudHNcIjtcblxuKGZ1bmN0aW9uIG15QXBwKCkge1xuICBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIHBhZ2VDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuXG4gIHBhZ2VDb250YWluZXIuYXBwZW5kKFxuICAgIGhlYWRpbmdDb21wb25lbnQoKSxcbiAgICBtZW51Q29tcG9uZW50KCksXG4gICAgYWJvdXRDb21wb25lbnQoKSxcbiAgICBmb290ZXJDb21wb25lbnQoKVxuICApO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChuYXZiYXJDb21wb25lbnQoKSwgcGFnZUNvbnRhaW5lcik7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9