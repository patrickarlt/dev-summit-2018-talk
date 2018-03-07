/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
      /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
      /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
        /******/
});
      /******/
}
    /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
    /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
  /******/
})
/************************************************************************/
/******/({

/***/ 0:
/***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__("WkPX");


        /***/
}),

/***/ "EUM8":
/***/ (function (module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__("gHG8");
        if (typeof content === 'string') content = [[module.i, content, '']];
        if (content.locals) module.exports = content.locals;
        // add CSS to Shadow Root
        var add = __webpack_require__("lQRf").default
        module.exports.__inject__ = function (shadowRoot) {
          add("12f9b139", content, shadowRoot)
        };

        /***/
}),

/***/ "FZ+f":
/***/ (function (module, exports) {

        /*
          MIT License http://www.opensource.org/licenses/mit-license.php
          Author Tobias Koppers @sokra
        */
        // css base code, injected by the css-loader
        module.exports = function (useSourceMap) {
          var list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map(function (item) {
              var content = cssWithMappingToString(item, useSourceMap);
              if (item[2]) {
                return "@media " + item[2] + "{" + content + "}";
              } else {
                return content;
              }
            }).join("");
          };

          // import a list of modules into the list
          list.i = function (modules, mediaQuery) {
            if (typeof modules === "string")
              modules = [[null, modules, ""]];
            var alreadyImportedModules = {};
            for (var i = 0; i < this.length; i++) {
              var id = this[i][0];
              if (typeof id === "number")
                alreadyImportedModules[id] = true;
            }
            for (i = 0; i < modules.length; i++) {
              var item = modules[i];
              // skip already imported module
              // this implementation is not 100% perfect for weird media query combinations
              //  when a module is imported multiple times with different media queries.
              //  I hope this will never occur (Hey this way we have smaller bundles)
              if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                if (mediaQuery && !item[2]) {
                  item[2] = mediaQuery;
                } else if (mediaQuery) {
                  item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                }
                list.push(item);
              }
            }
          };
          return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || '';
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }

          if (useSourceMap && typeof btoa === 'function') {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function (source) {
              return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
            });

            return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
          }

          return [content].join('\n');
        }

        // Adapted from convert-source-map (MIT)
        function toComment(sourceMap) {
          // eslint-disable-next-line no-undef
          var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
          var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

          return '/*# ' + data + ' */';
        }


        /***/
}),

