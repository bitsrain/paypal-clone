exports.invoiceTotalFromItems = items => {
  return items.reduce((total, item) => total + item.quantity * item.unit_price, 0);
};
