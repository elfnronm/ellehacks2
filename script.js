document.getElementById("linktoabout").addEventListener("click", function() {
    console.log("About link clicked"); // Check if the event listener is triggered

    window.location.href = "about.html"; // Yeni sayfaya yönlendirme
});




// JavaScript dosyası

// Her bir meyve kutusunu temsil eden bir dizi oluşturun
const fruits = [
    { name: "Apple", image: "images/apple.jpg", link: "apple.html" },
    { name: "Banana", image: "images/banana.jpg", link: "banana.html" },
    { name: "Mango", image: "images/mango.jpg", link: "mango.html" }
    // Diğer meyveleri buraya ekleyebilirsiniz
];

// Meyve kutularını oluşturup HTML içine yerleştirme işlemini gerçekleştiren fonksiyon
function createFruitBoxes() {
    const container = document.querySelector(".fruit-container");

    // Her bir meyve için döngü oluşturun
    fruits.forEach((fruit) => {
        // Meyve kutusu elementini oluşturun
        const fruitBox = document.createElement("div");
        fruitBox.classList.add("fruit-item");

        // Meyve ismini içeren başlık elementini oluşturun
        const heading = document.createElement("h2");
        heading.textContent = fruit.name;

        // Resim içeren div elementini oluşturun
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("fruit-image");
        imageDiv.style.backgroundImage = `url(${fruit.image})`;

        // Meyve kutusunu tıklandığında yönlendirme işlemi
        fruitBox.addEventListener("click", () => {
            window.location.href = fruit.link;
        });

        // Başlık ve resmi meyve kutusu içine yerleştirin
        fruitBox.appendChild(heading);
        fruitBox.appendChild(imageDiv);

        // Meyve kutusunu ana konteynere ekleyin
        container.appendChild(fruitBox);
    });
}

// Sayfa yüklendiğinde meyve kutularını oluşturun
document.addEventListener("DOMContentLoaded", createFruitBoxes);




const vegetables = [
    { name: "Onion", image: "images/onion.jpg", link: "onion.html" },
    { name: "Carrot", image: "images/carrot.jpg", link: "carrot.html" },
    { name: "Cabbage", image: "images/cabbage.jpg", link: "cabbage.html" },
    { name: "Eggplant", image: "images/eggplant.jpg", link: "eggplant.html" },
    { name: "Tomato", image: "images/tomato.jpg", link: "tomato.html" },
    { name: "Potato", image: "images/potato.jpg", link: "potato.html" }
    // Add other vegetables here
];

// Sebze kutularını oluşturup HTML içine yerleştirme işlemini gerçekleştiren fonksiyon
function createVegetableBoxes() {
    const container = document.querySelector(".vegetable-container");

    // Her bir sebze için döngü oluşturun
    vegetables.forEach((vegetable) => {
        // Sebze kutusu elementini oluşturun
        const vegetableBox = document.createElement("div");
        vegetableBox.classList.add("vegetable-item");

        // Sebze ismini içeren başlık elementini oluşturun
        const heading = document.createElement("h2");
        heading.textContent = vegetable.name;

        // Resim içeren div elementini oluşturun
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("vegetable-image");
        imageDiv.style.backgroundImage = `url(${vegetable.image})`;

        // Sebze kutusunu tıklandığında yönlendirme işlemi
        vegetableBox.addEventListener("click", () => {
            window.location.href = vegetable.link;
        });

        // Başlık ve resmi sebze kutusu içine yerleştirin
        vegetableBox.appendChild(heading);
        vegetableBox.appendChild(imageDiv);

        // Sebze kutusunu ana konteynere ekleyin
        container.appendChild(vegetableBox);
    });
}

// Sayfa yüklendiğinde sebze kutularını oluşturun
document.addEventListener("DOMContentLoaded", createVegetableBoxes);



// JavaScript code to toggle sidebar width and header font size
document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const sidebarHeader = document.getElementById("sidebarHeader");

    sidebar.addEventListener("click", function() {
        sidebar.classList.toggle("expanded");
        sidebarHeader.classList.toggle("expanded");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const scrollDownButton = document.querySelector(".scroll-down");
    scrollDownButton.addEventListener("click", function() {
        window.scrollTo({
            top: scrollDownButton.nextElementSibling.offsetTop,
            behavior: "smooth"
        });
    });
});


const images = [
    "images/tree.jpg",
    "images/tree2.jpg",
    "images/tree3.jpg"
    // Add more images if needed
];

const mainImage = document.querySelector("#main-image");
let index = 0;

function changeImage() {
    mainImage.src = images[index];
    index = (index + 1) % images.length;
}

setInterval(changeImage, 3000); // Change image every 3 seconds