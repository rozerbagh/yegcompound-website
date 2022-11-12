const baseURL = 'http://143.244.128.159:3003/api/v1'
// const baseURL = 'http://localhost:3003/api/v1'
export const login = `${baseURL}/user/login`;
export const signup = `${baseURL}/user/signup`;
export const createOrders = `${baseURL}/app/order/add`;
export const updateOrders = `${baseURL}/app/order/update/:id`;
export const fetchOrders = (userid) => `${baseURL}/app/order/getUserOrder/${userid}`;