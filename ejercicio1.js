async function consultarNombre() {
    try{
        const  respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
    const nombres = await respuesta.json()

    const nombreUsuario = nombres.map(nombre => nombre.name)
    console.log(nombreUsuario)
    }
    catch(error){
        console.log("Error: " , error.message)
        
    }
    
}

consultarNombre()