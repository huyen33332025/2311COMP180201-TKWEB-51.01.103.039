document.addEventListener('DOMContentLoaded', () => {
    const productInput = document.getElementById('productInput');
    const addBtn = document.getElementById('addBtn');
    const productListContainer = document.getElementById('product-list-container');
    const productCount = document.getElementById('productCount');

    let products = JSON.parse(localStorage.getItem('products')) || [];

    const renderProducts = () => {
        productListContainer.innerHTML = ''; 

        if (products.length === 0) {
            productListContainer.innerHTML = `
                <div class="empty-state text-center">
                    <i class="bi bi-clipboard-x-fill"></i>
                    <p>Chưa có sản phẩm nào.</p>
                </div>
            `;
        } else {
            products.forEach((product, index) => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product-item';
                productDiv.innerHTML = `
                    <span class="product-name">${product}</span>
                    <div class="product-actions">
                        <button class="btn btn-edit" data-index="${index}"><i class="bi bi-pencil-fill"></i></button>
                        <button class="btn btn-delete" data-index="${index}"><i class="bi bi-trash-fill"></i></button>
                    </div>
                `;
                productListContainer.appendChild(productDiv);
            });
        }
        productCount.textContent = products.length;
        localStorage.setItem('products', JSON.stringify(products));
    };

    const addProduct = () => {
        const productName = productInput.value.trim();
        if (productName) {
            products.push(productName);
            productInput.value = '';
            renderProducts();
        }
    };

    const editProduct = (index) => {
        const newName = prompt('Nhập tên mới cho sản phẩm:', products[index]);
        if (newName && newName.trim() !== '') {
            products[index] = newName.trim();
            renderProducts();
        }
    };

    const deleteProduct = (index) => {
        if (confirm(`Bạn có chắc muốn xóa sản phẩm "${products[index]}"?`)) {
            products.splice(index, 1);
            renderProducts();
        }
    };

    addBtn.addEventListener('click', addProduct);
    productInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addProduct();
        }
    });

    productListContainer.addEventListener('click', (e) => {
        const target = e.target.closest('button');
        if (!target) return;

        const index = target.dataset.index;
        if (target.classList.contains('btn-edit')) {
            editProduct(index);
        } else if (target.classList.contains('btn-delete')) {
            deleteProduct(index);
        }
    });

    renderProducts();
});