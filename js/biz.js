const Biz = (() => {
  const saveBill = async () => {
    let bill = {
      id: Number($$('roomNumber').getValue() + $$('rentalPeriod').getValue()),
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
    console.log(bill);
    let rs = await Api.saveBill(bill);
  };
  return {
    saveBill,
  };
})();
