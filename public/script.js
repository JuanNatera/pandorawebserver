console.log("script funcionando")


fetch('http://localhost:3000/productos')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('productssection');
        data.forEach(producto => {
            container.innerHTML+= `
                <div class="products">
                    <div class="productsimage">
                        <img src="${producto.imagen}" alt="Product 1">
                    </div>
                    <div class="productsdesc">
                        <h1>${producto.nombre}</h1>
                        <p>${producto.descripcion}</p>
                    </div
                </div>
                
            `
        });
      })
      .catch(error => {
        console.error('Error al obtener productos:', error);
      });