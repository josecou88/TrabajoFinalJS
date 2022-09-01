let productos = []

const getAllProducts = async () => {
    try{
      const response = await fetch('json/productos.json')
      productos = await response.json()
      renderizarProductos(productos)
    }catch{
      console.log("hubo un error");
    }   
  }
  
  //EJECUCIONES
  getAllProducts()