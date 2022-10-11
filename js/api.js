const Api = (() => {
  const saveBill = async (bill) => {
    let result = await axios.post('http://127.0.0.1:8086/bill', bill);
    console.log(result.response);
  };

  return {
    saveBill,
  };
})();
