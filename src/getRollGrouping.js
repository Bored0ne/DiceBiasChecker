export const getRollGrouping = (rolls) => {
  return rolls.reduce((acc, roll) => {
    if (!(roll in acc)) {
      for (let i = 1; i < roll; i++){
        if (!(i in acc)){
          acc[`${i}`] = 0;
        }
      }
      acc[`${roll}`] = 1;
      return acc;
    }
    acc[`${roll}`]++;
    return acc;
  }, {})
}
