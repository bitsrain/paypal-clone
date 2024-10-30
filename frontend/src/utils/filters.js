export const noFiltersExcept = (filters, exceptionField = null) => {
  let definedCount = 0;

  for (let fieldName in filters) {
    const fieldValue = filters[fieldName];

    if (fieldName !== exceptionField && !!fieldValue) {
      definedCount++;
    }
  }

  return !definedCount;
};
