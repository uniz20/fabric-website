const products = [
  {
    id: "cotton-poplin-white",
    category: "cotton",
    name: "Cotton Poplin White",
    cn: "白色全棉府绸",
    price: "$1.35 - $2.60/m",
    stock: "18,500m",
    width: "57/58 inch",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "poly-satin-black",
    category: "polyester",
    name: "Polyester Satin Black",
    cn: "黑色色丁",
    price: "$0.95 - $1.80/m",
    stock: "32,000m",
    width: "58/60 inch",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "linen-blend-natural",
    category: "linen",
    name: "Linen Blend Natural",
    cn: "本色棉麻混纺",
    price: "$2.80 - $4.70/m",
    stock: "7,600m",
    width: "55/56 inch",
    image: "https://images.unsplash.com/photo-1598368195835-91e67f80c9d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "rib-knit-grey",
    category: "knit",
    name: "Rib Knit Grey Melange",
    cn: "灰色罗纹针织",
    price: "$3.40 - $5.90/kg",
    stock: "4,200kg",
    width: "Tubular",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cotton-canvas-khaki",
    category: "cotton",
    name: "Cotton Canvas Khaki",
    cn: "卡其全棉帆布",
    price: "$2.10 - $3.80/m",
    stock: "9,800m",
    width: "57/58 inch",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "poly-taffeta-navy",
    category: "polyester",
    name: "Poly Taffeta Navy",
    cn: "藏青涤塔夫",
    price: "$0.75 - $1.45/m",
    stock: "46,000m",
    width: "58/60 inch",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
  },
];

const productGrid = document.querySelector("#productGrid");
const cartItems = document.querySelector("#cartItems");
const clearCart = document.querySelector("#clearCart");
const filterButtons = document.querySelectorAll(".filter-btn");
let cart = [];

function renderProducts(filter = "all") {
  const visibleProducts = filter === "all" ? products : products.filter((product) => product.category === filter);

  productGrid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card">
          <img src="${product.image}" alt="${product.name}" />
          <div class="product-card-body">
            <h3>${product.name}</h3>
            <p>${product.cn}</p>
            <div class="product-meta">
              <span>Price <strong>${product.price}</strong></span>
              <span>Stock <strong>${product.stock}</strong></span>
              <span>Width <strong>${product.width}</strong></span>
            </div>
            <button class="btn primary" data-add="${product.id}">加入询价车</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">还没有选择面料。可以从库存列表加入询价车。</p>';
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (product) => `
        <div class="cart-item">
          <div>
            <strong>${product.name}</strong>
            <span>${product.cn} · ${product.stock} · ${product.price}</span>
          </div>
          <button class="link-btn" data-remove="${product.id}">Remove</button>
        </div>
      `
    )
    .join("");
}

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  const product = products.find((item) => item.id === button.dataset.add);
  if (!product || cart.some((item) => item.id === product.id)) return;

  cart.push(product);
  renderCart();
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;

  cart = cart.filter((item) => item.id !== button.dataset.remove);
  renderCart();
});

clearCart.addEventListener("click", () => {
  cart = [];
  renderCart();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

renderProducts();
renderCart();
