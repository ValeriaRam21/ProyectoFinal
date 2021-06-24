const router=require("express").Router()
let petcontroller=require("../controllers/ControlTrabajador")
router.get("/",(req,res)=>{
    petcontroller.listar(req,res)
})
router.get("/:id",(req,res)=>{
   petcontrolller.listar(req.res) 
})
router.delete("/:id",(req,res)=>{
    petcontroller.borrar(req,res);
})
router.post("/",(req,res)=>{
    petcontroller.agregar
})
module.exports=router;