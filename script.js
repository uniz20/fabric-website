const salesEmail = "sales@example.com";
const whatsappNumber = "8613800000000";

const translations = {
  en: {
    brandSub: "China Fabric Supplier",
    navProducts: "Products",
    navInventory: "Inventory",
    navPricing: "Pricing",
    navFreight: "Freight",
    navRfq: "RFQ",
    navContact: "Contact",
    whatsapp: "WhatsApp",
    heroEyebrow: "Professional China Fabric Supplier for Iraq & Middle East",
    heroTitle: "Reliable fabric sourcing, ready stock and export service for Middle East buyers.",
    heroCopy:
      "We supply knitted, woven and functional fabrics with stable quality, clear stock status, FOB/CIF reference prices and fast RFQ response for textile traders, garment factories and wholesale buyers.",
    browseProducts: "Browse Products",
    sendRfq: "Send RFQ",
    downloadCatalog: "Download PDF Catalog",
    quickQuote: "Quick Quote",
    quickQuoteCopy: "Sales team replies with fabric options, stock, MOQ, price and shipping advice.",
    yearsExport: "Years export experience",
    factoryArea: "Factory and warehouse area",
    monthlyCapacity: "Monthly fabric capacity",
    markets: "Export markets",
    companyEyebrow: "Company Strength",
    companyTitle: "Built for B2B fabric buyers who need speed, stock and dependable quality.",
    companyCopy:
      "From yarn selection and dyeing follow-up to warehouse packing and export documents, our team supports Middle East buyers with practical sourcing, sample service and shipment coordination.",
    factory: "Factory Production",
    factoryCopy: "Partner mills for dyeing, finishing, knitting and weaving with stable inspection flow.",
    warehouse: "Warehouse Capacity",
    warehouseCopy: "Ready stock and rolling inventory for fast sampling, consolidation and shipment.",
    export: "Export Operations",
    exportCopy: "FOB, CIF and mixed-container support for Iraq, GCC, Jordan, Turkey and nearby markets.",
    productsEyebrow: "Product Center",
    productsTitle: "Hot-selling fabrics for Iraq and Middle East markets",
    productsCopy: "Filter by category and review GSM, width, MOQ, stock status and tier price before sending RFQ.",
    all: "All",
    knitted: "Knitted",
    woven: "Woven",
    functional: "Functional",
    inventoryEyebrow: "Inventory Management",
    inventoryTitle: "Ready stock, production stock and shippable stock",
    inventoryCopy: "Use filters to match color, GSM and available quantity for quick Middle East shipments.",
    filterColor: "Color",
    filterGsm: "GSM",
    filterQty: "Minimum Stock",
    reset: "Reset",
    tableProduct: "Product",
    tableColor: "Color",
    tableGsm: "GSM",
    tableReady: "Ready Stock",
    tableProduction: "In Production",
    tableShippable: "Shippable",
    tableStatus: "Status",
    pricingEyebrow: "Tier Price",
    pricingTitle: "FOB and CIF reference pricing for RFQ discussion",
    pricingCopy:
      "Prices are references for B2B negotiation. Final quote depends on quantity, color, packing, exchange rate, destination and delivery schedule.",
    tableCif: "CIF Iraq Ref.",
    rfqEyebrow: "RFQ System",
    rfqTitle: "Inquiry cart instead of online payment",
    rfqCopy: "Add multiple fabrics to the cart, then send one RFQ to receive official quotation from our sales team.",
    selectedFabrics: "Selected Fabrics",
    clear: "Clear",
    companyName: "Company Name",
    contactPerson: "Contact Person",
    country: "Country",
    purchaseQty: "Purchase Quantity",
    requirements: "Requirement Details",
    submitRfq: "Generate RFQ Email",
    formNote: "Prototype note: this opens your email client. Production version can send automatically through Node.js.",
    freightEyebrow: "Freight Estimator",
    freightTitle: "Estimate sea, land and air freight for Iraq and nearby markets",
    freightCopy: "Use this as a pre-RFQ reference. Final logistics quote depends on route, volume, customs and carrier schedule.",
    destination: "Destination",
    shippingMode: "Shipping Mode",
    shipmentVolume: "Shipment Volume",
    seaFreight: "Sea Freight",
    landFreight: "Land Freight",
    airFreight: "Air Freight",
    estimate: "Estimate",
    proofEyebrow: "Trust & Experience",
    proofTitle: "Export experience, certificates and buyer feedback",
    certificates: "Certificates",
    marketMap: "Export Market",
    testimonial: "Customer Review",
    contactEyebrow: "Online Service",
    contactTitle: "Contact sales team for samples, stock list and formal quotation",
    qrCopy: "Replace this block with your real WeChat QR code before launch.",
    addCart: "Add to RFQ Cart",
    priceWhatsapp: "Get Price on WhatsApp",
    viewDetails: "View Details",
    composition: "Composition",
    width: "Width",
    moq: "MOQ",
    fob: "FOB",
    stock: "Stock",
    emptyCart: "No fabrics selected yet. Add products from the product center.",
  },
  ar: {
    brandSub: "مورد أقمشة من الصين",
    navProducts: "المنتجات",
    navInventory: "المخزون",
    navPricing: "الأسعار",
    navFreight: "الشحن",
    navRfq: "طلب عرض سعر",
    navContact: "تواصل",
    whatsapp: "واتساب",
    heroEyebrow: "مورد أقمشة صيني محترف للعراق والشرق الأوسط",
    heroTitle: "توريد أقمشة موثوق، مخزون جاهز وخدمة تصدير لعملاء الشرق الأوسط.",
    heroCopy:
      "نوفر أقمشة تريكو، منسوجة ووظيفية بجودة مستقرة، حالة مخزون واضحة، أسعار مرجعية FOB/CIF واستجابة سريعة لطلبات عروض الأسعار.",
    browseProducts: "تصفح المنتجات",
    sendRfq: "إرسال طلب سعر",
    downloadCatalog: "تحميل الكتالوج",
    quickQuote: "عرض سريع",
    quickQuoteCopy: "يرد فريق المبيعات بخيارات الأقمشة والمخزون والحد الأدنى والسعر ونصيحة الشحن.",
    yearsExport: "سنوات خبرة في التصدير",
    factoryArea: "مساحة المصنع والمستودع",
    monthlyCapacity: "الطاقة الشهرية للأقمشة",
    markets: "أسواق التصدير",
    companyEyebrow: "قوة الشركة",
    companyTitle: "مصمم لمشتري الأقمشة B2B الذين يحتاجون السرعة والمخزون والجودة.",
    companyCopy:
      "من اختيار الخيوط ومتابعة الصباغة إلى التعبئة والمستندات، ندعم عملاء الشرق الأوسط بخدمة توريد عملية وعينات وتنسيق الشحن.",
    factory: "إنتاج المصنع",
    factoryCopy: "مصانع شريكة للصباغة والتجهيز والتريكو والنسيج مع فحص مستقر.",
    warehouse: "قدرة المستودع",
    warehouseCopy: "مخزون جاهز ودوران مستمر للعينات السريعة وتجميع الشحنات.",
    export: "عمليات التصدير",
    exportCopy: "دعم FOB وCIF والحاويات المختلطة للعراق والخليج والأردن وتركيا.",
    productsEyebrow: "مركز المنتجات",
    productsTitle: "أقمشة رائجة للعراق وأسواق الشرق الأوسط",
    productsCopy: "استخدم الفئات وراجع الوزن والعرض والحد الأدنى والمخزون والأسعار قبل إرسال الطلب.",
    all: "الكل",
    knitted: "تريكو",
    woven: "منسوج",
    functional: "وظيفي",
    inventoryEyebrow: "إدارة المخزون",
    inventoryTitle: "مخزون جاهز، قيد الإنتاج ومتاح للشحن",
    inventoryCopy: "استخدم الفلاتر لاختيار اللون والوزن والكمية المتاحة للشحن السريع.",
    filterColor: "اللون",
    filterGsm: "الوزن GSM",
    filterQty: "أقل كمية مخزون",
    reset: "إعادة",
    tableProduct: "المنتج",
    tableColor: "اللون",
    tableGsm: "GSM",
    tableReady: "جاهز",
    tableProduction: "قيد الإنتاج",
    tableShippable: "متاح للشحن",
    tableStatus: "الحالة",
    pricingEyebrow: "أسعار كمية",
    pricingTitle: "أسعار FOB وCIF مرجعية لمناقشة الطلب",
    pricingCopy: "الأسعار مرجعية للمفاوضة. السعر النهائي يعتمد على الكمية واللون والتغليف وسعر الصرف والوجهة.",
    tableCif: "CIF العراق",
    rfqEyebrow: "نظام طلب السعر",
    rfqTitle: "سلة استفسار بدل الدفع الإلكتروني",
    rfqCopy: "أضف عدة أقمشة إلى السلة ثم أرسل طلبا واحدا للحصول على عرض رسمي من فريق المبيعات.",
    selectedFabrics: "الأقمشة المختارة",
    clear: "مسح",
    companyName: "اسم الشركة",
    contactPerson: "الشخص المسؤول",
    country: "الدولة",
    purchaseQty: "كمية الشراء",
    requirements: "تفاصيل الطلب",
    submitRfq: "إنشاء بريد طلب السعر",
    formNote: "ملاحظة: النموذج يفتح البريد الإلكتروني. النسخة الرسمية ترسل تلقائيا عبر Node.js.",
    freightEyebrow: "حاسبة الشحن",
    freightTitle: "تقدير الشحن البحري والبري والجوي للعراق والأسواق القريبة",
    freightCopy: "مرجع أولي قبل الطلب. السعر النهائي يعتمد على المسار والحجم والجمارك وجدول الناقل.",
    destination: "الوجهة",
    shippingMode: "طريقة الشحن",
    shipmentVolume: "حجم الشحنة",
    seaFreight: "شحن بحري",
    landFreight: "شحن بري",
    airFreight: "شحن جوي",
    estimate: "تقدير",
    proofEyebrow: "الثقة والخبرة",
    proofTitle: "خبرة تصدير، شهادات وآراء العملاء",
    certificates: "الشهادات",
    marketMap: "أسواق التصدير",
    testimonial: "رأي العميل",
    contactEyebrow: "خدمة العملاء",
    contactTitle: "تواصل مع فريق المبيعات للعينات وقائمة المخزون والعرض الرسمي",
    qrCopy: "استبدل هذه المنطقة برمز WeChat الحقيقي قبل الإطلاق.",
    addCart: "أضف إلى السلة",
    priceWhatsapp: "السعر عبر واتساب",
    viewDetails: "تفاصيل",
    composition: "التركيب",
    width: "العرض",
    moq: "الحد الأدنى",
    fob: "FOB",
    stock: "المخزون",
    emptyCart: "لم يتم اختيار أقمشة بعد. أضف منتجات من مركز المنتجات.",
  },
};

