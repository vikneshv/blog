
var selector = '#nav li';
$(selector).on('click', function () {
    $(selector).removeClass('active');
    $(this).addClass('active');
});

      
  let promise =  fetch('https://jsonprovider.herokuapp.com/posts/?limit=50&sort=id+desc');   
  promise.then(response => response.json())        
 .then(data => 
 {   
$.each(data,function(index, obj){  
    var title = obj.title; 
    var blog_id = obj.id;             
$("#blog_id").prepend('<img src="1600.png" width="60px" height="60px" />&nbsp;&nbsp;<b>Title:</b>&nbsp;' + title + 
'<br>' + blog_id + ' </br>');                  
           
        });          
     });




$('#new_blog').click(function () {
    $('#main_body').load("add.html");
});

const returnfunction = () =>
 {
    $('#main_body').load("index.html");
}
const myfunction = () =>{
 
    var title =(<HTMLInputElement> document.getElementById("#title")).value;
    var msg = (<HTMLInputElement>document.getElementById("#content")).value;
    $.ajax({
          url: "https://jsonprovider.herokuapp.com/posts",
          type: 'POST',
          data: JSON.stringify({
              "title": title,
              "body" : msg,
              "userId" : 1
            }),
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          async: false,
          success: function(message) {
          $("#main_body").load("main.html");
             }
        });
}
