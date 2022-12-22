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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Modules/Billiard/Resources/assets/css.scss":
/*!********************************************************!*\
  !*** ./app/Modules/Billiard/Resources/assets/css.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/Modules/Buh/Resources/assets/js/animate.js":
/*!********************************************************!*\
  !*** ./app/Modules/Buh/Resources/assets/js/animate.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready(function ($) {
  //animate effect	
  $(".e_flash").hover(function () {
    $(this).addClass("animated flash");
  }, function () {
    $(this).removeClass("animated flash");
  });
  $(".e_bounce").hover(function () {
    $(this).addClass("animated bounce");
  }, function () {
    $(this).removeClass("animated bounce");
  });
  $(".e_shake").hover(function () {
    $(this).addClass("animated shake");
  }, function () {
    $(this).removeClass("animated shake");
  });
  $(".e_tada").hover(function () {
    $(this).addClass("animated tada");
  }, function () {
    $(this).removeClass("animated tada");
  });
  $(".e_swing").hover(function () {
    $(this).addClass("animated swing");
  }, function () {
    $(this).removeClass("animated swing");
  });
  $(".e_wobble").hover(function () {
    $(this).addClass("animated wobble");
  }, function () {
    $(this).removeClass("animated wobble");
  });
  $(".e_wiggle").hover(function () {
    $(this).addClass("animated wiggle");
  }, function () {
    $(this).removeClass("animated wiggle");
  });
  $(".e_pulse").hover(function () {
    $(this).addClass("animated pulse");
  }, function () {
    $(this).removeClass("animated pulse");
  });
  $(".e_flip").hover(function () {
    $(this).addClass("animated flip");
  }, function () {
    $(this).removeClass("animated flip");
  });
  $(".e_flipInX").hover(function () {
    $(this).addClass("animated flipInX");
  }, function () {
    $(this).removeClass("animated flipInX");
  });
  $(".e_flipOutX").hover(function () {
    $(this).addClass("animated flipOutX");
  }, function () {
    $(this).removeClass("animated flipOutX");
  });
  $(".e_flipInY").hover(function () {
    $(this).addClass("animated flipInY");
  }, function () {
    $(this).removeClass("animated flipInY");
  });
  $(".e_flipOutY").hover(function () {
    $(this).addClass("animated flipOutY");
  }, function () {
    $(this).removeClass("animated flipOutY");
  }); //Fading entrances

  $(".e_fadeIn").hover(function () {
    $(this).addClass("animated fadeIn");
  }, function () {
    $(this).removeClass("animated fadeIn");
  });
  $(".e_fadeInUp").hover(function () {
    $(this).addClass("animated fadeInUp");
  }, function () {
    $(this).removeClass("animated fadeInUp");
  });
  $(".e_fadeInDown").hover(function () {
    $(this).addClass("animated fadeInDown");
  }, function () {
    $(this).removeClass("animated fadeInDown");
  });
  $(".e_fadeInLeft").hover(function () {
    $(this).addClass("animated fadeInLeft");
  }, function () {
    $(this).removeClass("animated fadeInLeft");
  });
  $(".e_fadeInRight").hover(function () {
    $(this).addClass("animated fadeInRight");
  }, function () {
    $(this).removeClass("animated fadeInRight");
  });
  $(".e_fadeInUpBig").hover(function () {
    $(this).addClass("animated fadeInUpBig");
  }, function () {
    $(this).removeClass("animated fadeInUpBig");
  });
  $(".e_fadeInUpBig").hover(function () {
    $(this).addClass("animated fadeInUpBig");
  }, function () {
    $(this).removeClass("animated fadeInUpBig");
  });
  $(".e_fadeInDownBig").hover(function () {
    $(this).addClass("animated fadeInDownBig");
  }, function () {
    $(this).removeClass("animated fadeInDownBig");
  });
  $(".e_fadeInLeftBig").hover(function () {
    $(this).addClass("animated fadeInLeftBig");
  }, function () {
    $(this).removeClass("animated fadeInLeftBig");
  });
  $(".e_fadeInRightBig").hover(function () {
    $(this).addClass("animated fadeInRightBig");
  }, function () {
    $(this).removeClass("animated fadeInRightBig");
  }); //Fading exits

  $(".e_fadeOut").hover(function () {
    $(this).addClass("animated fadeOut");
  }, function () {
    $(this).removeClass("animated fadeOut");
  });
  $(".e_fadeOutUp").hover(function () {
    $(this).addClass("animated fadeOutUp");
  }, function () {
    $(this).removeClass("animated fadeOutUp");
  });
  $(".e_fadeOutDown").hover(function () {
    $(this).addClass("animated fadeOutDown");
  }, function () {
    $(this).removeClass("animated fadeOutDown");
  });
  $(".e_fadeOutLeft").hover(function () {
    $(this).addClass("animated fadeOutLeft");
  }, function () {
    $(this).removeClass("animated fadeOutLeft");
  });
  $(".e_fadeOutRight").hover(function () {
    $(this).addClass("animated fadeOutRight");
  }, function () {
    $(this).removeClass("animated fadeOutRight");
  });
  $(".e_fadeOutUpBig").hover(function () {
    $(this).addClass("animated fadeOutUpBig");
  }, function () {
    $(this).removeClass("animated fadeOutUpBig");
  });
  $(".e_fadeOutDownBig").hover(function () {
    $(this).addClass("animated fadeOutDownBig");
  }, function () {
    $(this).removeClass("animated fadeOutDownBig");
  });
  $(".e_fadeOutLeftBig").hover(function () {
    $(this).addClass("animated fadeOutLeftBig");
  }, function () {
    $(this).removeClass("animated fadeOutLeftBig");
  });
  $(".e_fadeOutRightBig").hover(function () {
    $(this).addClass("animated fadeOutRightBig");
  }, function () {
    $(this).removeClass("animated fadeOutRightBig");
  }); //Bouncing entrances

  $(".e_bounceIn").hover(function () {
    $(this).addClass("animated bounceIn");
  }, function () {
    $(this).removeClass("animated bounceIn");
  });
  $(".e_bounceInDown").hover(function () {
    $(this).addClass("animated bounceInDown");
  }, function () {
    $(this).removeClass("animated bounceInDown");
  });
  $(".e_bounceInUp").hover(function () {
    $(this).addClass("animated bounceInUp");
  }, function () {
    $(this).removeClass("animated bounceInUp");
  });
  $(".e_bounceInLeft").hover(function () {
    $(this).addClass("animated bounceInLeft");
  }, function () {
    $(this).removeClass("animated bounceInLeft");
  });
  $(".e_bounceInRight").hover(function () {
    $(this).addClass("animated bounceInRight");
  }, function () {
    $(this).removeClass("animated bounceInRight");
  }); //Bouncing exits

  $(".e_bounceOut").hover(function () {
    $(this).addClass("animated bounceOut");
  }, function () {
    $(this).removeClass("animated bounceOut");
  });
  $(".e_bounceOutDown").hover(function () {
    $(this).addClass("animated bounceOutDown");
  }, function () {
    $(this).removeClass("animated bounceOutDown");
  });
  $(".e_bounceOutUp").hover(function () {
    $(this).addClass("animated bounceOutUp");
  }, function () {
    $(this).removeClass("animated bounceOutUp");
  });
  $(".e_bounceOutLeft").hover(function () {
    $(this).addClass("animated bounceOutLeft");
  }, function () {
    $(this).removeClass("animated bounceOutLeft");
  });
  $(".e_bounceOutRight").hover(function () {
    $(this).addClass("animated bounceOutRight");
  }, function () {
    $(this).removeClass("animated bounceOutRight");
  }); //Rotating entrances	

  $(".e_rotateIn").hover(function () {
    $(this).addClass("animated rotateIn");
  }, function () {
    $(this).removeClass("animated rotateIn");
  });
  $(".e_rotateInDownLeft").hover(function () {
    $(this).addClass("animated rotateInDownLeft");
  }, function () {
    $(this).removeClass("animated rotateInDownLeft");
  });
  $(".e_rotateInDownRight").hover(function () {
    $(this).addClass("animated rotateInDownRight");
  }, function () {
    $(this).removeClass("animated rotateInDownRight");
  });
  $(".e_rotateInUpRight").hover(function () {
    $(this).addClass("animated rotateInUpRight");
  }, function () {
    $(this).removeClass("animated rotateInUpRight");
  });
  $(".e_rotateInUpLeft").hover(function () {
    $(this).addClass("animated rotateInUpLeft");
  }, function () {
    $(this).removeClass("animated rotateInUpLeft");
  }); //Rotating exits

  $(".e_rotateOut").hover(function () {
    $(this).addClass("animated rotateOut");
  }, function () {
    $(this).removeClass("animated rotateOut");
  });
  $(".e_rotateOutDownLeft").hover(function () {
    $(this).addClass("animated rotateOutDownLeft");
  }, function () {
    $(this).removeClass("animated rotateOutDownLeft");
  });
  $(".e_rotateOutDownRight").hover(function () {
    $(this).addClass("animated rotateOutDownRight");
  }, function () {
    $(this).removeClass("animated rotateOutDownRight");
  });
  $(".e_rotateOutUpLeft").hover(function () {
    $(this).addClass("animated rotateOutUpLeft");
  }, function () {
    $(this).removeClass("animated rotateOutUpLeft");
  });
  $(".e_rotateOutUpRight").hover(function () {
    $(this).addClass("animated rotateOutUpRight");
  }, function () {
    $(this).removeClass("animated rotateOutUpRight");
  }); //Lightspeed

  $(".e_lightSpeedIn").hover(function () {
    $(this).addClass("animated lightSpeedIn");
  }, function () {
    $(this).removeClass("animated lightSpeedIn");
  });
  $(".e_lightSpeedOut").hover(function () {
    $(this).addClass("animated lightSpeedOut");
  }, function () {
    $(this).removeClass("animated lightSpeedOut");
  }); //specials

  $(".e_hinge").hover(function () {
    $(this).addClass("animated hinge");
  }, function () {
    $(this).removeClass("animated hinge");
  });
  $(".e_rollIn").hover(function () {
    $(this).addClass("animated rollIn");
  }, function () {
    $(this).removeClass("animated rollIn");
  });
  $(".e_rollOut").hover(function () {
    $(this).addClass("animated rollOut");
  }, function () {
    $(this).removeClass("animated rollOut");
  });
});

/***/ }),

/***/ "./app/Modules/Buh/Resources/assets/js/bootstrap.min.js":
/*!**************************************************************!*\
  !*** ./app/Modules/Buh/Resources/assets/js/bootstrap.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery");
+function (a) {
  "use strict";

  function b() {
    var a = document.createElement("bootstrap"),
        b = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };

    for (var c in b) {
      if (void 0 !== a.style[c]) return {
        end: b[c]
      };
    }

    return !1;
  }

  a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;
    a(this).one(a.support.transition.end, function () {
      c = !0;
    });

    var e = function e() {
      c || a(d).trigger(a.support.transition.end);
    };

    return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b();
  });
}(jQuery), +function (a) {
  "use strict";

  var b = '[data-dismiss="alert"]',
      c = function c(_c) {
    a(_c).on("click", b, this.close);
  };

  c.prototype.close = function (b) {
    function c() {
      f.trigger("closed.bs.alert").remove();
    }

    var d = a(this),
        e = d.attr("data-target");
    e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
    var f = a(e);
    b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c());
  };

  var d = a.fn.alert;
  a.fn.alert = function (b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.alert");
      e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d);
    });
  }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function () {
    return a.fn.alert = d, this;
  }, a(document).on("click.bs.alert.data-api", b, c.prototype.close);
}(jQuery), +function (a) {
  "use strict";

  var b = function b(c, d) {
    this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.isLoading = !1;
  };

  b.DEFAULTS = {
    loadingText: "loading..."
  }, b.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();
    b += "Text", f.resetText || d.data("resetText", d[e]()), d[e](f[b] || this.options[b]), setTimeout(a.proxy(function () {
      "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
    }, this), 0);
  }, b.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');

    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
    }

    a && this.$element.toggleClass("active");
  };
  var c = a.fn.button;
  a.fn.button = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == _typeof(c) && c;
      e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c);
    });
  }, a.fn.button.Constructor = b, a.fn.button.noConflict = function () {
    return a.fn.button = c, this;
  }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (b) {
    var c = a(b.target);
    c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault();
  });
}(jQuery), +function (a) {
  "use strict";

  var b = function b(_b, c) {
    this.$element = a(_b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this));
  };

  b.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0
  }, b.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, b.prototype.getActiveIndex = function () {
    return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active);
  }, b.prototype.to = function (b) {
    var c = this,
        d = this.getActiveIndex();
    return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      c.to(b);
    }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]));
  }, b.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, b.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next");
  }, b.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev");
  }, b.prototype.slide = function (b, c) {
    var d = this.$element.find(".item.active"),
        e = c || d[b](),
        f = this.interval,
        g = "next" == b ? "left" : "right",
        h = "next" == b ? "first" : "last",
        i = this;

    if (!e.length) {
      if (!this.options.wrap) return;
      e = this.$element.find(".item")[h]();
    }

    if (e.hasClass("active")) return this.sliding = !1;
    var j = a.Event("slide.bs.carousel", {
      relatedTarget: e[0],
      direction: g
    });
    return this.$element.trigger(j), j.isDefaultPrevented() ? void 0 : (this.sliding = !0, f && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function () {
      var b = a(i.$indicators.children()[i.getActiveIndex()]);
      b && b.addClass("active");
    })), a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function () {
      e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
        i.$element.trigger("slid.bs.carousel");
      }, 0);
    }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), f && this.cycle(), this);
  };
  var c = a.fn.carousel;
  a.fn.carousel = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, b.DEFAULTS, d.data(), "object" == _typeof(c) && c),
          g = "string" == typeof c ? c : f.slide;
      e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = c, this;
  }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (b) {
    var c,
        d = a(this),
        e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
        f = a.extend({}, e.data(), d.data()),
        g = d.attr("data-slide-to");
    g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault();
  }), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var b = a(this);
      b.carousel(b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";

  var b = function b(c, d) {
    this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle();
  };

  b.DEFAULTS = {
    toggle: !0
  }, b.prototype.dimension = function () {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height";
  }, b.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b = a.Event("show.bs.collapse");

      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.$parent && this.$parent.find("> .panel > .in");

        if (c && c.length) {
          var d = c.data("bs.collapse");
          if (d && d.transitioning) return;
          c.collapse("hide"), d || c.data("bs.collapse", null);
        }

        var e = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;

        var f = function f() {
          this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
        };

        if (!a.support.transition) return f.call(this);
        var g = a.camelCase(["scroll", e].join("-"));
        this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g]);
      }
    }
  }, b.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");

      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;

        var d = function d() {
          this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
        };

        return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this);
      }
    }
  }, b.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  };
  var c = a.fn.collapse;
  a.fn.collapse = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.collapse"),
          f = a.extend({}, b.DEFAULTS, d.data(), "object" == _typeof(c) && c);
      !e && f.toggle && "show" == c && (c = !c), e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = c, this;
  }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (b) {
    var c,
        d = a(this),
        e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
        f = a(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : d.data(),
        i = d.attr("data-parent"),
        j = i && a(i);
    g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h);
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    a(d).remove(), a(e).each(function () {
      var d = c(a(this)),
          e = {
        relatedTarget: this
      };
      d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e));
    });
  }

  function c(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent();
  }

  var d = ".dropdown-backdrop",
      e = "[data-toggle=dropdown]",
      f = function f(b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };

  f.prototype.toggle = function (d) {
    var e = a(this);

    if (!e.is(".disabled, :disabled")) {
      var f = c(e),
          g = f.hasClass("open");

      if (b(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
        var h = {
          relatedTarget: this
        };
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
        f.toggleClass("open").trigger("shown.bs.dropdown", h), e.focus();
      }

      return !1;
    }
  }, f.prototype.keydown = function (b) {
    if (/(38|40|27)/.test(b.keyCode)) {
      var d = a(this);

      if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
        var f = c(d),
            g = f.hasClass("open");
        if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
        var h = " li:not(.divider):visible a",
            i = f.find("[role=menu]" + h + ", [role=listbox]" + h);

        if (i.length) {
          var j = i.index(i.filter(":focus"));
          38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).focus();
        }
      }
    }
  };
  var g = a.fn.dropdown;
  a.fn.dropdown = function (b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new f(this)), "string" == typeof b && d[b].call(c);
    });
  }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = g, this;
  }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu], [role=listbox]", f.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";

  var b = function b(_b2, c) {
    this.options = c, this.$element = a(_b2), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };

  b.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, b.prototype.toggle = function (a) {
    return this[this.isShown ? "hide" : "show"](a);
  }, b.prototype.show = function (b) {
    var c = this,
        d = a.Event("show.bs.modal", {
      relatedTarget: b
    });
    this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
      var d = a.support.transition && c.$element.hasClass("fade");
      c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
      var e = a.Event("shown.bs.modal", {
        relatedTarget: b
      });
      d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function () {
        c.$element.focus().trigger(e);
      }).emulateTransitionEnd(300) : c.$element.focus().trigger(e);
    }));
  }, b.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
  }, b.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus();
    }, this));
  }, b.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
  }, b.prototype.hideModal = function () {
    var a = this;
    this.$element.hide(), this.backdrop(function () {
      a.removeBackdrop(), a.$element.trigger("hidden.bs.modal");
    });
  }, b.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, b.prototype.backdrop = function (b) {
    var c = this.$element.hasClass("fade") ? "fade" : "";

    if (this.isShown && this.options.backdrop) {
      var d = a.support.transition && c;
      if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
        a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
      }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b();
    } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b();
  };
  var c = a.fn.modal;
  a.fn.modal = function (c, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, b.DEFAULTS, e.data(), "object" == _typeof(c) && c);
      f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d);
    });
  }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function () {
    return a.fn.modal = c, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (b) {
    var c = a(this),
        d = c.attr("href"),
        e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
        f = e.data("bs.modal") ? "toggle" : a.extend({
      remote: !/#/.test(d) && d
    }, e.data(), c.data());
    c.is("a") && b.preventDefault(), e.modal(f, this).one("hide", function () {
      c.is(":visible") && c.focus();
    });
  }), a(document).on("show.bs.modal", ".modal", function () {
    a(document.body).addClass("modal-open");
  }).on("hidden.bs.modal", ".modal", function () {
    a(document.body).removeClass("modal-open");
  });
}(jQuery), +function (a) {
  "use strict";

  var b = function b(a, _b3) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, _b3);
  };

  b.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1
  }, b.prototype.init = function (b, c, d) {
    this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);

    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }

    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle();
  }, b.prototype.getDefaults = function () {
    return b.DEFAULTS;
  }, b.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b;
  }, b.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();
    return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, b.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show();
  }, b.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide();
  }, b.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);

    if (this.hasContent() && this.enabled) {
      if (this.$element.trigger(b), b.isDefaultPrevented()) return;
      var c = this,
          d = this.tip();
      this.setContent(), this.options.animation && d.addClass("fade");
      var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement,
          f = /\s?auto?\s?/i,
          g = f.test(e);
      g && (e = e.replace(f, "") || "top"), d.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
      var h = this.getPosition(),
          i = d[0].offsetWidth,
          j = d[0].offsetHeight;

      if (g) {
        var k = this.$element.parent(),
            l = e,
            m = document.documentElement.scrollTop || document.body.scrollTop,
            n = "body" == this.options.container ? window.innerWidth : k.outerWidth(),
            o = "body" == this.options.container ? window.innerHeight : k.outerHeight(),
            p = "body" == this.options.container ? 0 : k.offset().left;
        e = "bottom" == e && h.top + h.height + j - m > o ? "top" : "top" == e && h.top - m - j < 0 ? "bottom" : "right" == e && h.right + i > n ? "left" : "left" == e && h.left - i < p ? "right" : e, d.removeClass(l).addClass(e);
      }

      var q = this.getCalculatedOffset(e, h, i, j);
      this.applyPlacement(q, e), this.hoverState = null;

      var r = function r() {
        c.$element.trigger("shown.bs." + c.type);
      };

      a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(150) : r();
    }
  }, b.prototype.applyPlacement = function (b, c) {
    var d,
        e = this.tip(),
        f = e[0].offsetWidth,
        g = e[0].offsetHeight,
        h = parseInt(e.css("margin-top"), 10),
        i = parseInt(e.css("margin-left"), 10);
    isNaN(h) && (h = 0), isNaN(i) && (i = 0), b.top = b.top + h, b.left = b.left + i, a.offset.setOffset(e[0], a.extend({
      using: function using(a) {
        e.css({
          top: Math.round(a.top),
          left: Math.round(a.left)
        });
      }
    }, b), 0), e.addClass("in");
    var j = e[0].offsetWidth,
        k = e[0].offsetHeight;

    if ("top" == c && k != g && (d = !0, b.top = b.top + g - k), /bottom|top/.test(c)) {
      var l = 0;
      b.left < 0 && (l = -2 * b.left, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight), this.replaceArrow(l - f + j, j, "left");
    } else this.replaceArrow(k - g, k, "top");

    d && e.offset(b);
  }, b.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
  }, b.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, b.prototype.hide = function () {
    function b() {
      "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type);
    }

    var c = this,
        d = this.tip(),
        e = a.Event("hide.bs." + this.type);
    return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.hoverState = null, this);
  }, b.prototype.fixTitle = function () {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, b.prototype.hasContent = function () {
    return this.getTitle();
  }, b.prototype.getPosition = function () {
    var b = this.$element[0];
    return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
      width: b.offsetWidth,
      height: b.offsetHeight
    }, this.$element.offset());
  }, b.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    };
  }, b.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, b.prototype.tip = function () {
    return this.$tip = this.$tip || a(this.options.template);
  }, b.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, b.prototype.validate = function () {
    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
  }, b.prototype.enable = function () {
    this.enabled = !0;
  }, b.prototype.disable = function () {
    this.enabled = !1;
  }, b.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, b.prototype.toggle = function (b) {
    var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
    c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, b.prototype.destroy = function () {
    clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type);
  };
  var c = a.fn.tooltip;
  a.fn.tooltip = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == _typeof(c) && c;
      (e || "destroy" != c) && (e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]());
    });
  }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = c, this;
  };
}(jQuery), +function (a) {
  "use strict";

  var b = function b(a, _b4) {
    this.init("popover", a, _b4);
  };

  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function () {
    return b.DEFAULTS;
  }, b.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, b.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, b.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, b.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  }, b.prototype.tip = function () {
    return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
  };
  var c = a.fn.popover;
  a.fn.popover = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == _typeof(c) && c;
      (e || "destroy" != c) && (e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]());
    });
  }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function () {
    return a.fn.popover = c, this;
  };
}(jQuery), +function (a) {
  "use strict";

  function b(c, d) {
    var e,
        f = a.proxy(this.process, this);
    this.$element = a(a(c).is("body") ? window : c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process();
  }

  b.DEFAULTS = {
    offset: 10
  }, b.prototype.refresh = function () {
    var b = this.$element[0] == window ? "offset" : "position";
    this.offsets = a([]), this.targets = a([]);
    {
      var c = this;
      this.$body.find(this.selector).map(function () {
        var d = a(this),
            e = d.data("target") || d.attr("href"),
            f = /^#./.test(e) && a(e);
        return f && f.length && f.is(":visible") && [[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]] || null;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).each(function () {
        c.offsets.push(this[0]), c.targets.push(this[1]);
      });
    }
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
        d = c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;
    if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
    if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);

    for (a = e.length; a--;) {
      g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
    }
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  };
  var c = a.fn.scrollspy;
  a.fn.scrollspy = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == _typeof(c) && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = c, this;
  }, a(window).on("load", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);
      b.scrollspy(b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";

  var b = function b(_b5) {
    this.element = a(_b5);
  };

  b.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");

    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a")[0],
          f = a.Event("show.bs.tab", {
        relatedTarget: e
      });

      if (b.trigger(f), !f.isDefaultPrevented()) {
        var g = a(d);
        this.activate(b.parent("li"), c), this.activate(g, g.parent(), function () {
          b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e
          });
        });
      }
    }
  }, b.prototype.activate = function (b, c, d) {
    function e() {
      f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d();
    }

    var f = c.find("> .active"),
        g = d && a.support.transition && f.hasClass("fade");
    g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in");
  };
  var c = a.fn.tab;
  a.fn.tab = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");
      e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]();
    });
  }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function () {
    return a.fn.tab = c, this;
  }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (b) {
    b.preventDefault(), a(this).tab("show");
  });
}(jQuery), +function (a) {
  "use strict";

  var b = function b(c, d) {
    this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition();
  };

  b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
    offset: 0
  }, b.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(b.RESET).addClass("affix");
    var a = this.$window.scrollTop(),
        c = this.$element.offset();
    return this.pinnedOffset = c.top - a;
  }, b.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, b.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var c = a(document).height(),
          d = this.$window.scrollTop(),
          e = this.$element.offset(),
          f = this.options.offset,
          g = f.top,
          h = f.bottom;
      "top" == this.affixed && (e.top += d), "object" != _typeof(f) && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
      var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;

      if (this.affixed !== i) {
        this.unpin && this.$element.css("top", "");
        var j = "affix" + (i ? "-" + i : ""),
            k = a.Event(j + ".bs.affix");
        this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
          top: c - h - this.$element.height()
        }));
      }
    }
  };
  var c = a.fn.affix;
  a.fn.affix = function (c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == _typeof(c) && c;
      e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function () {
    return a.fn.affix = c, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var b = a(this),
          c = b.data();
      c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c);
    });
  });
}(jQuery);

/***/ }),

/***/ "./app/Modules/Buh/Resources/assets/js/custom.js":
/*!*******************************************************!*\
  !*** ./app/Modules/Buh/Resources/assets/js/custom.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*global jQuery:false */
