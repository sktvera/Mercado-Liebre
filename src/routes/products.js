// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');

const multer = require('multer');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');


//***  Multer configuration  ****/

const configuracionImagen = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/images/products'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName =  Date.now() + file.originalname ;   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});


const uploadFile = multer({ storage: configuracionImagen });


/*** GET ALL PRODUCTS ***/ 
router.get("/", productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get("/create", productsController.create); 
router.post("/create", uploadFile.single('imageProduct'), productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get("/detail/:id", productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete("/:id", productsController.destroy); 


module.exports = router;
