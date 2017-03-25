//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;
var Template = Package.templating.Template;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare, ShareJSConnector;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/mizzao_sharejs/.npm/package/node_modules/share/node_modules/browserchannel/dist/bcsocket-uncompressed.js //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
(function(){                                                                                                         // 1
var f, aa = aa || {}, l = this;                                                                                      // 2
function ba(a) {                                                                                                     // 3
  a = a.split(".");                                                                                                  // 4
  for (var b = l, c;c = a.shift();) {                                                                                // 5
    if (null != b[c]) {                                                                                              // 6
      b = b[c];                                                                                                      // 7
    } else {                                                                                                         // 8
      return null;                                                                                                   // 9
    }                                                                                                                // 10
  }                                                                                                                  // 11
  return b;                                                                                                          // 12
}                                                                                                                    // 13
function ca() {                                                                                                      // 14
}                                                                                                                    // 15
function da(a) {                                                                                                     // 16
  var b = typeof a;                                                                                                  // 17
  if ("object" == b) {                                                                                               // 18
    if (a) {                                                                                                         // 19
      if (a instanceof Array) {                                                                                      // 20
        return "array";                                                                                              // 21
      }                                                                                                              // 22
      if (a instanceof Object) {                                                                                     // 23
        return b;                                                                                                    // 24
      }                                                                                                              // 25
      var c = Object.prototype.toString.call(a);                                                                     // 26
      if ("[object Window]" == c) {                                                                                  // 27
        return "object";                                                                                             // 28
      }                                                                                                              // 29
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";                                                                                              // 31
      }                                                                                                              // 32
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";                                                                                           // 34
      }                                                                                                              // 35
    } else {                                                                                                         // 36
      return "null";                                                                                                 // 37
    }                                                                                                                // 38
  } else {                                                                                                           // 39
    if ("function" == b && "undefined" == typeof a.call) {                                                           // 40
      return "object";                                                                                               // 41
    }                                                                                                                // 42
  }                                                                                                                  // 43
  return b;                                                                                                          // 44
}                                                                                                                    // 45
function m(a) {                                                                                                      // 46
  return "array" == da(a);                                                                                           // 47
}                                                                                                                    // 48
function ea(a) {                                                                                                     // 49
  var b = da(a);                                                                                                     // 50
  return "array" == b || "object" == b && "number" == typeof a.length;                                               // 51
}                                                                                                                    // 52
function n(a) {                                                                                                      // 53
  return "string" == typeof a;                                                                                       // 54
}                                                                                                                    // 55
function fa(a) {                                                                                                     // 56
  return "function" == da(a);                                                                                        // 57
}                                                                                                                    // 58
var ga = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0;                                                       // 59
function ia(a, b, c) {                                                                                               // 60
  return a.call.apply(a.bind, arguments);                                                                            // 61
}                                                                                                                    // 62
function ja(a, b, c) {                                                                                               // 63
  if (!a) {                                                                                                          // 64
    throw Error();                                                                                                   // 65
  }                                                                                                                  // 66
  if (2 < arguments.length) {                                                                                        // 67
    var d = Array.prototype.slice.call(arguments, 2);                                                                // 68
    return function() {                                                                                              // 69
      var c = Array.prototype.slice.call(arguments);                                                                 // 70
      Array.prototype.unshift.apply(c, d);                                                                           // 71
      return a.apply(b, c);                                                                                          // 72
    };                                                                                                               // 73
  }                                                                                                                  // 74
  return function() {                                                                                                // 75
    return a.apply(b, arguments);                                                                                    // 76
  };                                                                                                                 // 77
}                                                                                                                    // 78
function p(a, b, c) {                                                                                                // 79
  p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;          // 80
  return p.apply(null, arguments);                                                                                   // 81
}                                                                                                                    // 82
var q = Date.now || function() {                                                                                     // 83
  return+new Date;                                                                                                   // 84
};                                                                                                                   // 85
function s(a, b) {                                                                                                   // 86
  function c() {                                                                                                     // 87
  }                                                                                                                  // 88
  c.prototype = b.prototype;                                                                                         // 89
  a.oa = b.prototype;                                                                                                // 90
  a.prototype = new c;                                                                                               // 91
  a.ic = function(a, c, g) {                                                                                         // 92
    var h = Array.prototype.slice.call(arguments, 2);                                                                // 93
    b.prototype[c].apply(a, h);                                                                                      // 94
  };                                                                                                                 // 95
}                                                                                                                    // 96
;function ka(a, b) {                                                                                                 // 97
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1);e.length && 1 < c.length;) {      // 98
    d += c.shift() + e.shift();                                                                                      // 99
  }                                                                                                                  // 100
  return d + c.join("%s");                                                                                           // 101
}                                                                                                                    // 102
function la(a) {                                                                                                     // 103
  if (!ma.test(a)) {                                                                                                 // 104
    return a;                                                                                                        // 105
  }                                                                                                                  // 106
  -1 != a.indexOf("&") && (a = a.replace(na, "&amp;"));                                                              // 107
  -1 != a.indexOf("<") && (a = a.replace(oa, "&lt;"));                                                               // 108
  -1 != a.indexOf(">") && (a = a.replace(pa, "&gt;"));                                                               // 109
  -1 != a.indexOf('"') && (a = a.replace(qa, "&quot;"));                                                             // 110
  -1 != a.indexOf("'") && (a = a.replace(ra, "&#39;"));                                                              // 111
  return a;                                                                                                          // 112
}                                                                                                                    // 113
var na = /&/g, oa = /</g, pa = />/g, qa = /"/g, ra = /'/g, ma = /[&<>"']/;                                           // 114
function sa() {                                                                                                      // 115
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36);
}                                                                                                                    // 117
function ta(a, b) {                                                                                                  // 118
  return a < b ? -1 : a > b ? 1 : 0;                                                                                 // 119
}                                                                                                                    // 120
;var x, ua, va, wa;                                                                                                  // 121
function xa() {                                                                                                      // 122
  return l.navigator ? l.navigator.userAgent : null;                                                                 // 123
}                                                                                                                    // 124
wa = va = ua = x = !1;                                                                                               // 125
var ya;                                                                                                              // 126
if (ya = xa()) {                                                                                                     // 127
  var za = l.navigator;                                                                                              // 128
  x = 0 == ya.lastIndexOf("Opera", 0);                                                                               // 129
  ua = !x && (-1 != ya.indexOf("MSIE") || -1 != ya.indexOf("Trident"));                                              // 130
  va = !x && -1 != ya.indexOf("WebKit");                                                                             // 131
  wa = !x && !va && !ua && "Gecko" == za.product;                                                                    // 132
}                                                                                                                    // 133
var Aa = x, y = ua, Ba = wa, z = va;                                                                                 // 134
function Ca() {                                                                                                      // 135
  var a = l.document;                                                                                                // 136
  return a ? a.documentMode : void 0;                                                                                // 137
}                                                                                                                    // 138
var Da;                                                                                                              // 139
a: {                                                                                                                 // 140
  var Ea = "", Fa;                                                                                                   // 141
  if (Aa && l.opera) {                                                                                               // 142
    var Ga = l.opera.version, Ea = "function" == typeof Ga ? Ga() : Ga                                               // 143
  } else {                                                                                                           // 144
    if (Ba ? Fa = /rv\:([^\);]+)(\)|;)/ : y ? Fa = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : z && (Fa = /WebKit\/(\S+)/), Fa) {
      var Ha = Fa.exec(xa()), Ea = Ha ? Ha[1] : ""                                                                   // 146
    }                                                                                                                // 147
  }                                                                                                                  // 148
  if (y) {                                                                                                           // 149
    var Ja = Ca();                                                                                                   // 150
    if (Ja > parseFloat(Ea)) {                                                                                       // 151
      Da = String(Ja);                                                                                               // 152
      break a;                                                                                                       // 153
    }                                                                                                                // 154
  }                                                                                                                  // 155
  Da = Ea;                                                                                                           // 156
}                                                                                                                    // 157
var Ka = {};                                                                                                         // 158
function A(a) {                                                                                                      // 159
  var b;                                                                                                             // 160
  if (!(b = Ka[a])) {                                                                                                // 161
    b = 0;                                                                                                           // 162
    for (var c = String(Da).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var h = c[g] || "", k = d[g] || "", u = RegExp("(\\d*)(\\D*)", "g"), K = RegExp("(\\d*)(\\D*)", "g");          // 164
      do {                                                                                                           // 165
        var v = u.exec(h) || ["", "", ""], r = K.exec(k) || ["", "", ""];                                            // 166
        if (0 == v[0].length && 0 == r[0].length) {                                                                  // 167
          break;                                                                                                     // 168
        }                                                                                                            // 169
        b = ta(0 == v[1].length ? 0 : parseInt(v[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || ta(0 == v[2].length, 0 == r[2].length) || ta(v[2], r[2]);
      } while (0 == b);                                                                                              // 171
    }                                                                                                                // 172
    b = Ka[a] = 0 <= b;                                                                                              // 173
  }                                                                                                                  // 174
  return b;                                                                                                          // 175
}                                                                                                                    // 176
var La = l.document, Ma = La && y ? Ca() || ("CSS1Compat" == La.compatMode ? parseInt(Da, 10) : 5) : void 0;         // 177
function Na(a) {                                                                                                     // 178
  if (Error.captureStackTrace) {                                                                                     // 179
    Error.captureStackTrace(this, Na);                                                                               // 180
  } else {                                                                                                           // 181
    var b = Error().stack;                                                                                           // 182
    b && (this.stack = b);                                                                                           // 183
  }                                                                                                                  // 184
  a && (this.message = String(a));                                                                                   // 185
}                                                                                                                    // 186
s(Na, Error);                                                                                                        // 187
Na.prototype.name = "CustomError";                                                                                   // 188
function Oa(a, b) {                                                                                                  // 189
  b.unshift(a);                                                                                                      // 190
  Na.call(this, ka.apply(null, b));                                                                                  // 191
  b.shift();                                                                                                         // 192
}                                                                                                                    // 193
s(Oa, Na);                                                                                                           // 194
Oa.prototype.name = "AssertionError";                                                                                // 195
function Pa(a, b) {                                                                                                  // 196
  throw new Oa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));                           // 197
}                                                                                                                    // 198
;var Qa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ra(a) {                                                                                                     // 200
  if (Sa) {                                                                                                          // 201
    Sa = !1;                                                                                                         // 202
    var b = l.location;                                                                                              // 203
    if (b) {                                                                                                         // 204
      var c = b.href;                                                                                                // 205
      if (c && (c = (c = Ra(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) {                           // 206
        throw Sa = !0, Error();                                                                                      // 207
      }                                                                                                              // 208
    }                                                                                                                // 209
  }                                                                                                                  // 210
  return a.match(Qa);                                                                                                // 211
}                                                                                                                    // 212
var Sa = z;                                                                                                          // 213
function Ta(a) {                                                                                                     // 214
  var b = [], c = 0, d;                                                                                              // 215
  for (d in a) {                                                                                                     // 216
    b[c++] = a[d];                                                                                                   // 217
  }                                                                                                                  // 218
  return b;                                                                                                          // 219
}                                                                                                                    // 220
function Ua(a) {                                                                                                     // 221
  var b = [], c = 0, d;                                                                                              // 222
  for (d in a) {                                                                                                     // 223
    b[c++] = d;                                                                                                      // 224
  }                                                                                                                  // 225
  return b;                                                                                                          // 226
}                                                                                                                    // 227
var Va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Wa(a, b) {                                                                                                  // 229
  for (var c, d, e = 1;e < arguments.length;e++) {                                                                   // 230
    d = arguments[e];                                                                                                // 231
    for (c in d) {                                                                                                   // 232
      a[c] = d[c];                                                                                                   // 233
    }                                                                                                                // 234
    for (var g = 0;g < Va.length;g++) {                                                                              // 235
      c = Va[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);                                        // 236
    }                                                                                                                // 237
  }                                                                                                                  // 238
}                                                                                                                    // 239
;var B = Array.prototype, Xa = B.indexOf ? function(a, b, c) {                                                       // 240
  return B.indexOf.call(a, b, c);                                                                                    // 241
} : function(a, b, c) {                                                                                              // 242
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;                                                         // 243
  if (n(a)) {                                                                                                        // 244
    return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;                                                             // 245
  }                                                                                                                  // 246
  for (;c < a.length;c++) {                                                                                          // 247
    if (c in a && a[c] === b) {                                                                                      // 248
      return c;                                                                                                      // 249
    }                                                                                                                // 250
  }                                                                                                                  // 251
  return-1;                                                                                                          // 252
}, Ya = B.forEach ? function(a, b, c) {                                                                              // 253
  B.forEach.call(a, b, c);                                                                                           // 254
} : function(a, b, c) {                                                                                              // 255
  for (var d = a.length, e = n(a) ? a.split("") : a, g = 0;g < d;g++) {                                              // 256
    g in e && b.call(c, e[g], g, a);                                                                                 // 257
  }                                                                                                                  // 258
};                                                                                                                   // 259
function Za(a) {                                                                                                     // 260
  var b;                                                                                                             // 261
  a: {                                                                                                               // 262
    b = $a;                                                                                                          // 263
    for (var c = a.length, d = n(a) ? a.split("") : a, e = 0;e < c;e++) {                                            // 264
      if (e in d && b.call(void 0, d[e], e, a)) {                                                                    // 265
        b = e;                                                                                                       // 266
        break a;                                                                                                     // 267
      }                                                                                                              // 268
    }                                                                                                                // 269
    b = -1;                                                                                                          // 270
  }                                                                                                                  // 271
  return 0 > b ? null : n(a) ? a.charAt(b) : a[b];                                                                   // 272
}                                                                                                                    // 273
function ab(a) {                                                                                                     // 274
  return B.concat.apply(B, arguments);                                                                               // 275
}                                                                                                                    // 276
function bb(a) {                                                                                                     // 277
  var b = a.length;                                                                                                  // 278
  if (0 < b) {                                                                                                       // 279
    for (var c = Array(b), d = 0;d < b;d++) {                                                                        // 280
      c[d] = a[d];                                                                                                   // 281
    }                                                                                                                // 282
    return c;                                                                                                        // 283
  }                                                                                                                  // 284
  return[];                                                                                                          // 285
}                                                                                                                    // 286
;function cb(a, b) {                                                                                                 // 287
  this.O = {};                                                                                                       // 288
  this.j = [];                                                                                                       // 289
  this.o = 0;                                                                                                        // 290
  var c = arguments.length;                                                                                          // 291
  if (1 < c) {                                                                                                       // 292
    if (c % 2) {                                                                                                     // 293
      throw Error("Uneven number of arguments");                                                                     // 294
    }                                                                                                                // 295
    for (var d = 0;d < c;d += 2) {                                                                                   // 296
      this.set(arguments[d], arguments[d + 1]);                                                                      // 297
    }                                                                                                                // 298
  } else {                                                                                                           // 299
    if (a) {                                                                                                         // 300
      a instanceof cb ? (c = a.ba(), d = a.N()) : (c = Ua(a), d = Ta(a));                                            // 301
      for (var e = 0;e < c.length;e++) {                                                                             // 302
        this.set(c[e], d[e]);                                                                                        // 303
      }                                                                                                              // 304
    }                                                                                                                // 305
  }                                                                                                                  // 306
}                                                                                                                    // 307
f = cb.prototype;                                                                                                    // 308
f.N = function() {                                                                                                   // 309
  db(this);                                                                                                          // 310
  for (var a = [], b = 0;b < this.j.length;b++) {                                                                    // 311
    a.push(this.O[this.j[b]]);                                                                                       // 312
  }                                                                                                                  // 313
  return a;                                                                                                          // 314
};                                                                                                                   // 315
f.ba = function() {                                                                                                  // 316
  db(this);                                                                                                          // 317
  return this.j.concat();                                                                                            // 318
};                                                                                                                   // 319
f.va = function(a) {                                                                                                 // 320
  return C(this.O, a);                                                                                               // 321
};                                                                                                                   // 322
f.remove = function(a) {                                                                                             // 323
  return C(this.O, a) ? (delete this.O[a], this.o--, this.j.length > 2 * this.o && db(this), !0) : !1;               // 324
};                                                                                                                   // 325
function db(a) {                                                                                                     // 326
  if (a.o != a.j.length) {                                                                                           // 327
    for (var b = 0, c = 0;b < a.j.length;) {                                                                         // 328
      var d = a.j[b];                                                                                                // 329
      C(a.O, d) && (a.j[c++] = d);                                                                                   // 330
      b++;                                                                                                           // 331
    }                                                                                                                // 332
    a.j.length = c;                                                                                                  // 333
  }                                                                                                                  // 334
  if (a.o != a.j.length) {                                                                                           // 335
    for (var e = {}, c = b = 0;b < a.j.length;) {                                                                    // 336
      d = a.j[b], C(e, d) || (a.j[c++] = d, e[d] = 1), b++;                                                          // 337
    }                                                                                                                // 338
    a.j.length = c;                                                                                                  // 339
  }                                                                                                                  // 340
}                                                                                                                    // 341
f.get = function(a, b) {                                                                                             // 342
  return C(this.O, a) ? this.O[a] : b;                                                                               // 343
};                                                                                                                   // 344
f.set = function(a, b) {                                                                                             // 345
  C(this.O, a) || (this.o++, this.j.push(a));                                                                        // 346
  this.O[a] = b;                                                                                                     // 347
};                                                                                                                   // 348
f.n = function() {                                                                                                   // 349
  return new cb(this);                                                                                               // 350
};                                                                                                                   // 351
function C(a, b) {                                                                                                   // 352
  return Object.prototype.hasOwnProperty.call(a, b);                                                                 // 353
}                                                                                                                    // 354
;function eb(a) {                                                                                                    // 355
  if ("function" == typeof a.N) {                                                                                    // 356
    return a.N();                                                                                                    // 357
  }                                                                                                                  // 358
  if (n(a)) {                                                                                                        // 359
    return a.split("");                                                                                              // 360
  }                                                                                                                  // 361
  if (ea(a)) {                                                                                                       // 362
    for (var b = [], c = a.length, d = 0;d < c;d++) {                                                                // 363
      b.push(a[d]);                                                                                                  // 364
    }                                                                                                                // 365
    return b;                                                                                                        // 366
  }                                                                                                                  // 367
  return Ta(a);                                                                                                      // 368
}                                                                                                                    // 369
function fb(a, b, c) {                                                                                               // 370
  if ("function" == typeof a.forEach) {                                                                              // 371
    a.forEach(b, c);                                                                                                 // 372
  } else {                                                                                                           // 373
    if (ea(a) || n(a)) {                                                                                             // 374
      Ya(a, b, c);                                                                                                   // 375
    } else {                                                                                                         // 376
      var d;                                                                                                         // 377
      if ("function" == typeof a.ba) {                                                                               // 378
        d = a.ba();                                                                                                  // 379
      } else {                                                                                                       // 380
        if ("function" != typeof a.N) {                                                                              // 381
          if (ea(a) || n(a)) {                                                                                       // 382
            d = [];                                                                                                  // 383
            for (var e = a.length, g = 0;g < e;g++) {                                                                // 384
              d.push(g);                                                                                             // 385
            }                                                                                                        // 386
          } else {                                                                                                   // 387
            d = Ua(a);                                                                                               // 388
          }                                                                                                          // 389
        } else {                                                                                                     // 390
          d = void 0;                                                                                                // 391
        }                                                                                                            // 392
      }                                                                                                              // 393
      for (var e = eb(a), g = e.length, h = 0;h < g;h++) {                                                           // 394
        b.call(c, e[h], d && d[h], a);                                                                               // 395
      }                                                                                                              // 396
    }                                                                                                                // 397
  }                                                                                                                  // 398
}                                                                                                                    // 399
;function D(a, b) {                                                                                                  // 400
  var c;                                                                                                             // 401
  if (a instanceof D) {                                                                                              // 402
    this.D = void 0 !== b ? b : a.D, gb(this, a.na), c = a.eb, E(this), this.eb = c, hb(this, a.ia), ib(this, a.Ca), jb(this, a.I), kb(this, a.R.n()), c = a.Na, E(this), this.Na = c;
  } else {                                                                                                           // 404
    if (a && (c = Ra(String(a)))) {                                                                                  // 405
      this.D = !!b;                                                                                                  // 406
      gb(this, c[1] || "", !0);                                                                                      // 407
      var d = c[2] || "";                                                                                            // 408
      E(this);                                                                                                       // 409
      this.eb = d ? decodeURIComponent(d) : "";                                                                      // 410
      hb(this, c[3] || "", !0);                                                                                      // 411
      ib(this, c[4]);                                                                                                // 412
      jb(this, c[5] || "", !0);                                                                                      // 413
      kb(this, c[6] || "", !0);                                                                                      // 414
      c = c[7] || "";                                                                                                // 415
      E(this);                                                                                                       // 416
      this.Na = c ? decodeURIComponent(c) : "";                                                                      // 417
    } else {                                                                                                         // 418
      this.D = !!b, this.R = new lb(null, 0, this.D);                                                                // 419
    }                                                                                                                // 420
  }                                                                                                                  // 421
}                                                                                                                    // 422
f = D.prototype;                                                                                                     // 423
f.na = "";                                                                                                           // 424
f.eb = "";                                                                                                           // 425
f.ia = "";                                                                                                           // 426
f.Ca = null;                                                                                                         // 427
f.I = "";                                                                                                            // 428
f.Na = "";                                                                                                           // 429
f.oc = !1;                                                                                                           // 430
f.D = !1;                                                                                                            // 431
f.toString = function() {                                                                                            // 432
  var a = [], b = this.na;                                                                                           // 433
  b && a.push(mb(b, nb), ":");                                                                                       // 434
  if (b = this.ia) {                                                                                                 // 435
    a.push("//");                                                                                                    // 436
    var c = this.eb;                                                                                                 // 437
    c && a.push(mb(c, nb), "@");                                                                                     // 438
    a.push(encodeURIComponent(String(b)));                                                                           // 439
    b = this.Ca;                                                                                                     // 440
    null != b && a.push(":", String(b));                                                                             // 441
  }                                                                                                                  // 442
  if (b = this.I) {                                                                                                  // 443
    this.ia && "/" != b.charAt(0) && a.push("/"), a.push(mb(b, "/" == b.charAt(0) ? ob : pb));                       // 444
  }                                                                                                                  // 445
  (b = this.R.toString()) && a.push("?", b);                                                                         // 446
  (b = this.Na) && a.push("#", mb(b, qb));                                                                           // 447
  return a.join("");                                                                                                 // 448
};                                                                                                                   // 449
f.n = function() {                                                                                                   // 450
  return new D(this);                                                                                                // 451
};                                                                                                                   // 452
function gb(a, b, c) {                                                                                               // 453
  E(a);                                                                                                              // 454
  a.na = c ? b ? decodeURIComponent(b) : "" : b;                                                                     // 455
  a.na && (a.na = a.na.replace(/:$/, ""));                                                                           // 456
}                                                                                                                    // 457
function hb(a, b, c) {                                                                                               // 458
  E(a);                                                                                                              // 459
  a.ia = c ? b ? decodeURIComponent(b) : "" : b;                                                                     // 460
}                                                                                                                    // 461
function ib(a, b) {                                                                                                  // 462
  E(a);                                                                                                              // 463
  if (b) {                                                                                                           // 464
    b = Number(b);                                                                                                   // 465
    if (isNaN(b) || 0 > b) {                                                                                         // 466
      throw Error("Bad port number " + b);                                                                           // 467
    }                                                                                                                // 468
    a.Ca = b;                                                                                                        // 469
  } else {                                                                                                           // 470
    a.Ca = null;                                                                                                     // 471
  }                                                                                                                  // 472
}                                                                                                                    // 473
function jb(a, b, c) {                                                                                               // 474
  E(a);                                                                                                              // 475
  a.I = c ? b ? decodeURIComponent(b) : "" : b;                                                                      // 476
}                                                                                                                    // 477
function kb(a, b, c) {                                                                                               // 478
  E(a);                                                                                                              // 479
  b instanceof lb ? (a.R = b, a.R.ub(a.D)) : (c || (b = mb(b, rb)), a.R = new lb(b, 0, a.D));                        // 480
}                                                                                                                    // 481
function F(a, b, c) {                                                                                                // 482
  E(a);                                                                                                              // 483
  a.R.set(b, c);                                                                                                     // 484
}                                                                                                                    // 485
function sb(a, b, c) {                                                                                               // 486
  E(a);                                                                                                              // 487
  m(c) || (c = [String(c)]);                                                                                         // 488
  tb(a.R, b, c);                                                                                                     // 489
}                                                                                                                    // 490
function G(a) {                                                                                                      // 491
  E(a);                                                                                                              // 492
  F(a, "zx", sa());                                                                                                  // 493
  return a;                                                                                                          // 494
}                                                                                                                    // 495
function E(a) {                                                                                                      // 496
  if (a.oc) {                                                                                                        // 497
    throw Error("Tried to modify a read-only Uri");                                                                  // 498
  }                                                                                                                  // 499
}                                                                                                                    // 500
f.ub = function(a) {                                                                                                 // 501
  this.D = a;                                                                                                        // 502
  this.R && this.R.ub(a);                                                                                            // 503
  return this;                                                                                                       // 504
};                                                                                                                   // 505
function ub(a) {                                                                                                     // 506
  return a instanceof D ? a.n() : new D(a, void 0);                                                                  // 507
}                                                                                                                    // 508
function vb(a, b, c, d) {                                                                                            // 509
  var e = new D(null, void 0);                                                                                       // 510
  a && gb(e, a);                                                                                                     // 511
  b && hb(e, b);                                                                                                     // 512
  c && ib(e, c);                                                                                                     // 513
  d && jb(e, d);                                                                                                     // 514
  return e;                                                                                                          // 515
}                                                                                                                    // 516
function mb(a, b) {                                                                                                  // 517
  return n(a) ? encodeURI(a).replace(b, wb) : null;                                                                  // 518
}                                                                                                                    // 519
function wb(a) {                                                                                                     // 520
  a = a.charCodeAt(0);                                                                                               // 521
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);                                                   // 522
}                                                                                                                    // 523
var nb = /[#\/\?@]/g, pb = /[\#\?:]/g, ob = /[\#\?]/g, rb = /[\#\?@]/g, qb = /#/g;                                   // 524
function lb(a, b, c) {                                                                                               // 525
  this.C = a || null;                                                                                                // 526
  this.D = !!c;                                                                                                      // 527
}                                                                                                                    // 528
function H(a) {                                                                                                      // 529
  if (!a.h && (a.h = new cb, a.o = 0, a.C)) {                                                                        // 530
    for (var b = a.C.split("&"), c = 0;c < b.length;c++) {                                                           // 531
      var d = b[c].indexOf("="), e = null, g = null;                                                                 // 532
      0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];                                     // 533
      e = decodeURIComponent(e.replace(/\+/g, " "));                                                                 // 534
      e = I(a, e);                                                                                                   // 535
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "");                                                  // 536
    }                                                                                                                // 537
  }                                                                                                                  // 538
}                                                                                                                    // 539
f = lb.prototype;                                                                                                    // 540
f.h = null;                                                                                                          // 541
f.o = null;                                                                                                          // 542
f.add = function(a, b) {                                                                                             // 543
  H(this);                                                                                                           // 544
  this.C = null;                                                                                                     // 545
  a = I(this, a);                                                                                                    // 546
  var c = this.h.get(a);                                                                                             // 547
  c || this.h.set(a, c = []);                                                                                        // 548
  c.push(b);                                                                                                         // 549
  this.o++;                                                                                                          // 550
  return this;                                                                                                       // 551
};                                                                                                                   // 552
f.remove = function(a) {                                                                                             // 553
  H(this);                                                                                                           // 554
  a = I(this, a);                                                                                                    // 555
  return this.h.va(a) ? (this.C = null, this.o -= this.h.get(a).length, this.h.remove(a)) : !1;                      // 556
};                                                                                                                   // 557
f.va = function(a) {                                                                                                 // 558
  H(this);                                                                                                           // 559
  a = I(this, a);                                                                                                    // 560
  return this.h.va(a);                                                                                               // 561
};                                                                                                                   // 562
f.ba = function() {                                                                                                  // 563
  H(this);                                                                                                           // 564
  for (var a = this.h.N(), b = this.h.ba(), c = [], d = 0;d < b.length;d++) {                                        // 565
    for (var e = a[d], g = 0;g < e.length;g++) {                                                                     // 566
      c.push(b[d]);                                                                                                  // 567
    }                                                                                                                // 568
  }                                                                                                                  // 569
  return c;                                                                                                          // 570
};                                                                                                                   // 571
f.N = function(a) {                                                                                                  // 572
  H(this);                                                                                                           // 573
  var b = [];                                                                                                        // 574
  if (n(a)) {                                                                                                        // 575
    this.va(a) && (b = ab(b, this.h.get(I(this, a))));                                                               // 576
  } else {                                                                                                           // 577
    a = this.h.N();                                                                                                  // 578
    for (var c = 0;c < a.length;c++) {                                                                               // 579
      b = ab(b, a[c]);                                                                                               // 580
    }                                                                                                                // 581
  }                                                                                                                  // 582
  return b;                                                                                                          // 583
};                                                                                                                   // 584
f.set = function(a, b) {                                                                                             // 585
  H(this);                                                                                                           // 586
  this.C = null;                                                                                                     // 587
  a = I(this, a);                                                                                                    // 588
  this.va(a) && (this.o -= this.h.get(a).length);                                                                    // 589
  this.h.set(a, [b]);                                                                                                // 590
  this.o++;                                                                                                          // 591
  return this;                                                                                                       // 592
};                                                                                                                   // 593
f.get = function(a, b) {                                                                                             // 594
  var c = a ? this.N(a) : [];                                                                                        // 595
  return 0 < c.length ? String(c[0]) : b;                                                                            // 596
};                                                                                                                   // 597
function tb(a, b, c) {                                                                                               // 598
  a.remove(b);                                                                                                       // 599
  0 < c.length && (a.C = null, a.h.set(I(a, b), bb(c)), a.o += c.length);                                            // 600
}                                                                                                                    // 601
f.toString = function() {                                                                                            // 602
  if (this.C) {                                                                                                      // 603
    return this.C;                                                                                                   // 604
  }                                                                                                                  // 605
  if (!this.h) {                                                                                                     // 606
    return "";                                                                                                       // 607
  }                                                                                                                  // 608
  for (var a = [], b = this.h.ba(), c = 0;c < b.length;c++) {                                                        // 609
    for (var d = b[c], e = encodeURIComponent(String(d)), d = this.N(d), g = 0;g < d.length;g++) {                   // 610
      var h = e;                                                                                                     // 611
      "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));                                                  // 612
      a.push(h);                                                                                                     // 613
    }                                                                                                                // 614
  }                                                                                                                  // 615
  return this.C = a.join("&");                                                                                       // 616
};                                                                                                                   // 617
f.n = function() {                                                                                                   // 618
  var a = new lb;                                                                                                    // 619
  a.C = this.C;                                                                                                      // 620
  this.h && (a.h = this.h.n(), a.o = this.o);                                                                        // 621
  return a;                                                                                                          // 622
};                                                                                                                   // 623
function I(a, b) {                                                                                                   // 624
  var c = String(b);                                                                                                 // 625
  a.D && (c = c.toLowerCase());                                                                                      // 626
  return c;                                                                                                          // 627
}                                                                                                                    // 628
f.ub = function(a) {                                                                                                 // 629
  a && !this.D && (H(this), this.C = null, fb(this.h, function(a, c) {                                               // 630
    var d = c.toLowerCase();                                                                                         // 631
    c != d && (this.remove(c), tb(this, d, a));                                                                      // 632
  }, this));                                                                                                         // 633
  this.D = a;                                                                                                        // 634
};                                                                                                                   // 635
function xb(a) {                                                                                                     // 636
  a = String(a);                                                                                                     // 637
  if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {                                                                                                            // 639
      return eval("(" + a + ")");                                                                                    // 640
    } catch (b) {                                                                                                    // 641
    }                                                                                                                // 642
  }                                                                                                                  // 643
  throw Error("Invalid JSON string: " + a);                                                                          // 644
}                                                                                                                    // 645
function yb(a) {                                                                                                     // 646
  return eval("(" + a + ")");                                                                                        // 647
}                                                                                                                    // 648
function zb(a) {                                                                                                     // 649
  var b = [];                                                                                                        // 650
  Ab(new Bb, a, b);                                                                                                  // 651
  return b.join("");                                                                                                 // 652
}                                                                                                                    // 653
function Bb() {                                                                                                      // 654
  this.Ya = void 0;                                                                                                  // 655
}                                                                                                                    // 656
function Ab(a, b, c) {                                                                                               // 657
  switch(typeof b) {                                                                                                 // 658
    case "string":                                                                                                   // 659
      Cb(b, c);                                                                                                      // 660
      break;                                                                                                         // 661
    case "number":                                                                                                   // 662
      c.push(isFinite(b) && !isNaN(b) ? b : "null");                                                                 // 663
      break;                                                                                                         // 664
    case "boolean":                                                                                                  // 665
      c.push(b);                                                                                                     // 666
      break;                                                                                                         // 667
    case "undefined":                                                                                                // 668
      c.push("null");                                                                                                // 669
      break;                                                                                                         // 670
    case "object":                                                                                                   // 671
      if (null == b) {                                                                                               // 672
        c.push("null");                                                                                              // 673
        break;                                                                                                       // 674
      }                                                                                                              // 675
      if (m(b)) {                                                                                                    // 676
        var d = b.length;                                                                                            // 677
        c.push("[");                                                                                                 // 678
        for (var e = "", g = 0;g < d;g++) {                                                                          // 679
          c.push(e), e = b[g], Ab(a, a.Ya ? a.Ya.call(b, String(g), e) : e, c), e = ",";                             // 680
        }                                                                                                            // 681
        c.push("]");                                                                                                 // 682
        break;                                                                                                       // 683
      }                                                                                                              // 684
      c.push("{");                                                                                                   // 685
      d = "";                                                                                                        // 686
      for (g in b) {                                                                                                 // 687
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), Cb(g, c), c.push(":"), Ab(a, a.Ya ? a.Ya.call(b, g, e) : e, c), d = ","));
      }                                                                                                              // 689
      c.push("}");                                                                                                   // 690
      break;                                                                                                         // 691
    case "function":                                                                                                 // 692
      break;                                                                                                         // 693
    default:                                                                                                         // 694
      throw Error("Unknown type: " + typeof b);;                                                                     // 695
  }                                                                                                                  // 696
}                                                                                                                    // 697
var Db = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Eb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Cb(a, b) {                                                                                                  // 699
  b.push('"', a.replace(Eb, function(a) {                                                                            // 700
    if (a in Db) {                                                                                                   // 701
      return Db[a];                                                                                                  // 702
    }                                                                                                                // 703
    var b = a.charCodeAt(0), e = "\\u";                                                                              // 704
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");                                              // 705
    return Db[a] = e + b.toString(16);                                                                               // 706
  }), '"');                                                                                                          // 707
}                                                                                                                    // 708
;function Fb(a) {                                                                                                    // 709
  return Gb(a || arguments.callee.caller, []);                                                                       // 710
}                                                                                                                    // 711
function Gb(a, b) {                                                                                                  // 712
  var c = [];                                                                                                        // 713
  if (0 <= Xa(b, a)) {                                                                                               // 714
    c.push("[...circular reference...]");                                                                            // 715
  } else {                                                                                                           // 716
    if (a && 50 > b.length) {                                                                                        // 717
      c.push(Hb(a) + "(");                                                                                           // 718
      for (var d = a.arguments, e = 0;d && e < d.length;e++) {                                                       // 719
        0 < e && c.push(", ");                                                                                       // 720
        var g;                                                                                                       // 721
        g = d[e];                                                                                                    // 722
        switch(typeof g) {                                                                                           // 723
          case "object":                                                                                             // 724
            g = g ? "object" : "null";                                                                               // 725
            break;                                                                                                   // 726
          case "string":                                                                                             // 727
            break;                                                                                                   // 728
          case "number":                                                                                             // 729
            g = String(g);                                                                                           // 730
            break;                                                                                                   // 731
          case "boolean":                                                                                            // 732
            g = g ? "true" : "false";                                                                                // 733
            break;                                                                                                   // 734
          case "function":                                                                                           // 735
            g = (g = Hb(g)) ? g : "[fn]";                                                                            // 736
            break;                                                                                                   // 737
          default:                                                                                                   // 738
            g = typeof g;                                                                                            // 739
        }                                                                                                            // 740
        40 < g.length && (g = g.substr(0, 40) + "...");                                                              // 741
        c.push(g);                                                                                                   // 742
      }                                                                                                              // 743
      b.push(a);                                                                                                     // 744
      c.push(")\n");                                                                                                 // 745
      try {                                                                                                          // 746
        c.push(Gb(a.caller, b));                                                                                     // 747
      } catch (h) {                                                                                                  // 748
        c.push("[exception trying to get caller]\n");                                                                // 749
      }                                                                                                              // 750
    } else {                                                                                                         // 751
      a ? c.push("[...long stack...]") : c.push("[end]");                                                            // 752
    }                                                                                                                // 753
  }                                                                                                                  // 754
  return c.join("");                                                                                                 // 755
}                                                                                                                    // 756
function Hb(a) {                                                                                                     // 757
  if (Ib[a]) {                                                                                                       // 758
    return Ib[a];                                                                                                    // 759
  }                                                                                                                  // 760
  a = String(a);                                                                                                     // 761
  if (!Ib[a]) {                                                                                                      // 762
    var b = /function ([^\(]+)/.exec(a);                                                                             // 763
    Ib[a] = b ? b[1] : "[Anonymous]";                                                                                // 764
  }                                                                                                                  // 765
  return Ib[a];                                                                                                      // 766
}                                                                                                                    // 767
var Ib = {};                                                                                                         // 768
function Jb(a, b, c, d, e) {                                                                                         // 769
  this.reset(a, b, c, d, e);                                                                                         // 770
}                                                                                                                    // 771
Jb.prototype.Fb = null;                                                                                              // 772
Jb.prototype.Eb = null;                                                                                              // 773
var Kb = 0;                                                                                                          // 774
Jb.prototype.reset = function(a, b, c, d, e) {                                                                       // 775
  "number" == typeof e || Kb++;                                                                                      // 776
  d || q();                                                                                                          // 777
  this.za = a;                                                                                                       // 778
  this.qc = b;                                                                                                       // 779
  delete this.Fb;                                                                                                    // 780
  delete this.Eb;                                                                                                    // 781
};                                                                                                                   // 782
Jb.prototype.$b = function(a) {                                                                                      // 783
  this.za = a;                                                                                                       // 784
};                                                                                                                   // 785
function Lb(a) {                                                                                                     // 786
  this.rc = a;                                                                                                       // 787
  this.Jb = this.jb = this.za = this.Sa = null;                                                                      // 788
}                                                                                                                    // 789
function Mb(a, b) {                                                                                                  // 790
  this.name = a;                                                                                                     // 791
  this.value = b;                                                                                                    // 792
}                                                                                                                    // 793
Mb.prototype.toString = function() {                                                                                 // 794
  return this.name;                                                                                                  // 795
};                                                                                                                   // 796
var Nb = new Mb("SEVERE", 1E3), Ob = new Mb("WARNING", 900), Pb = new Mb("INFO", 800), Qb = new Mb("CONFIG", 700), Rb = new Mb("FINE", 500);
f = Lb.prototype;                                                                                                    // 798
f.getParent = function() {                                                                                           // 799
  return this.Sa;                                                                                                    // 800
};                                                                                                                   // 801
f.$b = function(a) {                                                                                                 // 802
  this.za = a;                                                                                                       // 803
};                                                                                                                   // 804
function Sb(a) {                                                                                                     // 805
  if (a.za) {                                                                                                        // 806
    return a.za;                                                                                                     // 807
  }                                                                                                                  // 808
  if (a.Sa) {                                                                                                        // 809
    return Sb(a.Sa);                                                                                                 // 810
  }                                                                                                                  // 811
  Pa("Root logger has no level set.");                                                                               // 812
  return null;                                                                                                       // 813
}                                                                                                                    // 814
f.log = function(a, b, c) {                                                                                          // 815
  if (a.value >= Sb(this).value) {                                                                                   // 816
    for (fa(b) && (b = b()), a = this.nc(a, b, c), b = "log:" + a.qc, l.console && (l.console.timeStamp ? l.console.timeStamp(b) : l.console.markTimeline && l.console.markTimeline(b)), l.msWriteProfilerMark && l.msWriteProfilerMark(b), b = this;b;) {
      c = b;                                                                                                         // 818
      var d = a;                                                                                                     // 819
      if (c.Jb) {                                                                                                    // 820
        for (var e = 0, g = void 0;g = c.Jb[e];e++) {                                                                // 821
          g(d);                                                                                                      // 822
        }                                                                                                            // 823
      }                                                                                                              // 824
      b = b.getParent();                                                                                             // 825
    }                                                                                                                // 826
  }                                                                                                                  // 827
};                                                                                                                   // 828
f.nc = function(a, b, c) {                                                                                           // 829
  var d = new Jb(a, String(b), this.rc);                                                                             // 830
  if (c) {                                                                                                           // 831
    d.Fb = c;                                                                                                        // 832
    var e;                                                                                                           // 833
    var g = arguments.callee.caller;                                                                                 // 834
    try {                                                                                                            // 835
      var h;                                                                                                         // 836
      var k = ba("window.location.href");                                                                            // 837
      if (n(c)) {                                                                                                    // 838
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"};        // 839
      } else {                                                                                                       // 840
        var u, K, v = !1;                                                                                            // 841
        try {                                                                                                        // 842
          u = c.lineNumber || c.Gc || "Not available";                                                               // 843
        } catch (r) {                                                                                                // 844
          u = "Not available", v = !0;                                                                               // 845
        }                                                                                                            // 846
        try {                                                                                                        // 847
          K = c.fileName || c.filename || c.sourceURL || l.$googDebugFname || k;                                     // 848
        } catch (Ia) {                                                                                               // 849
          K = "Not available", v = !0;                                                                               // 850
        }                                                                                                            // 851
        h = !v && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {message:c.message || "Not available", name:c.name || "UnknownError", lineNumber:u, fileName:K, stack:c.stack || "Not available"};
      }                                                                                                              // 853
      e = "Message: " + la(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + la(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + la(Fb(g) + "-> ");
    } catch (w) {                                                                                                    // 855
      e = "Exception trying to expose exception! You win, we lose. " + w;                                            // 856
    }                                                                                                                // 857
    d.Eb = e;                                                                                                        // 858
  }                                                                                                                  // 859
  return d;                                                                                                          // 860
};                                                                                                                   // 861
f.J = function(a, b) {                                                                                               // 862
  this.log(Nb, a, b);                                                                                                // 863
};                                                                                                                   // 864
f.fa = function(a, b) {                                                                                              // 865
  this.log(Ob, a, b);                                                                                                // 866
};                                                                                                                   // 867
f.info = function(a, b) {                                                                                            // 868
  this.log(Pb, a, b);                                                                                                // 869
};                                                                                                                   // 870
var Tb = {}, Ub = null;                                                                                              // 871
function Vb(a) {                                                                                                     // 872
  Ub || (Ub = new Lb(""), Tb[""] = Ub, Ub.$b(Qb));                                                                   // 873
  var b;                                                                                                             // 874
  if (!(b = Tb[a])) {                                                                                                // 875
    b = new Lb(a);                                                                                                   // 876
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Vb(a.substr(0, c));                                         // 877
    c.jb || (c.jb = {});                                                                                             // 878
    c.jb[d] = b;                                                                                                     // 879
    b.Sa = c;                                                                                                        // 880
    Tb[a] = b;                                                                                                       // 881
  }                                                                                                                  // 882
  return b;                                                                                                          // 883
}                                                                                                                    // 884
;function J(a, b) {                                                                                                  // 885
  a && a.log(Rb, b, void 0);                                                                                         // 886
}                                                                                                                    // 887
;function L() {                                                                                                      // 888
  this.r = Vb("goog.net.BrowserChannel");                                                                            // 889
}                                                                                                                    // 890
function Wb(a, b, c, d) {                                                                                            // 891
  a.info("XMLHTTP TEXT (" + b + "): " + Xb(a, c) + (d ? " " + d : ""));                                              // 892
}                                                                                                                    // 893
L.prototype.debug = function(a) {                                                                                    // 894
  this.info(a);                                                                                                      // 895
};                                                                                                                   // 896
function M(a, b, c) {                                                                                                // 897
  a.J((c || "Exception") + b);                                                                                       // 898
}                                                                                                                    // 899
L.prototype.info = function(a) {                                                                                     // 900
  var b = this.r;                                                                                                    // 901
  b && b.info(a, void 0);                                                                                            // 902
};                                                                                                                   // 903
L.prototype.fa = function(a) {                                                                                       // 904
  var b = this.r;                                                                                                    // 905
  b && b.fa(a, void 0);                                                                                              // 906
};                                                                                                                   // 907
L.prototype.J = function(a) {                                                                                        // 908
  var b = this.r;                                                                                                    // 909
  b && b.J(a, void 0);                                                                                               // 910
};                                                                                                                   // 911
function Xb(a, b) {                                                                                                  // 912
  if (!b || b == Yb) {                                                                                               // 913
    return b;                                                                                                        // 914
  }                                                                                                                  // 915
  try {                                                                                                              // 916
    var c = yb(b);                                                                                                   // 917
    if (c) {                                                                                                         // 918
      for (var d = 0;d < c.length;d++) {                                                                             // 919
        if (m(c[d])) {                                                                                               // 920
          var e = c[d];                                                                                              // 921
          if (!(2 > e.length)) {                                                                                     // 922
            var g = e[1];                                                                                            // 923
            if (m(g) && !(1 > g.length)) {                                                                           // 924
              var h = g[0];                                                                                          // 925
              if ("noop" != h && "stop" != h) {                                                                      // 926
                for (var k = 1;k < g.length;k++) {                                                                   // 927
                  g[k] = "";                                                                                         // 928
                }                                                                                                    // 929
              }                                                                                                      // 930
            }                                                                                                        // 931
          }                                                                                                          // 932
        }                                                                                                            // 933
      }                                                                                                              // 934
    }                                                                                                                // 935
    return zb(c);                                                                                                    // 936
  } catch (u) {                                                                                                      // 937
    return a.debug("Exception parsing expected JS array - probably was not JS"), b;                                  // 938
  }                                                                                                                  // 939
}                                                                                                                    // 940
;function Zb(a, b) {                                                                                                 // 941
  this.P = b ? yb : xb;                                                                                              // 942
}                                                                                                                    // 943
Zb.prototype.parse = function(a) {                                                                                   // 944
  return this.P(a);                                                                                                  // 945
};                                                                                                                   // 946
function N() {                                                                                                       // 947
  0 != $b && (ac[this[ga] || (this[ga] = ++ha)] = this);                                                             // 948
}                                                                                                                    // 949
var $b = 0, ac = {};                                                                                                 // 950
N.prototype.mb = !1;                                                                                                 // 951
N.prototype.Ja = function() {                                                                                        // 952
  if (!this.mb && (this.mb = !0, this.u(), 0 != $b)) {                                                               // 953
    var a = this[ga] || (this[ga] = ++ha);                                                                           // 954
    delete ac[a];                                                                                                    // 955
  }                                                                                                                  // 956
};                                                                                                                   // 957
N.prototype.u = function() {                                                                                         // 958
  if (this.Pb) {                                                                                                     // 959
    for (;this.Pb.length;) {                                                                                         // 960
      this.Pb.shift()();                                                                                             // 961
    }                                                                                                                // 962
  }                                                                                                                  // 963
};                                                                                                                   // 964
var bc = "closure_listenable_" + (1E6 * Math.random() | 0);                                                          // 965
function cc(a) {                                                                                                     // 966
  try {                                                                                                              // 967
    return!(!a || !a[bc]);                                                                                           // 968
  } catch (b) {                                                                                                      // 969
    return!1;                                                                                                        // 970
  }                                                                                                                  // 971
}                                                                                                                    // 972
var dc = 0;                                                                                                          // 973
function ec(a, b, c, d, e) {                                                                                         // 974
  this.ea = a;                                                                                                       // 975
  this.Ua = null;                                                                                                    // 976
  this.src = b;                                                                                                      // 977
  this.type = c;                                                                                                     // 978
  this.capture = !!d;                                                                                                // 979
  this.Oa = e;                                                                                                       // 980
  this.key = ++dc;                                                                                                   // 981
  this.ma = this.Ia = !1;                                                                                            // 982
}                                                                                                                    // 983
function fc(a) {                                                                                                     // 984
  a.ma = !0;                                                                                                         // 985
  a.ea = null;                                                                                                       // 986
  a.Ua = null;                                                                                                       // 987
  a.src = null;                                                                                                      // 988
  a.Oa = null;                                                                                                       // 989
}                                                                                                                    // 990
;function O(a) {                                                                                                     // 991
  this.src = a;                                                                                                      // 992
  this.s = {};                                                                                                       // 993
  this.Ga = 0;                                                                                                       // 994
}                                                                                                                    // 995
O.prototype.add = function(a, b, c, d, e) {                                                                          // 996
  var g = this.s[a];                                                                                                 // 997
  g || (g = this.s[a] = [], this.Ga++);                                                                              // 998
  var h = gc(g, b, d, e);                                                                                            // 999
  -1 < h ? (a = g[h], c || (a.Ia = !1)) : (a = new ec(b, this.src, a, !!d, e), a.Ia = c, g.push(a));                 // 1000
  return a;                                                                                                          // 1001
};                                                                                                                   // 1002
O.prototype.remove = function(a, b, c, d) {                                                                          // 1003
  if (!(a in this.s)) {                                                                                              // 1004
    return!1;                                                                                                        // 1005
  }                                                                                                                  // 1006
  var e = this.s[a];                                                                                                 // 1007
  b = gc(e, b, c, d);                                                                                                // 1008
  return-1 < b ? (fc(e[b]), B.splice.call(e, b, 1), 0 == e.length && (delete this.s[a], this.Ga--), !0) : !1;        // 1009
};                                                                                                                   // 1010
function hc(a, b) {                                                                                                  // 1011
  var c = b.type;                                                                                                    // 1012
  if (!(c in a.s)) {                                                                                                 // 1013
    return!1;                                                                                                        // 1014
  }                                                                                                                  // 1015
  var d = a.s[c], e = Xa(d, b), g;                                                                                   // 1016
  (g = 0 <= e) && B.splice.call(d, e, 1);                                                                            // 1017
  g && (fc(b), 0 == a.s[c].length && (delete a.s[c], a.Ga--));                                                       // 1018
  return g;                                                                                                          // 1019
}                                                                                                                    // 1020
O.prototype.Xa = function(a) {                                                                                       // 1021
  var b = 0, c;                                                                                                      // 1022
  for (c in this.s) {                                                                                                // 1023
    if (!a || c == a) {                                                                                              // 1024
      for (var d = this.s[c], e = 0;e < d.length;e++) {                                                              // 1025
        ++b, fc(d[e]);                                                                                               // 1026
      }                                                                                                              // 1027
      delete this.s[c];                                                                                              // 1028
      this.Ga--;                                                                                                     // 1029
    }                                                                                                                // 1030
  }                                                                                                                  // 1031
  return b;                                                                                                          // 1032
};                                                                                                                   // 1033
O.prototype.xa = function(a, b, c, d) {                                                                              // 1034
  a = this.s[a];                                                                                                     // 1035
  var e = -1;                                                                                                        // 1036
  a && (e = gc(a, b, c, d));                                                                                         // 1037
  return-1 < e ? a[e] : null;                                                                                        // 1038
};                                                                                                                   // 1039
function gc(a, b, c, d) {                                                                                            // 1040
  for (var e = 0;e < a.length;++e) {                                                                                 // 1041
    var g = a[e];                                                                                                    // 1042
    if (!g.ma && g.ea == b && g.capture == !!c && g.Oa == d) {                                                       // 1043
      return e;                                                                                                      // 1044
    }                                                                                                                // 1045
  }                                                                                                                  // 1046
  return-1;                                                                                                          // 1047
}                                                                                                                    // 1048
;var ic = !y || y && 9 <= Ma, jc = y && !A("9");                                                                     // 1049
!z || A("528");                                                                                                      // 1050
Ba && A("1.9b") || y && A("8") || Aa && A("9.5") || z && A("528");                                                   // 1051
Ba && !A("8") || y && A("9");                                                                                        // 1052
function P(a, b) {                                                                                                   // 1053
  this.type = a;                                                                                                     // 1054
  this.currentTarget = this.target = b;                                                                              // 1055
  this.defaultPrevented = this.ka = !1;                                                                              // 1056
  this.Yb = !0;                                                                                                      // 1057
}                                                                                                                    // 1058
P.prototype.u = function() {                                                                                         // 1059
};                                                                                                                   // 1060
P.prototype.Ja = function() {                                                                                        // 1061
};                                                                                                                   // 1062
P.prototype.preventDefault = function() {                                                                            // 1063
  this.defaultPrevented = !0;                                                                                        // 1064
  this.Yb = !1;                                                                                                      // 1065
};                                                                                                                   // 1066
function kc(a) {                                                                                                     // 1067
  kc[" "](a);                                                                                                        // 1068
  return a;                                                                                                          // 1069
}                                                                                                                    // 1070
kc[" "] = ca;                                                                                                        // 1071
function Q(a, b) {                                                                                                   // 1072
  Q.ic(this, "constructor", a ? a.type : "");                                                                        // 1073
  this.relatedTarget = this.currentTarget = this.target = null;                                                      // 1074
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;                                                    // 1076
  this.Db = this.state = null;                                                                                       // 1077
  if (a) {                                                                                                           // 1078
    var c = this.type = a.type;                                                                                      // 1079
    this.target = a.target || a.srcElement;                                                                          // 1080
    this.currentTarget = b;                                                                                          // 1081
    var d = a.relatedTarget;                                                                                         // 1082
    if (d) {                                                                                                         // 1083
      if (Ba) {                                                                                                      // 1084
        var e;                                                                                                       // 1085
        a: {                                                                                                         // 1086
          try {                                                                                                      // 1087
            kc(d.nodeName);                                                                                          // 1088
            e = !0;                                                                                                  // 1089
            break a;                                                                                                 // 1090
          } catch (g) {                                                                                              // 1091
          }                                                                                                          // 1092
          e = !1;                                                                                                    // 1093
        }                                                                                                            // 1094
        e || (d = null);                                                                                             // 1095
      }                                                                                                              // 1096
    } else {                                                                                                         // 1097
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);                                   // 1098
    }                                                                                                                // 1099
    this.relatedTarget = d;                                                                                          // 1100
    this.offsetX = z || void 0 !== a.offsetX ? a.offsetX : a.layerX;                                                 // 1101
    this.offsetY = z || void 0 !== a.offsetY ? a.offsetY : a.layerY;                                                 // 1102
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;                                                       // 1103
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;                                                       // 1104
    this.screenX = a.screenX || 0;                                                                                   // 1105
    this.screenY = a.screenY || 0;                                                                                   // 1106
    this.button = a.button;                                                                                          // 1107
    this.keyCode = a.keyCode || 0;                                                                                   // 1108
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);                                                 // 1109
    this.ctrlKey = a.ctrlKey;                                                                                        // 1110
    this.altKey = a.altKey;                                                                                          // 1111
    this.shiftKey = a.shiftKey;                                                                                      // 1112
    this.metaKey = a.metaKey;                                                                                        // 1113
    this.state = a.state;                                                                                            // 1114
    this.Db = a;                                                                                                     // 1115
    a.defaultPrevented && this.preventDefault();                                                                     // 1116
  }                                                                                                                  // 1117
}                                                                                                                    // 1118
s(Q, P);                                                                                                             // 1119
Q.prototype.preventDefault = function() {                                                                            // 1120
  Q.oa.preventDefault.call(this);                                                                                    // 1121
  var a = this.Db;                                                                                                   // 1122
  if (a.preventDefault) {                                                                                            // 1123
    a.preventDefault();                                                                                              // 1124
  } else {                                                                                                           // 1125
    if (a.returnValue = !1, jc) {                                                                                    // 1126
      try {                                                                                                          // 1127
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {                                                     // 1128
          a.keyCode = -1;                                                                                            // 1129
        }                                                                                                            // 1130
      } catch (b) {                                                                                                  // 1131
      }                                                                                                              // 1132
    }                                                                                                                // 1133
  }                                                                                                                  // 1134
};                                                                                                                   // 1135
Q.prototype.u = function() {                                                                                         // 1136
};                                                                                                                   // 1137
var lc = "closure_lm_" + (1E6 * Math.random() | 0), mc = {}, nc = 0;                                                 // 1138
function oc(a, b, c, d, e) {                                                                                         // 1139
  if (m(b)) {                                                                                                        // 1140
    for (var g = 0;g < b.length;g++) {                                                                               // 1141
      oc(a, b[g], c, d, e);                                                                                          // 1142
    }                                                                                                                // 1143
    return null;                                                                                                     // 1144
  }                                                                                                                  // 1145
  c = pc(c);                                                                                                         // 1146
  if (cc(a)) {                                                                                                       // 1147
    a = a.Ra(b, c, d, e);                                                                                            // 1148
  } else {                                                                                                           // 1149
    if (!b) {                                                                                                        // 1150
      throw Error("Invalid event type");                                                                             // 1151
    }                                                                                                                // 1152
    var g = !!d, h = qc(a);                                                                                          // 1153
    h || (a[lc] = h = new O(a));                                                                                     // 1154
    c = h.add(b, c, !1, d, e);                                                                                       // 1155
    c.Ua || (d = rc(), c.Ua = d, d.src = a, d.ea = c, a.addEventListener ? a.addEventListener(b, d, g) : a.attachEvent(b in mc ? mc[b] : mc[b] = "on" + b, d), nc++);
    a = c;                                                                                                           // 1157
  }                                                                                                                  // 1158
  return a;                                                                                                          // 1159
}                                                                                                                    // 1160
function rc() {                                                                                                      // 1161
  var a = sc, b = ic ? function(c) {                                                                                 // 1162
    return a.call(b.src, b.ea, c);                                                                                   // 1163
  } : function(c) {                                                                                                  // 1164
    c = a.call(b.src, b.ea, c);                                                                                      // 1165
    if (!c) {                                                                                                        // 1166
      return c;                                                                                                      // 1167
    }                                                                                                                // 1168
  };                                                                                                                 // 1169
  return b;                                                                                                          // 1170
}                                                                                                                    // 1171
function tc(a, b, c, d, e) {                                                                                         // 1172
  if (m(b)) {                                                                                                        // 1173
    for (var g = 0;g < b.length;g++) {                                                                               // 1174
      tc(a, b[g], c, d, e);                                                                                          // 1175
    }                                                                                                                // 1176
  } else {                                                                                                           // 1177
    c = pc(c), cc(a) ? a.vb(b, c, d, e) : a && (a = qc(a)) && (b = a.xa(b, c, !!d, e)) && uc(b);                     // 1178
  }                                                                                                                  // 1179
}                                                                                                                    // 1180
function uc(a) {                                                                                                     // 1181
  if ("number" == typeof a || !a || a.ma) {                                                                          // 1182
    return!1;                                                                                                        // 1183
  }                                                                                                                  // 1184
  var b = a.src;                                                                                                     // 1185
  if (cc(b)) {                                                                                                       // 1186
    return hc(b.W, a);                                                                                               // 1187
  }                                                                                                                  // 1188
  var c = a.type, d = a.Ua;                                                                                          // 1189
  b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in mc ? mc[c] : mc[c] = "on" + c, d);
  nc--;                                                                                                              // 1191
  (c = qc(b)) ? (hc(c, a), 0 == c.Ga && (c.src = null, b[lc] = null)) : fc(a);                                       // 1192
  return!0;                                                                                                          // 1193
}                                                                                                                    // 1194
function vc(a, b, c, d) {                                                                                            // 1195
  var e = 1;                                                                                                         // 1196
  if (a = qc(a)) {                                                                                                   // 1197
    if (b = a.s[b]) {                                                                                                // 1198
      for (b = bb(b), a = 0;a < b.length;a++) {                                                                      // 1199
        var g = b[a];                                                                                                // 1200
        g && g.capture == c && !g.ma && (e &= !1 !== wc(g, d));                                                      // 1201
      }                                                                                                              // 1202
    }                                                                                                                // 1203
  }                                                                                                                  // 1204
  return Boolean(e);                                                                                                 // 1205
}                                                                                                                    // 1206
function wc(a, b) {                                                                                                  // 1207
  var c = a.ea, d = a.Oa || a.src;                                                                                   // 1208
  a.Ia && uc(a);                                                                                                     // 1209
  return c.call(d, b);                                                                                               // 1210
}                                                                                                                    // 1211
function sc(a, b) {                                                                                                  // 1212
  if (a.ma) {                                                                                                        // 1213
    return!0;                                                                                                        // 1214
  }                                                                                                                  // 1215
  if (!ic) {                                                                                                         // 1216
    var c = b || ba("window.event"), d = new Q(c, this), e = !0;                                                     // 1217
    if (!(0 > c.keyCode || void 0 != c.returnValue)) {                                                               // 1218
      a: {                                                                                                           // 1219
        var g = !1;                                                                                                  // 1220
        if (0 == c.keyCode) {                                                                                        // 1221
          try {                                                                                                      // 1222
            c.keyCode = -1;                                                                                          // 1223
            break a;                                                                                                 // 1224
          } catch (h) {                                                                                              // 1225
            g = !0;                                                                                                  // 1226
          }                                                                                                          // 1227
        }                                                                                                            // 1228
        if (g || void 0 == c.returnValue) {                                                                          // 1229
          c.returnValue = !0;                                                                                        // 1230
        }                                                                                                            // 1231
      }                                                                                                              // 1232
      c = [];                                                                                                        // 1233
      for (g = d.currentTarget;g;g = g.parentNode) {                                                                 // 1234
        c.push(g);                                                                                                   // 1235
      }                                                                                                              // 1236
      for (var g = a.type, k = c.length - 1;!d.ka && 0 <= k;k--) {                                                   // 1237
        d.currentTarget = c[k], e &= vc(c[k], g, !0, d);                                                             // 1238
      }                                                                                                              // 1239
      for (k = 0;!d.ka && k < c.length;k++) {                                                                        // 1240
        d.currentTarget = c[k], e &= vc(c[k], g, !1, d);                                                             // 1241
      }                                                                                                              // 1242
    }                                                                                                                // 1243
    return e;                                                                                                        // 1244
  }                                                                                                                  // 1245
  return wc(a, new Q(b, this));                                                                                      // 1246
}                                                                                                                    // 1247
function qc(a) {                                                                                                     // 1248
  a = a[lc];                                                                                                         // 1249
  return a instanceof O ? a : null;                                                                                  // 1250
}                                                                                                                    // 1251
var xc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);                                                       // 1252
function pc(a) {                                                                                                     // 1253
  return fa(a) ? a : a[xc] || (a[xc] = function(b) {                                                                 // 1254
    return a.handleEvent(b);                                                                                         // 1255
  });                                                                                                                // 1256
}                                                                                                                    // 1257
;function R() {                                                                                                      // 1258
  N.call(this);                                                                                                      // 1259
  this.W = new O(this);                                                                                              // 1260
  this.fc = this;                                                                                                    // 1261
}                                                                                                                    // 1262
s(R, N);                                                                                                             // 1263
R.prototype[bc] = !0;                                                                                                // 1264
f = R.prototype;                                                                                                     // 1265
f.tb = null;                                                                                                         // 1266
f.addEventListener = function(a, b, c, d) {                                                                          // 1267
  oc(this, a, b, c, d);                                                                                              // 1268
};                                                                                                                   // 1269
f.removeEventListener = function(a, b, c, d) {                                                                       // 1270
  tc(this, a, b, c, d);                                                                                              // 1271
};                                                                                                                   // 1272
f.dispatchEvent = function(a) {                                                                                      // 1273
  var b, c = this.tb;                                                                                                // 1274
  if (c) {                                                                                                           // 1275
    for (b = [];c;c = c.tb) {                                                                                        // 1276
      b.push(c);                                                                                                     // 1277
    }                                                                                                                // 1278
  }                                                                                                                  // 1279
  var c = this.fc, d = a.type || a;                                                                                  // 1280
  if (n(a)) {                                                                                                        // 1281
    a = new P(a, c);                                                                                                 // 1282
  } else {                                                                                                           // 1283
    if (a instanceof P) {                                                                                            // 1284
      a.target = a.target || c;                                                                                      // 1285
    } else {                                                                                                         // 1286
      var e = a;                                                                                                     // 1287
      a = new P(d, c);                                                                                               // 1288
      Wa(a, e);                                                                                                      // 1289
    }                                                                                                                // 1290
  }                                                                                                                  // 1291
  var e = !0, g;                                                                                                     // 1292
  if (b) {                                                                                                           // 1293
    for (var h = b.length - 1;!a.ka && 0 <= h;h--) {                                                                 // 1294
      g = a.currentTarget = b[h], e = yc(g, d, !0, a) && e;                                                          // 1295
    }                                                                                                                // 1296
  }                                                                                                                  // 1297
  a.ka || (g = a.currentTarget = c, e = yc(g, d, !0, a) && e, a.ka || (e = yc(g, d, !1, a) && e));                   // 1298
  if (b) {                                                                                                           // 1299
    for (h = 0;!a.ka && h < b.length;h++) {                                                                          // 1300
      g = a.currentTarget = b[h], e = yc(g, d, !1, a) && e;                                                          // 1301
    }                                                                                                                // 1302
  }                                                                                                                  // 1303
  return e;                                                                                                          // 1304
};                                                                                                                   // 1305
f.u = function() {                                                                                                   // 1306
  R.oa.u.call(this);                                                                                                 // 1307
  this.W && this.W.Xa(void 0);                                                                                       // 1308
  this.tb = null;                                                                                                    // 1309
};                                                                                                                   // 1310
f.Ra = function(a, b, c, d) {                                                                                        // 1311
  return this.W.add(String(a), b, !1, c, d);                                                                         // 1312
};                                                                                                                   // 1313
f.vb = function(a, b, c, d) {                                                                                        // 1314
  return this.W.remove(String(a), b, c, d);                                                                          // 1315
};                                                                                                                   // 1316
function yc(a, b, c, d) {                                                                                            // 1317
  b = a.W.s[String(b)];                                                                                              // 1318
  if (!b) {                                                                                                          // 1319
    return!0;                                                                                                        // 1320
  }                                                                                                                  // 1321
  b = bb(b);                                                                                                         // 1322
  for (var e = !0, g = 0;g < b.length;++g) {                                                                         // 1323
    var h = b[g];                                                                                                    // 1324
    if (h && !h.ma && h.capture == c) {                                                                              // 1325
      var k = h.ea, u = h.Oa || h.src;                                                                               // 1326
      h.Ia && hc(a.W, h);                                                                                            // 1327
      e = !1 !== k.call(u, d) && e;                                                                                  // 1328
    }                                                                                                                // 1329
  }                                                                                                                  // 1330
  return e && !1 != d.Yb;                                                                                            // 1331
}                                                                                                                    // 1332
f.xa = function(a, b, c, d) {                                                                                        // 1333
  return this.W.xa(String(a), b, c, d);                                                                              // 1334
};                                                                                                                   // 1335
function zc(a, b) {                                                                                                  // 1336
  R.call(this);                                                                                                      // 1337
  this.da = a || 1;                                                                                                  // 1338
  this.qa = b || l;                                                                                                  // 1339
  this.ib = p(this.Fc, this);                                                                                        // 1340
  this.sb = q();                                                                                                     // 1341
}                                                                                                                    // 1342
s(zc, R);                                                                                                            // 1343
f = zc.prototype;                                                                                                    // 1344
f.enabled = !1;                                                                                                      // 1345
f.l = null;                                                                                                          // 1346
f.setInterval = function(a) {                                                                                        // 1347
  this.da = a;                                                                                                       // 1348
  this.l && this.enabled ? (this.stop(), this.start()) : this.l && this.stop();                                      // 1349
};                                                                                                                   // 1350
f.Fc = function() {                                                                                                  // 1351
  if (this.enabled) {                                                                                                // 1352
    var a = q() - this.sb;                                                                                           // 1353
    0 < a && a < 0.8 * this.da ? this.l = this.qa.setTimeout(this.ib, this.da - a) : (this.l && (this.qa.clearTimeout(this.l), this.l = null), this.dispatchEvent(Ac), this.enabled && (this.l = this.qa.setTimeout(this.ib, this.da), this.sb = q()));
  }                                                                                                                  // 1355
};                                                                                                                   // 1356
f.start = function() {                                                                                               // 1357
  this.enabled = !0;                                                                                                 // 1358
  this.l || (this.l = this.qa.setTimeout(this.ib, this.da), this.sb = q());                                          // 1359
};                                                                                                                   // 1360
f.stop = function() {                                                                                                // 1361
  this.enabled = !1;                                                                                                 // 1362
  this.l && (this.qa.clearTimeout(this.l), this.l = null);                                                           // 1363
};                                                                                                                   // 1364
f.u = function() {                                                                                                   // 1365
  zc.oa.u.call(this);                                                                                                // 1366
  this.stop();                                                                                                       // 1367
  delete this.qa;                                                                                                    // 1368
};                                                                                                                   // 1369
var Ac = "tick";                                                                                                     // 1370
function Bc(a, b, c) {                                                                                               // 1371
  if (fa(a)) {                                                                                                       // 1372
    c && (a = p(a, c));                                                                                              // 1373
  } else {                                                                                                           // 1374
    if (a && "function" == typeof a.handleEvent) {                                                                   // 1375
      a = p(a.handleEvent, a);                                                                                       // 1376
    } else {                                                                                                         // 1377
      throw Error("Invalid listener argument");                                                                      // 1378
    }                                                                                                                // 1379
  }                                                                                                                  // 1380
  return 2147483647 < b ? -1 : l.setTimeout(a, b || 0);                                                              // 1381
}                                                                                                                    // 1382
;function Cc() {                                                                                                     // 1383
}                                                                                                                    // 1384
Cc.prototype.Ab = null;                                                                                              // 1385
function Dc(a) {                                                                                                     // 1386
  var b;                                                                                                             // 1387
  (b = a.Ab) || (b = {}, Ec(a) && (b[0] = !0, b[1] = !0), b = a.Ab = b);                                             // 1388
  return b;                                                                                                          // 1389
}                                                                                                                    // 1390
;var Fc;                                                                                                             // 1391
function Gc() {                                                                                                      // 1392
}                                                                                                                    // 1393
s(Gc, Cc);                                                                                                           // 1394
function Hc(a) {                                                                                                     // 1395
  return(a = Ec(a)) ? new ActiveXObject(a) : new XMLHttpRequest;                                                     // 1396
}                                                                                                                    // 1397
function Ec(a) {                                                                                                     // 1398
  if (!a.Kb && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {                        // 1399
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];                                                                                                  // 1401
      try {                                                                                                          // 1402
        return new ActiveXObject(d), a.Kb = d;                                                                       // 1403
      } catch (e) {                                                                                                  // 1404
      }                                                                                                              // 1405
    }                                                                                                                // 1406
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");       // 1407
  }                                                                                                                  // 1408
  return a.Kb;                                                                                                       // 1409
}                                                                                                                    // 1410
Fc = new Gc;                                                                                                         // 1411
function Ic(a) {                                                                                                     // 1412
  R.call(this);                                                                                                      // 1413
  this.headers = new cb;                                                                                             // 1414
  this.gb = a || null;                                                                                               // 1415
  this.T = !1;                                                                                                       // 1416
  this.fb = this.f = null;                                                                                           // 1417
  this.Mb = this.Qa = "";                                                                                            // 1418
  this.ja = 0;                                                                                                       // 1419
  this.q = "";                                                                                                       // 1420
  this.ca = this.qb = this.Pa = this.nb = !1;                                                                        // 1421
  this.Fa = 0;                                                                                                       // 1422
  this.bb = null;                                                                                                    // 1423
  this.Xb = Jc;                                                                                                      // 1424
  this.cb = this.dc = !1;                                                                                            // 1425
}                                                                                                                    // 1426
s(Ic, R);                                                                                                            // 1427
var Jc = "";                                                                                                         // 1428
Ic.prototype.r = Vb("goog.net.XhrIo");                                                                               // 1429
var Kc = /^https?$/i, Lc = ["POST", "PUT"];                                                                          // 1430
f = Ic.prototype;                                                                                                    // 1431
f.send = function(a, b, c, d) {                                                                                      // 1432
  if (this.f) {                                                                                                      // 1433
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Qa + "; newUri=" + a);              // 1434
  }                                                                                                                  // 1435
  b = b ? b.toUpperCase() : "GET";                                                                                   // 1436
  this.Qa = a;                                                                                                       // 1437
  this.q = "";                                                                                                       // 1438
  this.ja = 0;                                                                                                       // 1439
  this.Mb = b;                                                                                                       // 1440
  this.nb = !1;                                                                                                      // 1441
  this.T = !0;                                                                                                       // 1442
  this.f = this.gb ? Hc(this.gb) : Hc(Fc);                                                                           // 1443
  this.fb = this.gb ? Dc(this.gb) : Dc(Fc);                                                                          // 1444
  this.f.onreadystatechange = p(this.Qb, this);                                                                      // 1445
  try {                                                                                                              // 1446
    J(this.r, S(this, "Opening Xhr")), this.qb = !0, this.f.open(b, String(a), !0), this.qb = !1;                    // 1447
  } catch (e) {                                                                                                      // 1448
    J(this.r, S(this, "Error opening Xhr: " + e.message));                                                           // 1449
    Mc(this, e);                                                                                                     // 1450
    return;                                                                                                          // 1451
  }                                                                                                                  // 1452
  a = c || "";                                                                                                       // 1453
  var g = this.headers.n();                                                                                          // 1454
  d && fb(d, function(a, b) {                                                                                        // 1455
    g.set(b, a);                                                                                                     // 1456
  });                                                                                                                // 1457
  d = Za(g.ba());                                                                                                    // 1458
  c = l.FormData && a instanceof l.FormData;                                                                         // 1459
  !(0 <= Xa(Lc, b)) || d || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");           // 1460
  fb(g, function(a, b) {                                                                                             // 1461
    this.f.setRequestHeader(b, a);                                                                                   // 1462
  }, this);                                                                                                          // 1463
  this.Xb && (this.f.responseType = this.Xb);                                                                        // 1464
  "withCredentials" in this.f && (this.f.withCredentials = this.dc);                                                 // 1465
  try {                                                                                                              // 1466
    Nc(this), 0 < this.Fa && (this.cb = Oc(this.f), J(this.r, S(this, "Will abort after " + this.Fa + "ms if incomplete, xhr2 " + this.cb)), this.cb ? (this.f.timeout = this.Fa, this.f.ontimeout = p(this.pa, this)) : this.bb = Bc(this.pa, this.Fa, this)), J(this.r, S(this, "Sending request")), this.Pa = !0, this.f.send(a), this.Pa = !1;
  } catch (h) {                                                                                                      // 1468
    J(this.r, S(this, "Send error: " + h.message)), Mc(this, h);                                                     // 1469
  }                                                                                                                  // 1470
};                                                                                                                   // 1471
function Oc(a) {                                                                                                     // 1472
  return y && A(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout;                                        // 1473
}                                                                                                                    // 1474
function $a(a) {                                                                                                     // 1475
  return "content-type" == a.toLowerCase();                                                                          // 1476
}                                                                                                                    // 1477
f.pa = function() {                                                                                                  // 1478
  "undefined" != typeof aa && this.f && (this.q = "Timed out after " + this.Fa + "ms, aborting", this.ja = 8, J(this.r, S(this, this.q)), this.dispatchEvent("timeout"), this.abort(8));
};                                                                                                                   // 1480
function Mc(a, b) {                                                                                                  // 1481
  a.T = !1;                                                                                                          // 1482
  a.f && (a.ca = !0, a.f.abort(), a.ca = !1);                                                                        // 1483
  a.q = b;                                                                                                           // 1484
  a.ja = 5;                                                                                                          // 1485
  Pc(a);                                                                                                             // 1486
  Qc(a);                                                                                                             // 1487
}                                                                                                                    // 1488
function Pc(a) {                                                                                                     // 1489
  a.nb || (a.nb = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));                                        // 1490
}                                                                                                                    // 1491
f.abort = function(a) {                                                                                              // 1492
  this.f && this.T && (J(this.r, S(this, "Aborting")), this.T = !1, this.ca = !0, this.f.abort(), this.ca = !1, this.ja = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Qc(this));
};                                                                                                                   // 1494
f.u = function() {                                                                                                   // 1495
  this.f && (this.T && (this.T = !1, this.ca = !0, this.f.abort(), this.ca = !1), Qc(this, !0));                     // 1496
  Ic.oa.u.call(this);                                                                                                // 1497
};                                                                                                                   // 1498
f.Qb = function() {                                                                                                  // 1499
  this.mb || (this.qb || this.Pa || this.ca ? Rc(this) : this.uc());                                                 // 1500
};                                                                                                                   // 1501
f.uc = function() {                                                                                                  // 1502
  Rc(this);                                                                                                          // 1503
};                                                                                                                   // 1504
function Rc(a) {                                                                                                     // 1505
  if (a.T && "undefined" != typeof aa) {                                                                             // 1506
    if (a.fb[1] && 4 == T(a) && 2 == Sc(a)) {                                                                        // 1507
      J(a.r, S(a, "Local request error detected and ignored"));                                                      // 1508
    } else {                                                                                                         // 1509
      if (a.Pa && 4 == T(a)) {                                                                                       // 1510
        Bc(a.Qb, 0, a);                                                                                              // 1511
      } else {                                                                                                       // 1512
        if (a.dispatchEvent("readystatechange"), 4 == T(a)) {                                                        // 1513
          J(a.r, S(a, "Request complete"));                                                                          // 1514
          a.T = !1;                                                                                                  // 1515
          try {                                                                                                      // 1516
            var b = Sc(a), c, d;                                                                                     // 1517
            a: {                                                                                                     // 1518
              switch(b) {                                                                                            // 1519
                case 200:                                                                                            // 1520
                ;                                                                                                    // 1521
                case 201:                                                                                            // 1522
                ;                                                                                                    // 1523
                case 202:                                                                                            // 1524
                ;                                                                                                    // 1525
                case 204:                                                                                            // 1526
                ;                                                                                                    // 1527
                case 206:                                                                                            // 1528
                ;                                                                                                    // 1529
                case 304:                                                                                            // 1530
                ;                                                                                                    // 1531
                case 1223:                                                                                           // 1532
                  d = !0;                                                                                            // 1533
                  break a;                                                                                           // 1534
                default:                                                                                             // 1535
                  d = !1;                                                                                            // 1536
              }                                                                                                      // 1537
            }                                                                                                        // 1538
            if (!(c = d)) {                                                                                          // 1539
              var e;                                                                                                 // 1540
              if (e = 0 === b) {                                                                                     // 1541
                var g = Ra(String(a.Qa))[1] || null;                                                                 // 1542
                if (!g && self.location) {                                                                           // 1543
                  var h = self.location.protocol, g = h.substr(0, h.length - 1)                                      // 1544
                }                                                                                                    // 1545
                e = !Kc.test(g ? g.toLowerCase() : "");                                                              // 1546
              }                                                                                                      // 1547
              c = e;                                                                                                 // 1548
            }                                                                                                        // 1549
            if (c) {                                                                                                 // 1550
              a.dispatchEvent("complete"), a.dispatchEvent("success");                                               // 1551
            } else {                                                                                                 // 1552
              a.ja = 6;                                                                                              // 1553
              var k;                                                                                                 // 1554
              try {                                                                                                  // 1555
                k = 2 < T(a) ? a.f.statusText : "";                                                                  // 1556
              } catch (u) {                                                                                          // 1557
                J(a.r, "Can not get status: " + u.message), k = "";                                                  // 1558
              }                                                                                                      // 1559
              a.q = k + " [" + Sc(a) + "]";                                                                          // 1560
              Pc(a);                                                                                                 // 1561
            }                                                                                                        // 1562
          } finally {                                                                                                // 1563
            Qc(a);                                                                                                   // 1564
          }                                                                                                          // 1565
        }                                                                                                            // 1566
      }                                                                                                              // 1567
    }                                                                                                                // 1568
  }                                                                                                                  // 1569
}                                                                                                                    // 1570
function Qc(a, b) {                                                                                                  // 1571
  if (a.f) {                                                                                                         // 1572
    Nc(a);                                                                                                           // 1573
    var c = a.f, d = a.fb[0] ? ca : null;                                                                            // 1574
    a.f = null;                                                                                                      // 1575
    a.fb = null;                                                                                                     // 1576
    b || a.dispatchEvent("ready");                                                                                   // 1577
    try {                                                                                                            // 1578
      c.onreadystatechange = d;                                                                                      // 1579
    } catch (e) {                                                                                                    // 1580
      (c = a.r) && c.J("Problem encountered resetting onreadystatechange: " + e.message, void 0);                    // 1581
    }                                                                                                                // 1582
  }                                                                                                                  // 1583
}                                                                                                                    // 1584
function Nc(a) {                                                                                                     // 1585
  a.f && a.cb && (a.f.ontimeout = null);                                                                             // 1586
  "number" == typeof a.bb && (l.clearTimeout(a.bb), a.bb = null);                                                    // 1587
}                                                                                                                    // 1588
f.isActive = function() {                                                                                            // 1589
  return!!this.f;                                                                                                    // 1590
};                                                                                                                   // 1591
function T(a) {                                                                                                      // 1592
  return a.f ? a.f.readyState : 0;                                                                                   // 1593
}                                                                                                                    // 1594
function Sc(a) {                                                                                                     // 1595
  try {                                                                                                              // 1596
    return 2 < T(a) ? a.f.status : -1;                                                                               // 1597
  } catch (b) {                                                                                                      // 1598
    return-1;                                                                                                        // 1599
  }                                                                                                                  // 1600
}                                                                                                                    // 1601
function Tc(a) {                                                                                                     // 1602
  try {                                                                                                              // 1603
    return a.f ? a.f.responseText : "";                                                                              // 1604
  } catch (b) {                                                                                                      // 1605
    return J(a.r, "Can not get responseText: " + b.message), "";                                                     // 1606
  }                                                                                                                  // 1607
}                                                                                                                    // 1608
f.Ib = function() {                                                                                                  // 1609
  return n(this.q) ? this.q : String(this.q);                                                                        // 1610
};                                                                                                                   // 1611
function S(a, b) {                                                                                                   // 1612
  return b + " [" + a.Mb + " " + a.Qa + " " + Sc(a) + "]";                                                           // 1613
}                                                                                                                    // 1614
;function Uc() {                                                                                                     // 1615
  this.Wb = q();                                                                                                     // 1616
}                                                                                                                    // 1617
new Uc;                                                                                                              // 1618
Uc.prototype.set = function(a) {                                                                                     // 1619
  this.Wb = a;                                                                                                       // 1620
};                                                                                                                   // 1621
Uc.prototype.reset = function() {                                                                                    // 1622
  this.set(q());                                                                                                     // 1623
};                                                                                                                   // 1624
Uc.prototype.get = function() {                                                                                      // 1625
  return this.Wb;                                                                                                    // 1626
};                                                                                                                   // 1627
function Vc(a) {                                                                                                     // 1628
  N.call(this);                                                                                                      // 1629
  this.e = a;                                                                                                        // 1630
  this.j = {};                                                                                                       // 1631
}                                                                                                                    // 1632
s(Vc, N);                                                                                                            // 1633
var Wc = [];                                                                                                         // 1634
f = Vc.prototype;                                                                                                    // 1635
f.Ra = function(a, b, c, d) {                                                                                        // 1636
  m(b) || (Wc[0] = b, b = Wc);                                                                                       // 1637
  for (var e = 0;e < b.length;e++) {                                                                                 // 1638
    var g = oc(a, b[e], c || this.handleEvent, d || !1, this.e || this);                                             // 1639
    if (!g) {                                                                                                        // 1640
      break;                                                                                                         // 1641
    }                                                                                                                // 1642
    this.j[g.key] = g;                                                                                               // 1643
  }                                                                                                                  // 1644
  return this;                                                                                                       // 1645
};                                                                                                                   // 1646
f.vb = function(a, b, c, d, e) {                                                                                     // 1647
  if (m(b)) {                                                                                                        // 1648
    for (var g = 0;g < b.length;g++) {                                                                               // 1649
      this.vb(a, b[g], c, d, e);                                                                                     // 1650
    }                                                                                                                // 1651
  } else {                                                                                                           // 1652
    c = c || this.handleEvent, e = e || this.e || this, c = pc(c), d = !!d, b = cc(a) ? a.xa(b, c, d, e) : a ? (a = qc(a)) ? a.xa(b, c, d, e) : null : null, b && (uc(b), delete this.j[b.key]);
  }                                                                                                                  // 1654
  return this;                                                                                                       // 1655
};                                                                                                                   // 1656
f.Xa = function() {                                                                                                  // 1657
  var a = this.j, b = uc, c;                                                                                         // 1658
  for (c in a) {                                                                                                     // 1659
    b.call(void 0, a[c], c, a);                                                                                      // 1660
  }                                                                                                                  // 1661
  this.j = {};                                                                                                       // 1662
};                                                                                                                   // 1663
f.u = function() {                                                                                                   // 1664
  Vc.oa.u.call(this);                                                                                                // 1665
  this.Xa();                                                                                                         // 1666
};                                                                                                                   // 1667
f.handleEvent = function() {                                                                                         // 1668
  throw Error("EventHandler.handleEvent not implemented");                                                           // 1669
};                                                                                                                   // 1670
function Xc(a, b, c) {                                                                                               // 1671
  N.call(this);                                                                                                      // 1672
  this.pc = a;                                                                                                       // 1673
  this.da = b;                                                                                                       // 1674
  this.e = c;                                                                                                        // 1675
  this.kc = p(this.vc, this);                                                                                        // 1676
}                                                                                                                    // 1677
s(Xc, N);                                                                                                            // 1678
f = Xc.prototype;                                                                                                    // 1679
f.Za = !1;                                                                                                           // 1680
f.Vb = 0;                                                                                                            // 1681
f.l = null;                                                                                                          // 1682
f.stop = function() {                                                                                                // 1683
  this.l && (l.clearTimeout(this.l), this.l = null, this.Za = !1);                                                   // 1684
};                                                                                                                   // 1685
f.u = function() {                                                                                                   // 1686
  Xc.oa.u.call(this);                                                                                                // 1687
  this.stop();                                                                                                       // 1688
};                                                                                                                   // 1689
f.vc = function() {                                                                                                  // 1690
  this.l = null;                                                                                                     // 1691
  this.Za && !this.Vb && (this.Za = !1, Yc(this));                                                                   // 1692
};                                                                                                                   // 1693
function Yc(a) {                                                                                                     // 1694
  a.l = Bc(a.kc, a.da);                                                                                              // 1695
  a.pc.call(a.e);                                                                                                    // 1696
}                                                                                                                    // 1697
;function U(a, b, c, d, e) {                                                                                         // 1698
  this.b = a;                                                                                                        // 1699
  this.a = b;                                                                                                        // 1700
  this.Y = c;                                                                                                        // 1701
  this.B = d;                                                                                                        // 1702
  this.Ea = e || 1;                                                                                                  // 1703
  this.pa = Zc;                                                                                                      // 1704
  this.ob = new Vc(this);                                                                                            // 1705
  this.Ta = new zc;                                                                                                  // 1706
  this.Ta.setInterval($c);                                                                                           // 1707
}                                                                                                                    // 1708
f = U.prototype;                                                                                                     // 1709
f.v = null;                                                                                                          // 1710
f.F = !1;                                                                                                            // 1711
f.ta = null;                                                                                                         // 1712
f.xb = null;                                                                                                         // 1713
f.Da = null;                                                                                                         // 1714
f.ra = null;                                                                                                         // 1715
f.U = null;                                                                                                          // 1716
f.w = null;                                                                                                          // 1717
f.X = null;                                                                                                          // 1718
f.k = null;                                                                                                          // 1719
f.Ha = 0;                                                                                                            // 1720
f.K = null;                                                                                                          // 1721
f.sa = null;                                                                                                         // 1722
f.q = null;                                                                                                          // 1723
f.g = -1;                                                                                                            // 1724
f.Zb = !0;                                                                                                           // 1725
f.Z = !1;                                                                                                            // 1726
f.la = 0;                                                                                                            // 1727
f.Va = null;                                                                                                         // 1728
var Zc = 45E3, $c = 250;                                                                                             // 1729
function ad(a, b) {                                                                                                  // 1730
  switch(a) {                                                                                                        // 1731
    case 0:                                                                                                          // 1732
      return "Non-200 return code (" + b + ")";                                                                      // 1733
    case 1:                                                                                                          // 1734
      return "XMLHTTP failure (no data)";                                                                            // 1735
    case 2:                                                                                                          // 1736
      return "HttpConnection timeout";                                                                               // 1737
    default:                                                                                                         // 1738
      return "Unknown error";                                                                                        // 1739
  }                                                                                                                  // 1740
}                                                                                                                    // 1741
var bd = {}, cd = {};                                                                                                // 1742
function dd() {                                                                                                      // 1743
  return!y || y && 10 <= Ma;                                                                                         // 1744
}                                                                                                                    // 1745
f = U.prototype;                                                                                                     // 1746
f.S = function(a) {                                                                                                  // 1747
  this.v = a;                                                                                                        // 1748
};                                                                                                                   // 1749
f.setTimeout = function(a) {                                                                                         // 1750
  this.pa = a;                                                                                                       // 1751
};                                                                                                                   // 1752
f.bc = function(a) {                                                                                                 // 1753
  this.la = a;                                                                                                       // 1754
};                                                                                                                   // 1755
function ed(a, b, c) {                                                                                               // 1756
  a.ra = 1;                                                                                                          // 1757
  a.U = G(b.n());                                                                                                    // 1758
  a.X = c;                                                                                                           // 1759
  a.Cb = !0;                                                                                                         // 1760
  fd(a, null);                                                                                                       // 1761
}                                                                                                                    // 1762
function gd(a, b, c, d, e) {                                                                                         // 1763
  a.ra = 1;                                                                                                          // 1764
  a.U = G(b.n());                                                                                                    // 1765
  a.X = null;                                                                                                        // 1766
  a.Cb = c;                                                                                                          // 1767
  e && (a.Zb = !1);                                                                                                  // 1768
  fd(a, d);                                                                                                          // 1769
}                                                                                                                    // 1770
function fd(a, b) {                                                                                                  // 1771
  a.Da = q();                                                                                                        // 1772
  hd(a);                                                                                                             // 1773
  a.w = a.U.n();                                                                                                     // 1774
  sb(a.w, "t", a.Ea);                                                                                                // 1775
  a.Ha = 0;                                                                                                          // 1776
  a.k = a.b.lb(a.b.$a() ? b : null);                                                                                 // 1777
  0 < a.la && (a.Va = new Xc(p(a.ec, a, a.k), a.la));                                                                // 1778
  a.ob.Ra(a.k, "readystatechange", a.Bc);                                                                            // 1779
  var c;                                                                                                             // 1780
  if (a.v) {                                                                                                         // 1781
    c = a.v;                                                                                                         // 1782
    var d = {}, e;                                                                                                   // 1783
    for (e in c) {                                                                                                   // 1784
      d[e] = c[e];                                                                                                   // 1785
    }                                                                                                                // 1786
    c = d;                                                                                                           // 1787
  } else {                                                                                                           // 1788
    c = {};                                                                                                          // 1789
  }                                                                                                                  // 1790
  a.X ? (a.sa = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.k.send(a.w, a.sa, a.X, c)) : (a.sa = "GET", a.Zb && !z && (c.Connection = "close"), a.k.send(a.w, a.sa, null, c));
  a.b.H(id);                                                                                                         // 1792
  if (d = a.X) {                                                                                                     // 1793
    for (c = "", d = d.split("&"), e = 0;e < d.length;e++) {                                                         // 1794
      var g = d[e].split("=");                                                                                       // 1795
      if (1 < g.length) {                                                                                            // 1796
        var h = g[0], g = g[1], k = h.split("_");                                                                    // 1797
        c = 2 <= k.length && "type" == k[1] ? c + (h + "=" + g + "&") : c + (h + "=redacted&");                      // 1798
      }                                                                                                              // 1799
    }                                                                                                                // 1800
  } else {                                                                                                           // 1801
    c = null;                                                                                                        // 1802
  }                                                                                                                  // 1803
  a.a.info("XMLHTTP REQ (" + a.B + ") [attempt " + a.Ea + "]: " + a.sa + "\n" + a.w + "\n" + c);                     // 1804
}                                                                                                                    // 1805
f.Bc = function(a) {                                                                                                 // 1806
  a = a.target;                                                                                                      // 1807
  var b = this.Va;                                                                                                   // 1808
  b && 3 == T(a) ? (this.a.debug("Throttling readystatechange."), b.l || b.Vb ? b.Za = !0 : Yc(b)) : this.ec(a);     // 1809
};                                                                                                                   // 1810
f.ec = function(a) {                                                                                                 // 1811
  try {                                                                                                              // 1812
    if (a == this.k) {                                                                                               // 1813
      a: {                                                                                                           // 1814
        var b = T(this.k), c = this.k.ja, d = Sc(this.k);                                                            // 1815
        if (!dd() || z && !A("420+")) {                                                                              // 1816
          if (4 > b) {                                                                                               // 1817
            break a;                                                                                                 // 1818
          }                                                                                                          // 1819
        } else {                                                                                                     // 1820
          if (3 > b || 3 == b && !Aa && !Tc(this.k)) {                                                               // 1821
            break a;                                                                                                 // 1822
          }                                                                                                          // 1823
        }                                                                                                            // 1824
        this.Z || 4 != b || 7 == c || (8 == c || 0 >= d ? this.b.H(jd) : this.b.H(kd));                              // 1825
        ld(this);                                                                                                    // 1826
        var e = Sc(this.k);                                                                                          // 1827
        this.g = e;                                                                                                  // 1828
        var g = Tc(this.k);                                                                                          // 1829
        g || this.a.debug("No response text for uri " + this.w + " status " + e);                                    // 1830
        this.F = 200 == e;                                                                                           // 1831
        this.a.info("XMLHTTP RESP (" + this.B + ") [ attempt " + this.Ea + "]: " + this.sa + "\n" + this.w + "\n" + b + " " + e);
        this.F ? (4 == b && V(this), this.Cb ? (md(this, b, g), Aa && this.F && 3 == b && (this.ob.Ra(this.Ta, Ac, this.Ac), this.Ta.start())) : (Wb(this.a, this.B, g, null), nd(this, g)), this.F && !this.Z && (4 == b ? this.b.Ba(this) : (this.F = !1, hd(this)))) : (400 == e && 0 < g.indexOf("Unknown SID") ? (this.q = 3, W(), this.a.fa("XMLHTTP Unknown SID (" + this.B + ")")) : (this.q = 0, W(), this.a.fa("XMLHTTP Bad status " + e + " (" + this.B + ")")), V(this), od(this));
      }                                                                                                              // 1834
    } else {                                                                                                         // 1835
      this.a.fa("Called back with an unexpected xmlhttp");                                                           // 1836
    }                                                                                                                // 1837
  } catch (h) {                                                                                                      // 1838
    this.a.debug("Failed call to OnXmlHttpReadyStateChanged_"), this.k && Tc(this.k) ? M(this.a, h, "ResponseText: " + Tc(this.k)) : M(this.a, h, "No response text");
  } finally {                                                                                                        // 1840
  }                                                                                                                  // 1841
};                                                                                                                   // 1842
function md(a, b, c) {                                                                                               // 1843
  for (var d = !0;!a.Z && a.Ha < c.length;) {                                                                        // 1844
    var e = pd(a, c);                                                                                                // 1845
    if (e == cd) {                                                                                                   // 1846
      4 == b && (a.q = 4, W(), d = !1);                                                                              // 1847
      Wb(a.a, a.B, null, "[Incomplete Response]");                                                                   // 1848
      break;                                                                                                         // 1849
    } else {                                                                                                         // 1850
      if (e == bd) {                                                                                                 // 1851
        a.q = 4;                                                                                                     // 1852
        W();                                                                                                         // 1853
        Wb(a.a, a.B, c, "[Invalid Chunk]");                                                                          // 1854
        d = !1;                                                                                                      // 1855
        break;                                                                                                       // 1856
      } else {                                                                                                       // 1857
        Wb(a.a, a.B, e, null), nd(a, e);                                                                             // 1858
      }                                                                                                              // 1859
    }                                                                                                                // 1860
  }                                                                                                                  // 1861
  4 == b && 0 == c.length && (a.q = 1, W(), d = !1);                                                                 // 1862
  a.F = a.F && d;                                                                                                    // 1863
  d || (Wb(a.a, a.B, c, "[Invalid Chunked Response]"), V(a), od(a));                                                 // 1864
}                                                                                                                    // 1865
f.Ac = function() {                                                                                                  // 1866
  var a = T(this.k), b = Tc(this.k);                                                                                 // 1867
  this.Ha < b.length && (ld(this), md(this, a, b), this.F && 4 != a && hd(this));                                    // 1868
};                                                                                                                   // 1869
function pd(a, b) {                                                                                                  // 1870
  var c = a.Ha, d = b.indexOf("\n", c);                                                                              // 1871
  if (-1 == d) {                                                                                                     // 1872
    return cd;                                                                                                       // 1873
  }                                                                                                                  // 1874
  c = Number(b.substring(c, d));                                                                                     // 1875
  if (isNaN(c)) {                                                                                                    // 1876
    return bd;                                                                                                       // 1877
  }                                                                                                                  // 1878
  d += 1;                                                                                                            // 1879
  if (d + c > b.length) {                                                                                            // 1880
    return cd;                                                                                                       // 1881
  }                                                                                                                  // 1882
  var e = b.substr(d, c);                                                                                            // 1883
  a.Ha = d + c;                                                                                                      // 1884
  return e;                                                                                                          // 1885
}                                                                                                                    // 1886
function qd(a, b) {                                                                                                  // 1887
  a.Da = q();                                                                                                        // 1888
  hd(a);                                                                                                             // 1889
  var c = b ? window.location.hostname : "";                                                                         // 1890
  a.w = a.U.n();                                                                                                     // 1891
  F(a.w, "DOMAIN", c);                                                                                               // 1892
  F(a.w, "t", a.Ea);                                                                                                 // 1893
  try {                                                                                                              // 1894
    a.K = new ActiveXObject("htmlfile");                                                                             // 1895
  } catch (d) {                                                                                                      // 1896
    a.a.J("ActiveX blocked");                                                                                        // 1897
    V(a);                                                                                                            // 1898
    a.q = 7;                                                                                                         // 1899
    W();                                                                                                             // 1900
    od(a);                                                                                                           // 1901
    return;                                                                                                          // 1902
  }                                                                                                                  // 1903
  var e = "<html><body>";                                                                                            // 1904
  b && (e += '<script>document.domain="' + c + '"\x3c/script>');                                                     // 1905
  e += "</body></html>";                                                                                             // 1906
  a.K.open();                                                                                                        // 1907
  a.K.write(e);                                                                                                      // 1908
  a.K.close();                                                                                                       // 1909
  a.K.parentWindow.m = p(a.yc, a);                                                                                   // 1910
  a.K.parentWindow.d = p(a.Ub, a, !0);                                                                               // 1911
  a.K.parentWindow.rpcClose = p(a.Ub, a, !1);                                                                        // 1912
  c = a.K.createElement("div");                                                                                      // 1913
  a.K.parentWindow.document.body.appendChild(c);                                                                     // 1914
  c.innerHTML = '<iframe src="' + a.w + '"></iframe>';                                                               // 1915
  a.a.info("TRIDENT REQ (" + a.B + ") [ attempt " + a.Ea + "]: GET\n" + a.w);                                        // 1916
  a.b.H(id);                                                                                                         // 1917
}                                                                                                                    // 1918
f.yc = function(a) {                                                                                                 // 1919
  X(p(this.xc, this, a), 0);                                                                                         // 1920
};                                                                                                                   // 1921
f.xc = function(a) {                                                                                                 // 1922
  if (!this.Z) {                                                                                                     // 1923
    var b = this.a;                                                                                                  // 1924
    b.info("TRIDENT TEXT (" + this.B + "): " + Xb(b, a));                                                            // 1925
    ld(this);                                                                                                        // 1926
    nd(this, a);                                                                                                     // 1927
    hd(this);                                                                                                        // 1928
  }                                                                                                                  // 1929
};                                                                                                                   // 1930
f.Ub = function(a) {                                                                                                 // 1931
  X(p(this.wc, this, a), 0);                                                                                         // 1932
};                                                                                                                   // 1933
f.wc = function(a) {                                                                                                 // 1934
  this.Z || (this.a.info("TRIDENT TEXT (" + this.B + "): " + a ? "success" : "failure"), V(this), this.F = a, this.b.Ba(this), this.b.H(rd));
};                                                                                                                   // 1936
f.cancel = function() {                                                                                              // 1937
  this.Z = !0;                                                                                                       // 1938
  V(this);                                                                                                           // 1939
};                                                                                                                   // 1940
function hd(a) {                                                                                                     // 1941
  a.xb = q() + a.pa;                                                                                                 // 1942
  sd(a, a.pa);                                                                                                       // 1943
}                                                                                                                    // 1944
function sd(a, b) {                                                                                                  // 1945
  if (null != a.ta) {                                                                                                // 1946
    throw Error("WatchDog timer not null");                                                                          // 1947
  }                                                                                                                  // 1948
  a.ta = X(p(a.zc, a), b);                                                                                           // 1949
}                                                                                                                    // 1950
function ld(a) {                                                                                                     // 1951
  a.ta && (l.clearTimeout(a.ta), a.ta = null);                                                                       // 1952
}                                                                                                                    // 1953
f.zc = function() {                                                                                                  // 1954
  this.ta = null;                                                                                                    // 1955
  var a = q();                                                                                                       // 1956
  0 <= a - this.xb ? (this.F && this.a.J("Received watchdog timeout even though request loaded successfully"), this.a.info("TIMEOUT: " + this.w), 2 != this.ra && this.b.H(jd), V(this), this.q = 2, W(), od(this)) : (this.a.fa("WatchDog timer called too early"), sd(this, this.xb - a));
};                                                                                                                   // 1958
function od(a) {                                                                                                     // 1959
  a.b.Lb() || a.Z || a.b.Ba(a);                                                                                      // 1960
}                                                                                                                    // 1961
function V(a) {                                                                                                      // 1962
  ld(a);                                                                                                             // 1963
  var b = a.Va;                                                                                                      // 1964
  b && "function" == typeof b.Ja && b.Ja();                                                                          // 1965
  a.Va = null;                                                                                                       // 1966
  a.Ta.stop();                                                                                                       // 1967
  a.ob.Xa();                                                                                                         // 1968
  a.k && (b = a.k, a.k = null, b.abort(), b.Ja());                                                                   // 1969
  a.K && (a.K = null);                                                                                               // 1970
}                                                                                                                    // 1971
f.Ib = function() {                                                                                                  // 1972
  return this.q;                                                                                                     // 1973
};                                                                                                                   // 1974
function nd(a, b) {                                                                                                  // 1975
  try {                                                                                                              // 1976
    a.b.Rb(a, b), a.b.H(rd);                                                                                         // 1977
  } catch (c) {                                                                                                      // 1978
    M(a.a, c, "Error in httprequest callback");                                                                      // 1979
  }                                                                                                                  // 1980
}                                                                                                                    // 1981
;function td(a, b, c, d, e) {                                                                                        // 1982
  (new L).debug("TestLoadImageWithRetries: " + e);                                                                   // 1983
  if (0 == d) {                                                                                                      // 1984
    c(!1);                                                                                                           // 1985
  } else {                                                                                                           // 1986
    var g = e || 0;                                                                                                  // 1987
    d--;                                                                                                             // 1988
    ud(a, b, function(e) {                                                                                           // 1989
      e ? c(!0) : l.setTimeout(function() {                                                                          // 1990
        td(a, b, c, d, g);                                                                                           // 1991
      }, g);                                                                                                         // 1992
    });                                                                                                              // 1993
  }                                                                                                                  // 1994
}                                                                                                                    // 1995
function ud(a, b, c) {                                                                                               // 1996
  var d = new L;                                                                                                     // 1997
  d.debug("TestLoadImage: loading " + a);                                                                            // 1998
  var e = new Image;                                                                                                 // 1999
  e.onload = function() {                                                                                            // 2000
    try {                                                                                                            // 2001
      d.debug("TestLoadImage: loaded"), vd(e), c(!0);                                                                // 2002
    } catch (a) {                                                                                                    // 2003
      M(d, a);                                                                                                       // 2004
    }                                                                                                                // 2005
  };                                                                                                                 // 2006
  e.onerror = function() {                                                                                           // 2007
    try {                                                                                                            // 2008
      d.debug("TestLoadImage: error"), vd(e), c(!1);                                                                 // 2009
    } catch (a) {                                                                                                    // 2010
      M(d, a);                                                                                                       // 2011
    }                                                                                                                // 2012
  };                                                                                                                 // 2013
  e.onabort = function() {                                                                                           // 2014
    try {                                                                                                            // 2015
      d.debug("TestLoadImage: abort"), vd(e), c(!1);                                                                 // 2016
    } catch (a) {                                                                                                    // 2017
      M(d, a);                                                                                                       // 2018
    }                                                                                                                // 2019
  };                                                                                                                 // 2020
  e.ontimeout = function() {                                                                                         // 2021
    try {                                                                                                            // 2022
      d.debug("TestLoadImage: timeout"), vd(e), c(!1);                                                               // 2023
    } catch (a) {                                                                                                    // 2024
      M(d, a);                                                                                                       // 2025
    }                                                                                                                // 2026
  };                                                                                                                 // 2027
  l.setTimeout(function() {                                                                                          // 2028
    if (e.ontimeout) {                                                                                               // 2029
      e.ontimeout();                                                                                                 // 2030
    }                                                                                                                // 2031
  }, b);                                                                                                             // 2032
  e.src = a;                                                                                                         // 2033
}                                                                                                                    // 2034
function vd(a) {                                                                                                     // 2035
  a.onload = null;                                                                                                   // 2036
  a.onerror = null;                                                                                                  // 2037
  a.onabort = null;                                                                                                  // 2038
  a.ontimeout = null;                                                                                                // 2039
}                                                                                                                    // 2040
;function wd(a, b) {                                                                                                 // 2041
  this.b = a;                                                                                                        // 2042
  this.a = b;                                                                                                        // 2043
  this.P = new Zb(0, !0);                                                                                            // 2044
}                                                                                                                    // 2045
f = wd.prototype;                                                                                                    // 2046
f.v = null;                                                                                                          // 2047
f.A = null;                                                                                                          // 2048
f.Wa = !1;                                                                                                           // 2049
f.cc = null;                                                                                                         // 2050
f.La = null;                                                                                                         // 2051
f.rb = null;                                                                                                         // 2052
f.I = null;                                                                                                          // 2053
f.c = null;                                                                                                          // 2054
f.g = -1;                                                                                                            // 2055
f.L = null;                                                                                                          // 2056
f.ua = null;                                                                                                         // 2057
f.S = function(a) {                                                                                                  // 2058
  this.v = a;                                                                                                        // 2059
};                                                                                                                   // 2060
f.ac = function(a) {                                                                                                 // 2061
  this.P = a;                                                                                                        // 2062
};                                                                                                                   // 2063
f.kb = function(a) {                                                                                                 // 2064
  this.I = a;                                                                                                        // 2065
  a = xd(this.b, this.I);                                                                                            // 2066
  W();                                                                                                               // 2067
  this.cc = q();                                                                                                     // 2068
  var b = this.b.Gb;                                                                                                 // 2069
  null != b ? (this.L = this.b.correctHostPrefix(b[0]), (this.ua = b[1]) ? (this.c = 1, yd(this)) : (this.c = 2, zd(this))) : (sb(a, "MODE", "init"), this.A = new U(this, this.a, void 0, void 0, void 0), this.A.S(this.v), gd(this.A, a, !1, null, !0), this.c = 0);
};                                                                                                                   // 2071
function yd(a) {                                                                                                     // 2072
  var b = Ad(a.b, a.ua, "/mail/images/cleardot.gif");                                                                // 2073
  G(b);                                                                                                              // 2074
  td(b.toString(), 5E3, p(a.lc, a), 3, 2E3);                                                                         // 2075
  a.H(id);                                                                                                           // 2076
}                                                                                                                    // 2077
f.lc = function(a) {                                                                                                 // 2078
  if (a) {                                                                                                           // 2079
    this.c = 2, zd(this);                                                                                            // 2080
  } else {                                                                                                           // 2081
    W();                                                                                                             // 2082
    var b = this.b;                                                                                                  // 2083
    b.a.debug("Test Connection Blocked");                                                                            // 2084
    b.g = b.V.g;                                                                                                     // 2085
    Z(b, 9);                                                                                                         // 2086
  }                                                                                                                  // 2087
  a && this.H(kd);                                                                                                   // 2088
};                                                                                                                   // 2089
function zd(a) {                                                                                                     // 2090
  a.a.debug("TestConnection: starting stage 2");                                                                     // 2091
  var b = a.b.Dc;                                                                                                    // 2092
  if (null != b) {                                                                                                   // 2093
    a.a.debug("TestConnection: skipping stage 2, precomputed result is " + b ? "Buffered" : "Unbuffered"), W(), b ? (W(), Bd(a.b, a, !1)) : (W(), Bd(a.b, a, !0));
  } else {                                                                                                           // 2095
    if (a.A = new U(a, a.a, void 0, void 0, void 0), a.A.S(a.v), b = Cd(a.b, a.L, a.I), W(), dd()) {                 // 2096
      sb(b, "TYPE", "xmlhttp"), gd(a.A, b, !1, a.L, !1);                                                             // 2097
    } else {                                                                                                         // 2098
      sb(b, "TYPE", "html");                                                                                         // 2099
      var c = a.A;                                                                                                   // 2100
      a = Boolean(a.L);                                                                                              // 2101
      c.ra = 3;                                                                                                      // 2102
      c.U = G(b.n());                                                                                                // 2103
      qd(c, a);                                                                                                      // 2104
    }                                                                                                                // 2105
  }                                                                                                                  // 2106
}                                                                                                                    // 2107
f.lb = function(a) {                                                                                                 // 2108
  return this.b.lb(a);                                                                                               // 2109
};                                                                                                                   // 2110
f.abort = function() {                                                                                               // 2111
  this.A && (this.A.cancel(), this.A = null);                                                                        // 2112
  this.g = -1;                                                                                                       // 2113
};                                                                                                                   // 2114
f.Lb = function() {                                                                                                  // 2115
  return!1;                                                                                                          // 2116
};                                                                                                                   // 2117
f.Rb = function(a, b) {                                                                                              // 2118
  this.g = a.g;                                                                                                      // 2119
  if (0 == this.c) {                                                                                                 // 2120
    if (this.a.debug("TestConnection: Got data for stage 1"), b) {                                                   // 2121
      try {                                                                                                          // 2122
        var c = this.P.parse(b);                                                                                     // 2123
      } catch (d) {                                                                                                  // 2124
        M(this.a, d);                                                                                                // 2125
        Dd(this.b, this);                                                                                            // 2126
        return;                                                                                                      // 2127
      }                                                                                                              // 2128
      this.L = this.b.correctHostPrefix(c[0]);                                                                       // 2129
      this.ua = c[1];                                                                                                // 2130
    } else {                                                                                                         // 2131
      this.a.debug("TestConnection: Null responseText"), Dd(this.b, this);                                           // 2132
    }                                                                                                                // 2133
  } else {                                                                                                           // 2134
    if (2 == this.c) {                                                                                               // 2135
      if (this.Wa) {                                                                                                 // 2136
        W(), this.rb = q();                                                                                          // 2137
      } else {                                                                                                       // 2138
        if ("11111" == b) {                                                                                          // 2139
          if (W(), this.Wa = !0, this.La = q(), c = this.La - this.cc, dd() || 500 > c) {                            // 2140
            this.g = 200, this.A.cancel(), this.a.debug("Test connection succeeded; using streaming connection"), W(), Bd(this.b, this, !0);
          }                                                                                                          // 2142
        } else {                                                                                                     // 2143
          W(), this.La = this.rb = q(), this.Wa = !1;                                                                // 2144
        }                                                                                                            // 2145
      }                                                                                                              // 2146
    }                                                                                                                // 2147
  }                                                                                                                  // 2148
};                                                                                                                   // 2149
f.Ba = function() {                                                                                                  // 2150
  this.g = this.A.g;                                                                                                 // 2151
  if (!this.A.F) {                                                                                                   // 2152
    this.a.debug("TestConnection: request failed, in state " + this.c), 0 == this.c ? W() : 2 == this.c && W(), Dd(this.b, this);
  } else {                                                                                                           // 2154
    if (0 == this.c) {                                                                                               // 2155
      this.a.debug("TestConnection: request complete for initial check"), this.ua ? (this.c = 1, yd(this)) : (this.c = 2, zd(this));
    } else {                                                                                                         // 2157
      if (2 == this.c) {                                                                                             // 2158
        this.a.debug("TestConnection: request complete for stage 2");                                                // 2159
        var a = !1;                                                                                                  // 2160
        (a = dd() ? this.Wa : 200 > this.rb - this.La ? !1 : !0) ? (this.a.debug("Test connection succeeded; using streaming connection"), W(), Bd(this.b, this, !0)) : (this.a.debug("Test connection failed; not using streaming"), W(), Bd(this.b, this, !1));
      }                                                                                                              // 2162
    }                                                                                                                // 2163
  }                                                                                                                  // 2164
};                                                                                                                   // 2165
f.$a = function() {                                                                                                  // 2166
  return this.b.$a();                                                                                                // 2167
};                                                                                                                   // 2168
f.isActive = function() {                                                                                            // 2169
  return this.b.isActive();                                                                                          // 2170
};                                                                                                                   // 2171
f.H = function(a) {                                                                                                  // 2172
  this.b.H(a);                                                                                                       // 2173
};                                                                                                                   // 2174
function Ed(a, b, c) {                                                                                               // 2175
  this.Bb = a || null;                                                                                               // 2176
  this.c = Fd;                                                                                                       // 2177
  this.t = [];                                                                                                       // 2178
  this.Q = [];                                                                                                       // 2179
  this.a = new L;                                                                                                    // 2180
  this.P = new Zb(0, !0);                                                                                            // 2181
  this.Gb = b || null;                                                                                               // 2182
  this.Dc = null != c ? c : null;                                                                                    // 2183
}                                                                                                                    // 2184
function Gd(a, b) {                                                                                                  // 2185
  this.Ob = a;                                                                                                       // 2186
  this.map = b;                                                                                                      // 2187
}                                                                                                                    // 2188
f = Ed.prototype;                                                                                                    // 2189
f.v = null;                                                                                                          // 2190
f.wa = null;                                                                                                         // 2191
f.p = null;                                                                                                          // 2192
f.i = null;                                                                                                          // 2193
f.I = null;                                                                                                          // 2194
f.Ma = null;                                                                                                         // 2195
f.zb = null;                                                                                                         // 2196
f.L = null;                                                                                                          // 2197
f.hc = !0;                                                                                                           // 2198
f.Aa = 0;                                                                                                            // 2199
f.sc = 0;                                                                                                            // 2200
f.Ka = !1;                                                                                                           // 2201
f.e = null;                                                                                                          // 2202
f.G = null;                                                                                                          // 2203
f.M = null;                                                                                                          // 2204
f.$ = null;                                                                                                          // 2205
f.V = null;                                                                                                          // 2206
f.wb = null;                                                                                                         // 2207
f.gc = !0;                                                                                                           // 2208
f.ya = -1;                                                                                                           // 2209
f.Nb = -1;                                                                                                           // 2210
f.g = -1;                                                                                                            // 2211
f.aa = 0;                                                                                                            // 2212
f.ga = 0;                                                                                                            // 2213
f.jc = 5E3;                                                                                                          // 2214
f.Cc = 1E4;                                                                                                          // 2215
f.pb = 2;                                                                                                            // 2216
f.Hb = 2E4;                                                                                                          // 2217
f.la = 0;                                                                                                            // 2218
f.ab = !1;                                                                                                           // 2219
f.ha = 8;                                                                                                            // 2220
var Fd = 1, Hd = new R;                                                                                              // 2221
function Id(a) {                                                                                                     // 2222
  P.call(this, "statevent", a);                                                                                      // 2223
}                                                                                                                    // 2224
s(Id, P);                                                                                                            // 2225
function Jd(a, b) {                                                                                                  // 2226
  P.call(this, "timingevent", a);                                                                                    // 2227
  this.size = b;                                                                                                     // 2228
}                                                                                                                    // 2229
s(Jd, P);                                                                                                            // 2230
var id = 1, kd = 2, jd = 3, rd = 4;                                                                                  // 2231
function Kd(a) {                                                                                                     // 2232
  P.call(this, "serverreachability", a);                                                                             // 2233
}                                                                                                                    // 2234
s(Kd, P);                                                                                                            // 2235
var Yb = "y2f%";                                                                                                     // 2236
f = Ed.prototype;                                                                                                    // 2237
f.kb = function(a, b, c, d, e) {                                                                                     // 2238
  this.a.debug("connect()");                                                                                         // 2239
  W();                                                                                                               // 2240
  this.I = b;                                                                                                        // 2241
  this.wa = c || {};                                                                                                 // 2242
  d && void 0 !== e && (this.wa.OSID = d, this.wa.OAID = e);                                                         // 2243
  this.a.debug("connectTest_()");                                                                                    // 2244
  Ld(this) && (this.V = new wd(this, this.a), this.V.S(this.v), this.V.ac(this.P), this.V.kb(a));                    // 2245
};                                                                                                                   // 2246
f.disconnect = function() {                                                                                          // 2247
  this.a.debug("disconnect()");                                                                                      // 2248
  Md(this);                                                                                                          // 2249
  if (3 == this.c) {                                                                                                 // 2250
    var a = this.Aa++, b = this.Ma.n();                                                                              // 2251
    F(b, "SID", this.Y);                                                                                             // 2252
    F(b, "RID", a);                                                                                                  // 2253
    F(b, "TYPE", "terminate");                                                                                       // 2254
    Nd(this, b);                                                                                                     // 2255
    a = new U(this, this.a, this.Y, a, void 0);                                                                      // 2256
    a.ra = 2;                                                                                                        // 2257
    a.U = G(b.n());                                                                                                  // 2258
    (new Image).src = a.U;                                                                                           // 2259
    a.Da = q();                                                                                                      // 2260
    hd(a);                                                                                                           // 2261
  }                                                                                                                  // 2262
  Od(this);                                                                                                          // 2263
};                                                                                                                   // 2264
function Md(a) {                                                                                                     // 2265
  a.V && (a.V.abort(), a.V = null);                                                                                  // 2266
  a.i && (a.i.cancel(), a.i = null);                                                                                 // 2267
  a.M && (l.clearTimeout(a.M), a.M = null);                                                                          // 2268
  Pd(a);                                                                                                             // 2269
  a.p && (a.p.cancel(), a.p = null);                                                                                 // 2270
  a.G && (l.clearTimeout(a.G), a.G = null);                                                                          // 2271
}                                                                                                                    // 2272
f.S = function(a) {                                                                                                  // 2273
  this.v = a;                                                                                                        // 2274
};                                                                                                                   // 2275
f.bc = function(a) {                                                                                                 // 2276
  this.la = a;                                                                                                       // 2277
};                                                                                                                   // 2278
f.Lb = function() {                                                                                                  // 2279
  return 0 == this.c;                                                                                                // 2280
};                                                                                                                   // 2281
f.ac = function(a) {                                                                                                 // 2282
  this.P = a;                                                                                                        // 2283
};                                                                                                                   // 2284
function Qd(a) {                                                                                                     // 2285
  a.p || a.G || (a.G = X(p(a.Tb, a), 0), a.aa = 0);                                                                  // 2286
}                                                                                                                    // 2287
f.Tb = function(a) {                                                                                                 // 2288
  this.G = null;                                                                                                     // 2289
  this.a.debug("startForwardChannel_");                                                                              // 2290
  if (Ld(this)) {                                                                                                    // 2291
    if (this.c == Fd) {                                                                                              // 2292
      if (a) {                                                                                                       // 2293
        this.a.J("Not supposed to retry the open");                                                                  // 2294
      } else {                                                                                                       // 2295
        this.a.debug("open_()");                                                                                     // 2296
        this.Aa = Math.floor(1E5 * Math.random());                                                                   // 2297
        a = this.Aa++;                                                                                               // 2298
        var b = new U(this, this.a, "", a, void 0);                                                                  // 2299
        b.S(this.v);                                                                                                 // 2300
        var c = Rd(this), d = this.Ma.n();                                                                           // 2301
        F(d, "RID", a);                                                                                              // 2302
        this.Bb && F(d, "CVER", this.Bb);                                                                            // 2303
        Nd(this, d);                                                                                                 // 2304
        ed(b, d, c);                                                                                                 // 2305
        this.p = b;                                                                                                  // 2306
        this.c = 2;                                                                                                  // 2307
      }                                                                                                              // 2308
    } else {                                                                                                         // 2309
      3 == this.c && (a ? Sd(this, a) : 0 == this.t.length ? this.a.debug("startForwardChannel_ returned: nothing to send") : this.p ? this.a.J("startForwardChannel_ returned: connection already in progress") : (Sd(this), this.a.debug("startForwardChannel_ finished, sent request")));
    }                                                                                                                // 2311
  }                                                                                                                  // 2312
};                                                                                                                   // 2313
function Sd(a, b) {                                                                                                  // 2314
  var c, d;                                                                                                          // 2315
  b ? 6 < a.ha ? (a.t = a.Q.concat(a.t), a.Q.length = 0, c = a.Aa - 1, d = Rd(a)) : (c = b.B, d = b.X) : (c = a.Aa++, d = Rd(a));
  var e = a.Ma.n();                                                                                                  // 2317
  F(e, "SID", a.Y);                                                                                                  // 2318
  F(e, "RID", c);                                                                                                    // 2319
  F(e, "AID", a.ya);                                                                                                 // 2320
  Nd(a, e);                                                                                                          // 2321
  c = new U(a, a.a, a.Y, c, a.aa + 1);                                                                               // 2322
  c.S(a.v);                                                                                                          // 2323
  c.setTimeout(Math.round(0.5 * a.Hb) + Math.round(0.5 * a.Hb * Math.random()));                                     // 2324
  a.p = c;                                                                                                           // 2325
  ed(c, e, d);                                                                                                       // 2326
}                                                                                                                    // 2327
function Nd(a, b) {                                                                                                  // 2328
  if (a.e) {                                                                                                         // 2329
    var c = a.e.getAdditionalParams(a);                                                                              // 2330
    c && fb(c, function(a, c) {                                                                                      // 2331
      F(b, c, a);                                                                                                    // 2332
    });                                                                                                              // 2333
  }                                                                                                                  // 2334
}                                                                                                                    // 2335
function Rd(a) {                                                                                                     // 2336
  var b = Math.min(a.t.length, 1E3), c = ["count=" + b], d;                                                          // 2337
  6 < a.ha && 0 < b ? (d = a.t[0].Ob, c.push("ofs=" + d)) : d = 0;                                                   // 2338
  for (var e = 0;e < b;e++) {                                                                                        // 2339
    var g = a.t[e].Ob, h = a.t[e].map, g = 6 >= a.ha ? e : g - d;                                                    // 2340
    try {                                                                                                            // 2341
      fb(h, function(a, b) {                                                                                         // 2342
        c.push("req" + g + "_" + b + "=" + encodeURIComponent(a));                                                   // 2343
      });                                                                                                            // 2344
    } catch (k) {                                                                                                    // 2345
      c.push("req" + g + "_type=" + encodeURIComponent("_badmap")), a.e && a.e.badMapError(a, h);                    // 2346
    }                                                                                                                // 2347
  }                                                                                                                  // 2348
  a.Q = a.Q.concat(a.t.splice(0, b));                                                                                // 2349
  return c.join("&");                                                                                                // 2350
}                                                                                                                    // 2351
function Td(a) {                                                                                                     // 2352
  a.i || a.M || (a.yb = 1, a.M = X(p(a.Sb, a), 0), a.ga = 0);                                                        // 2353
}                                                                                                                    // 2354
function Ud(a) {                                                                                                     // 2355
  if (a.i || a.M) {                                                                                                  // 2356
    return a.a.J("Request already in progress"), !1;                                                                 // 2357
  }                                                                                                                  // 2358
  if (3 <= a.ga) {                                                                                                   // 2359
    return!1;                                                                                                        // 2360
  }                                                                                                                  // 2361
  a.a.debug("Going to retry GET");                                                                                   // 2362
  a.yb++;                                                                                                            // 2363
  a.M = X(p(a.Sb, a), Vd(a, a.ga));                                                                                  // 2364
  a.ga++;                                                                                                            // 2365
  return!0;                                                                                                          // 2366
}                                                                                                                    // 2367
f.Sb = function() {                                                                                                  // 2368
  this.M = null;                                                                                                     // 2369
  if (Ld(this)) {                                                                                                    // 2370
    this.a.debug("Creating new HttpRequest");                                                                        // 2371
    this.i = new U(this, this.a, this.Y, "rpc", this.yb);                                                            // 2372
    this.i.S(this.v);                                                                                                // 2373
    this.i.bc(this.la);                                                                                              // 2374
    var a = this.zb.n();                                                                                             // 2375
    F(a, "RID", "rpc");                                                                                              // 2376
    F(a, "SID", this.Y);                                                                                             // 2377
    F(a, "CI", this.wb ? "0" : "1");                                                                                 // 2378
    F(a, "AID", this.ya);                                                                                            // 2379
    Nd(this, a);                                                                                                     // 2380
    if (dd()) {                                                                                                      // 2381
      F(a, "TYPE", "xmlhttp"), gd(this.i, a, !0, this.L, !1);                                                        // 2382
    } else {                                                                                                         // 2383
      F(a, "TYPE", "html");                                                                                          // 2384
      var b = this.i, c = Boolean(this.L);                                                                           // 2385
      b.ra = 3;                                                                                                      // 2386
      b.U = G(a.n());                                                                                                // 2387
      qd(b, c);                                                                                                      // 2388
    }                                                                                                                // 2389
    this.a.debug("New Request created");                                                                             // 2390
  }                                                                                                                  // 2391
};                                                                                                                   // 2392
function Ld(a) {                                                                                                     // 2393
  if (a.e) {                                                                                                         // 2394
    var b = a.e.okToMakeRequest(a);                                                                                  // 2395
    if (0 != b) {                                                                                                    // 2396
      return a.a.debug("Handler returned error code from okToMakeRequest"), Z(a, b), !1;                             // 2397
    }                                                                                                                // 2398
  }                                                                                                                  // 2399
  return!0;                                                                                                          // 2400
}                                                                                                                    // 2401
function Bd(a, b, c) {                                                                                               // 2402
  a.a.debug("Test Connection Finished");                                                                             // 2403
  a.wb = a.gc && c;                                                                                                  // 2404
  a.g = b.g;                                                                                                         // 2405
  a.a.debug("connectChannel_()");                                                                                    // 2406
  a.mc(Fd, 0);                                                                                                       // 2407
  a.Ma = xd(a, a.I);                                                                                                 // 2408
  Qd(a);                                                                                                             // 2409
}                                                                                                                    // 2410
function Dd(a, b) {                                                                                                  // 2411
  a.a.debug("Test Connection Failed");                                                                               // 2412
  a.g = b.g;                                                                                                         // 2413
  Z(a, 2);                                                                                                           // 2414
}                                                                                                                    // 2415
f.Rb = function(a, b) {                                                                                              // 2416
  if (0 != this.c && (this.i == a || this.p == a)) {                                                                 // 2417
    if (this.g = a.g, this.p == a && 3 == this.c) {                                                                  // 2418
      if (7 < this.ha) {                                                                                             // 2419
        var c;                                                                                                       // 2420
        try {                                                                                                        // 2421
          c = this.P.parse(b);                                                                                       // 2422
        } catch (d) {                                                                                                // 2423
          c = null;                                                                                                  // 2424
        }                                                                                                            // 2425
        if (m(c) && 3 == c.length) {                                                                                 // 2426
          var e = c;                                                                                                 // 2427
          if (0 == e[0]) {                                                                                           // 2428
            a: {                                                                                                     // 2429
              if (this.a.debug("Server claims our backchannel is missing."), this.M) {                               // 2430
                this.a.debug("But we are currently starting the request.");                                          // 2431
              } else {                                                                                               // 2432
                if (this.i) {                                                                                        // 2433
                  if (this.i.Da + 3E3 < this.p.Da) {                                                                 // 2434
                    Pd(this), this.i.cancel(), this.i = null;                                                        // 2435
                  } else {                                                                                           // 2436
                    break a;                                                                                         // 2437
                  }                                                                                                  // 2438
                } else {                                                                                             // 2439
                  this.a.fa("We do not have a BackChannel established");                                             // 2440
                }                                                                                                    // 2441
                Ud(this);                                                                                            // 2442
                W();                                                                                                 // 2443
              }                                                                                                      // 2444
            }                                                                                                        // 2445
          } else {                                                                                                   // 2446
            this.Nb = e[1], c = this.Nb - this.ya, 0 < c && (e = e[2], this.a.debug(e + " bytes (in " + c + " arrays) are outstanding on the BackChannel"), 37500 > e && this.wb && 0 == this.ga && !this.$ && (this.$ = X(p(this.tc, this), 6E3)));
          }                                                                                                          // 2448
        } else {                                                                                                     // 2449
          this.a.debug("Bad POST response data returned"), Z(this, 11);                                              // 2450
        }                                                                                                            // 2451
      } else {                                                                                                       // 2452
        b != Yb && (this.a.debug("Bad data returned - missing/invald magic cookie"), Z(this, 11));                   // 2453
      }                                                                                                              // 2454
    } else {                                                                                                         // 2455
      if (this.i == a && Pd(this), !/^[\s\xa0]*$/.test(b)) {                                                         // 2456
        c = this.P.parse(b);                                                                                         // 2457
        for (var e = this.e && this.e.channelHandleMultipleArrays ? [] : null, g = 0;g < c.length;g++) {             // 2458
          var h = c[g];                                                                                              // 2459
          this.ya = h[0];                                                                                            // 2460
          h = h[1];                                                                                                  // 2461
          2 == this.c ? "c" == h[0] ? (this.Y = h[1], this.L = this.correctHostPrefix(h[2]), h = h[3], this.ha = null != h ? h : 6, this.c = 3, this.e && this.e.channelOpened(this), this.zb = Cd(this, this.L, this.I), Td(this)) : "stop" == h[0] && Z(this, 7) : 3 == this.c && ("stop" == h[0] ? (e && 0 != e.length && (this.e.channelHandleMultipleArrays(this, e), e.length = 0), Z(this, 7)) : "noop" != h[0] && (e ? e.push(h) : this.e && this.e.channelHandleArray(this, h)), this.ga = 0);
        }                                                                                                            // 2463
        e && 0 != e.length && this.e.channelHandleMultipleArrays(this, e);                                           // 2464
      }                                                                                                              // 2465
    }                                                                                                                // 2466
  }                                                                                                                  // 2467
};                                                                                                                   // 2468
f.correctHostPrefix = function(a) {                                                                                  // 2469
  return this.hc ? this.e ? this.e.correctHostPrefix(a) : a : null;                                                  // 2470
};                                                                                                                   // 2471
f.tc = function() {                                                                                                  // 2472
  null != this.$ && (this.$ = null, this.i.cancel(), this.i = null, Ud(this), W());                                  // 2473
};                                                                                                                   // 2474
function Pd(a) {                                                                                                     // 2475
  null != a.$ && (l.clearTimeout(a.$), a.$ = null);                                                                  // 2476
}                                                                                                                    // 2477
f.Ba = function(a) {                                                                                                 // 2478
  this.a.debug("Request complete");                                                                                  // 2479
  var b;                                                                                                             // 2480
  if (this.i == a) {                                                                                                 // 2481
    Pd(this), this.i = null, b = 2;                                                                                  // 2482
  } else {                                                                                                           // 2483
    if (this.p == a) {                                                                                               // 2484
      this.p = null, b = 1;                                                                                          // 2485
    } else {                                                                                                         // 2486
      return;                                                                                                        // 2487
    }                                                                                                                // 2488
  }                                                                                                                  // 2489
  this.g = a.g;                                                                                                      // 2490
  if (0 != this.c) {                                                                                                 // 2491
    if (a.F) {                                                                                                       // 2492
      1 == b ? (q(), Hd.dispatchEvent(new Jd(Hd, a.X ? a.X.length : 0)), Qd(this), this.Q.length = 0) : Td(this);    // 2493
    } else {                                                                                                         // 2494
      var c = a.Ib();                                                                                                // 2495
      if (3 == c || 7 == c || 0 == c && 0 < this.g) {                                                                // 2496
        this.a.debug("Not retrying due to error type");                                                              // 2497
      } else {                                                                                                       // 2498
        this.a.debug("Maybe retrying, last error: " + ad(c, this.g));                                                // 2499
        var d;                                                                                                       // 2500
        if (d = 1 == b) {                                                                                            // 2501
          this.p || this.G ? (this.a.J("Request already in progress"), d = !1) : this.c == Fd || this.aa >= (this.Ka ? 0 : this.pb) ? d = !1 : (this.a.debug("Going to retry POST"), this.G = X(p(this.Tb, this, a), Vd(this, this.aa)), this.aa++, d = !0);
        }                                                                                                            // 2503
        if (d || 2 == b && Ud(this)) {                                                                               // 2504
          return;                                                                                                    // 2505
        }                                                                                                            // 2506
        this.a.debug("Exceeded max number of retries");                                                              // 2507
      }                                                                                                              // 2508
      this.a.debug("Error: HTTP request failed");                                                                    // 2509
      switch(c) {                                                                                                    // 2510
        case 1:                                                                                                      // 2511
          Z(this, 5);                                                                                                // 2512
          break;                                                                                                     // 2513
        case 4:                                                                                                      // 2514
          Z(this, 10);                                                                                               // 2515
          break;                                                                                                     // 2516
        case 3:                                                                                                      // 2517
          Z(this, 6);                                                                                                // 2518
          break;                                                                                                     // 2519
        case 7:                                                                                                      // 2520
          Z(this, 12);                                                                                               // 2521
          break;                                                                                                     // 2522
        default:                                                                                                     // 2523
          Z(this, 2);                                                                                                // 2524
      }                                                                                                              // 2525
    }                                                                                                                // 2526
  }                                                                                                                  // 2527
};                                                                                                                   // 2528
function Vd(a, b) {                                                                                                  // 2529
  var c = a.jc + Math.floor(Math.random() * a.Cc);                                                                   // 2530
  a.isActive() || (a.a.debug("Inactive channel"), c *= 2);                                                           // 2531
  return c * b;                                                                                                      // 2532
}                                                                                                                    // 2533
f.mc = function(a) {                                                                                                 // 2534
  if (!(0 <= Xa(arguments, this.c))) {                                                                               // 2535
    throw Error("Unexpected channel state: " + this.c);                                                              // 2536
  }                                                                                                                  // 2537
};                                                                                                                   // 2538
function Z(a, b) {                                                                                                   // 2539
  a.a.info("Error code " + b);                                                                                       // 2540
  if (2 == b || 9 == b) {                                                                                            // 2541
    var c = null;                                                                                                    // 2542
    a.e && (c = a.e.getNetworkTestImageUri(a));                                                                      // 2543
    var d = p(a.Ec, a);                                                                                              // 2544
    c || (c = new D("//www.google.com/images/cleardot.gif"), G(c));                                                  // 2545
    ud(c.toString(), 1E4, d);                                                                                        // 2546
  } else {                                                                                                           // 2547
    W();                                                                                                             // 2548
  }                                                                                                                  // 2549
  Wd(a, b);                                                                                                          // 2550
}                                                                                                                    // 2551
f.Ec = function(a) {                                                                                                 // 2552
  a ? (this.a.info("Successfully pinged google.com"), W()) : (this.a.info("Failed to ping google.com"), W(), Wd(this, 8));
};                                                                                                                   // 2554
function Wd(a, b) {                                                                                                  // 2555
  a.a.debug("HttpChannel: error - " + b);                                                                            // 2556
  a.c = 0;                                                                                                           // 2557
  a.e && a.e.channelError(a, b);                                                                                     // 2558
  Od(a);                                                                                                             // 2559
  Md(a);                                                                                                             // 2560
}                                                                                                                    // 2561
function Od(a) {                                                                                                     // 2562
  a.c = 0;                                                                                                           // 2563
  a.g = -1;                                                                                                          // 2564
  if (a.e) {                                                                                                         // 2565
    if (0 == a.Q.length && 0 == a.t.length) {                                                                        // 2566
      a.e.channelClosed(a);                                                                                          // 2567
    } else {                                                                                                         // 2568
      a.a.debug("Number of undelivered maps, pending: " + a.Q.length + ", outgoing: " + a.t.length);                 // 2569
      var b = bb(a.Q), c = bb(a.t);                                                                                  // 2570
      a.Q.length = 0;                                                                                                // 2571
      a.t.length = 0;                                                                                                // 2572
      a.e.channelClosed(a, b, c);                                                                                    // 2573
    }                                                                                                                // 2574
  }                                                                                                                  // 2575
}                                                                                                                    // 2576
function xd(a, b) {                                                                                                  // 2577
  var c = Ad(a, null, b);                                                                                            // 2578
  a.a.debug("GetForwardChannelUri: " + c);                                                                           // 2579
  return c;                                                                                                          // 2580
}                                                                                                                    // 2581
function Cd(a, b, c) {                                                                                               // 2582
  b = Ad(a, a.$a() ? b : null, c);                                                                                   // 2583
  a.a.debug("GetBackChannelUri: " + b);                                                                              // 2584
  return b;                                                                                                          // 2585
}                                                                                                                    // 2586
function Ad(a, b, c) {                                                                                               // 2587
  var d = ub(c);                                                                                                     // 2588
  if ("" != d.ia) {                                                                                                  // 2589
    b && hb(d, b + "." + d.ia), ib(d, d.Ca);                                                                         // 2590
  } else {                                                                                                           // 2591
    var e = window.location, d = vb(e.protocol, b ? b + "." + e.hostname : e.hostname, e.port, c)                    // 2592
  }                                                                                                                  // 2593
  a.wa && fb(a.wa, function(a, b) {                                                                                  // 2594
    F(d, b, a);                                                                                                      // 2595
  });                                                                                                                // 2596
  F(d, "VER", a.ha);                                                                                                 // 2597
  Nd(a, d);                                                                                                          // 2598
  return d;                                                                                                          // 2599
}                                                                                                                    // 2600
f.lb = function(a) {                                                                                                 // 2601
  if (a && !this.ab) {                                                                                               // 2602
    throw Error("Can't create secondary domain capable XhrIo object.");                                              // 2603
  }                                                                                                                  // 2604
  a = new Ic;                                                                                                        // 2605
  a.dc = this.ab;                                                                                                    // 2606
  return a;                                                                                                          // 2607
};                                                                                                                   // 2608
f.isActive = function() {                                                                                            // 2609
  return!!this.e && this.e.isActive(this);                                                                           // 2610
};                                                                                                                   // 2611
function X(a, b) {                                                                                                   // 2612
  if (!fa(a)) {                                                                                                      // 2613
    throw Error("Fn must not be null and must be a function");                                                       // 2614
  }                                                                                                                  // 2615
  return l.setTimeout(function() {                                                                                   // 2616
    a();                                                                                                             // 2617
  }, b);                                                                                                             // 2618
}                                                                                                                    // 2619
f.H = function() {                                                                                                   // 2620
  Hd.dispatchEvent(new Kd(Hd));                                                                                      // 2621
};                                                                                                                   // 2622
function W() {                                                                                                       // 2623
  Hd.dispatchEvent(new Id(Hd));                                                                                      // 2624
}                                                                                                                    // 2625
f.$a = function() {                                                                                                  // 2626
  return this.ab || !dd();                                                                                           // 2627
};                                                                                                                   // 2628
function Xd() {                                                                                                      // 2629
}                                                                                                                    // 2630
f = Xd.prototype;                                                                                                    // 2631
f.channelHandleMultipleArrays = null;                                                                                // 2632
f.okToMakeRequest = function() {                                                                                     // 2633
  return 0;                                                                                                          // 2634
};                                                                                                                   // 2635
f.channelOpened = function() {                                                                                       // 2636
};                                                                                                                   // 2637
f.channelHandleArray = function() {                                                                                  // 2638
};                                                                                                                   // 2639
f.channelError = function() {                                                                                        // 2640
};                                                                                                                   // 2641
f.channelClosed = function() {                                                                                       // 2642
};                                                                                                                   // 2643
f.getAdditionalParams = function() {                                                                                 // 2644
  return{};                                                                                                          // 2645
};                                                                                                                   // 2646
f.getNetworkTestImageUri = function() {                                                                              // 2647
  return null;                                                                                                       // 2648
};                                                                                                                   // 2649
f.isActive = function() {                                                                                            // 2650
  return!0;                                                                                                          // 2651
};                                                                                                                   // 2652
f.badMapError = function() {                                                                                         // 2653
};                                                                                                                   // 2654
f.correctHostPrefix = function(a) {                                                                                  // 2655
  return a;                                                                                                          // 2656
};                                                                                                                   // 2657
var $, Yd, Zd = [].slice;                                                                                            // 2658
Yd = {0:"Ok", 4:"User is logging out", 6:"Unknown session ID", 7:"Stopped by server", 8:"General network error", 2:"Request failed", 9:"Blocked by a network administrator", 5:"No data from server", 10:"Got bad data from the server", 11:"Got a bad response from the server"};
$ = function(a, b) {                                                                                                 // 2660
  var c, d, e, g, h, k, u, K, v, r, Ia, w, Y;                                                                        // 2661
  r = this;                                                                                                          // 2662
  a || (a = "channel");                                                                                              // 2663
  a.match(/:\/\//) && a.replace(/^ws/, "http");                                                                      // 2664
  b || (b = {});                                                                                                     // 2665
  m(b || "string" === typeof b) && (b = {});                                                                         // 2666
  K = b.reconnectTime || 3E3;                                                                                        // 2667
  c = b.extraHeaders || null;                                                                                        // 2668
  d = b.extraParams || null;                                                                                         // 2669
  null !== b.affinity && (d || (d = {}), b.affinityParam || (b.affinityParam = "a"), this.affinity = b.affinity || sa(), d[b.affinityParam] = this.affinity);
  Y = function(a) {                                                                                                  // 2671
    r.readyState = r.readyState = a;                                                                                 // 2672
  };                                                                                                                 // 2673
  Y(this.CLOSED);                                                                                                    // 2674
  w = null;                                                                                                          // 2675
  k = b.Hc;                                                                                                          // 2676
  e = function() {                                                                                                   // 2677
    var a, b;                                                                                                        // 2678
    b = arguments[0];                                                                                                // 2679
    a = 2 <= arguments.length ? Zd.call(arguments, 1) : [];                                                          // 2680
    try {                                                                                                            // 2681
      return "function" === typeof r[b] ? r[b].apply(r, a) : void 0;                                                 // 2682
    } catch (c) {                                                                                                    // 2683
      throw a = c, "undefined" !== typeof console && null !== console && console.error(a.stack), a;                  // 2684
    }                                                                                                                // 2685
  };                                                                                                                 // 2686
  g = new Xd;                                                                                                        // 2687
  g.channelOpened = function() {                                                                                     // 2688
    k = w;                                                                                                           // 2689
    Y($.OPEN);                                                                                                       // 2690
    return e("onopen");                                                                                              // 2691
  };                                                                                                                 // 2692
  h = null;                                                                                                          // 2693
  g.channelError = function(a, b) {                                                                                  // 2694
    var c;                                                                                                           // 2695
    c = Yd[b];                                                                                                       // 2696
    h = b;                                                                                                           // 2697
    r.readyState !== $.CLOSED && Y($.hb);                                                                            // 2698
    try {                                                                                                            // 2699
      return e("onerror", c, b);                                                                                     // 2700
    } catch (d) {                                                                                                    // 2701
    }                                                                                                                // 2702
  };                                                                                                                 // 2703
  v = null;                                                                                                          // 2704
  g.channelClosed = function(a, c, d) {                                                                              // 2705
    var g;                                                                                                           // 2706
    if (r.readyState !== $.CLOSED) {                                                                                 // 2707
      w = null;                                                                                                      // 2708
      a = h ? Yd[h] : "Closed";                                                                                      // 2709
      Y($.CLOSED);                                                                                                   // 2710
      b.reconnect && 7 !== h && 0 !== h && (g = 6 === h ? 0 : K, clearTimeout(v), v = setTimeout(u, g));             // 2711
      try {                                                                                                          // 2712
        e("onclose", a, c, d);                                                                                       // 2713
      } catch (k) {                                                                                                  // 2714
      }                                                                                                              // 2715
      return h = null;                                                                                               // 2716
    }                                                                                                                // 2717
  };                                                                                                                 // 2718
  g.channelHandleArray = function(a, b) {                                                                            // 2719
    return e("onmessage", b);                                                                                        // 2720
  };                                                                                                                 // 2721
  u = function() {                                                                                                   // 2722
    if (w) {                                                                                                         // 2723
      throw Error("Reconnect() called from invalid state");                                                          // 2724
    }                                                                                                                // 2725
    Y($.CONNECTING);                                                                                                 // 2726
    e("onconnecting");                                                                                               // 2727
    clearTimeout(v);                                                                                                 // 2728
    w = new Ed(b.appVersion, null != k ? k.Gb : void 0);                                                             // 2729
    b.crossDomainXhr && (w.ab = !0);                                                                                 // 2730
    w.e = g;                                                                                                         // 2731
    c && w.S(c);                                                                                                     // 2732
    h = null;                                                                                                        // 2733
    if (b.failFast) {                                                                                                // 2734
      var t = w;                                                                                                     // 2735
      t.Ka = !0;                                                                                                     // 2736
      t.a.info("setFailFast: true");                                                                                 // 2737
      (t.p || t.G) && t.aa > (t.Ka ? 0 : t.pb) && (t.a.info("Retry count " + t.aa + " > new maxRetries " + (t.Ka ? 0 : t.pb) + ". Fail immediately!"), t.p ? (t.p.cancel(), t.Ba(t.p)) : (l.clearTimeout(t.G), t.G = null, Z(t, 2)));
    }                                                                                                                // 2739
    return w.kb("" + a + "/test", "" + a + "/bind", d, null != k ? k.Y : void 0, null != k ? k.ya : void 0);         // 2740
  };                                                                                                                 // 2741
  this.open = function() {                                                                                           // 2742
    if (r.readyState !== r.CLOSED) {                                                                                 // 2743
      throw Error("Already open");                                                                                   // 2744
    }                                                                                                                // 2745
    return u();                                                                                                      // 2746
  };                                                                                                                 // 2747
  this.close = function() {                                                                                          // 2748
    clearTimeout(v);                                                                                                 // 2749
    h = 0;                                                                                                           // 2750
    if (r.readyState !== $.CLOSED) {                                                                                 // 2751
      return Y($.hb), w.disconnect();                                                                                // 2752
    }                                                                                                                // 2753
  };                                                                                                                 // 2754
  this.sendMap = Ia = function(a) {                                                                                  // 2755
    var b;                                                                                                           // 2756
    if ((b = r.readyState) === $.hb || b === $.CLOSED) {                                                             // 2757
      throw Error("Cannot send to a closed connection");                                                             // 2758
    }                                                                                                                // 2759
    b = w;                                                                                                           // 2760
    if (0 == b.c) {                                                                                                  // 2761
      throw Error("Invalid operation: sending map when state is closed");                                            // 2762
    }                                                                                                                // 2763
    1E3 == b.t.length && b.a.J("Already have 1000 queued maps upon queueing " + zb(a));                              // 2764
    b.t.push(new Gd(b.sc++, a));                                                                                     // 2765
    2 != b.c && 3 != b.c || Qd(b);                                                                                   // 2766
  };                                                                                                                 // 2767
  this.send = function(a) {                                                                                          // 2768
    return "string" === typeof a ? Ia({_S:a}) : Ia({JSON:zb(a)});                                                    // 2769
  };                                                                                                                 // 2770
  u();                                                                                                               // 2771
  return this;                                                                                                       // 2772
};                                                                                                                   // 2773
$.prototype.CONNECTING = $.CONNECTING = $.CONNECTING = 0;                                                            // 2774
$.prototype.OPEN = $.OPEN = $.OPEN = 1;                                                                              // 2775
$.prototype.CLOSING = $.CLOSING = $.hb = 2;                                                                          // 2776
$.prototype.CLOSED = $.CLOSED = $.CLOSED = 3;                                                                        // 2777
("undefined" !== typeof exports && null !== exports ? exports : window).BCSocket = $;                                // 2778
                                                                                                                     // 2779
})();                                                                                                                // 2780
                                                                                                                     // 2781
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/mizzao_sharejs/.npm/package/node_modules/share/webclient/share.uncompressed.js                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// Generated by CoffeeScript 1.6.2                                                                                   // 1
(function() {                                                                                                        // 2
  var BCSocket, Connection, Doc, MicroEvent, ReconnectingWebSocket, SockJS, WebSocket, append, bootstrapTransform, checkValidComponent, checkValidOp, exports, hasBCSocket, hasSockJS, invertComponent, nextTick, socketImpl, strInject, text, transformComponent, transformPosition, types,
    __slice = [].slice,                                                                                              // 4
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },                              // 5
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
                                                                                                                     // 7
  window.sharejs = exports = {                                                                                       // 8
    'version': '0.6.3'                                                                                               // 9
  };                                                                                                                 // 10
                                                                                                                     // 11
  if (typeof WEB === 'undefined') {                                                                                  // 12
    window.WEB = true;                                                                                               // 13
  }                                                                                                                  // 14
                                                                                                                     // 15
  nextTick = typeof WEB !== "undefined" && WEB !== null ? function(fn) {                                             // 16
    return setTimeout(fn, 0);                                                                                        // 17
  } : process['nextTick'];                                                                                           // 18
                                                                                                                     // 19
  MicroEvent = (function() {                                                                                         // 20
    function MicroEvent() {}                                                                                         // 21
                                                                                                                     // 22
    MicroEvent.prototype.on = function(event, f) {                                                                   // 23
      var _base;                                                                                                     // 24
                                                                                                                     // 25
      this._events || (this._events = {});                                                                           // 26
      (_base = this._events)[event] || (_base[event] = []);                                                          // 27
      this._events[event].push(f);                                                                                   // 28
      return this;                                                                                                   // 29
    };                                                                                                               // 30
                                                                                                                     // 31
    MicroEvent.prototype.removeListener = function(event, fct) {                                                     // 32
      var i, listeners, _base,                                                                                       // 33
        _this = this;                                                                                                // 34
                                                                                                                     // 35
      this._events || (this._events = {});                                                                           // 36
      listeners = ((_base = this._events)[event] || (_base[event] = []));                                            // 37
      i = 0;                                                                                                         // 38
      while (i < listeners.length) {                                                                                 // 39
        if (listeners[i] === fct) {                                                                                  // 40
          listeners[i] = void 0;                                                                                     // 41
        }                                                                                                            // 42
        i++;                                                                                                         // 43
      }                                                                                                              // 44
      nextTick(function() {                                                                                          // 45
        var x;                                                                                                       // 46
                                                                                                                     // 47
        return _this._events[event] = (function() {                                                                  // 48
          var _i, _len, _ref, _results;                                                                              // 49
                                                                                                                     // 50
          _ref = this._events[event];                                                                                // 51
          _results = [];                                                                                             // 52
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                        // 53
            x = _ref[_i];                                                                                            // 54
            if (x) {                                                                                                 // 55
              _results.push(x);                                                                                      // 56
            }                                                                                                        // 57
          }                                                                                                          // 58
          return _results;                                                                                           // 59
        }).call(_this);                                                                                              // 60
      });                                                                                                            // 61
      return this;                                                                                                   // 62
    };                                                                                                               // 63
                                                                                                                     // 64
    MicroEvent.prototype.emit = function() {                                                                         // 65
      var args, event, fn, _i, _len, _ref, _ref1;                                                                    // 66
                                                                                                                     // 67
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];                          // 68
      if (!((_ref = this._events) != null ? _ref[event] : void 0)) {                                                 // 69
        return this;                                                                                                 // 70
      }                                                                                                              // 71
      _ref1 = this._events[event];                                                                                   // 72
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {                                                           // 73
        fn = _ref1[_i];                                                                                              // 74
        if (fn) {                                                                                                    // 75
          fn.apply(this, args);                                                                                      // 76
        }                                                                                                            // 77
      }                                                                                                              // 78
      return this;                                                                                                   // 79
    };                                                                                                               // 80
                                                                                                                     // 81
    MicroEvent.prototype.once = function(event, f) {                                                                 // 82
      var listener,                                                                                                  // 83
        _this = this;                                                                                                // 84
                                                                                                                     // 85
      return this.on(event, listener = function() {                                                                  // 86
        var args;                                                                                                    // 87
                                                                                                                     // 88
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                              // 89
        _this.removeListener(event, listener);                                                                       // 90
        return f.apply(_this, args);                                                                                 // 91
      });                                                                                                            // 92
    };                                                                                                               // 93
                                                                                                                     // 94
    return MicroEvent;                                                                                               // 95
                                                                                                                     // 96
  })();                                                                                                              // 97
                                                                                                                     // 98
  MicroEvent.mixin = function(obj) {                                                                                 // 99
    var proto;                                                                                                       // 100
                                                                                                                     // 101
    proto = obj.prototype || obj;                                                                                    // 102
    proto.on = MicroEvent.prototype.on;                                                                              // 103
    proto.removeListener = MicroEvent.prototype.removeListener;                                                      // 104
    proto.emit = MicroEvent.prototype.emit;                                                                          // 105
    proto.once = MicroEvent.prototype.once;                                                                          // 106
    return obj;                                                                                                      // 107
  };                                                                                                                 // 108
                                                                                                                     // 109
  if (typeof WEB === "undefined" || WEB === null) {                                                                  // 110
    module.exports = MicroEvent;                                                                                     // 111
  }                                                                                                                  // 112
                                                                                                                     // 113
  exports['_bt'] = bootstrapTransform = function(type, transformComponent, checkValidOp, append) {                   // 114
    var transformComponentX, transformX;                                                                             // 115
                                                                                                                     // 116
    transformComponentX = function(left, right, destLeft, destRight) {                                               // 117
      transformComponent(destLeft, left, right, 'left');                                                             // 118
      return transformComponent(destRight, right, left, 'right');                                                    // 119
    };                                                                                                               // 120
    type.transformX = type['transformX'] = transformX = function(leftOp, rightOp) {                                  // 121
      var k, l, l_, newLeftOp, newRightOp, nextC, r, r_, rightComponent, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1;
                                                                                                                     // 123
      checkValidOp(leftOp);                                                                                          // 124
      checkValidOp(rightOp);                                                                                         // 125
      newRightOp = [];                                                                                               // 126
      for (_i = 0, _len = rightOp.length; _i < _len; _i++) {                                                         // 127
        rightComponent = rightOp[_i];                                                                                // 128
        newLeftOp = [];                                                                                              // 129
        k = 0;                                                                                                       // 130
        while (k < leftOp.length) {                                                                                  // 131
          nextC = [];                                                                                                // 132
          transformComponentX(leftOp[k], rightComponent, newLeftOp, nextC);                                          // 133
          k++;                                                                                                       // 134
          if (nextC.length === 1) {                                                                                  // 135
            rightComponent = nextC[0];                                                                               // 136
          } else if (nextC.length === 0) {                                                                           // 137
            _ref = leftOp.slice(k);                                                                                  // 138
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {                                                    // 139
              l = _ref[_j];                                                                                          // 140
              append(newLeftOp, l);                                                                                  // 141
            }                                                                                                        // 142
            rightComponent = null;                                                                                   // 143
            break;                                                                                                   // 144
          } else {                                                                                                   // 145
            _ref1 = transformX(leftOp.slice(k), nextC), l_ = _ref1[0], r_ = _ref1[1];                                // 146
            for (_k = 0, _len2 = l_.length; _k < _len2; _k++) {                                                      // 147
              l = l_[_k];                                                                                            // 148
              append(newLeftOp, l);                                                                                  // 149
            }                                                                                                        // 150
            for (_l = 0, _len3 = r_.length; _l < _len3; _l++) {                                                      // 151
              r = r_[_l];                                                                                            // 152
              append(newRightOp, r);                                                                                 // 153
            }                                                                                                        // 154
            rightComponent = null;                                                                                   // 155
            break;                                                                                                   // 156
          }                                                                                                          // 157
        }                                                                                                            // 158
        if (rightComponent != null) {                                                                                // 159
          append(newRightOp, rightComponent);                                                                        // 160
        }                                                                                                            // 161
        leftOp = newLeftOp;                                                                                          // 162
      }                                                                                                              // 163
      return [leftOp, newRightOp];                                                                                   // 164
    };                                                                                                               // 165
    return type.transform = type['transform'] = function(op, otherOp, type) {                                        // 166
      var left, right, _, _ref, _ref1;                                                                               // 167
                                                                                                                     // 168
      if (!(type === 'left' || type === 'right')) {                                                                  // 169
        throw new Error("type must be 'left' or 'right'");                                                           // 170
      }                                                                                                              // 171
      if (otherOp.length === 0) {                                                                                    // 172
        return op;                                                                                                   // 173
      }                                                                                                              // 174
      if (op.length === 1 && otherOp.length === 1) {                                                                 // 175
        return transformComponent([], op[0], otherOp[0], type);                                                      // 176
      }                                                                                                              // 177
      if (type === 'left') {                                                                                         // 178
        _ref = transformX(op, otherOp), left = _ref[0], _ = _ref[1];                                                 // 179
        return left;                                                                                                 // 180
      } else {                                                                                                       // 181
        _ref1 = transformX(otherOp, op), _ = _ref1[0], right = _ref1[1];                                             // 182
        return right;                                                                                                // 183
      }                                                                                                              // 184
    };                                                                                                               // 185
  };                                                                                                                 // 186
                                                                                                                     // 187
  if (typeof WEB === 'undefined') {                                                                                  // 188
    exports.bootstrapTransform = bootstrapTransform;                                                                 // 189
  }                                                                                                                  // 190
                                                                                                                     // 191
  text = {};                                                                                                         // 192
                                                                                                                     // 193
  text.name = 'text';                                                                                                // 194
                                                                                                                     // 195
  text.create = function() {                                                                                         // 196
    return '';                                                                                                       // 197
  };                                                                                                                 // 198
                                                                                                                     // 199
  strInject = function(s1, pos, s2) {                                                                                // 200
    return s1.slice(0, pos) + s2 + s1.slice(pos);                                                                    // 201
  };                                                                                                                 // 202
                                                                                                                     // 203
  checkValidComponent = function(c) {                                                                                // 204
    var d_type, i_type;                                                                                              // 205
                                                                                                                     // 206
    if (typeof c.p !== 'number') {                                                                                   // 207
      throw new Error('component missing position field');                                                           // 208
    }                                                                                                                // 209
    i_type = typeof c.i;                                                                                             // 210
    d_type = typeof c.d;                                                                                             // 211
    if (!((i_type === 'string') ^ (d_type === 'string'))) {                                                          // 212
      throw new Error('component needs an i or d field');                                                            // 213
    }                                                                                                                // 214
    if (!(c.p >= 0)) {                                                                                               // 215
      throw new Error('position cannot be negative');                                                                // 216
    }                                                                                                                // 217
  };                                                                                                                 // 218
                                                                                                                     // 219
  checkValidOp = function(op) {                                                                                      // 220
    var c, _i, _len;                                                                                                 // 221
                                                                                                                     // 222
    for (_i = 0, _len = op.length; _i < _len; _i++) {                                                                // 223
      c = op[_i];                                                                                                    // 224
      checkValidComponent(c);                                                                                        // 225
    }                                                                                                                // 226
    return true;                                                                                                     // 227
  };                                                                                                                 // 228
                                                                                                                     // 229
  text.apply = function(snapshot, op) {                                                                              // 230
    var component, deleted, _i, _len;                                                                                // 231
                                                                                                                     // 232
    checkValidOp(op);                                                                                                // 233
    for (_i = 0, _len = op.length; _i < _len; _i++) {                                                                // 234
      component = op[_i];                                                                                            // 235
      if (component.i != null) {                                                                                     // 236
        snapshot = strInject(snapshot, component.p, component.i);                                                    // 237
      } else {                                                                                                       // 238
        deleted = snapshot.slice(component.p, component.p + component.d.length);                                     // 239
        if (component.d !== deleted) {                                                                               // 240
          throw new Error("Delete component '" + component.d + "' does not match deleted text '" + deleted + "'");   // 241
        }                                                                                                            // 242
        snapshot = snapshot.slice(0, component.p) + snapshot.slice(component.p + component.d.length);                // 243
      }                                                                                                              // 244
    }                                                                                                                // 245
    return snapshot;                                                                                                 // 246
  };                                                                                                                 // 247
                                                                                                                     // 248
  text._append = append = function(newOp, c) {                                                                       // 249
    var last, _ref, _ref1;                                                                                           // 250
                                                                                                                     // 251
    if (c.i === '' || c.d === '') {                                                                                  // 252
      return;                                                                                                        // 253
    }                                                                                                                // 254
    if (newOp.length === 0) {                                                                                        // 255
      return newOp.push(c);                                                                                          // 256
    } else {                                                                                                         // 257
      last = newOp[newOp.length - 1];                                                                                // 258
      if ((last.i != null) && (c.i != null) && (last.p <= (_ref = c.p) && _ref <= (last.p + last.i.length))) {       // 259
        return newOp[newOp.length - 1] = {                                                                           // 260
          i: strInject(last.i, c.p - last.p, c.i),                                                                   // 261
          p: last.p                                                                                                  // 262
        };                                                                                                           // 263
      } else if ((last.d != null) && (c.d != null) && (c.p <= (_ref1 = last.p) && _ref1 <= (c.p + c.d.length))) {    // 264
        return newOp[newOp.length - 1] = {                                                                           // 265
          d: strInject(c.d, last.p - c.p, last.d),                                                                   // 266
          p: c.p                                                                                                     // 267
        };                                                                                                           // 268
      } else {                                                                                                       // 269
        return newOp.push(c);                                                                                        // 270
      }                                                                                                              // 271
    }                                                                                                                // 272
  };                                                                                                                 // 273
                                                                                                                     // 274
  text.compose = function(op1, op2) {                                                                                // 275
    var c, newOp, _i, _len;                                                                                          // 276
                                                                                                                     // 277
    checkValidOp(op1);                                                                                               // 278
    checkValidOp(op2);                                                                                               // 279
    newOp = op1.slice();                                                                                             // 280
    for (_i = 0, _len = op2.length; _i < _len; _i++) {                                                               // 281
      c = op2[_i];                                                                                                   // 282
      append(newOp, c);                                                                                              // 283
    }                                                                                                                // 284
    return newOp;                                                                                                    // 285
  };                                                                                                                 // 286
                                                                                                                     // 287
  text.compress = function(op) {                                                                                     // 288
    return text.compose([], op);                                                                                     // 289
  };                                                                                                                 // 290
                                                                                                                     // 291
  text.normalize = function(op) {                                                                                    // 292
    var c, newOp, _i, _len, _ref;                                                                                    // 293
                                                                                                                     // 294
    newOp = [];                                                                                                      // 295
    if ((op.i != null) || (op.p != null)) {                                                                          // 296
      op = [op];                                                                                                     // 297
    }                                                                                                                // 298
    for (_i = 0, _len = op.length; _i < _len; _i++) {                                                                // 299
      c = op[_i];                                                                                                    // 300
      if ((_ref = c.p) == null) {                                                                                    // 301
        c.p = 0;                                                                                                     // 302
      }                                                                                                              // 303
      append(newOp, c);                                                                                              // 304
    }                                                                                                                // 305
    return newOp;                                                                                                    // 306
  };                                                                                                                 // 307
                                                                                                                     // 308
  transformPosition = function(pos, c, insertAfter) {                                                                // 309
    if (c.i != null) {                                                                                               // 310
      if (c.p < pos || (c.p === pos && insertAfter)) {                                                               // 311
        return pos + c.i.length;                                                                                     // 312
      } else {                                                                                                       // 313
        return pos;                                                                                                  // 314
      }                                                                                                              // 315
    } else {                                                                                                         // 316
      if (pos <= c.p) {                                                                                              // 317
        return pos;                                                                                                  // 318
      } else if (pos <= c.p + c.d.length) {                                                                          // 319
        return c.p;                                                                                                  // 320
      } else {                                                                                                       // 321
        return pos - c.d.length;                                                                                     // 322
      }                                                                                                              // 323
    }                                                                                                                // 324
  };                                                                                                                 // 325
                                                                                                                     // 326
  text.transformCursor = function(position, op, side) {                                                              // 327
    var c, insertAfter, _i, _len;                                                                                    // 328
                                                                                                                     // 329
    insertAfter = side === 'right';                                                                                  // 330
    for (_i = 0, _len = op.length; _i < _len; _i++) {                                                                // 331
      c = op[_i];                                                                                                    // 332
      position = transformPosition(position, c, insertAfter);                                                        // 333
    }                                                                                                                // 334
    return position;                                                                                                 // 335
  };                                                                                                                 // 336
                                                                                                                     // 337
  text._tc = transformComponent = function(dest, c, otherC, side) {                                                  // 338
    var cIntersect, intersectEnd, intersectStart, newC, otherIntersect, s;                                           // 339
                                                                                                                     // 340
    checkValidOp([c]);                                                                                               // 341
    checkValidOp([otherC]);                                                                                          // 342
    if (c.i != null) {                                                                                               // 343
      append(dest, {                                                                                                 // 344
        i: c.i,                                                                                                      // 345
        p: transformPosition(c.p, otherC, side === 'right')                                                          // 346
      });                                                                                                            // 347
    } else {                                                                                                         // 348
      if (otherC.i != null) {                                                                                        // 349
        s = c.d;                                                                                                     // 350
        if (c.p < otherC.p) {                                                                                        // 351
          append(dest, {                                                                                             // 352
            d: s.slice(0, otherC.p - c.p),                                                                           // 353
            p: c.p                                                                                                   // 354
          });                                                                                                        // 355
          s = s.slice(otherC.p - c.p);                                                                               // 356
        }                                                                                                            // 357
        if (s !== '') {                                                                                              // 358
          append(dest, {                                                                                             // 359
            d: s,                                                                                                    // 360
            p: c.p + otherC.i.length                                                                                 // 361
          });                                                                                                        // 362
        }                                                                                                            // 363
      } else {                                                                                                       // 364
        if (c.p >= otherC.p + otherC.d.length) {                                                                     // 365
          append(dest, {                                                                                             // 366
            d: c.d,                                                                                                  // 367
            p: c.p - otherC.d.length                                                                                 // 368
          });                                                                                                        // 369
        } else if (c.p + c.d.length <= otherC.p) {                                                                   // 370
          append(dest, c);                                                                                           // 371
        } else {                                                                                                     // 372
          newC = {                                                                                                   // 373
            d: '',                                                                                                   // 374
            p: c.p                                                                                                   // 375
          };                                                                                                         // 376
          if (c.p < otherC.p) {                                                                                      // 377
            newC.d = c.d.slice(0, otherC.p - c.p);                                                                   // 378
          }                                                                                                          // 379
          if (c.p + c.d.length > otherC.p + otherC.d.length) {                                                       // 380
            newC.d += c.d.slice(otherC.p + otherC.d.length - c.p);                                                   // 381
          }                                                                                                          // 382
          intersectStart = Math.max(c.p, otherC.p);                                                                  // 383
          intersectEnd = Math.min(c.p + c.d.length, otherC.p + otherC.d.length);                                     // 384
          cIntersect = c.d.slice(intersectStart - c.p, intersectEnd - c.p);                                          // 385
          otherIntersect = otherC.d.slice(intersectStart - otherC.p, intersectEnd - otherC.p);                       // 386
          if (cIntersect !== otherIntersect) {                                                                       // 387
            throw new Error('Delete ops delete different text in the same region of the document');                  // 388
          }                                                                                                          // 389
          if (newC.d !== '') {                                                                                       // 390
            newC.p = transformPosition(newC.p, otherC);                                                              // 391
            append(dest, newC);                                                                                      // 392
          }                                                                                                          // 393
        }                                                                                                            // 394
      }                                                                                                              // 395
    }                                                                                                                // 396
    return dest;                                                                                                     // 397
  };                                                                                                                 // 398
                                                                                                                     // 399
  invertComponent = function(c) {                                                                                    // 400
    if (c.i != null) {                                                                                               // 401
      return {                                                                                                       // 402
        d: c.i,                                                                                                      // 403
        p: c.p                                                                                                       // 404
      };                                                                                                             // 405
    } else {                                                                                                         // 406
      return {                                                                                                       // 407
        i: c.d,                                                                                                      // 408
        p: c.p                                                                                                       // 409
      };                                                                                                             // 410
    }                                                                                                                // 411
  };                                                                                                                 // 412
                                                                                                                     // 413
  text.invert = function(op) {                                                                                       // 414
    var c, _i, _len, _ref, _results;                                                                                 // 415
                                                                                                                     // 416
    _ref = op.slice().reverse();                                                                                     // 417
    _results = [];                                                                                                   // 418
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                              // 419
      c = _ref[_i];                                                                                                  // 420
      _results.push(invertComponent(c));                                                                             // 421
    }                                                                                                                // 422
    return _results;                                                                                                 // 423
  };                                                                                                                 // 424
                                                                                                                     // 425
  if (typeof WEB !== "undefined" && WEB !== null) {                                                                  // 426
    exports.types || (exports.types = {});                                                                           // 427
    bootstrapTransform(text, transformComponent, checkValidOp, append);                                              // 428
    exports.types.text = text;                                                                                       // 429
  } else {                                                                                                           // 430
    module.exports = text;                                                                                           // 431
    require('./helpers').bootstrapTransform(text, transformComponent, checkValidOp, append);                         // 432
  }                                                                                                                  // 433
                                                                                                                     // 434
  if (typeof WEB === 'undefined') {                                                                                  // 435
    text = require('./text');                                                                                        // 436
  }                                                                                                                  // 437
                                                                                                                     // 438
  text.api = {                                                                                                       // 439
    provides: {                                                                                                      // 440
      text: true                                                                                                     // 441
    },                                                                                                               // 442
    getLength: function() {                                                                                          // 443
      return this.snapshot.length;                                                                                   // 444
    },                                                                                                               // 445
    getText: function() {                                                                                            // 446
      return this.snapshot;                                                                                          // 447
    },                                                                                                               // 448
    insert: function(pos, text, callback) {                                                                          // 449
      var op;                                                                                                        // 450
                                                                                                                     // 451
      op = [                                                                                                         // 452
        {                                                                                                            // 453
          p: pos,                                                                                                    // 454
          i: text                                                                                                    // 455
        }                                                                                                            // 456
      ];                                                                                                             // 457
      this.submitOp(op, callback);                                                                                   // 458
      return op;                                                                                                     // 459
    },                                                                                                               // 460
    del: function(pos, length, callback) {                                                                           // 461
      var op;                                                                                                        // 462
                                                                                                                     // 463
      op = [                                                                                                         // 464
        {                                                                                                            // 465
          p: pos,                                                                                                    // 466
          d: this.snapshot.slice(pos, pos + length)                                                                  // 467
        }                                                                                                            // 468
      ];                                                                                                             // 469
      this.submitOp(op, callback);                                                                                   // 470
      return op;                                                                                                     // 471
    },                                                                                                               // 472
    _register: function() {                                                                                          // 473
      return this.on('remoteop', function(op) {                                                                      // 474
        var component, _i, _len, _results;                                                                           // 475
                                                                                                                     // 476
        _results = [];                                                                                               // 477
        for (_i = 0, _len = op.length; _i < _len; _i++) {                                                            // 478
          component = op[_i];                                                                                        // 479
          if (component.i !== void 0) {                                                                              // 480
            _results.push(this.emit('insert', component.p, component.i));                                            // 481
          } else {                                                                                                   // 482
            _results.push(this.emit('delete', component.p, component.d));                                            // 483
          }                                                                                                          // 484
        }                                                                                                            // 485
        return _results;                                                                                             // 486
      });                                                                                                            // 487
    }                                                                                                                // 488
  };                                                                                                                 // 489
                                                                                                                     // 490
  if (typeof WEB === "undefined" || WEB === null) {                                                                  // 491
    types = require('../types');                                                                                     // 492
  }                                                                                                                  // 493
                                                                                                                     // 494
  if (typeof WEB !== "undefined" && WEB !== null) {                                                                  // 495
    exports.extendDoc = function(name, fn) {                                                                         // 496
      return Doc.prototype[name] = fn;                                                                               // 497
    };                                                                                                               // 498
  }                                                                                                                  // 499
                                                                                                                     // 500
  Doc = (function() {                                                                                                // 501
    function Doc(connection, name, openData) {                                                                       // 502
      this.connection = connection;                                                                                  // 503
      this.name = name;                                                                                              // 504
      this.shout = __bind(this.shout, this);                                                                         // 505
      this.flush = __bind(this.flush, this);                                                                         // 506
      openData || (openData = {});                                                                                   // 507
      this.version = openData.v;                                                                                     // 508
      this.snapshot = openData.snaphot;                                                                              // 509
      if (openData.type) {                                                                                           // 510
        this._setType(openData.type);                                                                                // 511
      }                                                                                                              // 512
      this.state = 'closed';                                                                                         // 513
      this.autoOpen = false;                                                                                         // 514
      this._create = openData.create;                                                                                // 515
      this.inflightOp = null;                                                                                        // 516
      this.inflightCallbacks = [];                                                                                   // 517
      this.inflightSubmittedIds = [];                                                                                // 518
      this.pendingOp = null;                                                                                         // 519
      this.pendingCallbacks = [];                                                                                    // 520
      this.serverOps = {};                                                                                           // 521
    }                                                                                                                // 522
                                                                                                                     // 523
    Doc.prototype._xf = function(client, server) {                                                                   // 524
      var client_, server_;                                                                                          // 525
                                                                                                                     // 526
      if (this.type.transformX) {                                                                                    // 527
        return this.type.transformX(client, server);                                                                 // 528
      } else {                                                                                                       // 529
        client_ = this.type.transform(client, server, 'left');                                                       // 530
        server_ = this.type.transform(server, client, 'right');                                                      // 531
        return [client_, server_];                                                                                   // 532
      }                                                                                                              // 533
    };                                                                                                               // 534
                                                                                                                     // 535
    Doc.prototype._otApply = function(docOp, isRemote) {                                                             // 536
      var oldSnapshot;                                                                                               // 537
                                                                                                                     // 538
      oldSnapshot = this.snapshot;                                                                                   // 539
      this.snapshot = this.type.apply(this.snapshot, docOp);                                                         // 540
      this.emit('change', docOp, oldSnapshot);                                                                       // 541
      if (isRemote) {                                                                                                // 542
        return this.emit('remoteop', docOp, oldSnapshot);                                                            // 543
      }                                                                                                              // 544
    };                                                                                                               // 545
                                                                                                                     // 546
    Doc.prototype._connectionStateChanged = function(state, data) {                                                  // 547
      switch (state) {                                                                                               // 548
        case 'disconnected':                                                                                         // 549
          this.state = 'closed';                                                                                     // 550
          if (this.inflightOp) {                                                                                     // 551
            this.inflightSubmittedIds.push(this.connection.id);                                                      // 552
          }                                                                                                          // 553
          this.emit('closed');                                                                                       // 554
          break;                                                                                                     // 555
        case 'ok':                                                                                                   // 556
          if (this.autoOpen) {                                                                                       // 557
            this.open();                                                                                             // 558
          }                                                                                                          // 559
          break;                                                                                                     // 560
        case 'stopped':                                                                                              // 561
          if (typeof this._openCallback === "function") {                                                            // 562
            this._openCallback(data);                                                                                // 563
          }                                                                                                          // 564
      }                                                                                                              // 565
      return this.emit(state, data);                                                                                 // 566
    };                                                                                                               // 567
                                                                                                                     // 568
    Doc.prototype._setType = function(type) {                                                                        // 569
      var k, v, _ref;                                                                                                // 570
                                                                                                                     // 571
      if (this.type) {                                                                                               // 572
        return;                                                                                                      // 573
      }                                                                                                              // 574
      if (typeof type === 'string') {                                                                                // 575
        type = types[type];                                                                                          // 576
      }                                                                                                              // 577
      if (!(type && type.compose)) {                                                                                 // 578
        throw new Error('Support for types without compose() is not implemented');                                   // 579
      }                                                                                                              // 580
      this.type = type;                                                                                              // 581
      if (type.api) {                                                                                                // 582
        _ref = type.api;                                                                                             // 583
        for (k in _ref) {                                                                                            // 584
          v = _ref[k];                                                                                               // 585
          this[k] = v;                                                                                               // 586
        }                                                                                                            // 587
        return typeof this._register === "function" ? this._register() : void 0;                                     // 588
      } else {                                                                                                       // 589
        return this.provides = {};                                                                                   // 590
      }                                                                                                              // 591
    };                                                                                                               // 592
                                                                                                                     // 593
    Doc.prototype._onMessage = function(msg) {                                                                       // 594
      var callback, docOp, error, oldInflightOp, op, path, response, undo, value, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;
                                                                                                                     // 596
      switch (false) {                                                                                               // 597
        case msg.open !== true:                                                                                      // 598
          this.state = 'open';                                                                                       // 599
          this._create = false;                                                                                      // 600
          if (this.created == null) {                                                                                // 601
            this.created = !!msg.create;                                                                             // 602
          }                                                                                                          // 603
          if (msg.type) {                                                                                            // 604
            this._setType(msg.type);                                                                                 // 605
          }                                                                                                          // 606
          if (msg.create) {                                                                                          // 607
            this.created = true;                                                                                     // 608
            this.snapshot = this.type.create();                                                                      // 609
          } else {                                                                                                   // 610
            if (this.created !== true) {                                                                             // 611
              this.created = false;                                                                                  // 612
            }                                                                                                        // 613
            if (msg.snapshot !== void 0) {                                                                           // 614
              this.snapshot = msg.snapshot;                                                                          // 615
            }                                                                                                        // 616
          }                                                                                                          // 617
          if (msg.meta) {                                                                                            // 618
            this.meta = msg.meta;                                                                                    // 619
          }                                                                                                          // 620
          if (msg.v != null) {                                                                                       // 621
            this.version = msg.v;                                                                                    // 622
          }                                                                                                          // 623
          if (this.inflightOp) {                                                                                     // 624
            response = {                                                                                             // 625
              doc: this.name,                                                                                        // 626
              op: this.inflightOp,                                                                                   // 627
              v: this.version                                                                                        // 628
            };                                                                                                       // 629
            if (this.inflightSubmittedIds.length) {                                                                  // 630
              response.dupIfSource = this.inflightSubmittedIds;                                                      // 631
            }                                                                                                        // 632
            this.connection.send(response);                                                                          // 633
          } else {                                                                                                   // 634
            this.flush();                                                                                            // 635
          }                                                                                                          // 636
          this.emit('open');                                                                                         // 637
          return typeof this._openCallback === "function" ? this._openCallback(null) : void 0;                       // 638
        case msg.open !== false:                                                                                     // 639
          if (msg.error) {                                                                                           // 640
            if (typeof console !== "undefined" && console !== null) {                                                // 641
              console.error("Could not open document: " + msg.error);                                                // 642
            }                                                                                                        // 643
            this.emit('error', msg.error);                                                                           // 644
            if (typeof this._openCallback === "function") {                                                          // 645
              this._openCallback(msg.error);                                                                         // 646
            }                                                                                                        // 647
          }                                                                                                          // 648
          this.state = 'closed';                                                                                     // 649
          this.emit('closed');                                                                                       // 650
          if (typeof this._closeCallback === "function") {                                                           // 651
            this._closeCallback();                                                                                   // 652
          }                                                                                                          // 653
          return this._closeCallback = null;                                                                         // 654
        case !(msg.op === null && error === 'Op already submitted'):                                                 // 655
          break;                                                                                                     // 656
        case !((msg.op === void 0 && msg.v !== void 0) || (msg.op && (_ref = msg.meta.source, __indexOf.call(this.inflightSubmittedIds, _ref) >= 0))):
          oldInflightOp = this.inflightOp;                                                                           // 658
          this.inflightOp = null;                                                                                    // 659
          this.inflightSubmittedIds.length = 0;                                                                      // 660
          error = msg.error;                                                                                         // 661
          if (error) {                                                                                               // 662
            if (this.type.invert) {                                                                                  // 663
              undo = this.type.invert(oldInflightOp);                                                                // 664
              if (this.pendingOp) {                                                                                  // 665
                _ref1 = this._xf(this.pendingOp, undo), this.pendingOp = _ref1[0], undo = _ref1[1];                  // 666
              }                                                                                                      // 667
              this._otApply(undo, true);                                                                             // 668
            } else {                                                                                                 // 669
              this.emit('error', "Op apply failed (" + error + ") and the op could not be reverted");                // 670
            }                                                                                                        // 671
            _ref2 = this.inflightCallbacks;                                                                          // 672
            for (_i = 0, _len = _ref2.length; _i < _len; _i++) {                                                     // 673
              callback = _ref2[_i];                                                                                  // 674
              callback(error);                                                                                       // 675
            }                                                                                                        // 676
          } else {                                                                                                   // 677
            if (msg.v !== this.version) {                                                                            // 678
              throw new Error('Invalid version from server');                                                        // 679
            }                                                                                                        // 680
            this.serverOps[this.version] = oldInflightOp;                                                            // 681
            this.version++;                                                                                          // 682
            this.emit('acknowledge', oldInflightOp);                                                                 // 683
            _ref3 = this.inflightCallbacks;                                                                          // 684
            for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {                                                   // 685
              callback = _ref3[_j];                                                                                  // 686
              callback(null, oldInflightOp);                                                                         // 687
            }                                                                                                        // 688
          }                                                                                                          // 689
          return this.flush();                                                                                       // 690
        case !msg.op:                                                                                                // 691
          if (msg.v < this.version) {                                                                                // 692
            return;                                                                                                  // 693
          }                                                                                                          // 694
          if (msg.doc !== this.name) {                                                                               // 695
            return this.emit('error', "Expected docName '" + this.name + "' but got " + msg.doc);                    // 696
          }                                                                                                          // 697
          if (msg.v !== this.version) {                                                                              // 698
            return this.emit('error', "Expected version " + this.version + " but got " + msg.v);                     // 699
          }                                                                                                          // 700
          op = msg.op;                                                                                               // 701
          this.serverOps[this.version] = op;                                                                         // 702
          docOp = op;                                                                                                // 703
          if (this.inflightOp !== null) {                                                                            // 704
            _ref4 = this._xf(this.inflightOp, docOp), this.inflightOp = _ref4[0], docOp = _ref4[1];                  // 705
          }                                                                                                          // 706
          if (this.pendingOp !== null) {                                                                             // 707
            _ref5 = this._xf(this.pendingOp, docOp), this.pendingOp = _ref5[0], docOp = _ref5[1];                    // 708
          }                                                                                                          // 709
          this.version++;                                                                                            // 710
          return this._otApply(docOp, true);                                                                         // 711
        case !msg.meta:                                                                                              // 712
          _ref6 = msg.meta, path = _ref6.path, value = _ref6.value;                                                  // 713
          switch (path != null ? path[0] : void 0) {                                                                 // 714
            case 'shout':                                                                                            // 715
              return this.emit('shout', value);                                                                      // 716
            default:                                                                                                 // 717
              return typeof console !== "undefined" && console !== null ? console.warn('Unhandled meta op:', msg) : void 0;
          }                                                                                                          // 719
          break;                                                                                                     // 720
        default:                                                                                                     // 721
          return typeof console !== "undefined" && console !== null ? console.warn('Unhandled document message:', msg) : void 0;
      }                                                                                                              // 723
    };                                                                                                               // 724
                                                                                                                     // 725
    Doc.prototype.flush = function() {                                                                               // 726
      if (!(this.connection.state === 'ok' && this.inflightOp === null && this.pendingOp !== null)) {                // 727
        return;                                                                                                      // 728
      }                                                                                                              // 729
      this.inflightOp = this.pendingOp;                                                                              // 730
      this.inflightCallbacks = this.pendingCallbacks;                                                                // 731
      this.pendingOp = null;                                                                                         // 732
      this.pendingCallbacks = [];                                                                                    // 733
      return this.connection.send({                                                                                  // 734
        doc: this.name,                                                                                              // 735
        op: this.inflightOp,                                                                                         // 736
        v: this.version                                                                                              // 737
      });                                                                                                            // 738
    };                                                                                                               // 739
                                                                                                                     // 740
    Doc.prototype.submitOp = function(op, callback) {                                                                // 741
      if (this.type.normalize != null) {                                                                             // 742
        op = this.type.normalize(op);                                                                                // 743
      }                                                                                                              // 744
      this.snapshot = this.type.apply(this.snapshot, op);                                                            // 745
      if (this.pendingOp !== null) {                                                                                 // 746
        this.pendingOp = this.type.compose(this.pendingOp, op);                                                      // 747
      } else {                                                                                                       // 748
        this.pendingOp = op;                                                                                         // 749
      }                                                                                                              // 750
      if (callback) {                                                                                                // 751
        this.pendingCallbacks.push(callback);                                                                        // 752
      }                                                                                                              // 753
      this.emit('change', op);                                                                                       // 754
      return setTimeout(this.flush, 0);                                                                              // 755
    };                                                                                                               // 756
                                                                                                                     // 757
    Doc.prototype.shout = function(msg) {                                                                            // 758
      return this.connection.send({                                                                                  // 759
        doc: this.name,                                                                                              // 760
        meta: {                                                                                                      // 761
          path: ['shout'],                                                                                           // 762
          value: msg                                                                                                 // 763
        }                                                                                                            // 764
      });                                                                                                            // 765
    };                                                                                                               // 766
                                                                                                                     // 767
    Doc.prototype.open = function(callback) {                                                                        // 768
      var message,                                                                                                   // 769
        _this = this;                                                                                                // 770
                                                                                                                     // 771
      this.autoOpen = true;                                                                                          // 772
      if (this.state !== 'closed') {                                                                                 // 773
        return;                                                                                                      // 774
      }                                                                                                              // 775
      message = {                                                                                                    // 776
        doc: this.name,                                                                                              // 777
        open: true                                                                                                   // 778
      };                                                                                                             // 779
      if (this.snapshot === void 0) {                                                                                // 780
        message.snapshot = null;                                                                                     // 781
      }                                                                                                              // 782
      if (this.type) {                                                                                               // 783
        message.type = this.type.name;                                                                               // 784
      }                                                                                                              // 785
      if (this.version != null) {                                                                                    // 786
        message.v = this.version;                                                                                    // 787
      }                                                                                                              // 788
      if (this._create) {                                                                                            // 789
        message.create = true;                                                                                       // 790
      }                                                                                                              // 791
      this.connection.send(message);                                                                                 // 792
      this.state = 'opening';                                                                                        // 793
      return this._openCallback = function(error) {                                                                  // 794
        _this._openCallback = null;                                                                                  // 795
        return typeof callback === "function" ? callback(error) : void 0;                                            // 796
      };                                                                                                             // 797
    };                                                                                                               // 798
                                                                                                                     // 799
    Doc.prototype.close = function(callback) {                                                                       // 800
      this.autoOpen = false;                                                                                         // 801
      if (this.state === 'closed') {                                                                                 // 802
        return typeof callback === "function" ? callback() : void 0;                                                 // 803
      }                                                                                                              // 804
      this.connection.send({                                                                                         // 805
        doc: this.name,                                                                                              // 806
        open: false                                                                                                  // 807
      });                                                                                                            // 808
      this.state = 'closed';                                                                                         // 809
      this.emit('closing');                                                                                          // 810
      return this._closeCallback = callback;                                                                         // 811
    };                                                                                                               // 812
                                                                                                                     // 813
    return Doc;                                                                                                      // 814
                                                                                                                     // 815
  })();                                                                                                              // 816
                                                                                                                     // 817
  if (typeof WEB === "undefined" || WEB === null) {                                                                  // 818
    MicroEvent = require('./microevent');                                                                            // 819
  }                                                                                                                  // 820
                                                                                                                     // 821
  MicroEvent.mixin(Doc);                                                                                             // 822
                                                                                                                     // 823
  exports.Doc = Doc;                                                                                                 // 824
                                                                                                                     // 825
  /*                                                                                                                 // 826
  This behaves like a WebSocket in every way, except if it fails to connect,                                         // 827
  or it gets disconnected, it will repeatedly poll until it succesfully connects                                     // 828
  again.                                                                                                             // 829
                                                                                                                     // 830
  It is API compatible, so when you have:                                                                            // 831
  ws = new WebSocket('ws://....');                                                                                   // 832
  you can replace with:                                                                                              // 833
  ws = new ReconnectingWebSocket('ws://....');                                                                       // 834
                                                                                                                     // 835
  The event stream will typically look like:                                                                         // 836
  onopen                                                                                                             // 837
  onmessage                                                                                                          // 838
  onmessage                                                                                                          // 839
  onclose // lost connection                                                                                         // 840
  onopen  // sometime later...                                                                                       // 841
  onmessage                                                                                                          // 842
  onmessage                                                                                                          // 843
  etc...                                                                                                             // 844
                                                                                                                     // 845
  It is API compatible with the standard WebSocket API.                                                              // 846
                                                                                                                     // 847
  Inspired from: https://github.com/joewalnes/reconnecting-websocket/                                                // 848
  Contributors:                                                                                                      // 849
  - Joe Walnes                                                                                                       // 850
  - Didier Colens                                                                                                    // 851
  - Wout Mertens                                                                                                     // 852
  */                                                                                                                 // 853
                                                                                                                     // 854
                                                                                                                     // 855
  ReconnectingWebSocket = (function() {                                                                              // 856
    function ReconnectingWebSocket(url, protocols, Socket) {                                                         // 857
      var connect, timedOut,                                                                                         // 858
        _this = this;                                                                                                // 859
                                                                                                                     // 860
      if ((protocols != null) && typeof protocols === 'function') {                                                  // 861
        Socket = protocols;                                                                                          // 862
        protocols = void 0;                                                                                          // 863
      } else if (typeof Socket !== 'function') {                                                                     // 864
        Socket = WebSocket;                                                                                          // 865
      }                                                                                                              // 866
      this.debug = this.debugAll;                                                                                    // 867
      this.reconnectInterval = 1000;                                                                                 // 868
      this.timeoutInterval = 2000;                                                                                   // 869
      this.forcedClose = false;                                                                                      // 870
      this.url = url;                                                                                                // 871
      this.protocols = protocols;                                                                                    // 872
      this.readyState = Socket.CONNECTING;                                                                           // 873
      this.URL = url;                                                                                                // 874
      timedOut = false;                                                                                              // 875
      connect = function(reconnectAttempt) {                                                                         // 876
        var timeout;                                                                                                 // 877
                                                                                                                     // 878
        _this.ws = new Socket(_this.url);                                                                            // 879
        if (_this.debug) {                                                                                           // 880
          console.debug("ReconnectingWebSocket", "attempt-connect", _this.url);                                      // 881
        }                                                                                                            // 882
        timeout = setTimeout(function() {                                                                            // 883
          if (_this.debug) {                                                                                         // 884
            console.debug("ReconnectingWebSocket", "connection-timeout", _this.url);                                 // 885
          }                                                                                                          // 886
          timedOut = true;                                                                                           // 887
          _this.ws.close();                                                                                          // 888
          return timedOut = false;                                                                                   // 889
        }, _this.timeoutInterval);                                                                                   // 890
        _this.ws.onopen = function(event) {                                                                          // 891
          clearTimeout(timeout);                                                                                     // 892
          if (_this.debug) {                                                                                         // 893
            console.debug("ReconnectingWebSocket", "onopen", _this.url);                                             // 894
          }                                                                                                          // 895
          _this.readyState = Socket.OPEN;                                                                            // 896
          reconnectAttempt = false;                                                                                  // 897
          return _this.onopen(event);                                                                                // 898
        };                                                                                                           // 899
        _this.ws.onclose = function(event) {                                                                         // 900
          clearTimeout(timeout);                                                                                     // 901
          _this.ws = null;                                                                                           // 902
          if (_this.forcedClose) {                                                                                   // 903
            _this.readyState = Socket.CLOSED;                                                                        // 904
            return _this.onclose(event);                                                                             // 905
          } else {                                                                                                   // 906
            _this.readyState = Socket.CONNECTING;                                                                    // 907
            _this.onconnecting(event);                                                                               // 908
            if (!reconnectAttempt && !timedOut) {                                                                    // 909
              if (_this.debug) {                                                                                     // 910
                console.debug("ReconnectingWebSocket", "onclose", _this.url);                                        // 911
              }                                                                                                      // 912
              _this.onclose(event);                                                                                  // 913
            }                                                                                                        // 914
            return setTimeout((function() {                                                                          // 915
              return connect(true);                                                                                  // 916
            }), _this.reconnectInterval);                                                                            // 917
          }                                                                                                          // 918
        };                                                                                                           // 919
        _this.ws.onmessage = function(event) {                                                                       // 920
          if (_this.debug) {                                                                                         // 921
            console.debug("ReconnectingWebSocket", "onmessage", _this.url, event.data);                              // 922
          }                                                                                                          // 923
          return _this.onmessage(event);                                                                             // 924
        };                                                                                                           // 925
        return _this.ws.onerror = function(event) {                                                                  // 926
          if (_this.debug) {                                                                                         // 927
            console.debug("ReconnectingWebSocket", "onerror", _this.url, event);                                     // 928
          }                                                                                                          // 929
          return _this.onerror(event);                                                                               // 930
        };                                                                                                           // 931
      };                                                                                                             // 932
      connect(this.url);                                                                                             // 933
    }                                                                                                                // 934
                                                                                                                     // 935
    ReconnectingWebSocket.prototype.onopen = function(event) {};                                                     // 936
                                                                                                                     // 937
    ReconnectingWebSocket.prototype.onclose = function(event) {};                                                    // 938
                                                                                                                     // 939
    ReconnectingWebSocket.prototype.onconnecting = function(event) {};                                               // 940
                                                                                                                     // 941
    ReconnectingWebSocket.prototype.onmessage = function(event) {};                                                  // 942
                                                                                                                     // 943
    ReconnectingWebSocket.prototype.onerror = function(event) {};                                                    // 944
                                                                                                                     // 945
    ReconnectingWebSocket.prototype.send = function(data) {                                                          // 946
      if (this.ws) {                                                                                                 // 947
        if (this.debug) {                                                                                            // 948
          console.debug("ReconnectingWebSocket", "send", this.url, data);                                            // 949
        }                                                                                                            // 950
        return this.ws.send(data);                                                                                   // 951
      } else {                                                                                                       // 952
        throw "INVALID_STATE_ERR : Pausing to reconnect websocket";                                                  // 953
      }                                                                                                              // 954
    };                                                                                                               // 955
                                                                                                                     // 956
    ReconnectingWebSocket.prototype.close = function() {                                                             // 957
      if (this.ws) {                                                                                                 // 958
        this.forcedClose = true;                                                                                     // 959
        return this.ws.close();                                                                                      // 960
      }                                                                                                              // 961
    };                                                                                                               // 962
                                                                                                                     // 963
    /*                                                                                                               // 964
    Setting this to true is the equivalent of setting all instances of ReconnectingWebSocket.debug to true.          // 965
    */                                                                                                               // 966
                                                                                                                     // 967
                                                                                                                     // 968
    ReconnectingWebSocket.prototype.debugAll = false;                                                                // 969
                                                                                                                     // 970
    /*                                                                                                               // 971
    Additional public API method to refresh the connection if still open (close, re-open).                           // 972
    For example, if the app suspects bad data / missed heart beats, it can try to refresh.                           // 973
    */                                                                                                               // 974
                                                                                                                     // 975
                                                                                                                     // 976
    ReconnectingWebSocket.prototype.refresh = function() {                                                           // 977
      if (this.ws) {                                                                                                 // 978
        return this.ws.close();                                                                                      // 979
      }                                                                                                              // 980
    };                                                                                                               // 981
                                                                                                                     // 982
    return ReconnectingWebSocket;                                                                                    // 983
                                                                                                                     // 984
  })();                                                                                                              // 985
                                                                                                                     // 986
  if (typeof WEB !== "undefined" && WEB !== null) {                                                                  // 987
    types = exports.types;                                                                                           // 988
    BCSocket = window.BCSocket, SockJS = window.SockJS, WebSocket = window.WebSocket;                                // 989
    if (BCSocket) {                                                                                                  // 990
      socketImpl = 'channel';                                                                                        // 991
    } else {                                                                                                         // 992
      if (SockJS) {                                                                                                  // 993
        socketImpl = 'sockjs';                                                                                       // 994
      } else {                                                                                                       // 995
        socketImpl = 'websocket';                                                                                    // 996
      }                                                                                                              // 997
    }                                                                                                                // 998
  } else {                                                                                                           // 999
    types = require('../types');                                                                                     // 1000
    BCSocket = require('browserchannel').BCSocket;                                                                   // 1001
    Doc = require('./doc').Doc;                                                                                      // 1002
    WebSocket = require('ws');                                                                                       // 1003
    socketImpl = null;                                                                                               // 1004
  }                                                                                                                  // 1005
                                                                                                                     // 1006
  Connection = (function() {                                                                                         // 1007
    function Connection(host, authentication) {                                                                      // 1008
      var _this = this;                                                                                              // 1009
                                                                                                                     // 1010
      this.docs = {};                                                                                                // 1011
      this.state = 'connecting';                                                                                     // 1012
      if (socketImpl == null) {                                                                                      // 1013
        if (host.match(/^ws:/)) {                                                                                    // 1014
          socketImpl = 'websocket';                                                                                  // 1015
        }                                                                                                            // 1016
      }                                                                                                              // 1017
      this.socket = (function() {                                                                                    // 1018
        switch (socketImpl) {                                                                                        // 1019
          case 'channel':                                                                                            // 1020
            return new BCSocket(host, {                                                                              // 1021
              reconnect: true                                                                                        // 1022
            });                                                                                                      // 1023
          case 'sockjs':                                                                                             // 1024
            return new ReconnectingWebSocket(host, SockJS);                                                          // 1025
          case 'websocket':                                                                                          // 1026
            return new ReconnectingWebSocket(host);                                                                  // 1027
          default:                                                                                                   // 1028
            return new BCSocket(host, {                                                                              // 1029
              reconnect: true                                                                                        // 1030
            });                                                                                                      // 1031
        }                                                                                                            // 1032
      })();                                                                                                          // 1033
      this.socket.onmessage = function(msg) {                                                                        // 1034
        var docName;                                                                                                 // 1035
                                                                                                                     // 1036
        if (socketImpl === 'sockjs' || socketImpl === 'websocket') {                                                 // 1037
          msg = JSON.parse(msg.data);                                                                                // 1038
        }                                                                                                            // 1039
        if (msg.auth === null) {                                                                                     // 1040
          _this.lastError = msg.error;                                                                               // 1041
          _this.disconnect();                                                                                        // 1042
          return _this.emit('connect failed', msg.error);                                                            // 1043
        } else if (msg.auth) {                                                                                       // 1044
          _this.id = msg.auth;                                                                                       // 1045
          _this.setState('ok');                                                                                      // 1046
          return;                                                                                                    // 1047
        }                                                                                                            // 1048
        docName = msg.doc;                                                                                           // 1049
        if (docName !== void 0) {                                                                                    // 1050
          _this.lastReceivedDoc = docName;                                                                           // 1051
        } else {                                                                                                     // 1052
          msg.doc = docName = _this.lastReceivedDoc;                                                                 // 1053
        }                                                                                                            // 1054
        if (_this.docs[docName]) {                                                                                   // 1055
          return _this.docs[docName]._onMessage(msg);                                                                // 1056
        } else {                                                                                                     // 1057
          return typeof console !== "undefined" && console !== null ? console.error('Unhandled message', msg) : void 0;
        }                                                                                                            // 1059
      };                                                                                                             // 1060
      this.connected = false;                                                                                        // 1061
      this.socket.onclose = function(reason) {                                                                       // 1062
        _this.setState('disconnected', reason);                                                                      // 1063
        if (reason === 'Closed' || reason === 'Stopped by server') {                                                 // 1064
          return _this.setState('stopped', _this.lastError || reason);                                               // 1065
        }                                                                                                            // 1066
      };                                                                                                             // 1067
      this.socket.onerror = function(e) {                                                                            // 1068
        return _this.emit('error', e);                                                                               // 1069
      };                                                                                                             // 1070
      this.socket.onopen = function() {                                                                              // 1071
        _this.send({                                                                                                 // 1072
          auth: authentication ? authentication : null                                                               // 1073
        });                                                                                                          // 1074
        _this.lastError = _this.lastReceivedDoc = _this.lastSentDoc = null;                                          // 1075
        return _this.setState('handshaking');                                                                        // 1076
      };                                                                                                             // 1077
      this.socket.onconnecting = function() {                                                                        // 1078
        return _this.setState('connecting');                                                                         // 1079
      };                                                                                                             // 1080
    }                                                                                                                // 1081
                                                                                                                     // 1082
    Connection.prototype.setState = function(state, data) {                                                          // 1083
      var doc, docName, _ref, _results;                                                                              // 1084
                                                                                                                     // 1085
      if (this.state === state) {                                                                                    // 1086
        return;                                                                                                      // 1087
      }                                                                                                              // 1088
      this.state = state;                                                                                            // 1089
      if (state === 'disconnected') {                                                                                // 1090
        delete this.id;                                                                                              // 1091
      }                                                                                                              // 1092
      this.emit(state, data);                                                                                        // 1093
      _ref = this.docs;                                                                                              // 1094
      _results = [];                                                                                                 // 1095
      for (docName in _ref) {                                                                                        // 1096
        doc = _ref[docName];                                                                                         // 1097
        _results.push(doc._connectionStateChanged(state, data));                                                     // 1098
      }                                                                                                              // 1099
      return _results;                                                                                               // 1100
    };                                                                                                               // 1101
                                                                                                                     // 1102
    Connection.prototype.send = function(data) {                                                                     // 1103
      var docName;                                                                                                   // 1104
                                                                                                                     // 1105
      if (data.doc) {                                                                                                // 1106
        docName = data.doc;                                                                                          // 1107
        if (docName === this.lastSentDoc) {                                                                          // 1108
          delete data.doc;                                                                                           // 1109
        } else {                                                                                                     // 1110
          this.lastSentDoc = docName;                                                                                // 1111
        }                                                                                                            // 1112
      }                                                                                                              // 1113
      if (socketImpl === 'sockjs' || socketImpl === 'websocket') {                                                   // 1114
        data = JSON.stringify(data);                                                                                 // 1115
      }                                                                                                              // 1116
      return this.socket.send(data);                                                                                 // 1117
    };                                                                                                               // 1118
                                                                                                                     // 1119
    Connection.prototype.disconnect = function() {                                                                   // 1120
      return this.socket.close();                                                                                    // 1121
    };                                                                                                               // 1122
                                                                                                                     // 1123
    Connection.prototype.makeDoc = function(name, data, callback) {                                                  // 1124
      var doc,                                                                                                       // 1125
        _this = this;                                                                                                // 1126
                                                                                                                     // 1127
      if (this.docs[name]) {                                                                                         // 1128
        throw new Error("Doc " + name + " already open");                                                            // 1129
      }                                                                                                              // 1130
      doc = new Doc(this, name, data);                                                                               // 1131
      this.docs[name] = doc;                                                                                         // 1132
      return doc.open(function(error) {                                                                              // 1133
        if (error) {                                                                                                 // 1134
          delete _this.docs[name];                                                                                   // 1135
        }                                                                                                            // 1136
        if (!error) {                                                                                                // 1137
          doc.on('closed', function() {                                                                              // 1138
            if (!doc.autoOpen) {                                                                                     // 1139
              return delete _this.docs[name];                                                                        // 1140
            }                                                                                                        // 1141
          });                                                                                                        // 1142
        }                                                                                                            // 1143
        return callback(error, (!error ? doc : void 0));                                                             // 1144
      });                                                                                                            // 1145
    };                                                                                                               // 1146
                                                                                                                     // 1147
    Connection.prototype.openExisting = function(docName, callback) {                                                // 1148
      var doc;                                                                                                       // 1149
                                                                                                                     // 1150
      if (this.state === 'stopped') {                                                                                // 1151
        return callback('connection closed');                                                                        // 1152
      }                                                                                                              // 1153
      if (this.docs[docName]) {                                                                                      // 1154
        return this._ensureOpenState(this.docs[docName], callback);                                                  // 1155
      }                                                                                                              // 1156
      return doc = this.makeDoc(docName, {}, callback);                                                              // 1157
    };                                                                                                               // 1158
                                                                                                                     // 1159
    Connection.prototype.open = function(docName, type, callback) {                                                  // 1160
      var doc;                                                                                                       // 1161
                                                                                                                     // 1162
      if (this.state === 'stopped') {                                                                                // 1163
        return callback('connection closed');                                                                        // 1164
      }                                                                                                              // 1165
      if (this.state === 'connecting') {                                                                             // 1166
        this.on('handshaking', function() {                                                                          // 1167
          this.open(docName, type, callback);                                                                        // 1168
          return callback = null;                                                                                    // 1169
        });                                                                                                          // 1170
        return;                                                                                                      // 1171
      }                                                                                                              // 1172
      if (typeof type === 'function') {                                                                              // 1173
        callback = type;                                                                                             // 1174
        type = 'text';                                                                                               // 1175
      }                                                                                                              // 1176
      callback || (callback = function() {});                                                                        // 1177
      if (typeof type === 'string') {                                                                                // 1178
        type = types[type];                                                                                          // 1179
      }                                                                                                              // 1180
      if (!type) {                                                                                                   // 1181
        throw new Error("OT code for document type missing");                                                        // 1182
      }                                                                                                              // 1183
      if (docName == null) {                                                                                         // 1184
        throw new Error('Server-generated random doc names are not currently supported');                            // 1185
      }                                                                                                              // 1186
      if (this.docs[docName]) {                                                                                      // 1187
        doc = this.docs[docName];                                                                                    // 1188
        if (doc.type === type) {                                                                                     // 1189
          this._ensureOpenState(doc, callback);                                                                      // 1190
        } else {                                                                                                     // 1191
          callback('Type mismatch', doc);                                                                            // 1192
        }                                                                                                            // 1193
        return;                                                                                                      // 1194
      }                                                                                                              // 1195
      return this.makeDoc(docName, {                                                                                 // 1196
        create: true,                                                                                                // 1197
        type: type.name                                                                                              // 1198
      }, callback);                                                                                                  // 1199
    };                                                                                                               // 1200
                                                                                                                     // 1201
    Connection.prototype._ensureOpenState = function(doc, callback) {                                                // 1202
      switch (doc.state) {                                                                                           // 1203
        case 'open':                                                                                                 // 1204
          callback(null, doc);                                                                                       // 1205
          break;                                                                                                     // 1206
        case 'opening':                                                                                              // 1207
          this.on('open', function() {                                                                               // 1208
            return callback(null, doc);                                                                              // 1209
          });                                                                                                        // 1210
          break;                                                                                                     // 1211
        case 'closed':                                                                                               // 1212
          doc.open(function(error) {                                                                                 // 1213
            return callback(error, (!error ? doc : void 0));                                                         // 1214
          });                                                                                                        // 1215
      }                                                                                                              // 1216
    };                                                                                                               // 1217
                                                                                                                     // 1218
    return Connection;                                                                                               // 1219
                                                                                                                     // 1220
  })();                                                                                                              // 1221
                                                                                                                     // 1222
  if (typeof WEB === "undefined" || WEB === null) {                                                                  // 1223
    MicroEvent = require('./microevent');                                                                            // 1224
  }                                                                                                                  // 1225
                                                                                                                     // 1226
  MicroEvent.mixin(Connection);                                                                                      // 1227
                                                                                                                     // 1228
  exports.Connection = Connection;                                                                                   // 1229
                                                                                                                     // 1230
  if (typeof WEB !== "undefined" && WEB !== null) {                                                                  // 1231
    hasBCSocket = window.BCSocket !== void 0;                                                                        // 1232
    hasSockJS = window.SockJS !== void 0;                                                                            // 1233
    if (hasBCSocket) {                                                                                               // 1234
      socketImpl = 'channel';                                                                                        // 1235
    } else {                                                                                                         // 1236
      if (hasSockJS) {                                                                                               // 1237
        socketImpl = 'sockjs';                                                                                       // 1238
      } else {                                                                                                       // 1239
        socketImpl = 'websocket';                                                                                    // 1240
      }                                                                                                              // 1241
    }                                                                                                                // 1242
  } else {                                                                                                           // 1243
    Connection = require('./connection').Connection;                                                                 // 1244
  }                                                                                                                  // 1245
                                                                                                                     // 1246
  exports.open = (function() {                                                                                       // 1247
    var connections, getConnection, maybeClose;                                                                      // 1248
                                                                                                                     // 1249
    connections = {};                                                                                                // 1250
    getConnection = function(origin, authentication) {                                                               // 1251
      var c, del, location, protocol;                                                                                // 1252
                                                                                                                     // 1253
      if ((typeof WEB !== "undefined" && WEB !== null) && (origin == null)) {                                        // 1254
        location = window.location;                                                                                  // 1255
        protocol = socketImpl === 'websocket' ? 'ws:' : location.protocol;                                           // 1256
        origin = "" + protocol + "//" + location.host + "/" + socketImpl;                                            // 1257
      }                                                                                                              // 1258
      if (!connections[origin]) {                                                                                    // 1259
        c = new Connection(origin, authentication);                                                                  // 1260
        del = function() {                                                                                           // 1261
          return delete connections[origin];                                                                         // 1262
        };                                                                                                           // 1263
        c.on('disconnected', del);                                                                                   // 1264
        c.on('connect failed', del);                                                                                 // 1265
        connections[origin] = c;                                                                                     // 1266
      }                                                                                                              // 1267
      return connections[origin];                                                                                    // 1268
    };                                                                                                               // 1269
    maybeClose = function(c) {                                                                                       // 1270
      var doc, name, numDocs, _ref;                                                                                  // 1271
                                                                                                                     // 1272
      numDocs = 0;                                                                                                   // 1273
      _ref = c.docs;                                                                                                 // 1274
      for (name in _ref) {                                                                                           // 1275
        doc = _ref[name];                                                                                            // 1276
        if (doc.state !== 'closed' || doc.autoOpen) {                                                                // 1277
          numDocs++;                                                                                                 // 1278
        }                                                                                                            // 1279
      }                                                                                                              // 1280
      if (numDocs === 0) {                                                                                           // 1281
        return c.disconnect();                                                                                       // 1282
      }                                                                                                              // 1283
    };                                                                                                               // 1284
    return function(docName, type, options, callback) {                                                              // 1285
      var authentication, c, origin;                                                                                 // 1286
                                                                                                                     // 1287
      if (typeof options === 'function') {                                                                           // 1288
        callback = options;                                                                                          // 1289
        options = {};                                                                                                // 1290
      }                                                                                                              // 1291
      if (typeof options === 'string') {                                                                             // 1292
        options = {                                                                                                  // 1293
          'origin': options                                                                                          // 1294
        };                                                                                                           // 1295
      }                                                                                                              // 1296
      origin = options.origin;                                                                                       // 1297
      authentication = options.authentication;                                                                       // 1298
      c = getConnection(origin, authentication);                                                                     // 1299
      c.open(docName, type, function(error, doc) {                                                                   // 1300
        if (error) {                                                                                                 // 1301
          callback(error);                                                                                           // 1302
          return maybeClose(c);                                                                                      // 1303
        } else {                                                                                                     // 1304
          doc.on('closed', function() {                                                                              // 1305
            return maybeClose(c);                                                                                    // 1306
          });                                                                                                        // 1307
          return callback(null, doc);                                                                                // 1308
        }                                                                                                            // 1309
      });                                                                                                            // 1310
      c.on('connect failed');                                                                                        // 1311
      return c;                                                                                                      // 1312
    };                                                                                                               // 1313
  })();                                                                                                              // 1314
                                                                                                                     // 1315
  if (typeof WEB === "undefined" || WEB === null) {                                                                  // 1316
    exports.Doc = require('./doc').Doc;                                                                              // 1317
    exports.Connection = require('./connection').Connection;                                                         // 1318
  }                                                                                                                  // 1319
                                                                                                                     // 1320
}).call(this);                                                                                                       // 1321
                                                                                                                     // 1322
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/mizzao_sharejs/.npm/package/node_modules/share/webclient/textarea.js                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// Generated by CoffeeScript 1.6.2                                                                                   // 1
(function() {                                                                                                        // 2
  var applyChange;                                                                                                   // 3
                                                                                                                     // 4
  applyChange = function(doc, oldval, newval) {                                                                      // 5
    var commonEnd, commonStart;                                                                                      // 6
                                                                                                                     // 7
    if (oldval === newval) {                                                                                         // 8
      return;                                                                                                        // 9
    }                                                                                                                // 10
    commonStart = 0;                                                                                                 // 11
    while (oldval.charAt(commonStart) === newval.charAt(commonStart)) {                                              // 12
      commonStart++;                                                                                                 // 13
    }                                                                                                                // 14
    commonEnd = 0;                                                                                                   // 15
    while (oldval.charAt(oldval.length - 1 - commonEnd) === newval.charAt(newval.length - 1 - commonEnd) && commonEnd + commonStart < oldval.length && commonEnd + commonStart < newval.length) {
      commonEnd++;                                                                                                   // 17
    }                                                                                                                // 18
    if (oldval.length !== commonStart + commonEnd) {                                                                 // 19
      doc.del(commonStart, oldval.length - commonStart - commonEnd);                                                 // 20
    }                                                                                                                // 21
    if (newval.length !== commonStart + commonEnd) {                                                                 // 22
      return doc.insert(commonStart, newval.slice(commonStart, newval.length - commonEnd));                          // 23
    }                                                                                                                // 24
  };                                                                                                                 // 25
                                                                                                                     // 26
  window.sharejs.extendDoc('attach_textarea', function(elem) {                                                       // 27
    var delete_listener, doc, event, genOp, insert_listener, prevvalue, replaceText, _i, _len, _ref,                 // 28
      _this = this;                                                                                                  // 29
                                                                                                                     // 30
    doc = this;                                                                                                      // 31
    elem.value = this.getText();                                                                                     // 32
    prevvalue = elem.value;                                                                                          // 33
    replaceText = function(newText, transformCursor) {                                                               // 34
      var newSelection, scrollTop;                                                                                   // 35
                                                                                                                     // 36
      newSelection = [transformCursor(elem.selectionStart), transformCursor(elem.selectionEnd)];                     // 37
      scrollTop = elem.scrollTop;                                                                                    // 38
      elem.value = newText;                                                                                          // 39
      if (elem.scrollTop !== scrollTop) {                                                                            // 40
        elem.scrollTop = scrollTop;                                                                                  // 41
      }                                                                                                              // 42
      if (window.document.activeElement === elem) {                                                                  // 43
        return elem.selectionStart = newSelection[0], elem.selectionEnd = newSelection[1], newSelection;             // 44
      }                                                                                                              // 45
    };                                                                                                               // 46
    this.on('insert', insert_listener = function(pos, text) {                                                        // 47
      var transformCursor;                                                                                           // 48
                                                                                                                     // 49
      transformCursor = function(cursor) {                                                                           // 50
        if (pos < cursor) {                                                                                          // 51
          return cursor + text.length;                                                                               // 52
        } else {                                                                                                     // 53
          return cursor;                                                                                             // 54
        }                                                                                                            // 55
      };                                                                                                             // 56
      prevvalue = elem.value.replace(/\r\n/g, '\n');                                                                 // 57
      return replaceText(prevvalue.slice(0, pos) + text + prevvalue.slice(pos), transformCursor);                    // 58
    });                                                                                                              // 59
    this.on('delete', delete_listener = function(pos, text) {                                                        // 60
      var transformCursor;                                                                                           // 61
                                                                                                                     // 62
      transformCursor = function(cursor) {                                                                           // 63
        if (pos < cursor) {                                                                                          // 64
          return cursor - Math.min(text.length, cursor - pos);                                                       // 65
        } else {                                                                                                     // 66
          return cursor;                                                                                             // 67
        }                                                                                                            // 68
      };                                                                                                             // 69
      prevvalue = elem.value.replace(/\r\n/g, '\n');                                                                 // 70
      return replaceText(prevvalue.slice(0, pos) + prevvalue.slice(pos + text.length), transformCursor);             // 71
    });                                                                                                              // 72
    genOp = function(event) {                                                                                        // 73
      var onNextTick;                                                                                                // 74
                                                                                                                     // 75
      onNextTick = function(fn) {                                                                                    // 76
        return setTimeout(fn, 0);                                                                                    // 77
      };                                                                                                             // 78
      return onNextTick(function() {                                                                                 // 79
        if (elem.value !== prevvalue) {                                                                              // 80
          prevvalue = elem.value;                                                                                    // 81
          return applyChange(doc, doc.getText(), elem.value.replace(/\r\n/g, '\n'));                                 // 82
        }                                                                                                            // 83
      });                                                                                                            // 84
    };                                                                                                               // 85
    _ref = ['textInput', 'keydown', 'keyup', 'select', 'cut', 'paste'];                                              // 86
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                              // 87
      event = _ref[_i];                                                                                              // 88
      if (elem.addEventListener) {                                                                                   // 89
        elem.addEventListener(event, genOp, false);                                                                  // 90
      } else {                                                                                                       // 91
        elem.attachEvent('on' + event, genOp);                                                                       // 92
      }                                                                                                              // 93
    }                                                                                                                // 94
    return elem.detach_share = function() {                                                                          // 95
      var _j, _len1, _ref1, _results;                                                                                // 96
                                                                                                                     // 97
      _this.removeListener('insert', insert_listener);                                                               // 98
      _this.removeListener('delete', delete_listener);                                                               // 99
      _ref1 = ['textInput', 'keydown', 'keyup', 'select', 'cut', 'paste'];                                           // 100
      _results = [];                                                                                                 // 101
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {                                                         // 102
        event = _ref1[_j];                                                                                           // 103
        if (elem.removeEventListener) {                                                                              // 104
          _results.push(elem.removeEventListener(event, genOp, false));                                              // 105
        } else {                                                                                                     // 106
          _results.push(elem.detachEvent('on' + event, genOp));                                                      // 107
        }                                                                                                            // 108
      }                                                                                                              // 109
      return _results;                                                                                               // 110
    };                                                                                                               // 111
  });                                                                                                                // 112
                                                                                                                     // 113
}).call(this);                                                                                                       // 114
                                                                                                                     // 115
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/mizzao_sharejs/template.sharejs-templates.js                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("_sharejsText");                                                                                // 2
Template["_sharejsText"] = new Template("Template._sharejsText", (function() {                                       // 3
  var view = this;                                                                                                   // 4
  return HTML.TEXTAREA({                                                                                             // 5
    id: function() {                                                                                                 // 6
      return Spacebars.mustache(view.lookup("id"));                                                                  // 7
    },                                                                                                               // 8
    "data-docid": function() {                                                                                       // 9
      return Spacebars.mustache(view.lookup("docid"));                                                               // 10
    },                                                                                                               // 11
    "class": "shareJSText",                                                                                          // 12
    disabled: "",                                                                                                    // 13
    value: "Loading..."                                                                                              // 14
  });                                                                                                                // 15
}));                                                                                                                 // 16
                                                                                                                     // 17
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/mizzao_sharejs/sharejs-client.coffee.js                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ShareJSTextConnector,                                                                                            // 1
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;                                                                                       //
                                                                                                                     //
