

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

let cartContent = document.querySelector('.cart-content');
document.querySelector('#cart').onclick = () => {
    cartContent.classList.toggle('active');
}
document.querySelector('#close-cart-content').onclick = () => {
    cartContent.classList.remove('active');
}

let cart = [];

function addToCart(id, name, price) {
    let item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    let cartItems = document.querySelector('#cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        let li = document.createElement('li');
        li.innerHTML = `${item.name} - RM ${item.price.toFixed(2)} x ${item.quantity} 
                        <button class="remove-button" onclick="removeFromCart(${item.id})">Remove</button>`;
        cartItems.appendChild(li);
    });

    document.querySelector('#cart-total').innerText = total.toFixed(2);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

const purchaseButton = document.getElementById('purchase-btn');

// Add event listener to the purchase button
purchaseButton.addEventListener('click', function() {
    // Trigger an alert when the purchase button is clicked
    alert('Purchase complete! Thank you for shopping with us.');
});
       

       
       

