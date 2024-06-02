import { AUTHOR } from "../config/constants.js";
import formatPrice from "./formatPrice.js";

const formatResponseItem = ({
  id,
  title,
  currency_id,
  price,
  thumbnail,
  pictures,
  condition,
  shipping,
  address,
  initial_quantity,
  category_id,
}) => {
  return {
    author: AUTHOR,
    id,
    title,
    condition,
    price: {
      currency: currency_id,
      amount: price,
      decimals: formatPrice(price),
    },
    thumbnail,
    pictures: pictures ? pictures[0] : '',
    free_shipping: shipping.free_shipping,
    address: address ? address.state_name : null,
    initial_quantity,
    category_id,
  };
};

export default formatResponseItem;
