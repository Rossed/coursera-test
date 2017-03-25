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
var Mongo = Package.mongo.Mongo;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare, Emojis;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/lookback_emoji/polyfill.js                                                                     //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
/*! https://mths.be/fromcodepoint v0.2.1 by @mathias */                                                    // 1
if (!String.fromCodePoint) {                                                                               // 2
	(function() {                                                                                             // 3
		var defineProperty = (function() {                                                                       // 4
			// IE 8 only supports `Object.defineProperty` on DOM elements                                           // 5
			try {                                                                                                   // 6
				var object = {};                                                                                       // 7
				var $defineProperty = Object.defineProperty;                                                           // 8
				var result = $defineProperty(object, object, object) && $defineProperty;                               // 9
			} catch(error) {}                                                                                       // 10
			return result;                                                                                          // 11
		}());                                                                                                    // 12
		var stringFromCharCode = String.fromCharCode;                                                            // 13
		var floor = Math.floor;                                                                                  // 14
		var fromCodePoint = function(_) {                                                                        // 15
			var MAX_SIZE = 0x4000;                                                                                  // 16
			var codeUnits = [];                                                                                     // 17
			var highSurrogate;                                                                                      // 18
			var lowSurrogate;                                                                                       // 19
			var index = -1;                                                                                         // 20
			var length = arguments.length;                                                                          // 21
			if (!length) {                                                                                          // 22
				return '';                                                                                             // 23
			}                                                                                                       // 24
			var result = '';                                                                                        // 25
			while (++index < length) {                                                                              // 26
				var codePoint = Number(arguments[index]);                                                              // 27
				if (                                                                                                   // 28
					!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`                                         // 29
					codePoint < 0 || // not a valid Unicode code point                                                    // 30
					codePoint > 0x10FFFF || // not a valid Unicode code point                                             // 31
					floor(codePoint) != codePoint // not an integer                                                       // 32
				) {                                                                                                    // 33
					throw RangeError('Invalid code point: ' + codePoint);                                                 // 34
				}                                                                                                      // 35
				if (codePoint <= 0xFFFF) { // BMP code point                                                           // 36
					codeUnits.push(codePoint);                                                                            // 37
				} else { // Astral code point; split in surrogate halves                                               // 38
					// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae                              // 39
					codePoint -= 0x10000;                                                                                 // 40
					highSurrogate = (codePoint >> 10) + 0xD800;                                                           // 41
					lowSurrogate = (codePoint % 0x400) + 0xDC00;                                                          // 42
					codeUnits.push(highSurrogate, lowSurrogate);                                                          // 43
				}                                                                                                      // 44
				if (index + 1 == length || codeUnits.length > MAX_SIZE) {                                              // 45
					result += stringFromCharCode.apply(null, codeUnits);                                                  // 46
					codeUnits.length = 0;                                                                                 // 47
				}                                                                                                      // 48
			}                                                                                                       // 49
			return result;                                                                                          // 50
		};                                                                                                       // 51
		if (defineProperty) {                                                                                    // 52
			defineProperty(String, 'fromCodePoint', {                                                               // 53
				'value': fromCodePoint,                                                                                // 54
				'configurable': true,                                                                                  // 55
				'writable': true                                                                                       // 56
			});                                                                                                     // 57
		} else {                                                                                                 // 58
			String.fromCodePoint = fromCodePoint;                                                                   // 59
		}                                                                                                        // 60
	}());                                                                                                     // 61
}                                                                                                          // 62
                                                                                                           // 63
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/lookback_emoji/emojis.coffee.js                                                                //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var imagePath, isCustom, parse, shortnameRegexp, smileyRegexp, toCodePoints, toHex, toImage, wrap;        
                                                                                                           //
shortnameRegexp = /\B:([\w+-]+):/g;                                                                        // 3
                                                                                                           //
smileyRegexp = /\B([:;=#%XB8><](-|\.)?[']?[D|$S3XE<>OP)(\]\/\\]|-[_\.]-|<\/?3)/g;                          // 3
                                                                                                           //
toCodePoints = function(str) {                                                                             // 3
  var c1, c2, chars, i;                                                                                    // 9
  chars = [];                                                                                              // 9
  i = 0;                                                                                                   // 9
  while (i < str.length) {                                                                                 // 12
    c1 = str.charCodeAt(i);                                                                                // 13
    if (c1 >= 0xD800 && c1 < 0xDC00 && i + 1 < str.length) {                                               // 15
      c2 = str.charCodeAt(i + 1);                                                                          // 16
      if (c2 >= 0xDC00 && c2 < 0xE000) {                                                                   // 17
        chars.push(0x10000 + ((c1 - 0xD800) << 10) + (c2 - 0xDC00));                                       // 18
        i += 2;                                                                                            // 18
        continue;                                                                                          // 20
      }                                                                                                    //
    }                                                                                                      //
    chars.push(c1);                                                                                        // 13
    i++;                                                                                                   // 13
  }                                                                                                        //
  return chars;                                                                                            // 25
};                                                                                                         // 8
                                                                                                           //
isCustom = function(emoji) {                                                                               // 3
  return emoji && typeof emoji.emoji === 'undefined';                                                      //
};                                                                                                         // 27
                                                                                                           //
toHex = function(str) {                                                                                    // 3
  if (!str) {                                                                                              // 31
    return '';                                                                                             // 31
  }                                                                                                        //
  return toCodePoints(str).map(function(char) {                                                            //
    return char.toString(16);                                                                              //
  }).join('-');                                                                                            //
};                                                                                                         // 30
                                                                                                           //
imagePath = function(emoji) {                                                                              // 3
  if (isCustom(emoji)) {                                                                                   // 38
    return emoji.alias + ".png";                                                                           //
  } else {                                                                                                 //
    return (toHex(emoji.emoji).replace(/-fe0f\b/, '')) + ".png";                                           //
  }                                                                                                        //
};                                                                                                         // 37
                                                                                                           //
toImage = function(emoji) {                                                                                // 3
  return "<img src='" + emoji.path + "' title='" + emoji.alias + "' alt='" + (emoji.emoji || emoji.alias) + "' class='emoji'>";
};                                                                                                         // 43
                                                                                                           //
wrap = function(emoji) {                                                                                   // 3
  return "<span class='emoji' title='" + emoji.alias + "'>" + emoji.emoji + "</span>";                     //
};                                                                                                         // 46
                                                                                                           //
Emojis = new Mongo.Collection('emojis', {                                                                  // 3
  transform: function(emoji) {                                                                             // 50
    emoji.path = Emojis.basePath() + '/' + imagePath(emoji);                                               // 54
    emoji.toHTML = function() {                                                                            // 54
      if (!Emojis.isSupported || isCustom(this) || Emojis.useImages) {                                     // 57
        return Emojis.imageTemplate(this);                                                                 //
      } else {                                                                                             //
        return Emojis.template(this);                                                                      //
      }                                                                                                    //
    };                                                                                                     //
    emoji.toHex = function() {                                                                             // 54
      return toHex(this.emoji);                                                                            //
    };                                                                                                     //
    return emoji;                                                                                          // 62
  }                                                                                                        //
});                                                                                                        //
                                                                                                           //
if (Meteor.isServer) {                                                                                     // 64
  Emojis._ensureIndex({                                                                                    // 65
    alias: 1                                                                                               // 65
  });                                                                                                      //
  Emojis._ensureIndex({                                                                                    // 65
    ascii: 1                                                                                               // 66
  });                                                                                                      //
}                                                                                                          //
                                                                                                           //
parse = function(text, fn) {                                                                               // 3
  check(text, String);                                                                                     // 76
  check(fn, Match.Optional(Function));                                                                     // 76
  return text.replace(smileyRegexp, function(match, smiley, nose) {                                        //
    var emoji;                                                                                             // 81
    smiley = smiley.toUpperCase();                                                                         // 81
    smiley = nose ? smiley.replace(/:-/g, ':') : smiley;                                                   // 81
    emoji = Emojis.findOne({                                                                               // 81
      ascii: smiley                                                                                        // 84
    });                                                                                                    //
    if (emoji) {                                                                                           // 86
      if (fn) {                                                                                            // 87
        return fn(emoji);                                                                                  //
      } else {                                                                                             //
        return emoji;                                                                                      //
      }                                                                                                    //
    } else {                                                                                               //
      return match;                                                                                        // 89
    }                                                                                                      //
  }).replace(shortnameRegexp, function(match, alias) {                                                     //
    var emoji;                                                                                             // 92
    emoji = Emojis.findOne({                                                                               // 92
      alias: alias                                                                                         // 92
    });                                                                                                    //
    if (emoji) {                                                                                           // 94
      if (fn) {                                                                                            // 95
        return fn(emoji);                                                                                  //
      } else {                                                                                             //
        return emoji;                                                                                      //
      }                                                                                                    //
    } else {                                                                                               //
      return match;                                                                                        // 97
    }                                                                                                      //
  });                                                                                                      //
};                                                                                                         // 75
                                                                                                           //
Emojis._basePath = '/images/emojis';                                                                       // 3
                                                                                                           //
Emojis.setBasePath = function(path) {                                                                      // 3
  check(path, String);                                                                                     // 102
  return Emojis._basePath = path.replace(/\/+$/, '');                                                      //
};                                                                                                         // 101
                                                                                                           //
Emojis.basePath = function() {                                                                             // 3
  return Emojis._basePath;                                                                                 //
};                                                                                                         // 107
                                                                                                           //
Emojis.template = wrap;                                                                                    // 3
                                                                                                           //
Emojis.imageTemplate = toImage;                                                                            // 3
                                                                                                           //
Emojis.toUnicode = function(text) {                                                                        // 3
  return parse(text, function(emoji) {                                                                     //
    return emoji.emoji || '';                                                                              //
  });                                                                                                      //
};                                                                                                         // 116
                                                                                                           //
Emojis.parse = function(text) {                                                                            // 3
  return parse(text, function(emoji) {                                                                     //
    return emoji.toHTML();                                                                                 //
  });                                                                                                      //
};                                                                                                         // 119
                                                                                                           //
Emojis.isSupported = (function() {                                                                         // 3
  var canvas, context, smile;                                                                              // 124
  if (Meteor.isServer) {                                                                                   // 124
    return true;                                                                                           // 125
  }                                                                                                        //
  canvas = document.createElement('canvas');                                                               // 124
  if (!canvas.getContext) {                                                                                // 128
    return;                                                                                                // 129
  }                                                                                                        //
  context = canvas.getContext('2d');                                                                       // 124
  if (typeof context.fillText !== 'function') {                                                            // 133
    return;                                                                                                // 134
  }                                                                                                        //
  smile = String.fromCodePoint(0x1F604);                                                                   // 124
  context.textBaseline = "top";                                                                            // 124
  context.font = "32px Arial";                                                                             // 124
  context.fillText(smile, 0, 0);                                                                           // 124
  return context.getImageData(16, 16, 1, 1).data[0] !== 0;                                                 //
})();                                                                                                      // 123
                                                                                                           //
if (Meteor.isClient) {                                                                                     // 145
  Emojis.useImages || (Emojis.useImages = !Emojis.isSupported);                                            // 146
} else {                                                                                                   //
  Emojis.useImages || (Emojis.useImages = false);                                                          // 148
}                                                                                                          //
                                                                                                           //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/lookback_emoji/template.coffee.js                                                              //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var tmpl;                                                                                                  // 1
                                                                                                           //
tmpl = new Template('Template.emoji', function() {                                                         // 1
  var content;                                                                                             // 2
  content = '';                                                                                            // 2
  if (this.templateContentBlock) {                                                                         // 4
    content = Blaze._toText(this.templateContentBlock, HTML.TEXTMODE.STRING);                              // 6
  } else {                                                                                                 //
    content = this.parentView.dataVar.get();                                                               // 9
  }                                                                                                        //
  return HTML.Raw(Emojis.parse(content));                                                                  // 11
});                                                                                                        // 1
                                                                                                           //
Template.registerHelper('emoji', tmpl);                                                                    // 1
                                                                                                           //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['lookback:emoji'] = {}, {
  Emojis: Emojis
});

})();