/***/ "WkPX":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

        // EXTERNAL MODULE: external "Vue"
        var external__Vue_ = __webpack_require__("lRwf");
        var external__Vue__default = /*#__PURE__*/__webpack_require__.n(external__Vue_);

        // CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
        const camelizeRE = /-(\w)/g;
        const camelize = str => {
          return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
        };

        const hyphenateRE = /\B([A-Z])/g;
        const hyphenate = str => {
          return str.replace(hyphenateRE, '-$1').toLowerCase()
        };

        function getInitialProps(propsList) {
          const res = {};
          propsList.forEach(key => {
            res[key] = undefined;
          });
          return res
        }

        function injectHook(options, key, hook) {
          options[key] = [].concat(options[key] || []);
          options[key].unshift(hook);
        }

        function callHooks(vm, hook) {
          if (vm) {
            const hooks = vm.$options[hook] || [];
            hooks.forEach(hook => {
              hook.call(vm);
            });
          }
        }

        function createCustomEvent(name, args) {
          return new CustomEvent(name, {
            bubbles: false,
            cancelable: false,
            detail: args
          })
        }

        const isBoolean = val => /function Boolean/.test(String(val));
        const isNumber = val => /function Number/.test(String(val));

        function convertAttributeValue(value, name, { type } = {}) {
          if (isBoolean(type)) {
            if (value === 'true' || value === 'false') {
              return value === 'true'
            }
            if (value === '' || value === name) {
              return true
            }
            return value != null
          } else if (isNumber(type)) {
            const parsed = parseFloat(value, 10);
            return isNaN(parsed) ? value : parsed
          } else {
            return value
          }
        }

        function toVNodes(h, children) {
          const res = [];
          for (let i = 0, l = children.length; i < l; i++) {
            res.push(toVNode(h, children[i]));
          }
          return res
        }

        function toVNode(h, node) {
          if (node.nodeType === 3) {
            return node.data.trim() ? node.data : null
          } else if (node.nodeType === 1) {
            const data = {
              attrs: getAttributes(node),
              domProps: {
                innerHTML: node.innerHTML
              }
            };
            if (data.attrs.slot) {
              data.slot = data.attrs.slot;
              delete data.attrs.slot;
            }
            return h(node.tagName, data)
          } else {
            return null
          }
        }

        function getAttributes(node) {
          const res = {};
          for (let i = 0, l = node.attributes.length; i < l; i++) {
            const attr = node.attributes[i];
            res[attr.nodeName] = attr.nodeValue;
          }
          return res
        }

        function wrap(Vue, Component) {
          const isAsync = typeof Component === 'function' && !Component.cid;
          let isInitialized = false;
          let hyphenatedPropsList;
          let camelizedPropsList;
          let camelizedPropsMap;

          function initialize(Component) {
            if (isInitialized) return

            const options = typeof Component === 'function'
              ? Component.options
              : Component;

            // extract props info
            const propsList = Array.isArray(options.props)
              ? options.props
              : Object.keys(options.props || {});
            hyphenatedPropsList = propsList.map(hyphenate);
            camelizedPropsList = propsList.map(camelize);
            const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
            camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
              map[key] = originalPropsAsObject[propsList[i]];
              return map
            }, {});

            // proxy $emit to native DOM events
            injectHook(options, 'beforeCreate', function () {
              const emit = this.$emit;
              this.$emit = (name, ...args) => {
                this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
                return emit.call(this, name, ...args)
              };
            });

            injectHook(options, 'created', function () {
              // sync default props values to wrapper on created
              camelizedPropsList.forEach(key => {
                this.$root.props[key] = this[key];
              });
            });

            // proxy props as Element properties
            camelizedPropsList.forEach(key => {
              Object.defineProperty(CustomElement.prototype, key, {
                get() {
                  return this._wrapper.props[key]
                },
                set(newVal) {
                  this._wrapper.props[key] = newVal;
                },
                enumerable: false,
                configurable: true
              });
            });

            isInitialized = true;
          }

          function syncAttribute(el, key) {
            const camelized = camelize(key);
            const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
            el._wrapper.props[camelized] = convertAttributeValue(
              value,
              key,
              camelizedPropsMap[camelized]
            );
          }

          class CustomElement extends HTMLElement {
            constructor() {
              super();
              this.attachShadow({ mode: 'open' });

              const wrapper = this._wrapper = new Vue({
                name: 'shadow-root',
                customElement: this,
                shadowRoot: this.shadowRoot,
                data() {
                  return {
                    props: {},
                    slotChildren: []
                  }
                },
                render(h) {
                  return h(Component, {
                    ref: 'inner',
                    props: this.props
                  }, this.slotChildren)
                }
              });

              // Use MutationObserver to react to future attribute & slot content change
              const observer = new MutationObserver(mutations => {
                let hasChildrenChange = false;
                for (let i = 0; i < mutations.length; i++) {
                  const m = mutations[i];
                  if (isInitialized && m.type === 'attributes' && m.target === this) {
                    syncAttribute(this, m.attributeName);
                  } else {
                    hasChildrenChange = true;
                  }
                }
                if (hasChildrenChange) {
                  wrapper.slotChildren = Object.freeze(toVNodes(
                    wrapper.$createElement,
                    this.childNodes
                  ));
                }
              });
              observer.observe(this, {
                childList: true,
                subtree: true,
                characterData: true,
                attributes: true
              });
            }

            get vueComponent() {
              return this._wrapper.$refs.inner
            }

            connectedCallback() {
              const wrapper = this._wrapper;
              if (!wrapper._isMounted) {
                // initialize attributes
                const syncInitialAttributes = () => {
                  wrapper.props = getInitialProps(camelizedPropsList);
                  hyphenatedPropsList.forEach(key => {
                    syncAttribute(this, key);
                  });
                };

                if (isInitialized) {
                  syncInitialAttributes();
                } else {
                  // async & unresolved
                  Component().then(resolved => {
                    if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
                      resolved = resolved.default;
                    }
                    initialize(resolved);
                    syncInitialAttributes();
                  });
                }
                // initialize children
                wrapper.slotChildren = Object.freeze(toVNodes(
                  wrapper.$createElement,
                  this.childNodes
                ));
                wrapper.$mount();
                this.shadowRoot.appendChild(wrapper.$el);
              } else {
                callHooks(this.vueComponent, 'activated');
              }
            }

            disconnectedCallback() {
              callHooks(this.vueComponent, 'deactivated');
            }
          }

          if (!isAsync) {
            initialize(Component);
          }

          return CustomElement
        }

