$(document).bind("variant_changed",function(b,c,a){enquire.register(media.medium_up,{match:function(){if($(".thumbnails li").length>4){if($(".thumbnails")[0].slick){$(".thumbnails").unslick()}$(".thumbnails").slick({slide:"li",slidesToShow:4,slidesToScroll:1,infinite:false})}},unmatch:function(){}})});(function(a){a(function(){var h={hd:a("#hd"),height:a("#hd").height(),sticky:false,set:function(){if(!this.sticky){this.hd.addClass("sticky-header");a("body").css("paddingTop",this.height+"px");this.sticky=true}},remove:function(){if(this.sticky){this.hd.removeClass("sticky-header");a("body").css("paddingTop","0px");this.sticky=false}}};enquire.register(media.large,{match:function(){if(a.cookies.get("_dk_v")!=1&&!a("#admin-frame").data("admin-mode")){a(window).on("scroll.sh",function(){if(a(window).scrollTop()>=h.height){h.set()}else{h.remove()}})}a("#hd .navbar-nav li.dropdown").hoverIntent({over:function(){a(this).addClass("open")},out:function(){a(this).removeClass("open")},timeout:300}).find("a").unbind("click.bs").on("click.ct",function(j){var i=a(this);if(i.attr("href")!="#"){j.stopPropagation();return true}return false})},unmatch:function(){a(window).unbind("scroll.sh");h.remove();a("#hd .navbar-nav li.dropdown").unbind("mouseover").unbind("mouseleave").unbind("click.ct")}});var e=a(".navbar-header");a("<a/>",{"class":"navbar-toggle shopping-cart",href:"/my_save_list/shopping_cart",html:'<span class="glyphicon glyphicon-shopping-cart"></span>'}).appendTo(e);var c=a("<button/>",{type:"button","class":"navbar-toggle navbar-toplinks-toggle","data-toggle":"collapse","data-target":".navbar-toplinks-collapse",html:'<span class="glyphicon glyphicon-user"></span>'});c.appendTo(e);var g=a('<ul class="nav navbar-nav" style="display: none;"></ul>');a(".logo-top-links .top-links a").each(function(l,m){var j=a(m);var k=a("<li>").html(j.clone()).appendTo(g);if(j.hasClass("login")){k.addClass("login-tl")}});var f=a('<div class="collapse navbar-collapse navbar-toplinks-collapse"></div>').append(g).appendTo(a(".header-menu > .navbar"));a("<button/>",{type:"button","class":"navbar-toggle navbar-search-toggle","data-toggle":"collapse","data-target":".navbar-search-collapse",html:'<span class="glyphicon glyphicon-search"></span>'}).appendTo(e);var b="/";if(a("html").attr("lang")=="ar"){b="/ar"}a("<a/>",{"class":"navbar-toggle home",href:b}).appendTo(e);var d=a('<div class="collapse navbar-collapse navbar-search-collapse"></div>').appendTo(a(".header-menu > .navbar"));a(".navbar-toggle").click(function(){a(".navbar-collapse.in").not(a(this).data("target")).removeClass("in").addClass("collapse")});a(document).bind("logged-in",function(i){c.addClass("user-logged-in")});enquire.register(media.small,{match:function(){d.append(a(".search-bar"));f.find("ul").show()},unmatch:function(){a(".search-bar").appendTo(a(".search-bar-container"));f.find("ul").hide()}});a("#hd li a[href$='shopping-cart']").addClass("shopping-cart");a("#set_country").change(function(){window.location=a(this).val()})})})(bjQuery);(function(a){a(document).bind("checkout-payment",function(){a("#toggle-cart").prepend('<span class="glyphicon glyphicon-chevron-right"></span>');a("#toggle-cart").click(function(){var b=a("#order-items");if(b.is(":visible")){b.slideUp("slow",function(){a("#toggle-cart span.glyphicon").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right")})}else{b.slideDown("slow",function(){a("#toggle-cart span.glyphicon").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down")})}});enquire.register(media.small,{match:function(){a("#pms-desc").appendTo("#payment-page").append(a("#tc-wrapper"));var b;a("#select-payment-method ul li.payment-method").on("click.xs",function(c){if(c.originalEvent!==undefined){b=document.body.scrollTop;a(".pm-form, #address-details-page").hide();a("#tabs-"+a(this).data("pm")).show();a("#pms-desc").show();document.body.scrollTop=0}c.stopImmediatePropagation()});a(".pm-choose-other").click(function(c){a("#pms-desc").hide();a(".pm-form, #address-details-page").show();document.body.scrollTop=b;c.preventDefault()})},unmatch:function(){a("#pms-desc").appendTo(".pm-details").show();a(".payment").after(a("#tc-wrapper"));a("#select-payment-method ul li.payment-method").unbind("click.xs");a("#address-details-page").show()}})});a(document).bind("checkout-address",function(b){a("select.country_select").change(function(){var c=a(this).val();if(c=="United Arab Emirates"){a("#simple_purchase_shipping_address_attributes_mobile").val("+971")}else{if(c=="Saudi Arabia"){a("#simple_purchase_shipping_address_attributes_mobile").val("+966")}else{a("#simple_purchase_shipping_address_attributes_mobile").val("")}}});enquire.register(media.small,{match:function(){var c=">ol>li>fieldset>ol>li";a(".address-list input[type=radio]").change(function(j){var h=a(this),g=h.closest("li");var f=h.closest(".address-list");var k=g.offset().top-a(window).scrollTop();f.find(c).not(g).hide();f.find(".change-address").show();var i=a("body").height()-a(window).height(),d=g.offset().top-k;if(d<=0){d=0}document.body.scrollTop=d<=i?d:i}).filter(":checked").trigger("change");a(".address-list .change-address").click(function(f){var d=a(this).hide().closest(".address-list").find(c);if(d.filter(".checked").find("input").val()!="on"){d.parent("ol").prepend(d.filter(".checked"))}d.slideDown();f.preventDefault()})}})});a(function(){enquire.register(media.small,{match:function(){a("table#order-items").addHeadersToRows();a("#my-orders-page table th.items span.quantity").remove();a("#my-orders-page table").responsiveTable();a(".shipments-table .title .text-center").remove();a(".shipments-table").responsiveDivtoTable()}})})})(bjQuery);