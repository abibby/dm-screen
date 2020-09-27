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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary, createElement, createContext, createRef, Fragment, Component, default, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createFactory, cloneElement, isValidElement, findDOMNode, PureComponent, memo, forwardRef, unstable_batchedUpdates, StrictMode, Suspense, SuspenseList, lazy, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return tn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return en; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return un; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return rn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return nn; });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useErrorBoundary"]; });

/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

function S(n,t){for(var e in t)n[e]=t[e];return n}function w(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function C(n){this.props=n}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:w(this.props,n)}function r(t){return this.shouldComponentUpdate=e,Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(C.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).isPureReactComponent=!0,C.prototype.shouldComponentUpdate=function(n,t){return w(this.props,n)||w(this.state,t)};var R=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b;preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n)};var x="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function N(n){function t(t,e){var r=S({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=x,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var k=function(n,t){return null==n?null:Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).map(t))},O={map:k,forEach:k,count:function(n){return n?Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).length:0},only:function(n){var t=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"]},A=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e;function L(n){return n&&((n=S({},n)).__c=null,n.__k=n.__k&&n.__k.map(L)),n}function U(n){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(U)),n}function F(){this.__u=0,this.t=null,this.__b=null}function M(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function j(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(e,u)}return u.displayName="Lazy",u.__f=!0,u}function D(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t.__c);A(n,t,e)},(F.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).__c=function(n,t){var e=this;null==e.t&&(e.t=[]),e.t.push(t);var r=M(e.__v),u=!1,o=function(){u||(u=!0,t.componentWillUnmount=t.__c,r?r(i):i())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){o(),t.__c&&t.__c()};var i=function(){var n;if(!--e.__u)for(e.__v.__k[0]=U(e.state.__e),e.setState({__e:e.__b=null});n=e.t.pop();)n.forceUpdate()},c=e.__v;c&&!0===c.__h||e.__u++||e.setState({__e:e.__b=e.__v.__k[0]}),n.then(o,o)},F.prototype.componentWillUnmount=function(){this.t=[]},F.prototype.render=function(n,t){this.__b&&(this.__v.__k&&(this.__v.__k[0]=L(this.__b)),this.__b=null);var e=t.__e&&Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],null,n.fallback);return e&&(e.__h=null),[Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],null,t.__e?null:n.children),e]};var I=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function T(n){return this.getChildContext=function(){return n.context},n.children}function W(n){var t=this,e=n.i,r=Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(T,{context:t.context},n.__v);t.componentWillUnmount=function(){var n=t.l.parentNode;n&&n.removeChild(t.l),Object(preact__WEBPACK_IMPORTED_MODULE_1__["__u"])(t.s)},t.i&&t.i!==e&&(t.componentWillUnmount(),t.h=!1),n.__v?t.h?(e.__k=t.__k,Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(r,e),t.__k=e.__k):(t.l=document.createTextNode(""),t.__k=e.__k,Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])("",e),e.appendChild(t.l),t.h=!0,t.i=e,Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(r,e,t.l),e.__k=t.__k,t.__k=t.l.__k):t.h&&t.componentWillUnmount(),t.s=r}function P(n,t){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(W,{__v:n,i:t})}(D.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).__e=function(n){var t=this,e=M(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),I(t,n,r)):u()};e?e(o):o()}},D.prototype.render=function(n){this.u=null,this.o=new Map;var t=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},D.prototype.componentDidUpdate=D.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){I(n,e,t)})};var z="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,V=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,B="undefined"!=typeof Symbol?/fil|che|rad/i:/fil|che|ra/i;function H(n,t,e){return null==t.__k&&(t.textContent=""),Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(n,t),"function"==typeof e&&e(),n?n.__c:null}function Z(n,t,e){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var Y=preact__WEBPACK_IMPORTED_MODULE_1__["options"].event;function $(){}function q(){return this.cancelBubble}function G(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_1__["options"].event=function(n){return Y&&(n=Y(n)),n.persist=$,n.isPropagationStopped=q,n.isDefaultPrevented=G,n.nativeEvent=n};var J,K={configurable:!0,get:function(){return this.class}},Q=preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode=function(n){n.$$typeof=z;var t=n.type,e=n.props;if("function"==typeof t)(K.enumerable="className"in e)&&(e.class=e.className),Object.defineProperty(e,"className",K);else if(t){var r={};for(var u in e){var o=e[u];"className"===u&&(r.class=o,K.enumerable=!0),"defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!B.test(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():V.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o}Object.defineProperty(r,"className",K),"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),n.props=r}Q&&Q(n)};var X=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__r;preact__WEBPACK_IMPORTED_MODULE_1__["options"].__r=function(n){X&&X(n),J=n.__c};var nn={ReactCurrentDispatcher:{current:{readContext:function(n){return J.__n[n.__c].props.value}}}},tn="16.8.0";function en(n){return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"].bind(null,n)}function rn(n){return!!n&&n.$$typeof===z}function un(n){return rn(n)?preact__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(null,arguments):n}function on(n){return!!n.__k&&(Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null,n),!0)}function cn(n){return n&&(n.base||1===n.nodeType&&n)||null}var ln=function(n,t){return n(t)},fn=preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"];/* harmony default export */ __webpack_exports__["default"] = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"],useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"],useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"],useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"],useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"],useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"],useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"],useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"],useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"],useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"],version:"16.8.0",Children:O,render:H,hydrate:Z,unmountComponentAtNode:on,createPortal:P,createElement:preact__WEBPACK_IMPORTED_MODULE_1__["createElement"],createContext:preact__WEBPACK_IMPORTED_MODULE_1__["createContext"],createFactory:en,cloneElement:un,createRef:preact__WEBPACK_IMPORTED_MODULE_1__["createRef"],Fragment:preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],isValidElement:rn,findDOMNode:cn,Component:preact__WEBPACK_IMPORTED_MODULE_1__["Component"],PureComponent:C,memo:g,forwardRef:N,unstable_batchedUpdates:ln,StrictMode:preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],Suspense:F,SuspenseList:D,lazy:j,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:nn});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, __u, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__u", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function h(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v(n,f,i,t,null)}function v(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o};return null==o&&(r.__v=r),null!=n.vnode&&n.vnode(r),r}function y(){return{current:null}}function p(n){return n.children}function d(n,l){this.props=n,this.context=l}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?_(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!g.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(g)}function g(){for(var n;g.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=i,t=$(f,o,i,l.__n,void 0!==f.ownerSVGElement,null!=o.__h?[r]:null,u,null==r?_(o):r,o.__h),j(u,o),t!=r&&w(o)))})}function m(n,l,u,i,t,o,r,c,s,h){var y,d,w,k,g,m,b,A=i&&i.__k||e,P=A.length;for(s==f&&(s=null!=r?r[0]:P?_(i,0):null),u.__k=[],y=0;y<l.length;y++)if(null!=(k=u.__k[y]=null==(k=l[y])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(p,{children:k},null,null,null):null!=k.__e||null!=k.__c?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(w=A[y])||w&&k.key==w.key&&k.type===w.type)A[y]=void 0;else for(d=0;d<P;d++){if((w=A[d])&&k.key==w.key&&k.type===w.type){A[d]=void 0;break}w=null}g=$(n,k,w=w||f,t,o,r,c,s,h),(d=k.ref)&&w.ref!=d&&(b||(b=[]),w.ref&&b.push(w.ref,null,k),b.push(d,k.__c||g,k)),null!=g?(null==m&&(m=g),s=x(n,k,w,A,r,g,s),h||"option"!=u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&w.__e==s&&s.parentNode!=n&&(s=_(w))}if(u.__e=m,null!=r&&"function"!=typeof u.type)for(y=r.length;y--;)null!=r[y]&&a(r[y]);for(y=P;y--;)null!=A[y]&&L(A[y],A[y]);if(b)for(y=0;y<b.length;y++)I(b[y],b[++y],b[++y])}function b(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){b(n,l)}):l.push(n)),l}function x(n,l,u,i,t,o,r){var f,e,c;if(void 0!==l.__d)f=l.__d,l.__d=void 0;else if(t==u||o!=r||null==o.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(o),f=null;else{for(e=r,c=0;(e=e.nextSibling)&&c<i.length;c+=2)if(e==o)break n;n.insertBefore(o,r),f=r}return void 0!==f?f:o.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px"}function C(n,l,u,i,t){var o,r,f;if(t&&"className"==l&&(l="class"),"style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else"o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),(r=l.toLowerCase())in n&&(l=r),l=l.slice(2),n.l||(n.l={}),n.l[l+o]=u,f=o?N:z,u?i||n.addEventListener(l,f,o):n.removeEventListener(l,f,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&"download"!==l&&"href"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u))}function z(l){this.l[l.type+!1](n.event?n.event(l):l)}function N(l){this.l[l.type+!0](n.event?n.event(l):l)}function T(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,t.__e&&("function"==typeof t.type&&t.__k.length>1&&T(t,l,u),l=x(u,t,t,n.__k,null,t.__e,l),"function"==typeof n.type&&(n.__d=l)))}function $(l,u,i,t,o,r,f,e,c){var a,h,v,y,_,w,k,g,b,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?k=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(g,x):(u.__c=h=new d(g,x),h.constructor=P,h.render=M),b&&b.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,P.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,h.__h.length&&f.push(h),T(u,e,l);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,w)})}h.context=x,h.props=g,h.state=h.__s,(a=n.__r)&&a(u),h.__d=!1,h.__v=u,h.__P=l,a=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(w=h.getSnapshotBeforeUpdate(y,_)),A=null!=a&&a.type==p&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),k&&(h.__E=h.__=null),h.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=H(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),n.__e(l,u,i)}return u.__e}function j(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function H(n,l,u,i,t,o,r,c){var s,a,h,v,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,c=!1}if(null===l.type)p===d||c&&n.data===d||(n.data=d);else{if(null!=o&&(o=e.slice.call(n.childNodes)),h=(p=u.props||f).dangerouslySetInnerHTML,v=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===n.innerHTML)||(n.innerHTML=v&&v.__html||""))}A(n,d,p,t,c),v?l.__k=[]:(s=l.props.children,m(n,Array.isArray(s)?s:[s],l,u,i,"foreignObject"!==l.type&&t,o,r,f,c)),c||("value"in d&&void 0!==(s=d.value)&&(s!==n.value||"progress"===l.type&&!s)&&C(n,"value",s,p.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&C(n,"checked",s,p.checked,!1))}return n}function I(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||I(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&a(o)}function M(n,l,u){return this.constructor(n,u)}function O(l,u,i){var t,r,c;n.__&&n.__(l,u),r=(t=i===o)?null:i&&i.__k||u.__k,l=h(p,null,[l]),c=[],$(u,(t?u:i||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:u.childNodes.length?e.slice.call(u.childNodes):null,c,i||f,t),j(c,l)}function S(n,l){O(n,l,o)}function q(n,l,u){var i,t,o,r=arguments,f=s({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function B(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n,u,i){return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t,o=l.__h;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return l.__h=o,u.__E=u}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},d.prototype.render=p,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,o=f,r=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return d; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,u,r,o=0,i=[],c=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,f=preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,e=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,a=preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;function v(t,r){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function m(n){return o=1,p(k,n)}function p(n,r,o){var i=v(t++,2);return i.t=n,i.__c||(i.__c=u,i.__=[o?o(r):k(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}]),i.__}function y(r,o){var i=v(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s&&j(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function l(r,o){var i=v(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s&&j(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function h(n){return o=5,_(function(){return{current:n}},[])}function s(n,t,u){o=6,l(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function _(n,u){var r=v(t++,7);return j(r.__H,u)?(r.__H=u,r.__h=n,r.__=n()):r.__}function A(n,t){return o=8,_(function(){return n},t)}function F(n){var r=u.context[n.__c],o=v(t++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T(t,u){preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(u?u(t):t)}function d(n){var r=v(t++,10),o=m();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function q(){i.some(function(t){if(t.__P)try{t.__H.__h.forEach(b),t.__H.__h.forEach(g),t.__H.__h=[]}catch(u){return t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u,t.__v),!0}}),i=[]}preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r=function(n){c&&c(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(b),r.__h.forEach(g),r.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed=function(t){f&&f(t);var u=t.__c;u&&u.__H&&u.__H.__h.length&&(1!==i.push(u)&&r===preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),x&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);x&&(t=requestAnimationFrame(u))})(q))},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c=function(t,u){u.some(function(t){try{t.__h.forEach(b),t.__h=t.__h.filter(function(n){return!n.__||g(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r,t.__v)}}),e&&e(t,u)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount=function(t){a&&a(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(b)}catch(t){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(t,u.__v)}};var x="function"==typeof requestAnimationFrame;function b(n){"function"==typeof n.u&&n.u()}function g(n){n.u=n.__()}function j(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function k(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return Ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return oe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return re; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return Fe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return Ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return Be; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return Ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return Ye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return Se; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return We; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return Xe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return Je; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(t)},w=Object.freeze([]),b=Object.freeze({});function N(e){return"function"==typeof e}function E(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function _(e){return e&&"string"==typeof e.styledComponentId}var I="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.2.0",A="undefined"!=typeof window&&"HTMLElement"in window,O="boolean"==typeof SC_DISABLE_SPEEDY&&SC_DISABLE_SPEEDY||"undefined"!=typeof process&&(process.env.REACT_APP_SC_DISABLE_SPEEDY||process.env.SC_DISABLE_SPEEDY)||"production"!=="development",P={},R=function(){return true?__webpack_require__.nc:undefined},j= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:undefined;function T(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?undefined:new Error(T.apply(void 0,[j[e]].concat(n)).trim())}var k=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(I))return r}}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(I,"active"),r.setAttribute("data-styled-version","5.2.0");var s=R();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},x=function(){function e(e){var t=this.element=k(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}D(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),V=function(){function e(e){var t=this.element=k(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),M=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),z=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&D(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var s=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),G=new Map,F=new Map,B=1,L=function(e){if(G.has(e))return G.get(e);var t=B++;return true&&((0|t)<0||t>1<<30)&&D(16,""+t),G.set(e,t),F.set(t,e),t},q=function(e){return F.get(e)},H=function(e,t){t>=B&&(B=t+1),G.set(e,t),F.set(t,e)},$="style["+I+'][data-styled-version="5.2.0"]',Y=new RegExp("^"+I+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),W=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},U=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,i=n.length;o<i;o++){var s=n[o].trim();if(s){var a=s.match(Y);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(H(u,c),W(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(s)}}},J=A,X={isServer:!A,useCSSOMInjection:!O},Z=function(){function e(e,t,n){void 0===e&&(e=X),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&A&&J&&(J=!1,function(e){for(var t=document.querySelectorAll($),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(I)&&(U(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return L(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new M(o):r?new x(o):new V(o),new z(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(L(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(L(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(L(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var i=q(o);if(void 0!==i){var s=e.names.get(i),a=t.getGroup(o);if(void 0!==s&&0!==a.length){var c=I+".g"+o+'[id="'+i+'"]',u="";void 0!==s&&s.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Q=function(e){return K(5381,e)},ee=/^\s*\/\/.*$/gm,te=[":","[",".","#"];function ne(e){var t,n,r,o,i=void 0===e?b:e,s=i.options,a=void 0===s?b:s,c=i.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,i,s,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,i){return 0===r&&te.includes(i[n.length])||i.match(o)?e:"."+t};function m(e,i,s,a){void 0===a&&(a="&");var c=e.replace(ee,""),u=i&&s?s+" "+i+" { "+c+" }":c;return t=a,n=i,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(s||!i?"":i,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||D(15),K(e,t.name)}),5381).toString():"",m}var re=react__WEBPACK_IMPORTED_MODULE_1__["default"].createContext(),oe=re.Consumer,ie=react__WEBPACK_IMPORTED_MODULE_1__["default"].createContext(),se=(ie.Consumer,new Z),ae=ne();function ce(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(re)||se}function ue(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ie)||ae}function le(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(e.stylisPlugins),n=t[0],i=t[1],c=ce(),u=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return ne({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(re.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(ie.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1__["default"].Children.only(e.children):undefined))}var de=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=ae);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return D(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=ae),this.name+e.hash},e}(),he=/([A-Z])/,pe=new RegExp(he,"g"),fe=/^ms-/,me=function(e){return"-"+e.toLowerCase()};function ye(e){return he.test(e)?e.replace(pe,me).replace(fe,"-ms-"):e}var ve=function(e){return null==e||!1===e||""===e};function ge(e,n,r,o){if(Array.isArray(e)){for(var i,s=[],a=0,c=e.length;a<c;a+=1)""!==(i=ge(e[a],n,r,o))&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(ve(e))return"";if(_(e))return"."+e.styledComponentId;if(N(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(u)&&console.warn(E(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),ge(u,n,r,o)}var l;return e instanceof de?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,i=[];for(var s in t)t.hasOwnProperty(s)&&!ve(t[s])&&(S(t[s])?i.push.apply(i,e(t[s],s)):N(t[s])?i.push(ye(s)+":",t[s],";"):i.push(ye(s)+": "+(r=s,null==(o=t[s])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"]?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString()}function Se(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return N(e)||S(e)?ge(g(w,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:ge(g(e,n))}var we=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},be=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Ne(e,t,n){var r=e[n];we(t)&&we(r)?Ee(r,t):e[n]=t}function Ee(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var s=i[o];if(we(s))for(var a in s)be(a)&&Ne(e,s[a],a)}return e}var _e=/(a)(d)/gi,Ie=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ce(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ie(t%52)+n;return(Ie(t%52)+n).replace(_e,"$1-$2")}function Ae(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(N(n)&&!_(n))return!1}return!0}var Oe=Q("5.2.0"),Pe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&false,this.componentId=t,this.baseHash=K(Oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var i=ge(this.rules,e,t,n).join(""),s=Ce(K(this.baseHash,i.length)>>>0);if(!t.hasNameForId(r,s)){var a=n(i,"."+s,void 0,r);t.insertRules(r,s,a)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,u=K(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=K(u,h+d));else if(h){var p=ge(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=K(u,f+d),l+=f}}if(l){var m=Ce(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),Re=/invalid hook call/i,je=new Set,Te=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(),je.has(n)||(console.warn(n),je.add(n))}catch(e){Re.test(e.message)&&je.delete(n)}}},De=function(e,t,n){return void 0===n&&(n=b),e.theme!==n.theme&&e.theme||t||n.theme},ke=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xe=/(^-|-$)/g;function Ve(e){return e.replace(ke,"-").replace(xe,"")}function Me(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var ze=function(e){return Ce(Q(e)>>>0)},Ge=react__WEBPACK_IMPORTED_MODULE_1__["default"].createContext(),Fe=Ge.Consumer;function Be(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Ge),n=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return function(e,t){if(!e)return D(14);if(N(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:D(7)}return Array.isArray(e)||"object"!=typeof e?D(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(Ge.Provider,{value:n},e.children):null}var Le={};function qe(e,t,n){var o=_(e),s=!Me(e),a=t.displayName,c=void 0===a?function(e){return Me(e)?"styled."+e:"Styled("+E(e)+")"}(e):a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":Ve(e);Le[n]=(Le[n]||0)+1;var r=n+"-"+ze("5.2.0"+n+Le[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.attrs,f=void 0===p?w:p,g=t.displayName&&t.componentId?Ve(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,f).filter(Boolean):f,I=t.shouldForwardProp;o&&e.shouldForwardProp&&(I=I?function(n,r){return e.shouldForwardProp(n,r)&&t.shouldForwardProp(n,r)}:e.shouldForwardProp);var C,A=new Pe(n,g,o?e.componentStyle:void 0),O=function(e,t){return function(e,t,n){var r=e.attrs,o=e.componentStyle,s=e.defaultProps,a=e.foldedComponentIds,c=e.shouldForwardProp,d=e.styledComponentId,h=e.target; true&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(d);var p=function(e,t,n){void 0===e&&(e=b);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,i,s=e;for(t in N(s)&&(s=s(r)),s)r[t]=o[t]="className"===t?(n=o[t],i=s[t],n&&i?n+" "+i:n||i):s[t]})),[r,o]}(De(t,Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Ge),s)||b,t,r),f=p[0],y=p[1],g=function(e,t,n,r){var o=ce(),i=ue(),s=e.isStatic&&!t,a=s?e.generateAndInjectStyles(b,o,i):e.generateAndInjectStyles(n,o,i);return true&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(a), true&&!s&&r&&r(a),a}(o,r.length>0,f, true?e.warnTooManyClasses:undefined),S=n,w=y.$as||t.$as||y.as||t.as||h,E=Me(w),_=y!==t?v({},t,{},y):t,I=c||E&&_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"],C={};for(var A in _)"$"!==A[0]&&"as"!==A&&("forwardedAs"===A?C.as=_[A]:I&&!I(A,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])||(C[A]=_[A]));return t.style&&y.style!==t.style&&(C.style=v({},t.style,{},y.style)),C.className=Array.prototype.concat(a,d,g!==d?g:null,t.className,y.className).filter(Boolean).join(" "),C.ref=S,Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(w,C)}(C,e,t)};return O.displayName=c,(C=react__WEBPACK_IMPORTED_MODULE_1__["default"].forwardRef(O)).attrs=S,C.componentStyle=A,C.displayName=c,C.shouldForwardProp=I,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),i=r&&r+"-"+(Me(e)?e:Ve(E(e)));return qe(e,v({},o,{attrs:S,componentId:i}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Ee({},e.defaultProps,t):t}}), true&&(Te(c,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var i=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+i+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(c,g)),C.toString=function(){return"."+C.styledComponentId},s&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,self:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var He=function(e){return function e(t,r,o){if(void 0===o&&(o=b),!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(r))return D(1,String(r));var i=function(){return t(r,o,Se.apply(void 0,arguments))};return i.withConfig=function(n){return e(t,r,v({},o,{},n))},i.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},i}(qe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){He[e]=He(e)}));var $e=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ae(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(ge(this.rules,t,n,r).join(""),""),i=this.componentId+e;n.insertRules(i,i,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Ye(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=Se.apply(void 0,[e].concat(n)),a="sc-global-"+ze(JSON.stringify(s)),u=new $e(s,a);function l(e){var t=ce(),n=ue(),o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Ge),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1__["default"].Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&s.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])((function(){return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,P,n,o);else{var i=v({},t,{theme:De(t,r,l.defaultProps)});u.renderStyles(e,i,n,o)}}return true&&Te(a),react__WEBPACK_IMPORTED_MODULE_1__["default"].memo(l)}function We(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Se.apply(void 0,[e].concat(n)).join(""),i=ze(o);return new de(i,o)}var Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=R();return"<style "+[n&&'nonce="'+n+'"',I+'="true"','data-styled-version="5.2.0"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?D(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return D(2);var n=((t={})[I]="",t["data-styled-version"]="5.2.0",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=R();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?D(2):react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(le,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return D(3)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1__["default"].forwardRef((function(t,n){var o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Ge),s=e.defaultProps,a=De(t,o,s);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+E(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+E(e)+")",t},Xe=function(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Ge)},Ze={StyleSheet:Z,masterSheet:se}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles not rendering properly, errors happening during rehydration process, missing theme prop, and makes your application bigger without a good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ __webpack_exports__["default"] = (He);
//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var character_generator_1 = __webpack_require__(/*! components/character-generator */ "./src/components/character-generator.tsx");
var checks_1 = __webpack_require__(/*! components/checks */ "./src/components/checks.tsx");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var travel_1 = __webpack_require__(/*! components/travel */ "./src/components/travel.tsx");
var establishment_generator_1 = __webpack_require__(/*! components/establishment-generator */ "./src/components/establishment-generator.tsx");
var carousing_generator_1 = __webpack_require__(/*! components/carousing-generator */ "./src/components/carousing-generator.tsx");
var Grid = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-auto-rows: 200px;\n    grid-gap: 10px;\n"], ["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-auto-rows: 200px;\n    grid-gap: 10px;\n"])));
var Section = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    overflow: auto;\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    padding: 5px;\n\n    ", "\n"], ["\n    overflow: auto;\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    padding: 5px;\n\n    ",
    "\n"])), function (props) {
    var _a, _b;
    return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        grid-column: span ", ";\n        grid-row: span ", ";\n    "], ["\n        grid-column: span ", ";\n        grid-row: span ", ";\n    "])), (_a = props.width) !== null && _a !== void 0 ? _a : 1, (_b = props.height) !== null && _b !== void 0 ? _b : 1);
});
preact_1.render(preact_1.h(Grid, null,
    preact_1.h(Section, { width: 2, height: 2 },
        preact_1.h(checks_1.Checks, null)),
    preact_1.h(Section, { width: 2 },
        preact_1.h(travel_1.Travel, null)),
    preact_1.h(Section, null,
        preact_1.h(character_generator_1.CharacterGenerator, null)),
    preact_1.h(Section, null,
        preact_1.h(establishment_generator_1.EstablishmentGenerator, null)),
    preact_1.h(Section, null,
        preact_1.h(carousing_generator_1.CarousingGenerator, null))), 
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
document.getElementById('app'));
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/carousing-generator.tsx":
/*!************************************************!*\
  !*** ./src/components/carousing-generator.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.CarousingGenerator = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var hooks_1 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
var lists_1 = __webpack_require__(/*! lists */ "./src/lists/index.ts");
var components_1 = __webpack_require__(/*! components */ "./src/components/index.ts");
var carousing_1 = __webpack_require__(/*! lists/carousing */ "./src/lists/carousing.ts");
exports.CarousingGenerator = function (props) {
    var _a = hooks_1.useState(''), text = _a[0], setText = _a[1];
    var shuffle = hooks_1.useCallback(function () { return setText(lists_1.randomFromList(carousing_1.carousing)); }, [
        setText,
    ]);
    hooks_1.useEffect(function () { return shuffle(); }, [shuffle]);
    return (preact_1.h("div", null,
        preact_1.h(components_1.Title, null, "Carousing"),
        preact_1.h("button", { onClick: shuffle }, "New Carousing"),
        preact_1.h("p", null, text)));
};


