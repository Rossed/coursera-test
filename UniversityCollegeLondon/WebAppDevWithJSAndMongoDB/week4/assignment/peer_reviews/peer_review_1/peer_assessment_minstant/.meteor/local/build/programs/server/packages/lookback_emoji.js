(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;

/* Package-scope variables */
var __coffeescriptShare, Emojis;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/lookback_emoji/polyfill.js                                                                     //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
/*! https://mths.be/fromcodepoint v0.2.1 by @mathias */
if (!String.fromCodePoint) {
	(function() {
		var defineProperty = (function() {
			// IE 8 only supports `Object.defineProperty` on DOM elements
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch(error) {}
			return result;
		}());
		var stringFromCharCode = String.fromCharCode;
		var floor = Math.floor;
		var fromCodePoint = function(_) {
			var MAX_SIZE = 0x4000;
			var codeUnits = [];
			var highSurrogate;
			var lowSurrogate;
			var index = -1;
			var length = arguments.length;
			if (!length) {
				return '';
			}
			var result = '';
			while (++index < length) {
				var codePoint = Number(arguments[index]);
				if (
					!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
					codePoint < 0 || // not a valid Unicode code point
					codePoint > 0x10FFFF || // not a valid Unicode code point
					floor(codePoint) != codePoint // not an integer
				) {
					throw RangeError('Invalid code point: ' + codePoint);
				}
				if (codePoint <= 0xFFFF) { // BMP code point
					codeUnits.push(codePoint);
				} else { // Astral code point; split in surrogate halves
					// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
					codePoint -= 0x10000;
					highSurrogate = (codePoint >> 10) + 0xD800;
					lowSurrogate = (codePoint % 0x400) + 0xDC00;
					codeUnits.push(highSurrogate, lowSurrogate);
				}
				if (index + 1 == length || codeUnits.length > MAX_SIZE) {
					result += stringFromCharCode.apply(null, codeUnits);
					codeUnits.length = 0;
				}
			}
			return result;
		};
		if (defineProperty) {
			defineProperty(String, 'fromCodePoint', {
				'value': fromCodePoint,
				'configurable': true,
				'writable': true
			});
		} else {
			String.fromCodePoint = fromCodePoint;
		}
	}());
}

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
// packages/lookback_emoji/seed/seed.coffee.js                                                             //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Emojis.seed = function() {                                                                                 // 1
  var count, emojis;                                                                                       // 2
  Emojis.remove({});                                                                                       // 2
  emojis = JSON.parse(Assets.getText('seed/emojis.json'));                                                 // 2
  count = 0;                                                                                               // 2
  if (emojis && Array.isArray(emojis)) {                                                                   // 6
    count = emojis.reduce(function(memo, emoji) {                                                          // 7
      emoji.alias = emoji.aliases[0];                                                                      // 12
      emoji.tags = emoji.tags.concat(_.rest(emoji.aliases));                                               // 12
      delete emoji.aliases;                                                                                // 12
      Emojis.insert(emoji);                                                                                // 12
      return memo + 1;                                                                                     // 18
    }, 0);                                                                                                 //
  }                                                                                                        //
  return count;                                                                                            // 21
};                                                                                                         // 1
                                                                                                           //
Meteor.startup(function() {                                                                                // 1
  if (Emojis.find().count() === 0) {                                                                       // 24
    return Emojis.seed();                                                                                  //
  }                                                                                                        //
});                                                                                                        // 23
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

//# sourceMappingURL=lookback_emoji.js.map
