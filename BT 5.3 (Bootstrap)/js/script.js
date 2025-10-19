document.addEventListener("DOMContentLoaded", function () {
    const filterLinks = document.querySelectorAll(".filter-item");
    const products = document.querySelectorAll(".product-card");
    let active = null;

    filterLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const filter = this.getAttribute("data-filter");

            if (active == filter) {
                active = null;
                filterLinks.forEach(l => l.classList.remove("active"));
                products.forEach(product => {
                    product.style.display = "block";
                    product.classList.add("fade-in");
                })
                return;
            }

            active = filter;
            
            filterLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            products.forEach(product => {
                const category = product.getAttribute("data-category");
                if (filter === "tat-ca" || category === filter) {
                    product.style.display = "block";
                    product.classList.add("fade-in");
                } else {
                    product.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        card.addEventListener("click", () => {
            const id = card.getAttribute("data-id");
            const name = card.getAttribute("data-name");
            const price = card.getAttribute("data-price");
            const img = card.getAttribute("data-img");
            const desc = card.getAttribute("data-desc");
            const category = card.getAttribute("data-category");

            if (!id || !name || !price || !img || !desc){
                alert("Fail");
                return;
            }

            const product = { id, name, price, img, desc };
            localStorage.setItem("selectedProduct", JSON.stringify(product));

            window.location.href = "product.html";
        });
    });
  });