jQuery(document).ready(function ($) {
  "use strict"; //add some elements with animate effect

  $(".big-cta").hover(function () {
    $('.cta a').addClass("animated shake");
  }, function () {
    $('.cta a').removeClass("animated shake");
  });
  $(".box").hover(function () {
    $(this).find('.icon').addClass("animated fadeInDown");
    $(this).find('p').addClass("animated fadeInUp");
  }, function () {
    $(this).find('.icon').removeClass("animated fadeInDown");
    $(this).find('p').removeClass("animated fadeInUp");
  });
  $('.accordion').on('show', function (e) {
    $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
    $(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
    $(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
  });
  $('.accordion').on('hide', function (e) {
    $(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
    $(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
    $(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
  }); // tooltip

  $('.social-network li a, .options_box .color a').tooltip(); // fancybox

  $(".fancybox").fancybox({
    padding: 0,
    autoResize: true,
    beforeShow: function beforeShow() {
      this.title = $(this.element).attr('title');
      this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
    },
    helpers: {
      title: {
        type: 'inside'
      }
    }
  }); //toptop
  //scroll to top

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }

    if ($(this).scrollTop() > 50) {
      $('#toptop').fadeIn();
    } else {
      $('#toptop').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
  $('#post-slider').flexslider({
    // Primary Controls
    controlNav: false,
    //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,
    //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",
    //String: Set the text for the "previous" directionNav item
    nextText: "Next",
    //String: Set the text for the "next" directionNav item
    // Secondary Navigation
    keyboard: true,
    //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,
    //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,
    //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,
    //Boolean: Create pause/play dynamic element
    pauseText: 'Pause',
    //String: Set the text for the "pause" pausePlay item
    playText: 'Play',
    //String: Set the text for the "play" pausePlay item
    // Special properties
    controlsContainer: "",
    //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
    manualControls: "",
    //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    sync: "",
    //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "" //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

  });
  $('#main-slider').flexslider({
    namespace: "flex-",
    //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",
    //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",
    //String: Select your animation type, "fade" or "slide"
    easing: "swing",
    //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",
    //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,
    //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,
    //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,
    //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
    startAt: 0,
    //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,
    //Boolean: Animate slider automatically
    slideshowSpeed: 7000,
    //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,
    //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,
    //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,
    //Boolean: Randomize slide order
    // Usability features
    pauseOnAction: true,
    //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,
    //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    useCSS: true,
    //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,
    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,
    //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
    // Primary Controls
    controlNav: true,
    //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,
    //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",
    //String: Set the text for the "previous" directionNav item
    nextText: "Next",
    //String: Set the text for the "next" directionNav item
    // Secondary Navigation
    keyboard: true,
    //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,
    //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,
    //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,
    //Boolean: Create pause/play dynamic element
    pauseText: 'Pause',
    //String: Set the text for the "pause" pausePlay item
    playText: 'Play',
    //String: Set the text for the "play" pausePlay item
    // Special properties
    controlsContainer: "",
    //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
    manualControls: "",
    //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    sync: "",
    //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "" //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

  });
});

/***/ }),

/***/ "./app/Modules/Buh/Resources/assets/js/jquery.easing.1.3.js":
/*!******************************************************************!*\
  !*** ./app/Modules/Buh/Resources/assets/js/jquery.easing.1.3.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
  def: 'easeOutQuad',
  swing: function swing(x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function easeInQuad(x, t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function easeOutQuad(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function easeInOutQuad(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * (--t * (t - 2) - 1) + b;
  },
  easeInCubic: function easeInCubic(x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function easeOutCubic(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: function easeInQuart(x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function easeOutQuart(x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function easeInOutQuart(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: function easeInQuint(x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function easeOutQuint(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function easeInOutQuint(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: function easeInSine(x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function easeOutSine(x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function easeInOutSine(x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function easeInExpo(x, t, b, c, d) {
    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function easeOutExpo(x, t, b, c, d) {
    return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  },
  easeInOutExpo: function easeInOutExpo(x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function easeInCirc(x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function easeOutCirc(x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function easeInOutCirc(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },
  easeInElastic: function easeInElastic(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;

    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);

    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function easeOutElastic(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;

    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);

    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function easeInOutElastic(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (.3 * 1.5);

    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);

    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
  },
  easeInBack: function easeInBack(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function easeOutBack(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function easeInOutBack(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  },
  easeInBounce: function easeInBounce(x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  },
  easeOutBounce: function easeOutBounce(x, t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
    }
  },
  easeInOutBounce: function easeInOutBounce(x, t, b, c, d) {
    if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
  }
});
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/***/ }),

/***/ "./app/Modules/Buh/Resources/assets/js/jquery.fancybox-media.js":
/*!**********************************************************************!*\
  !*** ./app/Modules/Buh/Resources/assets/js/jquery.fancybox-media.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Media helper for fancyBox
 * version: 1.0.5 (Tue, 23 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *	       helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function ($) {
  "use strict"; //Shortcut for fancyBox object

  var F = $.fancybox,
      format = function format(url, rez, params) {
    params = params || '';

    if ($.type(params) === "object") {
      params = $.param(params, true);
    }

    $.each(rez, function (key, value) {
      url = url.replace('$' + key, value || '');
    });

    if (params.length) {
      url += (url.indexOf('?') > 0 ? '&' : '?') + params;
    }

    return url;
  }; //Add helper object


  F.helpers.media = {
    defaults: {
      youtube: {
        matcher: /(youtube\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
        params: {
          autoplay: 1,
          autohide: 1,
          fs: 1,
          rel: 0,
          hd: 1,
          wmode: 'opaque',
          enablejsapi: 1
        },
        type: 'iframe',
        url: '//www.youtube.com/embed/$3'
      },
      vimeo: {
        matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
        params: {
          autoplay: 1,
          hd: 1,
          show_title: 1,
          show_byline: 1,
          show_portrait: 0,
          fullscreen: 1
        },
        type: 'iframe',
        url: '//player.vimeo.com/video/$1'
      },
      metacafe: {
        matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
        params: {
          autoPlay: 'yes'
        },
        type: 'swf',
        url: function url(rez, params, obj) {
          obj.swf.flashVars = 'playerVars=' + $.param(params, true);
          return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
        }
      },
      dailymotion: {
        matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
        params: {
          additionalInfos: 0,
          autoStart: 1
        },
        type: 'swf',
        url: '//www.dailymotion.com/swf/video/$1'
      },
      twitvid: {
        matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
        params: {
          autoplay: 0
        },
        type: 'iframe',
        url: '//www.twitvid.com/embed.php?guid=$1'
      },
      twitpic: {
        matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
        type: 'image',
        url: '//twitpic.com/show/full/$1/'
      },
      instagram: {
        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
        type: 'image',
        url: '//$1/p/$2/media/'
      },
      google_maps: {
        matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
        type: 'iframe',
        url: function url(rez) {
          return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
        }
      }
    },
    beforeLoad: function beforeLoad(opts, obj) {
      var url = obj.href || '',
          type = false,
          what,
          item,
          rez,
          params;

      for (what in opts) {
        item = opts[what];
        rez = url.match(item.matcher);

        if (rez) {
          type = item.type;
          params = $.extend(true, {}, item.params, obj[what] || ($.isPlainObject(opts[what]) ? opts[what].params : null));
          url = $.type(item.url) === "function" ? item.url.call(this, rez, params, obj) : format(item.url, rez, params);
          break;
        }
      }

      if (type) {
        obj.href = url;
        obj.type = type;
        obj.autoHeight = false;
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./app/Modules/Buh/Resources/assets/js/jquery.fancybox.pack.js":
/*!*********************************************************************!*\
  !*** ./app/Modules/Buh/Resources/assets/js/jquery.fancybox.pack.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! fancyBox v2.1.4 fancyapps.com | fancyapps.com/fancybox/#license */
(function (C, z, f, r) {
  var q = f(C),
      n = f(z),
      b = f.fancybox = function () {
    b.open.apply(this, arguments);
  },
      H = navigator.userAgent.match(/msie/),
      w = null,
      s = z.createTouch !== r,
      t = function t(a) {
    return a && a.hasOwnProperty && a instanceof f;
  },
      p = function p(a) {
    return a && "string" === f.type(a);
  },
      F = function F(a) {
    return p(a) && 0 < a.indexOf("%");
  },
      l = function l(a, d) {
    var e = parseInt(a, 10) || 0;
    d && F(a) && (e *= b.getViewport()[d] / 100);
    return Math.ceil(e);
  },
      x = function x(a, b) {
    return l(a, b) + "px";
  };

  f.extend(b, {
    version: "2.1.4",
    defaults: {
      padding: 15,
      margin: 20,
      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,
      autoSize: !0,
      autoHeight: !1,
      autoWidth: !1,
      autoResize: !0,
      autoCenter: !s,
      fitToView: !0,
      aspectRatio: !1,
      topRatio: 0.5,
      leftRatio: 0.5,
      scrolling: "auto",
      wrapCSS: "",
      arrows: !0,
      closeBtn: !0,
      closeClick: !1,
      nextClick: !1,
      mouseWheel: !0,
      autoPlay: !1,
      playSpeed: 3E3,
      preload: 3,
      modal: !1,
      loop: !0,
      ajax: {
        dataType: "html",
        headers: {
          "X-fancyBox": !0
        }
      },
      iframe: {
        scrolling: "auto",
        preload: !0
      },
      swf: {
        wmode: "transparent",
        allowfullscreen: "true",
        allowscriptaccess: "always"
      },
      keys: {
        next: {
          13: "left",
          34: "up",
          39: "left",
          40: "up"
        },
        prev: {
          8: "right",
          33: "down",
          37: "right",
          38: "down"
        },
        close: [27],
        play: [32],
        toggle: [70]
      },
      direction: {
        next: "left",
        prev: "right"
      },
      scrollOutside: !0,
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,
      tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (H ? ' allowtransparency="true"' : "") + "></iframe>",
        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><i class="font-icon-remove"></i></a>',
        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span><i class="font-icon-arrow-simple-right"></i></span></a>',
        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span><i class="font-icon-arrow-simple-left"></i></span></a>'
      },
      openEffect: "fade",
      openSpeed: 250,
      openEasing: "swing",
      openOpacity: !0,
      openMethod: "zoomIn",
      closeEffect: "fade",
      closeSpeed: 250,
      closeEasing: "swing",
      closeOpacity: !0,
      closeMethod: "zoomOut",
      nextEffect: "elastic",
      nextSpeed: 250,
      nextEasing: "swing",
      nextMethod: "changeIn",
      prevEffect: "elastic",
      prevSpeed: 250,
      prevEasing: "swing",
      prevMethod: "changeOut",
      helpers: {
        overlay: !0,
        title: !0
      },
      onCancel: f.noop,
      beforeLoad: f.noop,
      afterLoad: f.noop,
      beforeShow: f.noop,
      afterShow: f.noop,
      beforeChange: f.noop,
      beforeClose: f.noop,
      afterClose: f.noop
    },
    group: {},
    opts: {},
    previous: null,
    coming: null,
    current: null,
    isActive: !1,
    isOpen: !1,
    isOpened: !1,
    wrap: null,
    skin: null,
    outer: null,
    inner: null,
    player: {
      timer: null,
      isActive: !1
    },
    ajaxLoad: null,
    imgPreload: null,
    transitions: {},
    helpers: {},
    open: function open(a, d) {
      if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
        var k = {},
            g,
            h,
            j,
            m,
            l;
        "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
          href: c.data("fancybox-href") || c.attr("href"),
          title: c.data("fancybox-title") || c.attr("title"),
          isDom: !0,
          element: c
        }, f.metadata && f.extend(!0, k, c.metadata())) : k = c);
        g = d.href || k.href || (p(c) ? c : null);
        h = d.title !== r ? d.title : k.title || "";
        m = (j = d.content || k.content) ? "html" : d.type || k.type;
        !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
        p(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : p(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
        j || ("inline" === m ? g ? j = f(p(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && !g && k.isDom && (m = "inline", j = c));
        f.extend(k, {
          href: g,
          type: m,
          content: j,
          title: h,
          selector: l
        });
        a[e] = k;
      }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== r && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index);
    },
    cancel: function cancel() {
      var a = b.coming;
      a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a));
    },
    close: function close(a) {
      b.cancel();
      !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())));
    },
    play: function play(a) {
      var d = function d() {
        clearTimeout(b.player.timer);
      },
          e = function e() {
        d();
        b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed));
      },
          c = function c() {
        d();
        f("body").unbind(".player");
        b.player.isActive = !1;
        b.trigger("onPlayEnd");
      };

      if (!0 === a || !b.player.isActive && !1 !== a) {
        if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, f("body").bind({
          "afterShow.player onUpdate.player": e,
          "onCancel.player beforeClose.player": c,
          "beforeLoad.player": d
        }), e(), b.trigger("onPlayStart");
      } else c();
    },
    next: function next(a) {
      var d = b.current;
      d && (p(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"));
    },
    prev: function prev(a) {
      var d = b.current;
      d && (p(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"));
    },
    jumpto: function jumpto(a, d, e) {
      var c = b.current;
      c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== r && (b.cancel(), b._start(a)));
    },
    reposition: function reposition(a, d) {
      var e = b.current,
          c = e ? e.wrap : null,
          k;
      c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)));
    },
    update: function update(a) {
      var d = a && a.type,
          e = !d || "orientationchange" === d;
      e && (clearTimeout(w), w = null);
      b.isOpen && !w && (w = setTimeout(function () {
        var c = b.current;
        c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), w = null);
      }, e && !s ? 0 : 300));
    },
    toggle: function toggle(a) {
      b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update());
    },
    hideLoading: function hideLoading() {
      n.unbind(".loading");
      f("#fancybox-loading").remove();
    },
    showLoading: function showLoading() {
      var a, d;
      b.hideLoading();
      a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
      n.bind("keydown.loading", function (a) {
        if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel();
      });
      b.defaults.fixed || (d = b.getViewport(), a.css({
        position: "absolute",
        top: 0.5 * d.h + d.y,
        left: 0.5 * d.w + d.x
      }));
    },
    getViewport: function getViewport() {
      var a = b.current && b.current.locked || !1,
          d = {
        x: q.scrollLeft(),
        y: q.scrollTop()
      };
      a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && C.innerWidth ? C.innerWidth : q.width(), d.h = s && C.innerHeight ? C.innerHeight : q.height());
      return d;
    },
    unbindEvents: function unbindEvents() {
      b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
      n.unbind(".fb");
      q.unbind(".fb");
    },
    bindEvents: function bindEvents() {
      var a = b.current,
          d;
      a && (q.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && n.bind("keydown.fb", function (e) {
        var c = e.which || e.keyCode,
            k = e.target || e.srcElement;
        if (27 === c && b.coming) return !1;
        !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]")) && f.each(d, function (d, k) {
          if (1 < a.group.length && k[c] !== r) return b[d](k[c]), e.preventDefault(), !1;
          if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1;
        });
      }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
        for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) {
          j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
        }

        if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
          if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
          d.preventDefault();
        }
      }));
    },
    trigger: function trigger(a, d) {
      var e,
          c = d || b.coming || b.current;

      if (c) {
        f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
        if (!1 === e) return !1;
        c.helpers && f.each(c.helpers, function (d, e) {
          e && b.helpers[d] && f.isFunction(b.helpers[d][a]) && (e = f.extend(!0, {}, b.helpers[d].defaults, e), b.helpers[d][a](e, c));
        });
        f.event.trigger(a + ".fb");
      }
    },
    isImage: function isImage(a) {
      return p(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i);
    },
    isSWF: function isSWF(a) {
      return p(a) && a.match(/\.(swf)((\?|#).*)?$/i);
    },
    _start: function _start(a) {
      var d = {},
          e,
          c;
      a = l(a);
      e = b.group[a] || null;
      if (!e) return !1;
      d = f.extend(!0, {}, b.opts, e);
      e = d.margin;
      c = d.padding;
      "number" === f.type(e) && (d.margin = [e, e, e, e]);
      "number" === f.type(c) && (d.padding = [c, c, c, c]);
      d.modal && f.extend(!0, d, {
        closeBtn: !1,
        closeClick: !1,
        nextClick: !1,
        arrows: !1,
        mouseWheel: !1,
        keys: null,
        helpers: {
          overlay: {
            closeClick: !1
          }
        }
      });
      d.autoSize && (d.autoWidth = d.autoHeight = !0);
      "auto" === d.width && (d.autoWidth = !0);
      "auto" === d.height && (d.autoHeight = !0);
      d.group = b.group;
      d.index = a;
      b.coming = d;
      if (!1 === b.trigger("beforeLoad")) b.coming = null;else {
        c = d.type;
        e = d.href;
        if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
        b.isActive = !0;
        if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
        "image" === c && (d.aspectRatio = !0);
        "iframe" === c && s && (d.scrolling = "scroll");
        d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
        f.extend(d, {
          skin: f(".fancybox-skin", d.wrap),
          outer: f(".fancybox-outer", d.wrap),
          inner: f(".fancybox-inner", d.wrap)
        });
        f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
          d.skin.css("padding" + b, x(d.padding[a]));
        });
        b.trigger("onReady");

        if ("inline" === c || "html" === c) {
          if (!d.content || !d.content.length) return b._error("content");
        } else if (!e) return b._error("href");

        "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad();
      }
    },
    _error: function _error(a) {
      f.extend(b.coming, {
        type: "html",
        autoWidth: !0,
        autoHeight: !0,
        minWidth: 0,
        minHeight: 0,
        scrolling: "no",
        hasError: a,
        content: b.coming.tpl.error
      });

      b._afterLoad();
    },
    _loadImage: function _loadImage() {
      var a = b.imgPreload = new Image();

      a.onload = function () {
        this.onload = this.onerror = null;
        b.coming.width = this.width;
        b.coming.height = this.height;

        b._afterLoad();
      };

      a.onerror = function () {
        this.onload = this.onerror = null;

        b._error("image");
      };

      a.src = b.coming.href;
      !0 !== a.complete && b.showLoading();
    },
    _loadAjax: function _loadAjax() {
      var a = b.coming;
      b.showLoading();
      b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
        url: a.href,
        error: function error(a, e) {
          b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading();
        },
        success: function success(d, e) {
          "success" === e && (a.content = d, b._afterLoad());
        }
      }));
    },
    _loadIframe: function _loadIframe() {
      var a = b.coming,
          d = f(a.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
      f(a.wrap).bind("onReset", function () {
        try {
          f(this).find("iframe").hide().attr("src", "//about:blank").end().empty();
        } catch (a) {}
      });
      a.iframe.preload && (b.showLoading(), d.one("load", function () {
        f(this).data("ready", 1);
        s || f(this).bind("load.fb", b.update);
        f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();

        b._afterLoad();
      }));
      a.content = d.appendTo(a.inner);
      a.iframe.preload || b._afterLoad();
    },
    _preloadImages: function _preloadImages() {
      var a = b.group,
          d = b.current,
          e = a.length,
          c = d.preload ? Math.min(d.preload, e - 1) : 0,
          f,
          g;

      for (g = 1; g <= c; g += 1) {
        f = a[(d.index + g) % e], "image" === f.type && f.href && (new Image().src = f.href);
      }
    },
    _afterLoad: function _afterLoad() {
      var a = b.coming,
          d = b.current,
          e,
          c,
          k,
          g,
          h;
      b.hideLoading();
      if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;else {
        d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
        b.unbindEvents();
        e = a.content;
        c = a.type;
        k = a.scrolling;
        f.extend(b, {
          wrap: a.wrap,
          skin: a.skin,
          outer: a.outer,
          inner: a.inner,
          current: a,
          previous: d
        });
        g = a.href;

        switch (c) {
          case "inline":
          case "ajax":
          case "html":
            a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
              f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1);
            }));
            break;

          case "image":
            e = a.tpl.image.replace("{href}", g);
            break;

          case "swf":
            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) {
              e += '<param name="' + a + '" value="' + b + '"></param>';
              h += " " + a + '="' + b + '"';
            }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>";
        }

        (!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
        b.trigger("beforeShow");
        a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);

        b._setDimension();

        b.reposition();
        b.isOpen = !1;
        b.coming = null;
        b.bindEvents();

        if (b.isOpened) {
          if (d.prevMethod) b.transitions[d.prevMethod]();
        } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();

        b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();

        b._preloadImages();
      }
    },
    _setDimension: function _setDimension() {
      var a = b.getViewport(),
          d = 0,
          e = !1,
          c = !1,
          e = b.wrap,
          k = b.skin,
          g = b.inner,
          h = b.current,
          c = h.width,
          j = h.height,
          m = h.minWidth,
          u = h.minHeight,
          n = h.maxWidth,
          v = h.maxHeight,
          s = h.scrolling,
          q = h.scrollOutside ? h.scrollbarWidth : 0,
          y = h.margin,
          p = l(y[1] + y[3]),
          r = l(y[0] + y[2]),
          z,
          A,
          t,
          D,
          B,
          G,
          C,
          E,
          w;
      e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
      y = l(k.outerWidth(!0) - k.width());
      z = l(k.outerHeight(!0) - k.height());
      A = p + y;
      t = r + z;
      D = F(c) ? (a.w - A) * l(c) / 100 : c;
      B = F(j) ? (a.h - t) * l(j) / 100 : j;

      if ("iframe" === h.type) {
        if (w = h.content, h.autoHeight && 1 === w.data("ready")) try {
          w[0].contentWindow.document.location && (g.width(D).height(9999), G = w.contents().find("body"), q && G.css("overflow-x", "hidden"), B = G.height());
        } catch (H) {}
      } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(D), h.autoHeight || g.height(B), h.autoWidth && (D = g.width()), h.autoHeight && (B = g.height()), g.removeClass("fancybox-tmp");

      c = l(D);
      j = l(B);
      E = D / B;
      m = l(F(m) ? l(m, "w") - A : m);
      n = l(F(n) ? l(n, "w") - A : n);
      u = l(F(u) ? l(u, "h") - t : u);
      v = l(F(v) ? l(v, "h") - t : v);
      G = n;
      C = v;
      h.fitToView && (n = Math.min(a.w - A, n), v = Math.min(a.h - t, v));
      A = a.w - p;
      r = a.h - r;
      h.aspectRatio ? (c > n && (c = n, j = l(c / E)), j > v && (j = v, c = l(j * E)), c < m && (c = m, j = l(c / E)), j < u && (j = u, c = l(j * E))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, v)));
      if (h.fitToView) if (g.width(c).height(j), e.width(c + y), a = e.width(), p = e.height(), h.aspectRatio) for (; (a > A || p > r) && c > m && j > u && !(19 < d++);) {
        j = Math.max(u, Math.min(v, j - 10)), c = l(j * E), c < m && (c = m, j = l(c / E)), c > n && (c = n, j = l(c / E)), g.width(c).height(j), e.width(c + y), a = e.width(), p = e.height();
      } else c = Math.max(m, Math.min(c, c - (a - A))), j = Math.max(u, Math.min(j, j - (p - r)));
      q && "auto" === s && j < B && c + y + q < A && (c += q);
      g.width(c).height(j);
      e.width(c + y);
      a = e.width();
      p = e.height();
      e = (a > A || p > r) && c > m && j > u;
      c = h.aspectRatio ? c < G && j < C && c < D && j < B : (c < G || j < C) && (c < D || j < B);
      f.extend(h, {
        dim: {
          width: x(a),
          height: x(p)
        },
        origWidth: D,
        origHeight: B,
        canShrink: e,
        canExpand: c,
        wPadding: y,
        hPadding: z,
        wrapSpace: p - k.outerHeight(!0),
        skinSpace: k.height() - j
      });
      !w && h.autoHeight && j > u && j < v && !c && g.height("auto");
    },
    _getPosition: function _getPosition(a) {
      var d = b.current,
          e = b.getViewport(),
          c = d.margin,
          f = b.wrap.width() + c[1] + c[3],
          g = b.wrap.height() + c[0] + c[2],
          c = {
        position: "absolute",
        top: c[0],
        left: c[3]
      };
      d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
      c.top = x(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
      c.left = x(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
      return c;
    },
    _afterZoomIn: function _afterZoomIn() {
      var a = b.current;
      a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
        !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]());
      }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
        a.preventDefault();
        b.close();
      }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()));
    },
    _afterZoomOut: function _afterZoomOut(a) {
      a = a || b.current;
      f(".fancybox-wrap").trigger("onReset").remove();
      f.extend(b, {
        group: {},
        opts: {},
        router: !1,
        current: null,
        isActive: !1,
        isOpened: !1,
        isOpen: !1,
        isClosing: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null
      });
      b.trigger("afterClose", a);
    }
  });
  b.transitions = {
    getOrigPosition: function getOrigPosition() {
      var a = b.current,
          d = a.element,
          e = a.orig,
          c = {},
          f = 50,
          g = 50,
          h = a.hPadding,
          j = a.wPadding,
          m = b.getViewport();
      !e && a.isDom && d.is(":visible") && (e = d.find("img:first"), e.length || (e = d));
      t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
      if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;
      return c = {
        top: x(c.top - h * a.topRatio),
        left: x(c.left - j * a.leftRatio),
        width: x(f + j),
        height: x(g + h)
      };
    },
    step: function step(a, d) {
      var e,
          c,
          f = d.prop;
      c = b.current;
      var g = c.wrapSpace,
          h = c.skinSpace;
      if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e));
    },
    zoomIn: function zoomIn() {
      var a = b.current,
          d = a.pos,
          e = a.openEffect,
          c = "elastic" === e,
          k = f.extend({
        opacity: 1
      }, d);
      delete k.position;
      c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
      b.wrap.css(d).animate(k, {
        duration: "none" === e ? 0 : a.openSpeed,
        easing: a.openEasing,
        step: c ? this.step : null,
        complete: b._afterZoomIn
      });
    },
    zoomOut: function zoomOut() {
      var a = b.current,
          d = a.closeEffect,
          e = "elastic" === d,
          c = {
        opacity: 0.1
      };
      e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
      b.wrap.animate(c, {
        duration: "none" === d ? 0 : a.closeSpeed,
        easing: a.closeEasing,
        step: e ? this.step : null,
        complete: b._afterZoomOut
      });
    },
    changeIn: function changeIn() {
      var a = b.current,
          d = a.nextEffect,
          e = a.pos,
          c = {
        opacity: 1
      },
          f = b.direction,
          g;
      e.opacity = 0.1;
      "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = x(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = x(l(e[g]) + 200), c[g] = "-=200px"));
      "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
        duration: a.nextSpeed,
        easing: a.nextEasing,
        complete: b._afterZoomIn
      });
    },
    changeOut: function changeOut() {
      var a = b.previous,
          d = a.prevEffect,
          e = {
        opacity: 0.1
      },
          c = b.direction;
      "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
      a.wrap.animate(e, {
        duration: "none" === d ? 0 : a.prevSpeed,
        easing: a.prevEasing,
        complete: function complete() {
          f(this).trigger("onReset").remove();
        }
      });
    }
  };
  b.helpers.overlay = {
    defaults: {
      closeClick: !0,
      speedOut: 200,
      showEarly: !0,
      css: {},
      locked: !s,
      fixed: !0
    },
    overlay: null,
    fixed: !1,
    create: function create(a) {
      a = f.extend({}, this.defaults, a);
      this.overlay && this.close();
      this.overlay = f('<div class="fancybox-overlay"></div>').appendTo("body");
      this.fixed = !1;
      a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0);
    },
    open: function open(a) {
      var d = this;
      a = f.extend({}, this.defaults, a);
      this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
      this.fixed || (q.bind("resize.overlay", f.proxy(this.update, this)), this.update());
      a.closeClick && this.overlay.bind("click.overlay", function (a) {
        f(a.target).hasClass("fancybox-overlay") && (b.isActive ? b.close() : d.close());
      });
      this.overlay.css(a.css).show();
    },
    close: function close() {
      f(".fancybox-overlay").remove();
      q.unbind("resize.overlay");
      this.overlay = null;
      !1 !== this.margin && (f("body").css("margin-right", this.margin), this.margin = !1);
      this.el && this.el.removeClass("fancybox-lock");
    },
    update: function update() {
      var a = "100%",
          b;
      this.overlay.width(a).height("100%");
      H ? (b = Math.max(z.documentElement.offsetWidth, z.body.offsetWidth), n.width() > b && (a = n.width())) : n.width() > q.width() && (a = n.width());
      this.overlay.width(a).height(n.height());
    },
    onReady: function onReady(a, b) {
      f(".fancybox-overlay").stop(!0, !0);
      this.overlay || (this.margin = n.height() > q.height() || "scroll" === f("body").css("overflow-y") ? f("body").css("margin-right") : !1, this.el = z.all && !z.querySelector ? f("html") : f("body"), this.create(a));
      a.locked && this.fixed && (b.locked = this.overlay.append(b.wrap), b.fixed = !1);
      !0 === a.showEarly && this.beforeShow.apply(this, arguments);
    },
    beforeShow: function beforeShow(a, b) {
      b.locked && (this.el.addClass("fancybox-lock"), !1 !== this.margin && f("body").css("margin-right", l(this.margin) + b.scrollbarWidth));
      this.open(a);
    },
    onUpdate: function onUpdate() {
      this.fixed || this.update();
    },
    afterClose: function afterClose(a) {
      this.overlay && !b.isActive && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this));
    }
  };
  b.helpers.title = {
    defaults: {
      type: "float",
      position: "bottom"
    },
    beforeShow: function beforeShow(a) {
      var d = b.current,
          e = d.title,
          c = a.type;
      f.isFunction(e) && (e = e.call(d.element, d));

      if (p(e) && "" !== f.trim(e)) {
        d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");

        switch (c) {
          case "inside":
            c = b.skin;
            break;

          case "outside":
            c = b.wrap;
            break;

          case "over":
            c = b.inner;
            break;

          default:
            c = b.skin, d.appendTo("body"), H && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")));
        }

        d["top" === a.position ? "prependTo" : "appendTo"](c);
      }
    }
  };

  f.fn.fancybox = function (a) {
    var d,
        e = f(this),
        c = this.selector || "",
        k = function k(g) {
      var h = f(this).blur(),
          j = d,
          k,
          l;
      !g.ctrlKey && !g.altKey && !g.shiftKey && !g.metaKey && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && "" !== l && "nofollow" !== l && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault());
    };

    a = a || {};
    d = a.index || 0;
    !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : n.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
    this.filter("[data-fancybox-start=1]").trigger("click");
    return this;
  };

  n.ready(function () {
    f.scrollbarWidth === r && (f.scrollbarWidth = function () {
      var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
          b = a.children(),
          b = b.innerWidth() - b.height(99).innerWidth();
      a.remove();
      return b;
    });

    if (f.support.fixedPosition === r) {
      var a = f.support,
          d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
          e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
      d.remove();
      a.fixedPosition = e;
    }

    f.extend(b.defaults, {
      scrollbarWidth: f.scrollbarWidth(),
      fixed: f.support.fixedPosition,
      parent: f("body")
    });
  });
})(window, document, jQuery);

