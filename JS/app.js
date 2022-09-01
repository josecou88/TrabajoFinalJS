//DECLARO CARRITO VACIO
let carritoDeCompras = []

            //FALTA VALIDAR CARRITO CON LOCALSTORAGE

//SELECTORES
const cardContainerQuery = document.querySelector("#cardContainer")
const carritoContainer = document.querySelector('#carritoContainer')
const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton') 

//RENDERIZAR PRODUCTOS
const renderizarProductos = (arrayProductos) =>{
    cardContainerQuery.innerHTML = ""
    arrayProductos.forEach ((producto)=> {
        const nuevoDiv = document.createElement("div")
        nuevoDiv.innerHTML= `
        <h3 class="cardTitle">${producto.producto}</h3>
        <img src="${producto.imgSrc}" class="cardImg">
        <p class="cardDesc">${producto.descripcion}</p>
        <span class="cardPrice">$${producto.precio}</span>
        <button id="agregar${producto.id}">Agregar al carrito</button>`
        nuevoDiv.className = "card"
        cardContainerQuery.append(nuevoDiv)
        const boton = document.querySelector(`#agregar${producto.id}`)
        boton.addEventListener("click", ()=>{agregarProductoAlCarrito(producto.id)})
    })
}

// AGREGAR PRODUCTOS AL CARRITO
const agregarProductoAlCarrito = (productoID) =>{
  const productoPrueba = productos.find((prod)=> prod.id === productoID) 
  carritoDeCompras.push(productoPrueba)


            //FALTA AGREGAR EL PRODUCTO AL LOCALSTORAGE

  Toastify({
    text: "Agregaste tu producto exitosamente ",
    duration: 500,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
  console.log(carritoDeCompras)
}

//BUSCADOR
const buscarProducto = () => {
    const query = searchBar.value.toLowerCase()
    const arrayResultados = productos.filter((comida)=> comida.producto.includes(query))
    renderizarProductos(arrayResultados);
}

//CONFIRMAR COMPRA
  document.querySelector('#botonConfirmar').addEventListener ('click', ()=> {
    Swal.fire({
        title: 'Deseas confirmar la compra?',
        text: "No podras revertir si confirmas!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar compra!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Compra confirmada!',
            'Tu orden esta en proceso!',
            'success'
          )
        }
      })
})

//LISTENERS
searchButton.addEventListener('click', buscarProducto)
searchBar.addEventListener('input', buscarProducto)

