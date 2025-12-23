// Products Database
const products = [
  null, // index 0 placeholder
  {
    id: 1,
    name: "Vapor Pro Elite",
    price: 8999,
    desc: "Ultra-light carbon-plate racing shoe with ZoomX foam for maximum energy return and speed.",
    images: [
      "https://www.runningshoesguru.com/wp-content/uploads/2023/05/Nike-ZoomX-Vaporfly-3-16-1-900x620.jpeg",
      "https://cdn.runrepeat.com/storage/gallery/post/28949/foam-guide-hero-19679534-main.jpg",
      "https://media.about.nike.com/image-downloads/d436e535-3c11-4c54-a798-249accc1f071/rg11hh-p01-fa24-rtp-nike-electric-nouveau-sport-product-superiority-ta-oly-hero-pack-v1-r2.jpg"
    ]
  },
  {
    id: 2,
    name: "Nitro Elite Runner",
    price: 7499,
    desc: "High-performance daily trainer with nitrogen-infused foam for responsive cushioning.",
    images: [
      "https://www.runningshoesguru.com/wp-content/uploads/2025/05/PUMA-Fast-R-Nitro-Elite-3-16-900x620.jpeg",
      "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?fm=jpg&q=60&w=3000",
      "https://www.runningshoesguru.com/wp-content/uploads/2023/05/Nike-ZoomX-Vaporfly-3-16-1-900x620.jpeg"
    ]
  },
  {
    id: 3,
    name: "Electric Sport X",
    price: 9299,
    desc: "Bold limited-edition sport shoe with electric red accents and premium materials.",
    images: [
      "https://media.about.nike.com/image-downloads/d436e535-3c11-4c54-a798-249accc1f071/rg11hh-p01-fa24-rtp-nike-electric-nouveau-sport-product-superiority-ta-oly-hero-pack-v1-r2.jpg",
      "https://i.ebayimg.com/images/g/1aYAAOSwCNNnNOZy/s-l1200.jpg",
      "https://images.soleretriever.com/blog/6e08e795008d833f8fc8fa0585fde027597abab3-1070x760.png"
    ]
  },
  {
    id: 4,
    name: "Shadow Casual",
    price: 5999,
    desc: "Minimalist black-white sneaker perfect for everyday style and comfort.",
    images: [
      "https://m.media-amazon.com/images/I/71dBbBndCzL._AC_UY900_.jpg",
      "https://skolyx.centracdn.net/client/dynamic/images/1974_479f5b508c-img_7225-kopiera-full.jpg",
      "https://www.justmenshoes.com/cdn/shop/files/sneakers-mazino-805_78258bd3-a956-496d-b024-468b4f77f164.jpg?v=1739553607"
    ]
  },
  {
    id: 5,
    name: "GAT Premium Sneaker",
    price: 6799,
    desc: "Classic German Army Trainer design in premium leather – timeless and versatile.",
    images: [
      "https://skolyx.centracdn.net/client/dynamic/images/1974_479f5b508c-img_7225-kopiera-full.jpg",
      "https://m.media-amazon.com/images/I/71dBbBndCzL._AC_UY900_.jpg",
      "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/l/27/0be20b70-99a4-49cb-b8ac-a7ffbf91ed25.jpg"
    ]
  },
  {
    id: 6,
    name: "Kriss Red Accent",
    price: 12999,
    desc: "Luxury Italian mid-top sneaker with glossy red patent leather details.",
    images: [
      "https://i.ebayimg.com/images/g/x3oAAOSwlIBkut8m/s-l1200.jpg",
      "https://images.soleretriever.com/blog/84d26fb4d3fb7d4e7e8a6bbdb5e58f3a5bc8f71e-1070x760.png",
      "https://i.ebayimg.com/images/g/1aYAAOSwCNNnNOZy/s-l1200.jpg"
    ]
  },
  {
    id: 7,
    name: "Chairman Black Oxford",
    price: 10999,
    desc: "Handcrafted premium black leather dress shoe for formal elegance.",
    images: [
      "https://thursdayboots.com/cdn/shop/files/1024x813-Men-Chairman-Black-230612_800x720.jpg?v=1686585662",
      "https://m.media-amazon.com/images/I/611ifqbICwL._AC_UY900_.jpg",
      "https://www.dhresource.com/webp/m/0x0/f2/albu/g5/M00/A1/33/rBVaI1jsNUeAcGyUAABEKitnBhE083.jpg"
    ]
  },
  {
    id: 8,
    name: "Cloud Nova Flame",
    price: 8499,
    desc: "Innovative cloud cushioning with flame red highlights for ultimate comfort.",
    images: [
      "https://i.ebayimg.com/images/g/1aYAAOSwCNNnNOZy/s-l1200.jpg",
      "https://images.soleretriever.com/blog/6e08e795008d833f8fc8fa0585fde027597abab3-1070x760.png",
      "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?fm=jpg&q=60&w=3000"
    ]
  }
];

