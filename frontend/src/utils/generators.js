export const uniqKeyGen = (seed = null) => `${Date.now()}${seed || ''}`;
export const genInitials = (name) => {
  if (!name) return '';
  const nameParts = name.trim().split(' ');
  const initials = nameParts.map((part) => part[0]).join('');
  return initials.slice(0, 2).toUpperCase(); // Get first two initials
};
