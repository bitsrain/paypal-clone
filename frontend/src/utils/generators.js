export const uniqKeyGen = (seed = null) => `${Date.now()}${seed || ''}`;
export const genInitials = (name) => {
  if (!name) return '';
  const nameParts = name.trim().split(' ');
  const initials = nameParts.map((part) => part[0]).join('');
  return initials.slice(0, 2).toUpperCase(); // Get first two initials
};
export const generateInvoiceLink = (invoice_id) => {
  const protocol = window.location.protocol; // 'http:' or 'https:'
  const host = window.location.host; // 'example.com' or 'sub.example.com'

  // Construct the full URL
  return `${protocol}//${host}/invoices/v/${invoice_id}`;
};