/***/ }),

/***/ "./src/components/character-generator.tsx":
/*!************************************************!*\
  !*** ./src/components/character-generator.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.CharacterGenerator = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var hooks_1 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
var lists_1 = __webpack_require__(/*! lists */ "./src/lists/index.ts");
var components_1 = __webpack_require__(/*! components */ "./src/components/index.ts");
exports.CharacterGenerator = function (props) {
    var _a = hooks_1.useState(''), text = _a[0], setText = _a[1];
    var shuffle = hooks_1.useCallback(function () { return setText(lists_1.generate(lists_1.wtfCharacter)); }, [
        setText,
    ]);
    hooks_1.useEffect(function () { return shuffle(); }, [shuffle]);
    return (preact_1.h("div", null,
        preact_1.h(components_1.Title, null, "Character"),
        preact_1.h("button", { onClick: shuffle }, "New Character"),
        preact_1.h("p", null, text)));
};


/***/ }),

/***/ "./src/components/checks.tsx":
/*!***********************************!*\
  !*** ./src/components/checks.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.Checks = void 0;
var components_1 = __webpack_require__(/*! components */ "./src/components/index.ts");
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var skills = [
    ['Str', 'Athletics'],
    ['Dex', 'Acrobatics, Slight of Hand, Stealth'],
    ['Con', 'N/A'],
    ['Int', 'Arcana, History, Investigation, Nature, Religion'],
    ['Wis', 'Animal Handling, Insight, Medicine, Perception, Survival'],
    ['Cha', 'Deception, Intimidation, Performance, Persuasion'],
];
var difficulty = [
    ['Trivial', '5'],
    ['Easy', '10'],
    ['Moderate', '15'],
    ['Hard', '20'],
    ['Very Hard', '25'],
    ['Nearly Impossible', '30'],
];
// https://drive.google.com/drive/folders/0BwCtO5aw9n2LRl9CekVsZjJUd1k
var strength = [
    [
        'Athletics',
        [
            [
                'Automatic',
                'Climb a wall with plenty of handholds or a secure, knotted rope or rope ladder; swim in relatively calm water; jump a number of feet horizontally equal to half of your Strength score, or your full Strength score with a 10 foot running start; leap into the air a number of feet equal to half of (3 + your Strength modifier), or the full amount with a 10 foot running start 2',
            ],
            [
                'Easy',
                'Climb a wall lacking an adequate amount of handholds, tread water in rough conditions, jump a few feet farther than you normally could; during a long jump, clear an obstacle such as a low-lying hedge or wall of height a fourth of the jump’s distance ',
            ],
            [
                'Moderate',
                'Climb a rope dangling from a protrusion or overhang (i.e. lacking a vertical surface to brace against), swim in rough water or against a mild current',
            ],
            [
                'Hard',
                'Climb a wall with very few handholds, catch yourself on a rope or other handhold in the middle or at the end of your jump, swim in violent water or against a strong current',
            ],
            [
                'Very Hard',
                'Climb a slippery or sheer wall with little or no handholds, climb vertically along an overhang with adequate handholds, swim in stormy waters',
            ],
        ],
    ],
    [
        'Feats of Strength • Other',
        [
            [
                'Easy',
                'Force open a stuck or broken door, break free from weak bindings, pull a stuck or wedged object loose',
            ],
            [
                'Moderate',
                'Break through a wooden door reinforced with iron, hang on to a wagon while being dragged behind it',
            ],
            [
                'Hard',
                'Break through a heavy locked or barred door, topple a stone statue',
            ],
            [
                'Very Hard',
                'Break through a heavy, reinforced door such as a prison or armory door, hold a door shut against a room filling with water',
            ],
        ],
    ],
];
exports.Checks = function (props) {
    return (preact_1.h("div", null,
        preact_1.h(components_1.Title, null, "Checks"),
        preact_1.h(components_1.Table, null,
            preact_1.h("thead", null,
                preact_1.h("tr", null,
                    preact_1.h("th", null, "Ability"),
                    preact_1.h("th", null, "Skills"))),
            preact_1.h("tbody", null, toTable(skills))),
        preact_1.h(components_1.Table, null,
            preact_1.h("thead", null,
                preact_1.h("tr", null,
                    preact_1.h("th", null, "Difficulty"),
                    preact_1.h("th", null, "DC"))),
            preact_1.h("tbody", null, toTable(difficulty))),
        strength.map(function (_a) {
            var skill = _a[0], examples = _a[1];
            return (preact_1.h("div", null,
                preact_1.h("h3", null, skill),
                preact_1.h("div", null, examples.map(function (_a) {
                    var difficulty = _a[0], example = _a[1];
                    return (preact_1.h("div", null,
                        preact_1.h("h4", null, difficulty),
                        preact_1.h("p", null, example)));
                }))));
        })));
};
function toTable(arr) {
    return arr.map(function (row) { return (preact_1.h("tr", null, row.map(function (cell) { return (preact_1.h("td", null, cell)); }))); });
}


