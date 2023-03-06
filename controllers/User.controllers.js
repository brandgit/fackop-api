import ContactForm from "../models/User.model.js";
import NewslatterModel from "../models/Newslatter.model.js";

export async function registerUser(req, res) {
  try {
    const { name, firstname, email, phone, message } = req.body; // Recuperation des données
    const user = new ContactForm({
      name,
      firstname,
      email,
      phone,
      message,
    });

    user
      .save()
      .then((result) => {
        res.status(201).send({ message: "User Register Successfully" });
        console.log("User Register Successfully");
      })
      .catch((error) => res.status(501).send({ error }));
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function registerNewslatter(req, res) {
  try {
    const { email } = req.body; // Recuperation des données
    const user = new NewslatterModel({
      email,
    });

    user
      .save()
      .then((result) => {
        res.status(201).send({ message: "Register newslatter Successfully" });
        console.log("Register newslatter Successfully");
      })
      .catch((error) => res.status(501).send({ error }));
  } catch (error) {
    return res.status(500).send(error);
  }
}

// export async function unsubscribeNewslatter(req, res) {
//   try {
//     const { email, newslatter } = req.body; // Recuperation des données
//     const user = new NewslatterModel({
//       email,
//       newslatter,
//     });

//     user
//       .save()
//       .then((result) => {
//         res.status(201).send({ message: "Register newslatter Successfully" });
//         console.log("Register newslatter Successfully");
//       })
//       .catch((error) => res.status(501).send({ error }));
//   } catch (error) {
//     return res.status(500).send(error);
//   }
// }
