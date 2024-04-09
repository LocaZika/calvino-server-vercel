import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { connect } from "mongoose";
import indexRouter from "./routes/index";
import headerRouter from "./routes/header/header.router";
import footerRouter from "./routes/footer/footer.router";
import serviceRouter from "./routes/service/service.router";
import aboutRouter from "./routes/about/about.router";
import planRouter from "./routes/plan/plan.router";
import chooseUsRouter from "./routes/chooseUs/chooseUs.router";
import caseStudyRouter from "./routes/caseStudy/caseStudy.router";
import homePageRouter from "./routes/homePage/homePage.router";
import aboutPageRouter from "./routes/aboutPage/aboutPage.router";
import servicePageRouter from "./routes/servicePage/servicePage.router";
import caseStudyPageRouter from "./routes/caseStudyPage/caseStudyPage.router";
import contactPageRouter from "./routes/contactPage/contactPage.router";

// load env file
dotenv.config({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`) });
// declare variables
const app = express();
const uri_mongoDB = process.env.URI_MONGODB;
// connect to database
connect(uri_mongoDB, { dbName: "calvino" })
  .then(() => console.log("Connect successfully!"))
  .catch((err) => console.log("Connect failed!", "\n", "Error: " + err.message));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());
app.all("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// router
app.use("/", indexRouter);
app.use("/header", headerRouter);
app.use("/footer", footerRouter);
app.use("/service", serviceRouter);
app.use("/about", aboutRouter);
app.use("/plan", planRouter);
app.use("/chooseUs", chooseUsRouter);
app.use("/caseStudy", caseStudyRouter);
// pages
app.use("/homePage", homePageRouter);
app.use("/aboutPage", aboutPageRouter);
app.use("/servicePage", servicePageRouter);
app.use("/contactPage", contactPageRouter);
app.use("/caseStudyPage", caseStudyPageRouter);
// Create server

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running in port: " + process.env.PORT);
});

export default app;
