
/**
 * @author Zack Roppel
 * 
 * this page loads after user has logged in
 */


Ti.UI.backgroundImage = '/images/background/bg.jpg';
//create a tab group cause we want the title bar up top
tabGroup = Ti.UI.createTabGroup();

//the window will be the only thing in our tab group

function navBar(_title){
	var nav = Ti.UI.createView({
		top : 0,
		width : Ti.UI.FILL,
		height : 50,
		backgroundImage : '/images/background/top_bar.jpg',
	});
	
	var navTitle = Ti.UI.createLabel({
		text : _title,
		color : 'white',
		font:{
        	fontSize: 15,
			fontFamily: 'Helvetica Neue',
			fontWeight:'bold'
		},
	});
	
	nav.add(navTitle);
	
	return nav;
}

var books = Ti.UI.createWindow({
	navBarHidden: true,
});

books.add(navBar('Movies'));

var movies = Ti.UI.createWindow({
	navBarHidden: true,
});

movies.add(navBar('Movies'));

var articles = Ti.UI.createWindow({
	navBarHidden: true,
});

articles.add(navBar('Articles'));

var isJibe = false;
var isHot = false;

var moviesData = [];
var moviesDataHot = [];
var moviesDataJibe = [];
var moviesDataJibeHot = [];
var articlesData = [];
var articlesDataHot = [];
var articlesDataJibe = [];
var articlesDataJibeHot = [];
var booksData = [];
var booksDataHot = [];
var booksDataJibe = [];
var booksDataJibeHot = [];

function loadData()
{
moviesData = [];
moviesDataHot = [];
moviesDataJibe = [];
moviesDataJibeHot = [];
articlesData = [];
articlesDataHot = [];
articlesDataJibe = [];
articlesDataJibeHot = [];
booksData = [];
booksDataHot = [];
booksDataJibe = [];
booksDataJibeHot = [];

//not hot or jibe movies

var lastColor = 'ffffff';

var json, movie, row, nameLabel;
 var url = "http://108.166.89.121/Recommender.php?functionCall=GetRequest&uid=" + userID.value + "&hotornot=1&type=movies";
 var movieClient = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
        // Ti.API.info("Received text: " + this.responseText);
         //alert('success');
         json = JSON.parse(this.responseText);
         for (var i = 0; i < json.data.length; i++) {

         	movie = json.data[i];
         	
         	if(movie.movieTitle != null){
         		
         	if(lastColor == '#ffffff'){
				lastColor = '#ECECEC';
			}else{
				lastColor = '#ffffff';
			}

         	row = Ti.UI.createTableViewRow({
         		backgroundColor : lastColor,
				height : 50,
         		userID:userID.value,
    			itemID:movie.movieID,
    			oneStarRatings:movie.One,
    			twoStarRatings:movie.Two,
    			threeStarRatings:movie.Three,
    			fourStarRatings:movie.Four,
    			fiveStarRatings:movie.Five,
    			itemReviews:movie.ratings,
    			genre:movie.genre,
    		});
    		nameLabel = Ti.UI.createLabel({
    			left : 5,
            	text: movie.movieTitle,
           		font:{
	            	fontSize: 15,
					fontFamily: 'Helvetica Neue',
					fontWeight:'bold'
        		},

       		 });
       
        row.add(nameLabel);
        
  		moviesData.push(row);
	     }
	     if (isJibe == false && isHot == false) {
	     moviesTable.setData(moviesData);
	     }
	     }
     },
     
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     // timeout : 5000  // in milliseconds
     
 });
 // Prepare the connection.
 movieClient.open("GET", url);
 // Send the request.
 movieClient.send();
  
 //hot movies

