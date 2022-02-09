const User = require("../models/user");

// Creating an a default admin for the database
const {
    DEFAULT_ADMIN_NAME: name,
    DEFAULT_ADMIN_EMAIL: email,
    DEFAULT_ADMIN_PASSWORD: password,
} = process.env;
const defaultAdminUser = new User({ name, email, password, role: "ADMIN" });
User.findOne({ email })
    .then((user) => {
        if (user === null) {
            return User.find();
        }
    })
    .then(async (users) => {
        // Check for the existence of data
        // Proceed if there is not document in the User collection
        if (users && users.length === 0) {
            // Save the default user if the database is new with no data stored in it
            await defaultAdminUser.save();
        }
    })
    .catch((e) => console.log(e));