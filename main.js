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

/***/ "./node_modules/@zwzn/spicy/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/@zwzn/spicy/dist/index.js ***!
  \************************************************/
/*! exports provided: bindValue, bind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindValue", function() { return bindValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
const PolyWeakMap = WeakMap || Map;
const valueCache = new PolyWeakMap();
/**
 * addValue allows you to write callbacks using the value of an input, select or
 * text area without needing to get an instance of the dom element.
 *
 * ```tsx
 * import {bindValue} from 'spicy'
 *
 * const click = (value: string, event: Event) => {
 *     // do something with value
 * })
 * <input onClick={bindValue(click)} >
 * ```
 *
 * @param cb
 */
function bindValue(cb) {
    let ret = valueCache.get(cb);
    if (ret === undefined) {
        ret = e => {
            if (e.currentTarget instanceof HTMLInputElement
                || e.currentTarget instanceof HTMLSelectElement
                || e.currentTarget instanceof HTMLTextAreaElement) {
                return cb(e.currentTarget.value, e);
            }
            return cb('', e);
        };
        valueCache.set(cb, ret);
    }
    return ret;
}
const argsCache = new PolyWeakMap();
function arrayEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!Object.is(a[i], b[i])) {
            return false;
        }
    }
    return true;
}
// tslint:enable: max-line-length
function bind(...args) {
    // this function uses unknown types because typescript wont let me use
    // a spread argument first
    // remove the callback from the args
    const callback = args.pop();
    if (typeof callback !== 'function') {
        throw new Error('the last argument of addArgs must be a function');
    }
    // get the map of arguments that get used for the callback or create one
    let m = argsCache.get(callback);
    if (m === undefined) {
        m = new Map();
        argsCache.set(callback, m);
    }
    // check for an existing callback with the arguments applied or create it
    for (const [key, value] of m) {
        if (arrayEqual(key, args)) {
            return value;
        }
    }
    const ret = (...childArgs) => callback(...args, ...childArgs);
    m.set(args, ret);
    return ret;
}


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
var random_table_1 = __webpack_require__(/*! components/random-table */ "./src/components/random-table.tsx");
var carousing_1 = __webpack_require__(/*! lists/carousing */ "./src/lists/carousing.ts");
var crit_1 = __webpack_require__(/*! components/crit */ "./src/components/crit.tsx");
var Grid = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-auto-rows: 250px;\n    grid-gap: 10px;\n"], ["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-auto-rows: 250px;\n    grid-gap: 10px;\n"])));
var Section = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    overflow: auto;\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    padding: 5px;\n\n    ", "\n"], ["\n    overflow: auto;\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    padding: 5px;\n\n    ",
    "\n"])), function (props) {
    var _a, _b;
    return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        grid-column: span ", ";\n        grid-row: span ", ";\n    "], ["\n        grid-column: span ", ";\n        grid-row: span ", ";\n    "])), (_a = props.width) !== null && _a !== void 0 ? _a : 1, (_b = props.height) !== null && _b !== void 0 ? _b : 1);
});
preact_1.render(preact_1.h(Grid, null,
    preact_1.h(Section, { width: 2, height: 3 },
        preact_1.h(crit_1.Crit, null)),
    preact_1.h(Section, { width: 2, height: 2 },
        preact_1.h(checks_1.Checks, null)),
    preact_1.h(Section, { width: 2 },
        preact_1.h(travel_1.Travel, null)),
    preact_1.h(Section, null,
        preact_1.h(character_generator_1.CharacterGenerator, null)),
    preact_1.h(Section, null,
        preact_1.h(establishment_generator_1.EstablishmentGenerator, null)),
    preact_1.h(Section, null,
        preact_1.h(random_table_1.RandomTable, { title: 'Carousing', table: carousing_1.carousing }))), 
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
document.getElementById('app'));
var templateObject_1, templateObject_2, templateObject_3;


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
var components_1 = __webpack_require__(/*! components */ "./src/components/index.tsx");
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
var components_1 = __webpack_require__(/*! components */ "./src/components/index.tsx");
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

/***/ "./src/components/crit.tsx":
/*!*********************************!*\
  !*** ./src/components/crit.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Crit = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var hooks_1 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
var components_1 = __webpack_require__(/*! components */ "./src/components/index.tsx");
var spicy_1 = __webpack_require__(/*! @zwzn/spicy */ "./node_modules/@zwzn/spicy/dist/index.js");
var crit_hit_1 = __webpack_require__(/*! lists/crit-hit */ "./src/lists/crit-hit/index.ts");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var HPInput = styled_components_1["default"].input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 40px;\n"], ["\n    width: 40px;\n"])));
var EffectList = styled_components_1["default"].ol(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    > li:nth-child(even) {\n        background-color: #eee;\n    }\n"], ["\n    > li:nth-child(even) {\n        background-color: #eee;\n    }\n"])));
var EffectListElement = styled_components_1["default"].li(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"
    // (test|[–-]\d+%)
])), function (props) {
    return props.active
        ? styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                  background-color: #f55 !important;\n              "], ["\n                  background-color: #f55 !important;\n              "]))) : undefined;
});
// (test|[–-]\d+%)
exports.Crit = function (props) {
    var _a = hooks_1.useState('arrow-bolt'), attackType = _a[0], setAttackType = _a[1];
    var _b = hooks_1.useState('arm'), bodyPart = _b[0], setBodyPart = _b[1];
    var _c = hooks_1.useState('50'), maxHP = _c[0], setMaxHP = _c[1];
    var _d = hooks_1.useState('50'), currentHP = _d[0], setCurrentHP = _d[1];
    var _e = hooks_1.useState(true), lethal = _e[0], setLethal = _e[1];
    var _f = components_1.useDie(100), dieRoll = _f[0], setDieRoll = _f[1], rollDie = _f[2];
    var toggleLethal = hooks_1.useCallback(function () { return setLethal(function (l) { return !l; }); }, [setLethal]);
    var maxSeverity = lethal ? 14 : 11;
    var attackSeverity = Math.min(crit_hit_1.severity(Number(maxHP), Number(currentHP), dieRoll), maxSeverity);
    return (preact_1.h("div", null,
        preact_1.h(components_1.Title, null,
            "Crit Hit ",
            attackSeverity),
        preact_1.h(components_1.Select, { options: crit_hit_1.attackTypes, value: attackType, onInput: spicy_1.bindValue(setAttackType) }),
        preact_1.h(components_1.Select, { options: crit_hit_1.bodyParts, value: bodyPart, onInput: spicy_1.bindValue(setBodyPart) }),
        preact_1.h("button", { onClick: toggleLethal },
            lethal ? '[x]' : '[ ]',
            " lethal"),
        preact_1.h(HPInput, { type: 'number', value: currentHP, onInput: spicy_1.bindValue(setCurrentHP) }),
        ' / ',
        preact_1.h(HPInput, { type: 'number', value: maxHP, onInput: spicy_1.bindValue(setMaxHP) }),
        ' HP',
        preact_1.h("button", { onClick: rollDie }, "Roll D100"),
        preact_1.h("input", { type: 'number', min: 1, max: 100, value: dieRoll, onInput: spicy_1.bindValue(setDieRoll) }),
        preact_1.h("p", null,
            preact_1.h(EffectList, null, crit_hit_1.typeMap[attackType][bodyPart].map(function (effect, i) { return (preact_1.h(EffectListElement, { key: i, active: i === attackSeverity }, effect)); })))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


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
var components_1 = __webpack_require__(/*! components */ "./src/components/index.tsx");
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

/***/ "./src/components/index.tsx":
/*!**********************************!*\
  !*** ./src/components/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Select = exports.useDie = exports.Table = exports.Title = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var hooks_1 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
exports.Title = styled_components_1["default"].h2(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: black;\n    color: white;\n    margin-top: -5px;\n    margin-left: -5px;\n    margin-right: -5px;\n    padding: 0 5px;\n"], ["\n    background-color: black;\n    color: white;\n    margin-top: -5px;\n    margin-left: -5px;\n    margin-right: -5px;\n    padding: 0 5px;\n"])));
exports.Table = styled_components_1["default"].table(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border-collapse: collapse;\n    width: 100%;\n\n    > thead {\n        background-color: #333;\n        color: white;\n        td,\n        th {\n            border-left: 1px solid white;\n            border-right: 1px solid white;\n        }\n    }\n    > tbody {\n        > tr:nth-child(even) {\n            background-color: #eee;\n        }\n    }\n"], ["\n    border-collapse: collapse;\n    width: 100%;\n\n    > thead {\n        background-color: #333;\n        color: white;\n        td,\n        th {\n            border-left: 1px solid white;\n            border-right: 1px solid white;\n        }\n    }\n    > tbody {\n        > tr:nth-child(even) {\n            background-color: #eee;\n        }\n    }\n"])));
function useDie(dieSize) {
    var _a = hooks_1.useState('0'), dieRoll = _a[0], setDieRoll = _a[1];
    var shuffle = hooks_1.useCallback(function () { return setDieRoll(String(Math.floor(Math.random() * dieSize) + 1)); }, [setDieRoll]);
    hooks_1.useEffect(function () { return shuffle(); }, [shuffle]);
    return [Number(dieRoll), setDieRoll, shuffle];
}
exports.useDie = useDie;
exports.Select = function (props) {
    var noOptionsProps = __assign({}, props);
    delete noOptionsProps.options;
    return (preact_1.h("select", __assign({}, noOptionsProps), props.options.map(function (option) { return (preact_1.h("option", { value: option }, option)); })));
};
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/random-table.tsx":
/*!*****************************************!*\
  !*** ./src/components/random-table.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.RandomTable = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var lists_1 = __webpack_require__(/*! lists */ "./src/lists/index.ts");
var components_1 = __webpack_require__(/*! components */ "./src/components/index.tsx");
var spicy_1 = __webpack_require__(/*! @zwzn/spicy */ "./node_modules/@zwzn/spicy/dist/index.js");
exports.RandomTable = function (props) {
    var dieSize = lists_1.totalWeight(props.table);
    var _a = components_1.useDie(dieSize), dieRoll = _a[0], setDieRoll = _a[1], rollDie = _a[2];
    return (preact_1.h("div", null,
        preact_1.h(components_1.Title, null, props.title),
        preact_1.h("button", { onClick: rollDie },
            "Roll D",
            dieSize),
        preact_1.h("input", { type: 'number', min: 1, max: dieSize, value: dieRoll, onInput: spicy_1.bindValue(setDieRoll) }),
        preact_1.h("p", null, lists_1.randomFromList(props.table, dieRoll - 1))));
};


/***/ }),

/***/ "./src/components/travel.tsx":
/*!***********************************!*\
  !*** ./src/components/travel.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Travel = void 0;
var spicy_1 = __webpack_require__(/*! @zwzn/spicy */ "./node_modules/@zwzn/spicy/dist/index.js");
var components_1 = __webpack_require__(/*! components */ "./src/components/index.tsx");
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var hooks_1 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var SpeedInput = styled_components_1["default"].input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 40px;\n"], ["\n    width: 40px;\n"])));
exports.Travel = function (props) {
    var _a = hooks_1.useState('30'), strSpeed = _a[0], setSpeed = _a[1];
    var speed = Number(strSpeed);
    var feetToMiles = 1 / 5280;
    var minuteSpeed = speed * 10;
    var hourSpeed = Math.floor(minuteSpeed * 60 * feetToMiles);
    var daySpeed = hourSpeed * 8;
    return (preact_1.h("div", null,
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
                    preact_1.h("td", null)),
                preact_1.h("tr", null,
                    preact_1.h("td", null, "Fast"),
                    preact_1.h("td", null, "400ft"),
                    preact_1.h("td", null, "4 miles"),
                    preact_1.h("td", null, "30 miles"),
                    preact_1.h("td", null, "-5 Passive Perception")),
                preact_1.h("tr", null,
                    preact_1.h("td", null,
                        preact_1.h(SpeedInput, { type: 'number', placeholder: 'Base speed', value: strSpeed, onInput: spicy_1.bindValue(setSpeed) })),
                    preact_1.h("td", null,
                        minuteSpeed,
                        "ft"),
                    preact_1.h("td", null,
                        hourSpeed,
                        " miles"),
                    preact_1.h("td", null,
                        daySpeed,
                        " miles"),
                    preact_1.h("td", null))))));
};
var templateObject_1;


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

