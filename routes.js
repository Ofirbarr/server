// const { Vacation, Likes } = require("./modelz/models");

// const router = require("express").Router();

// router.get("/user", async (req, res) => {
//   try {
//     const user = await user.find({}, { __v: 0 });
//     res.send(user);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({ err });
//   }
// });

// router.get("/favorites", async (req, res) => {
//   try {
//     const like = await Likes.find({}, { __v: 0 });
//     res.send(like);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({ err });
//   }
// });

// // router.post('/', async (req, res) => {
// //     try {
// //         const addVacation = new Vacation(req.body)
// //         const data = await addVacation.save()
// //         res.send({ msg: "vacation added", data })
// //     } catch (err) {
// //         console.log(err)
// //         res.status(500).send({ err })
// //     }
// // })

// module.exports = router;
