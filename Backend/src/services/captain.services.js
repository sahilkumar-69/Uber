import { captainModel } from "../model/captain.model.js";

const createCaptain = async ({ fullname, email, password, vehicle }) => {
  try {
    const captain = await captainModel.create({
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname || "",
      },
      email,
      password,
      vehicle,
    });
    return captain;
    // const token = await captain.generateAuthToken();
    // res.status(201).send({ captain, token });
  } catch (error) {
    console.log(error, "Error in creating captain");
    // res.status(400).send(error);
  }
};

export { createCaptain };
