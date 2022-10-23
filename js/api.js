const Api = (() => {
  const saveBill = async (bill) => {
    let result = await axios.put('http://127.0.0.1:8086/bill', bill);
    console.log(result);
    return result.data;
  };

  const getPreviousInfoBill = async (roomNo, rentalPeriod) => {
    let result = await axios.get(
      `http://127.0.0.1:8086/${roomNo}/${rentalPeriod}/previous-bill`
    );
    console.log(result);
    return result.data;
  };

  return {
    getPreviousInfoBill,
    saveBill,
  };
})();