/***/ }),

/***/ "./app/Modules/Buh/Resources/assets/js/jquery.flexslider.js":
/*!******************************************************************!*\
  !*** ./app/Modules/Buh/Resources/assets/js/jquery.flexslider.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * jQuery FlexSlider v2.1
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */
;

(function ($) {
  //FlexSlider: Object Instance
  $.flexslider = function (el, options) {
    var slider = $(el),
        vars = $.extend({}, $.flexslider.defaults, options),
        namespace = vars.namespace,
        touch = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
        eventType = touch ? "touchend" : "click",
        vertical = vars.direction === "vertical",
        reverse = vars.reverse,
        carousel = vars.itemWidth > 0,
        fade = vars.animation === "fade",
        asNav = vars.asNavFor !== "",
        methods = {}; // Store a reference to the slider object

    $.data(el, "flexslider", slider); // Privat slider methods

    methods = {
      init: function init() {
        slider.animating = false;
        slider.currentSlide = vars.startAt;
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = slider.currentSlide === 0 || slider.currentSlide === slider.last;
        slider.containerSelector = vars.selector.substr(0, vars.selector.search(' '));
        slider.slides = $(vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length; // SYNC:

        slider.syncExists = $(vars.sync).length > 0; // SLIDE:

        if (vars.animation === "slide") vars.animation = "swing";
        slider.prop = vertical ? "top" : "marginLeft";
        slider.args = {}; // SLIDESHOW:

        slider.manualPause = false; // TOUCH/USECSS:

        slider.transitions = !vars.video && !fade && vars.useCSS && function () {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];

          for (var i in props) {
            if (obj.style[props[i]] !== undefined) {
              slider.pfx = props[i].replace('Perspective', '').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }

          return false;
        }(); // CONTROLSCONTAINER:


        if (vars.controlsContainer !== "") slider.controlsContainer = $(vars.controlsContainer).length > 0 && $(vars.controlsContainer); // MANUAL:

        if (vars.manualControls !== "") slider.manualControls = $(vars.manualControls).length > 0 && $(vars.manualControls); // RANDOMIZE:

        if (vars.randomize) {
          slider.slides.sort(function () {
            return Math.round(Math.random()) - 0.5;
          });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath(); // ASNAV:

        if (asNav) methods.asNav.setup(); // INIT

        slider.setup("init"); // CONTROLNAV:

        if (vars.controlNav) methods.controlNav.setup(); // DIRECTIONNAV:

        if (vars.directionNav) methods.directionNav.setup(); // KEYBOARD:

        if (vars.keyboard && ($(slider.containerSelector).length === 1 || vars.multipleKeyboard)) {
          $(document).bind('keyup', function (event) {
            var keycode = event.keyCode;

            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = keycode === 39 ? slider.getTarget('next') : keycode === 37 ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
        } // MOUSEWHEEL:


        if (vars.mousewheel) {
          slider.bind('mousewheel', function (event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = delta < 0 ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, vars.pauseOnAction);
          });
        } // PAUSEPLAY


        if (vars.pausePlay) methods.pausePlay.setup(); // SLIDSESHOW

        if (vars.slideshow) {
          if (vars.pauseOnHover) {
            slider.hover(function () {
              if (!slider.manualPlay && !slider.manualPause) slider.pause();
            }, function () {
              if (!slider.manualPause && !slider.manualPlay) slider.play();
            });
          } // initialize animation


          vars.initDelay > 0 ? setTimeout(slider.play, vars.initDelay) : slider.play();
        } // TOUCH


        if (touch && vars.touch) methods.touch(); // FADE&&SMOOTHHEIGHT || SLIDE:

        if (!fade || fade && vars.smoothHeight) $(window).bind("resize focus", methods.resize); // API: start() Callback

        setTimeout(function () {
          vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function setup() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          slider.slides.click(function (e) {
            e.preventDefault();
            var $slide = $(this),
                target = $slide.index();

            if (!$(vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
              slider.direction = slider.currentItem < target ? "next" : "prev";
              slider.flexAnimate(target, vars.pauseOnAction, false, true, true);
            }
          });
        }
      },
      controlNav: {
        setup: function setup() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else {
            // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function setupPaging() {
          var type = vars.controlNav === "thumbnails" ? 'control-thumbs' : 'control-paging',
              j = 1,
              item;
          slider.controlNavScaffold = $('<ol class="' + namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              item = vars.controlNav === "thumbnails" ? '<img src="' + slider.slides.eq(i).attr("data-thumb") + '"/>' : '<a>' + j + '</a>';
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          } // CONTROLSCONTAINER:


          slider.controlsContainer ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();
          methods.controlNav.active();
          slider.controlNavScaffold.delegate('a, img', eventType, function (event) {
            event.preventDefault();
            var $this = $(this),
                target = slider.controlNav.index($this);

            if (!$this.hasClass(namespace + 'active')) {
              slider.direction = target > slider.currentSlide ? "next" : "prev";
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          }); // Prevent iOS click event bug

          if (touch) {
            slider.controlNavScaffold.delegate('a', "click touchstart", function (event) {
              event.preventDefault();
            });
          }
        },
        setupManual: function setupManual() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();
          slider.controlNav.live(eventType, function (event) {
            event.preventDefault();
            var $this = $(this),
                target = slider.controlNav.index($this);

            if (!$this.hasClass(namespace + 'active')) {
              target > slider.currentSlide ? slider.direction = "next" : slider.direction = "prev";
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          }); // Prevent iOS click event bug

          if (touch) {
            slider.controlNav.live("click touchstart", function (event) {
              event.preventDefault();
            });
          }
        },
        set: function set() {
          var selector = vars.controlNav === "thumbnails" ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, slider.controlsContainer ? slider.controlsContainer : slider);
        },
        active: function active() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function update(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }

          methods.controlNav.set();
          slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function setup() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + vars.nextText + '</a></li></ul>'); // CONTROLSCONTAINER:

          if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();
          slider.directionNav.bind(eventType, function (event) {
            event.preventDefault();
            var target = $(this).hasClass(namespace + 'next') ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, vars.pauseOnAction);
          }); // Prevent iOS click event bug

          if (touch) {
            slider.directionNav.bind("click touchstart", function (event) {
              event.preventDefault();
            });
          }
        },
        update: function update() {
          var disabledClass = namespace + 'disabled';

          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass);
          } else if (!vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass);
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass);
            } else {
              slider.directionNav.removeClass(disabledClass);
            }
          } else {
            slider.directionNav.removeClass(disabledClass);
          }
        }
      },
      pausePlay: {
        setup: function setup() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>'); // CONTROLSCONTAINER:

          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update(vars.slideshow ? namespace + 'pause' : namespace + 'play');
          slider.pausePlay.bind(eventType, function (event) {
            event.preventDefault();

            if ($(this).hasClass(namespace + 'pause')) {
              slider.manualPause = true;
              slider.manualPlay = false;
              slider.pause();
            } else {
              slider.manualPause = false;
              slider.manualPlay = true;
              slider.play();
            }
          }); // Prevent iOS click event bug

          if (touch) {
            slider.pausePlay.bind("click touchstart", function (event) {
              event.preventDefault();
            });
          }
        },
        update: function update(state) {
          state === "play" ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').text(vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').text(vars.pauseText);
        }
      },
      touch: function touch() {
        var startX,
            startY,
            offset,
            cwidth,
            dx,
            startT,
            scrolling = false;
        el.addEventListener('touchstart', onTouchStart, false);

        function onTouchStart(e) {
          if (slider.animating) {
            e.preventDefault();
          } else if (e.touches.length === 1) {
            slider.pause(); // CAROUSEL: 

            cwidth = vertical ? slider.h : slider.w;
            startT = Number(new Date()); // CAROUSEL:

            offset = carousel && reverse && slider.animatingTo === slider.last ? 0 : carousel && reverse ? slider.limit - (slider.itemW + vars.itemMargin) * slider.move * slider.animatingTo : carousel && slider.currentSlide === slider.last ? slider.limit : carousel ? (slider.itemW + vars.itemMargin) * slider.move * slider.currentSlide : reverse ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
            startX = vertical ? e.touches[0].pageY : e.touches[0].pageX;
            startY = vertical ? e.touches[0].pageX : e.touches[0].pageY;
            el.addEventListener('touchmove', onTouchMove, false);
            el.addEventListener('touchend', onTouchEnd, false);
          }
        }

        function onTouchMove(e) {
          dx = vertical ? startX - e.touches[0].pageY : startX - e.touches[0].pageX;
          scrolling = vertical ? Math.abs(dx) < Math.abs(e.touches[0].pageX - startY) : Math.abs(dx) < Math.abs(e.touches[0].pageY - startY);

          if (!scrolling || Number(new Date()) - startT > 500) {
            e.preventDefault();

            if (!fade && slider.transitions) {
              if (!vars.animationLoop) {
                dx = dx / (slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0 ? Math.abs(dx) / cwidth + 2 : 1);
              }

              slider.setProps(offset + dx, "setTouch");
            }
          }
        }

        function onTouchEnd(e) {
          // finish the touch by undoing the touch session
          el.removeEventListener('touchmove', onTouchMove, false);

          if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
            var updateDx = reverse ? -dx : dx,
                target = updateDx > 0 ? slider.getTarget('next') : slider.getTarget('prev');

            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
              slider.flexAnimate(target, vars.pauseOnAction);
            } else {
              if (!fade) slider.flexAnimate(slider.currentSlide, vars.pauseOnAction, true);
            }
          }

          el.removeEventListener('touchend', onTouchEnd, false);
          startX = null;
          startY = null;
          dx = null;
          offset = null;
        }
      },
      resize: function resize() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) slider.doMath();

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) {
            //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          } else if (vertical) {
            //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (vars.smoothHeight) methods.smoothHeight();
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function smoothHeight(dur) {
        if (!vertical || fade) {
          var $obj = fade ? slider : slider.viewport;
          dur ? $obj.animate({
            "height": slider.slides.eq(slider.animatingTo).height()
          }, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function sync(action) {
        var $obj = $(vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate":
            $obj.flexAnimate(target, vars.pauseOnAction, false, true);
            break;

          case "play":
            if (!$obj.playing && !$obj.asNav) {
              $obj.play();
            }

            break;

          case "pause":
            $obj.pause();
            break;
        }
      }
    }; // public methods

    slider.flexAnimate = function (target, pause, override, withSync, fromNav) {
      if (asNav && slider.pagingCount === 1) slider.direction = slider.currentItem < target ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = slider.currentItem < target ? "next" : "prev";
          master.direction = slider.direction;

          if (Math.ceil((target + 1) / slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target / slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target; // API: before() animation Callback

        vars.before(slider); // SLIDESHOW:

        if (pause) slider.pause(); // SYNC:

        if (slider.syncExists && !fromNav) methods.sync("animate"); // CONTROLNAV

        if (vars.controlNav) methods.controlNav.active(); // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)

        if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide'); // INFINITE LOOP:
        // CANDIDATE: atEnd

        slider.atEnd = target === 0 || target === slider.last; // DIRECTIONNAV:

        if (vars.directionNav) methods.directionNav.update();

        if (target === slider.last) {
          // API: end() of cycle Callback
          vars.end(slider); // SLIDESHOW && !INFINITE LOOP:

          if (!vars.animationLoop) slider.pause();
        } // SLIDE:


        if (!fade) {
          var dimension = vertical ? slider.slides.filter(':first').height() : slider.computedW,
              margin,
              slideString,
              calcNext; // INFINITE LOOP / REVERSE:

          if (carousel) {
            margin = vars.itemWidth > slider.w ? vars.itemMargin * 2 : vars.itemMargin;
            calcNext = (slider.itemW + margin) * slider.move * slider.animatingTo;
            slideString = calcNext > slider.limit && slider.visible !== 1 ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && vars.animationLoop && slider.direction !== "next") {
            slideString = reverse ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && vars.animationLoop && slider.direction !== "prev") {
            slideString = reverse ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = reverse ? (slider.count - 1 - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }

          slider.setProps(slideString, "", vars.animationSpeed);

          if (slider.transitions) {
            if (!vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }

            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function () {
              slider.wrapup(dimension);
            });
          } else {
            slider.container.animate(slider.args, vars.animationSpeed, vars.easing, function () {
              slider.wrapup(dimension);
            });
          }
        } else {
          // FADE:
          if (!touch) {
            slider.slides.eq(slider.currentSlide).fadeOut(vars.animationSpeed, vars.easing);
            slider.slides.eq(target).fadeIn(vars.animationSpeed, vars.easing, slider.wrapup);
          } else {
            slider.slides.eq(slider.currentSlide).css({
              "opacity": 0,
              "zIndex": 1
            });
            slider.slides.eq(target).css({
              "opacity": 1,
              "zIndex": 2
            });
            slider.slides.unbind("webkitTransitionEnd transitionend");
            slider.slides.eq(slider.currentSlide).bind("webkitTransitionEnd transitionend", function () {
              // API: after() animation Callback
              vars.after(slider);
            });
            slider.animating = false;
            slider.currentSlide = slider.animatingTo;
          }
        } // SMOOTH HEIGHT:


        if (vars.smoothHeight) methods.smoothHeight(vars.animationSpeed);
      }
    };

    slider.wrapup = function (dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }

      slider.animating = false;
      slider.currentSlide = slider.animatingTo; // API: after() animation Callback

      vars.after(slider);
    }; // SLIDESHOW:


    slider.animateSlides = function () {
      if (!slider.animating) slider.flexAnimate(slider.getTarget("next"));
    }; // SLIDESHOW:


    slider.pause = function () {
      clearInterval(slider.animatedSlides);
      slider.playing = false; // PAUSEPLAY:

      if (vars.pausePlay) methods.pausePlay.update("play"); // SYNC:

      if (slider.syncExists) methods.sync("pause");
    }; // SLIDESHOW:


    slider.play = function () {
      slider.animatedSlides = setInterval(slider.animateSlides, vars.slideshowSpeed);
      slider.playing = true; // PAUSEPLAY:

      if (vars.pausePlay) methods.pausePlay.update("pause"); // SYNC:

      if (slider.syncExists) methods.sync("play");
    };

    slider.canAdvance = function (target, fromNav) {
      // ASNAV:
      var last = asNav ? slider.pagingCount - 1 : slider.last;
      return fromNav ? true : asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev" ? true : asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next" ? false : target === slider.currentSlide && !asNav ? false : vars.animationLoop ? true : slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next" ? false : slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next" ? false : true;
    };

    slider.getTarget = function (dir) {
      slider.direction = dir;

      if (dir === "next") {
        return slider.currentSlide === slider.last ? 0 : slider.currentSlide + 1;
      } else {
        return slider.currentSlide === 0 ? slider.last : slider.currentSlide - 1;
      }
    }; // SLIDE:


    slider.setProps = function (pos, special, dur) {
      var target = function () {
        var posCheck = pos ? pos : (slider.itemW + vars.itemMargin) * slider.move * slider.animatingTo,
            posCalc = function () {
          if (carousel) {
            return special === "setTouch" ? pos : reverse && slider.animatingTo === slider.last ? 0 : reverse ? slider.limit - (slider.itemW + vars.itemMargin) * slider.move * slider.animatingTo : slider.animatingTo === slider.last ? slider.limit : posCheck;
          } else {
            switch (special) {
              case "setTotal":
                return reverse ? (slider.count - 1 - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;

              case "setTouch":
                return reverse ? pos : pos;

              case "jumpEnd":
                return reverse ? pos : slider.count * pos;

              case "jumpStart":
                return reverse ? slider.count * pos : pos;

              default:
                return pos;
            }
          }
        }();

        return posCalc * -1 + "px";
      }();

      if (slider.transitions) {
        target = vertical ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = dur !== undefined ? dur / 1000 + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) slider.container.css(slider.args);
    };

    slider.setup = function (type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({
            "overflow": "hidden",
            "position": "relative"
          }).appendTo(slider).append(slider.container); // INFINITE LOOP:

          slider.cloneCount = 0;
          slider.cloneOffset = 0; // REVERSE:

          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        } // INFINITE LOOP && !CAROUSEL:


        if (vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1; // clear out old clones

          if (type !== "init") slider.container.find('.clone').remove();
          slider.container.append(slider.slides.first().clone().addClass('clone')).prepend(slider.slides.last().clone().addClass('clone'));
        }

        slider.newSlides = $(vars.selector, slider);
        sliderOffset = reverse ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset; // VERTICAL:

        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function () {
            slider.newSlides.css({
              "display": "block"
            });
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, type === "init" ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function () {
            slider.doMath();
            slider.newSlides.css({
              "width": slider.computedW,
              "float": "left",
              "display": "block"
            }); // SMOOTH HEIGHT:

            if (vars.smoothHeight) methods.smoothHeight();
          }, type === "init" ? 100 : 0);
        }
      } else {
        // FADE: 
        slider.slides.css({
          "width": "100%",
          "float": "left",
          "marginRight": "-100%",
          "position": "relative"
        });

        if (type === "init") {
          if (!touch) {
            slider.slides.eq(slider.currentSlide).fadeIn(vars.animationSpeed, vars.easing);
          } else {
            slider.slides.css({
              "opacity": 0,
              "display": "block",
              "webkitTransition": "opacity " + vars.animationSpeed / 1000 + "s ease",
              "zIndex": 1
            }).eq(slider.currentSlide).css({
              "opacity": 1,
              "zIndex": 2
            });
          }
        } // SMOOTH HEIGHT:


        if (vars.smoothHeight) methods.smoothHeight();
      } // !CAROUSEL:
      // CANDIDATE: active slide


      if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
    };

    slider.doMath = function () {
      var slide = slider.slides.first(),
          slideMargin = vars.itemMargin,
          minItems = vars.minItems,
          maxItems = vars.maxItems;
      slider.w = slider.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width(); // CAROUSEL:

      if (carousel) {
        slider.itemT = vars.itemWidth + slideMargin;
        slider.minW = minItems ? minItems * slider.itemT : slider.w;
        slider.maxW = maxItems ? maxItems * slider.itemT : slider.w;
        slider.itemW = slider.minW > slider.w ? (slider.w - slideMargin * minItems) / minItems : slider.maxW < slider.w ? (slider.w - slideMargin * maxItems) / maxItems : vars.itemWidth > slider.w ? slider.w : vars.itemWidth;
        slider.visible = Math.floor(slider.w / (slider.itemW + slideMargin));
        slider.move = vars.move > 0 && vars.move < slider.visible ? vars.move : slider.visible;
        slider.pagingCount = Math.ceil((slider.count - slider.visible) / slider.move + 1);
        slider.last = slider.pagingCount - 1;
        slider.limit = slider.pagingCount === 1 ? 0 : vars.itemWidth > slider.w ? (slider.itemW + slideMargin * 2) * slider.count - slider.w - slideMargin : (slider.itemW + slideMargin) * slider.count - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }

      slider.computedW = slider.itemW - slider.boxPadding;
    };

    slider.update = function (pos, action) {
      slider.doMath(); // update currentSlide and slider.animatingTo if necessary

      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }

        slider.animatingTo = slider.currentSlide;
      } // update controlNav


      if (vars.controlNav && !slider.manualControls) {
        if (action === "add" && !carousel || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if (action === "remove" && !carousel || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }

          methods.controlNav.update("remove", slider.last);
        }
      } // update directionNav


      if (vars.directionNav) methods.directionNav.update();
    };

    slider.addSlide = function (obj, pos) {
      var $obj = $(obj);
      slider.count += 1;
      slider.last = slider.count - 1; // append new slide

      if (vertical && reverse) {
        pos !== undefined ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        pos !== undefined ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      } // update currentSlide, animatingTo, controlNav, and directionNav


      slider.update(pos, "add"); // update slider.slides

      slider.slides = $(vars.selector + ':not(.clone)', slider); // re-setup the slider to accomdate new slide

      slider.setup(); //FlexSlider: added() Callback

      vars.added(slider);
    };

    slider.removeSlide = function (obj) {
      var pos = isNaN(obj) ? slider.slides.index($(obj)) : obj; // update count

      slider.count -= 1;
      slider.last = slider.count - 1; // remove slide

      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        vertical && reverse ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      } // update currentSlide, animatingTo, controlNav, and directionNav


      slider.doMath();
      slider.update(pos, "remove"); // update slider.slides

      slider.slides = $(vars.selector + ':not(.clone)', slider); // re-setup the slider to accomdate new slide

      slider.setup(); // FlexSlider: removed() Callback

      vars.removed(slider);
    }; //FlexSlider: Initialize


    methods.init();
  }; //FlexSlider: Default Settings


  $.flexslider.defaults = {
    namespace: "flex-",
    //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",
    //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",
    //String: Select your animation type, "fade" or "slide"
    easing: "swing",
    //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",
    //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,
    //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,
    //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,
    //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode  
    startAt: 0,
    //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,
    //Boolean: Animate slider automatically
    slideshowSpeed: 7000,
    //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,
    //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,
    //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,
    //Boolean: Randomize slide order
    // Usability features
    pauseOnAction: true,
    //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,
    //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    useCSS: true,
    //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,
    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,
    //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
    // Primary Controls
    controlNav: true,
    //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,
    //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",
    //String: Set the text for the "previous" directionNav item
    nextText: "Next",
    //String: Set the text for the "next" directionNav item
    // Secondary Navigation
    keyboard: true,
    //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,
    //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,
    //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,
    //Boolean: Create pause/play dynamic element
    pauseText: "Pause",
    //String: Set the text for the "pause" pausePlay item
    playText: "Play",
    //String: Set the text for the "play" pausePlay item
    // Special properties
    controlsContainer: "",
    //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",
    //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    sync: "",
    //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",
    //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
    // Carousel Options
    itemWidth: 0,
    //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,
    //{NEW} Integer: Margin between carousel items.
    minItems: 0,
    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,
    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,
    //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
    // Callback API
    start: function start() {},
    //Callback: function(slider) - Fires when the slider loads the first slide
    before: function before() {},
    //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function after() {},
    //Callback: function(slider) - Fires after each slider animation completes
    end: function end() {},
    //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function added() {},
    //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function removed() {} //{NEW} Callback: function(slider) - Fires after a slide is removed

  }; //FlexSlider: Plugin Function

  $.fn.flexslider = function (options) {
    if (options === undefined) options = {};

    if (_typeof(options) === "object") {
      return this.each(function () {
        var $this = $(this),
            selector = options.selector ? options.selector : ".slides > li",
            $slides = $this.find(selector);

        if ($slides.length === 1) {
          $slides.fadeIn(400);
          if (options.start) options.start($this);
        } else if ($this.data('flexslider') == undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');

      switch (options) {
        case "play":
          $slider.play();
          break;

        case "pause":
          $slider.pause();
          break;

        case "next":
          $slider.flexAnimate($slider.getTarget("next"), true);
          break;

        case "prev":
        case "previous":
          $slider.flexAnimate($slider.getTarget("prev"), true);
          break;

        default:
          if (typeof options === "number") $slider.flexAnimate(options, true);
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./app/Modules/Buh/Resources/assets/js/jquery.js":
/*!*******************************************************!*\
  !*** ./app/Modules/Buh/Resources/assets/js/jquery.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function (a, b) {
  function G(a) {
    var b = F[a] = {};
    return p.each(a.split(s), function (a, c) {
      b[c] = !0;
    }), b;
  }

  function J(a, c, d) {
    if (d === b && a.nodeType === 1) {
      var e = "data-" + c.replace(I, "-$1").toLowerCase();
      d = a.getAttribute(e);

      if (typeof d == "string") {
        try {
          d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : +d + "" === d ? +d : H.test(d) ? p.parseJSON(d) : d;
        } catch (f) {}

        p.data(a, c, d);
      } else d = b;
    }

    return d;
  }

  function K(a) {
    var b;

    for (b in a) {
      if (b === "data" && p.isEmptyObject(a[b])) continue;
      if (b !== "toJSON") return !1;
    }

    return !0;
  }

  function ba() {
    return !1;
  }

  function bb() {
    return !0;
  }

  function bh(a) {
    return !a || !a.parentNode || a.parentNode.nodeType === 11;
  }

  function bi(a, b) {
    do {
      a = a[b];
    } while (a && a.nodeType !== 1);

    return a;
  }

  function bj(a, b, c) {
    b = b || 0;
    if (p.isFunction(b)) return p.grep(a, function (a, d) {
      var e = !!b.call(a, d, a);
      return e === c;
    });
    if (b.nodeType) return p.grep(a, function (a, d) {
      return a === b === c;
    });

    if (typeof b == "string") {
      var d = p.grep(a, function (a) {
        return a.nodeType === 1;
      });
      if (be.test(b)) return p.filter(b, d, !c);
      b = p.filter(b, d);
    }

    return p.grep(a, function (a, d) {
      return p.inArray(a, b) >= 0 === c;
    });
  }

  function bk(a) {
    var b = bl.split("|"),
        c = a.createDocumentFragment();
    if (c.createElement) while (b.length) {
      c.createElement(b.pop());
    }
    return c;
  }

  function bC(a, b) {
    return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b));
  }

  function bD(a, b) {
    if (b.nodeType !== 1 || !p.hasData(a)) return;

    var c,
        d,
        e,
        f = p._data(a),
        g = p._data(b, f),
        h = f.events;

    if (h) {
      delete g.handle, g.events = {};

      for (c in h) {
        for (d = 0, e = h[c].length; d < e; d++) {
          p.event.add(b, c, h[c][d]);
        }
      }
    }

    g.data && (g.data = p.extend({}, g.data));
  }

  function bE(a, b) {
    var c;
    if (b.nodeType !== 1) return;
    b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? (b.parentNode && (b.outerHTML = a.outerHTML), p.support.html5Clone && a.innerHTML && !p.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : c === "input" && bv.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text), b.removeAttribute(p.expando);
  }

  function bF(a) {
    return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : [];
  }

  function bG(a) {
    bv.test(a.type) && (a.defaultChecked = a.checked);
  }

  function bY(a, b) {
    if (b in a) return b;
    var c = b.charAt(0).toUpperCase() + b.slice(1),
        d = b,
        e = bW.length;

    while (e--) {
      b = bW[e] + c;
      if (b in a) return b;
    }

    return d;
  }

  function bZ(a, b) {
    return a = b || a, p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a);
  }

  function b$(a, b) {
    var c,
        d,
        e = [],
        f = 0,
        g = a.length;

    for (; f < g; f++) {
      c = a[f];
      if (!c.style) continue;
      e[f] = p._data(c, "olddisplay"), b ? (!e[f] && c.style.display === "none" && (c.style.display = ""), c.style.display === "" && bZ(c) && (e[f] = p._data(c, "olddisplay", cc(c.nodeName)))) : (d = bH(c, "display"), !e[f] && d !== "none" && p._data(c, "olddisplay", d));
    }

    for (f = 0; f < g; f++) {
      c = a[f];
      if (!c.style) continue;
      if (!b || c.style.display === "none" || c.style.display === "") c.style.display = b ? e[f] || "" : "none";
    }

    return a;
  }

  function b_(a, b, c) {
    var d = bP.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }

  function ca(a, b, c, d) {
    var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0,
        f = 0;

    for (; e < 4; e += 2) {
      c === "margin" && (f += p.css(a, c + bV[e], !0)), d ? (c === "content" && (f -= parseFloat(bH(a, "padding" + bV[e])) || 0), c !== "margin" && (f -= parseFloat(bH(a, "border" + bV[e] + "Width")) || 0)) : (f += parseFloat(bH(a, "padding" + bV[e])) || 0, c !== "padding" && (f += parseFloat(bH(a, "border" + bV[e] + "Width")) || 0));
    }

    return f;
  }

  function cb(a, b, c) {
    var d = b === "width" ? a.offsetWidth : a.offsetHeight,
        e = !0,
        f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";

    if (d <= 0 || d == null) {
      d = bH(a, b);
      if (d < 0 || d == null) d = a.style[b];
      if (bQ.test(d)) return d;
      e = f && (p.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0;
    }

    return d + ca(a, b, c || (f ? "border" : "content"), e) + "px";
  }

  function cc(a) {
    if (bS[a]) return bS[a];
    var b = p("<" + a + ">").appendTo(e.body),
        c = b.css("display");
    b.remove();

    if (c === "none" || c === "") {
      bI = e.body.appendChild(bI || p.extend(e.createElement("iframe"), {
        frameBorder: 0,
        width: 0,
        height: 0
      }));
      if (!bJ || !bI.createElement) bJ = (bI.contentWindow || bI.contentDocument).document, bJ.write("<!doctype html><html><body>"), bJ.close();
      b = bJ.body.appendChild(bJ.createElement(a)), c = bH(b, "display"), e.body.removeChild(bI);
    }

    return bS[a] = c, c;
  }

  function ci(a, b, c, d) {
    var e;
    if (p.isArray(b)) p.each(b, function (b, e) {
      c || ce.test(a) ? d(a, e) : ci(a + "[" + (_typeof(e) == "object" ? b : "") + "]", e, c, d);
    });else if (!c && p.type(b) === "object") for (e in b) {
      ci(a + "[" + e + "]", b[e], c, d);
    } else d(a, b);
  }

  function cz(a) {
    return function (b, c) {
      typeof b != "string" && (c = b, b = "*");
      var d,
          e,
          f,
          g = b.toLowerCase().split(s),
          h = 0,
          i = g.length;
      if (p.isFunction(c)) for (; h < i; h++) {
        d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c);
      }
    };
  }

  function cA(a, c, d, e, f, g) {
    f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
    var h,
        i = a[f],
        j = 0,
        k = i ? i.length : 0,
        l = a === cv;

    for (; j < k && (l || !h); j++) {
      h = i[j](c, d, e), typeof h == "string" && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = cA(a, c, d, e, h, g)));
    }

    return (l || !h) && !g["*"] && (h = cA(a, c, d, e, "*", g)), h;
  }

  function cB(a, c) {
    var d,
        e,
        f = p.ajaxSettings.flatOptions || {};

    for (d in c) {
      c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
    }

    e && p.extend(!0, a, e);
  }

  function cC(a, c, d) {
    var e,
        f,
        g,
        h,
        i = a.contents,
        j = a.dataTypes,
        k = a.responseFields;

    for (f in k) {
      f in d && (c[k[f]] = d[f]);
    }

    while (j[0] === "*") {
      j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
    }

    if (e) for (f in i) {
      if (i[f] && i[f].test(e)) {
        j.unshift(f);
        break;
      }
    }
    if (j[0] in d) g = j[0];else {
      for (f in d) {
        if (!j[0] || a.converters[f + " " + j[0]]) {
          g = f;
          break;
        }

        h || (h = f);
      }

      g = g || h;
    }
    if (g) return g !== j[0] && j.unshift(g), d[g];
  }

  function cD(a, b) {
    var c,
        d,
        e,
        f,
        g = a.dataTypes.slice(),
        h = g[0],
        i = {},
        j = 0;
    a.dataFilter && (b = a.dataFilter(b, a.dataType));
    if (g[1]) for (c in a.converters) {
      i[c.toLowerCase()] = a.converters[c];
    }

    for (; e = g[++j];) {
      if (e !== "*") {
        if (h !== "*" && h !== e) {
          c = i[h + " " + e] || i["* " + e];
          if (!c) for (d in i) {
            f = d.split(" ");

            if (f[1] === e) {
              c = i[h + " " + f[0]] || i["* " + f[0]];

              if (c) {
                c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                break;
              }
            }
          }
          if (c !== !0) if (c && a["throws"]) b = c(b);else try {
            b = c(b);
          } catch (k) {
            return {
              state: "parsererror",
              error: c ? k : "No conversion from " + h + " to " + e
            };
          }
        }

        h = e;
      }
    }

    return {
      state: "success",
      data: b
    };
  }

  function cL() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }

  function cM() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }

  function cU() {
    return setTimeout(function () {
      cN = b;
    }, 0), cN = p.now();
  }

  function cV(a, b) {
    p.each(b, function (b, c) {
      var d = (cT[b] || []).concat(cT["*"]),
          e = 0,
          f = d.length;

      for (; e < f; e++) {
        if (d[e].call(a, b, c)) return;
      }
    });
  }

  function cW(a, b, c) {
    var d,
        e = 0,
        f = 0,
        g = cS.length,
        h = p.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      var b = cN || cU(),
          c = Math.max(0, j.startTime + j.duration - b),
          d = 1 - (c / j.duration || 0),
          e = 0,
          f = j.tweens.length;

      for (; e < f; e++) {
        j.tweens[e].run(d);
      }

      return h.notifyWith(a, [j, d, c]), d < 1 && f ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({
      elem: a,
      props: p.extend({}, b),
      opts: p.extend(!0, {
        specialEasing: {}
      }, c),
      originalProperties: b,
      originalOptions: c,
      startTime: cN || cU(),
      duration: c.duration,
      tweens: [],
      createTween: function createTween(b, c, d) {
        var e = p.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(e), e;
      },
      stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;

        for (; c < d; c++) {
          j.tweens[c].run(1);
        }

        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
      }
    }),
        k = j.props;

    cX(k, j.opts.specialEasing);

    for (; e < g; e++) {
      d = cS[e].call(j, a, k, j.opts);
      if (d) return d;
    }

    return cV(j, k), p.isFunction(j.opts.start) && j.opts.start.call(a, j), p.fx.timer(p.extend(i, {
      anim: j,
      queue: j.opts.queue,
      elem: a
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }

  function cX(a, b) {
    var c, d, e, f, g;

    for (c in a) {
      d = p.camelCase(c), e = b[d], f = a[c], p.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = p.cssHooks[d];

      if (g && "expand" in g) {
        f = g.expand(f), delete a[d];

        for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }

  function cY(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = a.style,
        n = {},
        o = [],
        q = a.nodeType && bZ(a);
    c.queue || (j = p._queueHooks(a, "fx"), j.unqueued == null && (j.unqueued = 0, k = j.empty.fire, j.empty.fire = function () {
      j.unqueued || k();
    }), j.unqueued++, l.always(function () {
      l.always(function () {
        j.unqueued--, p.queue(a, "fx").length || j.empty.fire();
      });
    })), a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], p.css(a, "display") === "inline" && p.css(a, "float") === "none" && (!p.support.inlineBlockNeedsLayout || cc(a.nodeName) === "inline" ? m.display = "inline-block" : m.zoom = 1)), c.overflow && (m.overflow = "hidden", p.support.shrinkWrapBlocks || l.done(function () {
      m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2];
    }));

    for (d in b) {
      f = b[d];

      if (cP.exec(f)) {
        delete b[d];
        if (f === (q ? "hide" : "show")) continue;
        o.push(d);
      }
    }

    g = o.length;

    if (g) {
      h = p._data(a, "fxshow") || p._data(a, "fxshow", {}), q ? p(a).show() : l.done(function () {
        p(a).hide();
      }), l.done(function () {
        var b;
        p.removeData(a, "fxshow", !0);

        for (b in n) {
          p.style(a, b, n[b]);
        }
      });

      for (d = 0; d < g; d++) {
        e = o[d], i = l.createTween(e, q ? h[e] : 0), n[e] = h[e] || p.style(a, e), e in h || (h[e] = i.start, q && (i.end = i.start, i.start = e === "width" || e === "height" ? 1 : 0));
      }
    }
  }

  function cZ(a, b, c, d, e) {
    return new cZ.prototype.init(a, b, c, d, e);
  }

  function c$(a, b) {
    var c,
        d = {
      height: a
    },
        e = 0;
    b = b ? 1 : 0;

    for (; e < 4; e += 2 - b) {
      c = bV[e], d["margin" + c] = d["padding" + c] = a;
    }

    return b && (d.opacity = d.width = a), d;
  }

  function da(a) {
    return p.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1;
  }

  var c,
      d,
      e = a.document,
      f = a.location,
      g = a.navigator,
      h = a.jQuery,
      i = a.$,
      j = Array.prototype.push,
      k = Array.prototype.slice,
      l = Array.prototype.indexOf,
      m = Object.prototype.toString,
      n = Object.prototype.hasOwnProperty,
      o = String.prototype.trim,
      p = function p(a, b) {
    return new p.fn.init(a, b, c);
  },
      q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
      r = /\S/,
      s = /\s+/,
      t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
      v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      w = /^[\],:{}\s]*$/,
      x = /(?:^|:|,)(?:\s*\[)+/g,
      y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
      A = /^-ms-/,
      B = /-([\da-z])/gi,
      C = function C(a, b) {
    return (b + "").toUpperCase();
  },
      D = function D() {
    e.addEventListener ? (e.removeEventListener("DOMContentLoaded", D, !1), p.ready()) : e.readyState === "complete" && (e.detachEvent("onreadystatechange", D), p.ready());
  },
      E = {};

  p.fn = p.prototype = {
    constructor: p,
    init: function init(a, c, d) {
      var f, g, h, i;
      if (!a) return this;
      if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;

      if (typeof a == "string") {
        a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null, a, null] : f = u.exec(a);

        if (f && (f[1] || !c)) {
          if (f[1]) return c = c instanceof p ? c[0] : c, i = c && c.nodeType ? c.ownerDocument || c : e, a = p.parseHTML(f[1], i, !0), v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0), p.merge(this, a);
          g = e.getElementById(f[2]);

          if (g && g.parentNode) {
            if (g.id !== f[2]) return d.find(a);
            this.length = 1, this[0] = g;
          }

          return this.context = e, this.selector = a, this;
        }

        return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
      }

      return p.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), p.makeArray(a, this));
    },
    selector: "",
    jquery: "1.8.1",
    length: 0,
    size: function size() {
      return this.length;
    },
    toArray: function toArray() {
      return k.call(this);
    },
    get: function get(a) {
      return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a];
    },
    pushStack: function pushStack(a, b, c) {
      var d = p.merge(this.constructor(), a);
      return d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d;
    },
    each: function each(a, b) {
      return p.each(this, a, b);
    },
    ready: function ready(a) {
      return p.ready.promise().done(a), this;
    },
    eq: function eq(a) {
      return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1);
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    slice: function slice() {
      return this.pushStack(k.apply(this, arguments), "slice", k.call(arguments).join(","));
    },
    map: function map(a) {
      return this.pushStack(p.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    end: function end() {
      return this.prevObject || this.constructor(null);
    },
    push: j,
    sort: [].sort,
    splice: [].splice
  }, p.fn.init.prototype = p.fn, p.extend = p.fn.extend = function () {
    var a,
        c,
        d,
        e,
        f,
        g,
        h = arguments[0] || {},
        i = 1,
        j = arguments.length,
        k = !1;
    typeof h == "boolean" && (k = h, h = arguments[1] || {}, i = 2), _typeof(h) != "object" && !p.isFunction(h) && (h = {}), j === i && (h = this, --i);

    for (; i < j; i++) {
      if ((a = arguments[i]) != null) for (c in a) {
        d = h[c], e = a[c];
        if (h === e) continue;
        k && e && (p.isPlainObject(e) || (f = p.isArray(e))) ? (f ? (f = !1, g = d && p.isArray(d) ? d : []) : g = d && p.isPlainObject(d) ? d : {}, h[c] = p.extend(k, g, e)) : e !== b && (h[c] = e);
      }
    }

    return h;
  }, p.extend({
    noConflict: function noConflict(b) {
      return a.$ === p && (a.$ = i), b && a.jQuery === p && (a.jQuery = h), p;
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(a) {
      a ? p.readyWait++ : p.ready(!0);
    },
    ready: function ready(a) {
      if (a === !0 ? --p.readyWait : p.isReady) return;
      if (!e.body) return setTimeout(p.ready, 1);
      p.isReady = !0;
      if (a !== !0 && --p.readyWait > 0) return;
      d.resolveWith(e, [p]), p.fn.trigger && p(e).trigger("ready").off("ready");
    },
    isFunction: function isFunction(a) {
      return p.type(a) === "function";
    },
    isArray: Array.isArray || function (a) {
      return p.type(a) === "array";
    },
    isWindow: function isWindow(a) {
      return a != null && a == a.window;
    },
    isNumeric: function isNumeric(a) {
      return !isNaN(parseFloat(a)) && isFinite(a);
    },
    type: function type(a) {
      return a == null ? String(a) : E[m.call(a)] || "object";
    },
    isPlainObject: function isPlainObject(a) {
      if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a)) return !1;

      try {
        if (a.constructor && !n.call(a, "constructor") && !n.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }

      var d;

      for (d in a) {
        ;
      }

      return d === b || n.call(a, d);
    },
    isEmptyObject: function isEmptyObject(a) {
      var b;

      for (b in a) {
        return !1;
      }

      return !0;
    },
    error: function error(a) {
      throw new Error(a);
    },
    parseHTML: function parseHTML(a, b, c) {
      var d;
      return !a || typeof a != "string" ? null : (typeof b == "boolean" && (c = b, b = 0), b = b || e, (d = v.exec(a)) ? [b.createElement(d[1])] : (d = p.buildFragment([a], b, c ? null : []), p.merge([], (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes)));
    },
    parseJSON: function parseJSON(b) {
      if (!b || typeof b != "string") return null;
      b = p.trim(b);
      if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
      if (w.test(b.replace(y, "@").replace(z, "]").replace(x, ""))) return new Function("return " + b)();
      p.error("Invalid JSON: " + b);
    },
    parseXML: function parseXML(c) {
      var d, e;
      if (!c || typeof c != "string") return null;

      try {
        a.DOMParser ? (e = new DOMParser(), d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c));
      } catch (f) {
        d = b;
      }

      return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + c), d;
    },
    noop: function noop() {},
    globalEval: function globalEval(b) {
      b && r.test(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    },
    camelCase: function camelCase(a) {
      return a.replace(A, "ms-").replace(B, C);
    },
    nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase();
    },
    each: function each(a, c, d) {
      var e,
          f = 0,
          g = a.length,
          h = g === b || p.isFunction(a);

      if (d) {
        if (h) {
          for (e in a) {
            if (c.apply(a[e], d) === !1) break;
          }
        } else for (; f < g;) {
          if (c.apply(a[f++], d) === !1) break;
        }
      } else if (h) {
        for (e in a) {
          if (c.call(a[e], e, a[e]) === !1) break;
        }
      } else for (; f < g;) {
        if (c.call(a[f], f, a[f++]) === !1) break;
      }

      return a;
    },
    trim: o && !o.call("﻿ ") ? function (a) {
      return a == null ? "" : o.call(a);
    } : function (a) {
      return a == null ? "" : a.toString().replace(t, "");
    },
    makeArray: function makeArray(a, b) {
      var c,
          d = b || [];
      return a != null && (c = p.type(a), a.length == null || c === "string" || c === "function" || c === "regexp" || p.isWindow(a) ? j.call(d, a) : p.merge(d, a)), d;
    },
    inArray: function inArray(a, b, c) {
      var d;

      if (b) {
        if (l) return l.call(b, a, c);
        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;

        for (; c < d; c++) {
          if (c in b && b[c] === a) return c;
        }
      }

      return -1;
    },
    merge: function merge(a, c) {
      var d = c.length,
          e = a.length,
          f = 0;
      if (typeof d == "number") for (; f < d; f++) {
        a[e++] = c[f];
      } else while (c[f] !== b) {
        a[e++] = c[f++];
      }
      return a.length = e, a;
    },
    grep: function grep(a, b, c) {
      var d,
          e = [],
          f = 0,
          g = a.length;
      c = !!c;

      for (; f < g; f++) {
        d = !!b(a[f], f), c !== d && e.push(a[f]);
      }

      return e;
    },
    map: function map(a, c, d) {
      var e,
          f,
          g = [],
          h = 0,
          i = a.length,
          j = a instanceof p || i !== b && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || p.isArray(a));
      if (j) for (; h < i; h++) {
        e = c(a[h], h, d), e != null && (g[g.length] = e);
      } else for (f in a) {
        e = c(a[f], f, d), e != null && (g[g.length] = e);
      }
      return g.concat.apply([], g);
    },
    guid: 1,
    proxy: function proxy(a, c) {
      var d, e, f;
      return typeof c == "string" && (d = a[c], c = a, a = d), p.isFunction(a) ? (e = k.call(arguments, 2), f = function f() {
        return a.apply(c, e.concat(k.call(arguments)));
      }, f.guid = a.guid = a.guid || f.guid || p.guid++, f) : b;
    },
    access: function access(a, c, d, e, f, g, h) {
      var i,
          j = d == null,
          k = 0,
          l = a.length;

      if (d && _typeof(d) == "object") {
        for (k in d) {
          p.access(a, c, k, d[k], 1, g, e);
        }

        f = 1;
      } else if (e !== b) {
        i = h === b && p.isFunction(e), j && (i ? (i = c, c = function c(a, b, _c) {
          return i.call(p(a), _c);
        }) : (c.call(a, e), c = null));
        if (c) for (; k < l; k++) {
          c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
        }
        f = 1;
      }

      return f ? a : j ? c.call(a) : l ? c(a[0], d) : g;
    },
    now: function now() {
      return new Date().getTime();
    }
  }), p.ready.promise = function (b) {
    if (!d) {
      d = p.Deferred();
      if (e.readyState === "complete") setTimeout(p.ready, 1);else if (e.addEventListener) e.addEventListener("DOMContentLoaded", D, !1), a.addEventListener("load", p.ready, !1);else {
        e.attachEvent("onreadystatechange", D), a.attachEvent("onload", p.ready);
        var c = !1;

        try {
          c = a.frameElement == null && e.documentElement;
        } catch (f) {}

        c && c.doScroll && function g() {
          if (!p.isReady) {
            try {
              c.doScroll("left");
            } catch (a) {
              return setTimeout(g, 50);
            }

            p.ready();
          }
        }();
      }
    }

    return d.promise(b);
  }, p.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
    E["[object " + b + "]"] = b.toLowerCase();
  }), c = p(e);
  var F = {};
  p.Callbacks = function (a) {
    a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);

    var c,
        d,
        e,
        f,
        g,
        h,
        i = [],
        j = !a.once && [],
        k = function k(b) {
      c = a.memory && b, d = !0, h = f || 0, f = 0, g = i.length, e = !0;

      for (; i && h < g; h++) {
        if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
          c = !1;
          break;
        }
      }

      e = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable());
    },
        l = {
      add: function add() {
        if (i) {
          var b = i.length;
          (function d(b) {
            p.each(b, function (b, c) {
              var e = p.type(c);
              e === "function" && (!a.unique || !l.has(c)) ? i.push(c) : c && c.length && e !== "string" && d(c);
            });
          })(arguments), e ? g = i.length : c && (f = b, k(c));
        }

        return this;
      },
      remove: function remove() {
        return i && p.each(arguments, function (a, b) {
          var c;

          while ((c = p.inArray(b, i, c)) > -1) {
            i.splice(c, 1), e && (c <= g && g--, c <= h && h--);
          }
        }), this;
      },
      has: function has(a) {
        return p.inArray(a, i) > -1;
      },
      empty: function empty() {
        return i = [], this;
      },
      disable: function disable() {
        return i = j = c = b, this;
      },
      disabled: function disabled() {
        return !i;
      },
      lock: function lock() {
        return j = b, c || l.disable(), this;
      },
      locked: function locked() {
        return !j;
      },
      fireWith: function fireWith(a, b) {
        return b = b || [], b = [a, b.slice ? b.slice() : b], i && (!d || j) && (e ? j.push(b) : k(b)), this;
      },
      fire: function fire() {
        return l.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!d;
      }
    };

    return l;
  }, p.extend({
    Deferred: function Deferred(a) {
      var b = [["resolve", "done", p.Callbacks("once memory"), "resolved"], ["reject", "fail", p.Callbacks("once memory"), "rejected"], ["notify", "progress", p.Callbacks("memory")]],
          c = "pending",
          d = {
        state: function state() {
          return c;
        },
        always: function always() {
          return e.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var a = arguments;
          return p.Deferred(function (c) {
            p.each(b, function (b, d) {
              var f = d[0],
                  g = a[b];
              e[d[1]](p.isFunction(g) ? function () {
                var a = g.apply(this, arguments);
                a && p.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a]);
              } : c[f]);
            }), a = null;
          }).promise();
        },
        promise: function promise(a) {
          return _typeof(a) == "object" ? p.extend(a, d) : d;
        }
      },
          e = {};
      return d.pipe = d.then, p.each(b, function (a, f) {
        var g = f[2],
            h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[a ^ 1][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function when(a) {
      var b = 0,
          c = k.call(arguments),
          d = c.length,
          e = d !== 1 || a && p.isFunction(a.promise) ? d : 0,
          f = e === 1 ? a : p.Deferred(),
          g = function g(a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? k.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c);
        };
      },
          h,
          i,
          j;

      if (d > 1) {
        h = new Array(d), i = new Array(d), j = new Array(d);

        for (; b < d; b++) {
          c[b] && p.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e;
        }
      }

      return e || f.resolveWith(j, c), f.promise();
    }
  }), p.support = function () {
    var b,
        c,
        d,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n = e.createElement("div");
    n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], d.style.cssText = "top:1px;float:left;opacity:.5";
    if (!c || !c.length || !d) return {};
    f = e.createElement("select"), g = f.appendChild(e.createElement("option")), h = n.getElementsByTagName("input")[0], b = {
      leadingWhitespace: n.firstChild.nodeType === 3,
      tbody: !n.getElementsByTagName("tbody").length,
      htmlSerialize: !!n.getElementsByTagName("link").length,
      style: /top/.test(d.getAttribute("style")),
      hrefNormalized: d.getAttribute("href") === "/a",
      opacity: /^0.5/.test(d.style.opacity),
      cssFloat: !!d.style.cssFloat,
      checkOn: h.value === "on",
      optSelected: g.selected,
      getSetAttribute: n.className !== "t",
      enctype: !!e.createElement("form").enctype,
      html5Clone: e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
      boxModel: e.compatMode === "CSS1Compat",
      submitBubbles: !0,
      changeBubbles: !0,
      focusinBubbles: !1,
      deleteExpando: !0,
      noCloneEvent: !0,
      inlineBlockNeedsLayout: !1,
      shrinkWrapBlocks: !1,
      reliableMarginRight: !0,
      boxSizingReliable: !0,
      pixelPosition: !1
    }, h.checked = !0, b.noCloneChecked = h.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled;

    try {
      delete n.test;
    } catch (o) {
      b.deleteExpando = !1;
    }

    !n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", m = function m() {
      b.noCloneEvent = !1;
    }), n.cloneNode(!0).fireEvent("onclick"), n.detachEvent("onclick", m)), h = e.createElement("input"), h.value = "t", h.setAttribute("type", "radio"), b.radioValue = h.value === "t", h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), n.appendChild(h), i = e.createDocumentFragment(), i.appendChild(n.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = h.checked, i.removeChild(h), i.appendChild(n);
    if (n.attachEvent) for (k in {
      submit: !0,
      change: !0,
      focusin: !0
    }) {
      j = "on" + k, l = j in n, l || (n.setAttribute(j, "return;"), l = typeof n[j] == "function"), b[k + "Bubbles"] = l;
    }
    return p(function () {
      var c,
          d,
          f,
          g,
          h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
          i = e.getElementsByTagName("body")[0];
      if (!i) return;
      c = e.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", i.insertBefore(c, i.firstChild), d = e.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", b.reliableHiddenOffsets = l && f[0].offsetHeight === 0, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = d.offsetWidth === 4, b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1, a.getComputedStyle && (b.pixelPosition = (a.getComputedStyle(d, null) || {}).top !== "1%", b.boxSizingReliable = (a.getComputedStyle(d, null) || {
        width: "4px"
      }).width === "4px", g = e.createElement("div"), g.style.cssText = d.style.cssText = h, g.style.marginRight = g.style.width = "0", d.style.width = "1px", d.appendChild(g), b.reliableMarginRight = !parseFloat((a.getComputedStyle(g, null) || {}).marginRight)), typeof d.style.zoom != "undefined" && (d.innerHTML = "", d.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = d.offsetWidth === 3, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = d.offsetWidth !== 3, c.style.zoom = 1), i.removeChild(c), c = d = f = g = null;
    }), i.removeChild(n), c = d = f = g = h = i = n = null, b;
  }();
  var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      I = /([A-Z])/g;
  p.extend({
    cache: {},
    deletedIds: [],
    uuid: 0,
    expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0
    },
    hasData: function hasData(a) {
      return a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando], !!a && !K(a);
    },
    data: function data(a, c, d, e) {
      if (!p.acceptData(a)) return;
      var f,
          g,
          h = p.expando,
          i = typeof c == "string",
          j = a.nodeType,
          k = j ? p.cache : a,
          l = j ? a[h] : a[h] && h;
      if ((!l || !k[l] || !e && !k[l].data) && i && d === b) return;
      l || (j ? a[h] = l = p.deletedIds.pop() || ++p.uuid : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = p.noop));
      if (_typeof(c) == "object" || typeof c == "function") e ? k[l] = p.extend(k[l], c) : k[l].data = p.extend(k[l].data, c);
      return f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[p.camelCase(c)] = d), i ? (g = f[c], g == null && (g = f[p.camelCase(c)])) : g = f, g;
    },
    removeData: function removeData(a, b, c) {
      if (!p.acceptData(a)) return;
      var d,
          e,
          f,
          g = a.nodeType,
          h = g ? p.cache : a,
          i = g ? a[p.expando] : p.expando;
      if (!h[i]) return;

      if (b) {
        d = c ? h[i] : h[i].data;

        if (d) {
          p.isArray(b) || (b in d ? b = [b] : (b = p.camelCase(b), b in d ? b = [b] : b = b.split(" ")));

          for (e = 0, f = b.length; e < f; e++) {
            delete d[b[e]];
          }

          if (!(c ? K : p.isEmptyObject)(d)) return;
        }
      }

      if (!c) {
        delete h[i].data;
        if (!K(h[i])) return;
      }

      g ? p.cleanData([a], !0) : p.support.deleteExpando || h != h.window ? delete h[i] : h[i] = null;
    },
    _data: function _data(a, b, c) {
      return p.data(a, b, c, !0);
    },
    acceptData: function acceptData(a) {
      var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
      return !b || b !== !0 && a.getAttribute("classid") === b;
    }
  }), p.fn.extend({
    data: function data(a, c) {
      var d,
          e,
          f,
          g,
          h,
          i = this[0],
          j = 0,
          k = null;

      if (a === b) {
        if (this.length) {
          k = p.data(i);

          if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
            f = i.attributes;

            for (h = f.length; j < h; j++) {
              g = f[j].name, g.indexOf("data-") === 0 && (g = p.camelCase(g.substring(5)), J(i, g, k[g]));
            }

            p._data(i, "parsedAttrs", !0);
          }
        }

        return k;
      }

      return _typeof(a) == "object" ? this.each(function () {
        p.data(this, a);
      }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", p.access(this, function (c) {
        if (c === b) return k = this.triggerHandler("getData" + e, [d[0]]), k === b && i && (k = p.data(i, a), k = J(i, a, k)), k === b && d[1] ? this.data(d[0]) : k;
        d[1] = c, this.each(function () {
          var b = p(this);
          b.triggerHandler("setData" + e, d), p.data(this, a, c), b.triggerHandler("changeData" + e, d);
        });
      }, null, c, arguments.length > 1, null, !1));
    },
    removeData: function removeData(a) {
      return this.each(function () {
        p.removeData(this, a);
      });
    }
  }), p.extend({
    queue: function queue(a, b, c) {
      var d;
      if (a) return b = (b || "fx") + "queue", d = p._data(a, b), c && (!d || p.isArray(c) ? d = p._data(a, b, p.makeArray(c)) : d.push(c)), d || [];
    },
    dequeue: function dequeue(a, b) {
      b = b || "fx";

      var c = p.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = p._queueHooks(a, b),
          g = function g() {
        p.dequeue(a, b);
      };

      e === "inprogress" && (e = c.shift(), d--), e && (b === "fx" && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";
      return p._data(a, c) || p._data(a, c, {
        empty: p.Callbacks("once memory").add(function () {
          p.removeData(a, b + "queue", !0), p.removeData(a, c, !0);
        })
      });
    }
  }), p.fn.extend({
    queue: function queue(a, c) {
      var d = 2;
      return typeof a != "string" && (c = a, a = "fx", d--), arguments.length < d ? p.queue(this[0], a) : c === b ? this : this.each(function () {
        var b = p.queue(this, a, c);
        p._queueHooks(this, a), a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a);
      });
    },
    dequeue: function dequeue(a) {
      return this.each(function () {
        p.dequeue(this, a);
      });
    },
    delay: function delay(a, b) {
      return a = p.fx ? p.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
        var d = setTimeout(b, a);

        c.stop = function () {
          clearTimeout(d);
        };
      });
    },
    clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    },
    promise: function promise(a, c) {
      var d,
          e = 1,
          f = p.Deferred(),
          g = this,
          h = this.length,
          i = function i() {
        --e || f.resolveWith(g, [g]);
      };

      typeof a != "string" && (c = a, a = b), a = a || "fx";

      while (h--) {
        d = p._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
      }

      return i(), f.promise(c);
    }
  });
  var L,
      M,
      N,
      O = /[\t\r\n]/g,
      P = /\r/g,
      Q = /^(?:button|input)$/i,
      R = /^(?:button|input|object|select|textarea)$/i,
      S = /^a(?:rea|)$/i,
      T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      U = p.support.getSetAttribute;
  p.fn.extend({
    attr: function attr(a, b) {
      return p.access(this, p.attr, a, b, arguments.length > 1);
    },
    removeAttr: function removeAttr(a) {
      return this.each(function () {
        p.removeAttr(this, a);
      });
    },
    prop: function prop(a, b) {
      return p.access(this, p.prop, a, b, arguments.length > 1);
    },
    removeProp: function removeProp(a) {
      return a = p.propFix[a] || a, this.each(function () {
        try {
          this[a] = b, delete this[a];
        } catch (c) {}
      });
    },
    addClass: function addClass(a) {
      var b, c, d, e, f, g, h;
      if (p.isFunction(a)) return this.each(function (b) {
        p(this).addClass(a.call(this, b, this.className));
      });

      if (a && typeof a == "string") {
        b = a.split(s);

        for (c = 0, d = this.length; c < d; c++) {
          e = this[c];
          if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a;else {
            f = " " + e.className + " ";

            for (g = 0, h = b.length; g < h; g++) {
              ~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
            }

            e.className = p.trim(f);
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(a) {
      var c, d, e, f, g, h, i;
      if (p.isFunction(a)) return this.each(function (b) {
        p(this).removeClass(a.call(this, b, this.className));
      });

      if (a && typeof a == "string" || a === b) {
        c = (a || "").split(s);

        for (h = 0, i = this.length; h < i; h++) {
          e = this[h];

          if (e.nodeType === 1 && e.className) {
            d = (" " + e.className + " ").replace(O, " ");

            for (f = 0, g = c.length; f < g; f++) {
              while (d.indexOf(" " + c[f] + " ") > -1) {
                d = d.replace(" " + c[f] + " ", " ");
              }
            }

            e.className = a ? p.trim(d) : "";
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(a, b) {
      var c = _typeof(a),
          d = typeof b == "boolean";

      return p.isFunction(a) ? this.each(function (c) {
        p(this).toggleClass(a.call(this, c, this.className, b), b);
      }) : this.each(function () {
        if (c === "string") {
          var e,
              f = 0,
              g = p(this),
              h = b,
              i = a.split(s);

          while (e = i[f++]) {
            h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
          }
        } else if (c === "undefined" || c === "boolean") this.className && p._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || "";
      });
    },
    hasClass: function hasClass(a) {
      var b = " " + a + " ",
          c = 0,
          d = this.length;

      for (; c < d; c++) {
        if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(O, " ").indexOf(b) > -1) return !0;
      }

      return !1;
    },
    val: function val(a) {
      var c,
          d,
          e,
          f = this[0];

      if (!arguments.length) {
        if (f) return c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, typeof d == "string" ? d.replace(P, "") : d == null ? "" : d);
        return;
      }

      return e = p.isFunction(a), this.each(function (d) {
        var f,
            g = p(this);
        if (this.nodeType !== 1) return;
        e ? f = a.call(this, d, g.val()) : f = a, f == null ? f = "" : typeof f == "number" ? f += "" : p.isArray(f) && (f = p.map(f, function (a) {
          return a == null ? "" : a + "";
        })), c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
        if (!c || !("set" in c) || c.set(this, f, "value") === b) this.value = f;
      });
    }
  }), p.extend({
    valHooks: {
      option: {
        get: function get(a) {
          var b = a.attributes.value;
          return !b || b.specified ? a.value : a.text;
        }
      },
      select: {
        get: function get(a) {
          var b,
              c,
              d,
              e,
              f = a.selectedIndex,
              g = [],
              h = a.options,
              i = a.type === "select-one";
          if (f < 0) return null;
          c = i ? f : 0, d = i ? f + 1 : h.length;

          for (; c < d; c++) {
            e = h[c];

            if (e.selected && (p.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !p.nodeName(e.parentNode, "optgroup"))) {
              b = p(e).val();
              if (i) return b;
              g.push(b);
            }
          }

          return i && !g.length && h.length ? p(h[f]).val() : g;
        },
        set: function set(a, b) {
          var c = p.makeArray(b);
          return p(a).find("option").each(function () {
            this.selected = p.inArray(p(this).val(), c) >= 0;
          }), c.length || (a.selectedIndex = -1), c;
        }
      }
    },
    attrFn: {},
    attr: function attr(a, c, d, e) {
      var f,
          g,
          h,
          i = a.nodeType;
      if (!a || i === 3 || i === 8 || i === 2) return;
      if (e && p.isFunction(p.fn[c])) return p(a)[c](d);
      if (typeof a.getAttribute == "undefined") return p.prop(a, c, d);
      h = i !== 1 || !p.isXMLDoc(a), h && (c = c.toLowerCase(), g = p.attrHooks[c] || (T.test(c) ? M : L));

      if (d !== b) {
        if (d === null) {
          p.removeAttr(a, c);
          return;
        }

        return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, "" + d), d);
      }

      return g && "get" in g && h && (f = g.get(a, c)) !== null ? f : (f = a.getAttribute(c), f === null ? b : f);
    },
    removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e,
          f,
          g = 0;

      if (b && a.nodeType === 1) {
        d = b.split(s);

        for (; g < d.length; g++) {
          e = d[g], e && (c = p.propFix[e] || e, f = T.test(e), f || p.attr(a, e, ""), a.removeAttribute(U ? e : c), f && c in a && (a[c] = !1));
        }
      }
    },
    attrHooks: {
      type: {
        set: function set(a, b) {
          if (Q.test(a.nodeName) && a.parentNode) p.error("type property can't be changed");else if (!p.support.radioValue && b === "radio" && p.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b;
          }
        }
      },
      value: {
        get: function get(a, b) {
          return L && p.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null;
        },
        set: function set(a, b, c) {
          if (L && p.nodeName(a, "button")) return L.set(a, b, c);
          a.value = b;
        }
      }
    },
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    prop: function prop(a, c, d) {
      var e,
          f,
          g,
          h = a.nodeType;
      if (!a || h === 3 || h === 8 || h === 2) return;
      return g = h !== 1 || !p.isXMLDoc(a), g && (c = p.propFix[c] || c, f = p.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && (e = f.get(a, c)) !== null ? e : a[c];
    },
    propHooks: {
      tabIndex: {
        get: function get(a) {
          var c = a.getAttributeNode("tabindex");
          return c && c.specified ? parseInt(c.value, 10) : R.test(a.nodeName) || S.test(a.nodeName) && a.href ? 0 : b;
        }
      }
    }
  }), M = {
    get: function get(a, c) {
      var d,
          e = p.prop(a, c);
      return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b;
    },
    set: function set(a, b, c) {
      var d;
      return b === !1 ? p.removeAttr(a, c) : (d = p.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c;
    }
  }, U || (N = {
    name: !0,
    id: !0,
    coords: !0
  }, L = p.valHooks.button = {
    get: function get(a, c) {
      var d;
      return d = a.getAttributeNode(c), d && (N[c] ? d.value !== "" : d.specified) ? d.value : b;
    },
    set: function set(a, b, c) {
      var d = a.getAttributeNode(c);
      return d || (d = e.createAttribute(c), a.setAttributeNode(d)), d.value = b + "";
    }
  }, p.each(["width", "height"], function (a, b) {
    p.attrHooks[b] = p.extend(p.attrHooks[b], {
      set: function set(a, c) {
        if (c === "") return a.setAttribute(b, "auto"), c;
      }
    });
  }), p.attrHooks.contenteditable = {
    get: L.get,
    set: function set(a, b, c) {
      b === "" && (b = "false"), L.set(a, b, c);
    }
  }), p.support.hrefNormalized || p.each(["href", "src", "width", "height"], function (a, c) {
    p.attrHooks[c] = p.extend(p.attrHooks[c], {
      get: function get(a) {
        var d = a.getAttribute(c, 2);
        return d === null ? b : d;
      }
    });
  }), p.support.style || (p.attrHooks.style = {
    get: function get(a) {
      return a.style.cssText.toLowerCase() || b;
    },
    set: function set(a, b) {
      return a.style.cssText = "" + b;
    }
  }), p.support.optSelected || (p.propHooks.selected = p.extend(p.propHooks.selected, {
    get: function get(a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    }
  })), p.support.enctype || (p.propFix.enctype = "encoding"), p.support.checkOn || p.each(["radio", "checkbox"], function () {
    p.valHooks[this] = {
      get: function get(a) {
        return a.getAttribute("value") === null ? "on" : a.value;
      }
    };
  }), p.each(["radio", "checkbox"], function () {
    p.valHooks[this] = p.extend(p.valHooks[this], {
      set: function set(a, b) {
        if (p.isArray(b)) return a.checked = p.inArray(p(a).val(), b) >= 0;
      }
    });
  });

  var V = /^(?:textarea|input|select)$/i,
      W = /^([^\.]*|)(?:\.(.+)|)$/,
      X = /(?:^|\s)hover(\.\S+|)\b/,
      Y = /^key/,
      Z = /^(?:mouse|contextmenu)|click/,
      $ = /^(?:focusinfocus|focusoutblur)$/,
      _ = function _(a) {
    return p.event.special.hover ? a : a.replace(X, "mouseenter$1 mouseleave$1");
  };

  p.event = {
    add: function add(a, c, d, e, f) {
      var g, _h, i, j, k, l, m, n, o, q, r;

      if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a))) return;
      d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = p.guid++), i = g.events, i || (g.events = i = {}), _h = g.handle, _h || (g.handle = _h = function h(a) {
        return typeof p != "undefined" && (!a || p.event.triggered !== a.type) ? p.event.dispatch.apply(_h.elem, arguments) : b;
      }, _h.elem = a), c = p.trim(_(c)).split(" ");

      for (j = 0; j < c.length; j++) {
        k = W.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), r = p.event.special[l] || {}, l = (f ? r.delegateType : r.bindType) || l, r = p.event.special[l] || {}, n = p.extend({
          type: l,
          origType: k[1],
          data: e,
          handler: d,
          guid: d.guid,
          selector: f,
          namespace: m.join(".")
        }, o), q = i[l];

        if (!q) {
          q = i[l] = [], q.delegateCount = 0;
          if (!r.setup || r.setup.call(a, e, m, _h) === !1) a.addEventListener ? a.addEventListener(l, _h, !1) : a.attachEvent && a.attachEvent("on" + l, _h);
        }

        r.add && (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? q.splice(q.delegateCount++, 0, n) : q.push(n), p.event.global[l] = !0;
      }

      a = null;
    },
    global: {},
    remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          q,
          r = p.hasData(a) && p._data(a);

      if (!r || !(m = r.events)) return;
      b = p.trim(_(b || "")).split(" ");

      for (f = 0; f < b.length; f++) {
        g = W.exec(b[f]) || [], h = i = g[1], j = g[2];

        if (!h) {
          for (h in m) {
            p.event.remove(a, h + b[f], c, d, !0);
          }

          continue;
        }

        n = p.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

        for (l = 0; l < o.length; l++) {
          q = o[l], (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || d === "**" && q.selector) && (o.splice(l--, 1), q.selector && o.delegateCount--, n.remove && n.remove.call(a, q));
        }

        o.length === 0 && k !== o.length && ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) && p.removeEvent(a, h, r.handle), delete m[h]);
      }

      p.isEmptyObject(m) && (delete r.handle, p.removeData(a, "events", !0));
    },
    customEvent: {
      getData: !0,
      setData: !0,
      changeData: !0
    },
    trigger: function trigger(c, d, f, g) {
      if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
        var h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            q,
            r,
            s = c.type || c,
            t = [];
        if ($.test(s + p.event.triggered)) return;
        s.indexOf("!") >= 0 && (s = s.slice(0, -1), i = !0), s.indexOf(".") >= 0 && (t = s.split("."), s = t.shift(), t.sort());
        if ((!f || p.event.customEvent[s]) && !p.event.global[s]) return;
        c = _typeof(c) == "object" ? c[p.expando] ? c : new p.Event(s, c) : new p.Event(s), c.type = s, c.isTrigger = !0, c.exclusive = i, c.namespace = t.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, m = s.indexOf(":") < 0 ? "on" + s : "";

        if (!f) {
          h = p.cache;

          for (j in h) {
            h[j].events && h[j].events[s] && p.event.trigger(c, d, h[j].handle.elem, !0);
          }

          return;
        }

        c.result = b, c.target || (c.target = f), d = d != null ? p.makeArray(d) : [], d.unshift(c), n = p.event.special[s] || {};
        if (n.trigger && n.trigger.apply(f, d) === !1) return;
        q = [[f, n.bindType || s]];

        if (!g && !n.noBubble && !p.isWindow(f)) {
          r = n.delegateType || s, k = $.test(r + s) ? f : f.parentNode;

          for (l = f; k; k = k.parentNode) {
            q.push([k, r]), l = k;
          }

          l === (f.ownerDocument || e) && q.push([l.defaultView || l.parentWindow || a, r]);
        }

        for (j = 0; j < q.length && !c.isPropagationStopped(); j++) {
          k = q[j][0], c.type = q[j][1], o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle"), o && o.apply(k, d), o = m && k[m], o && p.acceptData(k) && o.apply(k, d) === !1 && c.preventDefault();
        }

        return c.type = s, !g && !c.isDefaultPrevented() && (!n._default || n._default.apply(f.ownerDocument, d) === !1) && (s !== "click" || !p.nodeName(f, "a")) && p.acceptData(f) && m && f[s] && (s !== "focus" && s !== "blur" || c.target.offsetWidth !== 0) && !p.isWindow(f) && (l = f[m], l && (f[m] = null), p.event.triggered = s, f[s](), p.event.triggered = b, l && (f[m] = l)), c.result;
      }

      return;
    },
    dispatch: function dispatch(c) {
      c = p.event.fix(c || a.event);
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n = (p._data(this, "events") || {})[c.type] || [],
          o = n.delegateCount,
          q = [].slice.call(arguments),
          r = !c.exclusive && !c.namespace,
          s = p.event.special[c.type] || {},
          t = [];
      q[0] = c, c.delegateTarget = this;
      if (s.preDispatch && s.preDispatch.call(this, c) === !1) return;
      if (o && (!c.button || c.type !== "click")) for (f = c.target; f != this; f = f.parentNode || this) {
        if (f.disabled !== !0 || c.type !== "click") {
          h = {}, j = [];

          for (d = 0; d < o; d++) {
            k = n[d], l = k.selector, h[l] === b && (h[l] = p(l, this).index(f) >= 0), h[l] && j.push(k);
          }

          j.length && t.push({
            elem: f,
            matches: j
          });
        }
      }
      n.length > o && t.push({
        elem: this,
        matches: n.slice(o)
      });

      for (d = 0; d < t.length && !c.isPropagationStopped(); d++) {
        i = t[d], c.currentTarget = i.elem;

        for (e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) {
          k = i.matches[e];
          if (r || !c.namespace && !k.namespace || c.namespace_re && c.namespace_re.test(k.namespace)) c.data = k.data, c.handleObj = k, g = ((p.event.special[k.origType] || {}).handle || k.handler).apply(i.elem, q), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation()));
        }
      }

      return s.postDispatch && s.postDispatch.call(this, c), c.result;
    },
    props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(a, b) {
        return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(a, c) {
        var d,
            f,
            g,
            h = c.button,
            i = c.fromElement;
        return a.pageX == null && c.clientX != null && (d = a.target.ownerDocument || e, f = d.documentElement, g = d.body, a.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0), a;
      }
    },
    fix: function fix(a) {
      if (a[p.expando]) return a;
      var b,
          c,
          d = a,
          f = p.event.fixHooks[a.type] || {},
          g = f.props ? this.props.concat(f.props) : this.props;
      a = p.Event(d);

      for (b = g.length; b;) {
        c = g[--b], a[c] = d[c];
      }

      return a.target || (a.target = d.srcElement || e), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, f.filter ? f.filter(a, d) : a;
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        delegateType: "focusin"
      },
      blur: {
        delegateType: "focusout"
      },
      beforeunload: {
        setup: function setup(a, b, c) {
          p.isWindow(this) && (this.onbeforeunload = c);
        },
        teardown: function teardown(a, b) {
          this.onbeforeunload === b && (this.onbeforeunload = null);
        }
      }
    },
    simulate: function simulate(a, b, c, d) {
      var e = p.extend(new p.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    }
  }, p.event.handle = p.event.dispatch, p.removeEvent = e.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  } : function (a, b, c) {
    var d = "on" + b;
    a.detachEvent && (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c));
  }, p.Event = function (a, b) {
    if (this instanceof p.Event) a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? bb : ba) : this.type = a, b && p.extend(this, b), this.timeStamp = a && a.timeStamp || p.now(), this[p.expando] = !0;else return new p.Event(a, b);
  }, p.Event.prototype = {
    preventDefault: function preventDefault() {
      this.isDefaultPrevented = bb;
      var a = this.originalEvent;
      if (!a) return;
      a.preventDefault ? a.preventDefault() : a.returnValue = !1;
    },
    stopPropagation: function stopPropagation() {
      this.isPropagationStopped = bb;
      var a = this.originalEvent;
      if (!a) return;
      a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0;
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = bb, this.stopPropagation();
    },
    isDefaultPrevented: ba,
    isPropagationStopped: ba,
    isImmediatePropagationStopped: ba
  }, p.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function (a, b) {
    p.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj,
            g = f.selector;
        if (!e || e !== d && !p.contains(d, e)) a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b;
        return c;
      }
    };
  }), p.support.submitBubbles || (p.event.special.submit = {
    setup: function setup() {
      if (p.nodeName(this, "form")) return !1;
      p.event.add(this, "click._submit keypress._submit", function (a) {
        var c = a.target,
            d = p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
        d && !p._data(d, "_submit_attached") && (p.event.add(d, "submit._submit", function (a) {
          a._submit_bubble = !0;
        }), p._data(d, "_submit_attached", !0));
      });
    },
    postDispatch: function postDispatch(a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && p.event.simulate("submit", this.parentNode, a, !0));
    },
    teardown: function teardown() {
      if (p.nodeName(this, "form")) return !1;
      p.event.remove(this, "._submit");
    }
  }), p.support.changeBubbles || (p.event.special.change = {
    setup: function setup() {
      if (V.test(this.nodeName)) {
        if (this.type === "checkbox" || this.type === "radio") p.event.add(this, "propertychange._change", function (a) {
          a.originalEvent.propertyName === "checked" && (this._just_changed = !0);
        }), p.event.add(this, "click._change", function (a) {
          this._just_changed && !a.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, a, !0);
        });
        return !1;
      }

      p.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;
        V.test(b.nodeName) && !p._data(b, "_change_attached") && (p.event.add(b, "change._change", function (a) {
          this.parentNode && !a.isSimulated && !a.isTrigger && p.event.simulate("change", this.parentNode, a, !0);
        }), p._data(b, "_change_attached", !0));
      });
    },
    handle: function handle(a) {
      var b = a.target;
      if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments);
    },
    teardown: function teardown() {
      return p.event.remove(this, "._change"), !V.test(this.nodeName);
    }
  }), p.support.focusinBubbles || p.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = 0,
        d = function d(a) {
      p.event.simulate(b, a.target, p.event.fix(a), !0);
    };

    p.event.special[b] = {
      setup: function setup() {
        c++ === 0 && e.addEventListener(a, d, !0);
      },
      teardown: function teardown() {
        --c === 0 && e.removeEventListener(a, d, !0);
      }
    };
  }), p.fn.extend({
    on: function on(a, c, d, e, f) {
      var g, h;

      if (_typeof(a) == "object") {
        typeof c != "string" && (d = d || c, c = b);

        for (h in a) {
          this.on(h, c, d, a[h], f);
        }

        return this;
      }

      d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
      if (e === !1) e = ba;else if (!e) return this;
      return f === 1 && (g = e, e = function e(a) {
        return p().off(a), g.apply(this, arguments);
      }, e.guid = g.guid || (g.guid = p.guid++)), this.each(function () {
        p.event.add(this, a, e, d, c);
      });
    },
    one: function one(a, b, c, d) {
      return this.on(a, b, c, d, 1);
    },
    off: function off(a, c, d) {
      var e, f;
      if (a && a.preventDefault && a.handleObj) return e = a.handleObj, p(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;

      if (_typeof(a) == "object") {
        for (f in a) {
          this.off(f, c, a[f]);
        }

        return this;
      }

      if (c === !1 || typeof c == "function") d = c, c = b;
      return d === !1 && (d = ba), this.each(function () {
        p.event.remove(this, a, d, c);
      });
    },
    bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function unbind(a, b) {
      return this.off(a, null, b);
    },
    live: function live(a, b, c) {
      return p(this.context).on(a, this.selector, b, c), this;
    },
    die: function die(a, b) {
      return p(this.context).off(a, this.selector || "**", b), this;
    },
    delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function undelegate(a, b, c) {
      return arguments.length == 1 ? this.off(a, "**") : this.off(b, a || "**", c);
    },
    trigger: function trigger(a, b) {
      return this.each(function () {
        p.event.trigger(a, b, this);
      });
    },
    triggerHandler: function triggerHandler(a, b) {
      if (this[0]) return p.event.trigger(a, b, this[0], !0);
    },
    toggle: function toggle(a) {
      var b = arguments,
          c = a.guid || p.guid++,
          d = 0,
          e = function e(c) {
        var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
        return p._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1;
      };

      e.guid = c;

      while (d < b.length) {
        b[d++].guid = c;
      }

      return this.click(e);
    },
    hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }
  }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    p.fn[b] = function (a, c) {
      return c == null && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    }, Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks), Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks);
  }), function (a, b) {
    function $(a, b, c, d) {
      c = c || [], b = b || q;
      var e,
          f,
          g,
          j,
          k = b.nodeType;
      if (k !== 1 && k !== 9) return [];
      if (!a || typeof a != "string") return c;
      g = h(b);
      if (!g && !d) if (e = L.exec(a)) if (j = e[1]) {
        if (k === 9) {
          f = b.getElementById(j);
          if (!f || !f.parentNode) return c;
          if (f.id === j) return c.push(f), c;
        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(j)) && i(b, f) && f.id === j) return c.push(f), c;
      } else {
        if (e[2]) return u.apply(c, t.call(b.getElementsByTagName(a), 0)), c;
        if ((j = e[3]) && X && b.getElementsByClassName) return u.apply(c, t.call(b.getElementsByClassName(j), 0)), c;
      }
      return bk(a, b, c, d, g);
    }

    function _(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return c === "input" && b.type === a;
      };
    }

    function ba(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return (c === "input" || c === "button") && b.type === a;
      };
    }

    function bb(a, b, c) {
      if (a === b) return c;
      var d = a.nextSibling;

      while (d) {
        if (d === b) return -1;
        d = d.nextSibling;
      }

      return 1;
    }

    function bc(a, b, c, d) {
      var e,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          p,
          r = !c && b !== q,
          s = (r ? "<s>" : "") + a.replace(H, "$1<s>"),
          u = y[o][s];
      if (u) return d ? 0 : t.call(u, 0);
      j = a, k = [], m = 0, n = f.preFilter, p = f.filter;

      while (j) {
        if (!e || (g = I.exec(j))) g && (j = j.slice(g[0].length), h.selector = l), k.push(h = []), l = "", r && (j = " " + j);
        e = !1;
        if (g = J.exec(j)) l += g[0], j = j.slice(g[0].length), e = h.push({
          part: g.pop().replace(H, " "),
          string: g[0],
          captures: g
        });

        for (i in p) {
          (g = S[i].exec(j)) && (!n[i] || (g = n[i](g, b, c))) && (l += g[0], j = j.slice(g[0].length), e = h.push({
            part: i,
            string: g.shift(),
            captures: g
          }));
        }

        if (!e) break;
      }

      return l && (h.selector = l), d ? j.length : j ? $.error(a) : t.call(y(s, k), 0);
    }

    function bd(a, b, e, f) {
      var g = b.dir,
          h = s++;
      return a || (a = function a(_a) {
        return _a === e;
      }), b.first ? function (b) {
        while (b = b[g]) {
          if (b.nodeType === 1) return a(b) && b;
        }
      } : f ? function (b) {
        while (b = b[g]) {
          if (b.nodeType === 1 && a(b)) return b;
        }
      } : function (b) {
        var e,
            f = h + "." + c,
            i = f + "." + d;

        while (b = b[g]) {
          if (b.nodeType === 1) {
            if ((e = b[o]) === i) return b.sizset;

            if (typeof e == "string" && e.indexOf(f) === 0) {
              if (b.sizset) return b;
            } else {
              b[o] = i;
              if (a(b)) return b.sizset = !0, b;
              b.sizset = !1;
            }
          }
        }
      };
    }

    function be(a, b) {
      return a ? function (c) {
        var d = b(c);
        return d && a(d === !0 ? c : d);
      } : b;
    }

    function bf(a, b, c) {
      var d,
          e,
          g = 0;

      for (; d = a[g]; g++) {
        f.relative[d.part] ? e = bd(e, f.relative[d.part], b, c) : e = be(e, f.filter[d.part].apply(null, d.captures.concat(b, c)));
      }

      return e;
    }

    function bg(a) {
      return function (b) {
        var c,
            d = 0;

        for (; c = a[d]; d++) {
          if (c(b)) return !0;
        }

        return !1;
      };
    }

    function bh(a, b, c, d) {
      var e = 0,
          f = b.length;

      for (; e < f; e++) {
        $(a, b[e], c, d);
      }
    }

    function bi(a, b, c, d, e, g) {
      var h,
          i = f.setFilters[b.toLowerCase()];
      return i || $.error(b), (a || !(h = e)) && bh(a || "*", d, h = [], e), h.length > 0 ? i(h, c, g) : [];
    }

    function bj(a, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s = 0,
          t = a.length,
          v = S.POS,
          w = new RegExp("^" + v.source + "(?!" + A + ")", "i"),
          x = function x() {
        var a = 1,
            c = arguments.length - 2;

        for (; a < c; a++) {
          arguments[a] === b && (n[a] = b);
        }
      };

      for (; s < t; s++) {
        f = a[s], g = "", m = e;

        for (h = 0, i = f.length; h < i; h++) {
          j = f[h], k = j.string;

          if (j.part === "PSEUDO") {
            v.exec(""), l = 0;

            while (n = v.exec(k)) {
              o = !0, p = v.lastIndex = n.index + n[0].length;

              if (p > l) {
                g += k.slice(l, n.index), l = p, q = [c], J.test(g) && (m && (q = m), m = e);
                if (r = O.test(g)) g = g.slice(0, -5).replace(J, "$&*"), l++;
                n.length > 1 && n[0].replace(w, x), m = bi(g, n[1], n[2], q, m, r);
              }

              g = "";
            }
          }

          o || (g += k), o = !1;
        }

        g ? J.test(g) ? bh(g, m || [c], d, e) : $(g, c, d, e ? e.concat(m) : m) : u.apply(d, m);
      }

      return t === 1 ? d : $.uniqueSort(d);
    }

    function bk(a, b, e, g, h) {
      a = a.replace(H, "$1");
      var i,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          v = bc(a, b, h),
          w = b.nodeType;
      if (S.POS.test(a)) return bj(v, b, e, g);
      if (g) i = t.call(g, 0);else if (v.length === 1) {
        if ((o = t.call(v[0], 0)).length > 2 && (p = o[0]).part === "ID" && w === 9 && !h && f.relative[o[1].part]) {
          b = f.find.ID(p.captures[0].replace(R, ""), b, h)[0];
          if (!b) return e;
          a = a.slice(o.shift().string.length);
        }

        r = (v = N.exec(o[0].string)) && !v.index && b.parentNode || b, q = "";

        for (n = o.length - 1; n >= 0; n--) {
          p = o[n], s = p.part, q = p.string + q;
          if (f.relative[s]) break;

          if (f.order.test(s)) {
            i = f.find[s](p.captures[0].replace(R, ""), r, h);
            if (i == null) continue;
            a = a.slice(0, a.length - q.length) + q.replace(S[s], ""), a || u.apply(e, t.call(i, 0));
            break;
          }
        }
      }

      if (a) {
        k = j(a, b, h), c = k.dirruns++, i == null && (i = f.find.TAG("*", N.test(a) && b.parentNode || b));

        for (n = 0; m = i[n]; n++) {
          d = k.runs++, k(m) && e.push(m);
        }
      }

      return e;
    }

    var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = !0,
        n = "undefined",
        o = ("sizcache" + Math.random()).replace(".", ""),
        q = a.document,
        r = q.documentElement,
        s = 0,
        t = [].slice,
        u = [].push,
        v = function v(a, b) {
      return a[o] = b || !0, a;
    },
        w = function w() {
      var a = {},
          b = [];
      return v(function (c, d) {
        return b.push(c) > f.cacheLength && delete a[b.shift()], a[c] = d;
      }, a);
    },
        x = w(),
        y = w(),
        z = w(),
        A = "[\\x20\\t\\r\\n\\f]",
        B = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
        C = B.replace("w", "w#"),
        D = "([*^$|!~]?=)",
        E = "\\[" + A + "*(" + B + ")" + A + "*(?:" + D + A + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + C + ")|)|)" + A + "*\\]",
        F = ":(" + B + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + E + ")|[^:]|\\\\.)*|.*))\\)|)",
        G = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",
        H = new RegExp("^" + A + "+|((?:^|[^\\\\])(?:\\\\.)*)" + A + "+$", "g"),
        I = new RegExp("^" + A + "*," + A + "*"),
        J = new RegExp("^" + A + "*([\\x20\\t\\r\\n\\f>+~])" + A + "*"),
        K = new RegExp(F),
        L = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        M = /^:not/,
        N = /[\x20\t\r\n\f]*[+~]/,
        O = /:not\($/,
        P = /h\d/i,
        Q = /input|select|textarea|button/i,
        R = /\\(?!\\)/g,
        S = {
      ID: new RegExp("^#(" + B + ")"),
      CLASS: new RegExp("^\\.(" + B + ")"),
      NAME: new RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"),
      TAG: new RegExp("^(" + B.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + E),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + A + "*(even|odd|(([+-]|)(\\d*)n|)" + A + "*(?:([+-]|)" + A + "*(\\d+)|))" + A + "*\\)|)", "i"),
      POS: new RegExp(G, "ig"),
      needsContext: new RegExp("^" + A + "*[>+~]|" + G, "i")
    },
        T = function T(a) {
      var b = q.createElement("div");

      try {
        return a(b);
      } catch (c) {
        return !1;
      } finally {
        b = null;
      }
    },
        U = T(function (a) {
      return a.appendChild(q.createComment("")), !a.getElementsByTagName("*").length;
    }),
        V = T(function (a) {
      return a.innerHTML = "<a href='#'></a>", a.firstChild && _typeof(a.firstChild.getAttribute) !== n && a.firstChild.getAttribute("href") === "#";
    }),
        W = T(function (a) {
      a.innerHTML = "<select></select>";

      var b = _typeof(a.lastChild.getAttribute("multiple"));

      return b !== "boolean" && b !== "string";
    }),
        X = T(function (a) {
      return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !a.getElementsByClassName || !a.getElementsByClassName("e").length ? !1 : (a.lastChild.className = "e", a.getElementsByClassName("e").length === 2);
    }),
        Y = T(function (a) {
      a.id = o + 0, a.innerHTML = "<a name='" + o + "'></a><div name='" + o + "'></div>", r.insertBefore(a, r.firstChild);
      var b = q.getElementsByName && q.getElementsByName(o).length === 2 + q.getElementsByName(o + 0).length;
      return e = !q.getElementById(o), r.removeChild(a), b;
    });

    try {
      t.call(r.childNodes, 0)[0].nodeType;
    } catch (Z) {
      t = function t(a) {
        var b,
            c = [];

        for (; b = this[a]; a++) {
          c.push(b);
        }

        return c;
      };
    }

    $.matches = function (a, b) {
      return $(a, null, null, b);
    }, $.matchesSelector = function (a, b) {
      return $(b, null, null, [a]).length > 0;
    }, g = $.getText = function (a) {
      var b,
          c = "",
          d = 0,
          e = a.nodeType;

      if (e) {
        if (e === 1 || e === 9 || e === 11) {
          if (typeof a.textContent == "string") return a.textContent;

          for (a = a.firstChild; a; a = a.nextSibling) {
            c += g(a);
          }
        } else if (e === 3 || e === 4) return a.nodeValue;
      } else for (; b = a[d]; d++) {
        c += g(b);
      }

      return c;
    }, h = $.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? b.nodeName !== "HTML" : !1;
    }, i = $.contains = r.contains ? function (a, b) {
      var c = a.nodeType === 9 ? a.documentElement : a,
          d = b && b.parentNode;
      return a === d || !!(d && d.nodeType === 1 && c.contains && c.contains(d));
    } : r.compareDocumentPosition ? function (a, b) {
      return b && !!(a.compareDocumentPosition(b) & 16);
    } : function (a, b) {
      while (b = b.parentNode) {
        if (b === a) return !0;
      }

      return !1;
    }, $.attr = function (a, b) {
      var c,
          d = h(a);
      return d || (b = b.toLowerCase()), f.attrHandle[b] ? f.attrHandle[b](a) : W || d ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? typeof a[b] == "boolean" ? a[b] ? b : null : c.specified ? c.value : null : null);
    }, f = $.selectors = {
      cacheLength: 50,
      createPseudo: v,
      match: S,
      order: new RegExp("ID|TAG" + (Y ? "|NAME" : "") + (X ? "|CLASS" : "")),
      attrHandle: V ? {} : {
        href: function href(a) {
          return a.getAttribute("href", 2);
        },
        type: function type(a) {
          return a.getAttribute("type");
        }
      },
      find: {
        ID: e ? function (a, b, c) {
          if (_typeof(b.getElementById) !== n && !c) {
            var d = b.getElementById(a);
            return d && d.parentNode ? [d] : [];
          }
        } : function (a, c, d) {
          if (_typeof(c.getElementById) !== n && !d) {
            var e = c.getElementById(a);
            return e ? e.id === a || _typeof(e.getAttributeNode) !== n && e.getAttributeNode("id").value === a ? [e] : b : [];
          }
        },
        TAG: U ? function (a, b) {
          if (_typeof(b.getElementsByTagName) !== n) return b.getElementsByTagName(a);
        } : function (a, b) {
          var c = b.getElementsByTagName(a);

          if (a === "*") {
            var d,
                e = [],
                f = 0;

            for (; d = c[f]; f++) {
              d.nodeType === 1 && e.push(d);
            }

            return e;
          }

          return c;
        },
        NAME: function NAME(a, b) {
          if (_typeof(b.getElementsByName) !== n) return b.getElementsByName(name);
        },
        CLASS: function CLASS(a, b, c) {
          if (_typeof(b.getElementsByClassName) !== n && !c) return b.getElementsByClassName(a);
        }
      },
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(a) {
          return a[1] = a[1].replace(R, ""), a[3] = (a[4] || a[5] || "").replace(R, ""), a[2] === "~=" && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        },
        CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), a[1] === "nth" ? (a[2] || $.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd")), a[4] = +(a[6] + a[7] || a[2] === "odd")) : a[2] && $.error(a[0]), a;
        },
        PSEUDO: function PSEUDO(a, b, c) {
          var d, e;
          if (S.CHILD.test(a[0])) return null;
          if (a[3]) a[2] = a[3];else if (d = a[4]) K.test(d) && (e = bc(d, b, c, !0)) && (e = d.indexOf(")", d.length - e) - d.length) && (d = d.slice(0, e), a[0] = a[0].slice(0, e)), a[2] = d;
          return a.slice(0, 3);
        }
      },
      filter: {
        ID: e ? function (a) {
          return a = a.replace(R, ""), function (b) {
            return b.getAttribute("id") === a;
          };
        } : function (a) {
          return a = a.replace(R, ""), function (b) {
            var c = _typeof(b.getAttributeNode) !== n && b.getAttributeNode("id");
            return c && c.value === a;
          };
        },
        TAG: function TAG(a) {
          return a === "*" ? function () {
            return !0;
          } : (a = a.replace(R, "").toLowerCase(), function (b) {
            return b.nodeName && b.nodeName.toLowerCase() === a;
          });
        },
        CLASS: function CLASS(a) {
          var b = x[o][a];
          return b || (b = x(a, new RegExp("(^|" + A + ")" + a + "(" + A + "|$)"))), function (a) {
            return b.test(a.className || _typeof(a.getAttribute) !== n && a.getAttribute("class") || "");
          };
        },
        ATTR: function ATTR(a, b, c) {
          return b ? function (d) {
            var e = $.attr(d, a),
                f = e + "";
            if (e == null) return b === "!=";

            switch (b) {
              case "=":
                return f === c;

              case "!=":
                return f !== c;

              case "^=":
                return c && f.indexOf(c) === 0;

              case "*=":
                return c && f.indexOf(c) > -1;

              case "$=":
                return c && f.substr(f.length - c.length) === c;

              case "~=":
                return (" " + f + " ").indexOf(c) > -1;

              case "|=":
                return f === c || f.substr(0, c.length + 1) === c + "-";
            }
          } : function (b) {
            return $.attr(b, a) != null;
          };
        },
        CHILD: function CHILD(a, b, c, d) {
          if (a === "nth") {
            var e = s++;
            return function (a) {
              var b,
                  f,
                  g = 0,
                  h = a;
              if (c === 1 && d === 0) return !0;
              b = a.parentNode;

              if (b && (b[o] !== e || !a.sizset)) {
                for (h = b.firstChild; h; h = h.nextSibling) {
                  if (h.nodeType === 1) {
                    h.sizset = ++g;
                    if (h === a) break;
                  }
                }

                b[o] = e;
              }

              return f = a.sizset - d, c === 0 ? f === 0 : f % c === 0 && f / c >= 0;
            };
          }

          return function (b) {
            var c = b;

            switch (a) {
              case "only":
              case "first":
                while (c = c.previousSibling) {
                  if (c.nodeType === 1) return !1;
                }

                if (a === "first") return !0;
                c = b;

              case "last":
                while (c = c.nextSibling) {
                  if (c.nodeType === 1) return !1;
                }

                return !0;
            }
          };
        },
        PSEUDO: function PSEUDO(a, b, c, d) {
          var e,
              g = f.pseudos[a] || f.pseudos[a.toLowerCase()];
          return g || $.error("unsupported pseudo: " + a), g[o] ? g(b, c, d) : g.length > 1 ? (e = [a, a, "", b], function (a) {
            return g(a, 0, e);
          }) : g;
        }
      },
      pseudos: {
        not: v(function (a, b, c) {
          var d = j(a.replace(H, "$1"), b, c);
          return function (a) {
            return !d(a);
          };
        }),
        enabled: function enabled(a) {
          return a.disabled === !1;
        },
        disabled: function disabled(a) {
          return a.disabled === !0;
        },
        checked: function checked(a) {
          var b = a.nodeName.toLowerCase();
          return b === "input" && !!a.checked || b === "option" && !!a.selected;
        },
        selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        },
        parent: function parent(a) {
          return !f.pseudos.empty(a);
        },
        empty: function empty(a) {
          var b;
          a = a.firstChild;

          while (a) {
            if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4) return !1;
            a = a.nextSibling;
          }

          return !0;
        },
        contains: v(function (a) {
          return function (b) {
            return (b.textContent || b.innerText || g(b)).indexOf(a) > -1;
          };
        }),
        has: v(function (a) {
          return function (b) {
            return $(a, b).length > 0;
          };
        }),
        header: function header(a) {
          return P.test(a.nodeName);
        },
        text: function text(a) {
          var b, c;
          return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null || c.toLowerCase() === b);
        },
        radio: _("radio"),
        checkbox: _("checkbox"),
        file: _("file"),
        password: _("password"),
        image: _("image"),
        submit: ba("submit"),
        reset: ba("reset"),
        button: function button(a) {
          var b = a.nodeName.toLowerCase();
          return b === "input" && a.type === "button" || b === "button";
        },
        input: function input(a) {
          return Q.test(a.nodeName);
        },
        focus: function focus(a) {
          var b = a.ownerDocument;
          return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && (!!a.type || !!a.href);
        },
        active: function active(a) {
          return a === a.ownerDocument.activeElement;
        }
      },
      setFilters: {
        first: function first(a, b, c) {
          return c ? a.slice(1) : [a[0]];
        },
        last: function last(a, b, c) {
          var d = a.pop();
          return c ? a : [d];
        },
        even: function even(a, b, c) {
          var d = [],
              e = c ? 1 : 0,
              f = a.length;

          for (; e < f; e = e + 2) {
            d.push(a[e]);
          }

          return d;
        },
        odd: function odd(a, b, c) {
          var d = [],
              e = c ? 0 : 1,
              f = a.length;

          for (; e < f; e = e + 2) {
            d.push(a[e]);
          }

          return d;
        },
        lt: function lt(a, b, c) {
          return c ? a.slice(+b) : a.slice(0, +b);
        },
        gt: function gt(a, b, c) {
          return c ? a.slice(0, +b + 1) : a.slice(+b + 1);
        },
        eq: function eq(a, b, c) {
          var d = a.splice(+b, 1);
          return c ? a : d;
        }
      }
    }, k = r.compareDocumentPosition ? function (a, b) {
      return a === b ? (l = !0, 0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1;
    } : function (a, b) {
      if (a === b) return l = !0, 0;
      if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
      var c,
          d,
          e = [],
          f = [],
          g = a.parentNode,
          h = b.parentNode,
          i = g;
      if (g === h) return bb(a, b);
      if (!g) return -1;
      if (!h) return 1;

      while (i) {
        e.unshift(i), i = i.parentNode;
      }

      i = h;

      while (i) {
        f.unshift(i), i = i.parentNode;
      }

      c = e.length, d = f.length;

      for (var j = 0; j < c && j < d; j++) {
        if (e[j] !== f[j]) return bb(e[j], f[j]);
      }

      return j === c ? bb(a, f[j], -1) : bb(e[j], b, 1);
    }, [0, 0].sort(k), m = !l, $.uniqueSort = function (a) {
      var b,
          c = 1;
      l = m, a.sort(k);
      if (l) for (; b = a[c]; c++) {
        b === a[c - 1] && a.splice(c--, 1);
      }
      return a;
    }, $.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, j = $.compile = function (a, b, c) {
      var d,
          e,
          f,
          g = z[o][a];
      if (g && g.context === b) return g;
      d = bc(a, b, c);

      for (e = 0, f = d.length; e < f; e++) {
        d[e] = bf(d[e], b, c);
      }

      return g = z(a, bg(d)), g.context = b, g.runs = g.dirruns = 0, g;
    }, q.querySelectorAll && function () {
      var a,
          b = bk,
          c = /'|\\/g,
          d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
          e = [],
          f = [":active"],
          g = r.matchesSelector || r.mozMatchesSelector || r.webkitMatchesSelector || r.oMatchesSelector || r.msMatchesSelector;
      T(function (a) {
        a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || e.push("\\[" + A + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || e.push(":checked");
      }), T(function (a) {
        a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + A + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled");
      }), e = e.length && new RegExp(e.join("|")), bk = function bk(a, d, f, g, h) {
        if (!g && !h && (!e || !e.test(a))) if (d.nodeType === 9) try {
          return u.apply(f, t.call(d.querySelectorAll(a), 0)), f;
        } catch (i) {} else if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
          var j,
              k,
              l,
              m = d.getAttribute("id"),
              n = m || o,
              p = N.test(a) && d.parentNode || d;
          m ? n = n.replace(c, "\\$&") : d.setAttribute("id", n), j = bc(a, d, h), n = "[id='" + n + "']";

          for (k = 0, l = j.length; k < l; k++) {
            j[k] = n + j[k].selector;
          }

          try {
            return u.apply(f, t.call(p.querySelectorAll(j.join(",")), 0)), f;
          } catch (i) {} finally {
            m || d.removeAttribute("id");
          }
        }
        return b(a, d, f, g, h);
      }, g && (T(function (b) {
        a = g.call(b, "div");

        try {
          g.call(b, "[test!='']:sizzle"), f.push(S.PSEUDO.source, S.POS.source, "!=");
        } catch (c) {}
      }), f = new RegExp(f.join("|")), $.matchesSelector = function (b, c) {
        c = c.replace(d, "='$1']");
        if (!h(b) && !f.test(c) && (!e || !e.test(c))) try {
          var i = g.call(b, c);
          if (i || a || b.document && b.document.nodeType !== 11) return i;
        } catch (j) {}
        return $(c, null, null, [b]).length > 0;
      });
    }(), f.setFilters.nth = f.setFilters.eq, f.filters = f.pseudos, $.attr = p.attr, p.find = $, p.expr = $.selectors, p.expr[":"] = p.expr.pseudos, p.unique = $.uniqueSort, p.text = $.getText, p.isXMLDoc = $.isXML, p.contains = $.contains;
  }(a);
  var bc = /Until$/,
      bd = /^(?:parents|prev(?:Until|All))/,
      be = /^.[^:#\[\.,]*$/,
      bf = p.expr.match.needsContext,
      bg = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  p.fn.extend({
    find: function find(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = this;
      if (typeof a != "string") return p(a).filter(function () {
        for (b = 0, c = h.length; b < c; b++) {
          if (p.contains(h[b], this)) return !0;
        }
      });
      g = this.pushStack("", "find", a);

      for (b = 0, c = this.length; b < c; b++) {
        d = g.length, p.find(a, this[b], g);
        if (b > 0) for (e = d; e < g.length; e++) {
          for (f = 0; f < d; f++) {
            if (g[f] === g[e]) {
              g.splice(e--, 1);
              break;
            }
          }
        }
      }

      return g;
    },
    has: function has(a) {
      var b,
          c = p(a, this),
          d = c.length;
      return this.filter(function () {
        for (b = 0; b < d; b++) {
          if (p.contains(this, c[b])) return !0;
        }
      });
    },
    not: function not(a) {
      return this.pushStack(bj(this, a, !1), "not", a);
    },
    filter: function filter(a) {
      return this.pushStack(bj(this, a, !0), "filter", a);
    },
    is: function is(a) {
      return !!a && (typeof a == "string" ? bf.test(a) ? p(a, this.context).index(this[0]) >= 0 : p.filter(a, this).length > 0 : this.filter(a).length > 0);
    },
    closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;

      for (; d < e; d++) {
        c = this[d];

        while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
          if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
            f.push(c);
            break;
          }

          c = c.parentNode;
        }
      }

      return f = f.length > 1 ? p.unique(f) : f, this.pushStack(f, "closest", a);
    },
    index: function index(a) {
      return a ? typeof a == "string" ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
    },
    add: function add(a, b) {
      var c = typeof a == "string" ? p(a, b) : p.makeArray(a && a.nodeType ? [a] : a),
          d = p.merge(this.get(), c);
      return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d));
    },
    addBack: function addBack(a) {
      return this.add(a == null ? this.prevObject : this.prevObject.filter(a));
    }
  }), p.fn.andSelf = p.fn.addBack, p.each({
    parent: function parent(a) {
      var b = a.parentNode;
      return b && b.nodeType !== 11 ? b : null;
    },
    parents: function parents(a) {
      return p.dir(a, "parentNode");
    },
    parentsUntil: function parentsUntil(a, b, c) {
      return p.dir(a, "parentNode", c);
    },
    next: function next(a) {
      return bi(a, "nextSibling");
    },
    prev: function prev(a) {
      return bi(a, "previousSibling");
    },
    nextAll: function nextAll(a) {
      return p.dir(a, "nextSibling");
    },
    prevAll: function prevAll(a) {
      return p.dir(a, "previousSibling");
    },
    nextUntil: function nextUntil(a, b, c) {
      return p.dir(a, "nextSibling", c);
    },
    prevUntil: function prevUntil(a, b, c) {
      return p.dir(a, "previousSibling", c);
    },
    siblings: function siblings(a) {
      return p.sibling((a.parentNode || {}).firstChild, a);
    },
    children: function children(a) {
      return p.sibling(a.firstChild);
    },
    contents: function contents(a) {
      return p.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : p.merge([], a.childNodes);
    }
  }, function (a, b) {
    p.fn[a] = function (c, d) {
      var e = p.map(this, b, c);
      return bc.test(a) || (d = c), d && typeof d == "string" && (e = p.filter(d, e)), e = this.length > 1 && !bg[a] ? p.unique(e) : e, this.length > 1 && bd.test(a) && (e = e.reverse()), this.pushStack(e, a, k.call(arguments).join(","));
    };
  }), p.extend({
    filter: function filter(a, b, c) {
      return c && (a = ":not(" + a + ")"), b.length === 1 ? p.find.matchesSelector(b[0], a) ? [b[0]] : [] : p.find.matches(a, b);
    },
    dir: function dir(a, c, d) {
      var e = [],
          f = a[c];

      while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !p(f).is(d))) {
        f.nodeType === 1 && e.push(f), f = f[c];
      }

      return e;
    },
    sibling: function sibling(a, b) {
      var c = [];

      for (; a; a = a.nextSibling) {
        a.nodeType === 1 && a !== b && c.push(a);
      }

      return c;
    }
  });
  var bl = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      bm = / jQuery\d+="(?:null|\d+)"/g,
      bn = /^\s+/,
      bo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      bp = /<([\w:]+)/,
      bq = /<tbody/i,
      br = /<|&#?\w+;/,
      bs = /<(?:script|style|link)/i,
      bt = /<(?:script|object|embed|option|style)/i,
      bu = new RegExp("<(?:" + bl + ")[\\s/>]", "i"),
      bv = /^(?:checkbox|radio)$/,
      bw = /checked\s*(?:[^=]|=\s*.checked.)/i,
      bx = /\/(java|ecma)script/i,
      by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
      bz = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    area: [1, "<map>", "</map>"],
    _default: [0, "", ""]
  },
      bA = bk(e),
      bB = bA.appendChild(e.createElement("div"));
  bz.optgroup = bz.option, bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead, bz.th = bz.td, p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]), p.fn.extend({
    text: function text(a) {
      return p.access(this, function (a) {
        return a === b ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(a));
      }, null, a, arguments.length);
    },
    wrapAll: function wrapAll(a) {
      if (p.isFunction(a)) return this.each(function (b) {
        p(this).wrapAll(a.call(this, b));
      });

      if (this[0]) {
        var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;

          while (a.firstChild && a.firstChild.nodeType === 1) {
            a = a.firstChild;
          }

          return a;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(a) {
      return p.isFunction(a) ? this.each(function (b) {
        p(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = p(this),
            c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function wrap(a) {
      var b = p.isFunction(a);
      return this.each(function (c) {
        p(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
      }).end();
    },
    append: function append() {
      return this.domManip(arguments, !0, function (a) {
        (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a);
      });
    },
    prepend: function prepend() {
      return this.domManip(arguments, !0, function (a) {
        (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild);
      });
    },
    before: function before() {
      if (!bh(this[0])) return this.domManip(arguments, !1, function (a) {
        this.parentNode.insertBefore(a, this);
      });

      if (arguments.length) {
        var a = p.clean(arguments);
        return this.pushStack(p.merge(a, this), "before", this.selector);
      }
    },
    after: function after() {
      if (!bh(this[0])) return this.domManip(arguments, !1, function (a) {
        this.parentNode.insertBefore(a, this.nextSibling);
      });

      if (arguments.length) {
        var a = p.clean(arguments);
        return this.pushStack(p.merge(this, a), "after", this.selector);
      }
    },
    remove: function remove(a, b) {
      var c,
          d = 0;

      for (; (c = this[d]) != null; d++) {
        if (!a || p.filter(a, [c]).length) !b && c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])), c.parentNode && c.parentNode.removeChild(c);
      }

      return this;
    },
    empty: function empty() {
      var a,
          b = 0;

      for (; (a = this[b]) != null; b++) {
        a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));

        while (a.firstChild) {
          a.removeChild(a.firstChild);
        }
      }

      return this;
    },
    clone: function clone(a, b) {
      return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function () {
        return p.clone(this, a, b);
      });
    },
    html: function html(a) {
      return p.access(this, function (a) {
        var c = this[0] || {},
            d = 0,
            e = this.length;
        if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b;

        if (typeof a == "string" && !bs.test(a) && (p.support.htmlSerialize || !bu.test(a)) && (p.support.leadingWhitespace || !bn.test(a)) && !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = a.replace(bo, "<$1></$2>");

          try {
            for (; d < e; d++) {
              c = this[d] || {}, c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
            }

            c = 0;
          } catch (f) {}
        }

        c && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function replaceWith(a) {
      return bh(this[0]) ? this.length ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a) : this : p.isFunction(a) ? this.each(function (b) {
        var c = p(this),
            d = c.html();
        c.replaceWith(a.call(this, b, d));
      }) : (typeof a != "string" && (a = p(a).detach()), this.each(function () {
        var b = this.nextSibling,
            c = this.parentNode;
        p(this).remove(), b ? p(b).before(a) : p(c).append(a);
      }));
    },
    detach: function detach(a) {
      return this.remove(a, !0);
    },
    domManip: function domManip(a, c, d) {
      a = [].concat.apply([], a);
      var e,
          f,
          g,
          h,
          i = 0,
          j = a[0],
          k = [],
          l = this.length;
      if (!p.support.checkClone && l > 1 && typeof j == "string" && bw.test(j)) return this.each(function () {
        p(this).domManip(a, c, d);
      });
      if (p.isFunction(j)) return this.each(function (e) {
        var f = p(this);
        a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d);
      });

      if (this[0]) {
        e = p.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, g.childNodes.length === 1 && (g = f);

        if (f) {
          c = c && p.nodeName(f, "tr");

          for (h = e.cacheable || l - 1; i < l; i++) {
            d.call(c && p.nodeName(this[i], "table") ? bC(this[i], "tbody") : this[i], i === h ? g : p.clone(g, !0, !0));
          }
        }

        g = f = null, k.length && p.each(k, function (a, b) {
          b.src ? p.ajax ? p.ajax({
            url: b.src,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
          }) : p.error("no ajax") : p.globalEval((b.text || b.textContent || b.innerHTML || "").replace(by, "")), b.parentNode && b.parentNode.removeChild(b);
        });
      }

      return this;
    }
  }), p.buildFragment = function (a, c, d) {
    var f,
        g,
        h,
        i = a[0];
    return c = c || e, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, a.length === 1 && typeof i == "string" && i.length < 512 && c === e && i.charAt(0) === "<" && !bt.test(i) && (p.support.checkClone || !bw.test(i)) && (p.support.html5Clone || !bu.test(i)) && (g = !0, f = p.fragments[i], h = f !== b), f || (f = c.createDocumentFragment(), p.clean(a, c, f, d), g && (p.fragments[i] = h && f)), {
      fragment: f,
      cacheable: g
    };
  }, p.fragments = {}, p.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    p.fn[a] = function (c) {
      var d,
          e = 0,
          f = [],
          g = p(c),
          h = g.length,
          i = this.length === 1 && this[0].parentNode;
      if ((i == null || i && i.nodeType === 11 && i.childNodes.length === 1) && h === 1) return g[b](this[0]), this;

      for (; e < h; e++) {
        d = (e > 0 ? this.clone(!0) : this).get(), p(g[e])[b](d), f = f.concat(d);
      }

      return this.pushStack(f, a, g.selector);
    };
  }), p.extend({
    clone: function clone(a, b, c) {
      var d, e, f, g;
      p.support.html5Clone || p.isXMLDoc(a) || !bu.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bB.innerHTML = a.outerHTML, bB.removeChild(g = bB.firstChild));

      if ((!p.support.noCloneEvent || !p.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !p.isXMLDoc(a)) {
        bE(a, g), d = bF(a), e = bF(g);

        for (f = 0; d[f]; ++f) {
          e[f] && bE(d[f], e[f]);
        }
      }

      if (b) {
        bD(a, g);

        if (c) {
          d = bF(a), e = bF(g);

          for (f = 0; d[f]; ++f) {
            bD(d[f], e[f]);
          }
        }
      }

      return d = e = null, g;
    },
    clean: function clean(a, b, c, d) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          q,
          r,
          s = b === e && bA,
          t = [];
      if (!b || typeof b.createDocumentFragment == "undefined") b = e;

      for (f = 0; (h = a[f]) != null; f++) {
        typeof h == "number" && (h += "");
        if (!h) continue;
        if (typeof h == "string") if (!br.test(h)) h = b.createTextNode(h);else {
          s = s || bk(b), l = b.createElement("div"), s.appendChild(l), h = h.replace(bo, "<$1></$2>"), i = (bp.exec(h) || ["", ""])[1].toLowerCase(), j = bz[i] || bz._default, k = j[0], l.innerHTML = j[1] + h + j[2];

          while (k--) {
            l = l.lastChild;
          }

          if (!p.support.tbody) {
            m = bq.test(h), n = i === "table" && !m ? l.firstChild && l.firstChild.childNodes : j[1] === "<table>" && !m ? l.childNodes : [];

            for (g = n.length - 1; g >= 0; --g) {
              p.nodeName(n[g], "tbody") && !n[g].childNodes.length && n[g].parentNode.removeChild(n[g]);
            }
          }

          !p.support.leadingWhitespace && bn.test(h) && l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild), h = l.childNodes, l.parentNode.removeChild(l);
        }
        h.nodeType ? t.push(h) : p.merge(t, h);
      }

      l && (h = l = s = null);
      if (!p.support.appendChecked) for (f = 0; (h = t[f]) != null; f++) {
        p.nodeName(h, "input") ? bG(h) : typeof h.getElementsByTagName != "undefined" && p.grep(h.getElementsByTagName("input"), bG);
      }

      if (c) {
        q = function q(a) {
          if (!a.type || bx.test(a.type)) return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a);
        };

        for (f = 0; (h = t[f]) != null; f++) {
          if (!p.nodeName(h, "script") || !q(h)) c.appendChild(h), typeof h.getElementsByTagName != "undefined" && (r = p.grep(p.merge([], h.getElementsByTagName("script")), q), t.splice.apply(t, [f + 1, 0].concat(r)), f += r.length);
        }
      }

      return t;
    },
    cleanData: function cleanData(a, b) {
      var c,
          d,
          e,
          f,
          g = 0,
          h = p.expando,
          i = p.cache,
          j = p.support.deleteExpando,
          k = p.event.special;

      for (; (e = a[g]) != null; g++) {
        if (b || p.acceptData(e)) {
          d = e[h], c = d && i[d];

          if (c) {
            if (c.events) for (f in c.events) {
              k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle);
            }
            i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, p.deletedIds.push(d));
          }
        }
      }
    }
  }), function () {
    var a, b;
    p.uaMatch = function (a) {
      a = a.toLowerCase();
      var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
      return {
        browser: b[1] || "",
        version: b[2] || "0"
      };
    }, a = p.uaMatch(g.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), p.browser = b, p.sub = function () {
      function a(b, c) {
        return new a.fn.init(b, c);
      }

      p.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function c(c, d) {
        return d && d instanceof p && !(d instanceof a) && (d = a(d)), p.fn.init.call(this, c, d, b);
      }, a.fn.init.prototype = a.fn;
      var b = a(e);
      return a;
    };
  }();
  var bH,
      bI,
      bJ,
      bK = /alpha\([^)]*\)/i,
      bL = /opacity=([^)]*)/,
      bM = /^(top|right|bottom|left)$/,
      bN = /^(none|table(?!-c[ea]).+)/,
      bO = /^margin/,
      bP = new RegExp("^(" + q + ")(.*)$", "i"),
      bQ = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
      bR = new RegExp("^([-+])=(" + q + ")", "i"),
      bS = {},
      bT = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      bU = {
    letterSpacing: 0,
    fontWeight: 400
  },
      bV = ["Top", "Right", "Bottom", "Left"],
      bW = ["Webkit", "O", "Moz", "ms"],
      bX = p.fn.toggle;
  p.fn.extend({
    css: function css(a, c) {
      return p.access(this, function (a, c, d) {
        return d !== b ? p.style(a, c, d) : p.css(a, c);
      }, a, c, arguments.length > 1);
    },
    show: function show() {
      return b$(this, !0);
    },
    hide: function hide() {
      return b$(this);
    },
    toggle: function toggle(a, b) {
      var c = typeof a == "boolean";
      return p.isFunction(a) && p.isFunction(b) ? bX.apply(this, arguments) : this.each(function () {
        (c ? a : bZ(this)) ? p(this).show() : p(this).hide();
      });
    }
  }), p.extend({
    cssHooks: {
      opacity: {
        get: function get(a, b) {
          if (b) {
            var c = bH(a, "opacity");
            return c === "" ? "1" : c;
          }
        }
      }
    },
    cssNumber: {
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": p.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function style(a, c, d, e) {
      if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
      var f,
          g,
          h,
          i = p.camelCase(c),
          j = a.style;
      c = p.cssProps[i] || (p.cssProps[i] = bY(j, i)), h = p.cssHooks[c] || p.cssHooks[i];
      if (d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
      g = _typeof(d), g === "string" && (f = bR.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c)), g = "number");
      if (d == null || g === "number" && isNaN(d)) return;
      g === "number" && !p.cssNumber[i] && (d += "px");
      if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b) try {
        j[c] = d;
      } catch (k) {}
    },
    css: function css(a, c, d, e) {
      var f,
          g,
          h,
          i = p.camelCase(c);
      return c = p.cssProps[i] || (p.cssProps[i] = bY(a.style, i)), h = p.cssHooks[c] || p.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = bH(a, c)), f === "normal" && c in bU && (f = bU[c]), d || e !== b ? (g = parseFloat(f), d || p.isNumeric(g) ? g || 0 : f) : f;
    },
    swap: function swap(a, b, c) {
      var d,
          e,
          f = {};

      for (e in b) {
        f[e] = a.style[e], a.style[e] = b[e];
      }

      d = c.call(a);

      for (e in b) {
        a.style[e] = f[e];
      }

      return d;
    }
  }), a.getComputedStyle ? bH = function bH(b, c) {
    var d,
        e,
        f,
        g,
        h = a.getComputedStyle(b, null),
        i = b.style;
    return h && (d = h[c], d === "" && !p.contains(b.ownerDocument, b) && (d = p.style(b, c)), bQ.test(d) && bO.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d;
  } : e.documentElement.currentStyle && (bH = function bH(a, b) {
    var c,
        d,
        e = a.currentStyle && a.currentStyle[b],
        f = a.style;
    return e == null && f && f[b] && (e = f[b]), bQ.test(e) && !bM.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), e === "" ? "auto" : e;
  }), p.each(["height", "width"], function (a, b) {
    p.cssHooks[b] = {
      get: function get(a, c, d) {
        if (c) return a.offsetWidth === 0 && bN.test(bH(a, "display")) ? p.swap(a, bT, function () {
          return cb(a, b, d);
        }) : cb(a, b, d);
      },
      set: function set(a, c, d) {
        return b_(a, c, d ? ca(a, b, d, p.support.boxSizing && p.css(a, "boxSizing") === "border-box") : 0);
      }
    };
  }), p.support.opacity || (p.cssHooks.opacity = {
    get: function get(a, b) {
      return bL.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
    },
    set: function set(a, b) {
      var c = a.style,
          d = a.currentStyle,
          e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
          f = d && d.filter || c.filter || "";
      c.zoom = 1;

      if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) {
        c.removeAttribute("filter");
        if (d && !d.filter) return;
      }

      c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e;
    }
  }), p(function () {
    p.support.reliableMarginRight || (p.cssHooks.marginRight = {
      get: function get(a, b) {
        return p.swap(a, {
          display: "inline-block"
        }, function () {
          if (b) return bH(a, "marginRight");
        });
      }
    }), !p.support.pixelPosition && p.fn.position && p.each(["top", "left"], function (a, b) {
      p.cssHooks[b] = {
        get: function get(a, c) {
          if (c) {
            var d = bH(a, b);
            return bQ.test(d) ? p(a).position()[b] + "px" : d;
          }
        }
      };
    });
  }), p.expr && p.expr.filters && (p.expr.filters.hidden = function (a) {
    return a.offsetWidth === 0 && a.offsetHeight === 0 || !p.support.reliableHiddenOffsets && (a.style && a.style.display || bH(a, "display")) === "none";
  }, p.expr.filters.visible = function (a) {
    return !p.expr.filters.hidden(a);
  }), p.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    p.cssHooks[a + b] = {
      expand: function expand(c) {
        var d,
            e = typeof c == "string" ? c.split(" ") : [c],
            f = {};

        for (d = 0; d < 4; d++) {
          f[a + bV[d] + b] = e[d] || e[d - 2] || e[0];
        }

        return f;
      }
    }, bO.test(a) || (p.cssHooks[a + b].set = b_);
  });
  var cd = /%20/g,
      ce = /\[\]$/,
      cf = /\r?\n/g,
      cg = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
      ch = /^(?:select|textarea)/i;
  p.fn.extend({
    serialize: function serialize() {
      return p.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        return this.elements ? p.makeArray(this.elements) : this;
      }).filter(function () {
        return this.name && !this.disabled && (this.checked || ch.test(this.nodeName) || cg.test(this.type));
      }).map(function (a, b) {
        var c = p(this).val();
        return c == null ? null : p.isArray(c) ? p.map(c, function (a, c) {
          return {
            name: b.name,
            value: a.replace(cf, "\r\n")
          };
        }) : {
          name: b.name,
          value: c.replace(cf, "\r\n")
        };
      }).get();
    }
  }), p.param = function (a, c) {
    var d,
        e = [],
        f = function f(a, b) {
      b = p.isFunction(b) ? b() : b == null ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };

    c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
    if (p.isArray(a) || a.jquery && !p.isPlainObject(a)) p.each(a, function () {
      f(this.name, this.value);
    });else for (d in a) {
      ci(d, a[d], c, f);
    }
    return e.join("&").replace(cd, "+");
  };
  var cj,
      ck,
      cl = /#.*$/,
      cm = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
      cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
      co = /^(?:GET|HEAD)$/,
      cp = /^\/\//,
      cq = /\?/,
      cr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      cs = /([?&])_=[^&]*/,
      ct = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      cu = p.fn.load,
      cv = {},
      cw = {},
      cx = ["*/"] + ["*"];

  try {
    cj = f.href;
  } catch (cy) {
    cj = e.createElement("a"), cj.href = "", cj = cj.href;
  }

  ck = ct.exec(cj.toLowerCase()) || [], p.fn.load = function (a, c, d) {
    if (typeof a != "string" && cu) return cu.apply(this, arguments);
    if (!this.length) return this;
    var e,
        f,
        g,
        h = this,
        i = a.indexOf(" ");
    return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), p.isFunction(c) ? (d = c, c = b) : c && _typeof(c) == "object" && (f = "POST"), p.ajax({
      url: a,
      type: f,
      dataType: "html",
      data: c,
      complete: function complete(a, b) {
        d && h.each(d, g || [a.responseText, b, a]);
      }
    }).done(function (a) {
      g = arguments, h.html(e ? p("<div>").append(a.replace(cr, "")).find(e) : a);
    }), this;
  }, p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
    p.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), p.each(["get", "post"], function (a, c) {
    p[c] = function (a, d, e, f) {
      return p.isFunction(d) && (f = f || e, e = d, d = b), p.ajax({
        type: c,
        url: a,
        data: d,
        success: e,
        dataType: f
      });
    };
  }), p.extend({
    getScript: function getScript(a, c) {
      return p.get(a, b, c, "script");
    },
    getJSON: function getJSON(a, b, c) {
      return p.get(a, b, c, "json");
    },
    ajaxSetup: function ajaxSetup(a, b) {
      return b ? cB(a, p.ajaxSettings) : (b = a, a = p.ajaxSettings), cB(a, b), a;
    },
    ajaxSettings: {
      url: cj,
      isLocal: cn.test(ck[1]),
      global: !0,
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      processData: !0,
      async: !0,
      accepts: {
        xml: "application/xml, text/xml",
        html: "text/html",
        text: "text/plain",
        json: "application/json, text/javascript",
        "*": cx
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText"
      },
      converters: {
        "* text": a.String,
        "text html": !0,
        "text json": p.parseJSON,
        "text xml": p.parseXML
      },
      flatOptions: {
        context: !0,
        url: !0
      }
    },
    ajaxPrefilter: cz(cv),
    ajaxTransport: cz(cw),
    ajax: function ajax(a, c) {
      function y(a, c, f, i) {
        var k,
            s,
            t,
            u,
            w,
            y = c;
        if (v === 2) return;
        v = 2, h && clearTimeout(h), g = b, e = i || "", x.readyState = a > 0 ? 4 : 0, f && (u = cC(l, x, f));
        if (a >= 200 && a < 300 || a === 304) l.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (p.lastModified[d] = w), w = x.getResponseHeader("Etag"), w && (p.etag[d] = w)), a === 304 ? (y = "notmodified", k = !0) : (k = cD(l, u), y = k.state, s = k.data, t = k.error, k = !t);else {
          t = y;
          if (!y || a) y = "error", a < 0 && (a = 0);
        }
        x.status = a, x.statusText = "" + (c || y), k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]), x.statusCode(r), r = b, j && n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]), q.fireWith(m, [x, y]), j && (n.trigger("ajaxComplete", [x, l]), --p.active || p.event.trigger("ajaxStop"));
      }

      _typeof(a) == "object" && (c = a, a = b), c = c || {};
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = p.ajaxSetup({}, c),
          m = l.context || l,
          n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event,
          o = p.Deferred(),
          q = p.Callbacks("once memory"),
          r = l.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = "canceled",
          x = {
        readyState: 0,
        setRequestHeader: function setRequestHeader(a, b) {
          if (!v) {
            var c = a.toLowerCase();
            a = u[c] = u[c] || a, t[a] = b;
          }

          return this;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return v === 2 ? e : null;
        },
        getResponseHeader: function getResponseHeader(a) {
          var c;

          if (v === 2) {
            if (!f) {
              f = {};

              while (c = cm.exec(e)) {
                f[c[1].toLowerCase()] = c[2];
              }
            }

            c = f[a.toLowerCase()];
          }

          return c === b ? null : c;
        },
        overrideMimeType: function overrideMimeType(a) {
          return v || (l.mimeType = a), this;
        },
        abort: function abort(a) {
          return a = a || w, g && g.abort(a), y(0, a), this;
        }
      };
      o.promise(x), x.success = x.done, x.error = x.fail, x.complete = q.add, x.statusCode = function (a) {
        if (a) {
          var b;
          if (v < 2) for (b in a) {
            r[b] = [r[b], a[b]];
          } else b = a[x.status], x.always(b);
        }

        return this;
      }, l.url = ((a || l.url) + "").replace(cl, "").replace(cp, ck[1] + "//"), l.dataTypes = p.trim(l.dataType || "*").toLowerCase().split(s), l.crossDomain == null && (i = ct.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] == ck[1] && i[2] == ck[2] && (i[3] || (i[1] === "http:" ? 80 : 443)) == (ck[3] || (ck[1] === "http:" ? 80 : 443)))), l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)), cA(cv, l, c, x);
      if (v === 2) return x;
      j = l.global, l.type = l.type.toUpperCase(), l.hasContent = !co.test(l.type), j && p.active++ === 0 && p.event.trigger("ajaxStart");

      if (!l.hasContent) {
        l.data && (l.url += (cq.test(l.url) ? "&" : "?") + l.data, delete l.data), d = l.url;

        if (l.cache === !1) {
          var z = p.now(),
              A = l.url.replace(cs, "$1_=" + z);
          l.url = A + (A === l.url ? (cq.test(l.url) ? "&" : "?") + "_=" + z : "");
        }
      }

      (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType), l.ifModified && (d = d || l.url, p.lastModified[d] && x.setRequestHeader("If-Modified-Since", p.lastModified[d]), p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])), x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + cx + "; q=0.01" : "") : l.accepts["*"]);

      for (k in l.headers) {
        x.setRequestHeader(k, l.headers[k]);
      }

      if (!l.beforeSend || l.beforeSend.call(m, x, l) !== !1 && v !== 2) {
        w = "abort";

        for (k in {
          success: 1,
          error: 1,
          complete: 1
        }) {
          x[k](l[k]);
        }

        g = cA(cw, l, c, x);
        if (!g) y(-1, "No Transport");else {
          x.readyState = 1, j && n.trigger("ajaxSend", [x, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
            x.abort("timeout");
          }, l.timeout));

          try {
            v = 1, g.send(t, y);
          } catch (B) {
            if (v < 2) y(-1, B);else throw B;
          }
        }
        return x;
      }

      return x.abort();
    },
    active: 0,
    lastModified: {},
    etag: {}
  });
  var cE = [],
      cF = /\?/,
      cG = /(=)\?(?=&|$)|\?\?/,
      cH = p.now();
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var a = cE.pop() || p.expando + "_" + cH++;
      return this[a] = !0, a;
    }
  }), p.ajaxPrefilter("json jsonp", function (c, d, e) {
    var f,
        g,
        h,
        i = c.data,
        j = c.url,
        k = c.jsonp !== !1,
        l = k && cG.test(j),
        m = k && !l && typeof i == "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && cG.test(i);
    if (c.dataTypes[0] === "jsonp" || l || m) return f = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(cG, "$1" + f) : m ? c.data = i.replace(cG, "$1" + f) : k && (c.url += (cF.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
      return h || p.error(f + " was not called"), h[0];
    }, c.dataTypes[0] = "json", a[f] = function () {
      h = arguments;
    }, e.always(function () {
      a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, cE.push(f)), h && p.isFunction(g) && g(h[0]), h = g = b;
    }), "script";
  }), p.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /javascript|ecmascript/
    },
    converters: {
      "text script": function textScript(a) {
        return p.globalEval(a), a;
      }
    }
  }), p.ajaxPrefilter("script", function (a) {
    a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
  }), p.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var c,
          d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
      return {
        send: function send(f, g) {
          c = e.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function (a, e) {
            if (e || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || g(200, "success");
          }, d.insertBefore(c, d.firstChild);
        },
        abort: function abort() {
          c && c.onload(0, 1);
        }
      };
    }
  });
  var cI,
      cJ = a.ActiveXObject ? function () {
    for (var a in cI) {
      cI[a](0, 1);
    }
  } : !1,
      cK = 0;
  p.ajaxSettings.xhr = a.ActiveXObject ? function () {
    return !this.isLocal && cL() || cM();
  } : cL, function (a) {
    p.extend(p.support, {
      ajax: !!a,
      cors: !!a && "withCredentials" in a
    });
  }(p.ajaxSettings.xhr()), p.support.ajax && p.ajaxTransport(function (c) {
    if (!c.crossDomain || p.support.cors) {
      var _d;

      return {
        send: function send(e, f) {
          var g,
              h,
              i = c.xhr();
          c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
          if (c.xhrFields) for (h in c.xhrFields) {
            i[h] = c.xhrFields[h];
          }
          c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");

          try {
            for (h in e) {
              i.setRequestHeader(h, e[h]);
            }
          } catch (j) {}

          i.send(c.hasContent && c.data || null), _d = function d(a, e) {
            var h, j, k, l, m;

            try {
              if (_d && (e || i.readyState === 4)) {
                _d = b, g && (i.onreadystatechange = p.noop, cJ && delete cI[g]);
                if (e) i.readyState !== 4 && i.abort();else {
                  h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);

                  try {
                    l.text = i.responseText;
                  } catch (a) {}

                  try {
                    j = i.statusText;
                  } catch (n) {
                    j = "";
                  }

                  !h && c.isLocal && !c.crossDomain ? h = l.text ? 200 : 404 : h === 1223 && (h = 204);
                }
              }
            } catch (o) {
              e || f(-1, o);
            }

            l && f(h, j, l, k);
          }, c.async ? i.readyState === 4 ? setTimeout(_d, 0) : (g = ++cK, cJ && (cI || (cI = {}, p(a).unload(cJ)), cI[g] = _d), i.onreadystatechange = _d) : _d();
        },
        abort: function abort() {
          _d && _d(0, 1);
        }
      };
    }
  });
  var cN,
      cO,
      cP = /^(?:toggle|show|hide)$/,
      cQ = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$", "i"),
      cR = /queueHooks$/,
      cS = [cY],
      cT = {
    "*": [function (a, b) {
      var c,
          d,
          e,
          f = this.createTween(a, b),
          g = cQ.exec(b),
          h = f.cur(),
          i = +h || 0,
          j = 1;

      if (g) {
        c = +g[2], d = g[3] || (p.cssNumber[a] ? "" : "px");

        if (d !== "px" && i) {
          i = p.css(f.elem, a, !0) || c || 1;

          do {
            e = j = j || ".5", i = i / j, p.style(f.elem, a, i + d), j = f.cur() / h;
          } while (j !== 1 && j !== e);
        }

        f.unit = d, f.start = i, f.end = g[1] ? i + (g[1] + 1) * c : c;
      }

      return f;
    }]
  };
  p.Animation = p.extend(cW, {
    tweener: function tweener(a, b) {
      p.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
      var c,
          d = 0,
          e = a.length;

      for (; d < e; d++) {
        c = a[d], cT[c] = cT[c] || [], cT[c].unshift(b);
      }
    },
    prefilter: function prefilter(a, b) {
      b ? cS.unshift(a) : cS.push(a);
    }
  }), p.Tween = cZ, cZ.prototype = {
    constructor: cZ,
    init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (p.cssNumber[c] ? "" : "px");
    },
    cur: function cur() {
      var a = cZ.propHooks[this.prop];
      return a && a.get ? a.get(this) : cZ.propHooks._default.get(this);
    },
    run: function run(a) {
      var b,
          c = cZ.propHooks[this.prop];
      return this.options.duration ? this.pos = b = p.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : cZ.propHooks._default.set(this), this;
    }
  }, cZ.prototype.init.prototype = cZ.prototype, cZ.propHooks = {
    _default: {
      get: function get(a) {
        var b;
        return a.elem[a.prop] == null || !!a.elem.style && a.elem.style[a.prop] != null ? (b = p.css(a.elem, a.prop, !1, ""), !b || b === "auto" ? 0 : b) : a.elem[a.prop];
      },
      set: function set(a) {
        p.fx.step[a.prop] ? p.fx.step[a.prop](a) : a.elem.style && (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop]) ? p.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
      }
    }
  }, cZ.propHooks.scrollTop = cZ.propHooks.scrollLeft = {
    set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }
  }, p.each(["toggle", "show", "hide"], function (a, b) {
    var c = p.fn[b];

    p.fn[b] = function (d, e, f) {
      return d == null || typeof d == "boolean" || !a && p.isFunction(d) && p.isFunction(e) ? c.apply(this, arguments) : this.animate(c$(b, !0), d, e, f);
    };
  }), p.fn.extend({
    fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(bZ).css("opacity", 0).show().end().animate({
        opacity: b
      }, a, c, d);
    },
    animate: function animate(a, b, c, d) {
      var e = p.isEmptyObject(a),
          f = p.speed(b, c, d),
          g = function g() {
        var b = cW(this, p.extend({}, a), f);
        e && b.stop(!0);
      };

      return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function stop(a, c, d) {
      var e = function e(a) {
        var b = a.stop;
        delete a.stop, b(d);
      };

      return typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            c = a != null && a + "queueHooks",
            f = p.timers,
            g = p._data(this);

        if (c) g[c] && g[c].stop && e(g[c]);else for (c in g) {
          g[c] && g[c].stop && cR.test(c) && e(g[c]);
        }

        for (c = f.length; c--;) {
          f[c].elem === this && (a == null || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1));
        }

        (b || !d) && p.dequeue(this, a);
      });
    }
  }), p.each({
    slideDown: c$("show"),
    slideUp: c$("hide"),
    slideToggle: c$("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (a, b) {
    p.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), p.speed = function (a, b, c) {
    var d = a && _typeof(a) == "object" ? p.extend({}, a) : {
      complete: c || !c && b || p.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !p.isFunction(b) && b
    };
    d.duration = p.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in p.fx.speeds ? p.fx.speeds[d.duration] : p.fx.speeds._default;
    if (d.queue == null || d.queue === !0) d.queue = "fx";
    return d.old = d.complete, d.complete = function () {
      p.isFunction(d.old) && d.old.call(this), d.queue && p.dequeue(this, d.queue);
    }, d;
  }, p.easing = {
    linear: function linear(a) {
      return a;
    },
    swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }
  }, p.timers = [], p.fx = cZ.prototype.init, p.fx.tick = function () {
    var a,
        b = p.timers,
        c = 0;

    for (; c < b.length; c++) {
      a = b[c], !a() && b[c] === a && b.splice(c--, 1);
    }

    b.length || p.fx.stop();
  }, p.fx.timer = function (a) {
    a() && p.timers.push(a) && !cO && (cO = setInterval(p.fx.tick, p.fx.interval));
  }, p.fx.interval = 13, p.fx.stop = function () {
    clearInterval(cO), cO = null;
  }, p.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, p.fx.step = {}, p.expr && p.expr.filters && (p.expr.filters.animated = function (a) {
    return p.grep(p.timers, function (b) {
      return a === b.elem;
    }).length;
  });
  var c_ = /^(?:body|html)$/i;
  p.fn.offset = function (a) {
    if (arguments.length) return a === b ? this : this.each(function (b) {
      p.offset.setOffset(this, a, b);
    });
    var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = this[0],
        n = m && m.ownerDocument;
    if (!n) return;
    return (e = n.body) === m ? p.offset.bodyOffset(m) : (d = n.documentElement, p.contains(d, m) ? (c = m.getBoundingClientRect(), f = da(n), g = d.clientTop || e.clientTop || 0, h = d.clientLeft || e.clientLeft || 0, i = f.pageYOffset || d.scrollTop, j = f.pageXOffset || d.scrollLeft, k = c.top + i - g, l = c.left + j - h, {
      top: k,
      left: l
    }) : {
      top: 0,
      left: 0
    });
  }, p.offset = {
    bodyOffset: function bodyOffset(a) {
      var b = a.offsetTop,
          c = a.offsetLeft;
      return p.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(p.css(a, "marginTop")) || 0, c += parseFloat(p.css(a, "marginLeft")) || 0), {
        top: b,
        left: c
      };
    },
    setOffset: function setOffset(a, b, c) {
      var d = p.css(a, "position");
      d === "static" && (a.style.position = "relative");
      var e = p(a),
          f = e.offset(),
          g = p.css(a, "top"),
          h = p.css(a, "left"),
          i = (d === "absolute" || d === "fixed") && p.inArray("auto", [g, h]) > -1,
          j = {},
          k = {},
          l,
          m;
      i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0), p.isFunction(b) && (b = b.call(a, c, f)), b.top != null && (j.top = b.top - f.top + l), b.left != null && (j.left = b.left - f.left + m), "using" in b ? b.using.call(a, j) : e.css(j);
    }
  }, p.fn.extend({
    position: function position() {
      if (!this[0]) return;
      var a = this[0],
          b = this.offsetParent(),
          c = this.offset(),
          d = c_.test(b[0].nodeName) ? {
        top: 0,
        left: 0
      } : b.offset();
      return c.top -= parseFloat(p.css(a, "marginTop")) || 0, c.left -= parseFloat(p.css(a, "marginLeft")) || 0, d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0, {
        top: c.top - d.top,
        left: c.left - d.left
      };
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent || e.body;

        while (a && !c_.test(a.nodeName) && p.css(a, "position") === "static") {
          a = a.offsetParent;
        }

        return a || e.body;
      });
    }
  }), p.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, c) {
    var d = /Y/.test(c);

    p.fn[a] = function (e) {
      return p.access(this, function (a, e, f) {
        var g = da(a);
        if (f === b) return g ? c in g ? g[c] : g.document.documentElement[e] : a[e];
        g ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f : p(g).scrollTop()) : a[e] = f;
      }, a, e, arguments.length, null);
    };
  }), p.each({
    Height: "height",
    Width: "width"
  }, function (a, c) {
    p.each({
      padding: "inner" + a,
      content: c,
      "": "outer" + a
    }, function (d, e) {
      p.fn[e] = function (e, f) {
        var g = arguments.length && (d || typeof e != "boolean"),
            h = d || (e === !0 || f === !0 ? "margin" : "border");
        return p.access(this, function (c, d, e) {
          var f;
          return p.isWindow(c) ? c.document.documentElement["client" + a] : c.nodeType === 9 ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? p.css(c, d, e, h) : p.style(c, d, e, h);
        }, c, g ? e : b, g, null);
      };
    });
  }), a.jQuery = a.$ = p,  true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js").jQuery && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return p;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(window);