var json, movie, row, nameLabel;
 var url = "http://108.166.89.121/Recommender.php?functionCall=GetRequest&uid=" + userID.value + "&hotornot=2&type=movies";
 var movieClient = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
        // Ti.API.info("Received text: " + this.responseText);
         //alert('success');
         json = JSON.parse(this.responseText);
         for (var i = 0; i < json.data.length; i++) {

         	movie = json.data[i];
         	
         	if(movie.movieTitle != null){
         		
     		if(lastColor == '#ffffff'){
				lastColor = '#ECECEC';
			}else{
				lastColor = '#ffffff';
			}

         	row = Ti.UI.createTableViewRow({
         		backgroundColor : lastColor,
				height : 50,
    			userID:userID.value,
    			itemID:movie.movieID,
    			oneStarRatings:movie.One,
    			twoStarRatings:movie.Two,
    			threeStarRatings:movie.Three,
    			fourStarRatings:movie.Four,
    			fiveStarRatings:movie.Five,
    			itemReviews:movie.ratings,
    			genre:movie.genre,
    		});
    		nameLabel = Ti.UI.createLabel({
    			left : 5,
            	text: movie.movieTitle,
           		font:{
	            	fontSize: 15,
					fontFamily: 'Helvetica Neue',
					fontWeight:'bold'
        		},

       		 });
       
        row.add(nameLabel);
        
  		moviesDataHot.push(row);
	     }
	    if (isJibe == false && isHot == true) {
	     moviesTable.setData(moviesDataHot);
	     }
	     }
     },
     
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     // timeout : 5000  // in milliseconds
     
 });
 // Prepare the connection.
 movieClient.open("GET", url);
 // Send the request.
 movieClient.send();
 
 

 //not hot articles
var json, row, nameLabel, article;

 var url = "http://108.166.89.121/Recommender.php?functionCall=GetRequest&uid=" + userID.value + "&hotornot=1&type=news";
 var newsClient = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
         // Ti.API.info("Received text: " + this.responseText);
         //alert('success');
         json = JSON.parse(this.responseText);
         for (var i = 0; i < json.data.length; i++) {

         	article = json.data[i];
         	
         	if(article.newsTitle != null){
         		
     		if(lastColor == '#ffffff'){
				lastColor = '#ECECEC';
			}else{
				lastColor = '#ffffff';
			}

         	row = Ti.UI.createTableViewRow({
         		backgroundColor : lastColor,
				height : 50,
				userID:userID.value,
    			itemID:article.newsID,
    			newsAuthor:article.newsAuthor,
    			oneStarRatings:article.One,
    			twoStarRatings:article.Two,
    			threeStarRatings:article.Three,
    			fourStarRatings:article.Four,
    			fiveStarRatings:article.Five,
    			itemReviews:article.ratings,
    		});
    		nameLabel = Ti.UI.createLabel({
    			left : 5,
            	text: article.newsTitle,
           		font:{
	            	fontSize: 15,
					fontFamily: 'Helvetica Neue',
					fontWeight:'bold'
        		},

       		 });
       
        row.add(nameLabel);
        
  		articlesData.push(row);
	     }
	     if (isJibe == false && isHot == false) {
	     articlesTable.setData(articlesData);
	     }
	     }
     },
     
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     // timeout : 5000  // in milliseconds
     
 });
 // Prepare the connection.
 newsClient.open("GET", url);
 // Send the request.
 newsClient.send();
 
 
 
	//hot articles
var json, row, nameLabel, article;

 var url = "http://108.166.89.121/Recommender.php?functionCall=GetRequest&uid=" + userID.value + "&hotornot=2&type=news";
 var newsClient = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
        // Ti.API.info("Received text: " + this.responseText);
         //alert('success');
         json = JSON.parse(this.responseText);
         for (var i = 0; i < json.data.length; i++) {

         	article = json.data[i];
         	
         	if(article.newsTitle != null){
         		
     		if(lastColor == '#ffffff'){
				lastColor = '#ECECEC';
			}else{
				lastColor = '#ffffff';
			}

         	row = Ti.UI.createTableViewRow({
         		backgroundColor : lastColor,
				height : 50,
				newsAuthor:article.newsAuthor,
         		userID:userID.value,
    			itemID:article.newsID,
    			oneStarRatings:article.One,
    			twoStarRatings:article.Two,
    			threeStarRatings:article.Three,
    			fourStarRatings:article.Four,
    			fiveStarRatings:article.Five,
    			itemReviews:article.ratings,
    		});
    		
    		nameLabel = Ti.UI.createLabel({
    			left : 5,
            	text:article.newsTitle,
           		font:{
	            	fontSize: 15,
					fontFamily: 'Helvetica Neue',
					fontWeight:'bold'
        		},
       		 });
       
        row.add(nameLabel);
        
  		articlesDataHot.push(row);
	     }
	     if (isJibe == false && isHot == true) {
	     articlesTable.setData(articlesDataHot);
	     }
	     }
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     //timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 newsClient.open("GET", url);
 // Send the request.
 newsClient.send();


