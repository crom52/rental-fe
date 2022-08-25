const Form = (() => {
  const initUI = () => {
    const elec = {
      id: 'elec',
      cols: [
        { view: 'label', label: 'Điện', width: 80 },
        {
          view: 'text',
          id: 'oldElecNumber',
          name: 'oldElecNumber',
          value: '',
          required: true,
          label: 'Số cũ',
          width: 200,
          pattern: { mask: '##############', allow: /[0-9]/g },
          on: {
            onChange: function () {
              if (!validatInput()) return;
              calculateElec();
              calculateWater();
            },
          },
        },
        { width: 25 },
        {
          view: 'text',
          id: 'newElecNumber',
          name: 'newElecNumber',
          required: true,
          pattern: { mask: '##############', allow: /[0-9]/g },
          value: '',
          label: 'Số mới',
          width: 200,
          on: {
            onChange: function () {
              if (!validatInput()) return;
              calculateElec();
              calculateWater();
            },
          },
        },
        { width: 25 },
        {
          view: 'text',
          id: 'usedElec',
          value: '',
          label: 'Số kí điện',
          readonly: true,
          width: 200,
        },
        { width: 25 },
        {
          view: 'text',
          value: '20000',
          id: 'elecPrice',
          label: 'Giá điện (/kWh)',
          disabled: true,
          width: 220,
          labelWidth: 120,
        },
        {
          view: 'icon',
          icon: 'wxi-pencil',
          id: 'iconEditElecPrice',
          tooltip: 'Điều chỉnh giá điện',
          on: {
            onItemClick: function () {
              $$('elecPrice').enable();
              $$('iconEditElecPrice').hide();
              $$('iconApplyElecPrice').show();
            },
          },
        },
        {
          view: 'icon',
          icon: 'wxi-check',
          id: 'iconApplyElecPrice',
          hidden: true,
          tooltip: 'Xác nhận',
          on: {
            onItemClick: function () {
              $$('elecPrice').disable();
              $$('iconApplyElecPrice').hide();
              $$('iconEditElecPrice').show();
            },
          },
        },
        { width: 25 },
        {
          view: 'text',
          id: 'totalElecMoney',
          value: '',
          label: 'Tiền điện',
          readonly: true,
          width: 200,
          // pattern: { mask: '#.###.###', allow: /[0-9]/g },
        },
      ],
    };

    const water = {
      id: 'water',
      cols: [
        { view: 'label', label: 'Nước', width: 80 },
        {
          view: 'text',
          id: 'oldWaterNumber',
          name: 'oldWaterNumber',
          required: true,
          value: '',
          label: 'Số cũ',
          pattern: { mask: '##############', allow: /[0-9]/g },

          width: 200,
          on: {
            onChange: function () {
              calculateElec();

              calculateTotalMoney();
            },
          },
        },
        { width: 25 },
        {
          view: 'text',
          id: 'newWaterNumber',
          name: 'newWaterNumber',
          required: true,
          pattern: { mask: '##############', allow: /[0-9]/g },
          value: '',
          label: 'Số mới',
          width: 200,
          on: {
            onChange: function () {
              calculateWater();
              calculateTotalMoney();
            },
          },
        },
        { width: 25 },
        {
          view: 'text',
          id: 'usedWater',
          value: '',
          label: 'Số kí nước',
          readonly: true,
          width: 200,
        },
        { width: 25 },
        {
          view: 'text',
          value: '20000',
          id: 'waterPrice',
          label: 'Giá nước (/m3)',
          disabled: true,
          width: 220,
          labelWidth: 120,
        },
        {
          view: 'icon',
          icon: 'wxi-pencil',
          id: 'iconEditWaterPrice',
          tooltip: 'Điều chỉnh giá nuóc',
          on: {
            onItemClick: function () {
              $$('waterPrice').enable();
              $$('iconApplyWaterPrice').show();
              $$('iconEditWaterPrice').hide();
            },
          },
        },
        {
          view: 'icon',
          icon: 'wxi-check',
          id: 'iconApplyWaterPrice',
          hidden: true,
          tooltip: 'Xác nhận',
          on: {
            onItemClick: function () {
              $$('waterPrice').disable();
              $$('iconApplyWaterPrice').hide();
              $$('iconEditWaterPrice').show();
            },
          },
        },
        { width: 25 },
        {
          view: 'text',
          id: 'totalWaterMoney',
          name: 'totalWaterMoney',
          value: '',
          label: 'Tiền nước',
          readonly: true,
          width: 200,
          // pattern: { mask: '####.###', allow: /[0-9]/g },
        },
      ],
    };

    const rentalPrice = {
      cols: [
        { width: 960 },
        {
          id: 'rentalPrice',
          name: 'rentalPrice',
          required: true,
          view: 'text',
          value: '',
          label: 'Tiền phòng trọ',
          labelWidth: 150,
          pattern: { mask: '#.###.###', allow: /[0-9]/g },
          width: 272,
          on: {
            onChange: function () {
              calculateTotalMoney();
            },
          },
        },
      ],
    };

    const otherPrice = {
      cols: [
        { width: 960 },
        {
          id: 'otherPrice',
          name: 'otherPrice',
          view: 'text',
          value: '',
          label: 'Chi phí khác (nếu có)',
          labelWidth: 150,
          width: 272,
          pattern: { mask: '###########', allow: /[0-9]/g },
          on: {
            onChange: function () {
              calculateTotalMoney();
            },
          },
        },
      ],
    };
    const totalMoney = {
      cols: [
        { width: 960 },
        {
          id: 'totalMoney',
          name: 'totalMoney',
          view: 'text',
          value: '',
          label: 'Tổng cộng',
          labelWidth: 150,
          width: 272,
          readonly: true,
        },
      ],
    };
    const rentalPeriod = {
      id: 'rentalPeriod',
      view: 'text',
      value: 'Hoá đơn phòng trọ số ... tháng ...',
      label: '',
      // width: 200,
      height: 80,
      css: 'font-size:80px',
    };

    const note = {
      view: 'textarea',
      name: 'note',
      id: 'note',
      label: 'Ghi chú (nếu có)',
      width: 600,
      labelWidth: 155,

      height: 80,
    };

    const form = {
      view: 'form',
      container: 'rentalForm',
      // borderless:true,
      id: 'rentalForm',
      rows: [
        rentalPeriod,
        elec,
        water,
        rentalPrice,
        otherPrice,
        totalMoney,
        note,
      ],
    };

    webix.ui(form).show();
  };

  const calculateElec = () => {
    let oldElec = $$('oldElecNumber').getValue();
    let newElec = $$('newElecNumber').getValue();

    if (!oldElec || !newElec) {
      return;
    }

    let usedElec = Number(newElec) - Number(oldElec);
    $$('usedElec').setValue(usedElec);

    let totalElecMoney = usedElec * Number($$('elecPrice').getValue());
    $$('totalElecMoney').setValue(totalElecMoney);
    return totalElecMoney;
  };

  const calculateWater = () => {
    let oldWater = $$('oldWaterNumber').getValue();
    let newWater = $$('newWaterNumber').getValue();

    if (!oldWater || !newWater) {
      return;
    }

    let usedWater = Number(newWater) - Number(oldWater);
    $$('usedWater').setValue(usedWater);

    let totalWaterMoney = usedWater * Number($$('waterPrice').getValue());
    $$('totalWaterMoney').setValue(totalWaterMoney);
    return totalWaterMoney;
  };

  const validatInput = () => {
    let oldWater = $$('oldWaterNumber').getValue();
    let newWater = $$('newWaterNumber').getValue();

    let oldElec = $$('oldElecNumber').getValue();
    let newElec = $$('newElecNumber').getValue();

    if (oldWater && newWater) {
      if (Number(newWater) < Number(oldWater)) {
        $$('oldWaterNumber').validate();
        $$('newWaterNumber').validate();
        webix.alert('Số nước mới phải lớn hơn số nước cũ');
        return false;
      }
    }
    if (newElec && oldElec) {
      if (Number(newElec) < Number(oldElec)) {
        $$('oldElecNumber').validate();
        $$('newElecNumber').validate();
        webix.alert('Số điện mới phải lớn hơn số điện cũ');
        return false;
      }
    }

    $$('rentalForm').clearValidation();
    return true;
  };

  const calculateTotalMoney = () => {
    let totalWaterMoney = calculateWater();
    let totalElecMoney = calculateElec();

    let rentalPrice = Number($$('rentalPrice').getValue()) | 0;
    let otherPrice = Number($$('otherPrice').getValue()) || 0;
    let totalMoney =
      totalWaterMoney + totalElecMoney + rentalPrice + otherPrice;
    $$('totalMoney').setValue(totalMoney);
  };
  return {
    initUI,
  };
})();