const products = [
  {
    id: "single-jersey-180",
    category: "knitted",
    name: "Cotton Single Jersey",
    arName: "جيرسي قطني مفرد",
    composition: "95% Cotton / 5% Spandex",
    gsm: 180,
    width: "175 cm",
    colors: ["White", "Black", "Navy"],
    stock: 42000,
    production: 60000,
    shippable: 36000,
    status: "Ready Stock",
    moq: "500 kg/color",
    fob: "$3.20-$4.10/kg",
    cif: "$3.55-$4.55/kg",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80",
    tiers: ["$4.10/kg", "$3.65/kg", "$3.20/kg"],
  },
  {
    id: "rib-knit-240",
    category: "knitted",
    name: "Rib Knit Fabric",
    arName: "قماش ريب تريكو",
    composition: "Cotton / Polyester / Spandex",
    gsm: 240,
    width: "Tubular",
    colors: ["Grey", "Black", "Beige"],
    stock: 18000,
    production: 28000,
    shippable: 14000,
    status: "Shippable",
    moq: "400 kg/color",
    fob: "$3.60-$4.80/kg",
    cif: "$3.95-$5.25/kg",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
    tiers: ["$4.80/kg", "$4.15/kg", "$3.60/kg"],
  },
  {
    id: "cotton-poplin-120",
    category: "woven",
    name: "Cotton Poplin",
    arName: "بوبلين قطني",
    composition: "100% Cotton",
    gsm: 120,
    width: "57/58 inch",
    colors: ["White", "Sky Blue", "Black"],
    stock: 56000,
    production: 80000,
    shippable: 50000,
    status: "Ready Stock",
    moq: "1,000 m/color",
    fob: "$1.35-$2.25/m",
    cif: "$1.58-$2.55/m",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80",
    tiers: ["$2.25/m", "$1.72/m", "$1.35/m"],
  },
  {
    id: "poly-satin-95",
    category: "woven",
    name: "Polyester Satin",
    arName: "ساتان بوليستر",
    composition: "100% Polyester",
    gsm: 95,
    width: "58/60 inch",
    colors: ["Black", "Emerald", "Gold"],
    stock: 72000,
    production: 90000,
    shippable: 68000,
    status: "Ready Stock",
    moq: "1,000 m/color",
    fob: "$0.82-$1.55/m",
    cif: "$1.05-$1.85/m",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=900&q=80",
    tiers: ["$1.55/m", "$1.12/m", "$0.82/m"],
  },
  {
    id: "waterproof-oxford-210",
    category: "functional",
    name: "Waterproof Oxford",
    arName: "أوكسفورد مقاوم للماء",
    composition: "100% Polyester PU Coated",
    gsm: 210,
    width: "150 cm",
    colors: ["Black", "Army Green", "Navy"],
    stock: 26000,
    production: 45000,
    shippable: 22000,
    status: "In Production",
    moq: "1,500 m/color",
    fob: "$1.70-$2.65/m",
    cif: "$2.05-$3.05/m",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=80",
    tiers: ["$2.65/m", "$2.12/m", "$1.70/m"],
  },
  {
    id: "antibacterial-jersey-160",
    category: "functional",
    name: "Antibacterial Jersey",
    arName: "جيرسي مضاد للبكتيريا",
    composition: "Polyester / Viscose / Spandex",
    gsm: 160,
    width: "170 cm",
    colors: ["White", "Light Grey", "Navy"],
    stock: 12000,
    production: 35000,
    shippable: 9000,
    status: "Shippable",
    moq: "600 kg/color",
    fob: "$4.20-$5.80/kg",
    cif: "$4.70-$6.35/kg",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
    tiers: ["$5.80/kg", "$4.95/kg", "$4.20/kg"],
  },
];

