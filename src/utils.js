const paginate = (coins) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(coins.length / itemsPerPage);

  const newCoins = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return coins.slice(start, start + itemsPerPage);
  });
  return newCoins;
};

export default paginate;
