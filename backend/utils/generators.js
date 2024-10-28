exports.generateTransactionSlug = () => {
  const timestamp = Date.now().toString();
  const randomChar1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const randomChar2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const randomChar3 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const randomChar4 = String.fromCharCode(65 + Math.floor(Math.random() * 26));

  return `${randomChar1}${randomChar2}${timestamp.slice(0, 4)}${randomChar3}${timestamp.slice(4)}${randomChar4}`;
}