/***/ "./src/lists/crit-hit/arrow-bolt.ts":
/*!******************************************!*\
  !*** ./src/lists/crit-hit/arrow-bolt.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var effects = {
    arm: [
        'Your shot grazes your target’s hand, forcing him to pass a constitution save or drop anything he is holding in that hand.',
        'Your shot nicks the wrist of your target, causing a small but vicious wound. Due to the pain, he’ll suffer a -2 penalty attack rolls until the end of his next turn.',
        'Your shot glances off your target’s elbow, sending an electric shock of pain down his arm, making him drop anything he is holding in that hand. The arm is numb and useless for d10/2 turns.',
        'Your shot slices your target’s biceps, exposing red, glistening muscle tissue. He suffers disadvantage to his attack rolls until the end of his next turn.',
        'Your shot penetrates the large muscle connecting your target’s shoulder to the upper arm, the arrow/bolt remaining in the wound with the point sticking out the other side. He must pass a DC20 constitution save to avoid dropping whatever he is holding in the other hand to grasp the injured shoulder. He also loses use of the arm until the arrow/bolt is withdrawn, which requires a full action (half an action to break off the head, another to pull the shaft out) either by himself or someone else, plus a successful DC15 constitution save if he does it himself, gritting his teeth against the pain.',
        'Your shot slices the back of your target’s hand, severing tendons and nicking the metacarpal bones between the wrist and fingers. He can still flex his fingers, so he doesn’t drop his weapon, but the distracting sight of twitching tendons and white bone causes disadvantage to his attack rolls until the end of his next turn. Unless magically healed he’ll suffer a permanent -2 penalty to any skill checks requiring fine manipulation made with that hand due to decreased manual dexterity from not being able to open his hand properly.',
        'Your shot transfixes your target’s hand, passing between the metacarpal bones between wrist and fingers, and nailing it to any shield he might be holding in that hand. Until the arrow is removed, as per #5 above, the hand is useless. He also counts as stunned until the end of his next turn and, unless magically healed, will suffer a permanent -1 penalty to any skill checks requiring fine manipulation made with that hand, due to nerve damage to his middle finger.',
        'Your shot transfixes your target’s wrist, resulting in penalties as for #7 above, except that you must pass a DC10 constitution save to recover from the stunning and the penalty will be disadvantage due to the much greater damage to nerves and tendons.',
        'Your shot penetrates your target’s forearm, the point lodging in one of the long bones of the forearm. Your target is stunned for d10/2 turns. The arm is useless until the arrow/bolt is withdrawn, which is very difficult due to the head being firmly embedded in the bone, requiring three full actions either by you or someone else, plus a successful DC20 constitution save if you do it yourself.',
        'Your shot lodges in your target’s elbow, severing the head of one of the long bones of the forearm and jamming the joint at a 90-degree angle. Your target is stunned by blinding pain for d10/2 turns and the arm is useless until his W characteristic has been fully recovered. Also the head of the arrow/bolt will have to be withdrawn. This requires either a successful DC 10 heal check or, if lacking that skill, a DC20 dexterity save, by someone else. Failure means the head was successfully withdrawn but additional damage means healing is delayed, the target recovering one less W the next time he should have regained one or more W.',
        'Your shot lacerates the target’s biceps muscle, also severing the large artery in the arm. Due to the spurting arterial spray, he will suffer a penalty of -2 to strength and dexterity each turn, losing consciousness when either of those ability scores reaches zero. When he wakes up the arrow/bolt will have to be withdrawn as per #5 above.',
        'Your shot pierces the meaty part of your target’s shoulder near the neck, damaging the brachial plexus, the large bundle of nerves supplying the arm. He must pass a DC20 constitution save to avoid dropping whatever he is holding in the other hand to grasp the injured shoulder. Unless magically healed within one day, the paralysis will be permanent, rendering the arm limp and useless. Also, the arrow/bolt will have to be removed as per #10 above.',
        'Your shot shatters your target’s shoulder-blade and severs the large artery branching off from the aorta to the arm and neck, causing massive internal bleeding. An immediate DC20 constitution save is required to avoid falling unconscious. He also suffers a cumulative 10% risk of dying from loss of blood each turn, unless magically healed. If he survives, the arrow/bolt will have to be removed as per #10 above.',
        'Your shot enters your target’s shoulder at an angle and exits through his neck in a spray of blood. Your target sways uncertainly for a moment before his legs buckle and he collapses to the ground, unconscious. Death is inevitable within d10/2 rounds.',
        'Your shot enters through your target’s armpit, embedding itself to the fletching. Your target crumples to the ground, gasping and gurgling for one turn while a soft, sucking noise emanates from the wound, before everything is still.',
    ],
    body: [
        'Your shot grazes your target’s side, causing him to flinch and suffer a penalty of -2 to his attack rolls until the end of his next turn.',
        'Your shot slices along one rib, slicing the skin to the bone,causing a penalty disadvantage to your target’s attack rolls until the end of his next turn.',
        'Your shot pierces your target’s flank just beneath the skin, the arrow/bolt sticking there and causing a penalty of disadvantage to his attack rolls until the end of his next turn, the penalty then reduced to -2 until the projectile is removed, requiring a full action (one half-action to break off the shaft, another half-action to withdraw the stump).',
        'Your shot clips your target’s shoulder, knocking him to the ground.',
        'Your shot lodges under a rib, causing your target intense pain every time he moves, making him suffer a -2 penalty to his attack rolls until the arrow/bolt is removed. This takes two full actions and requires a successful  DC10 heal check or a DC20 slight of hand check. Failure means the shaft broke but the head of the arrow remains lodged in your target’s ribcage, now instead requiring a successful DC20 heal check and six full actions to remove.',
        'Your shot pierces your target’s side, penetrating the wall of muscle and entering his abdominal cavity but missing any internal organs. Your target suffers disadvantage to his attack rolls until the arrow/bolt is removed, requiring two full actions and a successful DC10 heal check or a DC15 slight of hand check. Failure means that the projectile was successfully withdrawn but additional damage was caused, delaying healing, resulting in the target regaining one less W the next time he should have regained one or more W. In addition to delayed healing, the target must pass a DC20 constitution save or suffer an infection within one day, making him delirious and helpless for d10 days. A successful Shallyan Cure Disease spell will cure the infection.',
        'Your shot sinks into your target’s shoulder (roll d10: 1-5 right, 6-10 left) near the neck, barely missing the top of the lung. Due to the discomfort of having an arrow/bolt sticking out of his body, your target suffers disadvantage to his attack rolls when using that arm, until the projectile is removed. Unfortunately, the point is lodged deep underneath the collarbone, requiring six full turns and either a successful DC10 heal check if proficient or a DC25 dexterity save to avoid puncturing the lung. If this happens, the target suffers a cumulative -2 strength and dexterity each turn, falling unconscious when either of those characteristics reach zero and expiring within another 2d10 turns unless magical healing is provided.',
        'Your shot sinks into the target’s belly, felling him to the ground. The projectile has lacerated the intestines, spilling fecal matter into the abdominal cavity. Your target is stunned, requiring a DC20 constitution save to recover from the stunning. Until the arrow/bolt is removed, he’ll suffer disadvantage to all skill checks. Removing the arrow requires three full actions and either a successful DC10 heal check or a DC15 dexterity save. In addition, he must make a DC25 constitution save or die from infection in d10 days (becoming delirious and helpless within one day) unless successful magical healing seals up the lacerations within half that time. Alternatively, a DC25 heal check if proficient can be attempted.',
        'Your shot sinks deep into your target’s stomach just beneath the ribs on his left side and damages the spleen, causing internal bleeding. He is stunned until the end of his next turn and will then suffer a cumulative penalty of -1 to strength and dexterity each turn, falling unconscious when either of those ability scores reaches zero. In addition, penalties until the projectile is removed and subsequent risk of infection is as for #6 above. Fortunately, the bleeding will be brought to a halt by the tough membranous covering of the spleen, containing the damage before your target dies from loss of blood.',
        'Your shot splits your target’s breastbone but loses momentum before piercing his heart. The intense pain makes your opponent helpless until he can pass a DC20 constitution save, reducing it to stunning, requiring another save to recover from that. He can start rolling for those saves at the end of his next turn.',
        'Your shot penetrates between your target’s lower ribs, damaging a kidney. The massive bleeding causes a cumulative penalty of -2 to strength and dexterity each turn, your target falling unconscious when either of those ability scores reaches zero. Unless magically healed, he will die from loss of blood in another d10 turns. If he survives the arrow/bolt will need to be removed as for #6 above.',
        'Your shot penetrates your target’s chest, collapsing one lung. He must pass an immediate DC20 constitution save to stay conscious, otherwise suffering -9 to all skill checks, and will also suffer a 20% risk of dying each turn,until magical healing is provided. If he survives, the penalty will be reduced by 3 each week as the lung gradually expands again.',
        'Your shot tears through your target’s chest, damaging the aorta where it connects to the heart. The massive loss of blood causes a cumulative penalty of -2 to strength and dexterity each turn, your target falling unconscious when either of those ability scores reaches zero, then also suffering a cumulative 20% chance of dying each turn as his heart futilely empties his system of blood. Only a 6th level or higher healing spell can save his life.',
        'Your shot tears out through your target’s back, lacerating his liver, severing his abdominal aorta, damaging the spinal cord and felling him helpless to the ground, coughing up blood and bilious fluid. Death is inevitable in d10/2 turns.',
        'Your shot transfixes your target’s heart, killing him instantly.',
    ],
    head: [
        'Your shot nicks your target’s ear, causing a -2 penalty to his attack rolls until the end of his next turn.',
        'Your shot grazes your target’s cheek, slicing open a wound that bleeds far more freely than expected. He’ll lose one attack or free parry on his next turn as he clasps one hand to his face.',
        'Your shot grazes your target’s neck, causing him to flinch and suffer a penalty of -20% to his WS until the end of his next turn.',
        'Your shot slashes across your target’s ear, almost entirely severing the top third. He counts as stunned until the end of his next turn. In addition the flopping of the detached portion will be very distracting, causing a penalty of -10%to his WS for d10/2 turns. After the battle and any usual Heal tests, an additional DC20 Heal test can be attempted for the purpose of successfully stitching the two parts of the ear back together. This second test does not restore your W characteristic any further.',
        'Your shot grazes your target’s scalp, causing blood to flow into his eyes, as per Cutting Damage to Head #4.',
        'Your shot tears a furrow along your target’s jaw, exposing white bone and teeth. He is stunned until he can pass either a WP or constitution save, starting to roll on the turn after his next. The scarring will be unattractive but will not reduce his Fel by any significant margin.',
        'Your shot enters through your target’s cheek, knocks out a couple of teeth, lacerates the tongue and exits through the opposite cheek. Your target will suffer a penalty of -20% to his WS until the arrow is removed, requiring a full action. If attempting it himself, your target must first pass a constitution save. Failure simply means the arrow remains. After the arrow is removed, the target will spit blood and teeth but suffer only -10% to his WS for the duration of the battle due to pain and the blood trickling down his throat. The tongue and the holes in his cheeks will heal naturally although he’ll suffer a penalty of -20% to any Fel tests requiring speech until his W characteristic is fully restored.',
        'Your shot enters through your target’s neck, burying itself to the fletching. Surprisingly, there is very little blood, the arrow/bolt apparently having missed the major arteries or veins. Until the arrow/bolt is removed all the target’s tests count as DC20. Removal requires either a successful Heal test with the Surgery Talent or a DC25 dexterity save. Failure means a major artery was nicked during the removal process and either magical healing or another DC20 Heal test will be required to save him from bleeding to death within d10 turns.',
        'Your shot enters your opponent’s cheek near the nose and drives on into the nasal cavity, crumpling the thin walls to the nearby sinus. Your target will be at -20% to all tests for the remainder of the battle due to blood and bone fragments filling his mouth and nose. He is also stunned for d10 turns and must pass a constitution save or gain one IP extra due to the horrifying experience of seeing an arrow sticking from his face. Removing the arrow is pretty straightforward, requiring no special tests.',
        'Your shot enters through your target’s cheek, shattering a couple of upper molars and lodging in the mandibular joint between the upper and lower jaw. Your target can no longer either open or close his mouth properly and will suffer a penalty of -30% to all tests until the arrow/bolt is removed, due to extreme pain and the blood filling his mouth. Removal will require a DC15 Heal test or a DC25 dexterity save, taking three full actions. Failure means the arrow remains and a new test cannot be performed until the next day.',
        'Your shot punctures one of your target’s eyeballs, lodging in the bony orbit and causing a clear gelatinous substance to run down his face. The target is stunned until the end of the battle. No amount of mundane or magical healing can restore the eye and he suffers reduction of any BS or sight-based Perception test by half, including any bonus from Talents such as Excellent Vision or Sharpshooter.',
        'Your shot pierces your target’s forehead, penetrating the skull by about an inch or two and damaging one frontal lobe of the brain. The target is stunned for d10 turns. He must then pass a DC20 constitution save or fall unconscious. If he passes he will suffer a penalty of -30% to all tests until the end of the battle and must then pass an additional DC20 constitution save or suffer a lethal infection, making him delirious and helpless within one day, killing him within d10/2 days. A Shallyan Cure Disease spell will cure the infection. Survival will reduce his Fel by -20% due to personality changes and he will also gain a random Insanity.',
        'Your shot enters through one eye, penetrating into the brain and knocking your target unconscious. Death ensues within d10/2 turns unless magical healing is provided, counting as a DC25 spell test. Survival will mean the head of the arrow/bolt remains inside his skull and he will suffer a penalty of -20% to WS, BS, Ag, Int and Fel for the rest of his life due to brain damage.',
        'Your shot slams into your target, coming out through the back of his neck. There is a 25% chance the shot went in through the mouth, turning him into a gruesome sight indeed and severing the spinal cord on the way out, otherwise going in through the throat and severing a carotid artery in a gush of blood. Either way, the target falls to the ground and gurgles for d10/2 turns before dying inevitably.',
        'Your shot spits your target’s head like an apple, killing him instantly, although his body will continue to twitch a bit for d10/2 turns.',
    ],
    leg: [
        'Your shot grazes your target’s foot, causing a small but painful wound. He suffers a penalty of -10% to WS until the end of his next turn.',
        'Your shot grazes your target’s ankle, causing him to stumble, losing one attack or free parry on his next turn as he flails his arms.',
        'Your shot glances off your target’s shin. For the next d10/2turns his M is halved, all Dodge Blow tests count as DC20 and he may take no attack actions as he limps and gasps from the pain.',
        'Your shot slams into your target’s kneecap, penetrating about half an inch before tearing out again as the shaft whips around, sending the arrow/bolt spinning crazily through the air. The target is stunned until the end of his next turn and must pass a DC15 constitution save or drop his weapon.',
        'Your shot slices a furrow along your target’s hip. Distracted by the pain and forced to guard his injured side,your target suffers a penalty of -10% to all tests for d10 turns.',
        'Your shot slices across the back of your target’s foot, severing tendons to the toes. The target is stunned until the end of his next turn, then suffers a -2 penalty to his M as well as counting all Dodge Blow tests as DC20 until the end of the battle, as his toes won’t obey him properly, making footing awkward. Unless magical or surgical healing is provided within d10/2 days, M will be permanently reduced by -1.',
        'Your shot transfixes the target’s foot, pinning it to the ground. Until the arrow/bolt is removed, M is reduced to zero, all WS tests count as Challenging (-10%) and all Dodge Blow tests count as DC25. Removal requires two full turns and use of both hands.',
        'Your shot transfixes your target’s calf, fracturing the outer of the two bones of the lower leg. Until the end of the battle all tests are counted as DC20 due to the blinding pain. In addition, until the target’s W characteristic is fully restored, M is reduced by -2 and all Dodge Blow tests count as DC20. Removing the arrow is pretty straightforward, requiring no special tests.',
        'Your shot slams through your target’s knee, the point tearing out the back of the joint. Until the projectile has been removed from the jammed knee, M is reduced to 1 and all Dodge Blow tests count as DC25. Removing the arrow/bolt takes three full actions. Fragments of bone left inside the joint causes the knee to stiffen up and lock itself at inopportune moments, causing a permanent -1 penalty to M and making all Dodge Blow tests count as DC15.',
        'Your shot shatters your target’s shinbone, knocking him to the ground writhing in pain. He counts as helpless for d10/2 turns and is unable to support himself on that leg until the fracture has healed in six weeks. Hopping on one leg counts as having a Move of 1 and all WS and Dodge Blow tests count as DC25. One crutch reduces the difficulty of the tests to DC20 but requires the use of one hand. Two crutches enables you to limp along at a Move of 2 but requires both hands and Dodge Blow tests still count as DC20.',
        'Your shot shatters your target’s kneecap, knocking him to the ground. He is helpless with pain for d10 turns. He remains unable to support himself on that leg until his W characteristic is restored fully. M is permanently reduced by -2 and all Dodge Blow tests will count as DC15 from now on.',
        'Your shot sinks deep into the target’s thigh, cracking the thighbone. Your target falls to the ground, clasping his leg in agony, counting as helpless for d10 turns, then suffers a penalty of -20% to all tests for the duration of the battle due to the agonizing pain. Subsequent penalties and healing are as per #10 above.',
        'Your shot sinks into the target’s thigh, severing the large femoral artery. Your target will suffer a cumulative penalty of -10% to WS, BS, Ag and S each turn, falling unconscious when any of those ability scores reaches zero. He’ll then die from loss of blood in another d10/2 turns unless magical healing is provided.',
        'Your shot slams into your target’s hip, shattering bone and lacerating nerves and major blood vessels inside the pelvis. Your target falls to the ground, helpless with shock,and expires inevitably in d10/2 turns.',
        'Your shot shatters the femur and lays open the femoral artery, causing your target to fall unconscious to the ground and die inevitably in d10/2 turns in a bright pumping spray of arterial blood.',
    ],
};
exports["default"] = effects;


/***/ }),

