export const requiredField = (value) => (value ? undefined : "Required");

export const maxLength = (maxLength) => (value) =>
  value.length > maxLength ? `Max field's lenght is ${maxLength}` : undefined;
