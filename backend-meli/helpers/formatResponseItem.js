import { AUTHOR } from "../config/constants.js";
import formatPrice from "./formatPrice.js";

const formatResponseItem = ({
  id,
  title,
  currency_id,
  price,
  thumbnail,
  condition,
  shipping,
  address,
  sold_quantity,
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
    picture: thumbnail,
    free_shipping: shipping.free_shipping,
    address: address ? address.state_name : null,
    sold_quantity,
    category_id,
  };
};

export default formatResponseItem;
