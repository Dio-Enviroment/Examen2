module.exports = app => {
    const students = require("../controllers/student.controller.js");
  
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", students.create);
  
    // Retrieve all Tutorials
    router.get("/", students.findAll);//as
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    //router.get("/:id", students.findOne);

    //router.get("/:id", students.findByEmail);
  
    // Update a Tutorial with id
    router.put("/:id", students.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", students.delete);
  
    // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/students', router);
  };