/***/ }),

/***/ "./app/Modules/Buh/Resources/assets/js/portfolio/jquery.quicksand.js":
/*!***************************************************************************!*\
  !*** ./app/Modules/Buh/Resources/assets/js/portfolio/jquery.quicksand.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*

Quicksand 1.2.2

Reorder and filter items with a nice shuffling animation.

Copyright (c) 2010 Jacek Galanciak (razorjack.net) and agilope.com
Big thanks for Piotr Petrus (riddle.pl) for deep code review and wonderful docs & demos.

Dual licensed under the MIT and GPL version 2 licenses.
http://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
http://github.com/jquery/jquery/blob/master/GPL-LICENSE.txt

Project site: http://razorjack.net/quicksand
Github site: http://github.com/razorjack/quicksand

*/
(function ($) {
  $.fn.quicksand = function (collection, customOptions) {
    var options = {
      duration: 750,
      easing: 'swing',
      attribute: 'data-id',
      // attribute to recognize same items within source and dest
      adjustHeight: 'auto',
      // 'dynamic' animates height during shuffling (slow), 'auto' adjusts it before or after the animation, false leaves height constant
      useScaling: true,
      // disable it if you're not using scaling effect or want to improve performance
      enhancement: function enhancement(c) {},
      // Visual enhacement (eg. font replacement) function for cloned elements
      selector: '> *',
      dx: 0,
      dy: 0
    };
    $.extend(options, customOptions);

    if ($.browser.msie || typeof $.fn.scale == 'undefined') {
      // Got IE and want scaling effect? Kiss my ass.
      options.useScaling = false;
    }

    var callbackFunction;

    if (typeof arguments[1] == 'function') {
      var callbackFunction = arguments[1];
    } else if (_typeof(arguments[2] == 'function')) {
      var callbackFunction = arguments[2];
    }

    return this.each(function (i) {
      var val;
      var animationQueue = []; // used to store all the animation params before starting the animation; solves initial animation slowdowns

      var $collection = $(collection).clone(); // destination (target) collection

      var $sourceParent = $(this); // source, the visible container of source collection

      var sourceHeight = $(this).css('height'); // used to keep height and document flow during the animation

      var destHeight;
      var adjustHeightOnCallback = false;
      var offset = $($sourceParent).offset(); // offset of visible container, used in animation calculations

      var offsets = []; // coordinates of every source collection item            

      var $source = $(this).find(options.selector); // source collection items
      // Replace the collection and quit if IE6

      if ($.browser.msie && $.browser.version.substr(0, 1) < 7) {
        $sourceParent.html('').append($collection);
        return;
      } // Gets called when any animation is finished


      var postCallbackPerformed = 0; // prevents the function from being called more than one time

      var postCallback = function postCallback() {
        if (!postCallbackPerformed) {
          postCallbackPerformed = 1; // hack: 
          // used to be: $sourceParent.html($dest.html()); // put target HTML into visible source container
          // but new webkit builds cause flickering when replacing the collections

          $toDelete = $sourceParent.find('> *');
          $sourceParent.prepend($dest.find('> *'));
          $toDelete.remove();

          if (adjustHeightOnCallback) {
            $sourceParent.css('height', destHeight);
          }

          options.enhancement($sourceParent); // Perform custom visual enhancements on a newly replaced collection

          if (typeof callbackFunction == 'function') {
            callbackFunction.call(this);
          }
        }
      }; // Position: relative situations


      var $correctionParent = $sourceParent.offsetParent();
      var correctionOffset = $correctionParent.offset();

      if ($correctionParent.css('position') == 'relative') {
        if ($correctionParent.get(0).nodeName.toLowerCase() == 'body') {} else {
          correctionOffset.top += parseFloat($correctionParent.css('border-top-width')) || 0;
          correctionOffset.left += parseFloat($correctionParent.css('border-left-width')) || 0;
        }
      } else {
        correctionOffset.top -= parseFloat($correctionParent.css('border-top-width')) || 0;
        correctionOffset.left -= parseFloat($correctionParent.css('border-left-width')) || 0;
        correctionOffset.top -= parseFloat($correctionParent.css('margin-top')) || 0;
        correctionOffset.left -= parseFloat($correctionParent.css('margin-left')) || 0;
      } // perform custom corrections from options (use when Quicksand fails to detect proper correction)


      if (isNaN(correctionOffset.left)) {
        correctionOffset.left = 0;
      }

      if (isNaN(correctionOffset.top)) {
        correctionOffset.top = 0;
      }

      correctionOffset.left -= options.dx;
      correctionOffset.top -= options.dy; // keeps nodes after source container, holding their position

      $sourceParent.css('height', $(this).height()); // get positions of source collections

      $source.each(function (i) {
        offsets[i] = $(this).offset();
      }); // stops previous animations on source container

      $(this).stop();
      var dx = 0;
      var dy = 0;
      $source.each(function (i) {
        $(this).stop(); // stop animation of collection items

        var rawObj = $(this).get(0);

        if (rawObj.style.position == 'absolute') {
          dx = -options.dx;
          dy = -options.dy;
        } else {
          dx = options.dx;
          dy = options.dy;
        }

        rawObj.style.position = 'absolute';
        rawObj.style.margin = '0';
        rawObj.style.top = offsets[i].top - parseFloat(rawObj.style.marginTop) - correctionOffset.top + dy + 'px';
        rawObj.style.left = offsets[i].left - parseFloat(rawObj.style.marginLeft) - correctionOffset.left + dx + 'px';
      }); // create temporary container with destination collection

      var $dest = $($sourceParent).clone();
      var rawDest = $dest.get(0);
      rawDest.innerHTML = '';
      rawDest.setAttribute('id', '');
      rawDest.style.height = 'auto';
      rawDest.style.width = $sourceParent.width() + 'px';
      $dest.append($collection); // insert node into HTML
      // Note that the node is under visible source container in the exactly same position
      // The browser render all the items without showing them (opacity: 0.0)
      // No offset calculations are needed, the browser just extracts position from underlayered destination items
      // and sets animation to destination positions.

      $dest.insertBefore($sourceParent);
      $dest.css('opacity', 0.0);
      rawDest.style.zIndex = -1;
      rawDest.style.margin = '0';
      rawDest.style.position = 'absolute';
      rawDest.style.top = offset.top - correctionOffset.top + 'px';
      rawDest.style.left = offset.left - correctionOffset.left + 'px';

      if (options.adjustHeight === 'dynamic') {
        // If destination container has different height than source container
        // the height can be animated, adjusting it to destination height
        $sourceParent.animate({
          height: $dest.height()
        }, options.duration, options.easing);
      } else if (options.adjustHeight === 'auto') {
        destHeight = $dest.height();

        if (parseFloat(sourceHeight) < parseFloat(destHeight)) {
          // Adjust the height now so that the items don't move out of the container
          $sourceParent.css('height', destHeight);
        } else {
          //  Adjust later, on callback
          adjustHeightOnCallback = true;
        }
      } // Now it's time to do shuffling animation
      // First of all, we need to identify same elements within source and destination collections    


      $source.each(function (i) {
        var destElement = [];

        if (typeof options.attribute == 'function') {
          val = options.attribute($(this));
          $collection.each(function () {
            if (options.attribute(this) == val) {
              destElement = $(this);
              return false;
            }
          });
        } else {
          destElement = $collection.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
        }

        if (destElement.length) {
          // The item is both in source and destination collections
          // It it's under different position, let's move it
          if (!options.useScaling) {
            animationQueue.push({
              element: $(this),
              animation: {
                top: destElement.offset().top - correctionOffset.top,
                left: destElement.offset().left - correctionOffset.left,
                opacity: 1.0
              }
            });
          } else {
            animationQueue.push({
              element: $(this),
              animation: {
                top: destElement.offset().top - correctionOffset.top,
                left: destElement.offset().left - correctionOffset.left,
                opacity: 1.0,
                scale: '1.0'
              }
            });
          }
        } else {
          // The item from source collection is not present in destination collections
          // Let's remove it
          if (!options.useScaling) {
            animationQueue.push({
              element: $(this),
              animation: {
                opacity: '0.0'
              }
            });
          } else {
            animationQueue.push({
              element: $(this),
              animation: {
                opacity: '0.0',
                scale: '0.0'
              }
            });
          }
        }
      });
      $collection.each(function (i) {
        // Grab all items from target collection not present in visible source collection
        var sourceElement = [];
        var destElement = [];

        if (typeof options.attribute == 'function') {
          val = options.attribute($(this));
          $source.each(function () {
            if (options.attribute(this) == val) {
              sourceElement = $(this);
              return false;
            }
          });
          $collection.each(function () {
            if (options.attribute(this) == val) {
              destElement = $(this);
              return false;
            }
          });
        } else {
          sourceElement = $source.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
          destElement = $collection.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
        }

        var animationOptions;

        if (sourceElement.length === 0) {
          // No such element in source collection...
          if (!options.useScaling) {
            animationOptions = {
              opacity: '1.0'
            };
          } else {
            animationOptions = {
              opacity: '1.0',
              scale: '1.0'
            };
          } // Let's create it


          d = destElement.clone();
          var rawDestElement = d.get(0);
          rawDestElement.style.position = 'absolute';
          rawDestElement.style.margin = '0';
          rawDestElement.style.top = destElement.offset().top - correctionOffset.top + 'px';
          rawDestElement.style.left = destElement.offset().left - correctionOffset.left + 'px';
          d.css('opacity', 0.0); // IE

          if (options.useScaling) {
            d.css('transform', 'scale(0.0)');
          }

          d.appendTo($sourceParent);
          animationQueue.push({
            element: $(d),
            animation: animationOptions
          });
        }
      });
      $dest.remove();
      options.enhancement($sourceParent); // Perform custom visual enhancements during the animation

      for (i = 0; i < animationQueue.length; i++) {
        animationQueue[i].element.animate(animationQueue[i].animation, options.duration, options.easing, postCallback);
      }
    });
  };
})(jQuery);

