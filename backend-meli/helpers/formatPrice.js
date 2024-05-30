const formatPrice = (price) => {
    if (Math.floor(price) === price) return 0;
    return price.toString().split(".")[1].length || 0;
};

export default formatPrice;