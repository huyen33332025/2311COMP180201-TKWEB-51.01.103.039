const addBtn = document.getElementById("addBtn");
const input = document.querySelector("input[name='product']");
const display = document.querySelector(".Display-Container");
const countSpan = document.getElementById("productCount");

function updateCount() {
    const count = display.querySelectorAll(".product-item").length;
    countSpan.textContent = count;
}

function addProduct(){
    const productName = input.value.trim();
    if (productName === "") {
        alert("Vui lòng nhập tên sản phẩm!");
        return;
    }

    const productDiv = document.createElement("div");
    productDiv.classList.add("product-item");
    productDiv.innerHTML = `
        <span class="product-name">${productName}</span>
        <div class="product-actions">
            <button class="btn btn-sm btn-primary edit-btn">Edit</button>
            <button class="btn btn-sm btn-danger delete-btn">Delete</button>
        </div>
    `;
    display.appendChild(productDiv);
    input.value = "";
    updateCount();

    const editBtn = productDiv.querySelector(".edit-btn");
    editBtn.addEventListener("click", () => {
        const newName = prompt("Nhập tên mới cho sản phẩm:", productName);
        if (newName && newName.trim() !== "") {
            productDiv.querySelector(".product-name").textContent = newName.trim();
        }
    });

    const deleteBtn = productDiv.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        if (confirm("Bạn có chắc muốn xoá sản phẩm này không?")) {
            productDiv.remove();
            updateCount();
        }
    });
}

addBtn.addEventListener("click", addProduct);
input.addEventListener("keypress", (event) => {
    if (event.key == "Enter"){
        event.preventDefault();
        addProduct();
    }
});
