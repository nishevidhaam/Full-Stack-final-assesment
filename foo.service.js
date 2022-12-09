var Employee =require("./Employee.json");
module.exports.getEmployee=async(req,res,next)=>{console.log("testing..");
res.send(Employee);};
module.exports.getEmployeeById=async(req,res,next)=>{var id=req.params.id;var b=Employee.find(x=>x.id==id);
    res.send(b);

}
