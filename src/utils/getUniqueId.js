var unique = 0;

module.exports = function getUniqueId() {
  return '' + (unique++);
}