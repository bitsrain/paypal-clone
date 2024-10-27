export const invoiceDraftToRequestable = (invoice) => {
  const {
    invoiceNumber,
    recipient,
    items,
    sellerNote,
    shipGoods,
  } = invoice;

  return {
    payer_id: recipient.id,
    items: items.map((item) => ({ ...item, unit_price: item.price })),
    notes: sellerNote,
    invoice_number: invoiceNumber || 'INV-0001',
    ship_goods: shipGoods,
  };
};
