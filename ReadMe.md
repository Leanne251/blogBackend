#Creating a back end! 

First issue connecting to the table. 
Make sure your create SQL request is 100% accurate. 
Perhaps it didnt like my underscore name system for the table title, or that I called the variable SQL which was passed to the db.query() function. 

Next issue. 
Remember you need to parse the body using app.use(express.json()), these needs to come BEFORE specifing which route address to use! 

cors!! 
Install cors on back end 
don't use mode: no-cors, as makes response opaque and essentially telling front end javascript not to see response body or headers.