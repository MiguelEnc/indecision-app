/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*global React, ReactDOM, localStorage */\n\nconsole.log(\"test\");\n/*\nclass IndecisionApp extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      options: props.options\n    };\n    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);\n    this.handleDeleteOption = this.handleDeleteOption.bind(this);\n    this.handleAddOption = this.handleAddOption.bind(this);\n    this.handlePick = this.handlePick.bind(this);\n  }\n  \n  componentDidMount() {\n    let json = JSON.parse(localStorage.getItem('options'));\n    if(json) {\n      this.setState(() => {\n        return {\n          options: json\n        }\n      });\n    }\n  }\n  \n  componentDidUpdate(prevProps, prevState) {\n    if(prevState.options.length !== this.state.options.length) {\n      let json = JSON.stringify(this.state.options);\n      localStorage.setItem('options', json);\n    }\n  }\n  \n  handleDeleteOptions() {\n    this.setState(() => {\n      return { options: [] }\n    });\n  }\n  \n  handleDeleteOption(optionToRemove) {\n    this.setState((prevState) => {\n      return {\n        options: prevState.options.filter((o) => o !== optionToRemove)\n      }\n    });\n  }\n  \n  handlePick() {\n    let selectedOption = Math.floor(Math.random() * this.state.options.length);\n    alert(this.state.options[selectedOption]);\n  }\n  \n  handleAddOption(option) {\n    if(!option) {\n      return 'Enter valid value';\n    } else if (this.state.options.indexOf(option) > -1) {\n      return 'This option already exists';\n    }\n    \n    this.setState((prevState) => {\n      return {\n        options: prevState.options.concat(option)\n      }\n    });\n  }\n  \n  render() {\n    const subtitle = \"I'll choose for you!\";\n    \n    return (\n      <div>\n        <Header subtitle={subtitle} />\n        <Action \n          hasOptions={this.state.options.length > 0} \n          handlePick={this.handlePick}\n        />\n        <Options \n          options={this.state.options} \n          handleDeleteOptions={this.handleDeleteOptions}\n          handleDeleteOption={this.handleDeleteOption}\n        />\n        <AddOption \n          handleAddOption={this.handleAddOption}\n        />\n      </div>\n    );\n  }\n}\nIndecisionApp.defaultProps = {\n  options: []\n};\n\n\n\n\nconst Header = (props) => {\n  return (\n    <div>\n      <h1>{props.title}</h1>\n      {props.subtitle && <h2>{props.subtitle}</h2>}\n    </div>\n  );\n}\nHeader.defaultProps = {\n  title: 'Indecision'\n};\n\n\nconst Action = (props) => {\n  return (\n    <div>\n      <button \n        onClick={props.handlePick}\n        disabled={!props.hasOptions}>\n        Choose an option\n      </button>\n    </div>\n  );\n}\n\n\nconst Options = (props) => {\n  return (\n    <div>\n      <button onClick={props.handleDeleteOptions}>Remove All</button>\n      {\n        props.options.map((option) => {\n          return <Option \n                    key={option} \n                    text={option}\n                    handleDeleteOption={props.handleDeleteOption} />\n        })\n      }\n    </div>\n  );\n}\n\n\nconst Option = (props) => {\n  return (\n    <div>\n      <p>{props.text}</p>\n      <button onClick={(e) => {\n        props.handleDeleteOption(props.text)\n      }}>\n        Remove\n      </button>\n    </div>\n  );\n}\n\n\nclass AddOption extends React.Component {\n  constructor(props) {\n    super(props);\n    this.onFormSubmit = this.onFormSubmit.bind(this);\n    this.state = {\n      error: undefined\n    }\n  }\n  \n  onFormSubmit(e) {\n    e.preventDefault();\n    \n    let option = e.target.elements.option.value.trim();\n    let error = this.props.handleAddOption(option);\n    \n    this.setState(() => {\n      return {\n        error: error\n      }\n    });\n    \n    e.target.elements.option.value = '';\n  }\n  \n  render() {\n    return (\n      <div>\n        {this.state.error && <p>{this.state.error}</p>}\n        <form onSubmit={this.onFormSubmit}>\n          <input type=\"text\" name=\"option\" />\n          <button>Add option</button>\n        </form>\n      </div>\n    );\n  }\n}\n\n\nReactDOM.render(\n  <IndecisionApp />, \n  document.getElementById(\"app\")\n);\n*/\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });