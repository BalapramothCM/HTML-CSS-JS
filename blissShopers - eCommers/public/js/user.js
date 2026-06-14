document.addEventListener("DOMContentLoaded", function () {
  // ===============================
  // Search bar toggle
  // ===============================
  const searchToggle = document.getElementById("searchToggle");
  const searchBar = document.querySelector(".search-bar-container");

  if (searchToggle && searchBar) {
    searchToggle.addEventListener("click", () => {
      searchBar.classList.toggle("active");
    });
    document.addEventListener("click", (e) => {
      if (!searchBar.contains(e.target) && !searchToggle.contains(e.target)) {
        searchBar.classList.remove("active");
      }
    });
  }

  // ===============================
  // Navbar dropdown hover
  // ===============================
  document
    .querySelectorAll(".navbar-nav .dropdown")
    .forEach(function (dropdown) {
      const toggle = dropdown.querySelector(".dropdown-toggle");
      if (!toggle) return;

      const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(toggle);

      dropdown.addEventListener("mouseenter", () => bsDropdown.show());
      dropdown.addEventListener("mouseleave", () => bsDropdown.hide());
    });

  // ===============================
  // Cart small toggle
  // ===============================
  const cartIcon = document.querySelector(".cart-small");
  if (cartIcon) {
    cartIcon.addEventListener("click", () =>
      cartIcon.classList.toggle("active")
    );
  }

  // ===============================
  // Card hover image move
  // ===============================
  document.querySelectorAll(".square-img-container").forEach((container) => {
    const image = container.querySelector(".person-img");
    if (!image) return;

    container.addEventListener("mousemove", function (e) {
      const rect = container.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = ((offsetX - centerX) / centerX) * 70;
      const moveY = ((offsetY - centerY) / centerY) * 70;

      image.style.transform = `scale(1.9) translate(${-moveX}px, ${-moveY}px)`;
    });

    container.addEventListener("mouseleave", function () {
      image.style.transform = "scale(1)";
    });
  });

  // ===============================
  // Auto-scroll product sliders
  // ===============================
  let autoScrollInterval;
  let autoScrollEnabled = true;
  let lastInteractionTime = 0;

  const sareeScrollContainer = document.querySelector(
    ".saree-cards .scroll-wrapper"
  );
  const kurtiScrollContainer = document.querySelector(
    ".kurti-cards .scroll-wrapper"
  );

  function isMobile() {
    return window.innerWidth <= 760;
  }

  function scrollContainer(container) {
    if (!container || container.scrollWidth <= container.clientWidth) return;

    const atEnd =
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 50;
    container.scrollTo({
      left: atEnd ? 0 : container.scrollLeft + 300,
      behavior: "smooth",
    });
  }

  function startAutoScroll() {
    if (!isMobile() || !autoScrollEnabled) return;

    clearInterval(autoScrollInterval);

    autoScrollInterval = setInterval(() => {
      if (Date.now() - lastInteractionTime > 3000) {
        scrollContainer(sareeScrollContainer);
        scrollContainer(kurtiScrollContainer);
      }
    }, 5000);
  }

  function handleUserInteraction() {
    lastInteractionTime = Date.now();
    if (autoScrollEnabled) {
      autoScrollEnabled = false;
      clearInterval(autoScrollInterval);
      setTimeout(() => {
        autoScrollEnabled = true;
        startAutoScroll();
      }, 10000);
    }
  }

  function setupButtons(section, container) {
    if (!section || !container) return;
    const leftBtn = section.querySelector(".left-btn");
    const rightBtn = section.querySelector(".right-btn");

    if (leftBtn) {
      leftBtn.addEventListener("click", () => {
        container.scrollBy({ left: -300, behavior: "smooth" });
        if (isMobile()) handleUserInteraction();
      });
    }

    if (rightBtn) {
      rightBtn.addEventListener("click", () => {
        container.scrollBy({ left: 300, behavior: "smooth" });
        if (isMobile()) handleUserInteraction();
      });
    }
  }

  setupButtons(document.querySelector(".saree-cards"), sareeScrollContainer);
  setupButtons(document.querySelector(".kurti-cards"), kurtiScrollContainer);

  if (isMobile()) {
    function setupTouchScroll(container) {
      if (!container) return;
      let startX = 0;
      let startY = 0;
      let scrollLeft = 0;
      let isDragging = false;

      container.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
        scrollLeft = container.scrollLeft;
        handleUserInteraction();
      });

      container.addEventListener(
        "touchmove",
        (e) => {
          if (!isDragging) return;
          const diffX = e.touches[0].pageX - startX;
          const diffY = e.touches[0].pageY - startY;

          if (Math.abs(diffX) > Math.abs(diffY)) {
            e.preventDefault();
            container.scrollLeft = scrollLeft - diffX;
          }
        },
        { passive: false }
      );

      container.addEventListener("touchend", () => {
        isDragging = false;
      });
    }

    setupTouchScroll(sareeScrollContainer);
    setupTouchScroll(kurtiScrollContainer);

    startAutoScroll();
  }

  // ===============================
  // Navbar minimize on scroll
  // ===============================
  const header = document.querySelector("header");
  const mainNav = header?.querySelector(".main-nav");
  const logo = document.getElementById("logo");

  if (logo) {
    logo.classList.add("animate__animated", "animate__flip");
    logo.addEventListener("animationend", () => {
      logo.classList.remove("animate__animated", "animate__flip");
    });
  }

  if (header && mainNav) {
    header.classList.add("expanded");
    mainNav.classList.add("container-fluid");

    function animateMaxWidth(element, start, end, duration = 500) {
      let startTime = null;
      function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentWidth = start + (end - start) * progress;
        element.style.maxWidth = currentWidth + "px";
        if (progress < 1) requestAnimationFrame(animation);
      }
      requestAnimationFrame(animation);
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50 && !header.classList.contains("scrolled")) {
        header.classList.add("scrolled");
        header.classList.remove("expanded");
        mainNav.style.boxShadow = "none";
        animateMaxWidth(mainNav, mainNav.clientWidth, 1140);
        setTimeout(() => {
          mainNav.classList.remove("container-fluid");
          mainNav.classList.add("container");
          mainNav.style.maxWidth = "";
          mainNav.style.boxShadow = "none";
        }, 500);
      } else if (
        window.scrollY <= 50 &&
        !header.classList.contains("expanded")
      ) {
        header.classList.add("expanded");
        header.classList.remove("scrolled");
        mainNav.style.boxShadow = "none";
        const parentWidth = mainNav.parentElement.clientWidth;
        animateMaxWidth(mainNav, mainNav.clientWidth, parentWidth);
        setTimeout(() => {
          mainNav.classList.remove("container");
          mainNav.classList.add("container-fluid");
          mainNav.style.maxWidth = "";
          mainNav.style.boxShadow = "none";
        }, 500);
      }
    });
  }

  // ===============================
  // Filters
  // ===============================
  const clearFiltersBtn = document.getElementById("clearFilters");
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-sidebar input[type='checkbox']")
        .forEach((cb) => (cb.checked = false));
      const priceRange = document.getElementById("pricerang");
      if (priceRange) priceRange.value = 500;
      const priceLabel = document.getElementById("priceLabel");
      if (priceLabel) priceLabel.textContent = "₹500 - ₹5000";
      const brandSearch = document.getElementById("brandSearch");
      if (brandSearch) brandSearch.value = "";
      document
        .querySelectorAll("#brandList .form-check")
        .forEach((el) => (el.style.display = "block"));
    });
  }

  const priceRange = document.getElementById("pricerang");
  if (priceRange) {
    priceRange.addEventListener("input", function () {
      const priceLabel = document.getElementById("priceLabel");
      if (priceLabel) priceLabel.textContent = `₹500 - ₹${this.value}`;
    });
  }

  const toggleBrandSearch = document.getElementById("toggleBrandSearch");
  if (toggleBrandSearch) {
    toggleBrandSearch.addEventListener("click", () => {
      const searchBar = document.getElementById("brandSearch");
      if (!searchBar) return;
      searchBar.classList.toggle("d-none");
      if (!searchBar.classList.contains("d-none")) searchBar.focus();
    });
  }

  const brandSearch = document.getElementById("brandSearch");
  if (brandSearch) {
    brandSearch.addEventListener("keyup", function () {
      let searchText = this.value.toLowerCase();
      let match = 0;

      document.querySelectorAll("#brandList .form-check").forEach((el) => {
        let label = el.querySelector("label").textContent.toLowerCase();
        if (label.includes(searchText)) {
          el.style.display = "block";
          match++;
        } else {
          el.style.display = "none";
        }
      });

      let noResults = document.getElementById("noBrandResults");
      if (!noResults) {
        noResults = document.createElement("div");
        noResults.id = "noBrandResults";
        noResults.className = "text-muted small mt-2";
        document.getElementById("brandList").appendChild(noResults);
      }
      noResults.textContent = match === 0 ? "No brand found" : "";
    });
  }

  const clearFiltersMobileBtn = document.getElementById("clearFiltersMobile");
  if (clearFiltersMobileBtn) {
    clearFiltersMobileBtn.addEventListener("click", () => {
      document
        .querySelectorAll("#mobileFilter input[type='checkbox']")
        .forEach((cb) => (cb.checked = false));
      const priceRange = document.getElementById("pricerangMobile");
      if (priceRange) priceRange.value = 500;
      const priceLabel = document.getElementById("priceLabelMobile");
      if (priceLabel) priceLabel.textContent = "₹500 - ₹5000";
    });
  }

  const priceRangeMobile = document.getElementById("pricerangMobile");
  if (priceRangeMobile) {
    priceRangeMobile.addEventListener("input", function () {
      const priceLabelMobile = document.getElementById("priceLabelMobile");
      if (priceLabelMobile)
        priceLabelMobile.textContent = `₹500 - ₹${this.value}`;
    });
  }

  // ===============================
  // Product details page
  // ===============================
  // const products = {
  //       101: {
  //         title: "Stylish Dress",
  //         price: "₹2,499",
  //         desc: "A stylish dress perfect for any occasion. Comfortable, trendy and elegant.",
  //         images: [
  //           "./Multimedia/c1.jpg",
  //           "./Multimedia/c2.jpg",
  //           "./Multimedia/c3.jpg",
  //           "./Multimedia/c4.jpg",
  //         ],
  //       },
  //       102: {
  //         title: "Casual Shirt",
  //         price: "₹1,299",
  //         desc: "Lightweight and breathable casual shirt for daily wear.",
  //         images: [
  //           "./Multimedia/c1.jpg",
  //           "./Multimedia/c2.jpg",
  //           "./Multimedia/c3.jpg",
  //           "./Multimedia/c4.jpg",
  //         ],
  //       },
  //     };

  //     // Get product id from URL
  //     const params = new URLSearchParams(window.location.search);
  //     const productId = params.get("id");
  //     const product = products[productId];

  //     if (!product) {
  //       console.error("Product not found for id:", productId);
  //       return;
  //     }

  // ---------------- Desktop ----------------
  // const mainImage = document.getElementById("mainImage");
  // const thumbsContainer = document.getElementById("thumbnails");

  // mainImage.src = product.images[0];
  // thumbsContainer.innerHTML = "";

  // product.images.forEach((imgSrc) => {
  //   const thumb = document.createElement("img");
  //   thumb.src = imgSrc;
  //   thumb.classList.add("img-thumbnail");
  //   thumb.style.width = "80px";
  //   thumb.style.cursor = "pointer";
  //   thumb.addEventListener("click", () => {
  //     mainImage.src = imgSrc;
  //   });
  //   thumbsContainer.appendChild(thumb);
  // });

  // // ---------------- Mobile Carousel ----------------
  // const mobContainer = document.getElementById("mobImages");
  // mobContainer.innerHTML = "";

  // product.images.forEach((imgSrc, index) => {
  //   const item = document.createElement("div");
  //   item.classList.add("carousel-item");
  //   if (index === 0) item.classList.add("active");

  //   const img = document.createElement("img");
  //   img.src = imgSrc;
  //   img.classList.add("d-block", "w-100", "rounded");

  //   item.appendChild(img);
  //   mobContainer.appendChild(item);
  // });

  // // Initialize carousel
  // const mobileCarouselEl = document.getElementById("mobileCarousel");
  // new bootstrap.Carousel(mobileCarouselEl, {
  //   interval: 3000,
  //   ride: "carousel",
  // });

  // // ---------------- Product Details ----------------
  // document.getElementById("productTitle").textContent = product.title;
  // document.getElementById("productPrice").textContent = product.price;
  // document.getElementById("productDesc").textContent = product.desc;
});