//set books data
var json, row, nameLabel, book;

 var url = "http://108.166.89.121/Recommender.php?functionCall=GetRequest&uid=" + userID.value + "&hotornot=1&type=books";
 var booksClient = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
        // Ti.API.info("Received text: " + this.responseText);
         //alert('success');
         json = JSON.parse(this.responseText);
         for (var i = 0; i < json.data.length; i++) {

         	book = json.data[i];
         	
         	if(book.BookTitle != null){
         		
     		if(lastColor == '#ffffff'){
				lastColor = '#ECECEC';
			}else{
				lastColor = '#ffffff';
			}

         	row = Ti.UI.createTableViewRow({
         		backgroundColor : lastColor,
				height : 50,
    			bookAuthor:book.BookAuthor,
    			bookImage:book.ImageUPLL,
    			itemReviews:book.ratings,
    			userID:userID.value,
    			itemID:book.bookID,
    			oneStarRatings:book.One,
    			twoStarRatings:book.Two,
    			threeStarRatings:book.Three,
    			fourStarRatings:book.Four,
    			fiveStarRatings:book.Five,
    		});
    		
    		nameLabel = Ti.UI.createLabel({
    			left : 5,
            	text:book.BookTitle,
           		font:{
	            	fontSize: 15,
					fontFamily: 'Helvetica Neue',
					fontWeight:'bold'
        		},

       		 });
       		 
        row.add(nameLabel);
        
  		booksData.push(row);
	     }
	     if (isJibe == false && isHot == false) {
	     booksTable.setData(booksData);
	     }
	     }
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     //timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 booksClient.open("GET", url);
 // Send the request.
 booksClient.send();
 

//this is the hot books
var json, row, nameLabel, book;

 var url = "http://108.166.89.121/Recommender.php?functionCall=GetRequest&uid=" + userID.value + "&hotornot=2&type=books";
 var booksClient = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
        // Ti.API.info("Received text: " + this.responseText);
         //alert('success');
         json = JSON.parse(this.responseText);
         for (var i = 0; i < json.data.length; i++) {

         	book = json.data[i];
         	
         	if(book.BookTitle != null){
         		
         	if(lastColor == '#ffffff'){
				lastColor = '#ECECEC';
			}else{
				lastColor = '#ffffff';
			}

         	row = Ti.UI.createTableViewRow({
         		backgroundColor : lastColor,
				height : 50,
    			bookAuthor:book.BookAuthor,
    			bookImage:book.ImageUPLL,
    			itemReviews:book.ratings,
    			userID:userID.value,
    			itemID:book.bookID,
    			oneStarRatings:book.One,
    			twoStarRatings:book.Two,
    			threeStarRatings:book.Three,
    			fourStarRatings:book.Four,
    			fiveStarRatings:book.Five,
    		});
    		
    		nameLabel = Ti.UI.createLabel({
    			left : 5,
            	text:book.BookTitle,
           		font:{
	            	fontSize: 15,
					fontFamily: 'Helvetica Neue',
					fontWeight:'bold'
        		},

       		 });
    		
        row.add(nameLabel);
        
  		booksDataHot.push(row);
	     }
	      if (isJibe == false && isHot == true) {
	     booksTableHot.setData(booksDataHot);
	     }
	     }
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     //timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 booksClient.open("GET", url);
 // Send the request.
 booksClient.send();

//jibe movies

var json, movie, row, nameLabel;
 var url = "http://108.166.89.121/Recommender.php?functionCall=GetRequestJive&&uid=" + userID.value + "&hotornot=1&type=movies&fid=" + jibeValue.value;
 var movieClient = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
         //Ti.API.info("Received text: " + this.responseText);
         //alert('success');
         json = JSON.parse(this.responseText);
         for (var i = 0; i < json.data.length; i++) {

         	movie = json.data[i];
         	
         	if(movie.movieTitle != null){
         		
         	if(lastColor == '#ffffff'){
				lastColor = '#ECECEC';
			}else{
				lastColor = '#ffffff';
			}

         	row = Ti.UI.createTableViewRow({
         		backgroundColor : lastColor,
				height : 50,
				userID:userID.value,
    			itemID:movie.movieID,
    			oneStarRatings:movie.One,
    			twoStarRatings:movie.Two,
    			threeStarRatings:movie.Three,
    			fourStarRatings:movie.Four,
    			fiveStarRatings:movie.Five,
    			itemReviews:movie.ratings,
    			genre:movie.genre,
    		});
    		
    		nameLabel = Ti.UI.createLabel({
    			left : 5,
            	text: movie.movieTitle,
           		font:{
	            	fontSize: 15,
					fontFamily: 'Helvetica Neue',
					fontWeight:'bold'
        		},

       		 });
    		
        row.add(nameLabel);
        
  		moviesDataJibe.push(row);
  		
	     }
	     if (isJibe == true && isHot == false) {
	      moviesTable.setData(moviesDataJibe);
	     }
	     }

     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
    // timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 movieClient.open("GET", url);
 // Send the request.
 

 movieClient.send();


 //hot and jibe movies

