const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Category = require("../models/category");
const mongoose = require("mongoose");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  async function seedCateg(titleStr) {
    try {
      const categ = await new Category({ title: titleStr });
      await categ.save();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }
  await seedCateg("Nendoroid");
  await seedCateg("figma");
  await seedCateg("Scale Figure");
  await seedCateg("POP UP PARADE");
  await seedCateg("S.H.Figuarts");
  await seedCateg("FiguartsZERO");
  await seedCateg("S.H.MonsterArts");
  await seedCateg("PROPLICA");
  await seedCateg("METAL BUILD");
  await seedCateg("THE ROBOT SPIRITS");
  await closeDB();
}

seedDB();
