import { _ as Ci } from "./preload-helper.cf010ec4.js";
import {
  h as Gs,
  f as $e,
  A as Nn,
  g as wi,
  d as Si,
  p as va,
  b as Ac,
  H as Cc,
  a as xc,
  c as kc,
  e as Mc,
  i as Oc,
  l as Dc,
  _ as Pc,
} from "./main.js";
import { digElement as Rc } from "./index.12d62e94.js";
import { c as el, g as cs, a as tl } from "./_commonjsHelpers.de833af9.js";
import { g as it } from "./index.4db78ffb.js";
const Is = new WeakMap();
function $s(i, e, t, n) {
  if (!i && !Is.has(e)) return !1;
  const r = Is.get(e) ?? new WeakMap();
  Is.set(e, r);
  const s = r.get(t) ?? new Set();
  r.set(t, s);
  const a = s.has(n);
  return i ? s.add(n) : s.delete(n), a && i;
}
function Lc(i, e) {
  let t = i.target;
  if (
    (t instanceof Text && (t = t.parentElement),
    t instanceof Element && i.currentTarget instanceof Element)
  ) {
    const n = t.closest(e);
    if (n && i.currentTarget.contains(n)) return n;
  }
}
function qc(i, e, t, n = {}) {
  const { signal: r, base: s = document } = n;
  if (r?.aborted) return;
  const { once: a, ...l } = n,
    u = s instanceof Document ? s.documentElement : s,
    g = !!(typeof n == "object" ? n.capture : n),
    C = (f) => {
      const A = Lc(f, i);
      if (A) {
        const E = Object.assign(f, { delegateTarget: A });
        t.call(u, E), a && (u.removeEventListener(e, C, l), $s(!1, u, t, y));
      }
    },
    y = JSON.stringify({ selector: i, type: e, capture: g });
  $s(!0, u, t, y) || u.addEventListener(e, C, l),
    r?.addEventListener("abort", () => {
      $s(!1, u, t, y);
    });
}
function Nc(i) {
  for (var e = [], t = 0; t < i.length; ) {
    var n = i[t];
    if (n === "*" || n === "+" || n === "?") {
      e.push({ type: "MODIFIER", index: t, value: i[t++] });
      continue;
    }
    if (n === "\\") {
      e.push({ type: "ESCAPED_CHAR", index: t++, value: i[t++] });
      continue;
    }
    if (n === "{") {
      e.push({ type: "OPEN", index: t, value: i[t++] });
      continue;
    }
    if (n === "}") {
      e.push({ type: "CLOSE", index: t, value: i[t++] });
      continue;
    }
    if (n === ":") {
      for (var r = "", s = t + 1; s < i.length; ) {
        var a = i.charCodeAt(s);
        if (
          (a >= 48 && a <= 57) ||
          (a >= 65 && a <= 90) ||
          (a >= 97 && a <= 122) ||
          a === 95
        ) {
          r += i[s++];
          continue;
        }
        break;
      }
      if (!r) throw new TypeError("Missing parameter name at ".concat(t));
      e.push({ type: "NAME", index: t, value: r }), (t = s);
      continue;
    }
    if (n === "(") {
      var l = 1,
        u = "",
        s = t + 1;
      if (i[s] === "?")
        throw new TypeError('Pattern cannot start with "?" at '.concat(s));
      for (; s < i.length; ) {
        if (i[s] === "\\") {
          u += i[s++] + i[s++];
          continue;
        }
        if (i[s] === ")") {
          if ((l--, l === 0)) {
            s++;
            break;
          }
        } else if (i[s] === "(" && (l++, i[s + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(s));
        u += i[s++];
      }
      if (l) throw new TypeError("Unbalanced pattern at ".concat(t));
      if (!u) throw new TypeError("Missing pattern at ".concat(t));
      e.push({ type: "PATTERN", index: t, value: u }), (t = s);
      continue;
    }
    e.push({ type: "CHAR", index: t, value: i[t++] });
  }
  return e.push({ type: "END", index: t, value: "" }), e;
}
function Hc(i, e) {
  e === void 0 && (e = {});
  for (
    var t = Nc(i),
      n = e.prefixes,
      r = n === void 0 ? "./" : n,
      s = "[^".concat(_i(e.delimiter || "/#?"), "]+?"),
      a = [],
      l = 0,
      u = 0,
      g = "",
      C = function (d) {
        if (u < t.length && t[u].type === d) return t[u++].value;
      },
      y = function (d) {
        var b = C(d);
        if (b !== void 0) return b;
        var M = t[u],
          j = M.type,
          H = M.index;
        throw new TypeError(
          "Unexpected ".concat(j, " at ").concat(H, ", expected ").concat(d)
        );
      },
      S = function () {
        for (var d = "", b; (b = C("CHAR") || C("ESCAPED_CHAR")); ) d += b;
        return d;
      };
    u < t.length;

  ) {
    var f = C("CHAR"),
      A = C("NAME"),
      E = C("PATTERN");
    if (A || E) {
      var _ = f || "";
      r.indexOf(_) === -1 && ((g += _), (_ = "")),
        g && (a.push(g), (g = "")),
        a.push({
          name: A || l++,
          prefix: _,
          suffix: "",
          pattern: E || s,
          modifier: C("MODIFIER") || "",
        });
      continue;
    }
    var O = f || C("ESCAPED_CHAR");
    if (O) {
      g += O;
      continue;
    }
    g && (a.push(g), (g = ""));
    var q = C("OPEN");
    if (q) {
      var _ = S(),
        k = C("NAME") || "",
        m = C("PATTERN") || "",
        h = S();
      y("CLOSE"),
        a.push({
          name: k || (m ? l++ : ""),
          pattern: k && !m ? s : m,
          prefix: _,
          suffix: h,
          modifier: C("MODIFIER") || "",
        });
      continue;
    }
    y("END");
  }
  return a;
}
function Ic(i, e) {
  var t = [],
    n = il(i, t, e);
  return $c(n, t, e);
}
function $c(i, e, t) {
  t === void 0 && (t = {});
  var n = t.decode,
    r =
      n === void 0
        ? function (s) {
            return s;
          }
        : n;
  return function (s) {
    var a = i.exec(s);
    if (!a) return !1;
    for (
      var l = a[0],
        u = a.index,
        g = Object.create(null),
        C = function (S) {
          if (a[S] === void 0) return "continue";
          var f = e[S - 1];
          f.modifier === "*" || f.modifier === "+"
            ? (g[f.name] = a[S].split(f.prefix + f.suffix).map(function (A) {
                return r(A, f);
              }))
            : (g[f.name] = r(a[S], f));
        },
        y = 1;
      y < a.length;
      y++
    )
      C(y);
    return { path: l, index: u, params: g };
  };
}
function _i(i) {
  return i.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function nl(i) {
  return i && i.sensitive ? "" : "i";
}
function Fc(i, e) {
  if (!e) return i;
  for (var t = /\((?:\?<(.*?)>)?(?!\?)/g, n = 0, r = t.exec(i.source); r; )
    e.push({
      name: r[1] || n++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: "",
    }),
      (r = t.exec(i.source));
  return i;
}
function Wc(i, e, t) {
  var n = i.map(function (r) {
    return il(r, e, t).source;
  });
  return new RegExp("(?:".concat(n.join("|"), ")"), nl(t));
}
function zc(i, e, t) {
  return Uc(Hc(i, t), e, t);
}
function Uc(i, e, t) {
  t === void 0 && (t = {});
  for (
    var n = t.strict,
      r = n === void 0 ? !1 : n,
      s = t.start,
      a = s === void 0 ? !0 : s,
      l = t.end,
      u = l === void 0 ? !0 : l,
      g = t.encode,
      C =
        g === void 0
          ? function (H) {
              return H;
            }
          : g,
      y = t.delimiter,
      S = y === void 0 ? "/#?" : y,
      f = t.endsWith,
      A = f === void 0 ? "" : f,
      E = "[".concat(_i(A), "]|$"),
      _ = "[".concat(_i(S), "]"),
      O = a ? "^" : "",
      q = 0,
      k = i;
    q < k.length;
    q++
  ) {
    var m = k[q];
    if (typeof m == "string") O += _i(C(m));
    else {
      var h = _i(C(m.prefix)),
        d = _i(C(m.suffix));
      if (m.pattern)
        if ((e && e.push(m), h || d))
          if (m.modifier === "+" || m.modifier === "*") {
            var b = m.modifier === "*" ? "?" : "";
            O += "(?:"
              .concat(h, "((?:")
              .concat(m.pattern, ")(?:")
              .concat(d)
              .concat(h, "(?:")
              .concat(m.pattern, "))*)")
              .concat(d, ")")
              .concat(b);
          } else
            O += "(?:"
              .concat(h, "(")
              .concat(m.pattern, ")")
              .concat(d, ")")
              .concat(m.modifier);
        else
          m.modifier === "+" || m.modifier === "*"
            ? (O += "((?:".concat(m.pattern, ")").concat(m.modifier, ")"))
            : (O += "(".concat(m.pattern, ")").concat(m.modifier));
      else O += "(?:".concat(h).concat(d, ")").concat(m.modifier);
    }
  }
  if (u)
    r || (O += "".concat(_, "?")),
      (O += t.endsWith ? "(?=".concat(E, ")") : "$");
  else {
    var M = i[i.length - 1],
      j = typeof M == "string" ? _.indexOf(M[M.length - 1]) > -1 : M === void 0;
    r || (O += "(?:".concat(_, "(?=").concat(E, "))?")),
      j || (O += "(?=".concat(_, "|").concat(E, ")"));
  }
  return new RegExp(O, nl(t));
}
function il(i, e, t) {
  return i instanceof RegExp
    ? Fc(i, e)
    : Array.isArray(i)
    ? Wc(i, e, t)
    : zc(i, e, t);
}
const ya = (i) =>
    new Promise(async (e) => {
      setTimeout(() => {
        e();
      }, i || 200);
    }),
  Bc = async (i) =>
    new Promise((e, t) => {
      if (!i.element) return t(new Error("An element is required."));
      const n = setInterval(() => {
        i.search?.type == "style"
          ? i.search.lookFor.some((r) => i.element.style[r]) &&
            (i.callback && i.callback(), e(!0), clearInterval(n))
          : i.search?.type == "class"
          ? Gs(
              i.element,
              i.search.lookFor,
              i.search.attribute || i.search.type
            ) && (i.callback && i.callback(), e(!0), clearInterval(n))
          : i.search?.type == "hasChildren" &&
            i.element.children.length > 0 &&
            (i.callback && i.callback(), e(!0), clearInterval(n));
      }, i.intervalFrequency || 1e3);
      setTimeout(() => {
        t(new Error("Time is out.")), clearInterval(n);
      }, i.timer || 5e3);
    });
class Yc {
  constructor(e = {}) {
    const t = e && "nameSpace" in e ? e.nameSpace : "collapsify",
      n = {
        nameSpace: e && "nameSpace" in e ? e.nameSpace : "collapsify",
        toggleButtonAttr: `data-${t}-control`,
        toggleContentAttr: `data-${t}-content`,
        toggleSelectOptionsAttr:
          e && "dropdownElement" in e && `data-${t}-dropdown-item`,
        toggleSelectElement: e && "dropdownElement" in e && e.dropdownElement,
        activeClass: "--is-active",
        isAnimation: e && "isAnimation" in e ? e.isAnimation : !0,
        closeOthers: e && "closeOthers" in e ? e.closeOthers : !0,
        animationSpeed: e && "animationSpeed" in e ? e.animationSpeed : 400,
        cssEasing: e && "cssEasing" in e ? e.cssEasing : "ease-in-out",
        isTab: e && "isTab" in e,
        onSlideStart: e && "onSlideStart" in e && e.onSlideStart,
        onSlideEnd: e && "onSlideEnd" in e && e.onSlideEnd,
        index: e && "index" in e && e.index,
      };
    (this.options = { ...n, ...e }),
      (this.toggleContentEls = [].slice.call(
        document.querySelectorAll(`[${this.options.toggleContentAttr}]`)
      )),
      (this.toggleButtonEls = [].slice.call(
        document.querySelectorAll(`[${this.options.toggleButtonAttr}]`)
      )),
      (this.toggleContentEls.length !== 0 ||
        this.toggleButtonEls.length !== 0) &&
        this.init();
  }
  init() {
    this.initContentsState(this.toggleContentEls),
      this.handleButtonsEvent(this.toggleButtonEls),
      this.options.toggleSelectElement &&
        this.handleDropdownSelectEvent(this.options.toggleSelectElement);
  }
  isReady = async () =>
    Promise.all(
      this.toggleContentEls.map(async (e) => {
        await Bc({
          element: e,
          search: { type: "style", lookFor: ["max-heigt", "visibility"] },
          intervalFrequency: 1e3,
          timer: 5e3,
        });
      })
    )
      .then(() => {
        window.Collapsify || (window.Collapsify = []),
          (window.Collapsify[this.options.index] = { isReady: !0 });
      })
      .catch((e) => console.log(e.message));
  initContentsState(e) {
    (this.itemsState = {}),
      e.forEach((t) => {
        $e(t, [{ overflow: "hidden" }]), $e(t, [{ maxHeight: "none" }]);
        const n = Array.from(t.classList).some((s) =>
            s.includes(this.options.activeClass)
          ),
          r = Nn(t, this.options.toggleContentAttr);
        r &&
          (this.setItemState(r, n),
          n ? this.open(r, !1, !1) : this.close(r, !1, !1));
      });
  }
  handleButtonsEvent(e) {
    e.forEach((t) => {
      Nn(t, this.options.toggleButtonAttr) &&
        t.addEventListener("click", this.handleButtonClick);
    });
  }
  handleButtonClick = (e) => {
    const t = Nn(e.target, this.options.toggleButtonAttr);
    t && (e.preventDefault(), this.toggleSlide(t, !0));
  };
  handleDropdownSelectEvent(e) {
    this.toggleContentEls.forEach((t) => {
      if (
        Array.from(t.classList).some((n) =>
          n.includes(this.options.activeClass)
        )
      ) {
        let n = Nn(t, this.options.toggleContentAttr),
          r = document.querySelector(
            `[${this.options.toggleSelectOptionsAttr} = ${n}]`
          );
        r.selected = !0;
      }
    }),
      e.addEventListener("change", this.handleSelectChange);
  }
  handleSelectChange = (e) => {
    const t = e.target.options[e.target.selectedIndex],
      n = Nn(t, this.options.toggleSelectOptionsAttr);
    this.toggleSlide(n, !0);
  };
  setItemState(e, t) {
    this.itemsState[e] = { isOpen: t, isAnimating: !1 };
  }
  toggleSlide(e, t = !0) {
    this.itemsState[e]?.isAnimating ||
      (this.options.isTab && this.itemsState[e]?.isOpen) ||
      (this.itemsState[e]?.isOpen
        ? this.close(e, t, this.options.isAnimation)
        : this.open(e, t, this.options.isAnimation));
  }
  open(e, t = !0, n = !0) {
    if (!e) return;
    Object.prototype.hasOwnProperty.call(this.itemsState, e) ||
      this.setItemState(e, !1);
    const r = document.querySelector(
      `[${this.options.toggleContentAttr}='${e}']`
    );
    if (!r) return;
    (this.itemsState[e].isAnimating = !0),
      this.options.closeOthers &&
        [].slice.call(this.toggleContentEls).forEach((l) => {
          const u = Nn(l, this.options.toggleContentAttr);
          u && u !== e && this.close(u, !1, n);
        }),
      t !== !1 && this.options.onSlideStart && this.options.onSlideStart(!0, e);
    const s = this.getTargetHeight(r);
    $e(r, [{ visibility: "visible" }]), this.toggleActiveClass(r, !0);
    const a = document.querySelectorAll(
      `[${this.options.toggleButtonAttr}='${e}']`
    );
    a.length > 0 &&
      [].slice.call(a).forEach((l) => {
        this.toggleActiveClass(l, !0),
          this.toggleAriaAttribute(l, "aria-expanded", !0);
      }),
      n
        ? ($e(r, [{ overflow: "hidden" }]),
          $e(r, [
            {
              transition: `${this.options.animationSpeed}ms ${this.options.cssEasing}`,
            },
          ]),
          $e(r, [{ maxHeight: (s || "1000") + "px" }]),
          setTimeout(() => {
            t !== !1 &&
              this.options.onSlideEnd &&
              this.options.onSlideEnd(!0, e),
              $e(r, [{ overflow: "" }]),
              $e(r, [{ transition: "" }]),
              $e(r, [{ maxHeight: "none" }]),
              (this.itemsState[e].isAnimating = !1);
          }, this.options.animationSpeed))
        : ($e(r, [{ maxHeight: "none" }]),
          $e(r, [{ overflow: "" }]),
          (this.itemsState[e].isAnimating = !1)),
      (this.itemsState[e].isOpen = !0),
      this.toggleAriaAttribute(r, "aria-hidden", !0);
  }
  close(e, t = !0, n = !0) {
    if (!e) return;
    Object.prototype.hasOwnProperty.call(this.itemsState, e) ||
      this.setItemState(e, !1),
      (this.itemsState[e].isAnimating = !0),
      t !== !1 && this.options.onSlideStart && this.options.onSlideStart(!1, e);
    const r = document.querySelector(
      `[${this.options.toggleContentAttr}='${e}']`
    );
    $e(r, [{ overflow: "hidden" }]),
      $e(r, [{ maxHeight: r.clientHeight + "px" }]),
      this.toggleActiveClass(r, !1),
      setTimeout(() => {
        $e(r, [{ maxHeight: "0px" }]);
      }, 5);
    const s = document.querySelectorAll(
      `[${this.options.toggleButtonAttr}='${e}']`
    );
    s.length > 0 &&
      [].slice.call(s).forEach((a) => {
        this.toggleActiveClass(a, !1),
          this.toggleAriaAttribute(a, "aria-expanded", !1);
      }),
      n
        ? ($e(r, [
            {
              transition: `${this.options.animationSpeed}ms ${this.options.cssEasing}`,
            },
          ]),
          setTimeout(() => {
            t !== !1 &&
              this.options.onSlideEnd &&
              this.options.onSlideEnd(!1, e),
              $e(r, [{ transition: "" }]),
              (this.itemsState[e].isAnimating = !1),
              $e(r, [{ visibility: "hidden" }]);
          }, this.options.animationSpeed))
        : (this.options.onSlideEnd && this.options.onSlideEnd(!1, e),
          (this.itemsState[e].isAnimating = !1),
          $e(r, [{ visibility: "hidden" }])),
      Object.prototype.hasOwnProperty.call(this.itemsState, e) &&
        (this.itemsState[e].isOpen = !1),
      this.toggleAriaAttribute(r, "aria-hidden", !1);
  }
  toggleActiveClass(e, t) {
    const n =
      !e.classList[0] || e.classList[0].startsWith("--is-active")
        ? this.options.activeClass
        : e.classList[0] + this.options.activeClass;
    t ? wi(e, n) : Si(e, n);
  }
  toggleAriaAttribute(e, t, n) {
    Nn(e, t) && (t === "aria-expanded" ? va(e, t, n) : va(e, t, !n));
  }
  getTargetHeight(e) {
    if (!e) return;
    const t = e.cloneNode(!0),
      n = e.parentNode;
    if (!n) return;
    const r = [].slice.call(t.querySelectorAll("input[name]"));
    if (r.length !== 0) {
      const a = "-" + new Date().getTime();
      r.forEach((l) => {
        l.name += a;
      });
    }
    (t.style.maxHeight = "none"), (t.style.opacity = "0"), n.appendChild(t);
    const s = t.clientHeight;
    return n.removeChild(t), s;
  }
  destroy = () => {
    this.toggleButtonEls.forEach((e) => {
      Nn(e, this.options.toggleButtonAttr) &&
        e.removeEventListener("click", this.handleButtonClick);
    }),
      this.options.toggleSelectElement &&
        this.options.toggleSelectElement.removeEventListener(
          "change",
          this.handleSelectChange
        );
  };
}
const buttonElements = document.querySelectorAll('[data-block="button"]');

buttonElements.forEach((buttonElement) => {
  new Button(buttonElement);
});

function vt() {
  return (
    (vt = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
          }
          return i;
        }),
    vt.apply(this, arguments)
  );
}
const rl = (i, e) =>
    String(i)
      .toLowerCase()
      .replace(/[\s/_.]+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+|-+$/g, "") ||
    e ||
    "",
  Un = ({ hash: i } = {}) =>
    location.pathname + location.search + (i ? location.hash : ""),
  Vc = (i, e = {}) => {
    const t = vt(
      {
        url: (i = i || Un({ hash: !0 })),
        random: Math.random(),
        source: "swup",
      },
      e
    );
    history.pushState(t, "", i);
  },
  Gi = (i = null, e = {}) => {
    i = i || Un({ hash: !0 });
    const t = vt(
      {},
      history.state || {},
      { url: i, random: Math.random(), source: "swup" },
      e
    );
    history.replaceState(t, "", i);
  },
  Xc = (i, e, t, n) => {
    const r = new AbortController();
    return (
      (n = vt({}, n, { signal: r.signal })),
      qc(i, e, t, n),
      { destroy: () => r.abort() }
    );
  };
let ri = class Qs extends URL {
  constructor(e, t = document.baseURI) {
    super(e.toString(), t);
  }
  get url() {
    return this.pathname + this.search;
  }
  static fromElement(e) {
    const t = e.getAttribute("href") || e.getAttribute("xlink:href") || "";
    return new Qs(t);
  }
  static fromUrl(e) {
    return new Qs(e);
  }
};
const wa = (i, e) => {
  try {
    return Ic(i, e);
  } catch (t) {
    throw new Error(`[swup] Error parsing path "${String(i)}":
${String(t)}`);
  }
};
class jc {
  constructor(e) {
    (this.swup = void 0), (this.pages = new Map()), (this.swup = e);
  }
  get size() {
    return this.pages.size;
  }
  get all() {
    const e = new Map();
    return (
      this.pages.forEach((t, n) => {
        e.set(n, vt({}, t));
      }),
      e
    );
  }
  has(e) {
    return this.pages.has(this.resolve(e));
  }
  get(e) {
    const t = this.pages.get(this.resolve(e));
    return t && vt({}, t);
  }
  set(e, t) {
    (t = vt({}, t, { url: (e = this.resolve(e)) })),
      this.pages.set(e, t),
      this.swup.hooks.callSync("cache:set", { page: t });
  }
  update(e, t) {
    e = this.resolve(e);
    const n = vt({}, this.get(e), t, { url: e });
    this.pages.set(e, n);
  }
  delete(e) {
    this.pages.delete(this.resolve(e));
  }
  clear() {
    this.pages.clear(), this.swup.hooks.callSync("cache:clear", void 0);
  }
  prune(e) {
    this.pages.forEach((t, n) => {
      e(n, t) && this.delete(n);
    });
  }
  resolve(e) {
    const { url: t } = ri.fromUrl(e);
    return this.swup.resolveUrl(t);
  }
}
const Zs = (i, e = document) => e.querySelector(i),
  po = (i, e = document) => Array.from(e.querySelectorAll(i)),
  sl = () =>
    new Promise((i) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          i();
        });
      });
    });
function go(i) {
  return (
    !!i &&
    (typeof i == "object" || typeof i == "function") &&
    typeof i.then == "function"
  );
}
function Kc(i, e = []) {
  return new Promise((t, n) => {
    const r = i(...e);
    go(r) ? r.then(t, n) : t(r);
  });
}
const Sa = (i) => (window.CSS && window.CSS.escape ? CSS.escape(i) : i),
  _a = (i) => 1e3 * Number(i.slice(0, -1).replace(",", "."));
class Gc {
  constructor(e) {
    (this.swup = void 0),
      (this.swupClasses = [
        "to-",
        "is-changing",
        "is-rendering",
        "is-popstate",
        "is-animating",
      ]),
      (this.swup = e);
  }
  get selectors() {
    const { scope: e } = this.swup.visit.animation;
    return e === "containers"
      ? this.swup.visit.containers
      : e === "html"
      ? ["html"]
      : Array.isArray(e)
      ? e
      : [];
  }
  get selector() {
    return this.selectors.join(",");
  }
  get targets() {
    return this.selector.trim() ? po(this.selector) : [];
  }
  add(...e) {
    this.targets.forEach((t) => t.classList.add(...e));
  }
  remove(...e) {
    this.targets.forEach((t) => t.classList.remove(...e));
  }
  clear() {
    this.targets.forEach((e) => {
      const t = e.className.split(" ").filter((n) => this.isSwupClass(n));
      e.classList.remove(...t);
    });
  }
  isSwupClass(e) {
    return this.swupClasses.some((t) => e.startsWith(t));
  }
}
function Qc({
  to: i,
  from: e = this.currentPageUrl,
  hash: t,
  el: n,
  event: r,
}) {
  return {
    id: Math.random(),
    from: { url: e },
    to: { url: i, hash: t },
    containers: this.options.containers,
    animation: {
      animate: !0,
      wait: !1,
      name: void 0,
      scope: this.options.animationScope,
      selector: this.options.animationSelector,
    },
    trigger: { el: n, event: r },
    cache: { read: this.options.cache, write: this.options.cache },
    history: { action: "push", popstate: !1, direction: void 0 },
    scroll: { reset: !0, target: void 0 },
  };
}
class Zc {
  constructor(e) {
    (this.swup = void 0),
      (this.registry = new Map()),
      (this.hooks = [
        "animation:out:start",
        "animation:out:await",
        "animation:out:end",
        "animation:in:start",
        "animation:in:await",
        "animation:in:end",
        "animation:skip",
        "cache:clear",
        "cache:set",
        "content:replace",
        "content:scroll",
        "enable",
        "disable",
        "fetch:request",
        "fetch:error",
        "history:popstate",
        "link:click",
        "link:self",
        "link:anchor",
        "link:newtab",
        "page:load",
        "page:view",
        "scroll:top",
        "scroll:anchor",
        "visit:start",
        "visit:end",
      ]),
      (this.swup = e),
      this.init();
  }
  init() {
    this.hooks.forEach((e) => this.create(e));
  }
  create(e) {
    this.registry.has(e) || this.registry.set(e, new Map());
  }
  exists(e) {
    return this.registry.has(e);
  }
  get(e) {
    const t = this.registry.get(e);
    if (t) return t;
    console.error(`Unknown hook '${e}'`);
  }
  clear() {
    this.registry.forEach((e) => e.clear());
  }
  on(e, t, n = {}) {
    const r = this.get(e);
    if (!r) return console.warn(`Hook '${e}' not found.`), () => {};
    const s = vt({}, n, { id: r.size + 1, hook: e, handler: t });
    return r.set(t, s), () => this.off(e, t);
  }
  before(e, t, n = {}) {
    return this.on(e, t, vt({}, n, { before: !0 }));
  }
  replace(e, t, n = {}) {
    return this.on(e, t, vt({}, n, { replace: !0 }));
  }
  once(e, t, n = {}) {
    return this.on(e, t, vt({}, n, { once: !0 }));
  }
  off(e, t) {
    const n = this.get(e);
    n && t
      ? n.delete(t) || console.warn(`Handler for hook '${e}' not found.`)
      : n && n.clear();
  }
  async call(e, t, n) {
    const { before: r, handler: s, after: a } = this.getHandlers(e, n);
    await this.run(r, t);
    const [l] = await this.run(s, t);
    return await this.run(a, t), this.dispatchDomEvent(e, t), l;
  }
  callSync(e, t, n) {
    const { before: r, handler: s, after: a } = this.getHandlers(e, n);
    this.runSync(r, t);
    const [l] = this.runSync(s, t);
    return this.runSync(a, t), this.dispatchDomEvent(e, t), l;
  }
  async run(e, t) {
    const n = [];
    for (const { hook: r, handler: s, defaultHandler: a, once: l } of e) {
      const u = await Kc(s, [this.swup.visit, t, a]);
      n.push(u), l && this.off(r, s);
    }
    return n;
  }
  runSync(e, t) {
    const n = [];
    for (const { hook: r, handler: s, defaultHandler: a, once: l } of e) {
      const u = s(this.swup.visit, t, a);
      n.push(u),
        go(u) &&
          console.warn(
            `Promise returned from handler for synchronous hook '${r}'.Swup will not wait for it to resolve.`
          ),
        l && this.off(r, s);
    }
    return n;
  }
  getHandlers(e, t) {
    const n = this.get(e);
    if (!n)
      return { found: !1, before: [], handler: [], after: [], replaced: !1 };
    const r = Array.from(n.values()),
      s = this.sortRegistrations,
      a = r.filter(({ before: y, replace: S }) => y && !S).sort(s),
      l = r
        .filter(({ replace: y }) => y)
        .filter((y) => !0)
        .sort(s),
      u = r.filter(({ before: y, replace: S }) => !y && !S).sort(s),
      g = l.length > 0;
    let C = [];
    if (t && ((C = [{ id: 0, hook: e, handler: t }]), g)) {
      const y = l.length - 1,
        S = (f) => {
          const A = l[f - 1];
          return A ? (E, _) => A.handler(E, _, S(f - 1)) : t;
        };
      C = [{ id: 0, hook: e, handler: l[y].handler, defaultHandler: S(y) }];
    }
    return { found: !0, before: a, handler: C, after: u, replaced: g };
  }
  sortRegistrations(e, t) {
    var n, r;
    return (
      ((n = e.priority) != null ? n : 0) - ((r = t.priority) != null ? r : 0) ||
      e.id - t.id ||
      0
    );
  }
  dispatchDomEvent(e, t) {
    document.dispatchEvent(
      new CustomEvent(`swup:${e}`, {
        detail: { hook: e, args: t, visit: this.swup.visit },
      })
    );
  }
}
const Jc = (i) => {
    if ((i && i.charAt(0) === "#" && (i = i.substring(1)), !i)) return null;
    const e = decodeURIComponent(i);
    let t =
      document.getElementById(i) ||
      document.getElementById(e) ||
      Zs(`a[name='${Sa(i)}']`) ||
      Zs(`a[name='${Sa(e)}']`);
    return t || i !== "top" || (t = document.body), t;
  },
  zi = "transition",
  Rr = "animation";
async function eu({ elements: i, selector: e }) {
  if (e === !1 && !i) return;
  let t = [];
  if (i) t = Array.from(i);
  else if (e && ((t = po(e, document.body)), !t.length))
    return void console.warn(
      `[swup] No elements found matching animationSelector \`${e}\``
    );
  const n = t.map((r) =>
    (function (s) {
      const {
        type: a,
        timeout: l,
        propCount: u,
      } = (function (g, C) {
        const y = window.getComputedStyle(g),
          S = Lr(y, `${zi}Delay`),
          f = Lr(y, `${zi}Duration`),
          A = ba(S, f),
          E = Lr(y, `${Rr}Delay`),
          _ = Lr(y, `${Rr}Duration`),
          O = ba(E, _);
        let q = null,
          k = 0,
          m = 0;
        return (
          (k = Math.max(A, O)),
          (q = k > 0 ? (A > O ? zi : Rr) : null),
          (m = q ? (q === zi ? f.length : _.length) : 0),
          { type: q, timeout: k, propCount: m }
        );
      })(s);
      return (
        !(!a || !l) &&
        new Promise((g) => {
          const C = `${a}end`,
            y = performance.now();
          let S = 0;
          const f = () => {
              s.removeEventListener(C, A), g();
            },
            A = (E) => {
              if (E.target === s) {
                if (
                  !(function (_) {
                    return [`${zi}end`, `${Rr}end`].includes(_.type);
                  })(E)
                )
                  throw new Error("Not a transition or animation event.");
                (performance.now() - y) / 1e3 < E.elapsedTime ||
                  (++S >= u && f());
              }
            };
          setTimeout(() => {
            S < u && f();
          }, l + 1),
            s.addEventListener(C, A);
        })
      );
    })(r)
  );
  n.filter(Boolean).length > 0
    ? await Promise.all(n)
    : e &&
      console.warn(
        `[swup] No CSS animation duration defined on elements matching \`${e}\``
      );
}
function Lr(i, e) {
  return (i[e] || "").split(", ");
}
function ba(i, e) {
  for (; i.length < e.length; ) i = i.concat(i);
  return Math.max(...e.map((t, n) => _a(t) + _a(i[n])));
}
function tu(i, e = {}, t = {}) {
  if (typeof i != "string")
    throw new Error("swup.navigate() requires a URL parameter");
  if (this.shouldIgnoreVisit(i, { el: t.el, event: t.event }))
    return void (window.location.href = i);
  const { url: n, hash: r } = ri.fromUrl(i);
  (this.visit = this.createVisit(vt({}, t, { to: n, hash: r }))),
    this.performNavigation(e);
}
async function nu(i = {}) {
  const e = this.visit,
    { el: t } = e.trigger;
  (i.referrer = i.referrer || this.currentPageUrl),
    i.animate === !1 && (e.animation.animate = !1),
    e.animation.animate || this.classes.clear();
  const n = i.history || t?.getAttribute("data-swup-history") || void 0;
  n && ["push", "replace"].includes(n) && (e.history.action = n);
  const r = i.animation || t?.getAttribute("data-swup-animation") || void 0;
  var s, a;
  r && (e.animation.name = r),
    typeof i.cache == "object"
      ? ((e.cache.read = (s = i.cache.read) != null ? s : e.cache.read),
        (e.cache.write = (a = i.cache.write) != null ? a : e.cache.write))
      : i.cache !== void 0 && (e.cache = { read: !!i.cache, write: !!i.cache }),
    delete i.cache;
  try {
    await this.hooks.call("visit:start", void 0);
    const l = this.hooks.call("page:load", { options: i }, async (C, y) => {
      let S;
      return (
        C.cache.read && (S = this.cache.get(C.to.url)),
        (y.page = S || (await this.fetchPage(C.to.url, y.options))),
        (y.cache = !!S),
        y.page
      );
    });
    if (!e.history.popstate) {
      const C = e.to.url + e.to.hash;
      e.history.action === "replace" || e.to.url === this.currentPageUrl
        ? Gi(C)
        : (this.currentHistoryIndex++,
          Vc(C, { index: this.currentHistoryIndex }));
    }
    if (((this.currentPageUrl = Un()), e.animation.wait)) {
      const { html: C } = await l;
      e.to.html = C;
    }
    const u = this.animatePageOut(),
      [g] = await Promise.all([l, u]);
    if (e.id !== this.visit.id) return;
    await this.renderPage(g),
      await this.animatePageIn(),
      await this.hooks.call("visit:end", void 0, () => this.classes.clear());
  } catch (l) {
    if (!l) return;
    console.error(l),
      (this.options.skipPopStateHandling = () => (
        (window.location.href = e.to.url + e.to.hash), !0
      )),
      window.history.go(-1);
  }
}
class Ta extends Error {
  constructor(e, t) {
    super(e),
      (this.url = void 0),
      (this.status = void 0),
      (this.name = "FetchError"),
      (this.url = t.url),
      (this.status = t.status);
  }
}
async function iu(i, e = {}) {
  i = ri.fromUrl(i).url;
  const t = vt({}, this.options.requestHeaders, e.headers);
  e = vt({}, e, { headers: t });
  const n = await this.hooks.call(
      "fetch:request",
      { url: i, options: e },
      (g, { url: C, options: y }) => fetch(C, y)
    ),
    { status: r, url: s } = n,
    a = await n.text();
  if (r === 500)
    throw (
      (this.hooks.call("fetch:error", { status: r, response: n, url: s }),
      new Ta(`Server error: ${s}`, { status: r, url: s }))
    );
  if (!a) throw new Ta(`Empty response: ${s}`, { status: r, url: s });
  const { url: l } = ri.fromUrl(s),
    u = { url: l, html: a };
  return (
    !this.visit.cache.write ||
      (e.method && e.method !== "GET") ||
      i !== l ||
      this.cache.set(u.url, u),
    u
  );
}
const ru = async function () {
    this.visit.animation.animate
      ? (await this.hooks.call("animation:out:start", void 0, (i) => {
          this.classes.add("is-changing", "is-leaving", "is-animating"),
            i.history.popstate && this.classes.add("is-popstate"),
            i.animation.name && this.classes.add(`to-${rl(i.animation.name)}`);
        }),
        await this.hooks.call(
          "animation:out:await",
          { skip: !1 },
          async (i, { skip: e }) => {
            e ||
              (await this.awaitAnimations({ selector: i.animation.selector }));
          }
        ),
        await this.hooks.call("animation:out:end", void 0))
      : await this.hooks.call("animation:skip", void 0);
  },
  su = function ({ html: i }, { containers: e } = this.options) {
    var t;
    const n = new DOMParser().parseFromString(i, "text/html"),
      r = ((t = n.querySelector("title")) == null ? void 0 : t.innerText) || "";
    document.title = r;
    const s = po('[data-swup-persist]:not([data-swup-persist=""])'),
      a = e
        .map((l) => {
          const u = document.querySelector(l),
            g = n.querySelector(l);
          return u && g
            ? (u.replaceWith(g), !0)
            : (u ||
                console.warn(
                  `[swup] Container missing in current document: ${l}`
                ),
              g ||
                console.warn(
                  `[swup] Container missing in incoming document: ${l}`
                ),
              !1);
        })
        .filter(Boolean);
    return (
      s.forEach((l) => {
        const u = l.getAttribute("data-swup-persist"),
          g = Zs(`[data-swup-persist="${u}"]`);
        g && g !== l && g.replaceWith(l);
      }),
      a.length === e.length
    );
  },
  ou = function () {
    const i = { behavior: "auto" },
      { target: e, reset: t } = this.visit.scroll,
      n = e ?? this.visit.to.hash;
    let r = !1;
    return (
      n &&
        (r = this.hooks.callSync(
          "scroll:anchor",
          { hash: n, options: i },
          (s, { hash: a, options: l }) => {
            const u = this.getAnchorElement(a);
            return u && u.scrollIntoView(l), !!u;
          }
        )),
      t &&
        !r &&
        (r = this.hooks.callSync(
          "scroll:top",
          { options: i },
          (s, { options: a }) => (
            window.scrollTo(vt({ top: 0, left: 0 }, a)), !0
          )
        )),
      r
    );
  },
  au = async function () {
    if (!this.visit.animation.animate) return;
    const i = this.hooks.call(
      "animation:in:await",
      { skip: !1 },
      async (e, { skip: t }) => {
        t || (await this.awaitAnimations({ selector: e.animation.selector }));
      }
    );
    await sl(),
      await this.hooks.call("animation:in:start", void 0, () => {
        this.classes.remove("is-animating");
      }),
      await i,
      await this.hooks.call("animation:in:end", void 0);
  },
  lu = async function (i) {
    const { url: e, html: t } = i;
    this.classes.remove("is-leaving"),
      this.isSameResolvedUrl(Un(), e) ||
        (Gi(e),
        (this.currentPageUrl = Un()),
        (this.visit.to.url = this.currentPageUrl)),
      this.visit.animation.animate && this.classes.add("is-rendering"),
      (this.visit.to.html = t),
      await this.hooks.call(
        "content:replace",
        { page: i },
        (n, { page: r }) => {
          if (!this.replaceContent(r, { containers: n.containers }))
            throw new Error("[swup] Container mismatch, aborting");
          n.animation.animate &&
            (this.classes.add("is-animating", "is-changing", "is-rendering"),
            n.animation.name && this.classes.add(`to-${rl(n.animation.name)}`));
        }
      ),
      await this.hooks.call("content:scroll", void 0, () =>
        this.scrollToContent()
      ),
      await this.hooks.call("page:view", {
        url: this.currentPageUrl,
        title: document.title,
      });
  },
  cu = function (i) {
    var e;
    if (((e = i), !!e?.isSwupPlugin)) {
      if (((i.swup = this), !i._checkRequirements || i._checkRequirements()))
        return (
          i._beforeMount && i._beforeMount(),
          i.mount(),
          this.plugins.push(i),
          this.plugins
        );
    } else console.error("Not a swup plugin instance", i);
  };
