const Biz = (() => {
  const saveBill = () => {
    let bill = {
      id:
        $$('roomNumber').getValue() +
        '-' +
        $$('rentalPeriod').getValue() +
        '-' +
        $$('rentalPeriodYear').getValue(),

      rentalPeriod:
        $$('rentalPeriod').getValue() + '-' + $$('rentalPeriodYear').getValue(),
      roomNumber: $$('roomNumber').getValue(),
      oldElecNumber: $$('oldElecNumber').getValue(),
      currentElecNumber: $$('currentElecNumber').getValue(),
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

  const fillPreviousInfo = async (roomNo, rentalPeriod) => {
    let rs = await Api.getPreviousInfoBill(roomNo, rentalPeriod);
    if (rs.status == 'OK' && rs.data) {
      let previousInfo = rs.data;
      $$('oldElecNumber').setValue(previousInfo.oldElecNumber);
      $$('oldWaterNumber').setValue(previousInfo.oldWaterNumber);
    } else {
      $$('oldElecNumber').setValue('');
      $$('oldWaterNumber').setValue('');
    }
  };

  return {
    saveBill,
    fillPreviousInfo,
  };
})();
