export const formatPrice = (num:number, symbol:string = "$", decimals = 0) => {
    if (isNaN(num)) {
      return `${symbol} 0`;
    }
  
    const formattedNum = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(num);
  
    return `${symbol} ${formattedNum}`;
};