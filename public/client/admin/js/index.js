function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = [
            "client/admin/js/List.js",
            "client/admin/js/ModuleList.vue_vue_type_style_index_0_lang.js",
            "client/admin/js/lodash.js",
            "client/admin/js/vue-codemirror.js",
            "client/admin/js/VTooltip.js",
            "client/admin/css/VTooltip-CL_6g4tJ.css",
            "client/admin/js/VSpacer.js",
            "client/admin/css/VSpacer-D4XLN205.css",
            "client/admin/css/ModuleList-CXuAK5rE.css",
            "client/admin/js/List2.js",
            "client/admin/js/List3.js",
            "client/admin/js/List4.js",
            "client/admin/js/List5.js",
            "client/admin/js/List6.js",
            "client/admin/js/List7.js",
            "client/admin/js/List8.js",
            "client/admin/js/List9.js",
            "client/admin/js/List10.js",
            "client/admin/js/Detail.js",
            "client/admin/js/ModuleDetail.js",
            "client/admin/js/SmartForm.vue_vue_type_script_setup_true_lang.js",
            "client/admin/js/index.esm.js",
            "client/admin/css/ModuleDetail-C1jHIAEv.css",
            "client/admin/js/Detail2.js",
            "client/admin/js/Detail3.js",
            "client/admin/js/Detail4.js",
            "client/admin/js/Detail5.js",
            "client/admin/js/Detail6.js",
            "client/admin/js/Detail7.js",
            "client/admin/js/Detail8.js",
            "client/admin/js/Detail9.js",
            "client/admin/js/Detail10.js",
            "client/admin/js/attribute.js",
            "client/admin/js/block.js",
            "client/admin/js/category.js",
            "client/admin/js/footer.js",
            "client/admin/js/header.js",
            "client/admin/js/language.js",
            "client/admin/js/menu.js",
            "client/admin/js/menuItem.js",
            "client/admin/js/page.js",
            "client/admin/js/product.js",
            "client/admin/js/role.js",
            "client/admin/js/template.js",
            "client/admin/js/user.js",
            "client/admin/js/attribute2.js",
            "client/admin/js/block2.js",
            "client/admin/js/FilesTable.vue_vue_type_script_setup_true_lang.js",
            "client/admin/js/VRow.js",
            "client/admin/js/VAutocomplete.js",
            "client/admin/css/VAutocomplete-Byg4K4Z3.css",
            "client/admin/css/FilesTable-GvwScBr9.css",
            "client/admin/js/RelationAutocomplete.vue_vue_type_script_setup_true_lang.js",
            "client/admin/js/RelationsTree.vue_vue_type_style_index_0_lang.js",
            "client/admin/css/RelationsTree-Brcj2e_G.css",
            "client/admin/js/JSONEditor.vue_vue_type_script_setup_true_lang.js",
            "client/admin/js/category2.js",
            "client/admin/js/RelationsTable.vue_vue_type_style_index_0_lang.js",
            "client/admin/css/RelationsTable-B31-_-p5.css",
            "client/admin/js/footer2.js",
            "client/admin/js/header2.js",
            "client/admin/js/language2.js",
            "client/admin/js/menu2.js",
            "client/admin/js/menuItem2.js",
            "client/admin/js/page2.js",
            "client/admin/js/product2.js",
            "client/admin/js/role2.js",
            "client/admin/js/template2.js",
            "client/admin/js/user2.js",
            "client/admin/js/Login.js",
        ];
    }
    return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
import {
    e as zn,
    r as H,
    m as dl,
    i as ce,
    w as Z,
    a as Fe,
    b as Xe,
    c as fl,
    t as it,
    h as Ed,
    d as W,
    g as Ad,
    o as Ve,
    n as we,
    f as $a,
    j as p,
    s as J,
    u as he,
    k as Td,
    l as pt,
    p as Ht,
    q as pe,
    F as ue,
    v as Id,
    C as Od,
    x as De,
    y as vl,
    z as oi,
    A as Vd,
    B as Re,
    D as ml,
    E as Rd,
    G as $d,
    H as Ue,
    I as m,
    J as K,
    T as Dd,
    K as At,
    L as da,
    M as Le,
    N as bt,
    O as si,
    P as Ld,
    Q as on,
    R as et,
    S as ye,
    U as Bd,
    V as Fd,
    W as ke,
    X as rt,
    Y as hl,
    Z as Md,
    _ as ht,
    $ as ii,
    a0 as gl,
    a1 as Nd,
    a2 as jd,
    a3 as eo,
    a4 as Hd,
    a5 as yl,
    a6 as zd,
    a7 as Ud,
    a8 as Gd,
} from "./vue-codemirror.js";
import { c as Jn, g as Wd, l as to } from "./lodash.js";
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        a(r);
    new MutationObserver((r) => {
        for (const l of r)
            if (l.type === "childList")
                for (const o of l.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && a(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(r) {
        const l = {};
        return (
            r.integrity && (l.integrity = r.integrity),
            r.referrerPolicy && (l.referrerPolicy = r.referrerPolicy),
            r.crossOrigin === "use-credentials"
                ? (l.credentials = "include")
                : r.crossOrigin === "anonymous"
                ? (l.credentials = "omit")
                : (l.credentials = "same-origin"),
            l
        );
    }
    function a(r) {
        if (r.ep) return;
        r.ep = !0;
        const l = n(r);
        fetch(r.href, l);
    }
})();
var qd = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let ui;
const Da = (e) => (ui = e),
    ci = Symbol();
function Vr(e) {
    return (
        e &&
        typeof e == "object" &&
        Object.prototype.toString.call(e) === "[object Object]" &&
        typeof e.toJSON != "function"
    );
}
var Tn;
(function (e) {
    (e.direct = "direct"),
        (e.patchObject = "patch object"),
        (e.patchFunction = "patch function");
})(Tn || (Tn = {}));
function Kd() {
    const e = zn(!0),
        t = e.run(() => H({}));
    let n = [],
        a = [];
    const r = dl({
        install(l) {
            Da(r),
                (r._a = l),
                l.provide(ci, r),
                (l.config.globalProperties.$pinia = r),
                a.forEach((o) => n.push(o)),
                (a = []);
        },
        use(l) {
            return !this._a && !qd ? a.push(l) : n.push(l), this;
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map(),
        state: t,
    });
    return r;
}
const di = () => {};
function no(e, t, n, a = di) {
    e.push(t);
    const r = () => {
        const l = e.indexOf(t);
        l > -1 && (e.splice(l, 1), a());
    };
    return !n && Ad() && Ve(r), r;
}
function Gt(e, ...t) {
    e.slice().forEach((n) => {
        n(...t);
    });
}
const Yd = (e) => e();
function Rr(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n, a) => e.set(a, n)),
        e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n)) continue;
        const a = t[n],
            r = e[n];
        Vr(r) && Vr(a) && e.hasOwnProperty(n) && !Xe(a) && !fl(a)
            ? (e[n] = Rr(r, a))
            : (e[n] = a);
    }
    return e;
}
const Xd = Symbol();
function Jd(e) {
    return !Vr(e) || !e.hasOwnProperty(Xd);
}
const { assign: Pt } = Object;
function Zd(e) {
    return !!(Xe(e) && e.effect);
}
function Qd(e, t, n, a) {
    const { state: r, actions: l, getters: o } = t,
        s = n.state.value[e];
    let i;
    function c() {
        s || (n.state.value[e] = r ? r() : {});
        const u = $a(n.state.value[e]);
        return Pt(
            u,
            l,
            Object.keys(o || {}).reduce(
                (d, f) => (
                    (d[f] = dl(
                        p(() => {
                            Da(n);
                            const v = n._s.get(e);
                            return o[f].call(v, v);
                        })
                    )),
                    d
                ),
                {}
            )
        );
    }
    return (i = fi(e, c, t, n, a, !0)), i;
}
function fi(e, t, n = {}, a, r, l) {
    let o;
    const s = Pt({ actions: {} }, n),
        i = { deep: !0 };
    let c,
        u,
        d = [],
        f = [],
        v;
    const h = a.state.value[e];
    !l && !h && (a.state.value[e] = {}), H({});
    let g;
    function y(C) {
        let w;
        (c = u = !1),
            typeof C == "function"
                ? (C(a.state.value[e]),
                  (w = { type: Tn.patchFunction, storeId: e, events: v }))
                : (Rr(a.state.value[e], C),
                  (w = {
                      type: Tn.patchObject,
                      payload: C,
                      storeId: e,
                      events: v,
                  }));
        const A = (g = Symbol());
        we().then(() => {
            g === A && (c = !0);
        }),
            (u = !0),
            Gt(d, w, a.state.value[e]);
    }
    const b = l
        ? function () {
              const { state: w } = n,
                  A = w ? w() : {};
              this.$patch((O) => {
                  Pt(O, A);
              });
          }
        : di;
    function S() {
        o.stop(), (d = []), (f = []), a._s.delete(e);
    }
    function x(C, w) {
        return function () {
            Da(a);
            const A = Array.from(arguments),
                O = [],
                V = [];
            function I(U) {
                O.push(U);
            }
            function D(U) {
                V.push(U);
            }
            Gt(f, { args: A, name: C, store: E, after: I, onError: D });
            let M;
            try {
                M = w.apply(this && this.$id === e ? this : E, A);
            } catch (U) {
                throw (Gt(V, U), U);
            }
            return M instanceof Promise
                ? M.then((U) => (Gt(O, U), U)).catch(
                      (U) => (Gt(V, U), Promise.reject(U))
                  )
                : (Gt(O, M), M);
        };
    }
    const P = {
            _p: a,
            $id: e,
            $onAction: no.bind(null, f),
            $patch: y,
            $reset: b,
            $subscribe(C, w = {}) {
                const A = no(d, C, w.detached, () => O()),
                    O = o.run(() =>
                        Z(
                            () => a.state.value[e],
                            (V) => {
                                (w.flush === "sync" ? u : c) &&
                                    C(
                                        {
                                            storeId: e,
                                            type: Tn.direct,
                                            events: v,
                                        },
                                        V
                                    );
                            },
                            Pt({}, i, w)
                        )
                    );
                return A;
            },
            $dispose: S,
        },
        E = Fe(P);
    a._s.set(e, E);
    const _ = ((a._a && a._a.runWithContext) || Yd)(() =>
        a._e.run(() => (o = zn()).run(t))
    );
    for (const C in _) {
        const w = _[C];
        if ((Xe(w) && !Zd(w)) || fl(w))
            l ||
                (h && Jd(w) && (Xe(w) ? (w.value = h[C]) : Rr(w, h[C])),
                (a.state.value[e][C] = w));
        else if (typeof w == "function") {
            const A = x(C, w);
            (_[C] = A), (s.actions[C] = w);
        }
    }
    return (
        Pt(E, _),
        Pt(it(E), _),
        Object.defineProperty(E, "$state", {
            get: () => a.state.value[e],
            set: (C) => {
                y((w) => {
                    Pt(w, C);
                });
            },
        }),
        a._p.forEach((C) => {
            Pt(
                E,
                o.run(() => C({ store: E, app: a._a, pinia: a, options: s }))
            );
        }),
        h && l && n.hydrate && n.hydrate(E.$state, h),
        (c = !0),
        (u = !0),
        E
    );
}
function La(e, t, n) {
    let a, r;
    const l = typeof t == "function";
    typeof e == "string" ? ((a = e), (r = l ? n : t)) : ((r = e), (a = e.id));
    function o(s, i) {
        const c = Ed();
        return (
            (s = s || (c ? ce(ci, null) : null)),
            s && Da(s),
            (s = ui),
            s._s.has(a) || (l ? fi(a, t, r, s) : Qd(a, r, s)),
            s._s.get(a)
        );
    }
    return (o.$id = a), o;
}
function ef(e) {
    {
        e = it(e);
        const t = {};
        for (const n in e) {
            const a = e[n];
            (Xe(a) || fl(a)) && (t[n] = W(e, n));
        }
        return t;
    }
}
const vi = La("notification", {
        state: () => ({ notifications: [] }),
        actions: {
            pushNotification(e, t = 7e3) {
                this.notifications.push(e),
                    setTimeout(() => {
                        this.removeAlert();
                    }, t);
            },
            closeAlert(e) {
                this.notifications.splice(e, 1);
            },
            removeAlert() {
                this.notifications.shift();
            },
        },
    }),
    mi = La("modals", () => {
        const e = H(!1),
            t = H([]);
        return {
            modals: t,
            show: e,
            addModal: (r) => {
                const l = dl(r.component);
                t.value.push({
                    props: r.props,
                    actions: r.actions,
                    component: l,
                });
            },
            onModalClose: () => {
                t.value = t.value.toSpliced(-1, 1);
            },
        };
    });
/*!
 * vue-router v4.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Xt = typeof document < "u";
function tf(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const ge = Object.assign;
function cr(e, t) {
    const n = {};
    for (const a in t) {
        const r = t[a];
        n[a] = nt(r) ? r.map(e) : e(r);
    }
    return n;
}
const In = () => {},
    nt = Array.isArray,
    hi = /#/g,
    nf = /&/g,
    af = /\//g,
    rf = /=/g,
    lf = /\?/g,
    gi = /\+/g,
    of = /%5B/g,
    sf = /%5D/g,
    yi = /%5E/g,
    uf = /%60/g,
    pi = /%7B/g,
    cf = /%7C/g,
    bi = /%7D/g,
    df = /%20/g;
function pl(e) {
    return encodeURI("" + e)
        .replace(cf, "|")
        .replace(of, "[")
        .replace(sf, "]");
}
function ff(e) {
    return pl(e).replace(pi, "{").replace(bi, "}").replace(yi, "^");
}
function $r(e) {
    return pl(e)
        .replace(gi, "%2B")
        .replace(df, "+")
        .replace(hi, "%23")
        .replace(nf, "%26")
        .replace(uf, "`")
        .replace(pi, "{")
        .replace(bi, "}")
        .replace(yi, "^");
}
function vf(e) {
    return $r(e).replace(rf, "%3D");
}
function mf(e) {
    return pl(e).replace(hi, "%23").replace(lf, "%3F");
}
function hf(e) {
    return e == null ? "" : mf(e).replace(af, "%2F");
}
function $n(e) {
    try {
        return decodeURIComponent("" + e);
    } catch {}
    return "" + e;
}
const gf = /\/$/,
    yf = (e) => e.replace(gf, "");
function dr(e, t, n = "/") {
    let a,
        r = {},
        l = "",
        o = "";
    const s = t.indexOf("#");
    let i = t.indexOf("?");
    return (
        s < i && s >= 0 && (i = -1),
        i > -1 &&
            ((a = t.slice(0, i)),
            (l = t.slice(i + 1, s > -1 ? s : t.length)),
            (r = e(l))),
        s > -1 && ((a = a || t.slice(0, s)), (o = t.slice(s, t.length))),
        (a = _f(a ?? t, n)),
        { fullPath: a + (l && "?") + l + o, path: a, query: r, hash: $n(o) }
    );
}
function pf(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
}
function ao(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase())
        ? e
        : e.slice(t.length) || "/";
}
function bf(e, t, n) {
    const a = t.matched.length - 1,
        r = n.matched.length - 1;
    return (
        a > -1 &&
        a === r &&
        en(t.matched[a], n.matched[r]) &&
        Si(t.params, n.params) &&
        e(t.query) === e(n.query) &&
        t.hash === n.hash
    );
}
function en(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
}
function Si(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (!Sf(e[n], t[n])) return !1;
    return !0;
}
function Sf(e, t) {
    return nt(e) ? ro(e, t) : nt(t) ? ro(t, e) : e === t;
}
function ro(e, t) {
    return nt(t)
        ? e.length === t.length && e.every((n, a) => n === t[a])
        : e.length === 1 && e[0] === t;
}
function _f(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
        a = e.split("/"),
        r = a[a.length - 1];
    (r === ".." || r === ".") && a.push("");
    let l = n.length - 1,
        o,
        s;
    for (o = 0; o < a.length; o++)
        if (((s = a[o]), s !== "."))
            if (s === "..") l > 1 && l--;
            else break;
    return n.slice(0, l).join("/") + "/" + a.slice(o).join("/");
}
var Dn;
(function (e) {
    (e.pop = "pop"), (e.push = "push");
})(Dn || (Dn = {}));
var On;
(function (e) {
    (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(On || (On = {}));
function wf(e) {
    if (!e)
        if (Xt) {
            const t = document.querySelector("base");
            (e = (t && t.getAttribute("href")) || "/"),
                (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), yf(e);
}
const Cf = /^[^#]+#/;
function xf(e, t) {
    return e.replace(Cf, "#") + t;
}
function Pf(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        a = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: a.left - n.left - (t.left || 0),
        top: a.top - n.top - (t.top || 0),
    };
}
const Ba = () => ({ left: window.scrollX, top: window.scrollY });
function kf(e) {
    let t;
    if ("el" in e) {
        const n = e.el,
            a = typeof n == "string" && n.startsWith("#"),
            r =
                typeof n == "string"
                    ? a
                        ? document.getElementById(n.slice(1))
                        : document.querySelector(n)
                    : n;
        if (!r) return;
        t = Pf(r, e);
    } else t = e;
    "scrollBehavior" in document.documentElement.style
        ? window.scrollTo(t)
        : window.scrollTo(
              t.left != null ? t.left : window.scrollX,
              t.top != null ? t.top : window.scrollY
          );
}
function lo(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
}
const Dr = new Map();
function Ef(e, t) {
    Dr.set(e, t);
}
function Af(e) {
    const t = Dr.get(e);
    return Dr.delete(e), t;
}
let Tf = () => location.protocol + "//" + location.host;
function _i(e, t) {
    const { pathname: n, search: a, hash: r } = t,
        l = e.indexOf("#");
    if (l > -1) {
        let s = r.includes(e.slice(l)) ? e.slice(l).length : 1,
            i = r.slice(s);
        return i[0] !== "/" && (i = "/" + i), ao(i, "");
    }
    return ao(n, e) + a + r;
}
function If(e, t, n, a) {
    let r = [],
        l = [],
        o = null;
    const s = ({ state: f }) => {
        const v = _i(e, location),
            h = n.value,
            g = t.value;
        let y = 0;
        if (f) {
            if (((n.value = v), (t.value = f), o && o === h)) {
                o = null;
                return;
            }
            y = g ? f.position - g.position : 0;
        } else a(v);
        r.forEach((b) => {
            b(n.value, h, {
                delta: y,
                type: Dn.pop,
                direction: y ? (y > 0 ? On.forward : On.back) : On.unknown,
            });
        });
    };
    function i() {
        o = n.value;
    }
    function c(f) {
        r.push(f);
        const v = () => {
            const h = r.indexOf(f);
            h > -1 && r.splice(h, 1);
        };
        return l.push(v), v;
    }
    function u() {
        const { history: f } = window;
        f.state && f.replaceState(ge({}, f.state, { scroll: Ba() }), "");
    }
    function d() {
        for (const f of l) f();
        (l = []),
            window.removeEventListener("popstate", s),
            window.removeEventListener("beforeunload", u);
    }
    return (
        window.addEventListener("popstate", s),
        window.addEventListener("beforeunload", u, { passive: !0 }),
        { pauseListeners: i, listen: c, destroy: d }
    );
}
function oo(e, t, n, a = !1, r = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: a,
        position: window.history.length,
        scroll: r ? Ba() : null,
    };
}
function Of(e) {
    const { history: t, location: n } = window,
        a = { value: _i(e, n) },
        r = { value: t.state };
    r.value ||
        l(
            a.value,
            {
                back: null,
                current: a.value,
                forward: null,
                position: t.length - 1,
                replaced: !0,
                scroll: null,
            },
            !0
        );
    function l(i, c, u) {
        const d = e.indexOf("#"),
            f =
                d > -1
                    ? (n.host && document.querySelector("base")
                          ? e
                          : e.slice(d)) + i
                    : Tf() + e + i;
        try {
            t[u ? "replaceState" : "pushState"](c, "", f), (r.value = c);
        } catch (v) {
            console.error(v), n[u ? "replace" : "assign"](f);
        }
    }
    function o(i, c) {
        const u = ge({}, t.state, oo(r.value.back, i, r.value.forward, !0), c, {
            position: r.value.position,
        });
        l(i, u, !0), (a.value = i);
    }
    function s(i, c) {
        const u = ge({}, r.value, t.state, { forward: i, scroll: Ba() });
        l(u.current, u, !0);
        const d = ge({}, oo(a.value, i, null), { position: u.position + 1 }, c);
        l(i, d, !1), (a.value = i);
    }
    return { location: a, state: r, push: s, replace: o };
}
function Vf(e) {
    e = wf(e);
    const t = Of(e),
        n = If(e, t.state, t.location, t.replace);
    function a(l, o = !0) {
        o || n.pauseListeners(), history.go(l);
    }
    const r = ge(
        { location: "", base: e, go: a, createHref: xf.bind(null, e) },
        t,
        n
    );
    return (
        Object.defineProperty(r, "location", {
            enumerable: !0,
            get: () => t.location.value,
        }),
        Object.defineProperty(r, "state", {
            enumerable: !0,
            get: () => t.state.value,
        }),
        r
    );
}
function Rf(e) {
    return typeof e == "string" || (e && typeof e == "object");
}
function wi(e) {
    return typeof e == "string" || typeof e == "symbol";
}
const Ct = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0,
    },
    Ci = Symbol("");
var so;
(function (e) {
    (e[(e.aborted = 4)] = "aborted"),
        (e[(e.cancelled = 8)] = "cancelled"),
        (e[(e.duplicated = 16)] = "duplicated");
})(so || (so = {}));
function tn(e, t) {
    return ge(new Error(), { type: e, [Ci]: !0 }, t);
}
function mt(e, t) {
    return e instanceof Error && Ci in e && (t == null || !!(e.type & t));
}
const io = "[^/]+?",
    $f = { sensitive: !1, strict: !1, start: !0, end: !0 },
    Df = /[.+*?^${}()[\]/\\]/g;
function Lf(e, t) {
    const n = ge({}, $f, t),
        a = [];
    let r = n.start ? "^" : "";
    const l = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (r += "/");
        for (let d = 0; d < c.length; d++) {
            const f = c[d];
            let v = 40 + (n.sensitive ? 0.25 : 0);
            if (f.type === 0)
                d || (r += "/"), (r += f.value.replace(Df, "\\$&")), (v += 40);
            else if (f.type === 1) {
                const { value: h, repeatable: g, optional: y, regexp: b } = f;
                l.push({ name: h, repeatable: g, optional: y });
                const S = b || io;
                if (S !== io) {
                    v += 10;
                    try {
                        new RegExp(`(${S})`);
                    } catch (P) {
                        throw new Error(
                            `Invalid custom RegExp for param "${h}" (${S}): ` +
                                P.message
                        );
                    }
                }
                let x = g ? `((?:${S})(?:/(?:${S}))*)` : `(${S})`;
                d || (x = y && c.length < 2 ? `(?:/${x})` : "/" + x),
                    y && (x += "?"),
                    (r += x),
                    (v += 20),
                    y && (v += -8),
                    g && (v += -20),
                    S === ".*" && (v += -50);
            }
            u.push(v);
        }
        a.push(u);
    }
    if (n.strict && n.end) {
        const c = a.length - 1;
        a[c][a[c].length - 1] += 0.7000000000000001;
    }
    n.strict || (r += "/?"), n.end ? (r += "$") : n.strict && (r += "(?:/|$)");
    const o = new RegExp(r, n.sensitive ? "" : "i");
    function s(c) {
        const u = c.match(o),
            d = {};
        if (!u) return null;
        for (let f = 1; f < u.length; f++) {
            const v = u[f] || "",
                h = l[f - 1];
            d[h.name] = v && h.repeatable ? v.split("/") : v;
        }
        return d;
    }
    function i(c) {
        let u = "",
            d = !1;
        for (const f of e) {
            (!d || !u.endsWith("/")) && (u += "/"), (d = !1);
            for (const v of f)
                if (v.type === 0) u += v.value;
                else if (v.type === 1) {
                    const { value: h, repeatable: g, optional: y } = v,
                        b = h in c ? c[h] : "";
                    if (nt(b) && !g)
                        throw new Error(
                            `Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`
                        );
                    const S = nt(b) ? b.join("/") : b;
                    if (!S)
                        if (y)
                            f.length < 2 &&
                                (u.endsWith("/")
                                    ? (u = u.slice(0, -1))
                                    : (d = !0));
                        else throw new Error(`Missing required param "${h}"`);
                    u += S;
                }
        }
        return u || "/";
    }
    return { re: o, score: a, keys: l, parse: s, stringify: i };
}
function Bf(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const a = t[n] - e[n];
        if (a) return a;
        n++;
    }
    return e.length < t.length
        ? e.length === 1 && e[0] === 80
            ? -1
            : 1
        : e.length > t.length
        ? t.length === 1 && t[0] === 80
            ? 1
            : -1
        : 0;
}
function Ff(e, t) {
    let n = 0;
    const a = e.score,
        r = t.score;
    for (; n < a.length && n < r.length; ) {
        const l = Bf(a[n], r[n]);
        if (l) return l;
        n++;
    }
    if (Math.abs(r.length - a.length) === 1) {
        if (uo(a)) return 1;
        if (uo(r)) return -1;
    }
    return r.length - a.length;
}
function uo(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
}
const Mf = { type: 0, value: "" },
    Nf = /[a-zA-Z0-9_]/;
function jf(e) {
    if (!e) return [[]];
    if (e === "/") return [[Mf]];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
    function t(v) {
        throw new Error(`ERR (${n})/"${c}": ${v}`);
    }
    let n = 0,
        a = n;
    const r = [];
    let l;
    function o() {
        l && r.push(l), (l = []);
    }
    let s = 0,
        i,
        c = "",
        u = "";
    function d() {
        c &&
            (n === 0
                ? l.push({ type: 0, value: c })
                : n === 1 || n === 2 || n === 3
                ? (l.length > 1 &&
                      (i === "*" || i === "+") &&
                      t(
                          `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
                      ),
                  l.push({
                      type: 1,
                      value: c,
                      regexp: u,
                      repeatable: i === "*" || i === "+",
                      optional: i === "*" || i === "?",
                  }))
                : t("Invalid state to consume buffer"),
            (c = ""));
    }
    function f() {
        c += i;
    }
    for (; s < e.length; ) {
        if (((i = e[s++]), i === "\\" && n !== 2)) {
            (a = n), (n = 4);
            continue;
        }
        switch (n) {
            case 0:
                i === "/" ? (c && d(), o()) : i === ":" ? (d(), (n = 1)) : f();
                break;
            case 4:
                f(), (n = a);
                break;
            case 1:
                i === "("
                    ? (n = 2)
                    : Nf.test(i)
                    ? f()
                    : (d(),
                      (n = 0),
                      i !== "*" && i !== "?" && i !== "+" && s--);
                break;
            case 2:
                i === ")"
                    ? u[u.length - 1] == "\\"
                        ? (u = u.slice(0, -1) + i)
                        : (n = 3)
                    : (u += i);
                break;
            case 3:
                d(),
                    (n = 0),
                    i !== "*" && i !== "?" && i !== "+" && s--,
                    (u = "");
                break;
            default:
                t("Unknown state");
                break;
        }
    }
    return (
        n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), o(), r
    );
}
function Hf(e, t, n) {
    const a = Lf(jf(e.path), n),
        r = ge(a, { record: e, parent: t, children: [], alias: [] });
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function zf(e, t) {
    const n = [],
        a = new Map();
    t = vo({ strict: !1, end: !0, sensitive: !1 }, t);
    function r(u) {
        return a.get(u);
    }
    function l(u, d, f) {
        const v = !f,
            h = Uf(u);
        h.aliasOf = f && f.record;
        const g = vo(t, u),
            y = [h];
        if ("alias" in u) {
            const x = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const P of x)
                y.push(
                    ge({}, h, {
                        components: f ? f.record.components : h.components,
                        path: P,
                        aliasOf: f ? f.record : h,
                    })
                );
        }
        let b, S;
        for (const x of y) {
            const { path: P } = x;
            if (d && P[0] !== "/") {
                const E = d.record.path,
                    k = E[E.length - 1] === "/" ? "" : "/";
                x.path = d.record.path + (P && k + P);
            }
            if (
                ((b = Hf(x, d, g)),
                f
                    ? f.alias.push(b)
                    : ((S = S || b),
                      S !== b && S.alias.push(b),
                      v && u.name && !fo(b) && o(u.name)),
                h.children)
            ) {
                const E = h.children;
                for (let k = 0; k < E.length; k++)
                    l(E[k], b, f && f.children[k]);
            }
            (f = f || b),
                ((b.record.components &&
                    Object.keys(b.record.components).length) ||
                    b.record.name ||
                    b.record.redirect) &&
                    i(b);
        }
        return S
            ? () => {
                  o(S);
              }
            : In;
    }
    function o(u) {
        if (wi(u)) {
            const d = a.get(u);
            d &&
                (a.delete(u),
                n.splice(n.indexOf(d), 1),
                d.children.forEach(o),
                d.alias.forEach(o));
        } else {
            const d = n.indexOf(u);
            d > -1 &&
                (n.splice(d, 1),
                u.record.name && a.delete(u.record.name),
                u.children.forEach(o),
                u.alias.forEach(o));
        }
    }
    function s() {
        return n;
    }
    function i(u) {
        let d = 0;
        for (
            ;
            d < n.length &&
            Ff(u, n[d]) >= 0 &&
            (u.record.path !== n[d].record.path || !xi(u, n[d]));

        )
            d++;
        n.splice(d, 0, u), u.record.name && !fo(u) && a.set(u.record.name, u);
    }
    function c(u, d) {
        let f,
            v = {},
            h,
            g;
        if ("name" in u && u.name) {
            if (((f = a.get(u.name)), !f)) throw tn(1, { location: u });
            (g = f.record.name),
                (v = ge(
                    co(
                        d.params,
                        f.keys
                            .filter((S) => !S.optional)
                            .concat(
                                f.parent
                                    ? f.parent.keys.filter((S) => S.optional)
                                    : []
                            )
                            .map((S) => S.name)
                    ),
                    u.params &&
                        co(
                            u.params,
                            f.keys.map((S) => S.name)
                        )
                )),
                (h = f.stringify(v));
        } else if (u.path != null)
            (h = u.path),
                (f = n.find((S) => S.re.test(h))),
                f && ((v = f.parse(h)), (g = f.record.name));
        else {
            if (
                ((f = d.name
                    ? a.get(d.name)
                    : n.find((S) => S.re.test(d.path))),
                !f)
            )
                throw tn(1, { location: u, currentLocation: d });
            (g = f.record.name),
                (v = ge({}, d.params, u.params)),
                (h = f.stringify(v));
        }
        const y = [];
        let b = f;
        for (; b; ) y.unshift(b.record), (b = b.parent);
        return { name: g, path: h, params: v, matched: y, meta: Wf(y) };
    }
    return (
        e.forEach((u) => l(u)),
        {
            addRoute: l,
            resolve: c,
            removeRoute: o,
            getRoutes: s,
            getRecordMatcher: r,
        }
    );
}
function co(e, t) {
    const n = {};
    for (const a of t) a in e && (n[a] = e[a]);
    return n;
}
function Uf(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: Gf(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        components:
            "components" in e
                ? e.components || null
                : e.component && { default: e.component },
    };
}
function Gf(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else for (const a in e.components) t[a] = typeof n == "object" ? n[a] : n;
    return t;
}
function fo(e) {
    for (; e; ) {
        if (e.record.aliasOf) return !0;
        e = e.parent;
    }
    return !1;
}
function Wf(e) {
    return e.reduce((t, n) => ge(t, n.meta), {});
}
function vo(e, t) {
    const n = {};
    for (const a in e) n[a] = a in t ? t[a] : e[a];
    return n;
}
function xi(e, t) {
    return t.children.some((n) => n === e || xi(e, n));
}
function qf(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const a = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < a.length; ++r) {
        const l = a[r].replace(gi, " "),
            o = l.indexOf("="),
            s = $n(o < 0 ? l : l.slice(0, o)),
            i = o < 0 ? null : $n(l.slice(o + 1));
        if (s in t) {
            let c = t[s];
            nt(c) || (c = t[s] = [c]), c.push(i);
        } else t[s] = i;
    }
    return t;
}
function mo(e) {
    let t = "";
    for (let n in e) {
        const a = e[n];
        if (((n = vf(n)), a == null)) {
            a !== void 0 && (t += (t.length ? "&" : "") + n);
            continue;
        }
        (nt(a) ? a.map((l) => l && $r(l)) : [a && $r(a)]).forEach((l) => {
            l !== void 0 &&
                ((t += (t.length ? "&" : "") + n), l != null && (t += "=" + l));
        });
    }
    return t;
}
function Kf(e) {
    const t = {};
    for (const n in e) {
        const a = e[n];
        a !== void 0 &&
            (t[n] = nt(a)
                ? a.map((r) => (r == null ? null : "" + r))
                : a == null
                ? a
                : "" + a);
    }
    return t;
}
const Yf = Symbol(""),
    ho = Symbol(""),
    Fa = Symbol(""),
    bl = Symbol(""),
    Lr = Symbol("");
function Pn() {
    let e = [];
    function t(a) {
        return (
            e.push(a),
            () => {
                const r = e.indexOf(a);
                r > -1 && e.splice(r, 1);
            }
        );
    }
    function n() {
        e = [];
    }
    return { add: t, list: () => e.slice(), reset: n };
}
function kt(e, t, n, a, r, l = (o) => o()) {
    const o = a && (a.enterCallbacks[r] = a.enterCallbacks[r] || []);
    return () =>
        new Promise((s, i) => {
            const c = (f) => {
                    f === !1
                        ? i(tn(4, { from: n, to: t }))
                        : f instanceof Error
                        ? i(f)
                        : Rf(f)
                        ? i(tn(2, { from: t, to: f }))
                        : (o &&
                              a.enterCallbacks[r] === o &&
                              typeof f == "function" &&
                              o.push(f),
                          s());
                },
                u = l(() => e.call(a && a.instances[r], t, n, c));
            let d = Promise.resolve(u);
            e.length < 3 && (d = d.then(c)), d.catch((f) => i(f));
        });
}
function fr(e, t, n, a, r = (l) => l()) {
    const l = [];
    for (const o of e)
        for (const s in o.components) {
            let i = o.components[s];
            if (!(t !== "beforeRouteEnter" && !o.instances[s]))
                if (Xf(i)) {
                    const u = (i.__vccOpts || i)[t];
                    u && l.push(kt(u, n, a, o, s, r));
                } else {
                    let c = i();
                    l.push(() =>
                        c.then((u) => {
                            if (!u)
                                return Promise.reject(
                                    new Error(
                                        `Couldn't resolve component "${s}" at "${o.path}"`
                                    )
                                );
                            const d = tf(u) ? u.default : u;
                            o.components[s] = d;
                            const v = (d.__vccOpts || d)[t];
                            return v && kt(v, n, a, o, s, r)();
                        })
                    );
                }
        }
    return l;
}
function Xf(e) {
    return (
        typeof e == "object" ||
        "displayName" in e ||
        "props" in e ||
        "__vccOpts" in e
    );
}
function go(e) {
    const t = ce(Fa),
        n = ce(bl),
        a = p(() => t.resolve(he(e.to))),
        r = p(() => {
            const { matched: i } = a.value,
                { length: c } = i,
                u = i[c - 1],
                d = n.matched;
            if (!u || !d.length) return -1;
            const f = d.findIndex(en.bind(null, u));
            if (f > -1) return f;
            const v = yo(i[c - 2]);
            return c > 1 && yo(u) === v && d[d.length - 1].path !== v
                ? d.findIndex(en.bind(null, i[c - 2]))
                : f;
        }),
        l = p(() => r.value > -1 && ev(n.params, a.value.params)),
        o = p(
            () =>
                r.value > -1 &&
                r.value === n.matched.length - 1 &&
                Si(n.params, a.value.params)
        );
    function s(i = {}) {
        return Qf(i)
            ? t[he(e.replace) ? "replace" : "push"](he(e.to)).catch(In)
            : Promise.resolve();
    }
    return {
        route: a,
        href: p(() => a.value.href),
        isActive: l,
        isExactActive: o,
        navigate: s,
    };
}
const Jf = pt({
        name: "RouterLink",
        compatConfig: { MODE: 3 },
        props: {
            to: { type: [String, Object], required: !0 },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: { type: String, default: "page" },
        },
        useLink: go,
        setup(e, { slots: t }) {
            const n = Fe(go(e)),
                { options: a } = ce(Fa),
                r = p(() => ({
                    [po(
                        e.activeClass,
                        a.linkActiveClass,
                        "router-link-active"
                    )]: n.isActive,
                    [po(
                        e.exactActiveClass,
                        a.linkExactActiveClass,
                        "router-link-exact-active"
                    )]: n.isExactActive,
                }));
            return () => {
                const l = t.default && t.default(n);
                return e.custom
                    ? l
                    : Ht(
                          "a",
                          {
                              "aria-current": n.isExactActive
                                  ? e.ariaCurrentValue
                                  : null,
                              href: n.href,
                              onClick: n.navigate,
                              class: r.value,
                          },
                          l
                      );
            };
        },
    }),
    Zf = Jf;
function Qf(e) {
    if (
        !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
        !e.defaultPrevented &&
        !(e.button !== void 0 && e.button !== 0)
    ) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return;
        }
        return e.preventDefault && e.preventDefault(), !0;
    }
}
function ev(e, t) {
    for (const n in t) {
        const a = t[n],
            r = e[n];
        if (typeof a == "string") {
            if (a !== r) return !1;
        } else if (
            !nt(r) ||
            r.length !== a.length ||
            a.some((l, o) => l !== r[o])
        )
            return !1;
    }
    return !0;
}
function yo(e) {
    return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const po = (e, t, n) => e ?? t ?? n,
    tv = pt({
        name: "RouterView",
        inheritAttrs: !1,
        props: { name: { type: String, default: "default" }, route: Object },
        compatConfig: { MODE: 3 },
        setup(e, { attrs: t, slots: n }) {
            const a = ce(Lr),
                r = p(() => e.route || a.value),
                l = ce(ho, 0),
                o = p(() => {
                    let c = he(l);
                    const { matched: u } = r.value;
                    let d;
                    for (; (d = u[c]) && !d.components; ) c++;
                    return c;
                }),
                s = p(() => r.value.matched[o.value]);
            pe(
                ho,
                p(() => o.value + 1)
            ),
                pe(Yf, s),
                pe(Lr, r);
            const i = H();
            return (
                Z(
                    () => [i.value, s.value, e.name],
                    ([c, u, d], [f, v, h]) => {
                        u &&
                            ((u.instances[d] = c),
                            v &&
                                v !== u &&
                                c &&
                                c === f &&
                                (u.leaveGuards.size ||
                                    (u.leaveGuards = v.leaveGuards),
                                u.updateGuards.size ||
                                    (u.updateGuards = v.updateGuards))),
                            c &&
                                u &&
                                (!v || !en(u, v) || !f) &&
                                (u.enterCallbacks[d] || []).forEach((g) =>
                                    g(c)
                                );
                    },
                    { flush: "post" }
                ),
                () => {
                    const c = r.value,
                        u = e.name,
                        d = s.value,
                        f = d && d.components[u];
                    if (!f) return bo(n.default, { Component: f, route: c });
                    const v = d.props[u],
                        h = v
                            ? v === !0
                                ? c.params
                                : typeof v == "function"
                                ? v(c)
                                : v
                            : null,
                        y = Ht(
                            f,
                            ge({}, h, t, {
                                onVnodeUnmounted: (b) => {
                                    b.component.isUnmounted &&
                                        (d.instances[u] = null);
                                },
                                ref: i,
                            })
                        );
                    return bo(n.default, { Component: y, route: c }) || y;
                }
            );
        },
    });
function bo(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
}
const nv = tv;
function av(e) {
    const t = zf(e.routes, e),
        n = e.parseQuery || qf,
        a = e.stringifyQuery || mo,
        r = e.history,
        l = Pn(),
        o = Pn(),
        s = Pn(),
        i = J(Ct);
    let c = Ct;
    Xt &&
        e.scrollBehavior &&
        "scrollRestoration" in history &&
        (history.scrollRestoration = "manual");
    const u = cr.bind(null, (T) => "" + T),
        d = cr.bind(null, hf),
        f = cr.bind(null, $n);
    function v(T, q) {
        let z, Q;
        return (
            wi(T) ? ((z = t.getRecordMatcher(T)), (Q = q)) : (Q = T),
            t.addRoute(Q, z)
        );
    }
    function h(T) {
        const q = t.getRecordMatcher(T);
        q && t.removeRoute(q);
    }
    function g() {
        return t.getRoutes().map((T) => T.record);
    }
    function y(T) {
        return !!t.getRecordMatcher(T);
    }
    function b(T, q) {
        if (((q = ge({}, q || i.value)), typeof T == "string")) {
            const oe = dr(n, T, q.path),
                Ce = t.resolve({ path: oe.path }, q),
                xn = r.createHref(oe.fullPath);
            return ge(oe, Ce, {
                params: f(Ce.params),
                hash: $n(oe.hash),
                redirectedFrom: void 0,
                href: xn,
            });
        }
        let z;
        if (T.path != null) z = ge({}, T, { path: dr(n, T.path, q.path).path });
        else {
            const oe = ge({}, T.params);
            for (const Ce in oe) oe[Ce] == null && delete oe[Ce];
            (z = ge({}, T, { params: d(oe) })), (q.params = d(q.params));
        }
        const Q = t.resolve(z, q),
            me = T.hash || "";
        Q.params = u(f(Q.params));
        const be = pf(a, ge({}, T, { hash: ff(me), path: Q.path })),
            se = r.createHref(be);
        return ge(
            {
                fullPath: be,
                hash: me,
                query: a === mo ? Kf(T.query) : T.query || {},
            },
            Q,
            { redirectedFrom: void 0, href: se }
        );
    }
    function S(T) {
        return typeof T == "string" ? dr(n, T, i.value.path) : ge({}, T);
    }
    function x(T, q) {
        if (c !== T) return tn(8, { from: q, to: T });
    }
    function P(T) {
        return _(T);
    }
    function E(T) {
        return P(ge(S(T), { replace: !0 }));
    }
    function k(T) {
        const q = T.matched[T.matched.length - 1];
        if (q && q.redirect) {
            const { redirect: z } = q;
            let Q = typeof z == "function" ? z(T) : z;
            return (
                typeof Q == "string" &&
                    ((Q =
                        Q.includes("?") || Q.includes("#")
                            ? (Q = S(Q))
                            : { path: Q }),
                    (Q.params = {})),
                ge(
                    {
                        query: T.query,
                        hash: T.hash,
                        params: Q.path != null ? {} : T.params,
                    },
                    Q
                )
            );
        }
    }
    function _(T, q) {
        const z = (c = b(T)),
            Q = i.value,
            me = T.state,
            be = T.force,
            se = T.replace === !0,
            oe = k(z);
        if (oe)
            return _(
                ge(S(oe), {
                    state: typeof oe == "object" ? ge({}, me, oe.state) : me,
                    force: be,
                    replace: se,
                }),
                q || z
            );
        const Ce = z;
        Ce.redirectedFrom = q;
        let xn;
        return (
            !be &&
                bf(a, Q, z) &&
                ((xn = tn(16, { to: Ce, from: Q })), F(Q, Q, !0, !1)),
            (xn ? Promise.resolve(xn) : A(Ce, Q))
                .catch((Be) =>
                    mt(Be) ? (mt(Be, 2) ? Be : N(Be)) : R(Be, Ce, Q)
                )
                .then((Be) => {
                    if (Be) {
                        if (mt(Be, 2))
                            return _(
                                ge({ replace: se }, S(Be.to), {
                                    state:
                                        typeof Be.to == "object"
                                            ? ge({}, me, Be.to.state)
                                            : me,
                                    force: be,
                                }),
                                q || Ce
                            );
                    } else Be = V(Ce, Q, !0, se, me);
                    return O(Ce, Q, Be), Be;
                })
        );
    }
    function C(T, q) {
        const z = x(T, q);
        return z ? Promise.reject(z) : Promise.resolve();
    }
    function w(T) {
        const q = te.values().next().value;
        return q && typeof q.runWithContext == "function"
            ? q.runWithContext(T)
            : T();
    }
    function A(T, q) {
        let z;
        const [Q, me, be] = rv(T, q);
        z = fr(Q.reverse(), "beforeRouteLeave", T, q);
        for (const oe of Q)
            oe.leaveGuards.forEach((Ce) => {
                z.push(kt(Ce, T, q));
            });
        const se = C.bind(null, T, q);
        return (
            z.push(se),
            X(z)
                .then(() => {
                    z = [];
                    for (const oe of l.list()) z.push(kt(oe, T, q));
                    return z.push(se), X(z);
                })
                .then(() => {
                    z = fr(me, "beforeRouteUpdate", T, q);
                    for (const oe of me)
                        oe.updateGuards.forEach((Ce) => {
                            z.push(kt(Ce, T, q));
                        });
                    return z.push(se), X(z);
                })
                .then(() => {
                    z = [];
                    for (const oe of be)
                        if (oe.beforeEnter)
                            if (nt(oe.beforeEnter))
                                for (const Ce of oe.beforeEnter)
                                    z.push(kt(Ce, T, q));
                            else z.push(kt(oe.beforeEnter, T, q));
                    return z.push(se), X(z);
                })
                .then(
                    () => (
                        T.matched.forEach((oe) => (oe.enterCallbacks = {})),
                        (z = fr(be, "beforeRouteEnter", T, q, w)),
                        z.push(se),
                        X(z)
                    )
                )
                .then(() => {
                    z = [];
                    for (const oe of o.list()) z.push(kt(oe, T, q));
                    return z.push(se), X(z);
                })
                .catch((oe) => (mt(oe, 8) ? oe : Promise.reject(oe)))
        );
    }
    function O(T, q, z) {
        s.list().forEach((Q) => w(() => Q(T, q, z)));
    }
    function V(T, q, z, Q, me) {
        const be = x(T, q);
        if (be) return be;
        const se = q === Ct,
            oe = Xt ? history.state : {};
        z &&
            (Q || se
                ? r.replace(
                      T.fullPath,
                      ge({ scroll: se && oe && oe.scroll }, me)
                  )
                : r.push(T.fullPath, me)),
            (i.value = T),
            F(T, q, z, se),
            N();
    }
    let I;
    function D() {
        I ||
            (I = r.listen((T, q, z) => {
                if (!le.listening) return;
                const Q = b(T),
                    me = k(Q);
                if (me) {
                    _(ge(me, { replace: !0 }), Q).catch(In);
                    return;
                }
                c = Q;
                const be = i.value;
                Xt && Ef(lo(be.fullPath, z.delta), Ba()),
                    A(Q, be)
                        .catch((se) =>
                            mt(se, 12)
                                ? se
                                : mt(se, 2)
                                ? (_(se.to, Q)
                                      .then((oe) => {
                                          mt(oe, 20) &&
                                              !z.delta &&
                                              z.type === Dn.pop &&
                                              r.go(-1, !1);
                                      })
                                      .catch(In),
                                  Promise.reject())
                                : (z.delta && r.go(-z.delta, !1), R(se, Q, be))
                        )
                        .then((se) => {
                            (se = se || V(Q, be, !1)),
                                se &&
                                    (z.delta && !mt(se, 8)
                                        ? r.go(-z.delta, !1)
                                        : z.type === Dn.pop &&
                                          mt(se, 20) &&
                                          r.go(-1, !1)),
                                O(Q, be, se);
                        })
                        .catch(In);
            }));
    }
    let M = Pn(),
        U = Pn(),
        re;
    function R(T, q, z) {
        N(T);
        const Q = U.list();
        return (
            Q.length ? Q.forEach((me) => me(T, q, z)) : console.error(T),
            Promise.reject(T)
        );
    }
    function B() {
        return re && i.value !== Ct
            ? Promise.resolve()
            : new Promise((T, q) => {
                  M.add([T, q]);
              });
    }
    function N(T) {
        return (
            re ||
                ((re = !T),
                D(),
                M.list().forEach(([q, z]) => (T ? z(T) : q())),
                M.reset()),
            T
        );
    }
    function F(T, q, z, Q) {
        const { scrollBehavior: me } = e;
        if (!Xt || !me) return Promise.resolve();
        const be =
            (!z && Af(lo(T.fullPath, 0))) ||
            ((Q || !z) && history.state && history.state.scroll) ||
            null;
        return we()
            .then(() => me(T, q, be))
            .then((se) => se && kf(se))
            .catch((se) => R(se, T, q));
    }
    const G = (T) => r.go(T);
    let j;
    const te = new Set(),
        le = {
            currentRoute: i,
            listening: !0,
            addRoute: v,
            removeRoute: h,
            hasRoute: y,
            getRoutes: g,
            resolve: b,
            options: e,
            push: P,
            replace: E,
            go: G,
            back: () => G(-1),
            forward: () => G(1),
            beforeEach: l.add,
            beforeResolve: o.add,
            afterEach: s.add,
            onError: U.add,
            isReady: B,
            install(T) {
                const q = this;
                T.component("RouterLink", Zf),
                    T.component("RouterView", nv),
                    (T.config.globalProperties.$router = q),
                    Object.defineProperty(T.config.globalProperties, "$route", {
                        enumerable: !0,
                        get: () => he(i),
                    }),
                    Xt &&
                        !j &&
                        i.value === Ct &&
                        ((j = !0), P(r.location).catch((me) => {}));
                const z = {};
                for (const me in Ct)
                    Object.defineProperty(z, me, {
                        get: () => i.value[me],
                        enumerable: !0,
                    });
                T.provide(Fa, q), T.provide(bl, Td(z)), T.provide(Lr, i);
                const Q = T.unmount;
                te.add(T),
                    (T.unmount = function () {
                        te.delete(T),
                            te.size < 1 &&
                                ((c = Ct),
                                I && I(),
                                (I = null),
                                (i.value = Ct),
                                (j = !1),
                                (re = !1)),
                            Q();
                    });
            },
        };
    function X(T) {
        return T.reduce((q, z) => q.then(() => w(z)), Promise.resolve());
    }
    return le;
}
function rv(e, t) {
    const n = [],
        a = [],
        r = [],
        l = Math.max(t.matched.length, e.matched.length);
    for (let o = 0; o < l; o++) {
        const s = t.matched[o];
        s && (e.matched.find((c) => en(c, s)) ? a.push(s) : n.push(s));
        const i = e.matched[o];
        i && (t.matched.find((c) => en(c, i)) || r.push(i));
    }
    return [n, a, r];
}
function lv() {
    return ce(Fa);
}
function ov() {
    return ce(bl);
}
function L(e, t) {
    return (n) =>
        Object.keys(e).reduce((a, r) => {
            const o =
                typeof e[r] == "object" && e[r] != null && !Array.isArray(e[r])
                    ? e[r]
                    : { type: e[r] };
            return (
                n && r in n ? (a[r] = { ...o, default: n[r] }) : (a[r] = o),
                t && !a[r].source && (a[r].source = t),
                a
            );
        }, {});
}
const ie = L(
        {
            class: [String, Array],
            style: { type: [String, Array, Object], default: null },
        },
        "component"
    ),
    _e = typeof window < "u",
    Sl = _e && "IntersectionObserver" in window,
    sv =
        _e && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0);
function So(e, t, n) {
    iv(e, t), t.set(e, n);
}
function iv(e, t) {
    if (t.has(e))
        throw new TypeError(
            "Cannot initialize the same private elements twice on an object"
        );
}
function uv(e, t, n) {
    var a = Pi(e, t, "set");
    return cv(e, a, n), n;
}
function cv(e, t, n) {
    if (t.set) t.set.call(e, n);
    else {
        if (!t.writable)
            throw new TypeError("attempted to set read only private field");
        t.value = n;
    }
}
function $t(e, t) {
    var n = Pi(e, t, "get");
    return dv(e, n);
}
function Pi(e, t, n) {
    if (!t.has(e))
        throw new TypeError(
            "attempted to " + n + " private field on non-instance"
        );
    return t.get(e);
}
function dv(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function ki(e, t, n) {
    const a = t.length - 1;
    if (a < 0) return e === void 0 ? n : e;
    for (let r = 0; r < a; r++) {
        if (e == null) return n;
        e = e[t[r]];
    }
    return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function Tt(e, t) {
    if (e === t) return !0;
    if (
        (e instanceof Date &&
            t instanceof Date &&
            e.getTime() !== t.getTime()) ||
        e !== Object(e) ||
        t !== Object(t)
    )
        return !1;
    const n = Object.keys(e);
    return n.length !== Object.keys(t).length
        ? !1
        : n.every((a) => Tt(e[a], t[a]));
}
function Mt(e, t, n) {
    return e == null || !t || typeof t != "string"
        ? n
        : e[t] !== void 0
        ? e[t]
        : ((t = t.replace(/\[(\w+)\]/g, ".$1")),
          (t = t.replace(/^\./, "")),
          ki(e, t.split("."), n));
}
function Me(e, t, n) {
    if (t === !0) return e === void 0 ? n : e;
    if (t == null || typeof t == "boolean") return n;
    if (e !== Object(e)) {
        if (typeof t != "function") return n;
        const r = t(e, n);
        return typeof r > "u" ? n : r;
    }
    if (typeof t == "string") return Mt(e, t, n);
    if (Array.isArray(t)) return ki(e, t, n);
    if (typeof t != "function") return n;
    const a = t(e, n);
    return typeof a > "u" ? n : a;
}
function Jt(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return Array.from({ length: e }, (n, a) => t + a);
}
function ne(e) {
    let t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
    if (!(e == null || e === ""))
        return isNaN(+e)
            ? String(e)
            : isFinite(+e)
            ? `${Number(e)}${t}`
            : void 0;
}
function Br(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ln(e) {
    if (e && "$el" in e) {
        const t = e.$el;
        return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE
            ? t.nextElementSibling
            : t;
    }
    return e;
}
const _o = Object.freeze({
        enter: 13,
        tab: 9,
        delete: 46,
        esc: 27,
        space: 32,
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        end: 35,
        home: 36,
        del: 46,
        backspace: 8,
        insert: 45,
        pageup: 33,
        pagedown: 34,
        shift: 16,
    }),
    wo = Object.freeze({
        enter: "Enter",
        tab: "Tab",
        delete: "Delete",
        esc: "Escape",
        space: "Space",
        up: "ArrowUp",
        down: "ArrowDown",
        left: "ArrowLeft",
        right: "ArrowRight",
        end: "End",
        home: "Home",
        del: "Delete",
        backspace: "Backspace",
        insert: "Insert",
        pageup: "PageUp",
        pagedown: "PageDown",
        shift: "Shift",
    });
function vr(e, t) {
    return t.every((n) => e.hasOwnProperty(n));
}
function Ei(e, t) {
    const n = {},
        a = new Set(Object.keys(e));
    for (const r of t) a.has(r) && (n[r] = e[r]);
    return n;
}
function Co(e, t, n) {
    const a = Object.create(null),
        r = Object.create(null);
    for (const l in e)
        t.some((o) => (o instanceof RegExp ? o.test(l) : o === l)) &&
        !(n != null && n.some((o) => o === l))
            ? (a[l] = e[l])
            : (r[l] = e[l]);
    return [a, r];
}
function It(e, t) {
    const n = { ...e };
    return t.forEach((a) => delete n[a]), n;
}
const Ai = /^on[^a-z]/,
    Ma = (e) => Ai.test(e),
    fv = [
        "onAfterscriptexecute",
        "onAnimationcancel",
        "onAnimationend",
        "onAnimationiteration",
        "onAnimationstart",
        "onAuxclick",
        "onBeforeinput",
        "onBeforescriptexecute",
        "onChange",
        "onClick",
        "onCompositionend",
        "onCompositionstart",
        "onCompositionupdate",
        "onContextmenu",
        "onCopy",
        "onCut",
        "onDblclick",
        "onFocusin",
        "onFocusout",
        "onFullscreenchange",
        "onFullscreenerror",
        "onGesturechange",
        "onGestureend",
        "onGesturestart",
        "onGotpointercapture",
        "onInput",
        "onKeydown",
        "onKeypress",
        "onKeyup",
        "onLostpointercapture",
        "onMousedown",
        "onMousemove",
        "onMouseout",
        "onMouseover",
        "onMouseup",
        "onMousewheel",
        "onPaste",
        "onPointercancel",
        "onPointerdown",
        "onPointerenter",
        "onPointerleave",
        "onPointermove",
        "onPointerout",
        "onPointerover",
        "onPointerup",
        "onReset",
        "onSelect",
        "onSubmit",
        "onTouchcancel",
        "onTouchend",
        "onTouchmove",
        "onTouchstart",
        "onTransitioncancel",
        "onTransitionend",
        "onTransitionrun",
        "onTransitionstart",
        "onWheel",
    ];
function sn(e) {
    const [t, n] = Co(e, [Ai]),
        a = It(t, fv),
        [r, l] = Co(n, ["class", "style", "id", /^data-/]);
    return Object.assign(r, t), Object.assign(l, a), [r, l];
}
function $e(e) {
    return e == null ? [] : Array.isArray(e) ? e : [e];
}
function vv(e, t) {
    let n = 0;
    const a = function () {
        for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
            l[o] = arguments[o];
        clearTimeout(n), (n = setTimeout(() => e(...l), he(t)));
    };
    return (
        (a.clear = () => {
            clearTimeout(n);
        }),
        (a.immediate = e),
        a
    );
}
function Ke(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    return Math.max(t, Math.min(n, e));
}
function xo(e, t) {
    let n =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
    return e + n.repeat(Math.max(0, t - e.length));
}
function Po(e, t) {
    return (
        (arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : "0"
        ).repeat(Math.max(0, t - e.length)) + e
    );
}
function mv(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    const n = [];
    let a = 0;
    for (; a < e.length; ) n.push(e.substr(a, t)), (a += t);
    return n;
}
function ko(e) {
    let t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
    if (e < t) return `${e} B`;
    const n = t === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
    let a = -1;
    for (; Math.abs(e) >= t && a < n.length - 1; ) (e /= t), ++a;
    return `${e.toFixed(1)} ${n[a]}B`;
}
function ze() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = arguments.length > 2 ? arguments[2] : void 0;
    const a = {};
    for (const r in e) a[r] = e[r];
    for (const r in t) {
        const l = e[r],
            o = t[r];
        if (Br(l) && Br(o)) {
            a[r] = ze(l, o, n);
            continue;
        }
        if (Array.isArray(l) && Array.isArray(o) && n) {
            a[r] = n(l, o);
            continue;
        }
        a[r] = o;
    }
    return a;
}
function Ti(e) {
    return e.map((t) => (t.type === ue ? Ti(t.children) : t)).flat();
}
function Bt() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    if (Bt.cache.has(e)) return Bt.cache.get(e);
    const t = e
        .replace(/[^a-z]/gi, "-")
        .replace(/\B([A-Z])/g, "-$1")
        .toLowerCase();
    return Bt.cache.set(e, t), t;
}
Bt.cache = new Map();
function Vn(e, t) {
    if (!t || typeof t != "object") return [];
    if (Array.isArray(t)) return t.map((n) => Vn(e, n)).flat(1);
    if (Array.isArray(t.children))
        return t.children.map((n) => Vn(e, n)).flat(1);
    if (t.component) {
        if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
            return [t.component];
        if (t.component.subTree) return Vn(e, t.component.subTree).flat(1);
    }
    return [];
}
var Zn = new WeakMap(),
    Wt = new WeakMap();
class hv {
    constructor(t) {
        So(this, Zn, { writable: !0, value: [] }),
            So(this, Wt, { writable: !0, value: 0 }),
            (this.size = t);
    }
    push(t) {
        ($t(this, Zn)[$t(this, Wt)] = t),
            uv(this, Wt, ($t(this, Wt) + 1) % this.size);
    }
    values() {
        return $t(this, Zn)
            .slice($t(this, Wt))
            .concat($t(this, Zn).slice(0, $t(this, Wt)));
    }
}
function _l(e) {
    const t = Fe({}),
        n = p(e);
    return (
        De(
            () => {
                for (const a in n.value) t[a] = n.value[a];
            },
            { flush: "sync" }
        ),
        $a(t)
    );
}
function fa(e, t) {
    return e.includes(t);
}
function Ii(e) {
    return e[2].toLowerCase() + e.slice(3);
}
const Ne = () => [Function, Array];
function Eo(e, t) {
    return (
        (t = "on" + vl(t)),
        !!(
            e[t] ||
            e[`${t}Once`] ||
            e[`${t}Capture`] ||
            e[`${t}OnceCapture`] ||
            e[`${t}CaptureOnce`]
        )
    );
}
function wl(e) {
    for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
        a < t;
        a++
    )
        n[a - 1] = arguments[a];
    if (Array.isArray(e)) for (const r of e) r(...n);
    else typeof e == "function" && e(...n);
}
function va(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const n = [
        "button",
        "[href]",
        'input:not([type="hidden"])',
        "select",
        "textarea",
        "[tabindex]",
    ]
        .map((a) => `${a}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`)
        .join(", ");
    return [...e.querySelectorAll(n)];
}
function Oi(e, t, n) {
    let a,
        r = e.indexOf(document.activeElement);
    const l = t === "next" ? 1 : -1;
    do (r += l), (a = e[r]);
    while (
        (!a ||
            a.offsetParent == null ||
            !((n == null ? void 0 : n(a)) ?? !0)) &&
        r < e.length &&
        r >= 0
    );
    return a;
}
function ma(e, t) {
    var a, r, l, o;
    const n = va(e);
    if (!t)
        (e === document.activeElement || !e.contains(document.activeElement)) &&
            ((a = n[0]) == null || a.focus());
    else if (t === "first") (r = n[0]) == null || r.focus();
    else if (t === "last") (l = n.at(-1)) == null || l.focus();
    else if (typeof t == "number") (o = n[t]) == null || o.focus();
    else {
        const s = Oi(n, t);
        s ? s.focus() : ma(e, t === "next" ? "first" : "last");
    }
}
function Qn(e) {
    return e == null || (typeof e == "string" && e.trim() === "");
}
function Hx() {}
function ha(e, t) {
    if (
        !(
            _e &&
            typeof CSS < "u" &&
            typeof CSS.supports < "u" &&
            CSS.supports(`selector(${t})`)
        )
    )
        return null;
    try {
        return !!e && e.matches(t);
    } catch {
        return null;
    }
}
function Vi(e) {
    return e.some((t) =>
        Id(t) ? (t.type === Od ? !1 : t.type !== ue || Vi(t.children)) : !0
    )
        ? e
        : null;
}
function gv(e, t) {
    if (!_e || e === 0) return t(), () => {};
    const n = window.setTimeout(t, e);
    return () => window.clearTimeout(n);
}
function yv(e, t) {
    const n = e.clientX,
        a = e.clientY,
        r = t.getBoundingClientRect(),
        l = r.left,
        o = r.top,
        s = r.right,
        i = r.bottom;
    return n >= l && n <= s && a >= o && a <= i;
}
const Ri = ["top", "bottom"],
    pv = ["start", "end", "left", "right"];
function Fr(e, t) {
    let [n, a] = e.split(" ");
    return (
        a || (a = fa(Ri, n) ? "start" : fa(pv, n) ? "top" : "center"),
        { side: Mr(n, t), align: Mr(a, t) }
    );
}
function Mr(e, t) {
    return e === "start"
        ? t
            ? "right"
            : "left"
        : e === "end"
        ? t
            ? "left"
            : "right"
        : e;
}
function mr(e) {
    return {
        side: {
            center: "center",
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left",
        }[e.side],
        align: e.align,
    };
}
function hr(e) {
    return {
        side: e.side,
        align: {
            center: "center",
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left",
        }[e.align],
    };
}
function Ao(e) {
    return { side: e.align, align: e.side };
}
function To(e) {
    return fa(Ri, e.side) ? "y" : "x";
}
class Ft {
    constructor(t) {
        let { x: n, y: a, width: r, height: l } = t;
        (this.x = n), (this.y = a), (this.width = r), (this.height = l);
    }
    get top() {
        return this.y;
    }
    get bottom() {
        return this.y + this.height;
    }
    get left() {
        return this.x;
    }
    get right() {
        return this.x + this.width;
    }
}
function Io(e, t) {
    return {
        x: {
            before: Math.max(0, t.left - e.left),
            after: Math.max(0, e.right - t.right),
        },
        y: {
            before: Math.max(0, t.top - e.top),
            after: Math.max(0, e.bottom - t.bottom),
        },
    };
}
function $i(e) {
    return Array.isArray(e)
        ? new Ft({ x: e[0], y: e[1], width: 0, height: 0 })
        : e.getBoundingClientRect();
}
function Cl(e) {
    const t = e.getBoundingClientRect(),
        n = getComputedStyle(e),
        a = n.transform;
    if (a) {
        let r, l, o, s, i;
        if (a.startsWith("matrix3d("))
            (r = a.slice(9, -1).split(/, /)),
                (l = +r[0]),
                (o = +r[5]),
                (s = +r[12]),
                (i = +r[13]);
        else if (a.startsWith("matrix("))
            (r = a.slice(7, -1).split(/, /)),
                (l = +r[0]),
                (o = +r[3]),
                (s = +r[4]),
                (i = +r[5]);
        else return new Ft(t);
        const c = n.transformOrigin,
            u = t.x - s - (1 - l) * parseFloat(c),
            d = t.y - i - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)),
            f = l ? t.width / l : e.offsetWidth + 1,
            v = o ? t.height / o : e.offsetHeight + 1;
        return new Ft({ x: u, y: d, width: f, height: v });
    } else return new Ft(t);
}
function Zt(e, t, n) {
    if (typeof e.animate > "u") return { finished: Promise.resolve() };
    let a;
    try {
        a = e.animate(t, n);
    } catch {
        return { finished: Promise.resolve() };
    }
    return (
        typeof a.finished > "u" &&
            (a.finished = new Promise((r) => {
                a.onfinish = () => {
                    r(a);
                };
            })),
        a
    );
}
const la = new WeakMap();
function bv(e, t) {
    Object.keys(t).forEach((n) => {
        if (Ma(n)) {
            const a = Ii(n),
                r = la.get(e);
            if (t[n] == null)
                r == null ||
                    r.forEach((l) => {
                        const [o, s] = l;
                        o === a && (e.removeEventListener(a, s), r.delete(l));
                    });
            else if (!r || ![...r].some((l) => l[0] === a && l[1] === t[n])) {
                e.addEventListener(a, t[n]);
                const l = r || new Set();
                l.add([a, t[n]]), la.has(e) || la.set(e, l);
            }
        } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
    });
}
function Sv(e, t) {
    Object.keys(t).forEach((n) => {
        if (Ma(n)) {
            const a = Ii(n),
                r = la.get(e);
            r == null ||
                r.forEach((l) => {
                    const [o, s] = l;
                    o === a && (e.removeEventListener(a, s), r.delete(l));
                });
        } else e.removeAttribute(n);
    });
}
const qt = 2.4,
    Oo = 0.2126729,
    Vo = 0.7151522,
    Ro = 0.072175,
    _v = 0.55,
    wv = 0.58,
    Cv = 0.57,
    xv = 0.62,
    ea = 0.03,
    $o = 1.45,
    Pv = 5e-4,
    kv = 1.25,
    Ev = 1.25,
    Do = 0.078,
    Lo = 12.82051282051282,
    ta = 0.06,
    Bo = 0.001;
function Fo(e, t) {
    const n = (e.r / 255) ** qt,
        a = (e.g / 255) ** qt,
        r = (e.b / 255) ** qt,
        l = (t.r / 255) ** qt,
        o = (t.g / 255) ** qt,
        s = (t.b / 255) ** qt;
    let i = n * Oo + a * Vo + r * Ro,
        c = l * Oo + o * Vo + s * Ro;
    if (
        (i <= ea && (i += (ea - i) ** $o),
        c <= ea && (c += (ea - c) ** $o),
        Math.abs(c - i) < Pv)
    )
        return 0;
    let u;
    if (c > i) {
        const d = (c ** _v - i ** wv) * kv;
        u = d < Bo ? 0 : d < Do ? d - d * Lo * ta : d - ta;
    } else {
        const d = (c ** xv - i ** Cv) * Ev;
        u = d > -Bo ? 0 : d > -Do ? d - d * Lo * ta : d + ta;
    }
    return u * 100;
}
function Av(e, t) {
    t = Array.isArray(t)
        ? t
              .slice(0, -1)
              .map((n) => `'${n}'`)
              .join(", ") + ` or '${t.at(-1)}'`
        : `'${t}'`;
}
const ga = 0.20689655172413793,
    Tv = (e) => (e > ga ** 3 ? Math.cbrt(e) : e / (3 * ga ** 2) + 4 / 29),
    Iv = (e) => (e > ga ? e ** 3 : 3 * ga ** 2 * (e - 4 / 29));
function Di(e) {
    const t = Tv,
        n = t(e[1]);
    return [
        116 * n - 16,
        500 * (t(e[0] / 0.95047) - n),
        200 * (n - t(e[2] / 1.08883)),
    ];
}
function Li(e) {
    const t = Iv,
        n = (e[0] + 16) / 116;
    return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const Ov = [
        [3.2406, -1.5372, -0.4986],
        [-0.9689, 1.8758, 0.0415],
        [0.0557, -0.204, 1.057],
    ],
    Vv = (e) => (e <= 0.0031308 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055),
    Rv = [
        [0.4124, 0.3576, 0.1805],
        [0.2126, 0.7152, 0.0722],
        [0.0193, 0.1192, 0.9505],
    ],
    $v = (e) => (e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4);
function Bi(e) {
    const t = Array(3),
        n = Vv,
        a = Ov;
    for (let r = 0; r < 3; ++r)
        t[r] = Math.round(
            Ke(n(a[r][0] * e[0] + a[r][1] * e[1] + a[r][2] * e[2])) * 255
        );
    return { r: t[0], g: t[1], b: t[2] };
}
function xl(e) {
    let { r: t, g: n, b: a } = e;
    const r = [0, 0, 0],
        l = $v,
        o = Rv;
    (t = l(t / 255)), (n = l(n / 255)), (a = l(a / 255));
    for (let s = 0; s < 3; ++s) r[s] = o[s][0] * t + o[s][1] * n + o[s][2] * a;
    return r;
}
function Nr(e) {
    return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Dv(e) {
    return Nr(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Mo = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,
    Lv = {
        rgb: (e, t, n, a) => ({ r: e, g: t, b: n, a }),
        rgba: (e, t, n, a) => ({ r: e, g: t, b: n, a }),
        hsl: (e, t, n, a) => No({ h: e, s: t, l: n, a }),
        hsla: (e, t, n, a) => No({ h: e, s: t, l: n, a }),
        hsv: (e, t, n, a) => Bn({ h: e, s: t, v: n, a }),
        hsva: (e, t, n, a) => Bn({ h: e, s: t, v: n, a }),
    };
function lt(e) {
    if (typeof e == "number")
        return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
    if (typeof e == "string" && Mo.test(e)) {
        const { groups: t } = e.match(Mo),
            { fn: n, values: a } = t,
            r = a
                .split(/,\s*/)
                .map((l) =>
                    l.endsWith("%") &&
                    ["hsl", "hsla", "hsv", "hsva"].includes(n)
                        ? parseFloat(l) / 100
                        : parseFloat(l)
                );
        return Lv[n](...r);
    } else if (typeof e == "string") {
        let t = e.startsWith("#") ? e.slice(1) : e;
        return (
            [3, 4].includes(t.length)
                ? (t = t
                      .split("")
                      .map((n) => n + n)
                      .join(""))
                : [6, 8].includes(t.length),
            Fv(t)
        );
    } else if (typeof e == "object") {
        if (vr(e, ["r", "g", "b"])) return e;
        if (vr(e, ["h", "s", "l"])) return Bn(Fi(e));
        if (vr(e, ["h", "s", "v"])) return Bn(e);
    }
    throw new TypeError(`Invalid color: ${
        e == null ? e : String(e) || e.constructor.name
    }
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Bn(e) {
    const { h: t, s: n, v: a, a: r } = e,
        l = (s) => {
            const i = (s + t / 60) % 6;
            return a - a * n * Math.max(Math.min(i, 4 - i, 1), 0);
        },
        o = [l(5), l(3), l(1)].map((s) => Math.round(s * 255));
    return { r: o[0], g: o[1], b: o[2], a: r };
}
function No(e) {
    return Bn(Fi(e));
}
function Fi(e) {
    const { h: t, s: n, l: a, a: r } = e,
        l = a + n * Math.min(a, 1 - a),
        o = l === 0 ? 0 : 2 - (2 * a) / l;
    return { h: t, s: o, v: l, a: r };
}
function na(e) {
    const t = Math.round(e).toString(16);
    return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Bv(e) {
    let { r: t, g: n, b: a, a: r } = e;
    return `#${[
        na(t),
        na(n),
        na(a),
        r !== void 0 ? na(Math.round(r * 255)) : "",
    ].join("")}`;
}
function Fv(e) {
    e = Mv(e);
    let [t, n, a, r] = mv(e, 2).map((l) => parseInt(l, 16));
    return (r = r === void 0 ? r : r / 255), { r: t, g: n, b: a, a: r };
}
function Mv(e) {
    return (
        e.startsWith("#") && (e = e.slice(1)),
        (e = e.replace(/([^0-9a-f])/gi, "F")),
        (e.length === 3 || e.length === 4) &&
            (e = e
                .split("")
                .map((t) => t + t)
                .join("")),
        e.length !== 6 && (e = xo(xo(e, 6), 8, "F")),
        e
    );
}
function Nv(e, t) {
    const n = Di(xl(e));
    return (n[0] = n[0] + t * 10), Bi(Li(n));
}
function jv(e, t) {
    const n = Di(xl(e));
    return (n[0] = n[0] - t * 10), Bi(Li(n));
}
function Hv(e) {
    const t = lt(e);
    return xl(t)[1];
}
function Mi(e) {
    const t = Math.abs(Fo(lt(0), lt(e)));
    return Math.abs(Fo(lt(16777215), lt(e))) > Math.min(t, 50)
        ? "#fff"
        : "#000";
}
const nn = Symbol.for("vuetify:defaults");
function zv(e) {
    return H(e);
}
function Pl() {
    const e = ce(nn);
    if (!e) throw new Error("[Vuetify] Could not find defaults instance");
    return e;
}
function Je(e, t) {
    const n = Pl(),
        a = H(e),
        r = p(() => {
            if (he(t == null ? void 0 : t.disabled)) return n.value;
            const o = he(t == null ? void 0 : t.scoped),
                s = he(t == null ? void 0 : t.reset),
                i = he(t == null ? void 0 : t.root);
            if (a.value == null && !(o || s || i)) return n.value;
            let c = ze(a.value, { prev: n.value });
            if (o) return c;
            if (s || i) {
                const u = Number(s || 1 / 0);
                for (let d = 0; d <= u && !(!c || !("prev" in c)); d++)
                    c = c.prev;
                return (
                    c &&
                        typeof i == "string" &&
                        i in c &&
                        (c = ze(ze(c, { prev: c }), c[i])),
                    c
                );
            }
            return c.prev ? ze(c.prev, c) : c;
        });
    return pe(nn, r), r;
}
function Uv(e, t) {
    var n, a;
    return (
        typeof ((n = e.props) == null ? void 0 : n[t]) < "u" ||
        typeof ((a = e.props) == null ? void 0 : a[Bt(t)]) < "u"
    );
}
function Gv() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0,
        n =
            arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : Pl();
    const a = xe("useDefaults");
    if (((t = t ?? a.type.name ?? a.type.__name), !t))
        throw new Error("[Vuetify] Could not determine component name");
    const r = p(() => {
            var i;
            return (i = n.value) == null ? void 0 : i[e._as ?? t];
        }),
        l = new Proxy(e, {
            get(i, c) {
                var d, f, v, h;
                const u = Reflect.get(i, c);
                return c === "class" || c === "style"
                    ? [(d = r.value) == null ? void 0 : d[c], u].filter(
                          (g) => g != null
                      )
                    : typeof c == "string" && !Uv(a.vnode, c)
                    ? ((f = r.value) == null ? void 0 : f[c]) ??
                      ((h = (v = n.value) == null ? void 0 : v.global) == null
                          ? void 0
                          : h[c]) ??
                      u
                    : u;
            },
        }),
        o = J();
    De(() => {
        if (r.value) {
            const i = Object.entries(r.value).filter((c) => {
                let [u] = c;
                return u.startsWith(u[0].toUpperCase());
            });
            o.value = i.length ? Object.fromEntries(i) : void 0;
        } else o.value = void 0;
    });
    function s() {
        const i = Xv(nn, a);
        pe(
            nn,
            p(() =>
                o.value
                    ? ze((i == null ? void 0 : i.value) ?? {}, o.value)
                    : i == null
                    ? void 0
                    : i.value
            )
        );
    }
    return { props: l, provideSubDefaults: s };
}
function un(e) {
    if (((e._setup = e._setup ?? e.setup), !e.name)) return e;
    if (e._setup) {
        e.props = L(e.props ?? {}, e.name)();
        const t = Object.keys(e.props).filter(
            (n) => n !== "class" && n !== "style"
        );
        (e.filterProps = function (a) {
            return Ei(a, t);
        }),
            (e.props._as = String),
            (e.setup = function (a, r) {
                const l = Pl();
                if (!l.value) return e._setup(a, r);
                const { props: o, provideSubDefaults: s } = Gv(
                        a,
                        a._as ?? e.name,
                        l
                    ),
                    i = e._setup(o, r);
                return s(), i;
            });
    }
    return e;
}
function Y() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    return (t) => (e ? un : pt)(t);
}
function Wv(e, t) {
    return (t.props = e), t;
}
function Un(e) {
    let t =
            arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : "div",
        n = arguments.length > 2 ? arguments[2] : void 0;
    return Y()({
        name: n ?? vl(oi(e.replace(/__/g, "-"))),
        props: { tag: { type: String, default: t }, ...ie() },
        setup(a, r) {
            let { slots: l } = r;
            return () => {
                var o;
                return Ht(
                    a.tag,
                    { class: [e, a.class], style: a.style },
                    (o = l.default) == null ? void 0 : o.call(l)
                );
            };
        },
    });
}
function Ni(e) {
    if (typeof e.getRootNode != "function") {
        for (; e.parentNode; ) e = e.parentNode;
        return e !== document ? null : document;
    }
    const t = e.getRootNode();
    return t !== document && t.getRootNode({ composed: !0 }) !== document
        ? null
        : t;
}
const ya = "cubic-bezier(0.4, 0, 0.2, 1)",
    qv = "cubic-bezier(0.0, 0, 0.2, 1)",
    Kv = "cubic-bezier(0.4, 0, 1, 1)";
function jo(e, t, n) {
    return Object.keys(e)
        .filter((a) => Ma(a) && a.endsWith(t))
        .reduce(
            (a, r) => ((a[r.slice(0, -t.length)] = (l) => e[r](l, n(l))), a),
            {}
        );
}
function xe(e, t) {
    const n = Vd();
    if (!n)
        throw new Error(
            `[Vuetify] ${e} ${
                t || "must be called from inside a setup function"
            }`
        );
    return n;
}
function ut() {
    let e =
        arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : "composables";
    const t = xe(e).type;
    return Bt(
        (t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name)
    );
}
let ji = 0,
    oa = new WeakMap();
function Ge() {
    const e = xe("getUid");
    if (oa.has(e)) return oa.get(e);
    {
        const t = ji++;
        return oa.set(e, t), t;
    }
}
Ge.reset = () => {
    (ji = 0), (oa = new WeakMap());
};
function Hi(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    for (; e; ) {
        if (t ? Yv(e) : kl(e)) return e;
        e = e.parentElement;
    }
    return document.scrollingElement;
}
function pa(e, t) {
    const n = [];
    if (t && e && !t.contains(e)) return n;
    for (; e && (kl(e) && n.push(e), e !== t); ) e = e.parentElement;
    return n;
}
function kl(e) {
    if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
    const t = window.getComputedStyle(e);
    return (
        t.overflowY === "scroll" ||
        (t.overflowY === "auto" && e.scrollHeight > e.clientHeight)
    );
}
function Yv(e) {
    if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
    const t = window.getComputedStyle(e);
    return ["scroll", "auto"].includes(t.overflowY);
}
function Xv(e) {
    let t =
        arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : xe("injectSelf");
    const { provides: n } = t;
    if (n && e in n) return n[e];
}
function Jv(e) {
    for (; e; ) {
        if (window.getComputedStyle(e).position === "fixed") return !0;
        e = e.offsetParent;
    }
    return !1;
}
function ae(e) {
    const t = xe("useRender");
    t.render = e;
}
function Nt(e) {
    let t =
        arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : "content";
    const n = H(),
        a = H();
    if (_e) {
        const r = new ResizeObserver((l) => {
            e == null || e(l, r),
                l.length &&
                    (t === "content"
                        ? (a.value = l[0].contentRect)
                        : (a.value = l[0].target.getBoundingClientRect()));
        });
        Re(() => {
            r.disconnect();
        }),
            Z(
                n,
                (l, o) => {
                    o && (r.unobserve(Ln(o)), (a.value = void 0)),
                        l && r.observe(Ln(l));
                },
                { flush: "post" }
            );
    }
    return { resizeRef: n, contentRect: ml(a) };
}
const ba = Symbol.for("vuetify:layout"),
    zi = Symbol.for("vuetify:layout-item"),
    Ho = 1e3,
    Ui = L(
        { overlaps: { type: Array, default: () => [] }, fullHeight: Boolean },
        "layout"
    ),
    Gi = L(
        {
            name: { type: String },
            order: { type: [Number, String], default: 0 },
            absolute: Boolean,
        },
        "layout-item"
    );
function Zv() {
    const e = ce(ba);
    if (!e) throw new Error("[Vuetify] Could not find injected layout");
    return {
        getLayoutItem: e.getLayoutItem,
        mainRect: e.mainRect,
        mainStyles: e.mainStyles,
    };
}
function Wi(e) {
    const t = ce(ba);
    if (!t) throw new Error("[Vuetify] Could not find injected layout");
    const n = e.id ?? `layout-item-${Ge()}`,
        a = xe("useLayoutItem");
    pe(zi, { id: n });
    const r = J(!1);
    Rd(() => (r.value = !0)), $d(() => (r.value = !1));
    const { layoutItemStyles: l, layoutItemScrimStyles: o } = t.register(a, {
        ...e,
        active: p(() => (r.value ? !1 : e.active.value)),
        id: n,
    });
    return (
        Re(() => t.unregister(n)),
        {
            layoutItemStyles: l,
            layoutRect: t.layoutRect,
            layoutItemScrimStyles: o,
        }
    );
}
const Qv = (e, t, n, a) => {
    let r = { top: 0, left: 0, right: 0, bottom: 0 };
    const l = [{ id: "", layer: { ...r } }];
    for (const o of e) {
        const s = t.get(o),
            i = n.get(o),
            c = a.get(o);
        if (!s || !i || !c) continue;
        const u = {
            ...r,
            [s.value]:
                parseInt(r[s.value], 10) +
                (c.value ? parseInt(i.value, 10) : 0),
        };
        l.push({ id: o, layer: u }), (r = u);
    }
    return l;
};
function qi(e) {
    const t = ce(ba, null),
        n = p(() => (t ? t.rootZIndex.value - 100 : Ho)),
        a = H([]),
        r = Fe(new Map()),
        l = Fe(new Map()),
        o = Fe(new Map()),
        s = Fe(new Map()),
        i = Fe(new Map()),
        { resizeRef: c, contentRect: u } = Nt(),
        d = p(() => {
            const k = new Map(),
                _ = e.overlaps ?? [];
            for (const C of _.filter((w) => w.includes(":"))) {
                const [w, A] = C.split(":");
                if (!a.value.includes(w) || !a.value.includes(A)) continue;
                const O = r.get(w),
                    V = r.get(A),
                    I = l.get(w),
                    D = l.get(A);
                !O ||
                    !V ||
                    !I ||
                    !D ||
                    (k.set(A, {
                        position: O.value,
                        amount: parseInt(I.value, 10),
                    }),
                    k.set(w, {
                        position: V.value,
                        amount: -parseInt(D.value, 10),
                    }));
            }
            return k;
        }),
        f = p(() => {
            const k = [...new Set([...o.values()].map((C) => C.value))].sort(
                    (C, w) => C - w
                ),
                _ = [];
            for (const C of k) {
                const w = a.value.filter((A) => {
                    var O;
                    return ((O = o.get(A)) == null ? void 0 : O.value) === C;
                });
                _.push(...w);
            }
            return Qv(_, r, l, s);
        }),
        v = p(() => !Array.from(i.values()).some((k) => k.value)),
        h = p(() => f.value[f.value.length - 1].layer),
        g = p(() => ({
            "--v-layout-left": ne(h.value.left),
            "--v-layout-right": ne(h.value.right),
            "--v-layout-top": ne(h.value.top),
            "--v-layout-bottom": ne(h.value.bottom),
            ...(v.value ? void 0 : { transition: "none" }),
        })),
        y = p(() =>
            f.value.slice(1).map((k, _) => {
                let { id: C } = k;
                const { layer: w } = f.value[_],
                    A = l.get(C),
                    O = r.get(C);
                return {
                    id: C,
                    ...w,
                    size: Number(A.value),
                    position: O.value,
                };
            })
        ),
        b = (k) => y.value.find((_) => _.id === k),
        S = xe("createLayout"),
        x = J(!1);
    Ue(() => {
        x.value = !0;
    }),
        pe(ba, {
            register: (k, _) => {
                let {
                    id: C,
                    order: w,
                    position: A,
                    layoutSize: O,
                    elementSize: V,
                    active: I,
                    disableTransitions: D,
                    absolute: M,
                } = _;
                o.set(C, w),
                    r.set(C, A),
                    l.set(C, O),
                    s.set(C, I),
                    D && i.set(C, D);
                const re = Vn(zi, S == null ? void 0 : S.vnode).indexOf(k);
                re > -1 ? a.value.splice(re, 0, C) : a.value.push(C);
                const R = p(() => y.value.findIndex((G) => G.id === C)),
                    B = p(() => n.value + f.value.length * 2 - R.value * 2),
                    N = p(() => {
                        const G = A.value === "left" || A.value === "right",
                            j = A.value === "right",
                            te = A.value === "bottom",
                            le = {
                                [A.value]: 0,
                                zIndex: B.value,
                                transform: `translate${G ? "X" : "Y"}(${
                                    (I.value ? 0 : -110) * (j || te ? -1 : 1)
                                }%)`,
                                position:
                                    M.value || n.value !== Ho
                                        ? "absolute"
                                        : "fixed",
                                ...(v.value ? void 0 : { transition: "none" }),
                            };
                        if (!x.value) return le;
                        const X = y.value[R.value];
                        if (!X)
                            throw new Error(
                                `[Vuetify] Could not find layout item "${C}"`
                            );
                        const T = d.value.get(C);
                        return (
                            T && (X[T.position] += T.amount),
                            {
                                ...le,
                                height: G
                                    ? `calc(100% - ${X.top}px - ${X.bottom}px)`
                                    : V.value
                                    ? `${V.value}px`
                                    : void 0,
                                left: j ? void 0 : `${X.left}px`,
                                right: j ? `${X.right}px` : void 0,
                                top:
                                    A.value !== "bottom"
                                        ? `${X.top}px`
                                        : void 0,
                                bottom:
                                    A.value !== "top"
                                        ? `${X.bottom}px`
                                        : void 0,
                                width: G
                                    ? V.value
                                        ? `${V.value}px`
                                        : void 0
                                    : `calc(100% - ${X.left}px - ${X.right}px)`,
                            }
                        );
                    }),
                    F = p(() => ({ zIndex: B.value - 1 }));
                return {
                    layoutItemStyles: N,
                    layoutItemScrimStyles: F,
                    zIndex: B,
                };
            },
            unregister: (k) => {
                o.delete(k),
                    r.delete(k),
                    l.delete(k),
                    s.delete(k),
                    i.delete(k),
                    (a.value = a.value.filter((_) => _ !== k));
            },
            mainRect: h,
            mainStyles: g,
            getLayoutItem: b,
            items: y,
            layoutRect: u,
            rootZIndex: n,
        });
    const P = p(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]),
        E = p(() => ({
            zIndex: t ? n.value : void 0,
            position: t ? "relative" : void 0,
            overflow: t ? "hidden" : void 0,
        }));
    return {
        layoutClasses: P,
        layoutStyles: E,
        getLayoutItem: b,
        items: y,
        layoutRect: u,
        layoutRef: c,
    };
}
function tt(e, t) {
    let n;
    function a() {
        (n = zn()),
            n.run(() =>
                t.length
                    ? t(() => {
                          n == null || n.stop(), a();
                      })
                    : t()
            );
    }
    Z(
        e,
        (r) => {
            r && !n ? a() : r || (n == null || n.stop(), (n = void 0));
        },
        { immediate: !0 }
    ),
        Ve(() => {
            n == null || n.stop();
        });
}
function ve(e, t, n) {
    let a =
            arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : (d) => d,
        r =
            arguments.length > 4 && arguments[4] !== void 0
                ? arguments[4]
                : (d) => d;
    const l = xe("useProxiedModel"),
        o = H(e[t] !== void 0 ? e[t] : n),
        s = Bt(t),
        c =
            s !== t
                ? p(() => {
                      var d, f, v, h;
                      return (
                          e[t],
                          !!(
                              (((d = l.vnode.props) != null &&
                                  d.hasOwnProperty(t)) ||
                                  ((f = l.vnode.props) != null &&
                                      f.hasOwnProperty(s))) &&
                              (((v = l.vnode.props) != null &&
                                  v.hasOwnProperty(`onUpdate:${t}`)) ||
                                  ((h = l.vnode.props) != null &&
                                      h.hasOwnProperty(`onUpdate:${s}`)))
                          )
                      );
                  })
                : p(() => {
                      var d, f;
                      return (
                          e[t],
                          !!(
                              (d = l.vnode.props) != null &&
                              d.hasOwnProperty(t) &&
                              (f = l.vnode.props) != null &&
                              f.hasOwnProperty(`onUpdate:${t}`)
                          )
                      );
                  });
    tt(
        () => !c.value,
        () => {
            Z(
                () => e[t],
                (d) => {
                    o.value = d;
                }
            );
        }
    );
    const u = p({
        get() {
            const d = e[t];
            return a(c.value ? d : o.value);
        },
        set(d) {
            const f = r(d),
                v = it(c.value ? e[t] : o.value);
            v === f ||
                a(v) === d ||
                ((o.value = f), l == null || l.emit(`update:${t}`, f));
        },
    });
    return (
        Object.defineProperty(u, "externalValue", {
            get: () => (c.value ? e[t] : o.value),
        }),
        u
    );
}
const em = {
        badge: "Badge",
        open: "Open",
        close: "Close",
        confirmEdit: { ok: "OK", cancel: "Cancel" },
        dataIterator: {
            noResultsText: "No matching records found",
            loadingText: "Loading items...",
        },
        dataTable: {
            itemsPerPageText: "Rows per page:",
            ariaLabel: {
                sortDescending: "Sorted descending.",
                sortAscending: "Sorted ascending.",
                sortNone: "Not sorted.",
                activateNone: "Activate to remove sorting.",
                activateDescending: "Activate to sort descending.",
                activateAscending: "Activate to sort ascending.",
            },
            sortBy: "Sort by",
        },
        dataFooter: {
            itemsPerPageText: "Items per page:",
            itemsPerPageAll: "All",
            nextPage: "Next page",
            prevPage: "Previous page",
            firstPage: "First page",
            lastPage: "Last page",
            pageText: "{0}-{1} of {2}",
        },
        dateRangeInput: { divider: "to" },
        datePicker: {
            itemsSelected: "{0} selected",
            range: { title: "Select dates", header: "Enter dates" },
            title: "Select date",
            header: "Enter date",
            input: { placeholder: "Enter date" },
        },
        noDataText: "No data available",
        carousel: {
            prev: "Previous visual",
            next: "Next visual",
            ariaLabel: { delimiter: "Carousel slide {0} of {1}" },
        },
        calendar: { moreEvents: "{0} more", today: "Today" },
        input: {
            clear: "Clear {0}",
            prependAction: "{0} prepended action",
            appendAction: "{0} appended action",
            otp: "Please enter OTP character {0}",
        },
        fileInput: {
            counter: "{0} files",
            counterSize: "{0} files ({1} in total)",
        },
        timePicker: { am: "AM", pm: "PM" },
        pagination: {
            ariaLabel: {
                root: "Pagination Navigation",
                next: "Next page",
                previous: "Previous page",
                page: "Go to page {0}",
                currentPage: "Page {0}, Current page",
                first: "First page",
                last: "Last page",
            },
        },
        stepper: { next: "Next", prev: "Previous" },
        rating: { ariaLabel: { item: "Rating {0} of {1}" } },
        loading: "Loading...",
        infiniteScroll: { loadMore: "Load more", empty: "No more" },
    },
    zo = "$vuetify.",
    Uo = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[+a])),
    Ki = (e, t, n) =>
        function (a) {
            for (
                var r = arguments.length,
                    l = new Array(r > 1 ? r - 1 : 0),
                    o = 1;
                o < r;
                o++
            )
                l[o - 1] = arguments[o];
            if (!a.startsWith(zo)) return Uo(a, l);
            const s = a.replace(zo, ""),
                i = e.value && n.value[e.value],
                c = t.value && n.value[t.value];
            let u = Mt(i, s, null);
            return (
                u || (`${a}${e.value}`, (u = Mt(c, s, null))),
                u || (u = a),
                typeof u != "string" && (u = a),
                Uo(u, l)
            );
        };
function Yi(e, t) {
    return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function gr(e, t, n) {
    const a = ve(e, t, e[t] ?? n.value);
    return (
        (a.value = e[t] ?? n.value),
        Z(n, (r) => {
            e[t] == null && (a.value = n.value);
        }),
        a
    );
}
function Xi(e) {
    return (t) => {
        const n = gr(t, "locale", e.current),
            a = gr(t, "fallback", e.fallback),
            r = gr(t, "messages", e.messages);
        return {
            name: "vuetify",
            current: n,
            fallback: a,
            messages: r,
            t: Ki(n, a, r),
            n: Yi(n, a),
            provide: Xi({ current: n, fallback: a, messages: r }),
        };
    };
}
function tm(e) {
    const t = J((e == null ? void 0 : e.locale) ?? "en"),
        n = J((e == null ? void 0 : e.fallback) ?? "en"),
        a = H({ en: em, ...(e == null ? void 0 : e.messages) });
    return {
        name: "vuetify",
        current: t,
        fallback: n,
        messages: a,
        t: Ki(t, n, a),
        n: Yi(t, n),
        provide: Xi({ current: t, fallback: n, messages: a }),
    };
}
const Sa = Symbol.for("vuetify:locale");
function nm(e) {
    return e.name != null;
}
function am(e) {
    const t =
            e != null && e.adapter && nm(e == null ? void 0 : e.adapter)
                ? e == null
                    ? void 0
                    : e.adapter
                : tm(e),
        n = lm(t, e);
    return { ...t, ...n };
}
function Ot() {
    const e = ce(Sa);
    if (!e)
        throw new Error("[Vuetify] Could not find injected locale instance");
    return e;
}
function rm() {
    return {
        af: !1,
        ar: !0,
        bg: !1,
        ca: !1,
        ckb: !1,
        cs: !1,
        de: !1,
        el: !1,
        en: !1,
        es: !1,
        et: !1,
        fa: !0,
        fi: !1,
        fr: !1,
        hr: !1,
        hu: !1,
        he: !0,
        id: !1,
        it: !1,
        ja: !1,
        km: !1,
        ko: !1,
        lv: !1,
        lt: !1,
        nl: !1,
        no: !1,
        pl: !1,
        pt: !1,
        ro: !1,
        ru: !1,
        sk: !1,
        sl: !1,
        srCyrl: !1,
        srLatn: !1,
        sv: !1,
        th: !1,
        tr: !1,
        az: !1,
        uk: !1,
        vi: !1,
        zhHans: !1,
        zhHant: !1,
    };
}
function lm(e, t) {
    const n = H((t == null ? void 0 : t.rtl) ?? rm()),
        a = p(() => n.value[e.current.value] ?? !1);
    return {
        isRtl: a,
        rtl: n,
        rtlClasses: p(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`),
    };
}
function ct() {
    const e = ce(Sa);
    if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
    return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Fn = Symbol.for("vuetify:theme"),
    Pe = L({ theme: String }, "theme");
function Go() {
    return {
        defaultTheme: "light",
        variations: { colors: [], lighten: 0, darken: 0 },
        themes: {
            light: {
                dark: !1,
                colors: {
                    background: "#FFFFFF",
                    surface: "#FFFFFF",
                    "surface-bright": "#FFFFFF",
                    "surface-light": "#EEEEEE",
                    "surface-variant": "#424242",
                    "on-surface-variant": "#EEEEEE",
                    primary: "#1867C0",
                    "primary-darken-1": "#1F5592",
                    secondary: "#48A9A6",
                    "secondary-darken-1": "#018786",
                    error: "#B00020",
                    info: "#2196F3",
                    success: "#4CAF50",
                    warning: "#FB8C00",
                },
                variables: {
                    "border-color": "#000000",
                    "border-opacity": 0.12,
                    "high-emphasis-opacity": 0.87,
                    "medium-emphasis-opacity": 0.6,
                    "disabled-opacity": 0.38,
                    "idle-opacity": 0.04,
                    "hover-opacity": 0.04,
                    "focus-opacity": 0.12,
                    "selected-opacity": 0.08,
                    "activated-opacity": 0.12,
                    "pressed-opacity": 0.12,
                    "dragged-opacity": 0.08,
                    "theme-kbd": "#212529",
                    "theme-on-kbd": "#FFFFFF",
                    "theme-code": "#F5F5F5",
                    "theme-on-code": "#000000",
                },
            },
            dark: {
                dark: !0,
                colors: {
                    background: "#121212",
                    surface: "#212121",
                    "surface-bright": "#ccbfd6",
                    "surface-light": "#424242",
                    "surface-variant": "#a3a3a3",
                    "on-surface-variant": "#424242",
                    primary: "#2196F3",
                    "primary-darken-1": "#277CC1",
                    secondary: "#54B6B2",
                    "secondary-darken-1": "#48A9A6",
                    error: "#CF6679",
                    info: "#2196F3",
                    success: "#4CAF50",
                    warning: "#FB8C00",
                },
                variables: {
                    "border-color": "#FFFFFF",
                    "border-opacity": 0.12,
                    "high-emphasis-opacity": 1,
                    "medium-emphasis-opacity": 0.7,
                    "disabled-opacity": 0.5,
                    "idle-opacity": 0.1,
                    "hover-opacity": 0.04,
                    "focus-opacity": 0.12,
                    "selected-opacity": 0.08,
                    "activated-opacity": 0.12,
                    "pressed-opacity": 0.16,
                    "dragged-opacity": 0.08,
                    "theme-kbd": "#212529",
                    "theme-on-kbd": "#FFFFFF",
                    "theme-code": "#343434",
                    "theme-on-code": "#CCCCCC",
                },
            },
        },
    };
}
function om() {
    var a, r;
    let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Go();
    const t = Go();
    if (!e) return { ...t, isDisabled: !0 };
    const n = {};
    for (const [l, o] of Object.entries(e.themes ?? {})) {
        const s =
            o.dark || l === "dark"
                ? (a = t.themes) == null
                    ? void 0
                    : a.dark
                : (r = t.themes) == null
                ? void 0
                : r.light;
        n[l] = ze(s, o);
    }
    return ze(t, { ...e, themes: n });
}
function sm(e) {
    const t = om(e),
        n = H(t.defaultTheme),
        a = H(t.themes),
        r = p(() => {
            const u = {};
            for (const [d, f] of Object.entries(a.value)) {
                const v = (u[d] = { ...f, colors: { ...f.colors } });
                if (t.variations)
                    for (const h of t.variations.colors) {
                        const g = v.colors[h];
                        if (g)
                            for (const y of ["lighten", "darken"]) {
                                const b = y === "lighten" ? Nv : jv;
                                for (const S of Jt(t.variations[y], 1))
                                    v.colors[`${h}-${y}-${S}`] = Bv(
                                        b(lt(g), S)
                                    );
                            }
                    }
                for (const h of Object.keys(v.colors)) {
                    if (/^on-[a-z]/.test(h) || v.colors[`on-${h}`]) continue;
                    const g = `on-${h}`,
                        y = lt(v.colors[h]);
                    v.colors[g] = Mi(y);
                }
            }
            return u;
        }),
        l = p(() => r.value[n.value]),
        o = p(() => {
            const u = [];
            l.value.dark && Dt(u, ":root", ["color-scheme: dark"]),
                Dt(u, ":root", Wo(l.value));
            for (const [h, g] of Object.entries(r.value))
                Dt(u, `.v-theme--${h}`, [
                    `color-scheme: ${g.dark ? "dark" : "normal"}`,
                    ...Wo(g),
                ]);
            const d = [],
                f = [],
                v = new Set(
                    Object.values(r.value).flatMap((h) => Object.keys(h.colors))
                );
            for (const h of v)
                /^on-[a-z]/.test(h)
                    ? Dt(f, `.${h}`, [
                          `color: rgb(var(--v-theme-${h})) !important`,
                      ])
                    : (Dt(d, `.bg-${h}`, [
                          `--v-theme-overlay-multiplier: var(--v-theme-${h}-overlay-multiplier)`,
                          `background-color: rgb(var(--v-theme-${h})) !important`,
                          `color: rgb(var(--v-theme-on-${h})) !important`,
                      ]),
                      Dt(f, `.text-${h}`, [
                          `color: rgb(var(--v-theme-${h})) !important`,
                      ]),
                      Dt(f, `.border-${h}`, [
                          `--v-border-color: var(--v-theme-${h})`,
                      ]));
            return (
                u.push(...d, ...f),
                u.map((h, g) => (g === 0 ? h : `    ${h}`)).join("")
            );
        });
    function s() {
        return {
            style: [
                {
                    children: o.value,
                    id: "vuetify-theme-stylesheet",
                    nonce: t.cspNonce || !1,
                },
            ],
        };
    }
    function i(u) {
        if (t.isDisabled) return;
        const d = u._context.provides.usehead;
        if (d)
            if (d.push) {
                const f = d.push(s);
                _e &&
                    Z(o, () => {
                        f.patch(s);
                    });
            } else
                _e
                    ? (d.addHeadObjs(p(s)), De(() => d.updateDOM()))
                    : d.addHeadObjs(s());
        else {
            let v = function () {
                    if (typeof document < "u" && !f) {
                        const h = document.createElement("style");
                        (h.type = "text/css"),
                            (h.id = "vuetify-theme-stylesheet"),
                            t.cspNonce && h.setAttribute("nonce", t.cspNonce),
                            (f = h),
                            document.head.appendChild(f);
                    }
                    f && (f.innerHTML = o.value);
                },
                f = _e
                    ? document.getElementById("vuetify-theme-stylesheet")
                    : null;
            _e ? Z(o, v, { immediate: !0 }) : v();
        }
    }
    const c = p(() => (t.isDisabled ? void 0 : `v-theme--${n.value}`));
    return {
        install: i,
        isDisabled: t.isDisabled,
        name: n,
        themes: a,
        current: l,
        computedThemes: r,
        themeClasses: c,
        styles: o,
        global: { name: n, current: l },
    };
}
function Ie(e) {
    xe("provideTheme");
    const t = ce(Fn, null);
    if (!t) throw new Error("Could not find Vuetify theme injection");
    const n = p(() => e.theme ?? t.name.value),
        a = p(() => t.themes.value[n.value]),
        r = p(() => (t.isDisabled ? void 0 : `v-theme--${n.value}`)),
        l = { ...t, name: n, current: a, themeClasses: r };
    return pe(Fn, l), l;
}
function im() {
    xe("useTheme");
    const e = ce(Fn, null);
    if (!e) throw new Error("Could not find Vuetify theme injection");
    return e;
}
function Dt(e, t, n) {
    e.push(
        `${t} {
`,
        ...n.map(
            (a) => `  ${a};
`
        ),
        `}
`
    );
}
function Wo(e) {
    const t = e.dark ? 2 : 1,
        n = e.dark ? 1 : 2,
        a = [];
    for (const [r, l] of Object.entries(e.colors)) {
        const o = lt(l);
        a.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),
            r.startsWith("on-") ||
                a.push(
                    `--v-theme-${r}-overlay-multiplier: ${Hv(l) > 0.18 ? t : n}`
                );
    }
    for (const [r, l] of Object.entries(e.variables)) {
        const o = typeof l == "string" && l.startsWith("#") ? lt(l) : void 0,
            s = o ? `${o.r}, ${o.g}, ${o.b}` : void 0;
        a.push(`--v-${r}: ${s ?? l}`);
    }
    return a;
}
const um = L({ ...ie(), ...Ui({ fullHeight: !0 }), ...Pe() }, "VApp"),
    cm = Y()({
        name: "VApp",
        props: um(),
        setup(e, t) {
            let { slots: n } = t;
            const a = Ie(e),
                {
                    layoutClasses: r,
                    getLayoutItem: l,
                    items: o,
                    layoutRef: s,
                } = qi(e),
                { rtlClasses: i } = ct();
            return (
                ae(() => {
                    var c;
                    return m(
                        "div",
                        {
                            ref: s,
                            class: [
                                "v-application",
                                a.themeClasses.value,
                                r.value,
                                i.value,
                                e.class,
                            ],
                            style: [e.style],
                        },
                        [
                            m("div", { class: "v-application__wrap" }, [
                                (c = n.default) == null ? void 0 : c.call(n),
                            ]),
                        ]
                    );
                }),
                { getLayoutItem: l, items: o, theme: a }
            );
        },
    }),
    St = L({ border: [Boolean, Number, String] }, "border");
function Vt(e) {
    let t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
    return {
        borderClasses: p(() => {
            const a = Xe(e) ? e.value : e.border,
                r = [];
            if (a === !0 || a === "") r.push(`${t}--border`);
            else if (typeof a == "string" || a === 0)
                for (const l of String(a).split(" ")) r.push(`border-${l}`);
            return r;
        }),
    };
}
const dm = [null, "default", "comfortable", "compact"],
    Ze = L(
        {
            density: {
                type: String,
                default: "default",
                validator: (e) => dm.includes(e),
            },
        },
        "density"
    );
function dt(e) {
    let t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
    return { densityClasses: p(() => `${t}--density-${e.density}`) };
}
const _t = L(
    {
        elevation: {
            type: [Number, String],
            validator(e) {
                const t = parseInt(e);
                return !isNaN(t) && t >= 0 && t <= 24;
            },
        },
    },
    "elevation"
);
function Rt(e) {
    return {
        elevationClasses: p(() => {
            const n = Xe(e) ? e.value : e.elevation,
                a = [];
            return n == null || a.push(`elevation-${n}`), a;
        }),
    };
}
const je = L(
    {
        rounded: { type: [Boolean, Number, String], default: void 0 },
        tile: Boolean,
    },
    "rounded"
);
function We(e) {
    let t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
    return {
        roundedClasses: p(() => {
            const a = Xe(e) ? e.value : e.rounded,
                r = Xe(e) ? e.value : e.tile,
                l = [];
            if (a === !0 || a === "") l.push(`${t}--rounded`);
            else if (typeof a == "string" || a === 0)
                for (const o of String(a).split(" ")) l.push(`rounded-${o}`);
            else r && l.push("rounded-0");
            return l;
        }),
    };
}
const Oe = L({ tag: { type: String, default: "div" } }, "tag");
function El(e) {
    return _l(() => {
        const t = [],
            n = {};
        if (e.value.background)
            if (Nr(e.value.background)) {
                if (
                    ((n.backgroundColor = e.value.background),
                    !e.value.text && Dv(e.value.background))
                ) {
                    const a = lt(e.value.background);
                    if (a.a == null || a.a === 1) {
                        const r = Mi(a);
                        (n.color = r), (n.caretColor = r);
                    }
                }
            } else t.push(`bg-${e.value.background}`);
        return (
            e.value.text &&
                (Nr(e.value.text)
                    ? ((n.color = e.value.text), (n.caretColor = e.value.text))
                    : t.push(`text-${e.value.text}`)),
            { colorClasses: t, colorStyles: n }
        );
    });
}
function yt(e, t) {
    const n = p(() => ({ text: Xe(e) ? e.value : t ? e[t] : null })),
        { colorClasses: a, colorStyles: r } = El(n);
    return { textColorClasses: a, textColorStyles: r };
}
function at(e, t) {
    const n = p(() => ({ background: Xe(e) ? e.value : t ? e[t] : null })),
        { colorClasses: a, colorStyles: r } = El(n);
    return { backgroundColorClasses: a, backgroundColorStyles: r };
}
const fm = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function cn(e, t) {
    return m(ue, null, [
        e && m("span", { key: "overlay", class: `${t}__overlay` }, null),
        m("span", { key: "underlay", class: `${t}__underlay` }, null),
    ]);
}
const ft = L(
    {
        color: String,
        variant: {
            type: String,
            default: "elevated",
            validator: (e) => fm.includes(e),
        },
    },
    "variant"
);
function dn(e) {
    let t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
    const n = p(() => {
            const { variant: l } = he(e);
            return `${t}--variant-${l}`;
        }),
        { colorClasses: a, colorStyles: r } = El(
            p(() => {
                const { variant: l, color: o } = he(e);
                return {
                    [["elevated", "flat"].includes(l) ? "background" : "text"]:
                        o,
                };
            })
        );
    return { colorClasses: a, colorStyles: r, variantClasses: n };
}
const Ji = L(
        {
            divided: Boolean,
            ...St(),
            ...ie(),
            ...Ze(),
            ..._t(),
            ...je(),
            ...Oe(),
            ...Pe(),
            ...ft(),
        },
        "VBtnGroup"
    ),
    qo = Y()({
        name: "VBtnGroup",
        props: Ji(),
        setup(e, t) {
            let { slots: n } = t;
            const { themeClasses: a } = Ie(e),
                { densityClasses: r } = dt(e),
                { borderClasses: l } = Vt(e),
                { elevationClasses: o } = Rt(e),
                { roundedClasses: s } = We(e);
            Je({
                VBtn: {
                    height: "auto",
                    color: W(e, "color"),
                    density: W(e, "density"),
                    flat: !0,
                    variant: W(e, "variant"),
                },
            }),
                ae(() =>
                    m(
                        e.tag,
                        {
                            class: [
                                "v-btn-group",
                                { "v-btn-group--divided": e.divided },
                                a.value,
                                l.value,
                                r.value,
                                o.value,
                                s.value,
                                e.class,
                            ],
                            style: e.style,
                        },
                        n
                    )
                );
        },
    }),
    Al = L(
        {
            modelValue: { type: null, default: void 0 },
            multiple: Boolean,
            mandatory: [Boolean, String],
            max: Number,
            selectedClass: String,
            disabled: Boolean,
        },
        "group"
    ),
    Zi = L(
        { value: null, disabled: Boolean, selectedClass: String },
        "group-item"
    );
function Qi(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    const a = xe("useGroupItem");
    if (!a)
        throw new Error(
            "[Vuetify] useGroupItem composable must be used inside a component setup function"
        );
    const r = Ge();
    pe(Symbol.for(`${t.description}:id`), r);
    const l = ce(t, null);
    if (!l) {
        if (!n) return l;
        throw new Error(
            `[Vuetify] Could not find useGroup injection with symbol ${t.description}`
        );
    }
    const o = W(e, "value"),
        s = p(() => !!(l.disabled.value || e.disabled));
    l.register({ id: r, value: o, disabled: s }, a),
        Re(() => {
            l.unregister(r);
        });
    const i = p(() => l.isSelected(r)),
        c = p(() => i.value && [l.selectedClass.value, e.selectedClass]);
    return (
        Z(
            i,
            (u) => {
                a.emit("group:selected", { value: u });
            },
            { flush: "sync" }
        ),
        {
            id: r,
            isSelected: i,
            toggle: () => l.select(r, !i.value),
            select: (u) => l.select(r, u),
            selectedClass: c,
            value: o,
            disabled: s,
            group: l,
        }
    );
}
function Tl(e, t) {
    let n = !1;
    const a = Fe([]),
        r = ve(
            e,
            "modelValue",
            [],
            (f) => (f == null ? [] : eu(a, $e(f))),
            (f) => {
                const v = mm(a, f);
                return e.multiple ? v : v[0];
            }
        ),
        l = xe("useGroup");
    function o(f, v) {
        const h = f,
            g = Symbol.for(`${t.description}:id`),
            b = Vn(g, l == null ? void 0 : l.vnode).indexOf(v);
        he(h.value) == null && (h.value = b),
            b > -1 ? a.splice(b, 0, h) : a.push(h);
    }
    function s(f) {
        if (n) return;
        i();
        const v = a.findIndex((h) => h.id === f);
        a.splice(v, 1);
    }
    function i() {
        const f = a.find((v) => !v.disabled);
        f && e.mandatory === "force" && !r.value.length && (r.value = [f.id]);
    }
    Ue(() => {
        i();
    }),
        Re(() => {
            n = !0;
        });
    function c(f, v) {
        const h = a.find((g) => g.id === f);
        if (!(v && h != null && h.disabled))
            if (e.multiple) {
                const g = r.value.slice(),
                    y = g.findIndex((S) => S === f),
                    b = ~y;
                if (
                    ((v = v ?? !b),
                    (b && e.mandatory && g.length <= 1) ||
                        (!b && e.max != null && g.length + 1 > e.max))
                )
                    return;
                y < 0 && v ? g.push(f) : y >= 0 && !v && g.splice(y, 1),
                    (r.value = g);
            } else {
                const g = r.value.includes(f);
                if (e.mandatory && g) return;
                r.value = v ?? !g ? [f] : [];
            }
    }
    function u(f) {
        if ((e.multiple, r.value.length)) {
            const v = r.value[0],
                h = a.findIndex((b) => b.id === v);
            let g = (h + f) % a.length,
                y = a[g];
            for (; y.disabled && g !== h; )
                (g = (g + f) % a.length), (y = a[g]);
            if (y.disabled) return;
            r.value = [a[g].id];
        } else {
            const v = a.find((h) => !h.disabled);
            v && (r.value = [v.id]);
        }
    }
    const d = {
        register: o,
        unregister: s,
        selected: r,
        select: c,
        disabled: W(e, "disabled"),
        prev: () => u(a.length - 1),
        next: () => u(1),
        isSelected: (f) => r.value.includes(f),
        selectedClass: p(() => e.selectedClass),
        items: p(() => a),
        getItemIndex: (f) => vm(a, f),
    };
    return pe(t, d), d;
}
function vm(e, t) {
    const n = eu(e, [t]);
    return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function eu(e, t) {
    const n = [];
    return (
        t.forEach((a) => {
            const r = e.find((o) => Tt(a, o.value)),
                l = e[a];
            (r == null ? void 0 : r.value) != null
                ? n.push(r.id)
                : l != null && n.push(l.id);
        }),
        n
    );
}
function mm(e, t) {
    const n = [];
    return (
        t.forEach((a) => {
            const r = e.findIndex((l) => l.id === a);
            if (~r) {
                const l = e[r];
                n.push(l.value != null ? l.value : r);
            }
        }),
        n
    );
}
const tu = Symbol.for("vuetify:v-btn-toggle"),
    hm = L({ ...Ji(), ...Al() }, "VBtnToggle");
Y()({
    name: "VBtnToggle",
    props: hm(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
        let { slots: n } = t;
        const {
            isSelected: a,
            next: r,
            prev: l,
            select: o,
            selected: s,
        } = Tl(e, tu);
        return (
            ae(() => {
                const i = qo.filterProps(e);
                return m(
                    qo,
                    K({ class: ["v-btn-toggle", e.class] }, i, {
                        style: e.style,
                    }),
                    {
                        default: () => {
                            var c;
                            return [
                                (c = n.default) == null
                                    ? void 0
                                    : c.call(n, {
                                          isSelected: a,
                                          next: r,
                                          prev: l,
                                          select: o,
                                          selected: s,
                                      }),
                            ];
                        },
                    }
                );
            }),
            { next: r, prev: l, select: o }
        );
    },
});
const gm = L(
        {
            defaults: Object,
            disabled: Boolean,
            reset: [Number, String],
            root: [Boolean, String],
            scoped: Boolean,
        },
        "VDefaultsProvider"
    ),
    Ee = Y(!1)({
        name: "VDefaultsProvider",
        props: gm(),
        setup(e, t) {
            let { slots: n } = t;
            const {
                defaults: a,
                disabled: r,
                reset: l,
                root: o,
                scoped: s,
            } = $a(e);
            return (
                Je(a, { reset: l, root: o, scoped: s, disabled: r }),
                () => {
                    var i;
                    return (i = n.default) == null ? void 0 : i.call(n);
                }
            );
        },
    }),
    ym = {
        collapse: "mdi-chevron-up",
        complete: "mdi-check",
        cancel: "mdi-close-circle",
        close: "mdi-close",
        delete: "mdi-close-circle",
        clear: "mdi-close-circle",
        success: "mdi-check-circle",
        info: "mdi-information",
        warning: "mdi-alert-circle",
        error: "mdi-close-circle",
        prev: "mdi-chevron-left",
        next: "mdi-chevron-right",
        checkboxOn: "mdi-checkbox-marked",
        checkboxOff: "mdi-checkbox-blank-outline",
        checkboxIndeterminate: "mdi-minus-box",
        delimiter: "mdi-circle",
        sortAsc: "mdi-arrow-up",
        sortDesc: "mdi-arrow-down",
        expand: "mdi-chevron-down",
        menu: "mdi-menu",
        subgroup: "mdi-menu-down",
        dropdown: "mdi-menu-down",
        radioOn: "mdi-radiobox-marked",
        radioOff: "mdi-radiobox-blank",
        edit: "mdi-pencil",
        ratingEmpty: "mdi-star-outline",
        ratingFull: "mdi-star",
        ratingHalf: "mdi-star-half-full",
        loading: "mdi-cached",
        first: "mdi-page-first",
        last: "mdi-page-last",
        unfold: "mdi-unfold-more-horizontal",
        file: "mdi-paperclip",
        plus: "mdi-plus",
        minus: "mdi-minus",
        calendar: "mdi-calendar",
        eyeDropper: "mdi-eyedropper",
    },
    pm = { component: (e) => Ht(au, { ...e, class: "mdi" }) },
    de = [String, Function, Object, Array],
    jr = Symbol.for("vuetify:icons"),
    Na = L({ icon: { type: de }, tag: { type: String, required: !0 } }, "icon"),
    Ko = Y()({
        name: "VComponentIcon",
        props: Na(),
        setup(e, t) {
            let { slots: n } = t;
            return () => {
                const a = e.icon;
                return m(e.tag, null, {
                    default: () => {
                        var r;
                        return [
                            e.icon
                                ? m(a, null, null)
                                : (r = n.default) == null
                                ? void 0
                                : r.call(n),
                        ];
                    },
                });
            };
        },
    }),
    nu = un({
        name: "VSvgIcon",
        inheritAttrs: !1,
        props: Na(),
        setup(e, t) {
            let { attrs: n } = t;
            return () =>
                m(e.tag, K(n, { style: null }), {
                    default: () => [
                        m(
                            "svg",
                            {
                                class: "v-icon__svg",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                role: "img",
                                "aria-hidden": "true",
                            },
                            [
                                Array.isArray(e.icon)
                                    ? e.icon.map((a) =>
                                          Array.isArray(a)
                                              ? m(
                                                    "path",
                                                    {
                                                        d: a[0],
                                                        "fill-opacity": a[1],
                                                    },
                                                    null
                                                )
                                              : m("path", { d: a }, null)
                                      )
                                    : m("path", { d: e.icon }, null),
                            ]
                        ),
                    ],
                });
        },
    });
un({
    name: "VLigatureIcon",
    props: Na(),
    setup(e) {
        return () => m(e.tag, null, { default: () => [e.icon] });
    },
});
const au = un({
    name: "VClassIcon",
    props: Na(),
    setup(e) {
        return () => m(e.tag, { class: e.icon }, null);
    },
});
function bm() {
    return { svg: { component: nu }, class: { component: au } };
}
function Sm(e) {
    const t = bm(),
        n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
    return (
        n === "mdi" && !t.mdi && (t.mdi = pm),
        ze(
            {
                defaultSet: n,
                sets: t,
                aliases: {
                    ...ym,
                    vuetify: [
                        "M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",
                        [
                            "M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",
                            0.6,
                        ],
                    ],
                    "vuetify-outline":
                        "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
                },
            },
            e
        )
    );
}
const _m = (e) => {
        const t = ce(jr);
        if (!t) throw new Error("Missing Vuetify Icons provide!");
        return {
            iconData: p(() => {
                var i;
                const a = he(e);
                if (!a) return { component: Ko };
                let r = a;
                if (
                    (typeof r == "string" &&
                        ((r = r.trim()),
                        r.startsWith("$") &&
                            (r =
                                (i = t.aliases) == null
                                    ? void 0
                                    : i[r.slice(1)])),
                    !r)
                )
                    throw new Error(`Could not find aliased icon "${a}"`);
                if (Array.isArray(r)) return { component: nu, icon: r };
                if (typeof r != "string") return { component: Ko, icon: r };
                const l = Object.keys(t.sets).find(
                        (c) => typeof r == "string" && r.startsWith(`${c}:`)
                    ),
                    o = l ? r.slice(l.length + 1) : r;
                return {
                    component: t.sets[l ?? t.defaultSet].component,
                    icon: o,
                };
            }),
        };
    },
    wm = ["x-small", "small", "default", "large", "x-large"],
    fn = L({ size: { type: [String, Number], default: "default" } }, "size");
function Gn(e) {
    let t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
    return _l(() => {
        let n, a;
        return (
            fa(wm, e.size)
                ? (n = `${t}--size-${e.size}`)
                : e.size && (a = { width: ne(e.size), height: ne(e.size) }),
            { sizeClasses: n, sizeStyles: a }
        );
    });
}
const Cm = L(
        {
            color: String,
            start: Boolean,
            end: Boolean,
            icon: de,
            ...ie(),
            ...fn(),
            ...Oe({ tag: "i" }),
            ...Pe(),
        },
        "VIcon"
    ),
    Ae = Y()({
        name: "VIcon",
        props: Cm(),
        setup(e, t) {
            let { attrs: n, slots: a } = t;
            const r = H(),
                { themeClasses: l } = Ie(e),
                { iconData: o } = _m(p(() => r.value || e.icon)),
                { sizeClasses: s } = Gn(e),
                { textColorClasses: i, textColorStyles: c } = yt(W(e, "color"));
            return (
                ae(() => {
                    var d, f;
                    const u = (d = a.default) == null ? void 0 : d.call(a);
                    return (
                        u &&
                            (r.value =
                                (f = Ti(u).filter(
                                    (v) =>
                                        v.type === Dd &&
                                        v.children &&
                                        typeof v.children == "string"
                                )[0]) == null
                                    ? void 0
                                    : f.children),
                        m(
                            o.value.component,
                            {
                                tag: e.tag,
                                icon: o.value.icon,
                                class: [
                                    "v-icon",
                                    "notranslate",
                                    l.value,
                                    s.value,
                                    i.value,
                                    {
                                        "v-icon--clickable": !!n.onClick,
                                        "v-icon--start": e.start,
                                        "v-icon--end": e.end,
                                    },
                                    e.class,
                                ],
                                style: [
                                    s.value
                                        ? void 0
                                        : {
                                              fontSize: ne(e.size),
                                              height: ne(e.size),
                                              width: ne(e.size),
                                          },
                                    c.value,
                                    e.style,
                                ],
                                role: n.onClick ? "button" : void 0,
                                "aria-hidden": !n.onClick,
                            },
                            { default: () => [u] }
                        )
                    );
                }),
                {}
            );
        },
    });
function ru(e, t) {
    const n = H(),
        a = J(!1);
    if (Sl) {
        const r = new IntersectionObserver((l) => {
            e == null || e(l, r), (a.value = !!l.find((o) => o.isIntersecting));
        }, t);
        Re(() => {
            r.disconnect();
        }),
            Z(
                n,
                (l, o) => {
                    o && (r.unobserve(o), (a.value = !1)), l && r.observe(l);
                },
                { flush: "post" }
            );
    }
    return { intersectionRef: n, isIntersecting: a };
}
const xm = L(
        {
            bgColor: String,
            color: String,
            indeterminate: [Boolean, String],
            modelValue: { type: [Number, String], default: 0 },
            rotate: { type: [Number, String], default: 0 },
            width: { type: [Number, String], default: 4 },
            ...ie(),
            ...fn(),
            ...Oe({ tag: "div" }),
            ...Pe(),
        },
        "VProgressCircular"
    ),
    lu = Y()({
        name: "VProgressCircular",
        props: xm(),
        setup(e, t) {
            let { slots: n } = t;
            const a = 20,
                r = 2 * Math.PI * a,
                l = H(),
                { themeClasses: o } = Ie(e),
                { sizeClasses: s, sizeStyles: i } = Gn(e),
                { textColorClasses: c, textColorStyles: u } = yt(W(e, "color")),
                { textColorClasses: d, textColorStyles: f } = yt(
                    W(e, "bgColor")
                ),
                { intersectionRef: v, isIntersecting: h } = ru(),
                { resizeRef: g, contentRect: y } = Nt(),
                b = p(() =>
                    Math.max(0, Math.min(100, parseFloat(e.modelValue)))
                ),
                S = p(() => Number(e.width)),
                x = p(() =>
                    i.value
                        ? Number(e.size)
                        : y.value
                        ? y.value.width
                        : Math.max(S.value, 32)
                ),
                P = p(() => (a / (1 - S.value / x.value)) * 2),
                E = p(() => (S.value / x.value) * P.value),
                k = p(() => ne(((100 - b.value) / 100) * r));
            return (
                De(() => {
                    (v.value = l.value), (g.value = l.value);
                }),
                ae(() =>
                    m(
                        e.tag,
                        {
                            ref: l,
                            class: [
                                "v-progress-circular",
                                {
                                    "v-progress-circular--indeterminate":
                                        !!e.indeterminate,
                                    "v-progress-circular--visible": h.value,
                                    "v-progress-circular--disable-shrink":
                                        e.indeterminate === "disable-shrink",
                                },
                                o.value,
                                s.value,
                                c.value,
                                e.class,
                            ],
                            style: [i.value, u.value, e.style],
                            role: "progressbar",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100",
                            "aria-valuenow": e.indeterminate ? void 0 : b.value,
                        },
                        {
                            default: () => [
                                m(
                                    "svg",
                                    {
                                        style: {
                                            transform: `rotate(calc(-90deg + ${Number(
                                                e.rotate
                                            )}deg))`,
                                        },
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: `0 0 ${P.value} ${P.value}`,
                                    },
                                    [
                                        m(
                                            "circle",
                                            {
                                                class: [
                                                    "v-progress-circular__underlay",
                                                    d.value,
                                                ],
                                                style: f.value,
                                                fill: "transparent",
                                                cx: "50%",
                                                cy: "50%",
                                                r: a,
                                                "stroke-width": E.value,
                                                "stroke-dasharray": r,
                                                "stroke-dashoffset": 0,
                                            },
                                            null
                                        ),
                                        m(
                                            "circle",
                                            {
                                                class: "v-progress-circular__overlay",
                                                fill: "transparent",
                                                cx: "50%",
                                                cy: "50%",
                                                r: a,
                                                "stroke-width": E.value,
                                                "stroke-dasharray": r,
                                                "stroke-dashoffset": k.value,
                                            },
                                            null
                                        ),
                                    ]
                                ),
                                n.default &&
                                    m(
                                        "div",
                                        {
                                            class: "v-progress-circular__content",
                                        },
                                        [n.default({ value: b.value })]
                                    ),
                            ],
                        }
                    )
                ),
                {}
            );
        },
    }),
    zt = L(
        {
            height: [Number, String],
            maxHeight: [Number, String],
            maxWidth: [Number, String],
            minHeight: [Number, String],
            minWidth: [Number, String],
            width: [Number, String],
        },
        "dimension"
    );
function Ut(e) {
    return {
        dimensionStyles: p(() => ({
            height: ne(e.height),
            maxHeight: ne(e.maxHeight),
            maxWidth: ne(e.maxWidth),
            minHeight: ne(e.minHeight),
            minWidth: ne(e.minWidth),
            width: ne(e.width),
        })),
    };
}
const Yo = {
        center: "center",
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left",
    },
    ja = L({ location: String }, "location");
function Ha(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    const { isRtl: a } = ct();
    return {
        locationStyles: p(() => {
            if (!e.location) return {};
            const { side: l, align: o } = Fr(
                e.location.split(" ").length > 1
                    ? e.location
                    : `${e.location} center`,
                a.value
            );
            function s(c) {
                return n ? n(c) : 0;
            }
            const i = {};
            return (
                l !== "center" &&
                    (t ? (i[Yo[l]] = `calc(100% - ${s(l)}px)`) : (i[l] = 0)),
                o !== "center"
                    ? t
                        ? (i[Yo[o]] = `calc(100% - ${s(o)}px)`)
                        : (i[o] = 0)
                    : (l === "center"
                          ? (i.top = i.left = "50%")
                          : (i[
                                {
                                    top: "left",
                                    bottom: "left",
                                    left: "top",
                                    right: "top",
                                }[l]
                            ] = "50%"),
                      (i.transform = {
                          top: "translateX(-50%)",
                          bottom: "translateX(-50%)",
                          left: "translateY(-50%)",
                          right: "translateY(-50%)",
                          center: "translate(-50%, -50%)",
                      }[l])),
                i
            );
        }),
    };
}
const Pm = L(
        {
            absolute: Boolean,
            active: { type: Boolean, default: !0 },
            bgColor: String,
            bgOpacity: [Number, String],
            bufferValue: { type: [Number, String], default: 0 },
            clickable: Boolean,
            color: String,
            height: { type: [Number, String], default: 4 },
            indeterminate: Boolean,
            max: { type: [Number, String], default: 100 },
            modelValue: { type: [Number, String], default: 0 },
            reverse: Boolean,
            stream: Boolean,
            striped: Boolean,
            roundedBar: Boolean,
            ...ie(),
            ...ja({ location: "top" }),
            ...je(),
            ...Oe(),
            ...Pe(),
        },
        "VProgressLinear"
    ),
    ou = Y()({
        name: "VProgressLinear",
        props: Pm(),
        emits: { "update:modelValue": (e) => !0 },
        setup(e, t) {
            let { slots: n } = t;
            const a = ve(e, "modelValue"),
                { isRtl: r, rtlClasses: l } = ct(),
                { themeClasses: o } = Ie(e),
                { locationStyles: s } = Ha(e),
                { textColorClasses: i, textColorStyles: c } = yt(e, "color"),
                { backgroundColorClasses: u, backgroundColorStyles: d } = at(
                    p(() => e.bgColor || e.color)
                ),
                { backgroundColorClasses: f, backgroundColorStyles: v } = at(
                    e,
                    "color"
                ),
                { roundedClasses: h } = We(e),
                { intersectionRef: g, isIntersecting: y } = ru(),
                b = p(() => parseInt(e.max, 10)),
                S = p(() => parseInt(e.height, 10)),
                x = p(() => (parseFloat(e.bufferValue) / b.value) * 100),
                P = p(() => (parseFloat(a.value) / b.value) * 100),
                E = p(() => r.value !== e.reverse),
                k = p(() =>
                    e.indeterminate ? "fade-transition" : "slide-x-transition"
                ),
                _ = p(() =>
                    e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity)
                );
            function C(w) {
                if (!g.value) return;
                const {
                        left: A,
                        right: O,
                        width: V,
                    } = g.value.getBoundingClientRect(),
                    I = E.value ? V - w.clientX + (O - V) : w.clientX - A;
                a.value = Math.round((I / V) * b.value);
            }
            return (
                ae(() =>
                    m(
                        e.tag,
                        {
                            ref: g,
                            class: [
                                "v-progress-linear",
                                {
                                    "v-progress-linear--absolute": e.absolute,
                                    "v-progress-linear--active":
                                        e.active && y.value,
                                    "v-progress-linear--reverse": E.value,
                                    "v-progress-linear--rounded": e.rounded,
                                    "v-progress-linear--rounded-bar":
                                        e.roundedBar,
                                    "v-progress-linear--striped": e.striped,
                                },
                                h.value,
                                o.value,
                                l.value,
                                e.class,
                            ],
                            style: [
                                {
                                    bottom:
                                        e.location === "bottom" ? 0 : void 0,
                                    top: e.location === "top" ? 0 : void 0,
                                    height: e.active ? ne(S.value) : 0,
                                    "--v-progress-linear-height": ne(S.value),
                                    ...s.value,
                                },
                                e.style,
                            ],
                            role: "progressbar",
                            "aria-hidden": e.active ? "false" : "true",
                            "aria-valuemin": "0",
                            "aria-valuemax": e.max,
                            "aria-valuenow": e.indeterminate ? void 0 : P.value,
                            onClick: e.clickable && C,
                        },
                        {
                            default: () => [
                                e.stream &&
                                    m(
                                        "div",
                                        {
                                            key: "stream",
                                            class: [
                                                "v-progress-linear__stream",
                                                i.value,
                                            ],
                                            style: {
                                                ...c.value,
                                                [E.value ? "left" : "right"]:
                                                    ne(-S.value),
                                                borderTop: `${ne(
                                                    S.value / 2
                                                )} dotted`,
                                                opacity: _.value,
                                                top: `calc(50% - ${ne(
                                                    S.value / 4
                                                )})`,
                                                width: ne(100 - x.value, "%"),
                                                "--v-progress-linear-stream-to":
                                                    ne(
                                                        S.value *
                                                            (E.value ? 1 : -1)
                                                    ),
                                            },
                                        },
                                        null
                                    ),
                                m(
                                    "div",
                                    {
                                        class: [
                                            "v-progress-linear__background",
                                            u.value,
                                        ],
                                        style: [
                                            d.value,
                                            {
                                                opacity: _.value,
                                                width: ne(
                                                    e.stream ? x.value : 100,
                                                    "%"
                                                ),
                                            },
                                        ],
                                    },
                                    null
                                ),
                                m(
                                    At,
                                    { name: k.value },
                                    {
                                        default: () => [
                                            e.indeterminate
                                                ? m(
                                                      "div",
                                                      {
                                                          class: "v-progress-linear__indeterminate",
                                                      },
                                                      [
                                                          ["long", "short"].map(
                                                              (w) =>
                                                                  m(
                                                                      "div",
                                                                      {
                                                                          key: w,
                                                                          class: [
                                                                              "v-progress-linear__indeterminate",
                                                                              w,
                                                                              f.value,
                                                                          ],
                                                                          style: v.value,
                                                                      },
                                                                      null
                                                                  )
                                                          ),
                                                      ]
                                                  )
                                                : m(
                                                      "div",
                                                      {
                                                          class: [
                                                              "v-progress-linear__determinate",
                                                              f.value,
                                                          ],
                                                          style: [
                                                              v.value,
                                                              {
                                                                  width: ne(
                                                                      P.value,
                                                                      "%"
                                                                  ),
                                                              },
                                                          ],
                                                      },
                                                      null
                                                  ),
                                        ],
                                    }
                                ),
                                n.default &&
                                    m(
                                        "div",
                                        { class: "v-progress-linear__content" },
                                        [
                                            n.default({
                                                value: P.value,
                                                buffer: x.value,
                                            }),
                                        ]
                                    ),
                            ],
                        }
                    )
                ),
                {}
            );
        },
    }),
    za = L({ loading: [Boolean, String] }, "loader");
function Wn(e) {
    let t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
    return { loaderClasses: p(() => ({ [`${t}--loading`]: e.loading })) };
}
function Ua(e, t) {
    var a;
    let { slots: n } = t;
    return m("div", { class: `${e.name}__loader` }, [
        ((a = n.default) == null
            ? void 0
            : a.call(n, { color: e.color, isActive: e.active })) ||
            m(
                ou,
                {
                    absolute: e.absolute,
                    active: e.active,
                    color: e.color,
                    height: "2",
                    indeterminate: !0,
                },
                null
            ),
    ]);
}
const km = ["static", "relative", "fixed", "absolute", "sticky"],
    Il = L(
        { position: { type: String, validator: (e) => km.includes(e) } },
        "position"
    );
function Ol(e) {
    let t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
    return {
        positionClasses: p(() => (e.position ? `${t}--${e.position}` : void 0)),
    };
}
function Em() {
    const e = xe("useRoute");
    return p(() => {
        var t;
        return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route;
    });
}
function su() {
    var e, t;
    return (t = (e = xe("useRouter")) == null ? void 0 : e.proxy) == null
        ? void 0
        : t.$router;
}
function Ga(e, t) {
    const n = da("RouterLink"),
        a = p(() => !!(e.href || e.to)),
        r = p(
            () =>
                (a == null ? void 0 : a.value) ||
                Eo(t, "click") ||
                Eo(e, "click")
        );
    if (typeof n == "string")
        return { isLink: a, isClickable: r, href: W(e, "href") };
    const l = e.to ? n.useLink(e) : void 0,
        o = Em();
    return {
        isLink: a,
        isClickable: r,
        route: l == null ? void 0 : l.route,
        navigate: l == null ? void 0 : l.navigate,
        isActive:
            l &&
            p(() => {
                var s, i, c;
                return e.exact
                    ? o.value
                        ? ((c = l.isExactActive) == null ? void 0 : c.value) &&
                          Tt(l.route.value.query, o.value.query)
                        : (i = l.isExactActive) == null
                        ? void 0
                        : i.value
                    : (s = l.isActive) == null
                    ? void 0
                    : s.value;
            }),
        href: p(() =>
            e.to ? (l == null ? void 0 : l.route.value.href) : e.href
        ),
    };
}
const Wa = L(
    { href: String, replace: Boolean, to: [String, Object], exact: Boolean },
    "router"
);
let yr = !1;
function Am(e, t) {
    let n = !1,
        a,
        r;
    _e &&
        (we(() => {
            window.addEventListener("popstate", l),
                (a =
                    e == null
                        ? void 0
                        : e.beforeEach((o, s, i) => {
                              yr
                                  ? n
                                      ? t(i)
                                      : i()
                                  : setTimeout(() => (n ? t(i) : i())),
                                  (yr = !0);
                          })),
                (r =
                    e == null
                        ? void 0
                        : e.afterEach(() => {
                              yr = !1;
                          }));
        }),
        Ve(() => {
            window.removeEventListener("popstate", l),
                a == null || a(),
                r == null || r();
        }));
    function l(o) {
        var s;
        ((s = o.state) != null && s.replaced) ||
            ((n = !0), setTimeout(() => (n = !1)));
    }
}
function Tm(e, t) {
    Z(
        () => {
            var n;
            return (n = e.isActive) == null ? void 0 : n.value;
        },
        (n) => {
            e.isLink.value &&
                n &&
                t &&
                we(() => {
                    t(!0);
                });
        },
        { immediate: !0 }
    );
}
const Hr = Symbol("rippleStop"),
    Im = 80;
function Xo(e, t) {
    (e.style.transform = t), (e.style.webkitTransform = t);
}
function zr(e) {
    return e.constructor.name === "TouchEvent";
}
function iu(e) {
    return e.constructor.name === "KeyboardEvent";
}
const Om = function (e, t) {
        var d;
        let n =
                arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : {},
            a = 0,
            r = 0;
        if (!iu(e)) {
            const f = t.getBoundingClientRect(),
                v = zr(e) ? e.touches[e.touches.length - 1] : e;
            (a = v.clientX - f.left), (r = v.clientY - f.top);
        }
        let l = 0,
            o = 0.3;
        (d = t._ripple) != null && d.circle
            ? ((o = 0.15),
              (l = t.clientWidth / 2),
              (l = n.center
                  ? l
                  : l + Math.sqrt((a - l) ** 2 + (r - l) ** 2) / 4))
            : (l = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2);
        const s = `${(t.clientWidth - l * 2) / 2}px`,
            i = `${(t.clientHeight - l * 2) / 2}px`,
            c = n.center ? s : `${a - l}px`,
            u = n.center ? i : `${r - l}px`;
        return { radius: l, scale: o, x: c, y: u, centerX: s, centerY: i };
    },
    _a = {
        show(e, t) {
            var v;
            let n =
                arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : {};
            if (!((v = t == null ? void 0 : t._ripple) != null && v.enabled))
                return;
            const a = document.createElement("span"),
                r = document.createElement("span");
            a.appendChild(r),
                (a.className = "v-ripple__container"),
                n.class && (a.className += ` ${n.class}`);
            const {
                    radius: l,
                    scale: o,
                    x: s,
                    y: i,
                    centerX: c,
                    centerY: u,
                } = Om(e, t, n),
                d = `${l * 2}px`;
            (r.className = "v-ripple__animation"),
                (r.style.width = d),
                (r.style.height = d),
                t.appendChild(a);
            const f = window.getComputedStyle(t);
            f &&
                f.position === "static" &&
                ((t.style.position = "relative"),
                (t.dataset.previousPosition = "static")),
                r.classList.add("v-ripple__animation--enter"),
                r.classList.add("v-ripple__animation--visible"),
                Xo(r, `translate(${s}, ${i}) scale3d(${o},${o},${o})`),
                (r.dataset.activated = String(performance.now())),
                setTimeout(() => {
                    r.classList.remove("v-ripple__animation--enter"),
                        r.classList.add("v-ripple__animation--in"),
                        Xo(r, `translate(${c}, ${u}) scale3d(1,1,1)`);
                }, 0);
        },
        hide(e) {
            var l;
            if (!((l = e == null ? void 0 : e._ripple) != null && l.enabled))
                return;
            const t = e.getElementsByClassName("v-ripple__animation");
            if (t.length === 0) return;
            const n = t[t.length - 1];
            if (n.dataset.isHiding) return;
            n.dataset.isHiding = "true";
            const a = performance.now() - Number(n.dataset.activated),
                r = Math.max(250 - a, 0);
            setTimeout(() => {
                n.classList.remove("v-ripple__animation--in"),
                    n.classList.add("v-ripple__animation--out"),
                    setTimeout(() => {
                        var s;
                        e.getElementsByClassName("v-ripple__animation")
                            .length === 1 &&
                            e.dataset.previousPosition &&
                            ((e.style.position = e.dataset.previousPosition),
                            delete e.dataset.previousPosition),
                            ((s = n.parentNode) == null
                                ? void 0
                                : s.parentNode) === e &&
                                e.removeChild(n.parentNode);
                    }, 300);
            }, r);
        },
    };
function uu(e) {
    return typeof e > "u" || !!e;
}
function Mn(e) {
    const t = {},
        n = e.currentTarget;
    if (!(!(n != null && n._ripple) || n._ripple.touched || e[Hr])) {
        if (((e[Hr] = !0), zr(e)))
            (n._ripple.touched = !0), (n._ripple.isTouch = !0);
        else if (n._ripple.isTouch) return;
        if (
            ((t.center = n._ripple.centered || iu(e)),
            n._ripple.class && (t.class = n._ripple.class),
            zr(e))
        ) {
            if (n._ripple.showTimerCommit) return;
            (n._ripple.showTimerCommit = () => {
                _a.show(e, n, t);
            }),
                (n._ripple.showTimer = window.setTimeout(() => {
                    var a;
                    (a = n == null ? void 0 : n._ripple) != null &&
                        a.showTimerCommit &&
                        (n._ripple.showTimerCommit(),
                        (n._ripple.showTimerCommit = null));
                }, Im));
        } else _a.show(e, n, t);
    }
}
function Jo(e) {
    e[Hr] = !0;
}
function He(e) {
    const t = e.currentTarget;
    if (t != null && t._ripple) {
        if (
            (window.clearTimeout(t._ripple.showTimer),
            e.type === "touchend" && t._ripple.showTimerCommit)
        ) {
            t._ripple.showTimerCommit(),
                (t._ripple.showTimerCommit = null),
                (t._ripple.showTimer = window.setTimeout(() => {
                    He(e);
                }));
            return;
        }
        window.setTimeout(() => {
            t._ripple && (t._ripple.touched = !1);
        }),
            _a.hide(t);
    }
}
function cu(e) {
    const t = e.currentTarget;
    t != null &&
        t._ripple &&
        (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null),
        window.clearTimeout(t._ripple.showTimer));
}
let Nn = !1;
function du(e) {
    !Nn &&
        (e.keyCode === _o.enter || e.keyCode === _o.space) &&
        ((Nn = !0), Mn(e));
}
function fu(e) {
    (Nn = !1), He(e);
}
function vu(e) {
    Nn && ((Nn = !1), He(e));
}
function mu(e, t, n) {
    const { value: a, modifiers: r } = t,
        l = uu(a);
    if (
        (l || _a.hide(e),
        (e._ripple = e._ripple ?? {}),
        (e._ripple.enabled = l),
        (e._ripple.centered = r.center),
        (e._ripple.circle = r.circle),
        Br(a) && a.class && (e._ripple.class = a.class),
        l && !n)
    ) {
        if (r.stop) {
            e.addEventListener("touchstart", Jo, { passive: !0 }),
                e.addEventListener("mousedown", Jo);
            return;
        }
        e.addEventListener("touchstart", Mn, { passive: !0 }),
            e.addEventListener("touchend", He, { passive: !0 }),
            e.addEventListener("touchmove", cu, { passive: !0 }),
            e.addEventListener("touchcancel", He),
            e.addEventListener("mousedown", Mn),
            e.addEventListener("mouseup", He),
            e.addEventListener("mouseleave", He),
            e.addEventListener("keydown", du),
            e.addEventListener("keyup", fu),
            e.addEventListener("blur", vu),
            e.addEventListener("dragstart", He, { passive: !0 });
    } else !l && n && hu(e);
}
function hu(e) {
    e.removeEventListener("mousedown", Mn),
        e.removeEventListener("touchstart", Mn),
        e.removeEventListener("touchend", He),
        e.removeEventListener("touchmove", cu),
        e.removeEventListener("touchcancel", He),
        e.removeEventListener("mouseup", He),
        e.removeEventListener("mouseleave", He),
        e.removeEventListener("keydown", du),
        e.removeEventListener("keyup", fu),
        e.removeEventListener("dragstart", He),
        e.removeEventListener("blur", vu);
}
function Vm(e, t) {
    mu(e, t, !1);
}
function Rm(e) {
    delete e._ripple, hu(e);
}
function $m(e, t) {
    if (t.value === t.oldValue) return;
    const n = uu(t.oldValue);
    mu(e, t, n);
}
const qn = { mounted: Vm, unmounted: Rm, updated: $m },
    gu = L(
        {
            active: { type: Boolean, default: void 0 },
            symbol: { type: null, default: tu },
            flat: Boolean,
            icon: [Boolean, String, Function, Object],
            prependIcon: de,
            appendIcon: de,
            block: Boolean,
            slim: Boolean,
            stacked: Boolean,
            ripple: { type: [Boolean, Object], default: !0 },
            text: String,
            ...St(),
            ...ie(),
            ...Ze(),
            ...zt(),
            ..._t(),
            ...Zi(),
            ...za(),
            ...ja(),
            ...Il(),
            ...je(),
            ...Wa(),
            ...fn(),
            ...Oe({ tag: "button" }),
            ...Pe(),
            ...ft({ variant: "elevated" }),
        },
        "VBtn"
    ),
    Qe = Y()({
        name: "VBtn",
        directives: { Ripple: qn },
        props: gu(),
        emits: { "group:selected": (e) => !0 },
        setup(e, t) {
            let { attrs: n, slots: a } = t;
            const { themeClasses: r } = Ie(e),
                { borderClasses: l } = Vt(e),
                { colorClasses: o, colorStyles: s, variantClasses: i } = dn(e),
                { densityClasses: c } = dt(e),
                { dimensionStyles: u } = Ut(e),
                { elevationClasses: d } = Rt(e),
                { loaderClasses: f } = Wn(e),
                { locationStyles: v } = Ha(e),
                { positionClasses: h } = Ol(e),
                { roundedClasses: g } = We(e),
                { sizeClasses: y, sizeStyles: b } = Gn(e),
                S = Qi(e, e.symbol, !1),
                x = Ga(e, n),
                P = p(() => {
                    var w;
                    return e.active !== void 0
                        ? e.active
                        : x.isLink.value
                        ? (w = x.isActive) == null
                            ? void 0
                            : w.value
                        : S == null
                        ? void 0
                        : S.isSelected.value;
                }),
                E = p(
                    () => (S == null ? void 0 : S.disabled.value) || e.disabled
                ),
                k = p(
                    () =>
                        e.variant === "elevated" &&
                        !(e.disabled || e.flat || e.border)
                ),
                _ = p(() => {
                    if (!(e.value === void 0 || typeof e.value == "symbol"))
                        return Object(e.value) === e.value
                            ? JSON.stringify(e.value, null, 0)
                            : e.value;
                });
            function C(w) {
                var A;
                E.value ||
                    (x.isLink.value &&
                        (w.metaKey ||
                            w.ctrlKey ||
                            w.shiftKey ||
                            w.button !== 0 ||
                            n.target === "_blank")) ||
                    ((A = x.navigate) == null || A.call(x, w),
                    S == null || S.toggle());
            }
            return (
                Tm(x, S == null ? void 0 : S.select),
                ae(() => {
                    var D, M;
                    const w = x.isLink.value ? "a" : e.tag,
                        A = !!(e.prependIcon || a.prepend),
                        O = !!(e.appendIcon || a.append),
                        V = !!(e.icon && e.icon !== !0),
                        I =
                            ((S == null ? void 0 : S.isSelected.value) &&
                                (!x.isLink.value ||
                                    ((D = x.isActive) == null
                                        ? void 0
                                        : D.value))) ||
                            !S ||
                            ((M = x.isActive) == null ? void 0 : M.value);
                    return Le(
                        m(
                            w,
                            {
                                type: w === "a" ? void 0 : "button",
                                class: [
                                    "v-btn",
                                    S == null ? void 0 : S.selectedClass.value,
                                    {
                                        "v-btn--active": P.value,
                                        "v-btn--block": e.block,
                                        "v-btn--disabled": E.value,
                                        "v-btn--elevated": k.value,
                                        "v-btn--flat": e.flat,
                                        "v-btn--icon": !!e.icon,
                                        "v-btn--loading": e.loading,
                                        "v-btn--slim": e.slim,
                                        "v-btn--stacked": e.stacked,
                                    },
                                    r.value,
                                    l.value,
                                    I ? o.value : void 0,
                                    c.value,
                                    d.value,
                                    f.value,
                                    h.value,
                                    g.value,
                                    y.value,
                                    i.value,
                                    e.class,
                                ],
                                style: [
                                    I ? s.value : void 0,
                                    u.value,
                                    v.value,
                                    b.value,
                                    e.style,
                                ],
                                disabled: E.value || void 0,
                                href: x.href.value,
                                onClick: C,
                                value: _.value,
                            },
                            {
                                default: () => {
                                    var U;
                                    return [
                                        cn(!0, "v-btn"),
                                        !e.icon &&
                                            A &&
                                            m(
                                                "span",
                                                {
                                                    key: "prepend",
                                                    class: "v-btn__prepend",
                                                },
                                                [
                                                    a.prepend
                                                        ? m(
                                                              Ee,
                                                              {
                                                                  key: "prepend-defaults",
                                                                  disabled:
                                                                      !e.prependIcon,
                                                                  defaults: {
                                                                      VIcon: {
                                                                          icon: e.prependIcon,
                                                                      },
                                                                  },
                                                              },
                                                              a.prepend
                                                          )
                                                        : m(
                                                              Ae,
                                                              {
                                                                  key: "prepend-icon",
                                                                  icon: e.prependIcon,
                                                              },
                                                              null
                                                          ),
                                                ]
                                            ),
                                        m(
                                            "span",
                                            {
                                                class: "v-btn__content",
                                                "data-no-activator": "",
                                            },
                                            [
                                                !a.default && V
                                                    ? m(
                                                          Ae,
                                                          {
                                                              key: "content-icon",
                                                              icon: e.icon,
                                                          },
                                                          null
                                                      )
                                                    : m(
                                                          Ee,
                                                          {
                                                              key: "content-defaults",
                                                              disabled: !V,
                                                              defaults: {
                                                                  VIcon: {
                                                                      icon: e.icon,
                                                                  },
                                                              },
                                                          },
                                                          {
                                                              default: () => {
                                                                  var re;
                                                                  return [
                                                                      ((re =
                                                                          a.default) ==
                                                                      null
                                                                          ? void 0
                                                                          : re.call(
                                                                                a
                                                                            )) ??
                                                                          e.text,
                                                                  ];
                                                              },
                                                          }
                                                      ),
                                            ]
                                        ),
                                        !e.icon &&
                                            O &&
                                            m(
                                                "span",
                                                {
                                                    key: "append",
                                                    class: "v-btn__append",
                                                },
                                                [
                                                    a.append
                                                        ? m(
                                                              Ee,
                                                              {
                                                                  key: "append-defaults",
                                                                  disabled:
                                                                      !e.appendIcon,
                                                                  defaults: {
                                                                      VIcon: {
                                                                          icon: e.appendIcon,
                                                                      },
                                                                  },
                                                              },
                                                              a.append
                                                          )
                                                        : m(
                                                              Ae,
                                                              {
                                                                  key: "append-icon",
                                                                  icon: e.appendIcon,
                                                              },
                                                              null
                                                          ),
                                                ]
                                            ),
                                        !!e.loading &&
                                            m(
                                                "span",
                                                {
                                                    key: "loader",
                                                    class: "v-btn__loader",
                                                },
                                                [
                                                    ((U = a.loader) == null
                                                        ? void 0
                                                        : U.call(a)) ??
                                                        m(
                                                            lu,
                                                            {
                                                                color:
                                                                    typeof e.loading ==
                                                                    "boolean"
                                                                        ? void 0
                                                                        : e.loading,
                                                                indeterminate:
                                                                    !0,
                                                                size: "23",
                                                                width: "2",
                                                            },
                                                            null
                                                        ),
                                                ]
                                            ),
                                    ];
                                },
                            }
                        ),
                        [[bt("ripple"), !E.value && e.ripple, null]]
                    );
                }),
                { group: S }
            );
        },
    }),
    Dm = L({ ...ie(), ...Ui() }, "VLayout"),
    yu = Y()({
        name: "VLayout",
        props: Dm(),
        setup(e, t) {
            let { slots: n } = t;
            const {
                layoutClasses: a,
                layoutStyles: r,
                getLayoutItem: l,
                items: o,
                layoutRef: s,
            } = qi(e);
            return (
                ae(() => {
                    var i;
                    return m(
                        "div",
                        {
                            ref: s,
                            class: [a.value, e.class],
                            style: [r.value, e.style],
                        },
                        [(i = n.default) == null ? void 0 : i.call(n)]
                    );
                }),
                { getLayoutItem: l, items: o }
            );
        },
    });
function pr(e, t) {
    return { x: e.x + t.x, y: e.y + t.y };
}
function Lm(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
}
function Zo(e, t) {
    if (e.side === "top" || e.side === "bottom") {
        const { side: n, align: a } = e,
            r =
                a === "left"
                    ? 0
                    : a === "center"
                    ? t.width / 2
                    : a === "right"
                    ? t.width
                    : a,
            l = n === "top" ? 0 : n === "bottom" ? t.height : n;
        return pr({ x: r, y: l }, t);
    } else if (e.side === "left" || e.side === "right") {
        const { side: n, align: a } = e,
            r = n === "left" ? 0 : n === "right" ? t.width : n,
            l =
                a === "top"
                    ? 0
                    : a === "center"
                    ? t.height / 2
                    : a === "bottom"
                    ? t.height
                    : a;
        return pr({ x: r, y: l }, t);
    }
    return pr({ x: t.width / 2, y: t.height / 2 }, t);
}
const pu = { static: Mm, connected: jm },
    Bm = L(
        {
            locationStrategy: {
                type: [String, Function],
                default: "static",
                validator: (e) => typeof e == "function" || e in pu,
            },
            location: { type: String, default: "bottom" },
            origin: { type: String, default: "auto" },
            offset: [Number, String, Array],
        },
        "VOverlay-location-strategies"
    );
function Fm(e, t) {
    const n = H({}),
        a = H();
    _e &&
        tt(
            () => !!(t.isActive.value && e.locationStrategy),
            (l) => {
                var o, s;
                Z(() => e.locationStrategy, l),
                    Ve(() => {
                        window.removeEventListener("resize", r),
                            (a.value = void 0);
                    }),
                    window.addEventListener("resize", r, { passive: !0 }),
                    typeof e.locationStrategy == "function"
                        ? (a.value =
                              (o = e.locationStrategy(t, e, n)) == null
                                  ? void 0
                                  : o.updateLocation)
                        : (a.value =
                              (s = pu[e.locationStrategy](t, e, n)) == null
                                  ? void 0
                                  : s.updateLocation);
            }
        );
    function r(l) {
        var o;
        (o = a.value) == null || o.call(a, l);
    }
    return { contentStyles: n, updateLocation: a };
}
function Mm() {}
function Nm(e, t) {
    t ? e.style.removeProperty("left") : e.style.removeProperty("right");
    const n = Cl(e);
    return (
        t
            ? (n.x += parseFloat(e.style.right || 0))
            : (n.x -= parseFloat(e.style.left || 0)),
        (n.y -= parseFloat(e.style.top || 0)),
        n
    );
}
function jm(e, t, n) {
    (Array.isArray(e.target.value) || Jv(e.target.value)) &&
        Object.assign(n.value, {
            position: "fixed",
            top: 0,
            [e.isRtl.value ? "right" : "left"]: 0,
        });
    const { preferredAnchor: r, preferredOrigin: l } = _l(() => {
            const h = Fr(t.location, e.isRtl.value),
                g =
                    t.origin === "overlap"
                        ? h
                        : t.origin === "auto"
                        ? mr(h)
                        : Fr(t.origin, e.isRtl.value);
            return h.side === g.side && h.align === hr(g).align
                ? { preferredAnchor: Ao(h), preferredOrigin: Ao(g) }
                : { preferredAnchor: h, preferredOrigin: g };
        }),
        [o, s, i, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map(
            (h) =>
                p(() => {
                    const g = parseFloat(t[h]);
                    return isNaN(g) ? 1 / 0 : g;
                })
        ),
        u = p(() => {
            if (Array.isArray(t.offset)) return t.offset;
            if (typeof t.offset == "string") {
                const h = t.offset.split(" ").map(parseFloat);
                return h.length < 2 && h.push(0), h;
            }
            return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
        });
    let d = !1;
    const f = new ResizeObserver(() => {
        d && v();
    });
    Z(
        [e.target, e.contentEl],
        (h, g) => {
            let [y, b] = h,
                [S, x] = g;
            S && !Array.isArray(S) && f.unobserve(S),
                y && !Array.isArray(y) && f.observe(y),
                x && f.unobserve(x),
                b && f.observe(b);
        },
        { immediate: !0 }
    ),
        Ve(() => {
            f.disconnect();
        });
    function v() {
        if (
            ((d = !1),
            requestAnimationFrame(() => (d = !0)),
            !e.target.value || !e.contentEl.value)
        )
            return;
        const h = $i(e.target.value),
            g = Nm(e.contentEl.value, e.isRtl.value),
            y = pa(e.contentEl.value),
            b = 12;
        y.length ||
            (y.push(document.documentElement),
            (e.contentEl.value.style.top && e.contentEl.value.style.left) ||
                ((g.x -= parseFloat(
                    document.documentElement.style.getPropertyValue(
                        "--v-body-scroll-x"
                    ) || 0
                )),
                (g.y -= parseFloat(
                    document.documentElement.style.getPropertyValue(
                        "--v-body-scroll-y"
                    ) || 0
                ))));
        const S = y.reduce((O, V) => {
            const I = V.getBoundingClientRect(),
                D = new Ft({
                    x: V === document.documentElement ? 0 : I.x,
                    y: V === document.documentElement ? 0 : I.y,
                    width: V.clientWidth,
                    height: V.clientHeight,
                });
            return O
                ? new Ft({
                      x: Math.max(O.left, D.left),
                      y: Math.max(O.top, D.top),
                      width:
                          Math.min(O.right, D.right) - Math.max(O.left, D.left),
                      height:
                          Math.min(O.bottom, D.bottom) - Math.max(O.top, D.top),
                  })
                : D;
        }, void 0);
        (S.x += b), (S.y += b), (S.width -= b * 2), (S.height -= b * 2);
        let x = { anchor: r.value, origin: l.value };
        function P(O) {
            const V = new Ft(g),
                I = Zo(O.anchor, h),
                D = Zo(O.origin, V);
            let { x: M, y: U } = Lm(I, D);
            switch (O.anchor.side) {
                case "top":
                    U -= u.value[0];
                    break;
                case "bottom":
                    U += u.value[0];
                    break;
                case "left":
                    M -= u.value[0];
                    break;
                case "right":
                    M += u.value[0];
                    break;
            }
            switch (O.anchor.align) {
                case "top":
                    U -= u.value[1];
                    break;
                case "bottom":
                    U += u.value[1];
                    break;
                case "left":
                    M -= u.value[1];
                    break;
                case "right":
                    M += u.value[1];
                    break;
            }
            return (
                (V.x += M),
                (V.y += U),
                (V.width = Math.min(V.width, i.value)),
                (V.height = Math.min(V.height, c.value)),
                { overflows: Io(V, S), x: M, y: U }
            );
        }
        let E = 0,
            k = 0;
        const _ = { x: 0, y: 0 },
            C = { x: !1, y: !1 };
        let w = -1;
        for (; !(w++ > 10); ) {
            const { x: O, y: V, overflows: I } = P(x);
            (E += O), (k += V), (g.x += O), (g.y += V);
            {
                const D = To(x.anchor),
                    M = I.x.before || I.x.after,
                    U = I.y.before || I.y.after;
                let re = !1;
                if (
                    (["x", "y"].forEach((R) => {
                        if (
                            (R === "x" && M && !C.x) ||
                            (R === "y" && U && !C.y)
                        ) {
                            const B = {
                                    anchor: { ...x.anchor },
                                    origin: { ...x.origin },
                                },
                                N =
                                    R === "x"
                                        ? D === "y"
                                            ? hr
                                            : mr
                                        : D === "y"
                                        ? mr
                                        : hr;
                            (B.anchor = N(B.anchor)), (B.origin = N(B.origin));
                            const { overflows: F } = P(B);
                            ((F[R].before <= I[R].before &&
                                F[R].after <= I[R].after) ||
                                F[R].before + F[R].after <
                                    (I[R].before + I[R].after) / 2) &&
                                ((x = B), (re = C[R] = !0));
                        }
                    }),
                    re)
                )
                    continue;
            }
            I.x.before && ((E += I.x.before), (g.x += I.x.before)),
                I.x.after && ((E -= I.x.after), (g.x -= I.x.after)),
                I.y.before && ((k += I.y.before), (g.y += I.y.before)),
                I.y.after && ((k -= I.y.after), (g.y -= I.y.after));
            {
                const D = Io(g, S);
                (_.x = S.width - D.x.before - D.x.after),
                    (_.y = S.height - D.y.before - D.y.after),
                    (E += D.x.before),
                    (g.x += D.x.before),
                    (k += D.y.before),
                    (g.y += D.y.before);
            }
            break;
        }
        const A = To(x.anchor);
        return (
            Object.assign(n.value, {
                "--v-overlay-anchor-origin": `${x.anchor.side} ${x.anchor.align}`,
                transformOrigin: `${x.origin.side} ${x.origin.align}`,
                top: ne(br(k)),
                left: e.isRtl.value ? void 0 : ne(br(E)),
                right: e.isRtl.value ? ne(br(-E)) : void 0,
                minWidth: ne(A === "y" ? Math.min(o.value, h.width) : o.value),
                maxWidth: ne(
                    Qo(Ke(_.x, o.value === 1 / 0 ? 0 : o.value, i.value))
                ),
                maxHeight: ne(
                    Qo(Ke(_.y, s.value === 1 / 0 ? 0 : s.value, c.value))
                ),
            }),
            { available: _, contentBox: g }
        );
    }
    return (
        Z(
            () => [
                r.value,
                l.value,
                t.offset,
                t.minWidth,
                t.minHeight,
                t.maxWidth,
                t.maxHeight,
            ],
            () => v()
        ),
        we(() => {
            const h = v();
            if (!h) return;
            const { available: g, contentBox: y } = h;
            y.height > g.y &&
                requestAnimationFrame(() => {
                    v(),
                        requestAnimationFrame(() => {
                            v();
                        });
                });
        }),
        { updateLocation: v }
    );
}
function br(e) {
    return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Qo(e) {
    return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Ur = !0;
const wa = [];
function Hm(e) {
    !Ur || wa.length ? (wa.push(e), Gr()) : ((Ur = !1), e(), Gr());
}
let es = -1;
function Gr() {
    cancelAnimationFrame(es),
        (es = requestAnimationFrame(() => {
            const e = wa.shift();
            e && e(), wa.length ? Gr() : (Ur = !0);
        }));
}
const sa = { none: null, close: Gm, block: Wm, reposition: qm },
    zm = L(
        {
            scrollStrategy: {
                type: [String, Function],
                default: "block",
                validator: (e) => typeof e == "function" || e in sa,
            },
        },
        "VOverlay-scroll-strategies"
    );
function Um(e, t) {
    if (!_e) return;
    let n;
    De(async () => {
        n == null || n.stop(),
            t.isActive.value &&
                e.scrollStrategy &&
                ((n = zn()),
                await we(),
                n.active &&
                    n.run(() => {
                        var a;
                        typeof e.scrollStrategy == "function"
                            ? e.scrollStrategy(t, e, n)
                            : (a = sa[e.scrollStrategy]) == null ||
                              a.call(sa, t, e, n);
                    }));
    }),
        Ve(() => {
            n == null || n.stop();
        });
}
function Gm(e) {
    function t(n) {
        e.isActive.value = !1;
    }
    bu(e.targetEl.value ?? e.contentEl.value, t);
}
function Wm(e, t) {
    var o;
    const n = (o = e.root.value) == null ? void 0 : o.offsetParent,
        a = [
            ...new Set([
                ...pa(e.targetEl.value, t.contained ? n : void 0),
                ...pa(e.contentEl.value, t.contained ? n : void 0),
            ]),
        ].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")),
        r = window.innerWidth - document.documentElement.offsetWidth,
        l = ((s) => kl(s) && s)(n || document.documentElement);
    l && e.root.value.classList.add("v-overlay--scroll-blocked"),
        a.forEach((s, i) => {
            s.style.setProperty("--v-body-scroll-x", ne(-s.scrollLeft)),
                s.style.setProperty("--v-body-scroll-y", ne(-s.scrollTop)),
                s !== document.documentElement &&
                    s.style.setProperty("--v-scrollbar-offset", ne(r)),
                s.classList.add("v-overlay-scroll-blocked");
        }),
        Ve(() => {
            a.forEach((s, i) => {
                const c = parseFloat(
                        s.style.getPropertyValue("--v-body-scroll-x")
                    ),
                    u = parseFloat(
                        s.style.getPropertyValue("--v-body-scroll-y")
                    ),
                    d = s.style.scrollBehavior;
                (s.style.scrollBehavior = "auto"),
                    s.style.removeProperty("--v-body-scroll-x"),
                    s.style.removeProperty("--v-body-scroll-y"),
                    s.style.removeProperty("--v-scrollbar-offset"),
                    s.classList.remove("v-overlay-scroll-blocked"),
                    (s.scrollLeft = -c),
                    (s.scrollTop = -u),
                    (s.style.scrollBehavior = d);
            }),
                l && e.root.value.classList.remove("v-overlay--scroll-blocked");
        });
}
function qm(e, t, n) {
    let a = !1,
        r = -1,
        l = -1;
    function o(s) {
        Hm(() => {
            var u, d;
            const i = performance.now();
            (d = (u = e.updateLocation).value) == null || d.call(u, s),
                (a = (performance.now() - i) / (1e3 / 60) > 2);
        });
    }
    (l = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(
        () => {
            n.run(() => {
                bu(e.targetEl.value ?? e.contentEl.value, (s) => {
                    a
                        ? (cancelAnimationFrame(r),
                          (r = requestAnimationFrame(() => {
                              r = requestAnimationFrame(() => {
                                  o(s);
                              });
                          })))
                        : o(s);
                });
            });
        }
    )),
        Ve(() => {
            typeof cancelIdleCallback < "u" && cancelIdleCallback(l),
                cancelAnimationFrame(r);
        });
}
function bu(e, t) {
    const n = [document, ...pa(e)];
    n.forEach((a) => {
        a.addEventListener("scroll", t, { passive: !0 });
    }),
        Ve(() => {
            n.forEach((a) => {
                a.removeEventListener("scroll", t);
            });
        });
}
const Wr = Symbol.for("vuetify:v-menu"),
    Km = L(
        { closeDelay: [Number, String], openDelay: [Number, String] },
        "delay"
    );
function Ym(e, t) {
    let n = () => {};
    function a(o) {
        n == null || n();
        const s = Number(o ? e.openDelay : e.closeDelay);
        return new Promise((i) => {
            n = gv(s, () => {
                t == null || t(o), i(o);
            });
        });
    }
    function r() {
        return a(!0);
    }
    function l() {
        return a(!1);
    }
    return { clearDelay: n, runOpenDelay: r, runCloseDelay: l };
}
const Xm = L(
    {
        target: [String, Object],
        activator: [String, Object],
        activatorProps: { type: Object, default: () => ({}) },
        openOnClick: { type: Boolean, default: void 0 },
        openOnHover: Boolean,
        openOnFocus: { type: Boolean, default: void 0 },
        closeOnContentClick: Boolean,
        ...Km(),
    },
    "VOverlay-activator"
);
function Jm(e, t) {
    let { isActive: n, isTop: a } = t;
    const r = xe("useActivator"),
        l = H();
    let o = !1,
        s = !1,
        i = !0;
    const c = p(
            () => e.openOnFocus || (e.openOnFocus == null && e.openOnHover)
        ),
        u = p(
            () =>
                e.openOnClick ||
                (e.openOnClick == null && !e.openOnHover && !c.value)
        ),
        { runOpenDelay: d, runCloseDelay: f } = Ym(e, (_) => {
            _ === ((e.openOnHover && o) || (c.value && s)) &&
                !(e.openOnHover && n.value && !a.value) &&
                (n.value !== _ && (i = !0), (n.value = _));
        }),
        v = H(),
        h = {
            onClick: (_) => {
                _.stopPropagation(),
                    (l.value = _.currentTarget || _.target),
                    n.value || (v.value = [_.clientX, _.clientY]),
                    (n.value = !n.value);
            },
            onMouseenter: (_) => {
                var C;
                ((C = _.sourceCapabilities) != null && C.firesTouchEvents) ||
                    ((o = !0), (l.value = _.currentTarget || _.target), d());
            },
            onMouseleave: (_) => {
                (o = !1), f();
            },
            onFocus: (_) => {
                ha(_.target, ":focus-visible") !== !1 &&
                    ((s = !0),
                    _.stopPropagation(),
                    (l.value = _.currentTarget || _.target),
                    d());
            },
            onBlur: (_) => {
                (s = !1), _.stopPropagation(), f();
            },
        },
        g = p(() => {
            const _ = {};
            return (
                u.value && (_.onClick = h.onClick),
                e.openOnHover &&
                    ((_.onMouseenter = h.onMouseenter),
                    (_.onMouseleave = h.onMouseleave)),
                c.value && ((_.onFocus = h.onFocus), (_.onBlur = h.onBlur)),
                _
            );
        }),
        y = p(() => {
            const _ = {};
            if (
                (e.openOnHover &&
                    ((_.onMouseenter = () => {
                        (o = !0), d();
                    }),
                    (_.onMouseleave = () => {
                        (o = !1), f();
                    })),
                c.value &&
                    ((_.onFocusin = () => {
                        (s = !0), d();
                    }),
                    (_.onFocusout = () => {
                        (s = !1), f();
                    })),
                e.closeOnContentClick)
            ) {
                const C = ce(Wr, null);
                _.onClick = () => {
                    (n.value = !1), C == null || C.closeParents();
                };
            }
            return _;
        }),
        b = p(() => {
            const _ = {};
            return (
                e.openOnHover &&
                    ((_.onMouseenter = () => {
                        i && ((o = !0), (i = !1), d());
                    }),
                    (_.onMouseleave = () => {
                        (o = !1), f();
                    })),
                _
            );
        });
    Z(a, (_) => {
        _ &&
            ((e.openOnHover && !o && (!c.value || !s)) ||
                (c.value && !s && (!e.openOnHover || !o))) &&
            (n.value = !1);
    }),
        Z(
            n,
            (_) => {
                _ ||
                    setTimeout(() => {
                        v.value = void 0;
                    });
            },
            { flush: "post" }
        );
    const S = H();
    De(() => {
        S.value &&
            we(() => {
                l.value = Ln(S.value);
            });
    });
    const x = H(),
        P = p(() =>
            e.target === "cursor" && v.value
                ? v.value
                : x.value
                ? Ln(x.value)
                : Su(e.target, r) || l.value
        ),
        E = p(() => (Array.isArray(P.value) ? void 0 : P.value));
    let k;
    return (
        Z(
            () => !!e.activator,
            (_) => {
                _ && _e
                    ? ((k = zn()),
                      k.run(() => {
                          Zm(e, r, { activatorEl: l, activatorEvents: g });
                      }))
                    : k && k.stop();
            },
            { flush: "post", immediate: !0 }
        ),
        Ve(() => {
            k == null || k.stop();
        }),
        {
            activatorEl: l,
            activatorRef: S,
            target: P,
            targetEl: E,
            targetRef: x,
            activatorEvents: g,
            contentEvents: y,
            scrimEvents: b,
        }
    );
}
function Zm(e, t, n) {
    let { activatorEl: a, activatorEvents: r } = n;
    Z(
        () => e.activator,
        (i, c) => {
            if (c && i !== c) {
                const u = s(c);
                u && o(u);
            }
            i && we(() => l());
        },
        { immediate: !0 }
    ),
        Z(
            () => e.activatorProps,
            () => {
                l();
            }
        ),
        Ve(() => {
            o();
        });
    function l() {
        let i =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : s(),
            c =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : e.activatorProps;
        i && bv(i, K(r.value, c));
    }
    function o() {
        let i =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : s(),
            c =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : e.activatorProps;
        i && Sv(i, K(r.value, c));
    }
    function s() {
        let i =
            arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : e.activator;
        const c = Su(i, t);
        return (
            (a.value =
                (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE
                    ? c
                    : void 0),
            a.value
        );
    }
}
function Su(e, t) {
    var a, r;
    if (!e) return;
    let n;
    if (e === "parent") {
        let l =
            (r = (a = t == null ? void 0 : t.proxy) == null ? void 0 : a.$el) ==
            null
                ? void 0
                : r.parentNode;
        for (; l != null && l.hasAttribute("data-no-activator"); )
            l = l.parentNode;
        n = l;
    } else
        typeof e == "string"
            ? (n = document.querySelector(e))
            : "$el" in e
            ? (n = e.$el)
            : (n = e);
    return n;
}
const zx = ["sm", "md", "lg", "xl", "xxl"],
    qr = Symbol.for("vuetify:display"),
    ts = {
        mobileBreakpoint: "lg",
        thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 },
    },
    Qm = function () {
        let e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ts;
        return ze(ts, e);
    };
function ns(e) {
    return _e && !e
        ? window.innerWidth
        : (typeof e == "object" && e.clientWidth) || 0;
}
function as(e) {
    return _e && !e
        ? window.innerHeight
        : (typeof e == "object" && e.clientHeight) || 0;
}
function rs(e) {
    const t = _e && !e ? window.navigator.userAgent : "ssr";
    function n(h) {
        return !!t.match(h);
    }
    const a = n(/android/i),
        r = n(/iphone|ipad|ipod/i),
        l = n(/cordova/i),
        o = n(/electron/i),
        s = n(/chrome/i),
        i = n(/edge/i),
        c = n(/firefox/i),
        u = n(/opera/i),
        d = n(/win/i),
        f = n(/mac/i),
        v = n(/linux/i);
    return {
        android: a,
        ios: r,
        cordova: l,
        electron: o,
        chrome: s,
        edge: i,
        firefox: c,
        opera: u,
        win: d,
        mac: f,
        linux: v,
        touch: sv,
        ssr: t === "ssr",
    };
}
function eh(e, t) {
    const { thresholds: n, mobileBreakpoint: a } = Qm(e),
        r = J(as(t)),
        l = J(rs(t)),
        o = Fe({}),
        s = J(ns(t));
    function i() {
        (r.value = as()), (s.value = ns());
    }
    function c() {
        i(), (l.value = rs());
    }
    return (
        De(() => {
            const u = s.value < n.sm,
                d = s.value < n.md && !u,
                f = s.value < n.lg && !(d || u),
                v = s.value < n.xl && !(f || d || u),
                h = s.value < n.xxl && !(v || f || d || u),
                g = s.value >= n.xxl,
                y = u
                    ? "xs"
                    : d
                    ? "sm"
                    : f
                    ? "md"
                    : v
                    ? "lg"
                    : h
                    ? "xl"
                    : "xxl",
                b = typeof a == "number" ? a : n[a],
                S = s.value < b;
            (o.xs = u),
                (o.sm = d),
                (o.md = f),
                (o.lg = v),
                (o.xl = h),
                (o.xxl = g),
                (o.smAndUp = !u),
                (o.mdAndUp = !(u || d)),
                (o.lgAndUp = !(u || d || f)),
                (o.xlAndUp = !(u || d || f || v)),
                (o.smAndDown = !(f || v || h || g)),
                (o.mdAndDown = !(v || h || g)),
                (o.lgAndDown = !(h || g)),
                (o.xlAndDown = !g),
                (o.name = y),
                (o.height = r.value),
                (o.width = s.value),
                (o.mobile = S),
                (o.mobileBreakpoint = a),
                (o.platform = l.value),
                (o.thresholds = n);
        }),
        _e && window.addEventListener("resize", i, { passive: !0 }),
        { ...$a(o), update: c, ssr: !!t }
    );
}
const _u = L({ mobileBreakpoint: [Number, String] }, "display");
function vn() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t =
            arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : ut();
    const n = ce(qr);
    if (!n) throw new Error("Could not find Vuetify display injection");
    const a = p(() => {
            if (!e.mobileBreakpoint) return n.mobile.value;
            const l =
                typeof e.mobileBreakpoint == "number"
                    ? e.mobileBreakpoint
                    : n.thresholds.value[e.mobileBreakpoint];
            return n.width.value < l;
        }),
        r = p(() => (t ? { [`${t}--mobile`]: a.value } : {}));
    return { ...n, displayClasses: r, mobile: a };
}
function th() {
    if (!_e) return J(!1);
    const { ssr: e } = vn();
    if (e) {
        const t = J(!1);
        return (
            Ue(() => {
                t.value = !0;
            }),
            t
        );
    } else return J(!0);
}
const nh = L({ eager: Boolean }, "lazy");
function ah(e, t) {
    const n = J(!1),
        a = p(() => n.value || e.eager || t.value);
    Z(t, () => (n.value = !0));
    function r() {
        e.eager || (n.value = !1);
    }
    return { isBooted: n, hasContent: a, onAfterLeave: r };
}
function qa() {
    const t = xe("useScopeId").vnode.scopeId;
    return { scopeId: t ? { [t]: "" } : void 0 };
}
const ls = Symbol.for("vuetify:stack"),
    kn = Fe([]);
function rh(e, t, n) {
    const a = xe("useStack"),
        r = !n,
        l = ce(ls, void 0),
        o = Fe({ activeChildren: new Set() });
    pe(ls, o);
    const s = J(+t.value);
    tt(e, () => {
        var d;
        const u = (d = kn.at(-1)) == null ? void 0 : d[1];
        (s.value = u ? u + 10 : +t.value),
            r && kn.push([a.uid, s.value]),
            l == null || l.activeChildren.add(a.uid),
            Ve(() => {
                if (r) {
                    const f = it(kn).findIndex((v) => v[0] === a.uid);
                    kn.splice(f, 1);
                }
                l == null || l.activeChildren.delete(a.uid);
            });
    });
    const i = J(!0);
    r &&
        De(() => {
            var d;
            const u = ((d = kn.at(-1)) == null ? void 0 : d[0]) === a.uid;
            setTimeout(() => (i.value = u));
        });
    const c = p(() => !o.activeChildren.size);
    return {
        globalTop: ml(i),
        localTop: c,
        stackStyles: p(() => ({ zIndex: s.value })),
    };
}
function lh(e) {
    return {
        teleportTarget: p(() => {
            const n = e.value;
            if (n === !0 || !_e) return;
            const a =
                n === !1
                    ? document.body
                    : typeof n == "string"
                    ? document.querySelector(n)
                    : n;
            if (a == null) return;
            let r = a.querySelector(":scope > .v-overlay-container");
            return (
                r ||
                    ((r = document.createElement("div")),
                    (r.className = "v-overlay-container"),
                    a.appendChild(r)),
                r
            );
        }),
    };
}
const Kn = L(
        {
            transition: {
                type: [Boolean, String, Object],
                default: "fade-transition",
                validator: (e) => e !== !0,
            },
        },
        "transition"
    ),
    Et = (e, t) => {
        let { slots: n } = t;
        const { transition: a, disabled: r, group: l, ...o } = e,
            { component: s = l ? si : At, ...i } =
                typeof a == "object" ? a : {};
        return Ht(
            s,
            K(
                typeof a == "string" ? { name: r ? "" : a } : i,
                typeof a == "string" ? {} : { disabled: r, group: l },
                o
            ),
            n
        );
    };
function oh() {
    return !0;
}
function wu(e, t, n) {
    if (!e || Cu(e, n) === !1) return !1;
    const a = Ni(t);
    if (
        typeof ShadowRoot < "u" &&
        a instanceof ShadowRoot &&
        a.host === e.target
    )
        return !1;
    const r = ((typeof n.value == "object" && n.value.include) || (() => []))();
    return (
        r.push(t), !r.some((l) => (l == null ? void 0 : l.contains(e.target)))
    );
}
function Cu(e, t) {
    return ((typeof t.value == "object" && t.value.closeConditional) || oh)(e);
}
function sh(e, t, n) {
    const a = typeof n.value == "function" ? n.value : n.value.handler;
    t._clickOutside.lastMousedownWasOutside &&
        wu(e, t, n) &&
        setTimeout(() => {
            Cu(e, n) && a && a(e);
        }, 0);
}
function os(e, t) {
    const n = Ni(e);
    t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const ih = {
    mounted(e, t) {
        const n = (r) => sh(r, e, t),
            a = (r) => {
                e._clickOutside.lastMousedownWasOutside = wu(r, e, t);
            };
        os(e, (r) => {
            r.addEventListener("click", n, !0),
                r.addEventListener("mousedown", a, !0);
        }),
            e._clickOutside ||
                (e._clickOutside = { lastMousedownWasOutside: !1 }),
            (e._clickOutside[t.instance.$.uid] = {
                onClick: n,
                onMousedown: a,
            });
    },
    unmounted(e, t) {
        e._clickOutside &&
            (os(e, (n) => {
                var l;
                if (
                    !n ||
                    !((l = e._clickOutside) != null && l[t.instance.$.uid])
                )
                    return;
                const { onClick: a, onMousedown: r } =
                    e._clickOutside[t.instance.$.uid];
                n.removeEventListener("click", a, !0),
                    n.removeEventListener("mousedown", r, !0);
            }),
            delete e._clickOutside[t.instance.$.uid]);
    },
};
function uh(e) {
    const { modelValue: t, color: n, ...a } = e;
    return m(
        At,
        { name: "fade-transition", appear: !0 },
        {
            default: () => [
                e.modelValue &&
                    m(
                        "div",
                        K(
                            {
                                class: [
                                    "v-overlay__scrim",
                                    e.color.backgroundColorClasses.value,
                                ],
                                style: e.color.backgroundColorStyles.value,
                            },
                            a
                        ),
                        null
                    ),
            ],
        }
    );
}
const Vl = L(
        {
            absolute: Boolean,
            attach: [Boolean, String, Object],
            closeOnBack: { type: Boolean, default: !0 },
            contained: Boolean,
            contentClass: null,
            contentProps: null,
            disabled: Boolean,
            opacity: [Number, String],
            noClickAnimation: Boolean,
            modelValue: Boolean,
            persistent: Boolean,
            scrim: { type: [Boolean, String], default: !0 },
            zIndex: { type: [Number, String], default: 2e3 },
            ...Xm(),
            ...ie(),
            ...zt(),
            ...nh(),
            ...Bm(),
            ...zm(),
            ...Pe(),
            ...Kn(),
        },
        "VOverlay"
    ),
    Ca = Y()({
        name: "VOverlay",
        directives: { ClickOutside: ih },
        inheritAttrs: !1,
        props: { _disableGlobalStack: Boolean, ...Vl() },
        emits: {
            "click:outside": (e) => !0,
            "update:modelValue": (e) => !0,
            afterLeave: () => !0,
        },
        setup(e, t) {
            let { slots: n, attrs: a, emit: r } = t;
            const l = ve(e, "modelValue"),
                o = p({
                    get: () => l.value,
                    set: (j) => {
                        (j && e.disabled) || (l.value = j);
                    },
                }),
                { teleportTarget: s } = lh(p(() => e.attach || e.contained)),
                { themeClasses: i } = Ie(e),
                { rtlClasses: c, isRtl: u } = ct(),
                { hasContent: d, onAfterLeave: f } = ah(e, o),
                v = at(p(() => (typeof e.scrim == "string" ? e.scrim : null))),
                {
                    globalTop: h,
                    localTop: g,
                    stackStyles: y,
                } = rh(o, W(e, "zIndex"), e._disableGlobalStack),
                {
                    activatorEl: b,
                    activatorRef: S,
                    target: x,
                    targetEl: P,
                    targetRef: E,
                    activatorEvents: k,
                    contentEvents: _,
                    scrimEvents: C,
                } = Jm(e, { isActive: o, isTop: g }),
                { dimensionStyles: w } = Ut(e),
                A = th(),
                { scopeId: O } = qa();
            Z(
                () => e.disabled,
                (j) => {
                    j && (o.value = !1);
                }
            );
            const V = H(),
                I = H(),
                { contentStyles: D, updateLocation: M } = Fm(e, {
                    isRtl: u,
                    contentEl: I,
                    target: x,
                    isActive: o,
                });
            Um(e, {
                root: V,
                contentEl: I,
                targetEl: P,
                isActive: o,
                updateLocation: M,
            });
            function U(j) {
                r("click:outside", j), e.persistent ? F() : (o.value = !1);
            }
            function re() {
                return o.value && h.value;
            }
            _e &&
                Z(
                    o,
                    (j) => {
                        j
                            ? window.addEventListener("keydown", R)
                            : window.removeEventListener("keydown", R);
                    },
                    { immediate: !0 }
                ),
                Re(() => {
                    _e && window.removeEventListener("keydown", R);
                });
            function R(j) {
                var te, le;
                j.key === "Escape" &&
                    h.value &&
                    (e.persistent
                        ? F()
                        : ((o.value = !1),
                          (te = I.value) != null &&
                              te.contains(document.activeElement) &&
                              ((le = b.value) == null || le.focus())));
            }
            const B = su();
            tt(
                () => e.closeOnBack,
                () => {
                    Am(B, (j) => {
                        h.value && o.value
                            ? (j(!1), e.persistent ? F() : (o.value = !1))
                            : j();
                    });
                }
            );
            const N = H();
            Z(
                () => o.value && (e.absolute || e.contained) && s.value == null,
                (j) => {
                    if (j) {
                        const te = Hi(V.value);
                        te &&
                            te !== document.scrollingElement &&
                            (N.value = te.scrollTop);
                    }
                }
            );
            function F() {
                e.noClickAnimation ||
                    (I.value &&
                        Zt(
                            I.value,
                            [
                                { transformOrigin: "center" },
                                { transform: "scale(1.03)" },
                                { transformOrigin: "center" },
                            ],
                            { duration: 150, easing: ya }
                        ));
            }
            function G() {
                f(), r("afterLeave");
            }
            return (
                ae(() => {
                    var j;
                    return m(ue, null, [
                        (j = n.activator) == null
                            ? void 0
                            : j.call(n, {
                                  isActive: o.value,
                                  props: K(
                                      { ref: S, targetRef: E },
                                      k.value,
                                      e.activatorProps
                                  ),
                              }),
                        A.value &&
                            d.value &&
                            m(
                                Ld,
                                { disabled: !s.value, to: s.value },
                                {
                                    default: () => [
                                        m(
                                            "div",
                                            K(
                                                {
                                                    class: [
                                                        "v-overlay",
                                                        {
                                                            "v-overlay--absolute":
                                                                e.absolute ||
                                                                e.contained,
                                                            "v-overlay--active":
                                                                o.value,
                                                            "v-overlay--contained":
                                                                e.contained,
                                                        },
                                                        i.value,
                                                        c.value,
                                                        e.class,
                                                    ],
                                                    style: [
                                                        y.value,
                                                        {
                                                            "--v-overlay-opacity":
                                                                e.opacity,
                                                            top: ne(N.value),
                                                        },
                                                        e.style,
                                                    ],
                                                    ref: V,
                                                },
                                                O,
                                                a
                                            ),
                                            [
                                                m(
                                                    uh,
                                                    K(
                                                        {
                                                            color: v,
                                                            modelValue:
                                                                o.value &&
                                                                !!e.scrim,
                                                        },
                                                        C.value
                                                    ),
                                                    null
                                                ),
                                                m(
                                                    Et,
                                                    {
                                                        appear: !0,
                                                        persisted: !0,
                                                        transition:
                                                            e.transition,
                                                        target: x.value,
                                                        onAfterLeave: G,
                                                    },
                                                    {
                                                        default: () => {
                                                            var te;
                                                            return [
                                                                Le(
                                                                    m(
                                                                        "div",
                                                                        K(
                                                                            {
                                                                                ref: I,
                                                                                class: [
                                                                                    "v-overlay__content",
                                                                                    e.contentClass,
                                                                                ],
                                                                                style: [
                                                                                    w.value,
                                                                                    D.value,
                                                                                ],
                                                                            },
                                                                            _.value,
                                                                            e.contentProps
                                                                        ),
                                                                        [
                                                                            (te =
                                                                                n.default) ==
                                                                            null
                                                                                ? void 0
                                                                                : te.call(
                                                                                      n,
                                                                                      {
                                                                                          isActive:
                                                                                              o,
                                                                                      }
                                                                                  ),
                                                                        ]
                                                                    ),
                                                                    [
                                                                        [
                                                                            on,
                                                                            o.value,
                                                                        ],
                                                                        [
                                                                            bt(
                                                                                "click-outside"
                                                                            ),
                                                                            {
                                                                                handler:
                                                                                    U,
                                                                                closeConditional:
                                                                                    re,
                                                                                include:
                                                                                    () => [
                                                                                        b.value,
                                                                                    ],
                                                                            },
                                                                        ],
                                                                    ]
                                                                ),
                                                            ];
                                                        },
                                                    }
                                                ),
                                            ]
                                        ),
                                    ],
                                }
                            ),
                    ]);
                }),
                {
                    activatorEl: b,
                    target: x,
                    animateClick: F,
                    contentEl: I,
                    globalTop: h,
                    localTop: g,
                    updateLocation: M,
                }
            );
        },
    }),
    Sr = Symbol("Forwarded refs");
function _r(e, t) {
    let n = e;
    for (; n; ) {
        const a = Reflect.getOwnPropertyDescriptor(n, t);
        if (a) return a;
        n = Object.getPrototypeOf(n);
    }
}
function mn(e) {
    for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
        a < t;
        a++
    )
        n[a - 1] = arguments[a];
    return (
        (e[Sr] = n),
        new Proxy(e, {
            get(r, l) {
                if (Reflect.has(r, l)) return Reflect.get(r, l);
                if (
                    !(
                        typeof l == "symbol" ||
                        l.startsWith("$") ||
                        l.startsWith("__")
                    )
                ) {
                    for (const o of n)
                        if (o.value && Reflect.has(o.value, l)) {
                            const s = Reflect.get(o.value, l);
                            return typeof s == "function" ? s.bind(o.value) : s;
                        }
                }
            },
            has(r, l) {
                if (Reflect.has(r, l)) return !0;
                if (
                    typeof l == "symbol" ||
                    l.startsWith("$") ||
                    l.startsWith("__")
                )
                    return !1;
                for (const o of n)
                    if (o.value && Reflect.has(o.value, l)) return !0;
                return !1;
            },
            set(r, l, o) {
                if (Reflect.has(r, l)) return Reflect.set(r, l, o);
                if (
                    typeof l == "symbol" ||
                    l.startsWith("$") ||
                    l.startsWith("__")
                )
                    return !1;
                for (const s of n)
                    if (s.value && Reflect.has(s.value, l))
                        return Reflect.set(s.value, l, o);
                return !1;
            },
            getOwnPropertyDescriptor(r, l) {
                var s;
                const o = Reflect.getOwnPropertyDescriptor(r, l);
                if (o) return o;
                if (
                    !(
                        typeof l == "symbol" ||
                        l.startsWith("$") ||
                        l.startsWith("__")
                    )
                ) {
                    for (const i of n) {
                        if (!i.value) continue;
                        const c =
                            _r(i.value, l) ??
                            ("_" in i.value
                                ? _r(
                                      (s = i.value._) == null
                                          ? void 0
                                          : s.setupState,
                                      l
                                  )
                                : void 0);
                        if (c) return c;
                    }
                    for (const i of n) {
                        const c = i.value && i.value[Sr];
                        if (!c) continue;
                        const u = c.slice();
                        for (; u.length; ) {
                            const d = u.shift(),
                                f = _r(d.value, l);
                            if (f) return f;
                            const v = d.value && d.value[Sr];
                            v && u.push(...v);
                        }
                    }
                }
            },
        })
    );
}
function ch(e) {
    const t = J(e);
    let n = -1;
    function a() {
        clearInterval(n);
    }
    function r() {
        a(), we(() => (t.value = e));
    }
    function l(o) {
        const s = o ? getComputedStyle(o) : { transitionDuration: 0.2 },
            i = parseFloat(s.transitionDuration) * 1e3 || 200;
        if ((a(), t.value <= 0)) return;
        const c = performance.now();
        n = window.setInterval(() => {
            const u = performance.now() - c + i;
            (t.value = Math.max(e - u, 0)), t.value <= 0 && a();
        }, i);
    }
    return Ve(a), { clear: a, time: t, start: l, reset: r };
}
const dh = L(
        {
            multiLine: Boolean,
            text: String,
            timer: [Boolean, String],
            timeout: { type: [Number, String], default: 5e3 },
            vertical: Boolean,
            ...ja({ location: "bottom" }),
            ...Il(),
            ...je(),
            ...ft(),
            ...Pe(),
            ...It(Vl({ transition: "v-snackbar-transition" }), [
                "persistent",
                "noClickAnimation",
                "scrim",
                "scrollStrategy",
            ]),
        },
        "VSnackbar"
    ),
    fh = Y()({
        name: "VSnackbar",
        props: dh(),
        emits: { "update:modelValue": (e) => !0 },
        setup(e, t) {
            let { slots: n } = t;
            const a = ve(e, "modelValue"),
                { locationStyles: r } = Ha(e),
                { positionClasses: l } = Ol(e),
                { scopeId: o } = qa(),
                { themeClasses: s } = Ie(e),
                { colorClasses: i, colorStyles: c, variantClasses: u } = dn(e),
                { roundedClasses: d } = We(e),
                f = ch(Number(e.timeout)),
                v = H(),
                h = H(),
                g = J(!1);
            Z(a, b),
                Z(() => e.timeout, b),
                Ue(() => {
                    a.value && b();
                });
            let y = -1;
            function b() {
                f.reset(), window.clearTimeout(y);
                const E = Number(e.timeout);
                if (!a.value || E === -1) return;
                const k = Ln(h.value);
                f.start(k),
                    (y = window.setTimeout(() => {
                        a.value = !1;
                    }, E));
            }
            function S() {
                f.reset(), window.clearTimeout(y);
            }
            function x() {
                (g.value = !0), S();
            }
            function P() {
                (g.value = !1), b();
            }
            return (
                ae(() => {
                    const E = Ca.filterProps(e),
                        k = !!(n.default || n.text || e.text);
                    return m(
                        Ca,
                        K(
                            {
                                ref: v,
                                class: [
                                    "v-snackbar",
                                    {
                                        "v-snackbar--active": a.value,
                                        "v-snackbar--multi-line":
                                            e.multiLine && !e.vertical,
                                        "v-snackbar--timer": !!e.timer,
                                        "v-snackbar--vertical": e.vertical,
                                    },
                                    l.value,
                                    e.class,
                                ],
                                style: e.style,
                            },
                            E,
                            {
                                modelValue: a.value,
                                "onUpdate:modelValue": (_) => (a.value = _),
                                contentProps: K(
                                    {
                                        class: [
                                            "v-snackbar__wrapper",
                                            s.value,
                                            i.value,
                                            d.value,
                                            u.value,
                                        ],
                                        style: [r.value, c.value],
                                        onPointerenter: x,
                                        onPointerleave: P,
                                    },
                                    E.contentProps
                                ),
                                persistent: !0,
                                noClickAnimation: !0,
                                scrim: !1,
                                scrollStrategy: "none",
                                _disableGlobalStack: !0,
                            },
                            o
                        ),
                        {
                            default: () => {
                                var _, C;
                                return [
                                    cn(!1, "v-snackbar"),
                                    e.timer &&
                                        !g.value &&
                                        m(
                                            "div",
                                            {
                                                key: "timer",
                                                class: "v-snackbar__timer",
                                            },
                                            [
                                                m(
                                                    ou,
                                                    {
                                                        ref: h,
                                                        color:
                                                            typeof e.timer ==
                                                            "string"
                                                                ? e.timer
                                                                : "info",
                                                        max: e.timeout,
                                                        "model-value":
                                                            f.time.value,
                                                    },
                                                    null
                                                ),
                                            ]
                                        ),
                                    k &&
                                        m(
                                            "div",
                                            {
                                                key: "content",
                                                class: "v-snackbar__content",
                                                role: "status",
                                                "aria-live": "polite",
                                            },
                                            [
                                                ((_ = n.text) == null
                                                    ? void 0
                                                    : _.call(n)) ?? e.text,
                                                (C = n.default) == null
                                                    ? void 0
                                                    : C.call(n),
                                            ]
                                        ),
                                    n.actions &&
                                        m(
                                            Ee,
                                            {
                                                defaults: {
                                                    VBtn: {
                                                        variant: "text",
                                                        ripple: !1,
                                                        slim: !0,
                                                    },
                                                },
                                            },
                                            {
                                                default: () => [
                                                    m(
                                                        "div",
                                                        {
                                                            class: "v-snackbar__actions",
                                                        },
                                                        [n.actions()]
                                                    ),
                                                ],
                                            }
                                        ),
                                ];
                            },
                            activator: n.activator,
                        }
                    );
                }),
                mn({}, v)
            );
        },
    }),
    vh = pt({
        __name: "App",
        setup(e) {
            const t = vi(),
                n = mi(),
                a = ov(),
                r = (l) => ({ transform: `translateY(${l * 64}px)` });
            return (
                Z(
                    () => a.fullPath,
                    () => {
                        (n.show = !1), (n.modals = []);
                    }
                ),
                (l, o) => {
                    const s = Fd("router-view");
                    return (
                        ke(),
                        et(Bd, null, {
                            default: ye(() => [
                                m(cm, null, {
                                    default: ye(() => [
                                        m(yu, null, {
                                            default: ye(() => [
                                                m(s, null, {
                                                    default: ye(
                                                        ({
                                                            Component: i,
                                                            route: c,
                                                        }) => [
                                                            (ke(),
                                                            et(
                                                                da(
                                                                    c.meta
                                                                        .layout
                                                                ),
                                                                null,
                                                                {
                                                                    default: ye(
                                                                        () => [
                                                                            (ke(),
                                                                            et(
                                                                                da(
                                                                                    i
                                                                                ),
                                                                                {
                                                                                    key: c.fullPath,
                                                                                }
                                                                            )),
                                                                        ]
                                                                    ),
                                                                    _: 2,
                                                                },
                                                                1024
                                                            )),
                                                        ]
                                                    ),
                                                    _: 1,
                                                }),
                                                (ke(!0),
                                                rt(
                                                    ue,
                                                    null,
                                                    hl(
                                                        he(t).notifications,
                                                        (i, c) => (
                                                            ke(),
                                                            et(
                                                                fh,
                                                                {
                                                                    key: c,
                                                                    color: i.color,
                                                                    position:
                                                                        "sticky",
                                                                    location:
                                                                        "top right",
                                                                    "model-value":
                                                                        !0,
                                                                    style: Md(
                                                                        r(c)
                                                                    ),
                                                                },
                                                                {
                                                                    actions: ye(
                                                                        () => [
                                                                            m(
                                                                                Qe,
                                                                                {
                                                                                    icon: "mdi-close",
                                                                                    variant:
                                                                                        "text",
                                                                                    onClick:
                                                                                        (
                                                                                            u
                                                                                        ) =>
                                                                                            he(
                                                                                                t
                                                                                            ).closeAlert(
                                                                                                c
                                                                                            ),
                                                                                },
                                                                                null,
                                                                                8,
                                                                                [
                                                                                    "onClick",
                                                                                ]
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    default: ye(
                                                                        () => [
                                                                            ht(
                                                                                ii(
                                                                                    i.content
                                                                                ) +
                                                                                    " ",
                                                                                1
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    _: 2,
                                                                },
                                                                1032,
                                                                [
                                                                    "color",
                                                                    "style",
                                                                ]
                                                            )
                                                        )
                                                    ),
                                                    128
                                                )),
                                            ]),
                                            _: 1,
                                        }),
                                    ]),
                                    _: 1,
                                }),
                            ]),
                            _: 1,
                        })
                    );
                }
            );
        },
    }),
    Kr = {
        "001": 1,
        AD: 1,
        AE: 6,
        AF: 6,
        AG: 0,
        AI: 1,
        AL: 1,
        AM: 1,
        AN: 1,
        AR: 1,
        AS: 0,
        AT: 1,
        AU: 1,
        AX: 1,
        AZ: 1,
        BA: 1,
        BD: 0,
        BE: 1,
        BG: 1,
        BH: 6,
        BM: 1,
        BN: 1,
        BR: 0,
        BS: 0,
        BT: 0,
        BW: 0,
        BY: 1,
        BZ: 0,
        CA: 0,
        CH: 1,
        CL: 1,
        CM: 1,
        CN: 1,
        CO: 0,
        CR: 1,
        CY: 1,
        CZ: 1,
        DE: 1,
        DJ: 6,
        DK: 1,
        DM: 0,
        DO: 0,
        DZ: 6,
        EC: 1,
        EE: 1,
        EG: 6,
        ES: 1,
        ET: 0,
        FI: 1,
        FJ: 1,
        FO: 1,
        FR: 1,
        GB: 1,
        "GB-alt-variant": 0,
        GE: 1,
        GF: 1,
        GP: 1,
        GR: 1,
        GT: 0,
        GU: 0,
        HK: 0,
        HN: 0,
        HR: 1,
        HU: 1,
        ID: 0,
        IE: 1,
        IL: 0,
        IN: 0,
        IQ: 6,
        IR: 6,
        IS: 1,
        IT: 1,
        JM: 0,
        JO: 6,
        JP: 0,
        KE: 0,
        KG: 1,
        KH: 0,
        KR: 0,
        KW: 6,
        KZ: 1,
        LA: 0,
        LB: 1,
        LI: 1,
        LK: 1,
        LT: 1,
        LU: 1,
        LV: 1,
        LY: 6,
        MC: 1,
        MD: 1,
        ME: 1,
        MH: 0,
        MK: 1,
        MM: 0,
        MN: 1,
        MO: 0,
        MQ: 1,
        MT: 0,
        MV: 5,
        MX: 0,
        MY: 1,
        MZ: 0,
        NI: 0,
        NL: 1,
        NO: 1,
        NP: 0,
        NZ: 1,
        OM: 6,
        PA: 0,
        PE: 0,
        PH: 0,
        PK: 0,
        PL: 1,
        PR: 0,
        PT: 0,
        PY: 0,
        QA: 6,
        RE: 1,
        RO: 1,
        RS: 1,
        RU: 1,
        SA: 0,
        SD: 6,
        SE: 1,
        SG: 0,
        SI: 1,
        SK: 1,
        SM: 1,
        SV: 0,
        SY: 6,
        TH: 0,
        TJ: 1,
        TM: 1,
        TR: 1,
        TT: 0,
        TW: 0,
        UA: 1,
        UM: 0,
        US: 0,
        UY: 1,
        UZ: 1,
        VA: 1,
        VE: 0,
        VI: 0,
        VN: 1,
        WS: 0,
        XK: 1,
        YE: 0,
        ZA: 0,
        ZW: 0,
    };
function mh(e, t) {
    const n = [];
    let a = [];
    const r = xu(e),
        l = Pu(e),
        o = (r.getDay() - Kr[t.slice(-2).toUpperCase()] + 7) % 7,
        s = (l.getDay() - Kr[t.slice(-2).toUpperCase()] + 7) % 7;
    for (let i = 0; i < o; i++) {
        const c = new Date(r);
        c.setDate(c.getDate() - (o - i)), a.push(c);
    }
    for (let i = 1; i <= l.getDate(); i++) {
        const c = new Date(e.getFullYear(), e.getMonth(), i);
        a.push(c), a.length === 7 && (n.push(a), (a = []));
    }
    for (let i = 1; i < 7 - s; i++) {
        const c = new Date(l);
        c.setDate(c.getDate() + i), a.push(c);
    }
    return a.length > 0 && n.push(a), n;
}
function hh(e) {
    const t = new Date(e);
    for (; t.getDay() !== 0; ) t.setDate(t.getDate() - 1);
    return t;
}
function gh(e) {
    const t = new Date(e);
    for (; t.getDay() !== 6; ) t.setDate(t.getDate() + 1);
    return t;
}
function xu(e) {
    return new Date(e.getFullYear(), e.getMonth(), 1);
}
function Pu(e) {
    return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function yh(e) {
    const t = e.split("-").map(Number);
    return new Date(t[0], t[1] - 1, t[2]);
}
const ph = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function ku(e) {
    if (e == null) return new Date();
    if (e instanceof Date) return e;
    if (typeof e == "string") {
        let t;
        if (ph.test(e)) return yh(e);
        if (((t = Date.parse(e)), !isNaN(t))) return new Date(t);
    }
    return null;
}
const ss = new Date(2e3, 0, 2);
function bh(e) {
    const t = Kr[e.slice(-2).toUpperCase()];
    return Jt(7).map((n) => {
        const a = new Date(ss);
        return (
            a.setDate(ss.getDate() + t + n),
            new Intl.DateTimeFormat(e, { weekday: "narrow" }).format(a)
        );
    });
}
function Sh(e, t, n, a) {
    const r = ku(e) ?? new Date(),
        l = a == null ? void 0 : a[t];
    if (typeof l == "function") return l(r, t, n);
    let o = {};
    switch (t) {
        case "fullDateWithWeekday":
            o = {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
            };
            break;
        case "hours12h":
            o = { hour: "numeric", hour12: !0 };
            break;
        case "normalDateWithWeekday":
            o = { weekday: "short", day: "numeric", month: "short" };
            break;
        case "keyboardDate":
            o = { day: "2-digit", month: "2-digit", year: "numeric" };
            break;
        case "monthAndDate":
            o = { month: "long", day: "numeric" };
            break;
        case "monthAndYear":
            o = { month: "long", year: "numeric" };
            break;
        case "month":
            o = { month: "long" };
            break;
        case "monthShort":
            o = { month: "short" };
            break;
        case "dayOfMonth":
            return new Intl.NumberFormat(n).format(r.getDate());
        case "shortDate":
            o = { year: "2-digit", month: "numeric", day: "numeric" };
            break;
        case "weekdayShort":
            o = { weekday: "short" };
            break;
        case "year":
            o = { year: "numeric" };
            break;
        default:
            o = l ?? { timeZone: "UTC", timeZoneName: "short" };
    }
    return new Intl.DateTimeFormat(n, o).format(r);
}
function _h(e, t) {
    const n = e.toJsDate(t),
        a = n.getFullYear(),
        r = Po(String(n.getMonth() + 1), 2, "0"),
        l = Po(String(n.getDate()), 2, "0");
    return `${a}-${r}-${l}`;
}
function wh(e) {
    const [t, n, a] = e.split("-").map(Number);
    return new Date(t, n - 1, a);
}
function Ch(e, t) {
    const n = new Date(e);
    return n.setMinutes(n.getMinutes() + t), n;
}
function xh(e, t) {
    const n = new Date(e);
    return n.setHours(n.getHours() + t), n;
}
function Ph(e, t) {
    const n = new Date(e);
    return n.setDate(n.getDate() + t), n;
}
function kh(e, t) {
    const n = new Date(e);
    return n.setDate(n.getDate() + t * 7), n;
}
function Eh(e, t) {
    const n = new Date(e);
    return n.setMonth(n.getMonth() + t), n;
}
function Ah(e) {
    return e.getFullYear();
}
function Th(e) {
    return e.getMonth();
}
function Ih(e) {
    return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function Oh(e) {
    return e.getHours();
}
function Vh(e) {
    return e.getMinutes();
}
function Rh(e) {
    return new Date(e.getFullYear(), 0, 1);
}
function $h(e) {
    return new Date(e.getFullYear(), 11, 31);
}
function Dh(e, t) {
    return Yr(e, t[0]) && Bh(e, t[1]);
}
function Lh(e) {
    const t = new Date(e);
    return t instanceof Date && !isNaN(t.getTime());
}
function Yr(e, t) {
    return e.getTime() > t.getTime();
}
function Bh(e, t) {
    return e.getTime() < t.getTime();
}
function is(e, t) {
    return e.getTime() === t.getTime();
}
function Fh(e, t) {
    return (
        e.getDate() === t.getDate() &&
        e.getMonth() === t.getMonth() &&
        e.getFullYear() === t.getFullYear()
    );
}
function Mh(e, t) {
    return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Nh(e, t, n) {
    const a = new Date(e),
        r = new Date(t);
    switch (n) {
        case "years":
            return a.getFullYear() - r.getFullYear();
        case "quarters":
            return Math.floor(
                (a.getMonth() -
                    r.getMonth() +
                    (a.getFullYear() - r.getFullYear()) * 12) /
                    4
            );
        case "months":
            return (
                a.getMonth() -
                r.getMonth() +
                (a.getFullYear() - r.getFullYear()) * 12
            );
        case "weeks":
            return Math.floor(
                (a.getTime() - r.getTime()) / (1e3 * 60 * 60 * 24 * 7)
            );
        case "days":
            return Math.floor(
                (a.getTime() - r.getTime()) / (1e3 * 60 * 60 * 24)
            );
        case "hours":
            return Math.floor((a.getTime() - r.getTime()) / (1e3 * 60 * 60));
        case "minutes":
            return Math.floor((a.getTime() - r.getTime()) / (1e3 * 60));
        case "seconds":
            return Math.floor((a.getTime() - r.getTime()) / 1e3);
        default:
            return a.getTime() - r.getTime();
    }
}
function jh(e, t) {
    const n = new Date(e);
    return n.setHours(t), n;
}
function Hh(e, t) {
    const n = new Date(e);
    return n.setMinutes(t), n;
}
function zh(e, t) {
    const n = new Date(e);
    return n.setMonth(t), n;
}
function Uh(e, t) {
    const n = new Date(e);
    return n.setFullYear(t), n;
}
function Gh(e) {
    return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function Wh(e) {
    return new Date(
        e.getFullYear(),
        e.getMonth(),
        e.getDate(),
        23,
        59,
        59,
        999
    );
}
class qh {
    constructor(t) {
        (this.locale = t.locale), (this.formats = t.formats);
    }
    date(t) {
        return ku(t);
    }
    toJsDate(t) {
        return t;
    }
    toISO(t) {
        return _h(this, t);
    }
    parseISO(t) {
        return wh(t);
    }
    addMinutes(t, n) {
        return Ch(t, n);
    }
    addHours(t, n) {
        return xh(t, n);
    }
    addDays(t, n) {
        return Ph(t, n);
    }
    addWeeks(t, n) {
        return kh(t, n);
    }
    addMonths(t, n) {
        return Eh(t, n);
    }
    getWeekArray(t) {
        return mh(t, this.locale);
    }
    startOfWeek(t) {
        return hh(t);
    }
    endOfWeek(t) {
        return gh(t);
    }
    startOfMonth(t) {
        return xu(t);
    }
    endOfMonth(t) {
        return Pu(t);
    }
    format(t, n) {
        return Sh(t, n, this.locale, this.formats);
    }
    isEqual(t, n) {
        return is(t, n);
    }
    isValid(t) {
        return Lh(t);
    }
    isWithinRange(t, n) {
        return Dh(t, n);
    }
    isAfter(t, n) {
        return Yr(t, n);
    }
    isBefore(t, n) {
        return !Yr(t, n) && !is(t, n);
    }
    isSameDay(t, n) {
        return Fh(t, n);
    }
    isSameMonth(t, n) {
        return Mh(t, n);
    }
    setMinutes(t, n) {
        return Hh(t, n);
    }
    setHours(t, n) {
        return jh(t, n);
    }
    setMonth(t, n) {
        return zh(t, n);
    }
    setYear(t, n) {
        return Uh(t, n);
    }
    getDiff(t, n, a) {
        return Nh(t, n, a);
    }
    getWeekdays() {
        return bh(this.locale);
    }
    getYear(t) {
        return Ah(t);
    }
    getMonth(t) {
        return Th(t);
    }
    getNextMonth(t) {
        return Ih(t);
    }
    getHours(t) {
        return Oh(t);
    }
    getMinutes(t) {
        return Vh(t);
    }
    startOfDay(t) {
        return Gh(t);
    }
    endOfDay(t) {
        return Wh(t);
    }
    startOfYear(t) {
        return Rh(t);
    }
    endOfYear(t) {
        return $h(t);
    }
}
const Kh = Symbol.for("vuetify:date-options"),
    us = Symbol.for("vuetify:date-adapter");
function Yh(e, t) {
    const n = ze(
        {
            adapter: qh,
            locale: {
                af: "af-ZA",
                bg: "bg-BG",
                ca: "ca-ES",
                ckb: "",
                cs: "cs-CZ",
                de: "de-DE",
                el: "el-GR",
                en: "en-US",
                et: "et-EE",
                fa: "fa-IR",
                fi: "fi-FI",
                hr: "hr-HR",
                hu: "hu-HU",
                he: "he-IL",
                id: "id-ID",
                it: "it-IT",
                ja: "ja-JP",
                ko: "ko-KR",
                lv: "lv-LV",
                lt: "lt-LT",
                nl: "nl-NL",
                no: "no-NO",
                pl: "pl-PL",
                pt: "pt-PT",
                ro: "ro-RO",
                ru: "ru-RU",
                sk: "sk-SK",
                sl: "sl-SI",
                srCyrl: "sr-SP",
                srLatn: "sr-SP",
                sv: "sv-SE",
                th: "th-TH",
                tr: "tr-TR",
                az: "az-AZ",
                uk: "uk-UA",
                vi: "vi-VN",
                zhHans: "zh-CN",
                zhHant: "zh-TW",
            },
        },
        e
    );
    return { options: n, instance: Xh(n, t) };
}
function Xh(e, t) {
    const n = Fe(
        typeof e.adapter == "function"
            ? new e.adapter({
                  locale: e.locale[t.current.value] ?? t.current.value,
                  formats: e.formats,
              })
            : e.adapter
    );
    return (
        Z(t.current, (a) => {
            n.locale = e.locale[a] ?? a ?? n.locale;
        }),
        n
    );
}
const Jh = Symbol.for("vuetify:goto");
function Zh() {
    return {
        container: void 0,
        duration: 300,
        layout: !1,
        offset: 0,
        easing: "easeInOutCubic",
        patterns: {
            linear: (e) => e,
            easeInQuad: (e) => e ** 2,
            easeOutQuad: (e) => e * (2 - e),
            easeInOutQuad: (e) => (e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e),
            easeInCubic: (e) => e ** 3,
            easeOutCubic: (e) => (--e) ** 3 + 1,
            easeInOutCubic: (e) =>
                e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
            easeInQuart: (e) => e ** 4,
            easeOutQuart: (e) => 1 - (--e) ** 4,
            easeInOutQuart: (e) => (e < 0.5 ? 8 * e ** 4 : 1 - 8 * (--e) ** 4),
            easeInQuint: (e) => e ** 5,
            easeOutQuint: (e) => 1 + (--e) ** 5,
            easeInOutQuint: (e) =>
                e < 0.5 ? 16 * e ** 5 : 1 + 16 * (--e) ** 5,
        },
    };
}
function Qh(e, t) {
    return { rtl: t.isRtl, options: ze(Zh(), e) };
}
function Eu() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { blueprint: t, ...n } = e,
        a = ze(t, n),
        { aliases: r = {}, components: l = {}, directives: o = {} } = a,
        s = zv(a.defaults),
        i = eh(a.display, a.ssr),
        c = sm(a.theme),
        u = Sm(a.icons),
        d = am(a.locale),
        f = Yh(a.date, d),
        v = Qh(a.goTo, d);
    return {
        install: (g) => {
            for (const y in o) g.directive(y, o[y]);
            for (const y in l) g.component(y, l[y]);
            for (const y in r)
                g.component(y, un({ ...r[y], name: y, aliasName: r[y].name }));
            if (
                (c.install(g),
                g.provide(nn, s),
                g.provide(qr, i),
                g.provide(Fn, c),
                g.provide(jr, u),
                g.provide(Sa, d),
                g.provide(Kh, f.options),
                g.provide(us, f.instance),
                g.provide(Jh, v),
                _e && a.ssr)
            )
                if (g.$nuxt)
                    g.$nuxt.hook("app:suspense:resolve", () => {
                        i.update();
                    });
                else {
                    const { mount: y } = g;
                    g.mount = function () {
                        const b = y(...arguments);
                        return we(() => i.update()), (g.mount = y), b;
                    };
                }
            Ge.reset(),
                g.mixin({
                    computed: {
                        $vuetify() {
                            return Fe({
                                defaults: Kt.call(this, nn),
                                display: Kt.call(this, qr),
                                theme: Kt.call(this, Fn),
                                icons: Kt.call(this, jr),
                                locale: Kt.call(this, Sa),
                                date: Kt.call(this, us),
                            });
                        },
                    },
                });
        },
        defaults: s,
        display: i,
        theme: c,
        icons: u,
        locale: d,
        date: f,
        goTo: v,
    };
}
const eg = "3.5.8";
Eu.version = eg;
function Kt(e) {
    var a, r;
    const t = this.$,
        n =
            ((a = t.parent) == null ? void 0 : a.provides) ??
            ((r = t.vnode.appContext) == null ? void 0 : r.provides);
    if (n && e in n) return n[e];
}
const Au = L({ text: String, ...ie(), ...Oe() }, "VToolbarTitle"),
    Tu = Y()({
        name: "VToolbarTitle",
        props: Au(),
        setup(e, t) {
            let { slots: n } = t;
            return (
                ae(() => {
                    const a = !!(n.default || n.text || e.text);
                    return m(
                        e.tag,
                        { class: ["v-toolbar-title", e.class], style: e.style },
                        {
                            default: () => {
                                var r;
                                return [
                                    a &&
                                        m(
                                            "div",
                                            {
                                                class: "v-toolbar-title__placeholder",
                                            },
                                            [
                                                n.text ? n.text() : e.text,
                                                (r = n.default) == null
                                                    ? void 0
                                                    : r.call(n),
                                            ]
                                        ),
                                ];
                            },
                        }
                    );
                }),
                {}
            );
        },
    }),
    tg = L(
        {
            disabled: Boolean,
            group: Boolean,
            hideOnLeave: Boolean,
            leaveAbsolute: Boolean,
            mode: String,
            origin: String,
        },
        "transition"
    );
function qe(e, t, n) {
    return Y()({
        name: e,
        props: tg({ mode: n, origin: t }),
        setup(a, r) {
            let { slots: l } = r;
            const o = {
                onBeforeEnter(s) {
                    a.origin && (s.style.transformOrigin = a.origin);
                },
                onLeave(s) {
                    if (a.leaveAbsolute) {
                        const {
                            offsetTop: i,
                            offsetLeft: c,
                            offsetWidth: u,
                            offsetHeight: d,
                        } = s;
                        (s._transitionInitialStyles = {
                            position: s.style.position,
                            top: s.style.top,
                            left: s.style.left,
                            width: s.style.width,
                            height: s.style.height,
                        }),
                            (s.style.position = "absolute"),
                            (s.style.top = `${i}px`),
                            (s.style.left = `${c}px`),
                            (s.style.width = `${u}px`),
                            (s.style.height = `${d}px`);
                    }
                    a.hideOnLeave &&
                        s.style.setProperty("display", "none", "important");
                },
                onAfterLeave(s) {
                    if (
                        a.leaveAbsolute &&
                        s != null &&
                        s._transitionInitialStyles
                    ) {
                        const {
                            position: i,
                            top: c,
                            left: u,
                            width: d,
                            height: f,
                        } = s._transitionInitialStyles;
                        delete s._transitionInitialStyles,
                            (s.style.position = i || ""),
                            (s.style.top = c || ""),
                            (s.style.left = u || ""),
                            (s.style.width = d || ""),
                            (s.style.height = f || "");
                    }
                },
            };
            return () => {
                const s = a.group ? si : At;
                return Ht(
                    s,
                    {
                        name: a.disabled ? "" : e,
                        css: !a.disabled,
                        ...(a.group ? void 0 : { mode: a.mode }),
                        ...(a.disabled ? {} : o),
                    },
                    l.default
                );
            };
        },
    });
}
function Iu(e, t) {
    let n =
        arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : "in-out";
    return Y()({
        name: e,
        props: { mode: { type: String, default: n }, disabled: Boolean },
        setup(a, r) {
            let { slots: l } = r;
            return () =>
                Ht(
                    At,
                    {
                        name: a.disabled ? "" : e,
                        css: !a.disabled,
                        ...(a.disabled ? {} : t),
                    },
                    l.default
                );
        },
    });
}
function Ou() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    const n = (
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
        )
            ? "width"
            : "height",
        a = oi(`offset-${n}`);
    return {
        onBeforeEnter(o) {
            (o._parent = o.parentNode),
                (o._initialStyle = {
                    transition: o.style.transition,
                    overflow: o.style.overflow,
                    [n]: o.style[n],
                });
        },
        onEnter(o) {
            const s = o._initialStyle;
            o.style.setProperty("transition", "none", "important"),
                (o.style.overflow = "hidden");
            const i = `${o[a]}px`;
            (o.style[n] = "0"),
                o.offsetHeight,
                (o.style.transition = s.transition),
                e && o._parent && o._parent.classList.add(e),
                requestAnimationFrame(() => {
                    o.style[n] = i;
                });
        },
        onAfterEnter: l,
        onEnterCancelled: l,
        onLeave(o) {
            (o._initialStyle = {
                transition: "",
                overflow: o.style.overflow,
                [n]: o.style[n],
            }),
                (o.style.overflow = "hidden"),
                (o.style[n] = `${o[a]}px`),
                o.offsetHeight,
                requestAnimationFrame(() => (o.style[n] = "0"));
        },
        onAfterLeave: r,
        onLeaveCancelled: r,
    };
    function r(o) {
        e && o._parent && o._parent.classList.remove(e), l(o);
    }
    function l(o) {
        const s = o._initialStyle[n];
        (o.style.overflow = o._initialStyle.overflow),
            s != null && (o.style[n] = s),
            delete o._initialStyle;
    }
}
const ng = L({ target: [Object, Array] }, "v-dialog-transition"),
    Vu = Y()({
        name: "VDialogTransition",
        props: ng(),
        setup(e, t) {
            let { slots: n } = t;
            const a = {
                onBeforeEnter(r) {
                    (r.style.pointerEvents = "none"),
                        (r.style.visibility = "hidden");
                },
                async onEnter(r, l) {
                    var f;
                    await new Promise((v) => requestAnimationFrame(v)),
                        await new Promise((v) => requestAnimationFrame(v)),
                        (r.style.visibility = "");
                    const {
                            x: o,
                            y: s,
                            sx: i,
                            sy: c,
                            speed: u,
                        } = ds(e.target, r),
                        d = Zt(
                            r,
                            [
                                {
                                    transform: `translate(${o}px, ${s}px) scale(${i}, ${c})`,
                                    opacity: 0,
                                },
                                {},
                            ],
                            { duration: 225 * u, easing: qv }
                        );
                    (f = cs(r)) == null ||
                        f.forEach((v) => {
                            Zt(
                                v,
                                [
                                    { opacity: 0 },
                                    { opacity: 0, offset: 0.33 },
                                    {},
                                ],
                                { duration: 225 * 2 * u, easing: ya }
                            );
                        }),
                        d.finished.then(() => l());
                },
                onAfterEnter(r) {
                    r.style.removeProperty("pointer-events");
                },
                onBeforeLeave(r) {
                    r.style.pointerEvents = "none";
                },
                async onLeave(r, l) {
                    var f;
                    await new Promise((v) => requestAnimationFrame(v));
                    const {
                        x: o,
                        y: s,
                        sx: i,
                        sy: c,
                        speed: u,
                    } = ds(e.target, r);
                    Zt(
                        r,
                        [
                            {},
                            {
                                transform: `translate(${o}px, ${s}px) scale(${i}, ${c})`,
                                opacity: 0,
                            },
                        ],
                        { duration: 125 * u, easing: Kv }
                    ).finished.then(() => l()),
                        (f = cs(r)) == null ||
                            f.forEach((v) => {
                                Zt(
                                    v,
                                    [
                                        {},
                                        { opacity: 0, offset: 0.2 },
                                        { opacity: 0 },
                                    ],
                                    { duration: 125 * 2 * u, easing: ya }
                                );
                            });
                },
                onAfterLeave(r) {
                    r.style.removeProperty("pointer-events");
                },
            };
            return () =>
                e.target
                    ? m(At, K({ name: "dialog-transition" }, a, { css: !1 }), n)
                    : m(At, { name: "dialog-transition" }, n);
        },
    });
function cs(e) {
    var n;
    const t =
        (n = e.querySelector(
            ":scope > .v-card, :scope > .v-sheet, :scope > .v-list"
        )) == null
            ? void 0
            : n.children;
    return t && [...t];
}
function ds(e, t) {
    const n = $i(e),
        a = Cl(t),
        [r, l] = getComputedStyle(t)
            .transformOrigin.split(" ")
            .map((b) => parseFloat(b)),
        [o, s] = getComputedStyle(t)
            .getPropertyValue("--v-overlay-anchor-origin")
            .split(" ");
    let i = n.left + n.width / 2;
    o === "left" || s === "left"
        ? (i -= n.width / 2)
        : (o === "right" || s === "right") && (i += n.width / 2);
    let c = n.top + n.height / 2;
    o === "top" || s === "top"
        ? (c -= n.height / 2)
        : (o === "bottom" || s === "bottom") && (c += n.height / 2);
    const u = n.width / a.width,
        d = n.height / a.height,
        f = Math.max(1, u, d),
        v = u / f || 0,
        h = d / f || 0,
        g = (a.width * a.height) / (window.innerWidth * window.innerHeight),
        y = g > 0.12 ? Math.min(1.5, (g - 0.12) * 10 + 1) : 1;
    return { x: i - (r + a.left), y: c - (l + a.top), sx: v, sy: h, speed: y };
}
qe("fab-transition", "center center", "out-in");
qe("dialog-bottom-transition");
qe("dialog-top-transition");
const fs = qe("fade-transition"),
    ag = qe("scale-transition");
qe("scroll-x-transition");
qe("scroll-x-reverse-transition");
qe("scroll-y-transition");
qe("scroll-y-reverse-transition");
qe("slide-x-transition");
qe("slide-x-reverse-transition");
const Ru = qe("slide-y-transition");
qe("slide-y-reverse-transition");
const $u = Iu("expand-transition", Ou()),
    Du = Iu("expand-x-transition", Ou("", !0));
function rg(e) {
    return {
        aspectStyles: p(() => {
            const t = Number(e.aspectRatio);
            return t ? { paddingBottom: String((1 / t) * 100) + "%" } : void 0;
        }),
    };
}
const Lu = L(
        {
            aspectRatio: [String, Number],
            contentClass: String,
            inline: Boolean,
            ...ie(),
            ...zt(),
        },
        "VResponsive"
    ),
    vs = Y()({
        name: "VResponsive",
        props: Lu(),
        setup(e, t) {
            let { slots: n } = t;
            const { aspectStyles: a } = rg(e),
                { dimensionStyles: r } = Ut(e);
            return (
                ae(() => {
                    var l;
                    return m(
                        "div",
                        {
                            class: [
                                "v-responsive",
                                { "v-responsive--inline": e.inline },
                                e.class,
                            ],
                            style: [r.value, e.style],
                        },
                        [
                            m(
                                "div",
                                {
                                    class: "v-responsive__sizer",
                                    style: a.value,
                                },
                                null
                            ),
                            (l = n.additional) == null ? void 0 : l.call(n),
                            n.default &&
                                m(
                                    "div",
                                    {
                                        class: [
                                            "v-responsive__content",
                                            e.contentClass,
                                        ],
                                    },
                                    [n.default()]
                                ),
                        ]
                    );
                }),
                {}
            );
        },
    });
function lg(e, t) {
    if (!Sl) return;
    const n = t.modifiers || {},
        a = t.value,
        { handler: r, options: l } =
            typeof a == "object" ? a : { handler: a, options: {} },
        o = new IntersectionObserver(function () {
            var d;
            let s =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : [],
                i = arguments.length > 1 ? arguments[1] : void 0;
            const c = (d = e._observe) == null ? void 0 : d[t.instance.$.uid];
            if (!c) return;
            const u = s.some((f) => f.isIntersecting);
            r && (!n.quiet || c.init) && (!n.once || u || c.init) && r(u, s, i),
                u && n.once ? Bu(e, t) : (c.init = !0);
        }, l);
    (e._observe = Object(e._observe)),
        (e._observe[t.instance.$.uid] = { init: !1, observer: o }),
        o.observe(e);
}
function Bu(e, t) {
    var a;
    const n = (a = e._observe) == null ? void 0 : a[t.instance.$.uid];
    n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const og = { mounted: lg, unmounted: Bu },
    Rl = og,
    sg = L(
        {
            alt: String,
            cover: Boolean,
            color: String,
            draggable: { type: [Boolean, String], default: void 0 },
            eager: Boolean,
            gradient: String,
            lazySrc: String,
            options: {
                type: Object,
                default: () => ({
                    root: void 0,
                    rootMargin: void 0,
                    threshold: void 0,
                }),
            },
            sizes: String,
            src: { type: [String, Object], default: "" },
            crossorigin: String,
            referrerpolicy: String,
            srcset: String,
            position: String,
            ...Lu(),
            ...ie(),
            ...je(),
            ...Kn(),
        },
        "VImg"
    ),
    $l = Y()({
        name: "VImg",
        directives: { intersect: Rl },
        props: sg(),
        emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 },
        setup(e, t) {
            let { emit: n, slots: a } = t;
            const { backgroundColorClasses: r, backgroundColorStyles: l } = at(
                    W(e, "color")
                ),
                { roundedClasses: o } = We(e),
                s = xe("VImg"),
                i = J(""),
                c = H(),
                u = J(e.eager ? "loading" : "idle"),
                d = J(),
                f = J(),
                v = p(() =>
                    e.src && typeof e.src == "object"
                        ? {
                              src: e.src.src,
                              srcset: e.srcset || e.src.srcset,
                              lazySrc: e.lazySrc || e.src.lazySrc,
                              aspect: Number(
                                  e.aspectRatio || e.src.aspect || 0
                              ),
                          }
                        : {
                              src: e.src,
                              srcset: e.srcset,
                              lazySrc: e.lazySrc,
                              aspect: Number(e.aspectRatio || 0),
                          }
                ),
                h = p(() => v.value.aspect || d.value / f.value || 0);
            Z(
                () => e.src,
                () => {
                    g(u.value !== "idle");
                }
            ),
                Z(h, (V, I) => {
                    !V && I && c.value && P(c.value);
                }),
                gl(() => g());
            function g(V) {
                if (!(e.eager && V) && !(Sl && !V && !e.eager)) {
                    if (((u.value = "loading"), v.value.lazySrc)) {
                        const I = new Image();
                        (I.src = v.value.lazySrc), P(I, null);
                    }
                    v.value.src &&
                        we(() => {
                            var I;
                            n(
                                "loadstart",
                                ((I = c.value) == null
                                    ? void 0
                                    : I.currentSrc) || v.value.src
                            ),
                                setTimeout(() => {
                                    var D;
                                    if (!s.isUnmounted)
                                        if (
                                            (D = c.value) != null &&
                                            D.complete
                                        ) {
                                            if (
                                                (c.value.naturalWidth || b(),
                                                u.value === "error")
                                            )
                                                return;
                                            h.value || P(c.value, null),
                                                u.value === "loading" && y();
                                        } else h.value || P(c.value), S();
                                });
                        });
                }
            }
            function y() {
                var V;
                s.isUnmounted ||
                    (S(),
                    P(c.value),
                    (u.value = "loaded"),
                    n(
                        "load",
                        ((V = c.value) == null ? void 0 : V.currentSrc) ||
                            v.value.src
                    ));
            }
            function b() {
                var V;
                s.isUnmounted ||
                    ((u.value = "error"),
                    n(
                        "error",
                        ((V = c.value) == null ? void 0 : V.currentSrc) ||
                            v.value.src
                    ));
            }
            function S() {
                const V = c.value;
                V && (i.value = V.currentSrc || V.src);
            }
            let x = -1;
            Re(() => {
                clearTimeout(x);
            });
            function P(V) {
                let I =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : 100;
                const D = () => {
                    if ((clearTimeout(x), s.isUnmounted)) return;
                    const { naturalHeight: M, naturalWidth: U } = V;
                    M || U
                        ? ((d.value = U), (f.value = M))
                        : !V.complete && u.value === "loading" && I != null
                        ? (x = window.setTimeout(D, I))
                        : (V.currentSrc.endsWith(".svg") ||
                              V.currentSrc.startsWith("data:image/svg+xml")) &&
                          ((d.value = 1), (f.value = 1));
                };
                D();
            }
            const E = p(() => ({
                    "v-img__img--cover": e.cover,
                    "v-img__img--contain": !e.cover,
                })),
                k = () => {
                    var D;
                    if (!v.value.src || u.value === "idle") return null;
                    const V = m(
                            "img",
                            {
                                class: ["v-img__img", E.value],
                                style: { objectPosition: e.position },
                                src: v.value.src,
                                srcset: v.value.srcset,
                                alt: e.alt,
                                crossorigin: e.crossorigin,
                                referrerpolicy: e.referrerpolicy,
                                draggable: e.draggable,
                                sizes: e.sizes,
                                ref: c,
                                onLoad: y,
                                onError: b,
                            },
                            null
                        ),
                        I = (D = a.sources) == null ? void 0 : D.call(a);
                    return m(
                        Et,
                        { transition: e.transition, appear: !0 },
                        {
                            default: () => [
                                Le(
                                    I
                                        ? m(
                                              "picture",
                                              { class: "v-img__picture" },
                                              [I, V]
                                          )
                                        : V,
                                    [[on, u.value === "loaded"]]
                                ),
                            ],
                        }
                    );
                },
                _ = () =>
                    m(
                        Et,
                        { transition: e.transition },
                        {
                            default: () => [
                                v.value.lazySrc &&
                                    u.value !== "loaded" &&
                                    m(
                                        "img",
                                        {
                                            class: [
                                                "v-img__img",
                                                "v-img__img--preload",
                                                E.value,
                                            ],
                                            style: {
                                                objectPosition: e.position,
                                            },
                                            src: v.value.lazySrc,
                                            alt: e.alt,
                                            crossorigin: e.crossorigin,
                                            referrerpolicy: e.referrerpolicy,
                                            draggable: e.draggable,
                                        },
                                        null
                                    ),
                            ],
                        }
                    ),
                C = () =>
                    a.placeholder
                        ? m(
                              Et,
                              { transition: e.transition, appear: !0 },
                              {
                                  default: () => [
                                      (u.value === "loading" ||
                                          (u.value === "error" && !a.error)) &&
                                          m(
                                              "div",
                                              { class: "v-img__placeholder" },
                                              [a.placeholder()]
                                          ),
                                  ],
                              }
                          )
                        : null,
                w = () =>
                    a.error
                        ? m(
                              Et,
                              { transition: e.transition, appear: !0 },
                              {
                                  default: () => [
                                      u.value === "error" &&
                                          m("div", { class: "v-img__error" }, [
                                              a.error(),
                                          ]),
                                  ],
                              }
                          )
                        : null,
                A = () =>
                    e.gradient
                        ? m(
                              "div",
                              {
                                  class: "v-img__gradient",
                                  style: {
                                      backgroundImage: `linear-gradient(${e.gradient})`,
                                  },
                              },
                              null
                          )
                        : null,
                O = J(!1);
            {
                const V = Z(h, (I) => {
                    I &&
                        (requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                O.value = !0;
                            });
                        }),
                        V());
                });
            }
            return (
                ae(() => {
                    const V = vs.filterProps(e);
                    return Le(
                        m(
                            vs,
                            K(
                                {
                                    class: [
                                        "v-img",
                                        { "v-img--booting": !O.value },
                                        r.value,
                                        o.value,
                                        e.class,
                                    ],
                                    style: [
                                        {
                                            width: ne(
                                                e.width === "auto"
                                                    ? d.value
                                                    : e.width
                                            ),
                                        },
                                        l.value,
                                        e.style,
                                    ],
                                },
                                V,
                                {
                                    aspectRatio: h.value,
                                    "aria-label": e.alt,
                                    role: e.alt ? "img" : void 0,
                                }
                            ),
                            {
                                additional: () =>
                                    m(ue, null, [
                                        m(k, null, null),
                                        m(_, null, null),
                                        m(A, null, null),
                                        m(C, null, null),
                                        m(w, null, null),
                                    ]),
                                default: a.default,
                            }
                        ),
                        [
                            [
                                bt("intersect"),
                                { handler: g, options: e.options },
                                null,
                                { once: !0 },
                            ],
                        ]
                    );
                }),
                {
                    currentSrc: i,
                    image: c,
                    state: u,
                    naturalWidth: d,
                    naturalHeight: f,
                }
            );
        },
    }),
    ig = [null, "prominent", "default", "comfortable", "compact"],
    Fu = L(
        {
            absolute: Boolean,
            collapse: Boolean,
            color: String,
            density: {
                type: String,
                default: "default",
                validator: (e) => ig.includes(e),
            },
            extended: Boolean,
            extensionHeight: { type: [Number, String], default: 48 },
            flat: Boolean,
            floating: Boolean,
            height: { type: [Number, String], default: 64 },
            image: String,
            title: String,
            ...St(),
            ...ie(),
            ..._t(),
            ...je(),
            ...Oe({ tag: "header" }),
            ...Pe(),
        },
        "VToolbar"
    ),
    ms = Y()({
        name: "VToolbar",
        props: Fu(),
        setup(e, t) {
            var v;
            let { slots: n } = t;
            const { backgroundColorClasses: a, backgroundColorStyles: r } = at(
                    W(e, "color")
                ),
                { borderClasses: l } = Vt(e),
                { elevationClasses: o } = Rt(e),
                { roundedClasses: s } = We(e),
                { themeClasses: i } = Ie(e),
                { rtlClasses: c } = ct(),
                u = J(
                    !!(e.extended || ((v = n.extension) != null && v.call(n)))
                ),
                d = p(() =>
                    parseInt(
                        Number(e.height) +
                            (e.density === "prominent" ? Number(e.height) : 0) -
                            (e.density === "comfortable" ? 8 : 0) -
                            (e.density === "compact" ? 16 : 0),
                        10
                    )
                ),
                f = p(() =>
                    u.value
                        ? parseInt(
                              Number(e.extensionHeight) +
                                  (e.density === "prominent"
                                      ? Number(e.extensionHeight)
                                      : 0) -
                                  (e.density === "comfortable" ? 4 : 0) -
                                  (e.density === "compact" ? 8 : 0),
                              10
                          )
                        : 0
                );
            return (
                Je({ VBtn: { variant: "text" } }),
                ae(() => {
                    var b;
                    const h = !!(e.title || n.title),
                        g = !!(n.image || e.image),
                        y = (b = n.extension) == null ? void 0 : b.call(n);
                    return (
                        (u.value = !!(e.extended || y)),
                        m(
                            e.tag,
                            {
                                class: [
                                    "v-toolbar",
                                    {
                                        "v-toolbar--absolute": e.absolute,
                                        "v-toolbar--collapse": e.collapse,
                                        "v-toolbar--flat": e.flat,
                                        "v-toolbar--floating": e.floating,
                                        [`v-toolbar--density-${e.density}`]: !0,
                                    },
                                    a.value,
                                    l.value,
                                    o.value,
                                    s.value,
                                    i.value,
                                    c.value,
                                    e.class,
                                ],
                                style: [r.value, e.style],
                            },
                            {
                                default: () => [
                                    g &&
                                        m(
                                            "div",
                                            {
                                                key: "image",
                                                class: "v-toolbar__image",
                                            },
                                            [
                                                n.image
                                                    ? m(
                                                          Ee,
                                                          {
                                                              key: "image-defaults",
                                                              disabled:
                                                                  !e.image,
                                                              defaults: {
                                                                  VImg: {
                                                                      cover: !0,
                                                                      src: e.image,
                                                                  },
                                                              },
                                                          },
                                                          n.image
                                                      )
                                                    : m(
                                                          $l,
                                                          {
                                                              key: "image-img",
                                                              cover: !0,
                                                              src: e.image,
                                                          },
                                                          null
                                                      ),
                                            ]
                                        ),
                                    m(
                                        Ee,
                                        {
                                            defaults: {
                                                VTabs: { height: ne(d.value) },
                                            },
                                        },
                                        {
                                            default: () => {
                                                var S, x, P;
                                                return [
                                                    m(
                                                        "div",
                                                        {
                                                            class: "v-toolbar__content",
                                                            style: {
                                                                height: ne(
                                                                    d.value
                                                                ),
                                                            },
                                                        },
                                                        [
                                                            n.prepend &&
                                                                m(
                                                                    "div",
                                                                    {
                                                                        class: "v-toolbar__prepend",
                                                                    },
                                                                    [
                                                                        (S =
                                                                            n.prepend) ==
                                                                        null
                                                                            ? void 0
                                                                            : S.call(
                                                                                  n
                                                                              ),
                                                                    ]
                                                                ),
                                                            h &&
                                                                m(
                                                                    Tu,
                                                                    {
                                                                        key: "title",
                                                                        text: e.title,
                                                                    },
                                                                    {
                                                                        text: n.title,
                                                                    }
                                                                ),
                                                            (x = n.default) ==
                                                            null
                                                                ? void 0
                                                                : x.call(n),
                                                            n.append &&
                                                                m(
                                                                    "div",
                                                                    {
                                                                        class: "v-toolbar__append",
                                                                    },
                                                                    [
                                                                        (P =
                                                                            n.append) ==
                                                                        null
                                                                            ? void 0
                                                                            : P.call(
                                                                                  n
                                                                              ),
                                                                    ]
                                                                ),
                                                        ]
                                                    ),
                                                ];
                                            },
                                        }
                                    ),
                                    m(
                                        Ee,
                                        {
                                            defaults: {
                                                VTabs: { height: ne(f.value) },
                                            },
                                        },
                                        {
                                            default: () => [
                                                m($u, null, {
                                                    default: () => [
                                                        u.value &&
                                                            m(
                                                                "div",
                                                                {
                                                                    class: "v-toolbar__extension",
                                                                    style: {
                                                                        height: ne(
                                                                            f.value
                                                                        ),
                                                                    },
                                                                },
                                                                [y]
                                                            ),
                                                    ],
                                                }),
                                            ],
                                        }
                                    ),
                                ],
                            }
                        )
                    );
                }),
                { contentHeight: d, extensionHeight: f }
            );
        },
    }),
    ug = L(
        {
            scrollTarget: { type: String },
            scrollThreshold: { type: [String, Number], default: 300 },
        },
        "scroll"
    );
function cg(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { canScroll: n } = t;
    let a = 0;
    const r = H(null),
        l = J(0),
        o = J(0),
        s = J(0),
        i = J(!1),
        c = J(!1),
        u = p(() => Number(e.scrollThreshold)),
        d = p(() => Ke((u.value - l.value) / u.value || 0)),
        f = () => {
            const v = r.value;
            !v ||
                (n && !n.value) ||
                ((a = l.value),
                (l.value = "window" in v ? v.pageYOffset : v.scrollTop),
                (c.value = l.value < a),
                (s.value = Math.abs(l.value - u.value)));
        };
    return (
        Z(c, () => {
            o.value = o.value || l.value;
        }),
        Z(i, () => {
            o.value = 0;
        }),
        Ue(() => {
            Z(
                () => e.scrollTarget,
                (v) => {
                    var g;
                    const h = v ? document.querySelector(v) : window;
                    h &&
                        h !== r.value &&
                        ((g = r.value) == null ||
                            g.removeEventListener("scroll", f),
                        (r.value = h),
                        r.value.addEventListener("scroll", f, { passive: !0 }));
                },
                { immediate: !0 }
            );
        }),
        Re(() => {
            var v;
            (v = r.value) == null || v.removeEventListener("scroll", f);
        }),
        n && Z(n, f, { immediate: !0 }),
        {
            scrollThreshold: u,
            currentScroll: l,
            currentThreshold: s,
            isScrollActive: i,
            scrollRatio: d,
            isScrollingUp: c,
            savedScroll: o,
        }
    );
}
function Ka() {
    const e = J(!1);
    return (
        Ue(() => {
            window.requestAnimationFrame(() => {
                e.value = !0;
            });
        }),
        {
            ssrBootStyles: p(() =>
                e.value ? void 0 : { transition: "none !important" }
            ),
            isBooted: ml(e),
        }
    );
}
const dg = L(
        {
            scrollBehavior: String,
            modelValue: { type: Boolean, default: !0 },
            location: {
                type: String,
                default: "top",
                validator: (e) => ["top", "bottom"].includes(e),
            },
            ...Fu(),
            ...Gi(),
            ...ug(),
            height: { type: [Number, String], default: 64 },
        },
        "VAppBar"
    ),
    fg = Y()({
        name: "VAppBar",
        props: dg(),
        emits: { "update:modelValue": (e) => !0 },
        setup(e, t) {
            let { slots: n } = t;
            const a = H(),
                r = ve(e, "modelValue"),
                l = p(() => {
                    var S;
                    const b = new Set(
                        ((S = e.scrollBehavior) == null
                            ? void 0
                            : S.split(" ")) ?? []
                    );
                    return {
                        hide: b.has("hide"),
                        inverted: b.has("inverted"),
                        collapse: b.has("collapse"),
                        elevate: b.has("elevate"),
                        fadeImage: b.has("fade-image"),
                    };
                }),
                o = p(() => {
                    const b = l.value;
                    return (
                        b.hide ||
                        b.inverted ||
                        b.collapse ||
                        b.elevate ||
                        b.fadeImage ||
                        !r.value
                    );
                }),
                {
                    currentScroll: s,
                    scrollThreshold: i,
                    isScrollingUp: c,
                    scrollRatio: u,
                } = cg(e, { canScroll: o }),
                d = p(
                    () =>
                        e.collapse ||
                        (l.value.collapse &&
                            (l.value.inverted ? u.value > 0 : u.value === 0))
                ),
                f = p(
                    () =>
                        e.flat ||
                        (l.value.elevate &&
                            (l.value.inverted ? s.value > 0 : s.value === 0))
                ),
                v = p(() =>
                    l.value.fadeImage
                        ? l.value.inverted
                            ? 1 - u.value
                            : u.value
                        : void 0
                ),
                h = p(() => {
                    var x, P;
                    if (l.value.hide && l.value.inverted) return 0;
                    const b =
                            ((x = a.value) == null
                                ? void 0
                                : x.contentHeight) ?? 0,
                        S =
                            ((P = a.value) == null
                                ? void 0
                                : P.extensionHeight) ?? 0;
                    return b + S;
                });
            tt(
                p(() => !!e.scrollBehavior),
                () => {
                    De(() => {
                        l.value.hide
                            ? l.value.inverted
                                ? (r.value = s.value > i.value)
                                : (r.value = c.value || s.value < i.value)
                            : (r.value = !0);
                    });
                }
            );
            const { ssrBootStyles: g } = Ka(),
                { layoutItemStyles: y } = Wi({
                    id: e.name,
                    order: p(() => parseInt(e.order, 10)),
                    position: W(e, "location"),
                    layoutSize: h,
                    elementSize: J(void 0),
                    active: r,
                    absolute: W(e, "absolute"),
                });
            return (
                ae(() => {
                    const b = ms.filterProps(e);
                    return m(
                        ms,
                        K(
                            {
                                ref: a,
                                class: [
                                    "v-app-bar",
                                    {
                                        "v-app-bar--bottom":
                                            e.location === "bottom",
                                    },
                                    e.class,
                                ],
                                style: [
                                    {
                                        ...y.value,
                                        "--v-toolbar-image-opacity": v.value,
                                        height: void 0,
                                        ...g.value,
                                    },
                                    e.style,
                                ],
                            },
                            b,
                            { collapse: d.value, flat: f.value }
                        ),
                        n
                    );
                }),
                {}
            );
        },
    }),
    vg = L({ ...gu({ icon: "$menu", variant: "text" }) }, "VAppBarNavIcon"),
    mg = Y()({
        name: "VAppBarNavIcon",
        props: vg(),
        setup(e, t) {
            let { slots: n } = t;
            return (
                ae(() => m(Qe, K(e, { class: ["v-app-bar-nav-icon"] }), n)), {}
            );
        },
    }),
    hg = Y()({
        name: "VAppBarTitle",
        props: Au(),
        setup(e, t) {
            let { slots: n } = t;
            return ae(() => m(Tu, K(e, { class: "v-app-bar-title" }), n)), {};
        },
    }),
    gg = L(
        {
            start: Boolean,
            end: Boolean,
            icon: de,
            image: String,
            text: String,
            ...ie(),
            ...Ze(),
            ...je(),
            ...fn(),
            ...Oe(),
            ...Pe(),
            ...ft({ variant: "flat" }),
        },
        "VAvatar"
    ),
    jt = Y()({
        name: "VAvatar",
        props: gg(),
        setup(e, t) {
            let { slots: n } = t;
            const { themeClasses: a } = Ie(e),
                { colorClasses: r, colorStyles: l, variantClasses: o } = dn(e),
                { densityClasses: s } = dt(e),
                { roundedClasses: i } = We(e),
                { sizeClasses: c, sizeStyles: u } = Gn(e);
            return (
                ae(() =>
                    m(
                        e.tag,
                        {
                            class: [
                                "v-avatar",
                                {
                                    "v-avatar--start": e.start,
                                    "v-avatar--end": e.end,
                                },
                                a.value,
                                r.value,
                                s.value,
                                i.value,
                                c.value,
                                o.value,
                                e.class,
                            ],
                            style: [l.value, u.value, e.style],
                        },
                        {
                            default: () => [
                                n.default
                                    ? m(
                                          Ee,
                                          {
                                              key: "content-defaults",
                                              defaults: {
                                                  VImg: {
                                                      cover: !0,
                                                      image: e.image,
                                                  },
                                                  VIcon: { icon: e.icon },
                                              },
                                          },
                                          { default: () => [n.default()] }
                                      )
                                    : e.image
                                    ? m(
                                          $l,
                                          {
                                              key: "image",
                                              src: e.image,
                                              alt: "",
                                              cover: !0,
                                          },
                                          null
                                      )
                                    : e.icon
                                    ? m(Ae, { key: "icon", icon: e.icon }, null)
                                    : e.text,
                                cn(!1, "v-avatar"),
                            ],
                        }
                    )
                ),
                {}
            );
        },
    }),
    yg = L({ text: String, onClick: Ne(), ...ie(), ...Pe() }, "VLabel"),
    Mu = Y()({
        name: "VLabel",
        props: yg(),
        setup(e, t) {
            let { slots: n } = t;
            return (
                ae(() => {
                    var a;
                    return m(
                        "label",
                        {
                            class: [
                                "v-label",
                                { "v-label--clickable": !!e.onClick },
                                e.class,
                            ],
                            style: e.style,
                            onClick: e.onClick,
                        },
                        [e.text, (a = n.default) == null ? void 0 : a.call(n)]
                    );
                }),
                {}
            );
        },
    }),
    Nu = Symbol.for("vuetify:selection-control-group"),
    ju = L(
        {
            color: String,
            disabled: { type: Boolean, default: null },
            defaultsTarget: String,
            error: Boolean,
            id: String,
            inline: Boolean,
            falseIcon: de,
            trueIcon: de,
            ripple: { type: Boolean, default: !0 },
            multiple: { type: Boolean, default: null },
            name: String,
            readonly: { type: Boolean, default: null },
            modelValue: null,
            type: String,
            valueComparator: { type: Function, default: Tt },
            ...ie(),
            ...Ze(),
            ...Pe(),
        },
        "SelectionControlGroup"
    ),
    pg = L(
        { ...ju({ defaultsTarget: "VSelectionControl" }) },
        "VSelectionControlGroup"
    );
Y()({
    name: "VSelectionControlGroup",
    props: pg(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
        let { slots: n } = t;
        const a = ve(e, "modelValue"),
            r = Ge(),
            l = p(() => e.id || `v-selection-control-group-${r}`),
            o = p(() => e.name || l.value),
            s = new Set();
        return (
            pe(Nu, {
                modelValue: a,
                forceUpdate: () => {
                    s.forEach((i) => i());
                },
                onForceUpdate: (i) => {
                    s.add(i),
                        Ve(() => {
                            s.delete(i);
                        });
                },
            }),
            Je({
                [e.defaultsTarget]: {
                    color: W(e, "color"),
                    disabled: W(e, "disabled"),
                    density: W(e, "density"),
                    error: W(e, "error"),
                    inline: W(e, "inline"),
                    modelValue: a,
                    multiple: p(
                        () =>
                            !!e.multiple ||
                            (e.multiple == null && Array.isArray(a.value))
                    ),
                    name: o,
                    falseIcon: W(e, "falseIcon"),
                    trueIcon: W(e, "trueIcon"),
                    readonly: W(e, "readonly"),
                    ripple: W(e, "ripple"),
                    type: W(e, "type"),
                    valueComparator: W(e, "valueComparator"),
                },
            }),
            ae(() => {
                var i;
                return m(
                    "div",
                    {
                        class: [
                            "v-selection-control-group",
                            { "v-selection-control-group--inline": e.inline },
                            e.class,
                        ],
                        style: e.style,
                        role: e.type === "radio" ? "radiogroup" : void 0,
                    },
                    [(i = n.default) == null ? void 0 : i.call(n)]
                );
            }),
            {}
        );
    },
});
const Dl = L(
    {
        label: String,
        baseColor: String,
        trueValue: null,
        falseValue: null,
        value: null,
        ...ie(),
        ...ju(),
    },
    "VSelectionControl"
);
function bg(e) {
    const t = ce(Nu, void 0),
        { densityClasses: n } = dt(e),
        a = ve(e, "modelValue"),
        r = p(() =>
            e.trueValue !== void 0
                ? e.trueValue
                : e.value !== void 0
                ? e.value
                : !0
        ),
        l = p(() => (e.falseValue !== void 0 ? e.falseValue : !1)),
        o = p(
            () => !!e.multiple || (e.multiple == null && Array.isArray(a.value))
        ),
        s = p({
            get() {
                const v = t ? t.modelValue.value : a.value;
                return o.value
                    ? $e(v).some((h) => e.valueComparator(h, r.value))
                    : e.valueComparator(v, r.value);
            },
            set(v) {
                if (e.readonly) return;
                const h = v ? r.value : l.value;
                let g = h;
                o.value &&
                    (g = v
                        ? [...$e(a.value), h]
                        : $e(a.value).filter(
                              (y) => !e.valueComparator(y, r.value)
                          )),
                    t ? (t.modelValue.value = g) : (a.value = g);
            },
        }),
        { textColorClasses: i, textColorStyles: c } = yt(
            p(() => {
                if (!(e.error || e.disabled))
                    return s.value ? e.color : e.baseColor;
            })
        ),
        { backgroundColorClasses: u, backgroundColorStyles: d } = at(
            p(() => (s.value && !e.error && !e.disabled ? e.color : void 0))
        ),
        f = p(() => (s.value ? e.trueIcon : e.falseIcon));
    return {
        group: t,
        densityClasses: n,
        trueValue: r,
        falseValue: l,
        model: s,
        textColorClasses: i,
        textColorStyles: c,
        backgroundColorClasses: u,
        backgroundColorStyles: d,
        icon: f,
    };
}
const xa = Y()({
        name: "VSelectionControl",
        directives: { Ripple: qn },
        inheritAttrs: !1,
        props: Dl(),
        emits: { "update:modelValue": (e) => !0 },
        setup(e, t) {
            let { attrs: n, slots: a } = t;
            const {
                    group: r,
                    densityClasses: l,
                    icon: o,
                    model: s,
                    textColorClasses: i,
                    textColorStyles: c,
                    backgroundColorClasses: u,
                    backgroundColorStyles: d,
                    trueValue: f,
                } = bg(e),
                v = Ge(),
                h = J(!1),
                g = J(!1),
                y = H(),
                b = p(() => e.id || `input-${v}`),
                S = p(() => !e.disabled && !e.readonly);
            r == null ||
                r.onForceUpdate(() => {
                    y.value && (y.value.checked = s.value);
                });
            function x(_) {
                S.value &&
                    ((h.value = !0),
                    ha(_.target, ":focus-visible") !== !1 && (g.value = !0));
            }
            function P() {
                (h.value = !1), (g.value = !1);
            }
            function E(_) {
                _.stopPropagation();
            }
            function k(_) {
                S.value &&
                    (e.readonly && r && we(() => r.forceUpdate()),
                    (s.value = _.target.checked));
            }
            return (
                ae(() => {
                    var O, V;
                    const _ = a.label
                            ? a.label({
                                  label: e.label,
                                  props: { for: b.value },
                              })
                            : e.label,
                        [C, w] = sn(n),
                        A = m(
                            "input",
                            K(
                                {
                                    ref: y,
                                    checked: s.value,
                                    disabled: !!e.disabled,
                                    id: b.value,
                                    onBlur: P,
                                    onFocus: x,
                                    onInput: k,
                                    "aria-disabled": !!e.disabled,
                                    type: e.type,
                                    value: f.value,
                                    name: e.name,
                                    "aria-checked":
                                        e.type === "checkbox"
                                            ? s.value
                                            : void 0,
                                },
                                w
                            ),
                            null
                        );
                    return m(
                        "div",
                        K(
                            {
                                class: [
                                    "v-selection-control",
                                    {
                                        "v-selection-control--dirty": s.value,
                                        "v-selection-control--disabled":
                                            e.disabled,
                                        "v-selection-control--error": e.error,
                                        "v-selection-control--focused": h.value,
                                        "v-selection-control--focus-visible":
                                            g.value,
                                        "v-selection-control--inline": e.inline,
                                    },
                                    l.value,
                                    e.class,
                                ],
                            },
                            C,
                            { style: e.style }
                        ),
                        [
                            m(
                                "div",
                                {
                                    class: [
                                        "v-selection-control__wrapper",
                                        i.value,
                                    ],
                                    style: c.value,
                                },
                                [
                                    (O = a.default) == null
                                        ? void 0
                                        : O.call(a, {
                                              backgroundColorClasses: u,
                                              backgroundColorStyles: d,
                                          }),
                                    Le(
                                        m(
                                            "div",
                                            {
                                                class: [
                                                    "v-selection-control__input",
                                                ],
                                            },
                                            [
                                                ((V = a.input) == null
                                                    ? void 0
                                                    : V.call(a, {
                                                          model: s,
                                                          textColorClasses: i,
                                                          textColorStyles: c,
                                                          backgroundColorClasses:
                                                              u,
                                                          backgroundColorStyles:
                                                              d,
                                                          inputNode: A,
                                                          icon: o.value,
                                                          props: {
                                                              onFocus: x,
                                                              onBlur: P,
                                                              id: b.value,
                                                          },
                                                      })) ??
                                                    m(ue, null, [
                                                        o.value &&
                                                            m(
                                                                Ae,
                                                                {
                                                                    key: "icon",
                                                                    icon: o.value,
                                                                },
                                                                null
                                                            ),
                                                        A,
                                                    ]),
                                            ]
                                        ),
                                        [
                                            [
                                                bt("ripple"),
                                                e.ripple && [
                                                    !e.disabled && !e.readonly,
                                                    null,
                                                    ["center", "circle"],
                                                ],
                                            ],
                                        ]
                                    ),
                                ]
                            ),
                            _ &&
                                m(
                                    Mu,
                                    { for: b.value, onClick: E },
                                    { default: () => [_] }
                                ),
                        ]
                    );
                }),
                { isFocused: h, input: y }
            );
        },
    }),
    Hu = L(
        {
            indeterminate: Boolean,
            indeterminateIcon: { type: de, default: "$checkboxIndeterminate" },
            ...Dl({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }),
        },
        "VCheckboxBtn"
    ),
    an = Y()({
        name: "VCheckboxBtn",
        props: Hu(),
        emits: {
            "update:modelValue": (e) => !0,
            "update:indeterminate": (e) => !0,
        },
        setup(e, t) {
            let { slots: n } = t;
            const a = ve(e, "indeterminate"),
                r = ve(e, "modelValue");
            function l(i) {
                a.value && (a.value = !1);
            }
            const o = p(() => (a.value ? e.indeterminateIcon : e.falseIcon)),
                s = p(() => (a.value ? e.indeterminateIcon : e.trueIcon));
            return (
                ae(() => {
                    const i = It(xa.filterProps(e), ["modelValue"]);
                    return m(
                        xa,
                        K(i, {
                            modelValue: r.value,
                            "onUpdate:modelValue": [(c) => (r.value = c), l],
                            class: ["v-checkbox-btn", e.class],
                            style: e.style,
                            type: "checkbox",
                            falseIcon: o.value,
                            trueIcon: s.value,
                            "aria-checked": a.value ? "mixed" : void 0,
                        }),
                        n
                    );
                }),
                {}
            );
        },
    });
function zu(e) {
    const { t } = Ot();
    function n(a) {
        let { name: r } = a;
        const l = {
                prepend: "prependAction",
                prependInner: "prependAction",
                append: "appendAction",
                appendInner: "appendAction",
                clear: "clear",
            }[r],
            o = e[`onClick:${r}`],
            s = o && l ? t(`$vuetify.input.${l}`, e.label ?? "") : void 0;
        return m(
            Ae,
            { icon: e[`${r}Icon`], "aria-label": s, onClick: o },
            null
        );
    }
    return { InputIcon: n };
}
const Sg = L(
        {
            active: Boolean,
            color: String,
            messages: { type: [Array, String], default: () => [] },
            ...ie(),
            ...Kn({
                transition: { component: Ru, leaveAbsolute: !0, group: !0 },
            }),
        },
        "VMessages"
    ),
    _g = Y()({
        name: "VMessages",
        props: Sg(),
        setup(e, t) {
            let { slots: n } = t;
            const a = p(() => $e(e.messages)),
                { textColorClasses: r, textColorStyles: l } = yt(
                    p(() => e.color)
                );
            return (
                ae(() =>
                    m(
                        Et,
                        {
                            transition: e.transition,
                            tag: "div",
                            class: ["v-messages", r.value, e.class],
                            style: [l.value, e.style],
                            role: "alert",
                            "aria-live": "polite",
                        },
                        {
                            default: () => [
                                e.active &&
                                    a.value.map((o, s) =>
                                        m(
                                            "div",
                                            {
                                                class: "v-messages__message",
                                                key: `${s}-${a.value}`,
                                            },
                                            [
                                                n.message
                                                    ? n.message({ message: o })
                                                    : o,
                                            ]
                                        )
                                    ),
                            ],
                        }
                    )
                ),
                {}
            );
        },
    }),
    Uu = L({ focused: Boolean, "onUpdate:focused": Ne() }, "focus");
function hn(e) {
    let t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ut();
    const n = ve(e, "focused"),
        a = p(() => ({ [`${t}--focused`]: n.value }));
    function r() {
        n.value = !0;
    }
    function l() {
        n.value = !1;
    }
    return { focusClasses: a, isFocused: n, focus: r, blur: l };
}
const Gu = Symbol.for("vuetify:form"),
    Ux = L(
        {
            disabled: Boolean,
            fastFail: Boolean,
            readonly: Boolean,
            modelValue: { type: Boolean, default: null },
            validateOn: { type: String, default: "input" },
        },
        "form"
    );
function Gx(e) {
    const t = ve(e, "modelValue"),
        n = p(() => e.disabled),
        a = p(() => e.readonly),
        r = J(!1),
        l = H([]),
        o = H([]);
    async function s() {
        const u = [];
        let d = !0;
        (o.value = []), (r.value = !0);
        for (const f of l.value) {
            const v = await f.validate();
            if (
                (v.length > 0 &&
                    ((d = !1), u.push({ id: f.id, errorMessages: v })),
                !d && e.fastFail)
            )
                break;
        }
        return (o.value = u), (r.value = !1), { valid: d, errors: o.value };
    }
    function i() {
        l.value.forEach((u) => u.reset());
    }
    function c() {
        l.value.forEach((u) => u.resetValidation());
    }
    return (
        Z(
            l,
            () => {
                let u = 0,
                    d = 0;
                const f = [];
                for (const v of l.value)
                    v.isValid === !1
                        ? (d++,
                          f.push({ id: v.id, errorMessages: v.errorMessages }))
                        : v.isValid === !0 && u++;
                (o.value = f),
                    (t.value = d > 0 ? !1 : u === l.value.length ? !0 : null);
            },
            { deep: !0, flush: "post" }
        ),
        pe(Gu, {
            register: (u) => {
                let { id: d, validate: f, reset: v, resetValidation: h } = u;
                l.value.some((g) => g.id === d),
                    l.value.push({
                        id: d,
                        validate: f,
                        reset: v,
                        resetValidation: h,
                        isValid: null,
                        errorMessages: [],
                    });
            },
            unregister: (u) => {
                l.value = l.value.filter((d) => d.id !== u);
            },
            update: (u, d, f) => {
                const v = l.value.find((h) => h.id === u);
                v && ((v.isValid = d), (v.errorMessages = f));
            },
            isDisabled: n,
            isReadonly: a,
            isValidating: r,
            isValid: t,
            items: l,
            validateOn: W(e, "validateOn"),
        }),
        {
            errors: o,
            isDisabled: n,
            isReadonly: a,
            isValidating: r,
            isValid: t,
            items: l,
            validate: s,
            reset: i,
            resetValidation: c,
        }
    );
}
function Wu() {
    return ce(Gu, null);
}
const wg = L(
    {
        disabled: { type: Boolean, default: null },
        error: Boolean,
        errorMessages: { type: [Array, String], default: () => [] },
        maxErrors: { type: [Number, String], default: 1 },
        name: String,
        label: String,
        readonly: { type: Boolean, default: null },
        rules: { type: Array, default: () => [] },
        modelValue: null,
        validateOn: String,
        validationValue: null,
        ...Uu(),
    },
    "validation"
);
function Cg(e) {
    let t =
            arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : ut(),
        n =
            arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : Ge();
    const a = ve(e, "modelValue"),
        r = p(() =>
            e.validationValue === void 0 ? a.value : e.validationValue
        ),
        l = Wu(),
        o = H([]),
        s = J(!0),
        i = p(
            () =>
                !!(
                    $e(a.value === "" ? null : a.value).length ||
                    $e(r.value === "" ? null : r.value).length
                )
        ),
        c = p(
            () => !!(e.disabled ?? (l == null ? void 0 : l.isDisabled.value))
        ),
        u = p(
            () => !!(e.readonly ?? (l == null ? void 0 : l.isReadonly.value))
        ),
        d = p(() => {
            var P;
            return (P = e.errorMessages) != null && P.length
                ? $e(e.errorMessages)
                      .concat(o.value)
                      .slice(0, Math.max(0, +e.maxErrors))
                : o.value;
        }),
        f = p(() => {
            let P =
                (e.validateOn ?? (l == null ? void 0 : l.validateOn.value)) ||
                "input";
            P === "lazy" && (P = "input lazy");
            const E = new Set((P == null ? void 0 : P.split(" ")) ?? []);
            return {
                blur: E.has("blur") || E.has("input"),
                input: E.has("input"),
                submit: E.has("submit"),
                lazy: E.has("lazy"),
            };
        }),
        v = p(() => {
            var P;
            return e.error || ((P = e.errorMessages) != null && P.length)
                ? !1
                : e.rules.length
                ? s.value
                    ? o.value.length || f.value.lazy
                        ? null
                        : !0
                    : !o.value.length
                : !0;
        }),
        h = J(!1),
        g = p(() => ({
            [`${t}--error`]: v.value === !1,
            [`${t}--dirty`]: i.value,
            [`${t}--disabled`]: c.value,
            [`${t}--readonly`]: u.value,
        })),
        y = p(() => e.name ?? he(n));
    gl(() => {
        l == null ||
            l.register({
                id: y.value,
                validate: x,
                reset: b,
                resetValidation: S,
            });
    }),
        Re(() => {
            l == null || l.unregister(y.value);
        }),
        Ue(async () => {
            f.value.lazy || (await x(!0)),
                l == null || l.update(y.value, v.value, d.value);
        }),
        tt(
            () => f.value.input,
            () => {
                Z(r, () => {
                    if (r.value != null) x();
                    else if (e.focused) {
                        const P = Z(
                            () => e.focused,
                            (E) => {
                                E || x(), P();
                            }
                        );
                    }
                });
            }
        ),
        tt(
            () => f.value.blur,
            () => {
                Z(
                    () => e.focused,
                    (P) => {
                        P || x();
                    }
                );
            }
        ),
        Z([v, d], () => {
            l == null || l.update(y.value, v.value, d.value);
        });
    function b() {
        (a.value = null), we(S);
    }
    function S() {
        (s.value = !0), f.value.lazy ? (o.value = []) : x(!0);
    }
    async function x() {
        let P =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
        const E = [];
        h.value = !0;
        for (const k of e.rules) {
            if (E.length >= +(e.maxErrors ?? 1)) break;
            const C = await (typeof k == "function" ? k : () => k)(r.value);
            if (C !== !0) {
                if (C !== !1 && typeof C != "string") {
                    console.warn(
                        `${C} is not a valid value. Rule functions must return boolean true or a string.`
                    );
                    continue;
                }
                E.push(C || "");
            }
        }
        return (o.value = E), (h.value = !1), (s.value = P), o.value;
    }
    return {
        errorMessages: d,
        isDirty: i,
        isDisabled: c,
        isReadonly: u,
        isPristine: s,
        isValid: v,
        isValidating: h,
        reset: b,
        resetValidation: S,
        validate: x,
        validationClasses: g,
    };
}
const gn = L(
        {
            id: String,
            appendIcon: de,
            centerAffix: { type: Boolean, default: !0 },
            prependIcon: de,
            hideDetails: [Boolean, String],
            hideSpinButtons: Boolean,
            hint: String,
            persistentHint: Boolean,
            messages: { type: [Array, String], default: () => [] },
            direction: {
                type: String,
                default: "horizontal",
                validator: (e) => ["horizontal", "vertical"].includes(e),
            },
            "onClick:prepend": Ne(),
            "onClick:append": Ne(),
            ...ie(),
            ...Ze(),
            ...wg(),
        },
        "VInput"
    ),
    st = Y()({
        name: "VInput",
        props: { ...gn() },
        emits: { "update:modelValue": (e) => !0 },
        setup(e, t) {
            let { attrs: n, slots: a, emit: r } = t;
            const { densityClasses: l } = dt(e),
                { rtlClasses: o } = ct(),
                { InputIcon: s } = zu(e),
                i = Ge(),
                c = p(() => e.id || `input-${i}`),
                u = p(() => `${c.value}-messages`),
                {
                    errorMessages: d,
                    isDirty: f,
                    isDisabled: v,
                    isReadonly: h,
                    isPristine: g,
                    isValid: y,
                    isValidating: b,
                    reset: S,
                    resetValidation: x,
                    validate: P,
                    validationClasses: E,
                } = Cg(e, "v-input", c),
                k = p(() => ({
                    id: c,
                    messagesId: u,
                    isDirty: f,
                    isDisabled: v,
                    isReadonly: h,
                    isPristine: g,
                    isValid: y,
                    isValidating: b,
                    reset: S,
                    resetValidation: x,
                    validate: P,
                })),
                _ = p(() => {
                    var C;
                    return ((C = e.errorMessages) != null && C.length) ||
                        (!g.value && d.value.length)
                        ? d.value
                        : e.hint && (e.persistentHint || e.focused)
                        ? e.hint
                        : e.messages;
                });
            return (
                ae(() => {
                    var V, I, D, M;
                    const C = !!(a.prepend || e.prependIcon),
                        w = !!(a.append || e.appendIcon),
                        A = _.value.length > 0,
                        O =
                            !e.hideDetails ||
                            (e.hideDetails === "auto" && (A || !!a.details));
                    return m(
                        "div",
                        {
                            class: [
                                "v-input",
                                `v-input--${e.direction}`,
                                {
                                    "v-input--center-affix": e.centerAffix,
                                    "v-input--hide-spin-buttons":
                                        e.hideSpinButtons,
                                },
                                l.value,
                                o.value,
                                E.value,
                                e.class,
                            ],
                            style: e.style,
                        },
                        [
                            C &&
                                m(
                                    "div",
                                    {
                                        key: "prepend",
                                        class: "v-input__prepend",
                                    },
                                    [
                                        (V = a.prepend) == null
                                            ? void 0
                                            : V.call(a, k.value),
                                        e.prependIcon &&
                                            m(
                                                s,
                                                {
                                                    key: "prepend-icon",
                                                    name: "prepend",
                                                },
                                                null
                                            ),
                                    ]
                                ),
                            a.default &&
                                m("div", { class: "v-input__control" }, [
                                    (I = a.default) == null
                                        ? void 0
                                        : I.call(a, k.value),
                                ]),
                            w &&
                                m(
                                    "div",
                                    { key: "append", class: "v-input__append" },
                                    [
                                        e.appendIcon &&
                                            m(
                                                s,
                                                {
                                                    key: "append-icon",
                                                    name: "append",
                                                },
                                                null
                                            ),
                                        (D = a.append) == null
                                            ? void 0
                                            : D.call(a, k.value),
                                    ]
                                ),
                            O &&
                                m("div", { class: "v-input__details" }, [
                                    m(
                                        _g,
                                        {
                                            id: u.value,
                                            active: A,
                                            messages: _.value,
                                        },
                                        { message: a.message }
                                    ),
                                    (M = a.details) == null
                                        ? void 0
                                        : M.call(a, k.value),
                                ]),
                        ]
                    );
                }),
                {
                    reset: S,
                    resetValidation: x,
                    validate: P,
                    isValid: y,
                    errorMessages: d,
                }
            );
        },
    }),
    xg = L({ ...gn(), ...It(Hu(), ["inline"]) }, "VCheckbox"),
    Pg = Y()({
        name: "VCheckbox",
        inheritAttrs: !1,
        props: xg(),
        emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 },
        setup(e, t) {
            let { attrs: n, slots: a } = t;
            const r = ve(e, "modelValue"),
                { isFocused: l, focus: o, blur: s } = hn(e),
                i = Ge(),
                c = p(() => e.id || `checkbox-${i}`);
            return (
                ae(() => {
                    const [u, d] = sn(n),
                        f = st.filterProps(e),
                        v = an.filterProps(e);
                    return m(
                        st,
                        K({ class: ["v-checkbox", e.class] }, u, f, {
                            modelValue: r.value,
                            "onUpdate:modelValue": (h) => (r.value = h),
                            id: c.value,
                            focused: l.value,
                            style: e.style,
                        }),
                        {
                            ...a,
                            default: (h) => {
                                let {
                                    id: g,
                                    messagesId: y,
                                    isDisabled: b,
                                    isReadonly: S,
                                    isValid: x,
                                } = h;
                                return m(
                                    an,
                                    K(
                                        v,
                                        {
                                            id: g.value,
                                            "aria-describedby": y.value,
                                            disabled: b.value,
                                            readonly: S.value,
                                        },
                                        d,
                                        {
                                            error: x.value === !1,
                                            modelValue: r.value,
                                            "onUpdate:modelValue": (P) =>
                                                (r.value = P),
                                            onFocus: o,
                                            onBlur: s,
                                        }
                                    ),
                                    a
                                );
                            },
                        }
                    );
                }),
                {}
            );
        },
    });
function hs(e) {
    const n = Math.abs(e);
    return Math.sign(e) * (n / ((1 / 0.501 - 2) * (1 - n) + 1));
}
function gs(e) {
    let {
        selectedElement: t,
        containerSize: n,
        contentSize: a,
        isRtl: r,
        currentScrollOffset: l,
        isHorizontal: o,
    } = e;
    const s = o ? t.clientWidth : t.clientHeight,
        i = o ? t.offsetLeft : t.offsetTop,
        c = r && o ? a - i - s : i,
        u = n + l,
        d = s + c,
        f = s * 0.4;
    return (
        c <= l
            ? (l = Math.max(c - f, 0))
            : u <= d && (l = Math.min(l - (u - d - f), a - n)),
        l
    );
}
function kg(e) {
    let {
        selectedElement: t,
        containerSize: n,
        contentSize: a,
        isRtl: r,
        isHorizontal: l,
    } = e;
    const o = l ? t.clientWidth : t.clientHeight,
        s = l ? t.offsetLeft : t.offsetTop,
        i = r && l ? a - s - o / 2 - n / 2 : s + o / 2 - n / 2;
    return Math.min(a - n, Math.max(0, i));
}
const Eg = Symbol.for("vuetify:v-slide-group"),
    qu = L(
        {
            centerActive: Boolean,
            direction: { type: String, default: "horizontal" },
            symbol: { type: null, default: Eg },
            nextIcon: { type: de, default: "$next" },
            prevIcon: { type: de, default: "$prev" },
            showArrows: {
                type: [Boolean, String],
                validator: (e) =>
                    typeof e == "boolean" ||
                    ["always", "desktop", "mobile"].includes(e),
            },
            ...ie(),
            ..._u(),
            ...Oe(),
            ...Al({ selectedClass: "v-slide-group-item--active" }),
        },
        "VSlideGroup"
    ),
    ys = Y()({
        name: "VSlideGroup",
        props: qu(),
        emits: { "update:modelValue": (e) => !0 },
        setup(e, t) {
            let { slots: n } = t;
            const { isRtl: a } = ct(),
                { displayClasses: r, mobile: l } = vn(e),
                o = Tl(e, e.symbol),
                s = J(!1),
                i = J(0),
                c = J(0),
                u = J(0),
                d = p(() => e.direction === "horizontal"),
                { resizeRef: f, contentRect: v } = Nt(),
                { resizeRef: h, contentRect: g } = Nt(),
                y = p(() =>
                    o.selected.value.length
                        ? o.items.value.findIndex(
                              (F) => F.id === o.selected.value[0]
                          )
                        : -1
                ),
                b = p(() =>
                    o.selected.value.length
                        ? o.items.value.findIndex(
                              (F) =>
                                  F.id ===
                                  o.selected.value[o.selected.value.length - 1]
                          )
                        : -1
                );
            if (_e) {
                let F = -1;
                Z(
                    () => [o.selected.value, v.value, g.value, d.value],
                    () => {
                        cancelAnimationFrame(F),
                            (F = requestAnimationFrame(() => {
                                if (v.value && g.value) {
                                    const G = d.value ? "width" : "height";
                                    (c.value = v.value[G]),
                                        (u.value = g.value[G]),
                                        (s.value = c.value + 1 < u.value);
                                }
                                if (y.value >= 0 && h.value) {
                                    const G = h.value.children[b.value];
                                    y.value === 0 || !s.value
                                        ? (i.value = 0)
                                        : e.centerActive
                                        ? (i.value = kg({
                                              selectedElement: G,
                                              containerSize: c.value,
                                              contentSize: u.value,
                                              isRtl: a.value,
                                              isHorizontal: d.value,
                                          }))
                                        : s.value &&
                                          (i.value = gs({
                                              selectedElement: G,
                                              containerSize: c.value,
                                              contentSize: u.value,
                                              isRtl: a.value,
                                              currentScrollOffset: i.value,
                                              isHorizontal: d.value,
                                          }));
                                }
                            }));
                    }
                );
            }
            const S = J(!1);
            let x = 0,
                P = 0;
            function E(F) {
                const G = d.value ? "clientX" : "clientY";
                (P = (a.value && d.value ? -1 : 1) * i.value),
                    (x = F.touches[0][G]),
                    (S.value = !0);
            }
            function k(F) {
                if (!s.value) return;
                const G = d.value ? "clientX" : "clientY",
                    j = a.value && d.value ? -1 : 1;
                i.value = j * (P + x - F.touches[0][G]);
            }
            function _(F) {
                const G = u.value - c.value;
                i.value < 0 || !s.value
                    ? (i.value = 0)
                    : i.value >= G && (i.value = G),
                    (S.value = !1);
            }
            function C() {
                f.value && (f.value[d.value ? "scrollLeft" : "scrollTop"] = 0);
            }
            const w = J(!1);
            function A(F) {
                if (((w.value = !0), !(!s.value || !h.value))) {
                    for (const G of F.composedPath())
                        for (const j of h.value.children)
                            if (j === G) {
                                i.value = gs({
                                    selectedElement: j,
                                    containerSize: c.value,
                                    contentSize: u.value,
                                    isRtl: a.value,
                                    currentScrollOffset: i.value,
                                    isHorizontal: d.value,
                                });
                                return;
                            }
                }
            }
            function O(F) {
                w.value = !1;
            }
            function V(F) {
                var G;
                !w.value &&
                    !(
                        F.relatedTarget &&
                        (G = h.value) != null &&
                        G.contains(F.relatedTarget)
                    ) &&
                    D();
            }
            function I(F) {
                h.value &&
                    (d.value
                        ? F.key === "ArrowRight"
                            ? D(a.value ? "prev" : "next")
                            : F.key === "ArrowLeft" &&
                              D(a.value ? "next" : "prev")
                        : F.key === "ArrowDown"
                        ? D("next")
                        : F.key === "ArrowUp" && D("prev"),
                    F.key === "Home"
                        ? D("first")
                        : F.key === "End" && D("last"));
            }
            function D(F) {
                var G, j, te, le, X;
                if (h.value)
                    if (!F) (G = va(h.value)[0]) == null || G.focus();
                    else if (F === "next") {
                        const T =
                            (j = h.value.querySelector(":focus")) == null
                                ? void 0
                                : j.nextElementSibling;
                        T ? T.focus() : D("first");
                    } else if (F === "prev") {
                        const T =
                            (te = h.value.querySelector(":focus")) == null
                                ? void 0
                                : te.previousElementSibling;
                        T ? T.focus() : D("last");
                    } else
                        F === "first"
                            ? (le = h.value.firstElementChild) == null ||
                              le.focus()
                            : F === "last" &&
                              ((X = h.value.lastElementChild) == null ||
                                  X.focus());
            }
            function M(F) {
                const G = i.value + (F === "prev" ? -1 : 1) * c.value;
                i.value = Ke(G, 0, u.value - c.value);
            }
            const U = p(() => {
                    let F =
                        i.value > u.value - c.value
                            ? -(u.value - c.value) +
                              hs(u.value - c.value - i.value)
                            : -i.value;
                    i.value <= 0 && (F = hs(-i.value));
                    const G = a.value && d.value ? -1 : 1;
                    return {
                        transform: `translate${d.value ? "X" : "Y"}(${
                            G * F
                        }px)`,
                        transition: S.value ? "none" : "",
                        willChange: S.value ? "transform" : "",
                    };
                }),
                re = p(() => ({
                    next: o.next,
                    prev: o.prev,
                    select: o.select,
                    isSelected: o.isSelected,
                })),
                R = p(() => {
                    switch (e.showArrows) {
                        case "always":
                            return !0;
                        case "desktop":
                            return !l.value;
                        case !0:
                            return s.value || Math.abs(i.value) > 0;
                        case "mobile":
                            return l.value || s.value || Math.abs(i.value) > 0;
                        default:
                            return (
                                !l.value && (s.value || Math.abs(i.value) > 0)
                            );
                    }
                }),
                B = p(() => Math.abs(i.value) > 0),
                N = p(() => u.value > Math.abs(i.value) + c.value);
            return (
                ae(() =>
                    m(
                        e.tag,
                        {
                            class: [
                                "v-slide-group",
                                {
                                    "v-slide-group--vertical": !d.value,
                                    "v-slide-group--has-affixes": R.value,
                                    "v-slide-group--is-overflowing": s.value,
                                },
                                r.value,
                                e.class,
                            ],
                            style: e.style,
                            tabindex:
                                w.value || o.selected.value.length ? -1 : 0,
                            onFocus: V,
                        },
                        {
                            default: () => {
                                var F, G, j;
                                return [
                                    R.value &&
                                        m(
                                            "div",
                                            {
                                                key: "prev",
                                                class: [
                                                    "v-slide-group__prev",
                                                    {
                                                        "v-slide-group__prev--disabled":
                                                            !B.value,
                                                    },
                                                ],
                                                onClick: () =>
                                                    B.value && M("prev"),
                                            },
                                            [
                                                ((F = n.prev) == null
                                                    ? void 0
                                                    : F.call(n, re.value)) ??
                                                    m(fs, null, {
                                                        default: () => [
                                                            m(
                                                                Ae,
                                                                {
                                                                    icon: a.value
                                                                        ? e.nextIcon
                                                                        : e.prevIcon,
                                                                },
                                                                null
                                                            ),
                                                        ],
                                                    }),
                                            ]
                                        ),
                                    m(
                                        "div",
                                        {
                                            key: "container",
                                            ref: f,
                                            class: "v-slide-group__container",
                                            onScroll: C,
                                        },
                                        [
                                            m(
                                                "div",
                                                {
                                                    ref: h,
                                                    class: "v-slide-group__content",
                                                    style: U.value,
                                                    onTouchstartPassive: E,
                                                    onTouchmovePassive: k,
                                                    onTouchendPassive: _,
                                                    onFocusin: A,
                                                    onFocusout: O,
                                                    onKeydown: I,
                                                },
                                                [
                                                    (G = n.default) == null
                                                        ? void 0
                                                        : G.call(n, re.value),
                                                ]
                                            ),
                                        ]
                                    ),
                                    R.value &&
                                        m(
                                            "div",
                                            {
                                                key: "next",
                                                class: [
                                                    "v-slide-group__next",
                                                    {
                                                        "v-slide-group__next--disabled":
                                                            !N.value,
                                                    },
                                                ],
                                                onClick: () =>
                                                    N.value && M("next"),
                                            },
                                            [
                                                ((j = n.next) == null
                                                    ? void 0
                                                    : j.call(n, re.value)) ??
                                                    m(fs, null, {
                                                        default: () => [
                                                            m(
                                                                Ae,
                                                                {
                                                                    icon: a.value
                                                                        ? e.prevIcon
                                                                        : e.nextIcon,
                                                                },
                                                                null
                                                            ),
                                                        ],
                                                    }),
                                            ]
                                        ),
                                ];
                            },
                        }
                    )
                ),
                { selected: o.selected, scrollTo: M, scrollOffset: i, focus: D }
            );
        },
    }),
    Ku = Symbol.for("vuetify:v-chip-group"),
    Ag = L(
        {
            column: Boolean,
            filter: Boolean,
            valueComparator: { type: Function, default: Tt },
            ...qu(),
            ...ie(),
            ...Al({ selectedClass: "v-chip--selected" }),
            ...Oe(),
            ...Pe(),
            ...ft({ variant: "tonal" }),
        },
        "VChipGroup"
    );
Y()({
    name: "VChipGroup",
    props: Ag(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, t) {
        let { slots: n } = t;
        const { themeClasses: a } = Ie(e),
            {
                isSelected: r,
                select: l,
                next: o,
                prev: s,
                selected: i,
            } = Tl(e, Ku);
        return (
            Je({
                VChip: {
                    color: W(e, "color"),
                    disabled: W(e, "disabled"),
                    filter: W(e, "filter"),
                    variant: W(e, "variant"),
                },
            }),
            ae(() => {
                const c = ys.filterProps(e);
                return m(
                    ys,
                    K(c, {
                        class: [
                            "v-chip-group",
                            { "v-chip-group--column": e.column },
                            a.value,
                            e.class,
                        ],
                        style: e.style,
                    }),
                    {
                        default: () => {
                            var u;
                            return [
                                (u = n.default) == null
                                    ? void 0
                                    : u.call(n, {
                                          isSelected: r,
                                          select: l,
                                          next: o,
                                          prev: s,
                                          selected: i.value,
                                      }),
                            ];
                        },
                    }
                );
            }),
            {}
        );
    },
});
const Tg = L(
        {
            activeClass: String,
            appendAvatar: String,
            appendIcon: de,
            closable: Boolean,
            closeIcon: { type: de, default: "$delete" },
            closeLabel: { type: String, default: "$vuetify.close" },
            draggable: Boolean,
            filter: Boolean,
            filterIcon: { type: String, default: "$complete" },
            label: Boolean,
            link: { type: Boolean, default: void 0 },
            pill: Boolean,
            prependAvatar: String,
            prependIcon: de,
            ripple: { type: [Boolean, Object], default: !0 },
            text: String,
            modelValue: { type: Boolean, default: !0 },
            onClick: Ne(),
            onClickOnce: Ne(),
            ...St(),
            ...ie(),
            ...Ze(),
            ..._t(),
            ...Zi(),
            ...je(),
            ...Wa(),
            ...fn(),
            ...Oe({ tag: "span" }),
            ...Pe(),
            ...ft({ variant: "tonal" }),
        },
        "VChip"
    ),
    Yu = Y()({
        name: "VChip",
        directives: { Ripple: qn },
        props: Tg(),
        emits: {
            "click:close": (e) => !0,
            "update:modelValue": (e) => !0,
            "group:selected": (e) => !0,
            click: (e) => !0,
        },
        setup(e, t) {
            let { attrs: n, emit: a, slots: r } = t;
            const { t: l } = Ot(),
                { borderClasses: o } = Vt(e),
                { colorClasses: s, colorStyles: i, variantClasses: c } = dn(e),
                { densityClasses: u } = dt(e),
                { elevationClasses: d } = Rt(e),
                { roundedClasses: f } = We(e),
                { sizeClasses: v } = Gn(e),
                { themeClasses: h } = Ie(e),
                g = ve(e, "modelValue"),
                y = Qi(e, Ku, !1),
                b = Ga(e, n),
                S = p(() => e.link !== !1 && b.isLink.value),
                x = p(
                    () =>
                        !e.disabled &&
                        e.link !== !1 &&
                        (!!y || e.link || b.isClickable.value)
                ),
                P = p(() => ({
                    "aria-label": l(e.closeLabel),
                    onClick(_) {
                        _.stopPropagation(),
                            (g.value = !1),
                            a("click:close", _);
                    },
                }));
            function E(_) {
                var C;
                a("click", _),
                    x.value &&
                        ((C = b.navigate) == null || C.call(b, _),
                        y == null || y.toggle());
            }
            function k(_) {
                (_.key === "Enter" || _.key === " ") &&
                    (_.preventDefault(), E(_));
            }
            return () => {
                const _ = b.isLink.value ? "a" : e.tag,
                    C = !!(e.appendIcon || e.appendAvatar),
                    w = !!(C || r.append),
                    A = !!(r.close || e.closable),
                    O = !!(r.filter || e.filter) && y,
                    V = !!(e.prependIcon || e.prependAvatar),
                    I = !!(V || r.prepend),
                    D = !y || y.isSelected.value;
                return (
                    g.value &&
                    Le(
                        m(
                            _,
                            {
                                class: [
                                    "v-chip",
                                    {
                                        "v-chip--disabled": e.disabled,
                                        "v-chip--label": e.label,
                                        "v-chip--link": x.value,
                                        "v-chip--filter": O,
                                        "v-chip--pill": e.pill,
                                    },
                                    h.value,
                                    o.value,
                                    D ? s.value : void 0,
                                    u.value,
                                    d.value,
                                    f.value,
                                    v.value,
                                    c.value,
                                    y == null ? void 0 : y.selectedClass.value,
                                    e.class,
                                ],
                                style: [D ? i.value : void 0, e.style],
                                disabled: e.disabled || void 0,
                                draggable: e.draggable,
                                href: b.href.value,
                                tabindex: x.value ? 0 : void 0,
                                onClick: E,
                                onKeydown: x.value && !S.value && k,
                            },
                            {
                                default: () => {
                                    var M;
                                    return [
                                        cn(x.value, "v-chip"),
                                        O &&
                                            m(
                                                Du,
                                                { key: "filter" },
                                                {
                                                    default: () => [
                                                        Le(
                                                            m(
                                                                "div",
                                                                {
                                                                    class: "v-chip__filter",
                                                                },
                                                                [
                                                                    r.filter
                                                                        ? m(
                                                                              Ee,
                                                                              {
                                                                                  key: "filter-defaults",
                                                                                  disabled:
                                                                                      !e.filterIcon,
                                                                                  defaults:
                                                                                      {
                                                                                          VIcon: {
                                                                                              icon: e.filterIcon,
                                                                                          },
                                                                                      },
                                                                              },
                                                                              r.filter
                                                                          )
                                                                        : m(
                                                                              Ae,
                                                                              {
                                                                                  key: "filter-icon",
                                                                                  icon: e.filterIcon,
                                                                              },
                                                                              null
                                                                          ),
                                                                ]
                                                            ),
                                                            [
                                                                [
                                                                    on,
                                                                    y.isSelected
                                                                        .value,
                                                                ],
                                                            ]
                                                        ),
                                                    ],
                                                }
                                            ),
                                        I &&
                                            m(
                                                "div",
                                                {
                                                    key: "prepend",
                                                    class: "v-chip__prepend",
                                                },
                                                [
                                                    r.prepend
                                                        ? m(
                                                              Ee,
                                                              {
                                                                  key: "prepend-defaults",
                                                                  disabled: !V,
                                                                  defaults: {
                                                                      VAvatar: {
                                                                          image: e.prependAvatar,
                                                                          start: !0,
                                                                      },
                                                                      VIcon: {
                                                                          icon: e.prependIcon,
                                                                          start: !0,
                                                                      },
                                                                  },
                                                              },
                                                              r.prepend
                                                          )
                                                        : m(ue, null, [
                                                              e.prependIcon &&
                                                                  m(
                                                                      Ae,
                                                                      {
                                                                          key: "prepend-icon",
                                                                          icon: e.prependIcon,
                                                                          start: !0,
                                                                      },
                                                                      null
                                                                  ),
                                                              e.prependAvatar &&
                                                                  m(
                                                                      jt,
                                                                      {
                                                                          key: "prepend-avatar",
                                                                          image: e.prependAvatar,
                                                                          start: !0,
                                                                      },
                                                                      null
                                                                  ),
                                                          ]),
                                                ]
                                            ),
                                        m(
                                            "div",
                                            {
                                                class: "v-chip__content",
                                                "data-no-activator": "",
                                            },
                                            [
                                                ((M = r.default) == null
                                                    ? void 0
                                                    : M.call(r, {
                                                          isSelected:
                                                              y == null
                                                                  ? void 0
                                                                  : y.isSelected
                                                                        .value,
                                                          selectedClass:
                                                              y == null
                                                                  ? void 0
                                                                  : y
                                                                        .selectedClass
                                                                        .value,
                                                          select:
                                                              y == null
                                                                  ? void 0
                                                                  : y.select,
                                                          toggle:
                                                              y == null
                                                                  ? void 0
                                                                  : y.toggle,
                                                          value:
                                                              y == null
                                                                  ? void 0
                                                                  : y.value
                                                                        .value,
                                                          disabled: e.disabled,
                                                      })) ?? e.text,
                                            ]
                                        ),
                                        w &&
                                            m(
                                                "div",
                                                {
                                                    key: "append",
                                                    class: "v-chip__append",
                                                },
                                                [
                                                    r.append
                                                        ? m(
                                                              Ee,
                                                              {
                                                                  key: "append-defaults",
                                                                  disabled: !C,
                                                                  defaults: {
                                                                      VAvatar: {
                                                                          end: !0,
                                                                          image: e.appendAvatar,
                                                                      },
                                                                      VIcon: {
                                                                          end: !0,
                                                                          icon: e.appendIcon,
                                                                      },
                                                                  },
                                                              },
                                                              r.append
                                                          )
                                                        : m(ue, null, [
                                                              e.appendIcon &&
                                                                  m(
                                                                      Ae,
                                                                      {
                                                                          key: "append-icon",
                                                                          end: !0,
                                                                          icon: e.appendIcon,
                                                                      },
                                                                      null
                                                                  ),
                                                              e.appendAvatar &&
                                                                  m(
                                                                      jt,
                                                                      {
                                                                          key: "append-avatar",
                                                                          end: !0,
                                                                          image: e.appendAvatar,
                                                                      },
                                                                      null
                                                                  ),
                                                          ]),
                                                ]
                                            ),
                                        A &&
                                            m(
                                                "button",
                                                K(
                                                    {
                                                        key: "close",
                                                        class: "v-chip__close",
                                                        type: "button",
                                                    },
                                                    P.value
                                                ),
                                                [
                                                    r.close
                                                        ? m(
                                                              Ee,
                                                              {
                                                                  key: "close-defaults",
                                                                  defaults: {
                                                                      VIcon: {
                                                                          icon: e.closeIcon,
                                                                          size: "x-small",
                                                                      },
                                                                  },
                                                              },
                                                              r.close
                                                          )
                                                        : m(
                                                              Ae,
                                                              {
                                                                  key: "close-icon",
                                                                  icon: e.closeIcon,
                                                                  size: "x-small",
                                                              },
                                                              null
                                                          ),
                                                ]
                                            ),
                                    ];
                                },
                            }
                        ),
                        [[bt("ripple"), x.value && e.ripple, null]]
                    )
                );
            };
        },
    }),
    Xr = Symbol.for("vuetify:list");
function Xu() {
    const e = ce(Xr, { hasPrepend: J(!1), updateHasPrepend: () => null }),
        t = {
            hasPrepend: J(!1),
            updateHasPrepend: (n) => {
                n && (t.hasPrepend.value = n);
            },
        };
    return pe(Xr, t), e;
}
function Ju() {
    return ce(Xr, null);
}
const Ig = {
        open: (e) => {
            let { id: t, value: n, opened: a, parents: r } = e;
            if (n) {
                const l = new Set();
                l.add(t);
                let o = r.get(t);
                for (; o != null; ) l.add(o), (o = r.get(o));
                return l;
            } else return a.delete(t), a;
        },
        select: () => null,
    },
    Zu = {
        open: (e) => {
            let { id: t, value: n, opened: a, parents: r } = e;
            if (n) {
                let l = r.get(t);
                for (a.add(t); l != null && l !== t; ) a.add(l), (l = r.get(l));
                return a;
            } else a.delete(t);
            return a;
        },
        select: () => null,
    },
    Og = {
        open: Zu.open,
        select: (e) => {
            let { id: t, value: n, opened: a, parents: r } = e;
            if (!n) return a;
            const l = [];
            let o = r.get(t);
            for (; o != null; ) l.push(o), (o = r.get(o));
            return new Set(l);
        },
    },
    Ll = (e) => {
        const t = {
            select: (n) => {
                let { id: a, value: r, selected: l } = n;
                if (((a = it(a)), e && !r)) {
                    const o = Array.from(l.entries()).reduce((s, i) => {
                        let [c, u] = i;
                        return u === "on" ? [...s, c] : s;
                    }, []);
                    if (o.length === 1 && o[0] === a) return l;
                }
                return l.set(a, r ? "on" : "off"), l;
            },
            in: (n, a, r) => {
                let l = new Map();
                for (const o of n || [])
                    l = t.select({
                        id: o,
                        value: !0,
                        selected: new Map(l),
                        children: a,
                        parents: r,
                    });
                return l;
            },
            out: (n) => {
                const a = [];
                for (const [r, l] of n.entries()) l === "on" && a.push(r);
                return a;
            },
        };
        return t;
    },
    Qu = (e) => {
        const t = Ll(e);
        return {
            select: (a) => {
                let { selected: r, id: l, ...o } = a;
                l = it(l);
                const s = r.has(l) ? new Map([[l, r.get(l)]]) : new Map();
                return t.select({ ...o, id: l, selected: s });
            },
            in: (a, r, l) => {
                let o = new Map();
                return (
                    a != null && a.length && (o = t.in(a.slice(0, 1), r, l)), o
                );
            },
            out: (a, r, l) => t.out(a, r, l),
        };
    },
    Vg = (e) => {
        const t = Ll(e);
        return {
            select: (a) => {
                let { id: r, selected: l, children: o, ...s } = a;
                return (
                    (r = it(r)),
                    o.has(r)
                        ? l
                        : t.select({ id: r, selected: l, children: o, ...s })
                );
            },
            in: t.in,
            out: t.out,
        };
    },
    Rg = (e) => {
        const t = Qu(e);
        return {
            select: (a) => {
                let { id: r, selected: l, children: o, ...s } = a;
                return (
                    (r = it(r)),
                    o.has(r)
                        ? l
                        : t.select({ id: r, selected: l, children: o, ...s })
                );
            },
            in: t.in,
            out: t.out,
        };
    },
    $g = (e) => {
        const t = {
            select: (n) => {
                let {
                    id: a,
                    value: r,
                    selected: l,
                    children: o,
                    parents: s,
                } = n;
                a = it(a);
                const i = new Map(l),
                    c = [a];
                for (; c.length; ) {
                    const d = c.shift();
                    l.set(d, r ? "on" : "off"), o.has(d) && c.push(...o.get(d));
                }
                let u = s.get(a);
                for (; u; ) {
                    const d = o.get(u),
                        f = d.every((h) => l.get(h) === "on"),
                        v = d.every((h) => !l.has(h) || l.get(h) === "off");
                    l.set(u, f ? "on" : v ? "off" : "indeterminate"),
                        (u = s.get(u));
                }
                return e &&
                    !r &&
                    Array.from(l.entries()).reduce((f, v) => {
                        let [h, g] = v;
                        return g === "on" ? [...f, h] : f;
                    }, []).length === 0
                    ? i
                    : l;
            },
            in: (n, a, r) => {
                let l = new Map();
                for (const o of n || [])
                    l = t.select({
                        id: o,
                        value: !0,
                        selected: new Map(l),
                        children: a,
                        parents: r,
                    });
                return l;
            },
            out: (n, a) => {
                const r = [];
                for (const [l, o] of n.entries())
                    o === "on" && !a.has(l) && r.push(l);
                return r;
            },
        };
        return t;
    },
    jn = Symbol.for("vuetify:nested"),
    ec = {
        id: J(),
        root: {
            register: () => null,
            unregister: () => null,
            parents: H(new Map()),
            children: H(new Map()),
            open: () => null,
            openOnSelect: () => null,
            select: () => null,
            opened: H(new Set()),
            selected: H(new Map()),
            selectedValues: H([]),
        },
    },
    Dg = L(
        {
            selectStrategy: [String, Function],
            openStrategy: [String, Object],
            opened: Array,
            selected: Array,
            mandatory: Boolean,
        },
        "nested"
    ),
    Lg = (e) => {
        let t = !1;
        const n = H(new Map()),
            a = H(new Map()),
            r = ve(
                e,
                "opened",
                e.opened,
                (d) => new Set(d),
                (d) => [...d.values()]
            ),
            l = p(() => {
                if (typeof e.selectStrategy == "object")
                    return e.selectStrategy;
                switch (e.selectStrategy) {
                    case "single-leaf":
                        return Rg(e.mandatory);
                    case "leaf":
                        return Vg(e.mandatory);
                    case "independent":
                        return Ll(e.mandatory);
                    case "single-independent":
                        return Qu(e.mandatory);
                    case "classic":
                    default:
                        return $g(e.mandatory);
                }
            }),
            o = p(() => {
                if (typeof e.openStrategy == "object") return e.openStrategy;
                switch (e.openStrategy) {
                    case "list":
                        return Og;
                    case "single":
                        return Ig;
                    case "multiple":
                    default:
                        return Zu;
                }
            }),
            s = ve(
                e,
                "selected",
                e.selected,
                (d) => l.value.in(d, n.value, a.value),
                (d) => l.value.out(d, n.value, a.value)
            );
        Re(() => {
            t = !0;
        });
        function i(d) {
            const f = [];
            let v = d;
            for (; v != null; ) f.unshift(v), (v = a.value.get(v));
            return f;
        }
        const c = xe("nested"),
            u = {
                id: J(),
                root: {
                    opened: r,
                    selected: s,
                    selectedValues: p(() => {
                        const d = [];
                        for (const [f, v] of s.value.entries())
                            v === "on" && d.push(f);
                        return d;
                    }),
                    register: (d, f, v) => {
                        f && d !== f && a.value.set(d, f),
                            v && n.value.set(d, []),
                            f != null &&
                                n.value.set(f, [...(n.value.get(f) || []), d]);
                    },
                    unregister: (d) => {
                        if (t) return;
                        n.value.delete(d);
                        const f = a.value.get(d);
                        if (f) {
                            const v = n.value.get(f) ?? [];
                            n.value.set(
                                f,
                                v.filter((h) => h !== d)
                            );
                        }
                        a.value.delete(d), r.value.delete(d);
                    },
                    open: (d, f, v) => {
                        c.emit("click:open", {
                            id: d,
                            value: f,
                            path: i(d),
                            event: v,
                        });
                        const h = o.value.open({
                            id: d,
                            value: f,
                            opened: new Set(r.value),
                            children: n.value,
                            parents: a.value,
                            event: v,
                        });
                        h && (r.value = h);
                    },
                    openOnSelect: (d, f, v) => {
                        const h = o.value.select({
                            id: d,
                            value: f,
                            selected: new Map(s.value),
                            opened: new Set(r.value),
                            children: n.value,
                            parents: a.value,
                            event: v,
                        });
                        h && (r.value = h);
                    },
                    select: (d, f, v) => {
                        c.emit("click:select", {
                            id: d,
                            value: f,
                            path: i(d),
                            event: v,
                        });
                        const h = l.value.select({
                            id: d,
                            value: f,
                            selected: new Map(s.value),
                            children: n.value,
                            parents: a.value,
                            event: v,
                        });
                        h && (s.value = h), u.root.openOnSelect(d, f, v);
                    },
                    children: n,
                    parents: a,
                },
            };
        return pe(jn, u), u.root;
    },
    tc = (e, t) => {
        const n = ce(jn, ec),
            a = Symbol(Ge()),
            r = p(() => (e.value !== void 0 ? e.value : a)),
            l = {
                ...n,
                id: r,
                open: (o, s) => n.root.open(r.value, o, s),
                openOnSelect: (o, s) => n.root.openOnSelect(r.value, o, s),
                isOpen: p(() => n.root.opened.value.has(r.value)),
                parent: p(() => n.root.parents.value.get(r.value)),
                select: (o, s) => n.root.select(r.value, o, s),
                isSelected: p(
                    () => n.root.selected.value.get(it(r.value)) === "on"
                ),
                isIndeterminate: p(
                    () => n.root.selected.value.get(r.value) === "indeterminate"
                ),
                isLeaf: p(() => !n.root.children.value.get(r.value)),
                isGroupActivator: n.isGroupActivator,
            };
        return (
            !n.isGroupActivator && n.root.register(r.value, n.id.value, t),
            Re(() => {
                !n.isGroupActivator && n.root.unregister(r.value);
            }),
            t && pe(jn, l),
            l
        );
    },
    Bg = () => {
        const e = ce(jn, ec);
        pe(jn, { ...e, isGroupActivator: !0 });
    },
    Fg = un({
        name: "VListGroupActivator",
        setup(e, t) {
            let { slots: n } = t;
            return (
                Bg(),
                () => {
                    var a;
                    return (a = n.default) == null ? void 0 : a.call(n);
                }
            );
        },
    }),
    Mg = L(
        {
            activeColor: String,
            baseColor: String,
            color: String,
            collapseIcon: { type: de, default: "$collapse" },
            expandIcon: { type: de, default: "$expand" },
            prependIcon: de,
            appendIcon: de,
            fluid: Boolean,
            subgroup: Boolean,
            title: String,
            value: null,
            ...ie(),
            ...Oe(),
        },
        "VListGroup"
    ),
    ps = Y()({
        name: "VListGroup",
        props: Mg(),
        setup(e, t) {
            let { slots: n } = t;
            const { isOpen: a, open: r, id: l } = tc(W(e, "value"), !0),
                o = p(() => `v-list-group--id-${String(l.value)}`),
                s = Ju(),
                { isBooted: i } = Ka();
            function c(v) {
                r(!a.value, v);
            }
            const u = p(() => ({
                    onClick: c,
                    class: "v-list-group__header",
                    id: o.value,
                })),
                d = p(() => (a.value ? e.collapseIcon : e.expandIcon)),
                f = p(() => ({
                    VListItem: {
                        active: a.value,
                        activeColor: e.activeColor,
                        baseColor: e.baseColor,
                        color: e.color,
                        prependIcon: e.prependIcon || (e.subgroup && d.value),
                        appendIcon: e.appendIcon || (!e.subgroup && d.value),
                        title: e.title,
                        value: e.value,
                    },
                }));
            return (
                ae(() =>
                    m(
                        e.tag,
                        {
                            class: [
                                "v-list-group",
                                {
                                    "v-list-group--prepend":
                                        s == null ? void 0 : s.hasPrepend.value,
                                    "v-list-group--fluid": e.fluid,
                                    "v-list-group--subgroup": e.subgroup,
                                    "v-list-group--open": a.value,
                                },
                                e.class,
                            ],
                            style: e.style,
                        },
                        {
                            default: () => [
                                n.activator &&
                                    m(
                                        Ee,
                                        { defaults: f.value },
                                        {
                                            default: () => [
                                                m(Fg, null, {
                                                    default: () => [
                                                        n.activator({
                                                            props: u.value,
                                                            isOpen: a.value,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }
                                    ),
                                m(
                                    Et,
                                    {
                                        transition: { component: $u },
                                        disabled: !i.value,
                                    },
                                    {
                                        default: () => {
                                            var v;
                                            return [
                                                Le(
                                                    m(
                                                        "div",
                                                        {
                                                            class: "v-list-group__items",
                                                            role: "group",
                                                            "aria-labelledby":
                                                                o.value,
                                                        },
                                                        [
                                                            (v = n.default) ==
                                                            null
                                                                ? void 0
                                                                : v.call(n),
                                                        ]
                                                    ),
                                                    [[on, a.value]]
                                                ),
                                            ];
                                        },
                                    }
                                ),
                            ],
                        }
                    )
                ),
                {}
            );
        },
    }),
    Ng = Un("v-list-item-subtitle"),
    jg = Un("v-list-item-title"),
    Hg = L(
        {
            active: { type: Boolean, default: void 0 },
            activeClass: String,
            activeColor: String,
            appendAvatar: String,
            appendIcon: de,
            baseColor: String,
            disabled: Boolean,
            lines: String,
            link: { type: Boolean, default: void 0 },
            nav: Boolean,
            prependAvatar: String,
            prependIcon: de,
            ripple: { type: [Boolean, Object], default: !0 },
            slim: Boolean,
            subtitle: [String, Number],
            title: [String, Number],
            value: null,
            onClick: Ne(),
            onClickOnce: Ne(),
            ...St(),
            ...ie(),
            ...Ze(),
            ...zt(),
            ..._t(),
            ...je(),
            ...Wa(),
            ...Oe(),
            ...Pe(),
            ...ft({ variant: "text" }),
        },
        "VListItem"
    ),
    rn = Y()({
        name: "VListItem",
        directives: { Ripple: qn },
        props: Hg(),
        emits: { click: (e) => !0 },
        setup(e, t) {
            let { attrs: n, slots: a, emit: r } = t;
            const l = Ga(e, n),
                o = p(() => (e.value === void 0 ? l.href.value : e.value)),
                {
                    select: s,
                    isSelected: i,
                    isIndeterminate: c,
                    isGroupActivator: u,
                    root: d,
                    parent: f,
                    openOnSelect: v,
                } = tc(o, !1),
                h = Ju(),
                g = p(() => {
                    var R;
                    return (
                        e.active !== !1 &&
                        (e.active ||
                            ((R = l.isActive) == null ? void 0 : R.value) ||
                            i.value)
                    );
                }),
                y = p(() => e.link !== !1 && l.isLink.value),
                b = p(
                    () =>
                        !e.disabled &&
                        e.link !== !1 &&
                        (e.link ||
                            l.isClickable.value ||
                            (e.value != null && !!h))
                ),
                S = p(() => e.rounded || e.nav),
                x = p(() => e.color ?? e.activeColor),
                P = p(() => ({
                    color: g.value ? x.value ?? e.baseColor : e.baseColor,
                    variant: e.variant,
                }));
            Z(
                () => {
                    var R;
                    return (R = l.isActive) == null ? void 0 : R.value;
                },
                (R) => {
                    R && f.value != null && d.open(f.value, !0), R && v(R);
                },
                { immediate: !0 }
            );
            const { themeClasses: E } = Ie(e),
                { borderClasses: k } = Vt(e),
                { colorClasses: _, colorStyles: C, variantClasses: w } = dn(P),
                { densityClasses: A } = dt(e),
                { dimensionStyles: O } = Ut(e),
                { elevationClasses: V } = Rt(e),
                { roundedClasses: I } = We(S),
                D = p(() =>
                    e.lines ? `v-list-item--${e.lines}-line` : void 0
                ),
                M = p(() => ({
                    isActive: g.value,
                    select: s,
                    isSelected: i.value,
                    isIndeterminate: c.value,
                }));
            function U(R) {
                var B;
                r("click", R),
                    !(u || !b.value) &&
                        ((B = l.navigate) == null || B.call(l, R),
                        e.value != null && s(!i.value, R));
            }
            function re(R) {
                (R.key === "Enter" || R.key === " ") &&
                    (R.preventDefault(), U(R));
            }
            return (
                ae(() => {
                    const R = y.value ? "a" : e.tag,
                        B = a.title || e.title != null,
                        N = a.subtitle || e.subtitle != null,
                        F = !!(e.appendAvatar || e.appendIcon),
                        G = !!(F || a.append),
                        j = !!(e.prependAvatar || e.prependIcon),
                        te = !!(j || a.prepend);
                    return (
                        h == null || h.updateHasPrepend(te),
                        e.activeColor &&
                            Av("active-color", ["color", "base-color"]),
                        Le(
                            m(
                                R,
                                {
                                    class: [
                                        "v-list-item",
                                        {
                                            "v-list-item--active": g.value,
                                            "v-list-item--disabled": e.disabled,
                                            "v-list-item--link": b.value,
                                            "v-list-item--nav": e.nav,
                                            "v-list-item--prepend":
                                                !te &&
                                                (h == null
                                                    ? void 0
                                                    : h.hasPrepend.value),
                                            "v-list-item--slim": e.slim,
                                            [`${e.activeClass}`]:
                                                e.activeClass && g.value,
                                        },
                                        E.value,
                                        k.value,
                                        _.value,
                                        A.value,
                                        V.value,
                                        D.value,
                                        I.value,
                                        w.value,
                                        e.class,
                                    ],
                                    style: [C.value, O.value, e.style],
                                    href: l.href.value,
                                    tabindex: b.value ? (h ? -2 : 0) : void 0,
                                    onClick: U,
                                    onKeydown: b.value && !y.value && re,
                                },
                                {
                                    default: () => {
                                        var le;
                                        return [
                                            cn(
                                                b.value || g.value,
                                                "v-list-item"
                                            ),
                                            te &&
                                                m(
                                                    "div",
                                                    {
                                                        key: "prepend",
                                                        class: "v-list-item__prepend",
                                                    },
                                                    [
                                                        a.prepend
                                                            ? m(
                                                                  Ee,
                                                                  {
                                                                      key: "prepend-defaults",
                                                                      disabled:
                                                                          !j,
                                                                      defaults:
                                                                          {
                                                                              VAvatar:
                                                                                  {
                                                                                      density:
                                                                                          e.density,
                                                                                      image: e.prependAvatar,
                                                                                  },
                                                                              VIcon: {
                                                                                  density:
                                                                                      e.density,
                                                                                  icon: e.prependIcon,
                                                                              },
                                                                              VListItemAction:
                                                                                  {
                                                                                      start: !0,
                                                                                  },
                                                                          },
                                                                  },
                                                                  {
                                                                      default:
                                                                          () => {
                                                                              var X;
                                                                              return [
                                                                                  (X =
                                                                                      a.prepend) ==
                                                                                  null
                                                                                      ? void 0
                                                                                      : X.call(
                                                                                            a,
                                                                                            M.value
                                                                                        ),
                                                                              ];
                                                                          },
                                                                  }
                                                              )
                                                            : m(ue, null, [
                                                                  e.prependAvatar &&
                                                                      m(
                                                                          jt,
                                                                          {
                                                                              key: "prepend-avatar",
                                                                              density:
                                                                                  e.density,
                                                                              image: e.prependAvatar,
                                                                          },
                                                                          null
                                                                      ),
                                                                  e.prependIcon &&
                                                                      m(
                                                                          Ae,
                                                                          {
                                                                              key: "prepend-icon",
                                                                              density:
                                                                                  e.density,
                                                                              icon: e.prependIcon,
                                                                          },
                                                                          null
                                                                      ),
                                                              ]),
                                                        m(
                                                            "div",
                                                            {
                                                                class: "v-list-item__spacer",
                                                            },
                                                            null
                                                        ),
                                                    ]
                                                ),
                                            m(
                                                "div",
                                                {
                                                    class: "v-list-item__content",
                                                    "data-no-activator": "",
                                                },
                                                [
                                                    B &&
                                                        m(
                                                            jg,
                                                            { key: "title" },
                                                            {
                                                                default: () => {
                                                                    var X;
                                                                    return [
                                                                        ((X =
                                                                            a.title) ==
                                                                        null
                                                                            ? void 0
                                                                            : X.call(
                                                                                  a,
                                                                                  {
                                                                                      title: e.title,
                                                                                  }
                                                                              )) ??
                                                                            e.title,
                                                                    ];
                                                                },
                                                            }
                                                        ),
                                                    N &&
                                                        m(
                                                            Ng,
                                                            { key: "subtitle" },
                                                            {
                                                                default: () => {
                                                                    var X;
                                                                    return [
                                                                        ((X =
                                                                            a.subtitle) ==
                                                                        null
                                                                            ? void 0
                                                                            : X.call(
                                                                                  a,
                                                                                  {
                                                                                      subtitle:
                                                                                          e.subtitle,
                                                                                  }
                                                                              )) ??
                                                                            e.subtitle,
                                                                    ];
                                                                },
                                                            }
                                                        ),
                                                    (le = a.default) == null
                                                        ? void 0
                                                        : le.call(a, M.value),
                                                ]
                                            ),
                                            G &&
                                                m(
                                                    "div",
                                                    {
                                                        key: "append",
                                                        class: "v-list-item__append",
                                                    },
                                                    [
                                                        a.append
                                                            ? m(
                                                                  Ee,
                                                                  {
                                                                      key: "append-defaults",
                                                                      disabled:
                                                                          !F,
                                                                      defaults:
                                                                          {
                                                                              VAvatar:
                                                                                  {
                                                                                      density:
                                                                                          e.density,
                                                                                      image: e.appendAvatar,
                                                                                  },
                                                                              VIcon: {
                                                                                  density:
                                                                                      e.density,
                                                                                  icon: e.appendIcon,
                                                                              },
                                                                              VListItemAction:
                                                                                  {
                                                                                      end: !0,
                                                                                  },
                                                                          },
                                                                  },
                                                                  {
                                                                      default:
                                                                          () => {
                                                                              var X;
                                                                              return [
                                                                                  (X =
                                                                                      a.append) ==
                                                                                  null
                                                                                      ? void 0
                                                                                      : X.call(
                                                                                            a,
                                                                                            M.value
                                                                                        ),
                                                                              ];
                                                                          },
                                                                  }
                                                              )
                                                            : m(ue, null, [
                                                                  e.appendIcon &&
                                                                      m(
                                                                          Ae,
                                                                          {
                                                                              key: "append-icon",
                                                                              density:
                                                                                  e.density,
                                                                              icon: e.appendIcon,
                                                                          },
                                                                          null
                                                                      ),
                                                                  e.appendAvatar &&
                                                                      m(
                                                                          jt,
                                                                          {
                                                                              key: "append-avatar",
                                                                              density:
                                                                                  e.density,
                                                                              image: e.appendAvatar,
                                                                          },
                                                                          null
                                                                      ),
                                                              ]),
                                                        m(
                                                            "div",
                                                            {
                                                                class: "v-list-item__spacer",
                                                            },
                                                            null
                                                        ),
                                                    ]
                                                ),
                                        ];
                                    },
                                }
                            ),
                            [[bt("ripple"), b.value && e.ripple]]
                        )
                    );
                }),
                {}
            );
        },
    }),
    zg = L(
        {
            color: String,
            inset: Boolean,
            sticky: Boolean,
            title: String,
            ...ie(),
            ...Oe(),
        },
        "VListSubheader"
    ),
    Jr = Y()({
        name: "VListSubheader",
        props: zg(),
        setup(e, t) {
            let { slots: n } = t;
            const { textColorClasses: a, textColorStyles: r } = yt(
                W(e, "color")
            );
            return (
                ae(() => {
                    const l = !!(n.default || e.title);
                    return m(
                        e.tag,
                        {
                            class: [
                                "v-list-subheader",
                                {
                                    "v-list-subheader--inset": e.inset,
                                    "v-list-subheader--sticky": e.sticky,
                                },
                                a.value,
                                e.class,
                            ],
                            style: [{ textColorStyles: r }, e.style],
                        },
                        {
                            default: () => {
                                var o;
                                return [
                                    l &&
                                        m(
                                            "div",
                                            { class: "v-list-subheader__text" },
                                            [
                                                ((o = n.default) == null
                                                    ? void 0
                                                    : o.call(n)) ?? e.title,
                                            ]
                                        ),
                                ];
                            },
                        }
                    );
                }),
                {}
            );
        },
    }),
    Ug = L(
        {
            color: String,
            inset: Boolean,
            length: [Number, String],
            thickness: [Number, String],
            vertical: Boolean,
            ...ie(),
            ...Pe(),
        },
        "VDivider"
    ),
    Pa = Y()({
        name: "VDivider",
        props: Ug(),
        setup(e, t) {
            let { attrs: n } = t;
            const { themeClasses: a } = Ie(e),
                { textColorClasses: r, textColorStyles: l } = yt(W(e, "color")),
                o = p(() => {
                    const s = {};
                    return (
                        e.length &&
                            (s[e.vertical ? "maxHeight" : "maxWidth"] = ne(
                                e.length
                            )),
                        e.thickness &&
                            (s[
                                e.vertical
                                    ? "borderRightWidth"
                                    : "borderTopWidth"
                            ] = ne(e.thickness)),
                        s
                    );
                });
            return (
                ae(() =>
                    m(
                        "hr",
                        {
                            class: [
                                {
                                    "v-divider": !0,
                                    "v-divider--inset": e.inset,
                                    "v-divider--vertical": e.vertical,
                                },
                                a.value,
                                r.value,
                                e.class,
                            ],
                            style: [o.value, l.value, e.style],
                            "aria-orientation":
                                !n.role || n.role === "separator"
                                    ? e.vertical
                                        ? "vertical"
                                        : "horizontal"
                                    : void 0,
                            role: `${n.role || "separator"}`,
                        },
                        null
                    )
                ),
                {}
            );
        },
    }),
    Gg = L({ items: Array, returnObject: Boolean }, "VListChildren"),
    nc = Y()({
        name: "VListChildren",
        props: Gg(),
        setup(e, t) {
            let { slots: n } = t;
            return (
                Xu(),
                () => {
                    var a, r;
                    return (
                        ((a = n.default) == null ? void 0 : a.call(n)) ??
                        ((r = e.items) == null
                            ? void 0
                            : r.map((l) => {
                                  var f, v;
                                  let {
                                      children: o,
                                      props: s,
                                      type: i,
                                      raw: c,
                                  } = l;
                                  if (i === "divider")
                                      return (
                                          ((f = n.divider) == null
                                              ? void 0
                                              : f.call(n, { props: s })) ??
                                          m(Pa, s, null)
                                      );
                                  if (i === "subheader")
                                      return (
                                          ((v = n.subheader) == null
                                              ? void 0
                                              : v.call(n, { props: s })) ??
                                          m(Jr, s, null)
                                      );
                                  const u = {
                                          subtitle: n.subtitle
                                              ? (h) => {
                                                    var g;
                                                    return (g = n.subtitle) ==
                                                        null
                                                        ? void 0
                                                        : g.call(n, {
                                                              ...h,
                                                              item: c,
                                                          });
                                                }
                                              : void 0,
                                          prepend: n.prepend
                                              ? (h) => {
                                                    var g;
                                                    return (g = n.prepend) ==
                                                        null
                                                        ? void 0
                                                        : g.call(n, {
                                                              ...h,
                                                              item: c,
                                                          });
                                                }
                                              : void 0,
                                          append: n.append
                                              ? (h) => {
                                                    var g;
                                                    return (g = n.append) ==
                                                        null
                                                        ? void 0
                                                        : g.call(n, {
                                                              ...h,
                                                              item: c,
                                                          });
                                                }
                                              : void 0,
                                          title: n.title
                                              ? (h) => {
                                                    var g;
                                                    return (g = n.title) == null
                                                        ? void 0
                                                        : g.call(n, {
                                                              ...h,
                                                              item: c,
                                                          });
                                                }
                                              : void 0,
                                      },
                                      d = ps.filterProps(s);
                                  return o
                                      ? m(
                                            ps,
                                            K(
                                                {
                                                    value:
                                                        s == null
                                                            ? void 0
                                                            : s.value,
                                                },
                                                d
                                            ),
                                            {
                                                activator: (h) => {
                                                    let { props: g } = h;
                                                    const y = {
                                                        ...s,
                                                        ...g,
                                                        value: e.returnObject
                                                            ? c
                                                            : s.value,
                                                    };
                                                    return n.header
                                                        ? n.header({ props: y })
                                                        : m(rn, y, u);
                                                },
                                                default: () =>
                                                    m(nc, { items: o }, n),
                                            }
                                        )
                                      : n.item
                                      ? n.item({ props: s })
                                      : m(
                                            rn,
                                            K(s, {
                                                value: e.returnObject
                                                    ? c
                                                    : s.value,
                                            }),
                                            u
                                        );
                              }))
                    );
                }
            );
        },
    }),
    ac = L(
        {
            items: { type: Array, default: () => [] },
            itemTitle: { type: [String, Array, Function], default: "title" },
            itemValue: { type: [String, Array, Function], default: "value" },
            itemChildren: {
                type: [Boolean, String, Array, Function],
                default: "children",
            },
            itemProps: {
                type: [Boolean, String, Array, Function],
                default: "props",
            },
            returnObject: Boolean,
            valueComparator: { type: Function, default: Tt },
        },
        "list-items"
    );
function Zr(e, t) {
    const n = Me(t, e.itemTitle, t),
        a = Me(t, e.itemValue, n),
        r = Me(t, e.itemChildren),
        l =
            e.itemProps === !0
                ? typeof t == "object" && t != null && !Array.isArray(t)
                    ? "children" in t
                        ? It(t, ["children"])
                        : t
                    : void 0
                : Me(t, e.itemProps),
        o = { title: n, value: a, ...l };
    return {
        title: String(o.title ?? ""),
        value: o.value,
        props: o,
        children: Array.isArray(r) ? rc(e, r) : void 0,
        raw: t,
    };
}
function rc(e, t) {
    const n = [];
    for (const a of t) n.push(Zr(e, a));
    return n;
}
function Wg(e) {
    const t = p(() => rc(e, e.items)),
        n = p(() => t.value.some((l) => l.value === null));
    function a(l) {
        return (
            n.value || (l = l.filter((o) => o !== null)),
            l.map((o) =>
                e.returnObject && typeof o == "string"
                    ? Zr(e, o)
                    : t.value.find((s) => e.valueComparator(o, s.value)) ||
                      Zr(e, o)
            )
        );
    }
    function r(l) {
        return e.returnObject
            ? l.map((o) => {
                  let { raw: s } = o;
                  return s;
              })
            : l.map((o) => {
                  let { value: s } = o;
                  return s;
              });
    }
    return { items: t, transformIn: a, transformOut: r };
}
function qg(e) {
    return (
        typeof e == "string" || typeof e == "number" || typeof e == "boolean"
    );
}
function Kg(e, t) {
    const n = Me(t, e.itemType, "item"),
        a = qg(t) ? t : Me(t, e.itemTitle),
        r = Me(t, e.itemValue, void 0),
        l = Me(t, e.itemChildren),
        o = e.itemProps === !0 ? It(t, ["children"]) : Me(t, e.itemProps),
        s = { title: a, value: r, ...o };
    return {
        type: n,
        title: s.title,
        value: s.value,
        props: s,
        children: n === "item" && l ? lc(e, l) : void 0,
        raw: t,
    };
}
function lc(e, t) {
    const n = [];
    for (const a of t) n.push(Kg(e, a));
    return n;
}
function Yg(e) {
    return { items: p(() => lc(e, e.items)) };
}
const Xg = L(
        {
            baseColor: String,
            activeColor: String,
            activeClass: String,
            bgColor: String,
            disabled: Boolean,
            expandIcon: String,
            collapseIcon: String,
            lines: { type: [Boolean, String], default: "one" },
            slim: Boolean,
            nav: Boolean,
            ...Dg({ selectStrategy: "single-leaf", openStrategy: "list" }),
            ...St(),
            ...ie(),
            ...Ze(),
            ...zt(),
            ..._t(),
            itemType: { type: String, default: "type" },
            ...ac(),
            ...je(),
            ...Oe(),
            ...Pe(),
            ...ft({ variant: "text" }),
        },
        "VList"
    ),
    Bl = Y()({
        name: "VList",
        props: Xg(),
        emits: {
            "update:selected": (e) => !0,
            "update:opened": (e) => !0,
            "click:open": (e) => !0,
            "click:select": (e) => !0,
        },
        setup(e, t) {
            let { slots: n } = t;
            const { items: a } = Yg(e),
                { themeClasses: r } = Ie(e),
                { backgroundColorClasses: l, backgroundColorStyles: o } = at(
                    W(e, "bgColor")
                ),
                { borderClasses: s } = Vt(e),
                { densityClasses: i } = dt(e),
                { dimensionStyles: c } = Ut(e),
                { elevationClasses: u } = Rt(e),
                { roundedClasses: d } = We(e),
                { open: f, select: v } = Lg(e),
                h = p(() => (e.lines ? `v-list--${e.lines}-line` : void 0)),
                g = W(e, "activeColor"),
                y = W(e, "baseColor"),
                b = W(e, "color");
            Xu(),
                Je({
                    VListGroup: {
                        activeColor: g,
                        baseColor: y,
                        color: b,
                        expandIcon: W(e, "expandIcon"),
                        collapseIcon: W(e, "collapseIcon"),
                    },
                    VListItem: {
                        activeClass: W(e, "activeClass"),
                        activeColor: g,
                        baseColor: y,
                        color: b,
                        density: W(e, "density"),
                        disabled: W(e, "disabled"),
                        lines: W(e, "lines"),
                        nav: W(e, "nav"),
                        slim: W(e, "slim"),
                        variant: W(e, "variant"),
                    },
                });
            const S = J(!1),
                x = H();
            function P(A) {
                S.value = !0;
            }
            function E(A) {
                S.value = !1;
            }
            function k(A) {
                var O;
                !S.value &&
                    !(
                        A.relatedTarget &&
                        (O = x.value) != null &&
                        O.contains(A.relatedTarget)
                    ) &&
                    w();
            }
            function _(A) {
                if (x.value) {
                    if (A.key === "ArrowDown") w("next");
                    else if (A.key === "ArrowUp") w("prev");
                    else if (A.key === "Home") w("first");
                    else if (A.key === "End") w("last");
                    else return;
                    A.preventDefault();
                }
            }
            function C(A) {
                S.value = !0;
            }
            function w(A) {
                if (x.value) return ma(x.value, A);
            }
            return (
                ae(() =>
                    m(
                        e.tag,
                        {
                            ref: x,
                            class: [
                                "v-list",
                                {
                                    "v-list--disabled": e.disabled,
                                    "v-list--nav": e.nav,
                                    "v-list--slim": e.slim,
                                },
                                r.value,
                                l.value,
                                s.value,
                                i.value,
                                u.value,
                                h.value,
                                d.value,
                                e.class,
                            ],
                            style: [o.value, c.value, e.style],
                            tabindex: e.disabled || S.value ? -1 : 0,
                            role: "listbox",
                            "aria-activedescendant": void 0,
                            onFocusin: P,
                            onFocusout: E,
                            onFocus: k,
                            onKeydown: _,
                            onMousedown: C,
                        },
                        {
                            default: () => [
                                m(
                                    nc,
                                    {
                                        items: a.value,
                                        returnObject: e.returnObject,
                                    },
                                    n
                                ),
                            ],
                        }
                    )
                ),
                { open: f, select: v, focus: w }
            );
        },
    }),
    Jg = L(
        {
            id: String,
            ...It(
                Vl({
                    closeDelay: 250,
                    closeOnContentClick: !0,
                    locationStrategy: "connected",
                    openDelay: 300,
                    scrim: !1,
                    scrollStrategy: "reposition",
                    transition: { component: Vu },
                }),
                ["absolute"]
            ),
        },
        "VMenu"
    ),
    oc = Y()({
        name: "VMenu",
        props: Jg(),
        emits: { "update:modelValue": (e) => !0 },
        setup(e, t) {
            let { slots: n } = t;
            const a = ve(e, "modelValue"),
                { scopeId: r } = qa(),
                l = Ge(),
                o = p(() => e.id || `v-menu-${l}`),
                s = H(),
                i = ce(Wr, null),
                c = J(0);
            pe(Wr, {
                register() {
                    ++c.value;
                },
                unregister() {
                    --c.value;
                },
                closeParents(g) {
                    setTimeout(() => {
                        !c.value &&
                            (g == null || (g && !yv(g, s.value.contentEl))) &&
                            ((a.value = !1), i == null || i.closeParents());
                    }, 40);
                },
            });
            async function u(g) {
                var S, x, P;
                const y = g.relatedTarget,
                    b = g.target;
                await we(),
                    a.value &&
                        y !== b &&
                        (S = s.value) != null &&
                        S.contentEl &&
                        (x = s.value) != null &&
                        x.globalTop &&
                        ![document, s.value.contentEl].includes(b) &&
                        !s.value.contentEl.contains(b) &&
                        ((P = va(s.value.contentEl)[0]) == null || P.focus());
            }
            Z(a, (g) => {
                g
                    ? (i == null || i.register(),
                      document.addEventListener("focusin", u, { once: !0 }))
                    : (i == null || i.unregister(),
                      document.removeEventListener("focusin", u));
            });
            function d(g) {
                i == null || i.closeParents(g);
            }
            function f(g) {
                var y, b, S;
                e.disabled ||
                    (g.key === "Tab" &&
                        (Oi(
                            va(
                                (y = s.value) == null ? void 0 : y.contentEl,
                                !1
                            ),
                            g.shiftKey ? "prev" : "next",
                            (P) => P.tabIndex >= 0
                        ) ||
                            ((a.value = !1),
                            (S =
                                (b = s.value) == null
                                    ? void 0
                                    : b.activatorEl) == null || S.focus())));
            }
            function v(g) {
                var b;
                if (e.disabled) return;
                const y = (b = s.value) == null ? void 0 : b.contentEl;
                y && a.value
                    ? g.key === "ArrowDown"
                        ? (g.preventDefault(), ma(y, "next"))
                        : g.key === "ArrowUp" &&
                          (g.preventDefault(), ma(y, "prev"))
                    : ["ArrowDown", "ArrowUp"].includes(g.key) &&
                      ((a.value = !0),
                      g.preventDefault(),
                      setTimeout(() => setTimeout(() => v(g))));
            }
            const h = p(() =>
                K(
                    {
                        "aria-haspopup": "menu",
                        "aria-expanded": String(a.value),
                        "aria-owns": o.value,
                        onKeydown: v,
                    },
                    e.activatorProps
                )
            );
            return (
                ae(() => {
                    const g = Ca.filterProps(e);
                    return m(
                        Ca,
                        K(
                            {
                                ref: s,
                                id: o.value,
                                class: ["v-menu", e.class],
                                style: e.style,
                            },
                            g,
                            {
                                modelValue: a.value,
                                "onUpdate:modelValue": (y) => (a.value = y),
                                absolute: !0,
                                activatorProps: h.value,
                                "onClick:outside": d,
                                onKeydown: f,
                            },
                            r
                        ),
                        {
                            activator: n.activator,
                            default: function () {
                                for (
                                    var y = arguments.length,
                                        b = new Array(y),
                                        S = 0;
                                    S < y;
                                    S++
                                )
                                    b[S] = arguments[S];
                                return m(
                                    Ee,
                                    { root: "VMenu" },
                                    {
                                        default: () => {
                                            var x;
                                            return [
                                                (x = n.default) == null
                                                    ? void 0
                                                    : x.call(n, ...b),
                                            ];
                                        },
                                    }
                                );
                            },
                        }
                    );
                }),
                mn({ id: o, ΨopenChildren: c }, s)
            );
        },
    }),
    Zg = L(
        {
            active: Boolean,
            max: [Number, String],
            value: { type: [Number, String], default: 0 },
            ...ie(),
            ...Kn({ transition: { component: Ru } }),
        },
        "VCounter"
    ),
    Fl = Y()({
        name: "VCounter",
        functional: !0,
        props: Zg(),
        setup(e, t) {
            let { slots: n } = t;
            const a = p(() =>
                e.max ? `${e.value} / ${e.max}` : String(e.value)
            );
            return (
                ae(() =>
                    m(
                        Et,
                        { transition: e.transition },
                        {
                            default: () => [
                                Le(
                                    m(
                                        "div",
                                        {
                                            class: ["v-counter", e.class],
                                            style: e.style,
                                        },
                                        [
                                            n.default
                                                ? n.default({
                                                      counter: a.value,
                                                      max: e.max,
                                                      value: e.value,
                                                  })
                                                : a.value,
                                        ]
                                    ),
                                    [[on, e.active]]
                                ),
                            ],
                        }
                    )
                ),
                {}
            );
        },
    }),
    Qg = L({ floating: Boolean, ...ie() }, "VFieldLabel"),
    aa = Y()({
        name: "VFieldLabel",
        props: Qg(),
        setup(e, t) {
            let { slots: n } = t;
            return (
                ae(() =>
                    m(
                        Mu,
                        {
                            class: [
                                "v-field-label",
                                { "v-field-label--floating": e.floating },
                                e.class,
                            ],
                            style: e.style,
                            "aria-hidden": e.floating || void 0,
                        },
                        n
                    )
                ),
                {}
            );
        },
    }),
    ey = [
        "underlined",
        "outlined",
        "filled",
        "solo",
        "solo-inverted",
        "solo-filled",
        "plain",
    ],
    Ya = L(
        {
            appendInnerIcon: de,
            bgColor: String,
            clearable: Boolean,
            clearIcon: { type: de, default: "$clear" },
            active: Boolean,
            centerAffix: { type: Boolean, default: void 0 },
            color: String,
            baseColor: String,
            dirty: Boolean,
            disabled: { type: Boolean, default: null },
            error: Boolean,
            flat: Boolean,
            label: String,
            persistentClear: Boolean,
            prependInnerIcon: de,
            reverse: Boolean,
            singleLine: Boolean,
            variant: {
                type: String,
                default: "filled",
                validator: (e) => ey.includes(e),
            },
            "onClick:clear": Ne(),
            "onClick:appendInner": Ne(),
            "onClick:prependInner": Ne(),
            ...ie(),
            ...za(),
            ...je(),
            ...Pe(),
        },
        "VField"
    ),
    Xa = Y()({
        name: "VField",
        inheritAttrs: !1,
        props: { id: String, ...Uu(), ...Ya() },
        emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 },
        setup(e, t) {
            let { attrs: n, emit: a, slots: r } = t;
            const { themeClasses: l } = Ie(e),
                { loaderClasses: o } = Wn(e),
                { focusClasses: s, isFocused: i, focus: c, blur: u } = hn(e),
                { InputIcon: d } = zu(e),
                { roundedClasses: f } = We(e),
                { rtlClasses: v } = ct(),
                h = p(() => e.dirty || e.active),
                g = p(() => !e.singleLine && !!(e.label || r.label)),
                y = Ge(),
                b = p(() => e.id || `input-${y}`),
                S = p(() => `${b.value}-messages`),
                x = H(),
                P = H(),
                E = H(),
                k = p(() => ["plain", "underlined"].includes(e.variant)),
                { backgroundColorClasses: _, backgroundColorStyles: C } = at(
                    W(e, "bgColor")
                ),
                { textColorClasses: w, textColorStyles: A } = yt(
                    p(() =>
                        e.error || e.disabled
                            ? void 0
                            : h.value && i.value
                            ? e.color
                            : e.baseColor
                    )
                );
            Z(
                h,
                (I) => {
                    if (g.value) {
                        const D = x.value.$el,
                            M = P.value.$el;
                        requestAnimationFrame(() => {
                            const U = Cl(D),
                                re = M.getBoundingClientRect(),
                                R = re.x - U.x,
                                B = re.y - U.y - (U.height / 2 - re.height / 2),
                                N = re.width / 0.75,
                                F =
                                    Math.abs(N - U.width) > 1
                                        ? { maxWidth: ne(N) }
                                        : void 0,
                                G = getComputedStyle(D),
                                j = getComputedStyle(M),
                                te =
                                    parseFloat(G.transitionDuration) * 1e3 ||
                                    150,
                                le = parseFloat(
                                    j.getPropertyValue("--v-field-label-scale")
                                ),
                                X = j.getPropertyValue("color");
                            (D.style.visibility = "visible"),
                                (M.style.visibility = "hidden"),
                                Zt(
                                    D,
                                    {
                                        transform: `translate(${R}px, ${B}px) scale(${le})`,
                                        color: X,
                                        ...F,
                                    },
                                    {
                                        duration: te,
                                        easing: ya,
                                        direction: I ? "normal" : "reverse",
                                    }
                                ).finished.then(() => {
                                    D.style.removeProperty("visibility"),
                                        M.style.removeProperty("visibility");
                                });
                        });
                    }
                },
                { flush: "post" }
            );
            const O = p(() => ({
                isActive: h,
                isFocused: i,
                controlRef: E,
                blur: u,
                focus: c,
            }));
            function V(I) {
                I.target !== document.activeElement && I.preventDefault();
            }
            return (
                ae(() => {
                    var R, B, N;
                    const I = e.variant === "outlined",
                        D = r["prepend-inner"] || e.prependInnerIcon,
                        M = !!(e.clearable || r.clear),
                        U = !!(r["append-inner"] || e.appendInnerIcon || M),
                        re = () =>
                            r.label
                                ? r.label({
                                      ...O.value,
                                      label: e.label,
                                      props: { for: b.value },
                                  })
                                : e.label;
                    return m(
                        "div",
                        K(
                            {
                                class: [
                                    "v-field",
                                    {
                                        "v-field--active": h.value,
                                        "v-field--appended": U,
                                        "v-field--center-affix":
                                            e.centerAffix ?? !k.value,
                                        "v-field--disabled": e.disabled,
                                        "v-field--dirty": e.dirty,
                                        "v-field--error": e.error,
                                        "v-field--flat": e.flat,
                                        "v-field--has-background": !!e.bgColor,
                                        "v-field--persistent-clear":
                                            e.persistentClear,
                                        "v-field--prepended": D,
                                        "v-field--reverse": e.reverse,
                                        "v-field--single-line": e.singleLine,
                                        "v-field--no-label": !re(),
                                        [`v-field--variant-${e.variant}`]: !0,
                                    },
                                    l.value,
                                    _.value,
                                    s.value,
                                    o.value,
                                    f.value,
                                    v.value,
                                    e.class,
                                ],
                                style: [C.value, e.style],
                                onClick: V,
                            },
                            n
                        ),
                        [
                            m("div", { class: "v-field__overlay" }, null),
                            m(
                                Ua,
                                {
                                    name: "v-field",
                                    active: !!e.loading,
                                    color: e.error
                                        ? "error"
                                        : typeof e.loading == "string"
                                        ? e.loading
                                        : e.color,
                                },
                                { default: r.loader }
                            ),
                            D &&
                                m(
                                    "div",
                                    {
                                        key: "prepend",
                                        class: "v-field__prepend-inner",
                                    },
                                    [
                                        e.prependInnerIcon &&
                                            m(
                                                d,
                                                {
                                                    key: "prepend-icon",
                                                    name: "prependInner",
                                                },
                                                null
                                            ),
                                        (R = r["prepend-inner"]) == null
                                            ? void 0
                                            : R.call(r, O.value),
                                    ]
                                ),
                            m(
                                "div",
                                {
                                    class: "v-field__field",
                                    "data-no-activator": "",
                                },
                                [
                                    [
                                        "filled",
                                        "solo",
                                        "solo-inverted",
                                        "solo-filled",
                                    ].includes(e.variant) &&
                                        g.value &&
                                        m(
                                            aa,
                                            {
                                                key: "floating-label",
                                                ref: P,
                                                class: [w.value],
                                                floating: !0,
                                                for: b.value,
                                                style: A.value,
                                            },
                                            { default: () => [re()] }
                                        ),
                                    m(
                                        aa,
                                        { ref: x, for: b.value },
                                        { default: () => [re()] }
                                    ),
                                    (B = r.default) == null
                                        ? void 0
                                        : B.call(r, {
                                              ...O.value,
                                              props: {
                                                  id: b.value,
                                                  class: "v-field__input",
                                                  "aria-describedby": S.value,
                                              },
                                              focus: c,
                                              blur: u,
                                          }),
                                ]
                            ),
                            M &&
                                m(
                                    Du,
                                    { key: "clear" },
                                    {
                                        default: () => [
                                            Le(
                                                m(
                                                    "div",
                                                    {
                                                        class: "v-field__clearable",
                                                        onMousedown: (F) => {
                                                            F.preventDefault(),
                                                                F.stopPropagation();
                                                        },
                                                    },
                                                    [
                                                        r.clear
                                                            ? r.clear()
                                                            : m(
                                                                  d,
                                                                  {
                                                                      name: "clear",
                                                                  },
                                                                  null
                                                              ),
                                                    ]
                                                ),
                                                [[on, e.dirty]]
                                            ),
                                        ],
                                    }
                                ),
                            U &&
                                m(
                                    "div",
                                    {
                                        key: "append",
                                        class: "v-field__append-inner",
                                    },
                                    [
                                        (N = r["append-inner"]) == null
                                            ? void 0
                                            : N.call(r, O.value),
                                        e.appendInnerIcon &&
                                            m(
                                                d,
                                                {
                                                    key: "append-icon",
                                                    name: "appendInner",
                                                },
                                                null
                                            ),
                                    ]
                                ),
                            m(
                                "div",
                                {
                                    class: ["v-field__outline", w.value],
                                    style: A.value,
                                },
                                [
                                    I &&
                                        m(ue, null, [
                                            m(
                                                "div",
                                                {
                                                    class: "v-field__outline__start",
                                                },
                                                null
                                            ),
                                            g.value &&
                                                m(
                                                    "div",
                                                    {
                                                        class: "v-field__outline__notch",
                                                    },
                                                    [
                                                        m(
                                                            aa,
                                                            {
                                                                ref: P,
                                                                floating: !0,
                                                                for: b.value,
                                                            },
                                                            {
                                                                default: () => [
                                                                    re(),
                                                                ],
                                                            }
                                                        ),
                                                    ]
                                                ),
                                            m(
                                                "div",
                                                {
                                                    class: "v-field__outline__end",
                                                },
                                                null
                                            ),
                                        ]),
                                    k.value &&
                                        g.value &&
                                        m(
                                            aa,
                                            {
                                                ref: P,
                                                floating: !0,
                                                for: b.value,
                                            },
                                            { default: () => [re()] }
                                        ),
                                ]
                            ),
                        ]
                    );
                }),
                { controlRef: E }
            );
        },
    });
function Ml(e) {
    const t = Object.keys(Xa.props).filter(
        (n) => !Ma(n) && n !== "class" && n !== "style"
    );
    return Ei(e, t);
}
const ty = ["color", "file", "time", "date", "datetime-local", "week", "month"],
    sc = L(
        {
            autofocus: Boolean,
            counter: [Boolean, Number, String],
            counterValue: [Number, Function],
            prefix: String,
            placeholder: String,
            persistentPlaceholder: Boolean,
            persistentCounter: Boolean,
            suffix: String,
            role: String,
            type: { type: String, default: "text" },
            modelModifiers: Object,
            ...gn(),
            ...Ya(),
        },
        "VTextField"
    ),
    Qr = Y()({
        name: "VTextField",
        directives: { Intersect: Rl },
        inheritAttrs: !1,
        props: sc(),
        emits: {
            "click:control": (e) => !0,
            "mousedown:control": (e) => !0,
            "update:focused": (e) => !0,
            "update:modelValue": (e) => !0,
        },
        setup(e, t) {
            let { attrs: n, emit: a, slots: r } = t;
            const l = ve(e, "modelValue"),
                { isFocused: o, focus: s, blur: i } = hn(e),
                c = p(() =>
                    typeof e.counterValue == "function"
                        ? e.counterValue(l.value)
                        : typeof e.counterValue == "number"
                        ? e.counterValue
                        : (l.value ?? "").toString().length
                ),
                u = p(() => {
                    if (n.maxlength) return n.maxlength;
                    if (
                        !(
                            !e.counter ||
                            (typeof e.counter != "number" &&
                                typeof e.counter != "string")
                        )
                    )
                        return e.counter;
                }),
                d = p(() => ["plain", "underlined"].includes(e.variant));
            function f(k, _) {
                var C, w;
                !e.autofocus ||
                    !k ||
                    (w = (C = _[0].target) == null ? void 0 : C.focus) ==
                        null ||
                    w.call(C);
            }
            const v = H(),
                h = H(),
                g = H(),
                y = p(
                    () =>
                        ty.includes(e.type) ||
                        e.persistentPlaceholder ||
                        o.value ||
                        e.active
                );
            function b() {
                var k;
                g.value !== document.activeElement &&
                    ((k = g.value) == null || k.focus()),
                    o.value || s();
            }
            function S(k) {
                a("mousedown:control", k),
                    k.target !== g.value && (b(), k.preventDefault());
            }
            function x(k) {
                b(), a("click:control", k);
            }
            function P(k) {
                k.stopPropagation(),
                    b(),
                    we(() => {
                        (l.value = null), wl(e["onClick:clear"], k);
                    });
            }
            function E(k) {
                var C;
                const _ = k.target;
                if (
                    ((l.value = _.value),
                    (C = e.modelModifiers) != null &&
                        C.trim &&
                        ["text", "search", "password", "tel", "url"].includes(
                            e.type
                        ))
                ) {
                    const w = [_.selectionStart, _.selectionEnd];
                    we(() => {
                        (_.selectionStart = w[0]), (_.selectionEnd = w[1]);
                    });
                }
            }
            return (
                ae(() => {
                    const k = !!(
                            r.counter ||
                            (e.counter !== !1 && e.counter != null)
                        ),
                        _ = !!(k || r.details),
                        [C, w] = sn(n),
                        { modelValue: A, ...O } = st.filterProps(e),
                        V = Ml(e);
                    return m(
                        st,
                        K(
                            {
                                ref: v,
                                modelValue: l.value,
                                "onUpdate:modelValue": (I) => (l.value = I),
                                class: [
                                    "v-text-field",
                                    {
                                        "v-text-field--prefixed": e.prefix,
                                        "v-text-field--suffixed": e.suffix,
                                        "v-input--plain-underlined": d.value,
                                    },
                                    e.class,
                                ],
                                style: e.style,
                            },
                            C,
                            O,
                            { centerAffix: !d.value, focused: o.value }
                        ),
                        {
                            ...r,
                            default: (I) => {
                                let {
                                    id: D,
                                    isDisabled: M,
                                    isDirty: U,
                                    isReadonly: re,
                                    isValid: R,
                                } = I;
                                return m(
                                    Xa,
                                    K(
                                        {
                                            ref: h,
                                            onMousedown: S,
                                            onClick: x,
                                            "onClick:clear": P,
                                            "onClick:prependInner":
                                                e["onClick:prependInner"],
                                            "onClick:appendInner":
                                                e["onClick:appendInner"],
                                            role: e.role,
                                        },
                                        V,
                                        {
                                            id: D.value,
                                            active: y.value || U.value,
                                            dirty: U.value || e.dirty,
                                            disabled: M.value,
                                            focused: o.value,
                                            error: R.value === !1,
                                        }
                                    ),
                                    {
                                        ...r,
                                        default: (B) => {
                                            let {
                                                props: { class: N, ...F },
                                            } = B;
                                            const G = Le(
                                                m(
                                                    "input",
                                                    K(
                                                        {
                                                            ref: g,
                                                            value: l.value,
                                                            onInput: E,
                                                            autofocus:
                                                                e.autofocus,
                                                            readonly: re.value,
                                                            disabled: M.value,
                                                            name: e.name,
                                                            placeholder:
                                                                e.placeholder,
                                                            size: 1,
                                                            type: e.type,
                                                            onFocus: b,
                                                            onBlur: i,
                                                        },
                                                        F,
                                                        w
                                                    ),
                                                    null
                                                ),
                                                [
                                                    [
                                                        bt("intersect"),
                                                        { handler: f },
                                                        null,
                                                        { once: !0 },
                                                    ],
                                                ]
                                            );
                                            return m(ue, null, [
                                                e.prefix &&
                                                    m(
                                                        "span",
                                                        {
                                                            class: "v-text-field__prefix",
                                                        },
                                                        [
                                                            m(
                                                                "span",
                                                                {
                                                                    class: "v-text-field__prefix__text",
                                                                },
                                                                [e.prefix]
                                                            ),
                                                        ]
                                                    ),
                                                r.default
                                                    ? m(
                                                          "div",
                                                          {
                                                              class: N,
                                                              "data-no-activator":
                                                                  "",
                                                          },
                                                          [r.default(), G]
                                                      )
                                                    : Nd(G, { class: N }),
                                                e.suffix &&
                                                    m(
                                                        "span",
                                                        {
                                                            class: "v-text-field__suffix",
                                                        },
                                                        [
                                                            m(
                                                                "span",
                                                                {
                                                                    class: "v-text-field__suffix__text",
                                                                },
                                                                [e.suffix]
                                                            ),
                                                        ]
                                                    ),
                                            ]);
                                        },
                                    }
                                );
                            },
                            details: _
                                ? (I) => {
                                      var D;
                                      return m(ue, null, [
                                          (D = r.details) == null
                                              ? void 0
                                              : D.call(r, I),
                                          k &&
                                              m(ue, null, [
                                                  m("span", null, null),
                                                  m(
                                                      Fl,
                                                      {
                                                          active:
                                                              e.persistentCounter ||
                                                              o.value,
                                                          value: c.value,
                                                          max: u.value,
                                                      },
                                                      r.counter
                                                  ),
                                              ]),
                                      ]);
                                  }
                                : void 0,
                        }
                    );
                }),
                mn({}, v, h, g)
            );
        },
    }),
    ny = L({ renderless: Boolean, ...ie() }, "VVirtualScrollItem"),
    ay = Y()({
        name: "VVirtualScrollItem",
        inheritAttrs: !1,
        props: ny(),
        emits: { "update:height": (e) => !0 },
        setup(e, t) {
            let { attrs: n, emit: a, slots: r } = t;
            const { resizeRef: l, contentRect: o } = Nt(void 0, "border");
            Z(
                () => {
                    var s;
                    return (s = o.value) == null ? void 0 : s.height;
                },
                (s) => {
                    s != null && a("update:height", s);
                }
            ),
                ae(() => {
                    var s, i;
                    return e.renderless
                        ? m(ue, null, [
                              (s = r.default) == null
                                  ? void 0
                                  : s.call(r, { itemRef: l }),
                          ])
                        : m(
                              "div",
                              K(
                                  {
                                      ref: l,
                                      class: [
                                          "v-virtual-scroll__item",
                                          e.class,
                                      ],
                                      style: e.style,
                                  },
                                  n
                              ),
                              [(i = r.default) == null ? void 0 : i.call(r)]
                          );
                });
        },
    }),
    ry = -1,
    ly = 1,
    wr = 100,
    oy = L(
        {
            itemHeight: { type: [Number, String], default: null },
            height: [Number, String],
        },
        "virtual"
    );
function sy(e, t) {
    const n = vn(),
        a = J(0);
    De(() => {
        a.value = parseFloat(e.itemHeight || 0);
    });
    const r = J(0),
        l = J(
            Math.ceil(
                (parseInt(e.height) || n.height.value) / (a.value || 16)
            ) || 1
        ),
        o = J(0),
        s = J(0),
        i = H(),
        c = H();
    let u = 0;
    const { resizeRef: d, contentRect: f } = Nt();
    De(() => {
        d.value = i.value;
    });
    const v = p(() => {
            var B;
            return i.value === document.documentElement
                ? n.height.value
                : ((B = f.value) == null ? void 0 : B.height) ||
                      parseInt(e.height) ||
                      0;
        }),
        h = p(() => !!(i.value && c.value && v.value && a.value));
    let g = Array.from({ length: t.value.length }),
        y = Array.from({ length: t.value.length });
    const b = J(0);
    let S = -1;
    function x(B) {
        return g[B] || a.value;
    }
    const P = vv(() => {
            const B = performance.now();
            y[0] = 0;
            const N = t.value.length;
            for (let F = 1; F <= N - 1; F++) y[F] = (y[F - 1] || 0) + x(F - 1);
            b.value = Math.max(b.value, performance.now() - B);
        }, b),
        E = Z(h, (B) => {
            B &&
                (E(),
                (u = c.value.offsetTop),
                P.immediate(),
                M(),
                ~S &&
                    we(() => {
                        _e &&
                            window.requestAnimationFrame(() => {
                                re(S), (S = -1);
                            });
                    }));
        });
    Ve(() => {
        P.clear();
    });
    function k(B, N) {
        const F = g[B],
            G = a.value;
        (a.value = G ? Math.min(a.value, N) : N),
            (F !== N || G !== a.value) && ((g[B] = N), P());
    }
    function _(B) {
        return (B = Ke(B, 0, t.value.length - 1)), y[B] || 0;
    }
    function C(B) {
        return iy(y, B);
    }
    let w = 0,
        A = 0,
        O = 0;
    Z(v, (B, N) => {
        N &&
            (M(),
            B < N &&
                requestAnimationFrame(() => {
                    (A = 0), M();
                }));
    });
    function V() {
        if (!i.value || !c.value) return;
        const B = i.value.scrollTop,
            N = performance.now();
        N - O > 500
            ? ((A = Math.sign(B - w)), (u = c.value.offsetTop))
            : (A = B - w),
            (w = B),
            (O = N),
            M();
    }
    function I() {
        !i.value || !c.value || ((A = 0), (O = 0), M());
    }
    let D = -1;
    function M() {
        cancelAnimationFrame(D), (D = requestAnimationFrame(U));
    }
    function U() {
        if (!i.value || !v.value) return;
        const B = w - u,
            N = Math.sign(A),
            F = Math.max(0, B - wr),
            G = Ke(C(F), 0, t.value.length),
            j = B + v.value + wr,
            te = Ke(C(j) + 1, G + 1, t.value.length);
        if ((N !== ry || G < r.value) && (N !== ly || te > l.value)) {
            const le = _(r.value) - _(G),
                X = _(te) - _(l.value);
            Math.max(le, X) > wr
                ? ((r.value = G), (l.value = te))
                : (G <= 0 && (r.value = G),
                  te >= t.value.length && (l.value = te));
        }
        (o.value = _(r.value)), (s.value = _(t.value.length) - _(l.value));
    }
    function re(B) {
        const N = _(B);
        !i.value || (B && !N) ? (S = B) : (i.value.scrollTop = N);
    }
    const R = p(() =>
        t.value
            .slice(r.value, l.value)
            .map((B, N) => ({ raw: B, index: N + r.value }))
    );
    return (
        Z(
            t,
            () => {
                (g = Array.from({ length: t.value.length })),
                    (y = Array.from({ length: t.value.length })),
                    P.immediate(),
                    M();
            },
            { deep: !0 }
        ),
        {
            containerRef: i,
            markerRef: c,
            computedItems: R,
            paddingTop: o,
            paddingBottom: s,
            scrollToIndex: re,
            handleScroll: V,
            handleScrollend: I,
            handleItemResize: k,
        }
    );
}
function iy(e, t) {
    let n = e.length - 1,
        a = 0,
        r = 0,
        l = null,
        o = -1;
    if (e[n] < t) return n;
    for (; a <= n; )
        if (((r = (a + n) >> 1), (l = e[r]), l > t)) n = r - 1;
        else if (l < t) (o = r), (a = r + 1);
        else return l === t ? r : a;
    return o;
}
const uy = L(
        {
            items: { type: Array, default: () => [] },
            renderless: Boolean,
            ...oy(),
            ...ie(),
            ...zt(),
        },
        "VVirtualScroll"
    ),
    cy = Y()({
        name: "VVirtualScroll",
        props: uy(),
        setup(e, t) {
            let { slots: n } = t;
            const a = xe("VVirtualScroll"),
                { dimensionStyles: r } = Ut(e),
                {
                    containerRef: l,
                    markerRef: o,
                    handleScroll: s,
                    handleScrollend: i,
                    handleItemResize: c,
                    scrollToIndex: u,
                    paddingTop: d,
                    paddingBottom: f,
                    computedItems: v,
                } = sy(e, W(e, "items"));
            return (
                tt(
                    () => e.renderless,
                    () => {
                        function h() {
                            var b, S;
                            const y = (
                                arguments.length > 0 && arguments[0] !== void 0
                                    ? arguments[0]
                                    : !1
                            )
                                ? "addEventListener"
                                : "removeEventListener";
                            l.value === document.documentElement
                                ? (document[y]("scroll", s, { passive: !0 }),
                                  document[y]("scrollend", i))
                                : ((b = l.value) == null ||
                                      b[y]("scroll", s, { passive: !0 }),
                                  (S = l.value) == null ||
                                      S[y]("scrollend", i));
                        }
                        Ue(() => {
                            (l.value = Hi(a.vnode.el, !0)), h(!0);
                        }),
                            Ve(h);
                    }
                ),
                ae(() => {
                    const h = v.value.map((g) =>
                        m(
                            ay,
                            {
                                key: g.index,
                                renderless: e.renderless,
                                "onUpdate:height": (y) => c(g.index, y),
                            },
                            {
                                default: (y) => {
                                    var b;
                                    return (b = n.default) == null
                                        ? void 0
                                        : b.call(n, {
                                              item: g.raw,
                                              index: g.index,
                                              ...y,
                                          });
                                },
                            }
                        )
                    );
                    return e.renderless
                        ? m(ue, null, [
                              m(
                                  "div",
                                  {
                                      ref: o,
                                      class: "v-virtual-scroll__spacer",
                                      style: { paddingTop: ne(d.value) },
                                  },
                                  null
                              ),
                              h,
                              m(
                                  "div",
                                  {
                                      class: "v-virtual-scroll__spacer",
                                      style: { paddingBottom: ne(f.value) },
                                  },
                                  null
                              ),
                          ])
                        : m(
                              "div",
                              {
                                  ref: l,
                                  class: ["v-virtual-scroll", e.class],
                                  onScrollPassive: s,
                                  onScrollend: i,
                                  style: [r.value, e.style],
                              },
                              [
                                  m(
                                      "div",
                                      {
                                          ref: o,
                                          class: "v-virtual-scroll__container",
                                          style: {
                                              paddingTop: ne(d.value),
                                              paddingBottom: ne(f.value),
                                          },
                                      },
                                      [h]
                                  ),
                              ]
                          );
                }),
                { scrollToIndex: u }
            );
        },
    });
function dy(e, t) {
    const n = J(!1);
    let a;
    function r(s) {
        cancelAnimationFrame(a),
            (n.value = !0),
            (a = requestAnimationFrame(() => {
                a = requestAnimationFrame(() => {
                    n.value = !1;
                });
            }));
    }
    async function l() {
        await new Promise((s) => requestAnimationFrame(s)),
            await new Promise((s) => requestAnimationFrame(s)),
            await new Promise((s) => requestAnimationFrame(s)),
            await new Promise((s) => {
                if (n.value) {
                    const i = Z(n, () => {
                        i(), s();
                    });
                } else s();
            });
    }
    async function o(s) {
        var u, d;
        if (
            (s.key === "Tab" && ((u = t.value) == null || u.focus()),
            !["PageDown", "PageUp", "Home", "End"].includes(s.key))
        )
            return;
        const i = (d = e.value) == null ? void 0 : d.$el;
        if (!i) return;
        (s.key === "Home" || s.key === "End") &&
            i.scrollTo({
                top: s.key === "Home" ? 0 : i.scrollHeight,
                behavior: "smooth",
            }),
            await l();
        const c = i.querySelectorAll(
            ":scope > :not(.v-virtual-scroll__spacer)"
        );
        if (s.key === "PageDown" || s.key === "Home") {
            const f = i.getBoundingClientRect().top;
            for (const v of c)
                if (v.getBoundingClientRect().top >= f) {
                    v.focus();
                    break;
                }
        } else {
            const f = i.getBoundingClientRect().bottom;
            for (const v of [...c].reverse())
                if (v.getBoundingClientRect().bottom <= f) {
                    v.focus();
                    break;
                }
        }
    }
    return { onListScroll: r, onListKeydown: o };
}
const fy = L(
        {
            chips: Boolean,
            closableChips: Boolean,
            closeText: { type: String, default: "$vuetify.close" },
            openText: { type: String, default: "$vuetify.open" },
            eager: Boolean,
            hideNoData: Boolean,
            hideSelected: Boolean,
            listProps: { type: Object },
            menu: Boolean,
            menuIcon: { type: de, default: "$dropdown" },
            menuProps: { type: Object },
            multiple: Boolean,
            noDataText: { type: String, default: "$vuetify.noDataText" },
            openOnClear: Boolean,
            itemColor: String,
            ...ac({ itemChildren: !1 }),
        },
        "Select"
    ),
    vy = L(
        {
            ...fy(),
            ...It(sc({ modelValue: null, role: "combobox" }), [
                "validationValue",
                "dirty",
                "appendInnerIcon",
            ]),
            ...Kn({ transition: { component: Vu } }),
        },
        "VSelect"
    ),
    my = Y()({
        name: "VSelect",
        props: vy(),
        emits: {
            "update:focused": (e) => !0,
            "update:modelValue": (e) => !0,
            "update:menu": (e) => !0,
        },
        setup(e, t) {
            let { slots: n } = t;
            const { t: a } = Ot(),
                r = H(),
                l = H(),
                o = H(),
                s = ve(e, "menu"),
                i = p({
                    get: () => s.value,
                    set: (R) => {
                        var B;
                        (s.value &&
                            !R &&
                            (B = l.value) != null &&
                            B.ΨopenChildren) ||
                            (s.value = R);
                    },
                }),
                { items: c, transformIn: u, transformOut: d } = Wg(e),
                f = ve(
                    e,
                    "modelValue",
                    [],
                    (R) => u(R === null ? [null] : $e(R)),
                    (R) => {
                        const B = d(R);
                        return e.multiple ? B : B[0] ?? null;
                    }
                ),
                v = p(() =>
                    typeof e.counterValue == "function"
                        ? e.counterValue(f.value)
                        : typeof e.counterValue == "number"
                        ? e.counterValue
                        : f.value.length
                ),
                h = Wu(),
                g = p(() => f.value.map((R) => R.value)),
                y = J(!1),
                b = p(() => (i.value ? e.closeText : e.openText));
            let S = "",
                x;
            const P = p(() =>
                    e.hideSelected
                        ? c.value.filter((R) => !f.value.some((B) => B === R))
                        : c.value
                ),
                E = p(
                    () =>
                        (e.hideNoData && !P.value.length) ||
                        e.readonly ||
                        (h == null ? void 0 : h.isReadonly.value)
                ),
                k = p(() => {
                    var R;
                    return {
                        ...e.menuProps,
                        activatorProps: {
                            ...(((R = e.menuProps) == null
                                ? void 0
                                : R.activatorProps) || {}),
                            "aria-haspopup": "listbox",
                        },
                    };
                }),
                _ = H(),
                { onListScroll: C, onListKeydown: w } = dy(_, r);
            function A(R) {
                e.openOnClear && (i.value = !0);
            }
            function O() {
                E.value || (i.value = !i.value);
            }
            function V(R) {
                var j, te;
                if (!R.key || e.readonly || (h != null && h.isReadonly.value))
                    return;
                ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(
                    R.key
                ) && R.preventDefault(),
                    ["Enter", "ArrowDown", " "].includes(R.key) &&
                        (i.value = !0),
                    ["Escape", "Tab"].includes(R.key) && (i.value = !1),
                    R.key === "Home"
                        ? (j = _.value) == null || j.focus("first")
                        : R.key === "End" &&
                          ((te = _.value) == null || te.focus("last"));
                const B = 1e3;
                function N(le) {
                    const X = le.key.length === 1,
                        T = !le.ctrlKey && !le.metaKey && !le.altKey;
                    return X && T;
                }
                if (e.multiple || !N(R)) return;
                const F = performance.now();
                F - x > B && (S = ""), (S += R.key.toLowerCase()), (x = F);
                const G = c.value.find((le) =>
                    le.title.toLowerCase().startsWith(S)
                );
                G !== void 0 && (f.value = [G]);
            }
            function I(R) {
                let B =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !0;
                if (!R.props.disabled)
                    if (e.multiple) {
                        const N = f.value.findIndex((G) =>
                                e.valueComparator(G.value, R.value)
                            ),
                            F = B ?? !~N;
                        if (~N) {
                            const G = F ? [...f.value, R] : [...f.value];
                            G.splice(N, 1), (f.value = G);
                        } else F && (f.value = [...f.value, R]);
                    } else {
                        const N = B !== !1;
                        (f.value = N ? [R] : []),
                            we(() => {
                                i.value = !1;
                            });
                    }
            }
            function D(R) {
                var B;
                ((B = _.value) != null && B.$el.contains(R.relatedTarget)) ||
                    (i.value = !1);
            }
            function M() {
                var R;
                y.value && ((R = r.value) == null || R.focus());
            }
            function U(R) {
                y.value = !0;
            }
            function re(R) {
                if (R == null) f.value = [];
                else if (
                    ha(r.value, ":autofill") ||
                    ha(r.value, ":-webkit-autofill")
                ) {
                    const B = c.value.find((N) => N.title === R);
                    B && I(B);
                } else r.value && (r.value.value = "");
            }
            return (
                Z(i, () => {
                    if (!e.hideSelected && i.value && f.value.length) {
                        const R = P.value.findIndex((B) =>
                            f.value.some((N) =>
                                e.valueComparator(N.value, B.value)
                            )
                        );
                        _e &&
                            window.requestAnimationFrame(() => {
                                var B;
                                R >= 0 &&
                                    ((B = o.value) == null ||
                                        B.scrollToIndex(R));
                            });
                    }
                }),
                Z(
                    () => e.items,
                    (R) => {
                        !y.value || !R.length || i.value || (i.value = !0);
                    }
                ),
                ae(() => {
                    const R = !!(e.chips || n.chip),
                        B = !!(
                            !e.hideNoData ||
                            P.value.length ||
                            n["prepend-item"] ||
                            n["append-item"] ||
                            n["no-data"]
                        ),
                        N = f.value.length > 0,
                        F = Qr.filterProps(e),
                        G =
                            N ||
                            (!y.value && e.label && !e.persistentPlaceholder)
                                ? void 0
                                : e.placeholder;
                    return m(
                        Qr,
                        K({ ref: r }, F, {
                            modelValue: f.value
                                .map((j) => j.props.value)
                                .join(", "),
                            "onUpdate:modelValue": re,
                            focused: y.value,
                            "onUpdate:focused": (j) => (y.value = j),
                            validationValue: f.externalValue,
                            counterValue: v.value,
                            dirty: N,
                            class: [
                                "v-select",
                                {
                                    "v-select--active-menu": i.value,
                                    "v-select--chips": !!e.chips,
                                    [`v-select--${
                                        e.multiple ? "multiple" : "single"
                                    }`]: !0,
                                    "v-select--selected": f.value.length,
                                    "v-select--selection-slot": !!n.selection,
                                },
                                e.class,
                            ],
                            style: e.style,
                            inputmode: "none",
                            placeholder: G,
                            "onClick:clear": A,
                            "onMousedown:control": O,
                            onBlur: D,
                            onKeydown: V,
                            "aria-label": a(b.value),
                            title: a(b.value),
                        }),
                        {
                            ...n,
                            default: () =>
                                m(ue, null, [
                                    m(
                                        oc,
                                        K(
                                            {
                                                ref: l,
                                                modelValue: i.value,
                                                "onUpdate:modelValue": (j) =>
                                                    (i.value = j),
                                                activator: "parent",
                                                contentClass:
                                                    "v-select__content",
                                                disabled: E.value,
                                                eager: e.eager,
                                                maxHeight: 310,
                                                openOnClick: !1,
                                                closeOnContentClick: !1,
                                                transition: e.transition,
                                                onAfterLeave: M,
                                            },
                                            k.value
                                        ),
                                        {
                                            default: () => [
                                                B &&
                                                    m(
                                                        Bl,
                                                        K(
                                                            {
                                                                ref: _,
                                                                selected:
                                                                    g.value,
                                                                selectStrategy:
                                                                    e.multiple
                                                                        ? "independent"
                                                                        : "single-independent",
                                                                onMousedown: (
                                                                    j
                                                                ) =>
                                                                    j.preventDefault(),
                                                                onKeydown: w,
                                                                onFocusin: U,
                                                                onScrollPassive:
                                                                    C,
                                                                tabindex: "-1",
                                                                "aria-live":
                                                                    "polite",
                                                                color:
                                                                    e.itemColor ??
                                                                    e.color,
                                                            },
                                                            e.listProps
                                                        ),
                                                        {
                                                            default: () => {
                                                                var j, te, le;
                                                                return [
                                                                    (j =
                                                                        n[
                                                                            "prepend-item"
                                                                        ]) ==
                                                                    null
                                                                        ? void 0
                                                                        : j.call(
                                                                              n
                                                                          ),
                                                                    !P.value
                                                                        .length &&
                                                                        !e.hideNoData &&
                                                                        (((te =
                                                                            n[
                                                                                "no-data"
                                                                            ]) ==
                                                                        null
                                                                            ? void 0
                                                                            : te.call(
                                                                                  n
                                                                              )) ??
                                                                            m(
                                                                                rn,
                                                                                {
                                                                                    title: a(
                                                                                        e.noDataText
                                                                                    ),
                                                                                },
                                                                                null
                                                                            )),
                                                                    m(
                                                                        cy,
                                                                        {
                                                                            ref: o,
                                                                            renderless:
                                                                                !0,
                                                                            items: P.value,
                                                                        },
                                                                        {
                                                                            default:
                                                                                (
                                                                                    X
                                                                                ) => {
                                                                                    var me;
                                                                                    let {
                                                                                        item: T,
                                                                                        index: q,
                                                                                        itemRef:
                                                                                            z,
                                                                                    } = X;
                                                                                    const Q =
                                                                                        K(
                                                                                            T.props,
                                                                                            {
                                                                                                ref: z,
                                                                                                key: q,
                                                                                                onClick:
                                                                                                    () =>
                                                                                                        I(
                                                                                                            T,
                                                                                                            null
                                                                                                        ),
                                                                                            }
                                                                                        );
                                                                                    return (
                                                                                        ((me =
                                                                                            n.item) ==
                                                                                        null
                                                                                            ? void 0
                                                                                            : me.call(
                                                                                                  n,
                                                                                                  {
                                                                                                      item: T,
                                                                                                      index: q,
                                                                                                      props: Q,
                                                                                                  }
                                                                                              )) ??
                                                                                        m(
                                                                                            rn,
                                                                                            K(
                                                                                                Q,
                                                                                                {
                                                                                                    role: "option",
                                                                                                }
                                                                                            ),
                                                                                            {
                                                                                                prepend:
                                                                                                    (
                                                                                                        be
                                                                                                    ) => {
                                                                                                        let {
                                                                                                            isSelected:
                                                                                                                se,
                                                                                                        } =
                                                                                                            be;
                                                                                                        return m(
                                                                                                            ue,
                                                                                                            null,
                                                                                                            [
                                                                                                                e.multiple &&
                                                                                                                !e.hideSelected
                                                                                                                    ? m(
                                                                                                                          an,
                                                                                                                          {
                                                                                                                              key: T.value,
                                                                                                                              modelValue:
                                                                                                                                  se,
                                                                                                                              ripple: !1,
                                                                                                                              tabindex:
                                                                                                                                  "-1",
                                                                                                                          },
                                                                                                                          null
                                                                                                                      )
                                                                                                                    : void 0,
                                                                                                                T
                                                                                                                    .props
                                                                                                                    .prependAvatar &&
                                                                                                                    m(
                                                                                                                        jt,
                                                                                                                        {
                                                                                                                            image: T
                                                                                                                                .props
                                                                                                                                .prependAvatar,
                                                                                                                        },
                                                                                                                        null
                                                                                                                    ),
                                                                                                                T
                                                                                                                    .props
                                                                                                                    .prependIcon &&
                                                                                                                    m(
                                                                                                                        Ae,
                                                                                                                        {
                                                                                                                            icon: T
                                                                                                                                .props
                                                                                                                                .prependIcon,
                                                                                                                        },
                                                                                                                        null
                                                                                                                    ),
                                                                                                            ]
                                                                                                        );
                                                                                                    },
                                                                                            }
                                                                                        )
                                                                                    );
                                                                                },
                                                                        }
                                                                    ),
                                                                    (le =
                                                                        n[
                                                                            "append-item"
                                                                        ]) ==
                                                                    null
                                                                        ? void 0
                                                                        : le.call(
                                                                              n
                                                                          ),
                                                                ];
                                                            },
                                                        }
                                                    ),
                                            ],
                                        }
                                    ),
                                    f.value.map((j, te) => {
                                        function le(z) {
                                            z.stopPropagation(),
                                                z.preventDefault(),
                                                I(j, !1);
                                        }
                                        const X = {
                                                "onClick:close": le,
                                                onMousedown(z) {
                                                    z.preventDefault(),
                                                        z.stopPropagation();
                                                },
                                                modelValue: !0,
                                                "onUpdate:modelValue": void 0,
                                            },
                                            T = R ? !!n.chip : !!n.selection,
                                            q = T
                                                ? Vi(
                                                      R
                                                          ? n.chip({
                                                                item: j,
                                                                index: te,
                                                                props: X,
                                                            })
                                                          : n.selection({
                                                                item: j,
                                                                index: te,
                                                            })
                                                  )
                                                : void 0;
                                        if (!(T && !q))
                                            return m(
                                                "div",
                                                {
                                                    key: j.value,
                                                    class: "v-select__selection",
                                                },
                                                [
                                                    R
                                                        ? n.chip
                                                            ? m(
                                                                  Ee,
                                                                  {
                                                                      key: "chip-defaults",
                                                                      defaults:
                                                                          {
                                                                              VChip: {
                                                                                  closable:
                                                                                      e.closableChips,
                                                                                  size: "small",
                                                                                  text: j.title,
                                                                              },
                                                                          },
                                                                  },
                                                                  {
                                                                      default:
                                                                          () => [
                                                                              q,
                                                                          ],
                                                                  }
                                                              )
                                                            : m(
                                                                  Yu,
                                                                  K(
                                                                      {
                                                                          key: "chip",
                                                                          closable:
                                                                              e.closableChips,
                                                                          size: "small",
                                                                          text: j.title,
                                                                          disabled:
                                                                              j
                                                                                  .props
                                                                                  .disabled,
                                                                      },
                                                                      X
                                                                  ),
                                                                  null
                                                              )
                                                        : q ??
                                                          m(
                                                              "span",
                                                              {
                                                                  class: "v-select__selection-text",
                                                              },
                                                              [
                                                                  j.title,
                                                                  e.multiple &&
                                                                      te <
                                                                          f
                                                                              .value
                                                                              .length -
                                                                              1 &&
                                                                      m(
                                                                          "span",
                                                                          {
                                                                              class: "v-select__selection-comma",
                                                                          },
                                                                          [
                                                                              ht(
                                                                                  ","
                                                                              ),
                                                                          ]
                                                                      ),
                                                              ]
                                                          ),
                                                ]
                                            );
                                    }),
                                ]),
                            "append-inner": function () {
                                var X;
                                for (
                                    var j = arguments.length,
                                        te = new Array(j),
                                        le = 0;
                                    le < j;
                                    le++
                                )
                                    te[le] = arguments[le];
                                return m(ue, null, [
                                    (X = n["append-inner"]) == null
                                        ? void 0
                                        : X.call(n, ...te),
                                    e.menuIcon
                                        ? m(
                                              Ae,
                                              {
                                                  class: "v-select__menu-icon",
                                                  icon: e.menuIcon,
                                              },
                                              null
                                          )
                                        : void 0,
                                ]);
                            },
                        }
                    );
                }),
                mn({ isFocused: y, menu: i, select: I }, r)
            );
        },
    }),
    hy = (e, t, n) =>
        e == null || t == null
            ? -1
            : e
                  .toString()
                  .toLocaleLowerCase()
                  .indexOf(t.toString().toLocaleLowerCase()),
    gy = L(
        {
            customFilter: Function,
            customKeyFilter: Object,
            filterKeys: [Array, String],
            filterMode: { type: String, default: "intersection" },
            noFilter: Boolean,
        },
        "filter"
    );
function yy(e, t, n) {
    var s;
    const a = [],
        r = (n == null ? void 0 : n.default) ?? hy,
        l = n != null && n.filterKeys ? $e(n.filterKeys) : !1,
        o = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
    if (!(e != null && e.length)) return a;
    e: for (let i = 0; i < e.length; i++) {
        const [c, u = c] = $e(e[i]),
            d = {},
            f = {};
        let v = -1;
        if (t && !(n != null && n.noFilter)) {
            if (typeof c == "object") {
                const y = l || Object.keys(u);
                for (const b of y) {
                    const S = Me(u, b),
                        x =
                            (s = n == null ? void 0 : n.customKeyFilter) == null
                                ? void 0
                                : s[b];
                    if (
                        ((v = x ? x(S, t, c) : r(S, t, c)),
                        v !== -1 && v !== !1)
                    )
                        x ? (d[b] = v) : (f[b] = v);
                    else if ((n == null ? void 0 : n.filterMode) === "every")
                        continue e;
                }
            } else (v = r(c, t, c)), v !== -1 && v !== !1 && (f.title = v);
            const h = Object.keys(f).length,
                g = Object.keys(d).length;
            if (
                (!h && !g) ||
                ((n == null ? void 0 : n.filterMode) === "union" &&
                    g !== o &&
                    !h) ||
                ((n == null ? void 0 : n.filterMode) === "intersection" &&
                    (g !== o || !h))
            )
                continue;
        }
        a.push({ index: i, matches: { ...f, ...d } });
    }
    return a;
}
function py(e, t, n, a) {
    const r = H([]),
        l = H(new Map()),
        o = p(() =>
            a != null && a.transform
                ? he(t).map((i) => [i, a.transform(i)])
                : he(t)
        );
    De(() => {
        const i = typeof n == "function" ? n() : he(n),
            c = typeof i != "string" && typeof i != "number" ? "" : String(i),
            u = yy(o.value, c, {
                customKeyFilter: {
                    ...e.customKeyFilter,
                    ...he(a == null ? void 0 : a.customKeyFilter),
                },
                default: e.customFilter,
                filterKeys: e.filterKeys,
                filterMode: e.filterMode,
                noFilter: e.noFilter,
            }),
            d = he(t),
            f = [],
            v = new Map();
        u.forEach((h) => {
            let { index: g, matches: y } = h;
            const b = d[g];
            f.push(b), v.set(b.value, y);
        }),
            (r.value = f),
            (l.value = v);
    });
    function s(i) {
        return l.value.get(i.value);
    }
    return { filteredItems: r, filteredMatches: l, getMatches: s };
}
const ic = Y()({
        name: "VCardActions",
        props: ie(),
        setup(e, t) {
            let { slots: n } = t;
            return (
                Je({ VBtn: { slim: !0, variant: "text" } }),
                ae(() => {
                    var a;
                    return m(
                        "div",
                        { class: ["v-card-actions", e.class], style: e.style },
                        [(a = n.default) == null ? void 0 : a.call(n)]
                    );
                }),
                {}
            );
        },
    }),
    by = Un("v-card-subtitle"),
    Sy = Un("v-card-title"),
    _y = L(
        {
            appendAvatar: String,
            appendIcon: de,
            prependAvatar: String,
            prependIcon: de,
            subtitle: [String, Number],
            title: [String, Number],
            ...ie(),
            ...Ze(),
        },
        "VCardItem"
    ),
    wy = Y()({
        name: "VCardItem",
        props: _y(),
        setup(e, t) {
            let { slots: n } = t;
            return (
                ae(() => {
                    var c;
                    const a = !!(e.prependAvatar || e.prependIcon),
                        r = !!(a || n.prepend),
                        l = !!(e.appendAvatar || e.appendIcon),
                        o = !!(l || n.append),
                        s = !!(e.title != null || n.title),
                        i = !!(e.subtitle != null || n.subtitle);
                    return m(
                        "div",
                        { class: ["v-card-item", e.class], style: e.style },
                        [
                            r &&
                                m(
                                    "div",
                                    {
                                        key: "prepend",
                                        class: "v-card-item__prepend",
                                    },
                                    [
                                        n.prepend
                                            ? m(
                                                  Ee,
                                                  {
                                                      key: "prepend-defaults",
                                                      disabled: !a,
                                                      defaults: {
                                                          VAvatar: {
                                                              density:
                                                                  e.density,
                                                              image: e.prependAvatar,
                                                          },
                                                          VIcon: {
                                                              density:
                                                                  e.density,
                                                              icon: e.prependIcon,
                                                          },
                                                      },
                                                  },
                                                  n.prepend
                                              )
                                            : m(ue, null, [
                                                  e.prependAvatar &&
                                                      m(
                                                          jt,
                                                          {
                                                              key: "prepend-avatar",
                                                              density:
                                                                  e.density,
                                                              image: e.prependAvatar,
                                                          },
                                                          null
                                                      ),
                                                  e.prependIcon &&
                                                      m(
                                                          Ae,
                                                          {
                                                              key: "prepend-icon",
                                                              density:
                                                                  e.density,
                                                              icon: e.prependIcon,
                                                          },
                                                          null
                                                      ),
                                              ]),
                                    ]
                                ),
                            m("div", { class: "v-card-item__content" }, [
                                s &&
                                    m(
                                        Sy,
                                        { key: "title" },
                                        {
                                            default: () => {
                                                var u;
                                                return [
                                                    ((u = n.title) == null
                                                        ? void 0
                                                        : u.call(n)) ?? e.title,
                                                ];
                                            },
                                        }
                                    ),
                                i &&
                                    m(
                                        by,
                                        { key: "subtitle" },
                                        {
                                            default: () => {
                                                var u;
                                                return [
                                                    ((u = n.subtitle) == null
                                                        ? void 0
                                                        : u.call(n)) ??
                                                        e.subtitle,
                                                ];
                                            },
                                        }
                                    ),
                                (c = n.default) == null ? void 0 : c.call(n),
                            ]),
                            o &&
                                m(
                                    "div",
                                    {
                                        key: "append",
                                        class: "v-card-item__append",
                                    },
                                    [
                                        n.append
                                            ? m(
                                                  Ee,
                                                  {
                                                      key: "append-defaults",
                                                      disabled: !l,
                                                      defaults: {
                                                          VAvatar: {
                                                              density:
                                                                  e.density,
                                                              image: e.appendAvatar,
                                                          },
                                                          VIcon: {
                                                              density:
                                                                  e.density,
                                                              icon: e.appendIcon,
                                                          },
                                                      },
                                                  },
                                                  n.append
                                              )
                                            : m(ue, null, [
                                                  e.appendIcon &&
                                                      m(
                                                          Ae,
                                                          {
                                                              key: "append-icon",
                                                              density:
                                                                  e.density,
                                                              icon: e.appendIcon,
                                                          },
                                                          null
                                                      ),
                                                  e.appendAvatar &&
                                                      m(
                                                          jt,
                                                          {
                                                              key: "append-avatar",
                                                              density:
                                                                  e.density,
                                                              image: e.appendAvatar,
                                                          },
                                                          null
                                                      ),
                                              ]),
                                    ]
                                ),
                        ]
                    );
                }),
                {}
            );
        },
    }),
    Cy = Un("v-card-text"),
    xy = L(
        {
            appendAvatar: String,
            appendIcon: de,
            disabled: Boolean,
            flat: Boolean,
            hover: Boolean,
            image: String,
            link: { type: Boolean, default: void 0 },
            prependAvatar: String,
            prependIcon: de,
            ripple: { type: [Boolean, Object], default: !0 },
            subtitle: [String, Number],
            text: [String, Number],
            title: [String, Number],
            ...St(),
            ...ie(),
            ...Ze(),
            ...zt(),
            ..._t(),
            ...za(),
            ...ja(),
            ...Il(),
            ...je(),
            ...Wa(),
            ...Oe(),
            ...Pe(),
            ...ft({ variant: "elevated" }),
        },
        "VCard"
    ),
    Py = Y()({
        name: "VCard",
        directives: { Ripple: qn },
        props: xy(),
        setup(e, t) {
            let { attrs: n, slots: a } = t;
            const { themeClasses: r } = Ie(e),
                { borderClasses: l } = Vt(e),
                { colorClasses: o, colorStyles: s, variantClasses: i } = dn(e),
                { densityClasses: c } = dt(e),
                { dimensionStyles: u } = Ut(e),
                { elevationClasses: d } = Rt(e),
                { loaderClasses: f } = Wn(e),
                { locationStyles: v } = Ha(e),
                { positionClasses: h } = Ol(e),
                { roundedClasses: g } = We(e),
                y = Ga(e, n),
                b = p(() => e.link !== !1 && y.isLink.value),
                S = p(
                    () =>
                        !e.disabled &&
                        e.link !== !1 &&
                        (e.link || y.isClickable.value)
                );
            return (
                ae(() => {
                    const x = b.value ? "a" : e.tag,
                        P = !!(a.title || e.title != null),
                        E = !!(a.subtitle || e.subtitle != null),
                        k = P || E,
                        _ = !!(a.append || e.appendAvatar || e.appendIcon),
                        C = !!(a.prepend || e.prependAvatar || e.prependIcon),
                        w = !!(a.image || e.image),
                        A = k || C || _,
                        O = !!(a.text || e.text != null);
                    return Le(
                        m(
                            x,
                            {
                                class: [
                                    "v-card",
                                    {
                                        "v-card--disabled": e.disabled,
                                        "v-card--flat": e.flat,
                                        "v-card--hover":
                                            e.hover && !(e.disabled || e.flat),
                                        "v-card--link": S.value,
                                    },
                                    r.value,
                                    l.value,
                                    o.value,
                                    c.value,
                                    d.value,
                                    f.value,
                                    h.value,
                                    g.value,
                                    i.value,
                                    e.class,
                                ],
                                style: [s.value, u.value, v.value, e.style],
                                href: y.href.value,
                                onClick: S.value && y.navigate,
                                tabindex: e.disabled ? -1 : void 0,
                            },
                            {
                                default: () => {
                                    var V;
                                    return [
                                        w &&
                                            m(
                                                "div",
                                                {
                                                    key: "image",
                                                    class: "v-card__image",
                                                },
                                                [
                                                    a.image
                                                        ? m(
                                                              Ee,
                                                              {
                                                                  key: "image-defaults",
                                                                  disabled:
                                                                      !e.image,
                                                                  defaults: {
                                                                      VImg: {
                                                                          cover: !0,
                                                                          src: e.image,
                                                                      },
                                                                  },
                                                              },
                                                              a.image
                                                          )
                                                        : m(
                                                              $l,
                                                              {
                                                                  key: "image-img",
                                                                  cover: !0,
                                                                  src: e.image,
                                                              },
                                                              null
                                                          ),
                                                ]
                                            ),
                                        m(
                                            Ua,
                                            {
                                                name: "v-card",
                                                active: !!e.loading,
                                                color:
                                                    typeof e.loading ==
                                                    "boolean"
                                                        ? void 0
                                                        : e.loading,
                                            },
                                            { default: a.loader }
                                        ),
                                        A &&
                                            m(
                                                wy,
                                                {
                                                    key: "item",
                                                    prependAvatar:
                                                        e.prependAvatar,
                                                    prependIcon: e.prependIcon,
                                                    title: e.title,
                                                    subtitle: e.subtitle,
                                                    appendAvatar:
                                                        e.appendAvatar,
                                                    appendIcon: e.appendIcon,
                                                },
                                                {
                                                    default: a.item,
                                                    prepend: a.prepend,
                                                    title: a.title,
                                                    subtitle: a.subtitle,
                                                    append: a.append,
                                                }
                                            ),
                                        O &&
                                            m(
                                                Cy,
                                                { key: "text" },
                                                {
                                                    default: () => {
                                                        var I;
                                                        return [
                                                            ((I = a.text) ==
                                                            null
                                                                ? void 0
                                                                : I.call(a)) ??
                                                                e.text,
                                                        ];
                                                    },
                                                }
                                            ),
                                        (V = a.default) == null
                                            ? void 0
                                            : V.call(a),
                                        a.actions &&
                                            m(ic, null, { default: a.actions }),
                                        cn(S.value, "v-card"),
                                    ];
                                },
                            }
                        ),
                        [[bt("ripple"), S.value && e.ripple]]
                    );
                }),
                {}
            );
        },
    }),
    ky = L(
        {
            expandOnClick: Boolean,
            showExpand: Boolean,
            expanded: { type: Array, default: () => [] },
        },
        "DataTable-expand"
    ),
    uc = Symbol.for("vuetify:datatable:expanded");
function cc(e) {
    const t = W(e, "expandOnClick"),
        n = ve(
            e,
            "expanded",
            e.expanded,
            (s) => new Set(s),
            (s) => [...s.values()]
        );
    function a(s, i) {
        const c = new Set(n.value);
        i ? c.add(s.value) : c.delete(s.value), (n.value = c);
    }
    function r(s) {
        return n.value.has(s.value);
    }
    function l(s) {
        a(s, !r(s));
    }
    const o = {
        expand: a,
        expanded: n,
        expandOnClick: t,
        isExpanded: r,
        toggleExpand: l,
    };
    return pe(uc, o), o;
}
function dc() {
    const e = ce(uc);
    if (!e) throw new Error("foo");
    return e;
}
const Ey = L(
        { groupBy: { type: Array, default: () => [] } },
        "DataTable-group"
    ),
    fc = Symbol.for("vuetify:data-table-group");
function vc(e) {
    return { groupBy: ve(e, "groupBy") };
}
function mc(e) {
    const { groupBy: t, sortBy: n } = e,
        a = H(new Set()),
        r = p(() =>
            t.value.map((c) => ({ ...c, order: c.order ?? !1 })).concat(n.value)
        );
    function l(c) {
        return a.value.has(c.id);
    }
    function o(c) {
        const u = new Set(a.value);
        l(c) ? u.delete(c.id) : u.add(c.id), (a.value = u);
    }
    function s(c) {
        function u(d) {
            const f = [];
            for (const v of d.items)
                "type" in v && v.type === "group" ? f.push(...u(v)) : f.push(v);
            return f;
        }
        return u({
            type: "group",
            items: c,
            id: "dummy",
            key: "dummy",
            value: "dummy",
            depth: 0,
        });
    }
    const i = {
        sortByWithGroups: r,
        toggleGroup: o,
        opened: a,
        groupBy: t,
        extractRows: s,
        isGroupOpen: l,
    };
    return pe(fc, i), i;
}
function hc() {
    const e = ce(fc);
    if (!e) throw new Error("Missing group!");
    return e;
}
function Ay(e, t) {
    if (!e.length) return [];
    const n = new Map();
    for (const a of e) {
        const r = Mt(a.raw, t);
        n.has(r) || n.set(r, []), n.get(r).push(a);
    }
    return n;
}
function gc(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
        a =
            arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : "root";
    if (!t.length) return [];
    const r = Ay(e, t[0]),
        l = [],
        o = t.slice(1);
    return (
        r.forEach((s, i) => {
            const c = t[0],
                u = `${a}_${c}_${i}`;
            l.push({
                depth: n,
                id: u,
                key: c,
                value: i,
                items: o.length ? gc(s, o, n + 1, u) : s,
                type: "group",
            });
        }),
        l
    );
}
function yc(e, t) {
    const n = [];
    for (const a of e)
        "type" in a && a.type === "group"
            ? (a.value != null && n.push(a),
              (t.has(a.id) || a.value == null) && n.push(...yc(a.items, t)))
            : n.push(a);
    return n;
}
function pc(e, t, n) {
    return {
        flatItems: p(() => {
            if (!t.value.length) return e.value;
            const r = gc(
                e.value,
                t.value.map((l) => l.key)
            );
            return yc(r, n.value);
        }),
    };
}
function bc(e) {
    let { page: t, itemsPerPage: n, sortBy: a, groupBy: r, search: l } = e;
    const o = xe("VDataTable"),
        s = p(() => ({
            page: t.value,
            itemsPerPage: n.value,
            sortBy: a.value,
            groupBy: r.value,
            search: l.value,
        }));
    let i = null;
    Z(
        s,
        () => {
            Tt(i, s.value) ||
                ((i == null ? void 0 : i.search) !== s.value.search &&
                    (t.value = 1),
                o.emit("update:options", s.value),
                (i = s.value));
        },
        { deep: !0, immediate: !0 }
    );
}
const Sc = L(
        {
            page: { type: [Number, String], default: 1 },
            itemsPerPage: { type: [Number, String], default: 10 },
        },
        "DataTable-paginate"
    ),
    _c = Symbol.for("vuetify:data-table-pagination");
function wc(e) {
    const t = ve(e, "page", void 0, (a) => +(a ?? 1)),
        n = ve(e, "itemsPerPage", void 0, (a) => +(a ?? 10));
    return { page: t, itemsPerPage: n };
}
function Cc(e) {
    const { page: t, itemsPerPage: n, itemsLength: a } = e,
        r = p(() => (n.value === -1 ? 0 : n.value * (t.value - 1))),
        l = p(() =>
            n.value === -1 ? a.value : Math.min(a.value, r.value + n.value)
        ),
        o = p(() =>
            n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value)
        );
    De(() => {
        t.value > o.value && (t.value = o.value);
    });
    function s(f) {
        (n.value = f), (t.value = 1);
    }
    function i() {
        t.value = Ke(t.value + 1, 1, o.value);
    }
    function c() {
        t.value = Ke(t.value - 1, 1, o.value);
    }
    function u(f) {
        t.value = Ke(f, 1, o.value);
    }
    const d = {
        page: t,
        itemsPerPage: n,
        startIndex: r,
        stopIndex: l,
        pageCount: o,
        itemsLength: a,
        nextPage: i,
        prevPage: c,
        setPage: u,
        setItemsPerPage: s,
    };
    return pe(_c, d), d;
}
function Ty() {
    const e = ce(_c);
    if (!e) throw new Error("Missing pagination!");
    return e;
}
function Iy(e) {
    const t = xe("usePaginatedItems"),
        { items: n, startIndex: a, stopIndex: r, itemsPerPage: l } = e,
        o = p(() => (l.value <= 0 ? n.value : n.value.slice(a.value, r.value)));
    return (
        Z(o, (s) => {
            t.emit("update:currentItems", s);
        }),
        { paginatedItems: o }
    );
}
const Oy = {
        showSelectAll: !1,
        allSelected: () => [],
        select: (e) => {
            var a;
            let { items: t, value: n } = e;
            return new Set(n ? [(a = t[0]) == null ? void 0 : a.value] : []);
        },
        selectAll: (e) => {
            let { selected: t } = e;
            return t;
        },
    },
    xc = {
        showSelectAll: !0,
        allSelected: (e) => {
            let { currentPage: t } = e;
            return t;
        },
        select: (e) => {
            let { items: t, value: n, selected: a } = e;
            for (const r of t) n ? a.add(r.value) : a.delete(r.value);
            return a;
        },
        selectAll: (e) => {
            let { value: t, currentPage: n, selected: a } = e;
            return xc.select({ items: n, value: t, selected: a });
        },
    },
    Pc = {
        showSelectAll: !0,
        allSelected: (e) => {
            let { allItems: t } = e;
            return t;
        },
        select: (e) => {
            let { items: t, value: n, selected: a } = e;
            for (const r of t) n ? a.add(r.value) : a.delete(r.value);
            return a;
        },
        selectAll: (e) => {
            let { value: t, allItems: n, selected: a } = e;
            return Pc.select({ items: n, value: t, selected: a });
        },
    },
    Vy = L(
        {
            showSelect: Boolean,
            selectStrategy: { type: [String, Object], default: "page" },
            modelValue: { type: Array, default: () => [] },
            valueComparator: { type: Function, default: Tt },
        },
        "DataTable-select"
    ),
    kc = Symbol.for("vuetify:data-table-selection");
function Ec(e, t) {
    let { allItems: n, currentPage: a } = t;
    const r = ve(
            e,
            "modelValue",
            e.modelValue,
            (y) =>
                new Set(
                    $e(y).map((b) => {
                        var S;
                        return (
                            ((S = n.value.find((x) =>
                                e.valueComparator(b, x.value)
                            )) == null
                                ? void 0
                                : S.value) ?? b
                        );
                    })
                ),
            (y) => [...y.values()]
        ),
        l = p(() => n.value.filter((y) => y.selectable)),
        o = p(() => a.value.filter((y) => y.selectable)),
        s = p(() => {
            if (typeof e.selectStrategy == "object") return e.selectStrategy;
            switch (e.selectStrategy) {
                case "single":
                    return Oy;
                case "all":
                    return Pc;
                case "page":
                default:
                    return xc;
            }
        });
    function i(y) {
        return $e(y).every((b) => r.value.has(b.value));
    }
    function c(y) {
        return $e(y).some((b) => r.value.has(b.value));
    }
    function u(y, b) {
        const S = s.value.select({
            items: y,
            value: b,
            selected: new Set(r.value),
        });
        r.value = S;
    }
    function d(y) {
        u([y], !i([y]));
    }
    function f(y) {
        const b = s.value.selectAll({
            value: y,
            allItems: l.value,
            currentPage: o.value,
            selected: new Set(r.value),
        });
        r.value = b;
    }
    const v = p(() => r.value.size > 0),
        h = p(() => {
            const y = s.value.allSelected({
                allItems: l.value,
                currentPage: o.value,
            });
            return !!y.length && i(y);
        }),
        g = {
            toggleSelect: d,
            select: u,
            selectAll: f,
            isSelected: i,
            isSomeSelected: c,
            someSelected: v,
            allSelected: h,
            showSelectAll: s.value.showSelectAll,
        };
    return pe(kc, g), g;
}
function Ja() {
    const e = ce(kc);
    if (!e) throw new Error("Missing selection!");
    return e;
}
const Ry = L(
        {
            sortBy: { type: Array, default: () => [] },
            customKeySort: Object,
            multiSort: Boolean,
            mustSort: Boolean,
        },
        "DataTable-sort"
    ),
    Ac = Symbol.for("vuetify:data-table-sort");
function Tc(e) {
    const t = ve(e, "sortBy"),
        n = W(e, "mustSort"),
        a = W(e, "multiSort");
    return { sortBy: t, mustSort: n, multiSort: a };
}
function Ic(e) {
    const { sortBy: t, mustSort: n, multiSort: a, page: r } = e,
        l = (i) => {
            if (i.key == null) return;
            let c = t.value.map((d) => ({ ...d })) ?? [];
            const u = c.find((d) => d.key === i.key);
            u
                ? u.order === "desc"
                    ? n.value
                        ? (u.order = "asc")
                        : (c = c.filter((d) => d.key !== i.key))
                    : (u.order = "desc")
                : a.value
                ? (c = [...c, { key: i.key, order: "asc" }])
                : (c = [{ key: i.key, order: "asc" }]),
                (t.value = c),
                r && (r.value = 1);
        };
    function o(i) {
        return !!t.value.find((c) => c.key === i.key);
    }
    const s = { sortBy: t, toggleSort: l, isSorted: o };
    return pe(Ac, s), s;
}
function $y() {
    const e = ce(Ac);
    if (!e) throw new Error("Missing sort!");
    return e;
}
function Dy(e, t, n, a, r) {
    const l = Ot();
    return {
        sortedItems: p(() =>
            n.value.length
                ? Ly(
                      t.value,
                      n.value,
                      l.current.value,
                      { ...e.customKeySort, ...(a == null ? void 0 : a.value) },
                      r == null ? void 0 : r.value
                  )
                : t.value
        ),
    };
}
function Ly(e, t, n, a, r) {
    const l = new Intl.Collator(n, { sensitivity: "accent", usage: "sort" });
    return [...e].sort((o, s) => {
        for (let i = 0; i < t.length; i++) {
            const c = t[i].key,
                u = t[i].order ?? "asc";
            if (u === !1) continue;
            let d = Mt(o.raw, c),
                f = Mt(s.raw, c),
                v = o.raw,
                h = s.raw;
            if (
                (u === "desc" && (([d, f] = [f, d]), ([v, h] = [h, v])),
                r != null && r[c])
            ) {
                const g = r[c](v, h);
                if (!g) continue;
                return g;
            }
            if (a != null && a[c]) {
                const g = a[c](d, f);
                if (!g) continue;
                return g;
            }
            if (d instanceof Date && f instanceof Date)
                return d.getTime() - f.getTime();
            if (
                (([d, f] = [d, f].map((g) =>
                    g != null ? g.toString().toLocaleLowerCase() : g
                )),
                d !== f)
            )
                return Qn(d) && Qn(f)
                    ? 0
                    : Qn(d)
                    ? -1
                    : Qn(f)
                    ? 1
                    : !isNaN(d) && !isNaN(f)
                    ? Number(d) - Number(f)
                    : l.compare(d, f);
        }
        return 0;
    });
}
function By() {
    const e = H([]);
    jd(() => (e.value = []));
    function t(n, a) {
        e.value[a] = n;
    }
    return { refs: e, updateRef: t };
}
const Fy = L(
        {
            activeColor: String,
            start: { type: [Number, String], default: 1 },
            modelValue: { type: Number, default: (e) => e.start },
            disabled: Boolean,
            length: {
                type: [Number, String],
                default: 1,
                validator: (e) => e % 1 === 0,
            },
            totalVisible: [Number, String],
            firstIcon: { type: de, default: "$first" },
            prevIcon: { type: de, default: "$prev" },
            nextIcon: { type: de, default: "$next" },
            lastIcon: { type: de, default: "$last" },
            ariaLabel: {
                type: String,
                default: "$vuetify.pagination.ariaLabel.root",
            },
            pageAriaLabel: {
                type: String,
                default: "$vuetify.pagination.ariaLabel.page",
            },
            currentPageAriaLabel: {
                type: String,
                default: "$vuetify.pagination.ariaLabel.currentPage",
            },
            firstAriaLabel: {
                type: String,
                default: "$vuetify.pagination.ariaLabel.first",
            },
            previousAriaLabel: {
                type: String,
                default: "$vuetify.pagination.ariaLabel.previous",
            },
            nextAriaLabel: {
                type: String,
                default: "$vuetify.pagination.ariaLabel.next",
            },
            lastAriaLabel: {
                type: String,
                default: "$vuetify.pagination.ariaLabel.last",
            },
            ellipsis: { type: String, default: "..." },
            showFirstLastPage: Boolean,
            ...St(),
            ...ie(),
            ...Ze(),
            ..._t(),
            ...je(),
            ...fn(),
            ...Oe({ tag: "nav" }),
            ...Pe(),
            ...ft({ variant: "text" }),
        },
        "VPagination"
    ),
    bs = Y()({
        name: "VPagination",
        props: Fy(),
        emits: {
            "update:modelValue": (e) => !0,
            first: (e) => !0,
            prev: (e) => !0,
            next: (e) => !0,
            last: (e) => !0,
        },
        setup(e, t) {
            let { slots: n, emit: a } = t;
            const r = ve(e, "modelValue"),
                { t: l, n: o } = Ot(),
                { isRtl: s } = ct(),
                { themeClasses: i } = Ie(e),
                { width: c } = vn(),
                u = J(-1);
            Je(void 0, { scoped: !0 });
            const { resizeRef: d } = Nt((C) => {
                    if (!C.length) return;
                    const { target: w, contentRect: A } = C[0],
                        O = w.querySelector(".v-pagination__list > *");
                    if (!O) return;
                    const V = A.width,
                        I =
                            O.offsetWidth +
                            parseFloat(getComputedStyle(O).marginRight) * 2;
                    u.value = g(V, I);
                }),
                f = p(() => parseInt(e.length, 10)),
                v = p(() => parseInt(e.start, 10)),
                h = p(() =>
                    e.totalVisible != null
                        ? parseInt(e.totalVisible, 10)
                        : u.value >= 0
                        ? u.value
                        : g(c.value, 58)
                );
            function g(C, w) {
                const A = e.showFirstLastPage ? 5 : 3;
                return Math.max(0, Math.floor(+((C - w * A) / w).toFixed(2)));
            }
            const y = p(() => {
                if (
                    f.value <= 0 ||
                    isNaN(f.value) ||
                    f.value > Number.MAX_SAFE_INTEGER
                )
                    return [];
                if (h.value <= 0) return [];
                if (h.value === 1) return [r.value];
                if (f.value <= h.value) return Jt(f.value, v.value);
                const C = h.value % 2 === 0,
                    w = C ? h.value / 2 : Math.floor(h.value / 2),
                    A = C ? w : w + 1,
                    O = f.value - w;
                if (A - r.value >= 0)
                    return [
                        ...Jt(Math.max(1, h.value - 1), v.value),
                        e.ellipsis,
                        f.value,
                    ];
                if (r.value - O >= (C ? 1 : 0)) {
                    const V = h.value - 1,
                        I = f.value - V + v.value;
                    return [v.value, e.ellipsis, ...Jt(V, I)];
                } else {
                    const V = Math.max(1, h.value - 3),
                        I =
                            V === 1
                                ? r.value
                                : r.value - Math.ceil(V / 2) + v.value;
                    return [
                        v.value,
                        e.ellipsis,
                        ...Jt(V, I),
                        e.ellipsis,
                        f.value,
                    ];
                }
            });
            function b(C, w, A) {
                C.preventDefault(), (r.value = w), A && a(A, w);
            }
            const { refs: S, updateRef: x } = By();
            Je({
                VPaginationBtn: {
                    color: W(e, "color"),
                    border: W(e, "border"),
                    density: W(e, "density"),
                    size: W(e, "size"),
                    variant: W(e, "variant"),
                    rounded: W(e, "rounded"),
                    elevation: W(e, "elevation"),
                },
            });
            const P = p(() =>
                    y.value.map((C, w) => {
                        const A = (O) => x(O, w);
                        if (typeof C == "string")
                            return {
                                isActive: !1,
                                key: `ellipsis-${w}`,
                                page: C,
                                props: {
                                    ref: A,
                                    ellipsis: !0,
                                    icon: !0,
                                    disabled: !0,
                                },
                            };
                        {
                            const O = C === r.value;
                            return {
                                isActive: O,
                                key: C,
                                page: o(C),
                                props: {
                                    ref: A,
                                    ellipsis: !1,
                                    icon: !0,
                                    disabled: !!e.disabled || +e.length < 2,
                                    color: O ? e.activeColor : e.color,
                                    "aria-current": O,
                                    "aria-label": l(
                                        O
                                            ? e.currentPageAriaLabel
                                            : e.pageAriaLabel,
                                        C
                                    ),
                                    onClick: (V) => b(V, C),
                                },
                            };
                        }
                    })
                ),
                E = p(() => {
                    const C = !!e.disabled || r.value <= v.value,
                        w = !!e.disabled || r.value >= v.value + f.value - 1;
                    return {
                        first: e.showFirstLastPage
                            ? {
                                  icon: s.value ? e.lastIcon : e.firstIcon,
                                  onClick: (A) => b(A, v.value, "first"),
                                  disabled: C,
                                  "aria-label": l(e.firstAriaLabel),
                                  "aria-disabled": C,
                              }
                            : void 0,
                        prev: {
                            icon: s.value ? e.nextIcon : e.prevIcon,
                            onClick: (A) => b(A, r.value - 1, "prev"),
                            disabled: C,
                            "aria-label": l(e.previousAriaLabel),
                            "aria-disabled": C,
                        },
                        next: {
                            icon: s.value ? e.prevIcon : e.nextIcon,
                            onClick: (A) => b(A, r.value + 1, "next"),
                            disabled: w,
                            "aria-label": l(e.nextAriaLabel),
                            "aria-disabled": w,
                        },
                        last: e.showFirstLastPage
                            ? {
                                  icon: s.value ? e.firstIcon : e.lastIcon,
                                  onClick: (A) =>
                                      b(A, v.value + f.value - 1, "last"),
                                  disabled: w,
                                  "aria-label": l(e.lastAriaLabel),
                                  "aria-disabled": w,
                              }
                            : void 0,
                    };
                });
            function k() {
                var w;
                const C = r.value - v.value;
                (w = S.value[C]) == null || w.$el.focus();
            }
            function _(C) {
                C.key === wo.left && !e.disabled && r.value > +e.start
                    ? ((r.value = r.value - 1), we(k))
                    : C.key === wo.right &&
                      !e.disabled &&
                      r.value < v.value + f.value - 1 &&
                      ((r.value = r.value + 1), we(k));
            }
            return (
                ae(() =>
                    m(
                        e.tag,
                        {
                            ref: d,
                            class: ["v-pagination", i.value, e.class],
                            style: e.style,
                            role: "navigation",
                            "aria-label": l(e.ariaLabel),
                            onKeydown: _,
                            "data-test": "v-pagination-root",
                        },
                        {
                            default: () => [
                                m("ul", { class: "v-pagination__list" }, [
                                    e.showFirstLastPage &&
                                        m(
                                            "li",
                                            {
                                                key: "first",
                                                class: "v-pagination__first",
                                                "data-test":
                                                    "v-pagination-first",
                                            },
                                            [
                                                n.first
                                                    ? n.first(E.value.first)
                                                    : m(
                                                          Qe,
                                                          K(
                                                              {
                                                                  _as: "VPaginationBtn",
                                                              },
                                                              E.value.first
                                                          ),
                                                          null
                                                      ),
                                            ]
                                        ),
                                    m(
                                        "li",
                                        {
                                            key: "prev",
                                            class: "v-pagination__prev",
                                            "data-test": "v-pagination-prev",
                                        },
                                        [
                                            n.prev
                                                ? n.prev(E.value.prev)
                                                : m(
                                                      Qe,
                                                      K(
                                                          {
                                                              _as: "VPaginationBtn",
                                                          },
                                                          E.value.prev
                                                      ),
                                                      null
                                                  ),
                                        ]
                                    ),
                                    P.value.map((C, w) =>
                                        m(
                                            "li",
                                            {
                                                key: C.key,
                                                class: [
                                                    "v-pagination__item",
                                                    {
                                                        "v-pagination__item--is-active":
                                                            C.isActive,
                                                    },
                                                ],
                                                "data-test":
                                                    "v-pagination-item",
                                            },
                                            [
                                                n.item
                                                    ? n.item(C)
                                                    : m(
                                                          Qe,
                                                          K(
                                                              {
                                                                  _as: "VPaginationBtn",
                                                              },
                                                              C.props
                                                          ),
                                                          {
                                                              default: () => [
                                                                  C.page,
                                                              ],
                                                          }
                                                      ),
                                            ]
                                        )
                                    ),
                                    m(
                                        "li",
                                        {
                                            key: "next",
                                            class: "v-pagination__next",
                                            "data-test": "v-pagination-next",
                                        },
                                        [
                                            n.next
                                                ? n.next(E.value.next)
                                                : m(
                                                      Qe,
                                                      K(
                                                          {
                                                              _as: "VPaginationBtn",
                                                          },
                                                          E.value.next
                                                      ),
                                                      null
                                                  ),
                                        ]
                                    ),
                                    e.showFirstLastPage &&
                                        m(
                                            "li",
                                            {
                                                key: "last",
                                                class: "v-pagination__last",
                                                "data-test":
                                                    "v-pagination-last",
                                            },
                                            [
                                                n.last
                                                    ? n.last(E.value.last)
                                                    : m(
                                                          Qe,
                                                          K(
                                                              {
                                                                  _as: "VPaginationBtn",
                                                              },
                                                              E.value.last
                                                          ),
                                                          null
                                                      ),
                                            ]
                                        ),
                                ]),
                            ],
                        }
                    )
                ),
                {}
            );
        },
    }),
    Nl = L(
        {
            prevIcon: { type: String, default: "$prev" },
            nextIcon: { type: String, default: "$next" },
            firstIcon: { type: String, default: "$first" },
            lastIcon: { type: String, default: "$last" },
            itemsPerPageText: {
                type: String,
                default: "$vuetify.dataFooter.itemsPerPageText",
            },
            pageText: { type: String, default: "$vuetify.dataFooter.pageText" },
            firstPageLabel: {
                type: String,
                default: "$vuetify.dataFooter.firstPage",
            },
            prevPageLabel: {
                type: String,
                default: "$vuetify.dataFooter.prevPage",
            },
            nextPageLabel: {
                type: String,
                default: "$vuetify.dataFooter.nextPage",
            },
            lastPageLabel: {
                type: String,
                default: "$vuetify.dataFooter.lastPage",
            },
            itemsPerPageOptions: {
                type: Array,
                default: () => [
                    { value: 10, title: "10" },
                    { value: 25, title: "25" },
                    { value: 50, title: "50" },
                    { value: 100, title: "100" },
                    { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" },
                ],
            },
            showCurrentPage: Boolean,
        },
        "VDataTableFooter"
    ),
    ka = Y()({
        name: "VDataTableFooter",
        props: Nl(),
        setup(e, t) {
            let { slots: n } = t;
            const { t: a } = Ot(),
                {
                    page: r,
                    pageCount: l,
                    startIndex: o,
                    stopIndex: s,
                    itemsLength: i,
                    itemsPerPage: c,
                    setItemsPerPage: u,
                } = Ty(),
                d = p(() =>
                    e.itemsPerPageOptions.map((f) =>
                        typeof f == "number"
                            ? {
                                  value: f,
                                  title:
                                      f === -1
                                          ? a(
                                                "$vuetify.dataFooter.itemsPerPageAll"
                                            )
                                          : String(f),
                              }
                            : { ...f, title: a(f.title) }
                    )
                );
            return (
                ae(() => {
                    var v;
                    const f = bs.filterProps(e);
                    return m("div", { class: "v-data-table-footer" }, [
                        (v = n.prepend) == null ? void 0 : v.call(n),
                        m(
                            "div",
                            { class: "v-data-table-footer__items-per-page" },
                            [
                                m("span", null, [a(e.itemsPerPageText)]),
                                m(
                                    my,
                                    {
                                        items: d.value,
                                        modelValue: c.value,
                                        "onUpdate:modelValue": (h) =>
                                            u(Number(h)),
                                        density: "compact",
                                        variant: "outlined",
                                        "hide-details": !0,
                                    },
                                    null
                                ),
                            ]
                        ),
                        m("div", { class: "v-data-table-footer__info" }, [
                            m("div", null, [
                                a(
                                    e.pageText,
                                    i.value ? o.value + 1 : 0,
                                    s.value,
                                    i.value
                                ),
                            ]),
                        ]),
                        m("div", { class: "v-data-table-footer__pagination" }, [
                            m(
                                bs,
                                K(
                                    {
                                        modelValue: r.value,
                                        "onUpdate:modelValue": (h) =>
                                            (r.value = h),
                                        density: "comfortable",
                                        "first-aria-label": e.firstPageLabel,
                                        "last-aria-label": e.lastPageLabel,
                                        length: l.value,
                                        "next-aria-label": e.nextPageLabel,
                                        "previous-aria-label": e.prevPageLabel,
                                        rounded: !0,
                                        "show-first-last-page": !0,
                                        "total-visible": e.showCurrentPage
                                            ? 1
                                            : 0,
                                        variant: "plain",
                                    },
                                    f
                                ),
                                null
                            ),
                        ]),
                    ]);
                }),
                {}
            );
        },
    }),
    jl = Wv(
        {
            align: { type: String, default: "start" },
            fixed: Boolean,
            fixedOffset: [Number, String],
            height: [Number, String],
            lastFixed: Boolean,
            noPadding: Boolean,
            tag: String,
            width: [Number, String],
        },
        (e, t) => {
            let { slots: n } = t;
            const a = e.tag ?? "td";
            return m(
                a,
                {
                    class: [
                        "v-data-table__td",
                        {
                            "v-data-table-column--fixed": e.fixed,
                            "v-data-table-column--last-fixed": e.lastFixed,
                            "v-data-table-column--no-padding": e.noPadding,
                        },
                        `v-data-table-column--align-${e.align}`,
                    ],
                    style: {
                        height: ne(e.height),
                        width: ne(e.width),
                        left: ne(e.fixedOffset || null),
                    },
                },
                {
                    default: () => {
                        var r;
                        return [(r = n.default) == null ? void 0 : r.call(n)];
                    },
                }
            );
        }
    ),
    My = L({ headers: Array }, "DataTable-header"),
    Oc = Symbol.for("vuetify:data-table-headers"),
    Vc = { title: "", sortable: !1 },
    Ny = { ...Vc, width: 48 };
function jy() {
    const t = (
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    ).map((n) => ({ element: n, priority: 0 }));
    return {
        enqueue: (n, a) => {
            let r = !1;
            for (let l = 0; l < t.length; l++)
                if (t[l].priority > a) {
                    t.splice(l, 0, { element: n, priority: a }), (r = !0);
                    break;
                }
            r || t.push({ element: n, priority: a });
        },
        size: () => t.length,
        count: () => {
            let n = 0;
            if (!t.length) return 0;
            const a = Math.floor(t[0].priority);
            for (let r = 0; r < t.length; r++)
                Math.floor(t[r].priority) === a && (n += 1);
            return n;
        },
        dequeue: () => t.shift(),
    };
}
function el(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    if (!e.children) t.push(e);
    else for (const n of e.children) el(n, t);
    return t;
}
function Rc(e) {
    let t =
        arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : new Set();
    for (const n of e) n.key && t.add(n.key), n.children && Rc(n.children, t);
    return t;
}
function Hy(e) {
    if (e.key) {
        if (e.key === "data-table-group") return Vc;
        if (["data-table-expand", "data-table-select"].includes(e.key))
            return Ny;
    }
}
function Hl(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return e.children ? Math.max(t, ...e.children.map((n) => Hl(n, t + 1))) : t;
}
function zy(e) {
    let t = !1;
    function n(l) {
        let o =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (l)
            if ((o && (l.fixed = !0), l.fixed))
                if (l.children)
                    for (let s = l.children.length - 1; s >= 0; s--)
                        n(l.children[s], !0);
                else
                    t
                        ? isNaN(+l.width) && (`${l.key}`, void 0)
                        : (l.lastFixed = !0),
                        (t = !0);
            else if (l.children)
                for (let s = l.children.length - 1; s >= 0; s--)
                    n(l.children[s]);
            else t = !1;
    }
    for (let l = e.length - 1; l >= 0; l--) n(e[l]);
    function a(l) {
        let o =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (!l) return o;
        if (l.children) {
            l.fixedOffset = o;
            for (const s of l.children) o = a(s, o);
        } else
            l.fixed &&
                ((l.fixedOffset = o), (o += parseFloat(l.width || "0") || 0));
        return o;
    }
    let r = 0;
    for (const l of e) r = a(l, r);
}
function Uy(e, t) {
    const n = [];
    let a = 0;
    const r = jy(e);
    for (; r.size() > 0; ) {
        let o = r.count();
        const s = [];
        let i = 1;
        for (; o > 0; ) {
            const { element: c, priority: u } = r.dequeue(),
                d = t - a - Hl(c);
            if (
                (s.push({
                    ...c,
                    rowspan: d ?? 1,
                    colspan: c.children ? el(c).length : 1,
                }),
                c.children)
            )
                for (const f of c.children) {
                    const v = (u % 1) + i / Math.pow(10, a + 2);
                    r.enqueue(f, a + d + v);
                }
            (i += 1), (o -= 1);
        }
        (a += 1), n.push(s);
    }
    return { columns: e.map((o) => el(o)).flat(), headers: n };
}
function $c(e) {
    const t = [];
    for (const n of e) {
        const a = { ...Hy(n), ...n },
            r = a.key ?? (typeof a.value == "string" ? a.value : null),
            l = a.value ?? r ?? null,
            o = {
                ...a,
                key: r,
                value: l,
                sortable: a.sortable ?? (a.key != null || !!a.sort),
                children: a.children ? $c(a.children) : void 0,
            };
        t.push(o);
    }
    return t;
}
function Dc(e, t) {
    const n = H([]),
        a = H([]),
        r = H({}),
        l = H({}),
        o = H({});
    De(() => {
        var g, y, b;
        const c = (
                e.headers ||
                Object.keys(e.items[0] ?? {}).map((S) => ({
                    key: S,
                    title: vl(S),
                }))
            ).slice(),
            u = Rc(c);
        (g = t == null ? void 0 : t.groupBy) != null &&
            g.value.length &&
            !u.has("data-table-group") &&
            c.unshift({ key: "data-table-group", title: "Group" }),
            (y = t == null ? void 0 : t.showSelect) != null &&
                y.value &&
                !u.has("data-table-select") &&
                c.unshift({ key: "data-table-select" }),
            (b = t == null ? void 0 : t.showExpand) != null &&
                b.value &&
                !u.has("data-table-expand") &&
                c.push({ key: "data-table-expand" });
        const d = $c(c);
        zy(d);
        const f = Math.max(...d.map((S) => Hl(S))) + 1,
            v = Uy(d, f);
        (n.value = v.headers), (a.value = v.columns);
        const h = v.headers.flat(1);
        for (const S of h)
            S.key &&
                (S.sortable &&
                    (S.sort && (r.value[S.key] = S.sort),
                    S.sortRaw && (l.value[S.key] = S.sortRaw)),
                S.filter && (o.value[S.key] = S.filter));
    });
    const s = {
        headers: n,
        columns: a,
        sortFunctions: r,
        sortRawFunctions: l,
        filterFunctions: o,
    };
    return pe(Oc, s), s;
}
function Za() {
    const e = ce(Oc);
    if (!e) throw new Error("Missing headers!");
    return e;
}
const Lc = L(
        {
            color: String,
            sticky: Boolean,
            multiSort: Boolean,
            sortAscIcon: { type: de, default: "$sortAsc" },
            sortDescIcon: { type: de, default: "$sortDesc" },
            headerProps: { type: Object },
            ...za(),
        },
        "VDataTableHeaders"
    ),
    Ea = Y()({
        name: "VDataTableHeaders",
        props: Lc(),
        setup(e, t) {
            let { slots: n } = t;
            const { toggleSort: a, sortBy: r, isSorted: l } = $y(),
                {
                    someSelected: o,
                    allSelected: s,
                    selectAll: i,
                    showSelectAll: c,
                } = Ja(),
                { columns: u, headers: d } = Za(),
                { loaderClasses: f } = Wn(e);
            function v(x, P) {
                if (!(!e.sticky && !x.fixed))
                    return {
                        position: "sticky",
                        left: x.fixed ? ne(x.fixedOffset) : void 0,
                        top: e.sticky
                            ? `calc(var(--v-table-header-height) * ${P})`
                            : void 0,
                    };
            }
            function h(x) {
                const P = r.value.find((E) => E.key === x.key);
                return P
                    ? P.order === "asc"
                        ? e.sortAscIcon
                        : e.sortDescIcon
                    : e.sortAscIcon;
            }
            const { backgroundColorClasses: g, backgroundColorStyles: y } = at(
                    e,
                    "color"
                ),
                b = p(() => ({
                    headers: d.value,
                    columns: u.value,
                    toggleSort: a,
                    isSorted: l,
                    sortBy: r.value,
                    someSelected: o.value,
                    allSelected: s.value,
                    selectAll: i,
                    getSortIcon: h,
                })),
                S = (x) => {
                    let { column: P, x: E, y: k } = x;
                    const _ =
                            P.key === "data-table-select" ||
                            P.key === "data-table-expand",
                        C = K(e.headerProps ?? {}, P.headerProps ?? {});
                    return m(
                        jl,
                        K(
                            {
                                tag: "th",
                                align: P.align,
                                class: [
                                    "v-data-table__th",
                                    {
                                        "v-data-table__th--sortable":
                                            P.sortable,
                                        "v-data-table__th--sorted": l(P),
                                        "v-data-table__th--fixed": P.fixed,
                                        "v-data-table__th--sticky": e.sticky,
                                    },
                                    f.value,
                                ],
                                style: {
                                    width: ne(P.width),
                                    minWidth: ne(P.minWidth),
                                    ...v(P, k),
                                },
                                colspan: P.colspan,
                                rowspan: P.rowspan,
                                onClick: P.sortable ? () => a(P) : void 0,
                                fixed: P.fixed,
                                lastFixed: P.lastFixed,
                                noPadding: _,
                            },
                            C
                        ),
                        {
                            default: () => {
                                var O;
                                const w = `header.${P.key}`,
                                    A = {
                                        column: P,
                                        selectAll: i,
                                        isSorted: l,
                                        toggleSort: a,
                                        sortBy: r.value,
                                        someSelected: o.value,
                                        allSelected: s.value,
                                        getSortIcon: h,
                                    };
                                return n[w]
                                    ? n[w](A)
                                    : P.key === "data-table-select"
                                    ? ((O = n["header.data-table-select"]) ==
                                      null
                                          ? void 0
                                          : O.call(n, A)) ??
                                      (c &&
                                          m(
                                              an,
                                              {
                                                  modelValue: s.value,
                                                  indeterminate:
                                                      o.value && !s.value,
                                                  "onUpdate:modelValue": i,
                                              },
                                              null
                                          ))
                                    : m(
                                          "div",
                                          {
                                              class: "v-data-table-header__content",
                                          },
                                          [
                                              m("span", null, [P.title]),
                                              P.sortable &&
                                                  m(
                                                      Ae,
                                                      {
                                                          key: "icon",
                                                          class: "v-data-table-header__sort-icon",
                                                          icon: h(P),
                                                      },
                                                      null
                                                  ),
                                              e.multiSort &&
                                                  l(P) &&
                                                  m(
                                                      "div",
                                                      {
                                                          key: "badge",
                                                          class: [
                                                              "v-data-table-header__sort-badge",
                                                              ...g.value,
                                                          ],
                                                          style: y.value,
                                                      },
                                                      [
                                                          r.value.findIndex(
                                                              (V) =>
                                                                  V.key ===
                                                                  P.key
                                                          ) + 1,
                                                      ]
                                                  ),
                                          ]
                                      );
                            },
                        }
                    );
                };
            ae(() =>
                m(ue, null, [
                    n.headers
                        ? n.headers(b.value)
                        : d.value.map((x, P) =>
                              m("tr", null, [
                                  x.map((E, k) =>
                                      m(S, { column: E, x: k, y: P }, null)
                                  ),
                              ])
                          ),
                    e.loading &&
                        m("tr", { class: "v-data-table-progress" }, [
                            m("th", { colspan: u.value.length }, [
                                m(
                                    Ua,
                                    {
                                        name: "v-data-table-progress",
                                        absolute: !0,
                                        active: !0,
                                        color:
                                            typeof e.loading == "boolean"
                                                ? void 0
                                                : e.loading,
                                        indeterminate: !0,
                                    },
                                    { default: n.loader }
                                ),
                            ]),
                        ]),
                ])
            );
        },
    }),
    Gy = L(
        { item: { type: Object, required: !0 } },
        "VDataTableGroupHeaderRow"
    ),
    Wy = Y()({
        name: "VDataTableGroupHeaderRow",
        props: Gy(),
        setup(e, t) {
            let { slots: n } = t;
            const { isGroupOpen: a, toggleGroup: r, extractRows: l } = hc(),
                { isSelected: o, isSomeSelected: s, select: i } = Ja(),
                { columns: c } = Za(),
                u = p(() => l([e.item]));
            return () =>
                m(
                    "tr",
                    {
                        class: "v-data-table-group-header-row",
                        style: {
                            "--v-data-table-group-header-row-depth":
                                e.item.depth,
                        },
                    },
                    [
                        c.value.map((d) => {
                            var f, v;
                            if (d.key === "data-table-group") {
                                const h = a(e.item) ? "$expand" : "$next",
                                    g = () => r(e.item);
                                return (
                                    ((f = n["data-table-group"]) == null
                                        ? void 0
                                        : f.call(n, {
                                              item: e.item,
                                              count: u.value.length,
                                              props: { icon: h, onClick: g },
                                          })) ??
                                    m(
                                        jl,
                                        {
                                            class: "v-data-table-group-header-row__column",
                                        },
                                        {
                                            default: () => [
                                                m(
                                                    Qe,
                                                    {
                                                        size: "small",
                                                        variant: "text",
                                                        icon: h,
                                                        onClick: g,
                                                    },
                                                    null
                                                ),
                                                m("span", null, [e.item.value]),
                                                m("span", null, [
                                                    ht("("),
                                                    u.value.length,
                                                    ht(")"),
                                                ]),
                                            ],
                                        }
                                    )
                                );
                            }
                            if (d.key === "data-table-select") {
                                const h = o(u.value),
                                    g = s(u.value) && !h,
                                    y = (b) => i(u.value, b);
                                return (
                                    ((v = n["data-table-select"]) == null
                                        ? void 0
                                        : v.call(n, {
                                              props: {
                                                  modelValue: h,
                                                  indeterminate: g,
                                                  "onUpdate:modelValue": y,
                                              },
                                          })) ??
                                    m("td", null, [
                                        m(
                                            an,
                                            {
                                                modelValue: h,
                                                indeterminate: g,
                                                "onUpdate:modelValue": y,
                                            },
                                            null
                                        ),
                                    ])
                                );
                            }
                            return m("td", null, null);
                        }),
                    ]
                );
        },
    }),
    qy = L(
        {
            index: Number,
            item: Object,
            cellProps: [Object, Function],
            onClick: Ne(),
            onContextmenu: Ne(),
            onDblclick: Ne(),
        },
        "VDataTableRow"
    ),
    Ky = Y()({
        name: "VDataTableRow",
        props: qy(),
        setup(e, t) {
            let { slots: n } = t;
            const { isSelected: a, toggleSelect: r } = Ja(),
                { isExpanded: l, toggleExpand: o } = dc(),
                { columns: s } = Za();
            ae(() =>
                m(
                    "tr",
                    {
                        class: [
                            "v-data-table__tr",
                            {
                                "v-data-table__tr--clickable": !!(
                                    e.onClick ||
                                    e.onContextmenu ||
                                    e.onDblclick
                                ),
                            },
                        ],
                        onClick: e.onClick,
                        onContextmenu: e.onContextmenu,
                        onDblclick: e.onDblclick,
                    },
                    [
                        e.item &&
                            s.value.map((i, c) => {
                                const u = e.item,
                                    d = `item.${i.key}`,
                                    f = {
                                        index: e.index,
                                        item: u.raw,
                                        internalItem: u,
                                        value: Mt(u.columns, i.key),
                                        column: i,
                                        isSelected: a,
                                        toggleSelect: r,
                                        isExpanded: l,
                                        toggleExpand: o,
                                    },
                                    v =
                                        typeof e.cellProps == "function"
                                            ? e.cellProps({
                                                  index: f.index,
                                                  item: f.item,
                                                  internalItem: f.internalItem,
                                                  value: f.value,
                                                  column: i,
                                              })
                                            : e.cellProps,
                                    h =
                                        typeof i.cellProps == "function"
                                            ? i.cellProps({
                                                  index: f.index,
                                                  item: f.item,
                                                  internalItem: f.internalItem,
                                                  value: f.value,
                                              })
                                            : i.cellProps;
                                return m(
                                    jl,
                                    K(
                                        {
                                            align: i.align,
                                            fixed: i.fixed,
                                            fixedOffset: i.fixedOffset,
                                            lastFixed: i.lastFixed,
                                            noPadding:
                                                i.key === "data-table-select" ||
                                                i.key === "data-table-expand",
                                            width: i.width,
                                        },
                                        v,
                                        h
                                    ),
                                    {
                                        default: () => {
                                            var g, y;
                                            return n[d]
                                                ? n[d](f)
                                                : i.key === "data-table-select"
                                                ? ((g =
                                                      n[
                                                          "item.data-table-select"
                                                      ]) == null
                                                      ? void 0
                                                      : g.call(n, f)) ??
                                                  m(
                                                      an,
                                                      {
                                                          disabled:
                                                              !u.selectable,
                                                          modelValue: a([u]),
                                                          onClick: eo(
                                                              () => r(u),
                                                              ["stop"]
                                                          ),
                                                      },
                                                      null
                                                  )
                                                : i.key === "data-table-expand"
                                                ? ((y =
                                                      n[
                                                          "item.data-table-expand"
                                                      ]) == null
                                                      ? void 0
                                                      : y.call(n, f)) ??
                                                  m(
                                                      Qe,
                                                      {
                                                          icon: l(u)
                                                              ? "$collapse"
                                                              : "$expand",
                                                          size: "small",
                                                          variant: "text",
                                                          onClick: eo(
                                                              () => o(u),
                                                              ["stop"]
                                                          ),
                                                      },
                                                      null
                                                  )
                                                : ii(f.value);
                                        },
                                    }
                                );
                            }),
                    ]
                )
            );
        },
    }),
    Bc = L(
        {
            loading: [Boolean, String],
            loadingText: {
                type: String,
                default: "$vuetify.dataIterator.loadingText",
            },
            hideNoData: Boolean,
            items: { type: Array, default: () => [] },
            noDataText: { type: String, default: "$vuetify.noDataText" },
            rowProps: [Object, Function],
            cellProps: [Object, Function],
        },
        "VDataTableRows"
    ),
    Aa = Y()({
        name: "VDataTableRows",
        inheritAttrs: !1,
        props: Bc(),
        setup(e, t) {
            let { attrs: n, slots: a } = t;
            const { columns: r } = Za(),
                { expandOnClick: l, toggleExpand: o, isExpanded: s } = dc(),
                { isSelected: i, toggleSelect: c } = Ja(),
                { toggleGroup: u, isGroupOpen: d } = hc(),
                { t: f } = Ot();
            return (
                ae(() => {
                    var v, h;
                    return e.loading && (!e.items.length || a.loading)
                        ? m(
                              "tr",
                              {
                                  class: "v-data-table-rows-loading",
                                  key: "loading",
                              },
                              [
                                  m("td", { colspan: r.value.length }, [
                                      ((v = a.loading) == null
                                          ? void 0
                                          : v.call(a)) ?? f(e.loadingText),
                                  ]),
                              ]
                          )
                        : !e.loading && !e.items.length && !e.hideNoData
                        ? m(
                              "tr",
                              {
                                  class: "v-data-table-rows-no-data",
                                  key: "no-data",
                              },
                              [
                                  m("td", { colspan: r.value.length }, [
                                      ((h = a["no-data"]) == null
                                          ? void 0
                                          : h.call(a)) ?? f(e.noDataText),
                                  ]),
                              ]
                          )
                        : m(ue, null, [
                              e.items.map((g, y) => {
                                  var x;
                                  if (g.type === "group") {
                                      const P = {
                                          index: y,
                                          item: g,
                                          columns: r.value,
                                          isExpanded: s,
                                          toggleExpand: o,
                                          isSelected: i,
                                          toggleSelect: c,
                                          toggleGroup: u,
                                          isGroupOpen: d,
                                      };
                                      return a["group-header"]
                                          ? a["group-header"](P)
                                          : m(
                                                Wy,
                                                K(
                                                    {
                                                        key: `group-header_${g.id}`,
                                                        item: g,
                                                    },
                                                    jo(
                                                        n,
                                                        ":group-header",
                                                        () => P
                                                    )
                                                ),
                                                a
                                            );
                                  }
                                  const b = {
                                          index: y,
                                          item: g.raw,
                                          internalItem: g,
                                          columns: r.value,
                                          isExpanded: s,
                                          toggleExpand: o,
                                          isSelected: i,
                                          toggleSelect: c,
                                      },
                                      S = {
                                          ...b,
                                          props: K(
                                              {
                                                  key: `item_${
                                                      g.key ?? g.index
                                                  }`,
                                                  onClick: l.value
                                                      ? () => {
                                                            o(g);
                                                        }
                                                      : void 0,
                                                  index: y,
                                                  item: g,
                                                  cellProps: e.cellProps,
                                              },
                                              jo(n, ":row", () => b),
                                              typeof e.rowProps == "function"
                                                  ? e.rowProps({
                                                        item: b.item,
                                                        index: b.index,
                                                        internalItem:
                                                            b.internalItem,
                                                    })
                                                  : e.rowProps
                                          ),
                                      };
                                  return m(ue, { key: S.props.key }, [
                                      a.item ? a.item(S) : m(Ky, S.props, a),
                                      s(g) &&
                                          ((x = a["expanded-row"]) == null
                                              ? void 0
                                              : x.call(a, b)),
                                  ]);
                              }),
                          ]);
                }),
                {}
            );
        },
    }),
    Fc = L(
        {
            fixedHeader: Boolean,
            fixedFooter: Boolean,
            height: [Number, String],
            hover: Boolean,
            ...ie(),
            ...Ze(),
            ...Oe(),
            ...Pe(),
        },
        "VTable"
    ),
    Ta = Y()({
        name: "VTable",
        props: Fc(),
        setup(e, t) {
            let { slots: n, emit: a } = t;
            const { themeClasses: r } = Ie(e),
                { densityClasses: l } = dt(e);
            return (
                ae(() =>
                    m(
                        e.tag,
                        {
                            class: [
                                "v-table",
                                {
                                    "v-table--fixed-height": !!e.height,
                                    "v-table--fixed-header": e.fixedHeader,
                                    "v-table--fixed-footer": e.fixedFooter,
                                    "v-table--has-top": !!n.top,
                                    "v-table--has-bottom": !!n.bottom,
                                    "v-table--hover": e.hover,
                                },
                                r.value,
                                l.value,
                                e.class,
                            ],
                            style: e.style,
                        },
                        {
                            default: () => {
                                var o, s, i;
                                return [
                                    (o = n.top) == null ? void 0 : o.call(n),
                                    n.default
                                        ? m(
                                              "div",
                                              {
                                                  class: "v-table__wrapper",
                                                  style: {
                                                      height: ne(e.height),
                                                  },
                                              },
                                              [m("table", null, [n.default()])]
                                          )
                                        : (s = n.wrapper) == null
                                        ? void 0
                                        : s.call(n),
                                    (i = n.bottom) == null ? void 0 : i.call(n),
                                ];
                            },
                        }
                    )
                ),
                {}
            );
        },
    }),
    Yy = L(
        {
            items: { type: Array, default: () => [] },
            itemValue: { type: [String, Array, Function], default: "id" },
            itemSelectable: { type: [String, Array, Function], default: null },
            rowProps: [Object, Function],
            cellProps: [Object, Function],
            returnObject: Boolean,
        },
        "DataTable-items"
    );
function Xy(e, t, n, a) {
    const r = e.returnObject ? t : Me(t, e.itemValue),
        l = Me(t, e.itemSelectable, !0),
        o = a.reduce(
            (s, i) => (i.key != null && (s[i.key] = Me(t, i.value)), s),
            {}
        );
    return {
        type: "item",
        key: e.returnObject ? Me(t, e.itemValue) : r,
        index: n,
        value: r,
        selectable: l,
        columns: o,
        raw: t,
    };
}
function Jy(e, t, n) {
    return t.map((a, r) => Xy(e, a, r, n));
}
function Mc(e, t) {
    return { items: p(() => Jy(e, e.items, t.value)) };
}
const Nc = L(
        {
            ...Bc(),
            width: [String, Number],
            search: String,
            ...ky(),
            ...Ey(),
            ...My(),
            ...Yy(),
            ...Vy(),
            ...Ry(),
            ...Lc(),
            ...Fc(),
        },
        "DataTable"
    ),
    Zy = L({ ...Sc(), ...Nc(), ...gy(), ...Nl() }, "VDataTable"),
    Qy = Y()({
        name: "VDataTable",
        props: Zy(),
        emits: {
            "update:modelValue": (e) => !0,
            "update:page": (e) => !0,
            "update:itemsPerPage": (e) => !0,
            "update:sortBy": (e) => !0,
            "update:options": (e) => !0,
            "update:groupBy": (e) => !0,
            "update:expanded": (e) => !0,
            "update:currentItems": (e) => !0,
        },
        setup(e, t) {
            let { attrs: n, slots: a } = t;
            const { groupBy: r } = vc(e),
                { sortBy: l, multiSort: o, mustSort: s } = Tc(e),
                { page: i, itemsPerPage: c } = wc(e),
                {
                    columns: u,
                    headers: d,
                    sortFunctions: f,
                    sortRawFunctions: v,
                    filterFunctions: h,
                } = Dc(e, {
                    groupBy: r,
                    showSelect: W(e, "showSelect"),
                    showExpand: W(e, "showExpand"),
                }),
                { items: g } = Mc(e, u),
                y = W(e, "search"),
                { filteredItems: b } = py(e, g, y, {
                    transform: (X) => X.columns,
                    customKeyFilter: h,
                }),
                { toggleSort: S } = Ic({
                    sortBy: l,
                    multiSort: o,
                    mustSort: s,
                    page: i,
                }),
                {
                    sortByWithGroups: x,
                    opened: P,
                    extractRows: E,
                    isGroupOpen: k,
                    toggleGroup: _,
                } = mc({ groupBy: r, sortBy: l }),
                { sortedItems: C } = Dy(e, b, x, f, v),
                { flatItems: w } = pc(C, r, P),
                A = p(() => w.value.length),
                {
                    startIndex: O,
                    stopIndex: V,
                    pageCount: I,
                    setItemsPerPage: D,
                } = Cc({ page: i, itemsPerPage: c, itemsLength: A }),
                { paginatedItems: M } = Iy({
                    items: w,
                    startIndex: O,
                    stopIndex: V,
                    itemsPerPage: c,
                }),
                U = p(() => E(M.value)),
                {
                    isSelected: re,
                    select: R,
                    selectAll: B,
                    toggleSelect: N,
                    someSelected: F,
                    allSelected: G,
                } = Ec(e, { allItems: g, currentPage: U }),
                { isExpanded: j, toggleExpand: te } = cc(e);
            bc({ page: i, itemsPerPage: c, sortBy: l, groupBy: r, search: y }),
                Je({
                    VDataTableRows: {
                        hideNoData: W(e, "hideNoData"),
                        noDataText: W(e, "noDataText"),
                        loading: W(e, "loading"),
                        loadingText: W(e, "loadingText"),
                    },
                });
            const le = p(() => ({
                page: i.value,
                itemsPerPage: c.value,
                sortBy: l.value,
                pageCount: I.value,
                toggleSort: S,
                setItemsPerPage: D,
                someSelected: F.value,
                allSelected: G.value,
                isSelected: re,
                select: R,
                selectAll: B,
                toggleSelect: N,
                isExpanded: j,
                toggleExpand: te,
                isGroupOpen: k,
                toggleGroup: _,
                items: U.value.map((X) => X.raw),
                internalItems: U.value,
                groupedItems: M.value,
                columns: u.value,
                headers: d.value,
            }));
            return (
                ae(() => {
                    const X = ka.filterProps(e),
                        T = Ea.filterProps(e),
                        q = Aa.filterProps(e),
                        z = Ta.filterProps(e);
                    return m(
                        Ta,
                        K(
                            {
                                class: [
                                    "v-data-table",
                                    {
                                        "v-data-table--show-select":
                                            e.showSelect,
                                        "v-data-table--loading": e.loading,
                                    },
                                    e.class,
                                ],
                                style: e.style,
                            },
                            z
                        ),
                        {
                            top: () => {
                                var Q;
                                return (Q = a.top) == null
                                    ? void 0
                                    : Q.call(a, le.value);
                            },
                            default: () => {
                                var Q, me, be, se, oe, Ce;
                                return a.default
                                    ? a.default(le.value)
                                    : m(ue, null, [
                                          (Q = a.colgroup) == null
                                              ? void 0
                                              : Q.call(a, le.value),
                                          m("thead", null, [m(Ea, T, a)]),
                                          (me = a.thead) == null
                                              ? void 0
                                              : me.call(a, le.value),
                                          m("tbody", null, [
                                              (be = a["body.prepend"]) == null
                                                  ? void 0
                                                  : be.call(a, le.value),
                                              a.body
                                                  ? a.body(le.value)
                                                  : m(
                                                        Aa,
                                                        K(n, q, {
                                                            items: M.value,
                                                        }),
                                                        a
                                                    ),
                                              (se = a["body.append"]) == null
                                                  ? void 0
                                                  : se.call(a, le.value),
                                          ]),
                                          (oe = a.tbody) == null
                                              ? void 0
                                              : oe.call(a, le.value),
                                          (Ce = a.tfoot) == null
                                              ? void 0
                                              : Ce.call(a, le.value),
                                      ]);
                            },
                            bottom: () =>
                                a.bottom
                                    ? a.bottom(le.value)
                                    : m(ue, null, [
                                          m(Pa, null, null),
                                          m(ka, X, {
                                              prepend: a["footer.prepend"],
                                          }),
                                      ]),
                        }
                    );
                }),
                {}
            );
        },
    }),
    ep = L(
        {
            itemsLength: { type: [Number, String], required: !0 },
            ...Sc(),
            ...Nc(),
            ...Nl(),
        },
        "VDataTableServer"
    ),
    tp = Y()({
        name: "VDataTableServer",
        props: ep(),
        emits: {
            "update:modelValue": (e) => !0,
            "update:page": (e) => !0,
            "update:itemsPerPage": (e) => !0,
            "update:sortBy": (e) => !0,
            "update:options": (e) => !0,
            "update:expanded": (e) => !0,
            "update:groupBy": (e) => !0,
        },
        setup(e, t) {
            let { attrs: n, slots: a } = t;
            const { groupBy: r } = vc(e),
                { sortBy: l, multiSort: o, mustSort: s } = Tc(e),
                { page: i, itemsPerPage: c } = wc(e),
                u = p(() => parseInt(e.itemsLength, 10)),
                { columns: d, headers: f } = Dc(e, {
                    groupBy: r,
                    showSelect: W(e, "showSelect"),
                    showExpand: W(e, "showExpand"),
                }),
                { items: v } = Mc(e, d),
                { toggleSort: h } = Ic({
                    sortBy: l,
                    multiSort: o,
                    mustSort: s,
                    page: i,
                }),
                {
                    opened: g,
                    isGroupOpen: y,
                    toggleGroup: b,
                    extractRows: S,
                } = mc({ groupBy: r, sortBy: l }),
                { pageCount: x, setItemsPerPage: P } = Cc({
                    page: i,
                    itemsPerPage: c,
                    itemsLength: u,
                }),
                { flatItems: E } = pc(v, r, g),
                {
                    isSelected: k,
                    select: _,
                    selectAll: C,
                    toggleSelect: w,
                    someSelected: A,
                    allSelected: O,
                } = Ec(e, { allItems: v, currentPage: v }),
                { isExpanded: V, toggleExpand: I } = cc(e),
                D = p(() => S(v.value));
            bc({
                page: i,
                itemsPerPage: c,
                sortBy: l,
                groupBy: r,
                search: W(e, "search"),
            }),
                pe("v-data-table", { toggleSort: h, sortBy: l }),
                Je({
                    VDataTableRows: {
                        hideNoData: W(e, "hideNoData"),
                        noDataText: W(e, "noDataText"),
                        loading: W(e, "loading"),
                        loadingText: W(e, "loadingText"),
                    },
                });
            const M = p(() => ({
                page: i.value,
                itemsPerPage: c.value,
                sortBy: l.value,
                pageCount: x.value,
                toggleSort: h,
                setItemsPerPage: P,
                someSelected: A.value,
                allSelected: O.value,
                isSelected: k,
                select: _,
                selectAll: C,
                toggleSelect: w,
                isExpanded: V,
                toggleExpand: I,
                isGroupOpen: y,
                toggleGroup: b,
                items: D.value.map((U) => U.raw),
                internalItems: D.value,
                groupedItems: E.value,
                columns: d.value,
                headers: f.value,
            }));
            ae(() => {
                const U = ka.filterProps(e),
                    re = Ea.filterProps(e),
                    R = Aa.filterProps(e),
                    B = Ta.filterProps(e);
                return m(
                    Ta,
                    K(
                        {
                            class: [
                                "v-data-table",
                                { "v-data-table--loading": e.loading },
                                e.class,
                            ],
                            style: e.style,
                        },
                        B
                    ),
                    {
                        top: () => {
                            var N;
                            return (N = a.top) == null
                                ? void 0
                                : N.call(a, M.value);
                        },
                        default: () => {
                            var N, F, G, j, te, le;
                            return a.default
                                ? a.default(M.value)
                                : m(ue, null, [
                                      (N = a.colgroup) == null
                                          ? void 0
                                          : N.call(a, M.value),
                                      m(
                                          "thead",
                                          {
                                              class: "v-data-table__thead",
                                              role: "rowgroup",
                                          },
                                          [
                                              m(
                                                  Ea,
                                                  K(re, {
                                                      sticky: e.fixedHeader,
                                                  }),
                                                  a
                                              ),
                                          ]
                                      ),
                                      (F = a.thead) == null
                                          ? void 0
                                          : F.call(a, M.value),
                                      m(
                                          "tbody",
                                          {
                                              class: "v-data-table__tbody",
                                              role: "rowgroup",
                                          },
                                          [
                                              (G = a["body.prepend"]) == null
                                                  ? void 0
                                                  : G.call(a, M.value),
                                              a.body
                                                  ? a.body(M.value)
                                                  : m(
                                                        Aa,
                                                        K(n, R, {
                                                            items: E.value,
                                                        }),
                                                        a
                                                    ),
                                              (j = a["body.append"]) == null
                                                  ? void 0
                                                  : j.call(a, M.value),
                                          ]
                                      ),
                                      (te = a.tbody) == null
                                          ? void 0
                                          : te.call(a, M.value),
                                      (le = a.tfoot) == null
                                          ? void 0
                                          : le.call(a, M.value),
                                  ]);
                        },
                        bottom: () =>
                            a.bottom
                                ? a.bottom(M.value)
                                : m(ka, U, { prepend: a["footer.prepend"] }),
                    }
                );
            });
        },
    }),
    np = L(
        {
            chips: Boolean,
            counter: Boolean,
            counterSizeString: {
                type: String,
                default: "$vuetify.fileInput.counterSize",
            },
            counterString: {
                type: String,
                default: "$vuetify.fileInput.counter",
            },
            multiple: Boolean,
            showSize: {
                type: [Boolean, Number, String],
                default: !1,
                validator: (e) =>
                    typeof e == "boolean" || [1e3, 1024].includes(Number(e)),
            },
            ...gn({ prependIcon: "$file" }),
            modelValue: {
                type: Array,
                default: () => [],
                validator: (e) =>
                    $e(e).every((t) => t != null && typeof t == "object"),
            },
            ...Ya({ clearable: !0 }),
        },
        "VFileInput"
    ),
    ap = Y()({
        name: "VFileInput",
        inheritAttrs: !1,
        props: np(),
        emits: {
            "click:control": (e) => !0,
            "mousedown:control": (e) => !0,
            "update:focused": (e) => !0,
            "update:modelValue": (e) => !0,
        },
        setup(e, t) {
            let { attrs: n, emit: a, slots: r } = t;
            const { t: l } = Ot(),
                o = ve(e, "modelValue"),
                { isFocused: s, focus: i, blur: c } = hn(e),
                u = p(() =>
                    typeof e.showSize != "boolean" ? e.showSize : void 0
                ),
                d = p(() =>
                    (o.value ?? []).reduce((w, A) => {
                        let { size: O = 0 } = A;
                        return w + O;
                    }, 0)
                ),
                f = p(() => ko(d.value, u.value)),
                v = p(() =>
                    (o.value ?? []).map((w) => {
                        const { name: A = "", size: O = 0 } = w;
                        return e.showSize ? `${A} (${ko(O, u.value)})` : A;
                    })
                ),
                h = p(() => {
                    var A;
                    const w = ((A = o.value) == null ? void 0 : A.length) ?? 0;
                    return e.showSize
                        ? l(e.counterSizeString, w, f.value)
                        : l(e.counterString, w);
                }),
                g = H(),
                y = H(),
                b = H(),
                S = p(() => s.value || e.active),
                x = p(() => ["plain", "underlined"].includes(e.variant));
            function P() {
                var w;
                b.value !== document.activeElement &&
                    ((w = b.value) == null || w.focus()),
                    s.value || i();
            }
            function E(w) {
                var A;
                (A = b.value) == null || A.click();
            }
            function k(w) {
                a("mousedown:control", w);
            }
            function _(w) {
                var A;
                (A = b.value) == null || A.click(), a("click:control", w);
            }
            function C(w) {
                w.stopPropagation(),
                    P(),
                    we(() => {
                        (o.value = []), wl(e["onClick:clear"], w);
                    });
            }
            return (
                Z(o, (w) => {
                    (!Array.isArray(w) || !w.length) &&
                        b.value &&
                        (b.value.value = "");
                }),
                ae(() => {
                    const w = !!(r.counter || e.counter),
                        A = !!(w || r.details),
                        [O, V] = sn(n),
                        { modelValue: I, ...D } = st.filterProps(e),
                        M = Ml(e);
                    return m(
                        st,
                        K(
                            {
                                ref: g,
                                modelValue: o.value,
                                "onUpdate:modelValue": (U) => (o.value = U),
                                class: [
                                    "v-file-input",
                                    {
                                        "v-file-input--chips": !!e.chips,
                                        "v-input--plain-underlined": x.value,
                                    },
                                    e.class,
                                ],
                                style: e.style,
                                "onClick:prepend": E,
                            },
                            O,
                            D,
                            { centerAffix: !x.value, focused: s.value }
                        ),
                        {
                            ...r,
                            default: (U) => {
                                let {
                                    id: re,
                                    isDisabled: R,
                                    isDirty: B,
                                    isReadonly: N,
                                    isValid: F,
                                } = U;
                                return m(
                                    Xa,
                                    K(
                                        {
                                            ref: y,
                                            "prepend-icon": e.prependIcon,
                                            onMousedown: k,
                                            onClick: _,
                                            "onClick:clear": C,
                                            "onClick:prependInner":
                                                e["onClick:prependInner"],
                                            "onClick:appendInner":
                                                e["onClick:appendInner"],
                                        },
                                        M,
                                        {
                                            id: re.value,
                                            active: S.value || B.value,
                                            dirty: B.value,
                                            disabled: R.value,
                                            focused: s.value,
                                            error: F.value === !1,
                                        }
                                    ),
                                    {
                                        ...r,
                                        default: (G) => {
                                            var le;
                                            let {
                                                props: { class: j, ...te },
                                            } = G;
                                            return m(ue, null, [
                                                m(
                                                    "input",
                                                    K(
                                                        {
                                                            ref: b,
                                                            type: "file",
                                                            readonly: N.value,
                                                            disabled: R.value,
                                                            multiple:
                                                                e.multiple,
                                                            name: e.name,
                                                            onClick: (X) => {
                                                                X.stopPropagation(),
                                                                    N.value &&
                                                                        X.preventDefault(),
                                                                    P();
                                                            },
                                                            onChange: (X) => {
                                                                if (!X.target)
                                                                    return;
                                                                const T =
                                                                    X.target;
                                                                o.value = [
                                                                    ...(T.files ??
                                                                        []),
                                                                ];
                                                            },
                                                            onFocus: P,
                                                            onBlur: c,
                                                        },
                                                        te,
                                                        V
                                                    ),
                                                    null
                                                ),
                                                m("div", { class: j }, [
                                                    !!(
                                                        (le = o.value) !=
                                                            null && le.length
                                                    ) &&
                                                        (r.selection
                                                            ? r.selection({
                                                                  fileNames:
                                                                      v.value,
                                                                  totalBytes:
                                                                      d.value,
                                                                  totalBytesReadable:
                                                                      f.value,
                                                              })
                                                            : e.chips
                                                            ? v.value.map((X) =>
                                                                  m(
                                                                      Yu,
                                                                      {
                                                                          key: X,
                                                                          size: "small",
                                                                          color: e.color,
                                                                      },
                                                                      {
                                                                          default:
                                                                              () => [
                                                                                  X,
                                                                              ],
                                                                      }
                                                                  )
                                                              )
                                                            : v.value.join(
                                                                  ", "
                                                              )),
                                                ]),
                                            ]);
                                        },
                                    }
                                );
                            },
                            details: A
                                ? (U) => {
                                      var re, R;
                                      return m(ue, null, [
                                          (re = r.details) == null
                                              ? void 0
                                              : re.call(r, U),
                                          w &&
                                              m(ue, null, [
                                                  m("span", null, null),
                                                  m(
                                                      Fl,
                                                      {
                                                          active: !!(
                                                              (R = o.value) !=
                                                                  null &&
                                                              R.length
                                                          ),
                                                          value: h.value,
                                                      },
                                                      r.counter
                                                  ),
                                              ]),
                                      ]);
                                  }
                                : void 0,
                        }
                    );
                }),
                mn({}, g, y, b)
            );
        },
    }),
    rp = L({ scrollable: Boolean, ...ie(), ...Oe({ tag: "main" }) }, "VMain"),
    lp = Y()({
        name: "VMain",
        props: rp(),
        setup(e, t) {
            let { slots: n } = t;
            const { mainStyles: a } = Zv(),
                { ssrBootStyles: r } = Ka();
            return (
                ae(() =>
                    m(
                        e.tag,
                        {
                            class: [
                                "v-main",
                                { "v-main--scrollable": e.scrollable },
                                e.class,
                            ],
                            style: [a.value, r.value, e.style],
                        },
                        {
                            default: () => {
                                var l, o;
                                return [
                                    e.scrollable
                                        ? m(
                                              "div",
                                              { class: "v-main__scroller" },
                                              [
                                                  (l = n.default) == null
                                                      ? void 0
                                                      : l.call(n),
                                              ]
                                          )
                                        : (o = n.default) == null
                                        ? void 0
                                        : o.call(n),
                                ];
                            },
                        }
                    )
                ),
                {}
            );
        },
    });
function op(e) {
    let { rootEl: t, isSticky: n, layoutItemStyles: a } = e;
    const r = J(!1),
        l = J(0),
        o = p(() => {
            const c = typeof r.value == "boolean" ? "top" : r.value;
            return [
                n.value
                    ? { top: "auto", bottom: "auto", height: void 0 }
                    : void 0,
                r.value ? { [c]: ne(l.value) } : { top: a.value.top },
            ];
        });
    Ue(() => {
        Z(
            n,
            (c) => {
                c
                    ? window.addEventListener("scroll", i, { passive: !0 })
                    : window.removeEventListener("scroll", i);
            },
            { immediate: !0 }
        );
    }),
        Re(() => {
            window.removeEventListener("scroll", i);
        });
    let s = 0;
    function i() {
        const c = s > window.scrollY ? "up" : "down",
            u = t.value.getBoundingClientRect(),
            d = parseFloat(a.value.top ?? 0),
            f = window.scrollY - Math.max(0, l.value - d),
            v =
                u.height +
                Math.max(l.value, d) -
                window.scrollY -
                window.innerHeight,
            h =
                parseFloat(
                    getComputedStyle(t.value).getPropertyValue(
                        "--v-body-scroll-y"
                    )
                ) || 0;
        u.height < window.innerHeight - d
            ? ((r.value = "top"), (l.value = d))
            : (c === "up" && r.value === "bottom") ||
              (c === "down" && r.value === "top")
            ? ((l.value = window.scrollY + u.top - h), (r.value = !0))
            : c === "down" && v <= 0
            ? ((l.value = 0), (r.value = "bottom"))
            : c === "up" &&
              f <= 0 &&
              (h
                  ? r.value !== "top" &&
                    ((l.value = -f + h + d), (r.value = "top"))
                  : ((l.value = u.top + f), (r.value = "top"))),
            (s = window.scrollY);
    }
    return { isStuck: r, stickyStyles: o };
}
const sp = 100,
    ip = 20;
function Ss(e) {
    return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function _s(e) {
    if (e.length < 2) return 0;
    if (e.length === 2)
        return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
    let t = 0;
    for (let n = e.length - 1; n > 0; n--) {
        if (e[n].t === e[n - 1].t) continue;
        const a = Ss(t),
            r = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
        (t += (r - a) * Math.abs(r)), n === e.length - 1 && (t *= 0.5);
    }
    return Ss(t) * 1e3;
}
function up() {
    const e = {};
    function t(r) {
        Array.from(r.changedTouches).forEach((l) => {
            (e[l.identifier] ?? (e[l.identifier] = new hv(ip))).push([
                r.timeStamp,
                l,
            ]);
        });
    }
    function n(r) {
        Array.from(r.changedTouches).forEach((l) => {
            delete e[l.identifier];
        });
    }
    function a(r) {
        var c;
        const l = (c = e[r]) == null ? void 0 : c.values().reverse();
        if (!l) throw new Error(`No samples for touch id ${r}`);
        const o = l[0],
            s = [],
            i = [];
        for (const u of l) {
            if (o[0] - u[0] > sp) break;
            s.push({ t: u[0], d: u[1].clientX }),
                i.push({ t: u[0], d: u[1].clientY });
        }
        return {
            x: _s(s),
            y: _s(i),
            get direction() {
                const { x: u, y: d } = this,
                    [f, v] = [Math.abs(u), Math.abs(d)];
                return f > v && u >= 0
                    ? "right"
                    : f > v && u <= 0
                    ? "left"
                    : v > f && d >= 0
                    ? "down"
                    : v > f && d <= 0
                    ? "up"
                    : cp();
            },
        };
    }
    return { addMovement: t, endTouch: n, getVelocity: a };
}
function cp() {
    throw new Error();
}
function dp(e) {
    let {
        isActive: t,
        isTemporary: n,
        width: a,
        touchless: r,
        position: l,
    } = e;
    Ue(() => {
        window.addEventListener("touchstart", b, { passive: !0 }),
            window.addEventListener("touchmove", S, { passive: !1 }),
            window.addEventListener("touchend", x, { passive: !0 });
    }),
        Re(() => {
            window.removeEventListener("touchstart", b),
                window.removeEventListener("touchmove", S),
                window.removeEventListener("touchend", x);
        });
    const o = p(() => ["left", "right"].includes(l.value)),
        { addMovement: s, endTouch: i, getVelocity: c } = up();
    let u = !1;
    const d = J(!1),
        f = J(0),
        v = J(0);
    let h;
    function g(E, k) {
        return (
            (l.value === "left"
                ? E
                : l.value === "right"
                ? document.documentElement.clientWidth - E
                : l.value === "top"
                ? E
                : l.value === "bottom"
                ? document.documentElement.clientHeight - E
                : Yt()) - (k ? a.value : 0)
        );
    }
    function y(E) {
        let k =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        const _ =
            l.value === "left"
                ? (E - v.value) / a.value
                : l.value === "right"
                ? (document.documentElement.clientWidth - E - v.value) / a.value
                : l.value === "top"
                ? (E - v.value) / a.value
                : l.value === "bottom"
                ? (document.documentElement.clientHeight - E - v.value) /
                  a.value
                : Yt();
        return k ? Math.max(0, Math.min(1, _)) : _;
    }
    function b(E) {
        if (r.value) return;
        const k = E.changedTouches[0].clientX,
            _ = E.changedTouches[0].clientY,
            C = 25,
            w =
                l.value === "left"
                    ? k < C
                    : l.value === "right"
                    ? k > document.documentElement.clientWidth - C
                    : l.value === "top"
                    ? _ < C
                    : l.value === "bottom"
                    ? _ > document.documentElement.clientHeight - C
                    : Yt(),
            A =
                t.value &&
                (l.value === "left"
                    ? k < a.value
                    : l.value === "right"
                    ? k > document.documentElement.clientWidth - a.value
                    : l.value === "top"
                    ? _ < a.value
                    : l.value === "bottom"
                    ? _ > document.documentElement.clientHeight - a.value
                    : Yt());
        (w || A || (t.value && n.value)) &&
            ((u = !0),
            (h = [k, _]),
            (v.value = g(o.value ? k : _, t.value)),
            (f.value = y(o.value ? k : _)),
            i(E),
            s(E));
    }
    function S(E) {
        const k = E.changedTouches[0].clientX,
            _ = E.changedTouches[0].clientY;
        if (u) {
            if (!E.cancelable) {
                u = !1;
                return;
            }
            const w = Math.abs(k - h[0]),
                A = Math.abs(_ - h[1]);
            (o.value ? w > A && w > 3 : A > w && A > 3)
                ? ((d.value = !0), (u = !1))
                : (o.value ? A : w) > 3 && (u = !1);
        }
        if (!d.value) return;
        E.preventDefault(), s(E);
        const C = y(o.value ? k : _, !1);
        (f.value = Math.max(0, Math.min(1, C))),
            C > 1
                ? (v.value = g(o.value ? k : _, !0))
                : C < 0 && (v.value = g(o.value ? k : _, !1));
    }
    function x(E) {
        if (((u = !1), !d.value)) return;
        s(E), (d.value = !1);
        const k = c(E.changedTouches[0].identifier),
            _ = Math.abs(k.x),
            C = Math.abs(k.y);
        (o.value ? _ > C && _ > 400 : C > _ && C > 3)
            ? (t.value =
                  k.direction ===
                  ({ left: "right", right: "left", top: "down", bottom: "up" }[
                      l.value
                  ] || Yt()))
            : (t.value = f.value > 0.5);
    }
    const P = p(() =>
        d.value
            ? {
                  transform:
                      l.value === "left"
                          ? `translateX(calc(-100% + ${f.value * a.value}px))`
                          : l.value === "right"
                          ? `translateX(calc(100% - ${f.value * a.value}px))`
                          : l.value === "top"
                          ? `translateY(calc(-100% + ${f.value * a.value}px))`
                          : l.value === "bottom"
                          ? `translateY(calc(100% - ${f.value * a.value}px))`
                          : Yt(),
                  transition: "none",
              }
            : void 0
    );
    return { isDragging: d, dragProgress: f, dragStyles: P };
}
function Yt() {
    throw new Error();
}
const fp = ["start", "end", "left", "right", "top", "bottom"],
    vp = L(
        {
            color: String,
            disableResizeWatcher: Boolean,
            disableRouteWatcher: Boolean,
            expandOnHover: Boolean,
            floating: Boolean,
            modelValue: { type: Boolean, default: null },
            permanent: Boolean,
            rail: { type: Boolean, default: null },
            railWidth: { type: [Number, String], default: 56 },
            scrim: { type: [Boolean, String], default: !0 },
            image: String,
            temporary: Boolean,
            touchless: Boolean,
            width: { type: [Number, String], default: 256 },
            location: {
                type: String,
                default: "start",
                validator: (e) => fp.includes(e),
            },
            sticky: Boolean,
            ...St(),
            ...ie(),
            ..._u(),
            ..._t(),
            ...Gi(),
            ...je(),
            ...Oe({ tag: "nav" }),
            ...Pe(),
        },
        "VNavigationDrawer"
    ),
    jc = Y()({
        name: "VNavigationDrawer",
        props: vp(),
        emits: { "update:modelValue": (e) => !0, "update:rail": (e) => !0 },
        setup(e, t) {
            let { attrs: n, emit: a, slots: r } = t;
            const { isRtl: l } = ct(),
                { themeClasses: o } = Ie(e),
                { borderClasses: s } = Vt(e),
                { backgroundColorClasses: i, backgroundColorStyles: c } = at(
                    W(e, "color")
                ),
                { elevationClasses: u } = Rt(e),
                { displayClasses: d, mobile: f } = vn(e),
                { roundedClasses: v } = We(e),
                h = su(),
                g = ve(e, "modelValue", null, (N) => !!N),
                { ssrBootStyles: y } = Ka(),
                { scopeId: b } = qa(),
                S = H(),
                x = J(!1),
                P = p(() =>
                    e.rail && e.expandOnHover && x.value
                        ? Number(e.width)
                        : Number(e.rail ? e.railWidth : e.width)
                ),
                E = p(() => Mr(e.location, l.value)),
                k = p(() => !e.permanent && (f.value || e.temporary)),
                _ = p(() => e.sticky && !k.value && E.value !== "bottom");
            tt(
                () => e.expandOnHover && e.rail != null,
                () => {
                    Z(x, (N) => a("update:rail", !N));
                }
            ),
                tt(
                    () => !e.disableResizeWatcher,
                    () => {
                        Z(k, (N) => !e.permanent && we(() => (g.value = !N)));
                    }
                ),
                tt(
                    () => !e.disableRouteWatcher && !!h,
                    () => {
                        Z(h.currentRoute, () => k.value && (g.value = !1));
                    }
                ),
                Z(
                    () => e.permanent,
                    (N) => {
                        N && (g.value = !0);
                    }
                ),
                gl(() => {
                    e.modelValue != null ||
                        k.value ||
                        (g.value = e.permanent || !f.value);
                });
            const {
                    isDragging: C,
                    dragProgress: w,
                    dragStyles: A,
                } = dp({
                    isActive: g,
                    isTemporary: k,
                    width: P,
                    touchless: W(e, "touchless"),
                    position: E,
                }),
                O = p(() => {
                    const N = k.value
                        ? 0
                        : e.rail && e.expandOnHover
                        ? Number(e.railWidth)
                        : P.value;
                    return C.value ? N * w.value : N;
                }),
                { layoutItemStyles: V, layoutItemScrimStyles: I } = Wi({
                    id: e.name,
                    order: p(() => parseInt(e.order, 10)),
                    position: E,
                    layoutSize: O,
                    elementSize: P,
                    active: p(() => g.value || C.value),
                    disableTransitions: p(() => C.value),
                    absolute: p(
                        () =>
                            e.absolute ||
                            (_.value && typeof D.value != "string")
                    ),
                }),
                { isStuck: D, stickyStyles: M } = op({
                    rootEl: S,
                    isSticky: _,
                    layoutItemStyles: V,
                }),
                U = at(p(() => (typeof e.scrim == "string" ? e.scrim : null))),
                re = p(() => ({
                    ...(C.value
                        ? { opacity: w.value * 0.2, transition: "none" }
                        : void 0),
                    ...I.value,
                }));
            Je({ VList: { bgColor: "transparent" } });
            function R() {
                x.value = !0;
            }
            function B() {
                x.value = !1;
            }
            return (
                ae(() => {
                    const N = r.image || e.image;
                    return m(ue, null, [
                        m(
                            e.tag,
                            K(
                                {
                                    ref: S,
                                    onMouseenter: R,
                                    onMouseleave: B,
                                    class: [
                                        "v-navigation-drawer",
                                        `v-navigation-drawer--${E.value}`,
                                        {
                                            "v-navigation-drawer--expand-on-hover":
                                                e.expandOnHover,
                                            "v-navigation-drawer--floating":
                                                e.floating,
                                            "v-navigation-drawer--is-hovering":
                                                x.value,
                                            "v-navigation-drawer--rail": e.rail,
                                            "v-navigation-drawer--temporary":
                                                k.value,
                                            "v-navigation-drawer--active":
                                                g.value,
                                            "v-navigation-drawer--sticky":
                                                _.value,
                                        },
                                        o.value,
                                        i.value,
                                        s.value,
                                        d.value,
                                        u.value,
                                        v.value,
                                        e.class,
                                    ],
                                    style: [
                                        c.value,
                                        V.value,
                                        A.value,
                                        y.value,
                                        M.value,
                                        e.style,
                                    ],
                                },
                                b,
                                n
                            ),
                            {
                                default: () => {
                                    var F, G, j, te;
                                    return [
                                        N &&
                                            m(
                                                "div",
                                                {
                                                    key: "image",
                                                    class: "v-navigation-drawer__img",
                                                },
                                                [
                                                    r.image
                                                        ? (F = r.image) == null
                                                            ? void 0
                                                            : F.call(r, {
                                                                  image: e.image,
                                                              })
                                                        : m(
                                                              "img",
                                                              {
                                                                  src: e.image,
                                                                  alt: "",
                                                              },
                                                              null
                                                          ),
                                                ]
                                            ),
                                        r.prepend &&
                                            m(
                                                "div",
                                                {
                                                    class: "v-navigation-drawer__prepend",
                                                },
                                                [
                                                    (G = r.prepend) == null
                                                        ? void 0
                                                        : G.call(r),
                                                ]
                                            ),
                                        m(
                                            "div",
                                            {
                                                class: "v-navigation-drawer__content",
                                            },
                                            [
                                                (j = r.default) == null
                                                    ? void 0
                                                    : j.call(r),
                                            ]
                                        ),
                                        r.append &&
                                            m(
                                                "div",
                                                {
                                                    class: "v-navigation-drawer__append",
                                                },
                                                [
                                                    (te = r.append) == null
                                                        ? void 0
                                                        : te.call(r),
                                                ]
                                            ),
                                    ];
                                },
                            }
                        ),
                        m(
                            At,
                            { name: "fade-transition" },
                            {
                                default: () => [
                                    k.value &&
                                        (C.value || g.value) &&
                                        !!e.scrim &&
                                        m(
                                            "div",
                                            K(
                                                {
                                                    class: [
                                                        "v-navigation-drawer__scrim",
                                                        U.backgroundColorClasses
                                                            .value,
                                                    ],
                                                    style: [
                                                        re.value,
                                                        U.backgroundColorStyles
                                                            .value,
                                                    ],
                                                    onClick: () =>
                                                        (g.value = !1),
                                                },
                                                b
                                            ),
                                            null
                                        ),
                                ],
                            }
                        ),
                    ]);
                }),
                { isStuck: D }
            );
        },
    }),
    mp = L(
        {
            indeterminate: Boolean,
            inset: Boolean,
            flat: Boolean,
            loading: { type: [Boolean, String], default: !1 },
            ...gn(),
            ...Dl(),
        },
        "VSwitch"
    ),
    hp = Y()({
        name: "VSwitch",
        inheritAttrs: !1,
        props: mp(),
        emits: {
            "update:focused": (e) => !0,
            "update:modelValue": (e) => !0,
            "update:indeterminate": (e) => !0,
        },
        setup(e, t) {
            let { attrs: n, slots: a } = t;
            const r = ve(e, "indeterminate"),
                l = ve(e, "modelValue"),
                { loaderClasses: o } = Wn(e),
                { isFocused: s, focus: i, blur: c } = hn(e),
                u = H(),
                d = p(() =>
                    typeof e.loading == "string" && e.loading !== ""
                        ? e.loading
                        : e.color
                ),
                f = Ge(),
                v = p(() => e.id || `switch-${f}`);
            function h() {
                r.value && (r.value = !1);
            }
            function g(y) {
                var b, S;
                y.stopPropagation(),
                    y.preventDefault(),
                    (S = (b = u.value) == null ? void 0 : b.input) == null ||
                        S.click();
            }
            return (
                ae(() => {
                    const [y, b] = sn(n),
                        S = st.filterProps(e),
                        x = xa.filterProps(e);
                    return m(
                        st,
                        K(
                            {
                                class: [
                                    "v-switch",
                                    { "v-switch--flat": e.flat },
                                    { "v-switch--inset": e.inset },
                                    { "v-switch--indeterminate": r.value },
                                    o.value,
                                    e.class,
                                ],
                            },
                            y,
                            S,
                            {
                                modelValue: l.value,
                                "onUpdate:modelValue": (P) => (l.value = P),
                                id: v.value,
                                focused: s.value,
                                style: e.style,
                            }
                        ),
                        {
                            ...a,
                            default: (P) => {
                                let {
                                    id: E,
                                    messagesId: k,
                                    isDisabled: _,
                                    isReadonly: C,
                                    isValid: w,
                                } = P;
                                const A = { model: l, isValid: w };
                                return m(
                                    xa,
                                    K(
                                        { ref: u },
                                        x,
                                        {
                                            modelValue: l.value,
                                            "onUpdate:modelValue": [
                                                (O) => (l.value = O),
                                                h,
                                            ],
                                            id: E.value,
                                            "aria-describedby": k.value,
                                            type: "checkbox",
                                            "aria-checked": r.value
                                                ? "mixed"
                                                : void 0,
                                            disabled: _.value,
                                            readonly: C.value,
                                            onFocus: i,
                                            onBlur: c,
                                        },
                                        b
                                    ),
                                    {
                                        ...a,
                                        default: (O) => {
                                            let {
                                                backgroundColorClasses: V,
                                                backgroundColorStyles: I,
                                            } = O;
                                            return m(
                                                "div",
                                                {
                                                    class: [
                                                        "v-switch__track",
                                                        ...V.value,
                                                    ],
                                                    style: I.value,
                                                    onClick: g,
                                                },
                                                [
                                                    a["track-true"] &&
                                                        m(
                                                            "div",
                                                            {
                                                                key: "prepend",
                                                                class: "v-switch__track-true",
                                                            },
                                                            [a["track-true"](A)]
                                                        ),
                                                    a["track-false"] &&
                                                        m(
                                                            "div",
                                                            {
                                                                key: "append",
                                                                class: "v-switch__track-false",
                                                            },
                                                            [
                                                                a[
                                                                    "track-false"
                                                                ](A),
                                                            ]
                                                        ),
                                                ]
                                            );
                                        },
                                        input: (O) => {
                                            let {
                                                inputNode: V,
                                                icon: I,
                                                backgroundColorClasses: D,
                                                backgroundColorStyles: M,
                                            } = O;
                                            return m(ue, null, [
                                                V,
                                                m(
                                                    "div",
                                                    {
                                                        class: [
                                                            "v-switch__thumb",
                                                            {
                                                                "v-switch__thumb--filled":
                                                                    I ||
                                                                    e.loading,
                                                            },
                                                            e.inset
                                                                ? void 0
                                                                : D.value,
                                                        ],
                                                        style: e.inset
                                                            ? void 0
                                                            : M.value,
                                                    },
                                                    [
                                                        a.thumb
                                                            ? m(
                                                                  Ee,
                                                                  {
                                                                      defaults:
                                                                          {
                                                                              VIcon: {
                                                                                  icon: I,
                                                                                  size: "x-small",
                                                                              },
                                                                          },
                                                                  },
                                                                  {
                                                                      default:
                                                                          () => [
                                                                              a.thumb(
                                                                                  {
                                                                                      ...A,
                                                                                      icon: I,
                                                                                  }
                                                                              ),
                                                                          ],
                                                                  }
                                                              )
                                                            : m(ag, null, {
                                                                  default:
                                                                      () => [
                                                                          e.loading
                                                                              ? m(
                                                                                    Ua,
                                                                                    {
                                                                                        name: "v-switch",
                                                                                        active: !0,
                                                                                        color:
                                                                                            w.value ===
                                                                                            !1
                                                                                                ? void 0
                                                                                                : d.value,
                                                                                    },
                                                                                    {
                                                                                        default:
                                                                                            (
                                                                                                U
                                                                                            ) =>
                                                                                                a.loader
                                                                                                    ? a.loader(
                                                                                                          U
                                                                                                      )
                                                                                                    : m(
                                                                                                          lu,
                                                                                                          {
                                                                                                              active: U.isActive,
                                                                                                              color: U.color,
                                                                                                              indeterminate:
                                                                                                                  !0,
                                                                                                              size: "16",
                                                                                                              width: "2",
                                                                                                          },
                                                                                                          null
                                                                                                      ),
                                                                                    }
                                                                                )
                                                                              : I &&
                                                                                m(
                                                                                    Ae,
                                                                                    {
                                                                                        key: String(
                                                                                            I
                                                                                        ),
                                                                                        icon: I,
                                                                                        size: "x-small",
                                                                                    },
                                                                                    null
                                                                                ),
                                                                      ],
                                                              }),
                                                    ]
                                                ),
                                            ]);
                                        },
                                    }
                                );
                            },
                        }
                    );
                }),
                {}
            );
        },
    }),
    gp = L(
        {
            autoGrow: Boolean,
            autofocus: Boolean,
            counter: [Boolean, Number, String],
            counterValue: Function,
            prefix: String,
            placeholder: String,
            persistentPlaceholder: Boolean,
            persistentCounter: Boolean,
            noResize: Boolean,
            rows: {
                type: [Number, String],
                default: 5,
                validator: (e) => !isNaN(parseFloat(e)),
            },
            maxRows: {
                type: [Number, String],
                validator: (e) => !isNaN(parseFloat(e)),
            },
            suffix: String,
            modelModifiers: Object,
            ...gn(),
            ...Ya(),
        },
        "VTextarea"
    ),
    yp = Y()({
        name: "VTextarea",
        directives: { Intersect: Rl },
        inheritAttrs: !1,
        props: gp(),
        emits: {
            "click:control": (e) => !0,
            "mousedown:control": (e) => !0,
            "update:focused": (e) => !0,
            "update:modelValue": (e) => !0,
        },
        setup(e, t) {
            let { attrs: n, emit: a, slots: r } = t;
            const l = ve(e, "modelValue"),
                { isFocused: o, focus: s, blur: i } = hn(e),
                c = p(() =>
                    typeof e.counterValue == "function"
                        ? e.counterValue(l.value)
                        : (l.value || "").toString().length
                ),
                u = p(() => {
                    if (n.maxlength) return n.maxlength;
                    if (
                        !(
                            !e.counter ||
                            (typeof e.counter != "number" &&
                                typeof e.counter != "string")
                        )
                    )
                        return e.counter;
                });
            function d(O, V) {
                var I, D;
                !e.autofocus ||
                    !O ||
                    (D = (I = V[0].target) == null ? void 0 : I.focus) ==
                        null ||
                    D.call(I);
            }
            const f = H(),
                v = H(),
                h = J(""),
                g = H(),
                y = p(() => e.persistentPlaceholder || o.value || e.active);
            function b() {
                var O;
                g.value !== document.activeElement &&
                    ((O = g.value) == null || O.focus()),
                    o.value || s();
            }
            function S(O) {
                b(), a("click:control", O);
            }
            function x(O) {
                a("mousedown:control", O);
            }
            function P(O) {
                O.stopPropagation(),
                    b(),
                    we(() => {
                        (l.value = ""), wl(e["onClick:clear"], O);
                    });
            }
            function E(O) {
                var I;
                const V = O.target;
                if (
                    ((l.value = V.value),
                    (I = e.modelModifiers) != null && I.trim)
                ) {
                    const D = [V.selectionStart, V.selectionEnd];
                    we(() => {
                        (V.selectionStart = D[0]), (V.selectionEnd = D[1]);
                    });
                }
            }
            const k = H(),
                _ = H(+e.rows),
                C = p(() => ["plain", "underlined"].includes(e.variant));
            De(() => {
                e.autoGrow || (_.value = +e.rows);
            });
            function w() {
                e.autoGrow &&
                    we(() => {
                        if (!k.value || !v.value) return;
                        const O = getComputedStyle(k.value),
                            V = getComputedStyle(v.value.$el),
                            I =
                                parseFloat(
                                    O.getPropertyValue("--v-field-padding-top")
                                ) +
                                parseFloat(
                                    O.getPropertyValue("--v-input-padding-top")
                                ) +
                                parseFloat(
                                    O.getPropertyValue(
                                        "--v-field-padding-bottom"
                                    )
                                ),
                            D = k.value.scrollHeight,
                            M = parseFloat(O.lineHeight),
                            U = Math.max(
                                parseFloat(e.rows) * M + I,
                                parseFloat(
                                    V.getPropertyValue(
                                        "--v-input-control-height"
                                    )
                                )
                            ),
                            re = parseFloat(e.maxRows) * M + I || 1 / 0,
                            R = Ke(D ?? 0, U, re);
                        (_.value = Math.floor((R - I) / M)), (h.value = ne(R));
                    });
            }
            Ue(w),
                Z(l, w),
                Z(() => e.rows, w),
                Z(() => e.maxRows, w),
                Z(() => e.density, w);
            let A;
            return (
                Z(k, (O) => {
                    O
                        ? ((A = new ResizeObserver(w)), A.observe(k.value))
                        : A == null || A.disconnect();
                }),
                Re(() => {
                    A == null || A.disconnect();
                }),
                ae(() => {
                    const O = !!(r.counter || e.counter || e.counterValue),
                        V = !!(O || r.details),
                        [I, D] = sn(n),
                        { modelValue: M, ...U } = st.filterProps(e),
                        re = Ml(e);
                    return m(
                        st,
                        K(
                            {
                                ref: f,
                                modelValue: l.value,
                                "onUpdate:modelValue": (R) => (l.value = R),
                                class: [
                                    "v-textarea v-text-field",
                                    {
                                        "v-textarea--prefixed": e.prefix,
                                        "v-textarea--suffixed": e.suffix,
                                        "v-text-field--prefixed": e.prefix,
                                        "v-text-field--suffixed": e.suffix,
                                        "v-textarea--auto-grow": e.autoGrow,
                                        "v-textarea--no-resize":
                                            e.noResize || e.autoGrow,
                                        "v-input--plain-underlined": C.value,
                                    },
                                    e.class,
                                ],
                                style: e.style,
                            },
                            I,
                            U,
                            {
                                centerAffix: _.value === 1 && !C.value,
                                focused: o.value,
                            }
                        ),
                        {
                            ...r,
                            default: (R) => {
                                let {
                                    id: B,
                                    isDisabled: N,
                                    isDirty: F,
                                    isReadonly: G,
                                    isValid: j,
                                } = R;
                                return m(
                                    Xa,
                                    K(
                                        {
                                            ref: v,
                                            style: {
                                                "--v-textarea-control-height":
                                                    h.value,
                                            },
                                            onClick: S,
                                            onMousedown: x,
                                            "onClick:clear": P,
                                            "onClick:prependInner":
                                                e["onClick:prependInner"],
                                            "onClick:appendInner":
                                                e["onClick:appendInner"],
                                        },
                                        re,
                                        {
                                            id: B.value,
                                            active: y.value || F.value,
                                            centerAffix:
                                                _.value === 1 && !C.value,
                                            dirty: F.value || e.dirty,
                                            disabled: N.value,
                                            focused: o.value,
                                            error: j.value === !1,
                                        }
                                    ),
                                    {
                                        ...r,
                                        default: (te) => {
                                            let {
                                                props: { class: le, ...X },
                                            } = te;
                                            return m(ue, null, [
                                                e.prefix &&
                                                    m(
                                                        "span",
                                                        {
                                                            class: "v-text-field__prefix",
                                                        },
                                                        [e.prefix]
                                                    ),
                                                Le(
                                                    m(
                                                        "textarea",
                                                        K(
                                                            {
                                                                ref: g,
                                                                class: le,
                                                                value: l.value,
                                                                onInput: E,
                                                                autofocus:
                                                                    e.autofocus,
                                                                readonly:
                                                                    G.value,
                                                                disabled:
                                                                    N.value,
                                                                placeholder:
                                                                    e.placeholder,
                                                                rows: e.rows,
                                                                name: e.name,
                                                                onFocus: b,
                                                                onBlur: i,
                                                            },
                                                            X,
                                                            D
                                                        ),
                                                        null
                                                    ),
                                                    [
                                                        [
                                                            bt("intersect"),
                                                            { handler: d },
                                                            null,
                                                            { once: !0 },
                                                        ],
                                                    ]
                                                ),
                                                e.autoGrow &&
                                                    Le(
                                                        m(
                                                            "textarea",
                                                            {
                                                                class: [
                                                                    le,
                                                                    "v-textarea__sizer",
                                                                ],
                                                                id: `${X.id}-sizer`,
                                                                "onUpdate:modelValue":
                                                                    (T) =>
                                                                        (l.value =
                                                                            T),
                                                                ref: k,
                                                                readonly: !0,
                                                                "aria-hidden":
                                                                    "true",
                                                            },
                                                            null
                                                        ),
                                                        [[Hd, l.value]]
                                                    ),
                                                e.suffix &&
                                                    m(
                                                        "span",
                                                        {
                                                            class: "v-text-field__suffix",
                                                        },
                                                        [e.suffix]
                                                    ),
                                            ]);
                                        },
                                    }
                                );
                            },
                            details: V
                                ? (R) => {
                                      var B;
                                      return m(ue, null, [
                                          (B = r.details) == null
                                              ? void 0
                                              : B.call(r, R),
                                          O &&
                                              m(ue, null, [
                                                  m("span", null, null),
                                                  m(
                                                      Fl,
                                                      {
                                                          active:
                                                              e.persistentCounter ||
                                                              o.value,
                                                          value: c.value,
                                                          max: u.value,
                                                      },
                                                      r.counter
                                                  ),
                                              ]),
                                      ]);
                                  }
                                : void 0,
                        }
                    );
                }),
                mn({}, f, v, g)
            );
        },
    }),
    pp = { dark: !0, colors: { primary: "#096ed1" } },
    bp = Eu({
        defaults: {
            VTextField: { variant: "solo-filled" },
            VAutocomplete: { variant: "solo-filled" },
            VFileInput: { variant: "solo-filled" },
            VDataTable: {
                itemsPerPageOptions: [
                    { value: 10, title: "10" },
                    { value: 25, title: "25" },
                    { value: 50, title: "50" },
                    { value: 100, title: "100" },
                ],
            },
            VDataTableServer: {
                itemsPerPageOptions: [
                    { value: 10, title: "10" },
                    { value: 25, title: "25" },
                    { value: 50, title: "50" },
                    { value: 100, title: "100" },
                ],
            },
        },
        components: {
            VDataTable: Qy,
            VTextField: Qr,
            VCheckbox: Pg,
            VFileInput: ap,
            VDataTableServer: tp,
            VTextarea: yp,
        },
        theme: {
            defaultTheme: "defaultDarkTheme",
            themes: { defaultDarkTheme: pp },
        },
    }),
    Sp = Kd(),
    _p = "modulepreload",
    wp = function (e) {
        return "/" + e;
    },
    ws = {},
    ee = function (t, n, a) {
        let r = Promise.resolve();
        if (n && n.length > 0) {
            const l = document.getElementsByTagName("link");
            r = Promise.all(
                n.map((o) => {
                    if (((o = wp(o)), o in ws)) return;
                    ws[o] = !0;
                    const s = o.endsWith(".css"),
                        i = s ? '[rel="stylesheet"]' : "";
                    if (!!a)
                        for (let d = l.length - 1; d >= 0; d--) {
                            const f = l[d];
                            if (f.href === o && (!s || f.rel === "stylesheet"))
                                return;
                        }
                    else if (document.querySelector(`link[href="${o}"]${i}`))
                        return;
                    const u = document.createElement("link");
                    if (
                        ((u.rel = s ? "stylesheet" : _p),
                        s || ((u.as = "script"), (u.crossOrigin = "")),
                        (u.href = o),
                        document.head.appendChild(u),
                        s)
                    )
                        return new Promise((d, f) => {
                            u.addEventListener("load", d),
                                u.addEventListener("error", () =>
                                    f(
                                        new Error(
                                            `Unable to preload CSS for ${o}`
                                        )
                                    )
                                );
                        });
                })
            );
        }
        return r
            .then(() => t())
            .catch((l) => {
                const o = new Event("vite:preloadError", { cancelable: !0 });
                if (
                    ((o.payload = l),
                    window.dispatchEvent(o),
                    !o.defaultPrevented)
                )
                    throw l;
            });
    },
    Cp = { class: "main-block" },
    xp = { class: "block-bg", key: "false" },
    Pp = { class: "block-bg__elem block-bg__elem--left", key: "false" },
    kp = { class: "block-bg__elem block-bg__elem--right", key: "false" },
    Ep = { class: "block-bg__elem block-bg__elem--center", key: "false" },
    Ap = { class: "block-bg__elem block-bg__elem--line", key: "false" },
    Tp = pt({
        __name: "Company",
        setup(e) {
            let t;
            return (
                Ue(() => {
                    (t = document.querySelector("html")),
                        t && (t.style.overflow = "hidden");
                }),
                Re(() => {
                    t && (t.style.overflow = "auto");
                }),
                (n, a) => (
                    ke(),
                    rt("section", Cp, [
                        (ke(), rt("div", xp)),
                        (ke(), rt("div", Pp)),
                        (ke(), rt("div", kp)),
                        (ke(), rt("div", Ep)),
                        (ke(), rt("div", Ap)),
                        yl(n.$slots, "default"),
                    ])
                )
            );
        },
    }),
    Rn = (e, t) => {
        const n = e[t];
        return n
            ? typeof n == "function"
                ? n()
                : Promise.resolve(n)
            : new Promise((a, r) => {
                  (typeof queueMicrotask == "function"
                      ? queueMicrotask
                      : setTimeout)(
                      r.bind(
                          null,
                          new Error("Unknown variable dynamic import: " + t)
                      )
                  );
              });
    },
    Hc = La("module", () => ({ modules: H({}) }));
function Ip() {
    (this.__data__ = []), (this.size = 0);
}
var Op = Ip;
function Vp(e, t) {
    return e === t || (e !== e && t !== t);
}
var zc = Vp,
    Rp = zc;
function $p(e, t) {
    for (var n = e.length; n--; ) if (Rp(e[n][0], t)) return n;
    return -1;
}
var Qa = $p,
    Dp = Qa,
    Lp = Array.prototype,
    Bp = Lp.splice;
function Fp(e) {
    var t = this.__data__,
        n = Dp(t, e);
    if (n < 0) return !1;
    var a = t.length - 1;
    return n == a ? t.pop() : Bp.call(t, n, 1), --this.size, !0;
}
var Mp = Fp,
    Np = Qa;
function jp(e) {
    var t = this.__data__,
        n = Np(t, e);
    return n < 0 ? void 0 : t[n][1];
}
var Hp = jp,
    zp = Qa;
function Up(e) {
    return zp(this.__data__, e) > -1;
}
var Gp = Up,
    Wp = Qa;
function qp(e, t) {
    var n = this.__data__,
        a = Wp(n, e);
    return a < 0 ? (++this.size, n.push([e, t])) : (n[a][1] = t), this;
}
var Kp = qp,
    Yp = Op,
    Xp = Mp,
    Jp = Hp,
    Zp = Gp,
    Qp = Kp;
function yn(e) {
    var t = -1,
        n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var a = e[t];
        this.set(a[0], a[1]);
    }
}
yn.prototype.clear = Yp;
yn.prototype.delete = Xp;
yn.prototype.get = Jp;
yn.prototype.has = Zp;
yn.prototype.set = Qp;
var er = yn,
    eb = er;
function tb() {
    (this.__data__ = new eb()), (this.size = 0);
}
var nb = tb;
function ab(e) {
    var t = this.__data__,
        n = t.delete(e);
    return (this.size = t.size), n;
}
var rb = ab;
function lb(e) {
    return this.__data__.get(e);
}
var ob = lb;
function sb(e) {
    return this.__data__.has(e);
}
var ib = sb,
    ub = typeof Jn == "object" && Jn && Jn.Object === Object && Jn,
    Uc = ub,
    cb = Uc,
    db = typeof self == "object" && self && self.Object === Object && self,
    fb = cb || db || Function("return this")(),
    wt = fb,
    vb = wt,
    mb = vb.Symbol,
    zl = mb,
    Cs = zl,
    Gc = Object.prototype,
    hb = Gc.hasOwnProperty,
    gb = Gc.toString,
    En = Cs ? Cs.toStringTag : void 0;
function yb(e) {
    var t = hb.call(e, En),
        n = e[En];
    try {
        e[En] = void 0;
        var a = !0;
    } catch {}
    var r = gb.call(e);
    return a && (t ? (e[En] = n) : delete e[En]), r;
}
var pb = yb,
    bb = Object.prototype,
    Sb = bb.toString;
function _b(e) {
    return Sb.call(e);
}
var wb = _b,
    xs = zl,
    Cb = pb,
    xb = wb,
    Pb = "[object Null]",
    kb = "[object Undefined]",
    Ps = xs ? xs.toStringTag : void 0;
function Eb(e) {
    return e == null
        ? e === void 0
            ? kb
            : Pb
        : Ps && Ps in Object(e)
        ? Cb(e)
        : xb(e);
}
var tr = Eb;
function Ab(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
}
var Wc = Ab,
    Tb = tr,
    Ib = Wc,
    Ob = "[object AsyncFunction]",
    Vb = "[object Function]",
    Rb = "[object GeneratorFunction]",
    $b = "[object Proxy]";
function Db(e) {
    if (!Ib(e)) return !1;
    var t = Tb(e);
    return t == Vb || t == Rb || t == Ob || t == $b;
}
var qc = Db,
    Lb = wt,
    Bb = Lb["__core-js_shared__"],
    Fb = Bb,
    Cr = Fb,
    ks = (function () {
        var e = /[^.]+$/.exec((Cr && Cr.keys && Cr.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
    })();
function Mb(e) {
    return !!ks && ks in e;
}
var Nb = Mb,
    jb = Function.prototype,
    Hb = jb.toString;
function zb(e) {
    if (e != null) {
        try {
            return Hb.call(e);
        } catch {}
        try {
            return e + "";
        } catch {}
    }
    return "";
}
var Kc = zb,
    Ub = qc,
    Gb = Nb,
    Wb = Wc,
    qb = Kc,
    Kb = /[\\^$.*+?()[\]{}|]/g,
    Yb = /^\[object .+?Constructor\]$/,
    Xb = Function.prototype,
    Jb = Object.prototype,
    Zb = Xb.toString,
    Qb = Jb.hasOwnProperty,
    eS = RegExp(
        "^" +
            Zb.call(Qb)
                .replace(Kb, "\\$&")
                .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                ) +
            "$"
    );
function tS(e) {
    if (!Wb(e) || Gb(e)) return !1;
    var t = Ub(e) ? eS : Yb;
    return t.test(qb(e));
}
var nS = tS;
function aS(e, t) {
    return e == null ? void 0 : e[t];
}
var rS = aS,
    lS = nS,
    oS = rS;
function sS(e, t) {
    var n = oS(e, t);
    return lS(n) ? n : void 0;
}
var pn = sS,
    iS = pn,
    uS = wt,
    cS = iS(uS, "Map"),
    Ul = cS,
    dS = pn,
    fS = dS(Object, "create"),
    nr = fS,
    Es = nr;
function vS() {
    (this.__data__ = Es ? Es(null) : {}), (this.size = 0);
}
var mS = vS;
function hS(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
}
var gS = hS,
    yS = nr,
    pS = "__lodash_hash_undefined__",
    bS = Object.prototype,
    SS = bS.hasOwnProperty;
function _S(e) {
    var t = this.__data__;
    if (yS) {
        var n = t[e];
        return n === pS ? void 0 : n;
    }
    return SS.call(t, e) ? t[e] : void 0;
}
var wS = _S,
    CS = nr,
    xS = Object.prototype,
    PS = xS.hasOwnProperty;
function kS(e) {
    var t = this.__data__;
    return CS ? t[e] !== void 0 : PS.call(t, e);
}
var ES = kS,
    AS = nr,
    TS = "__lodash_hash_undefined__";
function IS(e, t) {
    var n = this.__data__;
    return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = AS && t === void 0 ? TS : t),
        this
    );
}
var OS = IS,
    VS = mS,
    RS = gS,
    $S = wS,
    DS = ES,
    LS = OS;
function bn(e) {
    var t = -1,
        n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var a = e[t];
        this.set(a[0], a[1]);
    }
}
bn.prototype.clear = VS;
bn.prototype.delete = RS;
bn.prototype.get = $S;
bn.prototype.has = DS;
bn.prototype.set = LS;
var BS = bn,
    As = BS,
    FS = er,
    MS = Ul;
function NS() {
    (this.size = 0),
        (this.__data__ = {
            hash: new As(),
            map: new (MS || FS)(),
            string: new As(),
        });
}
var jS = NS;
function HS(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
}
var zS = HS,
    US = zS;
function GS(e, t) {
    var n = e.__data__;
    return US(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var ar = GS,
    WS = ar;
function qS(e) {
    var t = WS(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
}
var KS = qS,
    YS = ar;
function XS(e) {
    return YS(this, e).get(e);
}
var JS = XS,
    ZS = ar;
function QS(e) {
    return ZS(this, e).has(e);
}
var e0 = QS,
    t0 = ar;
function n0(e, t) {
    var n = t0(this, e),
        a = n.size;
    return n.set(e, t), (this.size += n.size == a ? 0 : 1), this;
}
var a0 = n0,
    r0 = jS,
    l0 = KS,
    o0 = JS,
    s0 = e0,
    i0 = a0;
function Sn(e) {
    var t = -1,
        n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var a = e[t];
        this.set(a[0], a[1]);
    }
}
Sn.prototype.clear = r0;
Sn.prototype.delete = l0;
Sn.prototype.get = o0;
Sn.prototype.has = s0;
Sn.prototype.set = i0;
var Yc = Sn,
    u0 = er,
    c0 = Ul,
    d0 = Yc,
    f0 = 200;
function v0(e, t) {
    var n = this.__data__;
    if (n instanceof u0) {
        var a = n.__data__;
        if (!c0 || a.length < f0 - 1)
            return a.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new d0(a);
    }
    return n.set(e, t), (this.size = n.size), this;
}
var m0 = v0,
    h0 = er,
    g0 = nb,
    y0 = rb,
    p0 = ob,
    b0 = ib,
    S0 = m0;
function _n(e) {
    var t = (this.__data__ = new h0(e));
    this.size = t.size;
}
_n.prototype.clear = g0;
_n.prototype.delete = y0;
_n.prototype.get = p0;
_n.prototype.has = b0;
_n.prototype.set = S0;
var _0 = _n,
    w0 = "__lodash_hash_undefined__";
function C0(e) {
    return this.__data__.set(e, w0), this;
}
var x0 = C0;
function P0(e) {
    return this.__data__.has(e);
}
var k0 = P0,
    E0 = Yc,
    A0 = x0,
    T0 = k0;
function Ia(e) {
    var t = -1,
        n = e == null ? 0 : e.length;
    for (this.__data__ = new E0(); ++t < n; ) this.add(e[t]);
}
Ia.prototype.add = Ia.prototype.push = A0;
Ia.prototype.has = T0;
var I0 = Ia;
function O0(e, t) {
    for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
        if (t(e[n], n, e)) return !0;
    return !1;
}
var V0 = O0;
function R0(e, t) {
    return e.has(t);
}
var $0 = R0,
    D0 = I0,
    L0 = V0,
    B0 = $0,
    F0 = 1,
    M0 = 2;
function N0(e, t, n, a, r, l) {
    var o = n & F0,
        s = e.length,
        i = t.length;
    if (s != i && !(o && i > s)) return !1;
    var c = l.get(e),
        u = l.get(t);
    if (c && u) return c == t && u == e;
    var d = -1,
        f = !0,
        v = n & M0 ? new D0() : void 0;
    for (l.set(e, t), l.set(t, e); ++d < s; ) {
        var h = e[d],
            g = t[d];
        if (a) var y = o ? a(g, h, d, t, e, l) : a(h, g, d, e, t, l);
        if (y !== void 0) {
            if (y) continue;
            f = !1;
            break;
        }
        if (v) {
            if (
                !L0(t, function (b, S) {
                    if (!B0(v, S) && (h === b || r(h, b, n, a, l)))
                        return v.push(S);
                })
            ) {
                f = !1;
                break;
            }
        } else if (!(h === g || r(h, g, n, a, l))) {
            f = !1;
            break;
        }
    }
    return l.delete(e), l.delete(t), f;
}
var Xc = N0,
    j0 = wt,
    H0 = j0.Uint8Array,
    z0 = H0;
function U0(e) {
    var t = -1,
        n = Array(e.size);
    return (
        e.forEach(function (a, r) {
            n[++t] = [r, a];
        }),
        n
    );
}
var G0 = U0;
function W0(e) {
    var t = -1,
        n = Array(e.size);
    return (
        e.forEach(function (a) {
            n[++t] = a;
        }),
        n
    );
}
var q0 = W0,
    Ts = zl,
    Is = z0,
    K0 = zc,
    Y0 = Xc,
    X0 = G0,
    J0 = q0,
    Z0 = 1,
    Q0 = 2,
    e_ = "[object Boolean]",
    t_ = "[object Date]",
    n_ = "[object Error]",
    a_ = "[object Map]",
    r_ = "[object Number]",
    l_ = "[object RegExp]",
    o_ = "[object Set]",
    s_ = "[object String]",
    i_ = "[object Symbol]",
    u_ = "[object ArrayBuffer]",
    c_ = "[object DataView]",
    Os = Ts ? Ts.prototype : void 0,
    xr = Os ? Os.valueOf : void 0;
function d_(e, t, n, a, r, l, o) {
    switch (n) {
        case c_:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
            (e = e.buffer), (t = t.buffer);
        case u_:
            return !(e.byteLength != t.byteLength || !l(new Is(e), new Is(t)));
        case e_:
        case t_:
        case r_:
            return K0(+e, +t);
        case n_:
            return e.name == t.name && e.message == t.message;
        case l_:
        case s_:
            return e == t + "";
        case a_:
            var s = X0;
        case o_:
            var i = a & Z0;
            if ((s || (s = J0), e.size != t.size && !i)) return !1;
            var c = o.get(e);
            if (c) return c == t;
            (a |= Q0), o.set(e, t);
            var u = Y0(s(e), s(t), a, r, l, o);
            return o.delete(e), u;
        case i_:
            if (xr) return xr.call(e) == xr.call(t);
    }
    return !1;
}
var f_ = d_;
function v_(e, t) {
    for (var n = -1, a = t.length, r = e.length; ++n < a; ) e[r + n] = t[n];
    return e;
}
var m_ = v_,
    h_ = Array.isArray,
    Gl = h_,
    g_ = m_,
    y_ = Gl;
function p_(e, t, n) {
    var a = t(e);
    return y_(e) ? a : g_(a, n(e));
}
var b_ = p_;
function S_(e, t) {
    for (var n = -1, a = e == null ? 0 : e.length, r = 0, l = []; ++n < a; ) {
        var o = e[n];
        t(o, n, e) && (l[r++] = o);
    }
    return l;
}
var __ = S_;
function w_() {
    return [];
}
var C_ = w_,
    x_ = __,
    P_ = C_,
    k_ = Object.prototype,
    E_ = k_.propertyIsEnumerable,
    Vs = Object.getOwnPropertySymbols,
    A_ = Vs
        ? function (e) {
              return e == null
                  ? []
                  : ((e = Object(e)),
                    x_(Vs(e), function (t) {
                        return E_.call(e, t);
                    }));
          }
        : P_,
    T_ = A_;
function I_(e, t) {
    for (var n = -1, a = Array(e); ++n < e; ) a[n] = t(n);
    return a;
}
var O_ = I_;
function V_(e) {
    return e != null && typeof e == "object";
}
var rr = V_,
    R_ = tr,
    $_ = rr,
    D_ = "[object Arguments]";
function L_(e) {
    return $_(e) && R_(e) == D_;
}
var B_ = L_,
    Rs = B_,
    F_ = rr,
    Jc = Object.prototype,
    M_ = Jc.hasOwnProperty,
    N_ = Jc.propertyIsEnumerable,
    j_ = Rs(
        (function () {
            return arguments;
        })()
    )
        ? Rs
        : function (e) {
              return F_(e) && M_.call(e, "callee") && !N_.call(e, "callee");
          },
    H_ = j_,
    Oa = { exports: {} };
function z_() {
    return !1;
}
var U_ = z_;
Oa.exports;
(function (e, t) {
    var n = wt,
        a = U_,
        r = t && !t.nodeType && t,
        l = r && !0 && e && !e.nodeType && e,
        o = l && l.exports === r,
        s = o ? n.Buffer : void 0,
        i = s ? s.isBuffer : void 0,
        c = i || a;
    e.exports = c;
})(Oa, Oa.exports);
var Zc = Oa.exports,
    G_ = 9007199254740991,
    W_ = /^(?:0|[1-9]\d*)$/;
function q_(e, t) {
    var n = typeof e;
    return (
        (t = t ?? G_),
        !!t &&
            (n == "number" || (n != "symbol" && W_.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
    );
}
var K_ = q_,
    Y_ = 9007199254740991;
function X_(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Y_;
}
var Qc = X_,
    J_ = tr,
    Z_ = Qc,
    Q_ = rr,
    ew = "[object Arguments]",
    tw = "[object Array]",
    nw = "[object Boolean]",
    aw = "[object Date]",
    rw = "[object Error]",
    lw = "[object Function]",
    ow = "[object Map]",
    sw = "[object Number]",
    iw = "[object Object]",
    uw = "[object RegExp]",
    cw = "[object Set]",
    dw = "[object String]",
    fw = "[object WeakMap]",
    vw = "[object ArrayBuffer]",
    mw = "[object DataView]",
    hw = "[object Float32Array]",
    gw = "[object Float64Array]",
    yw = "[object Int8Array]",
    pw = "[object Int16Array]",
    bw = "[object Int32Array]",
    Sw = "[object Uint8Array]",
    _w = "[object Uint8ClampedArray]",
    ww = "[object Uint16Array]",
    Cw = "[object Uint32Array]",
    Se = {};
Se[hw] =
    Se[gw] =
    Se[yw] =
    Se[pw] =
    Se[bw] =
    Se[Sw] =
    Se[_w] =
    Se[ww] =
    Se[Cw] =
        !0;
Se[ew] =
    Se[tw] =
    Se[vw] =
    Se[nw] =
    Se[mw] =
    Se[aw] =
    Se[rw] =
    Se[lw] =
    Se[ow] =
    Se[sw] =
    Se[iw] =
    Se[uw] =
    Se[cw] =
    Se[dw] =
    Se[fw] =
        !1;
function xw(e) {
    return Q_(e) && Z_(e.length) && !!Se[J_(e)];
}
var Pw = xw;
function kw(e) {
    return function (t) {
        return e(t);
    };
}
var Ew = kw,
    Va = { exports: {} };
Va.exports;
(function (e, t) {
    var n = Uc,
        a = t && !t.nodeType && t,
        r = a && !0 && e && !e.nodeType && e,
        l = r && r.exports === a,
        o = l && n.process,
        s = (function () {
            try {
                var i = r && r.require && r.require("util").types;
                return i || (o && o.binding && o.binding("util"));
            } catch {}
        })();
    e.exports = s;
})(Va, Va.exports);
var Aw = Va.exports,
    Tw = Pw,
    Iw = Ew,
    $s = Aw,
    Ds = $s && $s.isTypedArray,
    Ow = Ds ? Iw(Ds) : Tw,
    ed = Ow,
    Vw = O_,
    Rw = H_,
    $w = Gl,
    Dw = Zc,
    Lw = K_,
    Bw = ed,
    Fw = Object.prototype,
    Mw = Fw.hasOwnProperty;
function Nw(e, t) {
    var n = $w(e),
        a = !n && Rw(e),
        r = !n && !a && Dw(e),
        l = !n && !a && !r && Bw(e),
        o = n || a || r || l,
        s = o ? Vw(e.length, String) : [],
        i = s.length;
    for (var c in e)
        (t || Mw.call(e, c)) &&
            !(
                o &&
                (c == "length" ||
                    (r && (c == "offset" || c == "parent")) ||
                    (l &&
                        (c == "buffer" ||
                            c == "byteLength" ||
                            c == "byteOffset")) ||
                    Lw(c, i))
            ) &&
            s.push(c);
    return s;
}
var jw = Nw,
    Hw = Object.prototype;
function zw(e) {
    var t = e && e.constructor,
        n = (typeof t == "function" && t.prototype) || Hw;
    return e === n;
}
var Uw = zw;
function Gw(e, t) {
    return function (n) {
        return e(t(n));
    };
}
var Ww = Gw,
    qw = Ww,
    Kw = qw(Object.keys, Object),
    Yw = Kw,
    Xw = Uw,
    Jw = Yw,
    Zw = Object.prototype,
    Qw = Zw.hasOwnProperty;
function e1(e) {
    if (!Xw(e)) return Jw(e);
    var t = [];
    for (var n in Object(e)) Qw.call(e, n) && n != "constructor" && t.push(n);
    return t;
}
var t1 = e1,
    n1 = qc,
    a1 = Qc;
function r1(e) {
    return e != null && a1(e.length) && !n1(e);
}
var l1 = r1,
    o1 = jw,
    s1 = t1,
    i1 = l1;
function u1(e) {
    return i1(e) ? o1(e) : s1(e);
}
var c1 = u1,
    d1 = b_,
    f1 = T_,
    v1 = c1;
function m1(e) {
    return d1(e, v1, f1);
}
var h1 = m1,
    Ls = h1,
    g1 = 1,
    y1 = Object.prototype,
    p1 = y1.hasOwnProperty;
function b1(e, t, n, a, r, l) {
    var o = n & g1,
        s = Ls(e),
        i = s.length,
        c = Ls(t),
        u = c.length;
    if (i != u && !o) return !1;
    for (var d = i; d--; ) {
        var f = s[d];
        if (!(o ? f in t : p1.call(t, f))) return !1;
    }
    var v = l.get(e),
        h = l.get(t);
    if (v && h) return v == t && h == e;
    var g = !0;
    l.set(e, t), l.set(t, e);
    for (var y = o; ++d < i; ) {
        f = s[d];
        var b = e[f],
            S = t[f];
        if (a) var x = o ? a(S, b, f, t, e, l) : a(b, S, f, e, t, l);
        if (!(x === void 0 ? b === S || r(b, S, n, a, l) : x)) {
            g = !1;
            break;
        }
        y || (y = f == "constructor");
    }
    if (g && !y) {
        var P = e.constructor,
            E = t.constructor;
        P != E &&
            "constructor" in e &&
            "constructor" in t &&
            !(
                typeof P == "function" &&
                P instanceof P &&
                typeof E == "function" &&
                E instanceof E
            ) &&
            (g = !1);
    }
    return l.delete(e), l.delete(t), g;
}
var S1 = b1,
    _1 = pn,
    w1 = wt,
    C1 = _1(w1, "DataView"),
    x1 = C1,
    P1 = pn,
    k1 = wt,
    E1 = P1(k1, "Promise"),
    A1 = E1,
    T1 = pn,
    I1 = wt,
    O1 = T1(I1, "Set"),
    V1 = O1,
    R1 = pn,
    $1 = wt,
    D1 = R1($1, "WeakMap"),
    L1 = D1,
    tl = x1,
    nl = Ul,
    al = A1,
    rl = V1,
    ll = L1,
    td = tr,
    wn = Kc,
    Bs = "[object Map]",
    B1 = "[object Object]",
    Fs = "[object Promise]",
    Ms = "[object Set]",
    Ns = "[object WeakMap]",
    js = "[object DataView]",
    F1 = wn(tl),
    M1 = wn(nl),
    N1 = wn(al),
    j1 = wn(rl),
    H1 = wn(ll),
    Lt = td;
((tl && Lt(new tl(new ArrayBuffer(1))) != js) ||
    (nl && Lt(new nl()) != Bs) ||
    (al && Lt(al.resolve()) != Fs) ||
    (rl && Lt(new rl()) != Ms) ||
    (ll && Lt(new ll()) != Ns)) &&
    (Lt = function (e) {
        var t = td(e),
            n = t == B1 ? e.constructor : void 0,
            a = n ? wn(n) : "";
        if (a)
            switch (a) {
                case F1:
                    return js;
                case M1:
                    return Bs;
                case N1:
                    return Fs;
                case j1:
                    return Ms;
                case H1:
                    return Ns;
            }
        return t;
    });
var z1 = Lt,
    Pr = _0,
    U1 = Xc,
    G1 = f_,
    W1 = S1,
    Hs = z1,
    zs = Gl,
    Us = Zc,
    q1 = ed,
    K1 = 1,
    Gs = "[object Arguments]",
    Ws = "[object Array]",
    ra = "[object Object]",
    Y1 = Object.prototype,
    qs = Y1.hasOwnProperty;
function X1(e, t, n, a, r, l) {
    var o = zs(e),
        s = zs(t),
        i = o ? Ws : Hs(e),
        c = s ? Ws : Hs(t);
    (i = i == Gs ? ra : i), (c = c == Gs ? ra : c);
    var u = i == ra,
        d = c == ra,
        f = i == c;
    if (f && Us(e)) {
        if (!Us(t)) return !1;
        (o = !0), (u = !1);
    }
    if (f && !u)
        return (
            l || (l = new Pr()),
            o || q1(e) ? U1(e, t, n, a, r, l) : G1(e, t, i, n, a, r, l)
        );
    if (!(n & K1)) {
        var v = u && qs.call(e, "__wrapped__"),
            h = d && qs.call(t, "__wrapped__");
        if (v || h) {
            var g = v ? e.value() : e,
                y = h ? t.value() : t;
            return l || (l = new Pr()), r(g, y, n, a, l);
        }
    }
    return f ? (l || (l = new Pr()), W1(e, t, n, a, r, l)) : !1;
}
var J1 = X1,
    Z1 = J1,
    Ks = rr;
function nd(e, t, n, a, r) {
    return e === t
        ? !0
        : e == null || t == null || (!Ks(e) && !Ks(t))
        ? e !== e && t !== t
        : Z1(e, t, n, a, nd, r);
}
var Q1 = nd,
    eC = Q1;
function tC(e, t) {
    return eC(e, t);
}
var nC = tC;
const aC = Wd(nC),
    kr = (e) => e.charAt(0).toUpperCase() + e.slice(1),
    Wx = (e = {}, t) => {
        if (!t) return;
        const n = {};
        for (const a in t) aC(t[a], e[a]) || (n[a] = t[a]);
        return n;
    },
    rC = (e) =>
        e.replace(
            /[A-Z]+(?![a-z])|[A-Z]/g,
            (t, n) => (n ? "-" : "") + t.toLowerCase()
        ),
    ad = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [a, r] of t) n[a] = r;
        return n;
    },
    lC = {},
    oC = { class: "logo", href: "/" },
    sC = zd(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.2 58.51" data-v-bbc24f7f><title data-v-bbc24f7f>Bustion</title><g data-v-bbc24f7f><path class="color-1" d="M23.63.65a5,5,0,0,1,4.94,0l10.58,6,10.49,6.17a5,5,0,0,1,2.46,4.27l.1,12.16-.1,12.17a5,5,0,0,1-2.46,4.27L39.15,51.86l-10.58,6a5.05,5.05,0,0,1-4.94,0l-10.58-6L2.56,45.69A5,5,0,0,1,.1,41.42L0,29.25.1,17.09a5,5,0,0,1,2.46-4.27L13.05,6.65Z" data-v-bbc24f7f></path><path class="color-2" d="M26.1,9l8.11,4.6,8,4.73.07,9.32L42.25,37l-8,4.72-8.11,4.6L18,41.68,10,37l-.07-9.33L10,18.31l8-4.73Z" data-v-bbc24f7f></path><path class="color-2" d="M34.21,13.58,26.1,9v37.3l8.11-4.6,8-4.72.07-9.33-.07-9.32Z" data-v-bbc24f7f></path><path class="color-2" d="M34.21,37.09,26.1,32.5,18,37.09l-8,4.73,8,4.73,8.11,4.59,8.11-4.59,8-4.73Z" data-v-bbc24f7f></path></g></svg>',
        1
    ),
    iC = [sC];
function uC(e, t) {
    return ke(), rt("a", oC, iC);
}
const cC = ad(lC, [
    ["render", uC],
    ["__scopeId", "data-v-bbc24f7f"],
]);
function rd(e, t) {
    return function () {
        return e.apply(t, arguments);
    };
}
const { toString: dC } = Object.prototype,
    { getPrototypeOf: Wl } = Object,
    lr = ((e) => (t) => {
        const n = dC.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    vt = (e) => ((e = e.toLowerCase()), (t) => lr(t) === e),
    or = (e) => (t) => typeof t === e,
    { isArray: Cn } = Array,
    Hn = or("undefined");
function fC(e) {
    return (
        e !== null &&
        !Hn(e) &&
        e.constructor !== null &&
        !Hn(e.constructor) &&
        Ye(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
    );
}
const ld = vt("ArrayBuffer");
function vC(e) {
    let t;
    return (
        typeof ArrayBuffer < "u" && ArrayBuffer.isView
            ? (t = ArrayBuffer.isView(e))
            : (t = e && e.buffer && ld(e.buffer)),
        t
    );
}
const mC = or("string"),
    Ye = or("function"),
    od = or("number"),
    sr = (e) => e !== null && typeof e == "object",
    hC = (e) => e === !0 || e === !1,
    ia = (e) => {
        if (lr(e) !== "object") return !1;
        const t = Wl(e);
        return (
            (t === null ||
                t === Object.prototype ||
                Object.getPrototypeOf(t) === null) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
        );
    },
    gC = vt("Date"),
    yC = vt("File"),
    pC = vt("Blob"),
    bC = vt("FileList"),
    SC = (e) => sr(e) && Ye(e.pipe),
    _C = (e) => {
        let t;
        return (
            e &&
            ((typeof FormData == "function" && e instanceof FormData) ||
                (Ye(e.append) &&
                    ((t = lr(e)) === "formdata" ||
                        (t === "object" &&
                            Ye(e.toString) &&
                            e.toString() === "[object FormData]"))))
        );
    },
    wC = vt("URLSearchParams"),
    CC = (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Yn(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > "u") return;
    let a, r;
    if ((typeof e != "object" && (e = [e]), Cn(e)))
        for (a = 0, r = e.length; a < r; a++) t.call(null, e[a], a, e);
    else {
        const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            o = l.length;
        let s;
        for (a = 0; a < o; a++) (s = l[a]), t.call(null, e[s], s, e);
    }
}
function sd(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let a = n.length,
        r;
    for (; a-- > 0; ) if (((r = n[a]), t === r.toLowerCase())) return r;
    return null;
}
const id =
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
            ? self
            : typeof window < "u"
            ? window
            : global,
    ud = (e) => !Hn(e) && e !== id;
function ol() {
    const { caseless: e } = (ud(this) && this) || {},
        t = {},
        n = (a, r) => {
            const l = (e && sd(t, r)) || r;
            ia(t[l]) && ia(a)
                ? (t[l] = ol(t[l], a))
                : ia(a)
                ? (t[l] = ol({}, a))
                : Cn(a)
                ? (t[l] = a.slice())
                : (t[l] = a);
        };
    for (let a = 0, r = arguments.length; a < r; a++)
        arguments[a] && Yn(arguments[a], n);
    return t;
}
const xC = (e, t, n, { allOwnKeys: a } = {}) => (
        Yn(
            t,
            (r, l) => {
                n && Ye(r) ? (e[l] = rd(r, n)) : (e[l] = r);
            },
            { allOwnKeys: a }
        ),
        e
    ),
    PC = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    kC = (e, t, n, a) => {
        (e.prototype = Object.create(t.prototype, a)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, "super", { value: t.prototype }),
            n && Object.assign(e.prototype, n);
    },
    EC = (e, t, n, a) => {
        let r, l, o;
        const s = {};
        if (((t = t || {}), e == null)) return t;
        do {
            for (r = Object.getOwnPropertyNames(e), l = r.length; l-- > 0; )
                (o = r[l]),
                    (!a || a(o, e, t)) && !s[o] && ((t[o] = e[o]), (s[o] = !0));
            e = n !== !1 && Wl(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
    },
    AC = (e, t, n) => {
        (e = String(e)),
            (n === void 0 || n > e.length) && (n = e.length),
            (n -= t.length);
        const a = e.indexOf(t, n);
        return a !== -1 && a === n;
    },
    TC = (e) => {
        if (!e) return null;
        if (Cn(e)) return e;
        let t = e.length;
        if (!od(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
    },
    IC = (
        (e) => (t) =>
            e && t instanceof e
    )(typeof Uint8Array < "u" && Wl(Uint8Array)),
    OC = (e, t) => {
        const a = (e && e[Symbol.iterator]).call(e);
        let r;
        for (; (r = a.next()) && !r.done; ) {
            const l = r.value;
            t.call(e, l[0], l[1]);
        }
    },
    VC = (e, t) => {
        let n;
        const a = [];
        for (; (n = e.exec(t)) !== null; ) a.push(n);
        return a;
    },
    RC = vt("HTMLFormElement"),
    $C = (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, a, r) {
            return a.toUpperCase() + r;
        }),
    Ys = (
        ({ hasOwnProperty: e }) =>
        (t, n) =>
            e.call(t, n)
    )(Object.prototype),
    DC = vt("RegExp"),
    cd = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            a = {};
        Yn(n, (r, l) => {
            let o;
            (o = t(r, l, e)) !== !1 && (a[l] = o || r);
        }),
            Object.defineProperties(e, a);
    },
    LC = (e) => {
        cd(e, (t, n) => {
            if (Ye(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
                return !1;
            const a = e[n];
            if (Ye(a)) {
                if (((t.enumerable = !1), "writable" in t)) {
                    t.writable = !1;
                    return;
                }
                t.set ||
                    (t.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + n + "'"
                        );
                    });
            }
        });
    },
    BC = (e, t) => {
        const n = {},
            a = (r) => {
                r.forEach((l) => {
                    n[l] = !0;
                });
            };
        return Cn(e) ? a(e) : a(String(e).split(t)), n;
    },
    FC = () => {},
    MC = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    Er = "abcdefghijklmnopqrstuvwxyz",
    Xs = "0123456789",
    dd = { DIGIT: Xs, ALPHA: Er, ALPHA_DIGIT: Er + Er.toUpperCase() + Xs },
    NC = (e = 16, t = dd.ALPHA_DIGIT) => {
        let n = "";
        const { length: a } = t;
        for (; e--; ) n += t[(Math.random() * a) | 0];
        return n;
    };
function jC(e) {
    return !!(
        e &&
        Ye(e.append) &&
        e[Symbol.toStringTag] === "FormData" &&
        e[Symbol.iterator]
    );
}
const HC = (e) => {
        const t = new Array(10),
            n = (a, r) => {
                if (sr(a)) {
                    if (t.indexOf(a) >= 0) return;
                    if (!("toJSON" in a)) {
                        t[r] = a;
                        const l = Cn(a) ? [] : {};
                        return (
                            Yn(a, (o, s) => {
                                const i = n(o, r + 1);
                                !Hn(i) && (l[s] = i);
                            }),
                            (t[r] = void 0),
                            l
                        );
                    }
                }
                return a;
            };
        return n(e, 0);
    },
    zC = vt("AsyncFunction"),
    UC = (e) => e && (sr(e) || Ye(e)) && Ye(e.then) && Ye(e.catch),
    $ = {
        isArray: Cn,
        isArrayBuffer: ld,
        isBuffer: fC,
        isFormData: _C,
        isArrayBufferView: vC,
        isString: mC,
        isNumber: od,
        isBoolean: hC,
        isObject: sr,
        isPlainObject: ia,
        isUndefined: Hn,
        isDate: gC,
        isFile: yC,
        isBlob: pC,
        isRegExp: DC,
        isFunction: Ye,
        isStream: SC,
        isURLSearchParams: wC,
        isTypedArray: IC,
        isFileList: bC,
        forEach: Yn,
        merge: ol,
        extend: xC,
        trim: CC,
        stripBOM: PC,
        inherits: kC,
        toFlatObject: EC,
        kindOf: lr,
        kindOfTest: vt,
        endsWith: AC,
        toArray: TC,
        forEachEntry: OC,
        matchAll: VC,
        isHTMLForm: RC,
        hasOwnProperty: Ys,
        hasOwnProp: Ys,
        reduceDescriptors: cd,
        freezeMethods: LC,
        toObjectSet: BC,
        toCamelCase: $C,
        noop: FC,
        toFiniteNumber: MC,
        findKey: sd,
        global: id,
        isContextDefined: ud,
        ALPHABET: dd,
        generateString: NC,
        isSpecCompliantForm: jC,
        toJSONObject: HC,
        isAsyncFn: zC,
        isThenable: UC,
    };
function fe(e, t, n, a, r) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = e),
        (this.name = "AxiosError"),
        t && (this.code = t),
        n && (this.config = n),
        a && (this.request = a),
        r && (this.response = r);
}
$.inherits(fe, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: $.toJSONObject(this.config),
            code: this.code,
            status:
                this.response && this.response.status
                    ? this.response.status
                    : null,
        };
    },
});
const fd = fe.prototype,
    vd = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
].forEach((e) => {
    vd[e] = { value: e };
});
Object.defineProperties(fe, vd);
Object.defineProperty(fd, "isAxiosError", { value: !0 });
fe.from = (e, t, n, a, r, l) => {
    const o = Object.create(fd);
    return (
        $.toFlatObject(
            e,
            o,
            function (i) {
                return i !== Error.prototype;
            },
            (s) => s !== "isAxiosError"
        ),
        fe.call(o, e.message, t, n, a, r),
        (o.cause = e),
        (o.name = e.name),
        l && Object.assign(o, l),
        o
    );
};
const GC = null;
function sl(e) {
    return $.isPlainObject(e) || $.isArray(e);
}
function md(e) {
    return $.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Js(e, t, n) {
    return e
        ? e
              .concat(t)
              .map(function (r, l) {
                  return (r = md(r)), !n && l ? "[" + r + "]" : r;
              })
              .join(n ? "." : "")
        : t;
}
function WC(e) {
    return $.isArray(e) && !e.some(sl);
}
const qC = $.toFlatObject($, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
});
function ir(e, t, n) {
    if (!$.isObject(e)) throw new TypeError("target must be an object");
    (t = t || new FormData()),
        (n = $.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (g, y) {
                return !$.isUndefined(y[g]);
            }
        ));
    const a = n.metaTokens,
        r = n.visitor || u,
        l = n.dots,
        o = n.indexes,
        i = (n.Blob || (typeof Blob < "u" && Blob)) && $.isSpecCompliantForm(t);
    if (!$.isFunction(r)) throw new TypeError("visitor must be a function");
    function c(h) {
        if (h === null) return "";
        if ($.isDate(h)) return h.toISOString();
        if (!i && $.isBlob(h))
            throw new fe("Blob is not supported. Use a Buffer instead.");
        return $.isArrayBuffer(h) || $.isTypedArray(h)
            ? i && typeof Blob == "function"
                ? new Blob([h])
                : Buffer.from(h)
            : h;
    }
    function u(h, g, y) {
        let b = h;
        if (h && !y && typeof h == "object") {
            if ($.endsWith(g, "{}"))
                (g = a ? g : g.slice(0, -2)), (h = JSON.stringify(h));
            else if (
                ($.isArray(h) && WC(h)) ||
                (($.isFileList(h) || $.endsWith(g, "[]")) && (b = $.toArray(h)))
            )
                return (
                    (g = md(g)),
                    b.forEach(function (x, P) {
                        !($.isUndefined(x) || x === null) &&
                            t.append(
                                o === !0
                                    ? Js([g], P, l)
                                    : o === null
                                    ? g
                                    : g + "[]",
                                c(x)
                            );
                    }),
                    !1
                );
        }
        return sl(h) ? !0 : (t.append(Js(y, g, l), c(h)), !1);
    }
    const d = [],
        f = Object.assign(qC, {
            defaultVisitor: u,
            convertValue: c,
            isVisitable: sl,
        });
    function v(h, g) {
        if (!$.isUndefined(h)) {
            if (d.indexOf(h) !== -1)
                throw Error("Circular reference detected in " + g.join("."));
            d.push(h),
                $.forEach(h, function (b, S) {
                    (!($.isUndefined(b) || b === null) &&
                        r.call(t, b, $.isString(S) ? S.trim() : S, g, f)) ===
                        !0 && v(b, g ? g.concat(S) : [S]);
                }),
                d.pop();
        }
    }
    if (!$.isObject(e)) throw new TypeError("data must be an object");
    return v(e), t;
}
function Zs(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (a) {
        return t[a];
    });
}
function ql(e, t) {
    (this._pairs = []), e && ir(e, this, t);
}
const hd = ql.prototype;
hd.append = function (t, n) {
    this._pairs.push([t, n]);
};
hd.toString = function (t) {
    const n = t
        ? function (a) {
              return t.call(this, a, Zs);
          }
        : Zs;
    return this._pairs
        .map(function (r) {
            return n(r[0]) + "=" + n(r[1]);
        }, "")
        .join("&");
};
function KC(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
}
function gd(e, t, n) {
    if (!t) return e;
    const a = (n && n.encode) || KC,
        r = n && n.serialize;
    let l;
    if (
        (r
            ? (l = r(t, n))
            : (l = $.isURLSearchParams(t)
                  ? t.toString()
                  : new ql(t, n).toString(a)),
        l)
    ) {
        const o = e.indexOf("#");
        o !== -1 && (e = e.slice(0, o)),
            (e += (e.indexOf("?") === -1 ? "?" : "&") + l);
    }
    return e;
}
class Qs {
    constructor() {
        this.handlers = [];
    }
    use(t, n, a) {
        return (
            this.handlers.push({
                fulfilled: t,
                rejected: n,
                synchronous: a ? a.synchronous : !1,
                runWhen: a ? a.runWhen : null,
            }),
            this.handlers.length - 1
        );
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
        this.handlers && (this.handlers = []);
    }
    forEach(t) {
        $.forEach(this.handlers, function (a) {
            a !== null && t(a);
        });
    }
}
const yd = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    YC = typeof URLSearchParams < "u" ? URLSearchParams : ql,
    XC = typeof FormData < "u" ? FormData : null,
    JC = typeof Blob < "u" ? Blob : null,
    ZC = {
        isBrowser: !0,
        classes: { URLSearchParams: YC, FormData: XC, Blob: JC },
        protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    pd = typeof window < "u" && typeof document < "u",
    QC = ((e) => pd && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
        typeof navigator < "u" && navigator.product
    ),
    ex =
        typeof WorkerGlobalScope < "u" &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == "function",
    tx = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                hasBrowserEnv: pd,
                hasStandardBrowserEnv: QC,
                hasStandardBrowserWebWorkerEnv: ex,
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    ot = { ...tx, ...ZC };
function nx(e, t) {
    return ir(
        e,
        new ot.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (n, a, r, l) {
                    return ot.isNode && $.isBuffer(n)
                        ? (this.append(a, n.toString("base64")), !1)
                        : l.defaultVisitor.apply(this, arguments);
                },
            },
            t
        )
    );
}
function ax(e) {
    return $.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
        t[0] === "[]" ? "" : t[1] || t[0]
    );
}
function rx(e) {
    const t = {},
        n = Object.keys(e);
    let a;
    const r = n.length;
    let l;
    for (a = 0; a < r; a++) (l = n[a]), (t[l] = e[l]);
    return t;
}
function bd(e) {
    function t(n, a, r, l) {
        let o = n[l++];
        if (o === "__proto__") return !0;
        const s = Number.isFinite(+o),
            i = l >= n.length;
        return (
            (o = !o && $.isArray(r) ? r.length : o),
            i
                ? ($.hasOwnProp(r, o) ? (r[o] = [r[o], a]) : (r[o] = a), !s)
                : ((!r[o] || !$.isObject(r[o])) && (r[o] = []),
                  t(n, a, r[o], l) && $.isArray(r[o]) && (r[o] = rx(r[o])),
                  !s)
        );
    }
    if ($.isFormData(e) && $.isFunction(e.entries)) {
        const n = {};
        return (
            $.forEachEntry(e, (a, r) => {
                t(ax(a), r, n, 0);
            }),
            n
        );
    }
    return null;
}
function lx(e, t, n) {
    if ($.isString(e))
        try {
            return (t || JSON.parse)(e), $.trim(e);
        } catch (a) {
            if (a.name !== "SyntaxError") throw a;
        }
    return (n || JSON.stringify)(e);
}
const Kl = {
    transitional: yd,
    adapter: ["xhr", "http"],
    transformRequest: [
        function (t, n) {
            const a = n.getContentType() || "",
                r = a.indexOf("application/json") > -1,
                l = $.isObject(t);
            if (
                (l && $.isHTMLForm(t) && (t = new FormData(t)), $.isFormData(t))
            )
                return r ? JSON.stringify(bd(t)) : t;
            if (
                $.isArrayBuffer(t) ||
                $.isBuffer(t) ||
                $.isStream(t) ||
                $.isFile(t) ||
                $.isBlob(t)
            )
                return t;
            if ($.isArrayBufferView(t)) return t.buffer;
            if ($.isURLSearchParams(t))
                return (
                    n.setContentType(
                        "application/x-www-form-urlencoded;charset=utf-8",
                        !1
                    ),
                    t.toString()
                );
            let s;
            if (l) {
                if (a.indexOf("application/x-www-form-urlencoded") > -1)
                    return nx(t, this.formSerializer).toString();
                if (
                    (s = $.isFileList(t)) ||
                    a.indexOf("multipart/form-data") > -1
                ) {
                    const i = this.env && this.env.FormData;
                    return ir(
                        s ? { "files[]": t } : t,
                        i && new i(),
                        this.formSerializer
                    );
                }
            }
            return l || r
                ? (n.setContentType("application/json", !1), lx(t))
                : t;
        },
    ],
    transformResponse: [
        function (t) {
            const n = this.transitional || Kl.transitional,
                a = n && n.forcedJSONParsing,
                r = this.responseType === "json";
            if (t && $.isString(t) && ((a && !this.responseType) || r)) {
                const o = !(n && n.silentJSONParsing) && r;
                try {
                    return JSON.parse(t);
                } catch (s) {
                    if (o)
                        throw s.name === "SyntaxError"
                            ? fe.from(
                                  s,
                                  fe.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response
                              )
                            : s;
                }
            }
            return t;
        },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: ot.classes.FormData, Blob: ot.classes.Blob },
    validateStatus: function (t) {
        return t >= 200 && t < 300;
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
        },
    },
};
$.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    Kl.headers[e] = {};
});
const Yl = Kl,
    ox = $.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
    ]),
    sx = (e) => {
        const t = {};
        let n, a, r;
        return (
            e &&
                e
                    .split(
                        `
`
                    )
                    .forEach(function (o) {
                        (r = o.indexOf(":")),
                            (n = o.substring(0, r).trim().toLowerCase()),
                            (a = o.substring(r + 1).trim()),
                            !(!n || (t[n] && ox[n])) &&
                                (n === "set-cookie"
                                    ? t[n]
                                        ? t[n].push(a)
                                        : (t[n] = [a])
                                    : (t[n] = t[n] ? t[n] + ", " + a : a));
                    }),
            t
        );
    },
    ei = Symbol("internals");
function An(e) {
    return e && String(e).trim().toLowerCase();
}
function ua(e) {
    return e === !1 || e == null ? e : $.isArray(e) ? e.map(ua) : String(e);
}
function ix(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let a;
    for (; (a = n.exec(e)); ) t[a[1]] = a[2];
    return t;
}
const ux = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ar(e, t, n, a, r) {
    if ($.isFunction(a)) return a.call(this, t, n);
    if ((r && (t = n), !!$.isString(t))) {
        if ($.isString(a)) return t.indexOf(a) !== -1;
        if ($.isRegExp(a)) return a.test(t);
    }
}
function cx(e) {
    return e
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (t, n, a) => n.toUpperCase() + a);
}
function dx(e, t) {
    const n = $.toCamelCase(" " + t);
    ["get", "set", "has"].forEach((a) => {
        Object.defineProperty(e, a + n, {
            value: function (r, l, o) {
                return this[a].call(this, t, r, l, o);
            },
            configurable: !0,
        });
    });
}
class ur {
    constructor(t) {
        t && this.set(t);
    }
    set(t, n, a) {
        const r = this;
        function l(s, i, c) {
            const u = An(i);
            if (!u) throw new Error("header name must be a non-empty string");
            const d = $.findKey(r, u);
            (!d ||
                r[d] === void 0 ||
                c === !0 ||
                (c === void 0 && r[d] !== !1)) &&
                (r[d || i] = ua(s));
        }
        const o = (s, i) => $.forEach(s, (c, u) => l(c, u, i));
        return (
            $.isPlainObject(t) || t instanceof this.constructor
                ? o(t, n)
                : $.isString(t) && (t = t.trim()) && !ux(t)
                ? o(sx(t), n)
                : t != null && l(n, t, a),
            this
        );
    }
    get(t, n) {
        if (((t = An(t)), t)) {
            const a = $.findKey(this, t);
            if (a) {
                const r = this[a];
                if (!n) return r;
                if (n === !0) return ix(r);
                if ($.isFunction(n)) return n.call(this, r, a);
                if ($.isRegExp(n)) return n.exec(r);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(t, n) {
        if (((t = An(t)), t)) {
            const a = $.findKey(this, t);
            return !!(
                a &&
                this[a] !== void 0 &&
                (!n || Ar(this, this[a], a, n))
            );
        }
        return !1;
    }
    delete(t, n) {
        const a = this;
        let r = !1;
        function l(o) {
            if (((o = An(o)), o)) {
                const s = $.findKey(a, o);
                s && (!n || Ar(a, a[s], s, n)) && (delete a[s], (r = !0));
            }
        }
        return $.isArray(t) ? t.forEach(l) : l(t), r;
    }
    clear(t) {
        const n = Object.keys(this);
        let a = n.length,
            r = !1;
        for (; a--; ) {
            const l = n[a];
            (!t || Ar(this, this[l], l, t, !0)) && (delete this[l], (r = !0));
        }
        return r;
    }
    normalize(t) {
        const n = this,
            a = {};
        return (
            $.forEach(this, (r, l) => {
                const o = $.findKey(a, l);
                if (o) {
                    (n[o] = ua(r)), delete n[l];
                    return;
                }
                const s = t ? cx(l) : String(l).trim();
                s !== l && delete n[l], (n[s] = ua(r)), (a[s] = !0);
            }),
            this
        );
    }
    concat(...t) {
        return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
        const n = Object.create(null);
        return (
            $.forEach(this, (a, r) => {
                a != null &&
                    a !== !1 &&
                    (n[r] = t && $.isArray(a) ? a.join(", ") : a);
            }),
            n
        );
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n)
            .join(`
`);
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(t) {
        return t instanceof this ? t : new this(t);
    }
    static concat(t, ...n) {
        const a = new this(t);
        return n.forEach((r) => a.set(r)), a;
    }
    static accessor(t) {
        const a = (this[ei] = this[ei] = { accessors: {} }).accessors,
            r = this.prototype;
        function l(o) {
            const s = An(o);
            a[s] || (dx(r, o), (a[s] = !0));
        }
        return $.isArray(t) ? t.forEach(l) : l(t), this;
    }
}
ur.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
]);
$.reduceDescriptors(ur.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(a) {
            this[n] = a;
        },
    };
});
$.freezeMethods(ur);
const gt = ur;
function Tr(e, t) {
    const n = this || Yl,
        a = t || n,
        r = gt.from(a.headers);
    let l = a.data;
    return (
        $.forEach(e, function (s) {
            l = s.call(n, l, r.normalize(), t ? t.status : void 0);
        }),
        r.normalize(),
        l
    );
}
function Sd(e) {
    return !!(e && e.__CANCEL__);
}
function Xn(e, t, n) {
    fe.call(this, e ?? "canceled", fe.ERR_CANCELED, t, n),
        (this.name = "CanceledError");
}
$.inherits(Xn, fe, { __CANCEL__: !0 });
function fx(e, t, n) {
    const a = n.config.validateStatus;
    !n.status || !a || a(n.status)
        ? e(n)
        : t(
              new fe(
                  "Request failed with status code " + n.status,
                  [fe.ERR_BAD_REQUEST, fe.ERR_BAD_RESPONSE][
                      Math.floor(n.status / 100) - 4
                  ],
                  n.config,
                  n.request,
                  n
              )
          );
}
const vx = ot.hasStandardBrowserEnv
    ? {
          write(e, t, n, a, r, l) {
              const o = [e + "=" + encodeURIComponent(t)];
              $.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
                  $.isString(a) && o.push("path=" + a),
                  $.isString(r) && o.push("domain=" + r),
                  l === !0 && o.push("secure"),
                  (document.cookie = o.join("; "));
          },
          read(e) {
              const t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
              this.write(e, "", Date.now() - 864e5);
          },
      }
    : {
          write() {},
          read() {
              return null;
          },
          remove() {},
      };
function mx(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function hx(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function _d(e, t) {
    return e && !mx(t) ? hx(e, t) : t;
}
const gx = ot.hasStandardBrowserEnv
    ? (function () {
          const t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
          let a;
          function r(l) {
              let o = l;
              return (
                  t && (n.setAttribute("href", o), (o = n.href)),
                  n.setAttribute("href", o),
                  {
                      href: n.href,
                      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                      host: n.host,
                      search: n.search ? n.search.replace(/^\?/, "") : "",
                      hash: n.hash ? n.hash.replace(/^#/, "") : "",
                      hostname: n.hostname,
                      port: n.port,
                      pathname:
                          n.pathname.charAt(0) === "/"
                              ? n.pathname
                              : "/" + n.pathname,
                  }
              );
          }
          return (
              (a = r(window.location.href)),
              function (o) {
                  const s = $.isString(o) ? r(o) : o;
                  return s.protocol === a.protocol && s.host === a.host;
              }
          );
      })()
    : (function () {
          return function () {
              return !0;
          };
      })();
function yx(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || "";
}
function px(e, t) {
    e = e || 10;
    const n = new Array(e),
        a = new Array(e);
    let r = 0,
        l = 0,
        o;
    return (
        (t = t !== void 0 ? t : 1e3),
        function (i) {
            const c = Date.now(),
                u = a[l];
            o || (o = c), (n[r] = i), (a[r] = c);
            let d = l,
                f = 0;
            for (; d !== r; ) (f += n[d++]), (d = d % e);
            if (((r = (r + 1) % e), r === l && (l = (l + 1) % e), c - o < t))
                return;
            const v = u && c - u;
            return v ? Math.round((f * 1e3) / v) : void 0;
        }
    );
}
function ti(e, t) {
    let n = 0;
    const a = px(50, 250);
    return (r) => {
        const l = r.loaded,
            o = r.lengthComputable ? r.total : void 0,
            s = l - n,
            i = a(s),
            c = l <= o;
        n = l;
        const u = {
            loaded: l,
            total: o,
            progress: o ? l / o : void 0,
            bytes: s,
            rate: i || void 0,
            estimated: i && o && c ? (o - l) / i : void 0,
            event: r,
        };
        (u[t ? "download" : "upload"] = !0), e(u);
    };
}
const bx = typeof XMLHttpRequest < "u",
    Sx =
        bx &&
        function (e) {
            return new Promise(function (n, a) {
                let r = e.data;
                const l = gt.from(e.headers).normalize();
                let { responseType: o, withXSRFToken: s } = e,
                    i;
                function c() {
                    e.cancelToken && e.cancelToken.unsubscribe(i),
                        e.signal && e.signal.removeEventListener("abort", i);
                }
                let u;
                if ($.isFormData(r)) {
                    if (
                        ot.hasStandardBrowserEnv ||
                        ot.hasStandardBrowserWebWorkerEnv
                    )
                        l.setContentType(!1);
                    else if ((u = l.getContentType()) !== !1) {
                        const [g, ...y] = u
                            ? u
                                  .split(";")
                                  .map((b) => b.trim())
                                  .filter(Boolean)
                            : [];
                        l.setContentType(
                            [g || "multipart/form-data", ...y].join("; ")
                        );
                    }
                }
                let d = new XMLHttpRequest();
                if (e.auth) {
                    const g = e.auth.username || "",
                        y = e.auth.password
                            ? unescape(encodeURIComponent(e.auth.password))
                            : "";
                    l.set("Authorization", "Basic " + btoa(g + ":" + y));
                }
                const f = _d(e.baseURL, e.url);
                d.open(
                    e.method.toUpperCase(),
                    gd(f, e.params, e.paramsSerializer),
                    !0
                ),
                    (d.timeout = e.timeout);
                function v() {
                    if (!d) return;
                    const g = gt.from(
                            "getAllResponseHeaders" in d &&
                                d.getAllResponseHeaders()
                        ),
                        b = {
                            data:
                                !o || o === "text" || o === "json"
                                    ? d.responseText
                                    : d.response,
                            status: d.status,
                            statusText: d.statusText,
                            headers: g,
                            config: e,
                            request: d,
                        };
                    fx(
                        function (x) {
                            n(x), c();
                        },
                        function (x) {
                            a(x), c();
                        },
                        b
                    ),
                        (d = null);
                }
                if (
                    ("onloadend" in d
                        ? (d.onloadend = v)
                        : (d.onreadystatechange = function () {
                              !d ||
                                  d.readyState !== 4 ||
                                  (d.status === 0 &&
                                      !(
                                          d.responseURL &&
                                          d.responseURL.indexOf("file:") === 0
                                      )) ||
                                  setTimeout(v);
                          }),
                    (d.onabort = function () {
                        d &&
                            (a(
                                new fe("Request aborted", fe.ECONNABORTED, e, d)
                            ),
                            (d = null));
                    }),
                    (d.onerror = function () {
                        a(new fe("Network Error", fe.ERR_NETWORK, e, d)),
                            (d = null);
                    }),
                    (d.ontimeout = function () {
                        let y = e.timeout
                            ? "timeout of " + e.timeout + "ms exceeded"
                            : "timeout exceeded";
                        const b = e.transitional || yd;
                        e.timeoutErrorMessage && (y = e.timeoutErrorMessage),
                            a(
                                new fe(
                                    y,
                                    b.clarifyTimeoutError
                                        ? fe.ETIMEDOUT
                                        : fe.ECONNABORTED,
                                    e,
                                    d
                                )
                            ),
                            (d = null);
                    }),
                    ot.hasStandardBrowserEnv &&
                        (s && $.isFunction(s) && (s = s(e)),
                        s || (s !== !1 && gx(f))))
                ) {
                    const g =
                        e.xsrfHeaderName &&
                        e.xsrfCookieName &&
                        vx.read(e.xsrfCookieName);
                    g && l.set(e.xsrfHeaderName, g);
                }
                r === void 0 && l.setContentType(null),
                    "setRequestHeader" in d &&
                        $.forEach(l.toJSON(), function (y, b) {
                            d.setRequestHeader(b, y);
                        }),
                    $.isUndefined(e.withCredentials) ||
                        (d.withCredentials = !!e.withCredentials),
                    o && o !== "json" && (d.responseType = e.responseType),
                    typeof e.onDownloadProgress == "function" &&
                        d.addEventListener(
                            "progress",
                            ti(e.onDownloadProgress, !0)
                        ),
                    typeof e.onUploadProgress == "function" &&
                        d.upload &&
                        d.upload.addEventListener(
                            "progress",
                            ti(e.onUploadProgress)
                        ),
                    (e.cancelToken || e.signal) &&
                        ((i = (g) => {
                            d &&
                                (a(!g || g.type ? new Xn(null, e, d) : g),
                                d.abort(),
                                (d = null));
                        }),
                        e.cancelToken && e.cancelToken.subscribe(i),
                        e.signal &&
                            (e.signal.aborted
                                ? i()
                                : e.signal.addEventListener("abort", i)));
                const h = yx(f);
                if (h && ot.protocols.indexOf(h) === -1) {
                    a(
                        new fe(
                            "Unsupported protocol " + h + ":",
                            fe.ERR_BAD_REQUEST,
                            e
                        )
                    );
                    return;
                }
                d.send(r || null);
            });
        },
    il = { http: GC, xhr: Sx };
$.forEach(il, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", { value: t });
        } catch {}
        Object.defineProperty(e, "adapterName", { value: t });
    }
});
const ni = (e) => `- ${e}`,
    _x = (e) => $.isFunction(e) || e === null || e === !1,
    wd = {
        getAdapter: (e) => {
            e = $.isArray(e) ? e : [e];
            const { length: t } = e;
            let n, a;
            const r = {};
            for (let l = 0; l < t; l++) {
                n = e[l];
                let o;
                if (
                    ((a = n),
                    !_x(n) &&
                        ((a = il[(o = String(n)).toLowerCase()]), a === void 0))
                )
                    throw new fe(`Unknown adapter '${o}'`);
                if (a) break;
                r[o || "#" + l] = a;
            }
            if (!a) {
                const l = Object.entries(r).map(
                    ([s, i]) =>
                        `adapter ${s} ` +
                        (i === !1
                            ? "is not supported by the environment"
                            : "is not available in the build")
                );
                let o = t
                    ? l.length > 1
                        ? `since :
` +
                          l.map(ni).join(`
`)
                        : " " + ni(l[0])
                    : "as no adapter specified";
                throw new fe(
                    "There is no suitable adapter to dispatch the request " + o,
                    "ERR_NOT_SUPPORT"
                );
            }
            return a;
        },
        adapters: il,
    };
function Ir(e) {
    if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
    )
        throw new Xn(null, e);
}
function ai(e) {
    return (
        Ir(e),
        (e.headers = gt.from(e.headers)),
        (e.data = Tr.call(e, e.transformRequest)),
        ["post", "put", "patch"].indexOf(e.method) !== -1 &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
        wd
            .getAdapter(e.adapter || Yl.adapter)(e)
            .then(
                function (a) {
                    return (
                        Ir(e),
                        (a.data = Tr.call(e, e.transformResponse, a)),
                        (a.headers = gt.from(a.headers)),
                        a
                    );
                },
                function (a) {
                    return (
                        Sd(a) ||
                            (Ir(e),
                            a &&
                                a.response &&
                                ((a.response.data = Tr.call(
                                    e,
                                    e.transformResponse,
                                    a.response
                                )),
                                (a.response.headers = gt.from(
                                    a.response.headers
                                )))),
                        Promise.reject(a)
                    );
                }
            )
    );
}
const ri = (e) => (e instanceof gt ? e.toJSON() : e);
function ln(e, t) {
    t = t || {};
    const n = {};
    function a(c, u, d) {
        return $.isPlainObject(c) && $.isPlainObject(u)
            ? $.merge.call({ caseless: d }, c, u)
            : $.isPlainObject(u)
            ? $.merge({}, u)
            : $.isArray(u)
            ? u.slice()
            : u;
    }
    function r(c, u, d) {
        if ($.isUndefined(u)) {
            if (!$.isUndefined(c)) return a(void 0, c, d);
        } else return a(c, u, d);
    }
    function l(c, u) {
        if (!$.isUndefined(u)) return a(void 0, u);
    }
    function o(c, u) {
        if ($.isUndefined(u)) {
            if (!$.isUndefined(c)) return a(void 0, c);
        } else return a(void 0, u);
    }
    function s(c, u, d) {
        if (d in t) return a(c, u);
        if (d in e) return a(void 0, c);
    }
    const i = {
        url: l,
        method: l,
        data: l,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        withXSRFToken: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: s,
        headers: (c, u) => r(ri(c), ri(u), !0),
    };
    return (
        $.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
            const d = i[u] || r,
                f = d(e[u], t[u], u);
            ($.isUndefined(f) && d !== s) || (n[u] = f);
        }),
        n
    );
}
const Cd = "1.6.7",
    Xl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
        Xl[e] = function (a) {
            return typeof a === e || "a" + (t < 1 ? "n " : " ") + e;
        };
    }
);
const li = {};
Xl.transitional = function (t, n, a) {
    function r(l, o) {
        return (
            "[Axios v" +
            Cd +
            "] Transitional option '" +
            l +
            "'" +
            o +
            (a ? ". " + a : "")
        );
    }
    return (l, o, s) => {
        if (t === !1)
            throw new fe(
                r(o, " has been removed" + (n ? " in " + n : "")),
                fe.ERR_DEPRECATED
            );
        return (
            n &&
                !li[o] &&
                ((li[o] = !0),
                console.warn(
                    r(
                        o,
                        " has been deprecated since v" +
                            n +
                            " and will be removed in the near future"
                    )
                )),
            t ? t(l, o, s) : !0
        );
    };
};
function wx(e, t, n) {
    if (typeof e != "object")
        throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
    const a = Object.keys(e);
    let r = a.length;
    for (; r-- > 0; ) {
        const l = a[r],
            o = t[l];
        if (o) {
            const s = e[l],
                i = s === void 0 || o(s, l, e);
            if (i !== !0)
                throw new fe(
                    "option " + l + " must be " + i,
                    fe.ERR_BAD_OPTION_VALUE
                );
            continue;
        }
        if (n !== !0) throw new fe("Unknown option " + l, fe.ERR_BAD_OPTION);
    }
}
const ul = { assertOptions: wx, validators: Xl },
    xt = ul.validators;
class Ra {
    constructor(t) {
        (this.defaults = t),
            (this.interceptors = { request: new Qs(), response: new Qs() });
    }
    async request(t, n) {
        try {
            return await this._request(t, n);
        } catch (a) {
            if (a instanceof Error) {
                let r;
                Error.captureStackTrace
                    ? Error.captureStackTrace((r = {}))
                    : (r = new Error());
                const l = r.stack ? r.stack.replace(/^.+\n/, "") : "";
                a.stack
                    ? l &&
                      !String(a.stack).endsWith(l.replace(/^.+\n.+\n/, "")) &&
                      (a.stack +=
                          `
` + l)
                    : (a.stack = l);
            }
            throw a;
        }
    }
    _request(t, n) {
        typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
            (n = ln(this.defaults, n));
        const { transitional: a, paramsSerializer: r, headers: l } = n;
        a !== void 0 &&
            ul.assertOptions(
                a,
                {
                    silentJSONParsing: xt.transitional(xt.boolean),
                    forcedJSONParsing: xt.transitional(xt.boolean),
                    clarifyTimeoutError: xt.transitional(xt.boolean),
                },
                !1
            ),
            r != null &&
                ($.isFunction(r)
                    ? (n.paramsSerializer = { serialize: r })
                    : ul.assertOptions(
                          r,
                          { encode: xt.function, serialize: xt.function },
                          !0
                      )),
            (n.method = (
                n.method ||
                this.defaults.method ||
                "get"
            ).toLowerCase());
        let o = l && $.merge(l.common, l[n.method]);
        l &&
            $.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (h) => {
                    delete l[h];
                }
            ),
            (n.headers = gt.concat(o, l));
        const s = [];
        let i = !0;
        this.interceptors.request.forEach(function (g) {
            (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
                ((i = i && g.synchronous), s.unshift(g.fulfilled, g.rejected));
        });
        const c = [];
        this.interceptors.response.forEach(function (g) {
            c.push(g.fulfilled, g.rejected);
        });
        let u,
            d = 0,
            f;
        if (!i) {
            const h = [ai.bind(this), void 0];
            for (
                h.unshift.apply(h, s),
                    h.push.apply(h, c),
                    f = h.length,
                    u = Promise.resolve(n);
                d < f;

            )
                u = u.then(h[d++], h[d++]);
            return u;
        }
        f = s.length;
        let v = n;
        for (d = 0; d < f; ) {
            const h = s[d++],
                g = s[d++];
            try {
                v = h(v);
            } catch (y) {
                g.call(this, y);
                break;
            }
        }
        try {
            u = ai.call(this, v);
        } catch (h) {
            return Promise.reject(h);
        }
        for (d = 0, f = c.length; d < f; ) u = u.then(c[d++], c[d++]);
        return u;
    }
    getUri(t) {
        t = ln(this.defaults, t);
        const n = _d(t.baseURL, t.url);
        return gd(n, t.params, t.paramsSerializer);
    }
}
$.forEach(["delete", "get", "head", "options"], function (t) {
    Ra.prototype[t] = function (n, a) {
        return this.request(
            ln(a || {}, { method: t, url: n, data: (a || {}).data })
        );
    };
});
$.forEach(["post", "put", "patch"], function (t) {
    function n(a) {
        return function (l, o, s) {
            return this.request(
                ln(s || {}, {
                    method: t,
                    headers: a ? { "Content-Type": "multipart/form-data" } : {},
                    url: l,
                    data: o,
                })
            );
        };
    }
    (Ra.prototype[t] = n()), (Ra.prototype[t + "Form"] = n(!0));
});
const ca = Ra;
class Jl {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (l) {
            n = l;
        });
        const a = this;
        this.promise.then((r) => {
            if (!a._listeners) return;
            let l = a._listeners.length;
            for (; l-- > 0; ) a._listeners[l](r);
            a._listeners = null;
        }),
            (this.promise.then = (r) => {
                let l;
                const o = new Promise((s) => {
                    a.subscribe(s), (l = s);
                }).then(r);
                return (
                    (o.cancel = function () {
                        a.unsubscribe(l);
                    }),
                    o
                );
            }),
            t(function (l, o, s) {
                a.reason || ((a.reason = new Xn(l, o, s)), n(a.reason));
            });
    }
    throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return;
        }
        this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1);
    }
    static source() {
        let t;
        return {
            token: new Jl(function (r) {
                t = r;
            }),
            cancel: t,
        };
    }
}
const Cx = Jl;
function xx(e) {
    return function (n) {
        return e.apply(null, n);
    };
}
function Px(e) {
    return $.isObject(e) && e.isAxiosError === !0;
}
const cl = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
};
Object.entries(cl).forEach(([e, t]) => {
    cl[t] = e;
});
const kx = cl;
function xd(e) {
    const t = new ca(e),
        n = rd(ca.prototype.request, t);
    return (
        $.extend(n, ca.prototype, t, { allOwnKeys: !0 }),
        $.extend(n, t, null, { allOwnKeys: !0 }),
        (n.create = function (r) {
            return xd(ln(e, r));
        }),
        n
    );
}
const Te = xd(Yl);
Te.Axios = ca;
Te.CanceledError = Xn;
Te.CancelToken = Cx;
Te.isCancel = Sd;
Te.VERSION = Cd;
Te.toFormData = ir;
Te.AxiosError = fe;
Te.Cancel = Te.CanceledError;
Te.all = function (t) {
    return Promise.all(t);
};
Te.spread = xx;
Te.isAxiosError = Px;
Te.mergeConfig = ln;
Te.AxiosHeaders = gt;
Te.formToJSON = (e) => bd($.isHTMLForm(e) ? new FormData(e) : e);
Te.getAdapter = wd.getAdapter;
Te.HttpStatusCode = kx;
Te.default = Te;
const Qt = Te.create({
    baseURL: "http://localhost:8000",
    withCredentials: !0,
    withXSRFToken: !0,
    headers: { Accept: "application/json" },
});
Qt.interceptors.request.use(
    (e) => e,
    (e) => e
);
Qt.interceptors.response.use(
    (e) => e,
    async (e) => {
        var a, r, l, o, s;
        const t =
                ((r =
                    (a = e == null ? void 0 : e.response) == null
                        ? void 0
                        : a.data) == null
                    ? void 0
                    : r.message) || e.message,
            n = Zl();
        return (
            ((l = e.response) == null ? void 0 : l.status.toString()[0]) !==
                "5" &&
                ((o = e.response) == null ? void 0 : o.status) !== "404" &&
                Ql.push({ name: "Login" }),
            ((s = e.response) == null ? void 0 : s.status.toString()) ===
                "401" && n.user
                ? await n.logout()
                : vi().pushNotification({ content: t, color: "error" }),
            Promise.reject(e)
        );
    }
);
const Zl = La("user", () => {
        const e = H(null),
            t = async () => {
                try {
                    const { data: r } = await Qt.get("/api/admin/me");
                    e.value = r;
                } catch (r) {
                    return r;
                }
            };
        return {
            user: e,
            getUser: t,
            logout: async () => {
                try {
                    (e.value = null), await Qt.post("/logout");
                } catch (r) {
                    console.log(r);
                }
            },
            login: async (r) => {
                try {
                    return await Qt.post("/login", r), await t(), e.value;
                } catch (l) {
                    return Promise.reject(l);
                }
            },
        };
    }),
    Ex = pt({
        __name: "AppBar",
        setup(e) {
            const t = im(),
                n = Zl(),
                a = lv(),
                r = H(!1),
                l = ce("menuDrawer", H(!1)),
                o = () => {
                    t.global.name.value = t.global.current.value.dark
                        ? "light"
                        : "defaultDarkTheme";
                },
                s = () => {
                    n.logout(), a.push({ name: "Login" });
                };
            return (i, c) => (
                ke(),
                et(
                    fg,
                    {
                        order: "-1",
                        elevation: 0,
                        border: !0,
                        class: "app-bar",
                        flat: "",
                    },
                    {
                        append: ye(() => [
                            m(
                                oc,
                                {
                                    "open-delay": 50,
                                    "close-delay": 50,
                                    modelValue: r.value,
                                    "onUpdate:modelValue":
                                        c[1] || (c[1] = (u) => (r.value = u)),
                                    "close-on-content-click": !1,
                                    location: "bottom",
                                },
                                {
                                    activator: ye(({ props: u }) => [
                                        m(
                                            Qe,
                                            K({ icon: "" }, u),
                                            {
                                                default: ye(() => [
                                                    m(Ae, null, {
                                                        default: ye(() => [
                                                            ht(
                                                                "mdi-account-circle"
                                                            ),
                                                        ]),
                                                        _: 1,
                                                    }),
                                                ]),
                                                _: 2,
                                            },
                                            1040
                                        ),
                                    ]),
                                    default: ye(() => [
                                        m(
                                            Py,
                                            { "min-width": "300" },
                                            {
                                                default: ye(() => [
                                                    m(Bl, null, {
                                                        default: ye(() => {
                                                            var u, d;
                                                            return [
                                                                m(Jr, null, {
                                                                    default: ye(
                                                                        () => [
                                                                            ht(
                                                                                "Пользователь"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    _: 1,
                                                                }),
                                                                m(
                                                                    rn,
                                                                    {
                                                                        title:
                                                                            (u =
                                                                                he(
                                                                                    n
                                                                                ).user) ==
                                                                            null
                                                                                ? void 0
                                                                                : u.name,
                                                                        subtitle:
                                                                            (d =
                                                                                he(
                                                                                    n
                                                                                ).user) ==
                                                                            null
                                                                                ? void 0
                                                                                : d.email,
                                                                        class: "mb-4",
                                                                    },
                                                                    null,
                                                                    8,
                                                                    [
                                                                        "title",
                                                                        "subtitle",
                                                                    ]
                                                                ),
                                                                m(Pa),
                                                                m(Jr, null, {
                                                                    default: ye(
                                                                        () => [
                                                                            ht(
                                                                                "Настройки"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    _: 1,
                                                                }),
                                                            ];
                                                        }),
                                                        _: 1,
                                                    }),
                                                    m(
                                                        hp,
                                                        {
                                                            class: "ml-4",
                                                            color: "primary",
                                                            label: he(t).global
                                                                .name.value,
                                                            "model-value":
                                                                he(t).global
                                                                    .name
                                                                    .value ===
                                                                "defaultDarkTheme",
                                                            "onUpdate:modelValue":
                                                                o,
                                                        },
                                                        null,
                                                        8,
                                                        ["label", "model-value"]
                                                    ),
                                                    m(Pa),
                                                    m(ic, null, {
                                                        default: ye(() => [
                                                            m(
                                                                Qe,
                                                                {
                                                                    color: "primary",
                                                                    variant:
                                                                        "outlined",
                                                                    block: "",
                                                                    onClick: s,
                                                                },
                                                                {
                                                                    default: ye(
                                                                        () => [
                                                                            ht(
                                                                                " Выйти "
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    _: 1,
                                                                }
                                                            ),
                                                        ]),
                                                        _: 1,
                                                    }),
                                                ]),
                                                _: 1,
                                            }
                                        ),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ["modelValue"]
                            ),
                        ]),
                        default: ye(() => [
                            m(mg, {
                                onClick:
                                    c[0] || (c[0] = (u) => (l.value = !he(l))),
                            }),
                            m(cC),
                            m(hg, null, {
                                default: ye(() => [ht("Bustion.CMS")]),
                                _: 1,
                            }),
                        ]),
                        _: 1,
                    }
                )
            );
        },
    }),
    Ax = pt({
        __name: "AppNavigationDrawer",
        setup(e) {
            const t = ce("menuDrawer", H(!1)),
                n = Hc(),
                a = p(() =>
                    to
                        .sortBy(Object.values(n.modules), ["title"])
                        .map((r) => ({
                            ...r,
                            to: `${to.capitalize(r.key)}List`,
                        }))
                        .filter(({ list: r }) => r)
                );
            return (r, l) => (
                ke(),
                et(
                    jc,
                    {
                        modelValue: he(t),
                        "onUpdate:modelValue":
                            l[0] ||
                            (l[0] = (o) => (Xe(t) ? (t.value = o) : null)),
                    },
                    {
                        default: ye(() => [
                            m(
                                Bl,
                                { density: "compact", nav: "" },
                                {
                                    default: ye(() => [
                                        (ke(!0),
                                        rt(
                                            ue,
                                            null,
                                            hl(
                                                a.value,
                                                (o) => (
                                                    ke(),
                                                    et(
                                                        rn,
                                                        {
                                                            nav: "",
                                                            key: o.key,
                                                            "prepend-icon":
                                                                o.icon,
                                                            link: "",
                                                            title: o.title,
                                                            to: { name: o.to },
                                                        },
                                                        null,
                                                        8,
                                                        [
                                                            "prepend-icon",
                                                            "title",
                                                            "to",
                                                        ]
                                                    )
                                                )
                                            ),
                                            128
                                        )),
                                    ]),
                                    _: 1,
                                }
                            ),
                        ]),
                        _: 1,
                    },
                    8,
                    ["modelValue"]
                )
            );
        },
    }),
    Tx = pt({
        __name: "AppModalsDrawer",
        setup(e) {
            const t = vn(),
                n = mi(),
                a = p(() => (t.width.value - 256) / 2 || 1e3),
                { modals: r } = ef(n);
            n.$subscribe((o, { modals: s }) => {
                s.length === 0 && (n.show = !1);
            });
            const l = () => {
                (n.modals = []), (n.show = !1);
            };
            return (o, s) => (
                ke(),
                et(
                    jc,
                    {
                        width: a.value,
                        "disable-resize-watcher": "",
                        location: "right",
                        "model-value": he(n).show,
                        "onUpdate:modelValue": l,
                        class: "modals-wrapper",
                    },
                    {
                        default: ye(() => [
                            (ke(!0),
                            rt(
                                ue,
                                null,
                                hl(
                                    he(r),
                                    (i, c) => (
                                        ke(),
                                        et(
                                            da(i.component),
                                            K(
                                                { class: "modal" },
                                                { ...i.props },
                                                Ud({ ...i.actions }),
                                                { key: c }
                                            ),
                                            null,
                                            16
                                        )
                                    )
                                ),
                                128
                            )),
                        ]),
                        _: 1,
                    },
                    8,
                    ["width", "model-value"]
                )
            );
        },
    }),
    Ix = {};
function Ox(e, t) {
    return (
        ke(),
        et(
            lp,
            { class: "d-flex align-center justify-center" },
            { default: ye(() => [yl(e.$slots, "default")]), _: 3 }
        )
    );
}
const Vx = ad(Ix, [["render", Ox]]),
    Or = pt({
        __name: "Authenticated",
        setup(e) {
            const t = H(!0);
            pe("menuDrawer", t);
            let n;
            return (
                Ue(() => {
                    (n = document.querySelector("html")),
                        n && (n.style.overflow = "hidden");
                }),
                Re(() => {
                    n && (n.style.overflow = "auto");
                }),
                (a, r) => (
                    ke(),
                    et(yu, null, {
                        default: ye(() => [
                            m(Ax),
                            m(Ex),
                            m(Vx, null, {
                                default: ye(() => [yl(a.$slots, "default")]),
                                _: 3,
                            }),
                            m(Tx),
                        ]),
                        _: 3,
                    })
                )
            );
        },
    }),
    Rx = (e) => {
        const t = {
            path: `/${e}`,
            meta: { layout: Or },
            name: `${kr(e)}List`,
            component: () =>
                Rn(
                    Object.assign({
                        "../category/components/List.vue": () =>
                            ee(
                                () => import("./List.js"),
                                __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])
                            ),
                        "../footer/components/List.vue": () =>
                            ee(
                                () => import("./List2.js"),
                                __vite__mapDeps([9, 1, 2, 3, 4, 5, 6, 7, 8])
                            ),
                        "../header/components/List.vue": () =>
                            ee(
                                () => import("./List3.js"),
                                __vite__mapDeps([10, 1, 2, 3, 4, 5, 6, 7, 8])
                            ),
                        "../language/components/List.vue": () =>
                            ee(
                                () => import("./List4.js"),
                                __vite__mapDeps([11, 1, 2, 3, 4, 5, 6, 7, 8])
                            ),
                        "../menu/components/List.vue": () =>
                            ee(
                                () => import("./List5.js"),
                                __vite__mapDeps([12, 1, 2, 3, 4, 5, 6, 7, 8])
                            ),
                        "../menuItem/components/List.vue": () =>
                            ee(
                                () => import("./List6.js"),
                                __vite__mapDeps([13, 1, 2, 3, 4, 5, 6, 7, 8])
                            ),
                        "../page/components/List.vue": () =>
                            ee(
                                () => import("./List7.js"),
                                __vite__mapDeps([14, 1, 2, 3, 4, 5, 6, 7, 8])
                            ),
                        "../product/components/List.vue": () =>
                            ee(
                                () => import("./List8.js"),
                                __vite__mapDeps([15, 1, 2, 3, 4, 5, 6, 7, 8])
                            ),
                        "../template/components/List.vue": () =>
                            ee(
                                () => import("./List9.js"),
                                __vite__mapDeps([16, 1, 2, 3, 4, 5, 6, 7, 8])
                            ),
                        "../user/components/List.vue": () =>
                            ee(
                                () => import("./List10.js"),
                                __vite__mapDeps([17, 1, 2, 3, 4, 5, 6, 7, 8])
                            ),
                    }),
                    `../${e}/components/List.vue`
                ),
        };
        return (
            e === "page" && (t.alias = ""),
            [
                t,
                {
                    path: `/${e}/create`,
                    meta: { layout: Or },
                    name: `${kr(e)}Create`,
                    component: () =>
                        Rn(
                            Object.assign({
                                "../category/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail.js"),
                                        __vite__mapDeps([
                                            18, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../footer/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail2.js"),
                                        __vite__mapDeps([
                                            23, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../header/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail3.js"),
                                        __vite__mapDeps([
                                            24, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../language/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail4.js"),
                                        __vite__mapDeps([
                                            25, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../menu/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail5.js"),
                                        __vite__mapDeps([
                                            26, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../menuItem/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail6.js"),
                                        __vite__mapDeps([
                                            27, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../page/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail7.js"),
                                        __vite__mapDeps([
                                            28, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../product/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail8.js"),
                                        __vite__mapDeps([
                                            29, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../template/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail9.js"),
                                        __vite__mapDeps([
                                            30, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../user/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail10.js"),
                                        __vite__mapDeps([
                                            31, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                            }),
                            `../${e}/components/Detail.vue`
                        ),
                },
                {
                    path: `/${e}/:id`,
                    meta: { layout: Or },
                    name: `${kr(e)}Detail`,
                    component: () =>
                        Rn(
                            Object.assign({
                                "../category/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail.js"),
                                        __vite__mapDeps([
                                            18, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../footer/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail2.js"),
                                        __vite__mapDeps([
                                            23, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../header/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail3.js"),
                                        __vite__mapDeps([
                                            24, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../language/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail4.js"),
                                        __vite__mapDeps([
                                            25, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../menu/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail5.js"),
                                        __vite__mapDeps([
                                            26, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../menuItem/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail6.js"),
                                        __vite__mapDeps([
                                            27, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../page/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail7.js"),
                                        __vite__mapDeps([
                                            28, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../product/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail8.js"),
                                        __vite__mapDeps([
                                            29, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../template/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail9.js"),
                                        __vite__mapDeps([
                                            30, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                                "../user/components/Detail.vue": () =>
                                    ee(
                                        () => import("./Detail10.js"),
                                        __vite__mapDeps([
                                            31, 19, 2, 20, 3, 21, 6, 7, 22,
                                        ])
                                    ),
                            }),
                            `../${e}/components/Detail.vue`
                        ),
                },
            ]
        );
    },
    $x = async (e) => {
        console.log(e);
        const t = Hc(),
            n = await e.reduce(async (a, r) => {
                const l = await a,
                    o = await Rn(
                        Object.assign({
                            "../../shared/modules/attribute.ts": () =>
                                ee(
                                    () => import("./attribute.js"),
                                    __vite__mapDeps([32, 3])
                                ),
                            "../../shared/modules/block.ts": () =>
                                ee(
                                    () => import("./block.js"),
                                    __vite__mapDeps([33, 3])
                                ),
                            "../../shared/modules/category.ts": () =>
                                ee(
                                    () => import("./category.js"),
                                    __vite__mapDeps([34, 3])
                                ),
                            "../../shared/modules/footer.ts": () =>
                                ee(
                                    () => import("./footer.js"),
                                    __vite__mapDeps([35, 3])
                                ),
                            "../../shared/modules/header.ts": () =>
                                ee(
                                    () => import("./header.js"),
                                    __vite__mapDeps([36, 3])
                                ),
                            "../../shared/modules/language.ts": () =>
                                ee(
                                    () => import("./language.js"),
                                    __vite__mapDeps([37, 3])
                                ),
                            "../../shared/modules/menu.ts": () =>
                                ee(
                                    () => import("./menu.js"),
                                    __vite__mapDeps([38, 3])
                                ),
                            "../../shared/modules/menuItem.ts": () =>
                                ee(
                                    () => import("./menuItem.js"),
                                    __vite__mapDeps([39, 3])
                                ),
                            "../../shared/modules/page.ts": () =>
                                ee(
                                    () => import("./page.js"),
                                    __vite__mapDeps([40, 3])
                                ),
                            "../../shared/modules/product.ts": () =>
                                ee(
                                    () => import("./product.js"),
                                    __vite__mapDeps([41, 3])
                                ),
                            "../../shared/modules/role.ts": () =>
                                ee(
                                    () => import("./role.js"),
                                    __vite__mapDeps([42, 3])
                                ),
                            "../../shared/modules/template.ts": () =>
                                ee(
                                    () => import("./template.js"),
                                    __vite__mapDeps([43, 3])
                                ),
                            "../../shared/modules/user.ts": () =>
                                ee(
                                    () => import("./user.js"),
                                    __vite__mapDeps([44, 3])
                                ),
                        }),
                        `../../shared/modules/${r}.ts`
                    ),
                    s = await Rn(
                        Object.assign({
                            "../../shared/fabrics/fields/attribute.ts": () =>
                                ee(
                                    () => import("./attribute2.js"),
                                    __vite__mapDeps([45, 21, 2, 3])
                                ),
                            "../../shared/fabrics/fields/block.ts": () =>
                                ee(
                                    () => import("./block2.js"),
                                    __vite__mapDeps([
                                        46, 21, 2, 47, 3, 48, 6, 7, 4, 5, 49,
                                        50, 51, 52, 19, 20, 22, 53, 54, 55,
                                    ])
                                ),
                            "../../shared/fabrics/fields/category.ts": () =>
                                ee(
                                    () => import("./category2.js"),
                                    __vite__mapDeps([
                                        56, 21, 2, 52, 19, 20, 3, 6, 7, 22, 49,
                                        50, 53, 4, 5, 48, 54, 57, 58,
                                    ])
                                ),
                            "../../shared/fabrics/fields/footer.ts": () =>
                                ee(
                                    () => import("./footer2.js"),
                                    __vite__mapDeps([
                                        59, 21, 2, 52, 19, 20, 3, 6, 7, 22, 49,
                                        50,
                                    ])
                                ),
                            "../../shared/fabrics/fields/header.ts": () =>
                                ee(
                                    () => import("./header2.js"),
                                    __vite__mapDeps([
                                        60, 21, 2, 52, 19, 20, 3, 6, 7, 22, 49,
                                        50,
                                    ])
                                ),
                            "../../shared/fabrics/fields/language.ts": () =>
                                ee(
                                    () => import("./language2.js"),
                                    __vite__mapDeps([61, 21, 2, 3])
                                ),
                            "../../shared/fabrics/fields/menu.ts": () =>
                                ee(
                                    () => import("./menu2.js"),
                                    __vite__mapDeps([
                                        62, 21, 2, 53, 19, 20, 3, 6, 7, 22, 4,
                                        5, 48, 49, 50, 54,
                                    ])
                                ),
                            "../../shared/fabrics/fields/menuItem.ts": () =>
                                ee(
                                    () => import("./menuItem2.js"),
                                    __vite__mapDeps([
                                        63, 21, 2, 53, 19, 20, 3, 6, 7, 22, 4,
                                        5, 48, 49, 50, 54, 52, 55,
                                    ])
                                ),
                            "../../shared/fabrics/fields/page.ts": () =>
                                ee(
                                    () => import("./page2.js"),
                                    __vite__mapDeps([
                                        64, 21, 2, 52, 19, 20, 3, 6, 7, 22, 49,
                                        50, 55, 4, 5, 48, 53, 54,
                                    ])
                                ),
                            "../../shared/fabrics/fields/product.ts": () =>
                                ee(
                                    () => import("./product2.js"),
                                    __vite__mapDeps([
                                        65, 21, 2, 3, 19, 20, 6, 7, 22, 4, 5,
                                        48, 49, 50, 47, 51, 52, 58,
                                    ])
                                ),
                            "../../shared/fabrics/fields/role.ts": () =>
                                ee(
                                    () => import("./role2.js"),
                                    __vite__mapDeps([66, 21, 2, 3])
                                ),
                            "../../shared/fabrics/fields/template.ts": () =>
                                ee(
                                    () => import("./template2.js"),
                                    __vite__mapDeps([67, 21, 2, 3])
                                ),
                            "../../shared/fabrics/fields/user.ts": () =>
                                ee(
                                    () => import("./user2.js"),
                                    __vite__mapDeps([
                                        68, 21, 2, 57, 3, 19, 20, 6, 7, 22, 4,
                                        5, 48, 49, 50, 58,
                                    ])
                                ),
                        }),
                        `../../shared/fabrics/fields/${r}.ts`
                    ),
                    i = o.key;
                return (l[i] = { ...o, getFields: s.default }), l;
            }, Promise.resolve({}));
        t.modules = n;
    },
    Dx = (e) => e.flatMap((t) => Rx(rC(t))),
    Lx = [
        ...Dx(
            "page,template,language,menu,menuItem,header,footer,block".split(
                ","
            )
        ),
        {
            path: "/login",
            name: "Login",
            component: () =>
                ee(
                    () => import("./Login.js"),
                    __vite__mapDeps([69, 3, 21, 2, 20, 6, 7, 48])
                ),
            meta: { layout: Tp },
        },
        { path: "/:pathMatch(.*)*", name: "404", redirect: "/" },
    ],
    Bx = [
        {
            name: "authGuard",
            handler: (e, t, n) => {
                n();
            },
        },
        {
            name: "alreadyAuthGuard",
            handler: (e, t, n) => {
                n();
            },
        },
    ],
    Pd = av({ history: Vf("/admin"), routes: Lx });
Bx.forEach(({ handler: e }) => Pd.beforeEach(e));
const Ql = Pd;
function Fx(e) {
    e.use(bp).use(Ql).use(Sp);
}
const kd = Gd(vh);
Fx(kd);
const Mx = Zl();
Qt.get("/sanctum/csrf-cookie")
    .then(async () => {
        try {
            await $x(
                "page,template,language,menu,menuItem,header,footer,block".split(
                    ","
                )
            ),
                await Mx.getUser();
        } catch (e) {
            console.log(e);
        }
    })
    .then(async () => {
        await Ql.isReady(), kd.mount("#app");
    });
export {
    ap as $,
    ov as A,
    Cy as B,
    Pa as C,
    ic as D,
    Py as E,
    Wx as F,
    ie as G,
    Ux as H,
    Gx as I,
    St as J,
    ja as K,
    Il as L,
    je as M,
    Oe as N,
    Vt as O,
    Ha as P,
    Ol as Q,
    We as R,
    Te as S,
    qo as T,
    oc as U,
    Qe as V,
    Sy as W,
    Qr as X,
    ms as Y,
    Qy as Z,
    ad as _,
    _t as a,
    mi as a0,
    rn as a1,
    an as a2,
    ps as a3,
    Bl as a4,
    zx as a5,
    gy as a6,
    fy as a7,
    sc as a8,
    Kn as a9,
    Wg as aa,
    yt as ab,
    Wu as ac,
    py as ad,
    dy as ae,
    _e as af,
    cy as ag,
    jt as ah,
    Vi as ai,
    Yu as aj,
    Ee as ak,
    Hx as al,
    ha as am,
    ct as an,
    Zl as ao,
    cC as ap,
    Tu as aq,
    Ql as ar,
    Pe as b,
    Ut as c,
    Rt as d,
    Ie as e,
    Ot as f,
    Y as g,
    ae as h,
    lv as i,
    Hc as j,
    Zv as k,
    Ae as l,
    zt as m,
    tp as n,
    Qt as o,
    L as p,
    It as q,
    Vl as r,
    ve as s,
    qa as t,
    at as u,
    Ge as v,
    $e as w,
    Ca as x,
    mn as y,
    Un as z,
};
