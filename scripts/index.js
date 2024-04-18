let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerHTML = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");
  if (!itemsContainerElement) {
    return;
  }

  let innerHTML = "";
  items.forEach((item) => {
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

          <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>
  </div>`;
  });
  itemsContainerElement.innerHTML = innerHTML;
}
