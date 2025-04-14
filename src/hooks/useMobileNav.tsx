import { useEffect } from "react";
import $ from "jquery";

export default function useMobileNav() {
    useEffect(() => {
        const mobileNav = function () {
            const mobile = window.matchMedia("(max-width: 991px)");
            const wrapMenu = $("#site-header-inner");
            const navExtw = $(".nav-extend.active");
            const navExt = $(".nav-extend.active").children();

            function responsivemenu(e: any) {
                if (e.matches) {
                    $("#main-nav")
                        .attr("id", "main-nav-mobi")
                        .appendTo("#header_main")
                        .hide()
                        .children(".menu")
                        .append(navExt)
                        .find("li:has(ul)")
                        .children("ul")
                        .removeAttr("style")
                        .hide()
                        .before('<span class="arrow"></span>');
                } else {
                    $("#main-nav-mobi")
                        .attr("id", "main-nav")
                        .removeAttr("style")
                        .prependTo(wrapMenu)
                        .find(".ext")
                        .appendTo(navExtw)
                        .parent()
                        .siblings("#main-nav")
                        .find(".sub-menu")
                        .removeAttr("style")
                        .prev()
                        .remove();

                    $(".mobile-button").removeClass("active");
                    $(".sub-menu").css({ display: "block" });
                }
            }

            // Run once
            responsivemenu(mobile);

            // Add listener for resizing
            mobile.addListener(responsivemenu);

            // Mobile menu button toggle
            $(document).on("click", ".mobile-button", function () {
                $(this).toggleClass("active");
                $("#main-nav-mobi").slideToggle();
            });

            // Sub-menu arrow toggle
            $(document).on("click", "#main-nav-mobi .arrow", function () {
                $(this).toggleClass("active").next().slideToggle();
            });
        };

        mobileNav();
    }, []);
}