/***/ }),

/***/ "./src/components/establishment-generator.tsx":
/*!****************************************************!*\
  !*** ./src/components/establishment-generator.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.EstablishmentGenerator = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var hooks_1 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
var lists_1 = __webpack_require__(/*! lists */ "./src/lists/index.ts");
var components_1 = __webpack_require__(/*! components */ "./src/components/index.ts");
var wtf_establishment_1 = __webpack_require__(/*! lists/wtf-establishment */ "./src/lists/wtf-establishment.ts");
exports.EstablishmentGenerator = function (props) {
    var _a = hooks_1.useState(''), text = _a[0], setText = _a[1];
    var shuffle = hooks_1.useCallback(function () { return setText(lists_1.generate(wtf_establishment_1.wtfEstablishment)); }, [
        setText,
    ]);
    hooks_1.useEffect(function () { return shuffle(); }, [shuffle]);
    return (preact_1.h("div", null,
        preact_1.h(components_1.Title, null, "Establishment"),
        preact_1.h("button", { onClick: shuffle }, "New Establishment"),
        preact_1.h("p", null, text)));
};


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Table = exports.Title = void 0;
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.Title = styled_components_1["default"].h2(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: black;\n    color: white;\n    margin-top: -5px;\n    margin-left: -5px;\n    margin-right: -5px;\n    padding: 0 5px;\n"], ["\n    background-color: black;\n    color: white;\n    margin-top: -5px;\n    margin-left: -5px;\n    margin-right: -5px;\n    padding: 0 5px;\n"])));
exports.Table = styled_components_1["default"].table(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border-collapse: collapse;\n    width: 100%;\n\n    > thead {\n        background-color: #333;\n        color: white;\n        td,\n        th {\n            border-left: 1px solid white;\n            border-right: 1px solid white;\n        }\n    }\n    > tbody {\n        > tr:nth-child(even) {\n            background-color: #eee;\n        }\n    }\n"], ["\n    border-collapse: collapse;\n    width: 100%;\n\n    > thead {\n        background-color: #333;\n        color: white;\n        td,\n        th {\n            border-left: 1px solid white;\n            border-right: 1px solid white;\n        }\n    }\n    > tbody {\n        > tr:nth-child(even) {\n            background-color: #eee;\n        }\n    }\n"])));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/travel.tsx":
/*!***********************************!*\
  !*** ./src/components/travel.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.Travel = void 0;
var components_1 = __webpack_require__(/*! components */ "./src/components/index.ts");
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
exports.Travel = function (props) { return (preact_1.h("div", null,
    preact_1.h(components_1.Title, null, "Travel"),
    preact_1.h(components_1.Table, null,
        preact_1.h("thead", null,
            preact_1.h("tr", null,
                preact_1.h("th", { rowSpan: 2 }, "Pace"),
                preact_1.h("th", { colSpan: 3 }, "Distance Per"),
                preact_1.h("th", { rowSpan: 2 }, "Effect")),
            preact_1.h("tr", null,
                preact_1.h("th", null, "Minute"),
                preact_1.h("th", null, "Hour"),
                preact_1.h("th", null, "Day"))),
        preact_1.h("tbody", null,
            preact_1.h("tr", null,
                preact_1.h("td", null, "Slow"),
                preact_1.h("td", null, "200ft"),
                preact_1.h("td", null, "2 miles"),
                preact_1.h("td", null, "18 miles"),
                preact_1.h("td", null, "Able to stealth")),
            preact_1.h("tr", null,
                preact_1.h("td", null, "Normal"),
                preact_1.h("td", null, "300ft"),
                preact_1.h("td", null, "3 miles"),
                preact_1.h("td", null, "34 miles"),
                preact_1.h("td", null, "-")),
            preact_1.h("tr", null,
                preact_1.h("td", null, "Fast"),
                preact_1.h("td", null, "400ft"),
                preact_1.h("td", null, "4 miles"),
                preact_1.h("td", null, "30 miles"),
                preact_1.h("td", null, "-5 Passive Perception")))))); };


/***/ }),

