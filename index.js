(()=>{
    "use strict";
    var e, t, n = {
        894: (e,t,n)=>{
            n.d(t, {
                Z: ()=>r
            });
            var i = n(272)
              , o = n.n(i)
              , a = n(609)
              , s = n.n(a)()(o());
            s.push([e.id, ":root {\n    --ruffle-blue: #37528c;\n    --ruffle-orange: #ffad33;\n    --splash-screen-background: #31497d;\n}\n\nbody {\n    position: absolute;\n    inset: 0;\n    padding: 0;\n    margin: 0;\n    font-family: Lato, sans-serif;\n    display: flex;\n    flex-flow: column;\n    background: black;\n}\n\n#main {\n    position: relative;\n    flex: 1;\n}\n\n#overlay {\n    position: absolute;\n    inset: 0;\n    z-index: 1;\n    pointer-events: none;\n    border: 8px dashed var(--ruffle-orange);\n    border-radius: 30px;\n    opacity: 0;\n    transition: opacity 0.3s ease-in;\n    margin: 10px 5px;\n}\n\n#overlay.drag {\n    opacity: 1;\n    transition-timing-function: ease-out;\n}\n\n#player {\n    position: absolute;\n    inset: 0;\n    width: auto;\n    height: auto;\n    margin: 10px 0;\n}\n\n#nav {\n    width: 100%;\n    background: var(--ruffle-blue);\n    box-shadow: 0 3px 6px 5px var(--ruffle-blue);\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    color: white;\n    padding: 10px 0 5px;\n    margin-bottom: 5px;\n}\n\n#title {\n    transition: opacity 0.5s;\n}\n\n#title:hover {\n    opacity: 0.5;\n}\n\n#title img {\n    height: 32px;\n}\n\n#file-picker select,\n#file-picker input,\n#author {\n    margin-left: 5px;\n}\n\n#local-file-container,\n#sample-swfs-container {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n#local-file {\n    width: 0;\n    opacity: 0;\n    position: absolute;\n}\n\n#local-file-label {\n    color: var(--ruffle-blue);\n    padding: 3px 10px;\n    margin: 5px 2px;\n    cursor: pointer;\n    border-radius: 50px;\n    background-color: white;\n}\n\n#local-file-name {\n    min-width: 150px;\n    display: inline-block;\n    font-size: smaller;\n}\n\n#sample-swfs {\n    background-color: white;\n    color: var(--ruffle-blue);\n    border: 1px solid white;\n    border-radius: 5px;\n}\n\n#author-container {\n    font-size: small;\n}\n\n#author {\n    color: var(--ruffle-orange);\n}\n\n.hidden {\n    display: none !important;\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.modal-content {\n    background-color: var(--ruffle-blue);\n    margin: 15vh auto;\n    padding: 20px;\n    border: 2px solid white;\n    width: 300px;\n    height: 270px;\n    overflow: auto;\n}\n\n.close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n#open-modal,\n#reload-swf {\n    vertical-align: middle;\n    cursor: pointer;\n}\n\n#metadata {\n    margin: 0 auto;\n}\n\n#metadata td {\n    padding: 2px 1px;\n    border: 1px solid #ddd;\n    color: var(--ruffle-orange);\n}\n\n#metadata tr td:nth-child(1) {\n    font-weight: bold;\n    padding: 0 10px;\n}\n\n@media only screen and (width <= 800px) {\n    #local-file-container,\n    #sample-swfs-container {\n        display: block;\n    }\n\n    #local-file-container {\n        margin-bottom: 10px;\n    }\n}\n\n@media only screen and (width <= 600px) {\n    #local-file-static-label,\n    #sample-swfs-label {\n        display: block;\n        margin-bottom: 5px;\n    }\n\n    #author-container {\n        font-size: 12px;\n        text-align: center;\n    }\n\n    #nav {\n        flex-flow: column;\n    }\n}\n", "", {
                version: 3,
                sources: ["webpack://./www/index.css"],
                names: [],
                mappings: "AAAA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,SAAS;IACT,6BAA6B;IAC7B,aAAa;IACb,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,OAAO;AACX;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,oBAAoB;IACpB,uCAAuC;IACvC,mBAAmB;IACnB,UAAU;IACV,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,8BAA8B;IAC9B,4CAA4C;IAC5C,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;;;IAGI,gBAAgB;AACpB;;AAEA;;IAEI,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,QAAQ;IACR,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI;;QAEI,cAAc;IAClB;;IAEA;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI;;QAEI,cAAc;QACd,kBAAkB;IACtB;;IAEA;QACI,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;IACrB;AACJ",
                sourcesContent: [":root {\n    --ruffle-blue: #37528c;\n    --ruffle-orange: #ffad33;\n    --splash-screen-background: #31497d;\n}\n\nbody {\n    position: absolute;\n    inset: 0;\n    padding: 0;\n    margin: 0;\n    font-family: Lato, sans-serif;\n    display: flex;\n    flex-flow: column;\n    background: black;\n}\n\n#main {\n    position: relative;\n    flex: 1;\n}\n\n#overlay {\n    position: absolute;\n    inset: 0;\n    z-index: 1;\n    pointer-events: none;\n    border: 8px dashed var(--ruffle-orange);\n    border-radius: 30px;\n    opacity: 0;\n    transition: opacity 0.3s ease-in;\n    margin: 10px 5px;\n}\n\n#overlay.drag {\n    opacity: 1;\n    transition-timing-function: ease-out;\n}\n\n#player {\n    position: absolute;\n    inset: 0;\n    width: auto;\n    height: auto;\n    margin: 10px 0;\n}\n\n#nav {\n    width: 100%;\n    background: var(--ruffle-blue);\n    box-shadow: 0 3px 6px 5px var(--ruffle-blue);\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    color: white;\n    padding: 10px 0 5px;\n    margin-bottom: 5px;\n}\n\n#title {\n    transition: opacity 0.5s;\n}\n\n#title:hover {\n    opacity: 0.5;\n}\n\n#title img {\n    height: 32px;\n}\n\n#file-picker select,\n#file-picker input,\n#author {\n    margin-left: 5px;\n}\n\n#local-file-container,\n#sample-swfs-container {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n#local-file {\n    width: 0;\n    opacity: 0;\n    position: absolute;\n}\n\n#local-file-label {\n    color: var(--ruffle-blue);\n    padding: 3px 10px;\n    margin: 5px 2px;\n    cursor: pointer;\n    border-radius: 50px;\n    background-color: white;\n}\n\n#local-file-name {\n    min-width: 150px;\n    display: inline-block;\n    font-size: smaller;\n}\n\n#sample-swfs {\n    background-color: white;\n    color: var(--ruffle-blue);\n    border: 1px solid white;\n    border-radius: 5px;\n}\n\n#author-container {\n    font-size: small;\n}\n\n#author {\n    color: var(--ruffle-orange);\n}\n\n.hidden {\n    display: none !important;\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.modal-content {\n    background-color: var(--ruffle-blue);\n    margin: 15vh auto;\n    padding: 20px;\n    border: 2px solid white;\n    width: 300px;\n    height: 270px;\n    overflow: auto;\n}\n\n.close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n#open-modal,\n#reload-swf {\n    vertical-align: middle;\n    cursor: pointer;\n}\n\n#metadata {\n    margin: 0 auto;\n}\n\n#metadata td {\n    padding: 2px 1px;\n    border: 1px solid #ddd;\n    color: var(--ruffle-orange);\n}\n\n#metadata tr td:nth-child(1) {\n    font-weight: bold;\n    padding: 0 10px;\n}\n\n@media only screen and (width <= 800px) {\n    #local-file-container,\n    #sample-swfs-container {\n        display: block;\n    }\n\n    #local-file-container {\n        margin-bottom: 10px;\n    }\n}\n\n@media only screen and (width <= 600px) {\n    #local-file-static-label,\n    #sample-swfs-label {\n        display: block;\n        margin-bottom: 5px;\n    }\n\n    #author-container {\n        font-size: 12px;\n        text-align: center;\n    }\n\n    #nav {\n        flex-flow: column;\n    }\n}\n"],
                sourceRoot: ""
            }]);
            const r = s
        }
        ,
        609: e=>{
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var n = ""
                          , i = void 0 !== t[5];
                        return t[4] && (n += "@supports (".concat(t[4], ") {")),
                        t[2] && (n += "@media ".concat(t[2], " {")),
                        i && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                        n += e(t),
                        i && (n += "}"),
                        t[2] && (n += "}"),
                        t[4] && (n += "}"),
                        n
                    }
                    )).join("")
                }
                ,
                t.i = function(e, n, i, o, a) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var s = {};
                    if (i)
                        for (var r = 0; r < this.length; r++) {
                            var l = this[r][0];
                            null != l && (s[l] = !0)
                        }
                    for (var c = 0; c < e.length; c++) {
                        var d = [].concat(e[c]);
                        i && s[d[0]] || (void 0 !== a && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")),
                        d[5] = a),
                        n && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"),
                        d[2] = n) : d[2] = n),
                        o && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"),
                        d[4] = o) : d[4] = "".concat(o)),
                        t.push(d))
                    }
                }
                ,
                t
            }
        }
        ,
        272: e=>{
            e.exports = function(e) {
                var t = e[1]
                  , n = e[3];
                if (!n)
                    return t;
                if ("function" == typeof btoa) {
                    var i = btoa(unescape(encodeURIComponent(JSON.stringify(n))))
                      , o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i)
                      , a = "/*# ".concat(o, " */");
                    return [t].concat([a]).join("\n")
                }
                return [t].join("\n")
            }
        }
        ,
        62: e=>{
            var t = [];
            function n(e) {
                for (var n = -1, i = 0; i < t.length; i++)
                    if (t[i].identifier === e) {
                        n = i;
                        break
                    }
                return n
            }
            function i(e, i) {
                for (var a = {}, s = [], r = 0; r < e.length; r++) {
                    var l = e[r]
                      , c = i.base ? l[0] + i.base : l[0]
                      , d = a[c] || 0
                      , u = "".concat(c, " ").concat(d);
                    a[c] = d + 1;
                    var h = n(u)
                      , f = {
                        css: l[1],
                        media: l[2],
                        sourceMap: l[3],
                        supports: l[4],
                        layer: l[5]
                    };
                    if (-1 !== h)
                        t[h].references++,
                        t[h].updater(f);
                    else {
                        var p = o(f, i);
                        i.byIndex = r,
                        t.splice(r, 0, {
                            identifier: u,
                            updater: p,
                            references: 1
                        })
                    }
                    s.push(u)
                }
                return s
            }
            function o(e, t) {
                var n = t.domAPI(t);
                return n.update(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer)
                            return;
                        n.update(e = t)
                    } else
                        n.remove()
                }
            }
            e.exports = function(e, o) {
                var a = i(e = e || [], o = o || {});
                return function(e) {
                    e = e || [];
                    for (var s = 0; s < a.length; s++) {
                        var r = n(a[s]);
                        t[r].references--
                    }
                    for (var l = i(e, o), c = 0; c < a.length; c++) {
                        var d = n(a[c]);
                        0 === t[d].references && (t[d].updater(),
                        t.splice(d, 1))
                    }
                    a = l
                }
            }
        }
        ,
        793: e=>{
            var t = {};
            e.exports = function(e, n) {
                var i = function(e) {
                    if (void 0 === t[e]) {
                        var n = document.querySelector(e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head
                            } catch (e) {
                                n = null
                            }
                        t[e] = n
                    }
                    return t[e]
                }(e);
                if (!i)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                i.appendChild(n)
            }
        }
        ,
        173: e=>{
            e.exports = function(e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes),
                e.insert(t, e.options),
                t
            }
        }
        ,
        892: (e,t,n)=>{
            e.exports = function(e) {
                var t = n.nc;
                t && e.setAttribute("nonce", t)
            }
        }
        ,
        36: e=>{
            e.exports = function(e) {
                if ("undefined" == typeof document)
                    return {
                        update: function() {},
                        remove: function() {}
                    };
                var t = e.insertStyleElement(e);
                return {
                    update: function(n) {
                        !function(e, t, n) {
                            var i = "";
                            n.supports && (i += "@supports (".concat(n.supports, ") {")),
                            n.media && (i += "@media ".concat(n.media, " {"));
                            var o = void 0 !== n.layer;
                            o && (i += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")),
                            i += n.css,
                            o && (i += "}"),
                            n.media && (i += "}"),
                            n.supports && (i += "}");
                            var a = n.sourceMap;
                            a && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")),
                            t.styleTagTransform(i, e, t.options)
                        }(t, e, n)
                    },
                    remove: function() {
                        !function(e) {
                            if (null === e.parentNode)
                                return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    }
                }
            }
        }
        ,
        464: e=>{
            e.exports = function(e, t) {
                if (t.styleSheet)
                    t.styleSheet.cssText = e;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        }
        ,
        899: (e,t,n)=>{
            e.exports = n.p + "291efb1bea1ed0095b4e.wasm"
        }
        ,
        878: (e,t,n)=>{
            e.exports = n.p + "cff0d2b23900db9fbe5e.wasm"
        }
    }, i = {};
    function o(e) {
        var t = i[e];
        if (void 0 !== t)
            return t.exports;
        var a = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e](a, a.exports, o),
        a.loaded = !0,
        a.exports
    }
    o.m = n,
    o.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return o.d(t, {
            a: t
        }),
        t
    }
    ,
    o.d = (e,t)=>{
        for (var n in t)
            o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    o.f = {},
    o.e = e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e, t),
    t)), [])),
    o.u = e=>e + ".index.js",
    o.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    o.hmd = e=>((e = Object.create(e)).children || (e.children = []),
    Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: ()=>{
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }),
    e),
    o.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    e = {},
    t = "ruffle-demo:",
    o.l = (n,i,a,s)=>{
        if (e[n])
            e[n].push(i);
        else {
            var r, l;
            if (void 0 !== a)
                for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                    var u = c[d];
                    if (u.getAttribute("src") == n || u.getAttribute("data-webpack") == t + a) {
                        r = u;
                        break
                    }
                }
            r || (l = !0,
            (r = document.createElement("script")).charset = "utf-8",
            r.timeout = 120,
            o.nc && r.setAttribute("nonce", o.nc),
            r.setAttribute("data-webpack", t + a),
            r.src = n),
            e[n] = [i];
            var h = (t,i)=>{
                r.onerror = r.onload = null,
                clearTimeout(f);
                var o = e[n];
                if (delete e[n],
                r.parentNode && r.parentNode.removeChild(r),
                o && o.forEach((e=>e(i))),
                t)
                    return t(i)
            }
              , f = setTimeout(h.bind(null, void 0, {
                type: "timeout",
                target: r
            }), 12e4);
            r.onerror = h.bind(null, r.onerror),
            r.onload = h.bind(null, r.onload),
            l && document.head.appendChild(r)
        }
    }
    ,
    o.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.p = "",
    (()=>{
        o.b = document.baseURI || self.location.href;
        var e = {
            179: 0
        };
        o.f.j = (t,n)=>{
            var i = o.o(e, t) ? e[t] : void 0;
            if (0 !== i)
                if (i)
                    n.push(i[2]);
                else {
                    var a = new Promise(((n,o)=>i = e[t] = [n, o]));
                    n.push(i[2] = a);
                    var s = o.p + o.u(t)
                      , r = new Error;
                    o.l(s, (n=>{
                        if (o.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0),
                        i)) {
                            var a = n && ("load" === n.type ? "missing" : n.type)
                              , s = n && n.target && n.target.src;
                            r.message = "Loading chunk " + t + " failed.\n(" + a + ": " + s + ")",
                            r.name = "ChunkLoadError",
                            r.type = a,
                            r.request = s,
                            i[1](r)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var t = (t,n)=>{
            var i, a, [s,r,l] = n, c = 0;
            if (s.some((t=>0 !== e[t]))) {
                for (i in r)
                    o.o(r, i) && (o.m[i] = r[i]);
                l && l(o)
            }
            for (t && t(n); c < s.length; c++)
                a = s[c],
                o.o(e, a) && e[a] && e[a][0](),
                e[a] = 0
        }
          , n = self.webpackChunkruffle_demo = self.webpackChunkruffle_demo || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }
    )(),
    o.nc = void 0,
    (()=>{
        var e = o(62)
          , t = o.n(e)
          , n = o(36)
          , i = o.n(n)
          , a = o(793)
          , s = o.n(a)
          , r = o(892)
          , l = o.n(r)
          , c = o(173)
          , d = o.n(c)
          , u = o(464)
          , h = o.n(u)
          , f = o(894)
          , p = {};
        p.styleTagTransform = h(),
        p.setAttributes = l(),
        p.insert = s().bind(null, "head"),
        p.domAPI = i(),
        p.insertStyleElement = d(),
        t()(f.Z, p),
        f.Z && f.Z.locals && f.Z.locals;
        const m = async()=>WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11]))
          , g = async()=>WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 7, 1, 5, 0, 208, 112, 26, 11]))
          , v = async()=>WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 12, 1, 10, 0, 67, 0, 0, 0, 0, 252, 0, 26, 11]))
          , b = async()=>WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 65, 0, 192, 26, 11]))
          , y = async()=>WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]));
        function w(e) {
            const t = "function" == typeof Function.prototype.toString ? Function.prototype.toString() : null;
            return "string" == typeof t && t.indexOf("[native code]") >= 0 && Function.prototype.toString.call(e).indexOf("[native code]") >= 0
        }
        let A = "";
        try {
            if (void 0 !== document.currentScript && null !== document.currentScript && "src"in document.currentScript && "" !== document.currentScript.src) {
                let e = document.currentScript.src;
                e.endsWith(".js") || e.endsWith("/") || (e += "/"),
                A = new URL(".",e).href
            }
        } catch (e) {
            console.warn("Unable to get currentScript URL")
        }
        function x(e) {
            let t = A;
            return "publicPath"in e && null !== e.publicPath && void 0 !== e.publicPath && (t = e.publicPath),
            "" === t || t.endsWith("/") || (t += "/"),
            t
        }
        let C = null;
        function I(e, t) {
            return null === C && (C = async function(e, t) {
                "function" == typeof Array.prototype.reduce && w(Array.prototype.reduce) || Object.defineProperty(Array.prototype, "reduce", {
                    value(...e) {
                        if (0 === e.length && window.Prototype && window.Prototype.Version && window.Prototype.Version < "1.6.1")
                            return this.length > 1 ? this : this[0];
                        const t = e[0];
                        if (null === this)
                            throw new TypeError("Array.prototype.reduce called on null or undefined");
                        if ("function" != typeof t)
                            throw new TypeError(`${t} is not a function`);
                        const n = Object(this)
                          , i = n.length >>> 0;
                        let o, a = 0;
                        if (e.length >= 2)
                            o = e[1];
                        else {
                            for (; a < i && !(a in n); )
                                a++;
                            if (a >= i)
                                throw new TypeError("Reduce of empty array with no initial value");
                            o = n[a++]
                        }
                        for (; a < i; )
                            a in n && (o = t(o, n[a], a, n)),
                            a++;
                        return o
                    }
                }),
                "function" == typeof Window && w(Window) || "function" == typeof window.constructor && w(window.constructor) && (window.Window = window.constructor),
                void 0 !== window.Reflect && null !== window.Reflect || (window.Reflect = {}),
                "function" != typeof Reflect.get && Object.defineProperty(Reflect, "get", {
                    value: (e,t)=>e[t]
                }),
                "function" != typeof Reflect.set && Object.defineProperty(Reflect, "set", {
                    value(e, t, n) {
                        e[t] = n
                    }
                }),
                "function" != typeof Reflect.has && Object.defineProperty(Reflect, "has", {
                    value: (e,t)=>t in e
                }),
                "function" != typeof Reflect.ownKeys && Object.defineProperty(Reflect, "ownKeys", {
                    value: e=>[...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)]
                });
                const n = (await Promise.all([m(), y(), v(), b(), g()])).every(Boolean);
                n || console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module"),
                o.p = x(e);
                const {default: i, Ruffle: a} = await (n ? o.e(339).then(o.bind(o, 339)) : o.e(159).then(o.bind(o, 159)));
                let s;
                const r = n ? new URL(o(899),o.b) : new URL(o(878),o.b)
                  , l = await fetch(r);
                if (t) {
                    const e = l.headers.get("content-length") || "";
                    let n = 0;
                    const i = parseInt(e);
                    s = new Response(new ReadableStream({
                        async start(e) {
                            var o;
                            const a = null === (o = l.body) || void 0 === o ? void 0 : o.getReader();
                            if (!a)
                                throw "Response had no body";
                            for (t(n, i); ; ) {
                                const {done: o, value: s} = await a.read();
                                if (o)
                                    break;
                                (null == s ? void 0 : s.byteLength) && (n += null == s ? void 0 : s.byteLength),
                                e.enqueue(s),
                                t(n, i)
                            }
                            e.close()
                        }
                    }),l)
                } else
                    s = l;
                return await i(s),
                a
            }(e, t)),
            C
        }
        const k = "application/x-shockwave-flash"
          , E = "application/futuresplash"
          , S = "application/x-shockwave-flash2-preview"
          , B = "application/vnd.adobe.flash.movie";
        class R {
            constructor(e) {
                if (this.__mimeTypes = [],
                this.__namedMimeTypes = {},
                e)
                    for (let t = 0; t < e.length; t++)
                        this.install(e[t])
            }
            install(e) {
                const t = this.__mimeTypes.length;
                this.__mimeTypes.push(e),
                this.__namedMimeTypes[e.type] = e,
                this[e.type] = e,
                this[t] = e
            }
            item(e) {
                return this.__mimeTypes[e >>> 0]
            }
            namedItem(e) {
                return this.__namedMimeTypes[e]
            }
            get length() {
                return this.__mimeTypes.length
            }
            [Symbol.iterator]() {
                return this.__mimeTypes[Symbol.iterator]()
            }
        }
        class L extends R {
            constructor(e, t, n) {
                super(),
                this.name = e,
                this.description = t,
                this.filename = n
            }
        }
        class P {
            constructor(e) {
                this.__plugins = [],
                this.__namedPlugins = {};
                for (let t = 0; t < e.length; t++)
                    this.install(e[t])
            }
            install(e) {
                const t = this.__plugins.length;
                this.__plugins.push(e),
                this.__namedPlugins[e.name] = e,
                this[e.name] = e,
                this[t] = e
            }
            item(e) {
                return this.__plugins[e >>> 0]
            }
            namedItem(e) {
                return this.__namedPlugins[e]
            }
            refresh() {}
            [Symbol.iterator]() {
                return this.__plugins[Symbol.iterator]()
            }
            get length() {
                return this.__plugins.length
            }
        }
        const _ = new L("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");
        new L("Ruffle Extension","Ruffle Extension","ruffle.js"),
        _.install({
            type: E,
            description: "Shockwave Flash",
            suffixes: "spl",
            enabledPlugin: _
        }),
        _.install({
            type: k,
            description: "Shockwave Flash",
            suffixes: "swf",
            enabledPlugin: _
        }),
        _.install({
            type: S,
            description: "Shockwave Flash",
            suffixes: "swf",
            enabledPlugin: _
        }),
        _.install({
            type: B,
            description: "Shockwave Flash",
            suffixes: "swf",
            enabledPlugin: _
        });
        const F = document.createElement("template");
        F.innerHTML = '\n    <style>\n        :host {\n            --ruffle-blue: #37528c;\n            --ruffle-orange: #ffad33;\n\n            display: inline-block;\n            position: relative;\n            /* Default width/height; this will get overridden by user styles/attributes. */\n            width: 550px;\n            height: 400px;\n            font-family: Arial, sans-serif;\n            letter-spacing: 0.4px;\n            touch-action: none;\n            user-select: none;\n            -webkit-user-select: none;\n            -webkit-tap-highlight-color: transparent;\n            line-height: normal;\n        }\n\n        /* Ruffle\'s width/height CSS interferes with Safari\'s fullscreen CSS. */\n        /* Ensure that Safari\'s fullscreen mode actually fills the screen. */\n        :host(:-webkit-full-screen) {\n            display: block;\n            width: 100% !important;\n            height: 100% !important;\n        }\n\n        .hidden {\n            display: none !important;\n        }\n\n        /* All of these use the dimensions specified by the embed. */\n        #container,\n        #play_button,\n        #unmute_overlay,\n        #unmute_overlay .background,\n        #panic,\n        #splash-screen,\n        #message_overlay {\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n        }\n\n        #container {\n            overflow: hidden;\n        }\n\n        #container canvas {\n            width: 100%;\n            height: 100%;\n        }\n\n        #play_button,\n        #unmute_overlay {\n            cursor: pointer;\n            display: none;\n        }\n\n        #unmute_overlay .background {\n            background: black;\n            opacity: 0.7;\n        }\n\n        #play_button .icon,\n        #unmute_overlay .icon {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 50%;\n            height: 50%;\n            max-width: 384px;\n            max-height: 384px;\n            transform: translate(-50%, -50%);\n            opacity: 0.8;\n        }\n\n        #play_button:hover .icon,\n        #unmute_overlay:hover .icon {\n            opacity: 1;\n        }\n\n        #panic {\n            font-size: 20px;\n            text-align: center;\n            /* Inverted colors from play button! */\n            background: linear-gradient(180deg, #fd3a40 0%, #fda138 100%);\n            color: white;\n            display: flex;\n            flex-flow: column;\n            justify-content: space-around;\n        }\n\n        #panic a {\n            color: var(--ruffle-blue);\n            font-weight: bold;\n        }\n\n        #panic-title {\n            font-size: xxx-large;\n            font-weight: bold;\n        }\n\n        #panic-body.details {\n            flex: 0.9;\n            margin: 0 10px;\n        }\n\n        #panic-body textarea {\n            width: 100%;\n            height: 100%;\n            resize: none;\n        }\n\n        #panic ul {\n            padding: 0;\n            display: flex;\n            list-style-type: none;\n            justify-content: space-evenly;\n        }\n\n        #message_overlay {\n            position: absolute;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            opacity: 1;\n            z-index: 2;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            overflow: auto;\n        }\n\n        #message_overlay .message {\n            text-align: center;\n            max-height: 100%;\n            max-width: 100%;\n            padding: 5%;\n            font-size: 20px;\n        }\n\n        #message_overlay p {\n            margin: 0.5em 0;\n        }\n\n        #message_overlay .message div {\n            display: flex;\n            justify-content: center;\n            flex-wrap: wrap;\n            column-gap: 1em;\n        }\n\n        #message_overlay a, #message_overlay button {\n            cursor: pointer;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            border: 2px solid var(--ruffle-orange);\n            font-weight: bold;\n            font-size: 1.25em;\n            border-radius: 0.6em;\n            padding: 10px;\n            text-decoration: none;\n            margin: 2% 0;\n        }\n\n        #message_overlay a:hover, #message_overlay button:hover {\n            background: #ffffff4c;\n        }\n\n        #continue-btn {\n             cursor: pointer;\n             background: var(--ruffle-blue);\n             color: var(--ruffle-orange);\n             border: 2px solid var(--ruffle-orange);\n             font-weight: bold;\n             font-size: 20px;\n             border-radius: 20px;\n             padding: 10px;\n        }\n\n        #continue-btn:hover {\n            background: #ffffff4c;\n        }\n\n        #context-menu {\n            display: none;\n            color: black;\n            background: #fafafa;\n            border: 1px solid gray;\n            box-shadow: 0px 5px 10px -5px black;\n            position: absolute;\n            font-size: 14px;\n            text-align: left;\n            list-style: none;\n            padding: 0;\n            margin: 0;\n        }\n\n        #context-menu .menu_item {\n            padding: 5px 10px;\n            cursor: pointer;\n            color: black;\n        }\n\n        #context-menu .menu_item.disabled {\n            cursor: default;\n            color: gray;\n        }\n\n        #context-menu .menu_item:not(.disabled):hover {\n            background: lightgray;\n        }\n\n        #context-menu .menu_separator hr {\n            border: none;\n            border-bottom: 1px solid lightgray;\n            margin: 2px;\n        }\n\n        #splash-screen {\n            display: flex;\n            flex-direction: column;\n            background: var(--splash-screen-background, var(--preloader-background, var(--ruffle-blue)));\n            align-items: center;\n            justify-content: center;\n        }\n\n        .loadbar {\n            width: 100%;\n            max-width: 316px;\n            max-height: 10px;\n            height: 20%;\n            background: #253559;\n        }\n\n        .loadbar-inner {\n            width: 0px;\n            max-width: 100%;\n            height: 100%;\n            background: var(--ruffle-orange);\n        }\n            \n        .logo {\n            display: var(--logo-display, block);\n            max-width: 380px;\n            max-height: 150px;\n        }\n\n        .loading-animation {\n            max-width: 28px;\n            max-height: 28px;\n            margin-bottom: 2%;\n            width: 10%;\n            aspect-ratio: 1;\n        }\n\n        .spinner {\n            stroke-dasharray: 180;\n            stroke-dashoffset: 135;\n            stroke: var(--ruffle-orange);\n            transform-origin: 50% 50%;\n            animation: rotate 1.5s linear infinite;\n        }\n\n        @keyframes rotate {\n            to {\n                transform: rotate(360deg);\n            }\n        }\n\n        #virtual-keyboard {\n            position: absolute;\n            opacity: 0;\n            top: -100px;\n            width: 1px;\n            height: 1px;\n        }\n\n        #modal-area {\n            width: 100%;\n            height: 100%;\n        }\n\n        #restore-save {\n            display: none;\n        }\n\n        .replace-save {\n            display: none;\n        }\n\n        .save-option {\n            display: inline-block;\n            padding: 3px 10px;\n            margin: 5px 2px;\n            cursor: pointer;\n            border-radius: 50px;\n            background-color: var(--ruffle-blue);\n            color: white;\n        }\n\n        #close-modal {\n            position: absolute;\n            top: 5px;\n            right: 10px;\n            cursor: pointer;\n            font-size: x-large;\n        }\n\n        .general-save-options {\n            text-align: center;\n            padding-bottom: 8px;\n            border-bottom: 2px solid #888;\n        }\n\n        #local-saves {\n            border-collapse: collapse;\n        }\n\n        #local-saves td {\n            border-bottom: 1px solid #bbb;\n            height: 30px;\n        }\n\n        #local-saves tr td:nth-child(1) {\n            padding-right: 1em;\n            word-break: break-all;\n        }\n\n        #local-saves tr:nth-child(even) {\n            background-color: #f2f2f2;\n        }\n    </style>\n    <style id="dynamic_styles"></style>\n\n    <div id="container">\n        <div id="play_button"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 250 250" width="100%" height="100%"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="125" y1="0" x2="125" y2="250" spreadMethod="pad"><stop offset="0%" stop-color="#FDA138"/><stop offset="100%" stop-color="#FD3A40"/></linearGradient><g id="b"><path fill="url(#a)" d="M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"/><path fill="#FFF" d="M87 55v140l100-70L87 55z"/></g></defs><use xlink:href="#b"/></svg></div></div>\n        <div id="unmute_overlay"><div class="background"></div><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 512 584"  width="100%" height="100%" scale="0.8"><path fill="#FFF" stroke="#FFF" d="m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"/><path fill="#FFF" stroke="#FFF" d="m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"/><path fill="#FFF" stroke="#FFF" d="m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"/><text x="256" y="560" text-anchor="middle" font-size="60px" fill="#FFF" stroke="#FFF">Click to unmute</text></svg></div></div>\n        <input id="virtual-keyboard" type="text" autocapitalize="off" autocomplete="off" autocorrect="off">\n    </div>\n    <div class="hidden" id="splash-screen">\n        <svg class="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 380 150"><g><path fill="#966214" d="M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"/><path fill="var(--ruffle-orange)" d="M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"/></g></svg>\n        <svg class="loading-animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66">\n            <circle class="spinner" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>\n        </svg>        \n        <div class="loadbar"><div class="loadbar-inner"></div></div>\n    </div>\n\n    <dialog id="save-manager">\n        <div id="modal-area">\n            <span id="close-modal">&times;</span>\n            <div class="general-save-options">\n                <span class="save-option" id="backup-saves">Backup all saves (download all sols)</span>\n            </div>\n            <table id="local-saves"></table>\n        </div>\n    </dialog>\n    <ul id="context-menu"></ul>\n';
        const T = {};
        function O(e, t) {
            const n = T[e];
            if (void 0 !== n) {
                if (n.class !== t)
                    throw new Error("Internal naming conflict on " + e);
                return n.name
            }
            let i = 0;
            if (void 0 !== window.customElements)
                for (; i < 999; ) {
                    let n = e;
                    if (i > 0 && (n = n + "-" + i),
                    void 0 === window.customElements.get(n))
                        return window.customElements.define(n, t),
                        T[e] = {
                            class: t,
                            name: n,
                            internalName: e
                        },
                        n;
                    i += 1
                }
            throw new Error("Failed to assign custom element " + e)
        }
        var M, j, q, N, U;
        !function(e) {
            e.On = "on",
            e.Off = "off",
            e.Auto = "auto"
        }(M || (M = {})),
        function(e) {
            e.Off = "off",
            e.Fullscreen = "fullscreen",
            e.On = "on"
        }(j || (j = {})),
        function(e) {
            e.Visible = "visible",
            e.Hidden = "hidden"
        }(q || (q = {})),
        function(e) {
            e.Error = "error",
            e.Warn = "warn",
            e.Info = "info",
            e.Debug = "debug",
            e.Trace = "trace"
        }(N || (N = {})),
        function(e) {
            e.Window = "window",
            e.Opaque = "opaque",
            e.Transparent = "transparent",
            e.Direct = "direct",
            e.Gpu = "gpu"
        }(U || (U = {}));
        const D = {
            allowScriptAccess: !1,
            parameters: {},
            autoplay: M.Auto,
            backgroundColor: null,
            letterbox: j.Fullscreen,
            unmuteOverlay: q.Visible,
            upgradeToHttps: !0,
            compatibilityRules: !0,
            warnOnUnsupportedContent: !0,
            logLevel: N.Error,
            showSwfDownload: !1,
            contextMenu: !0,
            preloader: !0,
            splashScreen: !0,
            maxExecutionDuration: {
                secs: 15,
                nanos: 0
            },
            base: null,
            menu: !0,
            salign: "",
            quality: "high",
            scale: "showAll",
            forceScale: !1,
            wmode: U.Opaque,
            publicPath: null,
            polyfills: !0,
            playerVersion: null
        }
          , W = "0.1.0"
          , $ = "nightly 2023-04-12"
          , V = "2023-04-12T00:25:02.383Z"
          , z = "https://ruffle.rs"
          , H = /^\s*(\d+(\.\d+)?(%)?)/;
        let Y = !1;
        var Q, J, Z, K;
        function G(e) {
            if (null == e)
                return {};
            e instanceof URLSearchParams || (e = new URLSearchParams(e));
            const t = {};
            for (const [n,i] of e)
                t[n] = i.toString();
            return t
        }
        !function(e) {
            e[e.Unknown = 0] = "Unknown",
            e[e.CSPConflict = 1] = "CSPConflict",
            e[e.FileProtocol = 2] = "FileProtocol",
            e[e.InvalidWasm = 3] = "InvalidWasm",
            e[e.JavascriptConfiguration = 4] = "JavascriptConfiguration",
            e[e.JavascriptConflict = 5] = "JavascriptConflict",
            e[e.WasmCors = 6] = "WasmCors",
            e[e.WasmDownload = 7] = "WasmDownload",
            e[e.WasmMimeType = 8] = "WasmMimeType",
            e[e.WasmNotFound = 9] = "WasmNotFound",
            e[e.WasmDisabledMicrosoftEdge = 10] = "WasmDisabledMicrosoftEdge",
            e[e.SwfFetchError = 11] = "SwfFetchError",
            e[e.SwfCors = 12] = "SwfCors"
        }(Q || (Q = {}));
        class X extends HTMLElement {
            get readyState() {
                return this._readyState
            }
            get metadata() {
                return this._metadata
            }
            constructor() {
                super(),
                this.contextMenuForceDisabled = !1,
                this.isTouch = !1,
                this.contextMenuSupported = !1,
                this.panicked = !1,
                this._cachedDebugInfo = null,
                this.isExtension = !1,
                this.longPressTimer = null,
                this.config = {},
                this.shadow = this.attachShadow({
                    mode: "open"
                }),
                this.shadow.appendChild(F.content.cloneNode(!0)),
                this.dynamicStyles = this.shadow.getElementById("dynamic_styles"),
                this.container = this.shadow.getElementById("container"),
                this.playButton = this.shadow.getElementById("play_button"),
                this.playButton.addEventListener("click", (()=>this.play())),
                this.unmuteOverlay = this.shadow.getElementById("unmute_overlay"),
                this.splashScreen = this.shadow.getElementById("splash-screen"),
                this.virtualKeyboard = this.shadow.getElementById("virtual-keyboard"),
                this.virtualKeyboard.addEventListener("input", this.virtualKeyboardInput.bind(this)),
                this.saveManager = this.shadow.getElementById("save-manager"),
                this.saveManager.addEventListener("click", (()=>this.saveManager.close()));
                const e = this.saveManager.querySelector("#modal-area");
                e && e.addEventListener("click", (e=>e.stopPropagation()));
                const t = this.saveManager.querySelector("#close-modal");
                t && t.addEventListener("click", (()=>this.saveManager.close()));
                const n = this.saveManager.querySelector("#backup-saves");
                n && n.addEventListener("click", this.backupSaves.bind(this)),
                this.contextMenuElement = this.shadow.getElementById("context-menu"),
                window.addEventListener("pointerdown", this.pointerDown.bind(this)),
                this.addEventListener("contextmenu", this.showContextMenu.bind(this)),
                this.container.addEventListener("pointerdown", this.startLongPressTimer.bind(this)),
                this.container.addEventListener("pointerup", this.checkLongPress.bind(this)),
                this.container.addEventListener("pointercancel", this.clearLongPressTimer.bind(this)),
                this.addEventListener("fullscreenchange", this.fullScreenChange.bind(this)),
                this.addEventListener("webkitfullscreenchange", this.fullScreenChange.bind(this)),
                this.instance = null,
                this.onFSCommand = null,
                this._readyState = J.HaveNothing,
                this._metadata = null,
                this.lastActivePlayingState = !1,
                this.setupPauseOnTabHidden()
            }
            setupPauseOnTabHidden() {
                document.addEventListener("visibilitychange", (()=>{
                    this.instance && (document.hidden && (this.lastActivePlayingState = this.instance.is_playing(),
                    this.instance.pause()),
                    document.hidden || !0 !== this.lastActivePlayingState || this.instance.play())
                }
                ), !1)
            }
            connectedCallback() {
                this.updateStyles()
            }
            static get observedAttributes() {
                return ["width", "height"]
            }
            attributeChangedCallback(e, t, n) {
                "width" !== e && "height" !== e || this.updateStyles()
            }
            disconnectedCallback() {
                this.destroy()
            }
            updateStyles() {
                if (this.dynamicStyles.sheet) {
                    if (this.dynamicStyles.sheet.rules)
                        for (let e = 0; e < this.dynamicStyles.sheet.rules.length; e++)
                            this.dynamicStyles.sheet.deleteRule(e);
                    const e = this.attributes.getNamedItem("width");
                    if (null != e) {
                        const t = X.htmlDimensionToCssDimension(e.value);
                        null !== t && this.dynamicStyles.sheet.insertRule(`:host { width: ${t}; }`)
                    }
                    const t = this.attributes.getNamedItem("height");
                    if (null != t) {
                        const e = X.htmlDimensionToCssDimension(t.value);
                        null !== e && this.dynamicStyles.sheet.insertRule(`:host { height: ${e}; }`)
                    }
                }
            }
            isUnusedFallbackObject() {
                const e = function(e) {
                    const t = T[e];
                    return void 0 !== t ? {
                        internalName: e,
                        name: t.name,
                        class: t.class
                    } : null
                }("ruffle-object");
                if (null !== e) {
                    let t = this.parentNode;
                    for (; t !== document && null !== t; ) {
                        if (t.nodeName === e.name)
                            return !0;
                        t = t.parentNode
                    }
                }
                return !1
            }
            async ensureFreshInstance() {
                var e;
                this.destroy(),
                this.loadedConfig && !1 !== this.loadedConfig.splashScreen && !1 !== this.loadedConfig.preloader && this.showSplashScreen(),
                this.loadedConfig && !1 === this.loadedConfig.preloader && console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration.");
                const t = await I(this.loadedConfig || {}, this.onRuffleDownloadProgress.bind(this)).catch((e=>{
                    if (console.error(`Serious error loading Ruffle: ${e}`),
                    "file:" === window.location.protocol)
                        e.ruffleIndexError = Q.FileProtocol;
                    else {
                        e.ruffleIndexError = Q.WasmNotFound;
                        const t = String(e.message).toLowerCase();
                        t.includes("mime") ? e.ruffleIndexError = Q.WasmMimeType : t.includes("networkerror") || t.includes("failed to fetch") ? e.ruffleIndexError = Q.WasmCors : t.includes("disallowed by embedder") ? e.ruffleIndexError = Q.CSPConflict : "CompileError" === e.name ? e.ruffleIndexError = Q.InvalidWasm : t.includes("could not download wasm module") && "TypeError" === e.name ? e.ruffleIndexError = Q.WasmDownload : "TypeError" === e.name ? e.ruffleIndexError = Q.JavascriptConflict : navigator.userAgent.includes("Edg") && t.includes("webassembly is not defined") && (e.ruffleIndexError = Q.WasmDisabledMicrosoftEdge)
                    }
                    throw this.panic(e),
                    e
                }
                ));
                if (this.instance = await new t(this.container,this,this.loadedConfig),
                this._cachedDebugInfo = this.instance.renderer_debug_info(),
                console.log("New Ruffle instance created (WebAssembly extensions: " + (t.is_wasm_simd_used() ? "ON" : "OFF") + ")"),
                "running" !== this.audioState() && (this.container.style.visibility = "hidden",
                await new Promise((e=>{
                    window.setTimeout((()=>{
                        e()
                    }
                    ), 200)
                }
                )),
                this.container.style.visibility = ""),
                this.unmuteAudioContext(),
                navigator.userAgent.toLowerCase().includes("android") && this.container.addEventListener("click", (()=>this.virtualKeyboard.blur())),
                !this.loadedConfig || this.loadedConfig.autoplay === M.On || this.loadedConfig.autoplay !== M.Off && "running" === this.audioState()) {
                    if (this.play(),
                    "running" !== this.audioState()) {
                        this.loadedConfig && this.loadedConfig.unmuteOverlay === q.Hidden || (this.unmuteOverlay.style.display = "block"),
                        this.container.addEventListener("click", this.unmuteOverlayClicked.bind(this), {
                            once: !0
                        });
                        const t = null === (e = this.instance) || void 0 === e ? void 0 : e.audio_context();
                        t && (t.onstatechange = ()=>{
                            "running" === t.state && this.unmuteOverlayClicked(),
                            t.onstatechange = null
                        }
                        )
                    }
                } else
                    this.playButton.style.display = "block"
            }
            onRuffleDownloadProgress(e, t) {
                const n = this.splashScreen.querySelector(".loadbar-inner")
                  , i = this.splashScreen.querySelector(".loadbar");
                Number.isNaN(t) ? i && (i.style.display = "none") : n.style.width = e / t * 100 + "%"
            }
            destroy() {
                this.instance && (this.instance.destroy(),
                this.instance = null,
                this._metadata = null,
                this._readyState = J.HaveNothing,
                console.log("Ruffle instance destroyed."))
            }
            checkOptions(e) {
                if ("string" == typeof e)
                    return {
                        url: e
                    };
                const t = (e,t)=>{
                    if (!e) {
                        const e = new TypeError(t);
                        throw e.ruffleIndexError = Q.JavascriptConfiguration,
                        this.panic(e),
                        e
                    }
                }
                ;
                return t(null !== e && "object" == typeof e, "Argument 0 must be a string or object"),
                t("url"in e || "data"in e, "Argument 0 must contain a `url` or `data` key"),
                t(!("url"in e) || "string" == typeof e.url, "`url` must be a string"),
                e
            }
            getExtensionConfig() {
                var e;
                return window.RufflePlayer && window.RufflePlayer.conflict && ("extension" === window.RufflePlayer.conflict.newestName || "extension" === window.RufflePlayer.newestName) ? null === (e = window.RufflePlayer) || void 0 === e ? void 0 : e.conflict.config : {}
            }
            async load(e) {
                var t, n;
                if (e = this.checkOptions(e),
                this.isConnected && !this.isUnusedFallbackObject()) {
                    if (!se(this))
                        try {
                            const i = this.getExtensionConfig();
                            if (this.loadedConfig = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, D), i), null !== (n = null === (t = window.RufflePlayer) || void 0 === t ? void 0 : t.config) && void 0 !== n ? n : {}), this.config), e),
                            this.loadedConfig.allowScriptAccess = !0 === e.allowScriptAccess,
                            this.loadedConfig.backgroundColor && this.loadedConfig.wmode !== U.Transparent && (this.container.style.backgroundColor = this.loadedConfig.backgroundColor),
                            await this.ensureFreshInstance(),
                            "url"in e) {
                                console.log(`Loading SWF file ${e.url}`),
                                this.swfUrl = new URL(e.url,document.baseURI);
                                const t = Object.assign(Object.assign({}, G(e.url.substring(e.url.indexOf("?")))), G(e.parameters));
                                this.instance.stream_from(this.swfUrl.href, t)
                            } else
                                "data"in e && (console.log("Loading SWF data"),
                                this.instance.load_data(new Uint8Array(e.data), G(e.parameters), e.swfFileName || "movie.swf"))
                        } catch (e) {
                            console.error(`Serious error occurred loading SWF file: ${e}`);
                            const t = new Error(e);
                            throw t.message.includes("Error parsing config") && (t.ruffleIndexError = Q.JavascriptConfiguration),
                            this.panic(t),
                            t
                        }
                } else
                    console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element")
            }
            play() {
                this.instance && (this.instance.play(),
                this.playButton.style.display = "none")
            }
            get isPlaying() {
                return !!this.instance && this.instance.is_playing()
            }
            get volume() {
                return this.instance ? this.instance.volume() : 1
            }
            set volume(e) {
                this.instance && this.instance.set_volume(e)
            }
            get fullscreenEnabled() {
                return !(!document.fullscreenEnabled && !document.webkitFullscreenEnabled)
            }
            get isFullscreen() {
                return (document.fullscreenElement || document.webkitFullscreenElement) === this
            }
            setFullscreen(e) {
                this.fullscreenEnabled && (e ? this.enterFullscreen() : this.exitFullscreen())
            }
            enterFullscreen() {
                const e = {
                    navigationUI: "hide"
                };
                this.requestFullscreen ? this.requestFullscreen(e) : this.webkitRequestFullscreen ? this.webkitRequestFullscreen(e) : this.webkitRequestFullScreen && this.webkitRequestFullScreen(e)
            }
            exitFullscreen() {
                document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
            }
            fullScreenChange() {
                var e;
                null === (e = this.instance) || void 0 === e || e.set_fullscreen(this.isFullscreen)
            }
            pointerDown(e) {
                "touch" !== e.pointerType && "pen" !== e.pointerType || (this.isTouch = !0)
            }
            base64ToBlob(e, t) {
                const n = atob(e)
                  , i = new ArrayBuffer(n.length)
                  , o = new Uint8Array(i);
                for (let e = 0; e < n.length; e++)
                    o[e] = n.charCodeAt(e);
                return new Blob([i],{
                    type: t
                })
            }
            saveFile(e, t, n) {
                const i = this.base64ToBlob(e, t)
                  , o = URL.createObjectURL(i)
                  , a = document.createElement("a");
                a.href = o,
                a.style.display = "none",
                a.download = n,
                document.body.appendChild(a),
                a.click(),
                document.body.removeChild(a),
                URL.revokeObjectURL(o)
            }
            isB64SOL(e) {
                try {
                    return "TCSO" === atob(e).slice(6, 10)
                } catch (e) {
                    return !1
                }
            }
            confirmReloadSave(e, t, n) {
                if (this.isB64SOL(t) && localStorage[e]) {
                    if (!n && !confirm("Are you sure you want to delete this save file?"))
                        return;
                    const i = this.swfUrl ? this.swfUrl.pathname : ""
                      , o = this.swfUrl ? this.swfUrl.hostname : document.location.hostname
                      , a = e.split("/").slice(1, -1).join("/");
                    if (i.includes(a) && e.startsWith(o))
                        return void (confirm(`The only way to ${n ? "replace" : "delete"} this save file without potential conflict is to reload this content. Do you wish to continue anyway?`) && this.loadedConfig && (this.destroy(),
                        n ? localStorage.setItem(e, t) : localStorage.removeItem(e),
                        this.load(this.loadedConfig),
                        this.populateSaves(),
                        this.saveManager.close()));
                    n ? localStorage.setItem(e, t) : localStorage.removeItem(e),
                    this.populateSaves(),
                    this.saveManager.close()
                }
            }
            replaceSOL(e, t) {
                const n = e.target
                  , i = new FileReader;
                i.addEventListener("load", (()=>{
                    if (i.result && "string" == typeof i.result) {
                        const e = new RegExp("data:.*;base64,")
                          , n = i.result.replace(e, "");
                        this.confirmReloadSave(t, n, !0)
                    }
                }
                )),
                n && n.files && n.files.length > 0 && n.files[0] && i.readAsDataURL(n.files[0])
            }
            deleteSave(e) {
                const t = localStorage.getItem(e);
                t && this.confirmReloadSave(e, t, !1)
            }
            populateSaves() {
                const e = this.saveManager.querySelector("#local-saves");
                if (e) {
                    try {
                        localStorage
                    } catch (e) {
                        return
                    }
                    e.textContent = "",
                    Object.keys(localStorage).forEach((t=>{
                        const n = t.split("/").pop()
                          , i = localStorage.getItem(t);
                        if (n && i && this.isB64SOL(i)) {
                            const o = document.createElement("TR")
                              , a = document.createElement("TD");
                            a.textContent = n,
                            a.title = t;
                            const s = document.createElement("TD")
                              , r = document.createElement("SPAN");
                            r.textContent = "Download",
                            r.className = "save-option",
                            r.addEventListener("click", (()=>this.saveFile(i, "application/octet-stream", n + ".sol"))),
                            s.appendChild(r);
                            const l = document.createElement("TD")
                              , c = document.createElement("INPUT");
                            c.type = "file",
                            c.accept = ".sol",
                            c.className = "replace-save",
                            c.id = "replace-save-" + t;
                            const d = document.createElement("LABEL");
                            d.htmlFor = "replace-save-" + t,
                            d.textContent = "Replace",
                            d.className = "save-option",
                            c.addEventListener("change", (e=>this.replaceSOL(e, t))),
                            l.appendChild(c),
                            l.appendChild(d);
                            const u = document.createElement("TD")
                              , h = document.createElement("SPAN");
                            h.textContent = "Delete",
                            h.className = "save-option",
                            h.addEventListener("click", (()=>this.deleteSave(t))),
                            u.appendChild(h),
                            o.appendChild(a),
                            o.appendChild(s),
                            o.appendChild(l),
                            o.appendChild(u),
                            e.appendChild(o)
                        }
                    }
                    ))
                }
            }
            backupSaves() {
                Object.keys(localStorage).forEach((e=>{
                    const t = e.split("/").pop()
                      , n = localStorage.getItem(e);
                    n && this.isB64SOL(n) && this.saveFile(n, "application/octet-stream", t + ".sol")
                }
                ))
            }
            openSaveManager() {
                this.saveManager.showModal()
            }
            async downloadSwf() {
                try {
                    if (this.swfUrl) {
                        console.log("Downloading SWF: " + this.swfUrl);
                        const e = await fetch(this.swfUrl.href);
                        if (!e.ok)
                            return void console.error("SWF download failed");
                        const t = await e.blob()
                          , n = URL.createObjectURL(t)
                          , i = document.createElement("a");
                        i.style.display = "none",
                        i.href = n,
                        i.download = function(e) {
                            const t = e.pathname;
                            return t.substring(t.lastIndexOf("/") + 1)
                        }(this.swfUrl),
                        document.body.appendChild(i),
                        i.click(),
                        document.body.removeChild(i),
                        URL.revokeObjectURL(n)
                    } else
                        console.error("SWF download failed")
                } catch (e) {
                    console.error("SWF download failed")
                }
            }
            virtualKeyboardInput() {
                const e = this.virtualKeyboard
                  , t = e.value;
                for (const e of t)
                    for (const t of ["keydown", "keyup"])
                        this.dispatchEvent(new KeyboardEvent(t,{
                            key: e,
                            bubbles: !0
                        }));
                e.value = ""
            }
            openVirtualKeyboard() {
                navigator.userAgent.toLowerCase().includes("android") ? setTimeout((()=>{
                    this.virtualKeyboard.focus({
                        preventScroll: !0
                    })
                }
                ), 100) : this.virtualKeyboard.focus({
                    preventScroll: !0
                })
            }
            contextMenuItems() {
                const e = String.fromCharCode(10003)
                  , t = [];
                this.instance && (this.instance.prepare_context_menu().forEach(((n,i)=>{
                    n.separatorBefore && t.length > 0 && t.push(null),
                    t.push({
                        text: n.caption + (n.checked ? ` (${e})` : ""),
                        onClick: ()=>{
                            var e;
                            return null === (e = this.instance) || void 0 === e ? void 0 : e.run_context_menu_callback(i)
                        }
                        ,
                        enabled: n.enabled
                    })
                }
                )),
                t.length > 0 && t.push(null)),
                this.fullscreenEnabled && (this.isFullscreen ? t.push({
                    text: "Exit fullscreen",
                    onClick: ()=>{
                        var e;
                        return null === (e = this.instance) || void 0 === e ? void 0 : e.set_fullscreen(!1)
                    }
                }) : t.push({
                    text: "Enter fullscreen",
                    onClick: ()=>{
                        var e;
                        return null === (e = this.instance) || void 0 === e ? void 0 : e.set_fullscreen(!0)
                    }
                })),
                this.instance && this.swfUrl && this.loadedConfig && !0 === this.loadedConfig.showSwfDownload && (t.push(null),
                t.push({
                    text: "Download .swf",
                    onClick: this.downloadSwf.bind(this)
                })),
                window.isSecureContext && t.push({
                    text: "Copy debug info",
                    onClick: ()=>navigator.clipboard.writeText(this.getPanicData())
                }),
                this.populateSaves();
                const n = this.saveManager.querySelector("#local-saves");
                n && "" !== n.textContent && t.push({
                    text: "Open Save Manager",
                    onClick: this.openSaveManager.bind(this)
                }),
                t.push(null);
                const i = this.isExtension ? "extension" : "";
                return t.push({
                    text: `About Ruffle ${i} (${$})`,
                    onClick() {
                        window.open(z, "_blank")
                    }
                }),
                this.isTouch && (t.push(null),
                t.push({
                    text: "Hide this menu",
                    onClick: ()=>this.contextMenuForceDisabled = !0
                })),
                t
            }
            clearLongPressTimer() {
                this.longPressTimer && (clearTimeout(this.longPressTimer),
                this.longPressTimer = null)
            }
            startLongPressTimer() {
                this.clearLongPressTimer(),
                this.longPressTimer = setTimeout((()=>this.clearLongPressTimer()), 800)
            }
            checkLongPress(e) {
                this.longPressTimer ? this.clearLongPressTimer() : this.contextMenuSupported || "mouse" === e.pointerType || this.showContextMenu(e)
            }
            showContextMenu(e) {
                if (e.preventDefault(),
                "contextmenu" === e.type ? (this.contextMenuSupported = !0,
                window.addEventListener("click", this.hideContextMenu.bind(this), {
                    once: !0
                })) : (window.addEventListener("pointerup", this.hideContextMenu.bind(this), {
                    once: !0
                }),
                e.stopPropagation()),
                this.loadedConfig && !1 === this.loadedConfig.contextMenu || this.contextMenuForceDisabled)
                    return;
                for (; this.contextMenuElement.firstChild; )
                    this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);
                for (const e of this.contextMenuItems())
                    if (null === e) {
                        const e = document.createElement("li");
                        e.className = "menu_separator";
                        const t = document.createElement("hr");
                        e.appendChild(t),
                        this.contextMenuElement.appendChild(e)
                    } else {
                        const {text: t, onClick: n, enabled: i} = e
                          , o = document.createElement("li");
                        o.className = "menu_item",
                        o.textContent = t,
                        this.contextMenuElement.appendChild(o),
                        !1 !== i ? o.addEventListener(this.contextMenuSupported ? "click" : "pointerup", n) : o.classList.add("disabled")
                    }
                this.contextMenuElement.style.left = "0",
                this.contextMenuElement.style.top = "0",
                this.contextMenuElement.style.display = "block";
                const t = this.getBoundingClientRect()
                  , n = e.clientX - t.x
                  , i = e.clientY - t.y
                  , o = t.width - this.contextMenuElement.clientWidth - 1
                  , a = t.height - this.contextMenuElement.clientHeight - 1;
                this.contextMenuElement.style.left = Math.floor(Math.min(n, o)) + "px",
                this.contextMenuElement.style.top = Math.floor(Math.min(i, a)) + "px"
            }
            hideContextMenu() {
                var e;
                null === (e = this.instance) || void 0 === e || e.clear_custom_menu_items(),
                this.contextMenuElement.style.display = "none"
            }
            pause() {
                this.instance && (this.instance.pause(),
                this.playButton.style.display = "block")
            }
            audioState() {
                if (this.instance) {
                    const e = this.instance.audio_context();
                    return e && e.state || "running"
                }
                return "suspended"
            }
            unmuteOverlayClicked() {
                if (this.instance) {
                    if ("running" !== this.audioState()) {
                        const e = this.instance.audio_context();
                        e && e.resume()
                    }
                    this.unmuteOverlay.style.display = "none"
                }
            }
            unmuteAudioContext() {
                Y || (navigator.maxTouchPoints < 1 ? Y = !0 : this.container.addEventListener("click", (()=>{
                    var e;
                    if (Y)
                        return;
                    const t = null === (e = this.instance) || void 0 === e ? void 0 : e.audio_context();
                    if (!t)
                        return;
                    const n = new Audio;
                    n.src = (()=>{
                        const e = new ArrayBuffer(10)
                          , n = new DataView(e)
                          , i = t.sampleRate;
                        return n.setUint32(0, i, !0),
                        n.setUint32(4, i, !0),
                        n.setUint16(8, 1, !0),
                        `data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(e))).slice(0, 13)}AgAZGF0YQcAAACAgICAgICAAAA=`
                    }
                    )(),
                    n.load(),
                    n.play().then((()=>{
                        Y = !0
                    }
                    )).catch((e=>{
                        console.warn(`Failed to play dummy sound: ${e}`)
                    }
                    ))
                }
                ), {
                    once: !0
                }))
            }
            copyElement(e) {
                if (e) {
                    for (const t of e.attributes)
                        if (t.specified) {
                            if ("title" === t.name && "Adobe Flash Player" === t.value)
                                continue;
                            try {
                                this.setAttribute(t.name, t.value)
                            } catch (e) {
                                console.warn(`Unable to set attribute ${t.name} on Ruffle instance`)
                            }
                        }
                    for (const t of Array.from(e.children))
                        this.appendChild(t)
                }
            }
            static htmlDimensionToCssDimension(e) {
                if (e) {
                    const t = e.match(H);
                    if (t) {
                        let e = t[1];
                        return t[3] || (e += "px"),
                        e
                    }
                }
                return null
            }
            onCallbackAvailable(e) {
                const t = this.instance;
                this[e] = (...n)=>null == t ? void 0 : t.call_exposed_callback(e, n)
            }
            set traceObserver(e) {
                var t;
                null === (t = this.instance) || void 0 === t || t.set_trace_observer(e)
            }
            getPanicData() {
                const e = [];
                if (e.push("\n# Player Info\n"),
                e.push(this.debugPlayerInfo()),
                e.push("\n# Page Info\n"),
                e.push(`Page URL: ${document.location.href}\n`),
                this.swfUrl && e.push(`SWF URL: ${this.swfUrl}\n`),
                e.push("\n# Browser Info\n"),
                e.push(`User Agent: ${window.navigator.userAgent}\n`),
                e.push(`Platform: ${window.navigator.platform}\n`),
                e.push(`Has touch support: ${window.navigator.maxTouchPoints > 0}\n`),
                e.push("\n# Ruffle Info\n"),
                e.push(`Version: ${W}\n`),
                e.push(`Name: ${$}\n`),
                e.push("Channel: nightly\n"),
                e.push(`Built: ${V}\n`),
                e.push("Commit: da689b7687d6bb23f37251e902ccddabdfcc5f48\n"),
                e.push(`Is extension: ${this.isExtension}\n`),
                e.push("\n# Metadata\n"),
                this.metadata)
                    for (const [t,n] of Object.entries(this.metadata))
                        e.push(`${t}: ${n}\n`);
                return e.join("")
            }
            panic(e) {
                var t;
                if (this.panicked)
                    return;
                if (this.panicked = !0,
                this.hideSplashScreen(),
                e instanceof Error && ("AbortError" === e.name || e.message.includes("AbortError")))
                    return;
                const n = null !== (t = null == e ? void 0 : e.ruffleIndexError) && void 0 !== t ? t : Q.Unknown
                  , i = Object.assign([], {
                    stackIndex: -1,
                    avmStackIndex: -1
                });
                if (i.push("# Error Info\n"),
                e instanceof Error) {
                    if (i.push(`Error name: ${e.name}\n`),
                    i.push(`Error message: ${e.message}\n`),
                    e.stack) {
                        const t = i.push(`Error stack:\n\`\`\`\n${e.stack}\n\`\`\`\n`) - 1;
                        if (e.avmStack) {
                            const t = i.push(`AVM2 stack:\n\`\`\`\n    ${e.avmStack.trim().replace(/\t/g, "    ")}\n\`\`\`\n`) - 1;
                            i.avmStackIndex = t
                        }
                        i.stackIndex = t
                    }
                } else
                    i.push(`Error: ${e}\n`);
                i.push(this.getPanicData());
                const o = i.join("")
                  , a = new Date(V)
                  , s = new Date;
                s.setMonth(s.getMonth() - 6);
                const r = s > a;
                let l, c, d;
                if (r)
                    l = `<a target="_top" href="${z}#downloads">Update Ruffle</a>`;
                else {
                    const e = document.location.href.split(/[?#]/)[0];
                    let t = `https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(`Error on ${e}`)}&template=error_report.md&labels=error-report&body=`
                      , n = encodeURIComponent(o);
                    i.stackIndex > -1 && String(t + n).length > 8195 && (i[i.stackIndex] = null,
                    i.avmStackIndex > -1 && (i[i.avmStackIndex] = null),
                    n = encodeURIComponent(i.join(""))),
                    t += n,
                    l = `<a target="_top" href="${t}">Report Bug</a>`
                }
                switch (n) {
                case Q.FileProtocol:
                    c = '\n                    <p>It appears you are running Ruffle on the "file:" protocol.</p>\n                    <p>This doesn\'t work as browsers block many features from working for security reasons.</p>\n                    <p>Instead, we invite you to setup a local server or either use the web demo or the desktop application.</p>\n                ',
                    d = `\n                    <li><a target="_top" href="${z}/demo">Web Demo</a></li>\n                    <li><a target="_top" href="${z}#downloads">Desktop Application</a></li>\n                `;
                    break;
                case Q.JavascriptConfiguration:
                    c = "\n                    <p>Ruffle has encountered a major issue due to an incorrect JavaScript configuration.</p>\n                    <p>If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.</p>\n                    <p>You can also consult the Ruffle wiki for help.</p>\n                ",
                    d = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#javascript-api">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                    break;
                case Q.WasmNotFound:
                    c = '\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>If you are the server administrator, please ensure the file has correctly been uploaded.</p>\n                    <p>If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.</p>\n                ',
                    d = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configuration-options">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                    break;
                case Q.WasmMimeType:
                    c = '\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This web server is not serving ".wasm" files with the correct MIME type.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ',
                    d = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-webassembly-mime-type">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                    break;
                case Q.SwfFetchError:
                    c = "\n                    <p>Ruffle failed to load the Flash SWF file.</p>\n                    <p>The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.</p>\n                    <p>Try contacting the website administrator for help.</p>\n                ",
                    d = '\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                    break;
                case Q.SwfCors:
                    c = "\n                    <p>Ruffle failed to load the Flash SWF file.</p>\n                    <p>Access to fetch has likely been blocked by CORS policy.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ",
                    d = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-cors-header">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                    break;
                case Q.WasmCors:
                    c = '\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>Access to fetch has likely been blocked by CORS policy.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ',
                    d = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-cors-header">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                    break;
                case Q.InvalidWasm:
                    c = "\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>It seems like this page has missing or invalid files for running Ruffle.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ",
                    d = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#addressing-a-compileerror">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                    break;
                case Q.WasmDownload:
                    c = "\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This can often resolve itself, so you can try reloading the page.</p>\n                    <p>Otherwise, please contact the website administrator.</p>\n                ",
                    d = '\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                    break;
                case Q.WasmDisabledMicrosoftEdge:
                    c = '\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>To fix this, try opening your browser\'s settings, clicking "Privacy, search, and services", scrolling down, and turning off "Enhance your security on the web".</p>\n                    <p>This will allow your browser to load the required ".wasm" files.</p>\n                    <p>If the issue persists, you might have to use a different browser.</p>\n                ',
                    d = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#edge-webassembly-error">More Information</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                    break;
                case Q.JavascriptConflict:
                    c = "\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>It seems like this page uses JavaScript code that conflicts with Ruffle.</p>\n                    <p>If you are the server administrator, we invite you to try loading the file on a blank page.</p>\n                ",
                    r && (c += `<p>You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: ${V}).</p>`),
                    d = `\n                    <li>${l}</li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `;
                    break;
                case Q.CSPConflict:
                    c = '\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This web server\'s Content Security Policy does not allow the required ".wasm" component to run.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ',
                    d = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-wasm-csp">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                    break;
                default:
                    c = "<p>Ruffle has encountered a major issue whilst trying to display this Flash content.</p>",
                    c += r ? `<p>If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: ${V}).</p>` : "<p>This isn't supposed to happen, so we'd really appreciate if you could file a bug!</p>",
                    d = `\n                    <li>${l}</li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `
                }
                this.container.innerHTML = `\n            <div id="panic">\n                <div id="panic-title">Something went wrong :(</div>\n                <div id="panic-body">${c}</div>\n                <div id="panic-footer">\n                    <ul>${d}</ul>\n                </div>\n            </div>\n        `;
                const u = this.container.querySelector("#panic-view-details");
                u && (u.onclick = ()=>{
                    const e = this.container.querySelector("#panic-body");
                    return e.classList.add("details"),
                    e.innerHTML = `<textarea>${o}</textarea>`,
                    !1
                }
                ),
                this.destroy()
            }
            displayRootMovieDownloadFailedMessage() {
                if (this.isExtension && window.location.origin !== this.swfUrl.origin) {
                    this.hideSplashScreen();
                    const e = document.createElement("div");
                    e.id = "message_overlay",
                    e.innerHTML = `<div class="message">\n                <p>Ruffle wasn't able to run the Flash embedded in this page.</p>\n                <p>You can try to open the file in a separate tab, to sidestep this issue.</p>\n                <div>\n                    <a target="_blank" href="${this.swfUrl}">Open in a new tab</a>\n                </div>\n            </div>`,
                    this.container.prepend(e)
                } else {
                    const e = new Error("Failed to fetch: " + this.swfUrl);
                    this.swfUrl.protocol.includes("http") ? window.location.origin === this.swfUrl.origin ? e.ruffleIndexError = Q.SwfFetchError : e.ruffleIndexError = Q.SwfCors : e.ruffleIndexError = Q.FileProtocol,
                    this.panic(e)
                }
            }
            displayUnsupportedMessage() {
                const e = document.createElement("div");
                e.id = "message_overlay",
                e.innerHTML = '<div class="message">\n            <p>The Ruffle emulator may not yet fully support all of ActionScript 3 used by this content.</p>\n            <p>Some parts of the content may not work as expected.</p>\n            <div>\n                <a target="_blank" class="more-info-link" href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users">More info</a>\n                <button id="run-anyway-btn">Run anyway</button>\n            </div>\n        </div>',
                this.container.prepend(e),
                e.querySelector("#run-anyway-btn").onclick = ()=>{
                    e.parentNode.removeChild(e)
                }
            }
            displayMessage(e) {
                const t = document.createElement("div");
                t.id = "message_overlay",
                t.innerHTML = `<div class="message">\n            <p>${e}</p>\n            <div>\n                <button id="continue-btn">continue</button>\n            </div>\n        </div>`,
                this.container.prepend(t),
                this.container.querySelector("#continue-btn").onclick = ()=>{
                    t.parentNode.removeChild(t)
                }
            }
            debugPlayerInfo() {
                let e = `Allows script access: ${!!this.loadedConfig && this.loadedConfig.allowScriptAccess}\n`
                  , t = `(Cached) ${this._cachedDebugInfo}`;
                if (this.instance)
                    try {
                        t = this.instance.renderer_debug_info()
                    } catch (e) {}
                return t && (e += `${t}\n`),
                e
            }
            hideSplashScreen() {
                this.splashScreen.classList.add("hidden"),
                this.container.classList.remove("hidden")
            }
            showSplashScreen() {
                this.splashScreen.classList.remove("hidden"),
                this.container.classList.add("hidden")
            }
            setMetadata(e) {
                this._metadata = e,
                this._readyState = J.Loaded,
                this.hideSplashScreen(),
                this.dispatchEvent(new Event(X.LOADED_METADATA)),
                this.dispatchEvent(new Event(X.LOADED_DATA))
            }
            setIsExtension(e) {
                this.isExtension = e
            }
        }
        function ee(e, t) {
            switch (e || (e = "sameDomain"),
            e.toLowerCase()) {
            case "always":
                return !0;
            case "never":
                return !1;
            default:
                try {
                    return new URL(window.location.href).origin === new URL(t,window.location.href).origin
                } catch (e) {
                    return !1
                }
            }
        }
        function te(e) {
            return null === e || "true" === e.toLowerCase()
        }
        function ne(e) {
            if (e) {
                let t = ""
                  , n = "";
                try {
                    const i = new URL(e,z);
                    t = i.pathname,
                    n = i.hostname.replace("www.", "")
                } catch (e) {}
                if (t.startsWith("/v/") && ("youtube.com" === n || "youtube-nocookie.com" === n))
                    return !0
            }
            return !1
        }
        function ie(e, t) {
            var n, i;
            const o = e.getAttribute(t)
              , a = null !== (i = null === (n = window.RufflePlayer) || void 0 === n ? void 0 : n.config) && void 0 !== i ? i : {};
            if (o)
                try {
                    const n = new URL(o);
                    "http:" !== n.protocol || "https:" !== window.location.protocol || "upgradeToHttps"in a && !1 === a.upgradeToHttps || (n.protocol = "https:",
                    e.setAttribute(t, n.toString()))
                } catch (e) {}
        }
        function oe(e) {
            if (e) {
                let t = "";
                try {
                    t = new URL(e,z).pathname
                } catch (e) {}
                if (t && t.length >= 4) {
                    const e = t.slice(-4).toLowerCase();
                    if (".swf" === e || ".spl" === e)
                        return !0
                }
            }
            return !1
        }
        function ae(e) {
            switch (e.toLowerCase()) {
            case k.toLowerCase():
            case E.toLowerCase():
            case S.toLowerCase():
            case B.toLowerCase():
                return !0;
            default:
                return !1
            }
        }
        function se(e) {
            let t = e.parentElement;
            for (; null !== t; ) {
                switch (t.tagName) {
                case "AUDIO":
                case "VIDEO":
                    return !0
                }
                t = t.parentElement
            }
            return !1
        }
        X.LOADED_METADATA = "loadedmetadata",
        X.LOADED_DATA = "loadeddata",
        function(e) {
            e[e.HaveNothing = 0] = "HaveNothing",
            e[e.Loading = 1] = "Loading",
            e[e.Loaded = 2] = "Loaded"
        }(J || (J = {}));
        class re extends X {
            constructor() {
                super()
            }
            connectedCallback() {
                var e, t, n, i, o, a, s, r, l, c, d, u, h, f, p, m, g, v;
                super.connectedCallback();
                const b = this.attributes.getNamedItem("src");
                if (b) {
                    const y = null !== (t = null === (e = this.attributes.getNamedItem("allowScriptAccess")) || void 0 === e ? void 0 : e.value) && void 0 !== t ? t : null
                      , w = null !== (i = null === (n = this.attributes.getNamedItem("menu")) || void 0 === n ? void 0 : n.value) && void 0 !== i ? i : null;
                    this.load({
                        url: b.value,
                        allowScriptAccess: ee(y, b.value),
                        parameters: null !== (a = null === (o = this.attributes.getNamedItem("flashvars")) || void 0 === o ? void 0 : o.value) && void 0 !== a ? a : null,
                        backgroundColor: null !== (r = null === (s = this.attributes.getNamedItem("bgcolor")) || void 0 === s ? void 0 : s.value) && void 0 !== r ? r : null,
                        base: null !== (c = null === (l = this.attributes.getNamedItem("base")) || void 0 === l ? void 0 : l.value) && void 0 !== c ? c : null,
                        menu: te(w),
                        salign: null !== (u = null === (d = this.attributes.getNamedItem("salign")) || void 0 === d ? void 0 : d.value) && void 0 !== u ? u : "",
                        quality: null !== (f = null === (h = this.attributes.getNamedItem("quality")) || void 0 === h ? void 0 : h.value) && void 0 !== f ? f : "high",
                        scale: null !== (m = null === (p = this.attributes.getNamedItem("scale")) || void 0 === p ? void 0 : p.value) && void 0 !== m ? m : "showAll",
                        wmode: null !== (v = null === (g = this.attributes.getNamedItem("wmode")) || void 0 === g ? void 0 : g.value) && void 0 !== v ? v : U.Window
                    })
                }
            }
            get src() {
                var e;
                return null === (e = this.attributes.getNamedItem("src")) || void 0 === e ? void 0 : e.value
            }
            set src(e) {
                if (e) {
                    const t = document.createAttribute("src");
                    t.value = e,
                    this.attributes.setNamedItem(t)
                } else
                    this.attributes.removeNamedItem("src")
            }
            static get observedAttributes() {
                return ["src", "width", "height"]
            }
            attributeChangedCallback(e, t, n) {
                var i, o, a, s;
                if (super.attributeChangedCallback(e, t, n),
                this.isConnected && "src" === e) {
                    const e = this.attributes.getNamedItem("src");
                    e && this.load({
                        url: e.value,
                        parameters: null !== (o = null === (i = this.attributes.getNamedItem("flashvars")) || void 0 === i ? void 0 : i.value) && void 0 !== o ? o : null,
                        base: null !== (s = null === (a = this.attributes.getNamedItem("base")) || void 0 === a ? void 0 : a.value) && void 0 !== s ? s : null
                    })
                }
            }
            static isInterdictable(e) {
                if (se(e))
                    return !1;
                if (!e.getAttribute("src"))
                    return !1;
                if (ne(e.getAttribute("src")))
                    return ie(e, "src"),
                    !1;
                const t = e.getAttribute("type");
                return t ? ae(t) : oe(e.getAttribute("src"))
            }
            static fromNativeEmbedElement(e) {
                const t = O("ruffle-embed", re)
                  , n = document.createElement(t);
                return n.copyElement(e),
                n
            }
        }
        function le(e, t, n) {
            t = t.toLowerCase();
            for (const [n,i] of Object.entries(e))
                if (n.toLowerCase() === t)
                    return i;
            return n
        }
        function ce(e) {
            var t, n;
            const i = {};
            for (const o of e.children)
                if (o instanceof HTMLParamElement) {
                    const e = null === (t = o.attributes.getNamedItem("name")) || void 0 === t ? void 0 : t.value
                      , a = null === (n = o.attributes.getNamedItem("value")) || void 0 === n ? void 0 : n.value;
                    e && a && (i[e] = a)
                }
            return i
        }
        class de extends X {
            constructor() {
                super(),
                this.params = {}
            }
            connectedCallback() {
                var e;
                super.connectedCallback(),
                this.params = ce(this);
                let t = null;
                this.attributes.getNamedItem("data") ? t = null === (e = this.attributes.getNamedItem("data")) || void 0 === e ? void 0 : e.value : this.params.movie && (t = this.params.movie);
                const n = le(this.params, "allowScriptAccess", null)
                  , i = le(this.params, "flashvars", this.getAttribute("flashvars"))
                  , o = le(this.params, "bgcolor", this.getAttribute("bgcolor"))
                  , a = le(this.params, "base", this.getAttribute("base"))
                  , s = le(this.params, "menu", null)
                  , r = le(this.params, "salign", "")
                  , l = le(this.params, "quality", "high")
                  , c = le(this.params, "scale", "showAll")
                  , d = le(this.params, "wmode", "window");
                if (t) {
                    const e = {
                        url: t
                    };
                    e.allowScriptAccess = ee(n, t),
                    i && (e.parameters = i),
                    o && (e.backgroundColor = o),
                    a && (e.base = a),
                    e.menu = te(s),
                    r && (e.salign = r),
                    l && (e.quality = l),
                    c && (e.scale = c),
                    d && (e.wmode = d),
                    this.load(e)
                }
            }
            debugPlayerInfo() {
                var e;
                let t = super.debugPlayerInfo();
                t += "Player type: Object\n";
                let n = null;
                return this.attributes.getNamedItem("data") ? n = null === (e = this.attributes.getNamedItem("data")) || void 0 === e ? void 0 : e.value : this.params.movie && (n = this.params.movie),
                t += `SWF URL: ${n}\n`,
                Object.keys(this.params).forEach((e=>{
                    t += `Param ${e}: ${this.params[e]}\n`
                }
                )),
                Object.keys(this.attributes).forEach((e=>{
                    var n;
                    t += `Attribute ${e}: ${null === (n = this.attributes.getNamedItem(e)) || void 0 === n ? void 0 : n.value}\n`
                }
                )),
                t
            }
            get data() {
                return this.getAttribute("data")
            }
            set data(e) {
                if (e) {
                    const t = document.createAttribute("data");
                    t.value = e,
                    this.attributes.setNamedItem(t)
                } else
                    this.attributes.removeNamedItem("data")
            }
            static isInterdictable(e) {
                var t, n;
                if (se(e))
                    return !1;
                if (e.getElementsByTagName("ruffle-object").length > 0 || e.getElementsByTagName("ruffle-embed").length > 0)
                    return !1;
                const i = null === (t = e.attributes.getNamedItem("data")) || void 0 === t ? void 0 : t.value.toLowerCase()
                  , o = ce(e);
                let a;
                if (i) {
                    if (ne(i))
                        return ie(e, "data"),
                        !1;
                    a = oe(i)
                } else {
                    if (!o || !o.movie)
                        return !1;
                    if (ne(o.movie)) {
                        const t = e.querySelector("param[name='movie']");
                        if (t) {
                            ie(t, "value");
                            const n = t.getAttribute("value");
                            n && e.setAttribute("data", n)
                        }
                        return !1
                    }
                    a = oe(o.movie)
                }
                const s = null === (n = e.attributes.getNamedItem("classid")) || void 0 === n ? void 0 : n.value.toLowerCase();
                if (s === "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000".toLowerCase())
                    return !Array.from(e.getElementsByTagName("object")).some(de.isInterdictable) && !Array.from(e.getElementsByTagName("embed")).some(re.isInterdictable);
                if (s)
                    return !1;
                const r = e.attributes.getNamedItem("type");
                return r ? ae(r.value) : a
            }
            static fromNativeObjectElement(e) {
                const t = O("ruffle-object", de)
                  , n = document.createElement(t);
                for (const t of Array.from(e.getElementsByTagName("embed")))
                    re.isInterdictable(t) && t.remove();
                for (const t of Array.from(e.getElementsByTagName("object")))
                    de.isInterdictable(t) && t.remove();
                return n.copyElement(e),
                n
            }
        }
        let ue;
        const he = null !== (K = null === (Z = window.RufflePlayer) || void 0 === Z ? void 0 : Z.config) && void 0 !== K ? K : {}
          , fe = x(he) + "ruffle.js";
        let pe, me, ge, ve;
        function be() {
            try {
                pe = null != pe ? pe : document.getElementsByTagName("object"),
                me = null != me ? me : document.getElementsByTagName("embed");
                for (const e of Array.from(pe))
                    if (de.isInterdictable(e)) {
                        const t = de.fromNativeObjectElement(e);
                        t.setIsExtension(ue),
                        e.replaceWith(t)
                    }
                for (const e of Array.from(me))
                    if (re.isInterdictable(e)) {
                        const t = re.fromNativeEmbedElement(e);
                        t.setIsExtension(ue),
                        e.replaceWith(t)
                    }
            } catch (e) {
                console.error(`Serious error encountered when polyfilling native Flash elements: ${e}`)
            }
        }
        function ye() {
            ge = null != ge ? ge : document.getElementsByTagName("iframe"),
            ve = null != ve ? ve : document.getElementsByTagName("frame"),
            [ge, ve].forEach((e=>{
                for (const t of e) {
                    if (void 0 !== t.dataset.rufflePolyfilled)
                        continue;
                    t.dataset.rufflePolyfilled = "";
                    const e = t.contentWindow
                      , n = `Couldn't load Ruffle into ${t.tagName}[${t.src}]: `;
                    try {
                        "complete" === e.document.readyState && we(e, n)
                    } catch (e) {
                        ue || console.warn(n + e)
                    }
                    t.addEventListener("load", (()=>{
                        we(e, n)
                    }
                    ), !1)
                }
            }
            ))
        }
        async function we(e, t) {
            var n;
            let i;
            await new Promise((e=>{
                window.setTimeout((()=>{
                    e()
                }
                ), 100)
            }
            ));
            try {
                if (i = e.document,
                !i)
                    return
            } catch (e) {
                return void (ue || console.warn(t + e))
            }
            if (ue || void 0 === i.documentElement.dataset.ruffleOptout)
                if (ue)
                    e.RufflePlayer || (e.RufflePlayer = {}),
                    e.RufflePlayer.config = Object.assign(Object.assign({}, he), null !== (n = e.RufflePlayer.config) && void 0 !== n ? n : {});
                else if (!e.RufflePlayer) {
                    const t = i.createElement("script");
                    t.setAttribute("src", fe),
                    t.onload = ()=>{
                        e.RufflePlayer = {},
                        e.RufflePlayer.config = he
                    }
                    ,
                    i.head.appendChild(t)
                }
        }
        class Ae {
            constructor(e, t, n, i, o) {
                this.major = e,
                this.minor = t,
                this.patch = n,
                this.prIdent = i,
                this.buildIdent = o
            }
            static fromSemver(e) {
                const t = e.split("+")
                  , n = t[0].split("-")
                  , i = n[0].split(".")
                  , o = parseInt(i[0], 10);
                let a = 0
                  , s = 0
                  , r = null
                  , l = null;
                return void 0 !== i[1] && (a = parseInt(i[1], 10)),
                void 0 !== i[2] && (s = parseInt(i[2], 10)),
                void 0 !== n[1] && (r = n[1].split(".")),
                void 0 !== t[1] && (l = t[1].split(".")),
                new Ae(o,a,s,r,l)
            }
            isCompatibleWith(e) {
                return 0 !== this.major && this.major === e.major || 0 === this.major && 0 === e.major && 0 !== this.minor && this.minor === e.minor || 0 === this.major && 0 === e.major && 0 === this.minor && 0 === e.minor && 0 !== this.patch && this.patch === e.patch
            }
            hasPrecedenceOver(e) {
                if (this.major > e.major)
                    return !0;
                if (this.major < e.major)
                    return !1;
                if (this.minor > e.minor)
                    return !0;
                if (this.minor < e.minor)
                    return !1;
                if (this.patch > e.patch)
                    return !0;
                if (this.patch < e.patch)
                    return !1;
                if (null === this.prIdent && null !== e.prIdent)
                    return !0;
                if (null !== this.prIdent && null !== e.prIdent) {
                    const t = /^[0-9]*$/;
                    for (let n = 0; n < this.prIdent.length && n < e.prIdent.length; n += 1) {
                        if (!t.test(this.prIdent[n]) && t.test(e.prIdent[n]))
                            return !0;
                        if (t.test(this.prIdent[n]) && t.test(e.prIdent[n])) {
                            if (parseInt(this.prIdent[n], 10) > parseInt(e.prIdent[n], 10))
                                return !0;
                            if (parseInt(this.prIdent[n], 10) < parseInt(e.prIdent[n], 10))
                                return !1
                        } else {
                            if (t.test(this.prIdent[n]) && !t.test(e.prIdent[n]))
                                return !1;
                            if (!t.test(this.prIdent[n]) && !t.test(e.prIdent[n])) {
                                if (this.prIdent[n] > e.prIdent[n])
                                    return !0;
                                if (this.prIdent[n] < e.prIdent[n])
                                    return !1
                            }
                        }
                    }
                    return this.prIdent.length > e.prIdent.length
                }
                return !1
            }
            isEqual(e) {
                return this.major === e.major && this.minor === e.minor && this.patch === e.patch
            }
            isStableOrCompatiblePrerelease(e) {
                return null === e.prIdent || this.major === e.major && this.minor === e.minor && this.patch === e.patch
            }
        }
        class xe {
            constructor(e) {
                this.requirements = e
            }
            satisfiedBy(e) {
                for (const t of this.requirements) {
                    let n = !0;
                    for (const {comparator: i, version: o} of t)
                        n = n && o.isStableOrCompatiblePrerelease(e),
                        "" === i || "=" === i ? n = n && o.isEqual(e) : ">" === i ? n = n && e.hasPrecedenceOver(o) : ">=" === i ? n = n && (e.hasPrecedenceOver(o) || o.isEqual(e)) : "<" === i ? n = n && o.hasPrecedenceOver(e) : "<=" === i ? n = n && (o.hasPrecedenceOver(e) || o.isEqual(e)) : "^" === i && (n = n && o.isCompatibleWith(e));
                    if (n)
                        return !0
                }
                return !1
            }
            static fromRequirementString(e) {
                const t = e.split(" ");
                let n = [];
                const i = [];
                for (const e of t)
                    if ("||" === e)
                        n.length > 0 && (i.push(n),
                        n = []);
                    else if (e.length > 0) {
                        const t = /[0-9]/.exec(e);
                        if (t) {
                            const i = e.slice(0, t.index).trim()
                              , o = Ae.fromSemver(e.slice(t.index).trim());
                            n.push({
                                comparator: i,
                                version: o
                            })
                        }
                    }
                return n.length > 0 && i.push(n),
                new xe(i)
            }
        }
        const Ce = {
            version: W,
            polyfill(e) {
                !function(e) {
                    var t;
                    ue = e;
                    const n = "ruffle.js" === (null === (t = navigator.plugins.namedItem("Ruffle Extension")) || void 0 === t ? void 0 : t.filename);
                    !ue && n || (be(),
                    ye(),
                    new MutationObserver((function(e) {
                        e.some((e=>e.addedNodes.length > 0)) && (be(),
                        ye())
                    }
                    )).observe(document, {
                        childList: !0,
                        subtree: !0
                    }))
                }(e)
            },
            pluginPolyfill() {
                !function(e) {
                    "install"in navigator.plugins && navigator.plugins.install || Object.defineProperty(navigator, "plugins", {
                        value: new P(navigator.plugins),
                        writable: !1
                    }),
                    navigator.plugins.install(e),
                    !(e.length > 0) || "install"in navigator.mimeTypes && navigator.mimeTypes.install || Object.defineProperty(navigator, "mimeTypes", {
                        value: new R(navigator.mimeTypes),
                        writable: !1
                    });
                    const t = navigator.mimeTypes;
                    for (let n = 0; n < e.length; n += 1)
                        t.install(e[n])
                }(_)
            },
            createPlayer() {
                const e = O("ruffle-player", X);
                return document.createElement(e)
            }
        };
        class Ie {
            constructor(e) {
                this.sources = {},
                this.config = {},
                this.invoked = !1,
                this.newestName = null,
                this.conflict = null,
                null != e && (e instanceof Ie ? (this.sources = e.sources,
                this.config = e.config,
                this.invoked = e.invoked,
                this.conflict = e.conflict,
                this.newestName = e.newestName,
                e.superseded()) : e.constructor === Object && e.config instanceof Object ? this.config = e.config : this.conflict = e),
                "loading" === document.readyState ? document.addEventListener("readystatechange", this.init.bind(this)) : window.setTimeout(this.init.bind(this), 0)
            }
            get version() {
                return "0.1.0"
            }
            registerSource(e) {
                this.sources[e] = Ce
            }
            newestSourceName() {
                let e = null
                  , t = Ae.fromSemver("0.0.0");
                for (const n in this.sources)
                    if (Object.prototype.hasOwnProperty.call(this.sources, n)) {
                        const i = Ae.fromSemver(this.sources[n].version);
                        i.hasPrecedenceOver(t) && (e = n,
                        t = i)
                    }
                return e
            }
            init() {
                if (!this.invoked) {
                    if (this.invoked = !0,
                    this.newestName = this.newestSourceName(),
                    null === this.newestName)
                        throw new Error("No registered Ruffle source!");
                    !1 !== (!("polyfills"in this.config) || this.config.polyfills) && this.sources[this.newestName].polyfill("extension" === this.newestName)
                }
            }
            newest() {
                const e = this.newestSourceName();
                return null !== e ? this.sources[e] : null
            }
            satisfying(e) {
                const t = xe.fromRequirementString(e);
                let n = null;
                for (const e in this.sources)
                    if (Object.prototype.hasOwnProperty.call(this.sources, e)) {
                        const i = Ae.fromSemver(this.sources[e].version);
                        t.satisfiedBy(i) && (n = this.sources[e])
                    }
                return n
            }
            localCompatible() {
                return void 0 !== this.sources.local ? this.satisfying("^" + this.sources.local.version) : this.newest()
            }
            local() {
                return void 0 !== this.sources.local ? this.satisfying("=" + this.sources.local.version) : this.newest()
            }
            superseded() {
                this.invoked = !0
            }
            static negotiate(e, t) {
                let n;
                return n = e instanceof Ie ? e : new Ie(e),
                void 0 !== t && (n.registerSource(t),
                !1 !== (!("polyfills"in n.config) || n.config.polyfills) && Ce.pluginPolyfill()),
                n
            }
        }
        window.RufflePlayer = Ie.negotiate(window.RufflePlayer, "local");
        const ke = window.RufflePlayer.newest();
        let Ee;
        const Se = document.getElementById("main")
          , Be = document.getElementById("overlay")
          , Re = document.getElementById("author-container")
          , Le = document.getElementById("author")
          , Pe = document.getElementById("sample-swfs-container")
          , _e = document.getElementById("local-file")
          , Fe = document.getElementById("sample-swfs")
          , Te = document.getElementById("local-file-name")
          , Oe = document.getElementById("close-modal")
          , Me = document.getElementById("open-modal")
          , je = document.getElementById("reload-swf")
          , qe = document.getElementById("metadata-modal")
          , Ne = {
            Animation: document.getElementById("anim-optgroup"),
            Game: document.getElementById("games-optgroup")
        }
          , Ue = {
            letterbox: "on",
            logLevel: "warn"
        }
          , De = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9.0",
            10: "10.0/10.1",
            11: "10.2",
            12: "10.3",
            13: "11.0",
            14: "11.1",
            15: "11.2",
            16: "11.3",
            17: "11.4",
            18: "11.5",
            19: "11.6",
            20: "11.7",
            21: "11.8",
            22: "11.9",
            23: "12",
            24: "13",
            25: "14",
            26: "15",
            27: "16",
            28: "17",
            29: "18",
            30: "19",
            31: "20",
            32: "21",
            33: "22",
            34: "23",
            35: "24",
            36: "25",
            37: "26",
            38: "27",
            39: "28",
            40: "29",
            41: "30",
            42: "31",
            43: "32"
        };
        function We() {
            Ee && (Ee.remove(),
            document.querySelectorAll("span.metadata").forEach((e=>{
                e.textContent = "Loading"
            }
            )),
            document.getElementById("backgroundColor").value = "#FFFFFF")
        }
        function $e(e) {
            We(),
            Ee = ke.createPlayer(),
            Ee.id = "player",
            Se.append(Ee),
            Ee.load(e),
            Ee.addEventListener("loadedmetadata", (function() {
                if (this.metadata)
                    for (const [e,t] of Object.entries(this.metadata)) {
                        const n = document.getElementById(e);
                        if (n)
                            switch (e) {
                            case "backgroundColor":
                                n.value = t ?? "#FFFFFF";
                                break;
                            case "uncompressedLength":
                                n.textContent = (t >> 10) + "Kb";
                                break;
                            case "swfVersion":
                                document.getElementById("flashVersion").textContent = De[t];
                            default:
                                n.textContent = t
                            }
                    }
            }
            ))
        }
        function Ve() {
            Fe.selectedIndex = -1,
            Re.classList.add("hidden"),
            Le.textContent = "",
            Le.href = ""
        }
        async function ze(e) {
            e && (e.name && (Te.textContent = e.name),
            Ve(),
            $e({
                data: await new Response(e).arrayBuffer(),
                swfFileName: e.name,
                ...Ue
            }))
        }
        function He() {
            const e = Fe[Fe.selectedIndex].swfData;
            if (Te.textContent = "No file selected.",
            e) {
                !function(e) {
                    Re.classList.remove("hidden"),
                    Le.textContent = e.author,
                    Le.href = e.authorLink,
                    _e.value = null
                }(e);
                const t = e.config || Ue;
                $e({
                    url: e.location,
                    ...t
                })
            } else
                Ve(),
                We()
        }
        _e.addEventListener("change", (e=>{
            ze(e.target.files[0])
        }
        )),
        Fe.addEventListener("change", (()=>He())),
        Se.addEventListener("dragenter", (e=>{
            e.stopPropagation(),
            e.preventDefault()
        }
        )),
        Se.addEventListener("dragleave", (e=>{
            e.stopPropagation(),
            e.preventDefault(),
            Be.classList.remove("drag")
        }
        )),
        Se.addEventListener("dragover", (e=>{
            e.stopPropagation(),
            e.preventDefault(),
            Be.classList.add("drag")
        }
        )),
        Se.addEventListener("drop", (e=>{
            e.stopPropagation(),
            e.preventDefault(),
            Be.classList.remove("drag"),
            _e.files = e.dataTransfer.files,
            ze(e.dataTransfer.files[0])
        }
        )),
        _e.addEventListener("dragleave", (e=>{
            e.stopPropagation(),
            e.preventDefault(),
            Be.classList.remove("drag")
        }
        )),
        _e.addEventListener("dragover", (e=>{
            e.stopPropagation(),
            e.preventDefault(),
            Be.classList.add("drag")
        }
        )),
        _e.addEventListener("drop", (e=>{
            e.stopPropagation(),
            e.preventDefault(),
            Be.classList.remove("drag"),
            _e.files = e.dataTransfer.files,
            ze(e.dataTransfer.files[0])
        }
        )),
        Oe.addEventListener("click", (()=>{
            qe.style.display = "none"
        }
        )),
        Me.addEventListener("click", (()=>{
            qe.style.display = "block"
        }
        )),
        je.addEventListener("click", (()=>{
            Ee && confirm("Reload the current SWF?") && Ee.load(Ee.loadedConfig)
        }
        )),
        window.addEventListener("load", (()=>{
            (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)) && _e.removeAttribute("accept"),
            Be.classList.remove("hidden")
        }
        )),
        window.onclick = e=>{
            e.target === qe && (qe.style.display = "none")
        }
        ,
        (async()=>{
            const e = await fetch("swfs.json");
            if (e.ok) {
                const t = await e.json();
                for (const e of t.swfs) {
                    const t = document.createElement("option");
                    t.textContent = e.title,
                    t.value = e.location,
                    t.swfData = e,
                    e.type ? Ne[e.type].append(t) : Fe.insertBefore(t, Fe.firstChild)
                }
                Pe.classList.remove("hidden")
            }
            Fe.selectedIndex = 0;
            const t = new URL(window.location).searchParams.get("file");
            if (t) {
                const e = Array.from(Fe.options);
                Fe.selectedIndex = Math.max(e.findIndex((e=>e.value.endsWith(t))), 0)
            }
            He()
        }
        )()
    }
    )()
}
)();
//# sourceMappingURL=index.js.map
