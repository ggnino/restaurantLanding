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
  opacity: 0;
  transition: all 0.2s linear;
}
.menu-items-item .description:hover {
  opacity: 1;
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
  transition: all 1.5s;
  font-size: 5rem;
}`, "",{"version":3,"sources":["webpack://./src/components/menu-component/menu-component-styles.scss","webpack://./src/assets/styles/variables.scss"],"names":[],"mappings":"AACA;EACE,WAAA;EACA,cCCU;EDAV,yBCFU;EDGV,kHAAA;EACA,WAAA;AAAF;AAGE;EACE,kBAAA;EACA,8BCNO;EDOP,YAAA;EACA,aAAA;EACA,yCAAA;AADJ;AAGI;EACE,qBAAA;EACA,aAAA;EACA,SAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;AADN;AAEM;EACE,yBAAA;EACA,uBAAA;AAAR;AAGI;EACE,yBC9BK;ED+BL,WAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;AADN;AAGM;EACE,eAAA;EACA,UAAA;EACA,2BAAA;AADR;AAGQ;EACE,UAAA;AADV;AAOE;EACE,WAAA;EACA,YAAA;AALJ;AAQE;EACE,WAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,yBC3DO;ED4DP,kBAAA;EACA,oBAAA;EACA,eAAA;AANJ","sourcesContent":["@use \"../../assets/styles/variables.scss\" as _;\n.menu {\n  width: 100%;\n  height: _.$my-height;\n  background-color: _.$bg-color2;\n  background-image: _.$my-filter, url(\"../../assets/imgs/menu.png\");\n  z-index: 10;\n  // display: none;\n\n  &-items {\n    position: relative;\n    width: _.$my-width;\n    height: 100%;\n    padding: 5rem;\n    background-color: rgba(_.$bg-color2, 0.7);\n\n    &-row {\n      align-items: flex-end;\n      padding: 1rem;\n      gap: 2rem;\n      width: 100%;\n      max-width: 90rem;\n      height: 100%;\n      max-height: 35rem;\n      overflow: hidden;\n      &-2 {\n        justify-content: flex-end;\n        align-items: flex-start;\n      }\n    }\n    &-item {\n      background-color: _.$bg-color;\n      width: 100%;\n      max-width: 50rem;\n      height: 100%;\n      max-height: 30rem;\n      transform: scale(1);\n\n      & .description {\n        font-size: 2rem;\n        opacity: 0;\n        transition: all 0.2s linear;\n\n        &:hover {\n          opacity: 1;\n        }\n      }\n    }\n  }\n\n  &-img {\n    width: 100%;\n    height: 100%;\n  }\n\n  &-highlights {\n    width: 100%;\n    max-width: 35rem;\n    height: 100%;\n    max-height: 30rem;\n    background-color: _.$bg-color;\n    text-align: center;\n    transition: all 1.5s;\n    font-size: 5rem;\n  }\n}\n","$font-color: GhostWhite;\n$bg-color: #31572c;\n$bg-color2: #90a955;\n$bg-color3: #ecf39e;\n$my-height: calc(100vh - 7.5vh);\n$my-width: clamp(50%, 150rem, 80%);\n$my-filter: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n"],"sourceRoot":""}]);
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
  menuHighlightsContainer.setAttribute("id", "menu-highlight");
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
/* harmony export */   createMyElements: () => (/* binding */ createMyElements),
/* harmony export */   menuItemHover: () => (/* binding */ menuItemHover)
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
      eventAdder(menuItemContainer);
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

function eventAdder(element) {
  element.onmouseenter = menuItemHover;
  element.onmouseleave = menuItemHover;
}

const menuItemHover = (e) => {
  const menuHighlight = document.getElementById("menu-highlight");
  const element = e.target.id;
  const event = e.type;
  const text = "Menu Highlights";

  console.log(element);

  if (event === "mouseenter") {
    if (element === "burger") {
      menuHighlight.textContent = "The Green Giant";
    }

    if (element === "chicken") {
      menuHighlight.textContent = "Fried Chik'n and Fries";
    }

    if (element === "steak") {
      menuHighlight.textContent = "Churrasco Verde";
    }
  } else if (event === "mouseleave") {
    // default text
    menuHighlight.textContent = text;
  }
};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJOQUEyTixLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxPQUFPLGFBQWEsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxTQUFTLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1B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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLd0M7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RVOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDMEQ7QUFDSDtBQUNOO0FBQ0c7QUFDSTs7QUFFOUU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSwyRkFBZ0I7QUFDcEIsSUFBSSxxRkFBYTtBQUNqQixJQUFJLHVGQUFjO0FBQ2xCLElBQUksMEZBQWU7QUFDbkI7QUFDQSx1QkFBdUIseUZBQWU7QUFDdEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc2xhbmRpbmcvLi9zcmMvY29tcG9uZW50cy9hYm91dC1jb21wb25lbnQvYWJvdXQtY29tcG9uZW50LXN0eWxlcy5zY3NzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9zcmMvY29tcG9uZW50cy9mb290ZXItY29tcG9uZW50L2Zvb3Rlci1jb21wb25lbnQtc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9jb21wb25lbnRzL2hlYWRpbmctY29tcG9uZW50L2hlYWRpbmctY29tcG9uZW50LXN0eWxlcy5zY3NzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9zcmMvY29tcG9uZW50cy9tZW51LWNvbXBvbmVudC9tZW51LWNvbXBvbmVudC1zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLWNvbXBvbmVudC9uYXZiYXItY29tcG9uZW50LXN0eWxlcy5zY3NzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9jb21wb25lbnRzL2Fib3V0LWNvbXBvbmVudC9hYm91dC1jb21wb25lbnQtc3R5bGVzLnNjc3M/MjA4YiIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLWNvbXBvbmVudC9mb290ZXItY29tcG9uZW50LXN0eWxlcy5zY3NzP2NkNjAiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9jb21wb25lbnRzL2hlYWRpbmctY29tcG9uZW50L2hlYWRpbmctY29tcG9uZW50LXN0eWxlcy5zY3NzPzhjZGUiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9jb21wb25lbnRzL21lbnUtY29tcG9uZW50L21lbnUtY29tcG9uZW50LXN0eWxlcy5zY3NzP2Q0NGUiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9jb21wb25lbnRzL25hdmJhci1jb21wb25lbnQvbmF2YmFyLWNvbXBvbmVudC1zdHlsZXMuc2Nzcz9mZjViIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9zcmMvaW5kZXguc2Nzcz83MjIzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9jb21wb25lbnRzL2Fib3V0LWNvbXBvbmVudC9hYm91dC1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci1jb21wb25lbnQvZm9vdGVyLWNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9jb21wb25lbnRzL2hlYWRpbmctY29tcG9uZW50L2hlYWRpbmctY29tcG9uZW50LmpzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9zcmMvY29tcG9uZW50cy9tZW51LWNvbXBvbmVudC9tZW51LWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLWNvbXBvbmVudC9uYXZiYXItY29tcG9uZW50LmpzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvLi9zcmMvdXRpbHMvdXRpbHMtZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Jlc2xhbmRpbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc2xhbmRpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXNsYW5kaW5nL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc2xhbmRpbmcvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzbGFuZGluZy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltZ3MvcmVzdGF1YXJhbnQxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWdzL2Fib3V0LWJnLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWdzL2N1c3RvbWVyLWluZm8ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltZ3MvdXMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYWJvdXQtdXMge1xuICBoZWlnaHQ6IDkyLjV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE1NzJjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG4uYWJvdXQtdXMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmFib3V0LXVzID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICB3aWR0aDogY2xhbXAoNTAlLCAxNTByZW0sIDgwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ0LCAxNjksIDg1LCAwLjcpO1xuICBwYWRkaW5nOiAxMHJlbTtcbn1cbi5hYm91dC11cyA+IGRpdjpmaXJzdC1vZi10eXBlID4gZGl2IHtcbiAgbWF4LWhlaWdodDogOTByZW07XG4gIHBhZGRpbmc6IDJyZW0gMDtcbn1cbi5hYm91dC11cyA+IGRpdjpmaXJzdC1vZi10eXBlID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxcmVtO1xufVxuLmFib3V0LXVzID4gZGl2OmZpcnN0LW9mLXR5cGUgPiBkaXY6Zmlyc3Qtb2YtdHlwZSArIGRpdiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLmFib3V0LXVzID4gZGl2OmZpcnN0LW9mLXR5cGUgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDFyZW07XG59XG4uYWJvdXQtdXMgLmRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDNyZW07XG4gIHBhZGRpbmc6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDcwcmVtO1xuICBtYXgtaGVpZ2h0OiA3MHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uYWJvdXQtdXMgLmRlc2NyaXB0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OSwgODcsIDQ0LCAwLjkpO1xufVxuLmFib3V0LXVzLWZvcm0ge1xuICBtYXJnaW46IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ5LCA4NywgNDQsIDAuNzUyOTQxMTc2NSk7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uYWJvdXQtdXMtZm9ybSAuYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xufVxuLmFib3V0LXVzLWZvcm0gZmllbGRzZXQge1xuICBwYWRkaW5nOiAxLjJyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5hYm91dC11cy1mb3JtIGlucHV0LCAuYWJvdXQtdXMtZm9ybSB0ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLmFib3V0LXVzIC50aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAydmg7XG59XG4uYWJvdXQtdXMgaDMge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OSwgODcsIDQ0LCAwLjc1Mjk0MTE3NjUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9hYm91dC1jb21wb25lbnQvYWJvdXQtY29tcG9uZW50LXN0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGNDRVU7RUREVixXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkNOUztFRE9ULGtIQUFBO0FBQUY7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQUo7QUFFRTtFQUNFLDhCQ2ZPO0VEZ0JQLHlDQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFBTjtBQUdJO0VBQ0Usa0hBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBRE47QUFJSTtFQUNFLGtIQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZOO0FBS0k7RUFDRSxrSEFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFITjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFKSjtBQUtJO0VBQ0UsdUNBQUE7QUFITjtBQU1FO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO0VBQ0EsYUFBQTtBQUpKO0FBTUk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFKTjtBQU9JO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxOO0FBT0k7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQU5OO0FBU0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFQSjtBQVNFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7QUFQSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIiBhcyBfO1xcbi5hYm91dC11cyB7XFxuICBoZWlnaHQ6IF8uJG15LWhlaWdodDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IF8uJGJnLWNvbG9yO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogXy4kbXktZmlsdGVyLCB1cmwoXFxcIi4uLy4uL2Fzc2V0cy9pbWdzL3Jlc3RhdWFyYW50MS5qcGdcXFwiKTtcXG5cXG4gICYtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgZmxleC1zaHJpbms6IDE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgfVxcbiAgJiA+IGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAgd2lkdGg6IF8uJG15LXdpZHRoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKF8uJGJnLWNvbG9yMiwgMC43KTtcXG4gICAgcGFkZGluZzogMTByZW07XFxuXFxuICAgICYgPiBkaXYge1xcbiAgICAgIG1heC1oZWlnaHQ6IDkwcmVtO1xcbiAgICAgIHBhZGRpbmc6IDJyZW0gMDtcXG4gICAgfVxcblxcbiAgICAmID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IF8uJG15LWZpbHRlciwgdXJsKFxcXCIuLi8uLi9hc3NldHMvaW1ncy9hYm91dC1iZy5wbmdcXFwiKTtcXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcmVtO1xcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgICYgPiBkaXY6Zmlyc3Qtb2YtdHlwZSArIGRpdiB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogXy4kbXktZmlsdGVyLCB1cmwoXFxcIi4uLy4uL2Fzc2V0cy9pbWdzL2N1c3RvbWVyLWluZm8ucG5nXFxcIik7XFxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgJiA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBfLiRteS1maWx0ZXIsIHVybChcXFwiLi4vLi4vYXNzZXRzL2ltZ3MvdXMucG5nXFxcIik7XFxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMXJlbTtcXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcXG4gICAgfVxcbiAgfVxcbiAgJiAuZGVzY3JpcHRpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNzByZW07XFxuICAgIG1heC1oZWlnaHQ6IDcwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShfLiRiZy1jb2xvciwgMC45KTtcXG4gICAgfVxcbiAgfVxcbiAgJi1mb3JtIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA1MHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxNTcyY2MwO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICAmIC5idG4ge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgICB9XFxuXFxuICAgICYgZmllbGRzZXQge1xcbiAgICAgIHBhZGRpbmc6IDEuMnJlbTtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuICAgICYgaW5wdXQsXFxuICAgICYgdGV4dGFyZWEge1xcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgfVxcbiAgfVxcbiAgJiAudGl0bGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMnZoO1xcbiAgfVxcbiAgJiBoMyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE1NzJjYzA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXCIsXCIkZm9udC1jb2xvcjogR2hvc3RXaGl0ZTtcXG4kYmctY29sb3I6ICMzMTU3MmM7XFxuJGJnLWNvbG9yMjogIzkwYTk1NTtcXG4kYmctY29sb3IzOiAjZWNmMzllO1xcbiRteS1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3LjV2aCk7XFxuJG15LXdpZHRoOiBjbGFtcCg1MCUsIDE1MHJlbSwgODAlKTtcXG4kbXktZmlsdGVyOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMS40cmVtIHNvbGlkIGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjM5ZTtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuZm9vdGVyIHAge1xuICBmb250LXNpemU6IDIuNnJlbTtcbiAgd2lkdGg6IGNsYW1wKDIwJSwgODByZW0sIDUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTU3MmM7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci1jb21wb25lbnQvZm9vdGVyLWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQ0ZVO0VER1YsYUFBQTtBQUFGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQ1ZTO0VEV1QsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1xcXCIgYXMgXztcXG5mb290ZXIge1xcbiAgYm9yZGVyLXRvcDogMS40cmVtIHNvbGlkIGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogXy4kYmctY29sb3IzO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuZm9vdGVyIHAge1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxuICB3aWR0aDogY2xhbXAoMjAlLCA4MHJlbSwgNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IF8uJGJnLWNvbG9yO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAycmVtIDA7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblwiLFwiJGZvbnQtY29sb3I6IEdob3N0V2hpdGU7XFxuJGJnLWNvbG9yOiAjMzE1NzJjO1xcbiRiZy1jb2xvcjI6ICM5MGE5NTU7XFxuJGJnLWNvbG9yMzogI2VjZjM5ZTtcXG4kbXktaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNy41dmgpO1xcbiRteS13aWR0aDogY2xhbXAoNTAlLCAxNTByZW0sIDgwJSk7XFxuJG15LWZpbHRlcjogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKTtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWdzL2Fib3V0LWJnLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRpbmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBjbGFtcCg1MCUsIDE1MHJlbSwgODAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OSwgODcsIDQ0LCAwLjcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuLmhlYWRpbmctY29udGFpbmVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTIuNXZoO1xufVxuLmhlYWRpbmctZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IEdob3N0V2hpdGU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcGFkZGluZzogNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBnYXA6IDVyZW07XG59XG4uaGVhZGluZy1ncm91cCA+IGgxIHtcbiAgZm9udC1zaXplOiAxNXJlbTtcbn1cbi5oZWFkaW5nLWdyb3VwID4gcCB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2hlYWRpbmctY29tcG9uZW50L2hlYWRpbmctY29tcG9uZW50LXN0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQURGO0FBR0U7RUFDRSxvQkFBQTtFQUNBLGtIQUFBO0VBQ0EsV0FBQTtFQUNBLGNDVFE7QURRWjtBQUlFO0VBQ0UsV0FBQTtFQUNBLGlCQ2xCUztFRG1CVCxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUZKO0FBSUk7RUFDRSxnQkFBQTtBQUZOO0FBSUk7RUFDRSxlQUFBO0FBRk5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1xcXCIgYXMgXztcXG5cXG4uaGVhZGluZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogY2xhbXAoNTAlLCAxNTByZW0sIDgwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKF8uJGJnLWNvbG9yLCAwLjcpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuXFxuICAmLWNvbnRhaW5lciB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBfLiRteS1maWx0ZXIsIHVybChcXFwiLi4vLi4vYXNzZXRzL2ltZ3MvYWJvdXQtYmcucG5nXFxcIik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IF8uJG15LWhlaWdodDtcXG4gICAgLy8gZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICYtZ3JvdXAge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IF8uJGZvbnQtY29sb3I7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgcGFkZGluZzogNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDVyZW07XFxuXFxuICAgICYgPiBoMSB7XFxuICAgICAgZm9udC1zaXplOiAxNXJlbTtcXG4gICAgfVxcbiAgICAmID4gcCB7XFxuICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiJGZvbnQtY29sb3I6IEdob3N0V2hpdGU7XFxuJGJnLWNvbG9yOiAjMzE1NzJjO1xcbiRiZy1jb2xvcjI6ICM5MGE5NTU7XFxuJGJnLWNvbG9yMzogI2VjZjM5ZTtcXG4kbXktaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNy41dmgpO1xcbiRteS13aWR0aDogY2xhbXAoNTAlLCAxNTByZW0sIDgwJSk7XFxuJG15LWZpbHRlcjogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKTtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWdzL21lbnUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkyLjV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwYTk1NTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICB6LWluZGV4OiAxMDtcbn1cbi5tZW51LWl0ZW1zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogY2xhbXAoNTAlLCAxNTByZW0sIDgwJSk7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDQsIDE2OSwgODUsIDAuNyk7XG59XG4ubWVudS1pdGVtcy1yb3cge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGdhcDogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTByZW07XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWVudS1pdGVtcy1yb3ctMiB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLm1lbnUtaXRlbXMtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTU3MmM7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDMwcmVtO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLm1lbnUtaXRlbXMtaXRlbSAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDJyZW07XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cbi5tZW51LWl0ZW1zLWl0ZW0gLmRlc2NyaXB0aW9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5tZW51LWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWVudS1oaWdobGlnaHRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzVyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzByZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTU3MmM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL21lbnUtY29tcG9uZW50L21lbnUtY29tcG9uZW50LXN0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLFdBQUE7RUFDQSxjQ0NVO0VEQVYseUJDRlU7RURHVixrSEFBQTtFQUNBLFdBQUE7QUFBRjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSw4QkNOTztFRE9QLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7QUFESjtBQUdJO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRE47QUFFTTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7QUFBUjtBQUdJO0VBQ0UseUJDOUJLO0VEK0JMLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFHTTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUFEUjtBQUdRO0VBQ0UsVUFBQTtBQURWO0FBT0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUxKO0FBUUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkMzRE87RUQ0RFAsa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFOSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXFxcIiBhcyBfO1xcbi5tZW51IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBfLiRteS1oZWlnaHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBfLiRiZy1jb2xvcjI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBfLiRteS1maWx0ZXIsIHVybChcXFwiLi4vLi4vYXNzZXRzL2ltZ3MvbWVudS5wbmdcXFwiKTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgLy8gZGlzcGxheTogbm9uZTtcXG5cXG4gICYtaXRlbXMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiBfLiRteS13aWR0aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKF8uJGJnLWNvbG9yMiwgMC43KTtcXG5cXG4gICAgJi1yb3cge1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIGdhcDogMnJlbTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXgtd2lkdGg6IDkwcmVtO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBtYXgtaGVpZ2h0OiAzNXJlbTtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICYtMiB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgfVxcbiAgICB9XFxuICAgICYtaXRlbSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXy4kYmctY29sb3I7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWF4LXdpZHRoOiA1MHJlbTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgbWF4LWhlaWdodDogMzByZW07XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cXG4gICAgICAmIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAmLWltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAmLWhpZ2hsaWdodHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAzNXJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAzMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXy4kYmctY29sb3I7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gIH1cXG59XFxuXCIsXCIkZm9udC1jb2xvcjogR2hvc3RXaGl0ZTtcXG4kYmctY29sb3I6ICMzMTU3MmM7XFxuJGJnLWNvbG9yMjogIzkwYTk1NTtcXG4kYmctY29sb3IzOiAjZWNmMzllO1xcbiRteS1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3LjV2aCk7XFxuJG15LXdpZHRoOiBjbGFtcCg1MCUsIDE1MHJlbSwgODAlKTtcXG4kbXktZmlsdGVyOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxNTcyYztcbiAgYm94LXNoYWRvdzogMCAwIDIuNXJlbSAwLjVyZW0gYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xufVxuLm5hdi1sb2dvIHtcbiAgcGFkZGluZzogMC4ycmVtIDEzcmVtO1xuICBmb250LXNpemU6IDNyZW07XG4gIHdpZHRoOiAzMCU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5uYXYtaXRlbXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXYtaXRlbXMtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cbi5uYXYtaXRlbXMtaXRlbS1saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICBwYWRkaW5nOiAzcmVtIDVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm5hdi1pdGVtcy1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwYTk1NTtcbiAgY29sb3I6IGdvbGQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXItY29tcG9uZW50L25hdmJhci1jb21wb25lbnQtc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQ0xTO0VETVQsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFBRjtBQUVFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFBSjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBQUo7QUFFSTtFQUNFLGVBQUE7RUFFQSw2QkFBQTtFQUNBLDJCQUFBO0FBRE47QUFFTTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUFSO0FBR0k7RUFDRSx5QkNuQ007RURvQ04sV0FBQTtBQUROXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcXFwiIGFzIF87XFxuLm5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBfLiRiZy1jb2xvcjtcXG4gIGJveC1zaGFkb3c6IDAgMCAyLjVyZW0gMC41cmVtIGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxMDtcXG5cXG4gICYtbG9nbyB7XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAxM3JlbTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICB9XFxuICAmLWl0ZW1zIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICYtaXRlbSB7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXG4gICAgICAmLWxpbmsge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcbiAgICAgICAgcGFkZGluZzogM3JlbSA1cmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgfVxcbiAgICB9XFxuICAgICYtaXRlbTpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXy4kYmctY29sb3IyO1xcbiAgICAgIGNvbG9yOiBnb2xkO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiJGZvbnQtY29sb3I6IEdob3N0V2hpdGU7XFxuJGJnLWNvbG9yOiAjMzE1NzJjO1xcbiRiZy1jb2xvcjI6ICM5MGE5NTU7XFxuJGJnLWNvbG9yMzogI2VjZjM5ZTtcXG4kbXktaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNy41dmgpO1xcbiRteS13aWR0aDogY2xhbXAoNTAlLCAxNTByZW0sIDgwJSk7XFxuJG15LWZpbHRlcjogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKTtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BZ2JhbHVtbyZmYW1pbHk9Q2FudGFyZWxsOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDcwMCZmYW1pbHk9TGFicmFkYTp3Z2h0QDMwMDs0MDA7NjAwJmZhbWlseT1TaGFudGVsbCtTYW5zOml0YWwsd2dodEAxLDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIERlZmF1bHRzICovXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjMzE1NzJjICNlY2YzOWU7XG59XG5cbmh0bWwgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxcmVtO1xufVxuXG5odG1sIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaHRtbCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OSwgODcsIDQ0LCAwLjc1Mjk0MTE3NjUpO1xuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjZWNmMzllO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG5odG1sIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBib3JkZXI6IDAuMnJlbSBzb2xpZCBnb2xkO1xufVxuXG5ib2R5IHtcbiAgY29sb3I6IEdob3N0V2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkthbGFtXCIsIGN1cnNpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTU3MmM7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNlY2YzOWU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbmEsXG5sYWJlbCxcbi5idG4ge1xuICBmb250LWZhbWlseTogXCJBZ2JhbHVtb1wiLCBjdXJzaXZlO1xufVxuXG4jY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDcuNXZoO1xuICBoZWlnaHQ6IDkyLjV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbnAsXG5pbnB1dCxcbnRleHRhcmVhLFxuc3BhbixcbjpwbGFjZWhvbGRlci1zaG93biB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhYnJhZGFcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mbGV4LWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZmxleC1yb3cge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZsZXgtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXI6IDAuNHJlbSBzb2xpZCBibGFjaztcbn1cbi5ib3JkZXItcmFkaXVzLXNtIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxLjRyZW0gc29saWQgYmxhY2s7XG59XG4uYm9yZGVyLXJhZGl1cy1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG4uYm9yZGVyLXRvcEFuZEJvdHRvbSB7XG4gIGJvcmRlci10b3A6IDAuNHJlbSBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWJvdHRvbTogMC40cmVtIHNvbGlkIGJsYWNrO1xufVxuLmJvcmRlci1zaWRlcyB7XG4gIGJvcmRlci1sZWZ0OiAwLjRyZW0gc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogMC40cmVtIHNvbGlkIGJsYWNrO1xufVxuXG4uYmctaW1nLWNlbnRlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJ0bixcbmEge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAzcmVtO1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMztcbn1cbi5idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIGNvbG9yOiBnb2xkO1xufVxuXG4udGl0bGUge1xuICBwYWRkaW5nOiAycmVtO1xuICBmb250LXNpemU6IDRyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDksIDg3LCA0NCwgMC45KTtcbiAgYm90dG9tOiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvdXRpbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLGFBQUE7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw2QkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0RBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSx5QkFBQTtBQ0lGOztBREZBO0VBQ0UsaUJFOUJXO0VGK0JYLDZCQUFBO0VBQ0EseUJFL0JTO0FEb0NYOztBREhBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDTUY7O0FESkE7RUFDRSxjRXBDVTtBRDJDWjs7QURMQTs7Ozs7Ozs7O0VBU0UsZ0NBQUE7QUNRRjs7QUROQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDU0Y7O0FEUEE7Ozs7O0VBS0UsNkJBQUE7RUFDQSxnQkFBQTtBQ1VGOztBRXhFQTtFQUNFLGFBQUE7QUYyRUY7QUUxRUU7RUFDRSxzQkFBQTtBRjRFSjtBRTFFRTtFQUNFLG1CQUFBO0FGNEVKO0FFMUVFO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBRjRFSjs7QUV4RUE7RUFDRSwwQkFBQTtBRjJFRjtBRTFFRTtFQUNFLHFCQUFBO0FGNEVKO0FFekVFO0VBQ0UsaUNBQUE7QUYyRUo7QUV6RUU7RUFDRSxtQkFBQTtBRjJFSjtBRXpFRTtFQUNFLDhCQUFBO0VBQ0EsaUNBQUE7QUYyRUo7QUV6RUU7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FGMkVKOztBRXZFQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBRjBFRjs7QUV4RUE7O0VBRUUsb0JBQUE7QUYyRUY7O0FFekVBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUY0RUY7QUUzRUU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUY2RUo7O0FFekVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBRjRFRjs7QUV6RUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLFNBQUE7QUY0RUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi92YXJpYWJsZXMuc2Nzc1xcXCIgYXMgXztcXG5cXG4vKiBEZWZhdWx0cyAqL1xcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiBfLiRiZy1jb2xvciBfLiRiZy1jb2xvcjM7XFxufVxcbmh0bWwgOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuaHRtbCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5odG1sIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxNTcyY2MwO1xcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgXy4kYmctY29sb3IzO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuaHRtbCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIGdvbGQ7XFxufVxcbmJvZHkge1xcbiAgY29sb3I6IF8uJGZvbnQtY29sb3I7XFxuICBmb250LWZhbWlseTogXFxcIkthbGFtXFxcIiwgY3Vyc2l2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IF8uJGJnLWNvbG9yO1xcbn1cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiBfLiRiZy1jb2xvcjM7XFxufVxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmEsXFxubGFiZWwsXFxuLmJ0biB7XFxuICBmb250LWZhbWlseTogXFxcIkFnYmFsdW1vXFxcIiwgY3Vyc2l2ZTtcXG59XFxuI2NvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogNy41dmg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3LjV2aCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxucCxcXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zcGFuLFxcbjpwbGFjZWhvbGRlci1zaG93biB7XFxuICBmb250LWZhbWlseTogXFxcIkxhYnJhZGFcXFwiLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblwiLFwiQHVzZSBcXFwiLi9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzXFxcIjtcXG5AdXNlIFxcXCIuL2Fzc2V0cy9zdHlsZXMvdXRpbC5zY3NzXFxcIjtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BZ2JhbHVtbyZmYW1pbHk9Q2FudGFyZWxsOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDcwMCZmYW1pbHk9TGFicmFkYTp3Z2h0QDMwMDs0MDA7NjAwJmZhbWlseT1TaGFudGVsbCtTYW5zOml0YWwsd2dodEAxLDUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cIixcIiRmb250LWNvbG9yOiBHaG9zdFdoaXRlO1xcbiRiZy1jb2xvcjogIzMxNTcyYztcXG4kYmctY29sb3IyOiAjOTBhOTU1O1xcbiRiZy1jb2xvcjM6ICNlY2YzOWU7XFxuJG15LWhlaWdodDogY2FsYygxMDB2aCAtIDcuNXZoKTtcXG4kbXktd2lkdGg6IGNsYW1wKDUwJSwgMTUwcmVtLCA4MCUpO1xcbiRteS1maWx0ZXI6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSk7XFxuXCIsXCJAdXNlIFxcXCIuL3ZhcmlhYmxlcy5zY3NzXFxcIiBhcyBfO1xcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAmLWNvbCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAmLXJvdyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuICAmLWNlbnRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uYm9yZGVyIHtcXG4gIGJvcmRlcjogMC40cmVtIHNvbGlkIGJsYWNrO1xcbiAgJi1yYWRpdXMtc20ge1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB9XFxuXFxuICAmLWJvdHRvbSB7XFxuICAgIGJvcmRlci1ib3R0b206IDEuNHJlbSBzb2xpZCBibGFjaztcXG4gIH1cXG4gICYtcmFkaXVzLW1kIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIH1cXG4gICYtdG9wQW5kQm90dG9tIHtcXG4gICAgYm9yZGVyLXRvcDogMC40cmVtIHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjRyZW0gc29saWQgYmxhY2s7XFxuICB9XFxuICAmLXNpZGVzIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDAuNHJlbSBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjRyZW0gc29saWQgYmxhY2s7XFxuICB9XFxufVxcblxcbi5iZy1pbWctY2VudGVyIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uYnRuLFxcbmEge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcbi5idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgcGFkZGluZzogMXJlbSAzcmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAzO1xcbiAgJjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY29sb3I6IGdvbGQ7XFxuICB9XFxufVxcblxcbi50aXRsZSB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB6LWluZGV4OiA1O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXy4kYmctY29sb3IsIDAuOSk7XFxuICBib3R0b206IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQtY29tcG9uZW50LXN0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQtY29tcG9uZW50LXN0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXItY29tcG9uZW50LXN0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGluZy1jb21wb25lbnQtc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkaW5nLWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS1jb21wb25lbnQtc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci1jb21wb25lbnQtc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVNeUVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzLWZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9hYm91dC1jb21wb25lbnQtc3R5bGVzLnNjc3NcIjtcblxuZnVuY3Rpb24gYWJvdXRDb21wb25lbnQoKSB7XG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBDcmVhdGUgY29tcG9uZW50IGVsZW1lbnRzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cbiAgY29uc3QgYWJvdXRTZWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb25zdCBhYm91dFVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWJvdXRVc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBhYm91dFVzQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFib3V0VXNDb250ZW50ID0gY3JlYXRlTXlFbGVtZW50cyhcImFib3V0LXVzXCIsIDIpO1xuICBjb25zdCBhYm91dFVzRm9ybVRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgYWJvdXRVc0Zvcm1UaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IGFib3V0VXNGb3JtQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhZGRyZXNzXCIpO1xuICBjb25zdCBhYm91dFVzRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgYWJvdXRVc0Zvcm1GaWVsZFNldHMgPSBjcmVhdGVNeUVsZW1lbnRzKFwiZm9ybVwiLCAzKTtcbiAgY29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgLypcbiAgICoqKioqKioqKioqKioqKioqKioqKioqIFNldCBjb21wb25lbnQgZWxlbWVudHMgYXR0cmlidXRlICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cbiAgYWJvdXRTZWN0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiYWJvdXQtdXMgZmxleCBmbGV4LXJvdyBiZy1pbWctY2VudGVyXCJcbiAgKTtcbiAgYWJvdXRTZWN0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0LXVzXCIpO1xuICBhYm91dFVzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcbiAgICBcImNsYXNzXCIsXG4gICAgXCJhYm91dC11cy1jb250YWluZXIgZmxleCBmbGV4LXJvdyBmbGV4LWNlbnRlciBib3JkZXItc2lkZXNcIlxuICApO1xuICBhYm91dFVzVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZSBib3JkZXIgYm9yZGVyLXJhZGl1cy1tZFwiKTtcbiAgYWJvdXRVc0NvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgIFwiY2xhc3NcIixcbiAgICBcImFib3V0LXVzLWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGZsZXgtY2VudGVyIGJnLWltZy1jZW50ZXIgYm9yZGVyXCJcbiAgKTtcbiAgYWJvdXRVc0Zvcm1UaXRsZTEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJib3JkZXIgYm9yZGVyLXJhZGl1cy1tZFwiKTtcbiAgYWJvdXRVc0Zvcm1UaXRsZTIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJib3JkZXIgYm9yZGVyLXJhZGl1cy1tZFwiKTtcbiAgYWJvdXRVc0Zvcm1FbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICBcImNsYXNzXCIsXG4gICAgXCJhYm91dC11cy1mb3JtIGJvcmRlciBib3JkZXItcmFkaXVzLW1kXCJcbiAgKTtcbiAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBib3JkZXIgYm9yZGVyLXJhZGl1cy1tZFwiKTtcbiAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBTZXQgY29tcG9uZW50IGVsZW1lbnRzIGNvbnRlbnQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIGFib3V0VXNUaXRsZS50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIjtcbiAgYWJvdXRVc0Zvcm1UaXRsZTEudGV4dENvbnRlbnQgPSBcIk9wZW5pbmcgaG91cnMgTW9uLVNhdDogOEFNIC0gMTA6MzBQTVwiO1xuICBhYm91dFVzRm9ybUFkZHJlc3MudGV4dENvbnRlbnQgPVxuICAgIFwiQWRkcmVzczogMTIzIFBsYWNlaG9sZGVyIFN0LCBDaXR5LCBTdGF0ZSAxMTIxMiwgVVNBLlwiO1xuICBhYm91dFVzRm9ybVRpdGxlMi50ZXh0Q29udGVudCA9XG4gICAgXCJJZiB5b3UgaGF2ZSBhbnkgdGhvdWdodHMsIHF1ZXN0aW9ucyBvciBjb25jZXJucyBwbGVhc2UgcmVhY2ggb3V0IHRvIHVzIHRocnUgb3VyIGZvcm0gb3IgZ2l2ZSB1cyBhIGNhbGxcIjtcbiAgZm9ybUJ0bi50ZXh0Q29udGVudCA9IFwiU2VuZFwiO1xuXG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBBZGQgY29tcG9uZW50IGVsZW1lbnRzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cbiAgYWJvdXRVc0Zvcm1UaXRsZTEuYXBwZW5kQ2hpbGQoYWJvdXRVc0Zvcm1BZGRyZXNzKTtcbiAgYWJvdXRVc0Zvcm1FbGVtZW50LmFwcGVuZCguLi5hYm91dFVzRm9ybUZpZWxkU2V0cywgZm9ybUJ0bik7XG4gIGFib3V0VXNDb250ZW50Q29udGFpbmVyLmFwcGVuZChcbiAgICBhYm91dFVzRm9ybVRpdGxlMSxcbiAgICBhYm91dFVzRm9ybVRpdGxlMixcbiAgICBhYm91dFVzRm9ybUVsZW1lbnRcbiAgKTtcbiAgYWJvdXRVc0NvbnRhaW5lci5hcHBlbmQoXG4gICAgYWJvdXRVc1RpdGxlLFxuICAgIC4uLmFib3V0VXNDb250ZW50LFxuICAgIGFib3V0VXNDb250ZW50Q29udGFpbmVyXG4gICk7XG4gIGFib3V0U2VjdGlvbkVsZW1lbnQuYXBwZW5kKGFib3V0VXNDb250YWluZXIpO1xuICByZXR1cm4gYWJvdXRTZWN0aW9uRWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXRDb21wb25lbnQ7XG4vKiBcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqQ29tcG9uZW50IEJsdWVwcmludCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYWJvdXQtdXMgZmxleC1yb3cgcmVsYXRpdmVcIiBpZD1cImFib3V0LXVzXCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzcz1cImFib3V0LXVzLWNvbnRhaW5lciBmbGV4LXJvdyBib3JkZXIgYm9yZGVyLXJhZGl1c1wiXG5cdFx0XHRcdFx0aWQ9XCJmaXJzdFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8aDMgY2xhc3M9XCJ0aXRsZSBhYnNvbHV0ZSBib3JkZXIgYm9yZGVyLXJhZGl1c1wiPkFib3V0IFVzPC9oMz5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzcz1cImFib3V0LXVzLWNvbnRhaW5lciBiYWNrZ3JvdW5kLWltZy1jZW50ZXIgYm9yZGVyLXRvcEFuZEJvdHRvbVwiXG5cdFx0XHRcdFx0XHRpZD1cInN0MVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJkZXNjcmlwdGlvbiByZWxhdGl2ZSBib3JkZXItcmFkaXVzXCI+XG5cdFx0XHRcdFx0XHRcdFdlIGhlcmUgYXQgVGllcnJhLCBhcmUgdmVyeSBjb25jZXJuZWQgd2l0aCBvdXIgcGxhbmV0XG5cdFx0XHRcdFx0XHRcdDxzdHJvbmc+bW90aGVyIGVhcnRoPC9zdHJvbmc+LiBPbmUgb2YgdGhlIGJpZ2dlc3QgdGhyZWF0cyB0b1xuXHRcdFx0XHRcdFx0XHRtb3RoZXIgZWFydGggaXMgPHN0cm9uZz4gY2xpbWF0ZSBjaGFuZ2U8L3N0cm9uZz4gYW5kIG9uZSBvZiB0aGVcblx0XHRcdFx0XHRcdFx0ZmFjdG9ycyBhZmZlY3RpbmcgdGhhdCBjbGltYXRlIGNoYW5nZSwgaXNcblx0XHRcdFx0XHRcdFx0PHN0cm9uZz5mYWN0b3J5IGZhcm1pbmc8L3N0cm9uZz4uIFdlIG11c3QgY2hhbmdlIG91ciBlYXRpbmcgaGFiaXRzXG5cdFx0XHRcdFx0XHRcdHNvIHdlIGNhbiBlYXNlIHRoZSBkYW1hZ2UgY2F1c2VkIGJ5IGludGVuc2l2ZSBhbmltYWwgZmFybWluZy4gV2Vcblx0XHRcdFx0XHRcdFx0aGF2ZSBkZWRpY2F0ZWQgb3VyIGxpdmVzIHRvIGhlbHAgb3VyIHNvY2lldHkgdHJhbnNpdGlvbiBmcm9tXG5cdFx0XHRcdFx0XHRcdGNvbnN1bWluZyBhbmltYWwgcHJvZHVjdHMgdG8gcGxhbnQtYmFzZWQgcHJvZHVjdHMuXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJhYm91dC11cy1jb250YWluZXIgYmFja2dyb3VuZC1pbWctY2VudGVyIGJvcmRlci10b3BBbmRCb3R0b21cIlxuXHRcdFx0XHRcdFx0aWQ9XCJzdFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJkZXNjcmlwdGlvbiByZWxhdGl2ZSBib3JkZXItcmFkaXVzXCI+XG5cdFx0XHRcdFx0XHRcdFdlIGtub3cgd2hlbiBwZW9wbGUgdGhpbmsgb2YgZWF0aW5nIHBsYW50LWJhc2VkIG9yIHZlZ2FuLCB0d29cblx0XHRcdFx0XHRcdFx0dGhpbmdzIHVzdWFsbHkgY29tZSB0byBtaW5kLCA8aT5ib3JpbmcgYW5kIHRhc3RlIGxpa2UgZGlydDwvaT4uXG5cdFx0XHRcdFx0XHRcdEJ1dCB3ZSBoZXJlIGF0IFRpZXJyYSwgbWFkZSBzdXJlIHRoYXQgbm9uZSBvZiBvdXIgZm9vZCBpcyBib3JpbmcuXG5cdFx0XHRcdFx0XHRcdFdlIHdlbnQgYWJvdmUgYW5kIGJleW9uZCB0byBtYWtlIHN1cmUgd2hlbiB3ZSBzZXJ2ZSBvdXIgZm9vZCBvblxuXHRcdFx0XHRcdFx0XHR0aGUgdGFibGUsIHRoYXQgYWxsIHRoZSByaWNoIGFuZCBsb3ZlbHkgZmxhdm9yIGlzIHRoZXJlIGFuZCBub3QgaW5cblx0XHRcdFx0XHRcdFx0dGhlIDxpPmRpcnQ8L2k+LiBXaGVuIG91ciBjdXN0b21lcnMgbGVhdmUgaGVyZSwgdGhleSB3aWxsIGxlYXZlXG5cdFx0XHRcdFx0XHRcdGhlcmUgbm90IGp1c3Qgc2F0aXNmaWVkOyBidXQgZXZlbiBtb3JlIGtub3dsZWRnZWFibGUgdGhhbiBiZWZvcmUuXG5cdFx0XHRcdFx0XHRcdFRoZXkga25vdyBub3csIHRoYXQgdGhlIGFuaW1hbCBwcm9kdWN0cyB0aGF0IHRoZXkgdXNlIHRvIGxvdmVcblx0XHRcdFx0XHRcdFx0d2Fzbid0IGFsbCB0aGF0IHRhc3RlZnVsLiBXaGF0IHdhcyB0YXN0ZWZ1bCB3YXMgdGhlIHdheSB0aGUgZm9vZFxuXHRcdFx0XHRcdFx0XHR3YXMgcHJlcGFyZWQuIE5vdywgYSBwbGFudC1iYXNlZCBsaWZlc3R5bGUgc2VlbXMgZG9hYmxlIGFuZCBldmVuXG5cdFx0XHRcdFx0XHRcdG1haW50YWluYWJsZTsgZm9yIGFueSBpbmRpdmlkdWFsIHRoYXQgY29tZXMgdGhyb3VnaCB0aGVzZSBkb29ycy5cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzPVwiYWJvdXQtdXMtY29udGFpbmVyIGZsZXgtY29sIGZsZXgtY2VudGVyIGJhY2tncm91bmQtaW1nLWNlbnRlciBib3JkZXItdG9wQW5kQm90dG9tXCJcblx0XHRcdFx0XHRcdGlkPVwic3QyXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3M9XCJib3JkZXIgYm9yZGVyLXJhZGl1c1wiPlxuXHRcdFx0XHRcdFx0XHRPcGVuaW5nIGhvdXJzIE1vbi1TYXQ6IDhBTSAtIDEwOjMwUE1cblx0XHRcdFx0XHRcdFx0PGFkZHJlc3M+XG5cdFx0XHRcdFx0XHRcdFx0QWRkcmVzczogMTIzIFBsYWNlaG9sZGVyIFN0LCBDaXR5LCBTdGF0ZSAxMTIxMiwgVVNBLlxuXHRcdFx0XHRcdFx0XHQ8L2FkZHJlc3M+XG5cdFx0XHRcdFx0XHQ8L2g0PlxuXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3M9XCJib3JkZXIgYm9yZGVyLXJhZGl1c1wiPlxuXHRcdFx0XHRcdFx0XHRJZiB5b3UgaGF2ZSBhbnkgdGhvdWdodHMsIHF1ZXN0aW9ucyBvciBjb25jZXJucyBwbGVhc2UgcmVhY2ggb3V0XG5cdFx0XHRcdFx0XHRcdHRvIHVzIHRocnUgb3VyIGZvcm0gb3IgZ2l2ZSB1cyBhIDxhIGhyZWY9XCJ0ZWw6MTgwMDQ1NDU0XCI+Y2FsbDwvYT4uXG5cdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJhYm91dC11cy1mb3JtIGJvcmRlciBib3JkZXItcmFkaXVzXCJcblx0XHRcdFx0XHRcdFx0bWV0aG9kPVwicG9zdFwiXG5cdFx0XHRcdFx0XHRcdGFjdGlvbj1cImh0dHBzOi8vd3d3LmZyZWVjb2RlY2FtcC5jb20vZW1haWwtc3VibWl0XCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGZpZWxkc2V0PlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQgLz5cblx0XHRcdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHRcdFx0PGZpZWxkc2V0PlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiByZXF1aXJlZCAvPlxuXHRcdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdFx0XHQ8ZmllbGRzZXQ+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cImNvbW1lbnRzXCI+Q29tbWVudHM6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI1XCJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbHM9XCIyNVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cImNvbW1lbnRzXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJjb21tZW50c1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgY29tbWVudHMgaGVyZS4uLlwiXG5cdFx0XHRcdFx0XHRcdFx0PjwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYm9yZGVyIGJvcmRlci1yYWRpdXNcIiB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHRcdFx0U2VuZFxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3NlY3Rpb24+ICBcbiAgICAqL1xuIiwiaW1wb3J0IFwiLi9mb290ZXItY29tcG9uZW50LXN0eWxlcy5zY3NzXCI7XG5cbmZ1bmN0aW9uIGZvb3RlckNvbXBvbmVudCgpIHtcbiAgY29uc3QgZm9vdGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGZvb3RlckNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgZm9vdGVyQ29udGVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJib3JkZXIgYm9yZGVyLXJhZGl1cy1tZFwiKTtcbiAgZm9vdGVyQ29udGVudEVsZW1lbnQudGV4dENvbnRlbnQgPVxuICAgIFwiwqkgMjAyMyBCdWlsdCBCeSBHdWlsbGVybW8gR29uemFsZXouIEFsbCByaWdodHMgcmVzZXJ2ZWQuXCI7XG4gIGZvb3RlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudEVsZW1lbnQpO1xuXG4gIHJldHVybiBmb290ZXJFbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb290ZXJDb21wb25lbnQ7XG4iLCJpbXBvcnQgXCIuL2hlYWRpbmctY29tcG9uZW50LXN0eWxlcy5zY3NzXCI7XG5cbmZ1bmN0aW9uIGhlYWRpbmdDb21wb25lbnQoKSB7XG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBDcmVhdGUgY29tcG9uZW50IGVsZW1lbnRzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cbiAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBoZWFkZXJDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGVyQ29udGVudEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGhlYWRlckNvbnRlbnRNc2cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGhlYWRlckNvbnRlbnRNc2cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGhlYWRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBTZXQgY29tcG9uZW50IGVsZW1lbnRzIGF0dHJpYnV0ZSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgaGVhZGVyQ29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiaGVhZGluZy1ncm91cCBmbGV4IGZsZXgtY29sIGZsZXgtY2VudGVyXCJcbiAgKTtcbiAgaGVhZGVyQ29udGVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhncm91cFwiKTtcbiAgaGVhZGluZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiaGVhZGluZy1jb250YWluZXIgZmxleCBmbGV4LXJvdyBmbGV4LWNlbnRlciBiZy1pbWctY2VudGVyXCJcbiAgKTtcbiAgaGVhZGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiaGVhZGluZyBmbGV4IGZsZXgtY2VudGVyIGZsZXgtY29sIGJvcmRlci1zaWRlc1wiXG4gICk7XG4gIGhlYWRlckVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xuICBoZWFkZXJCdG4uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNtZW51XCIpO1xuICBoZWFkZXJCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYm9yZGVyIGJvcmRlci1yYWRpdXMtbWRcIik7XG5cbiAgLypcbiAgICoqKioqKioqKioqKioqKioqKioqKioqIFNldCBjb21wb25lbnQgZWxlbWVudHMgY29udGVudCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgaGVhZGVyQ29udGVudEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRpZXJyYVwiO1xuICBoZWFkZXJDb250ZW50TXNnMS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0b1wiO1xuICBoZWFkZXJDb250ZW50TXNnMi50ZXh0Q29udGVudCA9IFwiVGhlIGJlc3QgcGxhbnQtYmFzZWQgcmVzdGF1cmFudCBpbiB0b3duLlwiO1xuICBoZWFkZXJCdG4udGV4dENvbnRlbnQgPSBcIk9yZGVyIE5vd1wiO1xuXG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBBZGQgY29tcG9uZW50IGVsZW1lbnRzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICBoZWFkZXJDb250ZW50Q29udGFpbmVyLmFwcGVuZChcbiAgICBoZWFkZXJDb250ZW50TXNnMSxcbiAgICBoZWFkZXJDb250ZW50SGVhZGluZyxcbiAgICBoZWFkZXJDb250ZW50TXNnMixcbiAgICBoZWFkZXJCdG5cbiAgKTtcbiAgaGVhZGVyRWxlbWVudC5hcHBlbmQoaGVhZGVyQ29udGVudENvbnRhaW5lcik7XG4gIGhlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudCk7XG5cbiAgcmV0dXJuIGhlYWRpbmdDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRpbmdDb21wb25lbnQ7XG4iLCJpbXBvcnQgeyBjcmVhdGVNeUVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzLWZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9tZW51LWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuZnVuY3Rpb24gbWVudUNvbXBvbmVudCgpIHtcbiAgLypcbiAgICoqKioqKioqKioqKioqKioqKioqKioqIENyZWF0ZSBjb21wb25lbnQgZWxlbWVudHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuICBjb25zdCBtZW51U2VjdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY29uc3QgbWVudUl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVudVRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgbWVudUl0ZW1zUm93MUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1lbnVJdGVtc1JvdzJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZW51SGlnaGxpZ2h0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgbWVudUhpZ2hsaWdodHMgPSBjcmVhdGVNeUVsZW1lbnRzKFwibWVudS1oaWdobGlnaHRzXCIsIDMpO1xuICBjb25zdCBtZW51SGlnaGxpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAvKlxuICAgKioqKioqKioqKioqKioqKioqKioqKiogU2V0IGNvbXBvbmVudCBlbGVtZW50cyBhdHRyaWJ1dGUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuICBtZW51U2VjdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xuICBtZW51U2VjdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgIFwiY2xhc3NcIixcbiAgICBcIm1lbnUgZmxleCBmbGV4LWNvbCBmbGV4LWNlbnRlciBiZy1pbWctY2VudGVyIGJvcmRlci10b3BBbmRCb3R0b21cIlxuICApO1xuICBtZW51U2VjdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMCk7XG4gIG1lbnVJdGVtc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjbGFzc1wiLFxuICAgIFwibWVudS1pdGVtcyBmbGV4IGZsZXgtY29sIGZsZXgtY2VudGVyIGJvcmRlci1zaWRlc1wiXG4gICk7XG4gIG1lbnVUaXRsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZSBib3JkZXIgYm9yZGVyLXJhZGl1cy1tZFwiKTtcbiAgbWVudUl0ZW1zUm93MUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZsZXggbWVudS1pdGVtcy1yb3dcIik7XG4gIG1lbnVJdGVtc1JvdzJDb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgIFwiY2xhc3NcIixcbiAgICBcImZsZXggbWVudS1pdGVtcy1yb3cgbWVudS1pdGVtcy1yb3ctMlwiXG4gICk7XG4gIG1lbnVIaWdobGlnaHRzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1oaWdobGlnaHRcIik7XG4gIG1lbnVIaWdobGlnaHRzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcbiAgICBcImNsYXNzXCIsXG4gICAgXCJtZW51LWhpZ2hsaWdodHMgZmxleCBmbGV4LWNvbCBmbGV4LWNlbnRlciBib3JkZXIgYm9yZGVyLXJhZGl1cy1zbSBcIlxuICApO1xuICBtZW51SGlnaGxpZ2h0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudS1oaWdobGlnaHRzLWhpZ2hsaWdodFwiKTtcbiAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJ0biBib3JkZXIgYm9yZGVyLXJhZGl1cy1tZFwiKTtcblxuICAvKlxuICAgKioqKioqKioqKioqKioqKioqKioqKiogU2V0IGNvbXBvbmVudCBlbGVtZW50cyBjb250ZW50ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICBtZW51VGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gXCJBIHRhc3RlIG9mIHdoYXQgd2UgYXJlIGNvb2tpbmdcIjtcbiAgbWVudUhpZ2hsaWdodC50ZXh0Q29udGVudCA9IFwiTWVudSBIaWdobGlnaHRzXCI7XG4gIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIkZ1bGwgTWVudVwiO1xuXG4gIC8qXG4gICAqKioqKioqKioqKioqKioqKioqKioqKiBBZGQgY29tcG9uZW50IGVsZW1lbnRzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cblxuICBtZW51SGlnaGxpZ2h0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SGlnaGxpZ2h0KTtcbiAgbWVudUl0ZW1zUm93MUNvbnRhaW5lci5hcHBlbmQobWVudUhpZ2hsaWdodHNDb250YWluZXIsIG1lbnVIaWdobGlnaHRzWzBdKTtcbiAgbWVudUl0ZW1zUm93MkNvbnRhaW5lci5hcHBlbmQobWVudUhpZ2hsaWdodHNbMV0sIG1lbnVIaWdobGlnaHRzWzJdKTtcbiAgbWVudUl0ZW1zQ29udGFpbmVyLmFwcGVuZChcbiAgICBtZW51VGl0bGVFbGVtZW50LFxuICAgIG1lbnVJdGVtc1JvdzFDb250YWluZXIsXG4gICAgbWVudUl0ZW1zUm93MkNvbnRhaW5lcixcbiAgICBtZW51QnRuXG4gICk7XG4gIG1lbnVTZWN0aW9uRWxlbWVudC5hcHBlbmQobWVudUl0ZW1zQ29udGFpbmVyKTtcbiAgcmV0dXJuIG1lbnVTZWN0aW9uRWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudUNvbXBvbmVudDtcbiIsImltcG9ydCBcIi4vbmF2YmFyLWNvbXBvbmVudC1zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IHsgY3JlYXRlTXlFbGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlscy91dGlscy1mdW5jdGlvbnNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcbiAgLypcbiAgICoqKioqKioqKioqKioqKioqKioqKioqIENyZWF0ZSBjb21wb25lbnQgZWxlbWVudHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb25zdCBuYXZMb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmF2TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgbmF2SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IG5hdkl0ZW1zID0gY3JlYXRlTXlFbGVtZW50cyhcIm5hdlwiLCAzKTtcblxuICAvKlxuICAgKioqKioqKioqKioqKioqKioqKioqKiogU2V0IGNvbXBvbmVudCBlbGVtZW50cyBhdHRyaWJ1dGUgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIG5hdmJhci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdiBmbGV4IGZsZXgtY29sIGZsZXgtY2VudGVyIGJvcmRlci1ib3R0b21cIik7XG4gIG5hdkl0ZW1zQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcbiAgICBcImNsYXNzXCIsXG4gICAgXCJuYXYtaXRlbXMgZmxleCBmbGV4LXJvdyBmbGV4LWNlbnRlclwiXG4gICk7XG4gIG5hdkxvZ29Db250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgIFwiY2xhc3NcIixcbiAgICBcIm5hdi1sb2dvIGZsZXggZmxleC1jZW50ZXIgYm9yZGVyLXJhZGl1cy1zbVwiXG4gICk7XG5cbiAgLypcbiAgICoqKioqKioqKioqKioqKioqKioqKioqIFNldCBjb21wb25lbnQgZWxlbWVudHMgY29udGVudCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICovXG5cbiAgbmF2TG9nby50ZXh0Q29udGVudCA9IFwiVGllcnJhXCI7XG5cbiAgLypcbiAgICoqKioqKioqKioqKioqKioqKioqKioqIEFkZCBjb21wb25lbnQgZWxlbWVudHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuXG4gIG5hdkxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobmF2TG9nbyk7XG4gIG5hdkl0ZW1zQ29udGFpbmVyLmFwcGVuZCguLi5uYXZJdGVtcyk7XG5cbiAgbmF2YmFyLmFwcGVuZChuYXZMb2dvQ29udGFpbmVyLCBuYXZJdGVtc0NvbnRhaW5lcik7XG5cbiAgcmV0dXJuIG5hdmJhcjtcbn1cbiIsImZ1bmN0aW9uIGNyZWF0ZU15RWxlbWVudHMoZWxlbWVudCwgbnVtKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yIChsZXQgeCA9IDA7IHggPCBudW07IHgrKykge1xuICAgIGlmIChlbGVtZW50ID09PSBcIm5hdlwiKSB7XG4gICAgICBjb25zdCBsaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBsaUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXYtaXRlbXMtaXRlbSBib3JkZXItcmFkaXVzLXNtXCIpO1xuXG4gICAgICBpZiAoeCA9PT0gMCkge1xuICAgICAgICBuYXZMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjaG9tZVwiKTtcbiAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdi1pdGVtcy1pdGVtLWxpbmtcIik7XG4gICAgICAgIG5hdkxpbmsudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICAgIH0gZWxzZSBpZiAoeCA9PT0gMSkge1xuICAgICAgICBuYXZMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjbWVudVwiKTtcbiAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdi1pdGVtcy1pdGVtLWxpbmtcIik7XG4gICAgICAgIG5hdkxpbmsudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdkxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNhYm91dC11c1wiKTtcbiAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdi1pdGVtcy1pdGVtLWxpbmsgXCIpO1xuICAgICAgICBuYXZMaW5rLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICAgICAgfVxuXG4gICAgICBsaUVsZW1lbnQuYXBwZW5kQ2hpbGQobmF2TGluayk7XG5cbiAgICAgIGVsZW1lbnRzLnB1c2gobGlFbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IFwibWVudS1oaWdobGlnaHRzXCIpIHtcbiAgICAgIGNvbnN0IG1lbnVJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IG1lbnVJdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGNvbnN0IG1lbnVJdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgbWVudUl0ZW1Db250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgICAgICBcImNsYXNzXCIsXG4gICAgICAgIFwibWVudS1pdGVtcy1pdGVtIGJvcmRlciBib3JkZXItcmFkaXVzLW1kXCJcbiAgICAgICk7XG4gICAgICBtZW51SXRlbUltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtaW1nIGJvcmRlci1yYWRpdXNcIik7XG4gICAgICBtZW51SXRlbURlc2Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZXNjcmlwdGlvbiBmbGV4IGJvcmRlci1yYWRpdXNcIik7XG5cbiAgICAgIGlmICh4ID09PSAwKSB7XG4gICAgICAgIG1lbnVJdGVtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnVyZ2VyXCIpO1xuICAgICAgICBtZW51SXRlbUltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvYXNzZXRzL2ltZ3MvdmVnYW4tYnVyZ2VyLmpwZ1wiKTtcbiAgICAgICAgbWVudUl0ZW1EZXNjLnRleHRDb250ZW50ID0gYE91ciB2ZWdhbiBidXJnZXIgd2lsbCBsZWF2ZSB5b3Ugc3R1bm5lZCBieSB0aGUgZmxhdm9yLiBPdXJcbiAgICAgICAgaG9tZW1hZGUgYnVyZ2VyIHBhdHRpZXMgYXJlIG5vdCBsaWtlIGFueSBvdGhlciBibGFuZCBwYXR0eSwgb3Vyc1xuICAgICAgICBjb21lIHBhY2tlZCB3aXRoIHByb3RlaW4sIHBsZW50eSBvZiBoZXJicyBhbmRcbiAgICAgICAgc3BpY2VzLiBEcmVzc2luZyB1cCBpdCB3aXRoIG91ciBob21lbWFkZSBjaGVkZGFyIGNoZWVzZSBhbmRcbiAgICAgICAgdG9wcGVkIHdpdGggeW91ciBjaG9pY2Ugb2YgbGV0dHVjZSBvciBrYWxlLCBvbmlvbnMgYW5kIHRvbWF0by5cbiAgICAgICAgV2l0aCBvdXIgZnJlbmNoIGZyaWVzIGluY2x1ZGVkLCB5b3VyIGdvaW5nIHRvIGJlIHNob2NrZWQgYXQgaG93XG4gICAgICAgIGdvb2QgYSBwbGFudCBiYXNlZCBidXJnZXIgY2FuIHJlYWxseSBiZS5gO1xuICAgICAgfSBlbHNlIGlmICh4ID09PSAxKSB7XG4gICAgICAgIG1lbnVJdGVtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RlYWtcIik7XG4gICAgICAgIG1lbnVJdGVtSW1nLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcInNyY1wiLFxuICAgICAgICAgIFwiLi4vc3JjL2Fzc2V0cy9pbWdzL3ZlZ2FuLXN0ZWFrLWFuZC1wb3RhdG9lcy5qcGdcIlxuICAgICAgICApO1xuICAgICAgICBtZW51SXRlbURlc2MudGV4dENvbnRlbnQgPSBgWWVzLCB0aGF0IGlzIHJpZ2h0LCB3ZSBoYXZlIHN0ZWFrIGFuZCBvZiBjb3Vyc2UgaXRzIHBsYW50LWJhc2VkLlxuICAgICAgICBPdXIgaG9tZW1hZGUgc3RlYWsgaXMgYmFzZWQgb2ZmIG9mIGdsdXRlbi5cbiAgICAgICAgU2Vhc29uZWQgdG8gcGVyZmVjdGlvbiwgeW91J2xsIGxvdmUgdGhvc2UgaGludHMgb2Ygb3JlZ2FubyBhbmRcbiAgICAgICAgc2FsdCBidXp6aW5nIHRob3NlIHRhc3RlIGJ1ZHMuIFNlcnZlZCB3aXRoIHlvdXIgY2hvaWNlIG9mIHR3b1xuICAgICAgICBzaWRlcyBhbmQgYSBkcmluaywgeW91IHdpbGwgYmUgd29uZGVyaW5nXG4gICAgICAgIHdoeSBoYXZlbid0IEkgY2hhbmdlZCB0byBwbGFudC1iYXNlZCBkaWV0LCB5ZXQ/YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnVJdGVtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2hpY2tlblwiKTtcbiAgICAgICAgbWVudUl0ZW1JbWcuc2V0QXR0cmlidXRlKFxuICAgICAgICAgIFwic3JjXCIsXG4gICAgICAgICAgXCIuLi9zcmMvYXNzZXRzL2ltZ3MvY2hpayduLWFuZC1mcmllcy5wbmdcIlxuICAgICAgICApO1xuICAgICAgICBtZW51SXRlbURlc2MudGV4dENvbnRlbnQgPSBgQSBwbGFudC1iYXNlZCBzcGluIG9uIGEgbG92ZWx5IGNsYXNzaWMsIHRoYXQgd2UgYWxsIGVuam95LiBPdXJcbiAgICAgICAgZnJpZWQgY2hpayduIGlzIG1vcmUgdGhhdCBqdXN0IGZpbmdlciBsaWNraW5nIGdvb2QsIGl0IGp1c3RcbiAgICAgICAgZGVmaWVzIGV2ZXJ5dGhpbmcgdGhhdCB5b3UgbWlnaHQga25vdyBhYm91dCBmb29kLCBlc3BlY2lhbGx5XG4gICAgICAgIHBsYW50LWJhc2VkIGZvb2QuIEZyaWVkIHRvIGEgY3JpcHN5IHBlcmZlY3Rpb24gd2l0aCB0aG9zZSBsb3ZlbHlcbiAgICAgICAgZnJpZXMsIHlvdSB3aWxsIGJlIHdvbmRlcmluZyBob3cgZ29vZCB3aWxsIHRoaXMgdGFzdGUgb24gYSBzYW5kd2ljaD9gO1xuICAgICAgfVxuXG4gICAgICBtZW51SXRlbUNvbnRhaW5lci5hcHBlbmQobWVudUl0ZW1JbWcsIG1lbnVJdGVtRGVzYyk7XG4gICAgICBldmVudEFkZGVyKG1lbnVJdGVtQ29udGFpbmVyKTtcbiAgICAgIGVsZW1lbnRzLnB1c2gobWVudUl0ZW1Db250YWluZXIpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gXCJhYm91dC11c1wiKSB7XG4gICAgICBjb25zdCBhYm91dFVzQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBhYm91dFVzQ29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgICAgYWJvdXRVc0NvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgICAgICBcImNsYXNzXCIsXG4gICAgICAgIFwiYWJvdXQtdXMtY29udGFpbmVyIGZsZXggZmxleC1jb2wgZmxleC1jZW50ZXIgYmctaW1nLWNlbnRlciBib3JkZXJcIlxuICAgICAgKTtcbiAgICAgIGFib3V0VXNDb250ZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwiY2xhc3NcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvbiBmbGV4IGJvcmRlci1yYWRpdXMtbWRcIlxuICAgICAgKTtcblxuICAgICAgaWYgKHggPT09IDApIHtcbiAgICAgICAgYWJvdXRVc0NvbnRlbnRFbGVtZW50LnRleHRDb250ZW50ID1cbiAgICAgICAgICBcIldlIGhlcmUgYXQgVGllcnJhLCBhcmUgdmVyeSBjb25jZXJuZWQgd2l0aCBvdXIgcGxhbmV0IG1vdGhlciBlYXJ0aC4gT25lIG9mIHRoZSBiaWdnZXN0IHRocmVhdHMgdG8gbW90aGVyIGVhcnRoIGlzIGNsaW1hdGUgY2hhbmdlIGFuZCBvbmUgb2YgdGhlIGZhY3RvcnMgYWZmZWN0aW5nIHRoYXQgY2xpbWF0ZSBjaGFuZ2UsIGlzIGZhY3RvcnkgZmFybWluZy4gV2UgbXVzdCBjaGFuZ2Ugb3VyIGVhdGluZyBoYWJpdHMgc28gd2UgY2FuIGVhc2UgdGhlIGRhbWFnZSBjYXVzZWQgYnkgaW50ZW5zaXZlIGFuaW1hbCBmYXJtaW5nLiBXZSBoYXZlIGRlZGljYXRlZCBvdXIgbGl2ZXMgdG8gaGVscCBvdXIgc29jaWV0eSB0cmFuc2l0aW9uIGZyb20gY29uc3VtaW5nIGFuaW1hbCBwcm9kdWN0cyB0byBwbGFudC1iYXNlZCBwcm9kdWN0cy5cIjtcbiAgICAgIH0gZWxzZVxuICAgICAgICBhYm91dFVzQ29udGVudEVsZW1lbnQudGV4dENvbnRlbnQgPVxuICAgICAgICAgIFwiV2Uga25vdyB3aGVuIHBlb3BsZSB0aGluayBvZiBlYXRpbmcgcGxhbnQtYmFzZWQgb3IgdmVnYW4sIHR3byB0aGluZ3MgdXN1YWxseSBjb21lIHRvIG1pbmQsIGJvcmluZyBhbmQgdGFzdGUgbGlrZSBkaXJ0LiBCdXQgd2UgaGVyZSBhdCBUaWVycmEsIG1hZGUgc3VyZSB0aGF0IG5vbmUgb2Ygb3VyIGZvb2QgaXMgYm9yaW5nLiBXZSB3ZW50IGFib3ZlIGFuZCBiZXlvbmQgdG8gbWFrZSBzdXJlIHdoZW4gd2Ugc2VydmUgb3VyIGZvb2Qgb24gdGhlIHRhYmxlLCB0aGF0IGFsbCB0aGUgcmljaCBhbmQgbG92ZWx5IGZsYXZvciBpcyB0aGVyZSBhbmQgbm90IGluIHRoZSBkaXJ0LiBXaGVuIG91ciBjdXN0b21lcnMgbGVhdmUgaGVyZSwgdGhleSB3aWxsIGxlYXZlIGhlcmUgbm90IGp1c3Qgc2F0aXNmaWVkOyBidXQgZXZlbiBtb3JlIGtub3dsZWRnZWFibGUgdGhhbiBiZWZvcmUuIFRoZXkga25vdyBub3csIHRoYXQgdGhlIGFuaW1hbCBwcm9kdWN0cyB0aGF0IHRoZXkgdXNlIHRvIGxvdmUgd2Fzbid0IGFsbCB0aGF0IHRhc3RlZnVsLiBXaGF0IHdhcyB0YXN0ZWZ1bCB3YXMgdGhlIHdheSB0aGUgZm9vZCB3YXMgcHJlcGFyZWQuIE5vdywgYSBwbGFudC1iYXNlZCBsaWZlc3R5bGUgc2VlbXMgZG9hYmxlIGFuZCBldmVuIG1haW50YWluYWJsZTsgZm9yIGFueSBpbmRpdmlkdWFsIHRoYXQgY29tZXMgdGhyb3VnaCB0aGVzZSBkb29ycy5cIjtcblxuICAgICAgYWJvdXRVc0NvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRVc0NvbnRlbnRFbGVtZW50KTtcbiAgICAgIGVsZW1lbnRzLnB1c2goYWJvdXRVc0NvbnRlbnRDb250YWluZXIpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gXCJmb3JtXCIpIHtcbiAgICAgIGNvbnN0IGZvcm1GaWVsZFNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgICAgIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgY29uc3QgZm9ybUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4gICAgICBpZiAoeCA9PT0gMCkge1xuICAgICAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hbWVcIik7XG4gICAgICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcbiAgICAgICAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgZm9ybUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIik7XG4gICAgICAgIGZvcm1MYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZTpcIjtcbiAgICAgIH0gZWxzZSBpZiAoeCA9PT0gMSkge1xuICAgICAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImVtYWlsXCIpO1xuICAgICAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbWFpbFwiKTtcbiAgICAgICAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJlbWFpbFwiKTtcbiAgICAgICAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgZm9ybUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVtYWlsXCIpO1xuICAgICAgICBmb3JtTGFiZWwudGV4dENvbnRlbnQgPSBcIkVtYWlsOlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicm93c1wiLCA1KTtcbiAgICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiY29sXCIsIDI1KTtcbiAgICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb21tZW50c1wiKTtcbiAgICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbW1lbnRzXCIpO1xuICAgICAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIHlvdXIgY29tbWVudHMgaGVyZS4uLi5cIik7XG4gICAgICAgIGZvcm1MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb21tZW50c1wiKTtcbiAgICAgICAgZm9ybUxhYmVsLnRleHRDb250ZW50ID0gXCJDb21tZW50czpcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHggPiAxKSBmb3JtRmllbGRTZXQuYXBwZW5kKGZvcm1MYWJlbCwgdGV4dEFyZWEpO1xuICAgICAgZWxzZSBmb3JtRmllbGRTZXQuYXBwZW5kKGZvcm1MYWJlbCwgZm9ybUlucHV0KTtcblxuICAgICAgZWxlbWVudHMucHVzaChmb3JtRmllbGRTZXQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGV2ZW50QWRkZXIoZWxlbWVudCkge1xuICBlbGVtZW50Lm9ubW91c2VlbnRlciA9IG1lbnVJdGVtSG92ZXI7XG4gIGVsZW1lbnQub25tb3VzZWxlYXZlID0gbWVudUl0ZW1Ib3Zlcjtcbn1cblxuY29uc3QgbWVudUl0ZW1Ib3ZlciA9IChlKSA9PiB7XG4gIGNvbnN0IG1lbnVIaWdobGlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaGlnaGxpZ2h0XCIpO1xuICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQuaWQ7XG4gIGNvbnN0IGV2ZW50ID0gZS50eXBlO1xuICBjb25zdCB0ZXh0ID0gXCJNZW51IEhpZ2hsaWdodHNcIjtcblxuICBjb25zb2xlLmxvZyhlbGVtZW50KTtcblxuICBpZiAoZXZlbnQgPT09IFwibW91c2VlbnRlclwiKSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IFwiYnVyZ2VyXCIpIHtcbiAgICAgIG1lbnVIaWdobGlnaHQudGV4dENvbnRlbnQgPSBcIlRoZSBHcmVlbiBHaWFudFwiO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50ID09PSBcImNoaWNrZW5cIikge1xuICAgICAgbWVudUhpZ2hsaWdodC50ZXh0Q29udGVudCA9IFwiRnJpZWQgQ2hpayduIGFuZCBGcmllc1wiO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50ID09PSBcInN0ZWFrXCIpIHtcbiAgICAgIG1lbnVIaWdobGlnaHQudGV4dENvbnRlbnQgPSBcIkNodXJyYXNjbyBWZXJkZVwiO1xuICAgIH1cbiAgfSBlbHNlIGlmIChldmVudCA9PT0gXCJtb3VzZWxlYXZlXCIpIHtcbiAgICAvLyBkZWZhdWx0IHRleHRcbiAgICBtZW51SGlnaGxpZ2h0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgfVxufTtcbmV4cG9ydCB7IGNyZWF0ZU15RWxlbWVudHMsIG1lbnVJdGVtSG92ZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgaGVhZGluZ0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRpbmctY29tcG9uZW50L2hlYWRpbmctY29tcG9uZW50XCI7XG5pbXBvcnQgbmF2YmFyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyLWNvbXBvbmVudC9uYXZiYXItY29tcG9uZW50XCI7XG5pbXBvcnQgbWVudUNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL21lbnUtY29tcG9uZW50L21lbnUtY29tcG9uZW50XCI7XG5pbXBvcnQgYWJvdXRDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9hYm91dC1jb21wb25lbnQvYWJvdXQtY29tcG9uZW50XCI7XG5pbXBvcnQgZm9vdGVyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvZm9vdGVyLWNvbXBvbmVudC9mb290ZXItY29tcG9uZW50c1wiO1xuXG4oZnVuY3Rpb24gbXlBcHAoKSB7XG4gIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgcGFnZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnRcIik7XG5cbiAgcGFnZUNvbnRhaW5lci5hcHBlbmQoXG4gICAgaGVhZGluZ0NvbXBvbmVudCgpLFxuICAgIG1lbnVDb21wb25lbnQoKSxcbiAgICBhYm91dENvbXBvbmVudCgpLFxuICAgIGZvb3RlckNvbXBvbmVudCgpXG4gICk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKG5hdmJhckNvbXBvbmVudCgpLCBwYWdlQ29udGFpbmVyKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=