ShareJSConnector = (function() {                                                                                     // 1
  var getOptions;                                                                                                    // 3
                                                                                                                     //
  getOptions = function() {                                                                                          //
    return {                                                                                                         //
      origin: '//' + window.location.host + '/channel',                                                              //
      authentication: (typeof Meteor.userId === "function" ? Meteor.userId() : void 0) || null                       //
    };                                                                                                               //
  };                                                                                                                 //
                                                                                                                     //
  function ShareJSConnector(parentView) {                                                                            //
    var docIdVar, params;                                                                                            // 9
    docIdVar = new Blaze.ReactiveVar;                                                                                //
    parentView.onViewReady(function() {                                                                              //
      return this.autorun(function() {                                                                               //
        var data;                                                                                                    // 13
        data = Blaze.getData();                                                                                      //
        return docIdVar.set(data.docid);                                                                             //
      });                                                                                                            //
    });                                                                                                              //
    parentView.onViewDestroyed((function(_this) {                                                                    //
      return function() {                                                                                            //
        return _this.destroy();                                                                                      //
      };                                                                                                             //
    })(this));                                                                                                       //
    this.isCreated = false;                                                                                          //
    this.docIdVar = docIdVar;                                                                                        //
    params = Blaze.getData(parentView);                                                                              //
    this.configCallback = params.onRender;                                                                           //
    this.connectCallback = params.onConnect;                                                                         //
  }                                                                                                                  //
                                                                                                                     //
  ShareJSConnector.prototype.create = function() {                                                                   //
    var connector;                                                                                                   // 28
    if (this.isCreated) {                                                                                            //
      throw new Error("Already created");                                                                            // 28
    }                                                                                                                //
    connector = this;                                                                                                //
    this.isCreated = true;                                                                                           //
    this.view = this.createView();                                                                                   //
    this.view.onViewReady(function() {                                                                               //
      connector.rendered(this.firstNode());                                                                          //
      return this.autorun(function() {                                                                               //
        var docId;                                                                                                   // 39
        docId = connector.docIdVar.get();                                                                            //
        connector.disconnect();                                                                                      //
        if (docId) {                                                                                                 //
          return connector.connect(docId);                                                                           //
        }                                                                                                            //
      });                                                                                                            //
    });                                                                                                              //
    return this.view;                                                                                                // 45
  };                                                                                                                 //
                                                                                                                     //
  ShareJSConnector.prototype.rendered = function(element) {                                                          //
    return this.element = element;                                                                                   //
  };                                                                                                                 //
                                                                                                                     //
  ShareJSConnector.prototype.connect = function(docId, element) {                                                    //
    this.connectingId = docId;                                                                                       //
    return sharejs.open(docId, 'text', getOptions(), (function(_this) {                                              //
      return function(error, doc) {                                                                                  //
        if (error) {                                                                                                 //
          Meteor._debug(error);                                                                                      //
          return;                                                                                                    // 58
        }                                                                                                            //
        if (_this.connectingId !== doc.name) {                                                                       //
          return doc.close();                                                                                        //
        } else {                                                                                                     //
          return _this.attach(doc);                                                                                  //
        }                                                                                                            //
      };                                                                                                             //
    })(this));                                                                                                       //
  };                                                                                                                 //
                                                                                                                     //
  ShareJSConnector.prototype.attach = function(doc) {                                                                //
    return this.doc = doc;                                                                                           //
  };                                                                                                                 //
                                                                                                                     //
  ShareJSConnector.prototype.disconnect = function() {                                                               //
    if (this.doc != null) {                                                                                          //
      this.doc.close();                                                                                              //
      return this.doc = null;                                                                                        //
    }                                                                                                                //
  };                                                                                                                 //
                                                                                                                     //
  ShareJSConnector.prototype.destroy = function() {                                                                  //
    if (this.isDestroyed) {                                                                                          //
      throw new Error("Already destroyed");                                                                          // 80
    }                                                                                                                //
    this.disconnect();                                                                                               //
    this.view = null;                                                                                                //
    return this.isDestroyed = true;                                                                                  //
  };                                                                                                                 //
                                                                                                                     //
  return ShareJSConnector;                                                                                           //
                                                                                                                     //
})();                                                                                                                //
                                                                                                                     //
