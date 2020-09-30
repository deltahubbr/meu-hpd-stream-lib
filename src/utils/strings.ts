export const getPrimeiroNome = (str: string, maxChars = 15): string => {
  const primeiroNome = (str || '').split(' ');
  return (primeiroNome[0] || '').substring(0, maxChars);
};

export const removeWhitespaces = (src:  string, replaceChar = '_') => {
  return (src || '').split(' ').join(replaceChar);
};