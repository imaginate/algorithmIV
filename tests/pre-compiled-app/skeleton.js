/** @preserve blank line */

/**
 * -----------------------------------------------------------------------------
 * Algorithm IV Question Manager App (v1.1.2)
 * -----------------------------------------------------------------------------
 * @file Algorithm IV's question manager is a JavaScript app designed to manage
 *   practice questions and JavaScript coded solutions for learning computer
 *   science focused algorithms and data structures, improving programming
 *   skill-sets, and preparing for technical interviews.
 * @module aIVApp
 * @version 1.1.2
 * @author Adam Smith [imagineadamsmith@gmail.com]{@link https://github.com/imaginate}
 * @copyright 2022 Adam A Smith [https://github.com/imaginate]{@link https://github.com/imaginate}
 * @license The Apache License [www.apache.org/licenses/LICENSE-2.0]{@link http://www.apache.org/licenses/LICENSE-2.0}
 * @desc More details about aIV's question manager:
 * <ol>
 *   <li>annotations: 
 *       [See Closure Compiler specific JSDoc]{@link https://developers.google.com/closure/compiler/docs/js-for-compiler}
 *       and [See JSDoc3]{@link http://usejsdoc.org/}
 *   </li>
 *   <li>contributing: 
 *       [See the guideline]{@link https://github.com/imaginate/algorithmIV-question-manager/blob/master/CONTRIBUTING.md}
 *   </li>
 * </ol>
 */

/**
 * -----------------------------------------------------------------------------
 * Pre-Defined JSDoc Types
 * -----------------------------------------------------------------------------
 * @typedef {Array<*>} vals
 * @typedef {Array<number>} numbers
 * @typedef {Array<string>} strings
 * @typedef {Array<Object>} objects
 * @typedef {Array<Element>} elements
 * @typedef {Array<Question>} questions
 * @typedef {Array<{name: string, href: string}>} links
 * @typedef {Object<string, string>} stringMap
 * @typedef {Object<string, number>} numberMap
 * @typedef {Object<string, object>} objectMap
 * @typedef {Object<string, boolean>} booleanMap
 * @typedef {Object<string, Element>} elementMap
 * @typedef {Object<string, strings>} stringsMap
 */

////////////////////////////////////////////////////////////////////////////////
// The Dependencies
////////////////////////////////////////////////////////////////////////////////

/* -----------------------------------------------------------------------------
 * Algorithm IV JavaScript Shortcuts (dependencies/algorithmIV-utils.min.js)
 * -------------------------------------------------------------------------- */
// insert-aIV-utils

////////////////////////////////////////////////////////////////////////////////
// The Public API
////////////////////////////////////////////////////////////////////////////////

(function setupTheAppPublicAPI(window, appModuleAPI) {
  "use strict";

/* -----------------------------------------------------------------------------
 * The Public API (public-api.js)
 * -------------------------------------------------------------------------- */
// insert-public-api

})(window,

////////////////////////////////////////////////////////////////////////////////
// The App Module
////////////////////////////////////////////////////////////////////////////////

(function setupTheAppModule(window, document, undefined) {
  "use strict"; 

/* -----------------------------------------------------------------------------
 * Set The TypeError Message For Invalid Arguments
 * -------------------------------------------------------------------------- */

aIV.utils.set({
  checkArgsErrorMsg: 'An aIV.app internal call received an invalid parameter.'
});

/* -----------------------------------------------------------------------------
 * The App Module API (module-api.js)
 * -------------------------------------------------------------------------- */
// insert-module-api

/* -----------------------------------------------------------------------------
 * The Public Module Variables (module-vars.js)
 * -------------------------------------------------------------------------- */
// insert-module-vars

/* -----------------------------------------------------------------------------
 * The Public Module Methods (module-methods.js)
 * -------------------------------------------------------------------------- */
// insert-module-methods

/* -----------------------------------------------------------------------------
 * The App Class (classes/app/app.js)
 * -------------------------------------------------------------------------- */
// insert-class-app-base

/* -----------------------------------------------------------------------------
 * The AppElems Class (classes/app/app-elems.js)
 * -------------------------------------------------------------------------- */
// insert-class-app-elems

/* -----------------------------------------------------------------------------
 * The AppVals Class (classes/app/app-vals.js)
 * -------------------------------------------------------------------------- */
// insert-class-app-vals

/* -----------------------------------------------------------------------------
 * The Config Class (classes/config/config.js)
 * -------------------------------------------------------------------------- */
// insert-class-config

/* -----------------------------------------------------------------------------
 * The SearchBarConfig Class (classes/config/search-bar-config.js)
 * -------------------------------------------------------------------------- */
// insert-class-search-bar-config

/* -----------------------------------------------------------------------------
 * The DefaultsSearchBarConfig (classes/config/defaults-search-bar-config.js)
 * -------------------------------------------------------------------------- */
// insert-class-defaults-search-bar-config

/* -----------------------------------------------------------------------------
 * The QuestionsConfig Class (classes/config/questions-config.js)
 * -------------------------------------------------------------------------- */
// insert-class-questions-config

/* -----------------------------------------------------------------------------
 * The PrettyConfig Class (classes/config/pretty-config.js)
 * -------------------------------------------------------------------------- */
// insert-class-pretty-config

/* -----------------------------------------------------------------------------
 * The LinksConfig Class (classes/config/links-config.js)
 * -------------------------------------------------------------------------- */
// insert-class-links-config

/* -----------------------------------------------------------------------------
 * The Sources Class (classes/sources.js)
 * -------------------------------------------------------------------------- */
// insert-class-sources

/* -----------------------------------------------------------------------------
 * The Source Class (classes/source.js)
 * -------------------------------------------------------------------------- */
// insert-class-source-one

/* -----------------------------------------------------------------------------
 * The Categories Class (classes/categories.js)
 * -------------------------------------------------------------------------- */
// insert-class-categories

/* -----------------------------------------------------------------------------
 * The Category Class (classes/category.js)
 * -------------------------------------------------------------------------- */
// insert-class-category

/* -----------------------------------------------------------------------------
 * The SearchBar Class (classes/search-bar/search-bar.js)
 * -------------------------------------------------------------------------- */
// insert-class-search-bar-base

/* -----------------------------------------------------------------------------
 * The SearchBarElems Class (classes/search-bar/search-bar-elems.js)
 * -------------------------------------------------------------------------- */
// insert-class-search-bar-elems

/* -----------------------------------------------------------------------------
 * The Questions Class (classes/questions.js)
 * -------------------------------------------------------------------------- */
// insert-class-questions

/* -----------------------------------------------------------------------------
 * The Question Class (classes/question/question.js)
 * -------------------------------------------------------------------------- */
// insert-class-question-one

/* -----------------------------------------------------------------------------
 * The QuestionFormat Class (classes/question/question-format.js)
 * -------------------------------------------------------------------------- */
// insert-class-question-format

/* -----------------------------------------------------------------------------
 * The QuestionElem Class (classes/question/question-elem.js)
 * -------------------------------------------------------------------------- */
// insert-class-question-elem

/* -----------------------------------------------------------------------------
 * The Prettifier Module  (prettify.js)
 * -------------------------------------------------------------------------- */
// insert-prettifier

/* -----------------------------------------------------------------------------
 * The Events Class (classes/events.js)
 * -------------------------------------------------------------------------- */
// insert-class-events

////////////////////////////////////////////////////////////////////////////////
// The App Module End
////////////////////////////////////////////////////////////////////////////////

  return appModuleAPI;

})(window, document));
