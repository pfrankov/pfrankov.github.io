window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       ||
	        window.webkitRequestAnimationFrame ||
	        window.mozRequestAnimationFrame    ||
	        function( callback ){
		        window.setTimeout(callback, 1000 / 60);
	        };
})();

(function($){
	if ( !$ ) {
		return;
	}

	i100500n = {
		lang: {}
	};

	var defaultLang = $("html").attr("lang"),
		currentLang = defaultLang;

	if ( window.location.search ) {
		var lang = /lang=([a-z]*)/i.exec(window.location.search);

		if ( lang && lang[1] ) {
			currentLang = lang[1];
		}
	}

	function keyFinder(keyPath, object) {
		var paths = keyPath.split(".");
		if ( paths.length > 1 ) {
			if ( object && object[paths[0]] ) {
				return keyFinder(paths.slice(1, paths.length).join("."), object[paths[0]]);
			}
		}
		if ( object && object[keyPath] ) {
			var key = object[keyPath];

			if ( typeof key == "object" ) {
				key = object[keyPath]["_"] || "";
			}

			return key;
		}

	}

	function replaceLang(lang){
		if ( lang == defaultLang || !i100500n.lang[lang] ) {
			return;
		}

		var translated = 0,
			totalWords = 0;

		var $keys = $("[data-lang-key]").each(function(){
			var $this = $(this);

			var keyPath = $this.data("lang-key");
			var keyValue = keyFinder(keyPath, i100500n.lang[lang]);

			var words = $this.text().split(" ").length;
			totalWords += words;

			if ( keyValue ) {
				translated += words;

				$this.html(keyValue);
			}
		});
		var $titleKeys = $("[data-lang-title-key]").each(function(){
			var $this = $(this);

			var keyPath = $this.data("lang-title-key");
			var keyValue = keyFinder(keyPath, i100500n.lang[lang]);

			var words = $this.attr("title").split(" ").length;
			totalWords += words;

			if ( keyValue ) {
				translated += words;

				$this.attr("title", keyValue);
			}
		});

		var translatedPercents = translated / totalWords * 100;



		var $i100500n = $(".i100500n");
		if ( translatedPercents < 100 && $i100500n.length ) {
			var $percents = $i100500n.find("span");

			if ( !$percents.length ) {
				return;
			}

			setTimeout(function (){
				$i100500n.addClass("Active");
				var showingPercents = 0;

				(function animate(){
					var shouldAnimate = false;

					if ( showingPercents <= translatedPercents ) {
						showingPercents++;
						shouldAnimate = true;
					}else {
						showingPercents = translatedPercents;
					}
					$percents.html(Math.floor(showingPercents));


					if ( shouldAnimate ) {
						requestAnimFrame(animate);
					}
				})();
			}, 1000);


		}
	}




	$(function(){
		replaceLang(currentLang);
	});


})(jQuery);