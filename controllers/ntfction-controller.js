// const db = require("../models/db");

// exports.getByNtfction = async (req, res, next) => {
//     try {
//         const Notification = await db.notification.findMany({
//             where: {userId: req.user.id},
//         });
//         res.json({Notification});
//     } catch (err) {
//         next(err);
//     }
// };
// exports.createNtfction = async (req, res, next) => {
//     const data = req.body;
//     try {
//         const rs = await db.notification.create({
//             data: {...data, userId: req.user.id},
//         });
//         res.json({msg: "Create OK", result: rs});
//     } catch (err) {
//         next(err);
//     }
// };
// exports.updateNtfction = async (req, res, next) => {
//     const {id} = req.params;
//     const data = req.body;
//     try {
//         const rs = await db.notification.update({
//             data: {...data},
//             where: {id: +id, userId: req.user.id},
//         });
//         res.json({msg: "Update OK", result: rs});
//     } catch (err) {
//         next(err);
//     }
// };

// exports.deleteNtfction = async (req, res, next) => {
//     const {id} = req.params;
//     try {
//         const rs = await db.notification.delete({where: {id: +id, userId: req.user.id}});
//         res.json({msg: "Delete OK", result: rs});
//     } catch (err) {
//         next(err);
//     }
// };
