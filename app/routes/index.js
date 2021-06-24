const router=require("express").Router()

let Trabajadores=require("./Trabajadores")
router.use("/Trabajadores",Trabajadores)

module.exports=router;