/***/ "./src/lists/crit-hit/blunt.ts":
/*!*************************************!*\
  !*** ./src/lists/crit-hit/blunt.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var effects = {
    arm: [
        "Your weapon smashes into your opponent's fingers, numbing them. He suffers a penalty of -10% to his WS until the end of his next turn.",
        "Your weapon smashes into your opponent's hand, forcing him to make a Challenging (-10%) WP test to avoid dropping what he is holding in that hand.",
        "Your weapon smashes into your opponent's elbow, sending a shock of pain down his arm, forcing him to make a Hard (-20%) T test to avoid dropping what he is holding in that hand. In addition the arm will count as useless for two turns.",
        "Your weapon smashes into your opponent's biceps muscle,bruising it to the bone, forcing him to make a Very Hard (-30%) T test to avoid dropping what he is holding in that hand. In addition, his SB for that arm is halved (rounding down) for d10 turns.",
        "Your weapon smashes into your opponent's shoulder, bruising it badly. Anything held in that hand is dropped and your opponent is at half SB and a penalty of -20% to his WS for any attacks or parries made by that arm for the duration of the battle.",
        "Your blow smashes your opponent's hand, fracturing some of the bones between wrist and fingers. The hand is useless until the bones have healed in d10/2 weeks and he will then suffer a penalty of -10% to WS tests or tests requiring fine manipulation performed with that hand afterward due to improperly set bones unless a successful Heal test has been made to reset them the first week. Magical healing will automatically do this, as well as speeding up the healing process, ignoring the longer time required.",
        "Your weapon fractures your opponent's wrist, making the hand hang loosely at an odd angle. He will have to make a Hard (-20%) WP test or be stunned by the pain for d10/2 turns. Healing is as per #6 above, although also requiring a good splint or cast.",
        "Your weapon smashes into your opponent's forearm, fracturing the bones with a satisfying snap. He is stunned for d10 turns by the intense pain. The arm is useless until healed as per #7 above, except that the Heal test is Hard (-20%).",
        "Your blow smashes into your opponent's shoulder, fracturing the collarbone and dislocating the arm from its socket. Your opponent is stunned for d10 turns and must make a successful T test to remain standing, suffering a penalty of -20% to all tests due to the excruciating pain for the remainder of the battle. The arm is useless until popped back into place by a successful Heal test but your opponent will still suffer a penalty of -20% to any WS andS tests made using that arm until it has healed in d10/2 weeks.",
        "Your weapon crushes your opponent's elbow, smashing the joint and leaving the lower arm hanging from it with a disturbing amount of mobility. Your opponent is helpless with pain for d10 rounds. The arm will be useless until the bones have knitted in d10 weeks. Only magical healing will restore the full function of the arm, which will otherwise suffer a penalty of -10% to all WS, S and Ag tests in which it is used due to stiffness and damaged nerves, assuming it is cared for with a successful Hard (-20%) Heal test. If the damage is left untended by mundane or magical healing the badly healed joint raises the penalty to -20%.",
        "The bone of your opponent's upper arm breaks into several pieces with a loud crack that echoes across the battlefield. He is helpless with pain for d10 turns. Nerves and an artery are damaged by the sharp fragments, requiring magical healing to restore function or else the arm will have to be amputated or suffer gangrene within d10 days. This will be fatal within another d10 days unless successful magical healing is provided, still leaving the arm almost totally paralysed and useless.",
        "Your blow smashes into your opponent's shoulder, tearing and crushing the nerves that supply the arm. No amount of magical or mundane healing can restore function, leaving the arm hanging useless and paralysed from the shoulder by atrophying muscles and shredded tendons. Your opponent must make a Hard (-20%) T test or fall unconscious from the shock, being stunned for d10 turns and then suffering a penalty of -20% to all tests for the duration of the battle even if he makes the test.",
        "Your weapon practically tears your opponent's arm from its socket, leaving it dangling by torn muscle and tendons, bleeding heavily. Your opponent falls unconscious from shock and dies within 2d10 turns from loss of blood and massive traumatic shock unless magical healing is applied to at least partly mend the torn tissues, still leaving the arm useless and paralysed.",
        "Your weapon shatters your opponent's shoulder from the side, driving shards of bone into the ribcage, piercing the lung and nicking the heart. Your opponent coughs up bright arterial blood before he slumps to the ground and dies inevitably in d10/2 turns.",
        "Your weapon completely demolishes your opponent's shoulder before driving on and shattering the ribcage. Your opponent is hurled sideways and crumples to the ground, twitches once and never moves again.",
    ],
    body: [
        'Your weapon punches your opponent in the belly, momentarily winding him. He loses a half- action while recovering.',
        'Your weapon contuses one of your opponent’s ribs. He suffers –10 % to his WS until the end of his next turn.',
        'You connect solidly and squarely with your opponent’s solar plexus, driving his breath from his body. He cannot attack next turn and suffers a penalty of –20 % to any parryuntil the end of that turn.',
        'Your blow glances against your opponent’s groin, forcing him to make an immediate Very Hard(-30 %) T test to avoid spending until the end of his next turn helpless, puking his guts out. If female or otherwise non - equipped in the scrotal department the test is only Challenging(-10 %) and failure causes only stunning.',
        'Your blow contuses several of the ribs underneath your opponent’s arm. His WS is reduced by –20 % for the next d10 / 2 turns.',
        'Your weapon crashes into your opponent’s side, damaging his spleen, causing slow internal bleeding as that organ’s tough membranous covering tries to contain the steady leakage of blood. Your opponent suffers no ill effects during the remainder of this battle apart from being stunned until the end of his next turn, but he will have to make a Hard(-20 %) T test after the battle or suffer a cumulative –5 % to his WS, BS, Ag and S each hour. If he receives magical healing before any of those characteristics reaches zero his life will be saved, otherwise he will fall unconscious and die within the next 2d10hours. A surgical operation to remove the damaged spleen is also possible, although it will require a successfulHeal test with the Surgery Talent. Failure will result in the death of the patient. If successful, he’ll still have to pass a Hard(-20 %) T test or contract a lethal infection, dying within d10 / 2 days unless a successful Shallyan Cure Disease spell is preformed. Without a spleen, his immune system will have been weakened, making him suffer a penalty of –10 % to resist infections in the future.',
        'Your blow breaks several ribs, stunning your opponent until the end of his next turn. He will also suffer a penalty of –20 % to all actions as he gasps for breath and guards his ribs, until his W characteristic has been healed up to Lightly Wounded.',
        'Your blow connects solidly with your opponent’s hip, fracturing one wing of the pelvis - bone. He falls immediately to the ground and counts as helpless from the pain until he can pass a Hard(-20 %) T test, getting one roll each turn. He will then suffer a penalty of –10 % on hisWS for the remainder of the battle and his M will be reduced by –2 and all Dodge Blow tests will count as Hard(-20 %) until his W characteristic has been fully restored.',
        'Your weapon crashes into your opponent’s sternum, temporarily causing paralysis of his breathing musculature and cardiac arrhythmia as his hearts starts beating irregularly. He is helpless until the end of his next turn and will then have to pass a T test or his heart will simply stop, killing him. If he passes the T test he will simply be stunned for d10 / 2 turns before recovering his breath and normal heartbeat.',
        'Your blow shatters ribs, pushing splinters into internal organs, causing internal bleeding and a 50 % chance of a collapsed lung. If that happens your opponent will suffer a penalty of –20 % to all tests before collapsing unconscious after d10 / 2 turns and dying after an additional d10 / 2 turns. Only magical healing can save his life. If his lungs survive intact he’ll still suffer a penalty of –20 % to all tests until his ribcage has healed in four weeks.',
        'Your blow shatters your opponent’s shoulder - blade, causing a penalty of –20 % to all tests until his W characteristic has been fully restored. In addition there is a50 % chance of the blow also having glanced into his spine, causing spinal injury and resulting in total paralysis from the waist down. If your opponent passes a Challenging(-10 %) T test the paralysis was caused only by swelling from a cracked vertebra and he will recover from his paralysis in d10 / 2 weeks.',
        'Your opponent is hit squarely between his shoulder - blades as he twists to avoid your blow, fracturing his spine. He falls immediately to the ground, paralysed from the waist down. He must make a Hard(-20 %) WP test each turn to stay conscious. After falling unconscious he must make a Challenging(-10 %) T test or die before regaining consciousness. If he survives he will remain paralysed, as not even magical healing can restore him, and will gain one extra IP and be plagued by constant nightmares, reliving the moment of his trauma.',
        'Your blow hits your opponent’s breastbone with a mighty crack, fracturing and compressing it against the heart. Unbeknownst to your opponent, the shearing force has partly torn the aorta away from the heart, causing the pericardial sack surrounding the heart to fill up with blood, preventing it from beating properly. He will suffer a cumulative penalty of –15 % to his WS, BS, Ag and S each turn as his heart can no longer beat within the rapidly filling pericardium. When any of those characteristics reaches zero he will collapse dead. No mundane or magical healing can save him.',
        'Your blow drives pieces of your opponent’s breastbone and ribs into his lungs and heart, causing frothy blood to erupt from his mouth as he staggers backward and collapses. Death is inevitable within one turn.',
        'Your blow smashes your weapon straight through the front of your opponent’s ribcage, caving it in and killing him instantly. On your next turn you must take a half - action and pass either an S or Ag test to withdraw your weapon from your fallen foe’s chest cavity.',
    ],
    head: [
        'Your weapon glances off the side of your opponent’s head, making a ringing noise and reducing his next attack or parry by a penalty of –10 %.',
        'Your blow glances off your opponent’s cheekbone, making him lose one attack or free parry on his next turn and giving him a black eye.',
        'Your weapon glances off the bridge of your opponent’s nose, making him see bright flashes and his eyes water. All his WS tests during the next d10 / 2 turns will count as Challenging (-10 %).',
        'Your weapon smashes into the meat of your opponent’s neck, straining the large neck muscles. All his WS tests during the next d10 / 2 turns will count as Hard (-20 %).',
        'Your weapon lands a solid blow on the side of your opponent’s head, bursting his eardrum, making a small rivulet of blood run down his neck. He will be stunned until the end of his next turn and will suffer a penalty of –20 % to all hearing - based Perception tests until the eardrum has resealed itself in d10 / 2 weeks.',
        'Your blow connects to your opponent’s head with a sickening thud. Concussed, he falls to the ground, counting as helpless until he can make a Hard(-20 %) T test to regain full consciousness, starting to roll during his next turn, re - rolling each turn until he succeeds. For the rest of this battle he will suffer a –10 % penalty to his WS, BS and Ag due to dizziness and nausea. He must also make a Challenging(-10 %) test or suffer short - term amnesia, not remembering a thing about the battle or how he ended up in it.',
        'Your weapon fractures your opponent’s nose, stunning him until the end of his next turn as he sees bright flashes and spits blood. On his next turn after that he must pass a Challenging(-10 %) T test to recover, re - rolling each turn until he succeeds. There is a 50 % chance that the nose will be so smashed it reduces his Fel by d10 % unless magically healed or set with a successful Heal test by someone with the Surgery Talent.',
        'Your blow crashes into your opponent’s skull, stunning him until the end of his next turn. On his next turn after that he must pass a Hard(-20 %) T test to recover, re - rolling each turn until he succeeds. The blow has fractured his skull, causing a splinter of bone to press into his brain and starting a slow bleeding between the brain and the skull that will keep expanding, eventually killing him unless pressure is relieved. He’ll suffer a cumulative penalty of –5 % to his WS, BS, Ag, Int and Fel every two hours, falling into a coma when any of those characteristics reaches zero, dying within another d10 / 2 days. The only effective cure is a procedure called trepanation, which involves removing a piece of the skull by drilling or boring into it, thus relieving the pressure and allowing access to remove the splinter. This requires at least one hour and a Challenging(-10 %) Heal test with theSurgery Talent. If successful, a metal plate of some kind, usually a silver coin that has been hammered flat and polished, is used to cover the hole, nailed directly to the surrounding bone and then covered with a flap of the scalp. If already in a coma, your opponent will then wake up in another d10 / 2 days, otherwise regaining his lost characteristics at a rate of 5 % per day. Failure will still relieve the pressure but causes brain damage, reducing WS, BS, Ag, Int and Fel by –10 % permanently. Regardless of outcome, your opponent will have to pass a Challenging(-10 %) T test immediately after the surgery or contract a serious infection, killing him within d10 days unless a successful Shallyan Cure Disease spell is performed.',
        'Your weapon breaks your opponent’s jaw. He counts as stunned until the end of his next turn and then suffers a penalty of –20 % to his WS and BS for the remainder of the battle due to the pain. The jaw will have to be wired or otherwise tightly shut until knitted together in d10 / 2 weeks, forcing your opponent to eat through a straw until then. There is also 50 % risk that he’ll have lost several teeth, in which case his Fel will be reduced by - 5 % unless he already had missing or unsightly teeth(GM’s call).',
        'Your weapon crashes into your opponent’s larynx at the top of the windpipe, causing a spasmed airway. He gasps for breath, suffering a cumulative penalty of –10 % to his WS, BS, Ag and S each turn until he makes a Challenging(-10 %) T test to immediately regain the lost characteristics points, rolling at the start of each turn. If any of the characteristics reaches zero he falls unconscious from lack of air. If not making his roll within another TB turns he dies from lack of air.',
        'Your weapon crushed the bony orbit surrounding your opponent’s eyeball, causing a blow - out fracture, pushing bone splinters into the sinus and trapping some of the muscles controlling eye movement. He counts as stunned until the end of his next turn. On his next turn after that he must pass a Challenging(-10 %) T test to recover, re - rolling each turn until he succeeds. Unless magical healing is received within d10 days the eye will be effectively lost and he must reduce any BS or sight - based Perception test by half, including any bonus from Talents such as Excellent Vision or Sharpshooter.',
        'Your blow tears loose your opponent’s jaw. He must make an immediate Challenging(-10 %) T test or fall unconscious. If successful, he can only stumble around and try to hold his dangling jaw in place, counting as helpless for the duration of the battle. If he survives, either a Challenging(-10 %) Heal test with the Surgery Talent or magical healing is needed reattach the jaw. It must be done within d10 / 2 days, otherwise necessitating amputation of the whole lower jaw. Apart from looking absolutely hideous and being forced to feed only on liquids and losing all speech, your opponent must also reduce his Fel by –30 %.',
        'Your weapon smashes into the junction between head and neck, breaking your opponent’s spine. He falls unconscious and will die within d10 / 2 hours from loss of air due to damage to the breathing centre in the upper part of the spinal cord. Magical healing can save his life but will be Hard(-20 %) and will still leave him paralysed from the neck down and gains him d10 / 2 IP due to the horrible experience of being paralysed and helpless while slowly suffocating to death.',
        'Your weapon hits your opponent in the forehead and shatters his skull like an eggshell. He immediately falls to the ground and spends the remainder of his life(d10 rounds) twitching and jerking.',
        'Your weapon smashes into your opponent’s head and bursts it like a melon, spattering you with blood and grey matter. His death is immediate',
    ],
    leg: [
        "Your weapon glances off your opponent's knee, sending him off balance. He’ll suffer a penalty of –10% to his WS until the end of his next turn. If he survives the battle his knee will always ache 24 hours before a storm.",
        "Your weapon glances off your opponent's hip, forcing him to pass a Challenging (-10%) Ag test to avoid falling unceremoniously on his rump.",
        "Your weapon strikes the side of your opponent's knee, twisting it inward. He'll suffer a penalty of - 20 % to his WS until the end of his next turn as he tries to avoid putting any weight on that leg.",
        "Your weapon glances off your opponent's shin, forcing him to pass a Hard (-20%) WP test or drop everything and count as helpless until the end of his next turn as he jumps around on one leg, grasping it with both hands. Passing the test will result in him suffering a penalty of -20% to his WS until the end of his next turn as he staggers and gasps from the pain.",
        "Your blow badly bruises your opponent's thigh, driving him to his knees, counting as having fallen to the ground. M is reduced by -1 and any Dodge Blow and WS tests willcount as Challenging (-10%) until the end of the battle.",
        "Your blow crashes into your opponent's hip, chipping one wing of the pelvis and felling him to the ground. Due to the pain he'll suffer a penalty of - 20 % to his WS and unable to rise for d10 / 2 turns.",
        "Your weapon smashes your opponent's great toe, squashing it almost flat. All WS and Dodge Blow tests will count as Hard (-20%) until the end of the battle. His M will be reduced by -1 and any Dodge Blow tests will continue to be counted as Challenging (-10%) until the toe has healed in two weeks.",
        "Your blow crushes your opponent's foot, fracturing several of the bones between ankle and toes. He falls to the ground and will be unable to put any weight on that foot and thus to rise for the duration of the battle. He'll be effectively one - legged until the bones have healed in four weeks. He must then make a Challenging(-10 %) T test or suffer a permanent - 1 reduction to his M due to the bones not setting properly. Magical healing performed before the bones have healed will negate the need for this test.",
        "Your blow shatters your opponent's ankle, felling him to the ground and making the foot stand out from the lower leg at a strange angle. He’ll be screaming and helpless for d10/2 turns unless he can pass a Hard (-20%) WP test, in which case he'll only count as stunned rather than helpless. He’ll be unable to put any weight on the foot until it has healed in four weeks. Unless the ankle is set correctly by a successful Heal test, it’ll heal crooked, causing a penalty of –1 to M and making all Dodge Blow tests count as Challenging (-10 %) ever after.",
        "Your blow smashes your opponent's shin, shattering the shinbone into several fragments and breaking the fibula, the outer of the two long bones in the lower leg, as well, fragments piercing through the skin. Your opponent falls to the ground, helpless and blind with pain for d10 turns, then suffering a penalty of –10% to all tests for the remainder of the battle. He'll be unable to rise afterwards and will have to pass a Hard(-20 %) T test or suffer infection in the open fracture within d10 days, causing death in another d10 days unless amputation is performed. A successful Shallyan Cure Disease spell will save his life but the leg will remain useless unless magically healed, which will require a Hard(-20 %) spell test due to the mess of bone shards, damaged nerves and blood vessels inside the leg.",
        "Your blow shatters your opponent's kneecap. He falls helpless to the ground, clutching his injury as his throaty screams echo across the battlefield for d10 turns and will then be unable to rise and suffers a penalty of -20% to all tests for the remainder of the battle. Unless magical healing is provided he'll be at - 2 to his M and counting all Dodge Blow tests as Hard (-20 %) for the rest of his life due to a bad limp and stiffness of the joint.",
        "Your blow connects solidly with the middle of your opponent's leg. With an audible popping sound, the knee bends the wrong way, large ligaments in the knee severed. Your opponent falls to the ground, helpless from pain for the rest of the battle, and must make a Hard (-20%) WP test each turn or fall unconscious. Only magical healing, which will count as Very Hard (-30%), will restore function of the knee. Otherwise he'll be at half M for the rest of his life due to a seriously unstable knee joint, counting all his Dodge Blow tests as Very Hard(-30 %).",
        "Your weapon smashes into your opponent's thigh, fracturing the thighbone and lacerating the femoral artery. Your opponent falls unconscious in an undignified heap onthe ground as his leg visibly swells up and goes purple before your eyes. Death will occur unless a tourniquet (requiring two full turns and a successful Heal test) or magical healing is provided within 2d10 turns and even that will not save the leg which will have to be amputated or the patient will die from massive gangrene in the bloodless leg, regardless of any magical healing.",
        "Your weapon smashes into your opponent's hip, breaking the thighbone near the joint. The sharp end of the bone lacerates the large artery and tears out from the skin as your opponent falls, a white spear of bone sticking out from his hip. He immediately falls unconscious and expires inevitably in a spreading pool of blood within d10/2 turns.",
        "Your weapon smashes your opponent's pelvis, causing major trauma to nerves and major arteries. He crumples to the ground in a moaning heap and dies inevitably from shock and bleeding within one turn.",
    ],
};
exports["default"] = effects;


/***/ }),

