import generateJWT from "../helpers/generateJWT.js";

const getToken = async (req, res) => {
  try {
    res.json({
      token: generateJWT(),
    });
  } catch (error) {

    const { response } = error;

    if (response) {
      res
        .status(response.status)
        .json({ error: response.data.message });
    }
  }
};

export { getToken };
