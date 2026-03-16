jQuery(document).ready(function ($) {

    /* =====================
       AOS (Safe Init)
    ===================== */
    if (typeof AOS !== "undefined") {
        AOS.init();
    }


    /* =====================
       TABS
    ===================== */
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();

    $('#tabs-nav li').on('click', function (e) {
        e.preventDefault();

        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');

        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        if ($(activeTab).length) {
            $(activeTab).fadeIn();
        }
    });


    /* =====================
       CASE SLIDER (SLICK)
    ===================== */
    if ($.fn.slick && $('.case-main-slider').length) {
        $('.case-main-slider').slick({
            dots: true,
            infinite: true,
            arrows: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: '<span class="next-case-arrow">→</span>',
            prevArrow: '<span class="prev-case-arrow">←</span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }


    /* =====================
       ACCORDION (FIXED)
    ===================== */
    $(".at-tab").hide();
    $(".at-title:first").addClass("active").next(".at-tab").show();

    $(".at-title").on("click", function () {
        var $tab = $(this).next(".at-tab");

        $(".at-title").not(this).removeClass("active");
        $(".at-tab").not($tab).slideUp();

        $(this).toggleClass("active");
        $tab.slideToggle();
    });


    /* =====================
       TESTIMONIAL SLIDER
    ===================== */
    if ($.fn.slick && $('.client-testimonial-main').length) {
        $('.client-testimonial-main').slick({
            dots: true,
            arrows: false,
            slidesToShow: 2,
            draggable: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }


    /* =====================
       MOBILE MENU
    ===================== */
    $(".show-toggle").on("click", function () {
        $(".main-menu").addClass("active");
        $(this).hide();
        $(".close-toggle").show();
    });

    $(".close-toggle").on("click", function () {
        $(".main-menu").removeClass("active");
        $(this).hide();
        $(".show-toggle").show();
    });


    /* =====================
       LOCATION DROPDOWN
    ===================== */
    $(".info").hide();
    $("#london").show();

    $(".location-select .current").on("click", function (e) {
        e.stopPropagation();
        $(".location-select .options").toggle();
    });

    $(".location-select .options li").on("click", function () {
        var selected = $(this).text();
        var id = $(this).data("id");

        $(".location-select .current .label").text(selected);
        $(".location-select .options").hide();

        $(".info").hide();
        $("#" + id).show();
    });

    $(document).on("click", function () {
        $(".location-select .options").hide();
    });


    /* =====================
       SEARCH / CART POPUP
    ===================== */
    $(".header-menu-search").on("click", function (e) {
        e.preventDefault();
        $(".header-popup").fadeIn();
        $(".search-popup").show();
        $(".cart-popup").hide();
    });

    $(".header-menu-cart").on("click", function (e) {
        e.preventDefault();
        $(".header-popup").fadeIn();
        $(".cart-popup").show();
        $(".search-popup").hide();
    });

    $(".header-popup-close").on("click", function () {
        $(".header-popup").fadeOut();
    });


    /* =====================
       WHY CHOOSE TABS
    ===================== */
    $(".why-choose-tab-bg, .why-choose-details").hide();
    $(".why-choose-tab-bg:first, .why-choose-details:first").show();
    $(".why-choose-tab-title:first").addClass("active");

    $(".why-choose-tab-title").on("click", function (e) {
        e.preventDefault();

        var index = $(this).index();

        $(".why-choose-tab-title").removeClass("active");
        $(this).addClass("active");

        $(".why-choose-tab-bg").hide().eq(index).fadeIn(300);
        $(".why-choose-details").hide().eq(index).fadeIn(300);
    });


    /* =====================
       STICKY HEADER (FIXED)
    ===================== */
    var header = $('.header-flex');

    $(window).on('scroll resize', function () {
        var headerHeight = header.outerHeight();

        if ($(this).scrollTop() > headerHeight) {
            $('body').addClass('header-scrolled');
        } else {
            $('body').removeClass('header-scrolled');
        }
    });

});