/***/ "./src/lists/crit-hit/bullet.ts":
/*!**************************************!*\
  !*** ./src/lists/crit-hit/bullet.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var effects = {
    arm: [
        'Your bullet grazes your target’s hand, forcing him to pass a WP test or drop anything he is holding in that hand.',
        'Your bullet nicks the wrist of your target, causing a small but vicious wound. Due to the pain, he suffers a penalty of–10% to his WS until the end of his next turn.',
        'Your bullet glances off your target’s elbow, sending an electric shock of pain down his arm, making him drop anything he is holding in that hand. The arm is numb and useless for d10/2 turns.',
        'Your bullet takes a chunk of your target’s biceps muscle with it. He suffers a penalty of –20% to his WS until the end of his next turn.',
        'Your bullet pierces your target’s deltoid muscle of the shoulder, lodging just underneath the skin. Your target drops anything held in that hand and suffers a penalty of –20% to his WS until the end of his next turn. Additionally, until the bullet is removed you can’t fully recover your fullW characteristic, effectively having one less W than normal. Removal requires two full turns, a sharp knife anda successful Easy (+20%) Heal test.',
        'Your bullet makes a hole through your target’s hand, smashing some of the bones between the wrist and the fingers and severing the tendons to one digit, either the middle or ring finger as the GM deems fit. Anything held in that hand is dropped and the hand is useless until the end of the battle. Afterwards your target will suffer a permanent penalty of –5% to any tests requiring fine manipulation performed with that hand due to reduced manual dexterity, probably simply binding the limp finger to its neighbour to keep it from interfering with any tasks.',
        'Your bullet removes one finger on your target’s hand. Roll1d10: 1-2 thumb, 3-4 index finger, 5-6 middle finger, 7-8 ring finger, 9-10 pinkie. Your target is stunned until the end of his next turn. If the thumb is lost, grip will be very poor, reducing WS, Ag and S by a penalty of –20% for any tests or blows made with that hand. Loss of a pinkie is mostly cosmetic in effect and the target can count himself lucky. Loss of any other finger will result in penalties as for #6 above.',
        'Your bullet shatters your target’s wrist, smashing the many small wrist-bones and severely damaging nerves and tendons. Anything held in that hand is dropped. Your target counts as stunned and must pass a Hard (-20%) WP test to avoid dropping anything held in the opposite hand to grab his injury. At the end of his next turn he must pass a WP test to recover from the stunning, rolling again next turn if he fails. The hand is useless until the target’s W characteristic is fully restored. He must then pass a Hard (-20%) T test. Failure means the hand remains next to useless, stiff and with hardly any function left in the fingers. If successful, he’ll suffer a permanent penalty of –20% to WS, Ag and S tests (as well as any tests requiring fine manipulation) made with that hand due to stiffness and reduced manual dexterity. Magical healing will heal the injury completely if provided with d10/2 days.',
        'Your bullet lodges in the target’s elbow, jamming the joint. Your target is stunned by blinding pain for d10/2 turns and the arm is useless until the bullet is removed. This requires a successful Heal test with the Surgery talent. If this is not provided within d10 days the target must pass a Challenging (-10%) T test or suffer an infection that will render the joint, and the arm, permanently useless. In addition, he must pass a second test or the infection will spread, killing him within another d10 days unless amputation is performed. A successful Shallyan Cure Disease spell will heal the infection but not remove the bullet or restore function in the arm.',
        'Your bullet smashes your target’s collarbone. He is stunned for d10 turns and suffers a penalty of –30% to all tests performed with that arm, including for calculating SB, until his W characteristic is fully recovered.',
        'Your bullet shatters the bone of your target’s upper arm. The target is stunned by blinding pain for d10 turns and the arm is useless. Such an injury requires magical healing within d10 days or it will develop gangrene and need amputation.',
        'Your bullet pierces the meaty part of the target’s shoulder near the neck, severing the brachial plexus, the bundle of nerves supplying the arm, and stunning him for d10/2 turns. He must pass a Hard (-20%) WP test to avoid dropping whatever he is holding in the other hand to grasp the injured shoulder. Unless magically healed within one day, which will count as a Hard (-20%) spell test, the paralysis will be permanent, rendering the arm limp and useless. Also, the lodged bullet will permanently reduce his W by –1.',
        'Your bullet shatters your target’s shoulder-blade and severs the large artery branching off from the aorta to the arm. The victim of your lethal accuracy will suffer a 30% risk of dying from loss of blood each turn, unless magically healed which will require a Hard (-20%) spell test. Until his W characteristic is fully restored, the pain ofhis shattered shoulder-blade will make all tests connected with any physical activity count as Very hard (-30%). Also, the lodged bullet will permanently reduce his W by –1 if he survives.',
        'Your bullet almost tears your target’s arm off at the shoulder, severing major blood vessels. He immediately falls unconscious and will inevitably die in a spreading pool of blood within d10/2 turns.',
        'Your bullet enters through your target’s armpit, tearing its way through both lungs and damaging the heart. Your target coughs up a spray of blood before collapsing and dying within one turn.',
    ],
    body: [
        'Your bullet grazes your target’s side, causing him to flinchand suffer a penalty of –10% to his WS until the end of his next turn.',
        'Your bullet tears a furrow along one rib, causing a penalty of –20% to your target’s WS until the end of his next turn.',
        'Your bullet pierces your target’s flank at a sharp angle, lodging underneath the skin. He suffers a penalty of –30% to his WS until the end of his next turn. In addition, the bullet also brought with it a small piece of wadding or the target’s clothing into the wound, causing an infection that will delay his healing process, meaning he’ll recover one less W the next time he should have restored some of his W characteristic.',
        'Your bullet clips your target’s shoulder, spinning him almost completely around and knocking him to the ground, stunned until the end of his next turn. Apart from that dramatic effect, the wound is comparatively minor.',
        'Your bullet lodges under a rib, causing your target intense pain every time he moves, making him suffer a –10% penalty to his WS until the bullet is removed. This requires a successful Heal test with the Surgery Talent. Failure will result in infection as per #3 above.',
        'Your bullet smashes into your target’s back at a sharp angle and clips a vertebra in the spine of the small of the back, causing temporary paralysis from the shock of impact. Your target falls to the ground, unable to use his legs for d10 turns, before recovering completely.',
        'Your bullet hits your target’s shoulder-blade at a sharp angle, shattering itself on impact. The fragments tear awaya massive amount of flesh from the surface of the shoulder-blade, white bone showing clearly through the ragged hole they leave as they exit. Your target is stunned for d10 turns and suffers a penalty of –20% to all tests from pain and ruined muscle tissue until the end of the battle. The penalty is then reduced to –10% until his W characteristic is fully restored.',
        'Your bullet punches into your target’s belly, penetrating the abdominal cavity and damaging the intestines. Results are as for Cutting Damage to Body #7.',
        'Your bullet punches into your target’s chest, knocking him sprawling and fracturing a rib, the jagged ends puncturing one lung, causing it to collapse. He suffers a cumulative penalty of –5% to WS, BS, Ag and S each turn, falling unconscious when any of those characteristics reaches zero. He is then left lying on the ground, blood running from his mouth and a bubbling noise emanating from the hole in his chest. He’ll die in 2d10 turns unless magical healing is provided. If he survives he’ll suffer a penalty of –30% to all tests for one week, reducing the penalty by 10% for each subsequent week, before recovering when the lung has inflated itself again.',
        'Your bullet slams into your target’s belly, knocking him sprawling, stunned until the end of his next turn. The liver has been penetrated and he’ll suffer a cumulative penalty of –10% to WS, BS, Ag and S each turn due to internal bleeding, falling unconscious when any of those characteristics reaches zero. He’ll die in another d10 turns unless magical healing is provided.',
        'Your bullet smashes a lower rib and ruins one kidney. Yourtarget is knocked sprawling, helpless until the end of his next turn. He’ll suffer a cumulative penalty of –15% to WS, BS, Ag and S each turn due to massive internal bleeding, falling unconscious when any of those characteristics reaches zero. He’ll die in d10 turns unless magical healing is provided, and even that will count as a Hard (-20%) spell test.',
        'Your bullet smashes your target’s breastbone, shattering it and driving fragments deeper into the chest. Your target will have to pass a Challenging (-10%) T test or die on the spot, his heart pierced. If he survives he’ll count as helpless for d10 turns, then suffer a penalty of –30% to all tests until his W characteristic is fully restored, due to problems breathing, practically every rib disconnected from his shattered breastbone. After one day he’ll have to pass a Hard (-20%) T test or contract pneumonia due to not being able to cough up phlegm properly, dying within d10/2 days unless a Shallyan Cure Disease spell saves him.',
        'Your bullet punches clear through your target’s belly, exiting from his back in a spray of blood and tissue. He’ll count as helpless from pain and shock until he expires in great agony d10 hours later, unless both a successful Shallyan Cure Disease spell and a successful magical VeryHard (-30%) healing spell test saves him.',
        'Your bullet smashes into your target’s chest, tearing through one lung and major blood vessels. A trickle of blood runs from your target’s mouth as he slumps to the ground and expires inevitably d10/2 turns later.',
        'Your bullet makes a perfect bull’s eye hit on your target’s heart, sending him flying backwards in a most dramatic manner, dead before he hits the ground.',
    ],
    head: [
        'Your bullet nicks your target’s ear, causing a –10% penaltyto his WS until the end of his next turn.',
        'Your bullet grazes your target’s cheek, leaving an open wound that bleeds far more freely than expected.He’ll lose one attack or free parry on his next turn as he clasps one hand to his face.',
        'Your bullet grazes your target’s neck, causing him to flinch and suffer a penalty of –20% to his WS until the endof his next turn.',
        'Your bullet tears away most of your target’s outer ear.He counts as stunned until the end of his next turn.',
        'Your bullet grazes your target’s scalp, causing blood to flow into his eyes, as per Cutting Damage to Head #4.',
        'Your bullet tears a furrow along your target’s jaw, exposing white bone and teeth.He is stunned until he can pass a WP or T test, starting to roll on the turn after his next.The scarring will be unattractive but will not reduce his Fel by any significant margin.',
        'Your bullet enters through your target’s cheek, knocks out a couple of teeth, lacerates the tongue and exits through the opposite cheek.Your target is stunned until the end of his next turn and will spit blood and teeth, suffering a penalty of –10% to his WS for the duration of the battle due to pain and the blood trickling down his throat.The tongue and the holes in the cheeks will heal naturally although he’ll be at –20% to any Fel tests requiring speechuntil his W characteristic is fully restored.',
        'Your bullet tears out a large part of your target’s larynx, the upper part of the windpipe, opening a gaping hole at the front of his neck.He is stunned for d10 turns and will be rendered permanently mute, his Fel reduced by a penalty of –20% due to the unsightly neck- hole through which he now does most of his breathing.',
        'Your bullet smashes into your target’s temple, fracturing his skull.He must make an immediate Hard(-20 %) T test or be knocked unconscious, otherwise being stunned for d10 turns and suffering a penalty of –10 % to all tests for the duration of the battle due to dizziness and nausea.',
        'Your bullet goes in through your target’s mouth, knocking out a couple of front teeth and damaging the tongue beforeexiting through the angle of the lower jaw, fracturing it and causing his jaw to hang loosely on that side.He’ll stunned for d10 / 2 turns and suffers a penalty of –20 % to all tests for the duration of the battle due to pain and the blood and gore filling his mouth.He’ll be unable to speak or eat solid food until his W characteristic is fully restored.Afterward, due to a misaligned lower jaw and damage to the tongue slurring his speech, he’ll suffer a permanent penalty of –10 % to his Fel.',
        'Your bullet punctures one of your target’s eyeballs, lodging in the bony orbit and causing a clear gelatinous substance to run down his face.The target is stunned until the end of the battle.No amount of mundane or magical healing can restore the eye and he suffers reduction of any BS or sight - based Perception test by half, including any bonus from Talents such as Excellent Vision or Sharpshooter.',
        'Your bullet fractures your target’s skull, lodging between the bone and brain, knocking him unconscious.He’ll have to pass a Hard(-20 %) T test or die within d10 / 2 hours due to intracerebral haemorrhaging, blood filling his skull and compressing the brain.If successful he’ll wake up d10 / 2 days later with a new random Insanity due to brain damage.',
        'Your bullet enters through one eye, penetrating into the brain and knocking your target unconscious.Death ensues within d10 / 2 turns unless magical healing is provided, counting as a Very Hard(-30 %) spell test.Survival will mean your target will suffer a reduction of –20 % to WS, BS, Ag, Int and Fel for the rest of his life due to brain damage.',
        'Your bullet exits through the back of your target’s neck in a spray of blood.There is 50 % chance it entered through the lower part of his face, making him a gruesome sight indeed and severing the spinal cord on its way out, otherwise having entered through his throat and torn out a carotid artery in the process.Either way, your target drops to the ground and gurgles for d10 / 2 turns before expiring in a widening pool of blood.',
        'Your bullet enters through your target’s forehead, making a coin - sized entry hole, emerging from the back of his head in a massive spray of blood and brain tissue as it makes a fist - sized exit hole.Your target could not possiblybe any deader.',
    ],
    leg: [
        'Your bullet grazes your target’s foot, causing a small but painful wound.He suffers a penalty of –10 % to WS until the end of his next turn.',
        'Your bullet grazes your target’s ankle, causing him to stumble, losing one attack or free parry on his next turn as he flails his arms.',
        'Your shot glances off your target’s shin.For the next d10 / 2turns his M is halved and he may take no attack actions as he limps and gasps from the pain.',
        'Your bullet clips your target’s kneecap.The target is stunned until the end of his next turn and must pass a Challenging(-10 %) WP test or drop his weapon to clasp his knee.',
        'Your bullet tears a shallow furrow along your target’s hip.Distracted by the pain and forced to guard his injured side, your target suffers a penalty of –10 % to all tests for d10 turns.',
        'Your bullet smashes into your target’s foot, fracturing several bones and lodging inside.The target is stunned until the end of his next turn.Until the fracture has healed after four weeks, all Dodge Blow tests count as Hard (-20 %) and M is reduced by –2. This will only reduce the penalties to a –1 to M until the bullet is removed, requiringa successful Heal test with the Surgery Talent.',
        'Your bullet smacks into your target’s thigh, tearing through muscle and lodging next to the thighbone.Your target is stunned until the end of his next turn and must thepass a Challenging WP(-10 %) test to recover from the stunning.His M is reduced by –2 and all Dodge Blow testscount as Hard (-20 %) until the muscles have healed when your target’s W characteristic is fully restored.Unfortunately, the bullet will have carried a small piece of wadding or a piece of the target’s pants into the wound, causing an infection that will slow the healing process, meaning he’ll recover one less W the next time he should have restored some of his W characteristic.The bullet will then be encapsulated by fibrous tissue and not cause any further problems.',
        'Your bullet goes cleanly through your target’s calf, fracturing the outer of the two bones in the lower leg and tearing out a sizeable chunk of flesh.Your target is stunned until the end of his next turn.His M is reduced by –2 and all Dodge Blow tests count as Hard (-20 %) until the muscles and bone have healed when your target’s W characteristic is fully restored.In addition, the huge gapingwound will cause a cumulative penalty of –5 % to the target’s WS, BS, Ag and S each turn.He’ll fall unconscious when any of those characteristics reaches zero, although the spurting blood vessels will then contractand prevent him from bleeding out entirely.',
        'Your bullet shatters your target’s kneecap, dropping him tothe ground in a howling heap, helpless with pain for d10 turns.Unless magical healing is provided, M is permanently halved and all Dodge Blow tests count as Hard (-20 %) from now on, due to extensive damage to the joint.',
        'Your bullet shatters your target’s shinbone, knocking him to the ground writhing in pain.He counts as helpless for d10 / 2 turns and is unable to support himself on that leg until the fracture has healed in six weeks.Hopping on one leg counts as having a Move of 1 and all WS and Dodge Blow tests count as Very Hard(-30 %).One crutch reducesthe difficulty of the tests to Hard(-20 %) but requires the use of one hand.Two crutches enables you to limp along at a Move of 2 but requires both hands and Dodge Blow tests still count as Hard (-20 %).',
        'Your bullet smashes into your target’s hip, lodging in the smashed joint.The hipbone is badly fractured and the pelvis chipped, dropping the target to the ground, helpless with pain for d10 / 2 turns.The leg is useless until the fracture has healed in six weeks.If the leg was set with a successful Heal test with the Surgery Talent, limited mobility is returned although M is reduced by –2 and all Dodge Blow tests will count as Challenging (-10 %).Otherwise the hip will heal in a bad position, making the joint very stiff and painful, reducing M to 1 and making allDodge Blow tests count as Hard (-20 %).',
        'Your bullet shatters your target’s thighbone into several fragments, knocking him to the ground, clasping his leg in agony, counting as helpless for d10 turns, then suffering a penalty of –20 % to all tests for the duration of the battle due to the agonizing pain.Such an injury requires magical healing within d10 days or it will develop gangrene and need amputation.',
        'Your bullet rips through the target’s groin where the leg joins the hip, severing the femoral artery.Bleeding excessively, the target falls to the ground, suffering a cumulative penalty of –10 % to WS, BS, Ag and S each turn, falling unconscious when any of those characteristicsreaches zero.He’ll then die from loss of blood in another d10 / 2 turns unless magical healing is provided.',
        'Your bullet smashes into your target’s hip, ricocheting from the pelvis into the abdominal cavity, deforming and ripping through guts and internal organs.Your target falls to the ground, helpless with pain, expiring in great agony within d10 turns.',
        'Your bullet slams into your target’s pelvis, shattering bone and lacerating nerves and major blood vessels.Your target falls to the ground and dies inevitably in d10 / 2 turns from shock and massive loss of blood.',
    ],
};
exports["default"] = effects;


/***/ }),

