const env = process.env.REACT_APP_ENV;

let Config = {
  baseURL: "http://localhost/",
};
// >> What does this baseURL mean? standard

switch (env.toUpperCase()) {
  case "STAGE":
    Config.baseURL = "https://kmings93.github.io/assignment-2.13-Attempt/";
    break;
  case "PRODUCTION":
    Config.baseURL = "https://skillsunion.com";
    break;
  default:
    console.log("Error");
    alert("Ërror");
}

export default Config;
// export APP_ENV=dev
// "build:stage": "REACT_APP_ENV=stage react-scripts build",
