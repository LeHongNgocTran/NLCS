
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
  SET_UPDATE_CART,
  SET_DELETE_CART,
  SET_UPDATE_LIST_PRODUCT,
  SET_LIST_USER,
  SET_CART,
  SET_SEARCH,
  GET_DETAILS_PRODUCT,
  SET_LIST_BILL,
  GET_DETAILS_BILL,
  GET_DETAIL_BILL,
  GET_DETAILS_BILL_USER
} from "./constants";

const initState = {
  allProduct: [],
  onePageProduct: [],
  numberPageProduct: 1,
  typeProduct: "",
  allTypeProduct: [],
  username: "",
  email: "",
  password: "",
  userLogin: {},
  statusLogin: "",
  carts: [],
  updateCart: 0,
  listUser: [],
  cart: {},
  searchProduct:"",
  detailsProduct:"",
  listBill:[],
  detailsBill : "",
  detailsBills : "",
  listBillUser:""
};

function reducer(state, action) {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        allProduct: action.payload,
      };
    case SET_ONE_PAGE_PRODUCT:
      if (action.payload) {
        return {
          ...state,
          onePageProduct: [...state.onePageProduct, action.payload],
        };
      } else {
        return {
          ...state,
          onePageProduct: [],
        };
      }
    case SET_NUMBER_PAGE_PRODUCT:
      return {
        ...state,
        numberPageProduct: action.payload,
      };
    case SET_TYPE_PRODUCT:
      return {
        ...state,
        typeProduct: action.payload,
      };
    case SET_ALL_TYPE_PRODUCT:
      return {
        ...state,
        allTypeProduct: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_USER_LOGIN:
      return {
        ...state,
        userLogin: action.payload,
      };
    case SET_STATUS_LOGIN:
      return {
        ...state,
        statusLogin: action.payload,
      };

    case GET_CARTS:
      return {
        ...state,
        carts: action.payload,
      };
    case SET_UPDATE_CART:
      return {
        ...state,
        updateCart: state.updateCart + 1,
      };
    case SET_DELETE_CART:
      return {
        ...state,
        deleteCart: action.payload,
      };
    case SET_UPDATE_LIST_PRODUCT:
      return {
        ...state,
        updateListProduct: state.updateListProduct + 1,
      };
    case SET_LIST_USER:
      return {
        ...state,
        listUser: action.payload,
      };
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        searchProduct: action.payload,
      };
    case GET_DETAILS_PRODUCT:
      return {
        ...state,
        detailsProduct: action.payload,
      };
    case SET_LIST_BILL:
      return {
        ...state,
        listBill : action.payload,
      };
    case GET_DETAILS_BILL:
      return {
        ...state,
        detailsBill: action.payload,
      };
      case GET_DETAIL_BILL:
        return {
          ...state,
          detailBill: action.payload,
        };
      case GET_DETAILS_BILL_USER:
        return{
          ...state,
          listBillUser: action.payload,
        }
    default:
      throw new Error("Unknown action type: " + action.type);
  }
}

export { initState };
export default reducer;
