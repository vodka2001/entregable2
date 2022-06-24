const fs = require('fs')

class Contenedor {
    constructor(nombre){
        this.nombre = nombre
    }
    async save(obj){
        try{
            const contenido =  fs.readFileSync(this.nombre)
            const contenido_parsed = JSON.parse(contenido)
            obj["id"] = (contenido_parsed[contenido_parsed.length -1].id) + 1
            fs.writeFileSync("./productos.txt",JSON.stringify([...contenido_parsed,obj]))
        }
        catch(err){
            fs.writeFileSync("./productos.txt",JSON.stringify([{...obj,id: 0}]))
        }
    }
    getById(id){
        try {
            const productos = this.getAll()
            return productos.find(producto => id === producto.id)
        } catch (error) {
            console.log(error)
        }
    }
    getAll(){
        try {
            const contenido =  fs.readFileSync(this.nombre)
            return JSON.parse(contenido)
        } catch (error) {
            console.log("No se pudo leer el archivo.")
        }
    }

    removeAll=async()=>{
        try {
           const productos = new Contenedor;
                    productos.deleteAll();
            const data = findAll()        
            console.log('Todos Los productos Borrados');;
    
        } catch (error) {
            console.log(error);
        }
    
    }

    removeById= async(id)=>{
        try {
            const productos = new Contenedor;
            await productos.deleteById(id);     
            console.log('Producto Borrado');
            
        } catch (error) {
            console.log(error);
        }
    }
} 

const cont1 = new Contenedor("./productos.txt")

//Prueba
cont1.save({                                                                                                                                                    
    title: 'Escuadra',                                                                                                                                 
    price: 123.45,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
                                                                                                                                            
  },)

  *cont1.save({                                                                                                                                                
    title: 'Globo Terráqueo',                                                                                                                          
    price: 345.67,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                                                                       id: null                                                                                  
  },)

  cont1.save( {                                                                                                                                                    
    title: 'Calculadora',                                                                                                                              
    price: 234.56,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
    id: null                                                                                                                                           
  },)*

 console.log(cont1.getAll())

console.log(cont1.getById(1))

