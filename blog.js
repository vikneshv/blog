
var selector = '#nav li';
$(selector).on('click', function () {
    $(selector).removeClass('active');
    $(this).addClass('active');
});


$('#new_blog').click(function () {
    $('#main_body').load("add.html");
});

$(document).ready(function () {
    $.getJSON('https://jsonprovider.herokuapp.com/posts/?limit=50&sort=id+desc', function (data) { 
        $.each(data, function (index, obj) { 
            var title = obj.title; 
            var blog_id = obj.id;
            $("#blog_id").append('<img src="1600.png" width="60px" height="60px" />&nbsp;&nbsp;<b>Title:</b>&nbsp;' + title + 
                '<br>id=' + blog_id + ' </br>');
        });
    });
});


function returnfunction() {
    $('#main_body').load("index.html");
}


function myfunction(){
    url = "https://jsonprovider.herokuapp.com/posts";
    var title = document.getElementById("title").value;
    var text = document.getElementById("content").value;
    $.ajax({
          url: url,
          type: 'POST',
          data: JSON.stringify({
              "title": title,
              "body" : text,
              "userId" : 1
            }),
       
          dataType: 'json',
          async: false,
          success: function(msg) {
          //console.log("success");
          $("#main_body").load("main.html");
             }
        });
}