/***/ "./src/lists/crit-hit/cutting.ts":
/*!***************************************!*\
  !*** ./src/lists/crit-hit/cutting.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var effects = {
    arm: [
        "Your opponent's arm is nicked, causing some bleeding that makes his grip slippery. At the start of his next turn he must make a Hard (-20%) WS test or lose either one attack or one free parry, depending on what he holds in that hand.",
        "Your weapon slices across your opponent's fingers. He must make an immediate Challenging (-10%) T test or drop what-ever he is holding in that hand.",
        "Your weapon bites into the target's biceps muscle. Until he has healed at least one W, any attacks or parries made with that arm will suffer a penalty of –20% to WS, BS and S.",
        "Your weapon drives into the large deltoid muscle of your opponent's shoulder, sending a shock down the entire arm, causing whatever is held in that hand to be dropped. For the rest of the combat he suffers a penalty of –10% to his WS, due to the pain.",
        "Your weapon opens up your opponent's forearm, slicing open the skin to expose red, twitching, glistening layers of muscle. Anything held in that hand is dropped and the opponent must pass a Challenging (-10%) WP test or count as stunned until the end of his next turn, staring at the hideous sight. If he fails he'll drop anything held in the other hand, grasping at the wound in an attempt to close it. He may at-tempt another test on each subsequent turn to recover from this, now at his unmodified WP.",
        "Your weapon slices into your opponent's forearm, rebound-ing from the bone. Anything held in that hand is dropped and the hand is useless until his injury level is changed back to Lightly Wounded.",
        "Your weapon slices into your opponent's forearm, damaging muscles and tendons, lodging in the bone for a fraction of a second before being wrenched loose. Your opponent is stunned until the end of his next turn and the hand is useless until his W characteristic is fully restored. In addition, he'll suffer a permanent penalty of –10% to any tests requiring fine manipulation made with that arm, due to difficulties opening the fingers properly.",
        "Your weapon severs your opponent's biceps muscle from its tendonous attachments to the bones in the forearm. The en-tire arm is useless until his W characteristic is fully restored. However, magical healing or a successful Heal test with the Surgery Talent is needed to restore full function; otherwise any use of that arm will suffer a –20% penalty, including for WS, BS and S tests, due to the severed muscle and tendon ends not knitting together properly, making it difficult to flex the arm.",
        'Your weapon cleanly slices a large chunk of flesh from the meaty part of the upper arm and shoulder. Anything held in the hand is dropped, your opponent cannot use that arm and suffers a penalty of  –20% to his WS for the duration of the combat due to pain and bleeding. He must also make an immediate Hard (-20%) T test or fall to the ground from the intense pain.',
        "Your weapon severs d10/2 fingers from your opponent's hand. A result of 5 means the whole hand has been lopped off. He must make an immediate Hard (-20%) WP test or count as stunned until the end of his next turn. If more than two fingers are lost anything in that hand is dropped as well and it can no longer be used to hold any weapons. Any tasks requiring fine manipulation performed with that hand in the future suffers a penalty of –5% to any such test, per finger lost, with no task at all possible if the whole hand has been lost. If the whole hand has been severed your opponent will suffer a penalty of –10% to all tests for the remainder of the battle due to shock and bleeding.",
        "Your opponent's arm is severed at the elbow. Blood pumps out in bright spurts and he suffers a 20% chance of fainting from loss of blood each turn until a successful Heal test has staunched the bleeding, requiring two full turns of bandaging or a good burning, cauterizing the wound. If left untended and unconscious he will bleed to death, suffering a 10% chance of dying each turn once unconscious.",
        "Your weapon slashes deeply into your opponent's shoulder, severing the collarbone. There is a 50% chance the large artery of the shoulder is severed or the tip of the lung punctured, in which case he'll suffer a cumulative penalty of –10% to all WS, BS, S and Ag each turn, falling unconscious when any of those characteristics reaches zero, dying within another d10 turns unless magical healing is provided. Even if he survives the blow the arm will be useless and he'll suffer a penalty of –20% to all WS, BS, S and Ag tests until his W characteristic is fully restored and the stump healed.",
        "Your opponent's arm is severed cleanly at the shoulder, resulting in gouts of blood pouring from the ruined stump, causing his death within five turns unless magical healing can be obtained, which, however, cannot restore the arm. Your opponent falls immediately unconscious in a twitching heap.",
        "Your weapon drives cleanly through your opponent's shoulder near the junction between body and neck and continues deep into his chest cavity. Your surprised adversary can only stare at you as he slides slowly off your blade and into oblivion, dying inevitably within d10/2 turns.",
        "Your weapon crashes into your opponent's shoulder, continuing its arc through his body until it exits through his opposite hip. He falls in two pieces, dead before he hits the ground.",
    ],
    body: [
        'You slash your opponent across the chest, rending his cloth- ing or causing an unsightly scrape or laceration across his armour.As your opponent stumbles backward he will not be able to perform any attack action on his next turn.If he is wearing neither armour nor clothing the blade will slice the skin, causing him to flinch and earning him an extra –10 % penalty to any parries made until the end of his next turn apart from not being able to attack.',
        'A long cut along a rib leaves white bone gleaming through the wound.The shock and pain earns your opponent a penalty of –10 % to all actions until the end of his next turn.',
        "Your weapon cuts into the soft tissues over your opponent's collarbone, chipping the bone.He must make a Very Hard(-30 %) WP test or drop his weapon.",
        "Your weapon splits one of your opponent's ribs.He must make a Hard(-20 %) T test or count as stunned until the end of his next turn as he gasps for breath.For the rest of this battle he will suffer a penalty of –5 % to any parries due to the pain from the damaged chest muscles connecting to his shoulder and upper arm.",
        "Your weapon slices across your opponent's chest, splitting open leather or mail links and dislodging any shoulder plates, reducing the AP of his body armour by 1. If he is not wearing any armour the result will be as for #4 above.",
        "You carve deeply into your opponent's side, lodging your weapon in the bony portion of his hip.He falls to the ground, writhing in pain, causing him to count as helpless until the end of his next turn.On your next turn you must make an Easy(+20 %) S test to dislodge your weapon, whereupon you can take a full action as normal.Until you succeed you will be unable to use the weapon and your opponent will continue to be counted as stunned due to the excruciating pain of your wrenching and twisting of your weapon in his wound.Letting go of your weapon counts as having dis - lodged it.Your opponent can try to tear himself free by pass both an Average WP test and an Easy(+20 %) S test, an exception to the rule of not being able to perform any actions when stunned, although he'll still count as helpless on that turn, regardless of whether or not he succeeds.",
        "Your weapon drives into the right side of your opponent's abdomen, just underneath the ribs, penetrating the wall of flesh and muscle into his abdominal cavity and nicking the gallbladder.Your opponent must make a Hard(-20 %) T test or be stunned for d10 / 2 turns.In addition, he must make a Very Hard(-30 %) T test or die from infection in d10 days(becoming delirious and helpless within one day) unless successful magical healing, the Shallyan Cure Disease spell or a Very Hard(-30 %) Heal test with the Surgery Talent is made within half that time.The latter involves a very risky surgical procedure, digging deep into the abdomen, stitching up the holes and cleaning out any gall or other foul sub - stances visible.",
        "Your weapon slices into your opponent's groin, causing dramatic bleeding and stunning him for d10 turns(d10 / 2 if female).He'll suffer a penalty of –10 % to all tests for the remainder of the battle due to the pain.In addition there is a 50 % risk he will be rendered permanently sterile from the injury(10 % if female).",
        "Your weapon slices into your opponent's belly and groin, puncturing the bladder.With a faint odour of ammonia, urine spills from the wound and onto your blade.Your opponent must make a Challenging(-10 %) WP test or gain one extra IP as he realizes what has happened.He will suffer a penalty of –20 % to all actions for the rest of the battle.Fortunately, urine is more or less sterile, meaning he will only have to make a Challenging(-10 %) T test to avoid contracting a lethal infection as for #7 above.If he survives he must make a Challenging(-10 %) T test or be prone to leakage and constantly reek of urine, permanently reducing his Fel by –10 %.",
        'Your weapon cuts through the lower left ribs and drives deep into the abdominal cavity, lacerating the spleen.The heavy internal bleeding resulting from this will cause a cumulative loss of –5 % to WS, BS, Ag and S each turn.When any of those characteristics reaches zero your opponent falls unconscious and will die within d10 / 2 hours unless successful magical healing or a successful surgery is performed.In the latter case the procedure is as for Blunt Damage to Body #6 except that time is quickly running out, leaving less time for getting your opponent to a surgeon.',
        "Your weapon deeply penetrates your opponent's belly, badly lacerating both the small and large intestine, spilling fecal matter into the abdominal cavity.He will have to make an immediate Challenging(-10 %) T test or fall unconscious.If successful he'll still be at –20 % to all tests due to pain and shock for the duration of the combat.Such a wound inevitably causes a severe infection and hardly any amount of mun - dane healing in the Old World can repair such damage, the victim usually dying within d10 / 2 days.Should an attempt atHeal with the Surgery Talent be made it will count as Very Hard(-30 %) and even if the surgeon is successful your opponent must still pass a Very Hard(-30 %) T test or succumb to infection anyway.Any successful magical healing attempt will take care of the infection as well but will also be counted as Very Hard(-30 %) unless a successful Shallyan Cure Disease spell has first been performed, in which case it merely counts as Challenging (-10 %).",
        "Your weapon opens your opponent's abdomen, spilling his entrails about his feet.Death will occur within d10 turns unless magical healing as per #11 is obtained.Until that time your opponent can do nothing except futilely try to stuff the spilt entrails back into his ruined abdomen.Anyone surviving such a horrifying experience will gain d10 / 2 IP.",
        'Your weapon slices deep into your opponent, splitting several ribs before severing the spinal cord and lodging in a vertebra.As you yank loose your weapon he falls down and must make an immediate Hard(-20 %) T test or die on the spot.If successful he will be helpless for the duration of the battle and will then be a cripple for the rest of his life, para - lysed from the waist down.No amount of mundane or magi - cal healing, except possibly the direct personal intervention of Shallya herself, could repair such an injury.',
        "You cut deeply into your opponent's chest, staving in ribs and puncturing a lung before splitting the heart and aorta, showering you in a spray of blood.Your opponent spits blood as he slides off your weapon and inevitably dies within the next turn.",
        "Your weapon describes a clean arc through your opponent's chest and belly, practically splitting the poor bugger in half.He dies immediately, falling to the ground in two loosely connected pieces.",
    ],
    head: [
        "The flat of your blade clips your opponent's head.If he is not wearing a helmet he counts as stunned until the end of his next turn; otherwise the helmet flies off his head to land d10 feet away in a random direction.",
        'You slash your opponent across the cheek, causing a shallow but painful wound.He suffers a penalty of –10 % on his WS until the end of his next turn.',
        "Your weapon glances off your opponent's temple, causing momentary disorientation.He suffers a penalty of –20 % on his WS until the end of his next turn.",
        'You slash your opponent across the forehead.The flow of blood into his eyes will cause a penalty of –20 % to his WS until he spends a half action to wipe it away.Each turn after that there is a 30 % risk more blood will flow down, repeat - ing the modifier, possibly occurring again and again until he can take two whole turns to bandage the wound.',
        "The flat of your weapon lands a solid blow to the side of your opponent's head, stunning him.At the start of each of his subsequent turns after the next he must take a T test to recover from it, after which he can fight normally.",
        "You nick a major vein in your opponent's neck, causing heavy bleeding.Until he has two full turns of bandaging and a successful Heal test performed on him, he must, after a number of turns equal to his TB characteristic, start passing a Routine(+10 %) T test each turn, falling unconscious from loss of blood if he fails.",
        "You slice off a large part of one of your opponent's ears, the pain causing a penalty of –20 % to his WS until the end of his next turn.Unless hiding his injury he will also suffer a penalty of –5 % to his Fel in any situation where good looks are important.",
        "Your weapon slices off your opponent's nose as he bends backward in an attempt to dodge your blow.He counts as stunned until the end of his next turn and will suffer a permanent –10 % modifier to his Fel.However, he will have a + 10 % bonus modifier to Intimidation tests.A prosthetic nose will halve both modifiers.",
        "You cut deep into your opponent's scalp, chipping the skull.He must make an immediate T test or fall unconscious from the blow.If he succeeds he counts as stunned his next two turns and must then make another T test to recover or remain stunned.",
        "Your weapon crashes into the side of your opponent's head, stunning him until the end of his next turn, severing one ear and ruining his hearing on that side.The unsightly scar across that side of his face reduces his Fel by –10 % (but adds + 10 % to any Intimidation tests) and the hearing loss causes a –15 % penalty to all hearing - related Perception tests.",
        'You slice your opponent across the eyes.There is a 50 % risk for each eye that it is destroyed.If neither eye is destroyed you merely nicked his eyelids and the bridge of his nose, causing severe pain and blood in the eyes, but your opponent still counts as helpless until he makes a successful Challenging(-10 %) T test, starting his attempts on his next turn, and even after succeeding he suffers –20 % to his WS, BS and Ag until he has been properly bandaged after the battle.He then needs to keep the bandages on, effectively blinding him, until he has recovered at least one W.If either eye is destroyed your opponent counts as helpless and partly blinded as above but also must reduce any BS or sight - basedPerception test by half, including any bonus from Talents such as Excellent Vision or Sharpshooter.If both eyes are destroyed your opponent is totally blind and helpless.',
        'Your weapon opens a large gash from the forehead to the jaw, cutting across and destroying one eye.He suffers penal - ties as for the loss of one eye as per #11 above but also has his Fel reduced by –20 % due to the horribly disfiguring scar, although he gains a + 10 % bonus to any Intimidation tests.',
        "Your weapon slices through your opponent's lower jaw, causing the loss of several teeth as well as a portion of the tongue.Loss of blood is significant.Your opponent must make an immediate Hard(-20 %) T test or fall unconscious.If he fails he must make another unmodified T test to avoid choking to death on his own blood, unless someone else realizes his predicament with a successful Int or Heal test and rolls him over onto his side to let the blood and gore drain out of his mouth.If conscious he will be stunned for one turn and then suffers a penalty of –20 % to WS and BS due to the pain for the duration of the battle.Scarring will cause penalties as per #12 above.Also he will suffer an additional penalty of –10 % to any tests requiring him to be clearly heard due to speech difficulties from the missing piece of tongue.",
        "Your weapon describes an arc through your opponent's tem - ple, taking off a large chunk of his skull and brain, causing you to be showered by a spray of blood, bone chips and brain matter.No healing in the world will prevent your opponent from expiring in d10 / 2 turns.",
        "Your weapon cleanly severs your opponent's head, causing it to fly d10 - 5 yards in a random direction as twin jets of blood shoot up from the trunk of his neck, the mouth of the head working in a futile attempt to scream as it arcs through the air before death occurs a fraction of a turn later.If the result is zero yards or less, you merely slashed through his throat, giving him a wide new smile, and his head remains attached to his neck, although he'll die almost as quickly.",
    ],
    leg: [
        "The flat of your blade strikes your opponent's shin, forcing him to pass a Challenging(-10 %) WP test or drop his weapon and spend until the end of his next turn hopping on one leg, swearing and grasping his bruised shin, losing one half - action while thus occupied.",
        "Your weapon slashes your opponent's calf.He suffers a penalty of –1 to M and –10% to any Dodge Blow tests until he has healed himself back to Lightly Wounded.",
        "Your weapon strikes your opponent's thigh.He must pass a Challenging(- 10 %) T test or be knocked to the ground.",
        "Your weapon bites deeply into the large muscles on your opponent's thigh.He must pass a Hard(-20 %) T test or be knocked to the ground.He suffers a penalty of –2 to M and –20 % to any Dodge Blow tests until he has healed himself back to Lightly Wounded and then halves that penalty until his W characteristic is fully recovered.",
        "Your weapon slices into the inside of your opponent's thigh, narrowly missing the femoral artery.The gash causes your opponent great pain and he will have to pass a Hard(-20 %) WP test or drop whatever he holds in one hand(his weapon - hand if he is also using a shield, otherwise he can choose which hand) and clutch at the wound, getting to make an - other test each subsequent turn if he fails in order to let go and perform some other action with that arm.",
        "Your weapon chops into your opponent's thigh lengthwise, causing a great gaping wound and lodging in the thighbone.Your opponent falls to the ground.You must spend a half - action dislodging your weapon and your opponent suffers a penalty of - 20 % to all actions until it is dislodged, at which time he must make a WP test to be able to stand up and hob - ble with a M of 1, suffering a penalty of - 10 % to his WS and–30 % to any Dodge Blow tests, due to pain and poor balance.These penalties remain until his W characteristic is fully recovered.",
        "Your weapon severs large muscles at the back of your opponent's thigh.He falls to the ground and suffers a penalty of –2 to his M and –20 % to any Dodge Blow tests.This penalty remains permanently unless someone passes a Challenging(-10 %) Heal test with the Surgery Talent or magical healing is provided before the target has healed himself up to his fullW characteristic at which point the severed ends of the ten - dons and muscles have shrivelled and contracted so much that successful surgery or healing is impossible.",
        "You cleave your opponent's kneecap, destroying it and knocking him to the ground.He must pass a Very Hard(-30 %) WP test or spend the next d10 turns grasping at his knee in utmost agony, counting as helpless.Passing this test reduces that time to d10 / 2. For the duration of the battle he will be at - 10 % to all tests due to severe pain, and he will suffer a penalty of –2 to his M and –20 % to any Dodge Blow tests from now on.Only magical healing can restore the kneecap's function.",
        "Your weapon cuts into your opponent's knee, almost driving clean through the leg, severing large ligaments connecting the bones of the upper and lower leg.Your opponent falls to the ground and can no longer support himself on that leg, forcing him to move with a crutch in the future(reducing M to 1 and counting any Dodge Blow tests as Very Hard, unless he uses two crutches, raising his M to 2 but allowing no use of any weapon in either hand and retaining the Dodge Blow penalty).Only magical healing can restore the knee, and even that will be difficult, requiring a Challenging(-10 %) spell test.",
        "Your weapon severs your opponent's large Achilles tendon at the back of his ankle.He must make an immediate Hard(-20 %) Ag test to avoid falling to the ground.He suffers a penalty of - 20 % to all tests for d10 rounds due to the pain.His M is reduced by –2 and any Dodge Blow tests will count as Hard (-20 %).Magical healing as for #9 above is required to restore full function, although a Hard(-20 %) Heal test with the Surgery Talent can also be used, halving the permanent penalties due to a weakened but functional tendon as a result of some difficult stitching.",
        "Your weapon slices into your opponent's groin, severing large blood vessels.He falls to the ground, helpless from pain and shock for d10 rounds.Afterwards he'll suffer a penalty of - 20 % to all tests for the duration of the battle due to pain and bleeding.In addition, if male, your opponent suffers a 50 % risk of becoming permanently emasculated.",
        "You slice your opponent's foot from the ankle, felling him to the ground and stunning him for d10 turns.Until a successful Heal test or magical healing has stopped the bleeding he suffers a 10 % chance of dying from loss of blood each turn.If he survives he'll need crutches or a prosthetic foot to get around, reducing his M to 2 and counting any Dodge Blow tests as Very Hard(- 30 %).",
        "Your weapon cleanly severs your opponent's leg at the knee, causing him to fall to the ground, helpless, and die from loss of blood in d10 turns unless a Hard(-20 %) Heal test or magical healing stops the bleeding.Movement penalties, if he survives, will be as for #12 above, substituting a peg leg for the prosthetic foot.",
        'Your weapon drives deep into the thigh of your opponent, severing the femoral artery. He falls to the ground, unconscious, and the huge spurting rhythmic sprays of blood will result in his death d10/2 turns later.',
        "Your weapon carves deeply into your opponent's pelvis, severing the leg near the body and driving into the opposite leg.Your opponent is dead from traumatic shock and massive loss of blood before he hits the ground.",
    ],
};
exports["default"] = effects;


/***/ }),