var json, movie, row, nameLabel;
 var url = "http://108.166.89.121/Recommender.php?functionCall=GetRequestJive&&uid=" + userID.value + "&hotornot=2&type=movies&fid=" + jibeValue.value;
 var movieClient = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
        // Ti.API.info("Received text: " + this.responseText);
         //alert('success');
         json = JSON.parse(this.responseText);
         for (var i = 0; i < json.data.length; i++) {

         	movie = json.data[i];
         	
         	if(movie.movieTitle != null){
         		
         	if(lastColor == '#ffffff'){
				lastColor = '#ECECEC';
			}else{
				lastColor = '#ffffff';
			}

         	row = Ti.UI.createTableViewRow({
         		backgroundColor : lastColor,
				height : 50,
				userID:userID.value,
    			itemID:movie.movieID,
    			oneStarRatings:movie.One,
    			twoStarRatings:movie.Two,
    			threeStarRatings:movie.Three,
    			fourStarRatings:movie.Four,
    			fiveStarRatings:movie.Five,
    			itemReviews:movie.ratings,
    			genre:movie.genre,
    		});
    		
    		nameLabel = Ti.UI.createLabel({
    			left : 5,
            	text:movie.movieTitle,
           		font:{
	            	fontSize: 15,
					fontFamily: 'Helvetica Neue',
					fontWeight:'bold'
        		},

       		 });
    		
        row.add(nameLabel);
        
  		moviesDataJibeHot.push(row);
	     }
	     if (isJibe == true && isHot == true) {
	      moviesTable.setData(moviesDataJibeHot);
	     }
	     }
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     //timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 movieClient.open("GET", url);
 // Send the request.
 movieClient.send();


 //jibe articles
var json, row, nameLabel, article;

 var url = "http://108.166.89.121/Recommender.php?functionCall=GetRequestJive&uid=" + userID.value + "&hotornot=1&type=news&fid=12";
 var newsClient = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
        // Ti.API.info("Received text: " + this.responseText);
         //alert('success');
         json = JSON.parse(this.responseText);
         for (var i = 0; i < json.data.length; i++) {

         	article = json.data[i];
         	
         	if(article.newsTitle != null){
         		
         	if(lastColor == '#ffffff'){
				lastColor = '#ECECEC';
			}else{
				lastColor = '#ffffff';
			}

         	row = Ti.UI.createTableViewRow({
         		backgroundColor : lastColor,
				height : 50,
				newsAuthor:article.newsAuthor,
         		userID:userID.value,
    			itemID:article.newsID,
    			oneStarRatings:article.One,
    			twoStarRatings:article.Two,
    			threeStarRatings:article.Three,
    			fourStarRatings:article.Four,
    			fiveStarRatings:article.Five,
    			itemReviews:article.ratings,
    		});
    		
    		nameLabel = Ti.UI.createLabel({
    			left : 5,
            	text:article.newsTitle,
           		font:{
	            	fontSize: 15,
					fontFamily: 'Helvetica Neue',
					fontWeight:'bold'
        		},

       		 });
    		
        row.add(nameLabel);
        
  		articlesDataJibe.push(row);
	     }
	     if (isJibe == true && isHot == false) {
	      articlesTable.setData(articlesDataJibe);
	     }
	     }
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     //timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 newsClient.open("GET", url);
 // Send the request.
 newsClient.send();
 
 
	//hot and jibe articles
