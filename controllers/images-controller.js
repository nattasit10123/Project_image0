const db = require("../models/db");

exports.getByImages = async (req, res, next) => {
    try {
        const Image = await db.image.findMany({
        
        });
        res.json({Image});
    } catch (err) {
        next(err);
    }
};


exports.createImages = async (req, res, next) => {
    // validate req.body
    const data = req.body
    console.log("🚀 ~ exports.createimages= ~ data:", data)
    try{
      const dataimages = {...data};
  
      const rs = await db.image.create({ data: dataimages  })
      console.log(rs)
      res.json({ msg: 'Create OK' , result : rs })
    }catch(err) {
      next(err)
    }
  }
exports.updateImages = async (req, res, next) => {
    const {id} = req.params;
    const data = req.body;
    try {
        const rs = await db.image.update({
            data: {...data},
            where: {id: +id, userId: req.user.id},
        });
        res.json({msg: "Update OK", result: rs});
    } catch (err) {
        next(err);
    }
};

exports.deleteImages = async (req, res, next) => {
    const {id} = req.params;
    try {
        const rs = await db.image.delete({where: {id: +id, userId: req.user.id}});
        res.json({msg: "Delete OK", result: rs});
    } catch (err) {
        next(err);
    }
};
