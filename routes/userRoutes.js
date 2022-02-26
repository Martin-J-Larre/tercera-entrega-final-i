const { Router } = require('express');
const express = require('express');
const router = express.Router();
// const CryptoJS = require('crypto-js');


// const User = require('../models/UserModel');
const { verifyToken, verifyTokenAndAuthorization } = require('../middlewares/auth');
const { updateUser } = require('../controllers/userControllers');

router.put('/:id', verifyTokenAndAuthorization, updateUser);


//------------ OLD UPDATE DELETE AFTER
// router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
//     if (req.body.password) {
//         req.body.password = CryptoJS.AES.encrypt(
//             req.body.password,
//             process.env.PASS_SEC
//         ).toString();
//     }

//     try {
//         const updatedUser = await User.findByIdAndUpdate(
//             req.params.id,
//             {
//                 $set: req.body,
//             },
//             { new: true }
//         );
//         res.status(200).json(updatedUser);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