/***/ "./src/lists/alignments.ts":
/*!*********************************!*\
  !*** ./src/lists/alignments.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.alignments = void 0;
exports.alignments = [
    [5, 'lawful good'],
    [8, 'neutral good'],
    [3, 'chaotic good'],
    [5, 'lawful neutral'],
    [10, 'neutral'],
    [2, 'chaotic neutral'],
    [1, 'lawful evil'],
    [1, 'neutral evil'],
    [1, 'chaotic evil'],
];


/***/ }),

/***/ "./src/lists/carousing.ts":
/*!********************************!*\
  !*** ./src/lists/carousing.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.carousing = void 0;
exports.carousing = [
    'You wake up in jail, pending charges for a serious crime (Treason, sedition, grand larceny, etc.). You actually did it.',
    'You wake up in jail, pending charges for a serious crime (Treason, sedition, grand larceny, etc.). You didn’t do it.',
    'You wake up in jail on minor charges. Pay 10gp for bail or spend 1d4 days behind bars.',
    'You wake up in jail on minor charges. Pay 10gp for bail or spend 1d4 days behind bars. Also, your cellmate is an NPC you previously made enemies with.',
    'You wake up in jail on minor charges. Pay 10gp for bail or spend 1d4 days behind bars. Also, your cellmate is an NPC you previously befriended.',
    'You wake up in bed with an NPC you previously made enemies with.',
    'You wake up in bed with an NPC you previously made friends with.',
    'You wake up in bed with a total stranger when they wake up, they are: roll 1d6 1 = Friendly, 2 = Neutral, 3 = Hostile, 4 = Disgusted, 5 = Frightened, 6 = In Love.',
    'You wake up in bed with the spouse of an NPC you previously made friends with.',
    'You wake up in bed with the spouse of an NPC you previously made enemies with.',
    'You wake up in bed with the spouse of an important local noble or official.',
    'You wake up in a strange bed with no one, you can hear the family downstairs calling for the constables.',
    'You wake up in a strange bed with no one. A moment later, a middle aged man invites you down for breakfast. He and his family know you by name and no one seems to find your presence unusual.',
    'You wake up in a strange bed with no one, but there is a scent of long rotting flesh coming from under the mattress.',
    'You wake up chained to a strange bed. A large man in leather comes to release you and shyly asks that you join him for breakfast.',
    'You wake up on the floor of a seedy club. Looks like it was amateur night. Your clothing is in a pile in the corner and you don’t know where the g-string came from, but you have an extra 3d10 cp.',
    'You wake up on the floor of a seedy club. Looks like it was amateur night. Your clothing is in a pile in the corner and you don’t know where the g-string came from, but you have an extra 2d10 cp and a token of admiration from an influential NPC.',
    'You wake up on the floor of a seedy club. Looks like it was amateur night. Your clothing is in a pile in the corner and you don’t know where the g-string came from, but you have an extra 2d10 cp and a token of admiration from an influential NPC’s spouse.',
    'You wake up on the floor of a seedy club. Looks like it was amateur night. Your clothing is in a pile in the corner and you don’t know where the g-string came from, but you have an extra 1d10 cp and a sympathy breakfast courtesy of the cleaning staff.',
    'You wake up on the floor of a seedy club. Looks like it was amateur night. Your clothing is in a pile in the corner and you don’t know where the g-string came from, but you have an extra 1d10 gp and an invitation to attend a private, VIPs only gathering at an influential NPCs estate. (A leather animal mask will arrive wherever the PC is staying shortly.)',
    'You wake up in bed in an unfamiliar inn, the stranger next to you is: roll 1d6 1-2 = Unattractive, 3-4 = Incredibly Ugly, 5-6 = Unspeakably Hideous.',
    'You wake up in bed in an unfamiliar inn, the stranger next to you is: roll 1d6 1-2 = Good Looking, 3-4 = Gorgeous, 5-6 = Way Out of Your League (You should probably just see yourself out before they wake up).',
    'You wake up in bed in an unfamiliar inn, the stranger next to you is: roll 1d6 1-2 = a Goat, 3-4 = a Pig, 5-6 = a Miniature Donkey.',
    'You wake up in your bed. You are wearing a full face of makeup and there are 1d4 gp on the nightstand.',
    'You wake up in your bed. You would get up, but you are tied to it with leather straps.',
    'You wake up in your bed. A dog you have never seen before is licking your left foot.',
    'You wake up in your bed. On you is a document from a local judge stating that you have legally changed your name to the same name as one of your fellow party members.',
    'You wake up in your bed. On you is a document from a local judge stating that you have legally changed your name to the same name as your worst NPC enemy.',
    'You wake up in your bed. On you is a ‘Thank you’ note from an important local official, noble, or organization. It does not make any mention of what they are thanking you for.',
    'You wake up in your bed. You are spooning a whole ham. The ham is wearing a nightgown and lipstick.',
    'You wake up in your bed. You are spooning someone who looks almost exactly like you.',
    'You wake up in your bed. You are dressed as a member of the local watch. A man in his underwear is hogtied at the foot of your bed.',
    'You wake up in your bed. You are wearing a large hat, fake nose, and moustache. Walking around town later, you see a large number of wanted posters. The person depicted looks a lot like you. Only they have a bigger nose. And a moustache. And a hat.',
    'You wake up in your bed. You are 2d6 gp poorer. Within the hour, 300 freshly baked pastries are delivered.',
    'You wake up in your bed. You are 1d20 gp poorer, but now have 1d10 very fine hats.',
    'You wake up in your bed. You are 1d10 gp richer and cradling a trophy with a giant pie on top. You have never felt more sick to your stomach.',
    'You wake up in your bed. You are 1d20 gp poorer. Everything else seems normal, until the life size, lifelike bust of you carved from cheese is delivered.',
    'You wake up in your bed. You are 3d20 gp poorer. Running around your room is a shocker lizard wearing a collar. It seems to be slightly domesticated.',
    'You wake up in your bed. You are wearing a very respectable suit. In your breast pocket is a folded stack of papers indicating that you have been elected to some minor local political position. (Ex: Town Cattle Inspector, District Cheese Quality Controller, etc.)',
    'You wake up in your bed. Everything seems normal. Soon a paladin arrives and tells you how glad he is that you helped him break all those vows last night. When asked which vows, he just winks and says, ‘Oh, you know.’',
    'You wake up in your bed. Everything seems normal. Soon a passive aggressive note is delivered explaining how in your intoxicated state, you wound up on the bad side of a middling local organization. (Scrivener’s Guild, Esoteric Brotherhood of the Fish Mongers, town chapter of the Rotary Club, Home Owner’s Association, whatever. They will probably not attempt to harm the PC, but they may try to foil them in petty ways whenever the PC is in the area.)',
    'You wake up in your bed. Take the cost of your armor type (non-magical), multiply it by 1d4. You are that many gp poorer but you have the result of that 1d4 roll in otherwise cosmetically identical suits of armor in different colors.',
    'You wake up in your bed. You are 1d10 gp poorer and have numerous bruises of unknown origin.',
    'You wake up in your bed. Your knuckles are bruised, bloodied, and full of splinters. Your pockets are filled with fresh produce. You have a vague memory of a fruit cart looking at you funny.',
    'You wake up in your bed. From the corner of your room, you hear the sound of awful crying. It’s a baby.',
    'You wake up in your bed. You are wearing a suit cobbled together from bits and pieces of the skins of various animals. Later in the day, you hear stories of how some clawed, antlered monster was seen peeping in windows and climbing on roofs throughout the night.',
    'You wake up in your bed. At your feet, you see 4d6 mice standing on their hind legs watching you. As soon as you stir, they scatter, leaving behind what appears to be a tiny altar with offerings of bread crust and cheese crumbles. One lock of your hair is now shorter than the rest.',
    'You wake up on the floor of your room. In your bed, there are 2d4 sleeping prostitutes. You are still fully clothed and unsticky.',
    'You wake up on the floor of your room. In your bed is a sleeping pig. The pig is covered in lipstick marks. Your face is also smeared with lipstick.',
    'You wake up on the floor of your room. You are covered in dirt and mud. On your bed is a freshly exhumed corpse.',
    'You wake up on the floor of your room. All the furniture and rugs have been moved up against the walls. In the center is a crudely drawn summoning circle ringed with the remains of black candles. At the center of the circle is a really fantastic looking sandwich.',
    'You wake up in a temple. Several monks have gathered around you and are praying for your soul.',
    'You wake up in a temple. In a coffin. Several monks are standing over you offering a pauper’s last rites. They seem surprised when you start moving.',
    'You wake up in a temple. You are wearing a fine suit. By the altar is a coffin, the corpse inside is wearing your clothes.',
    'You wake up in a temple. In the confessional. Naked. Services are beginning.',
    'You wake up in a temple. In the confessional. Naked. Someone enters the other side and begins confessing their sins.',
    'You wake up in a temple. In holy vestments. Crowds have begun gathering for service.',
    'You wake up in a temple naked behind the altar. The first of the faithful are starting to enter for services. Someone has defecated in the offering dish.',
    'You wake up in the woods 1d4 miles from where you last remember being. You are naked and armed only with a wooden spear hastily carved from a sapling.',
    'You wake up in the woods 1d4 miles from where you last remember being. You are unarmed and only wearing one boot. A wolverine has the other.',
    'You wake up in the woods 1d4 miles from where you last remember being. You are in the middle of a perfect circle of trees, naked save for the freshly flayed skin of a lamb.',
    'You wake up in the woods 1d4 miles from where you last remember being. You head seems to be stuck in some kind of no-kill trap.',
    'You wake up in the woods 1d4 miles from where you last remember being. You are at the bottom of a deep pit trap. Two gap-toothed yokels are leering down at you.',
    'You wake up in the woods 1d4 miles from where you last remember being. You are holding a bear cub.',
    'You wake up in the woods 1d4 miles from where you last remember being. 3d12 miconids are standing in a circle around you, singing a song you vaguely remember being soothed by in early childhood.',
    'You wake up in humble country a barn. A slightly homely girl is asleep on the hay beside you. Someone is opening the front door.',
    'You wake up in a nobleman’s barn. You are wearing a saddle and there are whip marks on your buttocks. You are 1d10 gp richer.',
    'You wake up in an alley. 1d6 hobos are wearing 1d6 articles of your clothing.',
    'You wake up in an alley. A group of local children are poking you with sticks and arguing about whether or not you’re dead.',
    'You wake up in an alley. A group of urchins are standing over you and arguing about how to split your money or how much they could sell your hair for if they shaved you.',
    'You wake up in an alley. Your left ass cheek hurts. It now bears a lifelike tattoo of an NPC you have befriended in the past.',
    'You wake up in an alley. Your left ass cheek hurts. It now bears a lifelike tattoo of an NPC you have made enemies with in the past.',
    'You wake up in an alley. There is a dead body next to you.',
    'You wake up in an alley. Your clothing is splattered in blood and you are carrying a sack with 1d10 gp worth of an illegal substance.',
    'You wake up in a sumptuous bed in a beautiful hotel. Along with the room service breakfast of caviar and sparkling wine comes the bill. Pay 2d10 gp or find a way out.',
    'You wake up in a sumptuous bed in a beautiful hotel. Next to you is a complete stranger. Both of you are wearing wedding bands.',
    'You wake up in a sumptuous bed in a beautiful hotel. You are holding a whip. Someone else is asleep suspended from the ceiling by leather straps.',
    'You wake up in a warehouse. It is used for fermenting fish. The smell lingers on you for 1d6 days.',
    'You wake up naked in an art school. A group of aspiring painters are in a circle around you, committing your likeness to canvas.',
    'You wake up in the back room of an art gallery. Up front, you hear two people discussing the pairs of circles now covering all the paintings. One of them is using terms like ‘Brilliant’ and ‘Revolutionary’. Your buttocks feel uncomfortably sticky.',
    'You wake up naked in a fancy sculpture garden. The statues are all wearing various articles of your clothing. You can hear the sound of wealthy ladies beginning to gather for croquet.',
    'You wake up in the private garden of a local noble’s wife. Her favorite topiary has been re-shaped into a crude likeness of a penis. You are covered in clippings.',
    'You wake up in the main square at the feet of a bronze statue of the city’s founder. You and the statue are wearing matching outfits. You have in your possession 1d10 pairs of ladies’ underwear of unknown origin.',
    'You wake up in the common room of an impoverished orphanage. You hear the voices of children around you. They are talking about how you ate the last of the cookies.',
    'You wake up behind a stack of hay bales in the stable of an inn. On the other side of the stack, the innkeeper is interrogating the stable boy about why all the horses are wearing makeup and the oxen have bonnets.',
    'You wake up on the edge of a field. You are wearing a heavy full-body suit made from the skin of a bear. From the sound of things, the annual Town Watch vs Paladin’s Order Tackleball game is about to start.',
    'You wake up on the front steps of the local administrative building. You are wearing war paint and a bandana. A treatise of radical political and religious ideologies has been nailed to the door.',
    'You wake up behind a tailor’s shop. You are wearing a ball gown made for a noblewoman. The rest of your clothing is missing.',
    'You wake up in an alchemist’s shop. There are a number of empty vials on the floor around you. For the next 2d6 days, everything that should be green looks purple and food tastes like it’s vibrating. Occasionally, you burp multi-colored bubbles.',
    'You wake up in a crypt. You hear retreating footsteps as one person complains to another that nothing makes him go soft faster than realizing they’re still alive.',
    'You wake up in a closed coffin, crammed in next to you is someone recently deceased. Outside, you hear the sounds of a funeral service.',
    'You wake up in the communal lodge of a fraternal order. You clothing and all exposed skin are now covered in crudely drawn pictures of genitalia. (Ink takes 1d6 days or 2d12 washes to fade completely.)',
    'You wake up in the communal lodge of a sororal order. You are wearing feathers, lace, and a full face of makeup. Your buttock is sore and bears bruises in the same shapes as the cutouts on that paddle hanging above the fireplace.',
    'You wake up in the communal lodge of an esoteric order. The room is full of burned out candles. There is a pen in your hand and a note, but the handwriting isn’t yours. It is a letter to you from a long-dead friend or relative detailing fond memories or talking about how well or poorly you are doing carrying on the family legacy.',
    'You wake up in the office of the dean of the local bardic college. You are wearing an immaculate suit. Moments later, the first in a line of students outside enters to begin their admission interview.',
    'You wake up in a cozy bed in the groundskeeper’s cottage on a wealthy noble’s estate. You have a number of bound minor wounds and on the nearest chair is a suit made from fox skins that looks to have been savaged by dogs. Waiting for you on the table are a warm pot of tea, 4d10gp in a bag, and a ‘Thank you’ note.',
    'You wake up in the hut of a local witch. Her cauldron is upended and it looks as though much of the content has been drunk. You are now: Roll 1d6- 1= green and slimey, 2 = 1/10 your original size, 3 = a toad, 4 = covered entirely in fur, 5 = walking around on giant chicken feet, 6 = modular (Your body parts are all easily removable but can be harmlessly snapped back into place. They’re also scattered around the house.) You will remain this way for 1d12 hours.',
    'You wake up in the tower of a local wizard. You seem to have broken his enchanted celestial mapping device by putting your head through it. It will now only tell him what is visible in the night sky relative to the location of your head.',
    'You wake up to find yourself seated at a table. There is a quill in one hand and a small cut on the other. Across from you sits a well-dressed but sinister man, a man of wealth and taste. In front of you is a contract detailing in extremely complex terms, the exchange of power for your immortal soul. (Once the contract is signed or if the PC refuses, the man disappears in a cloud of sulfurous smoke.)',
    'Roll Twice, DM comes up with a monstrous combination of the two.',
];


/***/ }),

