import {
  SET_ALL_PRODUCTS,
  SET_ONE_PAGE_PRODUCT,
  SET_NUMBER_PAGE_PRODUCT,
  SET_TYPE_PRODUCT,
  SET_ALL_TYPE_PRODUCT,
  SET_PASSWORD,
  SET_EMAIL,
  SET_USER_LOGIN,
  SET_STATUS_LOGIN,
  GET_CARTS,
  SET_USER_NAME,
  SET_UPDATE_CART,
  SET_DELETE_CART,
  SET_UPDATE_LIST_PRODUCT,
  SET_LIST_USER,
  SET_CART,
  SET_SEARCH,
  GET_DETAILS_PRODUCT,
  SET_LIST_BILL,
  GET_DETAILS_BILL,
  GET_DETAIL_BILL
} from "./constants";

export const setAllProducts = (payload) => ({
  type: SET_ALL_PRODUCTS,
  payload,
});
export const setOnePageProduct = (payload) => ({
  type: SET_ONE_PAGE_PRODUCT,
  payload,
});
export const setNumberPageProduct = (payload) => ({
  type: SET_NUMBER_PAGE_PRODUCT,
  payload,
});
export const setTypeProduct = (payload) => ({
  type: SET_TYPE_PRODUCT,
  payload,
});
export const setALLTypeProduct = (payload) => ({
  type: SET_ALL_TYPE_PRODUCT,
  payload,
});
export const setPassword = (payload) => ({
  type: SET_PASSWORD,
  payload,
});
export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});
export const setUserLogin = (payload) => ({
  type: SET_USER_LOGIN,
  payload,
});
export const setStatusLogin = (payload) => ({
  type: SET_STATUS_LOGIN,
  payload,
});
export const setUsername = (payload) => ({
  type: SET_USER_NAME,
  payload,
});
export const  getCarts = (payload) =>  ({
  type: GET_CARTS,
  payload,
});
export const setUpdateCart = (payload) => ({
  type: SET_UPDATE_CART,
  payload
});
export const setDeleteCart = (payload) => ({
  type: SET_DELETE_CART,
  payload
})
export const setUpdateListProduct = (payload) => ({
  type: SET_UPDATE_LIST_PRODUCT,
  payload
});
export const setListUser = (payload) => ({
  type: SET_LIST_USER,
  payload
})
export const setCart = (payload) => ({
  type: SET_CART,
  payload
})
export const setSearch = (payload) => ({
  type: SET_SEARCH,
  payload
})
export const getDetailsProduct = (payload) => ({
  type: GET_DETAILS_PRODUCT,
  payload
})
export const setListBill = (payload) => ({
  type: SET_LIST_BILL,
  payload
})
export const getDetailsBill = (payload) => ({
  type: GET_DETAILS_BILL,
  payload
})
export const getDetailBill = (payload) => ({
  type: GET_DETAIL_BILL,
  payload
})