import { a as zr } from "./_commonjsHelpers.de833af9.js";
import { g as me } from "./index.4db78ffb.js";
import { v as Fr } from "./main.js";
import "./preload-helper.cf010ec4.js";
function gt(u) {
  if (u === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return u;
}
function Fi(u, t) {
  (u.prototype = Object.create(t.prototype)),
    (u.prototype.constructor = u),
    (u.__proto__ = t);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var nt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Ht = { duration: 0.5, overwrite: !1, delay: 0 },
  ei,
  W,
  E,
  ot = 1e8,
  A = 1 / ot,
  Ve = Math.PI * 2,
  Lr = Ve / 4,
  Ir = 0,
  Li = Math.sqrt,
  Br = Math.cos,
  Nr = Math.sin,
  X = function (t) {
    return typeof t == "string";
  },
  L = function (t) {
    return typeof t == "function";
  },
  vt = function (t) {
    return typeof t == "number";
  },
  ii = function (t) {
    return typeof t > "u";
  },
  pt = function (t) {
    return typeof t == "object";
  },
  j = function (t) {
    return t !== !1;
  },
  ri = function () {
    return typeof window < "u";
  },
  ge = function (t) {
    return L(t) || X(t);
  },
  Ii =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  $ = Array.isArray,
  Ue = /(?:-?\.?\d|\.)+/gi,
  Bi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Xt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Ae = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Ni = /[+-]=-?[.\d]+/,
  Vi = /[^,'"\[\]\s]+/gi,
  Vr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  z,
  _t,
  Ye,
  ni,
  st = {},
  Te = {},
  Ui,
  Yi = function (t) {
    return (Te = Nt(t, st)) && J;
  },
  si = function (t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  oe = function (t, e) {
    return !e && console.warn(t);
  },
  Xi = function (t, e) {
    return (t && (st[t] = e) && Te && (Te[t] = e)) || st;
  },
  ue = function () {
    return 0;
  },
  Ur = { suppressEvents: !0, isStart: !0, kill: !1 },
  ye = { suppressEvents: !0, kill: !1 },
  Yr = { suppressEvents: !0 },
  ai = {},
  Pt = [],
  Xe = {},
  qi,
  et = {},
  Re = {},
  vi = 30,
  ve = [],
  oi = "",
  ui = function (t) {
    var e = t[0],
      i,
      r;
    if ((pt(e) || L(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
      for (r = ve.length; r-- && !ve[r].targetTest(e); );
      i = ve[r];
    }
    for (r = t.length; r--; )
      (t[r] && (t[r]._gsap || (t[r]._gsap = new dr(t[r], i)))) ||
        t.splice(r, 1);
    return t;
  },
  Ft = function (t) {
    return t._gsap || ui(ut(t))[0]._gsap;
  },
  Gi = function (t, e, i) {
    return (i = t[e]) && L(i)
      ? t[e]()
      : (ii(i) && t.getAttribute && t.getAttribute(e)) || i;
  },
  K = function (t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
  I = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  Y = function (t) {
    return Math.round(t * 1e7) / 1e7 || 0;
  },
  Gt = function (t, e) {
    var i = e.charAt(0),
      r = parseFloat(e.substr(2));
    return (
      (t = parseFloat(t)),
      i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
    );
  },
  Xr = function (t, e) {
    for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
    return r < i;
  },
  we = function () {
    var t = Pt.length,
      e = Pt.slice(0),
      i,
      r;
    for (Xe = {}, Pt.length = 0, i = 0; i < t; i++)
      (r = e[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  Wi = function (t, e, i, r) {
    Pt.length && !W && we(),
      t.render(e, i, r || (W && e < 0 && (t._initted || t._startAt))),
      Pt.length && !W && we();
  },
  $i = function (t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match(Vi).length < 2
      ? e
      : X(t)
      ? t.trim()
      : t;
  },
  Hi = function (t) {
    return t;
  },
  ft = function (t, e) {
    for (var i in e) i in t || (t[i] = e[i]);
    return t;
  },
  qr = function (t) {
    return function (e, i) {
      for (var r in i)
        r in e || (r === "duration" && t) || r === "ease" || (e[r] = i[r]);
    };
  },
  Nt = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  xi = function u(t, e) {
    for (var i in e)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (t[i] = pt(e[i]) ? u(t[i] || (t[i] = {}), e[i]) : e[i]);
    return t;
  },
  be = function (t, e) {
    var i = {},
      r;
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  },
  ne = function (t) {
    var e = t.parent || z,
      i = t.keyframes ? qr($(t.keyframes)) : ft;
    if (j(t.inherit))
      for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  },
  Gr = function (t, e) {
    for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; );
    return i < 0;
  },
  ji = function (t, e, i, r, n) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var s = t[r],
      a;
    if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
    return (
      s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[i]), (t[i] = e)),
      e._next ? (e._next._prev = e) : (t[r] = e),
      (e._prev = s),
      (e.parent = e._dp = t),
      e
    );
  },
  Ce = function (t, e, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var n = e._prev,
      s = e._next;
    n ? (n._next = s) : t[i] === e && (t[i] = s),
      s ? (s._prev = n) : t[r] === e && (t[r] = n),
      (e._next = e._prev = e.parent = null);
  },
  Ot = function (t, e) {
    t.parent &&
      (!e || t.parent.autoRemoveChildren) &&
      t.parent.remove &&
      t.parent.remove(t),
      (t._act = 0);
  },
  Lt = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
    return t;
  },
  Wr = function (t) {
    for (var e = t.parent; e && e.parent; )
      (e._dirty = 1), e.totalDuration(), (e = e.parent);
    return t;
  },
  qe = function (t, e, i, r) {
    return (
      t._startAt &&
      (W
        ? t._startAt.revert(ye)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(e, !0, r))
    );
  },
  $r = function u(t) {
    return !t || (t._ts && u(t.parent));
  },
  Ti = function (t) {
    return t._repeat ? jt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  jt = function (t, e) {
    var i = Math.floor((t /= e));
    return t && i === t ? i - 1 : i;
  },
  Pe = function (t, e) {
    return (
      (t - e._start) * e._ts +
      (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  },
  Me = function (t) {
    return (t._end = Y(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || A) || 0)
    ));
  },
  De = function (t, e) {
    var i = t._dp;
    return (
      i &&
        i.smoothChildTiming &&
        t._ts &&
        ((t._start = Y(
          i._time -
            (t._ts > 0
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        Me(t),
        i._dirty || Lt(i, t)),
      t
    );
  },
  Ki = function (t, e) {
    var i;
    if (
      ((e._time ||
        (!e._dur && e._initted) ||
        (e._start < t._time && (e._dur || !e.add))) &&
        ((i = Pe(t.rawTime(), e)),
        (!e._dur || de(0, e.totalDuration(), i) - e._tTime > A) &&
          e.render(i, !0)),
      Lt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (i = t; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      t._zTime = -A;
    }
  },
  lt = function (t, e, i, r) {
    return (
      e.parent && Ot(e),
      (e._start = Y(
        (vt(i) ? i : i || t !== z ? at(t, i, e) : t._time) + e._delay
      )),
      (e._end = Y(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      ji(t, e, "_first", "_last", t._sort ? "_start" : 0),
      Ge(e) || (t._recent = e),
      r || Ki(t, e),
      t._ts < 0 && De(t, t._tTime),
      t
    );
  },
  Qi = function (t, e) {
    return (
      (st.ScrollTrigger || si("scrollTrigger", e)) &&
      st.ScrollTrigger.create(e, t)
    );
  },
  Zi = function (t, e, i, r, n) {
    if ((hi(t, e, n), !t._initted)) return 1;
    if (
      !i &&
      t._pt &&
      !W &&
      ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
      qi !== it.frame
    )
      return Pt.push(t), (t._lazy = [n, r]), 1;
  },
  Hr = function u(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || u(e));
  },
  Ge = function (t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart";
  },
  jr = function (t, e, i, r) {
    var n = t.ratio,
      s =
        e < 0 ||
        (!e &&
          ((!t._start && Hr(t) && !(!t._initted && Ge(t))) ||
            ((t._ts < 0 || t._dp._ts < 0) && !Ge(t))))
          ? 0
          : 1,
      a = t._rDelay,
      o = 0,
      f,
      h,
      l;
    if (
      (a &&
        t._repeat &&
        ((o = de(0, t._tDur, e)),
        (h = jt(o, a)),
        t._yoyo && h & 1 && (s = 1 - s),
        h !== jt(t._tTime, a) &&
          ((n = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
      s !== n || W || r || t._zTime === A || (!e && t._zTime))
    ) {
      if (!t._initted && Zi(t, e, r, i, o)) return;
      for (
        l = t._zTime,
          t._zTime = e || (i ? A : 0),
          i || (i = e && !l),
          t.ratio = s,
          t._from && (s = 1 - s),
          t._time = 0,
          t._tTime = o,
          f = t._pt;
        f;

      )
        f.r(s, f.d), (f = f._next);
      e < 0 && qe(t, e, i, !0),
        t._onUpdate && !i && rt(t, "onUpdate"),
        o && t._repeat && !i && t.parent && rt(t, "onRepeat"),
        (e >= t._tDur || e < 0) &&
          t.ratio === s &&
          (s && Ot(t, 1),
          !i &&
            !W &&
            (rt(t, s ? "onComplete" : "onReverseComplete", !0),
            t._prom && t._prom()));
    } else t._zTime || (t._zTime = e);
  },
  Kr = function (t, e, i) {
    var r;
    if (i > e)
      for (r = t._first; r && r._start <= i; ) {
        if (r.data === "isPause" && r._start > e) return r;
        r = r._next;
      }
    else
      for (r = t._last; r && r._start >= i; ) {
        if (r.data === "isPause" && r._start < e) return r;
        r = r._prev;
      }
  },
  Kt = function (t, e, i, r) {
    var n = t._repeat,
      s = Y(e) || 0,
      a = t._tTime / t._tDur;
    return (
      a && !r && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = n ? (n < 0 ? 1e10 : Y(s * (n + 1) + t._rDelay * n)) : s),
      a > 0 && !r && De(t, (t._tTime = t._tDur * a)),
      t.parent && Me(t),
      i || Lt(t.parent, t),
      t
    );
  },
  wi = function (t) {
    return t instanceof H ? Lt(t) : Kt(t, t._dur);
  },
  Qr = { _start: 0, endTime: ue, totalDuration: ue },
  at = function u(t, e, i) {
    var r = t.labels,
      n = t._recent || Qr,
      s = t.duration() >= ot ? n.endTime(!1) : t._dur,
      a,
      o,
      f;
    return X(e) && (isNaN(e) || e in r)
      ? ((o = e.charAt(0)),
        (f = e.substr(-1) === "%"),
        (a = e.indexOf("=")),
        o === "<" || o === ">"
          ? (a >= 0 && (e = e.replace(/=/, "")),
            (o === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(e.substr(1)) || 0) *
                (f ? (a < 0 ? n : i).totalDuration() / 100 : 1))
          : a < 0
          ? (e in r || (r[e] = s), r[e])
          : ((o = parseFloat(e.charAt(a - 1) + e.substr(a + 1))),
            f && i && (o = (o / 100) * ($(i) ? i[0] : i).totalDuration()),
            a > 1 ? u(t, e.substr(0, a - 1), i) + o : s + o))
      : e == null
      ? s
      : +e;
  },
  se = function (t, e, i) {
    var r = vt(e[1]),
      n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
      s = e[n],
      a,
      o;
    if ((r && (s.duration = e[1]), (s.parent = i), t)) {
      for (a = s, o = i; o && !("immediateRender" in a); )
        (a = o.vars.defaults || {}), (o = j(o.vars.inherit) && o.parent);
      (s.immediateRender = j(a.immediateRender)),
        t < 2 ? (s.runBackwards = 1) : (s.startAt = e[n - 1]);
    }
    return new N(e[0], s, e[n + 1]);
  },
  Ct = function (t, e) {
    return t || t === 0 ? e(t) : e;
  },
  de = function (t, e, i) {
    return i < t ? t : i > e ? e : i;
  },
  G = function (t, e) {
    return !X(t) || !(e = Vr.exec(t)) ? "" : e[1];
  },
  Zr = function (t, e, i) {
    return Ct(i, function (r) {
      return de(t, e, r);
    });
  },
  We = [].slice,
  Ji = function (t, e) {
    return (
      t &&
      pt(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && pt(t[0]))) &&
      !t.nodeType &&
      t !== _t
    );
  },
  Jr = function (t, e, i) {
    return (
      i === void 0 && (i = []),
      t.forEach(function (r) {
        var n;
        return (X(r) && !e) || Ji(r, 1)
          ? (n = i).push.apply(n, ut(r))
          : i.push(r);
      }) || i
    );
  },
  ut = function (t, e, i) {
    return E && !e && E.selector
      ? E.selector(t)
      : X(t) && !i && (Ye || !Qt())
      ? We.call((e || ni).querySelectorAll(t), 0)
      : $(t)
      ? Jr(t, i)
      : Ji(t)
      ? We.call(t, 0)
      : t
      ? [t]
      : [];
  },
  $e = function (t) {
    return (
      (t = ut(t)[0] || oe("Invalid scope") || {}),
      function (e) {
        var i = t.current || t.nativeElement || t;
        return ut(
          e,
          i.querySelectorAll
            ? i
            : i === t
            ? oe("Invalid scope") || ni.createElement("div")
            : t
        );
      }
    );
  },
  tr = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  er = function (t) {
    if (L(t)) return t;
    var e = pt(t) ? t : { each: t },
      i = It(e.ease),
      r = e.from || 0,
      n = parseFloat(e.base) || 0,
      s = {},
      a = r > 0 && r < 1,
      o = isNaN(r) || a,
      f = e.axis,
      h = r,
      l = r;
    return (
      X(r)
        ? (h = l = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !a && o && ((h = r[0]), (l = r[1])),
      function (c, d, m) {
        var _ = (m || e).length,
          p = s[_],
          v,
          g,
          x,
          T,
          y,
          b,
          P,
          S,
          w;
        if (!p) {
          if (((w = e.grid === "auto" ? 0 : (e.grid || [1, ot])[1]), !w)) {
            for (
              P = -ot;
              P < (P = m[w++].getBoundingClientRect().left) && w < _;

            );
            w < _ && w--;
          }
          for (
            p = s[_] = [],
              v = o ? Math.min(w, _) * h - 0.5 : r % w,
              g = w === ot ? 0 : o ? (_ * l) / w - 0.5 : (r / w) | 0,
              P = 0,
              S = ot,
              b = 0;
            b < _;
            b++
          )
            (x = (b % w) - v),
              (T = g - ((b / w) | 0)),
              (p[b] = y = f ? Math.abs(f === "y" ? T : x) : Li(x * x + T * T)),
              y > P && (P = y),
              y < S && (S = y);
          r === "random" && tr(p),
            (p.max = P - S),
            (p.min = S),
            (p.v = _ =
              (parseFloat(e.amount) ||
                parseFloat(e.each) *
                  (w > _
                    ? _ - 1
                    : f
                    ? f === "y"
                      ? _ / w
                      : w
                    : Math.max(w, _ / w)) ||
                0) * (r === "edges" ? -1 : 1)),
            (p.b = _ < 0 ? n - _ : n),
            (p.u = G(e.amount || e.each) || 0),
            (i = i && _ < 0 ? _r(i) : i);
        }
        return (
          (_ = (p[c] - p.min) / p.max || 0), Y(p.b + (i ? i(_) : _) * p.v) + p.u
        );
      }
    );
  },
  He = function (t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (i) {
      var r = Y(Math.round(parseFloat(i) / t) * t * e);
      return (r - (r % 1)) / e + (vt(i) ? 0 : G(i));
    };
  },
  ir = function (t, e) {
    var i = $(t),
      r,
      n;
    return (
      !i &&
        pt(t) &&
        ((r = i = t.radius || ot),
        t.values
          ? ((t = ut(t.values)), (n = !vt(t[0])) && (r *= r))
          : (t = He(t.increment))),
      Ct(
        e,
        i
          ? L(t)
            ? function (s) {
                return (n = t(s)), Math.abs(n - s) <= r ? n : s;
              }
            : function (s) {
                for (
                  var a = parseFloat(n ? s.x : s),
                    o = parseFloat(n ? s.y : 0),
                    f = ot,
                    h = 0,
                    l = t.length,
                    c,
                    d;
                  l--;

                )
                  n
                    ? ((c = t[l].x - a), (d = t[l].y - o), (c = c * c + d * d))
                    : (c = Math.abs(t[l] - a)),
                    c < f && ((f = c), (h = l));
                return (
                  (h = !r || f <= r ? t[h] : s),
                  n || h === s || vt(s) ? h : h + G(s)
                );
              }
          : He(t)
      )
    );
  },
  rr = function (t, e, i, r) {
    return Ct($(t) ? !e : i === !0 ? !!(i = 0) : !r, function () {
      return $(t)
        ? t[~~(Math.random() * t.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  },
  tn = function () {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return function (r) {
      return e.reduce(function (n, s) {
        return s(n);
      }, r);
    };
  },
  en = function (t, e) {
    return function (i) {
      return t(parseFloat(i)) + (e || G(i));
    };
  },
  rn = function (t, e, i) {
    return sr(t, e, 0, 1, i);
  },
  nr = function (t, e, i) {
    return Ct(i, function (r) {
      return t[~~e(r)];
    });
  },
  nn = function u(t, e, i) {
    var r = e - t;
    return $(t)
      ? nr(t, u(0, t.length), e)
      : Ct(i, function (n) {
          return ((r + ((n - t) % r)) % r) + t;
        });
  },
  sn = function u(t, e, i) {
    var r = e - t,
      n = r * 2;
    return $(t)
      ? nr(t, u(0, t.length - 1), e)
      : Ct(i, function (s) {
          return (s = (n + ((s - t) % n)) % n || 0), t + (s > r ? n - s : s);
        });
  },
  fe = function (t) {
    for (var e = 0, i = "", r, n, s, a; ~(r = t.indexOf("random(", e)); )
      (s = t.indexOf(")", r)),
        (a = t.charAt(r + 7) === "["),
        (n = t.substr(r + 7, s - r - 7).match(a ? Vi : Ue)),
        (i +=
          t.substr(e, r - e) + rr(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
        (e = s + 1);
    return i + t.substr(e, t.length - e);
  },
  sr = function (t, e, i, r, n) {
    var s = e - t,
      a = r - i;
    return Ct(n, function (o) {
      return i + (((o - t) / s) * a || 0);
    });
  },
  an = function u(t, e, i, r) {
    var n = isNaN(t + e)
      ? 0
      : function (d) {
          return (1 - d) * t + d * e;
        };
    if (!n) {
      var s = X(t),
        a = {},
        o,
        f,
        h,
        l,
        c;
      if ((i === !0 && (r = 1) && (i = null), s))
        (t = { p: t }), (e = { p: e });
      else if ($(t) && !$(e)) {
        for (h = [], l = t.length, c = l - 2, f = 1; f < l; f++)
          h.push(u(t[f - 1], t[f]));
        l--,
          (n = function (m) {
            m *= l;
            var _ = Math.min(c, ~~m);
            return h[_](m - _);
          }),
          (i = e);
      } else r || (t = Nt($(t) ? [] : {}, t));
      if (!h) {
        for (o in e) fi.call(a, t, o, "get", e[o]);
        n = function (m) {
          return ci(m, a) || (s ? t.p : t);
        };
      }
    }
    return Ct(i, n);
  },
  bi = function (t, e, i) {
    var r = t.labels,
      n = ot,
      s,
      a,
      o;
    for (s in r)
      (a = r[s] - e),
        a < 0 == !!i && a && n > (a = Math.abs(a)) && ((o = s), (n = a));
    return o;
  },
  rt = function (t, e, i) {
    var r = t.vars,
      n = r[e],
      s = E,
      a = t._ctx,
      o,
      f,
      h;
    if (n)
      return (
        (o = r[e + "Params"]),
        (f = r.callbackScope || t),
        i && Pt.length && we(),
        a && (E = a),
        (h = o ? n.apply(f, o) : n.call(f)),
        (E = s),
        h
      );
  },
  ie = function (t) {
    return (
      Ot(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!W),
      t.progress() < 1 && rt(t, "onInterrupt"),
      t
    );
  },
  qt,
  ar = [],
  or = function (t) {
    if (t)
      if (((t = (!t.name && t.default) || t), ri() || t.headless)) {
        var e = t.name,
          i = L(t),
          r =
            e && !i && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          n = {
            init: ue,
            render: ci,
            add: fi,
            kill: wn,
            modifier: Tn,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: li,
            aliases: {},
            register: 0,
          };
        if ((Qt(), t !== r)) {
          if (et[e]) return;
          ft(r, ft(be(t, n), s)),
            Nt(r.prototype, Nt(n, be(t, s))),
            (et[(r.prop = e)] = r),
            t.targetTest && (ve.push(r), (ai[e] = 1)),
            (e =
              (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin");
        }
        Xi(e, r), t.register && t.register(J, r, Q);
      } else ar.push(t);
  },
  C = 255,
  re = {
    aqua: [0, C, C],
    lime: [0, C, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, C],
    navy: [0, 0, 128],
    white: [C, C, C],
    olive: [128, 128, 0],
    yellow: [C, C, 0],
    orange: [C, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [C, 0, 0],
    pink: [C, 192, 203],
    cyan: [0, C, C],
    transparent: [C, C, C, 0],
  },
  Ee = function (t, e, i) {
    return (
      (t += t < 0 ? 1 : t > 1 ? -1 : 0),
      ((t * 6 < 1
        ? e + (i - e) * t * 6
        : t < 0.5
        ? i
        : t * 3 < 2
        ? e + (i - e) * (2 / 3 - t) * 6
        : e) *
        C +
        0.5) |
        0
    );
  },
  ur = function (t, e, i) {
    var r = t ? (vt(t) ? [t >> 16, (t >> 8) & C, t & C] : 0) : re.black,
      n,
      s,
      a,
      o,
      f,
      h,
      l,
      c,
      d,
      m;
    if (!r) {
      if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), re[t]))
        r = re[t];
      else if (t.charAt(0) === "#") {
        if (
          (t.length < 6 &&
            ((n = t.charAt(1)),
            (s = t.charAt(2)),
            (a = t.charAt(3)),
            (t =
              "#" +
              n +
              n +
              s +
              s +
              a +
              a +
              (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
          t.length === 9)
        )
          return (
            (r = parseInt(t.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & C, r & C, parseInt(t.substr(7), 16) / 255]
          );
        (t = parseInt(t.substr(1), 16)), (r = [t >> 16, (t >> 8) & C, t & C]);
      } else if (t.substr(0, 3) === "hsl") {
        if (((r = m = t.match(Ue)), !e))
          (o = (+r[0] % 360) / 360),
            (f = +r[1] / 100),
            (h = +r[2] / 100),
            (s = h <= 0.5 ? h * (f + 1) : h + f - h * f),
            (n = h * 2 - s),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Ee(o + 1 / 3, n, s)),
            (r[1] = Ee(o, n, s)),
            (r[2] = Ee(o - 1 / 3, n, s));
        else if (~t.indexOf("="))
          return (r = t.match(Bi)), i && r.length < 4 && (r[3] = 1), r;
      } else r = t.match(Ue) || re.transparent;
      r = r.map(Number);
    }
    return (
      e &&
        !m &&
        ((n = r[0] / C),
        (s = r[1] / C),
        (a = r[2] / C),
        (l = Math.max(n, s, a)),
        (c = Math.min(n, s, a)),
        (h = (l + c) / 2),
        l === c
          ? (o = f = 0)
          : ((d = l - c),
            (f = h > 0.5 ? d / (2 - l - c) : d / (l + c)),
            (o =
              l === n
                ? (s - a) / d + (s < a ? 6 : 0)
                : l === s
                ? (a - n) / d + 2
                : (n - s) / d + 4),
            (o *= 60)),
        (r[0] = ~~(o + 0.5)),
        (r[1] = ~~(f * 100 + 0.5)),
        (r[2] = ~~(h * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  },
  fr = function (t) {
    var e = [],
      i = [],
      r = -1;
    return (
      t.split(St).forEach(function (n) {
        var s = n.match(Xt) || [];
        e.push.apply(e, s), i.push((r += s.length + 1));
      }),
      (e.c = i),
      e
    );
  },
  Pi = function (t, e, i) {
    var r = "",
      n = (t + r).match(St),
      s = e ? "hsla(" : "rgba(",
      a = 0,
      o,
      f,
      h,
      l;
    if (!n) return t;
    if (
      ((n = n.map(function (c) {
        return (
          (c = ur(c, e, 1)) &&
          s +
            (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) +
            ")"
        );
      })),
      i && ((h = fr(t)), (o = i.c), o.join(r) !== h.c.join(r)))
    )
      for (f = t.replace(St, "1").split(Xt), l = f.length - 1; a < l; a++)
        r +=
          f[a] +
          (~o.indexOf(a)
            ? n.shift() || s + "0,0,0,0)"
            : (h.length ? h : n.length ? n : i).shift());
    if (!f)
      for (f = t.split(St), l = f.length - 1; a < l; a++) r += f[a] + n[a];
    return r + f[l];
  },
  St = (function () {
    var u =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      t;
    for (t in re) u += "|" + t + "\\b";
    return new RegExp(u + ")", "gi");
  })(),
  on = /hsl[a]?\(/,
  hr = function (t) {
    var e = t.join(" "),
      i;
    if (((St.lastIndex = 0), St.test(e)))
      return (
        (i = on.test(e)),
        (t[1] = Pi(t[1], i)),
        (t[0] = Pi(t[0], i, fr(t[1]))),
        !0
      );
  },
  he,
  it = (function () {
    var u = Date.now,
      t = 500,
      e = 33,
      i = u(),
      r = i,
      n = 1e3 / 240,
      s = n,
      a = [],
      o,
      f,
      h,
      l,
      c,
      d,
      m = function _(p) {
        var v = u() - r,
          g = p === !0,
          x,
          T,
          y,
          b;
        if (
          ((v > t || v < 0) && (i += v - e),
          (r += v),
          (y = r - i),
          (x = y - s),
          (x > 0 || g) &&
            ((b = ++l.frame),
            (c = y - l.time * 1e3),
            (l.time = y = y / 1e3),
            (s += x + (x >= n ? 4 : n - x)),
            (T = 1)),
          g || (o = f(_)),
          T)
        )
          for (d = 0; d < a.length; d++) a[d](y, c, b, p);
      };
    return (
      (l = {
        time: 0,
        frame: 0,
        tick: function () {
          m(!0);
        },
        deltaRatio: function (p) {
          return c / (1e3 / (p || 60));
        },
        wake: function () {
          Ui &&
            (!Ye &&
              ri() &&
              ((_t = Ye = window),
              (ni = _t.document || {}),
              (st.gsap = J),
              (_t.gsapVersions || (_t.gsapVersions = [])).push(J.version),
              Yi(Te || _t.GreenSockGlobals || (!_t.gsap && _t) || {}),
              ar.forEach(or)),
            (h = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            o && l.sleep(),
            (f =
              h ||
              function (p) {
                return setTimeout(p, (s - l.time * 1e3 + 1) | 0);
              }),
            (he = 1),
            m(2));
        },
        sleep: function () {
          (h ? cancelAnimationFrame : clearTimeout)(o), (he = 0), (f = ue);
        },
        lagSmoothing: function (p, v) {
          (t = p || 1 / 0), (e = Math.min(v || 33, t));
        },
        fps: function (p) {
          (n = 1e3 / (p || 240)), (s = l.time * 1e3 + n);
        },
        add: function (p, v, g) {
          var x = v
            ? function (T, y, b, P) {
                p(T, y, b, P), l.remove(x);
              }
            : p;
          return l.remove(p), a[g ? "unshift" : "push"](x), Qt(), x;
        },
        remove: function (p, v) {
          ~(v = a.indexOf(p)) && a.splice(v, 1) && d >= v && d--;
        },
        _listeners: a,
      }),
      l
    );
  })(),
  Qt = function () {
    return !he && it.wake();
  },
  O = {},
  un = /^[\d.\-M][\d.\-,\s]/,
  fn = /["']/g,
  hn = function (t) {
    for (
      var e = {},
        i = t.substr(1, t.length - 3).split(":"),
        r = i[0],
        n = 1,
        s = i.length,
        a,
        o,
        f;
      n < s;
      n++
    )
      (o = i[n]),
        (a = n !== s - 1 ? o.lastIndexOf(",") : o.length),
        (f = o.substr(0, a)),
        (e[r] = isNaN(f) ? f.replace(fn, "").trim() : +f),
        (r = o.substr(a + 1).trim());
    return e;
  },
  _n = function (t) {
    var e = t.indexOf("(") + 1,
      i = t.indexOf(")"),
      r = t.indexOf("(", e);
    return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
  },
  ln = function (t) {
    var e = (t + "").split("("),
      i = O[e[0]];
    return i && e.length > 1 && i.config
      ? i.config.apply(
          null,
          ~t.indexOf("{") ? [hn(e[1])] : _n(t).split(",").map($i)
        )
      : O._CE && un.test(t)
      ? O._CE("", t)
      : i;
  },
  _r = function (t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
  lr = function u(t, e) {
    for (var i = t._first, r; i; )
      i instanceof H
        ? u(i, e)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== e &&
          (i.timeline
            ? u(i.timeline, e)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = e))),
        (i = i._next);
  },
  It = function (t, e) {
    return (t && (L(t) ? t : O[t] || ln(t))) || e;
  },
  Ut = function (t, e, i, r) {
    i === void 0 &&
      (i = function (o) {
        return 1 - e(1 - o);
      }),
      r === void 0 &&
        (r = function (o) {
          return o < 0.5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2;
        });
    var n = { easeIn: e, easeOut: i, easeInOut: r },
      s;
    return (
      K(t, function (a) {
        (O[a] = st[a] = n), (O[(s = a.toLowerCase())] = i);
        for (var o in n)
          O[
            s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")
          ] = O[a + "." + o] = n[o];
      }),
      n
    );
  },
  cr = function (t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
    };
  },
  ze = function u(t, e, i) {
    var r = e >= 1 ? e : 1,
      n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
      s = (n / Ve) * (Math.asin(1 / r) || 0),
      a = function (h) {
        return h === 1 ? 1 : r * Math.pow(2, -10 * h) * Nr((h - s) * n) + 1;
      },
      o =
        t === "out"
          ? a
          : t === "in"
          ? function (f) {
              return 1 - a(1 - f);
            }
          : cr(a);
    return (
      (n = Ve / n),
      (o.config = function (f, h) {
        return u(t, f, h);
      }),
      o
    );
  },
  Fe = function u(t, e) {
    e === void 0 && (e = 1.70158);
    var i = function (s) {
        return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
      },
      r =
        t === "out"
          ? i
          : t === "in"
          ? function (n) {
              return 1 - i(1 - n);
            }
          : cr(i);
    return (
      (r.config = function (n) {
        return u(t, n);
      }),
      r
    );
  };
K("Linear,Quad,Cubic,Quart,Quint,Strong", function (u, t) {
  var e = t < 5 ? t + 1 : t;
  Ut(
    u + ",Power" + (e - 1),
    t
      ? function (i) {
          return Math.pow(i, e);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, e);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, e) / 2
        : 1 - Math.pow((1 - i) * 2, e) / 2;
    }
  );
});
O.Linear.easeNone = O.none = O.Linear.easeIn;
Ut("Elastic", ze("in"), ze("out"), ze());
(function (u, t) {
  var e = 1 / t,
    i = 2 * e,
    r = 2.5 * e,
    n = function (a) {
      return a < e
        ? u * a * a
        : a < i
        ? u * Math.pow(a - 1.5 / t, 2) + 0.75
        : a < r
        ? u * (a -= 2.25 / t) * a + 0.9375
        : u * Math.pow(a - 2.625 / t, 2) + 0.984375;
    };
  Ut(
    "Bounce",
    function (s) {
      return 1 - n(1 - s);
    },
    n
  );
})(7.5625, 2.75);
Ut("Expo", function (u) {
  return u ? Math.pow(2, 10 * (u - 1)) : 0;
});
Ut("Circ", function (u) {
  return -(Li(1 - u * u) - 1);
});
Ut("Sine", function (u) {
  return u === 1 ? 1 : -Br(u * Lr) + 1;
});
Ut("Back", Fe("in"), Fe("out"), Fe());
O.SteppedEase =
  O.steps =
  st.SteppedEase =
    {
      config: function (t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t,
          r = t + (e ? 0 : 1),
          n = e ? 1 : 0,
          s = 1 - A;
        return function (a) {
          return (((r * de(0, s, a)) | 0) + n) * i;
        };
      },
    };
Ht.ease = O["quad.out"];
K(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (u) {
    return (oi += u + "," + u + "Params,");
  }
);
var dr = function (t, e) {
    (this.id = Ir++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = e),
      (this.get = e ? e.get : Gi),
      (this.set = e ? e.getSetter : li);
  },
  _e = (function () {
    function u(e) {
      (this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        Kt(this, +e.duration, 1, 1),
        (this.data = e.data),
        E && ((this._ctx = E), E.data.push(this)),
        he || it.wake();
    }
    var t = u.prototype;
    return (
      (t.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (t.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            Kt(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (t.totalTime = function (i, r) {
        if ((Qt(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (De(this, i), !n._dp || n.parent || Ki(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            lt(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === A) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), Wi(this, i, r)),
          this
        );
      }),
      (t.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + Ti(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r
            )
          : this._time;
      }),
      (t.totalProgress = function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (t.progress = function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                Ti(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (t.iteration = function (i, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * n, r)
          : this._repeat
          ? jt(this._tTime, n) + 1
          : 1;
      }),
      (t.timeScale = function (i, r) {
        if (!arguments.length) return this._rts === -A ? 0 : this._rts;
        if (this._rts === i) return this;
        var n =
          this.parent && this._ts ? Pe(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -A ? 0 : this._rts),
          this.totalTime(de(-Math.abs(this._delay), this._tDur, n), r !== !1),
          Me(this),
          Wr(this)
        );
      }),
      (t.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Qt(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== A &&
                      (this._tTime -= A)
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && lt(r, this, i - this._delay), this
          );
        }
        return this._start;
      }),
      (t.endTime = function (i) {
        return (
          this._start +
          (j(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (i) {
        var r = this.parent || this._dp;
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Pe(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (t.revert = function (i) {
        i === void 0 && (i = Yr);
        var r = W;
        return (
          (W = i),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (W = r),
          this
        );
      }),
      (t.globalTime = function (i) {
        for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
          (n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp);
        return !this.parent && this._sat ? this._sat.globalTime(i) : n;
      }),
      (t.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), wi(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (t.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), wi(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (t.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (t.seek = function (i, r) {
        return this.totalTime(at(this, i), j(r));
      }),
      (t.restart = function (i, r) {
        return this.play().totalTime(i ? -this._delay : 0, j(r));
      }),
      (t.play = function (i, r) {
        return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
      }),
      (t.reverse = function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (i, r) {
        return i != null && this.seek(i, r), this.paused(!0);
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -A : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -A), this;
      }),
      (t.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          n;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (n = i.rawTime(!0)) >= r &&
            n < this.endTime(!0) - A)
        );
      }),
      (t.eventCallback = function (i, r, n) {
        var s = this.vars;
        return arguments.length > 1
          ? (r
              ? ((s[i] = r),
                n && (s[i + "Params"] = n),
                i === "onUpdate" && (this._onUpdate = r))
              : delete s[i],
            this)
          : s[i];
      }),
      (t.then = function (i) {
        var r = this;
        return new Promise(function (n) {
          var s = L(i) ? i : Hi,
            a = function () {
              var f = r.then;
              (r.then = null),
                L(s) && (s = s(r)) && (s.then || s === r) && (r.then = f),
                n(s),
                (r.then = f);
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? a()
            : (r._prom = a);
        });
      }),
      (t.kill = function () {
        ie(this);
      }),
      u
    );
  })();
ft(_e.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -A,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var H = (function (u) {
  Fi(t, u);
  function t(i, r) {
    var n;
    return (
      i === void 0 && (i = {}),
      (n = u.call(this, i) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!i.smoothChildTiming),
      (n.autoRemoveChildren = !!i.autoRemoveChildren),
      (n._sort = j(i.sortChildren)),
      z && lt(i.parent || z, gt(n), r),
      i.reversed && n.reverse(),
      i.paused && n.paused(!0),
      i.scrollTrigger && Qi(gt(n), i.scrollTrigger),
      n
    );
  }
  var e = t.prototype;
  return (
    (e.to = function (r, n, s) {
      return se(0, arguments, this), this;
    }),
    (e.from = function (r, n, s) {
      return se(1, arguments, this), this;
    }),
    (e.fromTo = function (r, n, s, a) {
      return se(2, arguments, this), this;
    }),
    (e.set = function (r, n, s) {
      return (
        (n.duration = 0),
        (n.parent = this),
        ne(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new N(r, n, at(this, s), 1),
        this
      );
    }),
    (e.call = function (r, n, s) {
      return lt(this, N.delayedCall(0, r, n), s);
    }),
    (e.staggerTo = function (r, n, s, a, o, f, h) {
      return (
        (s.duration = n),
        (s.stagger = s.stagger || a),
        (s.onComplete = f),
        (s.onCompleteParams = h),
        (s.parent = this),
        new N(r, s, at(this, o)),
        this
      );
    }),
    (e.staggerFrom = function (r, n, s, a, o, f, h) {
      return (
        (s.runBackwards = 1),
        (ne(s).immediateRender = j(s.immediateRender)),
        this.staggerTo(r, n, s, a, o, f, h)
      );
    }),
    (e.staggerFromTo = function (r, n, s, a, o, f, h, l) {
      return (
        (a.startAt = s),
        (ne(a).immediateRender = j(a.immediateRender)),
        this.staggerTo(r, n, a, o, f, h, l)
      );
    }),
    (e.render = function (r, n, s) {
      var a = this._time,
        o = this._dirty ? this.totalDuration() : this._tDur,
        f = this._dur,
        h = r <= 0 ? 0 : Y(r),
        l = this._zTime < 0 != r < 0 && (this._initted || !f),
        c,
        d,
        m,
        _,
        p,
        v,
        g,
        x,
        T,
        y,
        b,
        P;
      if (
        (this !== z && h > o && r >= 0 && (h = o), h !== this._tTime || s || l)
      ) {
        if (
          (a !== this._time &&
            f &&
            ((h += this._time - a), (r += this._time - a)),
          (c = h),
          (T = this._start),
          (x = this._ts),
          (v = !x),
          l && (f || (a = this._zTime), (r || !n) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((b = this._yoyo),
            (p = f + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(p * 100 + r, n, s);
          if (
            ((c = Y(h % p)),
            h === o
              ? ((_ = this._repeat), (c = f))
              : ((_ = ~~(h / p)),
                _ && _ === h / p && ((c = f), _--),
                c > f && (c = f)),
            (y = jt(this._tTime, p)),
            !a &&
              this._tTime &&
              y !== _ &&
              this._tTime - y * p - this._dur <= 0 &&
              (y = _),
            b && _ & 1 && ((c = f - c), (P = 1)),
            _ !== y && !this._lock)
          ) {
            var S = b && y & 1,
              w = S === (b && _ & 1);
            if (
              (_ < y && (S = !S),
              (a = S ? 0 : h % f ? f : h),
              (this._lock = 1),
              (this.render(a || (P ? 0 : Y(_ * p)), n, !f)._lock = 0),
              (this._tTime = h),
              !n && this.parent && rt(this, "onRepeat"),
              this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                v !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((f = this._dur),
              (o = this._tDur),
              w &&
                ((this._lock = 2),
                (a = S ? f : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !P && this.invalidate()),
              (this._lock = 0),
              !this._ts && !v)
            )
              return this;
            lr(this, P);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((g = Kr(this, Y(a), Y(c))), g && (h -= c - (c = g._start))),
          (this._tTime = h),
          (this._time = c),
          (this._act = !x),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (a = 0)),
          !a && c && !n && !_ && (rt(this, "onStart"), this._tTime !== h))
        )
          return this;
        if (c >= a && r >= 0)
          for (d = this._first; d; ) {
            if (
              ((m = d._next), (d._act || c >= d._start) && d._ts && g !== d)
            ) {
              if (d.parent !== this) return this.render(r, n, s);
              if (
                (d.render(
                  d._ts > 0
                    ? (c - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (c - d._start) * d._ts,
                  n,
                  s
                ),
                c !== this._time || (!this._ts && !v))
              ) {
                (g = 0), m && (h += this._zTime = -A);
                break;
              }
            }
            d = m;
          }
        else {
          d = this._last;
          for (var k = r < 0 ? r : c; d; ) {
            if (((m = d._prev), (d._act || k <= d._end) && d._ts && g !== d)) {
              if (d.parent !== this) return this.render(r, n, s);
              if (
                (d.render(
                  d._ts > 0
                    ? (k - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (k - d._start) * d._ts,
                  n,
                  s || (W && (d._initted || d._startAt))
                ),
                c !== this._time || (!this._ts && !v))
              ) {
                (g = 0), m && (h += this._zTime = k ? -A : A);
                break;
              }
            }
            d = m;
          }
        }
        if (
          g &&
          !n &&
          (this.pause(),
          (g.render(c >= a ? 0 : -A)._zTime = c >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = T), Me(this), this.render(r, n, s);
        this._onUpdate && !n && rt(this, "onUpdate", !0),
          ((h === o && this._tTime >= this.totalDuration()) || (!h && a)) &&
            (T === this._start || Math.abs(x) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !f) &&
                ((h === o && this._ts > 0) || (!h && this._ts < 0)) &&
                Ot(this, 1),
              !n &&
                !(r < 0 && !a) &&
                (h || a || !o) &&
                (rt(
                  this,
                  h === o && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(h < o && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (e.add = function (r, n) {
      var s = this;
      if ((vt(n) || (n = at(this, n, r)), !(r instanceof _e))) {
        if ($(r))
          return (
            r.forEach(function (a) {
              return s.add(a, n);
            }),
            this
          );
        if (X(r)) return this.addLabel(r, n);
        if (L(r)) r = N.delayedCall(0, r);
        else return this;
      }
      return this !== r ? lt(this, r, n) : this;
    }),
    (e.getChildren = function (r, n, s, a) {
      r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = -ot);
      for (var o = [], f = this._first; f; )
        f._start >= a &&
          (f instanceof N
            ? n && o.push(f)
            : (s && o.push(f), r && o.push.apply(o, f.getChildren(!0, n, s)))),
          (f = f._next);
      return o;
    }),
    (e.getById = function (r) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
        if (n[s].vars.id === r) return n[s];
    }),
    (e.remove = function (r) {
      return X(r)
        ? this.removeLabel(r)
        : L(r)
        ? this.killTweensOf(r)
        : (Ce(this, r),
          r === this._recent && (this._recent = this._last),
          Lt(this));
    }),
    (e.totalTime = function (r, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Y(
              it.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          u.prototype.totalTime.call(this, r, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (e.addLabel = function (r, n) {
      return (this.labels[r] = at(this, n)), this;
    }),
    (e.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (e.addPause = function (r, n, s) {
      var a = N.delayedCall(0, n || ue, s);
      return (
        (a.data = "isPause"), (this._hasPause = 1), lt(this, a, at(this, r))
      );
    }),
    (e.removePause = function (r) {
      var n = this._first;
      for (r = at(this, r); n; )
        n._start === r && n.data === "isPause" && Ot(n), (n = n._next);
    }),
    (e.killTweensOf = function (r, n, s) {
      for (var a = this.getTweensOf(r, s), o = a.length; o--; )
        Tt !== a[o] && a[o].kill(r, n);
      return this;
    }),
    (e.getTweensOf = function (r, n) {
      for (var s = [], a = ut(r), o = this._first, f = vt(n), h; o; )
        o instanceof N
          ? Xr(o._targets, a) &&
            (f
              ? (!Tt || (o._initted && o._ts)) &&
                o.globalTime(0) <= n &&
                o.globalTime(o.totalDuration()) > n
              : !n || o.isActive()) &&
            s.push(o)
          : (h = o.getTweensOf(a, n)).length && s.push.apply(s, h),
          (o = o._next);
      return s;
    }),
    (e.tweenTo = function (r, n) {
      n = n || {};
      var s = this,
        a = at(s, r),
        o = n,
        f = o.startAt,
        h = o.onStart,
        l = o.onStartParams,
        c = o.immediateRender,
        d,
        m = N.to(
          s,
          ft(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (a - (f && "time" in f ? f.time : s._time)) / s.timeScale()
                ) ||
                A,
              onStart: function () {
                if ((s.pause(), !d)) {
                  var p =
                    n.duration ||
                    Math.abs(
                      (a - (f && "time" in f ? f.time : s._time)) /
                        s.timeScale()
                    );
                  m._dur !== p && Kt(m, p, 0, 1).render(m._time, !0, !0),
                    (d = 1);
                }
                h && h.apply(m, l || []);
              },
            },
            n
          )
        );
      return c ? m.render(0) : m;
    }),
    (e.tweenFromTo = function (r, n, s) {
      return this.tweenTo(n, ft({ startAt: { time: at(this, r) } }, s));
    }),
    (e.recent = function () {
      return this._recent;
    }),
    (e.nextLabel = function (r) {
      return r === void 0 && (r = this._time), bi(this, at(this, r));
    }),
    (e.previousLabel = function (r) {
      return r === void 0 && (r = this._time), bi(this, at(this, r), 1);
    }),
    (e.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + A);
    }),
    (e.shiftChildren = function (r, n, s) {
      s === void 0 && (s = 0);
      for (var a = this._first, o = this.labels, f; a; )
        a._start >= s && ((a._start += r), (a._end += r)), (a = a._next);
      if (n) for (f in o) o[f] >= s && (o[f] += r);
      return Lt(this);
    }),
    (e.invalidate = function (r) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(r), (n = n._next);
      return u.prototype.invalidate.call(this, r);
    }),
    (e.clear = function (r) {
      r === void 0 && (r = !0);
      for (var n = this._first, s; n; ) (s = n._next), this.remove(n), (n = s);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Lt(this)
      );
    }),
    (e.totalDuration = function (r) {
      var n = 0,
        s = this,
        a = s._last,
        o = ot,
        f,
        h,
        l;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -r : r)
        );
      if (s._dirty) {
        for (l = s.parent; a; )
          (f = a._prev),
            a._dirty && a.totalDuration(),
            (h = a._start),
            h > o && s._sort && a._ts && !s._lock
              ? ((s._lock = 1), (lt(s, a, h - a._delay, 1)._lock = 0))
              : (o = h),
            h < 0 &&
              a._ts &&
              ((n -= h),
              ((!l && !s._dp) || (l && l.smoothChildTiming)) &&
                ((s._start += h / s._ts), (s._time -= h), (s._tTime -= h)),
              s.shiftChildren(-h, !1, -1 / 0),
              (o = 0)),
            a._end > n && a._ts && (n = a._end),
            (a = f);
        Kt(s, s === z && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (t.updateRoot = function (r) {
      if ((z._ts && (Wi(z, Pe(r, z)), (qi = it.frame)), it.frame >= vi)) {
        vi += nt.autoSleep || 120;
        var n = z._first;
        if ((!n || !n._ts) && nt.autoSleep && it._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || it.sleep();
        }
      }
    }),
    t
  );
})(_e);
ft(H.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var cn = function (t, e, i, r, n, s, a) {
    var o = new Q(this._pt, t, e, 0, 1, xr, null, n),
      f = 0,
      h = 0,
      l,
      c,
      d,
      m,
      _,
      p,
      v,
      g;
    for (
      o.b = i,
        o.e = r,
        i += "",
        r += "",
        (v = ~r.indexOf("random(")) && (r = fe(r)),
        s && ((g = [i, r]), s(g, t, e), (i = g[0]), (r = g[1])),
        c = i.match(Ae) || [];
      (l = Ae.exec(r));

    )
      (m = l[0]),
        (_ = r.substring(f, l.index)),
        d ? (d = (d + 1) % 5) : _.substr(-5) === "rgba(" && (d = 1),
        m !== c[h++] &&
          ((p = parseFloat(c[h - 1]) || 0),
          (o._pt = {
            _next: o._pt,
            p: _ || h === 1 ? _ : ",",
            s: p,
            c: m.charAt(1) === "=" ? Gt(p, m) - p : parseFloat(m) - p,
            m: d && d < 4 ? Math.round : 0,
          }),
          (f = Ae.lastIndex));
    return (
      (o.c = f < r.length ? r.substring(f, r.length) : ""),
      (o.fp = a),
      (Ni.test(r) || v) && (o.e = 0),
      (this._pt = o),
      o
    );
  },
  fi = function (t, e, i, r, n, s, a, o, f, h) {
    L(r) && (r = r(n || 0, t, s));
    var l = t[e],
      c =
        i !== "get"
          ? i
          : L(l)
          ? f
            ? t[
                e.indexOf("set") || !L(t["get" + e.substr(3)])
                  ? e
                  : "get" + e.substr(3)
              ](f)
            : t[e]()
          : l,
      d = L(l) ? (f ? yn : yr) : _i,
      m;
    if (
      (X(r) &&
        (~r.indexOf("random(") && (r = fe(r)),
        r.charAt(1) === "=" &&
          ((m = Gt(c, r) + (G(c) || 0)), (m || m === 0) && (r = m))),
      !h || c !== r || je)
    )
      return !isNaN(c * r) && r !== ""
        ? ((m = new Q(
            this._pt,
            t,
            e,
            +c || 0,
            r - (c || 0),
            typeof l == "boolean" ? xn : vr,
            0,
            d
          )),
          f && (m.fp = f),
          a && m.modifier(a, this, t),
          (this._pt = m))
        : (!l && !(e in t) && si(e, r),
          cn.call(this, t, e, c, r, d, o || nt.stringFilter, f));
  },
  dn = function (t, e, i, r, n) {
    if (
      (L(t) && (t = ae(t, n, e, i, r)),
      !pt(t) || (t.style && t.nodeType) || $(t) || Ii(t))
    )
      return X(t) ? ae(t, n, e, i, r) : t;
    var s = {},
      a;
    for (a in t) s[a] = ae(t[a], n, e, i, r);
    return s;
  },
  pr = function (t, e, i, r, n, s) {
    var a, o, f, h;
    if (
      et[t] &&
      (a = new et[t]()).init(
        n,
        a.rawVars ? e[t] : dn(e[t], r, n, s, i),
        i,
        r,
        s
      ) !== !1 &&
      ((i._pt = o = new Q(i._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
      i !== qt)
    )
      for (f = i._ptLookup[i._targets.indexOf(n)], h = a._props.length; h--; )
        f[a._props[h]] = o;
    return a;
  },
  Tt,
  je,
  hi = function u(t, e, i) {
    var r = t.vars,
      n = r.ease,
      s = r.startAt,
      a = r.immediateRender,
      o = r.lazy,
      f = r.onUpdate,
      h = r.runBackwards,
      l = r.yoyoEase,
      c = r.keyframes,
      d = r.autoRevert,
      m = t._dur,
      _ = t._startAt,
      p = t._targets,
      v = t.parent,
      g = v && v.data === "nested" ? v.vars.targets : p,
      x = t._overwrite === "auto" && !ei,
      T = t.timeline,
      y,
      b,
      P,
      S,
      w,
      k,
      R,
      M,
      D,
      q,
      V,
      B,
      U;
    if (
      (T && (!c || !n) && (n = "none"),
      (t._ease = It(n, Ht.ease)),
      (t._yEase = l ? _r(It(l === !0 ? n : l, Ht.ease)) : 0),
      l &&
        t._yoyo &&
        !t._repeat &&
        ((l = t._yEase), (t._yEase = t._ease), (t._ease = l)),
      (t._from = !T && !!r.runBackwards),
      !T || (c && !r.stagger))
    ) {
      if (
        ((M = p[0] ? Ft(p[0]).harness : 0),
        (B = M && r[M.prop]),
        (y = be(r, ai)),
        _ &&
          (_._zTime < 0 && _.progress(1),
          e < 0 && h && a && !d ? _.render(-1, !0) : _.revert(h && m ? ye : Ur),
          (_._lazy = 0)),
        s)
      ) {
        if (
          (Ot(
            (t._startAt = N.set(
              p,
              ft(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: v,
                  immediateRender: !0,
                  lazy: !_ && j(o),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    f &&
                    function () {
                      return rt(t, "onUpdate");
                    },
                  stagger: 0,
                },
                s
              )
            ))
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (W || (!a && !d)) && t._startAt.revert(ye),
          a && m && e <= 0 && i <= 0)
        ) {
          e && (t._zTime = e);
          return;
        }
      } else if (h && m && !_) {
        if (
          (e && (a = !1),
          (P = ft(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !_ && j(o),
              immediateRender: a,
              stagger: 0,
              parent: v,
            },
            y
          )),
          B && (P[M.prop] = B),
          Ot((t._startAt = N.set(p, P))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (W ? t._startAt.revert(ye) : t._startAt.render(-1, !0)),
          (t._zTime = e),
          !a)
        )
          u(t._startAt, A, A);
        else if (!e) return;
      }
      for (
        t._pt = t._ptCache = 0, o = (m && j(o)) || (o && !m), b = 0;
        b < p.length;
        b++
      ) {
        if (
          ((w = p[b]),
          (R = w._gsap || ui(p)[b]._gsap),
          (t._ptLookup[b] = q = {}),
          Xe[R.id] && Pt.length && we(),
          (V = g === p ? b : g.indexOf(w)),
          M &&
            (D = new M()).init(w, B || y, t, V, g) !== !1 &&
            ((t._pt = S =
              new Q(t._pt, w, D.name, 0, 1, D.render, D, 0, D.priority)),
            D._props.forEach(function (ht) {
              q[ht] = S;
            }),
            D.priority && (k = 1)),
          !M || B)
        )
          for (P in y)
            et[P] && (D = pr(P, y, t, V, w, g))
              ? D.priority && (k = 1)
              : (q[P] = S =
                  fi.call(t, w, P, "get", y[P], V, g, 0, r.stringFilter));
        t._op && t._op[b] && t.kill(w, t._op[b]),
          x &&
            t._pt &&
            ((Tt = t),
            z.killTweensOf(w, q, t.globalTime(e)),
            (U = !t.parent),
            (Tt = 0)),
          t._pt && o && (Xe[R.id] = 1);
      }
      k && Tr(t), t._onInit && t._onInit(t);
    }
    (t._onUpdate = f),
      (t._initted = (!t._op || t._pt) && !U),
      c && e <= 0 && T.render(ot, !0, !0);
  },
  pn = function (t, e, i, r, n, s, a, o) {
    var f = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
      h,
      l,
      c,
      d;
    if (!f)
      for (
        f = t._ptCache[e] = [], c = t._ptLookup, d = t._targets.length;
        d--;

      ) {
        if (((h = c[d][e]), h && h.d && h.d._pt))
          for (h = h.d._pt; h && h.p !== e && h.fp !== e; ) h = h._next;
        if (!h)
          return (
            (je = 1),
            (t.vars[e] = "+=0"),
            hi(t, a),
            (je = 0),
            o ? oe(e + " not eligible for reset") : 1
          );
        f.push(h);
      }
    for (d = f.length; d--; )
      (l = f[d]),
        (h = l._pt || l),
        (h.s = (r || r === 0) && !n ? r : h.s + (r || 0) + s * h.c),
        (h.c = i - h.s),
        l.e && (l.e = I(i) + G(l.e)),
        l.b && (l.b = h.s + G(l.b));
  },
  mn = function (t, e) {
    var i = t[0] ? Ft(t[0]).harness : 0,
      r = i && i.aliases,
      n,
      s,
      a,
      o;
    if (!r) return e;
    n = Nt({}, e);
    for (s in r)
      if (s in n) for (o = r[s].split(","), a = o.length; a--; ) n[o[a]] = n[s];
    return n;
  },
  gn = function (t, e, i, r) {
    var n = e.ease || r || "power1.inOut",
      s,
      a;
    if ($(e))
      (a = i[t] || (i[t] = [])),
        e.forEach(function (o, f) {
          return a.push({ t: (f / (e.length - 1)) * 100, v: o, e: n });
        });
    else
      for (s in e)
        (a = i[s] || (i[s] = [])),
          s === "ease" || a.push({ t: parseFloat(t), v: e[s], e: n });
  },
  ae = function (t, e, i, r, n) {
    return L(t)
      ? t.call(e, i, r, n)
      : X(t) && ~t.indexOf("random(")
      ? fe(t)
      : t;
  },
  mr = oi + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  gr = {};
K(mr + ",id,stagger,delay,duration,paused,scrollTrigger", function (u) {
  return (gr[u] = 1);
});
var N = (function (u) {
  Fi(t, u);
  function t(i, r, n, s) {
    var a;
    typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
      (a = u.call(this, s ? r : ne(r)) || this);
    var o = a.vars,
      f = o.duration,
      h = o.delay,
      l = o.immediateRender,
      c = o.stagger,
      d = o.overwrite,
      m = o.keyframes,
      _ = o.defaults,
      p = o.scrollTrigger,
      v = o.yoyoEase,
      g = r.parent || z,
      x = ($(i) || Ii(i) ? vt(i[0]) : "length" in r) ? [i] : ut(i),
      T,
      y,
      b,
      P,
      S,
      w,
      k,
      R;
    if (
      ((a._targets = x.length
        ? ui(x)
        : oe(
            "GSAP target " + i + " not found. https://gsap.com",
            !nt.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = d),
      m || c || ge(f) || ge(h))
    ) {
      if (
        ((r = a.vars),
        (T = a.timeline =
          new H({
            data: "nested",
            defaults: _ || {},
            targets: g && g.data === "nested" ? g.vars.targets : x,
          })),
        T.kill(),
        (T.parent = T._dp = gt(a)),
        (T._start = 0),
        c || ge(f) || ge(h))
      ) {
        if (((P = x.length), (k = c && er(c)), pt(c)))
          for (S in c) ~mr.indexOf(S) && (R || (R = {}), (R[S] = c[S]));
        for (y = 0; y < P; y++)
          (b = be(r, gr)),
            (b.stagger = 0),
            v && (b.yoyoEase = v),
            R && Nt(b, R),
            (w = x[y]),
            (b.duration = +ae(f, gt(a), y, w, x)),
            (b.delay = (+ae(h, gt(a), y, w, x) || 0) - a._delay),
            !c &&
              P === 1 &&
              b.delay &&
              ((a._delay = h = b.delay), (a._start += h), (b.delay = 0)),
            T.to(w, b, k ? k(y, w, x) : 0),
            (T._ease = O.none);
        T.duration() ? (f = h = 0) : (a.timeline = 0);
      } else if (m) {
        ne(ft(T.vars.defaults, { ease: "none" })),
          (T._ease = It(m.ease || r.ease || "none"));
        var M = 0,
          D,
          q,
          V;
        if ($(m))
          m.forEach(function (B) {
            return T.to(x, B, ">");
          }),
            T.duration();
        else {
          b = {};
          for (S in m)
            S === "ease" || S === "easeEach" || gn(S, m[S], b, m.easeEach);
          for (S in b)
            for (
              D = b[S].sort(function (B, U) {
                return B.t - U.t;
              }),
                M = 0,
                y = 0;
              y < D.length;
              y++
            )
              (q = D[y]),
                (V = {
                  ease: q.e,
                  duration: ((q.t - (y ? D[y - 1].t : 0)) / 100) * f,
                }),
                (V[S] = q.v),
                T.to(x, V, M),
                (M += V.duration);
          T.duration() < f && T.to({}, { duration: f - T.duration() });
        }
      }
      f || a.duration((f = T.duration()));
    } else a.timeline = 0;
    return (
      d === !0 && !ei && ((Tt = gt(a)), z.killTweensOf(x), (Tt = 0)),
      lt(g, gt(a), n),
      r.reversed && a.reverse(),
      r.paused && a.paused(!0),
      (l ||
        (!f &&
          !m &&
          a._start === Y(g._time) &&
          j(l) &&
          $r(gt(a)) &&
          g.data !== "nested")) &&
        ((a._tTime = -A), a.render(Math.max(0, -h) || 0)),
      p && Qi(gt(a), p),
      a
    );
  }
  var e = t.prototype;
  return (
    (e.render = function (r, n, s) {
      var a = this._time,
        o = this._tDur,
        f = this._dur,
        h = r < 0,
        l = r > o - A && !h ? o : r < A ? 0 : r,
        c,
        d,
        m,
        _,
        p,
        v,
        g,
        x,
        T;
      if (!f) jr(this, r, n, s);
      else if (
        l !== this._tTime ||
        !r ||
        s ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== h)
      ) {
        if (((c = l), (x = this.timeline), this._repeat)) {
          if (((_ = f + this._rDelay), this._repeat < -1 && h))
            return this.totalTime(_ * 100 + r, n, s);
          if (
            ((c = Y(l % _)),
            l === o
              ? ((m = this._repeat), (c = f))
              : ((m = ~~(l / _)),
                m && m === Y(l / _) && ((c = f), m--),
                c > f && (c = f)),
            (v = this._yoyo && m & 1),
            v && ((T = this._yEase), (c = f - c)),
            (p = jt(this._tTime, _)),
            c === a && !s && this._initted && m === p)
          )
            return (this._tTime = l), this;
          m !== p &&
            (x && this._yEase && lr(x, v),
            this.vars.repeatRefresh &&
              !v &&
              !this._lock &&
              this._time !== _ &&
              this._initted &&
              ((this._lock = s = 1),
              (this.render(Y(_ * m), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Zi(this, h ? r : c, s, n, l)) return (this._tTime = 0), this;
          if (a !== this._time && !(s && this.vars.repeatRefresh && m !== p))
            return this;
          if (f !== this._dur) return this.render(r, n, s);
        }
        if (
          ((this._tTime = l),
          (this._time = c),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = g = (T || this._ease)(c / f)),
          this._from && (this.ratio = g = 1 - g),
          c && !a && !n && !m && (rt(this, "onStart"), this._tTime !== l))
        )
          return this;
        for (d = this._pt; d; ) d.r(g, d.d), (d = d._next);
        (x && x.render(r < 0 ? r : x._dur * x._ease(c / this._dur), n, s)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !n &&
            (h && qe(this, r, n, s), rt(this, "onUpdate")),
          this._repeat &&
            m !== p &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            rt(this, "onRepeat"),
          (l === this._tDur || !l) &&
            this._tTime === l &&
            (h && !this._onUpdate && qe(this, r, !0, !0),
            (r || !f) &&
              ((l === this._tDur && this._ts > 0) || (!l && this._ts < 0)) &&
              Ot(this, 1),
            !n &&
              !(h && !a) &&
              (l || a || v) &&
              (rt(this, l === o ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(l < o && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (e.targets = function () {
      return this._targets;
    }),
    (e.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        u.prototype.invalidate.call(this, r)
      );
    }),
    (e.resetTo = function (r, n, s, a, o) {
      he || it.wake(), this._ts || this.play();
      var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        h;
      return (
        this._initted || hi(this, f),
        (h = this._ease(f / this._dur)),
        pn(this, r, n, s, a, h, f, o)
          ? this.resetTo(r, n, s, a, 1)
          : (De(this, 0),
            this.parent ||
              ji(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (e.kill = function (r, n) {
      if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
        return (this._lazy = this._pt = 0), this.parent ? ie(this) : this;
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, n, Tt && Tt.vars.overwrite !== !0)
            ._first || ie(this),
          this.parent &&
            s !== this.timeline.totalDuration() &&
            Kt(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var a = this._targets,
        o = r ? ut(r) : a,
        f = this._ptLookup,
        h = this._pt,
        l,
        c,
        d,
        m,
        _,
        p,
        v;
      if ((!n || n === "all") && Gr(a, o))
        return n === "all" && (this._pt = 0), ie(this);
      for (
        l = this._op = this._op || [],
          n !== "all" &&
            (X(n) &&
              ((_ = {}),
              K(n, function (g) {
                return (_[g] = 1);
              }),
              (n = _)),
            (n = mn(a, n))),
          v = a.length;
        v--;

      )
        if (~o.indexOf(a[v])) {
          (c = f[v]),
            n === "all"
              ? ((l[v] = n), (m = c), (d = {}))
              : ((d = l[v] = l[v] || {}), (m = n));
          for (_ in m)
            (p = c && c[_]),
              p &&
                ((!("kill" in p.d) || p.d.kill(_) === !0) && Ce(this, p, "_pt"),
                delete c[_]),
              d !== "all" && (d[_] = 1);
        }
      return this._initted && !this._pt && h && ie(this), this;
    }),
    (t.to = function (r, n) {
      return new t(r, n, arguments[2]);
    }),
    (t.from = function (r, n) {
      return se(1, arguments);
    }),
    (t.delayedCall = function (r, n, s, a) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: a,
      });
    }),
    (t.fromTo = function (r, n, s) {
      return se(2, arguments);
    }),
    (t.set = function (r, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(r, n);
    }),
    (t.killTweensOf = function (r, n, s) {
      return z.killTweensOf(r, n, s);
    }),
    t
  );
})(_e);
ft(N.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
K("staggerTo,staggerFrom,staggerFromTo", function (u) {
  N[u] = function () {
    var t = new H(),
      e = We.call(arguments, 0);
    return e.splice(u === "staggerFromTo" ? 5 : 4, 0, 0), t[u].apply(t, e);
  };
});
var _i = function (t, e, i) {
    return (t[e] = i);
  },
  yr = function (t, e, i) {
    return t[e](i);
  },
  yn = function (t, e, i, r) {
    return t[e](r.fp, i);
  },
  vn = function (t, e, i) {
    return t.setAttribute(e, i);
  },
  li = function (t, e) {
    return L(t[e]) ? yr : ii(t[e]) && t.setAttribute ? vn : _i;
  },
  vr = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
  },
  xn = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
  xr = function (t, e) {
    var i = e._pt,
      r = "";
    if (!t && e.b) r = e.b;
    else if (t === 1 && e.e) r = e.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) +
          r),
          (i = i._next);
      r += e.c;
    }
    e.set(e.t, e.p, r, e);
  },
  ci = function (t, e) {
    for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
  },
  Tn = function (t, e, i, r) {
    for (var n = this._pt, s; n; )
      (s = n._next), n.p === r && n.modifier(t, e, i), (n = s);
  },
  wn = function (t) {
    for (var e = this._pt, i, r; e; )
      (r = e._next),
        (e.p === t && !e.op) || e.op === t
          ? Ce(this, e, "_pt")
          : e.dep || (i = 1),
        (e = r);
    return !i;
  },
  bn = function (t, e, i, r) {
    r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
  },
  Tr = function (t) {
    for (var e = t._pt, i, r, n, s; e; ) {
      for (i = e._next, r = n; r && r.pr > e.pr; ) r = r._next;
      (e._prev = r ? r._prev : s) ? (e._prev._next = e) : (n = e),
        (e._next = r) ? (r._prev = e) : (s = e),
        (e = i);
    }
    t._pt = n;
  },
  Q = (function () {
    function u(e, i, r, n, s, a, o, f, h) {
      (this.t = i),
        (this.s = n),
        (this.c = s),
        (this.p = r),
        (this.r = a || vr),
        (this.d = o || this),
        (this.set = f || _i),
        (this.pr = h || 0),
        (this._next = e),
        e && (e._prev = this);
    }
    var t = u.prototype;
    return (
      (t.modifier = function (i, r, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = bn),
          (this.m = i),
          (this.mt = n),
          (this.tween = r);
      }),
      u
    );
  })();
K(
  oi +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (u) {
    return (ai[u] = 1);
  }
);
st.TweenMax = st.TweenLite = N;
st.TimelineLite = st.TimelineMax = H;
z = new H({
  sortChildren: !1,
  defaults: Ht,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
nt.stringFilter = hr;
var Bt = [],
  xe = {},
  Pn = [],
  Si = 0,
  Sn = 0,
  Le = function (t) {
    return (xe[t] || Pn).map(function (e) {
      return e();
    });
  },
  Ke = function () {
    var t = Date.now(),
      e = [];
    t - Si > 2 &&
      (Le("matchMediaInit"),
      Bt.forEach(function (i) {
        var r = i.queries,
          n = i.conditions,
          s,
          a,
          o,
          f;
        for (a in r)
          (s = _t.matchMedia(r[a]).matches),
            s && (o = 1),
            s !== n[a] && ((n[a] = s), (f = 1));
        f && (i.revert(), o && e.push(i));
      }),
      Le("matchMediaRevert"),
      e.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (Si = t),
      Le("matchMedia"));
  },
  wr = (function () {
    function u(e, i) {
      (this.selector = i && $e(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Sn++),
        e && this.add(e);
    }
    var t = u.prototype;
    return (
      (t.add = function (i, r, n) {
        L(i) && ((n = r), (r = i), (i = L));
        var s = this,
          a = function () {
            var f = E,
              h = s.selector,
              l;
            return (
              f && f !== s && f.data.push(s),
              n && (s.selector = $e(n)),
              (E = s),
              (l = r.apply(s, arguments)),
              L(l) && s._r.push(l),
              (E = f),
              (s.selector = h),
              (s.isReverted = !1),
              l
            );
          };
        return (
          (s.last = a),
          i === L
            ? a(s, function (o) {
                return s.add(null, o);
              })
            : i
            ? (s[i] = a)
            : a
        );
      }),
      (t.ignore = function (i) {
        var r = E;
        (E = null), i(this), (E = r);
      }),
      (t.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof u
              ? i.push.apply(i, r.getTweens())
              : r instanceof N &&
                  !(r.parent && r.parent.data === "nested") &&
                  i.push(r);
          }),
          i
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (i, r) {
        var n = this;
        if (
          (i
            ? (function () {
                for (var a = n.getTweens(), o = n.data.length, f; o--; )
                  (f = n.data[o]),
                    f.data === "isFlip" &&
                      (f.revert(),
                      f.getChildren(!0, !0, !1).forEach(function (h) {
                        return a.splice(a.indexOf(h), 1);
                      }));
                for (
                  a
                    .map(function (h) {
                      return {
                        g:
                          h._dur ||
                          h._delay ||
                          (h._sat && !h._sat.vars.immediateRender)
                            ? h.globalTime(0)
                            : -1 / 0,
                        t: h,
                      };
                    })
                    .sort(function (h, l) {
                      return l.g - h.g || -1 / 0;
                    })
                    .forEach(function (h) {
                      return h.t.revert(i);
                    }),
                    o = n.data.length;
                  o--;

                )
                  (f = n.data[o]),
                    f instanceof H
                      ? f.data !== "nested" &&
                        (f.scrollTrigger && f.scrollTrigger.revert(), f.kill())
                      : !(f instanceof N) && f.revert && f.revert(i);
                n._r.forEach(function (h) {
                  return h(i, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill();
              }),
          this.clear(),
          r)
        )
          for (var s = Bt.length; s--; )
            Bt[s].id === this.id && Bt.splice(s, 1);
      }),
      (t.revert = function (i) {
        this.kill(i || {});
      }),
      u
    );
  })(),
  On = (function () {
    function u(e) {
      (this.contexts = []), (this.scope = e), E && E.data.push(this);
    }
    var t = u.prototype;
    return (
      (t.add = function (i, r, n) {
        pt(i) || (i = { matches: i });
        var s = new wr(0, n || this.scope),
          a = (s.conditions = {}),
          o,
          f,
          h;
        E && !s.selector && (s.selector = E.selector),
          this.contexts.push(s),
          (r = s.add("onMatch", r)),
          (s.queries = i);
        for (f in i)
          f === "all"
            ? (h = 1)
            : ((o = _t.matchMedia(i[f])),
              o &&
                (Bt.indexOf(s) < 0 && Bt.push(s),
                (a[f] = o.matches) && (h = 1),
                o.addListener
                  ? o.addListener(Ke)
                  : o.addEventListener("change", Ke)));
        return (
          h &&
            r(s, function (l) {
              return s.add(null, l);
            }),
          this
        );
      }),
      (t.revert = function (i) {
        this.kill(i || {});
      }),
      (t.kill = function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0);
        });
      }),
      u
    );
  })(),
  Se = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      e.forEach(function (r) {
        return or(r);
      });
    },
    timeline: function (t) {
      return new H(t);
    },
    getTweensOf: function (t, e) {
      return z.getTweensOf(t, e);
    },
    getProperty: function (t, e, i, r) {
      X(t) && (t = ut(t)[0]);
      var n = Ft(t || {}).get,
        s = i ? Hi : $i;
      return (
        i === "native" && (i = ""),
        t &&
          (e
            ? s(((et[e] && et[e].get) || n)(t, e, i, r))
            : function (a, o, f) {
                return s(((et[a] && et[a].get) || n)(t, a, o, f));
              })
      );
    },
    quickSetter: function (t, e, i) {
      if (((t = ut(t)), t.length > 1)) {
        var r = t.map(function (h) {
            return J.quickSetter(h, e, i);
          }),
          n = r.length;
        return function (h) {
          for (var l = n; l--; ) r[l](h);
        };
      }
      t = t[0] || {};
      var s = et[e],
        a = Ft(t),
        o = (a.harness && (a.harness.aliases || {})[e]) || e,
        f = s
          ? function (h) {
              var l = new s();
              (qt._pt = 0),
                l.init(t, i ? h + i : h, qt, 0, [t]),
                l.render(1, l),
                qt._pt && ci(1, qt);
            }
          : a.set(t, o);
      return s
        ? f
        : function (h) {
            return f(t, o, i ? h + i : h, a, 1);
          };
    },
    quickTo: function (t, e, i) {
      var r,
        n = J.to(
          t,
          Nt(((r = {}), (r[e] = "+=0.1"), (r.paused = !0), r), i || {})
        ),
        s = function (o, f, h) {
          return n.resetTo(e, o, f, h);
        };
      return (s.tween = n), s;
    },
    isTweening: function (t) {
      return z.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = It(t.ease, Ht.ease)), xi(Ht, t || {});
    },
    config: function (t) {
      return xi(nt, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        i = t.effect,
        r = t.plugins,
        n = t.defaults,
        s = t.extendTimeline;
      (r || "").split(",").forEach(function (a) {
        return (
          a && !et[a] && !st[a] && oe(e + " effect requires " + a + " plugin.")
        );
      }),
        (Re[e] = function (a, o, f) {
          return i(ut(a), ft(o || {}, n), f);
        }),
        s &&
          (H.prototype[e] = function (a, o, f) {
            return this.add(Re[e](a, pt(o) ? o : (f = o) && {}, this), f);
          });
    },
    registerEase: function (t, e) {
      O[t] = It(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? It(t, e) : O;
    },
    getById: function (t) {
      return z.getById(t);
    },
    exportRoot: function (t, e) {
      t === void 0 && (t = {});
      var i = new H(t),
        r,
        n;
      for (
        i.smoothChildTiming = j(t.smoothChildTiming),
          z.remove(i),
          i._dp = 0,
          i._time = i._tTime = z._time,
          r = z._first;
        r;

      )
        (n = r._next),
          (e ||
            !(
              !r._dur &&
              r instanceof N &&
              r.vars.onComplete === r._targets[0]
            )) &&
            lt(i, r, r._start - r._delay),
          (r = n);
      return lt(z, i, 0), i;
    },
    context: function (t, e) {
      return t ? new wr(t, e) : E;
    },
    matchMedia: function (t) {
      return new On(t);
    },
    matchMediaRefresh: function () {
      return (
        Bt.forEach(function (t) {
          var e = t.conditions,
            i,
            r;
          for (r in e) e[r] && ((e[r] = !1), (i = 1));
          i && t.revert();
        }) || Ke()
      );
    },
    addEventListener: function (t, e) {
      var i = xe[t] || (xe[t] = []);
      ~i.indexOf(e) || i.push(e);
    },
    removeEventListener: function (t, e) {
      var i = xe[t],
        r = i && i.indexOf(e);
      r >= 0 && i.splice(r, 1);
    },
    utils: {
      wrap: nn,
      wrapYoyo: sn,
      distribute: er,
      random: rr,
      snap: ir,
      normalize: rn,
      getUnit: G,
      clamp: Zr,
      splitColor: ur,
      toArray: ut,
      selector: $e,
      mapRange: sr,
      pipe: tn,
      unitize: en,
      interpolate: an,
      shuffle: tr,
    },
    install: Yi,
    effects: Re,
    ticker: it,
    updateRoot: H.updateRoot,
    plugins: et,
    globalTimeline: z,
    core: {
      PropTween: Q,
      globals: Xi,
      Tween: N,
      Timeline: H,
      Animation: _e,
      getCache: Ft,
      _removeLinkedListItem: Ce,
      reverting: function () {
        return W;
      },
      context: function (t) {
        return t && E && (E.data.push(t), (t._ctx = E)), E;
      },
      suppressOverwrites: function (t) {
        return (ei = t);
      },
    },
  };
K("to,from,fromTo,delayedCall,set,killTweensOf", function (u) {
  return (Se[u] = N[u]);
});
it.add(H.updateRoot);
qt = Se.to({}, { duration: 0 });
var kn = function (t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
      i = i._next;
    return i;
  },
  Cn = function (t, e) {
    var i = t._targets,
      r,
      n,
      s;
    for (r in e)
      for (n = i.length; n--; )
        (s = t._ptLookup[n][r]),
          s &&
            (s = s.d) &&
            (s._pt && (s = kn(s, r)),
            s && s.modifier && s.modifier(e[r], t, i[n], r));
  },
  Ie = function (t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function (r, n, s) {
        s._onInit = function (a) {
          var o, f;
          if (
            (X(n) &&
              ((o = {}),
              K(n, function (h) {
                return (o[h] = 1);
              }),
              (n = o)),
            e)
          ) {
            o = {};
            for (f in n) o[f] = e(n[f]);
            n = o;
          }
          Cn(a, n);
        };
      },
    };
  },
  J =
    Se.registerPlugin(
      {
        name: "attr",
        init: function (t, e, i, r, n) {
          var s, a, o;
          this.tween = i;
          for (s in e)
            (o = t.getAttribute(s) || ""),
              (a = this.add(
                t,
                "setAttribute",
                (o || 0) + "",
                e[s],
                r,
                n,
                0,
                0,
                s
              )),
              (a.op = s),
              (a.b = o),
              this._props.push(s);
        },
        render: function (t, e) {
          for (var i = e._pt; i; )
            W ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        init: function (t, e) {
          for (var i = e.length; i--; )
            this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
        },
      },
      Ie("roundProps", He),
      Ie("modifiers"),
      Ie("snap", ir)
    ) || Se;
N.version = H.version = J.version = "3.12.5";
Ui = 1;
ri() && Qt();
O.Power0;
O.Power1;
O.Power2;
O.Power3;
O.Power4;
O.Linear;
O.Quad;
O.Cubic;
O.Quart;
O.Quint;
O.Strong;
O.Elastic;
O.Back;
O.SteppedEase;
O.Bounce;
O.Sine;
O.Expo;
O.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Oi,
  wt,
  Wt,
  di,
  zt,
  ki,
  pi,
  Mn = function () {
    return typeof window < "u";
  },
  xt = {},
  Et = 180 / Math.PI,
  $t = Math.PI / 180,
  Yt = Math.atan2,
  Ci = 1e8,
  mi = /([A-Z])/g,
  Dn = /(left|right|width|margin|padding|x)/i,
  An = /[\s,\(]\S/,
  ct = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Qe = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
  },
  Rn = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
      e
    );
  },
  En = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
      e
    );
  },
  zn = function (t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
  },
  br = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
  Pr = function (t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
  },
  Fn = function (t, e, i) {
    return (t.style[e] = i);
  },
  Ln = function (t, e, i) {
    return t.style.setProperty(e, i);
  },
  In = function (t, e, i) {
    return (t._gsap[e] = i);
  },
  Bn = function (t, e, i) {
    return (t._gsap.scaleX = t._gsap.scaleY = i);
  },
  Nn = function (t, e, i, r, n) {
    var s = t._gsap;
    (s.scaleX = s.scaleY = i), s.renderTransform(n, s);
  },
  Vn = function (t, e, i, r, n) {
    var s = t._gsap;
    (s[e] = i), s.renderTransform(n, s);
  },
  F = "transform",
  Z = F + "Origin",
  Un = function u(t, e) {
    var i = this,
      r = this.target,
      n = r.style,
      s = r._gsap;
    if (t in xt && n) {
      if (((this.tfm = this.tfm || {}), t !== "transform"))
        (t = ct[t] || t),
          ~t.indexOf(",")
            ? t.split(",").forEach(function (a) {
                return (i.tfm[a] = yt(r, a));
              })
            : (this.tfm[t] = s.x ? s[t] : yt(r, t)),
          t === Z && (this.tfm.zOrigin = s.zOrigin);
      else
        return ct.transform.split(",").forEach(function (a) {
          return u.call(i, a, e);
        });
      if (this.props.indexOf(F) >= 0) return;
      s.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(Z, e, "")),
        (t = F);
    }
    (n || e) && this.props.push(t, e, n[t]);
  },
  Sr = function (t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  },
  Yn = function () {
    var t = this.props,
      e = this.target,
      i = e.style,
      r = e._gsap,
      n,
      s;
    for (n = 0; n < t.length; n += 3)
      t[n + 1]
        ? (e[t[n]] = t[n + 2])
        : t[n + 2]
        ? (i[t[n]] = t[n + 2])
        : i.removeProperty(
            t[n].substr(0, 2) === "--"
              ? t[n]
              : t[n].replace(mi, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (s in this.tfm) r[s] = this.tfm[s];
      r.svg &&
        (r.renderTransform(),
        e.setAttribute("data-svg-origin", this.svgo || "")),
        (n = pi()),
        (!n || !n.isStart) &&
          !i[F] &&
          (Sr(i),
          r.zOrigin &&
            i[Z] &&
            ((i[Z] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1));
    }
  },
  Or = function (t, e) {
    var i = { target: t, props: [], revert: Yn, save: Un };
    return (
      t._gsap || J.core.getCache(t),
      e &&
        e.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  },
  kr,
  Ze = function (t, e) {
    var i = wt.createElementNS
      ? wt.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : wt.createElement(t);
    return i && i.style ? i : wt.createElement(t);
  },
  dt = function u(t, e, i) {
    var r = getComputedStyle(t);
    return (
      r[e] ||
      r.getPropertyValue(e.replace(mi, "-$1").toLowerCase()) ||
      r.getPropertyValue(e) ||
      (!i && u(t, Zt(e) || e, 1)) ||
      ""
    );
  },
  Mi = "O,Moz,ms,Ms,Webkit".split(","),
  Zt = function (t, e, i) {
    var r = e || zt,
      n = r.style,
      s = 5;
    if (t in n && !i) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      s-- && !(Mi[s] + t in n);

    );
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Mi[s] : "") + t;
  },
  Je = function () {
    Mn() &&
      window.document &&
      ((Oi = window),
      (wt = Oi.document),
      (Wt = wt.documentElement),
      (zt = Ze("div") || { style: {} }),
      Ze("div"),
      (F = Zt(F)),
      (Z = F + "Origin"),
      (zt.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (kr = !!Zt("perspective")),
      (pi = J.core.reverting),
      (di = 1));
  },
  Be = function u(t) {
    var e = Ze(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      r = this.nextSibling,
      n = this.style.cssText,
      s;
    if (
      (Wt.appendChild(e),
      e.appendChild(this),
      (this.style.display = "block"),
      t)
    )
      try {
        (s = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = u);
      } catch {}
    else this._gsapBBox && (s = this._gsapBBox());
    return (
      i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
      Wt.removeChild(e),
      (this.style.cssText = n),
      s
    );
  },
  Di = function (t, e) {
    for (var i = e.length; i--; )
      if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
  },
  Cr = function (t) {
    var e;
    try {
      e = t.getBBox();
    } catch {
      e = Be.call(t, !0);
    }
    return (
      (e && (e.width || e.height)) || t.getBBox === Be || (e = Be.call(t, !0)),
      e && !e.width && !e.x && !e.y
        ? {
            x: +Di(t, ["x", "cx", "x1"]) || 0,
            y: +Di(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : e
    );
  },
  Mr = function (t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Cr(t));
  },
  Vt = function (t, e) {
    if (e) {
      var i = t.style,
        r;
      e in xt && e !== Z && (e = F),
        i.removeProperty
          ? ((r = e.substr(0, 2)),
            (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
            i.removeProperty(
              r === "--" ? e : e.replace(mi, "-$1").toLowerCase()
            ))
          : i.removeAttribute(e);
    }
  },
  bt = function (t, e, i, r, n, s) {
    var a = new Q(t._pt, e, i, 0, 1, s ? Pr : br);
    return (t._pt = a), (a.b = r), (a.e = n), t._props.push(i), a;
  },
  Ai = { deg: 1, rad: 1, turn: 1 },
  Xn = { grid: 1, flex: 1 },
  kt = function u(t, e, i, r) {
    var n = parseFloat(i) || 0,
      s = (i + "").trim().substr((n + "").length) || "px",
      a = zt.style,
      o = Dn.test(e),
      f = t.tagName.toLowerCase() === "svg",
      h = (f ? "client" : "offset") + (o ? "Width" : "Height"),
      l = 100,
      c = r === "px",
      d = r === "%",
      m,
      _,
      p,
      v;
    if (r === s || !n || Ai[r] || Ai[s]) return n;
    if (
      (s !== "px" && !c && (n = u(t, e, i, "px")),
      (v = t.getCTM && Mr(t)),
      (d || s === "%") && (xt[e] || ~e.indexOf("adius")))
    )
      return (
        (m = v ? t.getBBox()[o ? "width" : "height"] : t[h]),
        I(d ? (n / m) * l : (n / 100) * m)
      );
    if (
      ((a[o ? "width" : "height"] = l + (c ? s : r)),
      (_ =
        ~e.indexOf("adius") || (r === "em" && t.appendChild && !f)
          ? t
          : t.parentNode),
      v && (_ = (t.ownerSVGElement || {}).parentNode),
      (!_ || _ === wt || !_.appendChild) && (_ = wt.body),
      (p = _._gsap),
      p && d && p.width && o && p.time === it.time && !p.uncache)
    )
      return I((n / p.width) * l);
    if (d && (e === "height" || e === "width")) {
      var g = t.style[e];
      (t.style[e] = l + r), (m = t[h]), g ? (t.style[e] = g) : Vt(t, e);
    } else
      (d || s === "%") &&
        !Xn[dt(_, "display")] &&
        (a.position = dt(t, "position")),
        _ === t && (a.position = "static"),
        _.appendChild(zt),
        (m = zt[h]),
        _.removeChild(zt),
        (a.position = "absolute");
    return (
      o && d && ((p = Ft(_)), (p.time = it.time), (p.width = _[h])),
      I(c ? (m * n) / l : m && n ? (l / m) * n : 0)
    );
  },
  yt = function (t, e, i, r) {
    var n;
    return (
      di || Je(),
      e in ct &&
        e !== "transform" &&
        ((e = ct[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
      xt[e] && e !== "transform"
        ? ((n = ce(t, r)),
          (n =
            e !== "transformOrigin"
              ? n[e]
              : n.svg
              ? n.origin
              : ke(dt(t, Z)) + " " + n.zOrigin + "px"))
        : ((n = t.style[e]),
          (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
            (n =
              (Oe[e] && Oe[e](t, e, i)) ||
              dt(t, e) ||
              Gi(t, e) ||
              (e === "opacity" ? 1 : 0))),
      i && !~(n + "").trim().indexOf(" ") ? kt(t, e, n, i) + i : n
    );
  },
  qn = function (t, e, i, r) {
    if (!i || i === "none") {
      var n = Zt(e, t, 1),
        s = n && dt(t, n, 1);
      s && s !== i
        ? ((e = n), (i = s))
        : e === "borderColor" && (i = dt(t, "borderTopColor"));
    }
    var a = new Q(this._pt, t.style, e, 0, 1, xr),
      o = 0,
      f = 0,
      h,
      l,
      c,
      d,
      m,
      _,
      p,
      v,
      g,
      x,
      T,
      y;
    if (
      ((a.b = i),
      (a.e = r),
      (i += ""),
      (r += ""),
      r === "auto" &&
        ((_ = t.style[e]),
        (t.style[e] = r),
        (r = dt(t, e) || r),
        _ ? (t.style[e] = _) : Vt(t, e)),
      (h = [i, r]),
      hr(h),
      (i = h[0]),
      (r = h[1]),
      (c = i.match(Xt) || []),
      (y = r.match(Xt) || []),
      y.length)
    ) {
      for (; (l = Xt.exec(r)); )
        (p = l[0]),
          (g = r.substring(o, l.index)),
          m
            ? (m = (m + 1) % 5)
            : (g.substr(-5) === "rgba(" || g.substr(-5) === "hsla(") && (m = 1),
          p !== (_ = c[f++] || "") &&
            ((d = parseFloat(_) || 0),
            (T = _.substr((d + "").length)),
            p.charAt(1) === "=" && (p = Gt(d, p) + T),
            (v = parseFloat(p)),
            (x = p.substr((v + "").length)),
            (o = Xt.lastIndex - x.length),
            x ||
              ((x = x || nt.units[e] || T),
              o === r.length && ((r += x), (a.e += x))),
            T !== x && (d = kt(t, e, _, x) || 0),
            (a._pt = {
              _next: a._pt,
              p: g || f === 1 ? g : ",",
              s: d,
              c: v - d,
              m: (m && m < 4) || e === "zIndex" ? Math.round : 0,
            }));
      a.c = o < r.length ? r.substring(o, r.length) : "";
    } else a.r = e === "display" && r === "none" ? Pr : br;
    return Ni.test(r) && (a.e = 0), (this._pt = a), a;
  },
  Ri = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Gn = function (t) {
    var e = t.split(" "),
      i = e[0],
      r = e[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((t = i), (i = r), (r = t)),
      (e[0] = Ri[i] || i),
      (e[1] = Ri[r] || r),
      e.join(" ")
    );
  },
  Wn = function (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var i = e.t,
        r = i.style,
        n = e.u,
        s = i._gsap,
        a,
        o,
        f;
      if (n === "all" || n === !0) (r.cssText = ""), (o = 1);
      else
        for (n = n.split(","), f = n.length; --f > -1; )
          (a = n[f]),
            xt[a] && ((o = 1), (a = a === "transformOrigin" ? Z : F)),
            Vt(i, a);
      o &&
        (Vt(i, F),
        s &&
          (s.svg && i.removeAttribute("transform"),
          ce(i, 1),
          (s.uncache = 1),
          Sr(r)));
    }
  },
  Oe = {
    clearProps: function (t, e, i, r, n) {
      if (n.data !== "isFromStart") {
        var s = (t._pt = new Q(t._pt, e, i, 0, 0, Wn));
        return (s.u = r), (s.pr = -10), (s.tween = n), t._props.push(i), 1;
      }
    },
  },
  le = [1, 0, 0, 1, 0, 0],
  Dr = {},
  Ar = function (t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
  },
  Ei = function (t) {
    var e = dt(t, F);
    return Ar(e) ? le : e.substr(7).match(Bi).map(I);
  },
  gi = function (t, e) {
    var i = t._gsap || Ft(t),
      r = t.style,
      n = Ei(t),
      s,
      a,
      o,
      f;
    return i.svg && t.getAttribute("transform")
      ? ((o = t.transform.baseVal.consolidate().matrix),
        (n = [o.a, o.b, o.c, o.d, o.e, o.f]),
        n.join(",") === "1,0,0,1,0,0" ? le : n)
      : (n === le &&
          !t.offsetParent &&
          t !== Wt &&
          !i.svg &&
          ((o = r.display),
          (r.display = "block"),
          (s = t.parentNode),
          (!s || !t.offsetParent) &&
            ((f = 1), (a = t.nextElementSibling), Wt.appendChild(t)),
          (n = Ei(t)),
          o ? (r.display = o) : Vt(t, "display"),
          f &&
            (a
              ? s.insertBefore(t, a)
              : s
              ? s.appendChild(t)
              : Wt.removeChild(t))),
        e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  ti = function (t, e, i, r, n, s) {
    var a = t._gsap,
      o = n || gi(t, !0),
      f = a.xOrigin || 0,
      h = a.yOrigin || 0,
      l = a.xOffset || 0,
      c = a.yOffset || 0,
      d = o[0],
      m = o[1],
      _ = o[2],
      p = o[3],
      v = o[4],
      g = o[5],
      x = e.split(" "),
      T = parseFloat(x[0]) || 0,
      y = parseFloat(x[1]) || 0,
      b,
      P,
      S,
      w;
    i
      ? o !== le &&
        (P = d * p - m * _) &&
        ((S = T * (p / P) + y * (-_ / P) + (_ * g - p * v) / P),
        (w = T * (-m / P) + y * (d / P) - (d * g - m * v) / P),
        (T = S),
        (y = w))
      : ((b = Cr(t)),
        (T = b.x + (~x[0].indexOf("%") ? (T / 100) * b.width : T)),
        (y = b.y + (~(x[1] || x[0]).indexOf("%") ? (y / 100) * b.height : y))),
      r || (r !== !1 && a.smooth)
        ? ((v = T - f),
          (g = y - h),
          (a.xOffset = l + (v * d + g * _) - v),
          (a.yOffset = c + (v * m + g * p) - g))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = T),
      (a.yOrigin = y),
      (a.smooth = !!r),
      (a.origin = e),
      (a.originIsAbsolute = !!i),
      (t.style[Z] = "0px 0px"),
      s &&
        (bt(s, a, "xOrigin", f, T),
        bt(s, a, "yOrigin", h, y),
        bt(s, a, "xOffset", l, a.xOffset),
        bt(s, a, "yOffset", c, a.yOffset)),
      t.setAttribute("data-svg-origin", T + " " + y);
  },
  ce = function (t, e) {
    var i = t._gsap || new dr(t);
    if ("x" in i && !e && !i.uncache) return i;
    var r = t.style,
      n = i.scaleX < 0,
      s = "px",
      a = "deg",
      o = getComputedStyle(t),
      f = dt(t, Z) || "0",
      h,
      l,
      c,
      d,
      m,
      _,
      p,
      v,
      g,
      x,
      T,
      y,
      b,
      P,
      S,
      w,
      k,
      R,
      M,
      D,
      q,
      V,
      B,
      U,
      ht,
      pe,
      Jt,
      te,
      Mt,
      yi,
      mt,
      Dt;
    return (
      (h = l = c = _ = p = v = g = x = T = 0),
      (d = m = 1),
      (i.svg = !!(t.getCTM && Mr(t))),
      o.translate &&
        ((o.translate !== "none" ||
          o.scale !== "none" ||
          o.rotate !== "none") &&
          (r[F] =
            (o.translate !== "none"
              ? "translate3d(" +
                (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") +
            (o.scale !== "none"
              ? "scale(" + o.scale.split(" ").join(",") + ") "
              : "") +
            (o[F] !== "none" ? o[F] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (P = gi(t, i.svg)),
      i.svg &&
        (i.uncache
          ? ((ht = t.getBBox()),
            (f = i.xOrigin - ht.x + "px " + (i.yOrigin - ht.y) + "px"),
            (U = ""))
          : (U = !e && t.getAttribute("data-svg-origin")),
        ti(t, U || f, !!U || i.originIsAbsolute, i.smooth !== !1, P)),
      (y = i.xOrigin || 0),
      (b = i.yOrigin || 0),
      P !== le &&
        ((R = P[0]),
        (M = P[1]),
        (D = P[2]),
        (q = P[3]),
        (h = V = P[4]),
        (l = B = P[5]),
        P.length === 6
          ? ((d = Math.sqrt(R * R + M * M)),
            (m = Math.sqrt(q * q + D * D)),
            (_ = R || M ? Yt(M, R) * Et : 0),
            (g = D || q ? Yt(D, q) * Et + _ : 0),
            g && (m *= Math.abs(Math.cos(g * $t))),
            i.svg && ((h -= y - (y * R + b * D)), (l -= b - (y * M + b * q))))
          : ((Dt = P[6]),
            (yi = P[7]),
            (Jt = P[8]),
            (te = P[9]),
            (Mt = P[10]),
            (mt = P[11]),
            (h = P[12]),
            (l = P[13]),
            (c = P[14]),
            (S = Yt(Dt, Mt)),
            (p = S * Et),
            S &&
              ((w = Math.cos(-S)),
              (k = Math.sin(-S)),
              (U = V * w + Jt * k),
              (ht = B * w + te * k),
              (pe = Dt * w + Mt * k),
              (Jt = V * -k + Jt * w),
              (te = B * -k + te * w),
              (Mt = Dt * -k + Mt * w),
              (mt = yi * -k + mt * w),
              (V = U),
              (B = ht),
              (Dt = pe)),
            (S = Yt(-D, Mt)),
            (v = S * Et),
            S &&
              ((w = Math.cos(-S)),
              (k = Math.sin(-S)),
              (U = R * w - Jt * k),
              (ht = M * w - te * k),
              (pe = D * w - Mt * k),
              (mt = q * k + mt * w),
              (R = U),
              (M = ht),
              (D = pe)),
            (S = Yt(M, R)),
            (_ = S * Et),
            S &&
              ((w = Math.cos(S)),
              (k = Math.sin(S)),
              (U = R * w + M * k),
              (ht = V * w + B * k),
              (M = M * w - R * k),
              (B = B * w - V * k),
              (R = U),
              (V = ht)),
            p &&
              Math.abs(p) + Math.abs(_) > 359.9 &&
              ((p = _ = 0), (v = 180 - v)),
            (d = I(Math.sqrt(R * R + M * M + D * D))),
            (m = I(Math.sqrt(B * B + Dt * Dt))),
            (S = Yt(V, B)),
            (g = Math.abs(S) > 2e-4 ? S * Et : 0),
            (T = mt ? 1 / (mt < 0 ? -mt : mt) : 0)),
        i.svg &&
          ((U = t.getAttribute("transform")),
          (i.forceCSS = t.setAttribute("transform", "") || !Ar(dt(t, F))),
          U && t.setAttribute("transform", U))),
      Math.abs(g) > 90 &&
        Math.abs(g) < 270 &&
        (n
          ? ((d *= -1), (g += _ <= 0 ? 180 : -180), (_ += _ <= 0 ? 180 : -180))
          : ((m *= -1), (g += g <= 0 ? 180 : -180))),
      (e = e || i.uncache),
      (i.x =
        h -
        ((i.xPercent =
          h &&
          ((!e && i.xPercent) ||
            (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0)))
          ? (t.offsetWidth * i.xPercent) / 100
          : 0) +
        s),
      (i.y =
        l -
        ((i.yPercent =
          l &&
          ((!e && i.yPercent) ||
            (Math.round(t.offsetHeight / 2) === Math.round(-l) ? -50 : 0)))
          ? (t.offsetHeight * i.yPercent) / 100
          : 0) +
        s),
      (i.z = c + s),
      (i.scaleX = I(d)),
      (i.scaleY = I(m)),
      (i.rotation = I(_) + a),
      (i.rotationX = I(p) + a),
      (i.rotationY = I(v) + a),
      (i.skewX = g + a),
      (i.skewY = x + a),
      (i.transformPerspective = T + s),
      (i.zOrigin = parseFloat(f.split(" ")[2]) || (!e && i.zOrigin) || 0) &&
        (r[Z] = ke(f)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = nt.force3D),
      (i.renderTransform = i.svg ? Hn : kr ? Rr : $n),
      (i.uncache = 0),
      i
    );
  },
  ke = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  Ne = function (t, e, i) {
    var r = G(e);
    return I(parseFloat(e) + parseFloat(kt(t, "x", i + "px", r))) + r;
  },
  $n = function (t, e) {
    (e.z = "0px"),
      (e.rotationY = e.rotationX = "0deg"),
      (e.force3D = 0),
      Rr(t, e);
  },
  At = "0deg",
  ee = "0px",
  Rt = ") ",
  Rr = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      n = i.yPercent,
      s = i.x,
      a = i.y,
      o = i.z,
      f = i.rotation,
      h = i.rotationY,
      l = i.rotationX,
      c = i.skewX,
      d = i.skewY,
      m = i.scaleX,
      _ = i.scaleY,
      p = i.transformPerspective,
      v = i.force3D,
      g = i.target,
      x = i.zOrigin,
      T = "",
      y = (v === "auto" && t && t !== 1) || v === !0;
    if (x && (l !== At || h !== At)) {
      var b = parseFloat(h) * $t,
        P = Math.sin(b),
        S = Math.cos(b),
        w;
      (b = parseFloat(l) * $t),
        (w = Math.cos(b)),
        (s = Ne(g, s, P * w * -x)),
        (a = Ne(g, a, -Math.sin(b) * -x)),
        (o = Ne(g, o, S * w * -x + x));
    }
    p !== ee && (T += "perspective(" + p + Rt),
      (r || n) && (T += "translate(" + r + "%, " + n + "%) "),
      (y || s !== ee || a !== ee || o !== ee) &&
        (T +=
          o !== ee || y
            ? "translate3d(" + s + ", " + a + ", " + o + ") "
            : "translate(" + s + ", " + a + Rt),
      f !== At && (T += "rotate(" + f + Rt),
      h !== At && (T += "rotateY(" + h + Rt),
      l !== At && (T += "rotateX(" + l + Rt),
      (c !== At || d !== At) && (T += "skew(" + c + ", " + d + Rt),
      (m !== 1 || _ !== 1) && (T += "scale(" + m + ", " + _ + Rt),
      (g.style[F] = T || "translate(0, 0)");
  },
  Hn = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      n = i.yPercent,
      s = i.x,
      a = i.y,
      o = i.rotation,
      f = i.skewX,
      h = i.skewY,
      l = i.scaleX,
      c = i.scaleY,
      d = i.target,
      m = i.xOrigin,
      _ = i.yOrigin,
      p = i.xOffset,
      v = i.yOffset,
      g = i.forceCSS,
      x = parseFloat(s),
      T = parseFloat(a),
      y,
      b,
      P,
      S,
      w;
    (o = parseFloat(o)),
      (f = parseFloat(f)),
      (h = parseFloat(h)),
      h && ((h = parseFloat(h)), (f += h), (o += h)),
      o || f
        ? ((o *= $t),
          (f *= $t),
          (y = Math.cos(o) * l),
          (b = Math.sin(o) * l),
          (P = Math.sin(o - f) * -c),
          (S = Math.cos(o - f) * c),
          f &&
            ((h *= $t),
            (w = Math.tan(f - h)),
            (w = Math.sqrt(1 + w * w)),
            (P *= w),
            (S *= w),
            h &&
              ((w = Math.tan(h)),
              (w = Math.sqrt(1 + w * w)),
              (y *= w),
              (b *= w))),
          (y = I(y)),
          (b = I(b)),
          (P = I(P)),
          (S = I(S)))
        : ((y = l), (S = c), (b = P = 0)),
      ((x && !~(s + "").indexOf("px")) || (T && !~(a + "").indexOf("px"))) &&
        ((x = kt(d, "x", s, "px")), (T = kt(d, "y", a, "px"))),
      (m || _ || p || v) &&
        ((x = I(x + m - (m * y + _ * P) + p)),
        (T = I(T + _ - (m * b + _ * S) + v))),
      (r || n) &&
        ((w = d.getBBox()),
        (x = I(x + (r / 100) * w.width)),
        (T = I(T + (n / 100) * w.height))),
      (w =
        "matrix(" + y + "," + b + "," + P + "," + S + "," + x + "," + T + ")"),
      d.setAttribute("transform", w),
      g && (d.style[F] = w);
  },
  jn = function (t, e, i, r, n) {
    var s = 360,
      a = X(n),
      o = parseFloat(n) * (a && ~n.indexOf("rad") ? Et : 1),
      f = o - r,
      h = r + f + "deg",
      l,
      c;
    return (
      a &&
        ((l = n.split("_")[1]),
        l === "short" && ((f %= s), f !== f % (s / 2) && (f += f < 0 ? s : -s)),
        l === "cw" && f < 0
          ? (f = ((f + s * Ci) % s) - ~~(f / s) * s)
          : l === "ccw" && f > 0 && (f = ((f - s * Ci) % s) - ~~(f / s) * s)),
      (t._pt = c = new Q(t._pt, e, i, r, f, Rn)),
      (c.e = h),
      (c.u = "deg"),
      t._props.push(i),
      c
    );
  },
  zi = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  Kn = function (t, e, i) {
    var r = zi({}, i._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      s = i.style,
      a,
      o,
      f,
      h,
      l,
      c,
      d,
      m;
    r.svg
      ? ((f = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (s[F] = e),
        (a = ce(i, 1)),
        Vt(i, F),
        i.setAttribute("transform", f))
      : ((f = getComputedStyle(i)[F]), (s[F] = e), (a = ce(i, 1)), (s[F] = f));
    for (o in xt)
      (f = r[o]),
        (h = a[o]),
        f !== h &&
          n.indexOf(o) < 0 &&
          ((d = G(f)),
          (m = G(h)),
          (l = d !== m ? kt(i, o, f, m) : parseFloat(f)),
          (c = parseFloat(h)),
          (t._pt = new Q(t._pt, a, o, l, c - l, Qe)),
          (t._pt.u = m || 0),
          t._props.push(o));
    zi(a, r);
  };
K("padding,margin,Width,Radius", function (u, t) {
  var e = "Top",
    i = "Right",
    r = "Bottom",
    n = "Left",
    s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function (a) {
      return t < 2 ? u + a : "border" + a + u;
    });
  Oe[t > 1 ? "border" + u : u] = function (a, o, f, h, l) {
    var c, d;
    if (arguments.length < 4)
      return (
        (c = s.map(function (m) {
          return yt(a, m, f);
        })),
        (d = c.join(" ")),
        d.split(c[0]).length === 5 ? c[0] : d
      );
    (c = (h + "").split(" ")),
      (d = {}),
      s.forEach(function (m, _) {
        return (d[m] = c[_] = c[_] || c[((_ - 1) / 2) | 0]);
      }),
      a.init(o, d, l);
  };
});
var Er = {
  name: "css",
  register: Je,
  targetTest: function (t) {
    return t.style && t.nodeType;
  },
  init: function (t, e, i, r, n) {
    var s = this._props,
      a = t.style,
      o = i.vars.startAt,
      f,
      h,
      l,
      c,
      d,
      m,
      _,
      p,
      v,
      g,
      x,
      T,
      y,
      b,
      P,
      S;
    di || Je(),
      (this.styles = this.styles || Or(t)),
      (S = this.styles.props),
      (this.tween = i);
    for (_ in e)
      if (_ !== "autoRound" && ((h = e[_]), !(et[_] && pr(_, e, i, r, t, n)))) {
        if (
          ((d = typeof h),
          (m = Oe[_]),
          d === "function" && ((h = h.call(i, r, t, n)), (d = typeof h)),
          d === "string" && ~h.indexOf("random(") && (h = fe(h)),
          m)
        )
          m(this, t, _, h, i) && (P = 1);
        else if (_.substr(0, 2) === "--")
          (f = (getComputedStyle(t).getPropertyValue(_) + "").trim()),
            (h += ""),
            (St.lastIndex = 0),
            St.test(f) || ((p = G(f)), (v = G(h))),
            v ? p !== v && (f = kt(t, _, f, v) + v) : p && (h += p),
            this.add(a, "setProperty", f, h, r, n, 0, 0, _),
            s.push(_),
            S.push(_, 0, a[_]);
        else if (d !== "undefined") {
          if (
            (o && _ in o
              ? ((f = typeof o[_] == "function" ? o[_].call(i, r, t, n) : o[_]),
                X(f) && ~f.indexOf("random(") && (f = fe(f)),
                G(f + "") ||
                  f === "auto" ||
                  (f += nt.units[_] || G(yt(t, _)) || ""),
                (f + "").charAt(1) === "=" && (f = yt(t, _)))
              : (f = yt(t, _)),
            (c = parseFloat(f)),
            (g = d === "string" && h.charAt(1) === "=" && h.substr(0, 2)),
            g && (h = h.substr(2)),
            (l = parseFloat(h)),
            _ in ct &&
              (_ === "autoAlpha" &&
                (c === 1 && yt(t, "visibility") === "hidden" && l && (c = 0),
                S.push("visibility", 0, a.visibility),
                bt(
                  this,
                  a,
                  "visibility",
                  c ? "inherit" : "hidden",
                  l ? "inherit" : "hidden",
                  !l
                )),
              _ !== "scale" &&
                _ !== "transform" &&
                ((_ = ct[_]), ~_.indexOf(",") && (_ = _.split(",")[0]))),
            (x = _ in xt),
            x)
          ) {
            if (
              (this.styles.save(_),
              T ||
                ((y = t._gsap),
                (y.renderTransform && !e.parseTransform) ||
                  ce(t, e.parseTransform),
                (b = e.smoothOrigin !== !1 && y.smooth),
                (T = this._pt =
                  new Q(this._pt, a, F, 0, 1, y.renderTransform, y, 0, -1)),
                (T.dep = 1)),
              _ === "scale")
            )
              (this._pt = new Q(
                this._pt,
                y,
                "scaleY",
                y.scaleY,
                (g ? Gt(y.scaleY, g + l) : l) - y.scaleY || 0,
                Qe
              )),
                (this._pt.u = 0),
                s.push("scaleY", _),
                (_ += "X");
            else if (_ === "transformOrigin") {
              S.push(Z, 0, a[Z]),
                (h = Gn(h)),
                y.svg
                  ? ti(t, h, 0, b, 0, this)
                  : ((v = parseFloat(h.split(" ")[2]) || 0),
                    v !== y.zOrigin && bt(this, y, "zOrigin", y.zOrigin, v),
                    bt(this, a, _, ke(f), ke(h)));
              continue;
            } else if (_ === "svgOrigin") {
              ti(t, h, 1, b, 0, this);
              continue;
            } else if (_ in Dr) {
              jn(this, y, _, c, g ? Gt(c, g + h) : h);
              continue;
            } else if (_ === "smoothOrigin") {
              bt(this, y, "smooth", y.smooth, h);
              continue;
            } else if (_ === "force3D") {
              y[_] = h;
              continue;
            } else if (_ === "transform") {
              Kn(this, h, t);
              continue;
            }
          } else _ in a || (_ = Zt(_) || _);
          if (x || ((l || l === 0) && (c || c === 0) && !An.test(h) && _ in a))
            (p = (f + "").substr((c + "").length)),
              l || (l = 0),
              (v = G(h) || (_ in nt.units ? nt.units[_] : p)),
              p !== v && (c = kt(t, _, f, v)),
              (this._pt = new Q(
                this._pt,
                x ? y : a,
                _,
                c,
                (g ? Gt(c, g + l) : l) - c,
                !x && (v === "px" || _ === "zIndex") && e.autoRound !== !1
                  ? zn
                  : Qe
              )),
              (this._pt.u = v || 0),
              p !== v && v !== "%" && ((this._pt.b = f), (this._pt.r = En));
          else if (_ in a) qn.call(this, t, _, f, g ? g + h : h);
          else if (_ in t) this.add(t, _, f || t[_], g ? g + h : h, r, n);
          else if (_ !== "parseTransform") {
            si(_, h);
            continue;
          }
          x || (_ in a ? S.push(_, 0, a[_]) : S.push(_, 1, f || t[_])),
            s.push(_);
        }
      }
    P && Tr(this);
  },
  render: function (t, e) {
    if (e.tween._time || !pi())
      for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
    else e.styles.revert();
  },
  get: yt,
  aliases: ct,
  getSetter: function (t, e, i) {
    var r = ct[e];
    return (
      r && r.indexOf(",") < 0 && (e = r),
      e in xt && e !== Z && (t._gsap.x || yt(t, "x"))
        ? i && ki === i
          ? e === "scale"
            ? Bn
            : In
          : (ki = i || {}) && (e === "scale" ? Nn : Vn)
        : t.style && !ii(t.style[e])
        ? Fn
        : ~e.indexOf("-")
        ? Ln
        : li(t, e)
    );
  },
  core: { _removeProperty: Vt, _getMatrix: gi },
};
J.utils.checkPrefix = Zt;
J.core.getStyleSaver = Or;
(function (u, t, e, i) {
  var r = K(u + "," + t + "," + e, function (n) {
    xt[n] = 1;
  });
  K(t, function (n) {
    (nt.units[n] = "deg"), (Dr[n] = 1);
  }),
    (ct[r[13]] = u + "," + t),
    K(i, function (n) {
      var s = n.split(":");
      ct[s[1]] = r[s[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
K(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (u) {
    nt.units[u] = "px";
  }
);
J.registerPlugin(Er);
var tt = J.registerPlugin(Er) || J;
tt.core.Tween;
function Qn(u, t) {
  (u = tt.utils.toArray(u)), (t = t || {});
  let e = tt.timeline({
      repeat: t.repeat,
      paused: t.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => e.totalTime(e.rawTime() + e.duration() * 100),
    }),
    i = u.length,
    r = u[0].offsetLeft,
    n = [],
    s = [],
    a = [],
    o = 0,
    f = (t.speed || 1) * 100,
    h = t.snap === !1 ? (g) => g : tt.utils.snap(t.snap || 1),
    l,
    c,
    d,
    m,
    _,
    p;
  for (
    tt.set(u, {
      xPercent: (g, x) => {
        let T = (s[g] = parseFloat(tt.getProperty(x, "width", "px")));
        return (
          (a[g] = h(
            (parseFloat(tt.getProperty(x, "x", "px")) / T) * 100 +
              tt.getProperty(x, "xPercent")
          )),
          a[g]
        );
      },
    }),
      tt.set(u, { x: 0 }),
      l =
        u[i - 1].offsetLeft +
        (a[i - 1] / 100) * s[i - 1] -
        r +
        u[i - 1].offsetWidth * tt.getProperty(u[i - 1], "scaleX") +
        (parseFloat(t.paddingRight) || 0),
      p = 0;
    p < i;
    p++
  )
    (_ = u[p]),
      (c = (a[p] / 100) * s[p]),
      (d = _.offsetLeft + c - r),
      (m = d + s[p] * tt.getProperty(_, "scaleX")),
      e
        .to(_, { xPercent: h(((c - m) / s[p]) * 100), duration: m / f }, 0)
        .fromTo(
          _,
          { xPercent: h(((c - m + l) / s[p]) * 100) },
          {
            xPercent: a[p],
            duration: (c - m + l - c) / f,
            immediateRender: !1,
          },
          m / f
        )
        .add("label" + p, d / f),
      (n[p] = d / f);
  function v(g, x) {
    (x = x || {}), Math.abs(g - o) > i / 2 && (g += g > o ? -i : i);
    let T = tt.utils.wrap(0, i, g),
      y = n[T];
    return (
      y > e.time() != g > o &&
        ((x.modifiers = { time: tt.utils.wrap(0, e.duration()) }),
        (y += e.duration() * (g > o ? 1 : -1))),
      (o = T),
      (x.overwrite = !0),
      e.tweenTo(y, x)
    );
  }
  return (
    (e.next = (g) => v(o + 1, g)),
    (e.previous = (g) => v(o - 1, g)),
    (e.current = () => o),
    (e.toIndex = (g, x) => v(g, x)),
    (e.times = n),
    e.progress(1, !0).progress(0, !0),
    t.reversed && (e.vars.onReverseComplete(), e.reverse()),
    e
  );
}
const Zn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, horizontalLoop: Qn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Jn = zr(Zn);
var ts = Jn;
class ss {
  constructor(t) {
    this.DOM = { element: t.element };
    var e = Fr(t.reversed);
    (this.reversed = t.reversed === void 0 || t.reversed === null ? !1 : e),
      (this.speed = t.speed === void 0 ? 1 : t.speed),
      (this.controlsOnHover =
        t.controlsOnHover === void 0 ? !1 : t.controlsOnHover),
      this.init(),
      this.events();
  }
  events() {
    this.controlsOnHover &&
      (this.DOM.element.addEventListener("mouseenter", () =>
        me.to(this.loop, { timeScale: 0, overwrite: !0 })
      ),
      this.DOM.element.addEventListener("mouseleave", () =>
        me.to(this.loop, { timeScale: 1, overwrite: !0 })
      ));
  }
  init() {
    this.loop = ts.horizontalLoop(this.DOM.element.children, {
      paused: !1,
      repeat: -1,
      reversed: this.reversed,
      speed: this.speed,
    });
  }
  destroy() {
    (this.speed = null), this.loop.clear();
  }
  pause() {
    me.to(this.loop, { timeScale: 0, overwrite: !0 });
  }
  play() {
    me.to(this.loop, { timeScale: 1, overwrite: !0 });
  }
}
export { ss as default };
