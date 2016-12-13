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
			skills:["Node JS", "Mongoose", "Express JS", "Sketch", "Invision"],
			description: "Web application that pairs you with friends in your network to get food with based on your personalised schedule."
		},
		{
			name:"Taskr",
			skills:["Node JS", "Mongoose", "Express JS", "Sketch", "Invision"],
			description: "Android Application for task allocation and management amongst friends living in shared households."
		},
		{
			name:"Phetch",
			skills:["Node JS", "Mongoose", "Express JS", "Sketch", "Invision"],
			description: "iOS Application that helps tracking commodities, tasks and expenses in shared households."
		},
		{
			name:"Data Science",
			skills:["Python", "Numpy"],
			description: "Maximum Likelihood Estimation on Unigram and Bigram Models of Data on English Text Dataset"
		},
		{
			name:"Analyzing Yelp Reviews",
			skills:["Python", "Numpy"],
			description: "Maximum Likelihood Estimation on Unigram and Bigram Models of Data on English Text Dataset"
		},
		{
			name:"Team based matchup analysis for DotA 2",
			skills:["Python", "Numpy"],
			description: "Maximum Likelihood Estimation on Unigram and Bigram Models of Data on English Text Dataset"
		}	
	];

})();