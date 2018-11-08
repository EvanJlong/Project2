// const brandInput = $('#brand-name');
// const panel = $('#panel-name');
// const efficiency = $('#efficiency');
// const watts = $('#watts');
// const warranty = $('#warranty');
// const inventory = $('#inventory');
// const inventoryList = $('#tbl2');
// const inventoryContainer = $('.inventory-container');

// // const insertPanel = function (inventoryData) {
// //   $.post('/api/panels', inventoryData)
// //     .then(renderInventory);
// // }
// const renderInventory = function () {

//   $.get('/api/panels', function (data) {
//     console.log("WORKING")
//     console.log(data)
//     renderInventoryList(data);

//     brandInput.val('');
//   });
// }

// // Function for creating a new list row for authors
// const createInventoryRow = function (inventoryData) {

//   // console.log(inventoryData);
//   const newTr2 = $('<tr>');
//   // newTr.data('inventory', inventoryData);
//   newTr2.append(`<td><input type="checkbox" value="${inventoryData.id}" class="Check1" ></td>`)
//   newTr2.append(`<td>${inventoryData.id}</td>`)


//   newTr2.append(`<td>${inventoryData.brandInput}</td>`);
//   newTr2.append(`<td>${inventoryData.panel}</td>`);
//   newTr2.append(`<td>${inventoryData.efficiency}</td>`);
//   newTr2.append(`<td>${inventoryData.watts}</td>`);
//   newTr2.append(`<td>${inventoryData.warranty}</td>`);
//   newTr2.append(`<td>${inventoryData.inventory}</td>`);

//   return newTr2;
// }


// // A function for rendering the list of authors to the page
// const renderInventoryList = function (data) {
//   const rowsToAdd2 = [];
//   for (let i = 0; i < data.length; i++) {
//     rowsToAdd2.push(createInventoryRow(data[i]));
//   }
//   inventoryData.append(rowsToAdd2)

// }
// renderInventory();