let lang = "en";
let cart = [];

const productGrid = document.querySelector("#productGrid");
const inventoryRows = document.querySelector("#inventoryRows");
const priceRows = document.querySelector("#priceRows");
const colorFilter = document.querySelector("#colorFilter");
const gsmFilter = document.querySelector("#gsmFilter");
const qtyFilter = document.querySelector("#qtyFilter");
const cartItems = document.querySelector("#cartItems");

function t(key) {
  return translations[lang][key] || translations.en[key] || key;
}

function productName(product) {
  return lang === "ar" ? product.arName : product.name;
}

function renderTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.documentElement.lang = lang;
  document.body.classList.toggle("rtl", lang === "ar");
  document.querySelector("#langToggle").textContent = lang === "en" ? "العربية" : "English";
}

function statusClass(status) {
  if (status === "Ready Stock") return "ready";
  if (status === "In Production") return "production";
  return "shippable";
}

function renderProducts(category = "all") {
  const visible = category === "all" ? products : products.filter((item) => item.category === category);
  productGrid.innerHTML = visible
    .map(
      (product) => `
      <article class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-body">
          <div class="product-top">
            <h3>${productName(product)}</h3>
            <span class="badge ${statusClass(product.status)}">${product.status}</span>
          </div>
          <div class="product-meta">
            <span>${t("composition")}<strong>${product.composition}</strong></span>
            <span>${t("tableGsm")}<strong>${product.gsm}</strong></span>
            <span>${t("width")}<strong>${product.width}</strong></span>
            <span>${t("moq")}<strong>${product.moq}</strong></span>
            <span>${t("stock")}<strong>${product.stock.toLocaleString()} m/kg</strong></span>
            <span>${t("fob")}<strong>${product.fob}</strong></span>
          </div>
          <div class="product-actions">
            <button class="btn secondary" type="button" data-add="${product.id}">${t("addCart")}</button>
            <a class="btn primary" target="_blank" rel="noreferrer" href="${whatsappLink(product)}">${t("priceWhatsapp")}</a>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

function populateFilters() {
  const colors = [...new Set(products.flatMap((product) => product.colors))].sort();
  const gsms = [...new Set(products.map((product) => product.gsm))].sort((a, b) => a - b);

  colorFilter.innerHTML = `<option value="all">${t("all")}</option>${colors.map((color) => `<option value="${color}">${color}</option>`).join("")}`;
  gsmFilter.innerHTML = `<option value="all">${t("all")}</option>${gsms.map((gsm) => `<option value="${gsm}">${gsm}</option>`).join("")}`;
}

function renderInventory() {
  const color = colorFilter.value || "all";
  const gsm = gsmFilter.value || "all";
  const minQty = Number(qtyFilter.value || 0);

  const visible = products.filter((product) => {
    const colorMatch = color === "all" || product.colors.includes(color);
    const gsmMatch = gsm === "all" || String(product.gsm) === String(gsm);
    const qtyMatch = product.shippable >= minQty;
    return colorMatch && gsmMatch && qtyMatch;
  });

  inventoryRows.innerHTML = visible
    .map(
      (product) => `
      <tr>
        <td>${productName(product)}</td>
        <td>${product.colors.join(", ")}</td>
        <td>${product.gsm}</td>
        <td>${product.stock.toLocaleString()}</td>
        <td>${product.production.toLocaleString()}</td>
        <td>${product.shippable.toLocaleString()}</td>
        <td><span class="badge ${statusClass(product.status)}">${product.status}</span></td>
      </tr>
    `
    )
    .join("");
}

function renderPrices() {
  priceRows.innerHTML = products
    .map(
      (product) => `
      <tr>
        <td>${productName(product)}</td>
        <td>${product.tiers[0]}</td>
        <td>${product.tiers[1]}</td>
        <td>${product.tiers[2]}</td>
        <td>${product.cif}</td>
      </tr>
    `
    )
    .join("");
}

function renderCart() {
  if (!cart.length) {
    cartItems.innerHTML = `<p class="empty-cart">${t("emptyCart")}</p>`;
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (product) => `
      <div class="cart-item">
        <div>
          <strong>${productName(product)}</strong>
          <span>${product.composition} · ${product.gsm} GSM · ${product.fob}</span>
        </div>
        <button class="link-btn" type="button" data-remove="${product.id}">Remove</button>
      </div>
    `
    )
    .join("");
}

function whatsappLink(product) {
  const text = encodeURIComponent(`Hello, I need price for ${product.name}. GSM: ${product.gsm}, MOQ: ${product.moq}, FOB: ${product.fob}`);
  return `https://wa.me/${whatsappNumber}?text=${text}`;
}

function estimateFreight() {
  const destination = document.querySelector("#destination").value;
  const mode = document.querySelector("#shippingMode").value;
  const volume = Number(document.querySelector("#shipmentVolume").value || 1);
  const rates = {
    iraq: { sea: 84, land: 118, air: 420 },
    uae: { sea: 62, land: 96, air: 360 },
    saudi: { sea: 78, land: 110, air: 390 },
    jordan: { sea: 88, land: 128, air: 410 },
    turkey: { sea: 74, land: 105, air: 380 },
  };
  const base = rates[destination][mode] * volume;
  const low = Math.round(base * 0.92);
  const high = Math.round(base * 1.16);
  document.querySelector("#freightResult").textContent = `$${low.toLocaleString()} - $${high.toLocaleString()}`;
}

function buildRfqBody(formData) {
  const selected = cart.length
    ? cart.map((item) => `- ${item.name}: ${item.composition}, ${item.gsm} GSM, ${item.width}, ${item.fob}`).join("\n")
    : "- No product selected";

  return [
    "New RFQ from SinoTex Middle East website",
    "",
    `Company: ${formData.get("company")}`,
    `Contact: ${formData.get("contact")}`,
    `Country: ${formData.get("country")}`,
    `WhatsApp: ${formData.get("whatsapp")}`,
    `Email: ${formData.get("email")}`,
    `Purchase Quantity: ${formData.get("quantity")}`,
    "",
    "Selected Fabrics:",
    selected,
    "",
    "Requirement Details:",
    formData.get("message") || "",
  ].join("\n");
}

function generateCatalog() {
  const rows = products
    .map((product) => `${product.name} | ${product.composition} | ${product.gsm} GSM | ${product.width} | MOQ ${product.moq} | FOB ${product.fob}`)
    .join("\n");
  const content = `SinoTex Middle East Fabric Catalog\nChina Fabric Supplier for Iraq and Middle East\n\n${rows}\n\nContact: ${salesEmail} | WhatsApp: +${whatsappNumber}`;
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "SinoTex-Middle-East-Catalog.txt";
  link.click();
  URL.revokeObjectURL(url);
}

document.querySelector("#langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "ar" : "en";
  renderTranslations();
  populateFilters();
  renderProducts(document.querySelector(".filter-btn.active").dataset.category);
  renderInventory();
  renderPrices();
  renderCart();
});

