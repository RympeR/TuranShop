import ApiSectionShop from '../../apiRequests/shop/apiShop';
import { getProducts } from "../../actions/productActions";

export const loadProductsAsync = () => (dispatch: (arg0: any) => void) => {
	ApiSectionShop.getFilteredProducts()
		.then((response: { data: any; }) => {
			console.warn(response.data)
			return dispatch(getProducts(response.data))
		}
		)
		.catch((error: { message: any; }) => {console.error(error)});
};

export const deleteShopAsync = () => ''

export const loadCategoriesAsync = () => ''
export const loadPaymentsMethodsAsync = () => ''
export const loadDeliveryMethodsAsync = () => ''
export const loadSingleProductAsync = () => ''
export const loadOrderAsync = () => ''
export const loadShopAsync = () => ''

export const createCardAsync = () => ''
export const createCardCommentAsync = () => ''
export const createCardRateAsync = () => ''
export const createShopRateAsync = () => ''
export const createShopCommentAsync = () => ''
export const createShopAsync = () => ''
export const createCouponAsync = () => ''
export const createAddressAsync = () => ''
export const createScheduleAsync = () => ''
export const createOrderAsync = () => ''
export const createOrderItemAsync = () => ''

export const partialUpdateShopAsync = () => ''