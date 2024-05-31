import axios from "axios";
import formatResponseItems from "../helpers/formatResponseItems.js";
import formatResponseItem from "../helpers/formatResponseItem.js";

const getItemByQuery = async (req, res) => {
  const { q } = req.query;
  
  try {
    const response = await axios(`${process.env.API_MELI}/sites/MLA/search?q=${q}`);
    const categories = response.data.filters.find(
      (filter) => filter.id === "category"
    );
    res.json(formatResponseItems(response.data.results, categories));
  } catch (error) {
    console.log("Error on getItemByQuery controller", error);

    const { response } = error;

    if (response) {
      res.status(response.status).json({ error: response.data.message });
    }
  }
};

const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const responseItem = await axios(`${process.env.API_MELI}/items/${id}`);
    const { data } = responseItem;
    const responseDescription = await axios(
      `${process.env.API_MELI}/items/${id}/description`
    );
    const { data: responseData } = responseDescription;
    const response = formatResponseItem(data);
    response.description = responseData?.plain_text;
    res.json(response);
  } catch (error) {
    console.log("Error on getItemById controller", error);

    const { response } = error;

    if (response) {
      res.status(response.status).json({ error: response.data.message });
    }
  }
};

export { getItemById, getItemByQuery };
