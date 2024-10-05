import { h as n } from "./main.js";
import "./preload-helper.cf010ec4.js";
import "./index.4db78ffb.js";
import "./_commonjsHelpers.de833af9.js";
const f = async (e) =>
  new Promise((t, c) => {
    if (!e.element) return c(new Error("An element is required."));
    const r = setInterval(() => {
      e.search?.type == "style"
        ? e.search.lookFor.some((i) => e.element.style[i]) &&
          (e.callback && e.callback(), t(!0), clearInterval(r))
        : e.search?.type == "class"
        ? n(e.element, e.search.lookFor, e.search.attribute || e.search.type) &&
          (e.callback && e.callback(), t(!0), clearInterval(r))
        : e.search?.type == "hasChildren" &&
          e.element.children.length > 0 &&
          (e.callback && e.callback(), t(!0), clearInterval(r));
    }, e.intervalFrequency || 1e3);
    setTimeout(() => {
      c(new Error("Time is out.")), clearInterval(r);
    }, e.timer || 5e3);
  });
export { f as digElement };