// thumbnail selection

// Thumbnail switching (desktop)
const mainImg = document.querySelector(".main-img");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImg.src = thumb.src;
    thumbs.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});

// Size selection
const sizes = document.querySelectorAll(".size");
sizes.forEach((size) => {
  size.addEventListener("click", () => {
    sizes.forEach((s) => s.classList.remove("active"));
    size.classList.add("active");
  });
});

// Desktop mouse movement zoom for main product image
const mainImgContainer = document.querySelector(".main-img-container");
const mainImage = document.querySelector(".main-img");

if (mainImgContainer && mainImage && window.innerWidth > 760) {
  mainImgContainer.style.overflow = "hidden"; // prevent image overflow

  mainImgContainer.addEventListener("mousemove", (e) => {
    const rect = mainImgContainer.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = ((offsetX - centerX) / centerX) * 50; // adjust sensitivity
    const moveY = ((offsetY - centerY) / centerY) * 50;

    mainImage.style.transform = `scale(2) translate(${-moveX}px, ${-moveY}px)`;
    mainImage.style.transition = "transform 0.1s ease-out";
  });

  mainImgContainer.addEventListener("mouseleave", () => {
    mainImage.style.transform = "scale(1) translate(0,0)";
    mainImage.style.transition = "transform 0.3s ease";
  });
}

