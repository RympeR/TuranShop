import { instance } from "../../../utils/axios_conf";

class ApiSectionShop {
    getFilteredProducts = () => instance.get("shop/cards-filtered/")
}

export default new ApiSectionShop();
