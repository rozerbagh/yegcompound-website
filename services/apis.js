// const baseURL = 'http://3.110.157.141:3003/api/v1'
const baseURL = 'https://seal-app-mb688.ondigitalocean.app/api/v1'
// const baseURL = 'http://localhost:3003/api/v1'
export const login = `${baseURL}/user/login`;
export const signup = `${baseURL}/user/signup`;
export const createOrders = `${baseURL}/app/order/add`;
export const updateOrders = `${baseURL}/app/order/update/:id`;
export const fetchOrders = (userid) => `${baseURL}/app/order/getUserOrder/${userid}`;
export const fetchSetting = `${baseURL}/app/setting/all`;
export const testimonials = `${baseURL}/app/testimonial/all`