function uu(i) {
  const e = this.findPlugin(i);
  if (e)
    return (
      e.unmount(),
      e._afterUnmount && e._afterUnmount(),
      (this.plugins = this.plugins.filter((t) => t !== e)),
      this.plugins
    );
  console.error("No such plugin", e);
}
function fu(i) {
  return this.plugins.find(
    (e) => e === i || e.name === i || e.name === `Swup${String(i)}`
  );
}
function hu(i) {
  if (typeof this.options.resolveUrl != "function")
    return (
      console.warn("[swup] options.resolveUrl expects a callback function."), i
    );
  const e = this.options.resolveUrl(i);
  return e && typeof e == "string"
    ? e.startsWith("//") || e.startsWith("http")
      ? (console.warn(
          "[swup] options.resolveUrl needs to return a relative url"
        ),
        i)
      : e
    : (console.warn("[swup] options.resolveUrl needs to return a url"), i);
}
function du(i, e) {
  return this.resolveUrl(i) === this.resolveUrl(e);
}
const pu = {
  animateHistoryBrowsing: !1,
  animationSelector: '[class*="transition-"]',
  animationScope: "html",
  cache: !0,
  containers: ["#swup"],
  ignoreVisit: (i, { el: e } = {}) =>
    !(e == null || !e.closest("[data-no-swup]")),
  linkSelector: "a[href]",
  linkToSelf: "scroll",
  plugins: [],
  resolveUrl: (i) => i,
  requestHeaders: {
    "X-Requested-With": "swup",
    Accept: "text/html, application/xhtml+xml",
  },
  skipPopStateHandling: (i) => {
    var e;
    return ((e = i.state) == null ? void 0 : e.source) !== "swup";
  },
};
class gu {
  constructor(e = {}) {
    var t, n;
    (this.version = "4.3.4"),
      (this.options = void 0),
      (this.defaults = pu),
      (this.plugins = []),
      (this.visit = void 0),
      (this.cache = void 0),
      (this.hooks = void 0),
      (this.classes = void 0),
      (this.currentPageUrl = Un()),
      (this.currentHistoryIndex = void 0),
      (this.clickDelegate = void 0),
      (this.use = cu),
      (this.unuse = uu),
      (this.findPlugin = fu),
      (this.log = () => {}),
      (this.navigate = tu),
      (this.performNavigation = nu),
      (this.createVisit = Qc),
      (this.delegateEvent = Xc),
      (this.fetchPage = iu),
      (this.awaitAnimations = eu),
      (this.renderPage = lu),
      (this.replaceContent = su),
      (this.animatePageIn = au),
      (this.animatePageOut = ru),
      (this.scrollToContent = ou),
      (this.getAnchorElement = Jc),
      (this.getCurrentUrl = Un),
      (this.resolveUrl = hu),
      (this.isSameResolvedUrl = du),
      (this.options = vt({}, this.defaults, e)),
      (this.handleLinkClick = this.handleLinkClick.bind(this)),
      (this.handlePopState = this.handlePopState.bind(this)),
      (this.cache = new jc(this)),
      (this.classes = new Gc(this)),
      (this.hooks = new Zc(this)),
      (this.visit = this.createVisit({ to: "" })),
      (this.currentHistoryIndex =
        (t = (n = history.state) == null ? void 0 : n.index) != null ? t : 1),
      this.checkRequirements() && this.enable();
  }
  checkRequirements() {
    return (
      typeof Promise < "u" || (console.warn("Promise is not supported"), !1)
    );
  }
  async enable() {
    var e;
    const { linkSelector: t } = this.options;
    (this.clickDelegate = this.delegateEvent(t, "click", this.handleLinkClick)),
      window.addEventListener("popstate", this.handlePopState),
      this.options.animateHistoryBrowsing &&
        (window.history.scrollRestoration = "manual"),
      this.options.plugins.forEach((n) => this.use(n)),
      ((e = history.state) == null ? void 0 : e.source) !== "swup" &&
        Gi(null, { index: this.currentHistoryIndex }),
      await sl(),
      await this.hooks.call("enable", void 0, () => {
        document.documentElement.classList.add("swup-enabled");
      });
  }
  async destroy() {
    this.clickDelegate.destroy(),
      window.removeEventListener("popstate", this.handlePopState),
      this.cache.clear(),
      this.options.plugins.forEach((e) => this.unuse(e)),
      await this.hooks.call("disable", void 0, () => {
        document.documentElement.classList.remove("swup-enabled");
      }),
      this.hooks.clear();
  }
  shouldIgnoreVisit(e, { el: t, event: n } = {}) {
    const { origin: r, url: s, hash: a } = ri.fromUrl(e);
    return (
      r !== window.location.origin ||
      !(!t || !this.triggerWillOpenNewWindow(t)) ||
      !!this.options.ignoreVisit(s + a, { el: t, event: n })
    );
  }
  handleLinkClick(e) {
    const t = e.delegateTarget,
      { href: n, url: r, hash: s } = ri.fromElement(t);
    this.shouldIgnoreVisit(n, { el: t, event: e }) ||
      ((this.visit = this.createVisit({ to: r, hash: s, el: t, event: e })),
      e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
        ? this.hooks.call("link:newtab", { href: n })
        : e.button === 0 &&
          this.hooks.callSync("link:click", { el: t, event: e }, () => {
            var a;
            const l = (a = this.visit.from.url) != null ? a : "";
            e.preventDefault(),
              r && r !== l
                ? this.isSameResolvedUrl(r, l) || this.performNavigation()
                : s
                ? this.hooks.callSync("link:anchor", { hash: s }, () => {
                    Gi(r + s), this.scrollToContent();
                  })
                : this.hooks.callSync("link:self", void 0, () =>
                    this.options.linkToSelf === "navigate"
                      ? this.performNavigation()
                      : (Gi(r), this.scrollToContent())
                  );
          }));
  }
  handlePopState(e) {
    var t, n, r, s;
    const a =
      (t = (n = e.state) == null ? void 0 : n.url) != null ? t : location.href;
    if (
      this.options.skipPopStateHandling(e) ||
      this.isSameResolvedUrl(Un(), this.currentPageUrl)
    )
      return;
    const { url: l, hash: u } = ri.fromUrl(a);
    (this.visit = this.createVisit({ to: l, hash: u, event: e })),
      (this.visit.history.popstate = !0);
    const g = (r = (s = e.state) == null ? void 0 : s.index) != null ? r : 0;
    g &&
      g !== this.currentHistoryIndex &&
      ((this.visit.history.direction =
        g - this.currentHistoryIndex > 0 ? "forwards" : "backwards"),
      (this.currentHistoryIndex = g)),
      (this.visit.animation.animate = !1),
      (this.visit.scroll.reset = !1),
      (this.visit.scroll.target = !1),
      this.options.animateHistoryBrowsing &&
        ((this.visit.animation.animate = !0), (this.visit.scroll.reset = !0)),
      this.hooks.callSync("history:popstate", { event: e }, () => {
        this.performNavigation();
      });
  }
  triggerWillOpenNewWindow(e) {
    return !!e.matches('[download], [target="_blank"]');
  }
}
function Qi() {
  return (
    (Qi = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
          }
          return i;
        }),
    Qi.apply(this, arguments)
  );
}
const Ea = (i) =>
  String(i)
    .split(".")
    .map((e) => String(parseInt(e || "0", 10)))
    .concat(["0", "0"])
    .slice(0, 3)
    .join(".");
let ur = class {
  constructor() {
    (this.isSwupPlugin = !0),
      (this.swup = void 0),
      (this.version = void 0),
      (this.requires = {}),
      (this.handlersToUnregister = []);
  }
  mount() {}
  unmount() {
    this.handlersToUnregister.forEach((e) => e()),
      (this.handlersToUnregister = []);
  }
  _beforeMount() {
    if (!this.name)
      throw new Error(
        "You must define a name of plugin when creating a class."
      );
  }
  _afterUnmount() {}
  _checkRequirements() {
    return (
      typeof this.requires != "object" ||
        Object.entries(this.requires).forEach(([e, t]) => {
          if (
            !(function (n, r, s) {
              const a = (function (l, u) {
                var g;
                if (l === "swup") return (g = u.version) != null ? g : "";
                {
                  var C;
                  const y = u.findPlugin(l);
                  return (C = y?.version) != null ? C : "";
                }
              })(n, s);
              return (
                !!a &&
                ((l, u) =>
                  u.every((g) => {
                    const [, C, y] = g.match(/^([\D]+)?(.*)$/) || [];
                    var S, f;
                    return ((A, E) => {
                      const _ = {
                        "": (O) => O === 0,
                        ">": (O) => O > 0,
                        ">=": (O) => O >= 0,
                        "<": (O) => O < 0,
                        "<=": (O) => O <= 0,
                      };
                      return (_[E] || _[""])(A);
                    })(
                      ((f = y),
                      (S = Ea((S = l))),
                      (f = Ea(f)),
                      S.localeCompare(f, void 0, { numeric: !0 })),
                      C || ">="
                    );
                  }))(a, r)
              );
            })(e, (t = Array.isArray(t) ? t : [t]), this.swup)
          ) {
            const n = `${e} ${t.join(", ")}`;
            throw new Error(
              `Plugin version mismatch: ${this.name} requires ${n}`
            );
          }
        }),
      !0
    );
  }
  on(e, t, n = {}) {
    var r;
    t =
      !(r = t).name.startsWith("bound ") || r.hasOwnProperty("prototype")
        ? t.bind(this)
        : t;
    const s = this.swup.hooks.on(e, t, n);
    return this.handlersToUnregister.push(s), s;
  }
  once(e, t, n = {}) {
    return this.on(e, t, Qi({}, n, { once: !0 }));
  }
  before(e, t, n = {}) {
    return this.on(e, t, Qi({}, n, { before: !0 }));
  }
  replace(e, t, n = {}) {
    return this.on(e, t, Qi({}, n, { replace: !0 }));
  }
  off(e, t) {
    return this.swup.hooks.off(e, t);
  }
};
function Js() {
  return (
    (Js = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
          }
          return i;
        }),
    Js.apply(this, arguments)
  );
}
function Aa(i) {
  return i.localName !== "title" && !i.matches("[data-swup-theme]");
}
function Ca(i, e) {
  return i.outerHTML === e.outerHTML;
}
function mu(i) {
  return i.matches("link[rel=stylesheet][href]");
}
class vu extends ur {
  constructor(e = {}) {
    var t;
    super(),
      (t = this),
      (this.name = "SwupHeadPlugin"),
      (this.requires = { swup: ">=4" }),
      (this.defaults = {
        persistTags: !1,
        persistAssets: !1,
        awaitAssets: !1,
        timeout: 3e3,
      }),
      (this.options = void 0),
      (this.updateHead = async function (n, { page: { html: r } }) {
        const s = new DOMParser().parseFromString(r, "text/html"),
          { removed: a, added: l } = (function (
            y,
            S,
            { shouldPersist: f = () => !1 } = {}
          ) {
            const A = Array.from(y.children),
              E = Array.from(S.children),
              _ =
                ((O = A),
                E.reduce(
                  (k, m, h) => (
                    O.some((d) => Ca(m, d)) || k.push({ el: m, index: h }), k
                  ),
                  []
                ));
            var O;
            const q = (function (k, m) {
              return k.reduce(
                (h, d) => (m.some((b) => Ca(d, b)) || h.push({ el: d }), h),
                []
              );
            })(A, E);
            return (
              q
                .reverse()
                .filter(({ el: k }) => Aa(k))
                .filter(({ el: k }) => !f(k))
                .forEach(({ el: k }) => y.removeChild(k)),
              _.filter(({ el: k }) => Aa(k)).forEach(
                ({ el: k, index: m = 0 }) => {
                  y.insertBefore(k, y.children[m + 1] || null);
                }
              ),
              {
                removed: q.map(({ el: k }) => k),
                added: _.map(({ el: k }) => k),
              }
            );
          })(document.head, s.head, {
            shouldPersist: (y) => t.isPersistentTag(y),
          });
        t.swup.log(`Removed ${a.length} / added ${l.length} tags in head`);
        const u =
          (g = document.documentElement).lang !== (C = s.documentElement).lang
            ? ((g.lang = C.lang), g.lang)
            : null;
        var g, C;
        if (
          (u && t.swup.log(`Updated lang attribute: ${u}`),
          t.options.awaitAssets)
        ) {
          const y = (function (S, f = 0) {
            return S.filter(mu).map((A) =>
              (function (E, _ = 0) {
                const O = (q) => {
                  (({ href: k }) =>
                    Array.from(document.styleSheets)
                      .map(({ href: m }) => m)
                      .includes(k))(E)
                    ? q()
                    : setTimeout(() => O(q), 10);
                };
                return new Promise((q) => {
                  O(q), _ > 0 && setTimeout(q, _);
                });
              })(A, f)
            );
          })(l, t.options.timeout);
          y.length &&
            (t.swup.log(`Waiting for ${y.length} assets to load`),
            await Promise.all(y));
        }
      }),
      (this.options = Js({}, this.defaults, e)),
      this.options.persistAssets &&
        !this.options.persistTags &&
        (this.options.persistTags = "link[rel=stylesheet], script[src], style");
  }
  mount() {
    this.before("content:replace", this.updateHead);
  }
  isPersistentTag(e) {
    const { persistTags: t } = this.options;
    return typeof t == "function"
      ? t(e)
      : typeof t == "string"
      ? e.matches(t)
      : !!t;
  }
}
function eo() {
  return (
    (eo = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
          }
          return i;
        }),
    eo.apply(this, arguments)
  );
}
class yu extends ur {
  constructor(e = {}) {
    super(),
      (this.name = "SwupDebugPlugin"),
      (this.requires = { swup: ">=4" }),
      (this.defaults = { globalInstance: !1 }),
      (this.options = eo({}, this.defaults, e));
  }
  mount() {
    const e = this.swup;
    (this.originalSwupLog = e.log),
      (e.log = this.log),
      this.options.globalInstance && (window.swup = e),
      document.getElementsByTagName("title").length ||
        this.warn(
          "This page doesn't have a title tag. It is required on every page."
        ),
      (this.originalSwupHookCall = e.hooks.call.bind(e.hooks)),
      (this.originalSwupHookCallSync = e.hooks.callSync.bind(e.hooks)),
      (e.hooks.call = this.callHook.bind(this)),
      (e.hooks.callSync = this.callHookSync.bind(this));
  }
  unmount() {
    super.unmount(),
      (this.swup.log = this.originalSwupLog),
      (this.swup.hooks.call = this.originalSwupHookCall),
      (this.swup.hooks.callSync = this.originalSwupHookCallSync),
      this.options.globalInstance && (window.swup = null);
  }
  logHook(e, t) {
    console.groupCollapsed("%cswup:%c" + e, "color: #343434", "color: #009ACD"),
      console.log(t),
      console.groupEnd();
  }
  callHook(e, t, ...n) {
    return this.logHook(e, t), this.originalSwupHookCall(e, t, ...n);
  }
  callHookSync(e, t, ...n) {
    return this.logHook(e, t), this.originalSwupHookCallSync(e, t, ...n);
  }
  log(e, t) {
    if (t) {
      console.groupCollapsed(e);
      for (let n in t) console.log(t[n]);
      console.groupEnd();
    } else console.log(e + "%c", "color: #009ACD");
  }
  warn(e) {
    console.warn(`[swup debug plugin] ${e}`);
  }
  error(e) {
    console.error(`[swup debug plugin] ${e}`);
  }
}
function to() {
  return (
    (to = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
          }
          return i;
        }),
    to.apply(this, arguments)
  );
}
class wu extends ur {
  constructor(e = {}) {
    super(),
      (this.name = "SwupScriptsPlugin"),
      (this.requires = { swup: ">=4" }),
      (this.defaults = { head: !0, body: !0, optin: !1 }),
      (this.options = to({}, this.defaults, e));
  }
  mount() {
    this.on("content:replace", this.runScripts);
  }
  runScripts() {
    const { head: e, body: t, optin: n } = this.options,
      r = this.getScope({ head: e, body: t });
    if (!r) return;
    const s = Array.from(
      r.querySelectorAll(
        n
          ? "script[data-swup-reload-script]"
          : "script:not([data-swup-ignore-script])"
      )
    );
    s.forEach((a) => this.runScript(a)),
      this.swup.log(`Executed ${s.length} scripts.`);
  }
  runScript(e) {
    const t = document.createElement("script");
    for (const { name: n, value: r } of e.attributes) t.setAttribute(n, r);
    return (t.textContent = e.textContent), e.replaceWith(t), t;
  }
  getScope({ head: e, body: t }) {
    return e && t ? document : e ? document.head : t ? document.body : null;
  }
}
function is() {
  return (
    (is = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
          }
          return i;
        }),
    is.apply(this, arguments)
  );
}
class Su extends ur {
  constructor(e) {
    var t;
    super(),
      (t = this),
      (this.name = "SwupJsPlugin"),
      (this.requires = { swup: ">=4" }),
      (this.defaults = {
        animations: [
          { from: "(.*)", to: "(.*)", out: (n) => n(), in: (n) => n() },
        ],
        matchOptions: {},
      }),
      (this.options = void 0),
      (this.animations = []),
      (this.awaitInAnimation = async function (n, { skip: r }) {
        if (r) return;
        const s = t.getBestAnimationMatch(n);
        await t.createAnimationPromise(s, n, "in");
      }),
      (this.awaitOutAnimation = async function (n, { skip: r }) {
        if (r) return;
        const s = t.getBestAnimationMatch(n);
        await t.createAnimationPromise(s, n, "out");
      }),
      Array.isArray(e) && (e = { animations: e }),
      (this.options = is({}, this.defaults, e)),
      (this.animations = this.compileAnimations());
  }
  mount() {
    this.replace("animation:in:await", this.awaitInAnimation, { priority: -1 }),
      this.replace("animation:out:await", this.awaitOutAnimation, {
        priority: -1,
      });
  }
  compileAnimations() {
    return this.options.animations.map((e) =>
      is({}, e, {
        matchesFrom: wa(e.from, this.options.matchOptions),
        matchesTo: wa(e.to, this.options.matchOptions),
      })
    );
  }
  createAnimationPromise(e, t, n) {
    const r = e ? e[n] : null;
    if (!e || !r) return console.warn("No animation found"), Promise.resolve();
    const s = e.matchesFrom(t.from.url),
      a = e.matchesTo(t.to.url),
      l = {
        visit: t,
        direction: n,
        from: { url: t.from.url, pattern: e.from, params: s ? s.params : {} },
        to: { url: t.to.url, pattern: e.to, params: a ? a.params : {} },
      };
    return new Promise((u) => {
      const g = r(() => u(), l);
      go(g) && g.then(u);
    });
  }
  getBestAnimationMatch(e) {
    let t = 0;
    return this.animations.reduceRight((n, r) => {
      const s = this.rateAnimation(e, r);
      return s >= t ? ((t = s), r) : n;
    }, null);
  }
  rateAnimation(e, t) {
    const n = e.to.url,
      r = e.animation.name;
    let s = 0;
    const a = t.matchesFrom(e.from.url);
    return (
      a && (s += 1), t.matchesTo(n) && (s += 1), a && t.to === r && (s += 2), s
    );
  }
}
class _u extends ur {
  constructor(...e) {
    super(...e), (this.name = "SwupGtmPlugin");
  }
  mount() {
    this.on("page:view", this.trackPageview);
  }
  trackPageview() {
    if (typeof window.dataLayer != "object")
      return void console.warn("GTM is not loaded on the page");
    const e = window.location.pathname + window.location.search,
      t = document.title;
    window.dataLayer.push({
      event: "VirtualPageview",
      virtualPageURL: e,
      virtualPageTitle: t,
    }),
      this.swup.log(`GTM page view: ${e}`);
  }
}
var ol = { exports: {} };
/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/ (function (i, e) {
  (function (t, n) {
    i.exports = n();
  })(el, function () {
    var t,
      n,
      r,
      s,
      a = "src",
      l = "srcset";
    return function (P) {
      if (!document.querySelectorAll) {
        var L = document.createStyleSheet();
        document.querySelectorAll = function (N, J, te, p, I) {
          for (
            I = document.all,
              J = [],
              N = N.replace(/\[for\b/gi, "[htmlFor").split(","),
              te = N.length;
            te--;

          ) {
            for (L.addRule(N[te], "k:v"), p = I.length; p--; )
              I[p].currentStyle.k && J.push(I[p]);
            L.removeRule(0);
          }
          return J;
        };
      }
      var R = this,
        oe = (R._util = {});
      (oe.elements = []),
        (oe.destroyed = !0),
        (R.options = P || {}),
        (R.options.error = R.options.error || !1),
        (R.options.offset = R.options.offset || 100),
        (R.options.root = R.options.root || document),
        (R.options.success = R.options.success || !1),
        (R.options.selector = R.options.selector || ".b-lazy"),
        (R.options.separator = R.options.separator || "|"),
        (R.options.containerClass = R.options.container),
        (R.options.container = R.options.containerClass
          ? document.querySelectorAll(R.options.containerClass)
          : !1),
        (R.options.errorClass = R.options.errorClass || "b-error"),
        (R.options.breakpoints = R.options.breakpoints || !1),
        (R.options.loadInvisible = R.options.loadInvisible || !1),
        (R.options.successClass = R.options.successClass || "b-loaded"),
        (R.options.validateDelay = R.options.validateDelay || 25),
        (R.options.saveViewportOffsetDelay =
          R.options.saveViewportOffsetDelay || 50),
        (R.options.srcset = R.options.srcset || "data-srcset"),
        (R.options.src = t = R.options.src || "data-src"),
        (s = Element.prototype.closest),
        (r = window.devicePixelRatio > 1),
        (n = {}),
        (n.top = 0 - R.options.offset),
        (n.left = 0 - R.options.offset),
        (R.revalidate = function () {
          u(R);
        }),
        (R.load = function (N, J) {
          var te = this.options;
          N && N.length === void 0
            ? S(N, J, te)
            : H(N, function (p) {
                S(p, J, te);
              });
        }),
        (R.destroy = function () {
          var N = R._util;
          R.options.container &&
            H(R.options.container, function (J) {
              j(J, "scroll", N.validateT);
            }),
            j(window, "scroll", N.validateT),
            j(window, "resize", N.validateT),
            j(window, "resize", N.saveViewportOffsetT),
            (N.count = 0),
            (N.elements.length = 0),
            (N.destroyed = !0);
        }),
        (oe.validateT = ie(
          function () {
            g(R);
          },
          R.options.validateDelay,
          R
        )),
        (oe.saveViewportOffsetT = ie(
          function () {
            b(R.options.offset);
          },
          R.options.saveViewportOffsetDelay,
          R
        )),
        b(R.options.offset),
        H(R.options.breakpoints, function (N) {
          if (N.width >= window.screen.width) return (t = N.src), !1;
        }),
        setTimeout(function () {
          u(R);
        });
    };
    function u(v) {
      var P = v._util;
      (P.elements = d(v.options)),
        (P.count = P.elements.length),
        P.destroyed &&
          ((P.destroyed = !1),
          v.options.container &&
            H(v.options.container, function (L) {
              M(L, "scroll", P.validateT);
            }),
          M(window, "resize", P.saveViewportOffsetT),
          M(window, "resize", P.validateT),
          M(window, "scroll", P.validateT)),
        g(v);
    }
    function g(v) {
      for (var P = v._util, L = 0; L < P.count; L++) {
        var R = P.elements[L];
        (C(R, v.options) || m(R, v.options.successClass)) &&
          (v.load(R), P.elements.splice(L, 1), P.count--, L--);
      }
      P.count === 0 && v.destroy();
    }
    function C(v, P) {
      var L = v.getBoundingClientRect();
      if (P.container && s) {
        var R = v.closest(P.containerClass);
        if (R) {
          var oe = R.getBoundingClientRect();
          if (y(oe, n)) {
            var N = oe.top - P.offset,
              J = oe.right + P.offset,
              te = oe.bottom + P.offset,
              p = oe.left - P.offset,
              I = {
                top: N > n.top ? N : n.top,
                right: J < n.right ? J : n.right,
                bottom: te < n.bottom ? te : n.bottom,
                left: p > n.left ? p : n.left,
              };
            return y(L, I);
          } else return !1;
        }
      }
      return y(L, n);
    }
    function y(v, P) {
      return (
        v.right >= P.left &&
        v.bottom >= P.top &&
        v.left <= P.right &&
        v.top <= P.bottom
      );
    }
    function S(v, P, L) {
      if (
        !m(v, L.successClass) &&
        (P || L.loadInvisible || (v.offsetWidth > 0 && v.offsetHeight > 0))
      ) {
        var R = O(v, t) || O(v, L.src);
        if (R) {
          var oe = R.split(L.separator),
            N = oe[r && oe.length > 1 ? 1 : 0],
            J = O(v, L.srcset),
            te = k(v, "img"),
            p = v.parentNode,
            I = p && k(p, "picture");
          if (te || v.src === void 0) {
            var Qe = new Image(),
              Ct = function () {
                L.error && L.error(v, "invalid"),
                  h(v, L.errorClass),
                  j(Qe, "error", Ct),
                  j(Qe, "load", ne);
              },
              ne = function () {
                te
                  ? I || E(v, N, J)
                  : (v.style.backgroundImage = 'url("' + N + '")'),
                  f(v, L),
                  j(Qe, "load", ne),
                  j(Qe, "error", Ct);
              };
            I &&
              ((Qe = v),
              H(p.getElementsByTagName("source"), function (W) {
                A(W, l, L.srcset);
              })),
              M(Qe, "error", Ct),
              M(Qe, "load", ne),
              E(Qe, N, J);
          } else (v.src = N), f(v, L);
        } else
          k(v, "video")
            ? (H(v.getElementsByTagName("source"), function (W) {
                A(W, a, L.src);
              }),
              v.load(),
              f(v, L))
            : (L.error && L.error(v, "missing"), h(v, L.errorClass));
      }
    }
    function f(v, P) {
      h(v, P.successClass),
        P.success && P.success(v),
        q(v, P.src),
        q(v, P.srcset),
        H(P.breakpoints, function (L) {
          q(v, L.src);
        });
    }
    function A(v, P, L) {
      var R = O(v, L);
      R && (_(v, P, R), q(v, L));
    }
    function E(v, P, L) {
      L && _(v, l, L), (v.src = P);
    }
    function _(v, P, L) {
      v.setAttribute(P, L);
    }
    function O(v, P) {
      return v.getAttribute(P);
    }
    function q(v, P) {
      v.removeAttribute(P);
    }
    function k(v, P) {
      return v.nodeName.toLowerCase() === P;
    }
    function m(v, P) {
      return (" " + v.className + " ").indexOf(" " + P + " ") !== -1;
    }
    function h(v, P) {
      m(v, P) || (v.className += " " + P);
    }
    function d(v) {
      for (
        var P = [], L = v.root.querySelectorAll(v.selector), R = L.length;
        R--;
        P.unshift(L[R])
      );
      return P;
    }
    function b(v) {
      (n.bottom =
        (window.innerHeight || document.documentElement.clientHeight) + v),
        (n.right =
          (window.innerWidth || document.documentElement.clientWidth) + v);
    }
    function M(v, P, L) {
      v.attachEvent
        ? v.attachEvent && v.attachEvent("on" + P, L)
        : v.addEventListener(P, L, { capture: !1, passive: !0 });
    }
    function j(v, P, L) {
      v.detachEvent
        ? v.detachEvent && v.detachEvent("on" + P, L)
        : v.removeEventListener(P, L, { capture: !1, passive: !0 });
    }
    function H(v, P) {
      if (v && P)
        for (var L = v.length, R = 0; R < L && P(v[R], R) !== !1; R++);
    }
    function ie(v, P, L) {
      var R = 0;
      return function () {
        var oe = +new Date();
        oe - R < P || ((R = oe), v.apply(L, arguments));
      };
    }
  });
})(ol);
var bu = ol.exports;
const Tu = cs(bu);
function no(i, e) {
  let t;
  return (...n) => {
    const r = this;
    clearTimeout(t), (t = setTimeout(() => i.apply(r, n), e));
  };
}
class Eu {
  constructor() {
    (this.DOM = {
      nav: document.querySelector(".c--nav-a"),
      navLink: document.querySelectorAll(".c--nav-a a"),
      burger: document.querySelector(".c--burger-a"),
      banner: document.querySelector(".g--banner-01"),
      header: document.querySelector(".c--header-a"),
      sticky: document.querySelector(".js--header-sticky"),
    }),
      (this.activeClasses = {
        burger: "c--burger-a--is-active",
        nav: "c--nav-a--is-active",
        stickyHidden: "c--sticky-b--is--hidden",
      }),
      (this.canPlay = !0),
      (this.lastScrollTop = 0),
      this.init(),
      this.events();
  }
  init() {
    this.checkNavbar();
  }
  events() {
    window.addEventListener(
      "resize",
      no((e) => {
        this.checkNavbar();
      }, 500)
    ),
      window.addEventListener(
        "resize",
        no((e) => {
          this.stickykNavbar();
        }, 500)
      ),
      window.addEventListener("scroll", this.stickykNavbar.bind(this)),
      this.DOM.burger.addEventListener("click", (e) => {
        e.preventDefault(), this.toggleBurgerAndExpandNavbar();
      });
  }
  toggleBurgerAndExpandNavbar() {
    if (Gs(this.DOM.burger, this.activeClasses.burger)) {
      if (this.canPlay) {
        var e = it.timeline({
          defaults: { duration: 0.6, ease: "power2.out" },
          onStart: () => {
            (this.canPlay = !1),
              Si(this.DOM.burger, this.activeClasses.burger),
              (this.DOM.nav.style.pointerEvents = "none");
          },
          onComplete: () => {
            it.delayedCall(0.1, () => {
              this.canPlay = !0;
            });
          },
        });
        e.to(".c--nav-a__ft-items__wrapper__item", {
          stagger: { amount: 0.5, from: "end" },
          opacity: 0,
        }),
          e.to(".c--nav-a__ft-items", { opacity: 0 }),
          e.to(".c--nav-a__bg-items", { opacity: 0 });
      }
    } else if (this.canPlay) {
      var t = it.timeline({
        defaults: { duration: 0.3, ease: "power2.out" },
        onStart: () => {
          (this.canPlay = !1),
            wi(this.DOM.burger, this.activeClasses.burger),
            $e(this.DOM.nav, [{ pointerEvents: "all" }]);
        },
        onComplete: () => {
          it.delayedCall(0.1, () => {
            this.canPlay = !0;
          });
        },
      });
      t.to(".c--nav-a__bg-items", { opacity: 1 }),
        t.to(".c--nav-a__ft-items", { opacity: 1 }),
        t.to(".c--nav-a__ft-items__wrapper__item", {
          stagger: 0.05,
          scale: 1,
          opacity: 1,
          ease: "power2.in",
        });
    }
  }
  toggleMenu() {
    this.DOM.burger.classList.contains(this.ActiveClasses.burgerActive)
      ? (Si(this.DOM.burger, this.ActiveClasses.burgerActive),
        Si(this.DOM.nav, this.ActiveClasses.navActive),
        this.DOM.navLink.forEach((e, t) => {
          e.setAttribute("tabindex", -1);
        }))
      : (wi(this.DOM.burger, this.ActiveClasses.burgerActive),
        wi(this.DOM.nav, this.ActiveClasses.navActive),
        this.DOM.navLink.forEach((e, t) => {
          e.removeAttribute("tabindex");
        }));
  }
  checkNavbar() {
    let e = this.DOM.banner,
      t = e ? e.offsetHeight : 0;
    const n = Math.max(
        this.DOM.header.offsetHeight + t,
        this.DOM.header.offsetHeight
      ),
      s = window.innerHeight - n;
    $e(this.DOM.nav, [{ top: n }]), $e(this.DOM.nav, [{ height: s }]);
  }
  stickykNavbar() {
    let e = window.scrollY || document.documentElement.scrollTop;
    e > 300 && !Gs(this.DOM.burger, this.activeClasses.burger)
      ? (wi(this.DOM.sticky, this.activeClasses.stickyHidden),
        e > this.lastScrollTop
          ? wi(this.DOM.sticky, this.activeClasses.stickyHidden)
          : Si(this.DOM.sticky, this.activeClasses.stickyHidden))
      : Si(this.DOM.sticky, this.activeClasses.stickyHidden),
      (this.lastScrollTop = e <= 0 ? 0 : e);
  }
}
var rs =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (rs =
          Object.assign ||
          function (i) {
            for (var e, t = 1, n = arguments.length; t < n; t++) {
              e = arguments[t];
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
            }
            return i;
          }),
        rs.apply(this, arguments)
      );
    },
  Fs = function () {
    return (
      typeof window < "u" &&
      !!window.document &&
      !!window.document.createElement
    );
  },
  Au = (function () {
    function i() {
      var e = this;
      (this.handleWheel = function (t) {
        t.preventDefault();
      }),
        (this.handleScroll = function () {
          window.scrollTo.apply(window, e.lockToScrollPos);
        }),
        (this.handleKeydown = function (t) {
          var n = e.options.keyboardKeys;
          ["INPUT", "TEXTAREA"].includes(t.target.tagName) &&
            (n = n.filter(function (r) {
              return !e.options.authorizedInInputs.includes(r);
            })),
            n.includes(t.keyCode) && t.preventDefault();
        }),
        (this.element = null),
        (this.lockToScrollPos = [0, 0]),
        (this.options = {
          authorizedInInputs: [32, 37, 38, 39, 40],
          disableKeys: !0,
          disableScroll: !0,
          disableWheel: !0,
          keyboardKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
        }),
        Fs() && (this.element = document.scrollingElement);
    }
    return (
      (i.prototype.on = function (e, t) {
        var n, r, s, a;
        if (Fs()) {
          (this.element = e || this.element),
            (this.options = rs(rs({}, this.options), t));
          var l = this.options,
            u = l.disableKeys,
            g = l.disableScroll,
            C = l.disableWheel;
          C &&
            (document.addEventListener("wheel", this.handleWheel, {
              passive: !1,
            }),
            document.addEventListener("touchmove", this.handleWheel, {
              passive: !1,
            })),
            g &&
              ((this.lockToScrollPos = [
                (r =
                  (n = this.element) === null || n === void 0
                    ? void 0
                    : n.scrollLeft) !== null && r !== void 0
                  ? r
                  : 0,
                (a =
                  (s = this.element) === null || s === void 0
                    ? void 0
                    : s.scrollTop) !== null && a !== void 0
                  ? a
                  : 0,
              ]),
              document.addEventListener("scroll", this.handleScroll, {
                passive: !1,
              })),
            u &&
              document.addEventListener("keydown", this.handleKeydown, {
                passive: !1,
              });
        }
      }),
      (i.prototype.off = function () {
        Fs() &&
          (document.removeEventListener("wheel", this.handleWheel),
          document.removeEventListener("touchmove", this.handleWheel),
          document.removeEventListener("scroll", this.handleScroll),
          document.removeEventListener("keydown", this.handleKeydown));
      }),
      i
    );
  })();
