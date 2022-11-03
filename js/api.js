const Api = (() => {
  let localhost = `http://127.0.0.1:8086`;
  let herokuHost = `https://rental-bill-cal.herokuapp.com`;

  const saveBill = async (bill) => {
    let result = await axios.put(`${herokuHost}/bill`, bill);
    console.log(result);
    return result.data;
  };

  const getPreviousInfoBill = async (roomNo, rentalPeriod) => {
    let result = await axios.get(
      `${herokuHost}/${roomNo}/${rentalPeriod}/previous-bill`
    );
    console.log(result);
    return result.data;
  };

  return {
    getPreviousInfoBill,
    saveBill,
  };
})();
