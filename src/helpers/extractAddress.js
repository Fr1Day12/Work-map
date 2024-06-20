const extractAddress = (label) => {
  const addressMatch = label.split(",");
  if (addressMatch) {
    return `${addressMatch[1].split(" ").pop()} ${addressMatch[0]}`;
  }
  return label;
};

export default extractAddress;
