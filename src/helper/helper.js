import alkemyApi from "../api/login";

export const handleDate = (date) => {
    return date.slice(0, 10);
};

export const searchuser = async (receptorId, Autorizacion) => {
 const res = await alkemyApi.get(`accounts/${receptorId}`, Autorizacion);
 return res.data;
};

export const getReceptorName = async (userId, Autorizacion) => {
  const res = await alkemyApi.get(`users/${userId}`, Autorizacion);
 return res.data;
};
