export const constants = {
  apiSuccess: "success",
  apiFailure: "failure",

  //Async Keys
  // asyncUserToken: "user_data",
};

export const fontFamily = {};

export const regex = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\\\[\\\](){}?\\\\|,.<>;/'":`.!~*_@#$%^&+=\-])(?=.{8,})/,
  phoneNumber:
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  notNumber: /^([^0-9]*)$/,
  notSpace: /^\S*$/,
};
