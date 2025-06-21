import userModel from "../model/user.model.js";

const createUser = async ({ fullname, email, password }) => {
  // console.log(firstname, lastname, email, password + "user.service.js");

  if (!fullname.firstname || !email || !password) {
    throw new Error("All fields are required");
  }

  try {
    const user = userModel.create({
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname || "",
      },
      email,
      password,
    });

    return user;
  } catch (error) {
    if (error.message.includes("duplicate key error collection")) {
      return { error: "E-mail already registered", success: false };
    }
  }
};

export { createUser };
