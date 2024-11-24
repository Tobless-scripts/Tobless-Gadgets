document.getElementById('dropdown').addEventListener('click', function () {
    document.querySelector('.nav-bar').classList.toggle('active');
});

const images = document.querySelectorAll('.serImg');
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        images.forEach(img => img.classList.remove('rotated'));
        image.classList.add('rotated');
    });

    image.addEventListener('mouseout', () => {
        image.classList.remove('rotated');
    });
});

let currentSlide = 0; 
const slides = document.querySelectorAll('.slide-container .div');

function showSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));

  slides[currentSlide].classList.add('active');

  currentSlide = (currentSlide + 1) % slides.length; 
}

setInterval(showSlide, 6500);

showSlide();


const targetDate = new Date("2024-11-31T24:00:00").getTime();

let updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const formattedDays = String(days).padStart(2, "0");
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    document.getElementById("days").querySelector("span").innerText = formattedDays;
    document.getElementById("hours").querySelector("span").innerText = formattedHours;
    document.getElementById("minutes").querySelector("span").innerText = formattedMinutes;
    document.getElementById("seconds").querySelector("span").innerText = formattedSeconds;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        document.querySelector('.countdown').innerHTML = "<h2>Countdown Ended</h2>";
    }
}

const timerInterval = setInterval(updateCountdown, 1000);



window.onscroll = function () {
    var header = document.getElementById('header');
    if (window.scrollY > 15) { 
        header.classList.add('sticky'); 
    } else {
        header.classList.remove('sticky'); 
    }
    
    
    let img = document.querySelector('.static'); 
    if (window.scrollY > 0) { 
        img.classList.add('sticky2'); 
    } else {
        img.classList.remove('sticky2'); 
    }





    const scrollToTop = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 500  || document.documentElement.scrollTop > 500 ) {
        scrollToTop.style.display = 'block'
    }
};

let scrollToTop = () => {
    window.scrollTo( {
        top: 0,
        behavior: "smooth"
    } );
};

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) => 
        item.classList.remove('active'));
        this.classList.add('active');
}
list.forEach((item) => 
item.addEventListener('click',activeLink));

let lastScrollY = window.scrollY;
const head = document.querySelector('.head');

window.addEventListener('scroll', () => {
    if (window.screenY > lastScrollY) {
        head.classList.add("hidden")
    } else {
        head.classList.remove("hidden")
    }
    lastScrollY = window.screenY;
});

const cartIcon = document.getElementById("cart");
const cartContainer = document.getElementById("cart-container");

cartIcon.addEventListener('click', () => {
    cartContainer.style.display = (cartContainer.style.display === 'block') ? 'none' : 'block';
});

const removeCart = document.querySelector('.exit-cart');
if (removeCart) {
    removeCart.addEventListener('click', () => {
        cartContainer.style.display = 'none';
    });
}

const cartIcon2 = document.getElementById("cart2");
const cartContainer2 = document.getElementById("cart-container");

cartIcon2.addEventListener('click', () => {
    cartContainer2.style.display = (cartContainer2.style.display === 'block') ? 'none' : 'block';
});

const removeCart2 = document.querySelector('.exit-cart');
if (removeCart2) {
    removeCart2.addEventListener('click', () => {
        cartContainer2.style.display = 'none';
    });
}


let increaseButtons = document.querySelectorAll(".add");
let decreaseButtons = document.querySelectorAll(".remove");
let textElements = document.querySelectorAll(".dis");

increaseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let count = parseInt(textElements[index].innerHTML);
        count++
        textElements[index].innerHTML = count
    })
})

decreaseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let count = parseInt(textElements[index].innerHTML);

        if (count > 1) {
            count--;
            textElements[index].innerHTML = count
        }
    })
})

const img = document.querySelectorAll('.image3'); 
const selectedImage = document.querySelectorAll('.btn6'); 
const cartContent = document.getElementById("cart-content");

let showAlert = false;

selectedImage.forEach((button, index) => {
    button.addEventListener('click', () => {
        const selectedImg = img[index]; 

        const imageName = selectedImg.getAttribute('data-name');

        const imagePrice = selectedImg.getAttribute('data-price');

        const newPrice = parseFloat(imagePrice.slice(1));

        const cartChild = document.createElement('div');

        cartChild.classList.add('cart-child');

        const cartNum = document.createElement('div');

        cartNum.classList.add('cart-num');

        const productName = document.createElement('p');

        productName.innerHTML = imageName; 

        const productQuantity = document.createElement('p')

        productQuantity.innerHTML = "Quantity: " + textElements[index].innerHTML;

        const quantity = parseInt(textElements[index].innerHTML);

        const totalPrice = newPrice * quantity;

        const objectPrice = totalPrice.toFixed(2)

        const productPrice = document.createElement('p');

        productPrice.classList.add('product-price');
        productPrice.innerHTML = objectPrice;

        const cartP = document.createElement('p');
        cartP.classList.add('cart-p');

        const removeItem = document.createElement('button');
        removeItem.classList.add('remove-item');
        removeItem.textContent = "Remove";
        
        removeItem.addEventListener('click', () => {
            cartChild.remove();
            const productPrices = document.querySelectorAll('.product-price');
            let cartCalc = [];
            productPrices.forEach((priceElement) => {
                let price = parseFloat(priceElement.innerHTML);
                if (!isNaN(price)) {
                    cartCalc.push(price);
                }
            });

            let finalCalculation = cartCalc.reduce((current, sum) => current + sum, 0);

            const cartTotal = document.getElementById("cart-total");
            cartTotal.innerHTML = "$" + finalCalculation.toFixed(2);

            document.getElementById("total-btn").textContent = "Checkout $" + finalCalculation.toFixed(2);
        });

        const clonedImage = selectedImg.cloneNode(true);

        cartChild.appendChild(clonedImage);
        cartP.appendChild(removeItem);
        cartP.appendChild(productQuantity);
        cartP.appendChild(productPrice);
        cartP.appendChild(productName);
        cartChild.appendChild(cartP);
        cartContent.appendChild(cartChild);

        const productPrices = document.querySelectorAll('.product-price');

        let cartCalc = [];
        productPrices.forEach((priceElement) => {
            let price = parseFloat(priceElement.innerHTML);
            if (!isNaN(price)) {
                cartCalc.push(price);
            }
        });

        let finalCalculation = cartCalc.reduce((current, sum) => current + sum, 0);

        const cartTotal = document.getElementById("cart-total");

        const btnCheckout = cartTotal.innerHTML = "$" + finalCalculation.toFixed(2);
        
        document.getElementById("total-btn").textContent = "Checkout " + btnCheckout;

        const cartAdded = document.querySelector('.cart-alert');
        if (!showAlert) {
            showAlert = true;
            cartAdded.style.display = "flex";
            setTimeout(() => {
                cartAdded.style.display = "none";
                showAlert = false; 
            }, 1500);
        }
    });
});

const cartScroll = document.getElementById('cart-container');

cartScroll.addEventListener('scroll', () => {
    var cancel = document.getElementById('exit');
    if (cartScroll.scrollTop > 5) { 
        cancel.classList.add('sticky'); 
    } else {
        cancel.classList.remove('sticky'); 
    }
});



let wishes = document.querySelectorAll('.wish');

wishes.forEach(function(wish) {
    wish.addEventListener('click', function() {
        if (wish.src.includes('redHeart.png')) {
            wish.src = 'wishlist.png'; 
        } else {
            wish.src = 'redHeart.png'; 
        }
    });
});




