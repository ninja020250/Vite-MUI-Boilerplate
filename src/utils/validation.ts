export const REGEX = {
  EMAIL: /^\S+@\S+\.\S+$/,
};

export const checkEmailFormat = (value: string, regex = REGEX.EMAIL) => {
  return regex.test(value) || "Invalid email format";
};
