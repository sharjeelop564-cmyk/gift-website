let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

/* CATEGORY FILTER */
function filterGifts(category) {
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        if (category === "all") {
            cards[i].style.display = "block";
        } else if (cards[i].classList.contains(category)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

/* ADD TO CART */
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart!");
}

/* UPDATE CART COUNT */
function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

/* OPEN CART */
function openCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty</p>";
    } else {
        cart.forEach((item, index) => {
            cartItems.innerHTML += `
                <p>
                    ${item.name} - Rs.${item.price}
                    <button onclick="removeItem(${index})">❌</button>
                </p>
            `;
        });
    }

    document.getElementById("cart-modal").style.display = "block";
}

/* CLOSE CART */
function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

/* REMOVE ITEM */
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    openCart();
}