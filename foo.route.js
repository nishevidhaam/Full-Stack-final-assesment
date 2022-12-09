const{ Router }=require("express");
const router=new Router();
const fooService=require("../service/foo.service");
router.get("/",fooService.getEmployee);
router.get("/:id",fooService.getEmployeeById);
module.exports=router;