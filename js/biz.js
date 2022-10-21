const Biz = (() => {
  const saveBill = () => {
    let bill = {
      id:
        $$('roomNumber').getValue() +
        '-' +
        $$('rentalPeriod').getValue() +
        '-' +
        $$('rentalPeriodYear').getValue(),

      rentalPeriod: $$('rentalPeriod').getValue(),
      roomNumber: $$('roomNumber').getValue(),
      oldElecNumber: $$('oldElecNumber').getValue(),
      newElecNumber: $$('newElecNumber').getValue(),
      usedElec: $$('usedElec').getValue(),
      elecPrice: $$('elecPrice').getValue(),
      totalElecMoney: $$('totalElecMoney').getValue(),
      oldWaterNumber: $$('oldWaterNumber').getValue(),
      newWaterNumber: $$('newWaterNumber').getValue(),
      usedWater: $$('usedWater').getValue(),
      waterPrice: $$('waterPrice').getValue(),
      totalWaterMoney: $$('totalWaterMoney').getValue(),
      rentalPrice: $$('rentalPrice').getValue(),
      otherPrice: $$('otherPrice').getValue(),
      totalMoney: $$('totalMoney').getValue(),
      note: $$('note').getValue(),
    };
    return Api.saveBill(bill);
  };
  return {
    saveBill,
  };
})();