/***/ "./src/lists/crit-hit/flame-energy.ts":
/*!********************************************!*\
  !*** ./src/lists/crit-hit/flame-energy.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var effects = {
    arm: [
        'Flames blister your target’s hand, causing a penalty of –10% to his WS until the end of his next turn.',
        'Flames lick your target’s upper arm, sending a blast of hot air into his face, causing a penalty of –20% to his WS until the end of his next turn.',
        'Flames lick your target’s arm, making any clothes covering it catch fire. Each attempt to put the fire out, waving the arm frantically in the arm, requires a half-action and a successful Challenging (-10%) Ag test, with the target unable to take any other full or half actions until it is out. Lack of clothes, burnable fur or similar equivalent will result in stunning for d10/2 turns instead.',
        'Flames engulf your target’s arm, causing burns serious enough to give him a penalty of –10% to all actions taken with that arm until the end of the battle. Also, his clothes catch fire as per #3 above.',
        'Flames torch your target’s hand, causing him to drop anything held in that hand. It will be useless for the duration of the battle. Afterward, he’ll have to pass an Average T test or suffer a permanent penalty of –10% to all tests requiring fine manipulation performed with that hand due to scarring and contractions.',
        'Flames burn through your target’s clothes, sending blackened shreds sailing into the sky, causing bad enough burns on his arm to warrant stunning for d10/2 turns and a permanent penalty of –10% to all WS, Ag or S tests performed with that arm, unless magical healing is provided within d10 days.',
        'Flames badly burn muscle attachments connecting the shoulder-blade to the muscles of the upper arm. The arm will be useless for the rest of the battle, and, unless magical healing is provided, difficulties lifting the arm properly will cause a permanent penalty of –20% to any WS and S tests made with that arm.',
        'A jet of flame crisps the muscles over your target’s shoulder, making the arm useless until the end of the battle. In addition, the target’s clothes catch fire, forcing him to drop anything held in the other hand to beat at the bright flames. He will not be able to take any half or full actions until they are out, requiring a half-action and a successful Hard (-20%) Ag test. Rolling on the ground works too, reducing the test to Challenging (-10%). Afterward the arm will suffer permanent penalties as per #6 above.',
        'Your target’s whole arm is engulfed in flame, stunning him for d10/2 turns and making the arm useless for the rest of the battle. Pain is rapidly replaced by a numb sensation, due to nerve endings having been charred away. Damage to muscle and tendons, as well as contractions from massive scar tissue forming will result in a permanent penalty of –20% to WS, Ag and S for any tests made with that arm.',
        'White-hot flames turn your target’s fingers into blackened stumps, stunning him for d10 turns. The hand is permanently useless.',
        'Flames charbroil your target’s elbow, fusing muscle and tendons. The arm is useless, and, due to massive loss of skin and other tissue, very susceptible to infection and gangrene. Unless the skin is regenerated within d10 days, requiring magical healing, the arm will have to be amputated.',
        'A jet of fire burns the arm clean off at the elbow, stunning your target for d10 turns and causing a penalty of –20% to all tests for the rest of the battle.',
        'Flames engulf your target’s whole arm, barbecuing all muscle and burning off half his facial hair. The resulting steaming piece of broiled meat causes your target to be helpless with pain for d10 turns. A successful Challenging (-10%) WP test is required to remain conscious. The remains of the arm will have to be amputated.',
        "A ball of flame impacts on your target's shoulder, burning it to the bone and scorching the side of his face. Also, the wave of heat erupts into the side of his torso, boiling one lung. The target falls to the ground, helpless with shock, and expires inevitably within d10/2 turns.",
        "The conflagration hits your target's arm, the ball of fire enveloping him. He falls to the ground, dead as a doorknob, his arm reduced to a shrivelled stump and the entire side of his body charred black.",
    ],
    body: [
        "Flames crinkle the target's body hair, causing a penalty of -10% to his WS until the end of his next turn.",
        "Flames raise blisters on your target's torso, causing a penalty of -20% to his WS until the end of his next turn.",
        "A ball of fire impacts against your target's belly, stunning him until the end of his next turn.",
        "Your target's clothes start smouldering, wisps of smoke and small flames leaping up from them. Your target must drop everything in at least one hand to beat at the flames, requiring a half-action and a successful Average Ag test to put it out, the target unable to take any other half or full actions until then. Lack of clothes, burnable fur or similar equivalent will result in stunning for d10/2 turns instead.",
        "Fire engulfs your target's torso, setting his clothes alight. He'll have to drop to the ground and roll around the beat out the flames, requiring a full action and a Challenging (-10%) Ag test, unable to take any other half or full actions until then. Lack of clothes, burnable fur or similar equivalent will result in stunning for d10 turns instead.",
        "The target's clothes catch fire as per #5 above, but flames also leap up from them, setting fire to his head hair and temporarily blinding him. He counts as helpless until the end of his next turn, and can then attempt to beat out the flames. In addition, blisters and burns will cause a penalty of –10% to all tests until the end of the battle.",
        "Your target's chest is badly burned, scorching the muscles. He'll suffer a penalty of -20% to WS, BS, Ag and S until the end of the battle. Unless magical healing is provided, his S will be permanently reduced by -10% due to irreparably damaged chest musculature.",
        "A jet of flame hits your target in the small of his back, burning the flesh to the bone, exposing vertebra through the scorched flesh. He'll suffer a penalty of -30% to all tests until the end of the battle, and will afterward suffer half that penalty until his W characteristic is fully restored.In addition, due to loss of skin and exposed bone, he'll have to pass a Hard (-20%) T test or suffer infection, killing him from sepsis within d10 days unless a successful Shallyan Cure Disease spell is performed.",
        'Fire engulfs your target, with effects as per #5 above, only needing to pass a Hard (-20%) Ag test and a risk of infection as per #8 above.',
        "A ball of fire impacts against your target's chest. As he gasps for air, he inhales the flames, badly burning his airways and lungs. He counts as helpless for d10/2 turns and must then pass a Hard (-20%) T test or his airways will swell up and suffocate him to death within 2d10 helpless turns. Only magical healing can save him from that, lessening the swelling. If he survives, he'll suffer a permanent penalty of -15% to T and S due to reduced lung capacity, as well as gaining one extra IP from the horrible experience.",
        "A ball of fire impacts against your target's belly, a thin jet of flame burning through the abdominal wall, crisping a part of the small intestine. The target is helpless with agony for d10 turns and will die within 2d10 hours unless magical healing is provided, counting as a Very Hard (-30%) spell test to undo the effects of a cooked gut.",
        "A blast of flame rips across your target's chest, burning away flesh and exposing the ribs beneath. He must pass an immediate Challenging (-10%) WP test to stay conscious. If successful, he'll count as helpless for d10 turns and suffer a penalty of -30% to all tests until his W characteristic is fully restored. Afterward, he'll suffer a permanent reduction of -20% to WS, BS, Ag, S and T, due to massive tissue loss. There is also a risk of infection, as per #8 above. If magical healing is provided, counting as aVery Hard (-30%) spell test, the permanent penalties will be halved.",
        "A jet of flame burns through your target's spine, permanently paralyzing him from the waist down. He counts as helpless from shock for d10 turns and suffers a risk of infection as per #8 above.",
        "A jet of flame burns its way into your target's ribcage, turning his lungs to ash and making fire burst from his mouth. He dies before he hits the ground.",
        "A huge ball of fire impacts against your target's chest, the resulting explosive conflagration engulfing him totally, leaving little but a scorched skull and some broiled limbs lying amidst a couple of blackened ribs.",
    ],
    head: [
        'One of your target’s cheeks is blistered, causing a penalty of –10% to his WS until the end of his next turn.',
        'Your target’s eyebrows and eyelashes are singed, causing a penalty of –20% to his WS until the end of his next turn.',
        'Your target’s hair catches fire, making him count as stunned until the end of his next turn while he frantically slaps at his scalp. In addition, he’ll have to pass an Average WP test for each thing he holds in his hands, to keep holding on to them. Lack of hair will instead lead to stunning for d10/2 turns due to a severely blistered noggin’.',
        'Your target is temporarily blinded in one eye, reducing his BS and WS by –10% for the rest of the battle. If already one-eyed, the chance is fifty-fifty that he’ll either be relatively unaffected, as per as #2 above, or fully blinded, counting as helpless.',
        "One side of your target’s face is badly burned, just missing the eye. He counts as stunned until the end of his next turn and must pass a Hard (-20%) WP test to avoid dropping anything held in at least one hand, clapping it to his sizzling face. The heavy scarring resulting from this damage will permanently reduce his Fel by 2d'",
        'One of your target’s ears is crisped, the surrounding cheek and scalp badly blistered. He must test for dropping his weapons as per #3 and he’ll be stunned until the end of his next turn, requiring another WP test to recover. In addition, after the battle he’ll have to pass a Challenging (-10%) T test or lose hearing on that side, making any hearing-based Perception tests count as Hard (-20%). Also, his Fel will be reduced permanently by –10% due to facial scarring.',
        'Flames scorch your target’s chin and lower jaw. He’ll be stunned for d10 turns and suffer a penalty of –10% to all tests for the rest of the battle, due to having inhaled some of the flames and blistering the insides of his mouth and upper airways. His Fel will be permanently reduced by –10% because of unattractive scarring and problems opening and closing his mouth properly due to damage to muscles connecting to the lower jaw.',
        'A blast of flame fuses your target’s voice box, rendering him permanently mute and stunning him for d10/2 turns. He’ll also suffer a penalty of –20% to all tests for the rest of the battle, due to difficulties breathing through a scorched windpipe. Fel will be permanently reduced by –5%, due to scarring and rasping breath.',
        'A jet of flame burns your target’s scalp to the bone, forcing him to pass a Hard (-20%) T test or pass out from heat-shock to the brain. He’ll suffer a penalty of –20% to all tests for 2d10 turns, due to pain and dizziness. After the battle, the loss of skin results in serious risk of infection. He’ll have to pass an Average T test or suffer an infection that will leave him helpless and delirious for d10 days, whereupon he’ll have to make another test to either recover or die. A Shallyan Cure Disease spell will deal with any infection. Because of the exposed bone and the skin not being able to grow back over it properly, any time the target is exposed to sources of contamination (such as walking through a swamp or sleeping in a dirty barn), the GM might force him to repeat those tests. Magical healing will let the skin grow back, preventing this.',
        'A ball of flame impacts in your target’s face, burning him hideously. He’ll count as helpless for the rest of the battle. Fel will be permanently reduced by –20% and he’ll have to pass an Average T test for each eye to retain sight. One lost eye will result in reduction of BS and any sight-based Perception test by half, including any bonus from Talents such as Excellent Vision or Sharpshooter. Loss of all eyes will mean total blindness. Magical healing will not restore sight but halves the Fel reduction.',
        'A blast of flame sears one whole side of your target’s head. Apply the worst results of #7, #9 and #10 above.',
        'A jet of flame blasts the back of your target’s head, almost boiling his brain. Apply risk of infection as per #9 above, but the target also falls immediately unconscious and will have a brand new Insanity when he wakes up d10/2 days later, due to brain damage.',
        'A white-hot jet of flame tears into the target’s neck, frying the spinal cord. He’ll have to make an immediate Hard (-20%) T test or die within d10/2 turns from brain damage as well, knocking out his respiratory control centre. If he survives he’ll be paralyzed from the neck down. In addition, there is a 50% chance he’ll suffer the results of #8 as well, due to the front of the neck getting a dose of flame as well.',
        'The conflagration engulfs your target’s head, boiling his brain within his skull and reducing any protruding features to blackened stumps. The target is inevitably very much dead within one turn.',
        'A blast of fire reduces your target’s head to a greasy cloud of smoke, leaving only the blackened stump of his neck. The rest of the body drops limply to the ground, its clothes smouldering.',
    ],
    leg: [
        "Flame licks your target's leg, causing a penalty of -10% to his WS until the end of his next turn.",
        "Flame licks your target's leg and hip, causing a penalty of -20% to his Ws until the end of his next turn.",
        "Your target's footwear catches fire, forcing him to put it out with a half-action and a successful Average Ag test, stamping his foot furiously, unable to take any other half or full actions until it is done. If he is not wearing any footwear, his foot is badly blistered, stunning him until the end of his next turn as he howls with pain.",
        "Your target's pants catch fire, forcing him to drop everything in at least one hand and beat at the flames frantically, requiring a half-action and a successful Challenging (-10%) Ag test to put it out. He is unable to take any other half or full actions until the fire has been put out. If he is not wearing pants or similar clothing, his thigh is badly blistered, causing a penalty of -10% to his WS until the end of the battle as skin crackles and blisters pop, causing clear serum to run down his leg.",
        "The back of your target's leg and his buttocks are badly burned, damaging the hamstrings and the tendons at the back of the knee. He is stunned until the end of his next turn and then suffers a penalty of -2 to M and -20% to any Dodge Blow tests until the end of the battle. Unless the burns are magically healed, half that penalty will permanently remain, due to contractions and scarring.",
        'Most of the skin on the front of the leg is burned away, setting fire to any pants as per #4 above. Penalties are similar to #5 above, with an added risk of infection due to the huge loss of skin. The target will have to pass a Hard (-20%) T test or suffer a bad infection with resulting necrosis and gangrene that will require an amputation of the leg within d10 days, unless a successful Shallyan Cure Disease spell is performed.',
        "Flames lick the target's groin, stunning him for d10 turns. Also, if male, he will have to pass a Hard (-20%) T test or be rendered permanently sterile. ",
        "Flames scorch your target's foot, burning away most of the toes and exposing white bone underneath the cracked, blackened and skinless muscles. Risk of infection is as for #6 above, possibly requiring amputation of the foot. The foot will be useless until the target's W characteristic has been fully restored, and he will suffer a permanent penalty of -2 to M and -20% to any Dodge Blow tests, hobbling along on a scarred, stiff and toe-less club of a foot.",
        "A jet of flame blasts your target's knee. He falls to the ground, stunned for d10/2 turns, unable to get up. He’ll suffer a penalty of -20% to all tests for the duration of the battle due to excruciating pain. The leg will be totally useless until the target's W characteristic has been fully restored. Even then he will have a permanent reduction of M to 1 and suffer a penalty of -30% to any Dodge Blow tests, due to a thoroughly stiff joint and insensible nerveless leg. If magical healing is provided, the penalties will be reduced to -2 to M and -20% to Dodge Blow, restoring at least some function.",
        "Flames engulf the entire leg, putting the target's pants on fire and felling him to the ground, both hands beating frantically at the flames as he mewls piteously. Putting the flames out will require a full action and a Hard (-20%) Ag test. Lack of clothes, burnable fur or similar equivalent will result in stunning for d10/2 turns instead. Afterwards, he'll suffer -30% to all tests due to the agony and the leg will be a blistered, scorched mass of flesh with shreds of skin hanging from it, utterly useless until the target's W characteristic has been fully restored. Risk of infection is as per #6 above, while permanent penalties are as per #9 above.",
        "A blast of flame reduces your target's foot to a blackened stump with the sizzling ends of the bones sticking out of it.The target falls to the ground, helpless with pain for d10 turns. The foot is, of course, permanently lost.",
        "A jet of flame eats away most of the soft tissues on your target's calf, leaving the lower leg a thin, black, brittle stick with a foot stuck on one end and a screaming, agonized burn victim on the other. The target falls to the ground, helpless with pain and shock for 2d10 turns, suffering a penalty of -20% to all tests for the rest of the day. The lower leg is irretrievably lost, needing only good strong blow to be broken off.",
        "A ball of flame impacts on the target's leg, blowing it off and cauterizing the stump. The target must make an immediate Hard (-20%) WP test or fall unconscious. If successful, he'll be helpless with pain for 2d10 turns and suffer a penalty of -30% to all tests for the rest of the day.",
        "A jet of flame blasts the target's hip, broiling the joint and cooking parts of his intestines inside his abdomen. He falls unconscious to the ground, dying inevitably within 2d10 turns.",
        "The target's leg is completely blown off at the hip by a blast of flame, the fire eating the flesh away from a large part of his pelvis. Boiling blood ruptures the roasted major arteries, causing an explosion of steaming blood as the target drops to the ground, dying within one turn.Critical Hits - Flame & Energy Damage",
    ],
};
exports["default"] = effects;


/***/ }),

