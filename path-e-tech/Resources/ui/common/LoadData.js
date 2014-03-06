function LoadData() {



//not hot or jibe movies

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

         	row = Ti.UI.createTableViewRow({
         		userID:userID.value,
    			itemID:movie.movieID,
    			oneStarRatings:movie.One,
    			twoStarRatings:movie.Two,
    			threeStarRatings:movie.Three,
    			fourStarRatings:movie.Four,
    			fiveStarRatings:movie.Five,
    			itemReviews:movie.ratings,
    			genre:movie.genre,
    			height:'60'
    		});
    		nameLabel = Ti.UI.createLabel({
            text:movie.movieTitle,
            //textAlign:'left',
            font:{
                fontSize:'20',
            fontWeight:'bold'
        },
        
        height:'60',
        width:'95%'
        });
       
        row.add(nameLabel);
        
  		moviesData.push(row);
	     }
	     moviesTable.setData(moviesData);
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

         	row = Ti.UI.createTableViewRow({
         		
    			userID:userID.value,
    			itemID:movie.movieID,
    			oneStarRatings:movie.One,
    			twoStarRatings:movie.Two,
    			threeStarRatings:movie.Three,
    			fourStarRatings:movie.Four,
    			fiveStarRatings:movie.Five,
    			itemReviews:movie.ratings,
    			genre:movie.genre,
    			height:'60'
    		});
    		nameLabel = Ti.UI.createLabel({
            text:movie.movieTitle,
            //textAlign:'left',
            font:{
                fontSize:'20',
            fontWeight:'bold'
        },
        
        height:'60',
        width:'95%'
        });
       
        row.add(nameLabel);
        
  		moviesDataHot.push(row);
	     }
	    // moviesTable.setData(moviesDataHot);
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

         	row = Ti.UI.createTableViewRow({
         		userID:userID.value,
    			itemID:article.newsID,
    			newsAuthor:article.newsAuthor,
    			oneStarRatings:article.One,
    			twoStarRatings:article.Two,
    			threeStarRatings:article.Three,
    			fourStarRatings:article.Four,
    			fiveStarRatings:article.Five,
    			itemReviews:article.ratings,
    			height:'auto'
    		});
    		nameLabel = Ti.UI.createLabel({
            text:article.newsTitle,
            
            //textAlign:'left',
            font:{
                fontSize:'20',
            fontWeight:'bold'
        },
        
        height:'auto',
        top:'5',
        bottom:'5',
        width:'95%'
        });
       
        row.add(nameLabel);
        
  		articlesData.push(row);
	     }
	     articlesTable.setData(articlesData);
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

         	row = Ti.UI.createTableViewRow({
         		newsAuthor:article.newsAuthor,
         		userID:userID.value,
    			itemID:article.newsID,
    			oneStarRatings:article.One,
    			twoStarRatings:article.Two,
    			threeStarRatings:article.Three,
    			fourStarRatings:article.Four,
    			fiveStarRatings:article.Five,
    			itemReviews:article.ratings,
    			height:'auto'
    		});
    		nameLabel = Ti.UI.createLabel({
            text:article.newsTitle,
           
            //textAlign:'left',
            font:{
                fontSize:'20',
            fontWeight:'bold'
        },
        
        height:'auto',
        top:'5',
        bottom:'5',
        width:'95%'
        });
       
        row.add(nameLabel);
        
  		articlesDataHot.push(row);
	     }
	     //articlesTable.setData(articlesDataHot);
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

         	row = Ti.UI.createTableViewRow({
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
    			height:'auto'
    		});
    		nameLabel = Ti.UI.createLabel({
            text:book.BookTitle,
            //textAlign:'left',
            font:{
                fontSize:'20',
            fontWeight:'bold'
        },
        
        height:'auto',
        top:'5',
        bottom:'5',
        width:'95%'
        });
       
        row.add(nameLabel);
        
  		booksData.push(row);
	     }
	     booksTable.setData(booksData);
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

         	row = Ti.UI.createTableViewRow({
         		
    			
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
    			height:'auto'
    		});
    		nameLabel = Ti.UI.createLabel({
            text:book.BookTitle,
            //textAlign:'left',
            font:{
                fontSize:'20',
            fontWeight:'bold'
        },
        
        height:'auto',
        top:'5',
        bottom:'5',
        width:'95%'
        });
       
        row.add(nameLabel);
        
  		booksDataHot.push(row);
	     }
	    // booksTableHot.setData(booksDataHot);
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

         	row = Ti.UI.createTableViewRow({
         		userID:userID.value,
    			itemID:movie.movieID,
    			oneStarRatings:movie.One,
    			twoStarRatings:movie.Two,
    			threeStarRatings:movie.Three,
    			fourStarRatings:movie.Four,
    			fiveStarRatings:movie.Five,
    			itemReviews:movie.ratings,
    			genre:movie.genre,
    			height:'60'
    		});
    		nameLabel = Ti.UI.createLabel({
            text:movie.movieTitle,
            //textAlign:'left',
            font:{
                fontSize:'20',
            fontWeight:'bold'
        },
        
        height:'60',
        width:'95%'
        });
       
        row.add(nameLabel);
        
  		moviesDataJibe.push(row);
  		
	     }
	   //  moviesTable.setData(moviesDataJibe);

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

         	row = Ti.UI.createTableViewRow({
         		userID:userID.value,
    			itemID:movie.movieID,
    			oneStarRatings:movie.One,
    			twoStarRatings:movie.Two,
    			threeStarRatings:movie.Three,
    			fourStarRatings:movie.Four,
    			fiveStarRatings:movie.Five,
    			itemReviews:movie.ratings,
    			genre:movie.genre,
    			height:'60'
    		});
    		nameLabel = Ti.UI.createLabel({
            text:movie.movieTitle,
            //textAlign:'left',
            font:{
                fontSize:'20',
            fontWeight:'bold'
        },
        
        height:'60',
        width:'95%'
        });
       
        row.add(nameLabel);
        
  		moviesDataJibeHot.push(row);
	     }
	    // moviesTable.setData(moviesDataHot);
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

         	row = Ti.UI.createTableViewRow({
         		newsAuthor:article.newsAuthor,
         		userID:userID.value,
    			itemID:article.newsID,
    			oneStarRatings:article.One,
    			twoStarRatings:article.Two,
    			threeStarRatings:article.Three,
    			fourStarRatings:article.Four,
    			fiveStarRatings:article.Five,
    			itemReviews:article.ratings,
    			height:'auto'
    		});
    		nameLabel = Ti.UI.createLabel({
            text:article.newsTitle,
            
            //textAlign:'left',
            font:{
                fontSize:'20',
            fontWeight:'bold'
        },
        
        height:'auto',
        top:'5',
        bottom:'5',
        width:'95%'
        });
       
        row.add(nameLabel);
        
  		articlesDataJibe.push(row);
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

         	row = Ti.UI.createTableViewRow({
         		newsAuthor:article.newsAuthor,
    			userID:userID.value,
    			itemID:article.newsID,
    			oneStarRatings:article.One,
    			twoStarRatings:article.Two,
    			threeStarRatings:article.Three,
    			fourStarRatings:article.Four,
    			fiveStarRatings:article.Five,
    			itemReviews:article.ratings,
    			height:'auto'
    		});
    		nameLabel = Ti.UI.createLabel({
            text:article.newsTitle,
           
            //textAlign:'left',
            font:{
                fontSize:'20',
            fontWeight:'bold'
        },
        
        height:'auto',
        top:'5',
        bottom:'5',
        width:'95%'
        });
       
        row.add(nameLabel);
        
  		articlesDataJibeHot.push(row);
	     }
	     //articlesTable.setData(articlesDataHot);
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

         	row = Ti.UI.createTableViewRow({
         		
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
    			height:'auto'
    		});
    		nameLabel = Ti.UI.createLabel({
            text:book.BookTitle,
            //textAlign:'left',
            font:{
                fontSize:'20',
            fontWeight:'bold'
        },
        
        height:'auto',
        top:'5',
        bottom:'5',
        width:'95%'
        });
       
        row.add(nameLabel);
        
  		booksDataJibe.push(row);
	     }
	    // booksTable.setData(booksData);
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

         	row = Ti.UI.createTableViewRow({
         		
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
    			height:'auto'
    		});
    		nameLabel = Ti.UI.createLabel({
            text:book.BookTitle,
            //textAlign:'left',
            font:{
                fontSize:'20',
            fontWeight:'bold'
        },
        
        height:'auto',
        top:'5',
        bottom:'5',
        width:'95%'
        });
       
        row.add(nameLabel);
        
  		booksDataJibeHot.push(row);
	     }
	    // booksTableHot.setData(booksDataHot);
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

isJibe = false;
isHot = false;

}

module.exports = LoadData;