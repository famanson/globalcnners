function identifyBrowser(e, t, n) {
    var r = {
            chrome: [/Chrome\/(\S+)/],
            firefox: [/Firefox\/(\S+)/],
            msie: [/MSIE (\S+);/],
            opera: [/Opera\/.*?Version\/(\S+)/, /Opera\/(\S+)/],
            safari: [/Version\/(\S+).*?Safari\//]
        },
        i, s, o, u;
    if (e === undefined || e === null) e = navigator.userAgent;
    if (t === undefined) t = 2;
    else if (t === 0) t = 1337;
    for (o in r)
        while (i = r[o].shift())
            if (s = e.match(i)) {
                u = s[1].match(new RegExp("[^.]+(?:.[^.]+){0," + --t + "}"))[0];
                if (n) {
                    return o + " " + u
                } else {
                    return o
                }
            }
    return null
}

$(window).on("beforeunload", function () {
    $(window).scrollTop(0)
});
$(document).ready(function () {
    if (window.location.hash) {
        window.location = ""
    }
    $("body").scrollspy({
        target: "#sidebar.spy-active",
        offset: 280
    });
    var e = "body";
    if (identifyBrowser(null) === "firefox" || identifyBrowser(null) === "msie") {
        e = "html"
    }
    $(".back-to-top a,a[href*=#]:not([href=#])").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var e = this;
            var t = $(this.hash);
            t = t.length ? t : $("[name=" + this.hash.slice(1) + "]");
            if (t.length) {
                var n = -50;
                if (this.hash !== "#hello") {
                    n = t.offset().top - 200;
                }
                var r = Math.abs($(document).scrollTop() - n),
                    i = 500;
                if (r > 2e3) {
                    i = 1e3
                } else if (r > 1e3) {
                    i = 750
                }
                $("html,body").animate({
                    scrollTop: n
                }, i, function () {
                    $(e).closest("li").addClass("active");
                    $("body").scrollspy("refresh")
                });
                return false
            }
        }
    });
    $(".flag-picker .flag-wrapper").bind("click", function() {
        var country = $(this).attr("country");
        if (!$(this).find(".flag").hasClass("grayscale") && $(".flag-picker").hasClass("filtered")) {
            $(".flag-picker .flag").each(function() {
                $(this).removeClass("grayscale");
            });
            $(".staff .pin").each(function(){
                if (!$(this).is(":visible")) {
                    $(this).slideDown(250, function() {
                        // $(this).show();
                    });
                }
            });
        } else {
            $(".flag-picker .flag").each(function() {
                if (!$(this).hasClass("flag-icon-" + country)) {
                    $(this).addClass("grayscale");
                } else {
                    $(this).removeClass("grayscale");
                }
            });
            $(".staff .pin").each(function(){
                if (!$(this).hasClass(country)) {
                    $(this).slideUp(250, function() {
                        // $(this).hide();
                    });
                } else {
                    $(this).slideDown(250, function() {
                        // $(this).show();
                    });
                }
            });
        }
        $(".flag-picker").toggleClass("filtered");
    });
});