module.exports = function parseS(array){
  return array.split(',').map(tech => tech.trim());
}