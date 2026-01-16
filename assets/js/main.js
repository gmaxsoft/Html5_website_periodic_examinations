!(function (e) {
    var n = e(window),
        a = e("body"),
        o = e("#header"),
        l = e("#banner");
    breakpoints({
        wide: "1680px",
        normal: "1280px",
        narrow: "980px",
        narrower: "840px",
        mobile: "736px",
        mobilep: "480px",
    }),
        n.on("load", function () {
            window.setTimeout(function () {
                a.removeClass("is-preload");
            }, 100);
        }),
        e("#nav > ul").dropotron({ alignment: "right" }),
        e(
            '<div id="navButton"><a href="#navPanel" class="toggle" title="Menu"><i class="fa-solid fa-bars"></i></a></div>'
        ).appendTo(a),
        e('<div id="navPanel"><nav>' + e("#nav").navList() + "</nav></div>")
            .appendTo(a)
            .panel({
                delay: 500,
                hideOnClick: !0,
                hideOnSwipe: !0,
                resetScroll: !0,
                resetForms: !0,
                side: "left",
                target: a,
                visibleClass: "navPanel-visible",
            }),
        !browser.mobile &&
        o.hasClass("alt") &&
        0 < l.length &&
        n.on("load", function () {
            l.scrollex({
                bottom: o.outerHeight(),
                terminate: function () {
                    o.removeClass("alt");
                },
                enter: function () {
                    o.addClass("alt reveal");
                },
                leave: function () {
                    o.removeClass("alt");
                },
            });
        });
})(jQuery);