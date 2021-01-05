 function searchmusic()
{
    var requirejs=require("requirejs");
    var MongoClient = requirejs('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url,function(error, databases){// use for to connect to the databases  
        if(error){  
            throw error;  
          
        }  
    var nodtst = databases.db("mydb");  
    
    nodtst.collection("customers").findOne({name:'Mirchi'}, function(err, result) {  
        if (err) throw err;  
        console.log("one record is find now....."+result.name + ", " + result.artist + ", " + result.url+ ", " + result.cover);  
        databases.close();   
    })
})
}














	