/* harmony default export */ var vue_wc_wrapper = (wrap);

        // EXTERNAL MODULE: ./node_modules/css-loader/lib/css-base.js
        var css_base = __webpack_require__("FZ+f");
        var css_base_default = /*#__PURE__*/__webpack_require__.n(css_base);

        // EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
        var addStylesShadow = __webpack_require__("lQRf");

        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
        /* globals __VUE_SSR_CONTEXT__ */

        // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
        // This module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle.

        function normalizeComponent(
          scriptExports,
          render,
          staticRenderFns,
          functionalTemplate,
          injectStyles,
          scopeId,
          moduleIdentifier, /* server only */
          shadowMode /* vue-cli only */
        ) {
          scriptExports = scriptExports || {}

          // ES6 modules interop
          var type = typeof scriptExports.default
          if (type === 'object' || type === 'function') {
            scriptExports = scriptExports.default
          }

          // Vue.extend constructor export interop
          var options = typeof scriptExports === 'function'
            ? scriptExports.options
            : scriptExports

          // render functions
          if (render) {
            options.render = render
            options.staticRenderFns = staticRenderFns
            options._compiled = true
          }

          // functional template
          if (functionalTemplate) {
            options.functional = true
          }

          // scopedId
          if (scopeId) {
            options._scopeId = scopeId
          }

          var hook
          if (moduleIdentifier) { // server build
            hook = function (context) {
              // 2.3 injection
              context =
                context || // cached call
                (this.$vnode && this.$vnode.ssrContext) || // stateful
                (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__
              }
              // inject component styles
              if (injectStyles) {
                injectStyles.call(this, context)
              }
              // register component module identifier for async chunk inferrence
              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier)
              }
            }
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            options._ssrRegister = hook
          } else if (injectStyles) {
            hook = shadowMode
              ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
              : injectStyles
          }

          if (hook) {
            if (options.functional) {
              // for template-only hot-reload because in that case the render fn doesn't
              // go through the normalizer
              options._injectStyles = hook
              // register for functioal component in vue file
              var originalRender = options.render
              options.render = function renderWithStyleInjection(h, context) {
                hook.call(context)
                return originalRender(h, context)
              }
            } else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate
              options.beforeCreate = existing
                ? [].concat(existing, hook)
                : [hook]
            }
          }

          return {
            exports: scriptExports,
            options: options
          }
        }

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/patr7104/Projects/dev-summit-2018-talks/custom-elements/demos/vue/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/CopyableText.vue
//
//
//
//
//
//
//
/* harmony default export */ var CopyableText = ({
          name: "VueCopyableText",
          props: {
            text: String,
            label: String
          },
          methods: {
            copyText: function copyText() {
              var copyTarget = document.createElement("input");
              copyTarget.value = this.text;
              document.body.appendChild(copyTarget);

              try {
                copyTarget.select();
                document.execCommand("copy");
              } catch (err) {
                this.$refs.input.select();
              } finally {
                document.body.removeChild(copyTarget);
              }

              this.$emit("copy");
            }
          }
        });
        // CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7db15a55","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/CopyableText.vue
        var render = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', { staticClass: "wrapper" }, [_c('input', { ref: "input", attrs: { "type": "text" }, domProps: { "value": _vm.text } }), _c('button', { on: { "click": _vm.copyText } }, [_vm._v(_vm._s(_vm.label))])]) }
        var staticRenderFns = []

        // CONCATENATED MODULE: ./src/components/CopyableText.vue
        function injectStyle(context) {
          var i
            ; (i = __webpack_require__("EUM8"), i.__inject__ && i.__inject__(context), i)
        }
        /* script */


        /* template */

        /* template functional */
        var __vue_template_functional__ = false
        /* styles */
        var __vue_styles__ = injectStyle
        /* scopeId */
        var __vue_scopeId__ = "data-v-7db15a55"
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null

        var Component = normalizeComponent(
          CopyableText,
          render,
          staticRenderFns,
          __vue_template_functional__,
          __vue_styles__,
          __vue_scopeId__,
          __vue_module_identifier__
          , true)

