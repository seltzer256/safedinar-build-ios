export const spacing = 20;
export const bottomTabHeightWithOutNotch = 60;
export const bottomTabHeightWithNotch = 85;
export const marginBottom = 16;

export const emailRegexExpression =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const phoneRegexExpression =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const ssnRegexExpression =
  /^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$/;

export const getRHFErrorMessage = (errors, name) => {
  const splitName = name.split(".");
  const getError = () => {
    if (splitName.length === 2) {
      return errors[splitName[0]]?.[splitName[1]];
    }
    if (splitName.length === 3) {
      return errors[splitName[0]]?.[splitName[1]]?.[splitName[2]];
    }
    return errors[name];
  };
  const error = getError();

  if (error) {
    // console.log("error :>> ", error);
    switch (error.type) {
      case "valueAsNumber":
        return `${name} is not a valid number`;
      case "required":
        return "Required";
      case "min":
        return `Min ${rules.min}`;
      case "max":
        return `Max ${rules.max}`;
      case "maxLength":
        return `Text too long. Max ${rules.maxLength}`;
      case "minLength":
        return `Text too short. Min ${rules.minLength}`;
      case "pattern":
        return `${name} is not valid`;
      case "validate":
        //console.log(errors)
        return error.message;
      default:
        return "";
    }
  }
};
