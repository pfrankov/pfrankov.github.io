!function(a){a&&(a.fn.findNear=function(b){var c=a();return this.each(function(){for(var d=a(this),e=0;10>e;e++){var f=d.find(b);if(f.length){c=c.add(f);break}var g=d.siblings(b);if(g.length){c=c.add(g);break}var h=d.siblings().find(b);if(h){c=c.add(h.first());break}d=d.parent()}}),c},a(function(){var b=a(window);a(".Actions.ShowMore").click(function(){var b=a(this);b.toggleClass("Open");var c=b.attr("rel");return c&&c.length?(a(c).find(".More").toggle(),!1):(b.findNear(".More").toggle(),!1)}),b.scroll(function(){var c=b.scrollTop();a(".Sticky:not(.Clone)").each(function(){var b=a(this);if(b.hasClass("Stick")||b.data("sticky-top",b.offset().top),c>b.data("sticky-top")){if(!b.hasClass("Stick")){var d=b.clone().insertBefore(b);d.addClass("Clone"),b.data("sticky-clone",d),b.addClass("Stick")}}else b.hasClass("Stick")&&(b.removeClass("Stick"),b.data("sticky-clone").remove())})}),function(){function b(a){return a.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")}function c(){for(var b=0,c=arguments.length;c>b;b++){var d=arguments[b],e=a(d);if(e.scrollTop()>0)return d;e.scrollTop(1);var f=e.scrollTop()>0;if(e.scrollTop(0),f)return d}return[]}var d=b(location.pathname),e=c("html","body");a("a[href*=#]").each(function(){var c=b(this.pathname)||d;if(d==c&&(location.hostname==this.hostname||!this.hostname)&&this.hash.replace(/#/,"")){var f=a(this.hash),g=this.hash;g&&a(this).click(function(b){var c=f.offset().top;a(".Sticky.Stick").length&&(c-=1.2*a(".Sticky.Stick").outerHeight(!0)),b.preventDefault(),a(e).animate({scrollTop:c},400,function(){location.hash=g,a(e).scrollTop(c)})})}})}()}))}(jQuery);