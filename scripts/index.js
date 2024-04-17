let bagitems;
onload()


function onload(){
let bagitemsstr=localStorage.getItem('bagitems')
bagitems=bagitemsstr ? JSON.parse(bagitemsstr) : [];
displayitemsonhomepage();
displaybagicon()
}

function addtobag(itemId){
bagitems.push(itemId)
localStorage.setItem('bagitems',JSON.stringify(bagitems))
displaybagicon()
}

function displaybagicon(){
    let bagitemcountelement=document.querySelector('.bag-item-count')
    if(bagitems.length>0){
    bagitemcountelement.style.visibility='visible';
    bagitemcountelement.innerHTML=bagitems.length
    }
    else{
        bagitemcountelement.style.visibility='hidden';
    }
}



function displayitemsonhomepage(){
    let itemscontainerelement=document.querySelector(".items-container");
if(!itemscontainerelement ){
    return
}

let innerHTML=' ';
items.forEach(item=>{
  innerHTML += `
  <div class="item-container">
      <img  class="item-image" src="${item.item_image}" alt="item image">
      <div class="rating">
          ${item.rating.star} ⭐| ${item.rating.noOFReviews}
      </div>
      <div class="company-name">${item.company_name}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</spna>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% off)</span>
      </div>

          <button class="btn-add-bag" onclick="addtobag(${item.id})">Add To Bag</button>
  </div>
  `
})
itemscontainerelement.innerHTML= innerHTML;

}
