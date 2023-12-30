const baseURL = "https://walrus-app-uwy4g.ondigitalocean.app/api/v1";
// const baseURL = "http://localhost:3003/api/v1";
export const login = `${baseURL}/user/login`;
export const signup = `${baseURL}/user/signup`;
export const contactApi = `${baseURL}/user/contact`;
export const sendOTP = `${baseURL}/user/forgot-password`;
export const verifyOTP = `${baseURL}/user/verify-otp`;
export const resetPassword = `${baseURL}/user/reset-password`;
export const userdetails = (id) => `${baseURL}/user/get/${id}`;
export const userUpdate = (id) => `${baseURL}/user/update/${id}`;
export const createOrders = `${baseURL}/app/order/add`;
export const updateOrders = `${baseURL}/app/order/update/:id`;
export const fetchOrders = (userid) =>
  `${baseURL}/app/order/getUserOrder/${userid}`;
export const fetchSetting = `${baseURL}/app/setting/all`;
export const testimonials = `${baseURL}/app/testimonial/all`;
export const fecthPincode = (pincode) =>
  `${baseURL}/app/fetch-pincode-address/${pincode}`;