// === CART & NOTIFICATION (same as before) ===
// ... (keep your full improved cart code here) ...

// === DYNAMIC PRODUCT PAGE ===
document.addEventListener("DOMContentLoaded", () => {
  loadCart();

  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  const product = products[productId];

  if (product && window.location.pathname.includes('product.html')) {
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = '₹' + product.price.toLocaleString();
    document.getElementById('productDesc').textContent = product.desc;

    const mainImg = document.getElementById('mainImage');
    const thumbs = document.getElementById('thumbnails');
    mainImg.src = product.images[0];
    mainImg.alt = product.name;

    product.images.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.onclick = () => {
        mainImg.src = src;
        document.querySelectorAll('#thumbnails img').forEach(t => t.classList.remove('active'));
        img.classList.add('active');
      };
      if (i === 0) img.classList.add('active');
      thumbs.appendChild(img);
    });

    document.getElementById('addCartBtn').onclick = () => {
      const qty = parseInt(document.getElementById('qty').value) || 1;
      addToCart(product.name, product.price, product.images[0], product.id);
      showNotification(`Added ${qty} × ${product.name} to cart!`);
    };
  }

  // Auth forms (keep your existing code)
});

let cart = [];

function loadCart() {
  try {
    const saved = localStorage.getItem("vegahCart");
    cart = saved ? JSON.parse(saved) : [];
  } catch (e) {
    cart = [];
  }
  updateCartCount();
}

function saveCart() {
  localStorage.setItem("vegahCart", JSON.stringify(cart));
}

function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (el) el.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

function addToCart(name, price, image = "", id = null) {
  const existing = cart.find(item => item.id === id || item.name === name);
  if (existing) {
    existing.qty += parseInt(document.getElementById("qty")?.value || 1);
  } else {
    cart.push({
      id: id || Date.now(),
      name,
      price,
      image,
      qty: parseInt(document.getElementById("qty")?.value || 1)
    });
  }
  saveCart();
  updateCartCount();
  showNotification(`${name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartCount();
  if (window.location.pathname.includes("cart.html")) renderCart();
}

function showNotification(msg) {
  const existing = document.querySelector(".toast-notification");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.innerHTML = `
    ${msg}<br>
    <a href="cart.html" style="color:white; text-decoration:underline; margin-top:8px; display:inline-block;">View Cart</a>
  `;
  toast.style.cssText = `
    position:fixed; bottom:20px; right:20px; background:#000; color:white;
    padding:16px 24px; border-radius:50px; box-shadow:0 10px 30px rgba(0,0,0,0.2);
    z-index:10000; animation:slideIn 0.4s ease; font-weight:500; text-align:center;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

function renderCart() {
  const container = document.getElementById("cartItems");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `<div class="empty-cart"><h2>Your cart is empty</h2><p>Add some premium shoes to get started!</p><a href="index.html" class="btn primary" style="margin-top:1rem;">Shop Now</a></div>`;
    document.getElementById("subtotal").textContent = "₹0";
    document.getElementById("total").textContent = "₹0";
    return;
  }

  let html = "";
  let subtotal = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    html += `
      <div class="cart-item">
        <img src="${item.image || 'https://via.placeholder.com/100'}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p class="price">₹${item.price.toLocaleString()}</p>
          <p>Qty: ${item.qty}</p>
        </div>
        <div style="text-align:center; font-weight:600;">₹${itemTotal.toLocaleString()}</div>
        <div></div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})" aria-label="Remove">×</button>
      </div>
    `;
  });

  container.innerHTML = html;
  document.getElementById("subtotal").textContent = "₹" + subtotal.toLocaleString();
  document.getElementById("total").textContent = "₹" + subtotal.toLocaleString();
}

// Load on every page
document.addEventListener("DOMContentLoaded", () => {
  loadCart();

  // Render cart page if we're on it
  if (window.location.pathname.includes("cart.html")) {
    renderCart();
  }

  // Auth forms remain the same (keep your existing code below if needed)
});