

module.exports = function towelSort (matrix = []) {
  return matrix.reduce((a, b, i) => {
    return a.concat(b.sort((x, y) => i % 2 ? y - x : x - y));
  }, []);
}
