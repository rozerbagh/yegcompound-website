export function formBuilderInputs(value, valid, type, name, validFunc) {
    return {
        value: value,
        valid: valid,
        type: type,
        name: name,
        validfunc: validFunc
    };
}

export const estLabourCost = (b2) => {
    var labourCost = 0;
    switch (b2) {
        case b2 >= 0 && b2 <= 100:
            labourCost = 0.5;
        case b2 >= 101 && b2 <= 249:
            labourCost = 1;
        case b2 >= 250 && b2 <= 500:
            labourCost = 1.25;
        case b2 >= 501 && b2 <= 999:
            labourCost = 1.5;
        case b2 >= 1000 && b2 <= 1499:
            labourCost = 2;
        case b2 >= 1500 && b2 <= 1999:
            labourCost = 2.5;
        case b2 >= 2000 && b2 <= 2499:
            labourCost = 3;
        case b2 >= 2500 && b2 <= 2999:
            labourCost = 3;
        case b2 >= 3000 && b2 <= 3499:
            labourCost = 3.5;
        case b2 >= 4000 && b2 <= 4499:
            labourCost = 4;
        case b2 >= 4500 && b2 <= 4999:
            labourCost = 4.5;
        case b2 >= 5000 && b2 <= 5999:
            labourCost = 5;
        case b2 >= 6000 && b2 <= 6999:
            labourCost = 6;
        case b2 >= 7000 && b2 <= 7999:
            labourCost = 7;
        case b2 >= 8000 && b2 <= 8999:
            labourCost = 8;
        case b2 >= 9000 && b2 <= 9999:
            labourCost = 9;
        case b2 >= 10000 && b2 <= 10999:
            labourCost = 10;
            break;
        default:
            break;
    }
    return labourCost
}