var json, row, nameLabel, article;

 var url = "http://108.166.89.121/Recommender.php?functionCall=GetRequestJive&uid=" + userID.value + "&hotornot=2&type=news&fid=" + jibeValue.value;
 var newsClient = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
        // Ti.API.info("Received text: " + this.responseText);
         //alert('success');
         json = JSON.parse(this.responseText);
         for (var i = 0; i < json.data.length; i++) {

         	article = json.data[i];
         	
         	if(article.newsTitle != null){
         		
         	if(lastColor == '#ffffff'){
				lastColor = '#ECECEC';
			}else{
				lastColor = '#ffffff';
			}

         	row = Ti.UI.createTableViewRow({
         		backgroundColor : lastColor,
				height : 50,
				newsAuthor:article.newsAuthor,
    			userID:userID.value,
    			itemID:article.newsID,
    			oneStarRatings:article.One,
    			twoStarRatings:article.Two,
    			threeStarRatings:article.Three,
    			fourStarRatings:article.Four,
    			fiveStarRatings:article.Five,
    			itemReviews:article.ratings,
    		});
    		
    		nameLabel = Ti.UI.createLabel({
    			left : 5,
            	text:article.newsTitle,
           		font:{
	            	fontSize: 15,
					fontFamily: 'Helvetica Neue',
					fontWeight:'bold'
        		},

       		 });
    		
        row.add(nameLabel);
        
  		articlesDataJibeHot.push(row);
	     }
	     if (isJibe == true && isHot == true) {
	      articlesTable.setData(articlesDataJibeHot);
	     }
	     }
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     // timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 newsClient.open("GET", url);
 // Send the request.
 newsClient.send();


 //books jibe data
var json, row, nameLabel, book;

 var url = "http://108.166.89.121/Recommender.php?functionCall=GetRequestJive&uid=" + userID.value + "&hotornot=1&type=books&fid=" + jibeValue.value;
 var booksClient = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
        // Ti.API.info("Received text: " + this.responseText);
         //alert('success');
         json = JSON.parse(this.responseText);
         for (var i = 0; i < json.data.length; i++) {

         	book = json.data[i];
         	
         	if(book.BookTitle != null){
         	
         	if(lastColor == '#ffffff'){
				lastColor = '#ECECEC';
			}else{
				lastColor = '#ffffff';
			}

         	row = Ti.UI.createTableViewRow({
         		backgroundColor : lastColor,
				height : 50,
    			bookAuthor:book.BookAuthor,
    			bookImage:book.ImageUPLL,
    			itemReviews:book.ratings,
    			userID:userID.value,
    			itemID:book.bookID,
    			oneStarRatings:book.One,
    			twoStarRatings:book.Two,
    			threeStarRatings:book.Three,
    			fourStarRatings:book.Four,
    			fiveStarRatings:book.Five,
    		});
    		
    		nameLabel = Ti.UI.createLabel({
    			left : 5,
            	text:book.BookTitle,
           		font:{
	            	fontSize: 15,
					fontFamily: 'Helvetica Neue',
					fontWeight:'bold'
        		},

       		 });
    		
        row.add(nameLabel);
        
  		booksDataJibe.push(row);
	     }
	     if (isJibe == true && isHot == false) {
	      booksTable.setData(booksDataJibe);
	     }
	     }
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     // timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 booksClient.open("GET", url);
 // Send the request.
 booksClient.send();




	//this is the hot books
var json, row, nameLabel, book;

 var url = "http://108.166.89.121/Recommender.php?functionCall=GetRequestJive&uid=" + userID.value + "&hotornot=2&type=books&fid=" + jibeValue.value;
 var booksClient = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
        // Ti.API.info("Received text: " + this.responseText);
         //alert('success');
         json = JSON.parse(this.responseText);
         for (var i = 0; i < json.data.length; i++) {

         	book = json.data[i];
         	
     		if(book.BookTitle != null){
     			
     		if(lastColor == '#ffffff'){
				lastColor = '#ECECEC';
			}else{
				lastColor = '#ffffff';
			}

         	row = Ti.UI.createTableViewRow({
         		backgroundColor : lastColor,
				height : 50,
    			bookAuthor:book.BookAuthor,
    			bookImage:book.ImageUPLL,
    			itemReviews:book.ratings,
    			userID:userID.value,
    			itemID:book.bookID,
    			oneStarRatings:book.One,
    			twoStarRatings:book.Two,
    			threeStarRatings:book.Three,
    			fourStarRatings:book.Four,
    			fiveStarRatings:book.Five,
    		});
    		
    		nameLabel = Ti.UI.createLabel({
    			left : 5,
            	text: book.BookTitle,
           		font:{
	            	fontSize: 15,
					fontFamily: 'Helvetica Neue',
					fontWeight:'bold'
        		},

       		 });
    		
        row.add(nameLabel);
        
  		booksDataJibeHot.push(row);
	     }
	     if (isJibe == true && isHot == true) {
	      booksTable.setData(booksDataJibeHot);
	     }
	     }
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     // timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 booksClient.open("GET", url);
 // Send the request.
 booksClient.send();


};

