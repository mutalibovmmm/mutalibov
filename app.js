/**
 * APPLE STORE ANDIJAN - Main Application Script
 * Fully Interactive Vanilla JS E-commerce Engine
 */

// Comprehensive Product Database with Authentic Apple CDN Images & Color Variants
const products = [
    {
        id: "iphone-17-pro-max",
        name: "iPhone 17 Pro Max",
        category: "iPhone",
        tag: "Yangi Flagman",
        condition: "Yangi",
        warranty: "1 yil rasmiy kafolat",
        desc: "A19 Pro chip, 48MP uchlik kamera tizimi va Titanium korpus.",
        basePrice: 17500000,
        storages: ["256GB", "512GB", "1TB"],
        colors: [
            { name: "Cosmic Orange", hex: "#d96b33", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1723186419515" },
            { name: "Natural Titanium", hex: "#b8b3a8", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1723186419515" },
            { name: "Space Black", hex: "#3b3b3d", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1723186419515" }
        ],
        specs: {
            display: "6.9\" Super Retina XDR OLED",
            processor: "Apple A19 Pro (3nm)",
            camera: "48MP Main + 48MP Ultra Wide + 48MP Telephoto",
            battery: "G'aroyib chidamlilik (33 soatgacha video)"
        }
    },
    {
        id: "iphone-16-pro",
        name: "iPhone 16 Pro",
        category: "iPhone",
        tag: "Ommabop",
        condition: "Yangi",
        warranty: "1 yil rasmiy kafolat",
        desc: "Pro kamera imkoniyatlari, Action tugma va Apple Intelligence.",
        basePrice: 14200000,
        storages: ["128GB", "256GB", "512GB"],
        colors: [
            { name: "Desert Titanium", hex: "#c5b59b", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1723186419515" },
            { name: "White Titanium", hex: "#e3e4e5", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-whitetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1723186419515" },
            { name: "Black Titanium", hex: "#3b3b3d", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1723186419515" }
        ],
        specs: {
            display: "6.3\" Super Retina XDR ProMotion",
            processor: "Apple A18 Pro",
            camera: "48MP Fusion + 12MP Ultra Wide",
            battery: "27 soatgacha video ijrosi"
        }
    },
    {
        id: "iphone-16",
        name: "iPhone 16",
        category: "iPhone",
        tag: "Yangi",
        condition: "Yangi",
        warranty: "1 yil rasmiy kafolat",
        desc: "Camera Control tugmasi, yangi ranglar va A18 tezkor protsessori.",
        basePrice: 11500000,
        storages: ["128GB", "256GB", "512GB"],
        colors: [
            { name: "Ultramarine", hex: "#3a5198", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR104W0XP9vfeFSXYA9IubAyW1R1a04l1_UDpShsRVSAQ&s=10" },
            { name: "Teal", hex: "#63847e", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR104W0XP9vfeFSXYA9IubAyW1R1a04l1_UDpShsRVSAQ&s=10" },
            { name: "Pink", hex: "#e5b4b3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR104W0XP9vfeFSXYA9IubAyW1R1a04l1_UDpShsRVSAQ&s=10" }
        ],
        specs: {
            display: "6.1\" Super Retina XDR OLED",
            processor: "Apple A18 (3nm)",
            camera: "48MP Fusion + 12MP Ultra Wide",
            battery: "22 soatgacha video ijrosi"
        }
    },
    {
        id: "iphone-15-pro-max",
        name: "iPhone 15 Pro Max",
        category: "iPhone",
        tag: "Chegirma",
        condition: "Yangi",
        warranty: "1 yil rasmiy kafolat",
        desc: "Titanium dizayn, 5x optik zoom va USB-C porti.",
        basePrice: 14800000,
        storages: ["256GB", "512GB", "1TB"],
        colors: [
            { name: "Natural Titanium", hex: "#b8b3a8", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693011115112" },
            { name: "Blue Titanium", hex: "#3b4754", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693011115110" }
        ],
        specs: {
            display: "6.7\" Super Retina XDR OLED",
            processor: "Apple A17 Pro",
            camera: "48MP Main + 12MP Telephoto (5x)",
            battery: "29 soatgacha video"
        }
    },
    {
        id: "iphone-14-pro",
        name: "iPhone 14 Pro",
        category: "iPhone",
        tag: "Xit",
        condition: "Ideal (Ishlatilgan)",
        warranty: "6 oy kafolat",
        desc: "Dynamic Island, Always-On displey va 48MP asosiy kamera.",
        basePrice: 9800000,
        storages: ["128GB", "256GB"],
        colors: [
            { name: "Deep Purple", hex: "#4b4353", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617522" },
            { name: "Space Black", hex: "#3b3b3d", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617549" }
        ],
        specs: {
            display: "6.1\" Super Retina XDR ProMotion",
            processor: "Apple A16 Bionic",
            camera: "48MP Main + 12MP Ultra Wide",
            battery: "23 soatgacha video"
        }
    },
    {
        id: "macbook-pro-m3",
        name: "MacBook Pro 16\" M3 Max",
        category: "MacBook",
        tag: "Super Kuch",
        condition: "Yangi",
        warranty: "1 yil rasmiy kafolat",
        desc: "Professional darajadagi ishlar uchun eng kuchli noutbuk.",
        basePrice: 28500000,
        storages: ["512GB", "1TB", "2TB"],
        colors: [
            { name: "Space Black", hex: "#2e2f34", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697334138144" },
            { name: "Silver", hex: "#e3e4e5", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697334138139" }
        ],
        specs: {
            display: "16.2\" Liquid Retina XDR",
            processor: "Apple M3 Max chip",
            camera: "1080p FaceTime HD",
            battery: "22 soatgacha batareya quvvati"
        }
    },
    {
        id: "ipad-air-m2",
        name: "iPad Air 13\" (M2)",
        category: "iPad",
        tag: "Yangi",
        condition: "Yangi",
        warranty: "1 yil rasmiy kafolat",
        desc: "Tezkor M2 chip va ajoyib Liquid Retina displey.",
        basePrice: 9200000,
        storages: ["128GB", "256GB", "512GB"],
        colors: [
            { name: "Space Gray", hex: "#7d7e82", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76RSfFkp-JjdZE2AfvmDVZS6zJyJcyQhEUP8tLjubnA&s=10" },
            { name: "Starlight", hex: "#faf6ef", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76RSfFkp-JjdZE2AfvmDVZS6zJyJcyQhEUP8tLjubnA&s=10" }
        ],
        specs: {
            display: "13\" Liquid Retina",
            processor: "Apple M2",
            camera: "12MP Wide back camera",
            battery: "10 soatgacha internet"
        }
    },
    {
        id: "apple-watch-s10",
        name: "Apple Watch Series 10",
        category: "Watch",
        tag: "Eng Yupqa",
        condition: "Yangi",
        warranty: "1 yil rasmiy kafolat",
        desc: "Kattaroq ekran va sog'likni monitoring qilishning yangi imkoniyatlari.",
        basePrice: 5400000,
        storages: ["42mm", "46mm"],
        colors: [
            { name: "Jet Black", hex: "#1c1c1e", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-cBeR3yhkTEIV2rX-z8qYc9KG75aiDJR812brxtmwg&s=10" },
            { name: "Rose Gold", hex: "#e8c5bc", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-cBeR3yhkTEIV2rX-z8qYc9KG75aiDJR812brxtmwg&s=10" }
        ],
        specs: {
            display: "Wide-angle OLED",
            processor: "Apple S10 SiP",
            sensors: "EKG, Yurak urishi, Kislorod, Harorat",
            battery: "18 soat normal foydalanish"
        }
    },
    {
        id: "airpods-pro-2",
        name: "AirPods Pro (2-avlod)",
        category: "AirPods",
        tag: "Bestseller",
        condition: "Yangi",
        warranty: "1 yil rasmiy kafolat",
        desc: "Faol shovqinni yo'qotish (ANC) va fazoviy audio.",
        basePrice: 2950000,
        storages: ["MagSafe (USB-C)"],
        colors: [
            { name: "White", hex: "#ffffff", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803972361" }
        ],
        specs: {
            audio: "H2 chip, Adaptive Audio",
            battery: "6 soatgacha tinglash (quti bilan 30 soat)",
            resistance: "IP54 chang va suvdan himoya"
        }
    }
];

// Application State
let cart = JSON.parse(localStorage.getItem('apple_store_andijan_cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('apple_store_andijan_user')) || null;

// DOM Elements
const productGrid = document.getElementById('product-grid');
const cartCounter = document.getElementById('cart-counter');
const cartDrawer = document.getElementById('cart-drawer');
const cartBackdrop = document.getElementById('cart-backdrop');
const cartToggleBtn = document.getElementById('cart-toggle-btn');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotal = document.getElementById('cart-subtotal');
const proceedCheckoutBtn = document.getElementById('proceed-checkout-btn');

const searchOverlay = document.getElementById('search-overlay');
const searchToggleBtn = document.getElementById('search-toggle-btn');
const searchCloseBtn = document.getElementById('search-close-btn');
const globalSearchInput = document.getElementById('global-search-input');
const searchSuggestions = document.getElementById('search-suggestions');

const authModal = document.getElementById('auth-modal');
const authModalBtn = document.getElementById('auth-modal-btn');
const authCloseBtn = document.getElementById('auth-close-btn');
const authBtnText = document.getElementById('auth-btn-text');

const productModal = document.getElementById('product-modal');
const productDetailContent = document.getElementById('product-detail-content');

const checkoutModal = document.getElementById('checkout-modal');
const checkoutCloseBtn = document.getElementById('checkout-close-btn');
const checkoutForm = document.getElementById('checkout-form');
const chkItemsSummary = document.getElementById('chk-items-summary');
const chkGrandTotal = document.getElementById('chk-grand-total');

const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const categoryFilters = document.getElementById('category-filters');
const sortSelect = document.getElementById('sort-select');
const toastContainer = document.getElementById('toast-container');

// Format UZS currency
function formatUZS(amount) {
    return amount.toLocaleString('uz-UZ') + " so'm";
}

// Show Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Render Products Catalog
function renderProducts(itemsToRender) {
    if (!productGrid) return;
    productGrid.innerHTML = '';
    
    if (itemsToRender.length === 0) {
        productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">Hech qanday mahsulot topilmadi.</p>`;
        return;
    }

    itemsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const defaultColor = product.colors[0];
        
        card.innerHTML = `
            <span class="product-badge">${product.tag}</span>
            <div class="product-img-wrap">
                <img src="${defaultColor.img}" alt="${product.name}" class="product-img" id="img-${product.id}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-colors" id="colors-${product.id}">
                    ${product.colors.map((col, idx) => `
                        <span class="color-dot ${idx === 0 ? 'active' : ''}" style="background-color: ${col.hex}" data-product-id="${product.id}" data-color-index="${idx}" title="${col.name}"></span>
                    `).join('')}
                </div>
            </div>
            <div class="product-footer">
                <div class="product-price">${formatUZS(product.basePrice)}</div>
                <div class="product-actions">
                    <button class="btn-icon-action view-detail-btn" data-id="${product.id}" title="Batafsil"><i class="fa-solid fa-eye"></i></button>
                    <button class="btn-icon-action add-cart-btn" data-id="${product.id}" title="Savatchaga qo'shish"><i class="fa-solid fa-bag-shopping"></i></button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });

    attachProductCardListeners();
}

// Attach listeners for product cards
function attachProductCardListeners() {
    // Color dots switching
    document.querySelectorAll('.color-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            const prodId = dot.getAttribute('data-product-id');
            const colorIdx = parseInt(dot.getAttribute('data-color-index'));
            const product = products.find(p => p.id === prodId);
            if (!product) return;

            // update active state in dots
            const parent = document.getElementById(`colors-${prodId}`);
            parent.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
            dot.classList.add('active');

            // update image
            const imgEl = document.getElementById(`img-${prodId}`);
            if (imgEl) {
                imgEl.src = product.colors[colorIdx].img;
            }
        });
    });

    // View Details
    document.querySelectorAll('.view-detail-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const prodId = btn.getAttribute('data-id');
            openProductDetailModal(prodId);
        });
    });

    // Add to Cart
    document.querySelectorAll('.add-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const prodId = btn.getAttribute('data-id');
            const product = products.find(p => p.id === prodId);
            if (!product) return;

            // Find currently active color
            const colorDot = document.querySelector(`#colors-${prodId} .color-dot.active`);
            const colorIndex = colorDot ? parseInt(colorDot.getAttribute('data-color-index')) : 0;
            const selectedColor = product.colors[colorIndex];
            const selectedStorage = product.storages[0];

            addToCart(product, selectedColor, selectedStorage);
        });
    });
}

// Open Product Detail Modal
function openProductDetailModal(prodId) {
    const product = products.find(p => p.id === prodId);
    if (!product) return;

    let selectedColor = product.colors[0];
    let selectedStorage = product.storages[0];

    function updateModalView() {
        let calculatedPrice = product.basePrice;
        if (selectedStorage === '512GB') calculatedPrice += 1200000;
        if (selectedStorage === '1TB') calculatedPrice += 2800000;

        productDetailContent.innerHTML = `
            <button class="modal-close-btn" id="modal-internal-close"><i class="fa-solid fa-xmark"></i></button>
            <div class="detail-gallery">
                <div class="detail-main-img">
                    <img src="${selectedColor.img}" alt="${product.name}" id="detail-modal-img">
                </div>
            </div>
            <div class="detail-info">
                <span class="product-badge">${product.tag}</span>
                <h2>${product.name}</h2>
                <div class="detail-price" id="detail-modal-price">${formatUZS(calculatedPrice)}</div>
                <p>${product.desc}</p>
                
                <div class="detail-section-title">Xotira hajmi:</div>
                <div class="detail-storage-grid" id="modal-storage-grid">
                    ${product.storages.map(st => `
                        <button class="storage-btn ${st === selectedStorage ? 'active' : ''}" data-storage="${st}">${st}</button>
                    `).join('')}
                </div>

                <div class="detail-section-title">Rang: <span style="font-weight: 400; color: var(--text-secondary);">${selectedColor.name}</span></div>
                <div class="detail-color-grid" id="modal-color-grid">
                    ${product.colors.map((col, idx) => `
                        <button class="color-option-btn ${col.name === selectedColor.name ? 'active' : ''}" style="background-color: ${col.hex}" data-color-idx="${idx}" title="${col.name}"></button>
                    `).join('')}
                </div>

                <div class="detail-specs-list">
                    <div><strong>Displey:</strong> ${product.specs.display || product.specs.audio}</div>
                    <div><strong>Protsessor:</strong> ${product.specs.processor}</div>
                    <div><strong>Kafolat:</strong> ${product.warranty} (${product.condition})</div>
                </div>

                <button class="btn-primary full-width" id="modal-add-to-cart-btn" style="margin-top: 16px;">
                    <i class="fa-solid fa-bag-shopping"></i> Savatchaga qo'shish
                </button>
            </div>
        `;

        // Attach modal internal listeners
        document.getElementById('modal-internal-close').addEventListener('click', () => {
            productModal.classList.remove('active');
        });

        document.querySelectorAll('#modal-storage-grid .storage-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                selectedStorage = btn.getAttribute('data-storage');
                updateModalView();
            });
        });

        document.querySelectorAll('#modal-color-grid .color-option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-color-idx'));
                selectedColor = product.colors[idx];
                updateModalView();
            });
        });

        document.getElementById('modal-add-to-cart-btn').addEventListener('click', () => {
            addToCart(product, selectedColor, selectedStorage, calculatedPrice);
            productModal.classList.remove('active');
        });
    }

    updateModalView();
    productModal.classList.add('active');
}

// Cart Functions
function addToCart(product, color, storage, customPrice = null) {
    let price = customPrice || product.basePrice;
    if (storage === '512GB' && !customPrice) price += 1200000;
    if (storage === '1TB' && !customPrice) price += 2800000;

    const cartItemIndex = cart.findIndex(item => item.id === product.id && item.color === color.name && item.storage === storage);

    if (cartItemIndex > -1) {
        cart[i => i === cartItemIndex].quantity += 1;
        cart[cartItemIndex].quantity += 0; // standard increment
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            color: color.name,
            img: color.img,
            storage: storage,
            price: price,
            quantity: 1
        });
    }

    saveAndRenderCart();
    showToast(`"${product.name} (${storage}, ${color.name})" savatchaga qo'shildi!`);
}

function saveAndRenderCart() {
    localStorage.setItem('apple_store_andijan_cart', JSON.stringify(cart));
    
    // Update counter
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCounter.textContent = totalItems;

    // Render cart drawer items
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Savatchangiz hozircha bo'sh</p>
            </div>
        `;
        cartSubtotal.textContent = formatUZS(0);
        return;
    }

    let subtotal = 0;
    cartItemsContainer.innerHTML = cart.map((item, index) => {
        subtotal += item.price * item.quantity;
        return `
            <div class="cart-item-card">
                <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-meta">${item.storage} • ${item.color}</div>
                    <div class="cart-item-price">${formatUZS(item.price)}</div>
                    <div class="cart-item-controls">
                        <button onclick="updateQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
    }).join('');

    cartSubtotal.textContent = formatUZS(subtotal);
}

window.updateQuantity = function(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveAndRenderCart();
};

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    saveAndRenderCart();
    showToast("Mahsulot savatchadan o'chirildi.");
};

// Checkout & Order Flow
proceedCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast("Savatchangiz bo'sh. Avval mahsulot qo'shing.");
        return;
    }
    cartDrawer.classList.remove('active');
    cartBackdrop.classList.remove('active');

    // Populate checkout summary
    let total = 0;
    chkItemsSummary.innerHTML = cart.map(item => {
        total += item.price * item.quantity;
        return `
            <div class="chk-item-row">
                <span>${item.name} (${item.storage}) x ${item.quantity}</span>
                <span>${formatUZS(item.price * item.quantity)}</span>
            </div>
        `;
    }).join('');
    chkGrandTotal.textContent = formatUZS(total);

    checkoutModal.classList.add('active');
});

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('chk-name').value;
    const phone = document.getElementById('chk-phone').value;
    const address = document.getElementById('chk-address').value;

    const orderRef = "AAPL-" + Math.floor(100000 + Math.random() * 900000);
    
    // Save order locally
    const orders = JSON.parse(localStorage.getItem('apple_store_andijan_orders')) || [];
    orders.push({ ref: orderRef, name, phone, address, items: cart, date: new Date().toISOString() });
    localStorage.setItem('apple_store_andijan_orders', JSON.stringify(orders));

    cart = [];
    saveAndRenderCart();
    checkoutModal.classList.remove('active');

    showToast(`Buyurtmangiz muvaffaqiyatli qabul qilindi! Kod: ${orderRef}`);
    alert(`Rahmat, ${name}! Buyurtmangiz raqami: #${orderRef}\nTez orada operatorimiz siz bilan bog'lanadi.`);
});