/***/ "./src/lists/gods.ts":
/*!***************************!*\
  !*** ./src/lists/gods.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.gods = void 0;
exports.gods = [
    [10, 'Rijndael (wind)'],
    [10, 'Yavanna (land)'],
    [10, 'Ulmo (sea)'],
    [10, 'The Twins (light and dark)'],
    [10, 'Virth (seasons)'],
    [10, 'Daena (smithing)'],
    [10, 'Freya (hunt)'],
    [10, 'Yorick (dreams)'],
    [10, 'Laima (fate)'],
    [2, 'Zargothrax'],
    [1, 'Holo'],
    [1, 'Ralph Bluton'],
];


/***/ }),

/***/ "./src/lists/index.ts":
/*!****************************!*\
  !*** ./src/lists/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.generate = exports.randomFromList = void 0;
__exportStar(__webpack_require__(/*! ./races */ "./src/lists/races.ts"), exports);
__exportStar(__webpack_require__(/*! ./gods */ "./src/lists/gods.ts"), exports);
__exportStar(__webpack_require__(/*! ./alignments */ "./src/lists/alignments.ts"), exports);
__exportStar(__webpack_require__(/*! ./wtf-character */ "./src/lists/wtf-character.ts"), exports);
function randomFromList(arr) {
    if (arr.length === 0) {
        return '';
    }
    var weightedArr = arr.map(function (e) {
        if (typeof e === 'string') {
            return [1, e];
        }
        return e;
    });
    var totalWeight = weightedArr.reduce(function (total, _a) {
        var current = _a[0];
        return total + current;
    }, 0);
    var acc = 0;
    var accumulatedArr = weightedArr.map(function (_a) {
        var weight = _a[0], e = _a[1];
        return [(acc = weight + acc), e];
    });
    var rand = Math.random() * totalWeight;
    return accumulatedArr[accumulatedArr.filter(function (_a) {
        var weight = _a[0];
        return weight <= rand;
    }).length][1];
}
exports.randomFromList = randomFromList;
function buildRexExp(corpus) {
    var types = Object.keys(corpus).sort(function (a, b) {
        if (a.length == b.length) {
            return 0;
        }
        return a.length > b.length ? -1 : 1;
    });
    return new RegExp("@(" + types.join('|') + ")", 'gi');
}
function generate(corpus) {
    var _a;
    var regex = buildRexExp(corpus);
    var type;
    var text;
    var part;
    var iter = 0; // Safety mechanism
    var idea = randomFromList(corpus.template);
    var item = regex.exec(idea);
    while (item && ++iter < 1000) {
        type = item[0];
        text = item[1];
        part = randomFromList((_a = corpus[text]) !== null && _a !== void 0 ? _a : []);
        idea = idea.replace(type, part);
        regex.lastIndex = 0;
        item = regex.exec(idea);
    }
    return idea;
}
exports.generate = generate;


