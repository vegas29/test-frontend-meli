import { AUTHOR, MAX_LENGTH_ITEMS } from "../config/constants.js";
import formatResponseItem from "./formatResponseItem.js";

const formatResponseItems = (items, categories) => {

    const formatItems = () => {
        return items?.slice(0, MAX_LENGTH_ITEMS).map((item) => formatResponseItem(item));
    }

    const formatCategories = () => {
        return categories?.values[0]?.path_from_root.map((category) => category?.name);
    }

  return {
    AUTHOR,
    categories: categories
      ? formatCategories()
      : [],
    items: formatItems(),
  };
};

export default formatResponseItems;
