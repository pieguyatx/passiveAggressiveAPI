$(document).ready(function(){

    // get example statement
    $.ajax({
        method: 'GET',
        url: 'https://passiveaggressive.herokuapp.com/api',
        success: handleSuccess,
        error: handleError
    });

    function handleSuccess(json){
        console.log(json[0]); // debug
        let text = document.createTextNode(json[0].statement);
        $("#example-statement").append(text);
    }

    function handleError(json) {
        console.log("Something went wrong getting the example...");
    }

});