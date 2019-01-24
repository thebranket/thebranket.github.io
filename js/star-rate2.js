function onload(event) {
   
	 var myDataService =  {
		 rate:function(rating) {
				return {then:function (callback) {
					setTimeout(function () {
						callback((Math.random() * 5)); 
					}, 1000); 
				}
			}
		}
	}

	var starRating1 = raterJs( {
		starSize:20, 
		element:document.querySelector("#rater"), 
		rateCallback:function rateCallback(rating, done) {
			this.setRating(rating); 
			done(); 
		}
	}); 
	var starRating2 = raterJs( {
		starSize:20, 
		element:document.querySelector("#rater2"), 
		rateCallback:function rateCallback(rating, done) {
			this.setRating(rating); 
			done(); 
		}
	}); 
	var starRating2 = raterJs( {
		starSize:20, 
		element:document.querySelector("#rater3"), 
		rateCallback:function rateCallback(rating, done) {
			this.setRating(rating); 
			done(); 
		}
	}); 
	var starRating2 = raterJs( {
		starSize:20, 
		element:document.querySelector("#rater4"), 
		rateCallback:function rateCallback(rating, done) {
			this.setRating(rating); 
			done(); 
		}
	});
	var starRating2 = raterJs( {
		starSize:20, 
		element:document.querySelector("#rater5"), 
		rateCallback:function rateCallback(rating, done) {
			this.setRating(rating); 
			done(); 
		}
	});
		var starRating2 = raterJs( {
		starSize:20, 
		element:document.querySelector("#rater6"), 
		rateCallback:function rateCallback(rating, done) {
			this.setRating(rating); 
			done(); 
		}
	});
		var starRating2 = raterJs( {
		starSize:20, 
		element:document.querySelector("#rater7"), 
		rateCallback:function rateCallback(rating, done) {
			this.setRating(rating); 
			done(); 
		}
	});
		var starRating2 = raterJs( {
		starSize:20, 
		element:document.querySelector("#rater8"), 
		rateCallback:function rateCallback(rating, done) {
			this.setRating(rating); 
			done(); 
		}
	});
	var starRating2 = raterJs( {
		starSize:20, 
		element:document.querySelector("#rater9"), 
		rateCallback:function rateCallback(rating, done) {
			this.setRating(rating); 
			done(); 
		}
	});
	var starRating2 = raterJs( {
		starSize:20, 
		element:document.querySelector("#rater10"), 
		rateCallback:function rateCallback(rating, done) {
			this.setRating(rating); 
			done(); 
		}
	});
	var starRating2 = raterJs( {
		starSize:20, 
		element:document.querySelector("#rater11"), 
		rateCallback:function rateCallback(rating, done) {
			this.setRating(rating); 
			done(); 
		}
	});
	var starRating2 = raterJs( {
		starSize:20, 
		element:document.querySelector("#rater12"), 
		rateCallback:function rateCallback(rating, done) {
			this.setRating(rating); 
			done(); 
		}
	});

	


}

window.addEventListener("load", onload, false); 