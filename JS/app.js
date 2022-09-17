//DECLARO CARRITO VACIO
let carritoDeCompras = []

            //FALTA VALIDAR CARRITO CON LOCALSTORAGE

//SELECTORES
const cardContainerQuery = document.querySelector("#cardContainer")
const carritoContainer = document.querySelector('#carritoContainer')
const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton') 
const totalCarrito = document.querySelector('#totalCarrito')
const vaciarCarro = document.querySelector('#vaciarCarrito')
let cantidadBaguettes = 0
let cantidadWraps = 0
let cantidadEnsaladas = 0
let total = 0

// contador productos en carrito
const identificarProducto = (identificador) => {
  if (identificador == 1 ) {
    return cantidadWraps
  } else if (identificador == 2) {
    return cantidadEnsaladas
  } else {
    return cantidadBaguettes
  }
}
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
        boton.addEventListener("click", ()=>{
         if (producto.id == 1) {
            cantidadWraps ++
            console.log("Wraps=" + cantidadWraps ) 
          }else if (producto.id == 3) {
            cantidadBaguettes ++
            console.log("Baguettes=" + cantidadBaguettes ) 
          }else {
            cantidadEnsaladas ++
            console.log("Ensaladas=" + cantidadEnsaladas ) 
          }
          agregarProductoAlCarrito(producto.id)
        })
    })
}

// AGREGAR PRODUCTOS AL CARRITO
const agregarProductoAlCarrito = (productoID) =>{
  const productoPrueba = productos.find((prod)=> prod.id === productoID) 
  carritoDeCompras.push(productoPrueba)

  const nuevoDivCarrito = document.createElement("div.prueba")
    nuevoDivCarrito.innerHTML= `
    <h3 class="cardTitle">${productoPrueba.producto} <span>$${productoPrueba.precio} </span> <span id="cantBaguettes"> x ${identificarProducto(productoID)} </h3>`
    carritoContainer.append(nuevoDivCarrito)
  
  // if (cantidadBaguettes == 1) {
  //   const nuevoDivCarrito = document.createElement("div")
  //   nuevoDivCarrito.innerHTML= `
  //   <h3 class="cardTitle">${productoPrueba.producto} <span>$${productoPrueba.precio} </span> <span id="cantBaguettes"> x ${identificarProducto(productoID)} </h3>`
  //   carritoContainer.append(nuevoDivCarrito)
  // } else {
  //   const spanBaguettes = document.querySelector('#cantBaguettes')
  //   spanBaguettes.innerHTML = `x ${cantidadBaguettes}`
  // }
const sumaTotal = ()=> {
  total = total + productoPrueba.precio 
  return total
}
  totalCarrito.innerHTML = `$${sumaTotal()}`
  //VACIAR CARRITO

  vaciarCarro.addEventListener("click", ()=>{

    carritoDeCompras = []
    console.log(carritoDeCompras);
    carritoContainer.innerHTML= ``
    totalCarrito.innerHTML = `$0`
    total = 0
    cantidadBaguettes = 0
    cantidadEnsaladas = 0
    cantidadWraps = 0
    })
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
            carritoDeCompras = []
            console.log(carritoDeCompras);
            carritoContainer.innerHTML= ``
            totalCarrito.innerHTML = `$0`
            total = 0
            cantidadBaguettes = 0
            cantidadEnsaladas = 0
            cantidadWraps = 0
            
        }
      })
})
 


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



//LISTENERS
searchButton.addEventListener('click', buscarProducto)
searchBar.addEventListener('input', buscarProducto)

