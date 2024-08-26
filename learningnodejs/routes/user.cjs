const express = require('express');
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUser, handleCreateNewUser } = require('../controllers/user.cjs')

const router = express.Router();

// router.get('/users', async (req, res) => {
//     const allDbUsers = await User.find({});
//     const html = `
//     <ul>
//         ${users.map(user => `<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html)
// });

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser)

router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUser);

module.exports = router;