/***/ "./src/lists/crit-hit/index.ts":
/*!*************************************!*\
  !*** ./src/lists/crit-hit/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.crit = exports.severity = exports.attackTypes = exports.bodyParts = exports.types = exports.typeMap = void 0;
var arrow_bolt_1 = __webpack_require__(/*! ./arrow-bolt */ "./src/lists/crit-hit/arrow-bolt.ts");
var blunt_1 = __webpack_require__(/*! ./blunt */ "./src/lists/crit-hit/blunt.ts");
var bullet_1 = __webpack_require__(/*! ./bullet */ "./src/lists/crit-hit/bullet.ts");
var cutting_1 = __webpack_require__(/*! ./cutting */ "./src/lists/crit-hit/cutting.ts");
var flame_energy_1 = __webpack_require__(/*! ./flame-energy */ "./src/lists/crit-hit/flame-energy.ts");
var piercing_1 = __webpack_require__(/*! ./piercing */ "./src/lists/crit-hit/piercing.ts");
exports.typeMap = {
    'arrow-bolt': arrow_bolt_1["default"],
    blunt: blunt_1["default"],
    bullet: bullet_1["default"],
    cutting: cutting_1["default"],
    'flame-energy': flame_energy_1["default"],
    piercing: piercing_1["default"],
};
function types() {
    return Object.keys(exports.typeMap);
}
exports.types = types;
exports.bodyParts = Object.keys(arrow_bolt_1["default"]);
exports.attackTypes = Object.keys(exports.typeMap);
function clamp(value, max, min) {
    return Math.max(Math.min(Math.round(value), max), min);
}
function li(val, min, max, newMin, newMax) {
    var mag = max - min;
    var newMag = newMax - newMin;
    return (newMag / mag) * (val - min) + newMin;
}
function severity(maxHP, currentHP, d100) {
    var val = Math.pow(14, (1 - currentHP / maxHP)) +
        Math.pow(li(maxHP, 20, 500, 12, 1), (clamp(d100, 100, 0) / 100)) -
        2;
    return clamp(Math.round(val), 14, 0);
}
exports.severity = severity;
function crit(attackType, bodyPart, sev) {
    if (exports.typeMap[attackType] === undefined) {
        throw new Error("invalid attack type " + attackType);
    }
    if (exports.typeMap[attackType][bodyPart] === undefined) {
        throw new Error("invalid body part " + bodyPart);
    }
    return exports.typeMap[attackType][bodyPart][sev];
}
exports.crit = crit;


/***/ }),