document.querySelector("#menuToggle").addEventListener("click", () => {
  document.querySelector("#mainNav").classList.toggle("open");
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.category);
  });
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  const product = products.find((item) => item.id === button.dataset.add);
  if (product && !cart.some((item) => item.id === product.id)) {
    cart.push(product);
    renderCart();
  }
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (!button) return;
  cart = cart.filter((item) => item.id !== button.dataset.remove);
  renderCart();
});

document.querySelector("#clearCart").addEventListener("click", () => {
  cart = [];
  renderCart();
});

[colorFilter, gsmFilter, qtyFilter].forEach((input) => input.addEventListener("input", renderInventory));

document.querySelector("#resetInventory").addEventListener("click", () => {
  colorFilter.value = "all";
  gsmFilter.value = "all";
  qtyFilter.value = "";
  renderInventory();
});

document.querySelector("#estimateFreight").addEventListener("click", estimateFreight);

document.querySelector("#rfqForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Fabric RFQ - SinoTex Middle East");
  const body = encodeURIComponent(buildRfqBody(formData));
  window.location.href = `mailto:${salesEmail}?subject=${subject}&body=${body}`;
});

document.querySelector("#catalogDownload").addEventListener("click", (event) => {
  event.preventDefault();
  generateCatalog();
});

renderTranslations();
populateFilters();
renderProducts();
renderInventory();
renderPrices();
renderCart();
estimateFreight();
