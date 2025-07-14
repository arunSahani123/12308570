export const validateURL = (url) => {
  const pattern = /^(https?:\/\/)?(([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,})(\:[0-9]{1,5})?(\/.*)?$/i;
  return pattern.test(url);
};

export const validateShortcode = (code) => {
  const pattern = /^[a-zA-Z0-9]{1,10}$/; // alphanumeric and max length 10
  return pattern.test(code);
};