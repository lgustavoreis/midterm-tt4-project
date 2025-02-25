import './list-products.scss';

// Importe as imagens dos produtos
import product1 from "./assets/images/product1.jpg";
import product2 from "./assets/images/product2.jpg";
import product3 from "./assets/images/product3.jpg";
import product4 from "./assets/images/product4.jpg";
import product5 from "./assets/images/product5.jpg";
import product6 from "./assets/images/product6.jpg";
import product7 from "./assets/images/product7.jpg";
import product8 from "./assets/images/product8.jpg";
import product9 from "./assets/images/product9.jpg";
import product10 from "./assets/images/product10.jpg";
import product11 from "./assets/images/product11.jpg";
import product12 from "./assets/images/product12.jpg";

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById('products');

    // Lista de produtos
    const products = [
        {
            name: 'Product 1',
            description: 'A short description of Product 1. Perfect for daily use.',
            price: '$99.99',
            image: product1
        },
        {
            name: 'Product 2',
            description: 'A short description of Product 2. Great for gifting.',
            price: '$149.99',
            image: product2
        },
        {
            name: 'Product 3',
            description: 'A short description of Product 3. Modern and elegant design.',
            price: '$199.99',
            image: product3
        },
        {
            name: 'Product 4',
            description: 'A short description of Product 4. Durable and reliable.',
            price: '$79.99',
            image: product4
        },
        {
            name: 'Product 5',
            description: 'A short description of Product 5. Lightweight and portable.',
            price: '$129.99',
            image: product5
        },
        {
            name: 'Product 6',
            description: 'A short description of Product 6. Stylish and functional.',
            price: '$89.99',
            image: product6
        },
        {
            name: 'Product 7',
            description: 'A short description of Product 7. High-quality materials.',
            price: '$159.99',
            image: product7
        },
        {
            name: 'Product 8',
            description: 'A short description of Product 8. Perfect for professionals.',
            price: '$199.99',
            image: product8
        },
        {
            name: 'Product 9',
            description: 'A short description of Product 9. Innovative design.',
            price: '$109.99',
            image: product9
        },
        {
            name: 'Product 10',
            description: 'A short description of Product 10. Affordable and reliable.',
            price: '$69.99',
            image: product10
        },
        {
            name: 'Product 11',
            description: 'A short description of Product 11. Compact and efficient.',
            price: '$139.99',
            image: product11
        },
        {
            name: 'Product 12',
            description: 'A short description of Product 12. Premium quality.',
            price: '$249.99',
            image: product12
        }
    ];

    // Renderiza os produtos
    products.forEach(product => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'h-100');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.classList.add('card-text');
        price.innerHTML = `<strong>${product.price}</strong>`;

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn', 'btn-primary');
        addToCart.textContent = "Add to cart";

        // Adiciona os elementos ao card
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(price);
        cardBody.appendChild(addToCart);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        colDiv.appendChild(cardDiv);
        productsContainer.appendChild(colDiv);
    });
});