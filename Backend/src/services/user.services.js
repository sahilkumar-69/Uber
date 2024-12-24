import userModel from "../model/user.model.js";

const createUser = async ({ firstname, lastname, email, password }) => {
  // console.log(firstname, lastname, email, password + "user.service.js");

  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }

  const user = userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
};

export { createUser };
