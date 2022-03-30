const env = process.env.REACT_APP_ENV;

let Config = {
  baseURL: "http://localhost/",
};

switch (env.toUpperCase()) {
  case "STAGE":
    Config.baseURL = "https://stage.skillsunion.com";
    break;
  case "PRODUCTION":
    Config.baseURL = "https://skillsunion.com";
    break;
  default:
    console.log("Error");
    alert("Ërror");
}

export default Config;
