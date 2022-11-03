webix.ready(function () {
  let form = Form.initUI();
  let gridManagement = RenteManagement.initGrid();
  let tabView = {
    view: 'tabview',
    cells: [
      {
        header: 'Hóa đơn',
        body: form,
      },
      {
        header: 'Nhân khẩu',
        body: gridManagement,
      },
    ],
  };
  webix.ui(tabView);

  // Form.initUI();
  // RenteManagement.initGrid();
});
