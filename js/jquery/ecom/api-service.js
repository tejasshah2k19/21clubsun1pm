var url = "http://healthy-me-rest-api.herokuapp.com/"



function header(){
        let header = $("#header"); 
        header.html("<a href='Home.html'>Home</a> |   <a href='AllProducts.html'>All Products</a> |<a href='MyCarts.html'>MyCarts<span  id='cartcount' class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'></span></a> &nbsp;&nbsp;&nbsp;&nbsp;|<a href='Logout.html'>Logout</a>")
        let authToken = localStorage.getItem("authToken")
        if(authToken){
           
          let allCarts = [] 
          getCarts(authToken);      
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

            getCarts(authToken);


        },
        error: function (errResp) {
            console.log(errResp);
            alert("SomethingWentWrong.....");
        }

    });
}

function getCarts(authToken){
    
    let subUrl = "carts";
    let data ="golmal"
    $.ajax({
        type: "GET",
        url: url + subUrl + "/" + authToken ,
        // data: data,
        success: function (successResp) {
            console.log(successResp.data);
            setCartCount(successResp.data.length);
        },
        error: function (errResp) {
            console.log(errResp);
            alert("SomethingWentWrong.....");
        }

    });
  //  
}


function setCartCount(count){
    $("#cartcount").html(count)    
}



$(document).ready(function(){
    header();

})




