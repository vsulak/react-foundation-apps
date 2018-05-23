(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["RFA"] = factory(require("react"));
	else
		root["RFA"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  Accordion: __webpack_require__(1),
	  ActionSheet: __webpack_require__(5),
	  Iconic: __webpack_require__(12),
	  Interchange: __webpack_require__(14),
	  Modal: __webpack_require__(24),
	  Notification: __webpack_require__(29),
	  OffCanvas: __webpack_require__(33),
	  Panel: __webpack_require__(34),
	  Popup: __webpack_require__(35),
	  Tabs: __webpack_require__(37),
	  Trigger: __webpack_require__(39),
	};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);

	var Accordion = function (_React$Component) {
	  _inherits(Accordion, _React$Component);

	  function Accordion() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Accordion);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call.apply(_ref, [this].concat(args))), _this), _this.state = { sections: [] }, _this.select = function (selectSection) {
	      var sections = _this.state.sections;
	      sections.forEach(function (section, index) {
	        if (this.props.multiOpen) {
	          if (index === selectSection) {
	            section.active = !section.active;
	          }
	        } else {
	          if (index === selectSection) {
	            section.active = this.props.collapsible === true ? !section.active : true;
	          } else {
	            section.active = false;
	          }
	        }
	      }.bind(_this));
	      _this.setState({ sections: sections });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Accordion, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var sections = [];
	      React.Children.forEach(this.props.children, function (child, index) {
	        sections.push({ active: false });
	      });
	      if (this.props.autoOpen) {
	        sections[0].active = true;
	      }
	      this.setState({ sections: sections });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = React.Children.map(this.props.children, function (child, index) {
	        return React.cloneElement(child, {
	          active: this.state.sections[index] ? this.state.sections[index].active : false,
	          activate: this.select.bind(this, index)
	        });
	      }.bind(this));
	      return React.createElement(
	        'div',
	        { className: 'accordion' },
	        children
	      );
	    }
	  }]);

	  return Accordion;
	}(React.Component);

	Accordion.defaultProps = {
	  autoOpen: true,
	  multiOpen: false,
	  collapsible: false
	};
	exports.default = Accordion;

	Accordion.Item = __webpack_require__(3);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var classnames = __webpack_require__(4);

	var AccordionItem = function (_React$Component) {
	  _inherits(AccordionItem, _React$Component);

	  function AccordionItem() {
	    _classCallCheck(this, AccordionItem);

	    return _possibleConstructorReturn(this, (AccordionItem.__proto__ || Object.getPrototypeOf(AccordionItem)).apply(this, arguments));
	  }

	  _createClass(AccordionItem, [{
	    key: 'render',
	    value: function render() {
	      var itemClasses = {
	        'accordion-item': true,
	        'is-active': this.props.active
	      };
	      return React.createElement(
	        'div',
	        { className: classnames(itemClasses) },
	        React.createElement(
	          'div',
	          { className: 'accordion-title', onClick: this.props.activate },
	          this.props.title
	        ),
	        React.createElement(
	          'div',
	          { className: 'accordion-content' },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return AccordionItem;
	}(React.Component);

	module.exports = AccordionItem;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var foundationApi = __webpack_require__(6);

	var ActionSheet = function (_React$Component) {
	  _inherits(ActionSheet, _React$Component);

	  function ActionSheet() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ActionSheet);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).call.apply(_ref, [this].concat(args))), _this), _this.state = { active: false }, _this.setActiveState = function (active) {
	      _this.setState({ active: active });
	    }, _this.onBodyClick = function (e) {
	      var el = e.target;
	      var insideActionSheet = false;

	      do {
	        if (el.classList && el.classList.contains('action-sheet-container') && el.id === _this.props.id) {
	          insideActionSheet = true;
	          break;
	        }
	      } while (el = el.parentNode);

	      if (!insideActionSheet) {
	        _this.setActiveState(false);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ActionSheet, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.id) {
	        foundationApi.subscribe(this.props.id, function (name, msg) {
	          if (msg === 'open') {
	            this.setState({ active: true });
	          } else if (msg === 'close') {
	            this.setState({ active: false });
	          } else if (msg === 'toggle') {
	            this.setState({ active: !this.state.active });
	          }
	        }.bind(this));
	      }
	      document.body.addEventListener('click', this.onBodyClick);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.id) foundationApi.unsubscribe(this.props.id);
	      document.body.removeEventListener('click', this.onBodyClick);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = React.Children.map(this.props.children, function (child, index) {
	        var extraProps = { active: this.state.active };
	        if (child.type.displayName === 'ActionSheetButton') {
	          extraProps.setActiveState = this.setActiveState;
	        }
	        return React.cloneElement(child, extraProps);
	      }.bind(this));
	      return React.createElement(
	        'div',
	        { id: this.props.id, 'data-closable': true, className: 'action-sheet-container' },
	        children
	      );
	    }
	  }]);

	  return ActionSheet;
	}(React.Component);

	exports.default = ActionSheet;

	ActionSheet.Button = __webpack_require__(10);
	ActionSheet.Content = __webpack_require__(11);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//From https://github.com/zurb/foundation-apps/blob/master/js/angular/common/common.services.js
	var PubSub = __webpack_require__(7);
	var assign = __webpack_require__(9);

	var listeners = [];
	var settings = {};
	var uniqueIds = [];

	var foundationApi = {
	  subscribe: PubSub.subscribe,
	  publish: PubSub.publish,
	  unsubscribe: PubSub.unsubscribe,
	  closeActiveElements: function closeActiveElements(options) {
	    var self = this;
	    options = options || {};
	    var activeElements = document.querySelectorAll('.is-active[data-closable]');
	    Array.prototype.forEach.call(activeElements, function (el) {
	      if (options.exclude !== el.id) {
	        self.publish(el.id, 'close');
	      }
	    });
	  },
	  getSettings: function getSettings() {
	    return settings;
	  },
	  modifySettings: function modifySettings(tree) {
	    settings = assign(settings, tree);
	    return settings;
	  },
	  generateUuid: function generateUuid() {
	    var uuid = '';

	    //little trick to produce semi-random IDs
	    do {
	      uuid += 'zf-uuid-';
	      for (var i = 0; i < 15; i++) {
	        uuid += Math.floor(Math.random() * 16).toString(16);
	      }
	    } while (!uniqueIds.indexOf(uuid));

	    uniqueIds.push(uuid);
	    return uuid;
	  }
	};

	module.exports = foundationApi;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*
	Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
	License: MIT - http://mrgnrdrck.mit-license.org

	https://github.com/mroderick/PubSubJS
	*/
	(function (root, factory){
	    'use strict';

	    var PubSub = {};
	    root.PubSub = PubSub;

	    var define = root.define;

	    factory(PubSub);

	    // AMD support
	    if (typeof define === 'function' && define.amd){
	        define(function() { return PubSub; });

	        // CommonJS and Node.js module support
	    } else if (true){
	        if (module !== undefined && module.exports) {
	            exports = module.exports = PubSub; // Node.js specific `module.exports`
	        }
	        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
	        module.exports = exports = PubSub; // CommonJS
	    }

	}(( typeof window === 'object' && window ) || this, function (PubSub){
	    'use strict';

	    var messages = {},
	        lastUid = -1;

	    function hasKeys(obj){
	        var key;

	        for (key in obj){
	            if ( obj.hasOwnProperty(key) ){
	                return true;
	            }
	        }
	        return false;
	    }

	    /**
		 *	Returns a function that throws the passed exception, for use as argument for setTimeout
		 *	@param { Object } ex An Error object
		 */
	    function throwException( ex ){
	        return function reThrowException(){
	            throw ex;
	        };
	    }

	    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
	        try {
	            subscriber( message, data );
	        } catch( ex ){
	            setTimeout( throwException( ex ), 0);
	        }
	    }

	    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
	        subscriber( message, data );
	    }

	    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
	        var subscribers = messages[matchedMessage],
	            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
	            s;

	        if ( !messages.hasOwnProperty( matchedMessage ) ) {
	            return;
	        }

	        for (s in subscribers){
	            if ( subscribers.hasOwnProperty(s)){
	                callSubscriber( subscribers[s], originalMessage, data );
	            }
	        }
	    }

	    function createDeliveryFunction( message, data, immediateExceptions ){
	        return function deliverNamespaced(){
	            var topic = String( message ),
	                position = topic.lastIndexOf( '.' );

	            // deliver the message as it is now
	            deliverMessage(message, message, data, immediateExceptions);

	            // trim the hierarchy and deliver message to each level
	            while( position !== -1 ){
	                topic = topic.substr( 0, position );
	                position = topic.lastIndexOf('.');
	                deliverMessage( message, topic, data, immediateExceptions );
	            }
	        };
	    }

	    function messageHasSubscribers( message ){
	        var topic = String( message ),
	            found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic])),
	            position = topic.lastIndexOf( '.' );

	        while ( !found && position !== -1 ){
	            topic = topic.substr( 0, position );
	            position = topic.lastIndexOf( '.' );
	            found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic]));
	        }

	        return found;
	    }

	    function publish( message, data, sync, immediateExceptions ){
	        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
	            hasSubscribers = messageHasSubscribers( message );

	        if ( !hasSubscribers ){
	            return false;
	        }

	        if ( sync === true ){
	            deliver();
	        } else {
	            setTimeout( deliver, 0 );
	        }
	        return true;
	    }

	    /**
		 *	PubSub.publish( message[, data] ) -> Boolean
		 *	- message (String): The message to publish
		 *	- data: The data to pass to subscribers
		 *	Publishes the the message, passing the data to it's subscribers
		**/
	    PubSub.publish = function( message, data ){
	        return publish( message, data, false, PubSub.immediateExceptions );
	    };

	    /**
		 *	PubSub.publishSync( message[, data] ) -> Boolean
		 *	- message (String): The message to publish
		 *	- data: The data to pass to subscribers
		 *	Publishes the the message synchronously, passing the data to it's subscribers
		**/
	    PubSub.publishSync = function( message, data ){
	        return publish( message, data, true, PubSub.immediateExceptions );
	    };

	    /**
		 *	PubSub.subscribe( message, func ) -> String
		 *	- message (String): The message to subscribe to
		 *	- func (Function): The function to call when a new message is published
		 *	Subscribes the passed function to the passed message. Every returned token is unique and should be stored if
		 *	you need to unsubscribe
		**/
	    PubSub.subscribe = function( message, func ){
	        if ( typeof func !== 'function'){
	            return false;
	        }

	        // message is not registered yet
	        if ( !messages.hasOwnProperty( message ) ){
	            messages[message] = {};
	        }

	        // forcing token as String, to allow for future expansions without breaking usage
	        // and allow for easy use as key names for the 'messages' object
	        var token = 'uid_' + String(++lastUid);
	        messages[message][token] = func;

	        // return token for unsubscribing
	        return token;
	    };

	    /**
		 *	PubSub.subscribeOnce( message, func ) -> PubSub
		 *	- message (String): The message to subscribe to
		 *	- func (Function): The function to call when a new message is published
		 *	Subscribes the passed function to the passed message once
		**/
	    PubSub.subscribeOnce = function( message, func ){
	        var token = PubSub.subscribe( message, function(){
	            // before func apply, unsubscribe message
	            PubSub.unsubscribe( token );
	            func.apply( this, arguments );
	        });
	        return PubSub;
	    };

	    /* Public: Clears all subscriptions
		 */
	    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
	        messages = {};
	    };

	    /*Public: Clear subscriptions by the topic
		*/
	    PubSub.clearSubscriptions = function clearSubscriptions(topic){
	        var m;
	        for (m in messages){
	            if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){
	                delete messages[m];
	            }
	        }
	    };

	    /* Public: removes subscriptions.
		 * When passed a token, removes a specific subscription.
		 * When passed a function, removes all subscriptions for that function
		 * When passed a topic, removes all subscriptions for that topic (hierarchy)
		 *
		 * value - A token, function or topic to unsubscribe.
		 *
		 * Examples
		 *
		 *		// Example 1 - unsubscribing with a token
		 *		var token = PubSub.subscribe('mytopic', myFunc);
		 *		PubSub.unsubscribe(token);
		 *
		 *		// Example 2 - unsubscribing with a function
		 *		PubSub.unsubscribe(myFunc);
		 *
		 *		// Example 3 - unsubscribing a topic
		 *		PubSub.unsubscribe('mytopic');
		 */
	    PubSub.unsubscribe = function(value){
	        var descendantTopicExists = function(topic) {
	                var m;
	                for ( m in messages ){
	                    if ( messages.hasOwnProperty(m) && m.indexOf(topic) === 0 ){
	                        // a descendant of the topic exists:
	                        return true;
	                    }
	                }

	                return false;
	            },
	            isTopic    = typeof value === 'string' && ( messages.hasOwnProperty(value) || descendantTopicExists(value) ),
	            isToken    = !isTopic && typeof value === 'string',
	            isFunction = typeof value === 'function',
	            result = false,
	            m, message, t;

	        if (isTopic){
	            PubSub.clearSubscriptions(value);
	            return;
	        }

	        for ( m in messages ){
	            if ( messages.hasOwnProperty( m ) ){
	                message = messages[m];

	                if ( isToken && message[value] ){
	                    delete message[value];
	                    result = value;
	                    // tokens are unique, so we can just stop here
	                    break;
	                }

	                if (isFunction) {
	                    for ( t in message ){
	                        if (message.hasOwnProperty(t) && message[t] === value){
	                            delete message[t];
	                            result = true;
	                        }
	                    }
	                }
	            }
	        }

	        return result;
	    };
	}));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);

	var ActionSheetButton = function (_React$Component) {
	  _inherits(ActionSheetButton, _React$Component);

	  function ActionSheetButton() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ActionSheetButton);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActionSheetButton.__proto__ || Object.getPrototypeOf(ActionSheetButton)).call.apply(_ref, [this].concat(args))), _this), _this.toggle = function () {
	      _this.props.setActiveState(!_this.props.active);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ActionSheetButton, [{
	    key: 'render',
	    value: function render() {
	      var Title = null;
	      if (this.props.title.length > 0) {
	        Title = React.createElement(
	          'a',
	          { className: 'button' },
	          this.props.title
	        );
	      }
	      return React.createElement(
	        'div',
	        { onClick: this.toggle },
	        Title,
	        React.createElement(
	          'div',
	          null,
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return ActionSheetButton;
	}(React.Component);

	ActionSheetButton.displayName = "ActionSheetButton";


	module.exports = ActionSheetButton;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var classnames = __webpack_require__(4);

	var ActionSheetContent = function (_React$Component) {
	  _inherits(ActionSheetContent, _React$Component);

	  function ActionSheetContent() {
	    _classCallCheck(this, ActionSheetContent);

	    return _possibleConstructorReturn(this, (ActionSheetContent.__proto__ || Object.getPrototypeOf(ActionSheetContent)).apply(this, arguments));
	  }

	  _createClass(ActionSheetContent, [{
	    key: 'render',
	    value: function render() {
	      var classes = {
	        'action-sheet': true,
	        'is-active': this.props.active
	      };
	      return React.createElement(
	        'div',
	        { className: classnames(classes) },
	        this.props.children
	      );
	    }
	  }]);

	  return ActionSheetContent;
	}(React.Component);

	ActionSheetContent.defaultProps = { position: 'bottom' };


	module.exports = ActionSheetContent;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ExecutionEnvironment = __webpack_require__(13);
	var IconicJs = ExecutionEnvironment.canUseDOM && __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../vendor/iconic.min\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var Iconic = function (_React$Component) {
	  _inherits(Iconic, _React$Component);

	  function Iconic() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Iconic);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Iconic.__proto__ || Object.getPrototypeOf(Iconic)).call.apply(_ref, [this].concat(args))), _this), _this.inject = function () {
	      var ico = IconicJs();
	      ico.inject(ReactDOM.findDOMNode(_this));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Iconic, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.inject();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.inject();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.Children.only(this.props.children);
	    }
	  }]);

	  return Iconic;
	}(React.Component);

	module.exports = Iconic;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var createReactClass = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"create-react-class\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var ResponsiveMixin = __webpack_require__(15);

	var namedQueries = {
	  // small: '(min-width: 0) and  (max-width: 640px)',
	  // medium: '(min-width: 641px) and  (max-width: 1200px)',
	  // large: '(min-width: 1201px) and  (max-width: 1440px)',
	  // 'default' : 'only screen',
	  // landscape : 'only screen and (orientation: landscape)',
	  // portrait : 'only screen and (orientation: portrait)',
	  // retina : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +
	  //   'only screen and (min--moz-device-pixel-ratio: 2),' +
	  //   'only screen and (-o-min-device-pixel-ratio: 2/1),' +
	  //   'only screen and (min-device-pixel-ratio: 2),' +
	  //   'only screen and (min-resolution: 192dpi),' +
	  //   'only screen and (min-resolution: 2dppx)'
	};

	var Interchange = createReactClass({
	  displayName: 'Interchange',
	  mixins: [ResponsiveMixin],

	  getInitialState: function getInitialState() {
	    return { matchedMedia: 'large' };
	  },

	  componentDidMount: function componentDidMount() {
	    // for (var name in namedQueries) {
	    //   this.media(namedQueries[name], function () {
	    //     this.setState({matchedMedia: name});
	    //   }.bind(this));
	    // }
	    this.media({ minWidth: 0, maxWidth: 640 }, function () {
	      this.setState({ matchedMedia: 'small' });
	    }.bind(this));
	    this.media({ minWidth: 641, maxWidth: 1200 }, function () {
	      this.setState({ matchedMedia: 'medium' });
	    }.bind(this));
	    this.media({ minWidth: 1200, maxWidth: 1440 }, function () {
	      this.setState({ matchedMedia: 'large' });
	    }.bind(this));
	  },

	  render: function render() {
	    var matchedNode = null;
	    React.Children.forEach(this.props.children, function (child) {
	      if (child.props.media === this.state.matchedMedia) {
	        matchedNode = child;
	      }
	    }.bind(this));
	    return matchedNode;
	  }
	});

	module.exports = Interchange;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var canUseDOM = __webpack_require__(16);
	var enquire = canUseDOM && __webpack_require__(17);
	var json2mq = __webpack_require__(22);

	var ResponsiveMixin = {
	  media: function (query, handler) {
	    query = json2mq(query);
	    if (typeof handler === 'function') {
	      handler = {
	        match: handler
	      };
	    }
	    enquire.register(query, handler);

	    // Queue the handlers to unregister them at unmount  
	    if (! this._responsiveMediaHandlers) {
	      this._responsiveMediaHandlers = [];
	    }
	    this._responsiveMediaHandlers.push({query: query, handler: handler});
	  },
	  componentWillUnmount: function () {
	    if (this._responsiveMediaHandlers) {
	      this._responsiveMediaHandlers.forEach(function(obj) {
	        enquire.unregister(obj.query, obj.handler);
	      });
	    }
	  }
	};

	module.exports = ResponsiveMixin;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	var canUseDOM = !!(
	  typeof window !== 'undefined' &&
	  window.document &&
	  window.document.createElement
	);

	module.exports = canUseDOM;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var MediaQueryDispatch = __webpack_require__(18);
	module.exports = new MediaQueryDispatch();


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var MediaQuery = __webpack_require__(19);
	var Util = __webpack_require__(21);
	var each = Util.each;
	var isFunction = Util.isFunction;
	var isArray = Util.isArray;

	/**
	 * Allows for registration of query handlers.
	 * Manages the query handler's state and is responsible for wiring up browser events
	 *
	 * @constructor
	 */
	function MediaQueryDispatch () {
	    if(!window.matchMedia) {
	        throw new Error('matchMedia not present, legacy browsers require a polyfill');
	    }

	    this.queries = {};
	    this.browserIsIncapable = !window.matchMedia('only all').matches;
	}

	MediaQueryDispatch.prototype = {

	    constructor : MediaQueryDispatch,

	    /**
	     * Registers a handler for the given media query
	     *
	     * @param {string} q the media query
	     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
	     * @param {function} options.match fired when query matched
	     * @param {function} [options.unmatch] fired when a query is no longer matched
	     * @param {function} [options.setup] fired when handler first triggered
	     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
	     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
	     */
	    register : function(q, options, shouldDegrade) {
	        var queries         = this.queries,
	            isUnconditional = shouldDegrade && this.browserIsIncapable;

	        if(!queries[q]) {
	            queries[q] = new MediaQuery(q, isUnconditional);
	        }

	        //normalise to object in an array
	        if(isFunction(options)) {
	            options = { match : options };
	        }
	        if(!isArray(options)) {
	            options = [options];
	        }
	        each(options, function(handler) {
	            if (isFunction(handler)) {
	                handler = { match : handler };
	            }
	            queries[q].addHandler(handler);
	        });

	        return this;
	    },

	    /**
	     * unregisters a query and all it's handlers, or a specific handler for a query
	     *
	     * @param {string} q the media query to target
	     * @param {object || function} [handler] specific handler to unregister
	     */
	    unregister : function(q, handler) {
	        var query = this.queries[q];

	        if(query) {
	            if(handler) {
	                query.removeHandler(handler);
	            }
	            else {
	                query.clear();
	                delete this.queries[q];
	            }
	        }

	        return this;
	    }
	};

	module.exports = MediaQueryDispatch;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var QueryHandler = __webpack_require__(20);
	var each = __webpack_require__(21).each;

	/**
	 * Represents a single media query, manages it's state and registered handlers for this query
	 *
	 * @constructor
	 * @param {string} query the media query string
	 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
	 */
	function MediaQuery(query, isUnconditional) {
	    this.query = query;
	    this.isUnconditional = isUnconditional;
	    this.handlers = [];
	    this.mql = window.matchMedia(query);

	    var self = this;
	    this.listener = function(mql) {
	        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
	        self.mql = mql.currentTarget || mql;
	        self.assess();
	    };
	    this.mql.addListener(this.listener);
	}

	MediaQuery.prototype = {

	    constuctor : MediaQuery,

	    /**
	     * add a handler for this query, triggering if already active
	     *
	     * @param {object} handler
	     * @param {function} handler.match callback for when query is activated
	     * @param {function} [handler.unmatch] callback for when query is deactivated
	     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
	     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
	     */
	    addHandler : function(handler) {
	        var qh = new QueryHandler(handler);
	        this.handlers.push(qh);

	        this.matches() && qh.on();
	    },

	    /**
	     * removes the given handler from the collection, and calls it's destroy methods
	     *
	     * @param {object || function} handler the handler to remove
	     */
	    removeHandler : function(handler) {
	        var handlers = this.handlers;
	        each(handlers, function(h, i) {
	            if(h.equals(handler)) {
	                h.destroy();
	                return !handlers.splice(i,1); //remove from array and exit each early
	            }
	        });
	    },

	    /**
	     * Determine whether the media query should be considered a match
	     *
	     * @return {Boolean} true if media query can be considered a match, false otherwise
	     */
	    matches : function() {
	        return this.mql.matches || this.isUnconditional;
	    },

	    /**
	     * Clears all handlers and unbinds events
	     */
	    clear : function() {
	        each(this.handlers, function(handler) {
	            handler.destroy();
	        });
	        this.mql.removeListener(this.listener);
	        this.handlers.length = 0; //clear array
	    },

	    /*
	        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
	        */
	    assess : function() {
	        var action = this.matches() ? 'on' : 'off';

	        each(this.handlers, function(handler) {
	            handler[action]();
	        });
	    }
	};

	module.exports = MediaQuery;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	/**
	 * Delegate to handle a media query being matched and unmatched.
	 *
	 * @param {object} options
	 * @param {function} options.match callback for when the media query is matched
	 * @param {function} [options.unmatch] callback for when the media query is unmatched
	 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
	 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
	 * @constructor
	 */
	function QueryHandler(options) {
	    this.options = options;
	    !options.deferSetup && this.setup();
	}

	QueryHandler.prototype = {

	    constructor : QueryHandler,

	    /**
	     * coordinates setup of the handler
	     *
	     * @function
	     */
	    setup : function() {
	        if(this.options.setup) {
	            this.options.setup();
	        }
	        this.initialised = true;
	    },

	    /**
	     * coordinates setup and triggering of the handler
	     *
	     * @function
	     */
	    on : function() {
	        !this.initialised && this.setup();
	        this.options.match && this.options.match();
	    },

	    /**
	     * coordinates the unmatch event for the handler
	     *
	     * @function
	     */
	    off : function() {
	        this.options.unmatch && this.options.unmatch();
	    },

	    /**
	     * called when a handler is to be destroyed.
	     * delegates to the destroy or unmatch callbacks, depending on availability.
	     *
	     * @function
	     */
	    destroy : function() {
	        this.options.destroy ? this.options.destroy() : this.off();
	    },

	    /**
	     * determines equality by reference.
	     * if object is supplied compare options, if function, compare match callback
	     *
	     * @function
	     * @param {object || function} [target] the target for comparison
	     */
	    equals : function(target) {
	        return this.options === target || this.options.match === target;
	    }

	};

	module.exports = QueryHandler;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	/**
	 * Helper function for iterating over a collection
	 *
	 * @param collection
	 * @param fn
	 */
	function each(collection, fn) {
	    var i      = 0,
	        length = collection.length,
	        cont;

	    for(i; i < length; i++) {
	        cont = fn(collection[i], i);
	        if(cont === false) {
	            break; //allow early exit
	        }
	    }
	}

	/**
	 * Helper function for determining whether target object is an array
	 *
	 * @param target the object under test
	 * @return {Boolean} true if array, false otherwise
	 */
	function isArray(target) {
	    return Object.prototype.toString.apply(target) === '[object Array]';
	}

	/**
	 * Helper function for determining whether target object is a function
	 *
	 * @param target the object under test
	 * @return {Boolean} true if function, false otherwise
	 */
	function isFunction(target) {
	    return typeof target === 'function';
	}

	module.exports = {
	    isFunction : isFunction,
	    isArray : isArray,
	    each : each
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var camel2hyphen = __webpack_require__(23);

	var isDimension = function (feature) {
	  var re = /[height|width]$/;
	  return re.test(feature);
	};

	var obj2mq = function (obj) {
	  var mq = '';
	  var features = Object.keys(obj);
	  features.forEach(function (feature, index) {
	    var value = obj[feature];
	    feature = camel2hyphen(feature);
	    // Add px to dimension features
	    if (isDimension(feature) && typeof value === 'number') {
	      value = value + 'px';
	    }
	    if (value === true) {
	      mq += feature;
	    } else if (value === false) {
	      mq += 'not ' + feature;
	    } else {
	      mq += '(' + feature + ': ' + value + ')';
	    }
	    if (index < features.length-1) {
	      mq += ' and '
	    }
	  });
	  return mq;
	};

	var json2mq = function (query) {
	  var mq = '';
	  if (typeof query === 'string') {
	    return query;
	  }
	  // Handling array of media queries
	  if (query instanceof Array) {
	    query.forEach(function (q, index) {
	      mq += obj2mq(q);
	      if (index < query.length-1) {
	        mq += ', '
	      }
	    });
	    return mq;
	  }
	  // Handling single media query
	  return obj2mq(query);
	};

	module.exports = json2mq;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	var camel2hyphen = function (str) {
	  return str
	          .replace(/[A-Z]/g, function (match) {
	            return '-' + match.toLowerCase();
	          })
	          .toLowerCase();
	};

	module.exports = camel2hyphen;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var Animation = __webpack_require__(25);
	var foundationApi = __webpack_require__(6);

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  function Modal() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Modal);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.state = { open: false }, _this.hideOverlay = function (e) {
	      e.preventDefault();
	      if (_this.props.overlayClose) {
	        _this.setState({ open: false });
	        if (_this.props.onClose) _this.props.onClose();
	      }
	    }, _this.stopClickPropagation = function (e) {
	      e.preventDefault();
	      e.stopPropagation();
	    }, _this.subscribe = function (id) {
	      foundationApi.subscribe(id, function (name, msg) {
	        if (msg === 'open') {
	          this.setState({ open: true });
	        } else if (msg === 'close') {
	          this.setState({ open: false });
	          if (this.props.onClose) this.props.onClose();
	        } else if (msg === 'toggle') {
	          this.setState({ open: !this.state.open });
	          if (!this.state.open && this.props.onClose) this.props.onClose();
	        }
	      }.bind(_this));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.subscribe(this.props.id);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      foundationApi.unsubscribe(this.props.id);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.id !== this.props.id) {
	        foundationApi.unsubscribe(this.props.id);
	        this.subscribe(nextProps.id);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var overlayStyle = {};
	      if (!this.props.overlay) {
	        overlayStyle.background = 'transparent';
	      }
	      return React.createElement(
	        Animation,
	        { active: this.state.open, animationIn: 'fadeIn', animationOut: 'fadeOut' },
	        React.createElement(
	          'div',
	          { className: 'modal-overlay', style: overlayStyle, onClick: this.hideOverlay },
	          React.createElement(
	            Animation,
	            {
	              active: this.state.open,
	              animationIn: this.props.animationIn,
	              animationOut: this.props.animationOut
	            },
	            React.createElement(
	              'div',
	              { id: this.props.id, 'data-closable': true, className: 'modal', onClick: this.stopClickPropagation },
	              this.props.children
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Modal;
	}(React.Component);

	Modal.defaultProps = {
	  overlay: true,
	  overlayClose: true,
	  animationIn: 'fadeIn',
	  animationOut: 'fadeOut',
	  onClose: null
	};
	exports.default = Modal;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ReactTransitionEvents = __webpack_require__(26);

	var _ReactTransitionEvents2 = _interopRequireDefault(_ReactTransitionEvents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// some parts of code from react/lib/ReactCSSTransitionGroupChild.js
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var CSSCore = __webpack_require__(28);

	var classnames = __webpack_require__(4);
	var TICK = 17;

	var Animation = function (_React$Component) {
	  _inherits(Animation, _React$Component);

	  function Animation() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Animation);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Animation.__proto__ || Object.getPrototypeOf(Animation)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.reflow = function (node) {
	      return node.offsetWidth;
	    }, _this.reset = function (node) {
	      node.style.transitionDuration = 0;
	      CSSCore.removeClass(node, 'ng-enter');
	      CSSCore.removeClass(node, 'ng-leave');
	      CSSCore.removeClass(node, 'ng-enter-active');
	      CSSCore.removeClass(node, 'ng-leave-active');
	      CSSCore.removeClass(node, _this.props.animationIn);
	      CSSCore.removeClass(node, _this.props.animationOut);
	    }, _this.finishAnimation = function () {
	      var node = ReactDOM.findDOMNode(_this);
	      _this.reset(node);
	      CSSCore.removeClass(node, _this.props.active ? '' : 'is-active');
	      _this.reflow(node);
	      _ReactTransitionEvents2.default.removeEndEventListener(node, _this.finishAnimation);
	    }, _this.animate = function (animationClass, animationType) {
	      var node = ReactDOM.findDOMNode(_this);
	      var initClass = 'ng-' + animationType;
	      var activeClass = initClass + '-active';

	      _this.reset(node);
	      CSSCore.addClass(node, animationClass);
	      CSSCore.addClass(node, initClass);
	      CSSCore.addClass(node, 'is-active');

	      //force a "tick"
	      _this.reflow(node);

	      //activate
	      node.style.transitionDuration = '';
	      CSSCore.addClass(node, activeClass);

	      _ReactTransitionEvents2.default.addEndEventListener(node, _this.finishAnimation);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Animation, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (prevProps.active !== this.props.active) {
	        var animationClass = this.props.active ? this.props.animationIn : this.props.animationOut;
	        var animationType = this.props.active ? 'enter' : 'leave';
	        this.animate(animationClass, animationType);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var child = React.Children.only(this.props.children);
	      var extraProps = {};
	      return React.cloneElement(child, extraProps);
	    }
	  }]);

	  return Animation;
	}(React.Component);

	Animation.defaultProps = {
	  active: false,
	  animationIn: '',
	  animationOut: ''
	};
	exports.default = Animation;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @providesModule ReactTransitionEvents
	 */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ExecutionEnvironment = __webpack_require__(13);

	var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

	var _getVendorPrefixedEventName = __webpack_require__(27);

	var _getVendorPrefixedEventName2 = _interopRequireDefault(_getVendorPrefixedEventName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var endEvents = [];

	function detectEvents() {
	  var animEnd = (0, _getVendorPrefixedEventName2.default)('animationend');
	  var transEnd = (0, _getVendorPrefixedEventName2.default)('transitionend');

	  if (animEnd) {
	    endEvents.push(animEnd);
	  }

	  if (transEnd) {
	    endEvents.push(transEnd);
	  }
	}

	if (_ExecutionEnvironment2.default.canUseDOM) {
	  detectEvents();
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var ReactTransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	exports.default = ReactTransitionEvents;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ExecutionEnvironment = __webpack_require__(13);

	var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
	 *
	 * @param {string} styleProp
	 * @param {string} eventName
	 * @returns {object}
	 */
	function makePrefixMap(styleProp, eventName) {
	  var prefixes = {};

	  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
	  prefixes['Webkit' + styleProp] = 'webkit' + eventName;
	  prefixes['Moz' + styleProp] = 'moz' + eventName;
	  prefixes['ms' + styleProp] = 'MS' + eventName;
	  prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

	  return prefixes;
	}

	/**
	 * A list of event names to a configurable list of vendor prefixes.
	 */
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var vendorPrefixes = {
	  animationend: makePrefixMap('Animation', 'AnimationEnd'),
	  animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
	  animationstart: makePrefixMap('Animation', 'AnimationStart'),
	  transitionend: makePrefixMap('Transition', 'TransitionEnd')
	};

	/**
	 * Event names that have already been detected and prefixed (if applicable).
	 */
	var prefixedEventNames = {};

	/**
	 * Element to check for prefixes on.
	 */
	var style = {};

	/**
	 * Bootstrap if a DOM exists.
	 */
	if (_ExecutionEnvironment2.default.canUseDOM) {
	  style = document.createElement('div').style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are usable, and if not remove them from the map.
	  if (!('AnimationEvent' in window)) {
	    delete vendorPrefixes.animationend.animation;
	    delete vendorPrefixes.animationiteration.animation;
	    delete vendorPrefixes.animationstart.animation;
	  }

	  // Same as above
	  if (!('TransitionEvent' in window)) {
	    delete vendorPrefixes.transitionend.transition;
	  }
	}

	/**
	 * Attempts to determine the correct vendor prefixed event name.
	 *
	 * @param {string} eventName
	 * @returns {string}
	 */
	function getVendorPrefixedEventName(eventName) {
	  if (prefixedEventNames[eventName]) {
	    return prefixedEventNames[eventName];
	  } else if (!vendorPrefixes[eventName]) {
	    return eventName;
	  }

	  var prefixMap = vendorPrefixes[eventName];

	  for (var styleProp in prefixMap) {
	    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
	      return prefixedEventNames[eventName] = prefixMap[styleProp];
	    }
	  }

	  return eventName;
	}

	exports.default = getVendorPrefixedEventName;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	var SPACE = ' ';
	var RE_CLASS = /[\n\t\r]/g;

	var norm = function norm(elemClass) {
	  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
	};

	module.exports = {
	  addClass: function addClass(elem, className) {
	    elem.className += ' ' + className;
	  },
	  removeClass: function removeClass(elem, needle) {
	    var elemClass = elem.className.trim();
	    var className = norm(elemClass);
	    needle = needle.trim();
	    needle = SPACE + needle + SPACE;
	    while (className.indexOf(needle) >= 0) {
	      className = className.replace(needle, SPACE);
	    }
	    elem.className = className.trim();
	  }
	};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  Set: __webpack_require__(30),
	  Static: __webpack_require__(32)
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var foundationApi = __webpack_require__(6);
	var Notification = __webpack_require__(31);
	var Animation = __webpack_require__(25);

	var NotificationSet = function (_React$Component) {
	  _inherits(NotificationSet, _React$Component);

	  function NotificationSet() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, NotificationSet);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotificationSet.__proto__ || Object.getPrototypeOf(NotificationSet)).call.apply(_ref, [this].concat(args))), _this), _this.state = { notifications: [] }, _this.addNotification = function (notification) {
	      notification.id = foundationApi.generateUuid();
	      var notifications = _this.state.notifications.concat(notification);
	      _this.setState({
	        notifications: notifications
	      });
	    }, _this.removeNotifcation = function (id) {
	      return function (e) {
	        var notifications = [];
	        this.state.notifications.forEach(function (notification) {
	          if (notification.id !== id) {
	            notifications.push(notification);
	          }
	        });
	        this.setState({
	          notifications: notifications
	        });
	        e.preventDefault();
	      }.bind(_this);
	    }, _this.clearAll = function () {
	      _this.setState({ notifications: [] });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(NotificationSet, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      foundationApi.subscribe(this.props.id, function (name, msg) {
	        if (msg === 'clearall') {
	          this.clearAll();
	        } else {
	          this.addNotification(msg);
	        }
	      }.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var notifications = this.state.notifications.map(function (notification) {
	        return React.createElement(
	          Notification,
	          _extends({ key: notification.id }, notification, { closeHandler: this.removeNotifcation(notification.id), className: 'is-active' }),
	          notification.content
	        );
	      }.bind(this));
	      return React.createElement(
	        'div',
	        null,
	        notifications
	      );
	    }
	  }]);

	  return NotificationSet;
	}(React.Component);

	module.exports = NotificationSet;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);

	var Notification = function (_React$Component) {
	  _inherits(Notification, _React$Component);

	  function Notification() {
	    _classCallCheck(this, Notification);

	    return _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).apply(this, arguments));
	  }

	  _createClass(Notification, [{
	    key: 'render',
	    value: function render() {
	      var classes = 'notification ' + this.props.position + ' ' + this.props.color;
	      classes += ' ' + (this.props.className || '');
	      var imageNode = null;
	      if (this.props.image) {
	        imageNode = React.createElement(
	          'div',
	          { className: 'notification-icon' },
	          React.createElement('img', { src: '{{ image }}' })
	        );
	      }
	      return React.createElement(
	        'div',
	        { id: this.props.id, 'data-closable': true, className: classes },
	        React.createElement(
	          'a',
	          { href: '#', className: 'close-button', onClick: this.props.closeHandler },
	          '\xD7'
	        ),
	        imageNode,
	        React.createElement(
	          'div',
	          { className: 'notification-content' },
	          React.createElement(
	            'h1',
	            null,
	            this.props.title
	          ),
	          React.createElement(this.props.wrapperElement, null, this.props.children)
	        )
	      );
	    }
	  }]);

	  return Notification;
	}(React.Component);

	Notification.defaultProps = {
	  position: 'top-right',
	  color: 'success',
	  title: null,
	  image: null,
	  content: null,
	  wrapperElement: "p"
	};
	exports.default = Notification;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var classnames = __webpack_require__(4);
	var foundationApi = __webpack_require__(6);
	var Animation = __webpack_require__(25);
	var Notification = __webpack_require__(31);

	var NotificationStatic = function (_React$Component) {
	  _inherits(NotificationStatic, _React$Component);

	  function NotificationStatic() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, NotificationStatic);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotificationStatic.__proto__ || Object.getPrototypeOf(NotificationStatic)).call.apply(_ref, [this].concat(args))), _this), _this.state = { open: false }, _this.closeHandler = function (e) {
	      _this.setState({ open: false });
	      e.preventDefault();
	      e.stopPropagation();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(NotificationStatic, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      foundationApi.subscribe(this.props.id, function (name, msg) {
	        if (msg === 'open') {
	          this.setState({ open: true });
	        } else if (msg === 'close') {
	          this.setState({ open: false });
	        }
	      }.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      foundationApi.unsubscribe(this.props.id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Animation,
	        { active: this.state.open, animationIn: 'fadeIn', animationOut: 'fadeOut' },
	        React.createElement(
	          Notification,
	          _extends({}, this.props, { closeHandler: this.closeHandler }),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return NotificationStatic;
	}(React.Component);

	module.exports = NotificationStatic;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var classnames = __webpack_require__(4);
	// var LayerMixin = require('react-layer-mixin');
	var foundationApi = __webpack_require__(6);

	var Offcanvas = function (_React$Component) {
	  _inherits(Offcanvas, _React$Component);

	  function Offcanvas() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Offcanvas);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Offcanvas.__proto__ || Object.getPrototypeOf(Offcanvas)).call.apply(_ref, [this].concat(args))), _this), _this.state = { open: false }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  // mixins: [LayerMixin],


	  _createClass(Offcanvas, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      foundationApi.subscribe(this.props.id, function (name, msg) {
	        if (msg === 'open') {
	          this.setState({ open: true });
	        } else if (msg === 'close') {
	          this.setState({ open: false });
	        } else if (msg === 'toggle') {
	          this.setState({ open: !this.state.open });
	        }
	      }.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      foundationApi.unsubscribe(this.props.id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = {
	        'off-canvas': true,
	        'is-active': this.state.open
	      };
	      classes[this.props.position] = true;
	      if (this.props.className) {
	        classes[this.props.className] = true;
	      }
	      return React.createElement(
	        'div',
	        { id: this.props.id, 'data-closable': true, className: classnames(classes) },
	        this.props.children
	      );
	    }
	  }]);

	  return Offcanvas;
	}(React.Component);

	Offcanvas.defaultProps = {
	  position: 'left'
	};


	module.exports = Offcanvas;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var classnames = __webpack_require__(4);
	var Animation = __webpack_require__(25);
	var foundationApi = __webpack_require__(6);

	var Panel = function (_React$Component) {
	  _inherits(Panel, _React$Component);

	  function Panel() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Panel);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Panel.__proto__ || Object.getPrototypeOf(Panel)).call.apply(_ref, [this].concat(args))), _this), _this.state = { open: false }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Panel, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      foundationApi.subscribe(this.props.id, function (name, msg) {
	        if (msg === 'open') {
	          this.setState({ open: true });
	        } else if (msg === 'close') {
	          this.setState({ open: false });
	        } else if (msg === 'toggle') {
	          this.setState({ open: !this.state.open });
	        }
	      }.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      foundationApi.unsubscribe(this.props.id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var animationIn, animationOut;
	      var classes = 'panel panel-' + this.props.position;
	      if (this.props.className) {
	        classes += ' ' + this.props.className;
	      }
	      if (this.props.position === 'left') {
	        animationIn = this.props.animationIn || 'slideInRight';
	        animationOut = this.props.animationOut || 'slideOutLeft';
	      } else if (this.props.position === 'right') {
	        animationIn = this.props.animationIn || 'slideInLeft';
	        animationOut = this.props.animationOut || 'slideOutRight';
	      } else if (this.props.position === 'top') {
	        animationIn = this.props.animationIn || 'slideInDown';
	        animationOut = this.props.animationOut || 'slideOutUp';
	      } else if (this.props.position === 'bottom') {
	        animationIn = this.props.animationIn || 'slideInUp';
	        animationOut = this.props.animationOut || 'slideOutBottom';
	      }
	      return React.createElement(
	        Animation,
	        { active: this.state.open, animationIn: animationIn, animationOut: animationOut },
	        React.createElement(
	          'div',
	          { 'data-closable': true, id: this.props.id, className: classes },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Panel;
	}(React.Component);

	Panel.defaultProps = {
	  position: 'left'
	};
	exports.default = Panel;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var classnames = __webpack_require__(4);
	var ExecutionEnvironment = __webpack_require__(13);
	var foundationApi = __webpack_require__(6);
	var Tether = ExecutionEnvironment.canUseDOM && __webpack_require__(36);

	var Popup = function (_React$Component) {
	  _inherits(Popup, _React$Component);

	  function Popup() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Popup);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      active: false,
	      tetherInit: false
	    }, _this.toggle = function (target) {
	      var active = !_this.state.active;
	      _this.setState({ active: active }, function () {
	        if (active) {
	          this.tetherElement(target);
	        } else {
	          this.tether.destroy();
	        }
	      }.bind(_this));
	    }, _this.tetherElement = function (target) {
	      var targetElement = document.getElementById(target);
	      var attachment = 'top center';
	      _this.tether = new Tether({
	        element: ReactDOM.findDOMNode(_this),
	        target: targetElement,
	        attachment: attachment
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Popup, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.tether = {};
	      foundationApi.subscribe(this.props.id, function (name, msg) {
	        if (msg[0] === 'toggle') {
	          this.toggle(msg[1]);
	        }
	      }.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = {
	        popup: true,
	        'is-active': this.state.active
	      };
	      return React.createElement(
	        'div',
	        { id: this.props.id, className: classnames(classes), 'data-closable': 'popup' },
	        this.props.children
	      );
	    }
	  }]);

	  return Popup;
	}(React.Component);

	Popup.defaultProps = {
	  pinTo: 'top center',
	  pinAt: ''
	};


	module.exports = Popup;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 0.6.5 */


	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory(require,exports,module);
	  } else {
	    root.Tether = factory();
	  }
	}(this, function(require,exports,module) {

	(function() {
	  var Evented, addClass, defer, deferred, extend, flush, getBounds, getClassName, getOffsetParent, getOrigin, getScrollBarSize, getScrollParent, hasClass, node, removeClass, setClassName, uniqueId, updateClasses, zeroPosCache,
	    __hasProp = {}.hasOwnProperty,
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
	    __slice = [].slice;

	  if (this.Tether == null) {
	    this.Tether = {
	      modules: []
	    };
	  }

	  getScrollParent = function(el) {
	    var parent, position, scrollParent, style, _ref;
	    position = getComputedStyle(el).position;
	    if (position === 'fixed') {
	      return el;
	    }
	    scrollParent = void 0;
	    parent = el;
	    while (parent = parent.parentNode) {
	      try {
	        style = getComputedStyle(parent);
	      } catch (_error) {}
	      if (style == null) {
	        return parent;
	      }
	      if (/(auto|scroll)/.test(style['overflow'] + style['overflowY'] + style['overflowX'])) {
	        if (position !== 'absolute' || ((_ref = style['position']) === 'relative' || _ref === 'absolute' || _ref === 'fixed')) {
	          return parent;
	        }
	      }
	    }
	    return document.body;
	  };

	  uniqueId = (function() {
	    var id;
	    id = 0;
	    return function() {
	      return id++;
	    };
	  })();

	  zeroPosCache = {};

	  getOrigin = function(doc) {
	    var id, k, node, v, _ref;
	    node = doc._tetherZeroElement;
	    if (node == null) {
	      node = doc.createElement('div');
	      node.setAttribute('data-tether-id', uniqueId());
	      extend(node.style, {
	        top: 0,
	        left: 0,
	        position: 'absolute'
	      });
	      doc.body.appendChild(node);
	      doc._tetherZeroElement = node;
	    }
	    id = node.getAttribute('data-tether-id');
	    if (zeroPosCache[id] == null) {
	      zeroPosCache[id] = {};
	      _ref = node.getBoundingClientRect();
	      for (k in _ref) {
	        v = _ref[k];
	        zeroPosCache[id][k] = v;
	      }
	      defer(function() {
	        return zeroPosCache[id] = void 0;
	      });
	    }
	    return zeroPosCache[id];
	  };

	  node = null;

	  getBounds = function(el) {
	    var box, doc, docEl, k, origin, v, _ref;
	    if (el === document) {
	      doc = document;
	      el = document.documentElement;
	    } else {
	      doc = el.ownerDocument;
	    }
	    docEl = doc.documentElement;
	    box = {};
	    _ref = el.getBoundingClientRect();
	    for (k in _ref) {
	      v = _ref[k];
	      box[k] = v;
	    }
	    origin = getOrigin(doc);
	    box.top -= origin.top;
	    box.left -= origin.left;
	    if (box.width == null) {
	      box.width = document.body.scrollWidth - box.left - box.right;
	    }
	    if (box.height == null) {
	      box.height = document.body.scrollHeight - box.top - box.bottom;
	    }
	    box.top = box.top - docEl.clientTop;
	    box.left = box.left - docEl.clientLeft;
	    box.right = doc.body.clientWidth - box.width - box.left;
	    box.bottom = doc.body.clientHeight - box.height - box.top;
	    return box;
	  };

	  getOffsetParent = function(el) {
	    return el.offsetParent || document.documentElement;
	  };

	  getScrollBarSize = function() {
	    var inner, outer, width, widthContained, widthScroll;
	    inner = document.createElement('div');
	    inner.style.width = '100%';
	    inner.style.height = '200px';
	    outer = document.createElement('div');
	    extend(outer.style, {
	      position: 'absolute',
	      top: 0,
	      left: 0,
	      pointerEvents: 'none',
	      visibility: 'hidden',
	      width: '200px',
	      height: '150px',
	      overflow: 'hidden'
	    });
	    outer.appendChild(inner);
	    document.body.appendChild(outer);
	    widthContained = inner.offsetWidth;
	    outer.style.overflow = 'scroll';
	    widthScroll = inner.offsetWidth;
	    if (widthContained === widthScroll) {
	      widthScroll = outer.clientWidth;
	    }
	    document.body.removeChild(outer);
	    width = widthContained - widthScroll;
	    return {
	      width: width,
	      height: width
	    };
	  };

	  extend = function(out) {
	    var args, key, obj, val, _i, _len, _ref;
	    if (out == null) {
	      out = {};
	    }
	    args = [];
	    Array.prototype.push.apply(args, arguments);
	    _ref = args.slice(1);
	    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	      obj = _ref[_i];
	      if (obj) {
	        for (key in obj) {
	          if (!__hasProp.call(obj, key)) continue;
	          val = obj[key];
	          out[key] = val;
	        }
	      }
	    }
	    return out;
	  };

	  removeClass = function(el, name) {
	    var className, cls, _i, _len, _ref, _results;
	    if (el.classList != null) {
	      _ref = name.split(' ');
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        cls = _ref[_i];
	        if (cls.trim()) {
	          _results.push(el.classList.remove(cls));
	        }
	      }
	      return _results;
	    } else {
	      className = getClassName(el).replace(new RegExp("(^| )" + (name.split(' ').join('|')) + "( |$)", 'gi'), ' ');
	      return setClassName(el, className);
	    }
	  };

	  addClass = function(el, name) {
	    var cls, _i, _len, _ref, _results;
	    if (el.classList != null) {
	      _ref = name.split(' ');
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        cls = _ref[_i];
	        if (cls.trim()) {
	          _results.push(el.classList.add(cls));
	        }
	      }
	      return _results;
	    } else {
	      removeClass(el, name);
	      cls = getClassName(el) + (" " + name);
	      return setClassName(el, cls);
	    }
	  };

	  hasClass = function(el, name) {
	    if (el.classList != null) {
	      return el.classList.contains(name);
	    } else {
	      return new RegExp("(^| )" + name + "( |$)", 'gi').test(getClassName(el));
	    }
	  };

	  getClassName = function(el) {
	    if (el.className instanceof SVGAnimatedString) {
	      return el.className.baseVal;
	    } else {
	      return el.className;
	    }
	  };

	  setClassName = function(el, className) {
	    return el.setAttribute('class', className);
	  };

	  updateClasses = function(el, add, all) {
	    var cls, _i, _j, _len, _len1, _results;
	    for (_i = 0, _len = all.length; _i < _len; _i++) {
	      cls = all[_i];
	      if (__indexOf.call(add, cls) < 0) {
	        if (hasClass(el, cls)) {
	          removeClass(el, cls);
	        }
	      }
	    }
	    _results = [];
	    for (_j = 0, _len1 = add.length; _j < _len1; _j++) {
	      cls = add[_j];
	      if (!hasClass(el, cls)) {
	        _results.push(addClass(el, cls));
	      } else {
	        _results.push(void 0);
	      }
	    }
	    return _results;
	  };

	  deferred = [];

	  defer = function(fn) {
	    return deferred.push(fn);
	  };

	  flush = function() {
	    var fn, _results;
	    _results = [];
	    while (fn = deferred.pop()) {
	      _results.push(fn());
	    }
	    return _results;
	  };

	  Evented = (function() {
	    function Evented() {}

	    Evented.prototype.on = function(event, handler, ctx, once) {
	      var _base;
	      if (once == null) {
	        once = false;
	      }
	      if (this.bindings == null) {
	        this.bindings = {};
	      }
	      if ((_base = this.bindings)[event] == null) {
	        _base[event] = [];
	      }
	      return this.bindings[event].push({
	        handler: handler,
	        ctx: ctx,
	        once: once
	      });
	    };

	    Evented.prototype.once = function(event, handler, ctx) {
	      return this.on(event, handler, ctx, true);
	    };

	    Evented.prototype.off = function(event, handler) {
	      var i, _ref, _results;
	      if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {
	        return;
	      }
	      if (handler == null) {
	        return delete this.bindings[event];
	      } else {
	        i = 0;
	        _results = [];
	        while (i < this.bindings[event].length) {
	          if (this.bindings[event][i].handler === handler) {
	            _results.push(this.bindings[event].splice(i, 1));
	          } else {
	            _results.push(i++);
	          }
	        }
	        return _results;
	      }
	    };

	    Evented.prototype.trigger = function() {
	      var args, ctx, event, handler, i, once, _ref, _ref1, _results;
	      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	      if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
	        i = 0;
	        _results = [];
	        while (i < this.bindings[event].length) {
	          _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;
	          handler.apply(ctx != null ? ctx : this, args);
	          if (once) {
	            _results.push(this.bindings[event].splice(i, 1));
	          } else {
	            _results.push(i++);
	          }
	        }
	        return _results;
	      }
	    };

	    return Evented;

	  })();

	  this.Tether.Utils = {
	    getScrollParent: getScrollParent,
	    getBounds: getBounds,
	    getOffsetParent: getOffsetParent,
	    extend: extend,
	    addClass: addClass,
	    removeClass: removeClass,
	    hasClass: hasClass,
	    updateClasses: updateClasses,
	    defer: defer,
	    flush: flush,
	    uniqueId: uniqueId,
	    Evented: Evented,
	    getScrollBarSize: getScrollBarSize
	  };

	}).call(this);

	(function() {
	  var MIRROR_LR, MIRROR_TB, OFFSET_MAP, Tether, addClass, addOffset, attachmentToOffset, autoToFixedAttachment, defer, extend, flush, getBounds, getOffsetParent, getOuterSize, getScrollBarSize, getScrollParent, getSize, now, offsetToPx, parseAttachment, parseOffset, position, removeClass, tethers, transformKey, updateClasses, within, _Tether, _ref,
	    __slice = [].slice,
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  if (this.Tether == null) {
	    throw new Error("You must include the utils.js file before tether.js");
	  }

	  Tether = this.Tether;

	  _ref = Tether.Utils, getScrollParent = _ref.getScrollParent, getSize = _ref.getSize, getOuterSize = _ref.getOuterSize, getBounds = _ref.getBounds, getOffsetParent = _ref.getOffsetParent, extend = _ref.extend, addClass = _ref.addClass, removeClass = _ref.removeClass, updateClasses = _ref.updateClasses, defer = _ref.defer, flush = _ref.flush, getScrollBarSize = _ref.getScrollBarSize;

	  within = function(a, b, diff) {
	    if (diff == null) {
	      diff = 1;
	    }
	    return (a + diff >= b && b >= a - diff);
	  };

	  transformKey = (function() {
	    var el, key, _i, _len, _ref1;
	    el = document.createElement('div');
	    _ref1 = ['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
	    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	      key = _ref1[_i];
	      if (el.style[key] !== void 0) {
	        return key;
	      }
	    }
	  })();

	  tethers = [];

	  position = function() {
	    var tether, _i, _len;
	    for (_i = 0, _len = tethers.length; _i < _len; _i++) {
	      tether = tethers[_i];
	      tether.position(false);
	    }
	    return flush();
	  };

	  now = function() {
	    var _ref1;
	    return (_ref1 = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref1 : +(new Date);
	  };

	  (function() {
	    var event, lastCall, lastDuration, pendingTimeout, tick, _i, _len, _ref1, _results;
	    lastCall = null;
	    lastDuration = null;
	    pendingTimeout = null;
	    tick = function() {
	      if ((lastDuration != null) && lastDuration > 16) {
	        lastDuration = Math.min(lastDuration - 16, 250);
	        pendingTimeout = setTimeout(tick, 250);
	        return;
	      }
	      if ((lastCall != null) && (now() - lastCall) < 10) {
	        return;
	      }
	      if (pendingTimeout != null) {
	        clearTimeout(pendingTimeout);
	        pendingTimeout = null;
	      }
	      lastCall = now();
	      position();
	      return lastDuration = now() - lastCall;
	    };
	    _ref1 = ['resize', 'scroll', 'touchmove'];
	    _results = [];
	    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	      event = _ref1[_i];
	      _results.push(window.addEventListener(event, tick));
	    }
	    return _results;
	  })();

	  MIRROR_LR = {
	    center: 'center',
	    left: 'right',
	    right: 'left'
	  };

	  MIRROR_TB = {
	    middle: 'middle',
	    top: 'bottom',
	    bottom: 'top'
	  };

	  OFFSET_MAP = {
	    top: 0,
	    left: 0,
	    middle: '50%',
	    center: '50%',
	    bottom: '100%',
	    right: '100%'
	  };

	  autoToFixedAttachment = function(attachment, relativeToAttachment) {
	    var left, top;
	    left = attachment.left, top = attachment.top;
	    if (left === 'auto') {
	      left = MIRROR_LR[relativeToAttachment.left];
	    }
	    if (top === 'auto') {
	      top = MIRROR_TB[relativeToAttachment.top];
	    }
	    return {
	      left: left,
	      top: top
	    };
	  };

	  attachmentToOffset = function(attachment) {
	    var _ref1, _ref2;
	    return {
	      left: (_ref1 = OFFSET_MAP[attachment.left]) != null ? _ref1 : attachment.left,
	      top: (_ref2 = OFFSET_MAP[attachment.top]) != null ? _ref2 : attachment.top
	    };
	  };

	  addOffset = function() {
	    var left, offsets, out, top, _i, _len, _ref1;
	    offsets = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	    out = {
	      top: 0,
	      left: 0
	    };
	    for (_i = 0, _len = offsets.length; _i < _len; _i++) {
	      _ref1 = offsets[_i], top = _ref1.top, left = _ref1.left;
	      if (typeof top === 'string') {
	        top = parseFloat(top, 10);
	      }
	      if (typeof left === 'string') {
	        left = parseFloat(left, 10);
	      }
	      out.top += top;
	      out.left += left;
	    }
	    return out;
	  };

	  offsetToPx = function(offset, size) {
	    if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
	      offset.left = parseFloat(offset.left, 10) / 100 * size.width;
	    }
	    if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
	      offset.top = parseFloat(offset.top, 10) / 100 * size.height;
	    }
	    return offset;
	  };

	  parseAttachment = parseOffset = function(value) {
	    var left, top, _ref1;
	    _ref1 = value.split(' '), top = _ref1[0], left = _ref1[1];
	    return {
	      top: top,
	      left: left
	    };
	  };

	  _Tether = (function() {
	    _Tether.modules = [];

	    function _Tether(options) {
	      this.position = __bind(this.position, this);
	      var module, _i, _len, _ref1, _ref2;
	      tethers.push(this);
	      this.history = [];
	      this.setOptions(options, false);
	      _ref1 = Tether.modules;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        module = _ref1[_i];
	        if ((_ref2 = module.initialize) != null) {
	          _ref2.call(this);
	        }
	      }
	      this.position();
	    }

	    _Tether.prototype.getClass = function(key) {
	      var _ref1, _ref2;
	      if ((_ref1 = this.options.classes) != null ? _ref1[key] : void 0) {
	        return this.options.classes[key];
	      } else if (((_ref2 = this.options.classes) != null ? _ref2[key] : void 0) !== false) {
	        if (this.options.classPrefix) {
	          return "" + this.options.classPrefix + "-" + key;
	        } else {
	          return key;
	        }
	      } else {
	        return '';
	      }
	    };

	    _Tether.prototype.setOptions = function(options, position) {
	      var defaults, key, _i, _len, _ref1, _ref2;
	      this.options = options;
	      if (position == null) {
	        position = true;
	      }
	      defaults = {
	        offset: '0 0',
	        targetOffset: '0 0',
	        targetAttachment: 'auto auto',
	        classPrefix: 'tether'
	      };
	      this.options = extend(defaults, this.options);
	      _ref1 = this.options, this.element = _ref1.element, this.target = _ref1.target, this.targetModifier = _ref1.targetModifier;
	      if (this.target === 'viewport') {
	        this.target = document.body;
	        this.targetModifier = 'visible';
	      } else if (this.target === 'scroll-handle') {
	        this.target = document.body;
	        this.targetModifier = 'scroll-handle';
	      }
	      _ref2 = ['element', 'target'];
	      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	        key = _ref2[_i];
	        if (this[key] == null) {
	          throw new Error("Tether Error: Both element and target must be defined");
	        }
	        if (this[key].jquery != null) {
	          this[key] = this[key][0];
	        } else if (typeof this[key] === 'string') {
	          this[key] = document.querySelector(this[key]);
	        }
	      }
	      addClass(this.element, this.getClass('element'));
	      addClass(this.target, this.getClass('target'));
	      if (!this.options.attachment) {
	        throw new Error("Tether Error: You must provide an attachment");
	      }
	      this.targetAttachment = parseAttachment(this.options.targetAttachment);
	      this.attachment = parseAttachment(this.options.attachment);
	      this.offset = parseOffset(this.options.offset);
	      this.targetOffset = parseOffset(this.options.targetOffset);
	      if (this.scrollParent != null) {
	        this.disable();
	      }
	      if (this.targetModifier === 'scroll-handle') {
	        this.scrollParent = this.target;
	      } else {
	        this.scrollParent = getScrollParent(this.target);
	      }
	      if (this.options.enabled !== false) {
	        return this.enable(position);
	      }
	    };

	    _Tether.prototype.getTargetBounds = function() {
	      var bounds, fitAdj, hasBottomScroll, height, out, scrollBottom, scrollPercentage, style, target;
	      if (this.targetModifier != null) {
	        switch (this.targetModifier) {
	          case 'visible':
	            if (this.target === document.body) {
	              return {
	                top: pageYOffset,
	                left: pageXOffset,
	                height: innerHeight,
	                width: innerWidth
	              };
	            } else {
	              bounds = getBounds(this.target);
	              out = {
	                height: bounds.height,
	                width: bounds.width,
	                top: bounds.top,
	                left: bounds.left
	              };
	              out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
	              out.height = Math.min(out.height, bounds.height - ((bounds.top + bounds.height) - (pageYOffset + innerHeight)));
	              out.height = Math.min(innerHeight, out.height);
	              out.height -= 2;
	              out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
	              out.width = Math.min(out.width, bounds.width - ((bounds.left + bounds.width) - (pageXOffset + innerWidth)));
	              out.width = Math.min(innerWidth, out.width);
	              out.width -= 2;
	              if (out.top < pageYOffset) {
	                out.top = pageYOffset;
	              }
	              if (out.left < pageXOffset) {
	                out.left = pageXOffset;
	              }
	              return out;
	            }
	            break;
	          case 'scroll-handle':
	            target = this.target;
	            if (target === document.body) {
	              target = document.documentElement;
	              bounds = {
	                left: pageXOffset,
	                top: pageYOffset,
	                height: innerHeight,
	                width: innerWidth
	              };
	            } else {
	              bounds = getBounds(target);
	            }
	            style = getComputedStyle(target);
	            hasBottomScroll = target.scrollWidth > target.clientWidth || 'scroll' === [style.overflow, style.overflowX] || this.target !== document.body;
	            scrollBottom = 0;
	            if (hasBottomScroll) {
	              scrollBottom = 15;
	            }
	            height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
	            out = {
	              width: 15,
	              height: height * 0.975 * (height / target.scrollHeight),
	              left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
	            };
	            fitAdj = 0;
	            if (height < 408 && this.target === document.body) {
	              fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
	            }
	            if (this.target !== document.body) {
	              out.height = Math.max(out.height, 24);
	            }
	            scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
	            out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);
	            if (this.target === document.body) {
	              out.height = Math.max(out.height, 24);
	            }
	            return out;
	        }
	      } else {
	        return getBounds(this.target);
	      }
	    };

	    _Tether.prototype.clearCache = function() {
	      return this._cache = {};
	    };

	    _Tether.prototype.cache = function(k, getter) {
	      if (this._cache == null) {
	        this._cache = {};
	      }
	      if (this._cache[k] == null) {
	        this._cache[k] = getter.call(this);
	      }
	      return this._cache[k];
	    };

	    _Tether.prototype.enable = function(position) {
	      if (position == null) {
	        position = true;
	      }
	      addClass(this.target, this.getClass('enabled'));
	      addClass(this.element, this.getClass('enabled'));
	      this.enabled = true;
	      if (this.scrollParent !== document) {
	        this.scrollParent.addEventListener('scroll', this.position);
	      }
	      if (position) {
	        return this.position();
	      }
	    };

	    _Tether.prototype.disable = function() {
	      removeClass(this.target, this.getClass('enabled'));
	      removeClass(this.element, this.getClass('enabled'));
	      this.enabled = false;
	      if (this.scrollParent != null) {
	        return this.scrollParent.removeEventListener('scroll', this.position);
	      }
	    };

	    _Tether.prototype.destroy = function() {
	      var i, tether, _i, _len, _results;
	      this.disable();
	      _results = [];
	      for (i = _i = 0, _len = tethers.length; _i < _len; i = ++_i) {
	        tether = tethers[i];
	        if (tether === this) {
	          tethers.splice(i, 1);
	          break;
	        } else {
	          _results.push(void 0);
	        }
	      }
	      return _results;
	    };

	    _Tether.prototype.updateAttachClasses = function(elementAttach, targetAttach) {
	      var add, all, side, sides, _i, _j, _len, _len1, _ref1,
	        _this = this;
	      if (elementAttach == null) {
	        elementAttach = this.attachment;
	      }
	      if (targetAttach == null) {
	        targetAttach = this.targetAttachment;
	      }
	      sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];
	      if ((_ref1 = this._addAttachClasses) != null ? _ref1.length : void 0) {
	        this._addAttachClasses.splice(0, this._addAttachClasses.length);
	      }
	      add = this._addAttachClasses != null ? this._addAttachClasses : this._addAttachClasses = [];
	      if (elementAttach.top) {
	        add.push("" + (this.getClass('element-attached')) + "-" + elementAttach.top);
	      }
	      if (elementAttach.left) {
	        add.push("" + (this.getClass('element-attached')) + "-" + elementAttach.left);
	      }
	      if (targetAttach.top) {
	        add.push("" + (this.getClass('target-attached')) + "-" + targetAttach.top);
	      }
	      if (targetAttach.left) {
	        add.push("" + (this.getClass('target-attached')) + "-" + targetAttach.left);
	      }
	      all = [];
	      for (_i = 0, _len = sides.length; _i < _len; _i++) {
	        side = sides[_i];
	        all.push("" + (this.getClass('element-attached')) + "-" + side);
	      }
	      for (_j = 0, _len1 = sides.length; _j < _len1; _j++) {
	        side = sides[_j];
	        all.push("" + (this.getClass('target-attached')) + "-" + side);
	      }
	      return defer(function() {
	        if (_this._addAttachClasses == null) {
	          return;
	        }
	        updateClasses(_this.element, _this._addAttachClasses, all);
	        updateClasses(_this.target, _this._addAttachClasses, all);
	        return _this._addAttachClasses = void 0;
	      });
	    };

	    _Tether.prototype.position = function(flushChanges) {
	      var elementPos, elementStyle, height, left, manualOffset, manualTargetOffset, module, next, offset, offsetBorder, offsetParent, offsetParentSize, offsetParentStyle, offsetPosition, ret, scrollLeft, scrollTop, scrollbarSize, side, targetAttachment, targetOffset, targetPos, targetSize, top, width, _i, _j, _len, _len1, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6,
	        _this = this;
	      if (flushChanges == null) {
	        flushChanges = true;
	      }
	      if (!this.enabled) {
	        return;
	      }
	      this.clearCache();
	      targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
	      this.updateAttachClasses(this.attachment, targetAttachment);
	      elementPos = this.cache('element-bounds', function() {
	        return getBounds(_this.element);
	      });
	      width = elementPos.width, height = elementPos.height;
	      if (width === 0 && height === 0 && (this.lastSize != null)) {
	        _ref1 = this.lastSize, width = _ref1.width, height = _ref1.height;
	      } else {
	        this.lastSize = {
	          width: width,
	          height: height
	        };
	      }
	      targetSize = targetPos = this.cache('target-bounds', function() {
	        return _this.getTargetBounds();
	      });
	      offset = offsetToPx(attachmentToOffset(this.attachment), {
	        width: width,
	        height: height
	      });
	      targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
	      manualOffset = offsetToPx(this.offset, {
	        width: width,
	        height: height
	      });
	      manualTargetOffset = offsetToPx(this.targetOffset, targetSize);
	      offset = addOffset(offset, manualOffset);
	      targetOffset = addOffset(targetOffset, manualTargetOffset);
	      left = targetPos.left + targetOffset.left - offset.left;
	      top = targetPos.top + targetOffset.top - offset.top;
	      _ref2 = Tether.modules;
	      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	        module = _ref2[_i];
	        ret = module.position.call(this, {
	          left: left,
	          top: top,
	          targetAttachment: targetAttachment,
	          targetPos: targetPos,
	          attachment: this.attachment,
	          elementPos: elementPos,
	          offset: offset,
	          targetOffset: targetOffset,
	          manualOffset: manualOffset,
	          manualTargetOffset: manualTargetOffset,
	          scrollbarSize: scrollbarSize
	        });
	        if ((ret == null) || typeof ret !== 'object') {
	          continue;
	        } else if (ret === false) {
	          return false;
	        } else {
	          top = ret.top, left = ret.left;
	        }
	      }
	      next = {
	        page: {
	          top: top,
	          left: left
	        },
	        viewport: {
	          top: top - pageYOffset,
	          bottom: pageYOffset - top - height + innerHeight,
	          left: left - pageXOffset,
	          right: pageXOffset - left - width + innerWidth
	        }
	      };
	      if (document.body.scrollWidth > window.innerWidth) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.bottom -= scrollbarSize.height;
	      }
	      if (document.body.scrollHeight > window.innerHeight) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.right -= scrollbarSize.width;
	      }
	      if (((_ref3 = document.body.style.position) !== '' && _ref3 !== 'static') || ((_ref4 = document.body.parentElement.style.position) !== '' && _ref4 !== 'static')) {
	        next.page.bottom = document.body.scrollHeight - top - height;
	        next.page.right = document.body.scrollWidth - left - width;
	      }
	      if (((_ref5 = this.options.optimizations) != null ? _ref5.moveElement : void 0) !== false && (this.targetModifier == null)) {
	        offsetParent = this.cache('target-offsetparent', function() {
	          return getOffsetParent(_this.target);
	        });
	        offsetPosition = this.cache('target-offsetparent-bounds', function() {
	          return getBounds(offsetParent);
	        });
	        offsetParentStyle = getComputedStyle(offsetParent);
	        elementStyle = getComputedStyle(this.element);
	        offsetParentSize = offsetPosition;
	        offsetBorder = {};
	        _ref6 = ['Top', 'Left', 'Bottom', 'Right'];
	        for (_j = 0, _len1 = _ref6.length; _j < _len1; _j++) {
	          side = _ref6[_j];
	          offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle["border" + side + "Width"]);
	        }
	        offsetPosition.right = document.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
	        offsetPosition.bottom = document.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
	        if (next.page.top >= (offsetPosition.top + offsetBorder.top) && next.page.bottom >= offsetPosition.bottom) {
	          if (next.page.left >= (offsetPosition.left + offsetBorder.left) && next.page.right >= offsetPosition.right) {
	            scrollTop = offsetParent.scrollTop;
	            scrollLeft = offsetParent.scrollLeft;
	            next.offset = {
	              top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
	              left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
	            };
	          }
	        }
	      }
	      this.move(next);
	      this.history.unshift(next);
	      if (this.history.length > 3) {
	        this.history.pop();
	      }
	      if (flushChanges) {
	        flush();
	      }
	      return true;
	    };

	    _Tether.prototype.move = function(position) {
	      var css, elVal, found, key, moved, offsetParent, point, same, transcribe, type, val, write, writeCSS, _i, _len, _ref1, _ref2,
	        _this = this;
	      if (this.element.parentNode == null) {
	        return;
	      }
	      same = {};
	      for (type in position) {
	        same[type] = {};
	        for (key in position[type]) {
	          found = false;
	          _ref1 = this.history;
	          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	            point = _ref1[_i];
	            if (!within((_ref2 = point[type]) != null ? _ref2[key] : void 0, position[type][key])) {
	              found = true;
	              break;
	            }
	          }
	          if (!found) {
	            same[type][key] = true;
	          }
	        }
	      }
	      css = {
	        top: '',
	        left: '',
	        right: '',
	        bottom: ''
	      };
	      transcribe = function(same, pos) {
	        var xPos, yPos, _ref3;
	        if (((_ref3 = _this.options.optimizations) != null ? _ref3.gpu : void 0) !== false) {
	          if (same.top) {
	            css.top = 0;
	            yPos = pos.top;
	          } else {
	            css.bottom = 0;
	            yPos = -pos.bottom;
	          }
	          if (same.left) {
	            css.left = 0;
	            xPos = pos.left;
	          } else {
	            css.right = 0;
	            xPos = -pos.right;
	          }
	          css[transformKey] = "translateX(" + (Math.round(xPos)) + "px) translateY(" + (Math.round(yPos)) + "px)";
	          if (transformKey !== 'msTransform') {
	            return css[transformKey] += " translateZ(0)";
	          }
	        } else {
	          if (same.top) {
	            css.top = "" + pos.top + "px";
	          } else {
	            css.bottom = "" + pos.bottom + "px";
	          }
	          if (same.left) {
	            return css.left = "" + pos.left + "px";
	          } else {
	            return css.right = "" + pos.right + "px";
	          }
	        }
	      };
	      moved = false;
	      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
	        css.position = 'absolute';
	        transcribe(same.page, position.page);
	      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
	        css.position = 'fixed';
	        transcribe(same.viewport, position.viewport);
	      } else if ((same.offset != null) && same.offset.top && same.offset.left) {
	        css.position = 'absolute';
	        offsetParent = this.cache('target-offsetparent', function() {
	          return getOffsetParent(_this.target);
	        });
	        if (getOffsetParent(this.element) !== offsetParent) {
	          defer(function() {
	            _this.element.parentNode.removeChild(_this.element);
	            return offsetParent.appendChild(_this.element);
	          });
	        }
	        transcribe(same.offset, position.offset);
	        moved = true;
	      } else {
	        css.position = 'absolute';
	        transcribe({
	          top: true,
	          left: true
	        }, position.page);
	      }
	      if (!moved && this.element.parentNode.tagName !== 'BODY') {
	        this.element.parentNode.removeChild(this.element);
	        document.body.appendChild(this.element);
	      }
	      writeCSS = {};
	      write = false;
	      for (key in css) {
	        val = css[key];
	        elVal = this.element.style[key];
	        if (elVal !== '' && val !== '' && (key === 'top' || key === 'left' || key === 'bottom' || key === 'right')) {
	          elVal = parseFloat(elVal);
	          val = parseFloat(val);
	        }
	        if (elVal !== val) {
	          write = true;
	          writeCSS[key] = css[key];
	        }
	      }
	      if (write) {
	        return defer(function() {
	          return extend(_this.element.style, writeCSS);
	        });
	      }
	    };

	    return _Tether;

	  })();

	  Tether.position = position;

	  this.Tether = extend(_Tether, Tether);

	}).call(this);

	(function() {
	  var BOUNDS_FORMAT, MIRROR_ATTACH, defer, extend, getBoundingRect, getBounds, getOuterSize, getSize, updateClasses, _ref,
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	  _ref = this.Tether.Utils, getOuterSize = _ref.getOuterSize, getBounds = _ref.getBounds, getSize = _ref.getSize, extend = _ref.extend, updateClasses = _ref.updateClasses, defer = _ref.defer;

	  MIRROR_ATTACH = {
	    left: 'right',
	    right: 'left',
	    top: 'bottom',
	    bottom: 'top',
	    middle: 'middle'
	  };

	  BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

	  getBoundingRect = function(tether, to) {
	    var i, pos, side, size, style, _i, _len;
	    if (to === 'scrollParent') {
	      to = tether.scrollParent;
	    } else if (to === 'window') {
	      to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
	    }
	    if (to === document) {
	      to = to.documentElement;
	    }
	    if (to.nodeType != null) {
	      pos = size = getBounds(to);
	      style = getComputedStyle(to);
	      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];
	      for (i = _i = 0, _len = BOUNDS_FORMAT.length; _i < _len; i = ++_i) {
	        side = BOUNDS_FORMAT[i];
	        side = side[0].toUpperCase() + side.substr(1);
	        if (side === 'Top' || side === 'Left') {
	          to[i] += parseFloat(style["border" + side + "Width"]);
	        } else {
	          to[i] -= parseFloat(style["border" + side + "Width"]);
	        }
	      }
	    }
	    return to;
	  };

	  this.Tether.modules.push({
	    position: function(_arg) {
	      var addClasses, allClasses, attachment, bounds, changeAttachX, changeAttachY, cls, constraint, eAttachment, height, left, oob, oobClass, p, pin, pinned, pinnedClass, removeClass, side, tAttachment, targetAttachment, targetHeight, targetSize, targetWidth, to, top, width, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _m, _n, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8,
	        _this = this;
	      top = _arg.top, left = _arg.left, targetAttachment = _arg.targetAttachment;
	      if (!this.options.constraints) {
	        return true;
	      }
	      removeClass = function(prefix) {
	        var side, _i, _len, _results;
	        _this.removeClass(prefix);
	        _results = [];
	        for (_i = 0, _len = BOUNDS_FORMAT.length; _i < _len; _i++) {
	          side = BOUNDS_FORMAT[_i];
	          _results.push(_this.removeClass("" + prefix + "-" + side));
	        }
	        return _results;
	      };
	      _ref1 = this.cache('element-bounds', function() {
	        return getBounds(_this.element);
	      }), height = _ref1.height, width = _ref1.width;
	      if (width === 0 && height === 0 && (this.lastSize != null)) {
	        _ref2 = this.lastSize, width = _ref2.width, height = _ref2.height;
	      }
	      targetSize = this.cache('target-bounds', function() {
	        return _this.getTargetBounds();
	      });
	      targetHeight = targetSize.height;
	      targetWidth = targetSize.width;
	      tAttachment = {};
	      eAttachment = {};
	      allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];
	      _ref3 = this.options.constraints;
	      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	        constraint = _ref3[_i];
	        if (constraint.outOfBoundsClass) {
	          allClasses.push(constraint.outOfBoundsClass);
	        }
	        if (constraint.pinnedClass) {
	          allClasses.push(constraint.pinnedClass);
	        }
	      }
	      for (_j = 0, _len1 = allClasses.length; _j < _len1; _j++) {
	        cls = allClasses[_j];
	        _ref4 = ['left', 'top', 'right', 'bottom'];
	        for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
	          side = _ref4[_k];
	          allClasses.push("" + cls + "-" + side);
	        }
	      }
	      addClasses = [];
	      tAttachment = extend({}, targetAttachment);
	      eAttachment = extend({}, this.attachment);
	      _ref5 = this.options.constraints;
	      for (_l = 0, _len3 = _ref5.length; _l < _len3; _l++) {
	        constraint = _ref5[_l];
	        to = constraint.to, attachment = constraint.attachment, pin = constraint.pin;
	        if (attachment == null) {
	          attachment = '';
	        }
	        if (__indexOf.call(attachment, ' ') >= 0) {
	          _ref6 = attachment.split(' '), changeAttachY = _ref6[0], changeAttachX = _ref6[1];
	        } else {
	          changeAttachX = changeAttachY = attachment;
	        }
	        bounds = getBoundingRect(this, to);
	        if (changeAttachY === 'target' || changeAttachY === 'both') {
	          if (top < bounds[1] && tAttachment.top === 'top') {
	            top += targetHeight;
	            tAttachment.top = 'bottom';
	          }
	          if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	            top -= targetHeight;
	            tAttachment.top = 'top';
	          }
	        }
	        if (changeAttachY === 'together') {
	          if (top < bounds[1] && tAttachment.top === 'top') {
	            if (eAttachment.top === 'bottom') {
	              top += targetHeight;
	              tAttachment.top = 'bottom';
	              top += height;
	              eAttachment.top = 'top';
	            } else if (eAttachment.top === 'top') {
	              top += targetHeight;
	              tAttachment.top = 'bottom';
	              top -= height;
	              eAttachment.top = 'bottom';
	            }
	          }
	          if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	            if (eAttachment.top === 'top') {
	              top -= targetHeight;
	              tAttachment.top = 'top';
	              top -= height;
	              eAttachment.top = 'bottom';
	            } else if (eAttachment.top === 'bottom') {
	              top -= targetHeight;
	              tAttachment.top = 'top';
	              top += height;
	              eAttachment.top = 'top';
	            }
	          }
	          if (tAttachment.top === 'middle') {
	            if (top + height > bounds[3] && eAttachment.top === 'top') {
	              top -= height;
	              eAttachment.top = 'bottom';
	            } else if (top < bounds[1] && eAttachment.top === 'bottom') {
	              top += height;
	              eAttachment.top = 'top';
	            }
	          }
	        }
	        if (changeAttachX === 'target' || changeAttachX === 'both') {
	          if (left < bounds[0] && tAttachment.left === 'left') {
	            left += targetWidth;
	            tAttachment.left = 'right';
	          }
	          if (left + width > bounds[2] && tAttachment.left === 'right') {
	            left -= targetWidth;
	            tAttachment.left = 'left';
	          }
	        }
	        if (changeAttachX === 'together') {
	          if (left < bounds[0] && tAttachment.left === 'left') {
	            if (eAttachment.left === 'right') {
	              left += targetWidth;
	              tAttachment.left = 'right';
	              left += width;
	              eAttachment.left = 'left';
	            } else if (eAttachment.left === 'left') {
	              left += targetWidth;
	              tAttachment.left = 'right';
	              left -= width;
	              eAttachment.left = 'right';
	            }
	          } else if (left + width > bounds[2] && tAttachment.left === 'right') {
	            if (eAttachment.left === 'left') {
	              left -= targetWidth;
	              tAttachment.left = 'left';
	              left -= width;
	              eAttachment.left = 'right';
	            } else if (eAttachment.left === 'right') {
	              left -= targetWidth;
	              tAttachment.left = 'left';
	              left += width;
	              eAttachment.left = 'left';
	            }
	          } else if (tAttachment.left === 'center') {
	            if (left + width > bounds[2] && eAttachment.left === 'left') {
	              left -= width;
	              eAttachment.left = 'right';
	            } else if (left < bounds[0] && eAttachment.left === 'right') {
	              left += width;
	              eAttachment.left = 'left';
	            }
	          }
	        }
	        if (changeAttachY === 'element' || changeAttachY === 'both') {
	          if (top < bounds[1] && eAttachment.top === 'bottom') {
	            top += height;
	            eAttachment.top = 'top';
	          }
	          if (top + height > bounds[3] && eAttachment.top === 'top') {
	            top -= height;
	            eAttachment.top = 'bottom';
	          }
	        }
	        if (changeAttachX === 'element' || changeAttachX === 'both') {
	          if (left < bounds[0] && eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          }
	          if (left + width > bounds[2] && eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          }
	        }
	        if (typeof pin === 'string') {
	          pin = (function() {
	            var _len4, _m, _ref7, _results;
	            _ref7 = pin.split(',');
	            _results = [];
	            for (_m = 0, _len4 = _ref7.length; _m < _len4; _m++) {
	              p = _ref7[_m];
	              _results.push(p.trim());
	            }
	            return _results;
	          })();
	        } else if (pin === true) {
	          pin = ['top', 'left', 'right', 'bottom'];
	        }
	        pin || (pin = []);
	        pinned = [];
	        oob = [];
	        if (top < bounds[1]) {
	          if (__indexOf.call(pin, 'top') >= 0) {
	            top = bounds[1];
	            pinned.push('top');
	          } else {
	            oob.push('top');
	          }
	        }
	        if (top + height > bounds[3]) {
	          if (__indexOf.call(pin, 'bottom') >= 0) {
	            top = bounds[3] - height;
	            pinned.push('bottom');
	          } else {
	            oob.push('bottom');
	          }
	        }
	        if (left < bounds[0]) {
	          if (__indexOf.call(pin, 'left') >= 0) {
	            left = bounds[0];
	            pinned.push('left');
	          } else {
	            oob.push('left');
	          }
	        }
	        if (left + width > bounds[2]) {
	          if (__indexOf.call(pin, 'right') >= 0) {
	            left = bounds[2] - width;
	            pinned.push('right');
	          } else {
	            oob.push('right');
	          }
	        }
	        if (pinned.length) {
	          pinnedClass = (_ref7 = this.options.pinnedClass) != null ? _ref7 : this.getClass('pinned');
	          addClasses.push(pinnedClass);
	          for (_m = 0, _len4 = pinned.length; _m < _len4; _m++) {
	            side = pinned[_m];
	            addClasses.push("" + pinnedClass + "-" + side);
	          }
	        }
	        if (oob.length) {
	          oobClass = (_ref8 = this.options.outOfBoundsClass) != null ? _ref8 : this.getClass('out-of-bounds');
	          addClasses.push(oobClass);
	          for (_n = 0, _len5 = oob.length; _n < _len5; _n++) {
	            side = oob[_n];
	            addClasses.push("" + oobClass + "-" + side);
	          }
	        }
	        if (__indexOf.call(pinned, 'left') >= 0 || __indexOf.call(pinned, 'right') >= 0) {
	          eAttachment.left = tAttachment.left = false;
	        }
	        if (__indexOf.call(pinned, 'top') >= 0 || __indexOf.call(pinned, 'bottom') >= 0) {
	          eAttachment.top = tAttachment.top = false;
	        }
	        if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== this.attachment.top || eAttachment.left !== this.attachment.left) {
	          this.updateAttachClasses(eAttachment, tAttachment);
	        }
	      }
	      defer(function() {
	        updateClasses(_this.target, addClasses, allClasses);
	        return updateClasses(_this.element, addClasses, allClasses);
	      });
	      return {
	        top: top,
	        left: left
	      };
	    }
	  });

	}).call(this);

	(function() {
	  var defer, getBounds, updateClasses, _ref;

	  _ref = this.Tether.Utils, getBounds = _ref.getBounds, updateClasses = _ref.updateClasses, defer = _ref.defer;

	  this.Tether.modules.push({
	    position: function(_arg) {
	      var abutted, addClasses, allClasses, bottom, height, left, right, side, sides, targetPos, top, width, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref1, _ref2, _ref3, _ref4, _ref5,
	        _this = this;
	      top = _arg.top, left = _arg.left;
	      _ref1 = this.cache('element-bounds', function() {
	        return getBounds(_this.element);
	      }), height = _ref1.height, width = _ref1.width;
	      targetPos = this.getTargetBounds();
	      bottom = top + height;
	      right = left + width;
	      abutted = [];
	      if (top <= targetPos.bottom && bottom >= targetPos.top) {
	        _ref2 = ['left', 'right'];
	        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	          side = _ref2[_i];
	          if ((_ref3 = targetPos[side]) === left || _ref3 === right) {
	            abutted.push(side);
	          }
	        }
	      }
	      if (left <= targetPos.right && right >= targetPos.left) {
	        _ref4 = ['top', 'bottom'];
	        for (_j = 0, _len1 = _ref4.length; _j < _len1; _j++) {
	          side = _ref4[_j];
	          if ((_ref5 = targetPos[side]) === top || _ref5 === bottom) {
	            abutted.push(side);
	          }
	        }
	      }
	      allClasses = [];
	      addClasses = [];
	      sides = ['left', 'top', 'right', 'bottom'];
	      allClasses.push(this.getClass('abutted'));
	      for (_k = 0, _len2 = sides.length; _k < _len2; _k++) {
	        side = sides[_k];
	        allClasses.push("" + (this.getClass('abutted')) + "-" + side);
	      }
	      if (abutted.length) {
	        addClasses.push(this.getClass('abutted'));
	      }
	      for (_l = 0, _len3 = abutted.length; _l < _len3; _l++) {
	        side = abutted[_l];
	        addClasses.push("" + (this.getClass('abutted')) + "-" + side);
	      }
	      defer(function() {
	        updateClasses(_this.target, addClasses, allClasses);
	        return updateClasses(_this.element, addClasses, allClasses);
	      });
	      return true;
	    }
	  });

	}).call(this);

	(function() {
	  this.Tether.modules.push({
	    position: function(_arg) {
	      var left, result, shift, shiftLeft, shiftTop, top, _ref;
	      top = _arg.top, left = _arg.left;
	      if (!this.options.shift) {
	        return;
	      }
	      result = function(val) {
	        if (typeof val === 'function') {
	          return val.call(this, {
	            top: top,
	            left: left
	          });
	        } else {
	          return val;
	        }
	      };
	      shift = result(this.options.shift);
	      if (typeof shift === 'string') {
	        shift = shift.split(' ');
	        shift[1] || (shift[1] = shift[0]);
	        shiftTop = shift[0], shiftLeft = shift[1];
	        shiftTop = parseFloat(shiftTop, 10);
	        shiftLeft = parseFloat(shiftLeft, 10);
	      } else {
	        _ref = [shift.top, shift.left], shiftTop = _ref[0], shiftLeft = _ref[1];
	      }
	      top += shiftTop;
	      left += shiftLeft;
	      return {
	        top: top,
	        left: left
	      };
	    }
	  });

	}).call(this);

	return this.Tether;

	}));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);

	var Tabs = function (_React$Component) {
	  _inherits(Tabs, _React$Component);

	  function Tabs() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Tabs);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      selectedTab: 0
	    }, _this.selectTab = function (options) {
	      _this.setState(options);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Tabs, [{
	    key: 'render',
	    value: function render() {
	      var content = null;
	      var children = React.Children.map(this.props.children, function (child, index) {
	        if (index === this.state.selectedTab) content = child.props.children;
	        return React.cloneElement(child, {
	          active: index === this.state.selectedTab,
	          index: index,
	          selectTab: this.selectTab
	        });
	      }.bind(this));
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'div',
	          { className: 'tabs' },
	          children
	        ),
	        React.createElement(
	          'div',
	          { className: 'content' },
	          content
	        )
	      );
	    }
	  }]);

	  return Tabs;
	}(React.Component);

	exports.default = Tabs;

	Tabs.Tab = __webpack_require__(38);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var classnames = __webpack_require__(4);

	var Tab = function (_React$Component) {
	  _inherits(Tab, _React$Component);

	  function Tab() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Tab);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.select = function () {
	      var options = {
	        selectedTab: _this.props.index
	      };
	      _this.props.selectTab(options);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Tab, [{
	    key: 'render',
	    value: function render() {
	      var classes = {
	        'tab-item': true,
	        'is-active': this.props.active
	      };
	      return React.createElement(
	        'div',
	        { className: classnames(classes), onClick: this.select },
	        this.props.title
	      );
	    }
	  }]);

	  return Tab;
	}(React.Component);

	exports.default = Tab;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var foundationApi = __webpack_require__(6);
	var PopupToggle = __webpack_require__(40);

	var Trigger = function (_React$Component) {
	  _inherits(Trigger, _React$Component);

	  function Trigger() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Trigger);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Trigger.__proto__ || Object.getPrototypeOf(Trigger)).call.apply(_ref, [this].concat(args))), _this), _this.getCloseId = function () {
	      if (_this.props.close) {
	        return _this.props.close;
	      } else {
	        var parentElement = false;
	        var tempElement = ReactDOM.findDOMNode(_this).parentNode;
	        while (parentElement === false) {
	          if (tempElement.nodeName == 'BODY') {
	            parentElement = '';
	          }
	          if (typeof tempElement.getAttribute('data-closable') !== 'undefined' && tempElement.getAttribute('data-closable') !== false) {
	            parentElement = tempElement;
	          }

	          tempElement = tempElement.parentNode;
	        }
	        return parentElement.getAttribute('id');
	      }
	    }, _this.clickHandler = function (e) {
	      e.preventDefault();
	      if (_this.props.open) {
	        foundationApi.publish(_this.props.open, 'open');
	      } else if (_this.props.close !== null) {
	        foundationApi.publish(_this.getCloseId(), 'close');
	      } else if (_this.props.toggle) {
	        foundationApi.publish(_this.props.toggle, 'toggle');
	      } else if (_this.props.hardToggle) {
	        foundationApi.closeActiveElements({ exclude: _this.props.hardToggle });
	        foundationApi.publish(_this.props.hardToggle, 'toggle');
	      } else if (_this.props.notify) {
	        foundationApi.publish(_this.props.notify, {
	          title: _this.props.title,
	          content: _this.props.content,
	          position: _this.props.position,
	          color: _this.props.color,
	          image: _this.props.image
	        });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Trigger, [{
	    key: 'render',
	    value: function render() {
	      if (this.props.popupToggle) {
	        return React.createElement(PopupToggle, this.props);
	      } else {
	        var child = React.Children.only(this.props.children);
	        return React.cloneElement(child, {
	          onClick: this.clickHandler
	        });
	      }
	    }
	  }]);

	  return Trigger;
	}(React.Component);

	Trigger.defaultProps = {
	  open: null,
	  close: null,
	  toggle: null,
	  hardToggle: null,
	  popupToggle: null,
	  notify: null
	};
	exports.default = Trigger;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);
	var foundationApi = __webpack_require__(6);

	var PopupToggle = function (_React$Component) {
	  _inherits(PopupToggle, _React$Component);

	  function PopupToggle() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, PopupToggle);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PopupToggle.__proto__ || Object.getPrototypeOf(PopupToggle)).call.apply(_ref, [this].concat(args))), _this), _this.clickHandler = function (id, e) {
	      e.preventDefault();
	      foundationApi.publish(_this.props.popupToggle, ['toggle', id]);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(PopupToggle, [{
	    key: 'render',
	    value: function render() {
	      var child = React.Children.only(this.props.children);
	      var id = this.props.id || foundationApi.generateUuid();
	      return React.cloneElement(child, {
	        id: id,
	        onClick: this.clickHandler.bind(this, id)
	      });
	    }
	  }]);

	  return PopupToggle;
	}(React.Component);

	module.exports = PopupToggle;

/***/ })
/******/ ])
});
;