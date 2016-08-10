# rest-webservice
Why rest-webservice?.

So not found anywhere a RESTFul webservice packge which provides : promise and object oriented easy to use approach.
Use is very simple. Followings steps to be done:

1. Install package :

   #npm install rest-webservice --save
   
   --save : it will allow to save this package in your package.json
   
   
2. create object :

   var wS = new webService(url, data);
   
   constructor expects 2 parameters : 
   
   url : Web service url to be call,
   
   data : data in json format. As an exmaple if i would have to send 
   
          var data = {username:'test@test.com', password:'xxxxxx', data : {app:'dummy'}}
          
          we can send here header information too.
          
          
3. webSer.post()

    .then(function(resp){
    
     // YOUR WAY
     
    }).
    
    catch(function(err){
    
      // ERR
      
    })
    
   It's promisify , you can leverage benifit of Bluebird Promise here
   

Making it more mature in coming days , your help / feedback will appricaited
