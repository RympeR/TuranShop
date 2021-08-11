import ApiSectionShop from '../../apiRequests/shop/apiShop';
import { getProducts } from "../../actions/productActions";

export const loadProductsAsync = () => (dispatch: (arg0: any) => void) => {
	ApiSectionShop.getFilteredProducts()
		.then((response: { data: any; }) => dispatch(getProducts(response.data)))
		.catch((error: { message: any; }) => {});
};
