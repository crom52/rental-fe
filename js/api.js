const Api = (() => {
  const saveBill = async (bill) => {
    let result = await axios.put('http://127.0.0.1:8086/bill', bill);
    console.log(result);
    return result.data;
  };

  return {
    saveBill,
  };
})();
