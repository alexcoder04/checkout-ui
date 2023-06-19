
const pageTypeEl = document.getElementById("pageType");
const pageSizeEl = document.getElementById("pageSize");
const pagesNumberEl = document.getElementById("pageNumber");
const deliveryEl = document.getElementById("delivery");
const resultBoxEl = document.getElementById("resultBox");
const discountShowEl = document.getElementById("show-discount");
const discountAmountEl = document.getElementById("discount");
const discountContainerEl = document.getElementById("discount-container");
const roundEl = document.getElementById("round");

const PRICE_BLACK_WHITE = 0.5;
const PRICE_COLOR = 4;
const PRICE_DELIVERY = 2;

function refresh(){
    let price = 0;
    let pagesNumber = pagesNumberEl.value;

    switch (pageTypeEl.value) {
        case "black-white":
            price += PRICE_BLACK_WHITE * pagesNumber;
            break;
        default:
            price += PRICE_COLOR * pagesNumber;
            break;
    }

    if (pageSizeEl.value == "A3") {
        price *= 2;
    }

    if (deliveryEl.checked) {
        price += PRICE_DELIVERY;
    }

    if (discountShowEl.checked) {
      discountContainerEl.classList.remove("d-none");
      if (discountAmountEl.value == "" || discountAmountEl.value == null) {
        discountAmountEl.value = 0;
        return;
      }
      if (discountAmountEl.value > 90) {
        discountAmountEl.value = 90;
        return;
      }
      price = price * (0.01 * (100 - discountAmountEl.value));
    } else {
      discountContainerEl.classList.add("d-none");
    }

    resultBoxEl.value = (roundEl.checked ? Math.ceil(price) : price.toFixed(2));
}

refresh();
