let post_url="https://jsonprovider.herokuapp.com/posts";
let fetch_url="https://jsonprovider.herokuapp.com/posts/?limit=50&sort=id+desc";
//active function
var selector = '#nav li';
$(selector).on('click', function () {
$(selector).removeClass('active');
$(this).addClass('active');
});


//api get method fetching using promise      
let promise =fetch(fetch_url);   
promise.then(response => response.json())        
.then(data => 
{   
$.each(data,(index, data)=>{  
    var title = data.title; 
    var msg = data.body;             
$("#blog_id").prepend('<img src="1600.png" width="60px" height="60px" />&nbsp;&nbsp;<b>Title:</b>&nbsp;' + title + 
'<br><b>msg:</b>'+msg+'</br>');                             
 });          
 });
//load on click 
$('#new_blog').click(()=> {
$('#main_body').load("add.html");
});
//back button
const returnfunction = () =>
{
$('#main_body').load("index.html");
}
//post method
const myfunction = ()=>
{
    
    var title = $('#title').val();
    var msg = $('#content').val();
    if(title==" " &&  msg==" " )
    alert("please enter the value");
    else
    {
    $.ajax({
          url:post_url,
          type:'POST',
          data:JSON.stringify({
              "title": title,
              "body" : msg,
              "userId" : 1
            }),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: (message)=> {
    $("#main_body").load("main.html");
    }
    });
    
 
}
}