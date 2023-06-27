fetch("product.json")
.then((response) => response.json())
.then((data) => {
  var result = data.result;
  var productContainer = document.getElementById("productContainer");

  result.forEach( function (product) {
    var date=new Date(product.createdAt);
    var ratings="";
    var fillstar=product.property_reviews;
    var emptys= 5 - fillstar;

    for(var i=0;i<fillstar;i++)
    {
      ratings+='<i class="fa-solid fa-star" style="color: #ffd166;"></i>';
    }
    for(var i=0;i<emptys;i++)
    {
      ratings+='<i class="fa-solid fa-star" style="color: #ffd166;"></i>';
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
      <div class="rate"><i class="fa-solid fa-star fa-xs" style="color: #ffd166;"></i>${fillstar}</div>
    </div>
    </div>
  </div>`
    productContainer.appendChild(card);
  });

 
})
.catch((error) => console.log(error));

