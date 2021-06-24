let Trabajadores=require("../models/Trabajadores");
let Lista=require("../../db/Lista")
module.exports={
   listar:(req,res)=>{
    res.json("{Mensaje:'Todos los trabajadores',lista:"+Lista.listar()+"}")   
   },
   buscar:(req,res)=>{
      let Persona=Lista.buscar(req.params.id);
      if(Persona==null){
         res.json("{Mensaje:'No se encontro la persona',nombre:'"+req.params.id+"'}")
         }  
      else
      res.json("{Mensaje:'buscar una persona',id:"+Persona.id+",nombre:"+Persona.nombre+",edad:"+Persona.edad+",Telefono:"+Persona.telefono+"}")
   },
   borrar:(req,res)=>{
      res.json("{Mensaje:'Se elimino una persona',id:"+req.params.id+"}")
   },
   agregar:(req,res)=>{
      console.log(req.body)
      let id=req.body.id;
      let nombre=req.body.nombre;
      let edad=req.body.edad;
      let telefono=req.body.telefono;
      let Trabajador= new Trabajadores(id,nombre,edad,telefono);
      Listar.agregar(Trabajador)
      res.json("{Mensaje:'buscar una persona',id:"+Persona.id+",nombre:"+Persona.nombre+",edad:"+Persona.edad+",Telefono:"+Persona.telefono+"}")
   }
}