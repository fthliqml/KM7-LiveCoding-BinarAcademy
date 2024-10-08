function sortCarByYearDescendingly(cars) {
  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  result.sort((a, b) => b.year - a.year);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