/***/ }),

/***/ "./app/Modules/Buh/Resources/assets/js/portfolio/setting.js":
/*!******************************************************************!*\
  !*** ./app/Modules/Buh/Resources/assets/js/portfolio/setting.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready(function ($) {
  if (jQuery().quicksand) {
    // Clone applications to get a second collection
    var $data = $(".portfolio").clone(); //NOTE: Only filter on the main portfolio page, not on the subcategory pages

    $('.filter li').click(function (e) {
      $(".filter li").removeClass("active"); // Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)

      var filterClass = $(this).attr('class').split(' ').slice(-1)[0];

      if (filterClass == 'all') {
        var $filteredData = $data.find('.item-thumbs');
      } else {
        var $filteredData = $data.find('.item-thumbs[data-type=' + filterClass + ']');
      }

      $(".portfolio").quicksand($filteredData, {
        duration: 600,
        adjustHeight: 'auto'
      }, function () {
        // Portfolio fancybox
        $(".fancybox").fancybox({
          padding: 0,
          beforeShow: function beforeShow() {
            this.title = $(this.element).attr('title');
            this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
          },
          helpers: {
            title: {
              type: 'inside'
            }
          }
        });
      });
      $(this).addClass("active");
      return false;
    });
  } //if quicksand

});

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./app/Modules/Buh/Resources/assets/js/jquery.js ./app/Modules/Buh/Resources/assets/js/jquery.easing.1.3.js ./app/Modules/Buh/Resources/assets/js/bootstrap.min.js ./app/Modules/Buh/Resources/assets/js/jquery.fancybox.pack.js ./app/Modules/Buh/Resources/assets/js/jquery.fancybox-media.js ./app/Modules/Buh/Resources/assets/js/portfolio/jquery.quicksand.js ./app/Modules/Buh/Resources/assets/js/portfolio/setting.js ./app/Modules/Buh/Resources/assets/js/jquery.flexslider.js ./app/Modules/Buh/Resources/assets/js/animate.js ./app/Modules/Buh/Resources/assets/js/custom.js ./app/Modules/Billiard/Resources/assets/css.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/base12/data/www/site/app/Modules/Buh/Resources/assets/js/jquery.js */"./app/Modules/Buh/Resources/assets/js/jquery.js");
__webpack_require__(/*! /var/www/base12/data/www/site/app/Modules/Buh/Resources/assets/js/jquery.easing.1.3.js */"./app/Modules/Buh/Resources/assets/js/jquery.easing.1.3.js");
__webpack_require__(/*! /var/www/base12/data/www/site/app/Modules/Buh/Resources/assets/js/bootstrap.min.js */"./app/Modules/Buh/Resources/assets/js/bootstrap.min.js");
__webpack_require__(/*! /var/www/base12/data/www/site/app/Modules/Buh/Resources/assets/js/jquery.fancybox.pack.js */"./app/Modules/Buh/Resources/assets/js/jquery.fancybox.pack.js");
__webpack_require__(/*! /var/www/base12/data/www/site/app/Modules/Buh/Resources/assets/js/jquery.fancybox-media.js */"./app/Modules/Buh/Resources/assets/js/jquery.fancybox-media.js");
__webpack_require__(/*! /var/www/base12/data/www/site/app/Modules/Buh/Resources/assets/js/portfolio/jquery.quicksand.js */"./app/Modules/Buh/Resources/assets/js/portfolio/jquery.quicksand.js");
__webpack_require__(/*! /var/www/base12/data/www/site/app/Modules/Buh/Resources/assets/js/portfolio/setting.js */"./app/Modules/Buh/Resources/assets/js/portfolio/setting.js");
__webpack_require__(/*! /var/www/base12/data/www/site/app/Modules/Buh/Resources/assets/js/jquery.flexslider.js */"./app/Modules/Buh/Resources/assets/js/jquery.flexslider.js");
__webpack_require__(/*! /var/www/base12/data/www/site/app/Modules/Buh/Resources/assets/js/animate.js */"./app/Modules/Buh/Resources/assets/js/animate.js");
__webpack_require__(/*! /var/www/base12/data/www/site/app/Modules/Buh/Resources/assets/js/custom.js */"./app/Modules/Buh/Resources/assets/js/custom.js");
module.exports = __webpack_require__(/*! /var/www/base12/data/www/site/app/Modules/Billiard/Resources/assets/css.scss */"./app/Modules/Billiard/Resources/assets/css.scss");


/***/ })

/******/ });