/***/ }),

/***/ "./src/lists/races.ts":
/*!****************************!*\
  !*** ./src/lists/races.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.races = void 0;
exports.races = [
    'Aarakocra',
    'Aasimar',
    'Aven',
    'Bugbear',
    'Bullywug',
    'Centaur',
    'Changeling',
    'Dragonborn',
    'Dwarf',
    'Elf',
    'Firbolg',
    'Genasi',
    'Gith',
    'Gnoll',
    'Gnome',
    'Deep Gnome',
    'Goblin',
    'Goliath',
    'Grung',
    'Half-Elf',
    'Halfling',
    'Half-Orc',
    'Hobgoblin',
    'Human',
    'Kalashtar',
    'Kenku',
    'Khenra',
    'Kobold',
    'Kor',
    'Kuo-Toa',
    'Leonin',
    'Lizardfolk',
    'Locathah',
    'Loxodon',
    'Merfolk',
    'Minotaur',
    'Naga',
    'Orc',
    'Revenant',
    'Satyr',
    'Shifter',
    'Simic Hybrid',
    'Siren',
    'Skeleton',
    'Tabaxi',
    'Tiefling',
    'Tortle',
    'Triton',
    'Vedalken',
    'Viashino',
    'Warforged',
    'Yuan-ti Pureblood',
    'Zombie',
    'Man-Horse',
];


/***/ }),

