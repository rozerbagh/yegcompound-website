export const roundOf5 = (val) => parseInt(Math.ceil(val / 5) * 5);
export const addIngredientsCost = (ingredients, quantity) => {
  var sum = 0;
  console.log(ingredients, ":::: new calculations :::");
  ingredients.map((ele) => {
    const amount = (parseInt(ele.percentage) / 100) * quantity;
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
  const markup = ingredientsCost * (profit / 100);
  const subTotal =
    ingredientsCost + markup + labourCost + containerCost + deliveryFee;
  const franchiseFee = subTotal * 0.075268;
  const costToBuyer = subTotal + franchiseFee;
  const rebaate = ((costToBuyer * (rebate / 100)) / (1 - rebate / 100)) * 1.04;
  const chargingFee = 4.91;
  const totalPrice = costToBuyer + rebaate + chargingFee;
  const needToPay = parseInt(Math.ceil(costToBuyer));
  return {
    markup,
    subTotal,
    franchiseFee,
    costToBuyer,
    rebaate,
    totalPrice: roundOf5(totalPrice),
    needToPay: needToPay,
  };
};
