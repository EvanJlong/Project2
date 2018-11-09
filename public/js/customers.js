// Getting references to the name input and author container, as well as the table body
const nameInput = $('#customer-name');
const email = $('#email');
const zipCode = $('#zip_code');
const state_Input = $('#State');
const customerList = $('#tbl');
const customerContainer = $('.customer-container');
// const customerDump = $('#tableDump');

// Function for retrieving authors and getting them ready to be rendered to the page
const render = function () {

  $.get('/api/customers', function (data) {
    // customerDump.empty();
    renderCustomerList(data);
    nameInput.val('');
  });
}

// Function for creating a new list row for authors
const createCustomerRow = function (customerData) {
  // console.log(customerData);
  const newTr = $('<tr>');
  // newTr.data('customer', customerData);
  newTr.append(`<td><input type="checkbox" value="${customerData.id}" class="Check1" ></td>`)
  newTr.append(`<td>${customerData.id}</td>`)


  newTr.append(`<td>${customerData.name}</td>`);
  newTr.append(`<td>${customerData.email}</td>`);
  newTr.append(`<td>${customerData.zipCode}</td>`);
  newTr.append(`<td>${customerData.state}</td>`);
  return newTr;
}


// A function for rendering the list of authors to the page
const renderCustomerList = function (data) {
  const rowsToAdd = [];
  for (let i = 0; i < data.length; i++) {
    rowsToAdd.push(createCustomerRow(data[i]));
  }
  customerList.append(rowsToAdd)

}

$('#v-pills-messages-tab').on('click', function (event) {
  event.preventDefault();

  // Here we grab the form elements
  const newCustomer = {
    name: $('#customer-name').val().trim(),
    email: $('#email').val().trim(),
    zipCode: $('#zip_code').val().trim(),
    state: $('#State').val().trim(),
  }

  for (let key in newCustomer) {
    if (newCustomer[key] === '') {
      alert('Please fill out all fields');
      return;
    }
  }
  console.log(newCustomer);
  $.ajax({
    url: "/api/customers",
    method: "POST",
    data: newCustomer
  }).then(function (response) {
    console.log(response)
  })
  location.reload();
});

$('#indexBtn').on('click', function (event) {
  event.preventDefault();

  // Here we grab the form elements
  const newCustomer = {
    name: $('#customer-name').val().trim(),
    email: $('#email').val().trim(),
    zipCode: $('#zip_code').val().trim(),
    state: $('#State').val().trim(),
  }

  for (let key in newCustomer) {
    if (newCustomer[key] === '') {
      alert('Please fill out all fields');
      return;
    }
  }
  console.log(newCustomer);
  $.ajax({
    url: "/api/customers",
    method: "POST",
    data: newCustomer
  }).then(function (response) {
    console.log(response)
  })
  location.reload();
});


$('#deleteBtn').on('click', function (event) {
  event.preventDefault();
  console.log("delete button pressed")
  var checkedValue = $('.Check1:checked').val();
  console.log(checkedValue)
  handleDeleteButtonPress(checkedValue);
});



const handleDeleteButtonPress = function (id) {
  $.ajax({
    method: 'DELETE',
    url: `/api/customers/${id}`
  })
    .then(function (response) {
      location.reload();
    });
}
// DELETE route for deleting posts
// $('#deleteBtn').on('click', function(){
//   console.log('it clicks')
//   $(".Check1").each(function(){
//     var obj = $(this);

//     if (this.checked) {
//       $(obj).closest("tr").remove();
//     }
//     return false;  
//   });
// });
//////////////////////
///////////////////////
//////////////////////

const brand_Name = $('#brand_Name');
const panel_Name = $('#panel_Name');
const efficiency = $('#efficiency');
const watts = $('#watts');
const warranty_Yrs = $('#warranty_Yrs');
const inventory = $('#inventory');
const inventoryList = $('#tbl2');
const inventoryContainer = $('.inventory-container');

// const insertPanel = function (inventoryData) {
//   $.post('/api/panels', inventoryData)
//     .then(renderInventory);
// }

const renderInventory = function () {

  $.get('/api/panels', function (data) {
    console.log("WORKING")
    console.log(data)


    brand_Name.val('');
    renderInventoryList(data);
  });
}

// Function for creating a new list row for authors
const createInventoryRow = function (inventoryData) {

  console.log(inventoryData);
  const newTr2 = $('<tr>');
  // newTr.data('inventory', inventoryData);
  // newTr2.append(`<td><input type="checkbox" value="${inventoryData.id}" class="Check1" ></td>`)
  // newTr2.append(`<td>${inventoryData.id}</td>`);
  newTr2.append(`<td>${inventoryData.brand_Name}</td>`);
  newTr2.append(`<td>${inventoryData.panel_Name}</td>`);
  newTr2.append(`<td>${inventoryData.efficiency}</td>`);
  newTr2.append(`<td>${inventoryData.watts}</td>`);
  newTr2.append(`<td>${inventoryData.warranty_Yrs}</td>`);
  newTr2.append(`<td>${inventoryData.inventory}</td>`);

  return newTr2;
}


// A function for rendering the list of authors to the page
const renderInventoryList = function (data) {
  const rowsToAdd2 = [];
  for (let i = 0; i < data.length; i++) {
    rowsToAdd2.push(createInventoryRow(data[i]));
  }
  console.log(data)
  inventoryList.append(rowsToAdd2)

}
renderInventory();
render();



// A function for creating an customer. Calls getCustomers upon completion
// const insertCustomer = function (customerData) {
//   $.post('/api/customers', customerData)
//     .then(render);
// }


// A function to handle what happens when the form is submitted to create a new customer
// const handleCustomerFormSubmit = function (event) {
//   event.preventDefault();
//   // Don't do anything if the name fields hasn't been filled out
//   if (!nameInput.val().trim().trim()) {
//     return;
//   }
//   //   // Calling the insertAuthor function and passing in the value of the name input
//   insertCustomer({

//     name: nameInput.val().trim()
//   }, {
//       sq_ft: sq_ftInput.val().trim()
//     }, {
//       energy_cost_per_month: energy_costInput.val().trim()
//     }, {
//       state: state_Input.val().trim()
//     },
//   );
// }


// Adding event listeners to the form to create a new object, and the button to delete
// an Author
// $(document).on('submit', '#customer-form', handleCustomerFormSubmit);
// $(document).on('click', '.delete-customer', handleDeleteButtonPress);

// render();