/***/ "./src/lists/crit-hit/piercing.ts":
/*!****************************************!*\
  !*** ./src/lists/crit-hit/piercing.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var effects = {
    arm: [
        "Your weapon's tip slashes across the back of your opponent's hand, causing him to flinch and lose one attack or free parry (depending on which hand was hit).",
        "Your weapon pricks your opponent's biceps muscle, causing him to suffer a penalty of -10% to his WS until the end of his next turn.",
        "Your weapon's tip slashes across your opponent's forearm, slitting the skin open in a wide gash and causing him to suffer a penalty of -20% to his WS until the end of his next turn.",
        "Your weapon stabs into your opponent's shoulder, driving into the large deltoid muscle, forcing him to make a Hard (-20%) T test or drop whatever he is holding in that hand. Also, for the duration of the battle, he will suffer a penalty of -10% to any WS tests made with that arm, as well as a penalty of -1 to his SB due to not being able to put his full strength behind any blow with that arm.",
        "Your weapon impales your opponent's hand through the palm, driving in between the bones between the wrist and fingers, but not severing any major tendons, blood vessels or nerves. Your opponent drops anything held in that hand and will suffer a penalty of -20% to all tests until your weapon is withdrawn from his hand, which requires a half-action either by you, to pull it out, or him, to yank his handoff the blade. Letting go of the weapon counts as having withdrawn it. If he does it himself he’ll have to first pass a successful Challenging (-10%) WP test.",
        "Your weapon deeply pierces your opponent's upper arm, opening a gaping wound. He must make a Hard (-20%) T test to avoid dropping anything he is holding in that hand and suffers a penalty of -20% to WS and -2 to SB for any attacks or parries made with that arm for the duration of the battle.",
        "Your weapon impales your opponent's forearm, lodging between the radius and ulna, the long bones of the forearm, lacerating the muscles controlling several fingers as you yank it out in preparation for your next blow. Anything held in that hand is dropped and your opponent is stunned until he can pass a Challenging (-10%) T test. Also, he cannot use his arm until his W characteristic is fully restored, afterward suffering a penalty of -10% to any WS tests as well as any tests requiring fine manipulation made with that hand due to not being able to flex his fingers properly. Successful magical healing removes this penalty. Alternatively, a successful Hard (-20%) Heal test with the Surgery Talent will manage to stitch back enough of the muscles and tendons to halve that penalty.",
        "Your weapon drives into the soft tissues at the inside of your opponent's elbow, severing the major blood vessels. Anything held in that hand is dropped as blood gushes forth, forcing your opponent to grab his elbow with the opposite hand in an attempt to arrest the flow of blood. He counts as stunned until the end of his next turn and must then choose whether to let go and continue fighting with the other hand, suffering a 5% risk of fainting from loss of blood each turn, or to hold on and be able to do nothing else except turn and flee from you. A successful Heal test will stop the bleeding, although your opponent will count the test as Hard (-20%) if attempting to tie the tourniquet himself with the remaining hand and his teeth, requiring two full actions. The arm will remain useless until his W characteristic is fully recovered.",
        "Your weapon pierces your opponent's forearm, driving in between the radius and the ulna, the long bones of the forearm, snapping the radius and chipping the ulna as you savagely twist your weapon when withdrawing it. He drops anything held in that hand and will have to pass a Hard (-20%) WP test or count as helpless for d10/2 turns. Success means he'll count as stunned instead. The arm will be useless until the bones have knit after three weeks. Also, due to damaged nerves and tendons, he’ll suffer a permanent penalty of -20% to any WS tests as well as any tests requiring fine manipulation made with that hand due to not being able to use his hand properly. Successful magical healing removes this penalty. Alternatively, a successful Hard (-20%) Heal test with the Surgery Talent will manage to stitch back enough of the muscles and tendons to halve that penalty.",
        "The point of your weapon enters your opponent's upper arm near the elbow, scraping along the bone as it tears upward toward the shoulder, badly slicing the large muscles and opening up a long, gaping wound. Your opponent screams with pain and horror at the sight of white bone winking at him through the blood, counting as helpless until the end of his next round, then having to pass a Challenging (-10%) WP test or turn and flee from your dripping, gory blade. His arm will remain useless until his W characteristic is fully restored.",
        "Your weapon drives deep into your opponent's shoulder joint, damaging the nerves and paralyzing the arm. He'll count as stunned for d10/2 turns and then suffers a penalty of -20% to all tests for the remainder of the battle. Afterward he'll have to pass a Hard (-20%) T test to gradually regain use of his arm after six months. Magical healing will help but count as Hard (-20%) spell test, restoring function in two months. In addition your opponent will have to pass a Challenging (-10%) T test after 24 hours or suffer a bad infection from such a deep wound to a major joint, forcing amputation or death within 10 days. A successful Shallyan Cure Disease spell will cure the infection.",
        "Your weapon tears through your opponent's elbow joint, cutting nerves, blood vessels and ligaments. He counts as helpless for d10/2 turns as his lower arm dangles by a few scraps of skin and muscle, gushing blood. He'll also have to pass a T test each turn of faint until a successful Challenging (-10%) Heal test has been performed on him by someone else, stopping the bleeding with a tourniquet. Until he faints or the flow of blood has stopped he'll count as stunned, all will to fight having been taken out of him by the sight of his own mangled limb. The arm will have to be amputated.",
        "Your weapon drives into your opponent's shoulder, just below the collarbone, piercing the top of his lung, causing it to rapidly collapse. He'll suffer a cumulative penalty of -10% to his WS, BS, Ag and S each turn, fainting when any of those characteristics reaches zero, dying in another d10 turns unless magical healing is obtained. If he survives he’ll regain his characteristics at a rate of 10% per week as his lung slowly inflates itself.",
        "Your weapon slams into your opponent's shoulder from the side, penetrating into his chest cavity, piercing and almost splitting the lung. Your opponent coughs up blood and slides off your blade, dying inevitably in d10/2 turns.",
        "Your weapon enters your opponent's armpit, slamming deep into his chest and piercing his heart. He expires immediately, although you'll have to take a half-action and make a successful Easy (+20%) S test on your next turn to extract your weapon from his limp corpse.",
    ],
    body: [
        'The point of your weapon scores a line across your opponent’s chest, causing him to stumble backward. He may not perform any attack action on his next turn.',
        'Your weapon punches into your opponent’s chest, sinking in a fraction of an inch, not managing to penetrate his chest wall into the lung but earning your opponent a penalty of –10% to his WS until the end of his next turn.',
        'Your weapon punches into your opponent’s belly, not quite managing to penetrate into his abdominal cavity but causing a painful wound and knocking his breath out, forcing your opponent to make a Hard (-20%) T test or be stunned until the end of his next turn. He must then pass a second Challenging (-10%) WP test or suffer a penalty of –10% to any Dodge Blow tests for the rest of the battle due to the ducking and weaving straining belly muscles that pull painfully at the wound.',
        'Your weapon digs into a shoulder and nicks your opponent’s collarbone, forcing him to pass a Very Hard (-30%) WP test or drop his weapon.',
        'Your weapon punches into your opponent’s belly, only slashing skin and fatty tissue but catching on his clothes or armour, forcing him off balance, able only to use any extra free parry he has, at a penalty of –20% to his WS, until his next turn as he waves his arms to maintain balance. If he is wearing neither clothes nor armour, he will be at a penalty of –30% to his WS next turn due to having his bellybutton suddenly widened by a large red slash.',
        'Your weapon drives into your opponent’s left side, driving upward and penetrating through the flesh and muscle into his abdominal cavity, nicking his gallbladder. The results as for Cutting Damage to Body #7.',
        'Your weapon tears a wide red trench across your opponent’s hip, leaving gleaming white bone visible. Your opponent is knocked to the ground, counting as stunned until the end of his next turn. He must pass a Challenging (-10%) WP test before attempting to get up and must then pass additional tests each turn he wants to move at a rate faster than a slow walk, due to the pain of torn muscles. The effect lasts until his W characteristic is fully restored.',
        'Your weapon drives into your opponent’s groin. If male, he screams like a girl and counts as helpless for d10/2 rounds, having to pass a Hard (-20%) T test or be rendered permanently sterile. A female counts as stunned instead.',
        'Your weapon punches deeply into your opponent’s belly, between bellybutton and scrotum, puncturing the bladder with results as for Cutting Damage to Body #9.',
        'Your weapon pierces your opponent’s chest, puncturing and collapsing one lung. Luckily for him the wound closes quickly and tightly, preventing a much deadlier tension pneumothorax that would leak air into his chest like a one-way valve until the lungs could no longer inflate and the heart no longer beat due to the pressure. His WS, BS, Ag, S and M will be halved as he gasps for breath. The effects last until the air in the pleural sack has drained spontaneously in d10/2 weeks. Magical healing will speed this process into mere days instead of weeks. However, your opponent will also have to pass a Challenging (-10%)T test or contract pneumonia within d10 days, then having to make a second test or die within another d10 days, otherwise being bedridden and delirious for the same amount of time. A successful Shallyan Cure Disease spell will cure it as well.',
        'The tip of your weapon slams into your opponent’s chest, penetrating between the ribs before being withdrawn in a brief spray of blood. Unknown to your opponent, the blade has nicked his heart, each beat pumping as much blood into his chest cavity as into his arteries. He’ll suffer a cumulative penalty of –10% to WS, BS, Ag and S each turn, collapsing and dying when any of those characteristics reaches zero. Only very fast magical healing can close the wound to the heart in time to save his life, regaining his lost characteristics at a rate of 10% per week as his body replenishes the massive amount of blood lost.',
        'You slice open your opponent’s belly, cruelly twisting the blade in the wound before withdrawing it, spilling red ruin at his feet. The effects are as for Cutting Damage to Body #12.',
        'You ram your weapon into your opponent’s solar plexus, rupturing the diaphragm muscles he breathes with and damaging the abdominal aorta. It is an even bet as to whether he expires from breathing difficulties or massive loss of blood first, dying inevitably in a widening pool of blood in d10/2 turns. A last-ditch desperate attempt at magical healing may be performed before then, at a penalty of –30% to the spell test, success leaving him unconscious but alive with a permanent penalty of –20% to S and T due to reduced breathing capacity.',
        'The point of your weapon punches up underneath the lower ribs, lacerating your opponent’s heart. He can only stare at you in shock as he crumbles to the ground, dying inevitably in one turn.',
        'Your weapon splits your opponent’s sternum and drives on into his spine, killing him instantly. You must spend a half-action to withdraw your imbedded weapon.',
    ],
    head: [
        'The point of your weapon splits the very tip of your opponent’s nose, making him so mad he suffers a penalty of –10% to his WS until the end of his next turn.',
        'Your weapon scores a thin red line across your opponent’s chin, parting any beard he may have. This is so upsetting to him he may not take any attack actions until the end of his next turn.',
        'Your thrust glances along your opponent’s jaw and clips his ear, cutting away any earring he might wear. He suffers a penalty of –20% to his WS until the end of his next turn.',
        'Your weapon glances over your opponent’s scalp, catching on and flicking away any helmet or hat he might wear. A chain coif sits too tightly to be removed so easily. A leather cap is only removed if it is the only armour worn on the head. Reduce AP on the head as appropriate. In addition, your opponent suffers a penalty of –20% to his WS until the end of his next turn due to pain and the sudden flow of blood into his face.',
        'The tip of your weapon slams into your opponent’s forehead as he ducks to avoid having an eye taken out. He is stunned until the end of his next turn and must pass a T test before he can recover. In addition, blood will get into his eyes as for Cutting Damage to Head #4.',
        'Your weapon slices into the muscles on the side of your opponent’s neck, barely missing any large blood vessels. He now has problems holding his head up and turning it quickly, suffering a penalty of  –20% to all dodges and parries for the duration of the battle. In addition, the recurrent laryngeal nerve controlling his vocal cords was damaged, causing him to speak hoarsely from now on, reducing Fel by –5% for any tests requiring smooth talking.',
        'Your weapon slams into the side of your opponent’s face close to the angle of the lower jaw, splitting and fracturing it near the hinge of the mouth, causing him to be stunned for d10/2 turns, after which he can do like a true Viking and stuff his beard into his mouth, biting down on it to keep his jaw in place. A lack of beard or Viking ancestry results in only a lack of bragging rights, however. Until the jaw has healed in d10/2 weeks he’ll have to bind it tightly, severely reducing his ability to either brag or eat solid food until then.',
        'Your weapon pierces the cartilage of your opponent’s larynx at the upper part of the windpipe, making air whistle out of the hole as he breathes or talks. He must pass a Hard (-20%) WP test or drop everything and grasp at his throat as he gasps and sputters helplessly for d10/2 turns. If he succeeds he’ll only count as stunned until the end of his next turn and doesn’t drop anything. Either way he’ll then suffer a penalty of –10% to his WS for the duration of the battle due to the trickles of blood trying to run down his airways, causing him to cough up blood constantly.',
        'You stab into your opponent’s face, crumbling the cheekbone and piercing the sinus behind it, opening up his face gruesomely. Your opponent is stunned for d10 turns. In addition he’ll have to pass a Challenging (-10%) T test after 24 hours or contract an infection, which will leave him delirious and raving for d10 days, dying unless he can pass a second test. A successful Shallyan Cure Disease spell will save him. If he survives his Fel will be reduced by –5% due to ugly facial scarring.',
        'You jam your weapon into your opponent’s ear, destroying his hearing on that side and causing a penalty of –15% to all hearing-related Perception tests. He counts as helpless for d10 turns, dropping everything to clap his hands to his ear. Due to the blade cracking the base of the skull there is also a risk of infection as per #9 above.',
        'You pierce one of your opponent’s eyes. He counts as helpless with pain until he can pass a Hard (-20%) T test, making his first test the turn after his next. After that he’ll suffer a penalty of –20% to his WS, BS and Ag for the duration of the battle. Also, he must permanently reduce any BS or sight-based Perception test by half, including any bonus from Talents such as Excellent Vision or Sharpshooter.',
        'Your weapon slams into your opponent’s cheek, piercing the sinus and ripping into the bony orbit around one eye, destroying it and causing risk of infection as for #9 above. Stunning and effects for the lost eye are as for #11 above, but also reducing Fel by 10% due to major scarring visibleeven with a large patch for the eye.',
        'Your weapon pierces your opponent’s throat, severing a carotid artery in a great fan of blood as you rip your weapon loose. Your opponent can only grasp helplessly at his spurting neck as he falls unconscious, dying inevitably in two turns.',
        'Your weapon goes in through your opponent’s mouth, shattering teeth, severing the tongue and finally exiting through the back of his neck. He falls to the ground, dying with a horrible gurgling noise as his final breath escapes through the gore filling his mouth. You’ll need to take a half-action and pass an Easy (+20%) S test to extricate your weapon from his spinal column.',
        'Your weapon enters through the bridge of his nose, spitting his head like an apple. He is dead before he hits the ground, although his arms and legs will continue twitching randomly for another couple of turns.',
    ],
    leg: [
        'The tip of your weapon cuts your opponent’s shin, the paincausing a penalty of –10% to his WS until the end of his next turn.',
        'You prick the large ligament above your opponent’s kneecap. He suffers a penalty of -1 to his M and –10% to any Dodge Blow tests until his Wound level is back to Lightly Wounded.',
        'Your weapon pierces two inches into the meat of your opponent’s thigh, reducing his WS by a penalty of –20% until the end of his next turn due to the agony, also causingpenalties for movement and dodging as for #2 above.',
        'Your weapon pierces your opponent’s calf, lacerating the muscle, forcing him to pass an immediate Routine (+10%)Ag test to avoid falling down, also reducing his M by half and any Dodge Blow tests by –10% for the duration of the battle as his boot starts filling up with blood. After it has been tightly bandaged the M penalty is reduced to -1 until his W characteristic has been fully restored.',
        'Your weapon pierces your opponent’s foot, sliding between the metatarsal bones between the ankle and the toes without causing any fractures. Your opponent falls to the ground, stunned until the end of his next turn. He then suffers M penalties as for #4 above.',
        'Your weapon hits your opponent in the groin, causing dramatic bleeding and considerable pain. He falls to the ground, counting as stunned until the end of his next turn. The next turn after that he can start attempting to pass an Average T test or remain stunned, whimpering softly. He may make another test each turn until he succeeds.',
        'Your opponent’s calf is sliced open to the bone, causing a huge gaping wound and an undignified fall to the ground, as well as loss of consciousness in 2d10 turns unless someone spends one full action and a successful Heal test to staunch the heavy bleeding.',
        'Your weapon penetrates deeply into your opponent’s thigh,severing a large nerve, effectively paralysing most of the leg, dropping your opponent to the ground as he tries to support himself on his suddenly numb leg. Only a successful Challenging (-10%) magical healing test will restore function if performed within d10 days before atrophy of the severed nerve has set in. Otherwise the leg will be permanently useless. For use of crutches, see the Blunt Damage to Leg table.',
        'Your weapon slams into your opponent’s knee, splitting the kneecap and severing some of the ligaments connecting the bones of the upper and lower leg. Your opponent falls to the ground, helpless until the end of his next turn, remaining stunned until he passes a Challenging(-10%) WP test. The leg is totally useless until the end of the battle. Afterward, his M is halved and all Dodge Blow tests are counted as Very Hard (-30%) from now on, due topoor balance on a badly unstable knee. Only magical healing can restore full function, if done within d10 days. Even so it will count as a Hard (-20%) spell test.',
        'Your weapon tears into the inside of your opponent’s thigh, severing a large vein and causing heavy bleeding. He will have to pass a Challenging (-10%) WP test or be stunned for d10/2 turns. After a number of turns equal to his TB he’ll suffer a cumulative penalty of –5% to WS, BS, Ag and S each turn. When any of those characteristics reaches zero he falls unconscious. If he passes a T test the wound will clot before he has bled out, preventing him from expiring in another 2d10 turns.',
        'Your weapon spears cleanly through your opponent’s calf, chipping the shinbone and fracturing the fibula, the outer of the two long bones in the lower leg, almost severing theleg. Blood vessels and nerves are heavily damaged, numbing the foot. Your opponent falls to the ground and ishelpless with pain for d10/2 turns, then having to pass a Challenging (-10%) test to stay conscious despite the loss of blood. He’ll be unable to get up and the lower leg will be permanently paralysed and useless unless magical healing is provided within d10 days as for #8 above.',
        'Your weapon tears into the back of your opponent’s knee, severing an artery as well as tendons and nerves. Your opponent will have to pass a Hard (-20%) WP test or pass out. The leg will have to be amputated or gangrene will ensue in the nearly bloodless leg within d10/2 days, causing death in another d10 days. Successful magical healing will save his life but not restore function to the leg.',
        'The point of your weapon lodges in the thighbone, cracking it as you wrench your weapon loose. Roll 1d',
        'On 1-5 a fatty marrow embolus dislodges and travels through your opponent’s bloodstream to his lungs where itbecomes stuck on his next turn, causing a fatal pulmonary embolism, a massive clot in the lungs. On 6-10 the thighbone shatters, the jagged end of it ripping apart his femoral artery as he falls to the ground, causing blood to fountain from the wound. Regardless of the result your opponent falls immediately unconscious and dies inevitably within d10/2 turns.',
        'You drive your weapon through your opponent’s thigh, thepoint coming out the other side before you savagely twist the blade as you withdraw it. Blood spurts in rhythmic jetsfrom the severed artery. Unconsciousness is almost immediate and death will follow in d10/2 rounds unless magical healing is provided before that.',
        'Your weapon drives deeply into your opponent’s hip, severing major blood vessels and nerves deep within the pelvis. He falls unconscious almost immediately, dying inevitably d10/2 turns later in a huge pool of blood. You have to spend a half-action withdrawing your stuck weapon from his twitching body.',
    ],
};
exports["default"] = effects;


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
exports.generate = exports.randomFromList = exports.totalWeight = void 0;
__exportStar(__webpack_require__(/*! ./races */ "./src/lists/races.ts"), exports);
__exportStar(__webpack_require__(/*! ./gods */ "./src/lists/gods.ts"), exports);
__exportStar(__webpack_require__(/*! ./alignments */ "./src/lists/alignments.ts"), exports);
__exportStar(__webpack_require__(/*! ./wtf-character */ "./src/lists/wtf-character.ts"), exports);
function applyWeights(arr) {
    return arr.map(function (e) {
        if (typeof e === 'string') {
            return [1, e];
        }
        return e;
    });
}
function totalWeight(arr) {
    return applyWeights(arr).reduce(function (total, _a) {
        var current = _a[0];
        return total + current;
    }, 0);
}
exports.totalWeight = totalWeight;
function randomFromList(arr, roll) {
    if (arr.length === 0) {
        return '';
    }
    var weightedArr = applyWeights(arr);
    var acc = 0;
    var accumulatedArr = weightedArr.map(function (_a) {
        var weight = _a[0], e = _a[1];
        return [(acc = weight + acc), e];
    });
    var rand = roll !== null && roll !== void 0 ? roll : Math.random() * totalWeight(arr);
    var result = accumulatedArr[accumulatedArr.filter(function (_a) {
        var weight = _a[0];
        return weight <= rand;
    }).length];
    if (result === undefined) {
        return '';
    }
    return result[1];
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