// Search & Filter System
function filterAndSortProducts() {
    const activePill = document.querySelector('.filter-pill.active');
    const category = activePill ? activePill.getAttribute('data-filter') : 'all';
    const sortVal = sortSelect.value;

    let filtered = products.filter(p => {
        if (category === 'all') return true;
        return p.category === category;
    });

    if (sortVal === 'price-low') {
        filtered.sort((a, b) => a.basePrice - b.basePrice);
    } else if (sortVal === 'price-high') {
        filtered.sort((a, b) => b.basePrice - a.basePrice);
    } else if (sortVal === 'newest') {
        filtered.sort((a, b) => b.id.localeCompare(a.id));
    }

    renderProducts(filtered);
}

// Event Listeners Setup
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    saveAndRenderCart();

    // Navigation & Drawers
    cartToggleBtn.addEventListener('click', () => {
        cartDrawer.classList.add('active');
        cartBackdrop.classList.add('active');
    });

    cartCloseBtn.addEventListener('click', () => {
        cartDrawer.classList.remove('active');
        cartBackdrop.classList.remove('active');
    });

    cartBackdrop.addEventListener('click', () => {
        cartDrawer.classList.remove('active');
        cartBackdrop.classList.remove('active');
    });

    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Search Overlay
    searchToggleBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        globalSearchInput.focus();
    });

    searchCloseBtn.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });

    globalSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            searchSuggestions.innerHTML = '';
            return;
        }

        const matched = products.filter(p => p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query));
        searchSuggestions.innerHTML = matched.map(m => `
            <div class="suggestion-item" onclick="openProductDetailModal('${m.id}'); searchOverlay.classList.remove('active');">
                <img src="${m.colors[0].img}" alt="${m.name}">
                <div>
                    <h4 style="font-size: 15px; font-weight: 600;">${m.name}</h4>
                    <p style="font-size: 13px; color: var(--accent-color);">${formatUZS(m.basePrice)}</p>
                </div>
            </div>
        `).join('');
    });

    // Auth Modal
    authModalBtn.addEventListener('click', () => {
        authModal.classList.add('active');
    });

    authCloseBtn.addEventListener('click', () => {
        authModal.classList.remove('active');
    });

    document.querySelectorAll('.auth-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.auth-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`${btn.getAttribute('data-tab')}-form`).classList.add('active');
        });
    });

    // Password visibility toggle
    document.querySelectorAll('.toggle-pwd').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                btn.innerHTML = '<fa-regular class="fa-solid fa-eye-slash"></fa-regular>';
            } else {
                input.type = 'password';
                btn.innerHTML = '<fa-regular class="fa-regular fa-eye"></fa-regular>';
            }
        });
    });

    // Login Form Submit
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const identifier = document.getElementById('login-identifier').value;
        currentUser = { name: identifier };
        localStorage.setItem('apple_store_andijan_user', JSON.stringify(currentUser));
        authModal.classList.remove('active');
        authBtnText.textContent = identifier.split('@')[0];
        showToast("Tizimga muvaffaqiyatli kirdingiz!");
    });

    // Register Form Submit
    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-fullname').value;
        currentUser = { name };
        localStorage.setItem('apple_store_andijan_user', JSON.stringify(currentUser));
        authModal.classList.remove('active');
        authBtnText.textContent = name.split(' ')[0];
        showToast("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
    });

    // Category Filtering
    document.querySelectorAll('.filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            filterAndSortProducts();
        });
    });

    sortSelect.addEventListener('change', filterAndSortProducts);

    // Contact Form
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast("Xabaringiz qabul qilindi! Tez orada aloqaga chiqamiz.");
        e.target.reset();
    });

    // Newsletter Form
    document.getElementById('newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast("Obuna muvaffaqiyatli yakunlandi!");
        e.target.reset();
    });

    // Checkout Close
    checkoutCloseBtn.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            const wasActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!wasActive) item.classList.add('active');
        });
    });

    // Check saved user on load
    if (currentUser) {
        authBtnText.textContent = currentUser.name.split(' ')[0];
    }
});