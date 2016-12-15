(function(){
	var app = angular.module("portfolio",[]);

	app.controller("portfolioController", function(){
		this.projects = listOfProjects;
	});

	app.directive("portfolio", function(){
		return{
			restrict: 'E', 
			templateUrl: "/static/portfolio.html"
		};
	});

	app.directive("introduction", function(){
		return{
			restrict: 'E',
			templateUrl: "/static/introduction.html"
		};
	});

	app.directive("projects", function(){
		return{
			restrict: 'E',
			templateUrl: "/static/projects.html"
		};
	});

	var listOfProjects = [
		{
			name:"Friends and Food",
			link: "http://friendsnfood.herokuapp.com/",
			skills:["HTML5/CSS", "JavaScript","Node JS", "MonogDB/Mongoose", "ExpressJS"],
			description: "Mobile first web application that pairs you with friends in your network to get food with based on your personalised schedule."
		},
		{
			name:"Taskr",
			link:"https://github.com/ucsdCSE110wi16/CSE110M260T16",
			skills:["Android SDK", "Java", "Parse"],
			description: "Android Application for task allocation and management amongst friends living in shared households."
		},
		{
			name:"Phetch",
			skills:["Swift", "iOS SDK", "Parse"],
			link: "https://thatssophetch.github.io/",	
			description: "iOS Application that helps tracking commodities, tasks and expenses in shared households."
		},
		{
			name:"Analyzing Yelp Reviews",
			link: "/Files/yelpRating.pdf",
			skills:["Python", "Numpy"],
			description: "Predicting Yelp Ratings using textual analysis of reviews using Linear Regression."
		},
		{
			name:"Team based matchup analysis for DotA 2",
			link: "/Files/dota2paper.pdf",
			skills:["Python", "Numpy"],
			description: "Predicting team performances and effective character combinations in DotA 2 matches using stepwise regression."
		},
		{
			name:"Data Science",
			skills:["Python", "Numpy"],
			description: "Maximum Likelihood Estimation on Unigram and Bigram Models of Data on English Text Dataset"
		}	
	];

})();