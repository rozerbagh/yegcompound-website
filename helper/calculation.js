export const addIngredientsCost = (ingredients, quantity) => {
    var sum = 0;
    ingredients.map(ele => {
        console.log("::: addfunc :::", ele)
        const amount = (parseInt(ele.percentage) / 100) * quantity;
        const ingredientCost = (ele.price / ele.pack_size) * amount;
        sum = ingredientCost + sum;
    })
    return sum
}

export const restAllCalculations = (
    ingredientsCost,
    profit,
    labourCost,
    containerCost,
    deliveryFee,
    rebate,
) => {
    const markup = ingredientsCost * (profit / 100);
    const subTotal = ingredientsCost + markup + labourCost + containerCost + deliveryFee;
    const franchiseFee = subTotal * 0.075268;
    const costToBuyer = subTotal + franchiseFee;
    const rebaate = (costToBuyer * rebate) / (1 + (1 * rebate));
    const totalPrice = costToBuyer + rebaate;
    const needToPay = costToBuyer;
    return {
        markup,
        subTotal,
        franchiseFee,
        costToBuyer,
        rebaate,
        totalPrice,
        needToPay,
    }
}