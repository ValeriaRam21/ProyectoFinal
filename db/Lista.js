class lista{
    constructor (){
        this.datos=new Array();
    }
    agregar(nuevo){
        this.datos.push(nuevo);
    }
    buscar(nombre){
        for(let i=0;i<this.datos.lenght;i++){
           if(this.datos[i].nombre==nombre)
           return this.datos[i]; 
        }
        return null;
    }
    listar(){
        return JSON.stringify(this.datos)
    }
}

module.exports=new lista();