loadData();
books.addEventListener('focus', function(){
    loadData();
});

movies.addEventListener('focus', function(){
    loadData();
});

articles.addEventListener('focus', function(){
    loadData();
});
//create tables
var booksTable = Ti.UI.createTableView({
	top : 50,
	height : Ti.UI.SIZE,
	data: booksData
});

var articlesTable = Ti.UI.createTableView({
	top : 50,
	height : Ti.UI.SIZE,
	data: articlesData
});

var moviesTable = Ti.UI.createTableView({
	top : 50,
	height : Ti.UI.SIZE,
	data: moviesData
});

movies.add(moviesTable);
books.add(booksTable);
articles.add(articlesTable);


//actions when button is pressed
moviesTable.addEventListener("click", function(e){
	if (e.rowData.oneStarRatings == null) {
		e.rowData.oneStarRatings = "0";
	};
	if (e.rowData.twoStarRatings == null) {
		e.rowData.twoStarRatings = "0";
	};
	if (e.rowData.threeStarRatings == null) {
		e.rowData.threeStarRatings = "0";
	};
	if (e.rowData.fourStarRatings == null) {
		e.rowData.fourStarRatings = "0";
	};
	if (e.rowData.fiveStarRatings == null) {
		e.rowData.fiveStarRatings = "0";
	};
	//if (e.source.title == 'Cats') {
	var w = Ti.UI.createWindow({
	navBarHidden: true,
	title:e.source.text,
	itemID:e.rowData.itemID,
	userID:e.rowData.userID,
	oneStarRatings:e.rowData.oneStarRatings,
	twoStarRatings:e.rowData.twoStarRatings,
	threeStarRatings:e.rowData.threeStarRatings,
	fourStarRatings:e.rowData.fourStarRatings,
	fiveStarRatings:e.rowData.fiveStarRatings,
	itemReviews:e.rowData.itemReviews,
	topLeftText:e.rowData.genre,
	url:'/ui/common/MoviePicked.js'
	});


//opens the tab
moviesTab.open(w,{animated:true});
//}
});

booksTable.addEventListener("click", function(e){
	if (e.rowData.oneStarRatings == null) {
		e.rowData.oneStarRatings = "0";
	};
	if (e.rowData.twoStarRatings == null) {
		e.rowData.twoStarRatings = "0";
	};
	if (e.rowData.threeStarRatings == null) {
		e.rowData.threeStarRatings = "0";
	};
	if (e.rowData.fourStarRatings == null) {
		e.rowData.fourStarRatings = "0";
	};
	if (e.rowData.fiveStarRatings == null) {
		e.rowData.fiveStarRatings = "0";
	};
	//if (e.source.title == 'Cats') {
	var w = Ti.UI.createWindow({
	navBarHidden: true,
	title:e.source.text,
	itemID:e.rowData.itemID,
	userID:e.rowData.userID,
	genre:e.rowData.genre,
	topLeftText:"Author: " + e.rowData.bookAuthor,
	bookImage:e.rowData.bookImage,
	oneStarRatings:e.rowData.oneStarRatings,
	twoStarRatings:e.rowData.twoStarRatings,
	threeStarRatings:e.rowData.threeStarRatings,
	fourStarRatings:e.rowData.fourStarRatings,
	fiveStarRatings:e.rowData.fiveStarRatings,
	itemReviews:e.rowData.itemReviews,
	url:'/ui/common/BookPicked.js',
	//theId:e.source.bookId
	});


//opens the tab
booksTab.open(w,{animated:true});
//}
});

