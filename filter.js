let products = {
    data: [
      {
        productName: "Normal Chain",
        category: "Necklaces",
        price: "0",
        image: "images/jewellery.webp",
      },
      {
        productName: "Nut Shape Chain",
        category: "Necklaces",
        price: "9",
        image: "images/jewellery.webp",
      },
      {
        productName: "Love Shape Chain",
        category: "Necklaces",
        price: "0",
        image: "images/jewellery.webp",
      },
      {
        productName: "Camellia Pendant",
        category: "Pendants",
        price: "0",
        image: "images/jewellery.webp",
      },
      {
        productName: "Daisy Pendant",
        category: "Pendants",
        price: "0",
        image: "images/jewellery.webp",
      },
      {
        productName: "Camellia Ring",
        category: "Rings",
        price: "0",
        image: "images/jewellery.webp",
      },
      {
        productName: "Daisy Ring",
        category: "Rings",
        price: "0",
        image: "images/jewellery.webp",
      },
      {
        productName: "Camellia Earring",
        category: "Earrings",
        price: "0",
        image: "images/jewellery.webp",
      },
      {
        productName: "Daisy Earring",
        category: "Earrings",
        price: "0",
        image: "images/jewellery.webp",
      },
    ],
  };
  for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    let container = document.createElement("div");
    container.classList.add("product-container");
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }

  function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }

  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });
  window.onload = () => {
    filterProduct("all");
  };