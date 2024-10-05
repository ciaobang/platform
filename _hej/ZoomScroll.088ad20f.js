import { g as i } from "./index.4db78ffb.js";
import { S as r } from "./Ciao.js";
import "./preload-helper.cf010ec4.js";
import "./main.js";
import "./_commonjsHelpers.de833af9.js";
import "./index.12d62e94.js";
i.registerPlugin(r);
class a {
  constructor(t) {
    (this.DOM = { element: t.element }), this.DOM.element && this.init();
  }
  init() {
    this.tl = i.to(this.DOM.element, {
      duration: 1,
      scale: 1,
      scrollTrigger: {
        trigger: this.DOM.element,
        start: "top 90%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
  }
  isInViewport(t) {
    var e = t.getBoundingClientRect();
    return (
      e.top < (window.innerHeight || document.documentElement.clientHeight) &&
      e.bottom > 0
    );
  }
  destroy() {
    this.tl.scrollTrigger && this.tl.scrollTrigger.kill();
  }
}
export { a as default };
