function apiApod(){
    const date = $('#date').val()
    console.log(date)
    $.ajax({
       type: "GET",
       url: `https://api.nasa.gov/planetary/apod?api_key=U8l7SR2fIzCjTpS9uMYRR7umAGRBzXwVU6OXvmlE&date=${date}`,
 
       success: function (response) {
            const divExplanation = $('<img src="'+response.url+'"/>, <p>"'+response.explanation+'</p>')
         
 
          $('#recebeInfo').html(divExplanation);
        }  
    });
}
 