if (window.innerWidth <= 760) {
  const mobileImages = document.querySelectorAll(".mobile-clickable");
  mobileImages.forEach((img) => {
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
      // Create overlay
      const overlay = document.createElement("div");
      Object.assign(overlay.style, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.95)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        overflow: "hidden",
      });

      // Create full-screen image container
      const imgContainer = document.createElement("div");
      Object.assign(imgContainer.style, {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      });

      // Clone the clicked image
      const fullImg = img.cloneNode();
      Object.assign(fullImg.style, {
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: "contain",
      });

      imgContainer.appendChild(fullImg);
      overlay.appendChild(imgContainer);
      document.body.appendChild(overlay);

      // Close overlay on background click
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.remove();
      });

      // Close button
      const closeBtn = document.createElement("span");
      closeBtn.textContent = "✕";
      Object.assign(closeBtn.style, {
        position: "absolute",
        top: "20px",
        right: "20px",
        fontSize: "30px",
        color: "#fff",
        cursor: "pointer",
        zIndex: 10000,
      });
      closeBtn.addEventListener("click", () => overlay.remove());
      overlay.appendChild(closeBtn);
    });
  });
}

// Function to add item to cart
function addToBag(prodId, size = null, price, imageIndex = 0) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if this exact product+size+imageIndex already exists
  let exists = cart.some(
    item => item.id === prodId && item.size === size && item.imageIndex === imageIndex
  );

  if (!exists) {
    cart.push({
      id: prodId,
      size: size,
      quantity: 1,
      price: price,
      imageIndex: imageIndex
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  else {
    alert('Product already in the cart.Please Increase the quanity in Cart page.')
  }

  updateCartBadge();
}


function updateCartBadge() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartBadges = document.querySelectorAll(".cart-badge");

  cartBadges.forEach(badge => {
    badge.innerHTML = `${cart.length} <span class="visually-hidden">cart items</span>`;
  });
}