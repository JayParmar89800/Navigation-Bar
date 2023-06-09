fetch("product.json")
.then((response) => response.json())
.then((data) => {
  var result = data.result;
  var productContainer = document.getElementById("productContainer");
    
function updaterender(status, elementId) {
  var countDisplay = document.getElementById(elementId);
  var filteredProducts=result;
  if (status !== "result") {
    filteredProducts = result.filter(function (product) {
      return product.status === status;
    });
  }
  countDisplay.innerHTML = `${status} Status: ${filteredProducts.length}`;
  countDisplay.addEventListener("click", function () {
    return render(filteredProducts);
  });
}



function render(products){
  productContainer.innerHTML="";

  products.forEach( function (product) {
    var date=new Date(product.createdAt);
    var ratings="";
    var fillstar=product.property_reviews;
    var emptys= 5 - fillstar;

    for(var i=0;i<fillstar;i++)
    {
      ratings+='<i class="fa-solid fa-star fa-xs" style="color: #ffd166;"></i>';
    }
    for(var i=0;i<emptys;i++)
    {
      ratings+='<i class="fa-regular fa-star fa-xs" style="color: gray;"></i>';
    }
   
    var card = document.createElement("div");
    card.innerHTML=` <div class="product-card">
    <div class="img">
    <img class="res_image" src="${product.image[0]}">
    </div>
    <div class="sc">
    <div class="title_pr">
      <div class="title">${product.title}</div>
      <div><span class="pr">${product.price.map((x)=>x.number)}$</span> </div> 
    </div>
    <div class="location">${product.location}</div>
    
    
    <div class="time_rate">
      <div class="time">${date.toDateString()}</div>
      <div class="rate">${ratings}</div>
    </div>
    </div>
  </div>`
    productContainer.appendChild(card);
  });
}
updaterender("result", "btn_all")
updaterender("approved", "btn_app");
updaterender("pending", "btn_ped");
updaterender("decline", "btn_dec");
render(result);

 
})
.catch((error) => console.log(error));


