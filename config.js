var config = {
  "nasPath": "//10.13.1.53/nas/gfx/newshub-gfx",
  "userImgs": '',
  "jobTypeConfig": '',
  "loaded": true
}

config.userImgs = config.nasPath + "users/user-imgs";
config.jobTypeConfig = config.nasPath + "_config/jobIO/jobConfig/jobTypeConfig.js";

console.log('config.js loaded.');