ShareJSTextConnector = (function(superClass) {                                                                       // 86
  extend(ShareJSTextConnector, superClass);                                                                          //
                                                                                                                     //
  function ShareJSTextConnector() {                                                                                  //
    return ShareJSTextConnector.__super__.constructor.apply(this, arguments);                                        //
  }                                                                                                                  //
                                                                                                                     //
  ShareJSTextConnector.prototype.createView = function() {                                                           //
    return Blaze.With(Blaze.getData, function() {                                                                    // 89
      return Template._sharejsText;                                                                                  //
    });                                                                                                              //
  };                                                                                                                 //
                                                                                                                     //
  ShareJSTextConnector.prototype.rendered = function(element) {                                                      //
    ShareJSTextConnector.__super__.rendered.apply(this, arguments);                                                  //
    this.textarea = element;                                                                                         //
    return typeof this.configCallback === "function" ? this.configCallback(this.textarea) : void 0;                  //
  };                                                                                                                 //
                                                                                                                     //
  ShareJSTextConnector.prototype.connect = function() {                                                              //
    this.textarea.disabled = true;                                                                                   //
    return ShareJSTextConnector.__super__.connect.apply(this, arguments);                                            //
  };                                                                                                                 //
                                                                                                                     //
  ShareJSTextConnector.prototype.attach = function(doc) {                                                            //
    ShareJSTextConnector.__super__.attach.apply(this, arguments);                                                    //
    doc.attach_textarea(this.textarea);                                                                              //
    this.textarea.disabled = false;                                                                                  //
    return typeof this.connectCallback === "function" ? this.connectCallback(this.textarea) : void 0;                //
  };                                                                                                                 //
                                                                                                                     //
  ShareJSTextConnector.prototype.disconnect = function() {                                                           //
    var ref;                                                                                                         // 107
    if ((ref = this.textarea) != null) {                                                                             //
      if (typeof ref.detach_share === "function") {                                                                  //
        ref.detach_share();                                                                                          //
      }                                                                                                              //
    }                                                                                                                //
    return ShareJSTextConnector.__super__.disconnect.apply(this, arguments);                                         //
  };                                                                                                                 //
                                                                                                                     //
  ShareJSTextConnector.prototype.destroy = function() {                                                              //
    ShareJSTextConnector.__super__.destroy.apply(this, arguments);                                                   //
    return this.textarea = null;                                                                                     //
  };                                                                                                                 //
                                                                                                                     //
  return ShareJSTextConnector;                                                                                       //
                                                                                                                     //
})(ShareJSConnector);                                                                                                //
                                                                                                                     //
UI.registerHelper("sharejsText", new Template('sharejsText', function() {                                            // 115
  return new ShareJSTextConnector(this).create();                                                                    // 116
}));                                                                                                                 // 115
                                                                                                                     //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['mizzao:sharejs'] = {}, {
  ShareJSConnector: ShareJSConnector
});

})();