/***/ "./src/lists/wtf-character.ts":
/*!************************************!*\
  !*** ./src/lists/wtf-character.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.wtfCharacter = void 0;
var alignments_1 = __webpack_require__(/*! ./alignments */ "./src/lists/alignments.ts");
var gods_1 = __webpack_require__(/*! ./gods */ "./src/lists/gods.ts");
var races_1 = __webpack_require__(/*! ./races */ "./src/lists/races.ts");
exports.wtfCharacter = {
    template: [
        '@adjective @alignment @race @dclass from @location who @backstory',
    ],
    race: races_1.races,
    alignment: alignments_1.alignments,
    god: gods_1.gods,
    adjective: [
        'an absent minded',
        'an adventurous',
        'an agreeable',
        'an ambitious',
        'an amicable',
        'an anxious',
        'an apathetic',
        'an argumentative',
        'an assertive',
        'an attentive',
        'a bigoted',
        'a bitchy',
        'a blunt',
        'a boisterous',
        'a bossy',
        'a brave',
        'a broad-minded',
        'a callous',
        'a cautious',
        'a charming',
        'a cheerful',
        'a chipper',
        'a churlish',
        'a cold',
        'a compassionate',
        'a composed',
        'a conceited',
        'a condescending',
        'a confident',
        'a conscientious',
        'a considerate',
        'a cool-headed',
        'a courageous',
        'a crabby',
        'a crass',
        'a critical',
        'a cruel',
        'a cunning',
        'a curious',
        'a cynical',
        'a decisive',
        'a delightful',
        'a demure',
        'a dependable',
        'a depressed',
        'a determined',
        'a diligent',
        'a diplomatic',
        'a discerning',
        'a disruptive',
        'a dramatic',
        'a driven',
        'a dutiful',
        'an eager',
        'an easy-going',
        'an egotistical',
        'an emotional',
        'an enterprising',
        'an enthusiastic',
        'an excitable',
        'a faithful',
        'a fearless',
        'a flamboyant',
        'a flirtatious',
        'a frank',
        'a friendly',
        'a funny',
        'a fussy',
        'a generous',
        'a gentle',
        'a gloomy',
        'a grave',
        'a grouchy',
        'a gruff',
        'a guarded',
        'a hard-working',
        'a hateful',
        'a headstrong',
        'a helpful',
        'a hot-headed',
        'a hot-headed',
        'a hypercritical',
        'an impatient',
        'an impetuous',
        'an impulsive',
        'an inconsiderate',
        'an insensitive',
        'an intolerant',
        'an inventive',
        'an irritable',
        'a lazy',
        'a level-headed',
        'a loud',
        'a machiavellian',
        'a mean',
        'a melodramatic',
        'a methodical',
        'a meticulous',
        'a miserable',
        'a modest',
        'a moody',
        'a morose',
        'a motivated',
        'a naive',
        'a nosy',
        'an obnoxious',
        'an old-fashioned',
        'an outgoing',
        'an outspoken',
        'an overemotional',
        'a paranoid',
        'a passive-aggressive',
        'a peaceful',
        'a pensive',
        'a philosophical',
        'a plain-speaking',
        'a playful',
        'a plucky',
        'a pompous',
        'a positive',
        'a prejudiced',
        'a pretty chill',
        'a proud',
        'a quick-tempered',
        'a reliable',
        'a reluctant',
        'a resentful',
        'a resourceful',
        'a respectful',
        'a restless',
        'a romantic',
        'a sassy',
        'a selfish',
        'a sensitive',
        'a sentimental',
        'a short-tempered',
        'a snobby',
        'a sombre',
        'a sophisticated',
        'a soulless',
        'a spiteful',
        'a stern',
        'a stoic',
        'a surly',
        'a suspicious',
        'a sweet',
        'a tactless',
        'a talented',
        'a thoughtful',
        'an unbalanced',
        'an unpredictable',
        'an unstable',
        'a warm-hearted',
        'a wary',
        'a wary',
        'a well-intentioned',
    ],
    dclass: [
        'Cleric of @god',
        'Fighter',
        'Rogue',
        'Wizard',
        'Barbarian',
        'Bard',
        'Druid',
        'Monk',
        'Paladin of @god',
        'Ranger',
        'Sorcerer',
        'Warlock',
    ],
    location: [
        'a tiny village',
        'the smallest mountain in the world',
        'the forest of sadness',
        'the city sewers',
        'the gutter',
        'a large family',
        'a orphanage workhouse',
        'a slave owning city',
        'a town that only ever bartered for goods',
        'a super religious upbringing',
        'a mid-level cult',
        'a cavern without echoes',
        'a commune',
        'the wet desert',
        'an unchartable island',
        'a small family farm',
        'a village without a tavern',
        'the slave fighting pits',
        'a company of sellswords',
        'an underground network of dragon caves',
        'a mercenary company',
        'a nocturnal town',
        'a city that never slept',
        'a royal lineage',
        'a carnival freak show',
        'an impure bloodline',
        'the petrified wood',
        'a strict monastery',
        'a local street gang',
        'the now dry swamp',
        'a ruined city',
        'a haunted castle',
        'the best library in the city',
        'a bustling city',
        'a maximum security prison',
        'a floating city',
        'an underground city',
        'a theatre company',
        "the guard's academy",
        'a small town tavern',
        'the grave diggers union',
        'the royal bank',
        'a haberdashery',
        'the city post office',
        'a travelling band',
        'a fishing village',
        'a boarding school for the children of middle-class wizards',
        'the base of a volcano',
        'an illusory forest',
        'a forgotten elven monastery',
        'the pirate infested isles',
        'an unchartable island',
        'an asylum',
        'a fallen kingdom',
        'the inner city slums',
        'an underwater monastery',
        'a mining town',
        'a high-class brothel',
        'a nomad circus',
        'a tourist town in the mountains',
        'the high-plains desert',
        'an oasis village',
        'the worst brothel in town',
        'the freelands',
        "a children's workhouse",
        'the tundra',
        'the nice part of a bad town',
        'a peaceful coastal town ',
        'the wilds',
        'a pompous wizard school',
        'a small remote village',
        'an ancient monastery',
        'a very tiny province',
        'a silk & spices trade galley',
        'the tower of bones',
        'a string of terrible places to live',
        'a notorious dungeon',
        'the wild wood',
        'the hold of a slave ship',
        'the slums of a port city',
        'a laid back beach town',
        'a place only they can pronounce',
        'an extremist temple',
        'the rat catchers guild',
        'a sheltered upbringing',
        'a sunken city',
        'the dry lands',
        'the salt flats',
        'a city in the shifting sands',
        'the most vile of swamps',
        'a tropical paradise',
        'a gnome run orphanage',
        'a recently erupted volcano village',
        'Waterdeep',
        'a small family bakery',
        'a small town where nothing ever happened',
        'an underground military stronghold',
        'a town of Outlaws',
        'a war-torn city',
        'a plague ridden city',
        'a poor dairy farm',
        'the local tavern',
        'the northern icelands',
        'the dusty mountains',
        'an isolated monastery ',
        'Briarwood Castle',
        'the endless cornfields ',
        'the Gladiator Arena',
        'an affluent upbringing',
        'a prison colony',
        'a backwater village',
        'from a city deep under the mountains',
        'the northern wastelands',
        'a local brewery',
        'a small town wizarding school',
        'a secluded forest village',
        'a desert town hidden inside a sandstorm',
        'a wealthy vineyard',
        'a frozen jungle',
        'the city slums',
        'A floating shanty town',
        'A cliff-side village',
        'a rundown adventuring tavern',
        'a moving island',
        'a cursed village',
        'the Ruined Sea',
        'a quiet woodland hut',
        'the sea of sand',
        'the citadel',
        'an island long thought to be uninhabited',
        'the long abandoned mines',
        'a small town on the border',
        'a broken home',
        'a thriving seaport town',
        'a destroyed city',
        'the North Plains',
        'the iceberg sea',
        'the Valley of the Giants',
        'the badlands',
        'the wilderness',
        'a quaint little village on a hill',
        'a haunted forest',
        'a conquered city',
        'the lizard infested marshlands',
        'the kitchens of the local barracks',
        'Black Rock Beach',
        'an internment camp',
        'a small farm in the grasslands',
        "an engineer's guild",
        'Thornwood',
        'the treeless forest',
        'the Dank Hollows',
        'a bustling underground kingdom',
        'an underwater city once dry by a magical force field',
        'the strongest family heritage line in the land',
        'the royal catacombs',
        'a fake leper colony hiding a secret',
        'a halfway house',
        'the city of lights',
        'the City of Ten Thousand Flags',
        'the enchanted forest',
        'a slave market',
        'a city no one else has ever heard of',
        'The mean uncobbled streets of the city',
        "the dungeon inspector's guild (local #422)",
        "Lady Marigold's Dance Academy",
        'a camp of army followers',
        'a doomed dwarven fortress',
        'a city with towers that rival the clouds',
        'the wetlands',
        'A destitute plantation',
        'the royal court',
        'A foggy peninsula',
        "A secret brawler's guild",
        'a hastily erected tent city',
        'an aristocratic family',
        'the Parliament of Beggars',
        'a enchanted forest logging company',
        'the scorched plains',
        'the boneyard',
        'the iron mountain range',
        'the deep wood',
        'the vast wastes',
        'the black dungeon',
        'a powerful trading town',
        'the poor surroundings of the capital city',
        'a low ceilinged castle',
        'a line of fallen royalty',
        'a boarding school',
        'Black Oak',
        'the white halls of the north',
        'a village without children',
        'the Wayferer Foothills',
        'a deserted island',
        'the shifting desert',
        'the shade forests',
        'a sunken city',
        'a rural construction company',
        'the assassins guild',
        'the black citadel',
        'an abandoned fortress',
        "an island that can't be reached by boat",
        'the endless wastes',
        'a frozen wasteland',
        'a free thinkers commune',
        'a broken home',
        'a sleepy harbour town',
        'The shattered mountain range',
        'the forked islands',
        'a disgraced family of knights',
        'the city watch',
        'a refugee camp for war orphans',
        'a complex bureaucratic society',
        'a large desert metropolis',
        'a dysfunctional marriage',
        'a poorly run orphanage',
        'a bustling city market',
        'a dilapidated mansion',
        'a young offenders institute',
        'the Forest of Faces',
        'the improbable peaks',
        'the sealed city',
        "the 'class act' travelling circus",
        'a run down tavern',
        'the Underdark',
        'a man made desert',
        'a slave caravan',
        'the fey wilds',
        'a high end gambling house',
        'a drought-stricken farm',
        'a now impoverished noble family',
        'the quality control for potion brewing association',
        'a town where orcs are bought and sold as slaves',
        'a secret order of monks',
        'the imperial army',
    ],
    backstory: [
        "doesn't believe in magic, ever",
        'hates wearing their glasses',
        'finds it impossible to speak to girls',
        'has always wanted to open their own tavern',
        'has a huge debt to pay back',
        'was raised by ghosts',
        'suffers from claustrophobia',
        'is really (I MEAN REALLY) afraid of the dark',
        'makes inappropriate jokes at the worst times',
        'is afraid of heights',
        "doesn't understand the concept of politeness",
        'always alliterates their anecdotes',
        'has a bad gambling problem',
        "was told they'll never be good enough",
        'wants everyone to like them',
        'never takes their armour off, just in case',
        'always wanted to learn magic but struggled with it',
        'always needs to be the centre of attention',
        'has no other family but the party',
        "was left out of their father's will",
        'studied interior dungeon design',
        'is downright racist towards living skeletons',
        "believes they're a demi god, but hasn't figured out who their father is yet",
        'is writing an autobiography',
        'has serious daddy issues',
        'has a drinking problem',
        'is completely colour blind',
        'failed out of every guild going',
        'saw their whole family consumed by a gelatinous cube',
        'gets nervous speaking in front of crowds',
        'is afraid of sharp edges',
        "doesn't have a reflection",
        'suffers from nosebleeds',
        'is uncomfortable around old people (they smell like death)',
        "can't swim",
        'was brought up to be a librarian',
        'grew up in a graveyard',
        'is afraid of fire',
        'hates music',
        'grew up fat',
        'distrusts all authority',
        'mistrusts anyone smaller than them',
        'hates the monarchy',
        'is afraid of dogs',
        'was once rescued by wolves',
        'has anger problems',
        'always romanticised adventure',
        "can't read",
        'deserted the army',
        "is responsible for their sister's death",
        'is certain their days are numbered',
        'always takes first watch',
        "can't silence the voices",
        'meditates before dawn',
        'constantly watches their back',
        "always refers to inanimate objects as 'she'",
        'always wakes up on the right side of the bed',
        'always keeps their promises',
        'is a recovering cannibal',
        'wants to be famous, no matter what',
        'believes trees can speak to them and them alone',
        'is trying to get out of the adventuring business to settle down',
        'takes great delight in identifying new beetle species',
        'has serious body image problems',
        'is a recovering gambling addict',
        "can't stand the sight of blood",
        'secretly became an adventurer to impress a love interest',
        'is afraid the rest of the party will kill them if they try to leave',
        'searches endlessly for their kidnapped child',
        'would rather kill you than make eye contact',
        'was kidnapped by cultists',
        'has twenty-seven siblings to provide for',
        'ran afoul of the goblin mob',
        'is searching for the perfect culinary dish',
        'has nothing left to lose',
        "doesn't know their own strength",
        "has had it up to here with everyone's crap",
        'is red-green colorblind',
        'carries the skull of their best friend',
        'has a serious weapons fetish',
        'has taken a vow of silence',
        'is just trying to get by',
        'is trying to avoid a prophecy',
        'has really bad hay fever',
        'wants to clear their name',
        "doesn't believe in hygiene",
        'is being hunted by a terrible monster',
        'is dying of a plague and searching for a cure',
        'lost their family in a dragon attack ',
        'fights for undead rights',
        'once survived a boiling cauldron',
        "forever picking fights to 'win back honour'",
        "can't stand silence",
        'lost minor appendages due to their gambling addiction',
        'is absolutely astonished by jugglers',
        "can't sleep indoors",
        'only sleeps with the lights on',
        'hates to be clean',
        'drunkenly swore a blood oath and forgot what for',
        "doesn't perceive gender",
        'realised the importance of literacy far too late in life',
        'bangs on about their genealogy to everyone',
        'keeps a blacklist',
        'lost their shadow in a bet',
        'gets easily attached to people',
        'has cheated death more times than they deserved',
        'finds armour too restricting',
        'has no sense of smell',
        'insists they are the reincarnation of a legendary warrior',
        'refuses to bathe',
        'loved, lost and never loved again',
        'is lactose intolerant',
        'adds a notch to their sword every night',
        'prefers to fight drunk',
        'thinks they can read the future, but consistently gets it wrong',
        'killed their brother in a duel over their inheritance',
        'is cursed to speak in sentences of exactly ten words',
        "was raised as a hostage by their father's enemies",
        'moonlights as a private investigator',
        'has an irrational fear of cats',
        'is completely and utterly tone-deaf',
        'is running from a marriage arranged by their parents',
        "wants to prove they're no longer that goofy kid",
        'has gotten away with murder',
        'knows seven dangerous secrets',
        'has a debilitating fear of wide open spaces',
        'always speaks in the third person',
        'is manically obsessed with etiquette',
        'wants to smash the capitalist system',
        'is secretly fond of embroidery',
        'is searching for a rare fertility herb',
        'is a compulsive liar',
        'hates the written word',
        'wants to one day own their own ship ',
        'likes to settle arguments with headbutting contests',
        'has an outstanding warrant for their arrest ',
        'is the last of an ancient bloodline',
        'is the twin of the local monarch',
        'is pretty tight fisted with their gold',
        'is the only surviving member of their previous adventure party',
        'was disowned by their family',
        'names every piece of their gear',
        'is a complete exhibitionist',
        'always thinks outside the box',
        'accidentally torched the local temple and is now cursed by its god',
        'carries a cryptic treasure map they won in a tavern bet',
        'has been exiled twice under different names',
        'believes they have a claim to the throne',
        'constantly places themselves in danger, just to prove a point',
        'seeks to end a family feud',
        'has a pretty selective memory',
        'has accepted death as an inevitability',
        'sold everything they own to attend an adventurer academy',
        'has been on the run for over three years',
        'is terrified of rats',
        'believes the undead should be given a second chance',
        'was forced to watch their families execution',
        "can't stand children",
        'worries some of their memories have been tampered with',
        'hates to be touched',
        'lost their sense of smell in a bar fight',
        'likes to speak in rhyme',
        "can't seem to hold their liquor",
        'fights for species equality',
        'was petrified for over two hundred years',
        'is trying to dodge the draft',
        'unwittingly misuses words all the bloody time',
        'has some pretty shady connections',
        'was beaten and imprisoned for their religious beliefs',
        'started a rebellion in the northern mountains',
        'acts shallow but only to hide their insecurities',
        'makes all minor decisions by flipping a coin',
        'wants to become a famous singer',
        'was, until recently, employed to run a dungeon',
        'had their lost legs replaced with enchanted wood',
        'always looks their best',
        'is haunted by the ghost of their father',
        'was exiled by their brother the king',
        'always gives the good news first',
        'used to work as a tavern bouncer',
        'tries to be a friend to everyone',
        'hates riding horses',
        'left their home in disgrace',
        "doesn't understand sarcasm",
        'suffers from night terrors',
        "never passes up a chance to say, 'I told you so.'",
        'was framed for the murder of a famous and well-loved innkeeper',
        'believes in racial purity',
        'is a former bare knuckle boxer',
        'always cuts to the chase',
        'always gives the bad news first',
        'was a weapons instructor for the city militia',
        "is on the run after having an affair with a noble's daughter",
        'has a twin that constantly impersonates them',
        "hasn't been quite right since the accident",
        "hasn't accomplished anything in their short life yet",
        'is trapped in a Faustian bargain',
        'lost their marbles a long time ago',
        'has a burning hatred for pirates',
        'aims to learn every language in the land',
        'owes money to the wrong people',
        'believes in an eye for an eye',
        'never turns the other cheek',
        'once served as a court jester',
        "in hindsight shouldn't have had the treasure map tattooed on themselves",
        'already made and lost a fortune',
        'has a poem for all occasions',
        'was drafted into the army at fourteen',
        'has a regular sleepwalking issue',
        "was cut from their dead mother's womb",
        'was apprenticed to a failed alchemist',
        "was jailed for a crime they didn't commit",
        'is posing as someone else',
        'was expelled from the royal guards',
        "is the last of the king's bastard children",
        'has never been kissed',
        'suffers from crippling stage-fright',
        "is writing an epic poem about the party's adventure",
        'really knows how to party',
        'loves to haggle',
        'suffers from a recurring nightmare',
        'needs to earn the trust of a hated duke',
        'came out of retirement for this adventure',
        'loots every kill but leaves enough to pay for their burial',
        'woke up in a bar with no memory and a sealed letter',
        'was once a dungeon trap designer',
        'is haunted by the ghosts of their forefathers',
        "doesn't have time for all this prophecy bullshit",
        'is dealing with a midlife crisis',
        'has delusions of grandeur',
        'just wants their money back',
        'always wanted to be an artist',
        'believes plate armour is just a sign of being posh and over privileged',
        'failed to protect the royal family',
        'likes to settle arguments with an arm wrestle',
        'never returned anything they borrowed',
        'had their nose cut off in a duel',
        'believes dungeon crawling is just breaking and entering',
        'bribed a nobleman to help them smuggle slaves out of a tyrannical kingdom',
        'was born in a different body',
        'suffers from vertigo',
        'lost two fingers in a training accident',
        'is tracking down the treasure their father died trying to find',
        "carries a charmed locket that they can't open",
        'is getting too old for all this',
        'no longer dreams',
        "rejected a foreign prince's marriage proposal",
        "has a bad habit of making 'funny' quips after every kill",
        'ran away at the age of eleven',
        'has wooden teeth after the incident with the mace',
        'carries the scars of an attempted suicide',
        'won a duel they were supposed to lose out of sheer luck',
        'hates being made to wait',
        'seems to know everyone',
        'keeps getting mistaken for a famous knight',
        'is searching for the knowledge of true immortality',
        'lost their best friend in an ambush',
        'is currently on probation for drunk and disorderly behaviour',
        'is haunted by the ghosts of those they kill',
        'was badly burnt by a sorcerer',
        'was written out of their family will',
        'is planning to retire next year',
        'is in way too deep with the wrong sort of people',
        'exaggerates everything they talk about',
        'has no concept of personal space',
        'never got the proper training',
        "is in so far over their head that they can't help but laugh",
        'can only whisper after an attempted hanging',
        'is really good at bribing officials',
        'is quick to take credit and assign blame',
        "refuses to admit they're past their prime",
        'has never had their hair cut',
        'only has two more years before a demon comes back to claim their soul',
        'only became an adventurer after losing a bet',
        'is wanted for a reward',
        'wears a mysterious necklace that constantly brings them out in a rash',
        'parties hard, way too hard.',
        "isn't technically alive anymore",
        "is convinced they're always being left out",
        "doesn't speak a word of common",
    ],
};


