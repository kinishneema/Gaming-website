let bagitemsobjects;
onload();

function onload(){
    loadbagitemsobject()
    displaybagitems();
}

function loadbagitemsobject(){
    console.log(bagitems)

bagitemsobjects=bagitems.map(itemId =>{
        for(let i=0;i<items.length;i++)
        {
            if(itemId==items[i].id){
                return items[i]
            }
        }
    })
    console.log(bagitemsobjects)
}
function displaybagitems(){
    let containerelement=document.querySelector('.bag-items-container');
    let innerHTML=' ';
    bagitemsobjects.forEach(bagitem => {
        innerHTML+=generateitemhtml(bagitem)
    });
    containerelement.innerHTML=innerHTML;
}

function generateitemhtml(item){
return `<div class ="bag-item-container">
    <div class="item-left-part">
     <img class="bag-item-img" src="${item.item_image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company_name}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price container">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>
     <div class="return-period">
       <span class="return-period-days">${item.return_period} days</span>return available
     </div>
      <div class="delivery-details">
        delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

     <div class="remove-from-cart">x</div>
</div>`;

}


