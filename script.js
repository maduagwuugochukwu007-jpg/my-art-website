fetch('artworks.json')
  .then(response => response.json())
  .then(data => {
    const gallery = document.querySelector('.gallery');
    const shop = document.querySelector('.shop');

    data.forEach(art => {
      // Gallery
      const img = document.createElement('img');
      img.src = art.image;
      img.alt = art.title;
      gallery.appendChild(img);

      // Shop
      const product = document.createElement('div');
      product.classList.add('product');
      product.innerHTML = `
        <img src="${art.image}" alt="${art.title}">
        <h3>${art.title}</h3>
        <p>₦${art.price}</p>
        <button class="buy-button" onclick="payWithPaystack(${art.price}, '${art.title}')">Buy Now</button>
      `;
      shop.appendChild(product);
    });
  });
 