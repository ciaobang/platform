const h = "modulepreload",
  d = function (i) {
    return "/" + i;
  },
  a = {},
  v = function (l, o, u) {
    if (!o || o.length === 0) return l();
    const c = document.getElementsByTagName("link");
    return Promise.all(
      o.map((e) => {
        if (((e = d(e)), e in a)) return;
        a[e] = !0;
        const t = e.endsWith(".css"),
          f = t ? '[rel="stylesheet"]' : "";
        if (!!u)
          for (let r = c.length - 1; r >= 0; r--) {
            const s = c[r];
            if (s.href === e && (!t || s.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${e}"]${f}`)) return;
        const n = document.createElement("link");
        if (
          ((n.rel = t ? "stylesheet" : h),
          t || ((n.as = "script"), (n.crossOrigin = "")),
          (n.href = e),
          document.head.appendChild(n),
          t)
        )
          return new Promise((r, s) => {
            n.addEventListener("load", r),
              n.addEventListener("error", () =>
                s(new Error(`Unable to preload CSS for ${e}`))
              );
          });
      })
    )
      .then(() => l())
      .catch((e) => {
        const t = new Event("vite:preloadError", { cancelable: !0 });
        if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
          throw e;
      });
  };
export { v as _ };
