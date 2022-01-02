var url = "http://healthy-me-rest-api.herokuapp.com/"



function header(){
        let header = $("#header"); 
        header.html("<a href='Home.html'>Home</a> |   <a href='AllProducts.html'>All Products</a> |<a href='MyCarts.html'>MyCarts[ 5 ]</a> |<a href='Logout.html'>Logout</a>")
        let authToken = localStorage.getItem("authToken")
        if(authToken){
           let allCarts =  getCarts(authToken); //2 second 
           console.log(allCarts.length); // 
        }

}

function addToCart(authToken, productId) {
    console.log("calling addToCart");
    let subUrl = "addtocart";
    $.ajax({
        type: "GET",
        url: url + subUrl + "/" + authToken + "/" + productId,
        // data: data,
        success: function (successResp) {
            console.log(successResp);




        },
        error: function (errResp) {
            console.log(errResp);
            alert("SomethingWentWrong.....");
        }

    });
}

function getCarts(authToken){
    
    let subUrl = "carts";
    $.ajax({
        type: "GET",
        url: url + subUrl + "/" + authToken ,
        // data: data,
        success: function (successResp) {
            console.log(successResp);
            return successResp.data;
        },
        error: function (errResp) {
            console.log(errResp);
            alert("SomethingWentWrong.....");
        }

    });
}





$(document).ready(function(){
    header();

})




