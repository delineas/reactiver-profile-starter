module.exports = formatDate = (date) => {
  return new Date(date).toLocaleDateString('es-ES', {
    month: `numeric`,
    day: `numeric`,
    year: `numeric`,
  });
};