const xa = new Au();
class Cu {
  constructor() {}
  init() {}
  stopCustomScroll() {
    xa.on();
  }
  playCustomScroll() {
    xa.off();
  }
}
class xu {
  constructor() {
    return (
      (this.DOM = { transition: document.querySelector(".c--transition-a") }),
      this.init()
    );
  }
  init() {
    var e = it.timeline({
      onComplete: () => {
        window.customScroll &&
          setTimeout(() => {
            window.customScroll.playCustomScroll(),
              $e(document.querySelector("body"), [{ height: "auto" }]),
              $e(document.querySelector("body"), [{ overflow: "initial" }]);
          }, 100);
      },
    });
    return e.to(this.DOM.transition, { duration: 0.3, x: "-100%" }), e;
  }
}
class ku {
  constructor() {
    return (
      (this.DOM = { transition: document.querySelector(".c--transition-a") }),
      this.init()
    );
  }
  init() {
    var e = it.timeline();
    return (
      e.to(this.DOM.transition, { duration: 0.3, x: 0, delay: 0.3 }),
      it.set(this.DOM.transition, { x: "100%" }),
      e
    );
  }
}
const Mu = [
  {
    from: "(.*)",
    to: "(.*)",
    in: async (i, e) => {
      if (!window.lib.preloadImages) {
        const { preloadImages: r } = await Ci(
          () => import("./index.3843cdc3.js"),
          ["_hej/index.3843cdc3.js", "_hej/_commonjsHelpers.de833af9.js"]
        );
        window.lib.preloadImages = r;
      }
      await window.lib.preloadImages("img");
      const t = document.querySelector(".js--vue");
      if (document.querySelector(".js--vue")) {
        const { digElement: r } = await Ci(
          () => import("./index.12d62e94.js"),
          [
            "_hej/index.12d62e94.js",
            "_hej/main.js",
            "_hej/preload-helper.cf010ec4.js",
            "_hej/index.4db78ffb.js",
            "_hej/_commonjsHelpers.de833af9.js",
          ]
        );
        (window.lib.digElement = r),
          await r({
            element: t,
            search: { type: "hasChildren" },
            intervalFrequency: 300,
            timer: 5e3,
          }),
          await Ac(200);
      }
      if (document.querySelector(".js--lottie-data")) {
        const { preloadLotties: r } = await Ci(
          () => import("./index.e609e10f.js"),
          ["_hej/index.e609e10f.js", "_hej/preload-helper.cf010ec4.js"]
        );
        (window.lib.preloadLotties = r), await r({});
      }
      var n = it.timeline({ onComplete: i });
      n.add(new xu()),
        document.querySelector(".c--hero-grid-a") && n.add(new Cc()),
        document.querySelector(".c--hero-a") && n.add(xc()),
        document.querySelector(".c--hero-b") && n.add(kc()),
        document.querySelector(".c--hero-c") && n.add(Mc()),
        document.querySelector(".c--hero-d") && n.add(Oc());
    },
    out: (i, e) => {
      var t = it.timeline({ onComplete: i });
      t.add(new ku()),
        document
          .querySelector(".c--burger-a")
          .className.match("c--burger-a--is-active") && t.add(Dc(), 0);
    },
  },
];
class Ou {
  constructor(e) {
    (this.swup = new gu({
      linkSelector: "a[href], area[href], svg a[*|href]",
      plugins: [
        new vu(),
        new wu({ head: !1, body: !0 }),
        new yu({ globalInstance: !1 }),
        new Su(Mu),
        new _u(),
      ],
    })),
      (this.boostify = e.boostify),
      (this.isBlazy = e.blazy),
      (this.instances = []),
      this.init(),
      this.events();
  }
  init() {
    new Eu(),
      (window.customScroll = new Cu()),
      this.boostify.onload({
        maxTime: 1200,
        eventsHandler: ["mousemove", "load", "scroll", "touchstart"],
        callback: async () => {
          this.loadGTM();
        },
      });
  }
  loadGTM() {
    window.dataLayer.push({
      event: "VirtualPageview",
      virtualPageURL: window.location.pathname + window.location.search,
      virtualPageTitle: document.title,
    });
  }
  events() {
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
      ? this.contentReplaced()
      : document.addEventListener("DOMContentLoaded", () => {
          this.contentReplaced();
        }),
      this.swup.hooks.on("content:replace", () => {
        this.contentReplaced();
      }),
      this.swup.hooks.before("content:replace", () => {
        this.willReplaceContent();
      });
  }
  async contentReplaced() {
    if ((await ya(200), this.isBlazy.enable)) {
      var e = this.isBlazy.selector ? this.isBlazy.selector : "g--lazy-01";
      this.instances.Blazy = new Tu({
        selector: "." + e,
        successClass: `${e}--is-loaded`,
        errorClass: `${e}--is-error`,
        loadInvisible: !0,
        offset: 300,
      });
    }
  }
  async willReplaceContent() {
    await ya(200),
      this.isBlazy.enable &&
        this.instances.Blazy &&
        this.instances.Blazy.destroy();
  }
}
let Du = class {
  _getElements(e) {
    return typeof e == "object" ? [e] : document.querySelectorAll(e);
  }
  hide(e) {
    this._hideElements(this._getElements(e));
  }
  _hideElements(e) {
    var t,
      n = e.length;
    for (t = 0; t < n; t++) this._hideElement(e[t]);
  }
  _hideElement(e) {
    this._styleElement(e, "display", "none");
  }
  show(e, t) {
    var n = this._getElements(e);
    t && this._hideElements(n), this._showElements(n);
  }
  _showElements(e) {
    var t,
      n = e.length;
    for (t = 0; t < n; t++) this._showElement(e[t]);
  }
  _showElement(e) {
    this._styleElement(e, "display", "block");
  }
  addStyle(e, t, n) {
    this._styleElements(this._getElements(e), t, n);
  }
  _styleElements(e, t, n) {
    var r,
      s = e.length;
    for (r = 0; r < s; r++) this._styleElement(e[r], t, n);
  }
  _styleElement(e, t, n) {
    e.style.setProperty(t, n);
  }
  toggleShow(e) {
    var t,
      n = this._getElements(e),
      r = n.length;
    for (t = 0; t < r; t++)
      n[t].style.display == "none"
        ? this._styleElement(n[t], "display", "block")
        : this._styleElement(n[t], "display", "none");
  }
  addClass(e, t) {
    this._addClassElements(this._getElements(e), t);
  }
  _addClassElements(e, t) {
    var n,
      r = e.length;
    for (n = 0; n < r; n++) this._addClassElement(e[n], t);
  }
  _addClassElement(e, t) {
    var n, r, s;
    for (r = e.className.split(" "), s = t.split(" "), n = 0; n < s.length; n++)
      r.indexOf(s[n]) == -1 && (e.className += " " + s[n]);
  }
  removeClass(e, t) {
    this._removeClassElements(this._getElements(e), t);
  }
  _removeClassElements(e, t) {
    var n,
      r = e.length;
    for (n = 0; n < r; n++) this._removeClassElement(e[n], t);
  }
  _removeClassElement(e, t) {
    var n, r, s;
    for (r = e.className.split(" "), s = t.split(" "), n = 0; n < s.length; n++)
      for (; r.indexOf(s[n]) > -1; ) r.splice(r.indexOf(s[n]), 1);
    e.className = r.join(" ");
  }
  toggleClass(e, t, n) {
    this._toggleClassElements(this._getElements(e), t, n);
  }
  _toggleClassElements(e, t, n) {
    var r,
      s = e.length;
    for (r = 0; r < s; r++) this._toggleClassElement(e[r], t, n);
  }
  _toggleClassElement(e, t, n) {
    var r, s, a, l, u, g, C;
    if (
      ((r = t || ""),
      (s = n || ""),
      (a = r.split(" ")),
      (l = s.split(" ")),
      (g = e.className.split(" ")),
      l.length == 0)
    ) {
      for (C = !0, u = 0; u < a.length; u++) g.indexOf(a[u]) == -1 && (C = !1);
      C ? this._removeClassElement(e, r) : this._addClassElement(e, r);
    } else {
      for (C = !0, u = 0; u < a.length; u++) g.indexOf(a[u]) == -1 && (C = !1);
      C
        ? (this._removeClassElement(e, r), this._addClassElement(e, s))
        : (this._removeClassElement(e, s), this._addClassElement(e, r));
    }
  }
  getBrowser(e) {
    switch (e) {
      case "chrome":
        return (
          (navigator.userAgent.indexOf("Chrome") != -1 &&
            !navigator.userAgent.match(/edg/i)) ||
          navigator.userAgent.indexOf("CriOS") >= 0
        );
      case "safari":
        return (
          /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
          !(navigator.userAgent.indexOf("CriOS") >= 0)
        );
      case "firefox":
        return typeof InstallTrigger < "u";
      case "ie":
        return !!document.documentMode;
      case "edge":
        return !!(
          navigator.userAgent.match(/edg/i) ||
          navigator.userAgent.indexOf("Edge/") != -1
        );
      default:
        return null;
    }
  }
  getTypeDevice(e) {
    var t = navigator.userAgent || navigator.vendor || window.opera;
    switch (e) {
      case "touch":
        return (
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
        );
      case "android":
        return /android/i.test(t);
      case "ios":
        return typeof navigator.standalone == "boolean";
      default:
        return null;
    }
  }
  filterHTML(e, t, n) {
    var r, s, a, l, u, g, C;
    for (r = this._getElements(e), l = 0; l < r.length; l++)
      for (s = r[l].querySelectorAll(t), u = 0; u < s.length; u++) {
        for (
          C = 0,
            s[u].innerText.toUpperCase().indexOf(n.toUpperCase()) > -1 &&
              (C = 1),
            a = s[u].getElementsByTagName("*"),
            g = 0;
          g < a.length;
          g++
        )
          a[g].innerText.toUpperCase().indexOf(n.toUpperCase()) > -1 && (C = 1);
        C == 1
          ? this.addStyle(s[u], "display", "block")
          : this.addStyle(s[u], "display", "none");
      }
  }
  matches(e, t, n = "class") {
    if (!e) return !1;
    if (Array.isArray(t))
      if (n === "class") {
        const r = e.classList;
        if (r) {
          const s = Array.from(r);
          return t.some((a) => s.includes(a));
        }
      } else {
        const r = e.getAttribute(n);
        return t.some((s) => s === r);
      }
    else if (n === "class") {
      const r = e.classList;
      if (r) {
        const s = Array.from(r).join(" "),
          a = new RegExp(`\\b${t}\\b`);
        return s.match(a) !== null;
      }
    } else return e.getAttribute(n) === t;
    return !1;
  }
  sortArray(e, t = "alphabetical") {
    return t === "alphabetical"
      ? e.sort((n, r) => {
          const s = n.toLowerCase(),
            a = r.toLowerCase();
          return s < a ? -1 : s > a ? 1 : 0;
        })
      : t === "number"
      ? e.sort((n, r) => n - r)
      : (console.error(
          "Invalid sorting type. Please choose 'alphabetical' or 'number'."
        ),
        e);
  }
  stringToBoolean(e) {
    const t = e.toLowerCase();
    if (t === "true" || t === "1") return !0;
    if (t === "false" || t === "0") return !1;
    throw new Error(
      'Invalid input. Only "true", "false", "1", or "0" are allowed.'
    );
  }
  setAttr(e, t, n) {
    e && t && e.setAttribute(t, n);
  }
  getAttr(e, t) {
    return e && t ? e.getAttribute(t) : null;
  }
  isElementVisibleOnLoad(e) {
    const { element: t, additionalPixels: n = 20 } = e;
    if (!t) return console.log("Element does not exist."), !0;
    const r = t.getBoundingClientRect(),
      a = (window.innerHeight || document.documentElement.clientHeight) + n;
    return !(r.bottom < -n || r.top > a);
  }
};
const Pu = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Du },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ru = tl(Pu);
var Lu = Ru;
const qu = cs(Lu);
let Nu = class {
  constructor(e) {
    (this.DOM = { element: e.element }),
      (this.backdrop = e.backdrop),
      (this.backdropActiveClass = e.backdropActiveClass),
      (this.elementClass = e.elementClass),
      (this.modalActiveClass = e.modalActiveClass),
      (this.modalID = e.modalIdTarget),
      (this.timeBackDrop = 0),
      (this.timeModal = 0),
      (this.onshow = e.onShow),
      (this.onhide = e.onHide),
      (this.JSUTIL = new qu()),
      this.init(),
      this.events();
  }
  init() {}
  events() {
    document
      .querySelectorAll(`[tf-ds-modal-target='${this.modalID}']`)
      .forEach((e) => {
        e.addEventListener("click", (t) => this.show());
      }),
      document
        .querySelectorAll(`[tf-ds-modal-close='${this.modalID}']`)
        .forEach((e) => {
          e.addEventListener("click", (t) => this.hide());
        });
  }
  async hide() {
    if (
      (await this.tf_sto(this.timeModal),
      this.JSUTIL.removeClass(
        document.getElementById(`${this.modalID}`),
        this.modalActiveClass
      ),
      await this.tf_sto(this.timeBackDrop),
      this.JSUTIL.removeClass(
        document.querySelector(`.${this.backdrop}`),
        this.backdropActiveClass
      ),
      await this.tf_sto(this.timeBackDrop),
      document.querySelector(`.${this.backdrop}`))
    ) {
      var e = document.querySelector(`.${this.backdrop}`);
      e.parentNode.removeChild(e);
    }
    this.onhide && this.onhide();
  }
  async show() {
    var e = document.createElement("div");
    (e.className = this.backdrop), document.body.appendChild(e);
    const t = getComputedStyle(document.querySelector(`.${this.backdrop}`));
    Object.keys(t).forEach((r) => {
      r == "transitionDuration" && (this.timeBackDrop = t[r]);
    }),
      (this.timeBackDropSplit = String(this.timeBackDrop).split("s")),
      (this.timeBackDrop = parseFloat(this.timeBackDropSplit[0]) * 1e3);
    const n = getComputedStyle(this.DOM.element);
    Object.keys(n).forEach((r) => {
      r == "transitionDuration" && (this.timeModal = n[r]);
    }),
      (this.timeModalSplit = String(this.timeModal).split("s")),
      (this.timeModal = parseFloat(this.timeModalSplit[0]) * 1e3),
      await this.tf_sto(this.timeBackDrop),
      this.JSUTIL.toggleClass(
        document.querySelector(`.${this.backdrop}`),
        this.backdropActiveClass
      ),
      await this.tf_sto(this.timeModal),
      this.JSUTIL.toggleClass(
        document.getElementById(this.modalID),
        this.modalActiveClass
      ),
      document.querySelector(`.${this.backdrop}`) &&
        document
          .querySelector(`.${this.backdrop}`)
          .addEventListener("click", (r) => this.hide()),
      this.onshow && this.onshow();
  }
  async tf_sto(e) {
    return new Promise((t, n) => {
      isNaN(e) ? n(new Error("is not a number")) : setTimeout(t, e);
    });
  }
  destroy(e) {
    document
      .querySelectorAll(`[tf-ds-modal-target='${this.modalID}']`)
      .forEach((t) => {
        t.removeEventListener("click", (n) => this.show());
      }),
      document
        .querySelectorAll(`[tf-ds-modal-close='${this.modalID}']`)
        .forEach((t) => {
          t.removeEventListener("click", (n) => this.hide());
        }),
      this.JSUTIL.removeClass(this.DOM.element, this.elementClass),
      (this.JSUTIL = null);
  }
};
const Hu = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Nu },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Iu = tl(Hu);
var $u = Iu;
const Fu = cs($u);
function ka(i, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(i, n.key, n);
  }
}
function Wu(i, e, t) {
  return e && ka(i.prototype, e), t && ka(i, t), i;
}
/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var _t,
  io,
  tn,
  Wn,
  zn,
  xi,
  al,
  ti,
  Zi,
  ll,
  kn,
  dn,
  cl,
  ul = function () {
    return (
      _t ||
      (typeof window < "u" && (_t = window.gsap) && _t.registerPlugin && _t)
    );
  },
  fl = 1,
  Ei = [],
  me = [],
  bn = [],
  Ji = Date.now,
  ro = function (e, t) {
    return t;
  },
  zu = function () {
    var e = Zi.core,
      t = e.bridge || {},
      n = e._scrollers,
      r = e._proxies;
    n.push.apply(n, me),
      r.push.apply(r, bn),
      (me = n),
      (bn = r),
      (ro = function (a, l) {
        return t[a](l);
      });
  },
  Bn = function (e, t) {
    return ~bn.indexOf(e) && bn[bn.indexOf(e) + 1][t];
  },
  er = function (e) {
    return !!~ll.indexOf(e);
  },
  Dt = function (e, t, n, r, s) {
    return e.addEventListener(t, n, { passive: !r, capture: !!s });
  },
  Ot = function (e, t, n, r) {
    return e.removeEventListener(t, n, !!r);
  },
  qr = "scrollLeft",
  Nr = "scrollTop",
  so = function () {
    return (kn && kn.isPressed) || me.cache++;
  },
  ss = function (e, t) {
    var n = function r(s) {
      if (s || s === 0) {
        fl && (tn.history.scrollRestoration = "manual");
        var a = kn && kn.isPressed;
        (s = r.v = Math.round(s) || (kn && kn.iOS ? 1 : 0)),
          e(s),
          (r.cacheID = me.cache),
          a && ro("ss", s);
      } else
        (t || me.cache !== r.cacheID || ro("ref")) &&
          ((r.cacheID = me.cache), (r.v = e()));
      return r.v + r.offset;
    };
    return (n.offset = 0), e && n;
  },
  qt = {
    s: qr,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: ss(function (i) {
      return arguments.length
        ? tn.scrollTo(i, ut.sc())
        : tn.pageXOffset || Wn[qr] || zn[qr] || xi[qr] || 0;
    }),
  },
  ut = {
    s: Nr,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: qt,
    sc: ss(function (i) {
      return arguments.length
        ? tn.scrollTo(qt.sc(), i)
        : tn.pageYOffset || Wn[Nr] || zn[Nr] || xi[Nr] || 0;
    }),
  },
  Ut = function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || _t.utils.toArray)(e)[0] ||
      (typeof e == "string" && _t.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  Vn = function (e, t) {
    var n = t.s,
      r = t.sc;
    er(e) && (e = Wn.scrollingElement || zn);
    var s = me.indexOf(e),
      a = r === ut.sc ? 1 : 2;
    !~s && (s = me.push(e) - 1), me[s + a] || Dt(e, "scroll", so);
    var l = me[s + a],
      u =
        l ||
        (me[s + a] =
          ss(Bn(e, n), !0) ||
          (er(e)
            ? r
            : ss(function (g) {
                return arguments.length ? (e[n] = g) : e[n];
              })));
    return (
      (u.target = e),
      l || (u.smooth = _t.getProperty(e, "scrollBehavior") === "smooth"),
      u
    );
  },
  oo = function (e, t, n) {
    var r = e,
      s = e,
      a = Ji(),
      l = a,
      u = t || 50,
      g = Math.max(500, u * 3),
      C = function (A, E) {
        var _ = Ji();
        E || _ - a > u
          ? ((s = r), (r = A), (l = a), (a = _))
          : n
          ? (r += A)
          : (r = s + ((A - s) / (_ - l)) * (a - l));
      },
      y = function () {
        (s = r = n ? 0 : r), (l = a = 0);
      },
      S = function (A) {
        var E = l,
          _ = s,
          O = Ji();
        return (
          (A || A === 0) && A !== r && C(A),
          a === l || O - l > g
            ? 0
            : ((r + (n ? _ : -_)) / ((n ? O : a) - E)) * 1e3
        );
      };
    return { update: C, reset: y, getVelocity: S };
  },
  Ui = function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  Ma = function (e) {
    var t = Math.max.apply(Math, e),
      n = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(n) ? t : n;
  },
  hl = function () {
    (Zi = _t.core.globals().ScrollTrigger), Zi && Zi.core && zu();
  },
  dl = function (e) {
    return (
      (_t = e || ul()),
      _t &&
        typeof document < "u" &&
        document.body &&
        ((tn = window),
        (Wn = document),
        (zn = Wn.documentElement),
        (xi = Wn.body),
        (ll = [tn, Wn, zn, xi]),
        _t.utils.clamp,
        (cl = _t.core.context || function () {}),
        (ti = "onpointerenter" in xi ? "pointer" : "mouse"),
        (al = rt.isTouch =
          tn.matchMedia &&
          tn.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in tn ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (dn = rt.eventTypes =
          (
            "ontouchstart" in zn
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in zn
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (fl = 0);
        }, 500),
        hl(),
        (io = 1)),
      io
    );
  };
qt.op = ut;
me.cache = 0;
var rt = (function () {
  function i(t) {
    this.init(t);
  }
  var e = i.prototype;
  return (
    (e.init = function (n) {
      io || dl(_t) || console.warn("Please gsap.registerPlugin(Observer)"),
        Zi || hl();
      var r = n.tolerance,
        s = n.dragMinimum,
        a = n.type,
        l = n.target,
        u = n.lineHeight,
        g = n.debounce,
        C = n.preventDefault,
        y = n.onStop,
        S = n.onStopDelay,
        f = n.ignore,
        A = n.wheelSpeed,
        E = n.event,
        _ = n.onDragStart,
        O = n.onDragEnd,
        q = n.onDrag,
        k = n.onPress,
        m = n.onRelease,
        h = n.onRight,
        d = n.onLeft,
        b = n.onUp,
        M = n.onDown,
        j = n.onChangeX,
        H = n.onChangeY,
        ie = n.onChange,
        v = n.onToggleX,
        P = n.onToggleY,
        L = n.onHover,
        R = n.onHoverEnd,
        oe = n.onMove,
        N = n.ignoreCheck,
        J = n.isNormalizer,
        te = n.onGestureStart,
        p = n.onGestureEnd,
        I = n.onWheel,
        Qe = n.onEnable,
        Ct = n.onDisable,
        ne = n.onClick,
        W = n.scrollSpeed,
        Xe = n.capture,
        Oe = n.allowClicks,
        je = n.lockAxis,
        Y = n.onLockAxis;
      (this.target = l = Ut(l) || zn),
        (this.vars = n),
        f && (f = _t.utils.toArray(f)),
        (r = r || 1e-9),
        (s = s || 0),
        (A = A || 1),
        (W = W || 1),
        (a = a || "wheel,touch,pointer"),
        (g = g !== !1),
        u || (u = parseFloat(tn.getComputedStyle(xi).lineHeight) || 22);
      var B,
        fe,
        se,
        Q,
        he,
        Z,
        Ze,
        x = this,
        We = 0,
        ze = 0,
        Bt = Vn(l, qt),
        de = Vn(l, ut),
        Ue = Bt(),
        ft = de(),
        It =
          ~a.indexOf("touch") &&
          !~a.indexOf("pointer") &&
          dn[0] === "pointerdown",
        Ce = er(l),
        be = l.ownerDocument || Wn,
        Je = [0, 0, 0],
        xe = [0, 0, 0],
        cn = 0,
        ht = function () {
          return (cn = Ji());
        },
        st = function (V, ae) {
          return (
            ((x.event = V) && f && ~f.indexOf(V.target)) ||
            (ae && It && V.pointerType !== "touch") ||
            (N && N(V, ae))
          );
        },
        qe = function () {
          x._vx.reset(), x._vy.reset(), fe.pause(), y && y(x);
        },
        ge = function () {
          var V = (x.deltaX = Ma(Je)),
            ae = (x.deltaY = Ma(xe)),
            ve = Math.abs(V) >= r,
            $ = Math.abs(ae) >= r;
          ie && (ve || $) && ie(x, V, ae, Je, xe),
            ve &&
              (h && x.deltaX > 0 && h(x),
              d && x.deltaX < 0 && d(x),
              j && j(x),
              v && x.deltaX < 0 != We < 0 && v(x),
              (We = x.deltaX),
              (Je[0] = Je[1] = Je[2] = 0)),
            $ &&
              (M && x.deltaY > 0 && M(x),
              b && x.deltaY < 0 && b(x),
              H && H(x),
              P && x.deltaY < 0 != ze < 0 && P(x),
              (ze = x.deltaY),
              (xe[0] = xe[1] = xe[2] = 0)),
            (Q || se) && (oe && oe(x), se && (q(x), (se = !1)), (Q = !1)),
            Z && !(Z = !1) && Y && Y(x),
            he && (I(x), (he = !1)),
            (B = 0);
        },
        nn = function (V, ae, ve) {
          (Je[ve] += V),
            (xe[ve] += ae),
            x._vx.update(V),
            x._vy.update(ae),
            g ? B || (B = requestAnimationFrame(ge)) : ge();
        },
        Pn = function (V, ae) {
          je &&
            !Ze &&
            ((x.axis = Ze = Math.abs(V) > Math.abs(ae) ? "x" : "y"), (Z = !0)),
            Ze !== "y" && ((Je[2] += V), x._vx.update(V, !0)),
            Ze !== "x" && ((xe[2] += ae), x._vy.update(ae, !0)),
            g ? B || (B = requestAnimationFrame(ge)) : ge();
        },
        ke = function (V) {
          if (!st(V, 1)) {
            V = Ui(V, C);
            var ae = V.clientX,
              ve = V.clientY,
              $ = ae - x.x,
              ue = ve - x.y,
              X = x.isDragging;
            (x.x = ae),
              (x.y = ve),
              (X ||
                Math.abs(x.startX - ae) >= s ||
                Math.abs(x.startY - ve) >= s) &&
                (q && (se = !0),
                X || (x.isDragging = !0),
                Pn($, ue),
                X || (_ && _(x)));
          }
        },
        xt = (x.onPress = function (D) {
          st(D, 1) ||
            (D && D.button) ||
            ((x.axis = Ze = null),
            fe.pause(),
            (x.isPressed = !0),
            (D = Ui(D)),
            (We = ze = 0),
            (x.startX = x.x = D.clientX),
            (x.startY = x.y = D.clientY),
            x._vx.reset(),
            x._vy.reset(),
            Dt(J ? l : be, dn[1], ke, C, !0),
            (x.deltaX = x.deltaY = 0),
            k && k(x));
        }),
        Me = (x.onRelease = function (D) {
          if (!st(D, 1)) {
            Ot(J ? l : be, dn[1], ke, !0);
            var V = !isNaN(x.y - x.startY),
              ae =
                x.isDragging &&
                (Math.abs(x.x - x.startX) > 3 || Math.abs(x.y - x.startY) > 3),
              ve = Ui(D);
            !ae &&
              V &&
              (x._vx.reset(),
              x._vy.reset(),
              C &&
                Oe &&
                _t.delayedCall(0.08, function () {
                  if (Ji() - cn > 300 && !D.defaultPrevented) {
                    if (D.target.click) D.target.click();
                    else if (be.createEvent) {
                      var $ = be.createEvent("MouseEvents");
                      $.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        tn,
                        1,
                        ve.screenX,
                        ve.screenY,
                        ve.clientX,
                        ve.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        D.target.dispatchEvent($);
                    }
                  }
                })),
              (x.isDragging = x.isGesturing = x.isPressed = !1),
              y && !J && fe.restart(!0),
              O && ae && O(x),
              m && m(x, ae);
          }
        }),
        z = function (V) {
          return (
            V.touches &&
            V.touches.length > 1 &&
            (x.isGesturing = !0) &&
            te(V, x.isDragging)
          );
        },
        gn = function () {
          return (x.isGesturing = !1) || p(x);
        },
        dt = function (V) {
          if (!st(V)) {
            var ae = Bt(),
              ve = de();
            nn((ae - Ue) * W, (ve - ft) * W, 1),
              (Ue = ae),
              (ft = ve),
              y && fe.restart(!0);
          }
        },
        kt = function (V) {
          if (!st(V)) {
            (V = Ui(V, C)), I && (he = !0);
            var ae =
              (V.deltaMode === 1 ? u : V.deltaMode === 2 ? tn.innerHeight : 1) *
              A;
            nn(V.deltaX * ae, V.deltaY * ae, 0), y && !J && fe.restart(!0);
          }
        },
        ot = function (V) {
          if (!st(V)) {
            var ae = V.clientX,
              ve = V.clientY,
              $ = ae - x.x,
              ue = ve - x.y;
            (x.x = ae), (x.y = ve), (Q = !0), ($ || ue) && Pn($, ue);
          }
        },
        bt = function (V) {
          (x.event = V), L(x);
        },
        Yt = function (V) {
          (x.event = V), R(x);
        },
        Mt = function (V) {
          return st(V) || (Ui(V, C) && ne(x));
        };
      (fe = x._dc = _t.delayedCall(S || 0.25, qe).pause()),
        (x.deltaX = x.deltaY = 0),
        (x._vx = oo(0, 50, !0)),
        (x._vy = oo(0, 50, !0)),
        (x.scrollX = Bt),
        (x.scrollY = de),
        (x.isDragging = x.isGesturing = x.isPressed = !1),
        cl(this),
        (x.enable = function (D) {
          return (
            x.isEnabled ||
              (Dt(Ce ? be : l, "scroll", so),
              a.indexOf("scroll") >= 0 && Dt(Ce ? be : l, "scroll", dt, C, Xe),
              a.indexOf("wheel") >= 0 && Dt(l, "wheel", kt, C, Xe),
              ((a.indexOf("touch") >= 0 && al) || a.indexOf("pointer") >= 0) &&
                (Dt(l, dn[0], xt, C, Xe),
                Dt(be, dn[2], Me),
                Dt(be, dn[3], Me),
                Oe && Dt(l, "click", ht, !1, !0),
                ne && Dt(l, "click", Mt),
                te && Dt(be, "gesturestart", z),
                p && Dt(be, "gestureend", gn),
                L && Dt(l, ti + "enter", bt),
                R && Dt(l, ti + "leave", Yt),
                oe && Dt(l, ti + "move", ot)),
              (x.isEnabled = !0),
              D && D.type && xt(D),
              Qe && Qe(x)),
            x
          );
        }),
        (x.disable = function () {
          x.isEnabled &&
            (Ei.filter(function (D) {
              return D !== x && er(D.target);
            }).length || Ot(Ce ? be : l, "scroll", so),
            x.isPressed &&
              (x._vx.reset(), x._vy.reset(), Ot(J ? l : be, dn[1], ke, !0)),
            Ot(Ce ? be : l, "scroll", dt, Xe),
            Ot(l, "wheel", kt, Xe),
            Ot(l, dn[0], xt, Xe),
            Ot(be, dn[2], Me),
            Ot(be, dn[3], Me),
            Ot(l, "click", ht, !0),
            Ot(l, "click", Mt),
            Ot(be, "gesturestart", z),
            Ot(be, "gestureend", gn),
            Ot(l, ti + "enter", bt),
            Ot(l, ti + "leave", Yt),
            Ot(l, ti + "move", ot),
            (x.isEnabled = x.isPressed = x.isDragging = !1),
            Ct && Ct(x));
        }),
        (x.kill = x.revert =
          function () {
            x.disable();
            var D = Ei.indexOf(x);
            D >= 0 && Ei.splice(D, 1), kn === x && (kn = 0);
          }),
        Ei.push(x),
        J && er(l) && (kn = x),
        x.enable(E);
    }),
    Wu(i, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    i
  );
})();
rt.version = "3.12.2";
rt.create = function (i) {
  return new rt(i);
};
rt.register = dl;
rt.getAll = function () {
  return Ei.slice();
};
rt.getById = function (i) {
  return Ei.filter(function (e) {
    return e.vars.id === i;
  })[0];
};
ul() && _t.registerPlugin(rt);
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var U,
  bi,
  ye,
  Fe,
  pn,
  Re,
  pl,
  os,
  as,
  Ai,
  Gr,
  Hr,
  At,
  us,
  ao,
  Pt,
  Oa,
  Da,
  Ti,
  gl,
  Ws,
  ml,
  Zt,
  vl,
  yl,
  wl,
  Fn,
  lo,
  mo,
  ki,
  vo,
  zs,
  Ir = 1,
  Lt = Date.now,
  Us = Lt(),
  ln = 0,
  Xi = 0,
  Pa = function (e, t, n) {
    var r = en(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (n["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
  },
  Ra = function (e, t) {
    return t && (!en(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  Uu = function i() {
    return Xi && requestAnimationFrame(i);
  },
  La = function () {
    return (us = 1);
  },
  qa = function () {
    return (us = 0);
  },
  Sn = function (e) {
    return e;
  },
  ji = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Sl = function () {
    return typeof window < "u";
  },
  _l = function () {
    return U || (Sl() && (U = window.gsap) && U.registerPlugin && U);
  },
  li = function (e) {
    return !!~pl.indexOf(e);
  },
  bl = function (e) {
    return (
      (e === "Height" ? vo : ye["inner" + e]) ||
      pn["client" + e] ||
      Re["client" + e]
    );
  },
  Tl = function (e) {
    return (
      Bn(e, "getBoundingClientRect") ||
      (li(e)
        ? function () {
            return (ns.width = ye.innerWidth), (ns.height = vo), ns;
          }
        : function () {
            return xn(e);
          })
    );
  },
  Bu = function (e, t, n) {
    var r = n.d,
      s = n.d2,
      a = n.a;
    return (a = Bn(e, "getBoundingClientRect"))
      ? function () {
          return a()[r];
        }
      : function () {
          return (t ? bl(s) : e["client" + s]) || 0;
        };
  },
  Yu = function (e, t) {
    return !t || ~bn.indexOf(e)
      ? Tl(e)
      : function () {
          return ns;
        };
  },
  Mn = function (e, t) {
    var n = t.s,
      r = t.d2,
      s = t.d,
      a = t.a;
    return Math.max(
      0,
      (n = "scroll" + r) && (a = Bn(e, n))
        ? a() - Tl(e)()[s]
        : li(e)
        ? (pn[n] || Re[n]) - bl(r)
        : e[n] - e["offset" + r]
    );
  },
  $r = function (e, t) {
    for (var n = 0; n < Ti.length; n += 3)
      (!t || ~t.indexOf(Ti[n + 1])) && e(Ti[n], Ti[n + 1], Ti[n + 2]);
  },
  en = function (e) {
    return typeof e == "string";
  },
  Nt = function (e) {
    return typeof e == "function";
  },
  Qr = function (e) {
    return typeof e == "number";
  },
  ni = function (e) {
    return typeof e == "object";
  },
  Bi = function (e, t, n) {
    return e && e.progress(t ? 0 : 1) && n && e.pause();
  },
  Bs = function (e, t) {
    if (e.enabled) {
      var n = t(e);
      n && n.totalTime && (e.callbackAnimation = n);
    }
  },
  vi = Math.abs,
  El = "left",
  Al = "top",
  yo = "right",
  wo = "bottom",
  si = "width",
  oi = "height",
  tr = "Right",
  nr = "Left",
  ir = "Top",
  rr = "Bottom",
  nt = "padding",
  on = "margin",
  Oi = "Width",
  So = "Height",
  St = "px",
  an = function (e) {
    return ye.getComputedStyle(e);
  },
  Vu = function (e) {
    var t = an(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  },
  Na = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  xn = function (e, t) {
    var n =
        t &&
        an(e)[ao] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        U.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      r = e.getBoundingClientRect();
    return n && n.progress(0).kill(), r;
  },
  co = function (e, t) {
    var n = t.d2;
    return e["offset" + n] || e["client" + n] || 0;
  },
  Cl = function (e) {
    var t = [],
      n = e.labels,
      r = e.duration(),
      s;
    for (s in n) t.push(n[s] / r);
    return t;
  },
  Xu = function (e) {
    return function (t) {
      return U.utils.snap(Cl(e), t);
    };
  },
  _o = function (e) {
    var t = U.utils.snap(e),
      n =
        Array.isArray(e) &&
        e.slice(0).sort(function (r, s) {
          return r - s;
        });
    return n
      ? function (r, s, a) {
          a === void 0 && (a = 0.001);
          var l;
          if (!s) return t(r);
          if (s > 0) {
            for (r -= a, l = 0; l < n.length; l++) if (n[l] >= r) return n[l];
            return n[l - 1];
          } else for (l = n.length, r += a; l--; ) if (n[l] <= r) return n[l];
          return n[0];
        }
      : function (r, s, a) {
          a === void 0 && (a = 0.001);
          var l = t(r);
          return !s || Math.abs(l - r) < a || l - r < 0 == s < 0
            ? l
            : t(s < 0 ? r - e : r + e);
        };
  },
  ju = function (e) {
    return function (t, n) {
      return _o(Cl(e))(t, n.direction);
    };
  },
  Fr = function (e, t, n, r) {
    return n.split(",").forEach(function (s) {
      return e(t, s, r);
    });
  },
  mt = function (e, t, n, r, s) {
    return e.addEventListener(t, n, { passive: !r, capture: !!s });
  },
  gt = function (e, t, n, r) {
    return e.removeEventListener(t, n, !!r);
  },
  Wr = function (e, t, n) {
    (n = n && n.wheelHandler), n && (e(t, "wheel", n), e(t, "touchmove", n));
  },
  Ha = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  zr = { toggleActions: "play", anticipatePin: 0 },
  ls = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Zr = function (e, t) {
    if (en(e)) {
      var n = e.indexOf("="),
        r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
      ~n && (e.indexOf("%") > n && (r *= t / 100), (e = e.substr(0, n - 1))),
        (e =
          r +
          (e in ls
            ? ls[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  Ur = function (e, t, n, r, s, a, l, u) {
    var g = s.startColor,
      C = s.endColor,
      y = s.fontSize,
      S = s.indent,
      f = s.fontWeight,
      A = Fe.createElement("div"),
      E = li(n) || Bn(n, "pinType") === "fixed",
      _ = e.indexOf("scroller") !== -1,
      O = E ? Re : n,
      q = e.indexOf("start") !== -1,
      k = q ? g : C,
      m =
        "border-color:" +
        k +
        ";font-size:" +
        y +
        ";color:" +
        k +
        ";font-weight:" +
        f +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (m += "position:" + ((_ || u) && E ? "fixed;" : "absolute;")),
      (_ || u || !E) &&
        (m += (r === ut ? yo : wo) + ":" + (a + parseFloat(S)) + "px;"),
      l &&
        (m +=
          "box-sizing:border-box;text-align:left;width:" +
          l.offsetWidth +
          "px;"),
      (A._isStart = q),
      A.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (A.style.cssText = m),
      (A.innerText = t || t === 0 ? e + "-" + t : e),
      O.children[0] ? O.insertBefore(A, O.children[0]) : O.appendChild(A),
      (A._offset = A["offset" + r.op.d2]),
      Jr(A, 0, r, q),
      A
    );
  },
  Jr = function (e, t, n, r) {
    var s = { display: "block" },
      a = n[r ? "os2" : "p2"],
      l = n[r ? "p2" : "os2"];
    (e._isFlipped = r),
      (s[n.a + "Percent"] = r ? -100 : 0),
      (s[n.a] = r ? "1px" : 0),
      (s["border" + a + Oi] = 1),
      (s["border" + l + Oi] = 0),
      (s[n.p] = t + "px"),
      U.set(e, s);
  },
  pe = [],
  uo = {},
  ar,
  Ia = function () {
    return Lt() - ln > 34 && (ar || (ar = requestAnimationFrame(On)));
  },
  yi = function () {
    (!Zt || !Zt.isPressed || Zt.startX > Re.clientWidth) &&
      (me.cache++,
      Zt ? ar || (ar = requestAnimationFrame(On)) : On(),
      ln || ui("scrollStart"),
      (ln = Lt()));
  },
  Ys = function () {
    (wl = ye.innerWidth), (yl = ye.innerHeight);
  },
  Ki = function () {
    me.cache++,
      !At &&
        !ml &&
        !Fe.fullscreenElement &&
        !Fe.webkitFullscreenElement &&
        (!vl ||
          wl !== ye.innerWidth ||
          Math.abs(ye.innerHeight - yl) > ye.innerHeight * 0.25) &&
        os.restart(!0);
  },
  ci = {},
  Ku = [],
  xl = function i() {
    return gt(le, "scrollEnd", i) || ii(!0);
  },
  ui = function (e) {
    return (
      (ci[e] &&
        ci[e].map(function (t) {
          return t();
        })) ||
      Ku
    );
  },
  Jt = [],
  kl = function (e) {
    for (var t = 0; t < Jt.length; t += 5)
      (!e || (Jt[t + 4] && Jt[t + 4].query === e)) &&
        ((Jt[t].style.cssText = Jt[t + 1]),
        Jt[t].getBBox && Jt[t].setAttribute("transform", Jt[t + 2] || ""),
        (Jt[t + 3].uncache = 1));
  },
  bo = function (e, t) {
    var n;
    for (Pt = 0; Pt < pe.length; Pt++)
      (n = pe[Pt]),
        n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
    t && kl(t), t || ui("revert");
  },
  Ml = function (e, t) {
    me.cache++,
      (t || !Rt) &&
        me.forEach(function (n) {
          return Nt(n) && n.cacheID++ && (n.rec = 0);
        }),
      en(e) && (ye.history.scrollRestoration = mo = e);
  },
  Rt,
  ai = 0,
  $a,
  Gu = function () {
    if ($a !== ai) {
      var e = ($a = ai);
      requestAnimationFrame(function () {
        return e === ai && ii(!0);
      });
    }
  },
  Ol = function () {
    Re.appendChild(ki),
      (vo = ki.offsetHeight || ye.innerHeight),
      Re.removeChild(ki);
  },
  ii = function (e, t) {
    if (ln && !e) {
      mt(le, "scrollEnd", xl);
      return;
    }
    Ol(),
      (Rt = le.isRefreshing = !0),
      me.forEach(function (r) {
        return Nt(r) && ++r.cacheID && (r.rec = r());
      });
    var n = ui("refreshInit");
    gl && le.sort(),
      t || bo(),
      me.forEach(function (r) {
        Nt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      pe.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      pe.forEach(function (r, s) {
        if (r._subPinOffset && r.pin) {
          var a = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            l = r.pin[a];
          r.revert(!0, 1), r.adjustPinSpacing(r.pin[a] - l), r.refresh();
        }
      }),
      pe.forEach(function (r) {
        var s = Mn(r.scroller, r._dir);
        (r.vars.end === "max" || (r._endClamp && r.end > s)) &&
          r.setPositions(r.start, Math.max(r.start + 1, s), !0);
      }),
      n.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      me.forEach(function (r) {
        Nt(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = "smooth");
            }),
          r.rec && r(r.rec));
      }),
      Ml(mo, 1),
      os.pause(),
      ai++,
      (Rt = 2),
      On(2),
      pe.forEach(function (r) {
        return Nt(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (Rt = le.isRefreshing = !1),
      ui("refresh");
  },
  fo = 0,
  es = 1,
  sr,
  On = function (e) {
    if (!Rt || e === 2) {
      (le.isUpdating = !0), sr && sr.update(0);
      var t = pe.length,
        n = Lt(),
        r = n - Us >= 50,
        s = t && pe[0].scroll();
      if (
        ((es = fo > s ? -1 : 1),
        Rt || (fo = s),
        r &&
          (ln && !us && n - ln > 200 && ((ln = 0), ui("scrollEnd")),
          (Gr = Us),
          (Us = n)),
        es < 0)
      ) {
        for (Pt = t; Pt-- > 0; ) pe[Pt] && pe[Pt].update(0, r);
        es = 1;
      } else for (Pt = 0; Pt < t; Pt++) pe[Pt] && pe[Pt].update(0, r);
      le.isUpdating = !1;
    }
    ar = 0;
  },
  ho = [
    El,
    Al,
    wo,
    yo,
    on + rr,
    on + tr,
    on + ir,
    on + nr,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  ts = ho.concat([
    si,
    oi,
    "boxSizing",
    "max" + Oi,
    "max" + So,
    "position",
    on,
    nt,
    nt + ir,
    nt + tr,
    nt + rr,
    nt + nr,
  ]),
  Qu = function (e, t, n) {
    Mi(n);
    var r = e._gsap;
    if (r.spacerIsNative) Mi(r.spacerState);
    else if (e._gsap.swappedIn) {
      var s = t.parentNode;
      s && (s.insertBefore(e, t), s.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  },
  Vs = function (e, t, n, r) {
    if (!e._gsap.swappedIn) {
      for (var s = ho.length, a = t.style, l = e.style, u; s--; )
        (u = ho[s]), (a[u] = n[u]);
      (a.position = n.position === "absolute" ? "absolute" : "relative"),
        n.display === "inline" && (a.display = "inline-block"),
        (l[wo] = l[yo] = "auto"),
        (a.flexBasis = n.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[si] = co(e, qt) + St),
        (a[oi] = co(e, ut) + St),
        (a[nt] = l[on] = l[Al] = l[El] = "0"),
        Mi(r),
        (l[si] = l["max" + Oi] = n[si]),
        (l[oi] = l["max" + So] = n[oi]),
        (l[nt] = n[nt]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  Zu = /([A-Z])/g,
  Mi = function (e) {
    if (e) {
      var t = e.t.style,
        n = e.length,
        r = 0,
        s,
        a;
      for ((e.t._gsap || U.core.getCache(e.t)).uncache = 1; r < n; r += 2)
        (a = e[r + 1]),
          (s = e[r]),
          a
            ? (t[s] = a)
            : t[s] && t.removeProperty(s.replace(Zu, "-$1").toLowerCase());
    }
  },
  Br = function (e) {
    for (var t = ts.length, n = e.style, r = [], s = 0; s < t; s++)
      r.push(ts[s], n[ts[s]]);
    return (r.t = e), r;
  },
  Ju = function (e, t, n) {
    for (var r = [], s = e.length, a = n ? 8 : 0, l; a < s; a += 2)
      (l = e[a]), r.push(l, l in t ? t[l] : e[a + 1]);
    return (r.t = e.t), r;
  },
  ns = { left: 0, top: 0 },
  Fa = function (e, t, n, r, s, a, l, u, g, C, y, S, f, A) {
    Nt(e) && (e = e(u)),
      en(e) &&
        e.substr(0, 3) === "max" &&
        (e = S + (e.charAt(4) === "=" ? Zr("0" + e.substr(3), n) : 0));
    var E = f ? f.time() : 0,
      _,
      O,
      q;
    if ((f && f.seek(0), isNaN(e) || (e = +e), Qr(e)))
      f &&
        (e = U.utils.mapRange(
          f.scrollTrigger.start,
          f.scrollTrigger.end,
          0,
          S,
          e
        )),
        l && Jr(l, n, r, !0);
    else {
      Nt(t) && (t = t(u));
      var k = (e || "0").split(" "),
        m,
        h,
        d,
        b;
      (q = Ut(t, u) || Re),
        (m = xn(q) || {}),
        (!m || (!m.left && !m.top)) &&
          an(q).display === "none" &&
          ((b = q.style.display),
          (q.style.display = "block"),
          (m = xn(q)),
          b ? (q.style.display = b) : q.style.removeProperty("display")),
        (h = Zr(k[0], m[r.d])),
        (d = Zr(k[1] || "0", n)),
        (e = m[r.p] - g[r.p] - C + h + s - d),
        l && Jr(l, d, r, n - d < 20 || (l._isStart && d > 20)),
        (n -= n - d);
    }
    if ((A && ((u[A] = e || -0.001), e < 0 && (e = 0)), a)) {
      var M = e + n,
        j = a._isStart;
      (_ = "scroll" + r.d2),
        Jr(
          a,
          M,
          r,
          (j && M > 20) ||
            (!j && (y ? Math.max(Re[_], pn[_]) : a.parentNode[_]) <= M + 1)
        ),
        y &&
          ((g = xn(l)),
          y && (a.style[r.op.p] = g[r.op.p] - r.op.m - a._offset + St));
    }
    return (
      f &&
        q &&
        ((_ = xn(q)),
        f.seek(S),
        (O = xn(q)),
        (f._caScrollDist = _[r.p] - O[r.p]),
        (e = (e / f._caScrollDist) * S)),
      f && f.seek(E),
      f ? e : Math.round(e)
    );
  },
  ef = /(webkit|moz|length|cssText|inset)/i,
  Wa = function (e, t, n, r) {
    if (e.parentNode !== t) {
      var s = e.style,
        a,
        l;
      if (t === Re) {
        (e._stOrig = s.cssText), (l = an(e));
        for (a in l)
          !+a &&
            !ef.test(a) &&
            l[a] &&
            typeof s[a] == "string" &&
            a !== "0" &&
            (s[a] = l[a]);
        (s.top = n), (s.left = r);
      } else s.cssText = e._stOrig;
      (U.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  },
  Dl = function (e, t, n) {
    var r = t,
      s = r;
    return function (a) {
      var l = Math.round(e());
      return (
        l !== r &&
          l !== s &&
          Math.abs(l - r) > 3 &&
          Math.abs(l - s) > 3 &&
          ((a = l), n && n()),
        (s = r),
        (r = a),
        a
      );
    };
  },
  Yr = function (e, t, n) {
    var r = {};
    (r[t.p] = "+=" + n), U.set(e, r);
  },
  za = function (e, t) {
    var n = Vn(e, t),
      r = "_scroll" + t.p2,
      s = function a(l, u, g, C, y) {
        var S = a.tween,
          f = u.onComplete,
          A = {};
        g = g || n();
        var E = Dl(n, g, function () {
          S.kill(), (a.tween = 0);
        });
        return (
          (y = (C && y) || 0),
          (C = C || l - g),
          S && S.kill(),
          (u[r] = l),
          (u.modifiers = A),
          (A[r] = function () {
            return E(g + C * S.ratio + y * S.ratio * S.ratio);
          }),
          (u.onUpdate = function () {
            me.cache++, On();
          }),
          (u.onComplete = function () {
            (a.tween = 0), f && f.call(S);
          }),
          (S = a.tween = U.to(e, u)),
          S
        );
      };
    return (
      (e[r] = n),
      (n.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      mt(e, "wheel", n.wheelHandler),
      le.isTouch && mt(e, "touchmove", n.wheelHandler),
      s
    );
  },
  le = (function () {
    function i(t, n) {
      bi ||
        i.register(U) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        lo(this),
        this.init(t, n);
    }
    var e = i.prototype;
    return (
      (e.init = function (n, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Xi)
        ) {
          this.update = this.refresh = this.kill = Sn;
          return;
        }
        n = Na(en(n) || Qr(n) || n.nodeType ? { trigger: n } : n, zr);
        var s = n,
          a = s.onUpdate,
          l = s.toggleClass,
          u = s.id,
          g = s.onToggle,
          C = s.onRefresh,
          y = s.scrub,
          S = s.trigger,
          f = s.pin,
          A = s.pinSpacing,
          E = s.invalidateOnRefresh,
          _ = s.anticipatePin,
          O = s.onScrubComplete,
          q = s.onSnapComplete,
          k = s.once,
          m = s.snap,
          h = s.pinReparent,
          d = s.pinSpacer,
          b = s.containerAnimation,
          M = s.fastScrollEnd,
          j = s.preventOverlaps,
          H =
            n.horizontal || (n.containerAnimation && n.horizontal !== !1)
              ? qt
              : ut,
          ie = !y && y !== 0,
          v = Ut(n.scroller || ye),
          P = U.core.getCache(v),
          L = li(v),
          R =
            ("pinType" in n
              ? n.pinType
              : Bn(v, "pinType") || (L && "fixed")) === "fixed",
          oe = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack],
          N = ie && n.toggleActions.split(" "),
          J = "markers" in n ? n.markers : zr.markers,
          te = L ? 0 : parseFloat(an(v)["border" + H.p2 + Oi]) || 0,
          p = this,
          I =
            n.onRefreshInit &&
            function () {
              return n.onRefreshInit(p);
            },
          Qe = Bu(v, L, H),
          Ct = Yu(v, L),
          ne = 0,
          W = 0,
          Xe = 0,
          Oe = Vn(v, H),
          je,
          Y,
          B,
          fe,
          se,
          Q,
          he,
          Z,
          Ze,
          x,
          We,
          ze,
          Bt,
          de,
          Ue,
          ft,
          It,
          Ce,
          be,
          Je,
          xe,
          cn,
          ht,
          st,
          qe,
          ge,
          nn,
          Pn,
          ke,
          xt,
          Me,
          z,
          gn,
          dt,
          kt,
          ot,
          bt,
          Yt,
          Mt;
        if (
          ((p._startClamp = p._endClamp = !1),
          (p._dir = H),
          (_ *= 45),
          (p.scroller = v),
          (p.scroll = b ? b.time.bind(b) : Oe),
          (fe = Oe()),
          (p.vars = n),
          (r = r || n.animation),
          "refreshPriority" in n &&
            ((gl = 1), n.refreshPriority === -9999 && (sr = p)),
          (P.tweenScroll = P.tweenScroll || {
            top: za(v, ut),
            left: za(v, qt),
          }),
          (p.tweenTo = je = P.tweenScroll[H.p]),
          (p.scrubDuration = function ($) {
            (gn = Qr($) && $),
              gn
                ? z
                  ? z.duration($)
                  : (z = U.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      duration: gn,
                      paused: !0,
                      onComplete: function () {
                        return O && O(p);
                      },
                    }))
                : (z && z.progress(1).kill(), (z = 0));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !p.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                n.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (p.animation = r.pause()),
            (r.scrollTrigger = p),
            p.scrubDuration(y),
            (xt = 0),
            u || (u = r.vars.id)),
          m &&
            ((!ni(m) || m.push) && (m = { snapTo: m }),
            "scrollBehavior" in Re.style &&
              U.set(L ? [Re, pn] : v, { scrollBehavior: "auto" }),
            me.forEach(function ($) {
              return (
                Nt($) &&
                $.target === (L ? Fe.scrollingElement || pn : v) &&
                ($.smooth = !1)
              );
            }),
            (B = Nt(m.snapTo)
              ? m.snapTo
              : m.snapTo === "labels"
              ? Xu(r)
              : m.snapTo === "labelsDirectional"
              ? ju(r)
              : m.directional !== !1
              ? function ($, ue) {
                  return _o(m.snapTo)($, Lt() - W < 500 ? 0 : ue.direction);
                }
              : U.utils.snap(m.snapTo)),
            (dt = m.duration || { min: 0.1, max: 2 }),
            (dt = ni(dt) ? Ai(dt.min, dt.max) : Ai(dt, dt)),
            (kt = U.delayedCall(m.delay || gn / 2 || 0.1, function () {
              var $ = Oe(),
                ue = Lt() - W < 500,
                X = je.tween;
              if (
                (ue || Math.abs(p.getVelocity()) < 10) &&
                !X &&
                !us &&
                ne !== $
              ) {
                var re = ($ - Q) / de,
                  Be = r && !ie ? r.totalProgress() : re,
                  G = ue ? 0 : ((Be - Me) / (Lt() - Gr)) * 1e3 || 0,
                  Te = U.utils.clamp(-re, 1 - re, (vi(G / 2) * G) / 0.185),
                  ce = re + (m.inertia === !1 ? 0 : Te),
                  Se = Ai(0, 1, B(ce, p)),
                  Ee = Math.round(Q + Se * de),
                  _e = m,
                  Le = _e.onStart,
                  Ae = _e.onInterrupt,
                  at = _e.onComplete;
                if ($ <= he && $ >= Q && Ee !== $) {
                  if (X && !X._initted && X.data <= vi(Ee - $)) return;
                  m.inertia === !1 && (Te = Se - re),
                    je(
                      Ee,
                      {
                        duration: dt(
                          vi(
                            (Math.max(vi(ce - Be), vi(Se - Be)) * 0.185) /
                              G /
                              0.05 || 0
                          )
                        ),
                        ease: m.ease || "power3",
                        data: vi(Ee - $),
                        onInterrupt: function () {
                          return kt.restart(!0) && Ae && Ae(p);
                        },
                        onComplete: function () {
                          p.update(),
                            (ne = Oe()),
                            (xt = Me =
                              r && !ie ? r.totalProgress() : p.progress),
                            q && q(p),
                            at && at(p);
                        },
                      },
                      $,
                      Te * de,
                      Ee - $ - Te * de
                    ),
                    Le && Le(p, je.tween);
                }
              } else p.isActive && ne !== $ && kt.restart(!0);
            }).pause())),
          u && (uo[u] = p),
          (S = p.trigger = Ut(S || (f !== !0 && f))),
          (Mt = S && S._gsap && S._gsap.stRevert),
          Mt && (Mt = Mt(p)),
          (f = f === !0 ? S : Ut(f)),
          en(l) && (l = { targets: S, className: l }),
          f &&
            (A === !1 ||
              A === on ||
              (A =
                !A &&
                f.parentNode &&
                f.parentNode.style &&
                an(f.parentNode).display === "flex"
                  ? !1
                  : nt),
            (p.pin = f),
            (Y = U.core.getCache(f)),
            Y.spacer
              ? (Ue = Y.pinState)
              : (d &&
                  ((d = Ut(d)),
                  d && !d.nodeType && (d = d.current || d.nativeElement),
                  (Y.spacerIsNative = !!d),
                  d && (Y.spacerState = Br(d))),
                (Y.spacer = Ce = d || Fe.createElement("div")),
                Ce.classList.add("pin-spacer"),
                u && Ce.classList.add("pin-spacer-" + u),
                (Y.pinState = Ue = Br(f))),
            n.force3D !== !1 && U.set(f, { force3D: !0 }),
            (p.spacer = Ce = Y.spacer),
            (ke = an(f)),
            (st = ke[A + H.os2]),
            (Je = U.getProperty(f)),
            (xe = U.quickSetter(f, H.a, St)),
            Vs(f, Ce, ke),
            (It = Br(f))),
          J)
        ) {
          (ze = ni(J) ? Na(J, Ha) : Ha),
            (x = Ur("scroller-start", u, v, H, ze, 0)),
            (We = Ur("scroller-end", u, v, H, ze, 0, x)),
            (be = x["offset" + H.op.d2]);
          var D = Ut(Bn(v, "content") || v);
          (Z = this.markerStart = Ur("start", u, D, H, ze, be, 0, b)),
            (Ze = this.markerEnd = Ur("end", u, D, H, ze, be, 0, b)),
            b && (Yt = U.quickSetter([Z, Ze], H.a, St)),
            !R &&
              !(bn.length && Bn(v, "fixedMarkers") === !0) &&
              (Vu(L ? Re : v),
              U.set([x, We], { force3D: !0 }),
              (ge = U.quickSetter(x, H.a, St)),
              (Pn = U.quickSetter(We, H.a, St)));
        }
        if (b) {
          var V = b.vars.onUpdate,
            ae = b.vars.onUpdateParams;
          b.eventCallback("onUpdate", function () {
            p.update(0, 0, 1), V && V.apply(b, ae || []);
          });
        }
        if (
          ((p.previous = function () {
            return pe[pe.indexOf(p) - 1];
          }),
          (p.next = function () {
            return pe[pe.indexOf(p) + 1];
          }),
          (p.revert = function ($, ue) {
            if (!ue) return p.kill(!0);
            var X = $ !== !1 || !p.enabled,
              re = At;
            X !== p.isReverted &&
              (X &&
                ((ot = Math.max(Oe(), p.scroll.rec || 0)),
                (Xe = p.progress),
                (bt = r && r.progress())),
              Z &&
                [Z, Ze, x, We].forEach(function (Be) {
                  return (Be.style.display = X ? "none" : "block");
                }),
              X && ((At = p), p.update(X)),
              f &&
                (!h || !p.isActive) &&
                (X ? Qu(f, Ce, Ue) : Vs(f, Ce, an(f), qe)),
              X || p.update(X),
              (At = re),
              (p.isReverted = X));
          }),
          (p.refresh = function ($, ue, X, re) {
            if (!((At || !p.enabled) && !ue)) {
              if (f && $ && ln) {
                mt(i, "scrollEnd", xl);
                return;
              }
              !Rt && I && I(p),
                (At = p),
                je.tween && !X && (je.tween.kill(), (je.tween = 0)),
                z && z.pause(),
                E && r && r.revert({ kill: !1 }).invalidate(),
                p.isReverted || p.revert(!0, !0),
                (p._subPinOffset = !1);
              var Be = Qe(),
                G = Ct(),
                Te = b ? b.duration() : Mn(v, H),
                ce = de <= 0.01,
                Se = 0,
                Ee = re || 0,
                _e = ni(X) ? X.end : n.end,
                Le = n.endTrigger || S,
                Ae = ni(X)
                  ? X.start
                  : n.start || (n.start === 0 || !S ? 0 : f ? "0 0" : "0 100%"),
                at = (p.pinnedContainer =
                  n.pinnedContainer && Ut(n.pinnedContainer, p)),
                $t = (S && Math.max(0, pe.indexOf(p))) || 0,
                lt = $t,
                Ne,
                Ye,
                Vt,
                mn,
                Ke,
                He,
                Tt,
                Xn,
                Pi,
                Rn,
                Ft,
                Ln,
                Tn;
              for (
                J &&
                ni(X) &&
                ((Ln = U.getProperty(x, H.p)), (Tn = U.getProperty(We, H.p)));
                lt--;

              )
                (He = pe[lt]),
                  He.end || He.refresh(0, 1) || (At = p),
                  (Tt = He.pin),
                  Tt &&
                    (Tt === S || Tt === f || Tt === at) &&
                    !He.isReverted &&
                    (Rn || (Rn = []), Rn.unshift(He), He.revert(!0, !0)),
                  He !== pe[lt] && ($t--, lt--);
              for (
                Nt(Ae) && (Ae = Ae(p)),
                  Ae = Pa(Ae, "start", p),
                  Q =
                    Fa(
                      Ae,
                      S,
                      Be,
                      H,
                      Oe(),
                      Z,
                      x,
                      p,
                      G,
                      te,
                      R,
                      Te,
                      b,
                      p._startClamp && "_startClamp"
                    ) || (f ? -0.001 : 0),
                  Nt(_e) && (_e = _e(p)),
                  en(_e) &&
                    !_e.indexOf("+=") &&
                    (~_e.indexOf(" ")
                      ? (_e = (en(Ae) ? Ae.split(" ")[0] : "") + _e)
                      : ((Se = Zr(_e.substr(2), Be)),
                        (_e = en(Ae)
                          ? Ae
                          : (b
                              ? U.utils.mapRange(
                                  0,
                                  b.duration(),
                                  b.scrollTrigger.start,
                                  b.scrollTrigger.end,
                                  Q
                                )
                              : Q) + Se),
                        (Le = S))),
                  _e = Pa(_e, "end", p),
                  he =
                    Math.max(
                      Q,
                      Fa(
                        _e || (Le ? "100% 0" : Te),
                        Le,
                        Be,
                        H,
                        Oe() + Se,
                        Ze,
                        We,
                        p,
                        G,
                        te,
                        R,
                        Te,
                        b,
                        p._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Se = 0,
                  lt = $t;
                lt--;

              )
                (He = pe[lt]),
                  (Tt = He.pin),
                  Tt &&
                    He.start - He._pinPush <= Q &&
                    !b &&
                    He.end > 0 &&
                    ((Ne =
                      He.end -
                      (p._startClamp ? Math.max(0, He.start) : He.start)),
                    ((Tt === S && He.start - He._pinPush < Q) || Tt === at) &&
                      isNaN(Ae) &&
                      (Se += Ne * (1 - He.progress)),
                    Tt === f && (Ee += Ne));
              if (
                ((Q += Se),
                (he += Se),
                p._startClamp && (p._startClamp += Se),
                p._endClamp &&
                  !Rt &&
                  ((p._endClamp = he || -0.001), (he = Math.min(he, Mn(v, H)))),
                (de = he - Q || ((Q -= 0.01) && 0.001)),
                ce && (Xe = U.utils.clamp(0, 1, U.utils.normalize(Q, he, ot))),
                (p._pinPush = Ee),
                Z &&
                  Se &&
                  ((Ne = {}),
                  (Ne[H.a] = "+=" + Se),
                  at && (Ne[H.p] = "-=" + Oe()),
                  U.set([Z, Ze], Ne)),
                f)
              )
                (Ne = an(f)),
                  (mn = H === ut),
                  (Vt = Oe()),
                  (cn = parseFloat(Je(H.a)) + Ee),
                  !Te &&
                    he > 1 &&
                    ((Ft = (L ? Fe.scrollingElement || pn : v).style),
                    (Ft = {
                      style: Ft,
                      value: Ft["overflow" + H.a.toUpperCase()],
                    }),
                    L &&
                      an(Re)["overflow" + H.a.toUpperCase()] !== "scroll" &&
                      (Ft.style["overflow" + H.a.toUpperCase()] = "scroll")),
                  Vs(f, Ce, Ne),
                  (It = Br(f)),
                  (Ye = xn(f, !0)),
                  (Xn = R && Vn(v, mn ? qt : ut)()),
                  A &&
                    ((qe = [A + H.os2, de + Ee + St]),
                    (qe.t = Ce),
                    (lt = A === nt ? co(f, H) + de + Ee : 0),
                    lt && qe.push(H.d, lt + St),
                    Mi(qe),
                    at &&
                      pe.forEach(function (vn) {
                        vn.pin === at &&
                          vn.vars.pinSpacing !== !1 &&
                          (vn._subPinOffset = !0);
                      }),
                    R && Oe(ot)),
                  R &&
                    ((Ke = {
                      top: Ye.top + (mn ? Vt - Q : Xn) + St,
                      left: Ye.left + (mn ? Xn : Vt - Q) + St,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (Ke[si] = Ke["max" + Oi] = Math.ceil(Ye.width) + St),
                    (Ke[oi] = Ke["max" + So] = Math.ceil(Ye.height) + St),
                    (Ke[on] =
                      Ke[on + ir] =
                      Ke[on + tr] =
                      Ke[on + rr] =
                      Ke[on + nr] =
                        "0"),
                    (Ke[nt] = Ne[nt]),
                    (Ke[nt + ir] = Ne[nt + ir]),
                    (Ke[nt + tr] = Ne[nt + tr]),
                    (Ke[nt + rr] = Ne[nt + rr]),
                    (Ke[nt + nr] = Ne[nt + nr]),
                    (ft = Ju(Ue, Ke, h)),
                    Rt && Oe(0)),
                  r
                    ? ((Pi = r._initted),
                      Ws(1),
                      r.render(r.duration(), !0, !0),
                      (ht = Je(H.a) - cn + de + Ee),
                      (nn = Math.abs(de - ht) > 1),
                      R && nn && ft.splice(ft.length - 2, 2),
                      r.render(0, !0, !0),
                      Pi || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      Ws(0))
                    : (ht = de),
                  Ft &&
                    (Ft.value
                      ? (Ft.style["overflow" + H.a.toUpperCase()] = Ft.value)
                      : Ft.style.removeProperty("overflow-" + H.a));
              else if (S && Oe() && !b)
                for (Ye = S.parentNode; Ye && Ye !== Re; )
                  Ye._pinOffset &&
                    ((Q -= Ye._pinOffset), (he -= Ye._pinOffset)),
                    (Ye = Ye.parentNode);
              Rn &&
                Rn.forEach(function (vn) {
                  return vn.revert(!1, !0);
                }),
                (p.start = Q),
                (p.end = he),
                (fe = se = Rt ? ot : Oe()),
                !b && !Rt && (fe < ot && Oe(ot), (p.scroll.rec = 0)),
                p.revert(!1, !0),
                (W = Lt()),
                kt && ((ne = -1), kt.restart(!0)),
                (At = 0),
                r &&
                  ie &&
                  (r._initted || bt) &&
                  r.progress() !== bt &&
                  r.progress(bt || 0, !0).render(r.time(), !0, !0),
                (ce || Xe !== p.progress || b) &&
                  (r &&
                    !ie &&
                    r.totalProgress(
                      b && Q < -0.001 && !Xe ? U.utils.normalize(Q, he, 0) : Xe,
                      !0
                    ),
                  (p.progress = ce || (fe - Q) / de === Xe ? 0 : Xe)),
                f && A && (Ce._pinOffset = Math.round(p.progress * ht)),
                z && z.invalidate(),
                isNaN(Ln) ||
                  ((Ln -= U.getProperty(x, H.p)),
                  (Tn -= U.getProperty(We, H.p)),
                  Yr(x, H, Ln),
                  Yr(Z, H, Ln - (re || 0)),
                  Yr(We, H, Tn),
                  Yr(Ze, H, Tn - (re || 0))),
                ce && !Rt && p.update(),
                C && !Rt && !Bt && ((Bt = !0), C(p), (Bt = !1));
            }
          }),
          (p.getVelocity = function () {
            return ((Oe() - se) / (Lt() - Gr)) * 1e3 || 0;
          }),
          (p.endAnimation = function () {
            Bi(p.callbackAnimation),
              r &&
                (z
                  ? z.progress(1)
                  : r.paused()
                  ? ie || Bi(r, p.direction < 0, 1)
                  : Bi(r, r.reversed()));
          }),
          (p.labelToScroll = function ($) {
            return (
              (r &&
                r.labels &&
                (Q || p.refresh() || Q) + (r.labels[$] / r.duration()) * de) ||
              0
            );
          }),
          (p.getTrailing = function ($) {
            var ue = pe.indexOf(p),
              X =
                p.direction > 0 ? pe.slice(0, ue).reverse() : pe.slice(ue + 1);
            return (
              en($)
                ? X.filter(function (re) {
                    return re.vars.preventOverlaps === $;
                  })
                : X
            ).filter(function (re) {
              return p.direction > 0 ? re.end <= Q : re.start >= he;
            });
          }),
          (p.update = function ($, ue, X) {
            if (!(b && !X && !$)) {
              var re = Rt === !0 ? ot : p.scroll(),
                Be = $ ? 0 : (re - Q) / de,
                G = Be < 0 ? 0 : Be > 1 ? 1 : Be || 0,
                Te = p.progress,
                ce,
                Se,
                Ee,
                _e,
                Le,
                Ae,
                at,
                $t;
              if (
                (ue &&
                  ((se = fe),
                  (fe = b ? Oe() : re),
                  m && ((Me = xt), (xt = r && !ie ? r.totalProgress() : G))),
                _ &&
                  !G &&
                  f &&
                  !At &&
                  !Ir &&
                  ln &&
                  Q < re + ((re - se) / (Lt() - Gr)) * _ &&
                  (G = 1e-4),
                G !== Te && p.enabled)
              ) {
                if (
                  ((ce = p.isActive = !!G && G < 1),
                  (Se = !!Te && Te < 1),
                  (Ae = ce !== Se),
                  (Le = Ae || !!G != !!Te),
                  (p.direction = G > Te ? 1 : -1),
                  (p.progress = G),
                  Le &&
                    !At &&
                    ((Ee = G && !Te ? 0 : G === 1 ? 1 : Te === 1 ? 2 : 3),
                    ie &&
                      ((_e =
                        (!Ae && N[Ee + 1] !== "none" && N[Ee + 1]) || N[Ee]),
                      ($t =
                        r &&
                        (_e === "complete" || _e === "reset" || _e in r)))),
                  j &&
                    (Ae || $t) &&
                    ($t || y || !r) &&
                    (Nt(j)
                      ? j(p)
                      : p.getTrailing(j).forEach(function (Vt) {
                          return Vt.endAnimation();
                        })),
                  ie ||
                    (z && !At && !Ir
                      ? (z._dp._time - z._start !== z._time &&
                          z.render(z._dp._time - z._start),
                        z.resetTo
                          ? z.resetTo("totalProgress", G, r._tTime / r._tDur)
                          : ((z.vars.totalProgress = G),
                            z.invalidate().restart()))
                      : r && r.totalProgress(G, !!(At && (W || $)))),
                  f)
                ) {
                  if (($ && A && (Ce.style[A + H.os2] = st), !R))
                    xe(ji(cn + ht * G));
                  else if (Le) {
                    if (
                      ((at = !$ && G > Te && he + 1 > re && re + 1 >= Mn(v, H)),
                      h)
                    )
                      if (!$ && (ce || at)) {
                        var lt = xn(f, !0),
                          Ne = re - Q;
                        Wa(
                          f,
                          Re,
                          lt.top + (H === ut ? Ne : 0) + St,
                          lt.left + (H === ut ? 0 : Ne) + St
                        );
                      } else Wa(f, Ce);
                    Mi(ce || at ? ft : It),
                      (nn && G < 1 && ce) || xe(cn + (G === 1 && !at ? ht : 0));
                  }
                }
                m && !je.tween && !At && !Ir && kt.restart(!0),
                  l &&
                    (Ae || (k && G && (G < 1 || !zs))) &&
                    as(l.targets).forEach(function (Vt) {
                      return Vt.classList[ce || k ? "add" : "remove"](
                        l.className
                      );
                    }),
                  a && !ie && !$ && a(p),
                  Le && !At
                    ? (ie &&
                        ($t &&
                          (_e === "complete"
                            ? r.pause().totalProgress(1)
                            : _e === "reset"
                            ? r.restart(!0).pause()
                            : _e === "restart"
                            ? r.restart(!0)
                            : r[_e]()),
                        a && a(p)),
                      (Ae || !zs) &&
                        (g && Ae && Bs(p, g),
                        oe[Ee] && Bs(p, oe[Ee]),
                        k && (G === 1 ? p.kill(!1, 1) : (oe[Ee] = 0)),
                        Ae ||
                          ((Ee = G === 1 ? 1 : 3), oe[Ee] && Bs(p, oe[Ee]))),
                      M &&
                        !ce &&
                        Math.abs(p.getVelocity()) > (Qr(M) ? M : 2500) &&
                        (Bi(p.callbackAnimation),
                        z
                          ? z.progress(1)
                          : Bi(r, _e === "reverse" ? 1 : !G, 1)))
                    : ie && a && !At && a(p);
              }
              if (Pn) {
                var Ye = b ? (re / b.duration()) * (b._caScrollDist || 0) : re;
                ge(Ye + (x._isFlipped ? 1 : 0)), Pn(Ye);
              }
              Yt && Yt((-re / b.duration()) * (b._caScrollDist || 0));
            }
          }),
          (p.enable = function ($, ue) {
            p.enabled ||
              ((p.enabled = !0),
              mt(v, "resize", Ki),
              L || mt(v, "scroll", yi),
              I && mt(i, "refreshInit", I),
              $ !== !1 && ((p.progress = Xe = 0), (fe = se = ne = Oe())),
              ue !== !1 && p.refresh());
          }),
          (p.getTween = function ($) {
            return $ && je ? je.tween : z;
          }),
          (p.setPositions = function ($, ue, X, re) {
            if (b) {
              var Be = b.scrollTrigger,
                G = b.duration(),
                Te = Be.end - Be.start;
              ($ = Be.start + (Te * $) / G), (ue = Be.start + (Te * ue) / G);
            }
            p.refresh(
              !1,
              !1,
              {
                start: Ra($, X && !!p._startClamp),
                end: Ra(ue, X && !!p._endClamp),
              },
              re
            ),
              p.update();
          }),
          (p.adjustPinSpacing = function ($) {
            if (qe && $) {
              var ue = qe.indexOf(H.d) + 1;
              (qe[ue] = parseFloat(qe[ue]) + $ + St),
                (qe[1] = parseFloat(qe[1]) + $ + St),
                Mi(qe);
            }
          }),
          (p.disable = function ($, ue) {
            if (
              p.enabled &&
              ($ !== !1 && p.revert(!0, !0),
              (p.enabled = p.isActive = !1),
              ue || (z && z.pause()),
              (ot = 0),
              Y && (Y.uncache = 1),
              I && gt(i, "refreshInit", I),
              kt && (kt.pause(), je.tween && je.tween.kill() && (je.tween = 0)),
              !L)
            ) {
              for (var X = pe.length; X--; )
                if (pe[X].scroller === v && pe[X] !== p) return;
              gt(v, "resize", Ki), L || gt(v, "scroll", yi);
            }
          }),
          (p.kill = function ($, ue) {
            p.disable($, ue), z && !ue && z.kill(), u && delete uo[u];
            var X = pe.indexOf(p);
            X >= 0 && pe.splice(X, 1),
              X === Pt && es > 0 && Pt--,
              (X = 0),
              pe.forEach(function (re) {
                return re.scroller === p.scroller && (X = 1);
              }),
              X || Rt || (p.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                $ && r.revert({ kill: !1 }),
                ue || r.kill()),
              Z &&
                [Z, Ze, x, We].forEach(function (re) {
                  return re.parentNode && re.parentNode.removeChild(re);
                }),
              sr === p && (sr = 0),
              f &&
                (Y && (Y.uncache = 1),
                (X = 0),
                pe.forEach(function (re) {
                  return re.pin === f && X++;
                }),
                X || (Y.spacer = 0)),
              n.onKill && n.onKill(p);
          }),
          pe.push(p),
          p.enable(!1, !1),
          Mt && Mt(p),
          r && r.add && !de)
        ) {
          var ve = p.update;
          (p.update = function () {
            (p.update = ve), Q || he || p.refresh();
          }),
            U.delayedCall(0.01, p.update),
            (de = 0.01),
            (Q = he = 0);
        } else p.refresh();
        f && Gu();
      }),
      (i.register = function (n) {
        return (
          bi ||
            ((U = n || _l()), Sl() && window.document && i.enable(), (bi = Xi)),
          bi
        );
      }),
      (i.defaults = function (n) {
        if (n) for (var r in n) zr[r] = n[r];
        return zr;
      }),
      (i.disable = function (n, r) {
        (Xi = 0),
          pe.forEach(function (a) {
            return a[r ? "kill" : "disable"](n);
          }),
          gt(ye, "wheel", yi),
          gt(Fe, "scroll", yi),
          clearInterval(Hr),
          gt(Fe, "touchcancel", Sn),
          gt(Re, "touchstart", Sn),
          Fr(gt, Fe, "pointerdown,touchstart,mousedown", La),
          Fr(gt, Fe, "pointerup,touchend,mouseup", qa),
          os.kill(),
          $r(gt);
        for (var s = 0; s < me.length; s += 3)
          Wr(gt, me[s], me[s + 1]), Wr(gt, me[s], me[s + 2]);
      }),
      (i.enable = function () {
        if (
          ((ye = window),
          (Fe = document),
          (pn = Fe.documentElement),
          (Re = Fe.body),
          U &&
            ((as = U.utils.toArray),
            (Ai = U.utils.clamp),
            (lo = U.core.context || Sn),
            (Ws = U.core.suppressOverwrites || Sn),
            (mo = ye.history.scrollRestoration || "auto"),
            (fo = ye.pageYOffset),
            U.core.globals("ScrollTrigger", i),
            Re))
        ) {
          (Xi = 1),
            (ki = document.createElement("div")),
            (ki.style.height = "100vh"),
            (ki.style.position = "absolute"),
            Ol(),
            Uu(),
            rt.register(U),
            (i.isTouch = rt.isTouch),
            (Fn =
              rt.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            mt(ye, "wheel", yi),
            (pl = [ye, Fe, pn, Re]),
            U.matchMedia
              ? ((i.matchMedia = function (u) {
                  var g = U.matchMedia(),
                    C;
                  for (C in u) g.add(C, u[C]);
                  return g;
                }),
                U.addEventListener("matchMediaInit", function () {
                  return bo();
                }),
                U.addEventListener("matchMediaRevert", function () {
                  return kl();
                }),
                U.addEventListener("matchMedia", function () {
                  ii(0, 1), ui("matchMedia");
                }),
                U.matchMedia("(orientation: portrait)", function () {
                  return Ys(), Ys;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Ys(),
            mt(Fe, "scroll", yi);
          var n = Re.style,
            r = n.borderTopStyle,
            s = U.core.Animation.prototype,
            a,
            l;
          for (
            s.revert ||
              Object.defineProperty(s, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              n.borderTopStyle = "solid",
              a = xn(Re),
              ut.m = Math.round(a.top + ut.sc()) || 0,
              qt.m = Math.round(a.left + qt.sc()) || 0,
              r ? (n.borderTopStyle = r) : n.removeProperty("border-top-style"),
              Hr = setInterval(Ia, 250),
              U.delayedCall(0.5, function () {
                return (Ir = 0);
              }),
              mt(Fe, "touchcancel", Sn),
              mt(Re, "touchstart", Sn),
              Fr(mt, Fe, "pointerdown,touchstart,mousedown", La),
              Fr(mt, Fe, "pointerup,touchend,mouseup", qa),
              ao = U.utils.checkPrefix("transform"),
              ts.push(ao),
              bi = Lt(),
              os = U.delayedCall(0.2, ii).pause(),
              Ti = [
                Fe,
                "visibilitychange",
                function () {
                  var u = ye.innerWidth,
                    g = ye.innerHeight;
                  Fe.hidden
                    ? ((Oa = u), (Da = g))
                    : (Oa !== u || Da !== g) && Ki();
                },
                Fe,
                "DOMContentLoaded",
                ii,
                ye,
                "load",
                ii,
                ye,
                "resize",
                Ki,
              ],
              $r(mt),
              pe.forEach(function (u) {
                return u.enable(0, 1);
              }),
              l = 0;
            l < me.length;
            l += 3
          )
            Wr(gt, me[l], me[l + 1]), Wr(gt, me[l], me[l + 2]);
        }
      }),
      (i.config = function (n) {
        "limitCallbacks" in n && (zs = !!n.limitCallbacks);
        var r = n.syncInterval;
        (r && clearInterval(Hr)) || ((Hr = r) && setInterval(Ia, r)),
          "ignoreMobileResize" in n &&
            (vl = i.isTouch === 1 && n.ignoreMobileResize),
          "autoRefreshEvents" in n &&
            ($r(gt) || $r(mt, n.autoRefreshEvents || "none"),
            (ml = (n.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (i.scrollerProxy = function (n, r) {
        var s = Ut(n),
          a = me.indexOf(s),
          l = li(s);
        ~a && me.splice(a, l ? 6 : 2),
          r && (l ? bn.unshift(ye, r, Re, r, pn, r) : bn.unshift(s, r));
      }),
      (i.clearMatchMedia = function (n) {
        pe.forEach(function (r) {
          return r._ctx && r._ctx.query === n && r._ctx.kill(!0, !0);
        });
      }),
      (i.isInViewport = function (n, r, s) {
        var a = (en(n) ? Ut(n) : n).getBoundingClientRect(),
          l = a[s ? si : oi] * r || 0;
        return s
          ? a.right - l > 0 && a.left + l < ye.innerWidth
          : a.bottom - l > 0 && a.top + l < ye.innerHeight;
      }),
      (i.positionInViewport = function (n, r, s) {
        en(n) && (n = Ut(n));
        var a = n.getBoundingClientRect(),
          l = a[s ? si : oi],
          u =
            r == null
              ? l / 2
              : r in ls
              ? ls[r] * l
              : ~r.indexOf("%")
              ? (parseFloat(r) * l) / 100
              : parseFloat(r) || 0;
        return s ? (a.left + u) / ye.innerWidth : (a.top + u) / ye.innerHeight;
      }),
      (i.killAll = function (n) {
        if (
          (pe.slice(0).forEach(function (s) {
            return s.vars.id !== "ScrollSmoother" && s.kill();
          }),
          n !== !0)
        ) {
          var r = ci.killAll || [];
          (ci = {}),
            r.forEach(function (s) {
              return s();
            });
        }
      }),
      i
    );
  })();
le.version = "3.12.2";
le.saveStyles = function (i) {
  return i
    ? as(i).forEach(function (e) {
        if (e && e.style) {
          var t = Jt.indexOf(e);
          t >= 0 && Jt.splice(t, 5),
            Jt.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              U.core.getCache(e),
              lo()
            );
        }
      })
    : Jt;
};
le.revert = function (i, e) {
  return bo(!i, e);
};
le.create = function (i, e) {
  return new le(i, e);
};
le.refresh = function (i) {
  return i ? Ki() : (bi || le.register()) && ii(!0);
};
le.update = function (i) {
  return ++me.cache && On(i === !0 ? 2 : 0);
};
le.clearScrollMemory = Ml;
le.maxScroll = function (i, e) {
  return Mn(i, e ? qt : ut);
};
le.getScrollFunc = function (i, e) {
  return Vn(Ut(i), e ? qt : ut);
};
le.getById = function (i) {
  return uo[i];
};
le.getAll = function () {
  return pe.filter(function (i) {
    return i.vars.id !== "ScrollSmoother";
  });
};
le.isScrolling = function () {
  return !!ln;
};
le.snapDirectional = _o;
le.addEventListener = function (i, e) {
  var t = ci[i] || (ci[i] = []);
  ~t.indexOf(e) || t.push(e);
};
le.removeEventListener = function (i, e) {
  var t = ci[i],
    n = t && t.indexOf(e);
  n >= 0 && t.splice(n, 1);
};
le.batch = function (i, e) {
  var t = [],
    n = {},
    r = e.interval || 0.016,
    s = e.batchMax || 1e9,
    a = function (g, C) {
      var y = [],
        S = [],
        f = U.delayedCall(r, function () {
          C(y, S), (y = []), (S = []);
        }).pause();
      return function (A) {
        y.length || f.restart(!0),
          y.push(A.trigger),
          S.push(A),
          s <= y.length && f.progress(1);
      };
    },
    l;
  for (l in e)
    n[l] =
      l.substr(0, 2) === "on" && Nt(e[l]) && l !== "onRefreshInit"
        ? a(l, e[l])
        : e[l];
  return (
    Nt(s) &&
      ((s = s()),
      mt(le, "refresh", function () {
        return (s = e.batchMax());
      })),
    as(i).forEach(function (u) {
      var g = {};
      for (l in n) g[l] = n[l];
      (g.trigger = u), t.push(le.create(g));
    }),
    t
  );
};
var Ua = function (e, t, n, r) {
    return (
      t > r ? e(r) : t < 0 && e(0),
      n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
    );
  },
  Xs = function i(e, t) {
    t === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          t === !0
            ? "auto"
            : t
            ? "pan-" + t + (rt.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === pn && i(Re, t);
  },
  Vr = { auto: 1, scroll: 1 },
  tf = function (e) {
    var t = e.event,
      n = e.target,
      r = e.axis,
      s = (t.changedTouches ? t.changedTouches[0] : t).target,
      a = s._gsap || U.core.getCache(s),
      l = Lt(),
      u;
    if (!a._isScrollT || l - a._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== Re &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(Vr[(u = an(s)).overflowY] || Vr[u.overflowX]));

      )
        s = s.parentNode;
      (a._isScroll =
        s &&
        s !== n &&
        !li(s) &&
        (Vr[(u = an(s)).overflowY] || Vr[u.overflowX])),
        (a._isScrollT = l);
    }
    (a._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
  },
  Pl = function (e, t, n, r) {
    return rt.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (r = r && tf),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return n && mt(Fe, rt.eventTypes[0], Ya, !1, !0);
      },
      onDisable: function () {
        return gt(Fe, rt.eventTypes[0], Ya, !0);
      },
    });
  },
  nf = /(input|label|select|textarea)/i,
  Ba,
  Ya = function (e) {
    var t = nf.test(e.target.tagName);
    (t || Ba) && ((e._gsapAllow = !0), (Ba = t));
  },
  rf = function (e) {
    ni(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var t = e,
      n = t.normalizeScrollX,
      r = t.momentum,
      s = t.allowNestedScroll,
      a = t.onRelease,
      l,
      u,
      g = Ut(e.target) || pn,
      C = U.core.globals().ScrollSmoother,
      y = C && C.get(),
      S =
        Fn &&
        ((e.content && Ut(e.content)) ||
          (y && e.content !== !1 && !y.smooth() && y.content())),
      f = Vn(g, ut),
      A = Vn(g, qt),
      E = 1,
      _ =
        (rt.isTouch && ye.visualViewport
          ? ye.visualViewport.scale * ye.visualViewport.width
          : ye.outerWidth) / ye.innerWidth,
      O = 0,
      q = Nt(r)
        ? function () {
            return r(l);
          }
        : function () {
            return r || 2.8;
          },
      k,
      m,
      h = Pl(g, e.type, !0, s),
      d = function () {
        return (m = !1);
      },
      b = Sn,
      M = Sn,
      j = function () {
        (u = Mn(g, ut)),
          (M = Ai(Fn ? 1 : 0, u)),
          n && (b = Ai(0, Mn(g, qt))),
          (k = ai);
      },
      H = function () {
        (S._gsap.y = ji(parseFloat(S._gsap.y) + f.offset) + "px"),
          (S.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(S._gsap.y) +
            ", 0, 1)"),
          (f.offset = f.cacheID = 0);
      },
      ie = function () {
        if (m) {
          requestAnimationFrame(d);
          var J = ji(l.deltaY / 2),
            te = M(f.v - J);
          if (S && te !== f.v + f.offset) {
            f.offset = te - f.v;
            var p = ji((parseFloat(S && S._gsap.y) || 0) - f.offset);
            (S.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              p +
              ", 0, 1)"),
              (S._gsap.y = p + "px"),
              (f.cacheID = me.cache),
              On();
          }
          return !0;
        }
        f.offset && H(), (m = !0);
      },
      v,
      P,
      L,
      R,
      oe = function () {
        j(),
          v.isActive() &&
            v.vars.scrollY > u &&
            (f() > u ? v.progress(1) && f(u) : v.resetTo("scrollY", u));
      };
    return (
      S && U.set(S, { y: "+=0" }),
      (e.ignoreCheck = function (N) {
        return (
          (Fn && N.type === "touchmove" && ie()) ||
          (E > 1.05 && N.type !== "touchstart") ||
          l.isGesturing ||
          (N.touches && N.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        m = !1;
        var N = E;
        (E = ji(((ye.visualViewport && ye.visualViewport.scale) || 1) / _)),
          v.pause(),
          N !== E && Xs(g, E > 1.01 ? !0 : n ? !1 : "x"),
          (P = A()),
          (L = f()),
          j(),
          (k = ai);
      }),
      (e.onRelease = e.onGestureStart =
        function (N, J) {
          if ((f.offset && H(), !J)) R.restart(!0);
          else {
            me.cache++;
            var te = q(),
              p,
              I;
            n &&
              ((p = A()),
              (I = p + (te * 0.05 * -N.velocityX) / 0.227),
              (te *= Ua(A, p, I, Mn(g, qt))),
              (v.vars.scrollX = b(I))),
              (p = f()),
              (I = p + (te * 0.05 * -N.velocityY) / 0.227),
              (te *= Ua(f, p, I, Mn(g, ut))),
              (v.vars.scrollY = M(I)),
              v.invalidate().duration(te).play(0.01),
              ((Fn && v.vars.scrollY >= u) || p >= u - 1) &&
                U.to({}, { onUpdate: oe, duration: te });
          }
          a && a(N);
        }),
      (e.onWheel = function () {
        v._ts && v.pause(), Lt() - O > 1e3 && ((k = 0), (O = Lt()));
      }),
      (e.onChange = function (N, J, te, p, I) {
        if (
          (ai !== k && j(),
          J && n && A(b(p[2] === J ? P + (N.startX - N.x) : A() + J - p[1])),
          te)
        ) {
          f.offset && H();
          var Qe = I[2] === te,
            Ct = Qe ? L + N.startY - N.y : f() + te - I[1],
            ne = M(Ct);
          Qe && Ct !== ne && (L += ne - Ct), f(ne);
        }
        (te || J) && On();
      }),
      (e.onEnable = function () {
        Xs(g, n ? !1 : "x"),
          le.addEventListener("refresh", oe),
          mt(ye, "resize", oe),
          f.smooth &&
            ((f.target.style.scrollBehavior = "auto"),
            (f.smooth = A.smooth = !1)),
          h.enable();
      }),
      (e.onDisable = function () {
        Xs(g, !0),
          gt(ye, "resize", oe),
          le.removeEventListener("refresh", oe),
          h.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (l = new rt(e)),
      (l.iOS = Fn),
      Fn && !f() && f(1),
      Fn && U.ticker.add(Sn),
      (R = l._dc),
      (v = U.to(l, {
        ease: "power4",
        paused: !0,
        scrollX: n ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Dl(f, f(), function () {
            return v.pause();
          }),
        },
        onUpdate: On,
        onComplete: R.vars.onComplete,
      })),
      l
    );
  };
le.sort = function (i) {
  return pe.sort(
    i ||
      function (e, t) {
        return (
          (e.vars.refreshPriority || 0) * -1e6 +
          e.start -
          (t.start + (t.vars.refreshPriority || 0) * -1e6)
        );
      }
  );
};
le.observe = function (i) {
  return new rt(i);
};
le.normalizeScroll = function (i) {
  if (typeof i > "u") return Zt;
  if (i === !0 && Zt) return Zt.enable();
  if (i === !1) return Zt && Zt.kill();
  var e = i instanceof rt ? i : rf(i);
  return Zt && Zt.target === e.target && Zt.kill(), li(e.target) && (Zt = e), e;
};
le.core = {
  _getVelocityProp: oo,
  _inputObserver: Pl,
  _scrollers: me,
  _proxies: bn,
  bridge: {
    ss: function () {
      ln || ui("scrollStart"), (ln = Lt());
    },
    ref: function () {
      return At;
    },
  },
};
_l() && U.registerPlugin(le);
it.registerPlugin(le);
class sf {
  constructor(e) {
    (this.DOM = { element: e.element }),
      (this.regionFormat = e.regionFormat ? e.regionFormat : "en-US"),
      (this.separator = e.separator ? e.separator : "."),
      (this.duration = e.duration ? e.duration : 2),
      (this.scrollStart = e.scrollStart ? e.scrollStart : "80%"),
      this.init();
  }
  init() {
    this.DOM.element.dataset.counterDuration &&
      (this.duration = this.DOM.element.dataset.counterDuration);
    const e = this.DOM.element.textContent;
    let t;
    if (
      (this.regionFormat != "en-US"
        ? (t = e.replace(/\./g, ""))
        : (t = e.replace(/,/g, "")),
      t.match(/\d+/g) !== null)
    ) {
      const r = t.replace(/\d+/g, (a) => `<span>${a}</span>`);
      this.DOM.element.innerHTML = r;
      const s = this.DOM.element.querySelector("span");
      (this.target = s.innerText),
        (s.innerText = "0"),
        (this.tl = it.to(s, {
          duration: this.duration,
          innerText: this.target,
          ease: "power2.out",
          onUpdate: () => {
            s.innerText = Math.round(s.innerText).toLocaleString(
              this.regionFormat
            );
          },
          scrollTrigger: {
            trigger: this.DOM.element,
            start: `top ${this.scrollStart}`,
            pinnedContainer: document.querySelector(".js--hs-a"),
          },
        }));
    }
  }
  refresh() {
    this.tl && this.tl.scrollTrigger.refresh();
  }
  destroy() {
    this.tl && this.tl.scrollTrigger.kill();
  }
}
/*!
 * ScrollToPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Ht,
  Rl,
  Dn,
  _n,
  Yn,
  Ll,
  ql,
  Xr,
  Nl = function () {
    return typeof window < "u";
  },
  Hl = function () {
    return Ht || (Nl() && (Ht = window.gsap) && Ht.registerPlugin && Ht);
  },
  Il = function (e) {
    return typeof e == "string";
  },
  Va = function (e) {
    return typeof e == "function";
  },
  lr = function (e, t) {
    var n = t === "x" ? "Width" : "Height",
      r = "scroll" + n,
      s = "client" + n;
    return e === Dn || e === _n || e === Yn
      ? Math.max(_n[r], Yn[r]) - (Dn["inner" + n] || _n[s] || Yn[s])
      : e[r] - e["offset" + n];
  },
  cr = function (e, t) {
    var n = "scroll" + (t === "x" ? "Left" : "Top");
    return (
      e === Dn &&
        (e.pageXOffset != null
          ? (n = "page" + t.toUpperCase() + "Offset")
          : (e = _n[n] != null ? _n : Yn)),
      function () {
        return e[n];
      }
    );
  },
  of = function (e, t, n, r) {
    if ((Va(e) && (e = e(t, n, r)), typeof e != "object"))
      return Il(e) && e !== "max" && e.charAt(1) !== "="
        ? { x: e, y: e }
        : { y: e };
    if (e.nodeType) return { y: e, x: e };
    var s = {},
      a;
    for (a in e) s[a] = a !== "onAutoKill" && Va(e[a]) ? e[a](t, n, r) : e[a];
    return s;
  },
  $l = function (e, t) {
    if (((e = Ll(e)[0]), !e || !e.getBoundingClientRect))
      return (
        console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 }
      );
    var n = e.getBoundingClientRect(),
      r = !t || t === Dn || t === Yn,
      s = r
        ? {
            top:
              _n.clientTop -
              (Dn.pageYOffset || _n.scrollTop || Yn.scrollTop || 0),
            left:
              _n.clientLeft -
              (Dn.pageXOffset || _n.scrollLeft || Yn.scrollLeft || 0),
          }
        : t.getBoundingClientRect(),
      a = { x: n.left - s.left, y: n.top - s.top };
    return !r && t && ((a.x += cr(t, "x")()), (a.y += cr(t, "y")())), a;
  },
  Xa = function (e, t, n, r, s) {
    return !isNaN(e) && typeof e != "object"
      ? parseFloat(e) - s
      : Il(e) && e.charAt(1) === "="
      ? parseFloat(e.substr(2)) * (e.charAt(0) === "-" ? -1 : 1) + r - s
      : e === "max"
      ? lr(t, n) - s
      : Math.min(lr(t, n), $l(e, t)[n] - s);
  },
  ja = function () {
    (Ht = Hl()),
      Nl() &&
        Ht &&
        typeof document < "u" &&
        document.body &&
        ((Dn = window),
        (Yn = document.body),
        (_n = document.documentElement),
        (Ll = Ht.utils.toArray),
        Ht.config({ autoKillThreshold: 7 }),
        (ql = Ht.config()),
        (Rl = 1));
  },
  fr = {
    version: "3.12.2",
    name: "scrollTo",
    rawVars: 1,
    register: function (e) {
      (Ht = e), ja();
    },
    init: function (e, t, n, r, s) {
      Rl || ja();
      var a = this,
        l = Ht.getProperty(e, "scrollSnapType");
      (a.isWin = e === Dn),
        (a.target = e),
        (a.tween = n),
        (t = of(t, r, e, s)),
        (a.vars = t),
        (a.autoKill = !!t.autoKill),
        (a.getX = cr(e, "x")),
        (a.getY = cr(e, "y")),
        (a.x = a.xPrev = a.getX()),
        (a.y = a.yPrev = a.getY()),
        Xr || (Xr = Ht.core.globals().ScrollTrigger),
        Ht.getProperty(e, "scrollBehavior") === "smooth" &&
          Ht.set(e, { scrollBehavior: "auto" }),
        l &&
          l !== "none" &&
          ((a.snap = 1),
          (a.snapInline = e.style.scrollSnapType),
          (e.style.scrollSnapType = "none")),
        t.x != null
          ? (a.add(a, "x", a.x, Xa(t.x, e, "x", a.x, t.offsetX || 0), r, s),
            a._props.push("scrollTo_x"))
          : (a.skipX = 1),
        t.y != null
          ? (a.add(a, "y", a.y, Xa(t.y, e, "y", a.y, t.offsetY || 0), r, s),
            a._props.push("scrollTo_y"))
          : (a.skipY = 1);
    },
    render: function (e, t) {
      for (
        var n = t._pt,
          r = t.target,
          s = t.tween,
          a = t.autoKill,
          l = t.xPrev,
          u = t.yPrev,
          g = t.isWin,
          C = t.snap,
          y = t.snapInline,
          S,
          f,
          A,
          E,
          _;
        n;

      )
        n.r(e, n.d), (n = n._next);
      (S = g || !t.skipX ? t.getX() : l),
        (f = g || !t.skipY ? t.getY() : u),
        (A = f - u),
        (E = S - l),
        (_ = ql.autoKillThreshold),
        t.x < 0 && (t.x = 0),
        t.y < 0 && (t.y = 0),
        a &&
          (!t.skipX && (E > _ || E < -_) && S < lr(r, "x") && (t.skipX = 1),
          !t.skipY && (A > _ || A < -_) && f < lr(r, "y") && (t.skipY = 1),
          t.skipX &&
            t.skipY &&
            (s.kill(),
            t.vars.onAutoKill &&
              t.vars.onAutoKill.apply(s, t.vars.onAutoKillParams || []))),
        g
          ? Dn.scrollTo(t.skipX ? S : t.x, t.skipY ? f : t.y)
          : (t.skipY || (r.scrollTop = t.y), t.skipX || (r.scrollLeft = t.x)),
        C &&
          (e === 1 || e === 0) &&
          ((f = r.scrollTop),
          (S = r.scrollLeft),
          y
            ? (r.style.scrollSnapType = y)
            : r.style.removeProperty("scroll-snap-type"),
          (r.scrollTop = f + 1),
          (r.scrollLeft = S + 1),
          (r.scrollTop = f),
          (r.scrollLeft = S)),
        (t.xPrev = t.x),
        (t.yPrev = t.y),
        Xr && Xr.update();
    },
    kill: function (e) {
      var t = e === "scrollTo";
      (t || e === "scrollTo_x") && (this.skipX = 1),
        (t || e === "scrollTo_y") && (this.skipY = 1);
    },
  };
fr.max = lr;
fr.getOffset = $l;
fr.buildGetter = cr;
Hl() && Ht.registerPlugin(fr);
it.registerPlugin(le);
it.registerPlugin(fr);
class af {
  constructor(e) {
    (this.DOM = { element: e.element, pin: e.pin }),
      (this.DOM.content = this.DOM.element.children[0]),
      (this.scrub = e.markers || 1),
      (this.markers = e.markers || !1),
      (this.invalidateOnRefresh = e.invalidateOnRefresh || !0),
      (this.anticipatePin = e.anticipatePin || 1),
      (this.startValues = e.startValues),
      this.DOM.element
        ? ((this.scrollTrigger = null),
          (this.scrollObserver = null),
          this.init(),
          this.events())
        : console.log("element must be defined");
  }
  init() {
    le.config({ ignoreMobileResize: !0 }),
      (this.scrollTrigger = le.create({
        trigger: this.DOM.element,
        start: this.getStart(),
        end: () => `+=${this.getScrollAmount() * -1}`,
        pin: this.DOM.pin,
        animation: this.tween(),
        scrub: this.scrub,
        invalidateOnRefresh: this.invalidateOnRefresh,
        markers: this.markers,
        anticipatePin: 1,
        pinType: "fixed",
      })),
      (this.scrollObserver = le.observe({
        target: ".c--hs-a",
        type: "touch",
        ease: "none",
        onDrag: (e) => {
          console.log(e.deltaX), console.log(e.deltaY);
          let t = Math.sqrt(e.deltaX * e.deltaX),
            n = Math.sqrt(e.deltaY * e.deltaY);
          t > n
            ? it.to(window, { scrollTo: { y: `-=${e.deltaX * 10}` } })
            : it.to(window, { scrollTo: { y: `-=${e.deltaY * 6}` } });
        },
      }));
  }
  events() {
    Pc("touch") ||
      window.addEventListener(
        "resize",
        no((e) => {}, 200)
      );
  }
  tween() {
    return it.to(this.DOM.content, {
      x: () => this.getScrollAmount(),
      ease: "none",
    });
  }
  getStart() {
    return window.innerWidth < this.startValues.breakpoint
      ? this.startValues.smallScreenPosition
      : this.startValues.bigScreenPosition;
  }
  getScrollAmount() {
    return -(this.DOM.content.scrollWidth - window.innerWidth);
  }
  destroy() {
    this.scrollTrigger &&
      (this.scrollTrigger.kill(), (this.scrollTrigger = null)),
      this.scrollObserver &&
        (this.scrollObserver.kill(), (this.scrollObserver = null)),
      (this.DOM = null);
  }
}
it.registerPlugin(le);
class lf {
  constructor(e) {
    (this.DOM = {
      element: e.element,
      pinnedContainer: e.pinnedContainer ? e.pinnedContainer : null,
    }),
      (this.animationOptions = e.animationOptions
        ? e.animationOptions
        : { autoAlpha: 0, y: 30, duration: 0.75, ease: "power2.out" }),
      (this.intitialTrigger = e.intitialTrigger
        ? e.intitialTrigger
        : "top 80%"),
      (this.markers = e.markers ? e.markers : !1),
      (this.type = e.type ? e.type : "from"),
      !this.DOM.element || this.DOM.element.length === 0
        ? console.warn("No elements provided.")
        : this.init();
  }
  init() {
    switch (
      ((this.tl = it.timeline({
        scrollTrigger: {
          trigger: this.DOM.element,
          pinnedContainer: this.DOM.pinnedContainer,
          start: this.intitialTrigger,
          markers: this.markers,
        },
      })),
      this.type)
    ) {
      case "from":
        this.tl.from(this.DOM.element, this.animationOptions);
        break;
      case "to":
        this.tl.to(this.DOM.element, this.animationOptions);
        break;
      case "fromTo":
        this.tl.fromTo(
          this.DOM.element,
          this.animationOptions[0],
          this.animationOptions[1]
        );
        break;
    }
  }
  refresh() {
    this.tl && this.tl.scrollTrigger.refresh();
  }
  destroy() {
    this.tl && this.tl.scrollTrigger.kill();
  }
}
var jr = window,
  Hn =
    jr.requestAnimationFrame ||
    jr.webkitRequestAnimationFrame ||
    jr.mozRequestAnimationFrame ||
    jr.msRequestAnimationFrame ||
    function (i) {
      return setTimeout(i, 16);
    },
  Ka = window,
  js =
    Ka.cancelAnimationFrame ||
    Ka.mozCancelAnimationFrame ||
    function (i) {
      clearTimeout(i);
    };
function Ks() {
  for (
    var i, e, t, n = arguments[0] || {}, r = 1, s = arguments.length;
    r < s;
    r++
  )
    if ((i = arguments[r]) !== null)
      for (e in i) (t = i[e]), n !== t && t !== void 0 && (n[e] = t);
  return n;
}
function fn(i) {
  return ["true", "false"].indexOf(i) >= 0 ? JSON.parse(i) : i;
}
function hn(i, e, t, n) {
  if (n)
    try {
      i.setItem(e, t);
    } catch {}
  return t;
}
function cf() {
  var i = window.tnsId;
  return (window.tnsId = i ? i + 1 : 1), "tns" + window.tnsId;
}
function fs() {
  var i = document,
    e = i.body;
  return e || ((e = i.createElement("body")), (e.fake = !0)), e;
}
var or = document.documentElement;
function hs(i) {
  var e = "";
  return (
    i.fake &&
      ((e = or.style.overflow),
      (i.style.background = ""),
      (i.style.overflow = or.style.overflow = "hidden"),
      or.appendChild(i)),
    e
  );
}
function ds(i, e) {
  i.fake && (i.remove(), (or.style.overflow = e), or.offsetHeight);
}
function uf() {
  var i = document,
    e = fs(),
    t = hs(e),
    n = i.createElement("div"),
    r = !1;
  e.appendChild(n);
  try {
    for (
      var s = "(10px * 10)",
        a = ["calc" + s, "-moz-calc" + s, "-webkit-calc" + s],
        l,
        u = 0;
      u < 3;
      u++
    )
      if (((l = a[u]), (n.style.width = l), n.offsetWidth === 100)) {
        r = l.replace(s, "");
        break;
      }
  } catch {}
  return e.fake ? ds(e, t) : n.remove(), r;
}
function ff() {
  var i = document,
    e = fs(),
    t = hs(e),
    n = i.createElement("div"),
    r = i.createElement("div"),
    s = "",
    a = 70,
    l = 3,
    u = !1;
  (n.className = "tns-t-subp2"), (r.className = "tns-t-ct");
  for (var g = 0; g < a; g++) s += "<div></div>";
  return (
    (r.innerHTML = s),
    n.appendChild(r),
    e.appendChild(n),
    (u =
      Math.abs(
        n.getBoundingClientRect().left -
          r.children[a - l].getBoundingClientRect().left
      ) < 2),
    e.fake ? ds(e, t) : n.remove(),
    u
  );
}
function hf() {
  if (window.matchMedia || window.msMatchMedia) return !0;
  var i = document,
    e = fs(),
    t = hs(e),
    n = i.createElement("div"),
    r = i.createElement("style"),
    s = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}",
    a;
  return (
    (r.type = "text/css"),
    (n.className = "tns-mq-test"),
    e.appendChild(r),
    e.appendChild(n),
    r.styleSheet
      ? (r.styleSheet.cssText = s)
      : r.appendChild(i.createTextNode(s)),
    (a = window.getComputedStyle
      ? window.getComputedStyle(n).position
      : n.currentStyle.position),
    e.fake ? ds(e, t) : n.remove(),
    a === "absolute"
  );
}
function df(i, e) {
  var t = document.createElement("style");
  return (
    i && t.setAttribute("media", i),
    e && t.setAttribute("nonce", e),
    document.querySelector("head").appendChild(t),
    t.sheet ? t.sheet : t.styleSheet
  );
}
function Cn(i, e, t, n) {
  "insertRule" in i ? i.insertRule(e + "{" + t + "}", n) : i.addRule(e, t, n);
}
function pf(i, e) {
  "deleteRule" in i ? i.deleteRule(e) : i.removeRule(e);
}
function wn(i) {
  var e = "insertRule" in i ? i.cssRules : i.rules;
  return e.length;
}
function gf(i, e) {
  return Math.atan2(i, e) * (180 / Math.PI);
}
function mf(i, e) {
  var t = !1,
    n = Math.abs(90 - Math.abs(i));
  return n >= 90 - e ? (t = "horizontal") : n <= e && (t = "vertical"), t;
}
function In(i, e, t) {
  for (var n = 0, r = i.length; n < r; n++) e.call(t, i[n], n);
}
var To = "classList" in document.createElement("_"),
  Di = To
    ? function (i, e) {
        return i.classList.contains(e);
      }
    : function (i, e) {
        return i.className.indexOf(e) >= 0;
      },
  Ge = To
    ? function (i, e) {
        Di(i, e) || i.classList.add(e);
      }
    : function (i, e) {
        Di(i, e) || (i.className += " " + e);
      },
  zt = To
    ? function (i, e) {
        Di(i, e) && i.classList.remove(e);
      }
    : function (i, e) {
        Di(i, e) && (i.className = i.className.replace(e, ""));
      };
function Yi(i, e) {
  return i.hasAttribute(e);
}
function Kr(i, e) {
  return i.getAttribute(e);
}
function Fl(i) {
  return typeof i.item < "u";
}
function Kt(i, e) {
  if (
    ((i = Fl(i) || i instanceof Array ? i : [i]),
    Object.prototype.toString.call(e) === "[object Object]")
  )
    for (var t = i.length; t--; ) for (var n in e) i[t].setAttribute(n, e[n]);
}
function $n(i, e) {
  (i = Fl(i) || i instanceof Array ? i : [i]),
    (e = e instanceof Array ? e : [e]);
  for (var t = e.length, n = i.length; n--; )
    for (var r = t; r--; ) i[n].removeAttribute(e[r]);
}
function Ga(i) {
  for (var e = [], t = 0, n = i.length; t < n; t++) e.push(i[t]);
  return e;
}
function Gt(i, e) {
  i.style.display !== "none" && (i.style.display = "none");
}
function Qt(i, e) {
  i.style.display === "none" && (i.style.display = "");
}
function Qa(i) {
  return window.getComputedStyle(i).display !== "none";
}
function Vi(i) {
  if (typeof i == "string") {
    var e = [i],
      t = i.charAt(0).toUpperCase() + i.substr(1),
      n = ["Webkit", "Moz", "ms", "O"];
    n.forEach(function (l) {
      (l !== "ms" || i === "transform") && e.push(l + t);
    }),
      (i = e);
  }
  var r = document.createElement("fakeelement");
  i.length;
  for (var s = 0; s < i.length; s++) {
    var a = i[s];
    if (r.style[a] !== void 0) return a;
  }
  return !1;
}
function vf(i) {
  if (!i || !window.getComputedStyle) return !1;
  var e = document,
    t = fs(),
    n = hs(t),
    r = e.createElement("p"),
    s,
    a = i.length > 9 ? "-" + i.slice(0, -9).toLowerCase() + "-" : "";
  return (
    (a += "transform"),
    t.insertBefore(r, null),
    (r.style[i] = "translate3d(1px,1px,1px)"),
    (s = window.getComputedStyle(r).getPropertyValue(a)),
    t.fake ? ds(t, n) : r.remove(),
    s !== void 0 && s.length > 0 && s !== "none"
  );
}
function Za(i, e) {
  var t = !1;
  return (
    /^Webkit/.test(i)
      ? (t = "webkit" + e + "End")
      : /^O/.test(i)
      ? (t = "o" + e + "End")
      : i && (t = e.toLowerCase() + "end"),
    t
  );
}
var Wl = !1;
try {
  var yf = Object.defineProperty({}, "passive", {
    get: function () {
      Wl = !0;
    },
  });
  window.addEventListener("test", null, yf);
} catch {}
var zl = Wl ? { passive: !0 } : !1;
function Ve(i, e, t) {
  for (var n in e) {
    var r = ["touchstart", "touchmove"].indexOf(n) >= 0 && !t ? zl : !1;
    i.addEventListener(n, e[n], r);
  }
}
function pt(i, e) {
  for (var t in e) {
    var n = ["touchstart", "touchmove"].indexOf(t) >= 0 ? zl : !1;
    i.removeEventListener(t, e[t], n);
  }
}
function wf() {
  return {
    topics: {},
    on: function (i, e) {
      (this.topics[i] = this.topics[i] || []), this.topics[i].push(e);
    },
    off: function (i, e) {
      if (this.topics[i]) {
        for (var t = 0; t < this.topics[i].length; t++)
          if (this.topics[i][t] === e) {
            this.topics[i].splice(t, 1);
            break;
          }
      }
    },
    emit: function (i, e) {
      (e.type = i),
        this.topics[i] &&
          this.topics[i].forEach(function (t) {
            t(e, i);
          });
    },
  };
}
function Sf(i, e, t, n, g, s, a) {
  var l = Math.min(s, 10),
    u = g.indexOf("%") >= 0 ? "%" : "px",
    g = g.replace(u, ""),
    C = Number(i.style[e].replace(t, "").replace(n, "").replace(u, "")),
    y = ((g - C) / s) * l;
  setTimeout(S, l);
  function S() {
    (s -= l),
      (C += y),
      (i.style[e] = t + C + u + n),
      s > 0 ? setTimeout(S, l) : a();
  }
}
Object.keys ||
  (Object.keys = function (i) {
    var e = [];
    for (var t in i) Object.prototype.hasOwnProperty.call(i, t) && e.push(t);
    return e;
  });
"remove" in Element.prototype ||
  (Element.prototype.remove = function () {
    this.parentNode && this.parentNode.removeChild(this);
  });
var Eo = function (i) {
  i = Ks(
    {
      container: ".slider",
      mode: "carousel",
      axis: "horizontal",
      items: 1,
      gutter: 0,
      edgePadding: 0,
      fixedWidth: !1,
      autoWidth: !1,
      viewportMax: !1,
      slideBy: 1,
      center: !1,
      controls: !0,
      controlsPosition: "top",
      controlsText: ["prev", "next"],
      controlsContainer: !1,
      prevButton: !1,
      nextButton: !1,
      nav: !0,
      navPosition: "top",
      navContainer: !1,
      navAsThumbnails: !1,
      arrowKeys: !1,
      speed: 300,
      autoplay: !1,
      autoplayPosition: "top",
      autoplayTimeout: 5e3,
      autoplayDirection: "forward",
      autoplayText: ["start", "stop"],
      autoplayHoverPause: !1,
      autoplayButton: !1,
      autoplayButtonOutput: !0,
      autoplayResetOnVisibility: !0,
      animateIn: "tns-fadeIn",
      animateOut: "tns-fadeOut",
      animateNormal: "tns-normal",
      animateDelay: !1,
      loop: !0,
      rewind: !1,
      autoHeight: !1,
      responsive: !1,
      lazyload: !1,
      lazyloadSelector: ".tns-lazy-img",
      touch: !0,
      mouseDrag: !1,
      swipeAngle: 15,
      nested: !1,
      preventActionWhenRunning: !1,
      preventScrollOnTouch: !1,
      freezable: !0,
      onInit: !1,
      useLocalStorage: !0,
      nonce: !1,
    },
    i || {}
  );
  var e = document,
    t = window,
    n = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
    r = {},
    s = i.useLocalStorage;
  if (s) {
    var a = navigator.userAgent,
      l = new Date();
    try {
      (r = t.localStorage),
        r
          ? (r.setItem(l, l), (s = r.getItem(l) == l), r.removeItem(l))
          : (s = !1),
        s || (r = {});
    } catch {
      s = !1;
    }
    s &&
      (r.tnsApp &&
        r.tnsApp !== a &&
        [
          "tC",
          "tPL",
          "tMQ",
          "tTf",
          "t3D",
          "tTDu",
          "tTDe",
          "tADu",
          "tADe",
          "tTE",
          "tAE",
        ].forEach(function (o) {
          r.removeItem(o);
        }),
      (localStorage.tnsApp = a));
  }
  var u = r.tC ? fn(r.tC) : hn(r, "tC", uf(), s),
    g = r.tPL ? fn(r.tPL) : hn(r, "tPL", ff(), s),
    C = r.tMQ ? fn(r.tMQ) : hn(r, "tMQ", hf(), s),
    y = r.tTf ? fn(r.tTf) : hn(r, "tTf", Vi("transform"), s),
    S = r.t3D ? fn(r.t3D) : hn(r, "t3D", vf(y), s),
    f = r.tTDu ? fn(r.tTDu) : hn(r, "tTDu", Vi("transitionDuration"), s),
    A = r.tTDe ? fn(r.tTDe) : hn(r, "tTDe", Vi("transitionDelay"), s),
    E = r.tADu ? fn(r.tADu) : hn(r, "tADu", Vi("animationDuration"), s),
    _ = r.tADe ? fn(r.tADe) : hn(r, "tADe", Vi("animationDelay"), s),
    O = r.tTE ? fn(r.tTE) : hn(r, "tTE", Za(f, "Transition"), s),
    q = r.tAE ? fn(r.tAE) : hn(r, "tAE", Za(E, "Animation"), s),
    k = t.console && typeof t.console.warn == "function",
    m = [
      "container",
      "controlsContainer",
      "prevButton",
      "nextButton",
      "navContainer",
      "autoplayButton",
    ],
    h = {};
  if (
    (m.forEach(function (o) {
      if (typeof i[o] == "string") {
        var c = i[o],
          w = e.querySelector(c);
        if (((h[o] = c), w && w.nodeName)) i[o] = w;
        else {
          k && console.warn("Can't find", i[o]);
          return;
        }
      }
    }),
    i.container.children.length < 1)
  ) {
    k && console.warn("No slides found in", i.container);
    return;
  }
  var d = i.responsive,
    b = i.nested,
    M = i.mode === "carousel";
  if (d) {
    0 in d && ((i = Ks(i, d[0])), delete d[0]);
    var j = {};
    for (var H in d) {
      var ie = d[H];
      (ie = typeof ie == "number" ? { items: ie } : ie), (j[H] = ie);
    }
    (d = j), (j = null);
  }
  function v(o) {
    for (var c in o)
      M ||
        (c === "slideBy" && (o[c] = "page"),
        c === "edgePadding" && (o[c] = !1),
        c === "autoHeight" && (o[c] = !1)),
        c === "responsive" && v(o[c]);
  }
  if ((M || v(i), !M)) {
    (i.axis = "horizontal"), (i.slideBy = "page"), (i.edgePadding = !1);
    var P = i.animateIn,
      L = i.animateOut,
      R = i.animateDelay,
      oe = i.animateNormal;
  }
  var N = i.axis === "horizontal",
    J = e.createElement("div"),
    te = e.createElement("div"),
    p,
    I = i.container,
    Qe = I.parentNode,
    Ct = I.outerHTML,
    ne = I.children,
    W = ne.length,
    Xe,
    Oe = Po(),
    je = !1;
  d && Bo(), M && (I.className += " tns-vpfix");
  var Y = i.autoWidth,
    B = ee("fixedWidth"),
    fe = ee("edgePadding"),
    se = ee("gutter"),
    Q = Lo(),
    he = ee("center"),
    Z = Y ? 1 : Math.floor(ee("items")),
    Ze = ee("slideBy"),
    x = i.viewportMax || i.fixedWidthViewportWidth,
    We = ee("arrowKeys"),
    ze = ee("speed"),
    Bt = i.rewind,
    de = Bt ? !1 : i.loop,
    Ue = ee("autoHeight"),
    ft = ee("controls"),
    It = ee("controlsText"),
    Ce = ee("nav"),
    be = ee("touch"),
    Je = ee("mouseDrag"),
    xe = ee("autoplay"),
    cn = ee("autoplayTimeout"),
    ht = ee("autoplayText"),
    st = ee("autoplayHoverPause"),
    qe = ee("autoplayResetOnVisibility"),
    ge = df(null, ee("nonce")),
    nn = i.lazyload,
    Pn = i.lazyloadSelector,
    ke,
    xt = [],
    Me = de ? jl() : 0,
    z = M ? W + Me * 2 : W + Me,
    gn = !!((B || Y) && !de),
    dt = B ? Cs() : null,
    kt = !M || !de,
    ot = N ? "left" : "top",
    bt = "",
    Yt = "",
    Mt = (function () {
      return B
        ? function () {
            return he && !de ? W - 1 : Math.ceil(-dt / (B + se));
          }
        : Y
        ? function () {
            for (var o = 0; o < z; o++) if (ke[o] >= -dt) return o;
          }
        : function () {
            return he && M && !de
              ? W - 1
              : de || M
              ? Math.max(0, z - Math.ceil(Z))
              : z - 1;
          };
    })(),
    D = Oo(ee("startIndex")),
    V = D;
  Mo();
  var ae = 0,
    ve = Y ? null : Mt(),
    $ = i.preventActionWhenRunning,
    ue = i.swipeAngle,
    X = ue ? "?" : !0,
    re = !1,
    Be = i.onInit,
    G = new wf(),
    Te = " tns-slider tns-" + i.mode,
    ce = I.id || cf(),
    Se = ee("disable"),
    Ee = !1,
    _e = i.freezable,
    Le = _e && !Y ? ws() : !1,
    Ae = !1,
    at = { click: qn, keydown: mc },
    $t = { click: cc, keydown: vc },
    lt = { mouseover: dc, mouseout: pc },
    Ne = { visibilitychange: hc },
    Ye = { keydown: gc },
    Vt = { touchstart: ha, touchmove: da, touchend: Pr, touchcancel: Pr },
    mn = { mousedown: ha, mousemove: da, mouseup: Pr, mouseleave: Pr },
    Ke = En("controls"),
    He = En("nav"),
    Tt = Y ? !0 : i.navAsThumbnails,
    Xn = En("autoplay"),
    Pi = En("touch"),
    Rn = En("mouseDrag"),
    Ft = "tns-slide-active",
    Ln = "tns-slide-cloned",
    Tn = "tns-complete",
    vn = { load: tc, error: nc },
    ps,
    gs,
    Ri = i.preventScrollOnTouch === "force";
  if (Ke)
    var et = i.controlsContainer,
      Ao = i.controlsContainer ? i.controlsContainer.outerHTML : "",
      De = i.prevButton,
      Pe = i.nextButton,
      Yl = i.prevButton ? i.prevButton.outerHTML : "",
      Vl = i.nextButton ? i.nextButton.outerHTML : "",
      Li,
      qi;
  if (He)
    var yt = i.navContainer,
      Co = i.navContainer ? i.navContainer.outerHTML : "",
      Xt,
      rn = Y ? W : ga(),
      jn = 0,
      Kn = -1,
      jt = Do(),
      fi = jt,
      hr = "tns-nav-active",
      hi = "Carousel Page ",
      ms = " (Current Slide)";
  if (Xn)
    var xo = i.autoplayDirection === "forward" ? 1 : -1,
      Ie = i.autoplayButton,
      ko = i.autoplayButton ? i.autoplayButton.outerHTML : "",
      Ni = ["<span class='tns-visually-hidden'>", " animation</span>"],
      dr,
      Wt,
      pr,
      di,
      gr;
  if (Pi || Rn)
    var Gn = {},
      un = {},
      mr,
      Qn = !1,
      sn,
      vs = N
        ? function (o, c) {
            return o.x - c.x;
          }
        : function (o, c) {
            return o.y - c.y;
          };
  Y || vr(Se || Le),
    y &&
      ((ot = y),
      (bt = "translate"),
      S
        ? ((bt += N ? "3d(" : "3d(0px, "), (Yt = N ? ", 0px, 0px)" : ", 0px)"))
        : ((bt += N ? "X(" : "Y("), (Yt = ")"))),
    M && (I.className = I.className.replace("tns-vpfix", "")),
    Gl(),
    Ql(),
    Ho();
  function vr(o) {
    o && (ft = Ce = be = Je = We = xe = st = qe = !1);
  }
  function Mo() {
    for (var o = M ? D - Me : D; o < 0; ) o += W;
    return (o % W) + 1;
  }
  function Oo(o) {
    return (
      (o = o ? Math.max(0, Math.min(de ? W - 1 : W - Z, o)) : 0), M ? o + Me : o
    );
  }
  function yr(o) {
    for (o == null && (o = D), M && (o -= Me); o < 0; ) o += W;
    return Math.floor(o % W);
  }
  function Do() {
    var o = yr(),
      c;
    return (
      (c = Tt
        ? o
        : B || Y
        ? Math.ceil(((o + 1) * rn) / W - 1)
        : Math.floor(o / Z)),
      !de && M && D === ve && (c = rn - 1),
      c
    );
  }
  function Xl() {
    if (Y || (B && !x)) return W - 1;
    var o = B ? "fixedWidth" : "items",
      c = [];
    if (((B || i[o] < W) && c.push(i[o]), d))
      for (var w in d) {
        var T = d[w][o];
        T && (B || T < W) && c.push(T);
      }
    return (
      c.length || c.push(0),
      Math.ceil(B ? x / Math.min.apply(null, c) : Math.max.apply(null, c))
    );
  }
  function jl() {
    var o = Xl(),
      c = M ? Math.ceil((o * 5 - W) / 2) : o * 4 - W;
    return (c = Math.max(o, c)), En("edgePadding") ? c + 1 : c;
  }
  function Po() {
    return t.innerWidth || e.documentElement.clientWidth || e.body.clientWidth;
  }
  function ys(o) {
    return o === "top" ? "afterbegin" : "beforeend";
  }
  function Ro(o) {
    if (o != null) {
      var c = e.createElement("div"),
        w,
        T;
      return (
        o.appendChild(c),
        (w = c.getBoundingClientRect()),
        (T = w.right - w.left),
        c.remove(),
        T || Ro(o.parentNode)
      );
    }
  }
  function Lo() {
    var o = fe ? fe * 2 - se : 0;
    return Ro(Qe) - o;
  }
  function En(o) {
    if (i[o]) return !0;
    if (d) {
      for (var c in d) if (d[c][o]) return !0;
    }
    return !1;
  }
  function ee(o, c) {
    if ((c == null && (c = Oe), o === "items" && B))
      return Math.floor((Q + se) / (B + se)) || 1;
    var w = i[o];
    if (d) for (var T in d) c >= parseInt(T) && o in d[T] && (w = d[T][o]);
    return (
      o === "slideBy" && w === "page" && (w = ee("items")),
      !M && (o === "slideBy" || o === "items") && (w = Math.floor(w)),
      w
    );
  }
  function Kl(o) {
    return u ? u + "(" + o * 100 + "% / " + z + ")" : (o * 100) / z + "%";
  }
  function wr(o, c, w, T, F) {
    var K = "";
    if (o !== void 0) {
      var we = o;
      c && (we -= c),
        (K = N
          ? "margin: 0 " + we + "px 0 " + o + "px;"
          : "margin: " + o + "px 0 " + we + "px 0;");
    } else if (c && !w) {
      var ct = "-" + c + "px",
        wt = N ? ct + " 0 0" : "0 " + ct + " 0";
      K = "margin: 0 " + wt + ";";
    }
    return !M && F && f && T && (K += Zn(T)), K;
  }
  function Sr(o, c, w) {
    return o
      ? (o + c) * z + "px"
      : u
      ? u + "(" + z * 100 + "% / " + w + ")"
      : (z * 100) / w + "%";
  }
  function _r(o, c, w) {
    var T;
    if (o) T = o + c + "px";
    else {
      M || (w = Math.floor(w));
      var F = M ? z : w;
      T = u ? u + "(100% / " + F + ")" : 100 / F + "%";
    }
    return (T = "width:" + T), b !== "inner" ? T + ";" : T + " !important;";
  }
  function br(o) {
    var c = "";
    if (o !== !1) {
      var w = N ? "padding-" : "margin-",
        T = N ? "right" : "bottom";
      c = w + T + ": " + o + "px;";
    }
    return c;
  }
  function qo(o, c) {
    var w = o.substring(0, o.length - c).toLowerCase();
    return w && (w = "-" + w + "-"), w;
  }
  function Zn(o) {
    return qo(f, 18) + "transition-duration:" + o / 1e3 + "s;";
  }
  function No(o) {
    return qo(E, 17) + "animation-duration:" + o / 1e3 + "s;";
  }
  function Gl() {
    var o = "tns-outer",
      c = "tns-inner";
    if (
      (En("gutter"),
      (J.className = o),
      (te.className = c),
      (J.id = ce + "-ow"),
      (te.id = ce + "-iw"),
      I.id === "" && (I.id = ce),
      (Te += g || Y ? " tns-subpixel" : " tns-no-subpixel"),
      (Te += u ? " tns-calc" : " tns-no-calc"),
      Y && (Te += " tns-autowidth"),
      (Te += " tns-" + i.axis),
      (I.className += Te),
      M
        ? ((p = e.createElement("div")),
          (p.id = ce + "-mw"),
          (p.className = "tns-ovh"),
          J.appendChild(p),
          p.appendChild(te))
        : J.appendChild(te),
      Ue)
    ) {
      var w = p || te;
      w.className += " tns-ah";
    }
    if (
      (Qe.insertBefore(J, I),
      te.appendChild(I),
      In(ne, function (tt, gi) {
        Ge(tt, "tns-item"),
          tt.id || (tt.id = ce + "-item" + gi),
          !M && oe && Ge(tt, oe),
          Kt(tt, { "aria-hidden": "true", tabindex: "-1" });
      }),
      Me)
    ) {
      for (
        var T = e.createDocumentFragment(),
          F = e.createDocumentFragment(),
          K = Me;
        K--;

      ) {
        var we = K % W,
          ct = ne[we].cloneNode(!0);
        if ((Ge(ct, Ln), $n(ct, "id"), F.insertBefore(ct, F.firstChild), M)) {
          var wt = ne[W - 1 - we].cloneNode(!0);
          Ge(wt, Ln), $n(wt, "id"), T.appendChild(wt);
        }
      }
      I.insertBefore(T, I.firstChild), I.appendChild(F), (ne = I.children);
    }
  }
  function Ho() {
    if (En("autoHeight") || Y || !N) {
      var o = I.querySelectorAll("img");
      In(o, function (c) {
        var w = c.src;
        nn ||
          (w && w.indexOf("data:image") < 0
            ? ((c.src = ""), Ve(c, vn), Ge(c, "loading"), (c.src = w))
            : Go(c));
      }),
        Hn(function () {
          Ar(Ga(o), function () {
            ps = !0;
          });
        }),
        En("autoHeight") && (o = Es(D, Math.min(D + Z - 1, z - 1))),
        nn
          ? Io()
          : Hn(function () {
              Ar(Ga(o), Io);
            });
    } else M && Ii(), Fo(), Wo();
  }
  function Io() {
    if (Y && W > 1) {
      var o = de ? D : W - 1;
      (function c() {
        var w = ne[o].getBoundingClientRect().left,
          T = ne[o - 1].getBoundingClientRect().right;
        Math.abs(w - T) <= 1
          ? $o()
          : setTimeout(function () {
              c();
            }, 16);
      })();
    } else $o();
  }
  function $o() {
    (!N || Y) &&
      (ea(),
      Y ? ((dt = Cs()), _e && (Le = ws()), (ve = Mt()), vr(Se || Le)) : Ms()),
      M && Ii(),
      Fo(),
      Wo();
  }
  function Ql() {
    if (!M)
      for (var o = D, c = D + Math.min(W, Z); o < c; o++) {
        var w = ne[o];
        (w.style.left = ((o - D) * 100) / Z + "%"), Ge(w, P), zt(w, oe);
      }
    if (
      (N &&
        (g || Y
          ? (Cn(
              ge,
              "#" + ce + " > .tns-item",
              "font-size:" + t.getComputedStyle(ne[0]).fontSize + ";",
              wn(ge)
            ),
            Cn(ge, "#" + ce, "font-size:0;", wn(ge)))
          : M &&
            In(ne, function (Rs, Ls) {
              Rs.style.marginLeft = Kl(Ls);
            })),
      C)
    ) {
      if (f) {
        var T = p && i.autoHeight ? Zn(i.speed) : "";
        Cn(ge, "#" + ce + "-mw", T, wn(ge));
      }
      (T = wr(i.edgePadding, i.gutter, i.fixedWidth, i.speed, i.autoHeight)),
        Cn(ge, "#" + ce + "-iw", T, wn(ge)),
        M &&
          ((T =
            N && !Y
              ? "width:" + Sr(i.fixedWidth, i.gutter, i.items) + ";"
              : ""),
          f && (T += Zn(ze)),
          Cn(ge, "#" + ce, T, wn(ge))),
        (T = N && !Y ? _r(i.fixedWidth, i.gutter, i.items) : ""),
        i.gutter && (T += br(i.gutter)),
        M || (f && (T += Zn(ze)), E && (T += No(ze))),
        T && Cn(ge, "#" + ce + " > .tns-item", T, wn(ge));
    } else {
      rc(),
        (te.style.cssText = wr(fe, se, B, Ue)),
        M && N && !Y && (I.style.width = Sr(B, se, Z));
      var T = N && !Y ? _r(B, se, Z) : "";
      se && (T += br(se)), T && Cn(ge, "#" + ce + " > .tns-item", T, wn(ge));
    }
    if (d && C)
      for (var F in d) {
        F = parseInt(F);
        var K = d[F],
          T = "",
          we = "",
          ct = "",
          wt = "",
          tt = "",
          gi = Y ? null : ee("items", F),
          Wi = ee("fixedWidth", F),
          ei = ee("speed", F),
          Ds = ee("edgePadding", F),
          Ps = ee("autoHeight", F),
          mi = ee("gutter", F);
        f &&
          p &&
          ee("autoHeight", F) &&
          "speed" in K &&
          (we = "#" + ce + "-mw{" + Zn(ei) + "}"),
          ("edgePadding" in K || "gutter" in K) &&
            (ct = "#" + ce + "-iw{" + wr(Ds, mi, Wi, ei, Ps) + "}"),
          M &&
            N &&
            !Y &&
            ("fixedWidth" in K || "items" in K || (B && "gutter" in K)) &&
            (wt = "width:" + Sr(Wi, mi, gi) + ";"),
          f && "speed" in K && (wt += Zn(ei)),
          wt && (wt = "#" + ce + "{" + wt + "}"),
          ("fixedWidth" in K || (B && "gutter" in K) || (!M && "items" in K)) &&
            (tt += _r(Wi, mi, gi)),
          "gutter" in K && (tt += br(mi)),
          !M && "speed" in K && (f && (tt += Zn(ei)), E && (tt += No(ei))),
          tt && (tt = "#" + ce + " > .tns-item{" + tt + "}"),
          (T = we + ct + wt + tt),
          T &&
            ge.insertRule(
              "@media (min-width: " + F / 16 + "em) {" + T + "}",
              ge.cssRules.length
            );
      }
  }
  function Fo() {
    if (
      (As(),
      J.insertAdjacentHTML(
        "afterbegin",
        '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' +
          Ko() +
          "</span>  of " +
          W +
          "</div>"
      ),
      (gs = J.querySelector(".tns-liveregion .current")),
      Xn)
    ) {
      var o = xe ? "stop" : "start";
      Ie
        ? Kt(Ie, { "data-action": o })
        : i.autoplayButtonOutput &&
          (J.insertAdjacentHTML(
            ys(i.autoplayPosition),
            '<button type="button" data-action="' +
              o +
              '">' +
              Ni[0] +
              o +
              Ni[1] +
              ht[0] +
              "</button>"
          ),
          (Ie = J.querySelector("[data-action]"))),
        Ie && Ve(Ie, { click: la }),
        xe && (Dr(), st && Ve(I, lt), qe && Ve(I, Ne));
    }
    if (He) {
      if (yt)
        Kt(yt, { "aria-label": "Carousel Pagination" }),
          (Xt = yt.children),
          In(Xt, function (we, ct) {
            Kt(we, {
              "data-nav": ct,
              tabindex: "-1",
              "aria-label": hi + (ct + 1),
              "aria-controls": ce,
            });
          });
      else {
        for (
          var c = "", w = Tt ? "" : 'style="display:none"', T = 0;
          T < W;
          T++
        )
          c +=
            '<button type="button" data-nav="' +
            T +
            '" tabindex="-1" aria-controls="' +
            ce +
            '" ' +
            w +
            ' aria-label="' +
            hi +
            (T + 1) +
            '"></button>';
        (c =
          '<div class="tns-nav" aria-label="Carousel Pagination">' +
          c +
          "</div>"),
          J.insertAdjacentHTML(ys(i.navPosition), c),
          (yt = J.querySelector(".tns-nav")),
          (Xt = yt.children);
      }
      if ((Os(), f)) {
        var F = f.substring(0, f.length - 18).toLowerCase(),
          K = "transition: all " + ze / 1e3 + "s";
        F && (K = "-" + F + "-" + K),
          Cn(ge, "[aria-controls^=" + ce + "-item]", K, wn(ge));
      }
      Kt(Xt[jt], { "aria-label": hi + (jt + 1) + ms }),
        $n(Xt[jt], "tabindex"),
        Ge(Xt[jt], hr),
        Ve(yt, $t);
    }
    Ke &&
      (!et &&
        (!De || !Pe) &&
        (J.insertAdjacentHTML(
          ys(i.controlsPosition),
          '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' +
            ce +
            '">' +
            It[0] +
            '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' +
            ce +
            '">' +
            It[1] +
            "</button></div>"
        ),
        (et = J.querySelector(".tns-controls"))),
      (!De || !Pe) && ((De = et.children[0]), (Pe = et.children[1])),
      i.controlsContainer &&
        Kt(et, { "aria-label": "Carousel Navigation", tabindex: "0" }),
      (i.controlsContainer || (i.prevButton && i.nextButton)) &&
        Kt([De, Pe], { "aria-controls": ce, tabindex: "-1" }),
      (i.controlsContainer || (i.prevButton && i.nextButton)) &&
        (Kt(De, { "data-controls": "prev" }),
        Kt(Pe, { "data-controls": "next" })),
      (Li = na(De)),
      (qi = na(Pe)),
      ra(),
      et ? Ve(et, at) : (Ve(De, at), Ve(Pe, at))),
      _s();
  }
  function Wo() {
    if (M && O) {
      var o = {};
      (o[O] = yn), Ve(I, o);
    }
    be && Ve(I, Vt, i.preventScrollOnTouch),
      Je && Ve(I, mn),
      We && Ve(e, Ye),
      b === "inner"
        ? G.on("outerResized", function () {
            Uo(), G.emit("innerLoaded", Et());
          })
        : (d || B || Y || Ue || !N) && Ve(t, { resize: zo }),
      Ue && (b === "outer" ? G.on("innerLoaded", Er) : Se || Er()),
      bs(),
      Se ? Xo() : Le && Vo(),
      G.on("indexChanged", Qo),
      b === "inner" && G.emit("innerLoaded", Et()),
      typeof Be == "function" && Be(Et()),
      (je = !0);
  }
  function Zl() {
    if (
      ((ge.disabled = !0),
      ge.ownerNode && ge.ownerNode.remove(),
      pt(t, { resize: zo }),
      We && pt(e, Ye),
      et && pt(et, at),
      yt && pt(yt, $t),
      pt(I, lt),
      pt(I, Ne),
      Ie && pt(Ie, { click: la }),
      xe && clearInterval(dr),
      M && O)
    ) {
      var o = {};
      (o[O] = yn), pt(I, o);
    }
    be && pt(I, Vt), Je && pt(I, mn);
    var c = [Ct, Ao, Yl, Vl, Co, ko];
    m.forEach(function (T, F) {
      var K = T === "container" ? J : i[T];
      if (typeof K == "object" && K) {
        var we = K.previousElementSibling ? K.previousElementSibling : !1,
          ct = K.parentNode;
        (K.outerHTML = c[F]),
          (i[T] = we ? we.nextElementSibling : ct.firstElementChild);
      }
    }),
      (m =
        P =
        L =
        R =
        oe =
        N =
        J =
        te =
        I =
        Qe =
        Ct =
        ne =
        W =
        Xe =
        Oe =
        Y =
        B =
        fe =
        se =
        Q =
        Z =
        Ze =
        x =
        We =
        ze =
        Bt =
        de =
        Ue =
        ge =
        nn =
        ke =
        xt =
        Me =
        z =
        gn =
        dt =
        kt =
        ot =
        bt =
        Yt =
        Mt =
        D =
        V =
        ae =
        ve =
        ue =
        X =
        re =
        Be =
        G =
        Te =
        ce =
        Se =
        Ee =
        _e =
        Le =
        Ae =
        at =
        $t =
        lt =
        Ne =
        Ye =
        Vt =
        mn =
        Ke =
        He =
        Tt =
        Xn =
        Pi =
        Rn =
        Ft =
        Tn =
        vn =
        ps =
        ft =
        It =
        et =
        Ao =
        De =
        Pe =
        Li =
        qi =
        Ce =
        yt =
        Co =
        Xt =
        rn =
        jn =
        Kn =
        jt =
        fi =
        hr =
        hi =
        ms =
        xe =
        cn =
        xo =
        ht =
        st =
        Ie =
        ko =
        qe =
        Ni =
        dr =
        Wt =
        pr =
        di =
        gr =
        Gn =
        un =
        mr =
        Qn =
        sn =
        vs =
        be =
        Je =
          null);
    for (var w in this) w !== "rebuild" && (this[w] = null);
    je = !1;
  }
  function zo(o) {
    Hn(function () {
      Uo(An(o));
    });
  }
  function Uo(o) {
    if (je) {
      b === "outer" && G.emit("outerResized", Et(o)), (Oe = Po());
      var c,
        w = Xe,
        T = !1;
      d && (Bo(), (c = w !== Xe), c && G.emit("newBreakpointStart", Et(o)));
      var F,
        K,
        we = Z,
        ct = Se,
        wt = Le,
        tt = We,
        gi = ft,
        Wi = Ce,
        ei = be,
        Ds = Je,
        Ps = xe,
        mi = st,
        Rs = qe,
        Ls = D;
      if (c) {
        var yc = B,
          wc = Ue,
          Sc = It,
          _c = he,
          qs = ht;
        if (!C)
          var bc = se,
            Tc = fe;
      }
      if (
        ((We = ee("arrowKeys")),
        (ft = ee("controls")),
        (Ce = ee("nav")),
        (be = ee("touch")),
        (he = ee("center")),
        (Je = ee("mouseDrag")),
        (xe = ee("autoplay")),
        (st = ee("autoplayHoverPause")),
        (qe = ee("autoplayResetOnVisibility")),
        c &&
          ((Se = ee("disable")),
          (B = ee("fixedWidth")),
          (ze = ee("speed")),
          (Ue = ee("autoHeight")),
          (It = ee("controlsText")),
          (ht = ee("autoplayText")),
          (cn = ee("autoplayTimeout")),
          C || ((fe = ee("edgePadding")), (se = ee("gutter")))),
        vr(Se),
        (Q = Lo()),
        (!N || Y) && !Se && (ea(), N || (Ms(), (T = !0))),
        (B || Y) && ((dt = Cs()), (ve = Mt())),
        (c || B) &&
          ((Z = ee("items")),
          (Ze = ee("slideBy")),
          (K = Z !== we),
          K && (!B && !Y && (ve = Mt()), Ss())),
        c && Se !== ct && (Se ? Xo() : ec()),
        _e &&
          (c || B || Y) &&
          ((Le = ws()),
          Le !== wt && (Le ? (xs(kr(Oo(0))), Vo()) : (Jl(), (T = !0)))),
        vr(Se || Le),
        xe || (st = qe = !1),
        We !== tt && (We ? Ve(e, Ye) : pt(e, Ye)),
        ft !== gi &&
          (ft
            ? et
              ? Qt(et)
              : (De && Qt(De), Pe && Qt(Pe))
            : et
            ? Gt(et)
            : (De && Gt(De), Pe && Gt(Pe))),
        Ce !== Wi && (Ce ? (Qt(yt), Os()) : Gt(yt)),
        be !== ei && (be ? Ve(I, Vt, i.preventScrollOnTouch) : pt(I, Vt)),
        Je !== Ds && (Je ? Ve(I, mn) : pt(I, mn)),
        xe !== Ps &&
          (xe
            ? (Ie && Qt(Ie), !Wt && !di && Dr())
            : (Ie && Gt(Ie), Wt && Fi())),
        st !== mi && (st ? Ve(I, lt) : pt(I, lt)),
        qe !== Rs && (qe ? Ve(e, Ne) : pt(e, Ne)),
        c)
      ) {
        if (
          ((B !== yc || he !== _c) && (T = !0),
          Ue !== wc && (Ue || (te.style.height = "")),
          ft && It !== Sc && ((De.innerHTML = It[0]), (Pe.innerHTML = It[1])),
          Ie && ht !== qs)
        ) {
          var Ns = xe ? 1 : 0,
            Hs = Ie.innerHTML,
            ma = Hs.length - qs[Ns].length;
          Hs.substring(ma) === qs[Ns] &&
            (Ie.innerHTML = Hs.substring(0, ma) + ht[Ns]);
        }
      } else he && (B || Y) && (T = !0);
      if (
        ((K || (B && !Y)) && ((rn = ga()), Os()),
        (F = D !== Ls),
        F
          ? (G.emit("indexChanged", Et()), (T = !0))
          : K
          ? F || Qo()
          : (B || Y) && (bs(), As(), jo()),
        K && !M && sc(),
        !Se && !Le)
      ) {
        if (
          c &&
          !C &&
          ((fe !== Tc || se !== bc) &&
            (te.style.cssText = wr(fe, se, B, ze, Ue)),
          N)
        ) {
          M && (I.style.width = Sr(B, se, Z));
          var Ec = _r(B, se, Z) + br(se);
          pf(ge, wn(ge) - 1), Cn(ge, "#" + ce + " > .tns-item", Ec, wn(ge));
        }
        Ue && Er(), T && (Ii(), (V = D));
      }
      c && G.emit("newBreakpointEnd", Et(o));
    }
  }
  function ws() {
    if (!B && !Y) {
      var o = he ? Z - (Z - 1) / 2 : Z;
      return W <= o;
    }
    var c = B ? (B + se) * W : ke[W],
      w = fe ? Q + fe * 2 : Q + se;
    return (
      he && (w -= B ? (Q - B) / 2 : (Q - (ke[D + 1] - ke[D] - se)) / 2), c <= w
    );
  }
  function Bo() {
    Xe = 0;
    for (var o in d) (o = parseInt(o)), Oe >= o && (Xe = o);
  }
  var Ss = (function () {
    return de
      ? M
        ? function () {
            var o = ae,
              c = ve;
            (o += Ze),
              (c -= Ze),
              fe ? ((o += 1), (c -= 1)) : B && (Q + se) % (B + se) && (c -= 1),
              Me && (D > c ? (D -= W) : D < o && (D += W));
          }
        : function () {
            if (D > ve) for (; D >= ae + W; ) D -= W;
            else if (D < ae) for (; D <= ve - W; ) D += W;
          }
      : function () {
          D = Math.max(ae, Math.min(ve, D));
        };
  })();
  function _s() {
    !xe && Ie && Gt(Ie),
      !Ce && yt && Gt(yt),
      ft || (et ? Gt(et) : (De && Gt(De), Pe && Gt(Pe)));
  }
  function Yo() {
    xe && Ie && Qt(Ie),
      Ce && yt && Qt(yt),
      ft && (et ? Qt(et) : (De && Qt(De), Pe && Qt(Pe)));
  }
  function Vo() {
    if (!Ae) {
      if ((fe && (te.style.margin = "0px"), Me))
        for (var o = "tns-transparent", c = Me; c--; )
          M && Ge(ne[c], o), Ge(ne[z - c - 1], o);
      _s(), (Ae = !0);
    }
  }
  function Jl() {
    if (Ae) {
      if ((fe && C && (te.style.margin = ""), Me))
        for (var o = "tns-transparent", c = Me; c--; )
          M && zt(ne[c], o), zt(ne[z - c - 1], o);
      Yo(), (Ae = !1);
    }
  }
  function Xo() {
    if (!Ee) {
      if (
        ((ge.disabled = !0),
        (I.className = I.className.replace(Te.substring(1), "")),
        $n(I, ["style"]),
        de)
      )
        for (var o = Me; o--; ) M && Gt(ne[o]), Gt(ne[z - o - 1]);
      if (((!N || !M) && $n(te, ["style"]), !M))
        for (var c = D, w = D + W; c < w; c++) {
          var T = ne[c];
          $n(T, ["style"]), zt(T, P), zt(T, oe);
        }
      _s(), (Ee = !0);
    }
  }
  function ec() {
    if (Ee) {
      if (((ge.disabled = !1), (I.className += Te), Ii(), de))
        for (var o = Me; o--; ) M && Qt(ne[o]), Qt(ne[z - o - 1]);
      if (!M)
        for (var c = D, w = D + W; c < w; c++) {
          var T = ne[c],
            F = c < D + Z ? P : oe;
          (T.style.left = ((c - D) * 100) / Z + "%"), Ge(T, F);
        }
      Yo(), (Ee = !1);
    }
  }
  function jo() {
    var o = Ko();
    gs.innerHTML !== o && (gs.innerHTML = o);
  }
  function Ko() {
    var o = Tr(),
      c = o[0] + 1,
      w = o[1] + 1;
    return c === w ? c + "" : c + " to " + w;
  }
  function Tr(o) {
    o == null && (o = kr());
    var c = D,
      w,
      T,
      F;
    if (
      (he || fe
        ? (Y || B) && ((T = -(parseFloat(o) + fe)), (F = T + Q + fe * 2))
        : Y && ((T = ke[D]), (F = T + Q)),
      Y)
    )
      ke.forEach(function (wt, tt) {
        tt < z &&
          ((he || fe) && wt <= T + 0.5 && (c = tt), F - wt >= 0.5 && (w = tt));
      });
    else {
      if (B) {
        var K = B + se;
        he || fe
          ? ((c = Math.floor(T / K)), (w = Math.ceil(F / K - 1)))
          : (w = c + Math.ceil(Q / K) - 1);
      } else if (he || fe) {
        var we = Z - 1;
        if ((he ? ((c -= we / 2), (w = D + we / 2)) : (w = D + we), fe)) {
          var ct = (fe * Z) / Q;
          (c -= ct), (w += ct);
        }
        (c = Math.floor(c)), (w = Math.ceil(w));
      } else w = c + Z - 1;
      (c = Math.max(c, 0)), (w = Math.min(w, z - 1));
    }
    return [c, w];
  }
  function bs() {
    if (nn && !Se) {
      var o = Tr();
      o.push(Pn),
        Es.apply(null, o).forEach(function (c) {
          if (!Di(c, Tn)) {
            var w = {};
            (w[O] = function (F) {
              F.stopPropagation();
            }),
              Ve(c, w),
              Ve(c, vn),
              (c.src = Kr(c, "data-src"));
            var T = Kr(c, "data-srcset");
            T && (c.srcset = T), Ge(c, "loading");
          }
        });
    }
  }
  function tc(o) {
    Go(pi(o));
  }
  function nc(o) {
    ic(pi(o));
  }
  function Go(o) {
    Ge(o, "loaded"), Ts(o);
  }
  function ic(o) {
    Ge(o, "failed"), Ts(o);
  }
  function Ts(o) {
    Ge(o, Tn), zt(o, "loading"), pt(o, vn);
  }
  function Es(o, c, w) {
    var T = [];
    for (w || (w = "img"); o <= c; )
      In(ne[o].querySelectorAll(w), function (F) {
        T.push(F);
      }),
        o++;
    return T;
  }
  function Er() {
    var o = Es.apply(null, Tr());
    Hn(function () {
      Ar(o, Jo);
    });
  }
  function Ar(o, c) {
    if (
      ps ||
      (o.forEach(function (w, T) {
        !nn && w.complete && Ts(w), Di(w, Tn) && o.splice(T, 1);
      }),
      !o.length)
    )
      return c();
    Hn(function () {
      Ar(o, c);
    });
  }
  function Qo() {
    bs(), As(), jo(), ra(), oc();
  }
  function rc() {
    M && Ue && (p.style[f] = ze / 1e3 + "s");
  }
  function Zo(o, c) {
    for (var w = [], T = o, F = Math.min(o + c, z); T < F; T++)
      w.push(ne[T].offsetHeight);
    return Math.max.apply(null, w);
  }
  function Jo() {
    var o = Ue ? Zo(D, Z) : Zo(Me, W),
      c = p || te;
    c.style.height !== o && (c.style.height = o + "px");
  }
  function ea() {
    ke = [0];
    var o = N ? "left" : "top",
      c = N ? "right" : "bottom",
      w = ne[0].getBoundingClientRect()[o];
    In(ne, function (T, F) {
      F && ke.push(T.getBoundingClientRect()[o] - w),
        F === z - 1 && ke.push(T.getBoundingClientRect()[c] - w);
    });
  }
  function As() {
    var o = Tr(),
      c = o[0],
      w = o[1];
    In(ne, function (T, F) {
      F >= c && F <= w
        ? Yi(T, "aria-hidden") &&
          ($n(T, ["aria-hidden", "tabindex"]), Ge(T, Ft))
        : Yi(T, "aria-hidden") ||
          (Kt(T, { "aria-hidden": "true", tabindex: "-1" }), zt(T, Ft));
    });
  }
  function sc() {
    for (var o = D + Math.min(W, Z), c = z; c--; ) {
      var w = ne[c];
      c >= D && c < o
        ? (Ge(w, "tns-moving"),
          (w.style.left = ((c - D) * 100) / Z + "%"),
          Ge(w, P),
          zt(w, oe))
        : w.style.left && ((w.style.left = ""), Ge(w, oe), zt(w, P)),
        zt(w, L);
    }
    setTimeout(function () {
      In(ne, function (T) {
        zt(T, "tns-moving");
      });
    }, 300);
  }
  function oc() {
    if (Ce && ((jt = Kn >= 0 ? Kn : Do()), (Kn = -1), jt !== fi)) {
      var o = Xt[fi],
        c = Xt[jt];
      Kt(o, { tabindex: "-1", "aria-label": hi + (fi + 1) }),
        zt(o, hr),
        Kt(c, { "aria-label": hi + (jt + 1) + ms }),
        $n(c, "tabindex"),
        Ge(c, hr),
        (fi = jt);
    }
  }
  function ta(o) {
    return o.nodeName.toLowerCase();
  }
  function na(o) {
    return ta(o) === "button";
  }
  function ia(o) {
    return o.getAttribute("aria-disabled") === "true";
  }
  function Cr(o, c, w) {
    o ? (c.disabled = w) : c.setAttribute("aria-disabled", w.toString());
  }
  function ra() {
    if (!(!ft || Bt || de)) {
      var o = Li ? De.disabled : ia(De),
        c = qi ? Pe.disabled : ia(Pe),
        w = D <= ae,
        T = !Bt && D >= ve;
      w && !o && Cr(Li, De, !0),
        !w && o && Cr(Li, De, !1),
        T && !c && Cr(qi, Pe, !0),
        !T && c && Cr(qi, Pe, !1);
    }
  }
  function xr(o, c) {
    f && (o.style[f] = c);
  }
  function ac() {
    return B ? (B + se) * z : ke[z];
  }
  function Hi(o) {
    o == null && (o = D);
    var c = fe ? se : 0;
    return Y
      ? (Q - c - (ke[o + 1] - ke[o] - se)) / 2
      : B
      ? (Q - B) / 2
      : (Z - 1) / 2;
  }
  function Cs() {
    var o = fe ? se : 0,
      c = Q + o - ac();
    return (
      he && !de && (c = B ? -(B + se) * (z - 1) - Hi() : Hi(z - 1) - ke[z - 1]),
      c > 0 && (c = 0),
      c
    );
  }
  function kr(o) {
    o == null && (o = D);
    var c;
    if (N && !Y)
      if (B) (c = -(B + se) * o), he && (c += Hi());
      else {
        var w = y ? z : Z;
        he && (o -= Hi()), (c = (-o * 100) / w);
      }
    else (c = -ke[o]), he && Y && (c += Hi());
    return gn && (c = Math.max(c, dt)), (c += N && !Y && !B ? "%" : "px"), c;
  }
  function Ii(o) {
    xr(I, "0s"), xs(o);
  }
  function xs(o) {
    o == null && (o = kr()), (I.style[ot] = bt + o + Yt);
  }
  function sa(o, c, w, T) {
    var F = o + Z;
    de || (F = Math.min(F, z));
    for (var K = o; K < F; K++) {
      var we = ne[K];
      T || (we.style.left = ((K - D) * 100) / Z + "%"),
        R && A && (we.style[A] = we.style[_] = (R * (K - o)) / 1e3 + "s"),
        zt(we, c),
        Ge(we, w),
        T && xt.push(we);
    }
  }
  var lc = (function () {
    return M
      ? function () {
          xr(I, ""),
            f || !ze
              ? (xs(), (!ze || !Qa(I)) && yn())
              : Sf(I, ot, bt, Yt, kr(), ze, yn),
            N || Ms();
        }
      : function () {
          xt = [];
          var o = {};
          (o[O] = o[q] = yn),
            pt(ne[V], o),
            Ve(ne[D], o),
            sa(V, P, L, !0),
            sa(D, oe, P),
            (!O || !q || !ze || !Qa(I)) && yn();
        };
  })();
  function ks(o, c) {
    kt && Ss(),
      (D !== V || c) &&
        (G.emit("indexChanged", Et()),
        G.emit("transitionStart", Et()),
        Ue && Er(),
        Wt && o && ["click", "keydown"].indexOf(o.type) >= 0 && Fi(),
        (re = !0),
        lc());
  }
  function oa(o) {
    return o.toLowerCase().replace(/-/g, "");
  }
  function yn(o) {
    if (M || re) {
      if ((G.emit("transitionEnd", Et(o)), !M && xt.length > 0))
        for (var c = 0; c < xt.length; c++) {
          var w = xt[c];
          (w.style.left = ""),
            _ && A && ((w.style[_] = ""), (w.style[A] = "")),
            zt(w, L),
            Ge(w, oe);
        }
      if (
        !o ||
        (!M && o.target.parentNode === I) ||
        (o.target === I && oa(o.propertyName) === oa(ot))
      ) {
        if (!kt) {
          var T = D;
          Ss(), D !== T && (G.emit("indexChanged", Et()), Ii());
        }
        b === "inner" && G.emit("innerLoaded", Et()), (re = !1), (V = D);
      }
    }
  }
  function $i(o, c) {
    if (!Le)
      if (o === "prev") qn(c, -1);
      else if (o === "next") qn(c, 1);
      else {
        if (re) {
          if ($) return;
          yn();
        }
        var w = yr(),
          T = 0;
        if (
          (o === "first"
            ? (T = -w)
            : o === "last"
            ? (T = M ? W - Z - w : W - 1 - w)
            : (typeof o != "number" && (o = parseInt(o)),
              isNaN(o) ||
                (c || (o = Math.max(0, Math.min(W - 1, o))), (T = o - w))),
          !M && T && Math.abs(T) < Z)
        ) {
          var F = T > 0 ? 1 : -1;
          T += D + T - W >= ae ? W * F : W * 2 * F * -1;
        }
        (D += T),
          M && de && (D < ae && (D += W), D > ve && (D -= W)),
          yr(D) !== yr(V) && ks(c);
      }
  }
  function qn(o, c) {
    if (re) {
      if ($) return;
      yn();
    }
    var w;
    if (!c) {
      o = An(o);
      for (var T = pi(o); T !== et && [De, Pe].indexOf(T) < 0; )
        T = T.parentNode;
      var F = [De, Pe].indexOf(T);
      F >= 0 && ((w = !0), (c = F === 0 ? -1 : 1));
    }
    if (Bt) {
      if (D === ae && c === -1) {
        $i("last", o);
        return;
      } else if (D === ve && c === 1) {
        $i("first", o);
        return;
      }
    }
    c &&
      ((D += Ze * c),
      Y && (D = Math.floor(D)),
      ks(w || (o && o.type === "keydown") ? o : null));
  }
  function cc(o) {
    if (re) {
      if ($) return;
      yn();
    }
    o = An(o);
    for (var c = pi(o), w; c !== yt && !Yi(c, "data-nav"); ) c = c.parentNode;
    if (Yi(c, "data-nav")) {
      var w = (Kn = Number(Kr(c, "data-nav"))),
        T = B || Y ? (w * W) / rn : w * Z,
        F = Tt ? w : Math.min(Math.ceil(T), W - 1);
      $i(F, o), jt === w && (Wt && Fi(), (Kn = -1));
    }
  }
  function Mr() {
    (dr = setInterval(function () {
      qn(null, xo);
    }, cn)),
      (Wt = !0);
  }
  function Or() {
    clearInterval(dr), (Wt = !1);
  }
  function aa(o, c) {
    Kt(Ie, { "data-action": o }), (Ie.innerHTML = Ni[0] + o + Ni[1] + c);
  }
  function Dr() {
    Mr(), Ie && aa("stop", ht[1]);
  }
  function Fi() {
    Or(), Ie && aa("start", ht[0]);
  }
  function uc() {
    xe && !Wt && (Dr(), (di = !1));
  }
  function fc() {
    Wt && (Fi(), (di = !0));
  }
  function la() {
    Wt ? (Fi(), (di = !0)) : (Dr(), (di = !1));
  }
  function hc() {
    e.hidden ? Wt && (Or(), (gr = !0)) : gr && (Mr(), (gr = !1));
  }
  function dc() {
    Wt && (Or(), (pr = !0));
  }
  function pc() {
    pr && (Mr(), (pr = !1));
  }
  function gc(o) {
    o = An(o);
    var c = [n.LEFT, n.RIGHT].indexOf(o.keyCode);
    c >= 0 && qn(o, c === 0 ? -1 : 1);
  }
  function mc(o) {
    o = An(o);
    var c = [n.LEFT, n.RIGHT].indexOf(o.keyCode);
    c >= 0 && (c === 0 ? De.disabled || qn(o, -1) : Pe.disabled || qn(o, 1));
  }
  function ca(o) {
    o.focus();
  }
  function vc(o) {
    o = An(o);
    var c = e.activeElement;
    if (Yi(c, "data-nav")) {
      var w = [n.LEFT, n.RIGHT, n.ENTER, n.SPACE].indexOf(o.keyCode),
        T = Number(Kr(c, "data-nav"));
      w >= 0 &&
        (w === 0
          ? T > 0 && ca(Xt[T - 1])
          : w === 1
          ? T < rn - 1 && ca(Xt[T + 1])
          : ((Kn = T), $i(T, o)));
    }
  }
  function An(o) {
    return (o = o || t.event), Jn(o) ? o.changedTouches[0] : o;
  }
  function pi(o) {
    return o.target || t.event.srcElement;
  }
  function Jn(o) {
    return o.type.indexOf("touch") >= 0;
  }
  function ua(o) {
    o.preventDefault ? o.preventDefault() : (o.returnValue = !1);
  }
  function fa() {
    return mf(gf(un.y - Gn.y, un.x - Gn.x), ue) === i.axis;
  }
  function ha(o) {
    if (re) {
      if ($) return;
      yn();
    }
    xe && Wt && Or(), (Qn = !0), sn && (js(sn), (sn = null));
    var c = An(o);
    G.emit(Jn(o) ? "touchStart" : "dragStart", Et(o)),
      !Jn(o) && ["img", "a"].indexOf(ta(pi(o))) >= 0 && ua(o),
      (un.x = Gn.x = c.clientX),
      (un.y = Gn.y = c.clientY),
      M && ((mr = parseFloat(I.style[ot].replace(bt, ""))), xr(I, "0s"));
  }
  function da(o) {
    if (Qn) {
      var c = An(o);
      (un.x = c.clientX),
        (un.y = c.clientY),
        M
          ? sn ||
            (sn = Hn(function () {
              pa(o);
            }))
          : (X === "?" && (X = fa()), X && (Ri = !0)),
        (typeof o.cancelable != "boolean" || o.cancelable) &&
          Ri &&
          o.preventDefault();
    }
  }
  function pa(o) {
    if (!X) {
      Qn = !1;
      return;
    }
    if (
      (js(sn),
      Qn &&
        (sn = Hn(function () {
          pa(o);
        })),
      X === "?" && (X = fa()),
      X)
    ) {
      !Ri && Jn(o) && (Ri = !0);
      try {
        o.type && G.emit(Jn(o) ? "touchMove" : "dragMove", Et(o));
      } catch {}
      var c = mr,
        w = vs(un, Gn);
      if (!N || B || Y) (c += w), (c += "px");
      else {
        var T = y ? (w * Z * 100) / ((Q + se) * z) : (w * 100) / (Q + se);
        (c += T), (c += "%");
      }
      I.style[ot] = bt + c + Yt;
    }
  }
  function Pr(o) {
    if (Qn) {
      sn && (js(sn), (sn = null)), M && xr(I, ""), (Qn = !1);
      var c = An(o);
      (un.x = c.clientX), (un.y = c.clientY);
      var w = vs(un, Gn);
      if (Math.abs(w)) {
        if (!Jn(o)) {
          var T = pi(o);
          Ve(T, {
            click: function F(K) {
              ua(K), pt(T, { click: F });
            },
          });
        }
        M
          ? (sn = Hn(function () {
              if (N && !Y) {
                var F = (-w * Z) / (Q + se);
                (F = w > 0 ? Math.floor(F) : Math.ceil(F)), (D += F);
              } else {
                var K = -(mr + w);
                if (K <= 0) D = ae;
                else if (K >= ke[z - 1]) D = ve;
                else
                  for (var we = 0; we < z && K >= ke[we]; )
                    (D = we), K > ke[we] && w < 0 && (D += 1), we++;
              }
              ks(o, w), G.emit(Jn(o) ? "touchEnd" : "dragEnd", Et(o));
            }))
          : X && qn(o, w > 0 ? -1 : 1);
      }
    }
    i.preventScrollOnTouch === "auto" && (Ri = !1),
      ue && (X = "?"),
      xe && !Wt && Mr();
  }
  function Ms() {
    var o = p || te;
    o.style.height = ke[D + Z] - ke[D] + "px";
  }
  function ga() {
    var o = B ? ((B + se) * W) / Q : W / Z;
    return Math.min(Math.ceil(o), W);
  }
  function Os() {
    if (!(!Ce || Tt) && rn !== jn) {
      var o = jn,
        c = rn,
        w = Qt;
      for (jn > rn && ((o = rn), (c = jn), (w = Gt)); o < c; ) w(Xt[o]), o++;
      jn = rn;
    }
  }
  function Et(o) {
    return {
      container: I,
      slideItems: ne,
      navContainer: yt,
      navItems: Xt,
      controlsContainer: et,
      hasControls: Ke,
      prevButton: De,
      nextButton: Pe,
      items: Z,
      slideBy: Ze,
      cloneCount: Me,
      slideCount: W,
      slideCountNew: z,
      index: D,
      indexCached: V,
      displayIndex: Mo(),
      navCurrentIndex: jt,
      navCurrentIndexCached: fi,
      pages: rn,
      pagesCached: jn,
      sheet: ge,
      isOn: je,
      event: o || {},
    };
  }
  return {
    version: "2.9.4",
    getInfo: Et,
    events: G,
    goTo: $i,
    play: uc,
    pause: fc,
    isOn: je,
    updateSliderHeight: Jo,
    refresh: Ho,
    destroy: Zl,
    rebuild: function () {
      return Eo(Ks(i, h));
    },
  };
};
const Ul = (i) => {
  document.querySelector('*[tabindex="-1"]') &&
    (document.querySelectorAll('button[tabindex="-1"]').forEach((e) => {
      e.setAttribute("tabindex", "0");
    }),
    document.querySelectorAll(`${i}>div`).forEach((e) => {
      let t = e.querySelector("*");
      e.getAttribute("tabIndex") == null
        ? t.setAttribute("tabIndex", "0")
        : t.setAttribute("tabIndex", e.getAttribute("tabIndex"));
    }));
};
class _f {
  constructor(e) {
    (this.DOM = { element: document.querySelectorAll(".js--slider-a") }),
      (this.ciaoInstances = e.instances),
      this.sliderAWrapper,
      this.DOM.element && this.init();
  }
  init() {
    this.DOM.element.forEach((e) => {
      (this.tl = it.timeline()),
        (this.sliderAWrapper = Eo({
          container: e,
          items: 1,
          gutter: 32,
          slideBy: 1,
          nav: !1,
          controls: !1,
          rewind: !1,
          swipeAngle: 60,
          lazyload: !0,
          lazyloadSelector: ".tns-lazy-img",
          preventActionWhenRunning: !0,
          mouseDrag: !0,
          autoplayButtonOutput: !1,
          speed: 1e3,
          onInit: () => {
            document.querySelectorAll(".js--counter") &&
              document.querySelectorAll(".js--counter").forEach((t, n) => {
                this.ciaoInstances.Counter[n].refresh();
              });
          },
        })),
        this.sliderAWrapper &&
          (this.customizedFunction(e, this.sliderAWrapper, this.tl),
          this.sliderAWrapper.events.on("indexChanged", () => {
            (e
              .closest(".c--slider-a")
              .querySelector(".js--dash").style.width = 0),
              this.tl.restart();
          }),
          this.sliderAWrapper.events.on("transitionEnd", () => {
            Ul(".js--slider-a");
          }));
    });
  }
  customizedFunction(e, t, n) {
    this.tl.fromTo(
      e.closest(".c--slider-a").querySelector(".js--dash"),
      { width: "0%" },
      {
        width: "100%",
        duration: 15,
        delay: 1,
        repeat: -1,
        ease: "power0.out",
        onRepeat: () => {
          n.restart(), t.goTo("next");
        },
      }
    );
  }
  destroy() {
    this.sliderAWrapper && this.sliderAWrapper.destroy(),
      this.tl && this.tl.kill();
  }
}
class bf {
  constructor(e) {
    (this.DOM = {
      element: document.querySelectorAll(".js--slider-a--second"),
    }),
      (this.ciaoInstances = e.instances),
      this.sliderAWrapper,
      this.DOM.element && this.init();
  }
  init() {
    this.DOM.element.forEach((e) => {
      (this.tl = it.timeline()),
        (this.sliderAWrapper = Eo({
          container: e,
          items: 1,
          gutter: 32,
          slideBy: 1,
          nav: !1,
          controls: !1,
          rewind: !1,
          swipeAngle: 60,
          lazyload: !0,
          lazyloadSelector: ".tns-lazy-img",
          preventActionWhenRunning: !0,
          mouseDrag: !0,
          autoplayButtonOutput: !1,
          speed: 1e3,
          onInit: () => {
            document.querySelectorAll(".js--counter") &&
              document.querySelectorAll(".js--counter").forEach((t, n) => {
                this.ciaoInstances.Counter[n].refresh();
              });
          },
        })),
        this.sliderAWrapper &&
          (this.customizedFunction(e, this.sliderAWrapper, this.tl),
          this.sliderAWrapper.events.on("indexChanged", () => {
            (e
              .closest(".c--slider-a")
              .querySelector(".js--dash").style.width = 0),
              this.tl.restart();
          }),
          this.sliderAWrapper.events.on("transitionEnd", () => {
            Ul(".js--slider-a");
          }));
    });
  }
  customizedFunction(e, t, n) {
    this.tl.fromTo(
      e.closest(".c--slider-a").querySelector(".js--dash"),
      { width: "0%" },
      {
        width: "100%",
        duration: 6,
        delay: 1,
        repeat: -1,
        ease: "power0.out",
        onRepeat: () => {
          n.restart(), t.goTo("next");
        },
      }
    );
  }
  destroy() {
    this.sliderAWrapper && this.sliderAWrapper.destroy(),
      this.tl && this.tl.kill();
  }
}
var Bl = { exports: {} };
/**
 * @file postscribe
 * @description Asynchronously write javascript, even with document.write.
 * @version v2.0.8
 * @see {@link https://krux.github.io/postscribe}
 * @license MIT
 * @author Derek Brans
 * @copyright 2016 Krux Digital, Inc
 */ (function (i, e) {
  (function (n, r) {
    i.exports = r();
  })(el, function () {
    return (function (t) {
      var n = {};
      function r(s) {
        if (n[s]) return n[s].exports;
        var a = (n[s] = { exports: {}, id: s, loaded: !1 });
        return (
          t[s].call(a.exports, a, a.exports, r), (a.loaded = !0), a.exports
        );
      }
      return (r.m = t), (r.c = n), (r.p = ""), r(0);
    })([
      function (t, n, r) {
        var s = r(1),
          a = l(s);
        function l(u) {
          return u && u.__esModule ? u : { default: u };
        }
        t.exports = a.default;
      },
      function (t, n, r) {
        n.__esModule = !0;
        var s =
          Object.assign ||
          function (m) {
            for (var h = 1; h < arguments.length; h++) {
              var d = arguments[h];
              for (var b in d)
                Object.prototype.hasOwnProperty.call(d, b) && (m[b] = d[b]);
            }
            return m;
          };
        n.default = k;
        var a = r(2),
          l = y(a),
          u = r(4),
          g = C(u);
        function C(m) {
          if (m && m.__esModule) return m;
          var h = {};
          if (m != null)
            for (var d in m)
              Object.prototype.hasOwnProperty.call(m, d) && (h[d] = m[d]);
          return (h.default = m), h;
        }
        function y(m) {
          return m && m.__esModule ? m : { default: m };
        }
        function S() {}
        var f = {
            afterAsync: S,
            afterDequeue: S,
            afterStreamStart: S,
            afterWrite: S,
            autoFix: !0,
            beforeEnqueue: S,
            beforeWriteToken: function (h) {
              return h;
            },
            beforeWrite: function (h) {
              return h;
            },
            done: S,
            error: function (h) {
              throw new Error(h.msg);
            },
            releaseAsync: !1,
          },
          A = 0,
          E = [],
          _ = null;
        function O() {
          var m = E.shift();
          if (m) {
            var h = g.last(m);
            h.afterDequeue(),
              (m.stream = q.apply(void 0, m)),
              h.afterStreamStart();
          }
        }
        function q(m, h, d) {
          (_ = new l.default(m, d)),
            (_.id = A++),
            (_.name = d.name || _.id),
            (k.streams[_.name] = _);
          var b = m.ownerDocument,
            M = {
              close: b.close,
              open: b.open,
              write: b.write,
              writeln: b.writeln,
            };
          function j(ie) {
            (ie = d.beforeWrite(ie)), _.write(ie), d.afterWrite(ie);
          }
          s(b, {
            close: S,
            open: S,
            write: function () {
              for (var v = arguments.length, P = Array(v), L = 0; L < v; L++)
                P[L] = arguments[L];
              return j(P.join(""));
            },
            writeln: function () {
              for (var v = arguments.length, P = Array(v), L = 0; L < v; L++)
                P[L] = arguments[L];
              return j(
                P.join("") +
                  `
`
              );
            },
          });
          var H = _.win.onerror || S;
          return (
            (_.win.onerror = function (ie, v, P) {
              d.error({ msg: ie + " - " + v + ": " + P }),
                H.apply(_.win, [ie, v, P]);
            }),
            _.write(h, function () {
              s(b, M), (_.win.onerror = H), d.done(), (_ = null), O();
            }),
            _
          );
        }
        function k(m, h, d) {
          if (g.isFunction(d)) d = { done: d };
          else if (d === "clear") {
            (E = []), (_ = null), (A = 0);
            return;
          }
          (d = g.defaults(d, f)),
            /^#/.test(m)
              ? (m = window.document.getElementById(m.substr(1)))
              : (m = m.jquery ? m[0] : m);
          var b = [m, h, d];
          return (
            (m.postscribe = {
              cancel: function () {
                b.stream ? b.stream.abort() : (b[1] = S);
              },
            }),
            d.beforeEnqueue(b),
            E.push(b),
            _ || O(),
            m.postscribe
          );
        }
        s(k, { streams: {}, queue: E, WriteStream: l.default });
      },
      function (t, n, r) {
        n.__esModule = !0;
        var s =
            Object.assign ||
            function (k) {
              for (var m = 1; m < arguments.length; m++) {
                var h = arguments[m];
                for (var d in h)
                  Object.prototype.hasOwnProperty.call(h, d) && (k[d] = h[d]);
              }
              return k;
            },
          a = r(3),
          l = y(a),
          u = r(4),
          g = C(u);
        function C(k) {
          if (k && k.__esModule) return k;
          var m = {};
          if (k != null)
            for (var h in k)
              Object.prototype.hasOwnProperty.call(k, h) && (m[h] = k[h]);
          return (m.default = k), m;
        }
        function y(k) {
          return k && k.__esModule ? k : { default: k };
        }
        function S(k, m) {
          if (!(k instanceof m))
            throw new TypeError("Cannot call a class as a function");
        }
        var f = "data-ps-",
          A = "ps-style",
          E = "ps-script";
        function _(k, m) {
          var h = f + m,
            d = k.getAttribute(h);
          return g.existy(d) ? String(d) : d;
        }
        function O(k, m) {
          var h =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : null,
            d = f + m;
          g.existy(h) && h !== "" ? k.setAttribute(d, h) : k.removeAttribute(d);
        }
        var q = (function () {
          function k(m) {
            var h =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            S(this, k),
              (this.root = m),
              (this.options = h),
              (this.doc = m.ownerDocument),
              (this.win = this.doc.defaultView || this.doc.parentWindow),
              (this.parser = new l.default("", { autoFix: h.autoFix })),
              (this.actuals = [m]),
              (this.proxyHistory = ""),
              (this.proxyRoot = this.doc.createElement(m.nodeName)),
              (this.scriptStack = []),
              (this.writeQueue = []),
              O(this.proxyRoot, "proxyof", 0);
          }
          return (
            (k.prototype.write = function () {
              var h;
              for (
                (h = this.writeQueue).push.apply(h, arguments);
                !this.deferredRemote && this.writeQueue.length;

              ) {
                var d = this.writeQueue.shift();
                g.isFunction(d) ? this._callFunction(d) : this._writeImpl(d);
              }
            }),
            (k.prototype._callFunction = function (h) {
              var d = { type: "function", value: h.name || h.toString() };
              this._onScriptStart(d),
                h.call(this.win, this.doc),
                this._onScriptDone(d);
            }),
            (k.prototype._writeImpl = function (h) {
              this.parser.append(h);
              for (
                var d = void 0, b = void 0, M = void 0, j = [];
                (d = this.parser.readToken()) &&
                !(b = g.isScript(d)) &&
                !(M = g.isStyle(d));

              )
                (d = this.options.beforeWriteToken(d)), d && j.push(d);
              j.length > 0 && this._writeStaticTokens(j),
                b && this._handleScriptToken(d),
                M && this._handleStyleToken(d);
            }),
            (k.prototype._writeStaticTokens = function (h) {
              var d = this._buildChunk(h);
              return d.actual
                ? ((d.html = this.proxyHistory + d.actual),
                  (this.proxyHistory += d.proxy),
                  (this.proxyRoot.innerHTML = d.html),
                  this._walkChunk(),
                  d)
                : null;
            }),
            (k.prototype._buildChunk = function (h) {
              for (
                var d = this.actuals.length,
                  b = [],
                  M = [],
                  j = [],
                  H = h.length,
                  ie = 0;
                ie < H;
                ie++
              ) {
                var v = h[ie],
                  P = v.toString();
                if ((b.push(P), v.attrs)) {
                  if (!/^noscript$/i.test(v.tagName)) {
                    var L = d++;
                    M.push(P.replace(/(\/?>)/, " " + f + "id=" + L + " $1")),
                      v.attrs.id !== E &&
                        v.attrs.id !== A &&
                        j.push(
                          v.type === "atomicTag"
                            ? ""
                            : "<" +
                                v.tagName +
                                " " +
                                f +
                                "proxyof=" +
                                L +
                                (v.unary ? " />" : ">")
                        );
                  }
                } else M.push(P), j.push(v.type === "endTag" ? P : "");
              }
              return {
                tokens: h,
                raw: b.join(""),
                actual: M.join(""),
                proxy: j.join(""),
              };
            }),
            (k.prototype._walkChunk = function () {
              for (
                var h = void 0, d = [this.proxyRoot];
                g.existy((h = d.shift()));

              ) {
                var b = h.nodeType === 1,
                  M = b && _(h, "proxyof");
                if (!M) {
                  b && ((this.actuals[_(h, "id")] = h), O(h, "id"));
                  var j = h.parentNode && _(h.parentNode, "proxyof");
                  j && this.actuals[j].appendChild(h);
                }
                d.unshift.apply(d, g.toArray(h.childNodes));
              }
            }),
            (k.prototype._handleScriptToken = function (h) {
              var d = this,
                b = this.parser.clear();
              b && this.writeQueue.unshift(b),
                (h.src = h.attrs.src || h.attrs.SRC),
                (h = this.options.beforeWriteToken(h)),
                h &&
                  (h.src && this.scriptStack.length
                    ? (this.deferredRemote = h)
                    : this._onScriptStart(h),
                  this._writeScriptToken(h, function () {
                    d._onScriptDone(h);
                  }));
            }),
            (k.prototype._handleStyleToken = function (h) {
              var d = this.parser.clear();
              d && this.writeQueue.unshift(d),
                (h.type = h.attrs.type || h.attrs.TYPE || "text/css"),
                (h = this.options.beforeWriteToken(h)),
                h && this._writeStyleToken(h),
                d && this.write();
            }),
            (k.prototype._writeStyleToken = function (h) {
              var d = this._buildStyle(h);
              this._insertCursor(d, A),
                h.content &&
                  (d.styleSheet && !d.sheet
                    ? (d.styleSheet.cssText = h.content)
                    : d.appendChild(this.doc.createTextNode(h.content)));
            }),
            (k.prototype._buildStyle = function (h) {
              var d = this.doc.createElement(h.tagName);
              return (
                d.setAttribute("type", h.type),
                g.eachKey(h.attrs, function (b, M) {
                  d.setAttribute(b, M);
                }),
                d
              );
            }),
            (k.prototype._insertCursor = function (h, d) {
              this._writeImpl('<span id="' + d + '"/>');
              var b = this.doc.getElementById(d);
              b && b.parentNode.replaceChild(h, b);
            }),
            (k.prototype._onScriptStart = function (h) {
              (h.outerWrites = this.writeQueue),
                (this.writeQueue = []),
                this.scriptStack.unshift(h);
            }),
            (k.prototype._onScriptDone = function (h) {
              if (h !== this.scriptStack[0]) {
                this.options.error({
                  msg: "Bad script nesting or script finished twice",
                });
                return;
              }
              this.scriptStack.shift(),
                this.write.apply(this, h.outerWrites),
                !this.scriptStack.length &&
                  this.deferredRemote &&
                  (this._onScriptStart(this.deferredRemote),
                  (this.deferredRemote = null));
            }),
            (k.prototype._writeScriptToken = function (h, d) {
              var b = this._buildScript(h),
                M = this._shouldRelease(b),
                j = this.options.afterAsync;
              h.src &&
                ((b.src = h.src),
                this._scriptLoadHandler(
                  b,
                  M
                    ? j
                    : function () {
                        d(), j();
                      }
                ));
              try {
                this._insertCursor(b, E), (!b.src || M) && d();
              } catch (H) {
                this.options.error(H), d();
              }
            }),
            (k.prototype._buildScript = function (h) {
              var d = this.doc.createElement(h.tagName);
              return (
                g.eachKey(h.attrs, function (b, M) {
                  d.setAttribute(b, M);
                }),
                h.content && (d.text = h.content),
                d
              );
            }),
            (k.prototype._scriptLoadHandler = function (h, d) {
              function b() {
                h = h.onload = h.onreadystatechange = h.onerror = null;
              }
              var M = this.options.error;
              function j() {
                b(), d?.(), (d = null);
              }
              function H(v) {
                b(), M(v), d?.(), (d = null);
              }
              function ie(v, P) {
                var L = v["on" + P];
                L != null && (v["_on" + P] = L);
              }
              ie(h, "load"),
                ie(h, "error"),
                s(h, {
                  onload: function () {
                    if (h._onload)
                      try {
                        h._onload.apply(
                          this,
                          Array.prototype.slice.call(arguments, 0)
                        );
                      } catch (P) {
                        H({
                          msg: "onload handler failed " + P + " @ " + h.src,
                        });
                      }
                    j();
                  },
                  onerror: function () {
                    if (h._onerror)
                      try {
                        h._onerror.apply(
                          this,
                          Array.prototype.slice.call(arguments, 0)
                        );
                      } catch (P) {
                        H({
                          msg: "onerror handler failed " + P + " @ " + h.src,
                        });
                        return;
                      }
                    H({ msg: "remote script failed " + h.src });
                  },
                  onreadystatechange: function () {
                    /^(loaded|complete)$/.test(h.readyState) && j();
                  },
                });
            }),
            (k.prototype._shouldRelease = function (h) {
              var d = /^script$/i.test(h.nodeName);
              return (
                !d ||
                !!(
                  this.options.releaseAsync &&
                  h.src &&
                  h.hasAttribute("async")
                )
              );
            }),
            k
          );
        })();
        n.default = q;
      },
      function (t, n, r) {
        /**
         * @file prescribe
         * @description Tiny, forgiving HTML parser
         * @version vundefined
         * @see {@link https://github.com/krux/prescribe/}
         * @license MIT
         * @author Derek Brans
         * @copyright 2016 Krux Digital, Inc
         */ (function (a, l) {
          t.exports = l();
        })(this, function () {
          return (function (s) {
            var a = {};
            function l(u) {
              if (a[u]) return a[u].exports;
              var g = (a[u] = { exports: {}, id: u, loaded: !1 });
              return (
                s[u].call(g.exports, g, g.exports, l),
                (g.loaded = !0),
                g.exports
              );
            }
            return (l.m = s), (l.c = a), (l.p = ""), l(0);
          })([
            function (s, a, l) {
              var u = l(1),
                g = C(u);
              function C(y) {
                return y && y.__esModule ? y : { default: y };
              }
              s.exports = g.default;
            },
            function (s, a, l) {
              a.__esModule = !0;
              var u = l(2),
                g = _(u),
                C = l(3),
                y = _(C),
                S = l(6),
                f = E(S),
                A = l(5);
              function E(h) {
                return h && h.__esModule ? h : { default: h };
              }
              function _(h) {
                if (h && h.__esModule) return h;
                var d = {};
                if (h != null)
                  for (var b in h)
                    Object.prototype.hasOwnProperty.call(h, b) && (d[b] = h[b]);
                return (d.default = h), d;
              }
              function O(h, d) {
                if (!(h instanceof d))
                  throw new TypeError("Cannot call a class as a function");
              }
              var q = {
                  comment: /^<!--/,
                  endTag: /^<\//,
                  atomicTag:
                    /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                  startTag: /^</,
                  chars: /^[^<]/,
                },
                k = (function () {
                  function h() {
                    var d = this,
                      b =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : "",
                      M =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : {};
                    O(this, h), (this.stream = b);
                    var j = !1,
                      H = {};
                    for (var ie in g)
                      g.hasOwnProperty(ie) &&
                        (M.autoFix && (H[ie + "Fix"] = !0),
                        (j = j || H[ie + "Fix"]));
                    j
                      ? ((this._readToken = (0, f.default)(
                          this,
                          H,
                          function () {
                            return d._readTokenImpl();
                          }
                        )),
                        (this._peekToken = (0, f.default)(this, H, function () {
                          return d._peekTokenImpl();
                        })))
                      : ((this._readToken = this._readTokenImpl),
                        (this._peekToken = this._peekTokenImpl));
                  }
                  return (
                    (h.prototype.append = function (b) {
                      this.stream += b;
                    }),
                    (h.prototype.prepend = function (b) {
                      this.stream = b + this.stream;
                    }),
                    (h.prototype._readTokenImpl = function () {
                      var b = this._peekTokenImpl();
                      if (b)
                        return (this.stream = this.stream.slice(b.length)), b;
                    }),
                    (h.prototype._peekTokenImpl = function () {
                      for (var b in q)
                        if (q.hasOwnProperty(b) && q[b].test(this.stream)) {
                          var M = y[b](this.stream);
                          if (M)
                            return M.type === "startTag" &&
                              /script|style/i.test(M.tagName)
                              ? null
                              : ((M.text = this.stream.substr(0, M.length)), M);
                        }
                    }),
                    (h.prototype.peekToken = function () {
                      return this._peekToken();
                    }),
                    (h.prototype.readToken = function () {
                      return this._readToken();
                    }),
                    (h.prototype.readTokens = function (b) {
                      for (var M = void 0; (M = this.readToken()); )
                        if (b[M.type] && b[M.type](M) === !1) return;
                    }),
                    (h.prototype.clear = function () {
                      var b = this.stream;
                      return (this.stream = ""), b;
                    }),
                    (h.prototype.rest = function () {
                      return this.stream;
                    }),
                    h
                  );
                })();
              (a.default = k),
                (k.tokenToString = function (h) {
                  return h.toString();
                }),
                (k.escapeAttributes = function (h) {
                  var d = {};
                  for (var b in h)
                    h.hasOwnProperty(b) &&
                      (d[b] = (0, A.escapeQuotes)(h[b], null));
                  return d;
                }),
                (k.supports = g);
              for (var m in g)
                g.hasOwnProperty(m) &&
                  (k.browserHasFlaw = k.browserHasFlaw || (!g[m] && m));
            },
            function (s, a) {
              a.__esModule = !0;
              var l = !1,
                u = !1,
                g = window.document.createElement("div");
              try {
                var C = "<P><I></P></I>";
                (g.innerHTML = C), (a.tagSoup = l = g.innerHTML !== C);
              } catch {
                a.tagSoup = l = !1;
              }
              try {
                (g.innerHTML = "<P><i><P></P></i></P>"),
                  (a.selfClose = u = g.childNodes.length === 2);
              } catch {
                a.selfClose = u = !1;
              }
              (g = null), (a.tagSoup = l), (a.selfClose = u);
            },
            function (s, a, l) {
              a.__esModule = !0;
              var u =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (_) {
                      return typeof _;
                    }
                  : function (_) {
                      return _ &&
                        typeof Symbol == "function" &&
                        _.constructor === Symbol &&
                        _ !== Symbol.prototype
                        ? "symbol"
                        : typeof _;
                    };
              (a.comment = y),
                (a.chars = S),
                (a.startTag = f),
                (a.atomicTag = A),
                (a.endTag = E);
              var g = l(4),
                C = {
                  startTag:
                    /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                  fillAttr:
                    /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                };
              function y(_) {
                var O = _.indexOf("-->");
                if (O >= 0)
                  return new g.CommentToken(_.substr(4, O - 1), O + 3);
              }
              function S(_) {
                var O = _.indexOf("<");
                return new g.CharsToken(O >= 0 ? O : _.length);
              }
              function f(_) {
                var O = _.indexOf(">");
                if (O !== -1) {
                  var q = _.match(C.startTag);
                  if (q) {
                    var k = (function () {
                      var m = {},
                        h = {},
                        d = q[2];
                      return (
                        q[2].replace(C.attr, function (b, M) {
                          arguments[2] ||
                          arguments[3] ||
                          arguments[4] ||
                          arguments[5]
                            ? arguments[5]
                              ? ((m[arguments[5]] = ""), (h[arguments[5]] = !0))
                              : (m[M] =
                                  arguments[2] ||
                                  arguments[3] ||
                                  arguments[4] ||
                                  (C.fillAttr.test(M) && M) ||
                                  "")
                            : (m[M] = ""),
                            (d = d.replace(b, ""));
                        }),
                        {
                          v: new g.StartTagToken(
                            q[1],
                            q[0].length,
                            m,
                            h,
                            !!q[3],
                            d.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                          ),
                        }
                      );
                    })();
                    if ((typeof k > "u" ? "undefined" : u(k)) === "object")
                      return k.v;
                  }
                }
              }
              function A(_) {
                var O = f(_);
                if (O) {
                  var q = _.slice(O.length);
                  if (
                    q.match(new RegExp("</\\s*" + O.tagName + "\\s*>", "i"))
                  ) {
                    var k = q.match(
                      new RegExp(
                        "([\\s\\S]*?)</\\s*" + O.tagName + "\\s*>",
                        "i"
                      )
                    );
                    if (k)
                      return new g.AtomicTagToken(
                        O.tagName,
                        k[0].length + O.length,
                        O.attrs,
                        O.booleanAttrs,
                        k[1]
                      );
                  }
                }
              }
              function E(_) {
                var O = _.match(C.endTag);
                if (O) return new g.EndTagToken(O[1], O[0].length);
              }
            },
            function (s, a, l) {
              (a.__esModule = !0),
                (a.EndTagToken =
                  a.AtomicTagToken =
                  a.StartTagToken =
                  a.TagToken =
                  a.CharsToken =
                  a.CommentToken =
                  a.Token =
                    void 0);
              var u = l(5);
              function g(y, S) {
                if (!(y instanceof S))
                  throw new TypeError("Cannot call a class as a function");
              }
              (a.Token = function y(S, f) {
                g(this, y),
                  (this.type = S),
                  (this.length = f),
                  (this.text = "");
              }),
                (a.CommentToken = (function () {
                  function y(S, f) {
                    g(this, y),
                      (this.type = "comment"),
                      (this.length = f || (S ? S.length : 0)),
                      (this.text = ""),
                      (this.content = S);
                  }
                  return (
                    (y.prototype.toString = function () {
                      return "<!--" + this.content;
                    }),
                    y
                  );
                })()),
                (a.CharsToken = (function () {
                  function y(S) {
                    g(this, y),
                      (this.type = "chars"),
                      (this.length = S),
                      (this.text = "");
                  }
                  return (
                    (y.prototype.toString = function () {
                      return this.text;
                    }),
                    y
                  );
                })());
              var C = (a.TagToken = (function () {
                function y(S, f, A, E, _) {
                  g(this, y),
                    (this.type = S),
                    (this.length = A),
                    (this.text = ""),
                    (this.tagName = f),
                    (this.attrs = E),
                    (this.booleanAttrs = _),
                    (this.unary = !1),
                    (this.html5Unary = !1);
                }
                return (
                  (y.formatTag = function (f) {
                    var A =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : null,
                      E = "<" + f.tagName;
                    for (var _ in f.attrs)
                      if (f.attrs.hasOwnProperty(_)) {
                        E += " " + _;
                        var O = f.attrs[_];
                        (typeof f.booleanAttrs > "u" ||
                          typeof f.booleanAttrs[_] > "u") &&
                          (E += '="' + (0, u.escapeQuotes)(O) + '"');
                      }
                    return (
                      f.rest && (E += " " + f.rest),
                      f.unary && !f.html5Unary ? (E += "/>") : (E += ">"),
                      A != null && (E += A + "</" + f.tagName + ">"),
                      E
                    );
                  }),
                  y
                );
              })());
              (a.StartTagToken = (function () {
                function y(S, f, A, E, _, O) {
                  g(this, y),
                    (this.type = "startTag"),
                    (this.length = f),
                    (this.text = ""),
                    (this.tagName = S),
                    (this.attrs = A),
                    (this.booleanAttrs = E),
                    (this.html5Unary = !1),
                    (this.unary = _),
                    (this.rest = O);
                }
                return (
                  (y.prototype.toString = function () {
                    return C.formatTag(this);
                  }),
                  y
                );
              })()),
                (a.AtomicTagToken = (function () {
                  function y(S, f, A, E, _) {
                    g(this, y),
                      (this.type = "atomicTag"),
                      (this.length = f),
                      (this.text = ""),
                      (this.tagName = S),
                      (this.attrs = A),
                      (this.booleanAttrs = E),
                      (this.unary = !1),
                      (this.html5Unary = !1),
                      (this.content = _);
                  }
                  return (
                    (y.prototype.toString = function () {
                      return C.formatTag(this, this.content);
                    }),
                    y
                  );
                })()),
                (a.EndTagToken = (function () {
                  function y(S, f) {
                    g(this, y),
                      (this.type = "endTag"),
                      (this.length = f),
                      (this.text = ""),
                      (this.tagName = S);
                  }
                  return (
                    (y.prototype.toString = function () {
                      return "</" + this.tagName + ">";
                    }),
                    y
                  );
                })());
            },
            function (s, a) {
              (a.__esModule = !0), (a.escapeQuotes = l);
              function l(u) {
                var g =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : "";
                return u
                  ? u.replace(/([^"]*)"/g, function (C, y) {
                      return /\\/.test(y) ? y + '"' : y + '\\"';
                    })
                  : g;
              }
            },
            function (s, a) {
              (a.__esModule = !0), (a.default = f);
              var l =
                  /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                u = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
              function g(A) {
                return (
                  A &&
                    A.type === "startTag" &&
                    ((A.unary = l.test(A.tagName) || A.unary),
                    (A.html5Unary = !/\/>$/.test(A.text))),
                  A
                );
              }
              function C(A, E) {
                var _ = A.stream,
                  O = g(E());
                return (A.stream = _), O;
              }
              function y(A, E) {
                var _ = E.pop();
                A.prepend("</" + _.tagName + ">");
              }
              function S() {
                var A = [];
                return (
                  (A.last = function () {
                    return this[this.length - 1];
                  }),
                  (A.lastTagNameEq = function (E) {
                    var _ = this.last();
                    return (
                      _ &&
                      _.tagName &&
                      _.tagName.toUpperCase() === E.toUpperCase()
                    );
                  }),
                  (A.containsTagName = function (E) {
                    for (var _ = 0, O; (O = this[_]); _++)
                      if (O.tagName === E) return !0;
                    return !1;
                  }),
                  A
                );
              }
              function f(A, E, _) {
                var O = S(),
                  q = {
                    startTag: function (h) {
                      var d = h.tagName;
                      d.toUpperCase() === "TR" && O.lastTagNameEq("TABLE")
                        ? (A.prepend("<TBODY>"), k())
                        : E.selfCloseFix && u.test(d) && O.containsTagName(d)
                        ? O.lastTagNameEq(d)
                          ? y(A, O)
                          : (A.prepend("</" + h.tagName + ">"), k())
                        : h.unary || O.push(h);
                    },
                    endTag: function (h) {
                      var d = O.last();
                      d
                        ? E.tagSoupFix && !O.lastTagNameEq(h.tagName)
                          ? y(A, O)
                          : O.pop()
                        : E.tagSoupFix && (_(), k());
                    },
                  };
                function k() {
                  var m = C(A, _);
                  m && q[m.type] && q[m.type](m);
                }
                return function () {
                  return k(), g(_());
                };
              }
            },
          ]);
        });
      },
      function (t, n) {
        n.__esModule = !0;
        var r =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (E) {
                return typeof E;
              }
            : function (E) {
                return E &&
                  typeof Symbol == "function" &&
                  E.constructor === Symbol &&
                  E !== Symbol.prototype
                  ? "symbol"
                  : typeof E;
              };
        (n.existy = s),
          (n.isFunction = a),
          (n.each = l),
          (n.eachKey = u),
          (n.defaults = g),
          (n.toArray = C),
          (n.last = y),
          (n.isTag = S),
          (n.isScript = f),
          (n.isStyle = A);
        function s(E) {
          return E != null;
        }
        function a(E) {
          return typeof E == "function";
        }
        function l(E, _, O) {
          var q = void 0,
            k = (E && E.length) || 0;
          for (q = 0; q < k; q++) _.call(O, E[q], q);
        }
        function u(E, _, O) {
          for (var q in E) E.hasOwnProperty(q) && _.call(O, q, E[q]);
        }
        function g(E, _) {
          return (
            (E = E || {}),
            u(_, function (O, q) {
              s(E[O]) || (E[O] = q);
            }),
            E
          );
        }
        function C(E) {
          try {
            return Array.prototype.slice.call(E);
          } catch {
            var _ = (function () {
              var q = [];
              return (
                l(E, function (k) {
                  q.push(k);
                }),
                { v: q }
              );
            })();
            if ((typeof _ > "u" ? "undefined" : r(_)) === "object") return _.v;
          }
        }
        function y(E) {
          return E[E.length - 1];
        }
        function S(E, _) {
          return !E ||
            !(E.type === "startTag" || E.type === "atomicTag") ||
            !("tagName" in E)
            ? !1
            : !!~E.tagName.toLowerCase().indexOf(_);
        }
        function f(E) {
          return S(E, "script");
        }
        function A(E) {
          return S(E, "style");
        }
      },
    ]);
  });
})(Bl);
var Tf = Bl.exports;
const Ja = cs(Tf);
class Ef {
  constructor(e) {
    (this.DOM = { element: e.element }),
      (this.formid = ""),
      (this.portalid = ""),
      (this.form = "");
  }
  init() {
    (this.formid = this.DOM.element.getAttribute("data-id")),
      (this.portalid = this.DOM.element.getAttribute("data-portalid")),
      this.events();
  }
  events() {
    this.form = Ja(
      "#js--form-hbst-form",
      `
        <script> 
            hbspt.forms.create({
                region: "na1",
                portalId: "${this.portalid}",
                formId: "${this.formid}",
            })
        <\/script>`
    );
  }
  destroy() {
    Ja("#js--form-hbst-form", "EMPTY"),
      (document.querySelector("#js--form-hbst-form").innerHTML = "");
  }
}
class Af extends Ou {
  constructor(e) {
    super({
      blazy: { enable: !0, selector: "g--lazy-01" },
      boostify: e.boostify,
    });
  }
  async contentReplaced() {
    super.contentReplaced(),
      document.querySelectorAll(".c--multilang-a__title").length > 0 &&
        ((this.instances.Multilang = []),
        this.boostify.scroll({
          distance: 300,
          callback: async () => {
            await Ci(
              () => import("./Multilang.7feac39e.js"),
              [
                "_hej/Multilang.7feac39e.js",
                "_hej/index.4db78ffb.js",
                "_hej/main.js",
                "_hej/preload-helper.cf010ec4.js",
                "_hej/_commonjsHelpers.de833af9.js",
              ]
            ).then(({ default: e }) => {
              window.lib.Multilang = e;
            }),
              document
                .querySelectorAll(".c--multilang-a__title")
                .forEach((e, t) => {
                  this.instances.Multilang[t] = new window.lib.Multilang({
                    element: e,
                  });
                });
          },
        })),
      document.querySelectorAll(".c--media-a").length > 0 &&
        ((this.instances.ZoomScroll = []),
        document.querySelectorAll(".c--media-a").forEach((e, t) => {
          this.boostify.observer({
            element: e,
            callback: async () => {
              !window.lib.ZoomScroll &&
                !this.loadLibraryZoomOnce &&
                (await Ci(
                  () => import("./ZoomScroll.088ad20f.js"),
                  [
                    "_hej/ZoomScroll.088ad20f.js",
                    "_hej/index.4db78ffb.js",
                    "_hej/preload-helper.cf010ec4.js",
                    "_hej/main.js",
                    "_hej/_commonjsHelpers.de833af9.js",
                    "_hej/index.12d62e94.js",
                  ]
                ).then(({ default: n }) => {
                  window.lib.ZoomScroll = n;
                }),
                (this.loadLibraryZoomOnce = !0)),
                e.hasAttribute("video-src") &&
                  !e.querySelector("video") &&
                  (await this.boostify.videoPlayer({
                    url: { mp4: e.getAttribute("video-src") },
                    attributes: {
                      class:
                        "c--media-a__media c--media-a__media--second js--zoom",
                      loop: !0,
                      muted: !0,
                      controls: !1,
                      autoplay: !0,
                      playsInline: !0,
                    },
                    appendTo: e,
                  })),
                (this.instances.ZoomScroll[t] = new window.lib.ZoomScroll({
                  element: e.querySelector(".js--zoom"),
                }));
            },
          });
        })),
      document.querySelectorAll("*[class*=js--marquee-]").length > 0 &&
        ((this.instances.InfiniteMarqueeA = []),
        (this.instances.InfiniteMarqueeB = []),
        this.boostify.scroll({
          distance: 30,
          callback: async () => {
            await Ci(
              () => import("./InfiniteMarquee.06ef5266.js"),
              [
                "_hej/InfiniteMarquee.06ef5266.js",
                "_hej/_commonjsHelpers.de833af9.js",
                "_hej/index.4db78ffb.js",
                "_hej/main.js",
                "_hej/preload-helper.cf010ec4.js",
              ]
            ).then(({ default: e }) => {
              window.lib.Marquee = e;
            }),
              document.querySelectorAll(".js--marquee-a").length > 0 &&
                document.querySelectorAll(".js--marquee-a").forEach((e, t) => {
                  this.instances.InfiniteMarqueeA[t] = new window.lib.Marquee({
                    element: e,
                    speed: parseFloat(e.getAttribute("data-speed")),
                    reversed: e.getAttribute("data-reversed"),
                  });
                }),
              document.querySelectorAll(".js--marquee-b").length > 0 &&
                document.querySelectorAll(".js--marquee-b").forEach((e, t) => {
                  this.instances.InfiniteMarqueeB[t] = new window.lib.Marquee({
                    element: e,
                    speed: parseFloat(e.getAttribute("data-speed")),
                    controlsOnHover: e.getAttribute("data-controls-on-hover"),
                    reversed: e.getAttribute("data-reversed"),
                  });
                });
          },
        })),
      document.querySelectorAll(".js--modal").length > 0 &&
        ((this.instances.Modal = []),
        document.querySelectorAll(".js--modal").forEach((e) => {
          this.instances.Modal = new Fu({
            backdrop: "g--backdrop-01",
            backdropActiveClass: "g--backdrop-01--is-active",
            element: e,
            elementClass: "g--modal-01",
            modalIdTarget: "modal-1",
            modalActiveClass: "g--modal-01--is-active",
            onHide: () => {
              document.querySelectorAll(".js--modal").forEach((t) => {
                var n = t.children[0].src;
                (t.children[0].src = ""), (t.children[0].src = n);
              });
            },
            onShow: () => {},
          });
        })),
      setTimeout(() => {
        document.querySelectorAll(".c--hs-a").length > 0 &&
          ((this.instances.HorizontalScroll = []),
          document.querySelectorAll(".c--hs-a").forEach((e, t) => {
            this.instances.HorizontalScroll[t] = new af({
              element: e,
              pin: document.querySelector(".js--hs-a"),
              markers: !1,
              startValues: {
                breakpoint: 581,
                bigScreenPosition: "center 55%",
                smallScreenPosition: "top 0",
              },
            });
          }));
      }, 30),
      document.querySelectorAll(".js--counter").length > 0 &&
        ((this.instances.Counter = []),
        document.querySelectorAll(".js--counter").forEach((e, t) => {
          this.instances.Counter[t] = new sf({
            element: e,
            regionFormat: "en-US",
            separator: ".",
            duration: 1.5,
            scrollStart: "80%",
            pinnedContainer: document.querySelectorAll(".js--hs-a"),
          });
        })),
      document.querySelectorAll(".js--slider-a").length > 0 &&
        ((this.instances.SliderA = []),
        document.querySelectorAll(".js--slider-a").forEach((e, t) => {
          this.instances.SliderA[t] = new _f({ instances: this.instances });
        })),
      document.querySelectorAll(".js--slider-a--second").length > 0 &&
        ((this.instances.SliderASecond = []),
        document.querySelectorAll(".js--slider-a--second").forEach((e, t) => {
          this.instances.SliderASecond[t] = new bf({
            instances: this.instances,
          });
        })),
      document.querySelectorAll(".js--form-hbst").length > 0 &&
        ((this.instances.FormHbst = []),
        document.querySelectorAll(".js--form-hbst").forEach((e, t) => {
          (this.instances.FormHbst[t] = new Ef({ element: e })),
            this.instances.FormHbst[t].init();
        })),
      document.querySelectorAll(".js--rc").length > 0 &&
        ((this.instances.RevealContent = []),
        document.querySelectorAll(".js--rc").forEach((e, t) => {
          this.instances.RevealContent[t] = new lf({
            element: e,
            type: "from",
            animationOptions: {
              ease: "power2.inOut",
              opacity: 0,
              duration: 0.6,
            },
            intitialTrigger: "top 80%",
            pinnedContainer: document.querySelectorAll(".js--hs-a"),
            markers: !1,
          });
        }),
        window.emitter &&
          window.emitter.on("update-content", () => {
            this.instances.RevealContent.forEach((e) => {
              e.refresh();
            });
          })),
      document.querySelectorAll(".js--accordion").length > 0 &&
        ((this.instances.Accordion = []),
        document.querySelectorAll(".js--accordion").forEach(async (e, t) => {
          (this.instances.Accordion[t] = new Yc({ nameSpace: "accordion01" })),
            await Rc({
              element: e.querySelector(".g--accordion-01__bd"),
              search: { type: "style", lookFor: ["max-height"] },
              intervalFrequency: 200,
              timer: 5e3,
              callback: () => {
                document.querySelectorAll(".js--rc").length > 0 &&
                  this.instances.RevealContent.forEach((n) => {
                    n.refresh();
                  });
              },
            });
        }));
  }
  async willReplaceContent() {
    super.willReplaceContent(),
      document.querySelectorAll(".js--accordion").length &&
        this.instances.Accordion.length &&
        document.querySelectorAll(".js--accordion").forEach((e, t) => {
          this.instances.Accordion[t].destroy();
        }),
      document.querySelectorAll(".c--multilang-a__title").length &&
        this.instances.Multilang.length &&
        (this.boostify.destroyscroll({ distance: 300 }),
        (this.instances.Multilang = []),
        this.instances.Multilang.forEach((e, t) => {
          this.instances.Multilang[t].destroy(),
            (this.instances.Multilang[t] = []);
        })),
      document.querySelectorAll(".c--media-a").length &&
        this.instances.ZoomScroll.length &&
        document.querySelectorAll(".c--media-a").forEach((e, t) => {
          this.boostify.destroyobserver({ element: e }),
            this.instances.ZoomScroll[t].destroy();
        }),
      document.querySelectorAll(".c--hs-a__wrapper").length &&
        this.instances.HorizontalScroll.length &&
        document.querySelectorAll(".c--hs-a__wrapper").forEach((e, t) => {
          this.instances.HorizontalScroll[t].destroy(),
            (this.instances.HorizontalScroll[t] = []);
        }),
      document.querySelectorAll("*[class*=js--marquee-]").length &&
        document.querySelectorAll("*[class*=js--marquee-]").forEach((e, t) => {
          this.boostify.destroyscroll({ distance: 30 });
        }),
      document.querySelectorAll(".js--marquee-a").length &&
        this.instances.InfiniteMarqueeA.length &&
        document.querySelectorAll(".js--marquee-a").forEach((e, t) => {
          this.instances.InfiniteMarqueeA[t].destroy();
        }),
      document.querySelectorAll(".js--marquee-b").length &&
        this.instances.InfiniteMarqueeB.length &&
        document.querySelectorAll(".js--marquee-b").forEach((e, t) => {
          this.instances.InfiniteMarqueeB[t].destroy();
        }),
      document.querySelectorAll(".js--modal").length &&
        this.instances.Modal.length &&
        document.querySelectorAll(".js--modal").forEach((e) => {
          this.instances.Modal.destroy();
        }),
      document.querySelectorAll(".js--slider-a").length &&
        this.instances.SliderA.length &&
        document.querySelectorAll(".js--slider-a").forEach((e, t) => {
          this.instances.SliderA[t].destroy();
        }),
      document.querySelectorAll(".js--slider-a--second").length &&
        this.instances.SliderASecond.length &&
        document.querySelectorAll(".js--slider-a--second").forEach((e, t) => {
          this.instances.SliderASecond[t].destroy();
        }),
      document.querySelectorAll(".js--form-hbst").length &&
        this.instances.FormHbst.length &&
        document.querySelectorAll(".js--form-hbst").forEach((e, t) => {
          this.instances.FormHbst[t].destroy(), (this.instances.FormHbst = []);
        }),
      this.instances.RevealContent &&
        (this.instances.RevealContent.forEach((e) => {
          e.destroy();
        }),
        (this.instances.RevealContent = []));
  }
}
const Lf = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Af }, Symbol.toStringTag, {
    value: "Module",
  })
);
export { le as S, Lf as T };

// ------------- Cursor following mouse directions --------------//

const cursor = document.querySelector('.cursor');
gsap.set(cursor, {
  xPercent: -50,
  yPercent: -50,
  x: 0,
  y: 0,
  transformOrigin: "center center"
});

gsap.set(".rotate", {transformOrigin: "44.6% 48.2%"});
const rotateTween = gsap.to(".rotate", {duration: 0.1, paused: true});
const xTo = gsap.quickTo(cursor, "x", {duration: 0.1});
const yTo = gsap.quickTo(cursor, "y", {duration: 0.1});
const RAD2DEG = 180 / Math.PI;
let x_cursor = 0, y_cursor = 0;

document.addEventListener("mousemove", (e) => {
  let yDif = e.clientY - y_cursor,
      xDif = e.clientX - x_cursor;
  xTo(e.clientX);
  yTo(e.clientY);
  if (Math.abs(xDif) > 3 || Math.abs(yDif) > 3) {
    x_cursor = e.clientX;
    y_cursor = e.clientY;
    rotateTween.vars.rotation = (Math.atan2(yDif, xDif) * RAD2DEG - 40) + "_short";
    rotateTween.invalidate().restart();
  }
});

let hideCursorTimeout;
let isCursorHidden = false;

// Function to add listeners to interactive elements
function addCursorListeners() {
  const interactiveElements = document.querySelectorAll('a, button, textarea, input');

  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      // Hide cursor immediately when entering an interactive element
      cursor.style.display = 'none';
      isCursorHidden = true;
      clearTimeout(hideCursorTimeout);
    });

    el.addEventListener('mouseleave', () => {
      // Only set the timeout if the cursor was hidden
      if (isCursorHidden) {
        hideCursorTimeout = setTimeout(() => {
          cursor.style.display = 'block';
          isCursorHidden = false;
        }, 10); // Delay in milliseconds
      }
    });
  });
}

// Initial setup for the current page
addCursorListeners();

// Observe DOM changes for the entire body
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length > 0) {
      // Delay observer to ensure all elements are loaded
      setTimeout(() => {
        addCursorListeners();
      }, 50);
    }
  });
});

// Start observing changes in the body, watching for added child nodes
observer.observe(document.body, {
  childList: true,
  subtree: true,
});


