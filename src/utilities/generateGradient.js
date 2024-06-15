function generateGradient(values, colorChart) {
  let colorArr = [];
  let outputString = 'linear-gradient(to right, ';
  for (let key of Object.keys(values)) {
    if (key === 'isDictOptimized') {
      if (!values[key]) {
        colorArr.push(colorChart['isReversedOptimized']);
      } else if (!values.isBothOptimized) {
        colorArr.push(colorChart[key]);
      }
    } else if (values[key]) {
      colorArr.push(colorChart[key]);
    }
  }
  return {
    color: colorArr[0],
    gradient:
      colorArr.length > 1 ? `${outputString}${colorArr.join(', ')})` : '',
  };
}

export default generateGradient;
