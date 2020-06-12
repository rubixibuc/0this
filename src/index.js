module.exports = (func) =>
  function () {
    return func.apply(
      null,
      [this].concat(Array.prototype.slice.call(arguments))
    );
  };