articlesTable.addEventListener("click", function(e){
	if (e.rowData.oneStarRatings == null) {
		e.rowData.oneStarRatings = "0";
	};
	if (e.rowData.twoStarRatings == null) {
		e.rowData.twoStarRatings = "0";
	};
	if (e.rowData.threeStarRatings == null) {
		e.rowData.threeStarRatings = "0";
	};
	if (e.rowData.fourStarRatings == null) {
		e.rowData.fourStarRatings = "0";
	};
	if (e.rowData.fiveStarRatings == null) {
		e.rowData.fiveStarRatings = "0";
	};
	//if (e.source.title == 'Cats') {
	var w = Ti.UI.createWindow({
	navBarHidden: true,
	title:e.source.text,
	itemID:e.rowData.itemID,
	userID:e.rowData.userID,
	topLeftText:"Source: " + e.rowData.newsAuthor,
	oneStarRatings:e.rowData.oneStarRatings,
	twoStarRatings:e.rowData.twoStarRatings,
	threeStarRatings:e.rowData.threeStarRatings,
	fourStarRatings:e.rowData.fourStarRatings,
	fiveStarRatings:e.rowData.fiveStarRatings,
	itemReviews:e.rowData.itemReviews,
	url:'/ui/common/ArticlePicked.js'
	});


//opens the tab
articlesTab.open(w,{animated:true});
//}
});




var moviesTab = Ti.UI.createTab({
	title:'Movies',
	icon: '/images/movies.png',
	window:movies
});

var booksTab = Ti.UI.createTab({
	title:'Books',
	icon: '/images/books.png',
	window:books
});

var articlesTab = Ti.UI.createTab({
	title:'News',
	icon: '/images/news.png',
	window:articles
});




//add jibe button to three tabs
var jibe = Ti.UI.createButton({
	left : 5,
	height : 35,
	width : 50,
    backgroundImage : '/images/buttons/jibe.png',
});

var jibe2 = Ti.UI.createButton({
	left : 5,
	height : 35,
	width : 50,
    backgroundImage : '/images/buttons/jibe.png',
});

var jibe3 = Ti.UI.createButton({
	left : 5,
	height : 35,
	width : 50,
    backgroundImage : '/images/buttons/jibe.png',
});


jibe.addEventListener("click", function() {
	
	//if not hot, only jibe on or off
	if (isHot == false) {
  if (isJibe == false) {
  	isJibe = true;
  	booksTable.setData(booksDataJibe);
  	moviesTable.setData(moviesDataJibe);
  	articlesTable.setData(articlesDataJibe);
  }
  else {
  	isJibe = false;
  	booksTable.setData(booksData);
  	moviesTable.setData(moviesData);
  	articlesTable.setData(articlesData);
  }
 }
 //if hot, have to consider that also
 else {
 if (isJibe == false) {
  	isJibe = true;
  	booksTable.setData(booksDataJibeHot);
  	moviesTable.setData(moviesDataJibeHot);
  	articlesTable.setData(articlesDataJibeHot);
  }
  else {
  	isJibe = false;
  	booksTable.setData(booksDataHot);
  	moviesTable.setData(moviesDataHot);
  	articlesTable.setData(articlesDataHot);
  }
 }
});

jibe2.addEventListener("click", function() {
	
	//if not hot, only jibe on or off
	if (isHot == false) {
  if (isJibe == false) {
  	isJibe = true;
  	booksTable.setData(booksDataJibe);
  	moviesTable.setData(moviesDataJibe);
  	articlesTable.setData(articlesDataJibe);
  }
  else {
  	isJibe = false;
  	booksTable.setData(booksData);
  	moviesTable.setData(moviesData);
  	articlesTable.setData(articlesData);
  }
 }
 //if hot, have to consider that also
 else {
 if (isJibe == false) {
  	isJibe = true;
  	booksTable.setData(booksDataJibeHot);
  	moviesTable.setData(moviesDataJibeHot);
  	articlesTable.setData(articlesDataJibeHot);
  }
  else {
  	isJibe = false;
  	booksTable.setData(booksDataHot);
  	moviesTable.setData(moviesDataHot);
  	articlesTable.setData(articlesDataHot);
  }
 }
});

