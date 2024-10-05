import { _ as J } from "./preload-helper.cf010ec4.js";
import { g as C } from "./index.4db78ffb.js";
import { a as Te } from "./_commonjsHelpers.de833af9.js";
/*!
 * strings: 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Me = /(?:^\s+|\s+$)/g,
  ge =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function ne(u) {
  var e = u.nodeType,
    t = "";
  if (e === 1 || e === 9 || e === 11) {
    if (typeof u.textContent == "string") return u.textContent;
    for (u = u.firstChild; u; u = u.nextSibling) t += ne(u);
  } else if (e === 3 || e === 4) return u.nodeValue;
  return t;
}
function ie(u, e, t, s) {
  for (var i = u.firstChild, r = [], o; i; )
    i.nodeType === 3
      ? ((o = (i.nodeValue + "").replace(/^\n+/g, "")),
        s || (o = o.replace(/\s+/g, " ")),
        r.push.apply(r, me(o, e, t, s)))
      : (i.nodeName + "").toLowerCase() === "br"
      ? (r[r.length - 1] += "<br>")
      : r.push(i.outerHTML),
      (i = i.nextSibling);
  for (o = r.length; o--; ) r[o] === "&" && r.splice(o, 1, "&amp;");
  return r;
}
function me(u, e, t, s) {
  if (
    ((u += ""), t && (u = u.trim ? u.trim() : u.replace(Me, "")), e && e !== "")
  )
    return u.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
  for (var i = [], r = u.length, o = 0, D, a; o < r; o++)
    (a = u.charAt(o)),
      ((a.charCodeAt(0) >= 55296 && a.charCodeAt(0) <= 56319) ||
        (u.charCodeAt(o + 1) >= 65024 && u.charCodeAt(o + 1) <= 65039)) &&
        ((D = ((u.substr(o, 12).split(ge) || [])[1] || "").length || 2),
        (a = u.substr(o, D)),
        (i.emoji = 1),
        (o += D - 1)),
      i.push(
        a === ">"
          ? "&gt;"
          : a === "<"
          ? "&lt;"
          : s &&
            a === " " &&
            (u.charAt(o - 1) === " " || u.charAt(o + 1) === " ")
          ? "&nbsp;"
          : a
      );
  return i;
}
/*!
 * SplitText: 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var q,
  re,
  ye,
  V,
  be,
  te,
  Oe = /(?:\r|\n|\t\t)/g,
  ke = /(?:\s\s+)/g,
  ve = function (e) {
    (q = document),
      (re = window),
      (V =
        V ||
        e ||
        re.gsap ||
        console.warn("Please gsap.registerPlugin(SplitText)")),
      V &&
        ((te = V.utils.toArray),
        (be = V.core.context || function () {}),
        (ye = 1));
  },
  we = function (e) {
    return re.getComputedStyle(e);
  },
  oe = function (e) {
    return e.position === "absolute" || e.absolute === !0;
  },
  Le = function (e, t) {
    for (var s = t.length, i; --s > -1; )
      if (((i = t[s]), e.substr(0, i.length) === i)) return i.length;
  },
  $e = " style='position:relative;display:inline-block;'",
  pe = function (e, t) {
    e === void 0 && (e = "");
    var s = ~e.indexOf("++"),
      i = 1;
    return (
      s && (e = e.split("++").join("")),
      function () {
        return (
          "<" + t + $e + (e ? " class='" + e + (s ? i++ : "") + "'>" : ">")
        );
      }
    );
  },
  Ae = function u(e, t, s) {
    var i = e.nodeType;
    if (i === 1 || i === 9 || i === 11)
      for (e = e.firstChild; e; e = e.nextSibling) u(e, t, s);
    else (i === 3 || i === 4) && (e.nodeValue = e.nodeValue.split(t).join(s));
  },
  ue = function (e, t) {
    for (var s = t.length; --s > -1; ) e.push(t[s]);
  },
  fe = function (e, t, s) {
    for (var i; e && e !== t; ) {
      if (((i = e._next || e.nextSibling), i))
        return i.textContent.charAt(0) === s;
      e = e.parentNode || e._parent;
    }
  },
  Ne = function u(e) {
    var t = te(e.childNodes),
      s = t.length,
      i,
      r;
    for (i = 0; i < s; i++)
      (r = t[i]),
        r._isSplit
          ? u(r)
          : i && r.previousSibling && r.previousSibling.nodeType === 3
          ? ((r.previousSibling.nodeValue +=
              r.nodeType === 3 ? r.nodeValue : r.firstChild.nodeValue),
            e.removeChild(r))
          : r.nodeType !== 3 &&
            (e.insertBefore(r.firstChild, r), e.removeChild(r));
  },
  B = function (e, t) {
    return parseFloat(t[e]) || 0;
  },
  Ie = function (e, t, s, i, r, o, D) {
    var a = we(e),
      l = B("paddingLeft", a),
      h = -999,
      T = B("borderBottomWidth", a) + B("borderTopWidth", a),
      w = B("borderLeftWidth", a) + B("borderRightWidth", a),
      m = B("paddingTop", a) + B("paddingBottom", a),
      c = B("paddingLeft", a) + B("paddingRight", a),
      p = B("fontSize", a) * (t.lineThreshold || 0.2),
      d = a.textAlign,
      b = [],
      S = [],
      E = [],
      v = t.wordDelimiter || " ",
      $ = t.tag ? t.tag : t.span ? "span" : "div",
      I = t.type || t.split || "chars,words,lines",
      y = r && ~I.indexOf("lines") ? [] : null,
      M = ~I.indexOf("words"),
      H = ~I.indexOf("chars"),
      A = oe(t),
      G = t.linesClass,
      le = ~(G || "").indexOf("++"),
      X = [],
      ae = a.display === "flex",
      ce = e.style.display,
      f,
      g,
      O,
      n,
      R,
      k,
      P,
      de,
      L,
      F,
      he,
      _;
    for (
      le && (G = G.split("++").join("")),
        ae && (e.style.display = "block"),
        g = e.getElementsByTagName("*"),
        O = g.length,
        R = [],
        f = 0;
      f < O;
      f++
    )
      R[f] = g[f];
    if (y || A)
      for (f = 0; f < O; f++)
        (n = R[f]),
          (k = n.parentNode === e),
          (k || A || (H && !M)) &&
            ((_ = n.offsetTop),
            y &&
              k &&
              Math.abs(_ - h) > p &&
              (n.nodeName !== "BR" || f === 0) &&
              ((P = []), y.push(P), (h = _)),
            A &&
              ((n._x = n.offsetLeft),
              (n._y = _),
              (n._w = n.offsetWidth),
              (n._h = n.offsetHeight)),
            y &&
              (((n._isSplit && k) ||
                (!H && k) ||
                (M && k) ||
                (!M &&
                  n.parentNode.parentNode === e &&
                  !n.parentNode._isSplit)) &&
                (P.push(n), (n._x -= l), fe(n, e, v) && (n._wordEnd = !0)),
              n.nodeName === "BR" &&
                ((n.nextSibling && n.nextSibling.nodeName === "BR") ||
                  f === 0) &&
                y.push([])));
    for (f = 0; f < O; f++) {
      if (((n = R[f]), (k = n.parentNode === e), n.nodeName === "BR")) {
        y || A
          ? (n.parentNode && n.parentNode.removeChild(n), R.splice(f--, 1), O--)
          : M || e.appendChild(n);
        continue;
      }
      if (
        (A &&
          ((L = n.style),
          !M && !k && ((n._x += n.parentNode._x), (n._y += n.parentNode._y)),
          (L.left = n._x + "px"),
          (L.top = n._y + "px"),
          (L.position = "absolute"),
          (L.display = "block"),
          (L.width = n._w + 1 + "px"),
          (L.height = n._h + "px")),
        !M && H)
      )
        if (n._isSplit)
          for (
            n._next = g = n.nextSibling, n.parentNode.appendChild(n);
            g && g.nodeType === 3 && g.textContent === " ";

          )
            (n._next = g.nextSibling),
              n.parentNode.appendChild(g),
              (g = g.nextSibling);
        else
          n.parentNode._isSplit
            ? ((n._parent = n.parentNode),
              !n.previousSibling &&
                n.firstChild &&
                (n.firstChild._isFirst = !0),
              n.nextSibling &&
                n.nextSibling.textContent === " " &&
                !n.nextSibling.nextSibling &&
                X.push(n.nextSibling),
              (n._next =
                n.nextSibling && n.nextSibling._isFirst ? null : n.nextSibling),
              n.parentNode.removeChild(n),
              R.splice(f--, 1),
              O--)
            : k ||
              ((_ = !n.nextSibling && fe(n.parentNode, e, v)),
              n.parentNode._parent && n.parentNode._parent.appendChild(n),
              _ && n.parentNode.appendChild(q.createTextNode(" ")),
              $ === "span" && (n.style.display = "inline"),
              b.push(n));
      else
        n.parentNode._isSplit && !n._isSplit && n.innerHTML !== ""
          ? S.push(n)
          : H &&
            !n._isSplit &&
            ($ === "span" && (n.style.display = "inline"), b.push(n));
    }
    for (f = X.length; --f > -1; ) X[f].parentNode.removeChild(X[f]);
    if (y) {
      for (
        A &&
          ((F = q.createElement($)),
          e.appendChild(F),
          (he = F.offsetWidth + "px"),
          (_ = F.offsetParent === e ? 0 : e.offsetLeft),
          e.removeChild(F)),
          L = e.style.cssText,
          e.style.cssText = "display:none;";
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (de = v === " " && (!A || (!M && !H)), f = 0; f < y.length; f++) {
        for (
          P = y[f],
            F = q.createElement($),
            F.style.cssText =
              "display:block;text-align:" +
              d +
              ";position:" +
              (A ? "absolute;" : "relative;"),
            G && (F.className = G + (le ? f + 1 : "")),
            E.push(F),
            O = P.length,
            g = 0;
          g < O;
          g++
        )
          P[g].nodeName !== "BR" &&
            ((n = P[g]),
            F.appendChild(n),
            de && n._wordEnd && F.appendChild(q.createTextNode(" ")),
            A &&
              (g === 0 &&
                ((F.style.top = n._y + "px"), (F.style.left = l + _ + "px")),
              (n.style.top = "0px"),
              _ && (n.style.left = n._x - _ + "px")));
        O === 0
          ? (F.innerHTML = "&nbsp;")
          : !M && !H && (Ne(F), Ae(F, String.fromCharCode(160), " ")),
          A && ((F.style.width = he), (F.style.height = n._h + "px")),
          e.appendChild(F);
      }
      e.style.cssText = L;
    }
    A &&
      (D > e.clientHeight &&
        ((e.style.height = D - m + "px"),
        e.clientHeight < D && (e.style.height = D + T + "px")),
      o > e.clientWidth &&
        ((e.style.width = o - c + "px"),
        e.clientWidth < o && (e.style.width = o + w + "px"))),
      ae && (ce ? (e.style.display = ce) : e.style.removeProperty("display")),
      ue(s, b),
      M && ue(i, S),
      ue(r, E);
  },
  Pe = function (e, t, s, i) {
    var r = t.tag ? t.tag : t.span ? "span" : "div",
      o = t.type || t.split || "chars,words,lines",
      D = ~o.indexOf("chars"),
      a = oe(t),
      l = t.wordDelimiter || " ",
      h = l !== " " ? "" : a ? "&#173; " : " ",
      T = "</" + r + ">",
      w = 1,
      m = t.specialChars
        ? typeof t.specialChars == "function"
          ? t.specialChars
          : Le
        : null,
      c,
      p,
      d,
      b,
      S,
      E,
      v,
      $,
      I = q.createElement("div"),
      y = e.parentNode;
    for (
      y.insertBefore(I, e),
        I.textContent = e.nodeValue,
        y.removeChild(e),
        e = I,
        c = ne(e),
        v = c.indexOf("<") !== -1,
        t.reduceWhiteSpace !== !1 && (c = c.replace(ke, " ").replace(Oe, "")),
        v && (c = c.split("<").join("{{LT}}")),
        S = c.length,
        p = (c.charAt(0) === " " ? h : "") + s(),
        d = 0;
      d < S;
      d++
    )
      if (((E = c.charAt(d)), m && ($ = m(c.substr(d), t.specialChars))))
        (E = c.substr(d, $ || 1)),
          (p += D && E !== " " ? i() + E + "</" + r + ">" : E),
          (d += $ - 1);
      else if (E === l && c.charAt(d - 1) !== l && d) {
        for (p += w ? T : "", w = 0; c.charAt(d + 1) === l; ) (p += h), d++;
        d === S - 1
          ? (p += h)
          : c.charAt(d + 1) !== ")" && ((p += h + s()), (w = 1));
      } else
        E === "{" && c.substr(d, 6) === "{{LT}}"
          ? ((p += D ? i() + "{{LT}}</" + r + ">" : "{{LT}}"), (d += 5))
          : (E.charCodeAt(0) >= 55296 && E.charCodeAt(0) <= 56319) ||
            (c.charCodeAt(d + 1) >= 65024 && c.charCodeAt(d + 1) <= 65039)
          ? ((b = ((c.substr(d, 12).split(ge) || [])[1] || "").length || 2),
            (p +=
              D && E !== " "
                ? i() + c.substr(d, b) + "</" + r + ">"
                : c.substr(d, b)),
            (d += b - 1))
          : (p += D && E !== " " ? i() + E + "</" + r + ">" : E);
    (e.outerHTML = p + (w ? T : "")), v && Ae(y, "{{LT}}", "<");
  },
  je = function u(e, t, s, i) {
    var r = te(e.childNodes),
      o = r.length,
      D = oe(t),
      a,
      l;
    if (e.nodeType !== 3 || o > 1) {
      for (t.absolute = !1, a = 0; a < o; a++)
        (l = r[a]),
          (l._next = l._isFirst = l._parent = l._wordEnd = null),
          (l.nodeType !== 3 || /\S+/.test(l.nodeValue)) &&
            (D &&
              l.nodeType !== 3 &&
              we(l).display === "inline" &&
              ((l.style.display = "inline-block"),
              (l.style.position = "relative")),
            (l._isSplit = !0),
            u(l, t, s, i));
      (t.absolute = D), (e._isSplit = !0);
      return;
    }
    Pe(e, t, s, i);
  },
  De = (function () {
    function u(t, s) {
      ye || ve(),
        (this.elements = te(t)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this._originals = []),
        (this.vars = s || {}),
        be(this),
        this.split(s);
    }
    var e = u.prototype;
    return (
      (e.split = function (s) {
        this.isSplit && this.revert(),
          (this.vars = s = s || this.vars),
          (this._originals.length =
            this.chars.length =
            this.words.length =
            this.lines.length =
              0);
        for (
          var i = this.elements.length,
            r = s.tag ? s.tag : s.span ? "span" : "div",
            o = pe(s.wordsClass, r),
            D = pe(s.charsClass, r),
            a,
            l,
            h;
          --i > -1;

        )
          (h = this.elements[i]),
            (this._originals[i] = h.innerHTML),
            (a = h.clientHeight),
            (l = h.clientWidth),
            je(h, s, o, D),
            Ie(h, s, this.chars, this.words, this.lines, l, a);
        return (
          this.chars.reverse(),
          this.words.reverse(),
          this.lines.reverse(),
          (this.isSplit = !0),
          this
        );
      }),
      (e.revert = function () {
        var s = this._originals;
        if (!s) throw "revert() call wasn't scoped properly.";
        return (
          this.elements.forEach(function (i, r) {
            return (i.innerHTML = s[r]);
          }),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this.isSplit = !1),
          this
        );
      }),
      (u.create = function (s, i) {
        return new u(s, i);
      }),
      u
    );
  })();
De.version = "3.12.2";
De.register = ve;
const He = (u) => ({ x: u.clientX, y: u.clientY }),
  Re = () => ({ width: window.innerWidth, height: window.innerHeight }),
  qe = (u, e) => Math.floor(Math.random() * (e - u + 1) + u),
  We = (u, e, t) => (1 - t) * u + t * e,
  Ge = (u, e, t, s, i) => ((u - e) * (i - s)) / (t - e) + s,
  Ve = (u, e, t) => {
    const s = Math.max(0, Math.min(1, (t - u) / (e - u)));
    return s * s * (3 - 2 * s);
  },
  ze = (u, e, t) => Math.max(e, Math.min(t, u)),
  Ue = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        calcWinsize: Re,
        clamp: ze,
        getMousePos: He,
        lerp: We,
        map: Ge,
        randomInRange: qe,
        smoothstep: Ve,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ke = Te(Ue);
var z = Ke;
function W(u) {
  return typeof u == "object" ? [u] : document.querySelectorAll(u);
}
function vt(u, e = null) {
  W(u).forEach((t) => {
    e.forEach((s) => {
      for (const i in s) {
        const r = s[i];
        t.style[i] = typeof r == "number" ? `${r}px` : r;
      }
    });
  });
}
function Ye(u, e) {
  const t = W(u),
    s = e.split(" ");
  for (let i = 0; i < t.length; i++)
    s.forEach((r) => {
      t[i].classList ? t[i].classList.add(r) : (t[i].className += " " + r);
    });
}
function xe(u, e) {
  const t = W(u),
    s = e.split(" ");
  for (let i = 0; i < t.length; i++)
    s.forEach((r) => {
      t[i].classList ? t[i].classList.remove(r) : (t[i].className += " " + r);
    });
}
function wt(u, e, t = "class") {
  const s = W(u);
  let i = !1;
  return (
    typeof e == "string" &&
      t === "class" &&
      e.includes(" ") &&
      (e = e.split(" ")),
    s.forEach((r) => {
      if (!i)
        if (Array.isArray(e))
          if (t === "class") {
            const o = Array.from(r.classList);
            i = e.every((D) => o.includes(D));
          } else {
            const o = r.getAttribute(t);
            i = e.some((D) => D === o);
          }
        else
          t === "class"
            ? (i = r.classList.contains(e))
            : (i = r.getAttribute(t) === e);
    }),
    i
  );
}
function At(u, e) {
  const t = W(u)[0];
  return t ? t.getAttribute(e) : null;
}
function xt(u, e, t) {
  W(u).forEach((s) => {
    s.setAttribute(e, t);
  });
}
function St(u) {
  const e = u.toLowerCase();
  if (e === "true" || e === "1") return !0;
  if (e === "false" || e === "0") return !1;
  throw new Error(
    'Invalid input. Only "true", "false", "1", or "0" are allowed.'
  );
}
function _t(u) {
  var e = navigator.userAgent || navigator.vendor || window.opera;
  switch (u) {
    case "touch":
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    case "android":
      return /android/i.test(e);
    case "ios":
      return typeof navigator.standalone == "boolean";
    default:
      return !0;
  }
}
async function Bt(u = 100) {
  return new Promise((e, t) => {
    isNaN(u) ? t(new Error("is not a number")) : setTimeout(e, u);
  });
}
class Xe {
  constructor(e) {
    (this.DOM = {
      parent: e.parent,
      cellsGrid: e.cellsGrid,
      header: e.header || null,
      banner: e.banner || null,
      inner: null,
      cells: null,
    }),
      (this.DOM.inner = this.DOM.cellsGrid.querySelector(
        ".c--cursor-a__wrapper"
      )),
      (this.columns = getComputedStyle(this.DOM.cellsGrid).getPropertyValue(
        "--columns"
      )),
      (this.gridSettings = { cellSize: null, rows: null, columns: null }),
      (this.tl = { delay: 0.6, opacity: 0 }),
      (this.cachedCell = null),
      (this.mousepos = { x: 0, y: 0 }),
      this.init();
  }
  getGridSettings() {
    return this.gridSettings;
  }
  init() {
    this.buildLayout();
  }
  buildLayout() {
    (this.gridSettings.cellSize = z.calcWinsize().width / this.columns),
      (this.gridSettings.rows = Math.ceil(
        z.calcWinsize().height / this.gridSettings.cellSize
      )),
      (this.cellsTotal = this.gridSettings.rows * this.columns);
    let e = "";
    this.DOM.inner.innerHTML = "";
    for (let t = 0; t < this.cellsTotal; ++t)
      e += `<div class="c--cursor-a__wrapper__item c--cursor-a__wrapper__item--${z.randomInRange(
        1,
        12
      )}"></div>`;
    (this.DOM.inner.innerHTML = e), (this.DOM.cells = this.DOM.inner.children);
  }
  events() {
    window.addEventListener("resize", () => this.buildLayout());
    const e = () => {
      const t = this.getCellAtCursor();
      t === null ||
        this.cachedCell === t ||
        ((this.cachedCell = t),
        C.set(t, { opacity: 1 }),
        C.set(t, {
          delay: 0.6,
          opacity: 0,
          onComplete: () => {
            for (let r = 1; r <= 12; r++) {
              const o = `c--cursor-a__wrapper__item--${r}`;
              xe(t, o);
            }
            const i = `c--cursor-a__wrapper__item--${z.randomInRange(1, 12)}`;
            Ye(t, i);
          },
        }));
    };
    this.DOM.parent.addEventListener("mousemove", (t) =>
      this.updateMousePos(t)
    ),
      this.DOM.parent.addEventListener(
        "pointermove",
        (t) => this.updateMousePos(t),
        { passive: !0 }
      ),
      this.DOM.parent.addEventListener("mousemove", e),
      this.DOM.parent.addEventListener("pointermove", e, { passive: !0 });
  }
  updateMousePos(e) {
    (this.mousepos = z.getMousePos(e)),
      this.DOM.header &&
        (this.mousepos.y += window.pageYOffset - this.DOM.header.offsetHeight),
      this.DOM.banner &&
        (this.mousepos.y -= this.DOM.banner.offsetHeight * 0.7);
  }
  getCellAtCursor() {
    const e = Math.floor(this.mousepos.x / this.gridSettings.cellSize),
      s =
        Math.floor(this.mousepos.y / this.gridSettings.cellSize) *
          this.columns +
        e;
    return s >= this.cellsTotal || s < 0
      ? (console.log("Cell index out of bounds"), null)
      : this.DOM.cells[s];
  }
  destroy() {
    this.DOM.parent.removeEventListener("mousemove", (e) => {}),
      this.DOM.parent.removeEventListener("pointermove", (e) => {}),
      this.DOM.parent.removeEventListener("mousemove", {}),
      this.DOM.parent.removeEventListener("pointermove", {}, {});
  }
}
/*!
 * TextPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var K,
  Q,
  Je = function () {
    return (
      K || (typeof window < "u" && (K = window.gsap) && K.registerPlugin && K)
    );
  },
  Y = {
    version: "3.12.2",
    name: "text",
    init: function (e, t, s) {
      typeof t != "object" && (t = { value: t });
      var i = e.nodeName.toUpperCase(),
        r = this,
        o = t,
        D = o.newClass,
        a = o.oldClass,
        l = o.preserveSpaces,
        h = o.rtl,
        T = (r.delimiter = t.delimiter || ""),
        w = (r.fillChar = t.fillChar || (t.padSpace ? "&nbsp;" : "")),
        m,
        c,
        p,
        d,
        b,
        S,
        E,
        v;
      if (
        ((r.svg = e.getBBox && (i === "TEXT" || i === "TSPAN")),
        !("innerHTML" in e) && !r.svg)
      )
        return !1;
      if (((r.target = e), !("value" in t))) {
        r.text = r.original = [""];
        return;
      }
      for (
        p = ie(e, T, !1, l),
          Q || (Q = document.createElement("div")),
          Q.innerHTML = t.value,
          c = ie(Q, T, !1, l),
          r.from = s._from,
          (r.from || h) && !(h && r.from) && ((i = p), (p = c), (c = i)),
          r.hasClass = !!(D || a),
          r.newClass = h ? a : D,
          r.oldClass = h ? D : a,
          i = p.length - c.length,
          m = i < 0 ? p : c,
          i < 0 && (i = -i);
        --i > -1;

      )
        m.push(w);
      if (t.type === "diff") {
        for (d = 0, b = [], S = [], E = "", i = 0; i < c.length; i++)
          (v = c[i]),
            v === p[i]
              ? (E += v)
              : ((b[d] = E + v), (S[d++] = E + p[i]), (E = ""));
        (c = b), (p = S), E && (c.push(E), p.push(E));
      }
      t.speed &&
        s.duration(
          Math.min((0.05 / t.speed) * m.length, t.maxDuration || 9999)
        ),
        (r.rtl = h),
        (r.original = p),
        (r.text = c),
        r._props.push("text");
    },
    render: function (e, t) {
      e > 1 ? (e = 1) : e < 0 && (e = 0), t.from && (e = 1 - e);
      var s = t.text,
        i = t.hasClass,
        r = t.newClass,
        o = t.oldClass,
        D = t.delimiter,
        a = t.target,
        l = t.fillChar,
        h = t.original,
        T = t.rtl,
        w = s.length,
        m = ((T ? 1 - e : e) * w + 0.5) | 0,
        c,
        p,
        d;
      i && e
        ? ((c = r && m),
          (p = o && m !== w),
          (d =
            (c ? "<span class='" + r + "'>" : "") +
            s.slice(0, m).join(D) +
            (c ? "</span>" : "") +
            (p ? "<span class='" + o + "'>" : "") +
            D +
            h.slice(m).join(D) +
            (p ? "</span>" : "")))
        : (d = s.slice(0, m).join(D) + D + h.slice(m).join(D)),
        t.svg
          ? (a.textContent = d)
          : (a.innerHTML =
              l === "&nbsp;" && ~d.indexOf("  ")
                ? d.split("  ").join("&nbsp;&nbsp;")
                : d);
    },
  };

Y.splitInnerHTML = ie;
Y.emojiSafeSplit = me;
Y.getText = ne;
Je() && K.registerPlugin(Y);
C.registerPlugin(De);
C.registerPlugin(Y);
class Qe {
  constructor() {
    return (
      (this.DOM = { wearePhrase: document.querySelector(".js-wa") }),
      this.init()
    );
  }
  async init() {
    if (window.innerWidth <= 810) {
      [this.DOM.wearePhrase].forEach((t) => {
        t && (t.style.opacity = 1);
      });
      return;
    }
    return (
      (this.grid = new Xe({
        cellsGrid: document.querySelector(".c--cursor-a"),
        parent: document.querySelector(".c--hero-grid-a"),
        header: document.querySelector(".c--header-a"),
        banner: document.querySelector(".g--banner-01"),
      })),
      (this.DOM.cursorItem = document.querySelectorAll(
        ".c--cursor-a__wrapper__item"
      )),
      (this.tl = C.timeline({
        defaults: { ease: "power2.out", duration: 0.5 },
        onComplete: () => {
          this.fireOtherStuff();
        },
      })),
      this.tl.to(this.DOM.cursorItem, {
        delay: 1,
        ease: "power4",
        opacity: 0.17,
        scale: 1,
        x: 0,
        y: 0,
        stagger: {
          from: "edges",
          each: 0.05,
          grid: [
            this.grid.getGridSettings().rows,
            this.grid.getGridSettings().columns,
          ],
        },
      }),
      this.tl.from(this.DOM.wearePhrase, { opacity: 0, y: 120 }, "<75%"),
      this.tl.to(
        this.DOM.cursorItem,
        {
          ease: "power4",
          opacity: 0,
          stagger: {
            from: "edges",
            each: 0.05,
            grid: [
              this.grid.getGridSettings().rows,
              this.grid.getGridSettings().columns,
            ],
          },
        },
        "<75%"
      ),
      this.tl
    );
  }
  fireOtherStuff() {
    this.grid.events(),
      window.addEventListener("click", () => {
        C.timeline()
          .addLabel("start", 0)
          .to(
            this.grid.DOM.cells,
            {
              duration: 1,
              ease: "power4",
              opacity: 1,
              stagger: {
                from: [...this.grid.DOM.cells].indexOf(
                  this.grid.getCellAtCursor()
                ),
                each: 0.02,
                grid: [
                  this.grid.getGridSettings().rows,
                  this.grid.getGridSettings().columns,
                ],
              },
            },
            "start"
          )
          .to(
            this.grid.DOM.cells,
            {
              duration: 1,
              ease: "power1",
              opacity: 0,
              stagger: {
                from: [...this.grid.DOM.cells].indexOf(
                  this.grid.getCellAtCursor()
                ),
                each: 0.03,
                grid: [
                  this.grid.getGridSettings().rows,
                  this.grid.getGridSettings().columns,
                ],
              },
            },
            "start+=0.3"
          );
      });
  }
  destroy() {
    this.grid.destroy();
  }
}
const Tt = () => {
  let u = document.querySelector(".c--burger-a"),
    e = document.querySelector(".c--nav-a");
  var t = C.timeline({
    defaults: { duration: 0.6, ease: "power2.out" },
    onStart: () => {
      xe(u, "c--burger-a--is-active"), (e.style.pointerEvents = "none");
    },
    onComplete: () => {},
  });
  return (
    t.to(".c--nav-a__ft-items__wrapper__item", {
      stagger: { amount: 0.5, from: "end" },
      opacity: 0,
    }),
    t.to(".c--nav-a__bg-items", { opacity: 0 }),
    t
  );
};
C.registerEffect({
  name: "fadeIn",
  defaults: { duration: 0.6, ease: "power2.out", y: 25, opacity: 0 },
  effect: (u, e) =>
    C.from(u, {
      duration: e.duration,
      ease: e.ease,
      y: e.y,
      opacity: e.opacity,
    }),
  extendTimeline: !0,
});
const Ze = () => {
    var u = C.timeline({});
    return (
      u.add(C.effects.fadeIn(".js--title-a")),
      u.add(C.effects.fadeIn(".js--title-b"), "-=50%"),
      u.add(C.effects.fadeIn(".js--subtitle", { y: 0 }), "-=50%"),
      u
    );
  },
  et = () => {
    var u = C.timeline();
    return (
      u.add(C.effects.fadeIn(".js--title-a")),
      document.querySelector(".js--title-b") &&
        u.add(C.effects.fadeIn(".js--title-b", { y: 0 }), 0.5),
      u.add(C.effects.fadeIn(".js--title-c", { y: 0 }), 0.5),
      u
    );
  },
  tt = () => {
    var u = C.timeline();
    return (
      u.add(C.effects.fadeIn(".js--title-a")),
      u.add(C.effects.fadeIn(".js--title-b", { y: 0 }), 0),
      u
    );
  },
  ut = () => {
    var u = C.timeline();
    return (
      u.add(C.effects.fadeIn(".js--title-a", { y: 0 }), "-=10%"),
      u.add(C.effects.fadeIn(".js--title-b"), "-=50%"),
      document.querySelector(".js--title-c") &&
        u.add(C.effects.fadeIn(".js--title-c", {}), "-=10%"),
      u.add(C.effects.fadeIn(".js--title-d", {}), "-=10%"),
      u
    );
  };
var st = Object.defineProperty,
  it = (u, e, t) =>
    e in u
      ? st(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (u[e] = t),
  ee = (u, e, t) => (it(u, typeof e != "symbol" ? e + "" : e, t), t);
const U = { background: "#b8eba9", color: "#444", padding: "3px" },
  rt = { background: "#7cc28d", color: "#444", padding: "3px" },
  Se = {
    background: "#065205",
    color: "#bada55",
    padding: "3px",
    marginTop: "10px",
  };
function N(u) {
  return Object.entries(u)
    .map(([e, t]) => `${e}: ${t}`)
    .join("; ");
}
function nt({ url: u, inlineScript: e, attributes: t }) {
  const s = document.createElement("script");
  return u && (s.src = u), e && (s.textContent = e), _e(s, t), s;
}
function _e(u, e) {
  e.forEach((t) => {
    const [s, i] = t.includes("=") ? t.split("=") : [t, !0];
    u.setAttribute(s, i === !0 ? "" : i.replace(/"/g, ""));
  });
}
function Ce(u, e) {
  let t;
  if ((console.log("appendTo:", e), e === "head" || e === "body"))
    (t = document[e]), console.log(`Appending to document.${e}`);
  else if (typeof e == "string") {
    if (((t = document.querySelector(e)), !t))
      throw (
        (console.error("No element matches the selector: " + e),
        new Error("No element matches the selector: " + e))
      );
  } else
    e instanceof Element
      ? (t = e)
      : ((t = document.head), console.log("Default append to head"));
  t.appendChild(u);
}
function ot({ url: u, inlineStyle: e, attributes: t }) {
  let s;
  if (u)
    (s = document.createElement("link")), (s.rel = "stylesheet"), (s.href = u);
  else if (e) (s = document.createElement("style")), (s.textContent = e);
  else throw new Error('Either "url" or "inlineStyle" must be provided.');
  return _e(s, t), s;
}
async function Ee({ url: u, apiKey: e, strategy: t }) {
  const s = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      u
    )}&key=${e}&strategy=${t}&category=performance&category=accessibility&category=seo&category=best-practices`,
    i = await fetch(s);
  if (!i.ok) throw new Error("Network response was not ok");
  return i.json();
}
async function Dt(u, e) {
  try {
    const [t, s] = await Promise.all([
      Ee({ url: u, apiKey: e, strategy: "mobile" }),
      Ee({ url: u, apiKey: e, strategy: "desktop" }),
    ]);
    return {
      performance: {
        mobile: t.lighthouseResult.categories.performance.score * 100,
        desktop: s.lighthouseResult.categories.performance.score * 100,
      },
      accessibility: {
        mobile: t.lighthouseResult.categories.accessibility.score * 100,
        desktop: s.lighthouseResult.categories.accessibility.score * 100,
      },
      seo: {
        mobile: t.lighthouseResult.categories.seo.score * 100,
        desktop: s.lighthouseResult.categories.seo.score * 100,
      },
      bestPractices: {
        mobile: t.lighthouseResult.categories["best-practices"].score * 100,
        desktop: s.lighthouseResult.categories["best-practices"].score * 100,
      },
    };
  } catch (t) {
    throw (
      (console.error("There was a problem fetching PageSpeed scores:", t), t)
    );
  }
}
function Be() {
  let u = document.getElementById("pageSpeedResultDiv");
  return (
    u ||
      ((u = document.createElement("div")),
      (u.id = "pageSpeedResultDiv"),
      (u.style.position = "fixed"),
      (u.style.bottom = "0"),
      (u.style.left = "0"),
      (u.style.backgroundColor = "rgba(0, 0, 0, 0.9)"),
      (u.style.color = "white"),
      (u.style.padding = "10px"),
      (u.style.zIndex = "1000"),
      (u.style.fontSize = "12px"),
      (u.style.borderRadius = "0 10px 10px 0"),
      document.body.appendChild(u)),
    u
  );
}
function lt(u) {
  const e = Be();
  e.innerHTML = u;
}
function at(u) {
  return u >= 90 ? "#0f0" : u >= 51 ? "#ff0" : "#f00";
}
function ct(u, e) {
  const t = Be(),
    s = (r, o) => {
      var D;
      const a = Math.round(((D = u[r]) == null ? void 0 : D[o]) ?? 0);
      return `<span style="color: ${at(a)};">${
        o.charAt(0).toUpperCase() + o.slice(1)
      } ${a}</span>`;
    },
    i = `
        <strong>Boostify Report: ${e}</strong><br>
        <strong>Performance:</strong> ${s("performance", "desktop")} / ${s(
      "performance",
      "mobile"
    )}<br>
        <strong>Accessibility:</strong> ${s("accessibility", "desktop")} / ${s(
      "accessibility",
      "mobile"
    )}<br>
        <strong>Best Practices:</strong> ${s("bestPractices", "desktop")} / ${s(
      "bestPractices",
      "mobile"
    )}<br>
        <strong>SEO:</strong> ${s("seo", "desktop")} / ${s(
      "seo",
      "mobile"
    )}<br>`;
  t.innerHTML = i;
}
const Z = (u) => u.map((e) => String.fromCharCode(e)).join(""),
  j = {
    brand: [66, 111, 111, 115, 116, 105, 102, 121, 74, 115],
    license_approved: [
      66, 111, 111, 115, 116, 105, 102, 121, 32, 76, 105, 99, 101, 110, 115,
      101, 32, 65, 112, 112, 114, 111, 118, 101, 100,
    ],
    license_declined: [
      66, 111, 111, 115, 116, 105, 102, 121, 32, 76, 105, 99, 101, 110, 115,
      101, 32, 68, 101, 99, 108, 105, 110, 101, 100,
    ],
    productId: [
      97, 77, 73, 73, 120, 85, 116, 67, 95, 79, 55, 108, 98, 106, 83, 70, 88,
      72, 53, 101, 87, 81, 61, 61,
    ],
    APIvalidate: [
      104, 116, 116, 112, 115, 58, 47, 47, 97, 112, 105, 46, 103, 117, 109, 114,
      111, 97, 100, 46, 99, 111, 109, 47, 118, 50, 47, 108, 105, 99, 101, 110,
      115, 101, 115, 47, 118, 101, 114, 105, 102, 121,
    ],
    errorValidate: [69, 114, 114, 111, 114, 58],
  },
  x = {
    debugDefault:
      "Execution - On Page Load - Will load delay scripts with attribute",
    scriptLoaded: "Script loaded",
    scriptNotLoaded: "Script not loaded",
    events: {
      load: {
        positive: "All scripts were executed on load",
        negative: "Error executing scripts on load",
      },
      scroll: {
        positive: "All scripts were executed on scroll",
        negative: "Error executing scripts on scroll",
      },
      mousemove: {
        positive: "All scripts were executed on mousemove",
        negative: "Error executing scripts on mousemove",
      },
      touchstart: {
        positive: "All scripts were executed on touchstart",
        negative: "Error executing scripts on touchstart",
      },
    },
  },
  dt = { debugDefault: "Boostify js - Execution on click event" },
  Fe = {
    debugDefault: "Boostify - Execution - On Scroll at",
    debugDefaultSecond: "from the top of the page",
  },
  se = {
    noElement:
      "ObserverEvent: Provided 'element' is neither a valid DOM element nor a NodeList.",
    noCallback: "ObserverEvent: Provided 'callback' is not a function.",
    noObserver:
      "ObserverEvent: No observer was found for the provided element.",
  };
class ht {
  constructor(e) {
    ee(this, "_handleScroll", () => {
      this.wereScriptsExecuted ||
        ((this.wereScriptsExecuted = !0),
        this.fire()
          .then(() => {
            typeof this.callback == "function" &&
              this.callback({ event: "scroll" }),
              this.debug && console.log(`%c ${x.events.scroll.positive}`, N(U));
          })
          .catch((t) => {
            this.debug && console.error(` ${x.events.scroll.negative}`, t);
          }));
    }),
      ee(this, "_mouseMove", () => {
        this.wereScriptsExecuted ||
          ((this.wereScriptsExecuted = !0),
          this.fire()
            .then(() => {
              typeof this.callback == "function" &&
                this.callback({ event: "mousemove" }),
                this.debug &&
                  console.log(`%c ${x.events.mousemove.positive}`, N(U));
            })
            .catch((t) => {
              this.debug && console.error(`${x.events.mousemove.negative}`, t);
            }));
      }),
      ee(this, "_touchStart", () => {
        this.wereScriptsExecuted ||
          ((this.wereScriptsExecuted = !0),
          this.fire()
            .then(() => {
              typeof this.callback == "function" &&
                this.callback({ event: "touchstart" }),
                this.debug &&
                  console.log(`%c ${x.events.touchstart.positive}`, N(U));
            })
            .catch((t) => {
              this.debug && console.error(`${x.events.touchstart.negative}`, t);
            }));
      }),
      (this.debug = e.debug),
      (this.selector = "script[type='text/boostify']"),
      (this.wereScriptsExecuted = !1),
      (this.maxTime = e.maxTime),
      (this.eventsHandler = e.eventsHandler),
      (this.callback = e.callback),
      this.init(),
      this.events();
  }
  init() {
    this.debug &&
      console.log(
        `%c ${x.debugDefault}  ${this.selector} on ${this.eventsHandler} after ${this.maxTime}s`,
        N(U)
      ),
      setTimeout(() => {
        this.wereScriptsExecuted ||
          ((this.wereScriptsExecuted = !0),
          this.fire()
            .then(() => {
              typeof this.callback == "function" &&
                this.callback({ event: "onload" }),
                this.debug &&
                  console.log(`%c ${x.events.load.positive} `, N(U));
            })
            .catch((e) => {
              this.debug && console.error(`${x.events.load.negative}`, e);
            }));
      }, this.maxTime);
  }
  events() {
    this.eventsHandler.forEach((e) => {
      e === "scroll"
        ? window.addEventListener("scroll", this._handleScroll)
        : e === "mousemove"
        ? window.addEventListener("mousemove", this._mouseMove)
        : e === "touchstart" &&
          window.addEventListener("touchstart", this._touchStart);
    });
  }
  fire() {
    return new Promise((e, t) => {
      const s = document.querySelectorAll(this.selector);
      if (s.length === 0) {
        t(new Error("No scripts with script[type='text/boostify'] found."));
        return;
      }
      const i = Array.from(s);
      let r = 0;
      const o = (l) => {
          if (l.src) {
            const h = document.createElement("script");
            (h.src = l.src),
              (h.onload = () => {
                r++,
                  this.debug && console.log(`${x.scriptLoaded} ${l.src}`),
                  r === i.length && e();
              }),
              (h.onerror = () => {
                t(new Error(`${x.scriptNotLoaded}${l.src}`));
              }),
              document.body.appendChild(h);
          } else
            try {
              const h = document.createElement("script");
              (h.text = l.innerText),
                document.body.appendChild(h),
                r++,
                r === i.length && e();
            } catch (h) {
              t(h);
            }
        },
        D = i.filter((l) => l.src),
        a = i.filter((l) => !l.src);
      if ((D.forEach(o), D.length === 0)) a.forEach(o);
      else {
        const l = setInterval(() => {
          r >= D.length && (clearInterval(l), a.forEach(o));
        }, 100);
      }
    });
  }
}
class pt {
  constructor(e) {
    (this.debug = e.debug),
      (this.DOM = { element: e.element }),
      (this.callback = e.callback),
      (this.fireInit = this.fireInit.bind(this)),
      this.init();
  }
  init() {
    this.DOM.element.addEventListener("click", this.fireInit);
  }
  fireInit(e) {
    e.preventDefault(),
      this.debug && console.log(`%c ${dt.debugDefault} `, N(rt)),
      typeof this.callback == "function" && this.callback({ event: "click" });
  }
  destroy() {
    this.DOM.element.removeEventListener("click", this.fireInit);
  }
}
class ft {
  constructor(e) {
    ee(this, "scrollHandler", () => {
      !this.wasScrollExecuted &&
        window.scrollY >= this.distance &&
        ((this.wasScrollExecuted = !0),
        typeof this.callbackFn == "function" &&
          this.callbackFn({ event: "scroll" }));
    }),
      (this.debug = e.debug),
      (this.distance = e.distance),
      (this.callbackFn = e.callback),
      (this.name = e.name),
      (this.wasScrollExecuted = !1),
      this.events();
  }
  events() {
    this.debug &&
      console.log(
        `%c ${Fe.debugDefault} ${this.distance} ${Fe.debugDefaultSecond}`,
        N(Se)
      ),
      window.addEventListener("scroll", this.scrollHandler);
  }
  destroy() {
    window.removeEventListener("scroll", this.scrollHandler);
  }
}
class Ct {
  constructor(e) {
    (this.debug = e.debug),
      (this.DOM = { element: e.element }),
      (this.element = e.element),
      (this.callback = e.callback),
      (this.options = e.options),
      (this.observers = []),
      this.events();
  }
  events() {
    NodeList.prototype.isPrototypeOf(this.element)
      ? this.element.forEach((e) => this.observeElement(e))
      : this.element instanceof Element
      ? this.observeElement(this.element)
      : console.error(`${se.noElement}`);
  }
  observeElement(e) {
    const t = new IntersectionObserver((s, i) => {
      s.forEach((r) => {
        r.isIntersecting &&
          (typeof this.callback == "function"
            ? this.callback(r, i)
            : console.error(`${se.noCallback}`));
      });
    }, this.options);
    t.observe(e), this.observers.push({ element: e, observer: t });
  }
  destroy(e) {
    const { element: t } = e,
      s = this.observers.findIndex((i) => i.element === t);
    s !== -1
      ? (this.observers[s].observer.disconnect(), this.observers.splice(s, 1))
      : console.error(`${se.noObserver}`);
  }
}
function Et(u, e) {
  const t = "https://api.gumroad.com/v2/licenses/verify";
  return new Promise((s, i) => {
    const r = new FormData();
    r.append("product_id", u),
      r.append("license_key", e),
      fetch(t, { method: "POST", body: r })
        .then((o) => o.json())
        .then((o) => {
          s(o);
        })
        .catch((o) => {
          i(o);
        });
  });
}
class Ft {
  constructor(e) {
    if (!e || !e.license) throw new Error("License is required");
    (this.productID = Z(j.productId)),
      (this.license = e.license),
      (this.debug = e.debug || !1),
      (this.events = []),
      this.vl();
  }
  async vl() {
    try {
      var e = await Et(this.productID, this.license);
      e.success
        ? this.debug &&
          console.log(`%c${Z(j.brand)} - ${Z(j.license_approved)} `, N(Se))
        : (setTimeout(() => {
            this.destroyNoMatterWhat();
          }, 1200),
          this.wm());
    } catch (t) {
      console.error(Z(j.errorValidate), t);
    }
  }
  onload(e) {
    this.onload = new ht({
      debug: this.debug,
      maxTime: e.maxTime ? e.maxTime : 600,
      selectors: e.selector !== void 0 ? e.selector : "type='text/boostify'",
      eventsHandler: e.eventsHandler
        ? e.eventsHandler
        : ["mousemove", "load", "scroll", "touchstart"],
      callback: e.callback ? e.callback : null,
    });
    var t = { instance: this.onload, type: "onload" };
    this.events.push(t);
  }
  click(e) {
    this.clickEvnt = new pt({
      debug: this.debug,
      element: e.element
        ? e.element
        : document.querySelector(".js--click-boostify"),
      callback: e.callback ? e.callback : null,
    });
    var t = { instance: this.clickEvnt, type: "click" };
    this.events.push(t);
  }
  destroyclick(e) {
    const t = e.element || document.querySelector(".js--click-boostify"),
      s = this.events.findIndex((i) => {
        var r, o;
        return (
          ((o = (r = i.instance) == null ? void 0 : r.DOM) == null
            ? void 0
            : o.element) === t && i.type === "click"
        );
      });
    s !== -1
      ? (this.events[s].instance.destroy(), this.events.splice(s, 1))
      : console.log("Click event not found for element:", t);
  }
  scroll(e) {
    const t = e.name || `scroll-${e.distance}`;
    this.scrollEvent = new ft({
      debug: this.debug,
      distance: e.distance,
      callback: e.callback,
      name: t,
    });
    var s = { name: t, instance: this.scrollEvent, type: "scroll" };
    this.events.push(s);
  }
  destroyscroll(e) {
    const t = e.name || `scroll-${e.distance}`,
      s = this.events.findIndex((i) => i.type === "scroll" && i.name === t);
    s !== -1
      ? (this.events[s].instance.destroy(), this.events.splice(s, 1))
      : console.warn("Scroll event not found for name:", t);
  }
  observer(e) {
    var t = e.element;
    if (!(t instanceof Element))
      throw new Error(
        `${j.brand}: Provided 'element' is not a valid DOM element.`
      );
    var s = { root: null, rootMargin: "0px", threshold: 0.01 },
      i = { ...s, ...e.options };
    this.observerEvent = new Ct({
      options: i,
      debug: this.debug,
      element: e.element
        ? e.element
        : document.querySelector(".js--observer-boostify"),
      callback: e.callback,
    });
    var r = {
      instance: this.observerEvent,
      type: "observer",
      elements: e.element instanceof NodeList ? [...e.element] : [e.element],
    };
    this.events.push(r);
  }
  refreshobserver({ element: e } = {}) {
    this.events
      .filter((t) => t.type === "observer" && (!e || t.elements.includes(e)))
      .forEach((t) => {
        t.instance.observers.forEach((s) => {
          if (!e || s.element === e) {
            s.observer.disconnect();
            const i = t.instance.observers.indexOf(s);
            i > -1 && t.instance.observers.splice(i, 1),
              e && document.contains(e) && t.instance.observeElement(e);
          }
        }),
          e ||
            ((t.instance.observers = []),
            Array.isArray(t.elements) &&
              t.elements.forEach((s) => {
                document.contains(s) && t.instance.observeElement(s);
              }));
      });
  }
  destroyobserver(e) {
    (e.element instanceof NodeList ? [...e.element] : [e.element]).forEach(
      (t) => {
        const s = this.events.findIndex(
          (i) =>
            i.type === "observer" &&
            Array.isArray(i.elements) &&
            i.elements.includes(t)
        );
        s !== -1
          ? (this.events[s].instance.destroy({ element: t }),
            this.events[s].instance.observers.length === 0 &&
              this.events.splice(s, 1))
          : console.warn("Observer event not found for element:", t);
      }
    );
  }
  videoPlayer(e) {
    const {
        url: { ogg: t, mp4: s },
        attributes: i,
        appendTo: r,
        style: o,
      } = e,
      D = document.createElement("video");
    (D.style.width = "100%"),
      (D.style.height = o && o.height ? o.height : "auto"),
      o &&
        Object.keys(o).forEach((l) => {
          D.style[l] = o[l];
        });
    for (let l in i)
      l === "class"
        ? (D.className = i[l])
        : ["loop", "muted", "controls", "autoplay"].includes(l)
        ? (D[l] = i[l])
        : D.setAttribute(l, i[l]);
    if (t) {
      const l = document.createElement("source");
      l.setAttribute("src", t),
        l.setAttribute("type", "video/ogg"),
        D.appendChild(l);
    }
    if (s) {
      const l = document.createElement("source");
      l.setAttribute("src", s),
        l.setAttribute("type", "video/mp4"),
        D.appendChild(l);
    }
    let a;
    if (
      (typeof r == "string"
        ? (a = document.getElementById(r) || document.querySelector(r))
        : r instanceof Element && (a = r),
      !a)
    )
      throw new Error("Append target not found.");
    a.appendChild(D);
  }
  videoEmbed({ url: e, autoplay: t = !1, appendTo: s, style: i }) {
    const r = document.createElement("iframe");
    r.setAttribute("frameborder", "0"),
      r.setAttribute("allowfullscreen", ""),
      (r.style.width = "100%"),
      (r.style.height = i && i.height ? i.height : "100%"),
      i &&
        Object.keys(i).forEach((D) => {
          r.style[D] = i[D];
        }),
      t &&
        ((e += `${e.includes("?") ? "&" : "?"}autoplay=1`),
        e.includes("youtube.com") || e.includes("youtu.be")
          ? (e += "&mute=1")
          : e.includes("vimeo.com") && (e += "&muted=1")),
      (r.src = e);
    let o;
    if (
      (typeof s == "string"
        ? (o = document.getElementById(s) || document.querySelector(s))
        : s instanceof Element && (o = s),
      !o)
    ) {
      console.error("Append target not found.");
      return;
    }
    (o.innerHTML = ""), o.appendChild(r);
  }
  async loadScript({
    url: e = "",
    attributes: t = [],
    appendTo: s = "head",
    inlineScript: i = "",
  }) {
    return new Promise((r, o) => {
      if (!e && !i) {
        o(new Error('Either "url" or "inlineScript" must be provided.'));
        return;
      }
      try {
        const D = nt({ url: e, inlineScript: i, attributes: t });
        (D.onload = () => {
          this.debug && console.log(`${e} script loaded successfully`), r();
        }),
          (D.onerror = () => o(new Error(`Script load error for ${e}`))),
          Ce(D, s),
          i && !e && r();
      } catch (D) {
        o(D);
      }
    });
  }
  async loadStyle({
    url: e = "",
    attributes: t = [],
    appendTo: s = "head",
    inlineStyle: i = "",
  }) {
    return new Promise((r, o) => {
      try {
        const D = ot({ url: e, inlineStyle: i, attributes: t });
        (D.onload = () => {
          this.debug && console.log(`${e} stylesheet loaded successfully`), r();
        }),
          (D.onerror = () => o(new Error(`Stylesheet load error for ${e}`))),
          Ce(D, s),
          (i || !e) && r();
      } catch (D) {
        o(D);
      }
    });
  }
  async scores(e) {
    const { url: t, apiKey: s, showOnPage: i } = e;
    if (!t) throw new Error("URL is required");
    if (!s) throw new Error("API key is required");
    try {
      i && lt(`Boostify Loading data from ${t}`);
      const r = await Dt(t, s);
      return i && ct(r, t), r;
    } catch (r) {
      throw (
        (console.error("There was a problem within BSTF scores method:", r), r)
      );
    }
  }
  destroyNoMatterWhat() {
    console.log("destroyNoMatterWhat");
    for (let e = 0; e < this.events.length; e++) {
      let t = this.events[e];
      t.type === "click" &&
        this.clickEvnt.destroy({ element: t.instance.DOM.element }),
        t.type === "scroll" &&
          this.scrollEvent.destroy({ distance: t.instance.distance }),
        t.type === "observer" &&
          (console.log("destroy observer"),
          this.observerEvent.destroy({ element: t.instance.element }));
    }
  }
  wm() {
    var e = document.createElement("div");
    e.className = j.brand;
    var t = document.createElement("h2");
    t.textContent = j.brand;
    function s() {
      Object.assign(e.style, {
        position: "fixed",
        right: "10px",
        padding: "5px",
        bottom: "10px",
        background: "grey",
        zIndex: "1000",
      }),
        (t.style.fontSize = "11px");
    }
    s(), e.appendChild(t), document.body.appendChild(e), setInterval(s, 1e3);
  }
}
class gt {
  constructor() {
    (this.DOM = {
      preloader: document.querySelector(".c--preloader-a"),
      media: document.querySelector(".c--preloader-a__media-wrapper"),
    }),
      (window.lib = []),
      (this.boostify = new Ft({
        debug: !1,
        license: "7A878CB9-BDEE4909-8CA2200B-DB650D8C",
      })),
      this.init();
  }
  async init() {
    try {
      const { preloadImages: t } = await J(
        () => import("./index.3843cdc3.js"),
        ["_hej/index.3843cdc3.js", "_hej/_commonjsHelpers.de833af9.js"]
      );
      (window.lib.preloadImages = t),
        await t("img"),
        document.querySelector(".js--lottie-data") &&
          this.boostify.scroll({
            distance: 300,
            callback: async () => {
              const { preloadLotties: i } = await J(
                () => import("./index.e609e10f.js"),
                [
                  "_hej/index.e609e10f.js",
                  "_hej/preload-helper.cf010ec4.js",
                ]
              );
              (window.lib.preloadLotties = i), await i({});
            },
          });
      const s = document.querySelector(".js--vue");
      if (document.querySelector(".js--vue")) {
        const { digElement: i } = await J(
          () => import("./index.12d62e94.js"),
          [
            "_hej/index.12d62e94.js",
            "_hej/preload-helper.cf010ec4.js",
            "_hej/index.4db78ffb.js",
            "_hej/_commonjsHelpers.de833af9.js",
          ]
        );
        (window.lib.digElement = i),
          await i({
            element: s,
            search: { type: "hasChildren" },
            intervalFrequency: 300,
            timer: 5e3,
          });
      } //! preloadFonts and hubspotChecker only run once, since there's only 1 hubspot instane and fonts are loaded in the beginning.
    } catch {
    } finally {
      var e = C.timeline({
        defaults: { duration: 0.3 },
        onUpdate: async () => {
          if (e.progress() >= 0.5 && !this.halfwayExecuted) {
            this.halfwayExecuted = !0;
            const t = await J(
              () => import("./Ciao.js").then((s) => s.T),
              [
                "_hej/Ciao.js",
                "_hej/preload-helper.cf010ec4.js",
                "_hej/index.12d62e94.js",
                "_hej/index.4db78ffb.js",
                "_hej/_commonjsHelpers.de833af9.js",
              ]
            );
            new t.default({ boostify: this.boostify });
          }
        },
      });
      e.to(this.DOM.media, { opacity: 0, delay: 0.2 }),
        e.to(this.DOM.preloader, { y: "-100%", pointerEvents: "none" }),
        document.querySelector(".c--hero-grid-a") && e.add(new Qe()),
        document.querySelector(".c--hero-a") && e.add(Ze()),
        document.querySelector(".c--hero-b") && e.add(et()),
        document.querySelector(".c--hero-c") && e.add(tt()),
        document.querySelector(".c--hero-d") && e.add(ut());
    }
  }
}
new gt();
export {
  At as A,
  Qe as H,
  _t as _,
  Ze as a,
  Bt as b,
  et as c,
  xe as d,
  tt as e,
  vt as f,
  Ye as g,
  wt as h,
  ut as i,
  me as j,
  ne as k,
  Tt as l,
  xt as p,
  St as v,
};