/***/ }),

/***/ "./src/lists/wtf-establishment.ts":
/*!****************************************!*\
  !*** ./src/lists/wtf-establishment.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.wtfEstablishment = void 0;
var alignments_1 = __webpack_require__(/*! ./alignments */ "./src/lists/alignments.ts");
var gods_1 = __webpack_require__(/*! ./gods */ "./src/lists/gods.ts");
var races_1 = __webpack_require__(/*! ./races */ "./src/lists/races.ts");
exports.wtfEstablishment = {
    template: [
        '@size @atmosphere @type that @sensesTemplate with @people inside',
    ],
    race: races_1.races,
    alignment: alignments_1.alignments,
    god: gods_1.gods,
    size: ['a tiny', 'a small', 'a medium', 'a large', 'a huge'],
    type: [
        'inn',
        'temple to @god',
        '@type that is actually a drug front',
        'bakery',
        'barracks',
        'thieves guild',
        'black smith',
        '@type the mob uses to hang out',
        'combination @type and @type',
        'mill',
        'butcher',
        'vineyard',
        'tannery',
        'grocers',
        "carpenter's",
        'restaurant',
        'bar',
        "wizard's tower",
        'dock',
        'warehouse',
        'brothel',
        'barber shop',
        'distillery',
        'brewery',
        'house',
        "herbalist's",
        'theater',
        "potter's",
        'police station',
    ],
    atmosphere: [
        'amused',
        'angry',
        'apathetic',
        'blissful',
        'calm',
        'cheerful',
        'content',
        'depressing',
        'dreamy',
        'energetic',
        'exciting',
        'frighting',
        'forboding',
        'frustrating',
        'gloomy',
        'happy',
        'hopeful',
        'humorous',
        'idyllic',
        'indifferent',
        'irritating',
        'joyful',
        'lighthearted',
        'lonely',
        'loving',
        'melancholy',
        'mellow',
        'mysterious',
        'ominous',
        'optimistic',
        'peaceful',
        'pessimistic',
        'relaxed',
        'romantic',
        'sad',
        'silly',
        'stressed',
        'tense',
        'weird',
        'whimsical',
    ],
    sensesTemplate: ['@senses', '@senses and @senses'],
    senses: [
        'feels @touch',
        [0.5, 'tastes @taste'],
        'smells @smell',
        'sounds @sound',
    ],
    touch: [
        'chilly',
        'clammy',
        'cold',
        'cool',
        'crisp',
        'damp',
        'dirty',
        'dry',
        'dusty',
        'filthy',
        'flesh',
        'freezing',
        'frosty',
        'greasy',
        'grimy',
        'hot',
        'humid',
        'icy',
        'lukewarm',
        'moist',
        'mucky',
        'muggy',
        'mushy',
        'oily',
        'slick',
        'slimy',
        'slippery',
        'soggy',
        'steamy',
        'sticky',
        'tacky',
        'tepid',
        'warm',
        'waxy',
        'wet',
        'wobbly',
    ],
    taste: ['metallic', 'like blood'],
    smell: [
        [0.1, 'smelly'],
        'like old people',
        'like bread',
        'like rotten flesh',
        'fishy',
        'moldy',
        'minty',
        'mildewed',
        'skunky',
        'acid',
        'musty',
        'acrid',
        'nauseating',
        'airy',
        'perfumed',
        'biting',
        'pungent',
        'clean',
        'putrid',
        'crisp',
        'rancid',
        'dirty',
        'redolent',
        'earthy',
        'repulsive',
        'faint',
        'rotten',
        'feminine',
        'sharp',
        'fetid',
        'sour',
        'fishy',
        'spicy',
        'floral',
        'spoiled',
        'flowery',
        'stale',
        'fresh',
        'light',
        'sweaty',
        'loamy',
        'sweet',
        'masculine',
        'tart',
        'wispy',
    ],
    sound: [
        'boisterous',
        'low-pitched',
        'shrill',
        'brittle',
        'mellifluous',
        'silent',
        'calm',
        'melodic',
        'smooth',
        'clamorous',
        'melodious',
        'soft',
        'croaky',
        'muffled',
        'soundless',
        'discordant',
        'musical',
        'dissonant',
        'muted',
        'squeaky',
        'dull',
        'noiseless',
        'strong',
        'earsplitting',
        'noisy',
        'sweet',
        'enjoyable',
        'non-deafening',
        'tacit',
        'faint',
        'penetrating',
        'talkative',
        'gentle',
        'piercing',
        'thundering',
        'gruff',
        'pleasing',
        'thunderous',
        'half-deafening',
        'quiet',
        'tranquil',
        'half-shouted',
        'rasping',
        'tuneful',
        'harmonious',
        'raspy',
        'unspoken',
        'harsh',
        'raucous',
        'unvoiced',
        'high',
        'resonant',
        'velvety',
        'high-pitched',
        'riotous',
        'vociferous',
        'hoarse',
        'rowdy',
        'voiceless',
        'husky',
        'screaky',
        'whispered',
        'loud',
        'screaming',
        'wordless',
        'low',
        'screechy',
    ],
    contentse: ['a small table'],
    people: [
        'no one',
        'a person',
        'two people',
        'a small group',
        'two small groups',
        'a large crowd',
    ],
};


/***/ })

/******/ });
//# sourceMappingURL=main.js.map