jibe3.addEventListener("click", function() {
	
	//if not hot, only jibe on or off
	if (isHot == false) {
  if (isJibe == false) {
  	isJibe = true;
  	booksTable.setData(booksDataJibe);
  	moviesTable.setData(moviesDataJibe);
  	articlesTable.setData(articlesDataJibe);
  }
  else {
  	isJibe = false;
  	booksTable.setData(booksData);
  	moviesTable.setData(moviesData);
  	articlesTable.setData(articlesData);
  }
 }
 //if hot, have to consider that also
 else {
 if (isJibe == false) {
  	isJibe = true;
  	booksTable.setData(booksDataJibeHot);
  	moviesTable.setData(moviesDataJibeHot);
  	articlesTable.setData(articlesDataJibeHot);
  }
  else {
  	isJibe = false;
  	booksTable.setData(booksDataHot);
  	moviesTable.setData(moviesDataHot);
  	articlesTable.setData(articlesDataHot);
  }
 }
});
books.children[0].add(jibe);
movies.children[0].add(jibe2);
articles.children[0].add(jibe3);


//add hot button
var hot = Ti.UI.createButton({
	right : 5,
	height : 35,
	width : 50,
    backgroundImage : '/images/buttons/hot.png',
});

var hot2 = Ti.UI.createButton({
	right : 5,
	height : 35,
	width : 50,
    backgroundImage : '/images/buttons/hot.png',
});

var hot3 = Ti.UI.createButton({
	right : 5,
	height : 35,
	width : 50,
    backgroundImage : '/images/buttons/hot.png',
});

hot2.addEventListener("click", function() {
	//if not jibe, only hot
	if (isJibe == false) {
  if (isHot == false) {
  	
  	isHot = true;
  	booksTable.setData(booksDataHot);
  	moviesTable.setData(moviesDataHot);
  	articlesTable.setData(articlesDataHot);
  }
  else {
  	isHot = false;
  	booksTable.setData(booksData);
  	moviesTable.setData(moviesData);
  	articlesTable.setData(articlesData);
  }
 }
 //jibe is on
 else {
 	if (isHot == false) {
  	
  	isHot = true;
  	booksTable.setData(booksDataJibeHot);
  	moviesTable.setData(moviesDataJibeHot);
  	articlesTable.setData(articlesDataJibeHot);
  }
  else {
  	isHot = false;
  	booksTable.setData(booksDataJibe);
  	moviesTable.setData(moviesDataJibe);
  	articlesTable.setData(articlesDataJibe);
  }
 }
});

hot3.addEventListener("click", function() {
	//if not jibe, only hot
	if (isJibe == false) {
  if (isHot == false) {
  	
  	isHot = true;
  	booksTable.setData(booksDataHot);
  	moviesTable.setData(moviesDataHot);
  	articlesTable.setData(articlesDataHot);
  }
  else {
  	isHot = false;
  	booksTable.setData(booksData);
  	moviesTable.setData(moviesData);
  	articlesTable.setData(articlesData);
  }
 }
 //jibe is on
 else {
 	if (isHot == false) {
  	
  	isHot = true;
  	booksTable.setData(booksDataJibeHot);
  	moviesTable.setData(moviesDataJibeHot);
  	articlesTable.setData(articlesDataJibeHot);
  }
  else {
  	isHot = false;
  	booksTable.setData(booksDataJibe);
  	moviesTable.setData(moviesDataJibe);
  	articlesTable.setData(articlesDataJibe);
  }
 }
});

hot.addEventListener("click", function() {
	//if not jibe, only hot
	if (isJibe == false) {
  if (isHot == false) {
  	
  	isHot = true;
  	booksTable.setData(booksDataHot);
  	moviesTable.setData(moviesDataHot);
  	articlesTable.setData(articlesDataHot);
  }
  else {
  	isHot = false;
  	booksTable.setData(booksData);
  	moviesTable.setData(moviesData);
  	articlesTable.setData(articlesData);
  }
 }
 //jibe is on
 else {
 	if (isHot == false) {
  	
  	isHot = true;
  	booksTable.setData(booksDataJibeHot);
  	moviesTable.setData(moviesDataJibeHot);
  	articlesTable.setData(articlesDataJibeHot);
  }
  else {
  	isHot = false;
  	booksTable.setData(booksDataJibe);
  	moviesTable.setData(moviesDataJibe);
  	articlesTable.setData(articlesDataJibe);
  }
 }
});

books.children[0].add(hot);
movies.children[0].add(hot2);
articles.children[0].add(hot3);

tabGroup.addTab(moviesTab);
tabGroup.addTab(booksTab);
tabGroup.addTab(articlesTab);

tabGroup.open();


