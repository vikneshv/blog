
var selector = '#nav li';
$(selector).on('click', function () {
    $(selector).removeClass('active');
    $(this).addClass('active');
});

fetch('https://jsonprovider.herokuapp.com/posts/?limit=50&sort=id+desc')
.then(response => {
    return response.json()
})
.then(title => {
    console.log('title:', obj.title);
})
.catch(reason => {
    console.log('The reason for the erro:', reason);
})





function returnfunction() {
    $('#main_body').load("index.html");
}


function myfunction(){
  
    var title = document.getElementById("title").value;
    var text = document.getElementById("content").value;
    $.ajax({
          url: "https://jsonprovider.herokuapp.com/posts",
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

