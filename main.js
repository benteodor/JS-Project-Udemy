/*function testAlert(message) {
  alert("message");
}
console.log("Test message now");*/

/*document.getElementById("greeting").innerHTML = "Hello World";*/
/*document.getElementsByClassName("product-item");
document.getElementsByTagName("p");*/
/*document.querySelector("p#weather").innerHTML = "New Value";*/
/*document.querySelector("p#weather").style.color = "red";
document.querySelector("p#weather").style.color = "#dedede";*/

/*document.querySelector("p#weather").style.margin = "100px";
document.querySelector("p#weather").style.backgroundColor = "blue";*/

/*document.querySelector("p#weather").addEventListener("click", function () {
  alert("p element clicked");
});*/

// Menu Section

document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});
document
  .querySelector("#close-nav-menu")
  .addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });

/*const customer = "Sara";
let balance = 2000;

console.log("Hi, " + customer + ". Your balance is USD" + balance);

balance = balance + 200;

console.log("Hi, " + customer + ". Your new balance is USD" + balance);*/

// Greeting Section

function celsiusToFahr(temperature) {
  console.log(temperature);
}
celsiusToFahr(25);
celsiusToFahr(30);

function celsiusToFahr(temperature) {
  let fahr = (temperature * 9) / 5 + 32;
  return fahr;
}

celsiusToFahr(25);
celsiusToFahr(30);

let currentHour = new Date().getHours();
let greetingText;

if (currentHour < 12) {
  greetingText = "Good morning!";
} else if (currentHour < 19) {
  greetingText = "Good afternoon!";
} else if (currentHour < 24) {
  greetingText = "Good evening!";
} else {
  greetingText = "Welcome!";
}

const weatherCondition = "cloudy";
const userLocation = "New York";
let temperature = 22.8673;
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(
  1
)}C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(
  temperature
).toFixed(1)}F outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

document
  .querySelector(".weather-group")
  .addEventListener("click", function (e) {
    if (e.target.id == "celsius") {
      document.querySelector("p#weather").innerHTML = celsiusText;
    } else if (e.target.id == "fahr") {
      document.querySelector("p#weather").innerHTML = fahrText;
    }
  });

//new Date().getHours();
//new Date().getMinutes();
//new Date().getSeconds();

let localTime = new Date();

document.querySelector("span[data-time=hours").textContent =
  localTime.getHours();
document.querySelector("span[data-time=minutes").textContent =
  localTime.getMinutes();
document.querySelector("span[data-time=seconds").textContent =
  localTime.getSeconds();

console.log("outside the timeout");
setInterval(function () {
  let localTime = new Date();
  document.querySelector("span[data-time=hours").textContent = localTime
    .getHours()
    .toString()
    .padStart(2, "0");
  document.querySelector("span[data-time=minutes").textContent = localTime
    .getMinutes()
    .toString()
    .padStart(2, "0");
  document.querySelector("span[data-time=seconds").textContent = localTime
    .getSeconds()
    .toString()
    .padStart(2, "0");
}, 1000);

/*for (let a = 0; a < 10; a++) {
  console.log(a);
}
*/

/*let animals = ["dog", "cat", "lion", "zebra"];
for (let a in animals) {
  console.log(animals[a]);
}*/

//Gallery Section

const products = [
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 49.9,
    image: "./assets/products/img6.png",
  },
  {
    title: "Space Odissey",
    author: "Marie Anne",
    price: 35,
    image: "./assets/products/img1.png",
  },
  {
    title: "Doomed City",
    author: "Jason Cobert",
    price: 0,
    image: "./assets/products/img2.png",
  },
  {
    title: "Black Dog",
    author: "John Doe",
    price: 85.35,
    image: "./assets/products/img3.png",
  },
  {
    title: "My Little Robot",
    author: "Pedro Paulo",
    price: 0,
    image: "./assets/products/img5.png",
  },
  {
    title: "Garden Girl",
    author: "Ankit Patel",
    price: 45,
    image: "./assets/products/img4.png",
  },
];

const galleryImages = [
  {
    src: "./assets/gallery/image1.jpg",
    alt: "Thumbnail Image 1",
  },
  {
    src: "./assets/gallery/image2.jpg",
    alt: "Thumbnail Image 2",
  },
  {
    src: "./assets/gallery/image3.jpg",
    alt: "Thumbnail Image 3",
  },
];

/*for (img in galleryImages) {
  console.log(img);
}*/

let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");

mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;

galleryImages.forEach(function (image, index) {
  let thumb = document.createElement("img");
  thumb.src = image.src;
  thumb.alt = image.alt;
  thumb.dataset.arrayIndex = index;
  thumb.dataset.selected = index === 0 ? true : false;

  thumb.addEventListener("click", function (e) {
    let selectedIndex = e.target.dataset.arrayIndex;
    let selectedImage = galleryImages[selectedIndex];
    mainImage.src = selectedImage.src;
    mainImage.alt = selectedImage.alt;

    thumbnails.querySelectorAll("img").forEach(function (img) {
      img.dataset.selected = false;
    });
    e.target.dataset.selected = true;
  });

  /*if (index === 0) {
    thumb.dataset.selected = true;
  } else thumb.dataset.selected = false;*/

  thumbnails.appendChild(thumb);
});

// Product Section
/*<div class="product-item">
  <img src="./assets/products/img6.png" alt="AstroFiction" />
  <div class="product-details">
    <h3 class="product-title">AstroFiction</h3>
    <p class="product-author">John Doe</p>
    <p class="price-title">Price</p>
    <p class="product-price">$ 49.90</p>
  </div>
</div>;
*/

function productsHandler() {
  let productsSection = document.querySelector(".products-area");

  // Run a loop through the products and create an HTML element ("product-item") for each of them
  products.forEach(function (product, index) {
    // Create the HTML element for the individual product
    let productElm = document.createElement("div");
    productElm.classList.add("product-item");

    // Create the product image
    let productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = "Image for " + product.title;

    // Add all child HTML elements of the product
    productElm.append(productImage);

    // Add complete individual product to the product section
    productsSection.append(productElm);
  });
}

productsHandler();
