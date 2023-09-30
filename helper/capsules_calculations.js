export const roundOf5 = (val) => parseInt(Math.ceil(val / 5) * 5);
export const addIngredientsCost = (ingredients, quantity, no_of_capsules) => {
  var sum = 0;
  console.log(ingredients, ":::: new calculations :::");
  ingredients.map((ele) => {
    const amount = ele.percentage * parseInt(quantity);
    const ingredientCost = (ele.price / ele.pack_size) * amount;
    sum = ingredientCost + sum;
    console.log(ingredientCost, "::: ingredientCost ::: while adding");
  });
  return sum;
};

export const restAllCalculations = (
  ingredientsCost,
  profit,
  labourCost,
  containerCost,
  deliveryFee,
  rebate
) => {
  debugger;
  const markup = ingredientsCost * (profit / 100);
  const subTotal =
    ingredientsCost + markup + labourCost + containerCost + deliveryFee;
  const franchiseFee = subTotal * 0.075268;
  const costToBuyer = subTotal + franchiseFee;
  const rebaate = ((costToBuyer * (rebate / 100)) / (1 - rebate / 100)) * 1.04;
  const totalPrice = parseInt((costToBuyer + rebaate) * 1.04);
  const needToPay = parseInt(Math.ceil(costToBuyer));
  return {
    ingredientsCost,
    markup,
    labourCost,
    containerCost,
    deliveryFee,
    markup,
    subTotal,
    franchiseFee,
    costToBuyer,
    rebaate,
    totalPrice: roundOf5(totalPrice),
    needToPay: needToPay,
  };
};