/* harmony default export */ var components_CopyableText = (Component.exports);

        // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js



        // runtime shared by every component chunk





        window.customElements.define('vue-copyable-text', vue_wc_wrapper(external__Vue__default.a, components_CopyableText))

        /***/
}),

/***/ "gHG8":
/***/ (function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__("FZ+f")(false);
        // imports


        // module
        exports.push([module.i, ".wrapper[data-v-7db15a55]{display:-webkit-box;display:-ms-flexbox;display:flex}input[data-v-7db15a55]{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;border:1px solid #333;border-right:none;font-family:sans-serif;padding:.5rem;margin:0}button[data-v-7db15a55]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;border:1px solid #333;background:#efefef;font-family:sans-serif;padding:.5rem}", ""]);

        // exports


        /***/
}),

/***/ "lQRf":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

        // CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
        /**
         * Translates the list format produced by css-loader into something
         * easier to manipulate.
         */
        function listToStyles(parentId, list) {
          var styles = []
          var newStyles = {}
          for (var i = 0; i < list.length; i++) {
            var item = list[i]
            var id = item[0]
            var css = item[1]
            var media = item[2]
            var sourceMap = item[3]
            var part = {
              id: parentId + ':' + i,
              css: css,
              media: media,
              sourceMap: sourceMap
            }
            if (!newStyles[id]) {
              styles.push(newStyles[id] = { id: id, parts: [part] })
            } else {
              newStyles[id].parts.push(part)
            }
          }
          return styles
        }

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesToShadowDOM;


        function addStylesToShadowDOM(parentId, list, shadowRoot) {
          var styles = listToStyles(parentId, list)
          addStyles(styles, shadowRoot)
        }

        /*
        type StyleObject = {
          id: number;
          parts: Array<StyleObjectPart>
        }
        
        type StyleObjectPart = {
          css: string;
          media: string;
          sourceMap: ?string
        }
        */

        function addStyles(styles /* Array<StyleObject> */, shadowRoot) {
          const injectedStyles =
            shadowRoot._injectedStyles ||
            (shadowRoot._injectedStyles = {})
          for (var i = 0; i < styles.length; i++) {
            var item = styles[i]
            var style = injectedStyles[item.id]
            if (style) {
              style.refs++
              for (var j = 0; j < style.parts.length; j++) {
                style.parts[j](item.parts[j])
              }
              for (; j < item.parts.length; j++) {
                style.parts.push(addStyle(item.parts[j], shadowRoot))
              }
              if (style.parts.length > item.parts.length) {
                style.parts.length = item.parts.length
              }
            } else {
              var parts = []
              for (var j = 0; j < item.parts.length; j++) {
                parts.push(addStyle(item.parts[j], shadowRoot))
              }
              injectedStyles[item.id] = { id: item.id, refs: 1, parts: parts }
            }
          }
        }

        function createStyleElement(shadowRoot) {
          var styleElement = document.createElement('style')
          styleElement.type = 'text/css'
          shadowRoot.appendChild(styleElement)
          return styleElement
        }

        function addStyle(obj /* StyleObjectPart */, shadowRoot) {
          var styleElement = createStyleElement(shadowRoot)
          var css = obj.css
          var media = obj.media
          var sourceMap = obj.sourceMap

          if (media) {
            styleElement.setAttribute('media', media)
          }

          if (sourceMap) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
            // http://stackoverflow.com/a/26603875
            css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
          }

          if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css
          } else {
            while (styleElement.firstChild) {
              styleElement.removeChild(styleElement.firstChild)
            }
            styleElement.appendChild(document.createTextNode(css))
          }
        }


        /***/
}),

/***/ "lRwf":
/***/ (function (module, exports) {

        module.exports = Vue;

        /***/
})

    /******/
});
//# sourceMappingURL=vue-copyable-text.js.map
