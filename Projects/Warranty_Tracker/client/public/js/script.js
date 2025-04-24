

// let dashboard = document.getElementById('dashboard');
// let records = document.getElementById('assests');

// // popup modal
// const registerProduct=document.getElementById('register-product')



// // active state for menu items
// let menuItems=document.querySelectorAll('.menu-item');

// function setActiveMenu(clickedItem){
//     menuItems.forEach(item=>item.classList.remove('active-menu'));
//     clickedItem.classList.add('active-menu');
// }

// // Show only dashboard
// // function showDashboard(event) {
  
// //     dashboard.style.display = 'block';
// //     records.style.display = 'none';
// //     if (event) setActiveMenu(event.target);
// // }


// // Show only warranty records
// function showWarrantyRecords(event) {
   
//     // dashboard.style.display = 'none';
//     registerProduct.style.display = 'none';
//     records.style.display = 'block';
//     if (event) setActiveMenu(event.target);
// }

// // Default load view
// window.onload = function(){
//     showWarrantyRecords();
    
// };


// // Show Product Registeration form

// function showRegisterationForm(event){
//     event.preventDefault();
//     registerProduct.style.display = 'block';
//     registerProduct.classList.add('reg-popup')
// }
  
// // Cancel form

// function cancelForm(event){
//     event.preventDefault();
//     registerProduct.style.display = 'none';
//     registerProduct.classList.remove('reg-popup');
// }


// // add Accessories Warranty
// function addAccessoriesWarranty(event){
//      event.preventDefault();

//      const container=document.getElementById('accessories-container');
//      const template=document.getElementById('accessories-template');

//      const newBlock=template.cloneNode(true);
//      newBlock.style.display = 'block';
//      newBlock.removeAttribute('id');

//      container.appendChild(newBlock); 
// }


// function addSubPartWarranty(event){
//     event.preventDefault();

//     const container=document.getElementById('subpart-container');
//     const template=document.getElementById('subpart-template');

//     const newBlock=template.cloneNode(true);
//     newBlock.style.display = 'block';
//     newBlock.removeAttribute('id');

//     container.appendChild(newBlock); 
// }

// // add Subpart Warranty


// //Inserting the form datas into the table

// // document.addEventListener('DOMContentLoaded', function () {
    
// //     if (typeof DataTable !== 'undefined') {
// //         const table = document.getElementById('table');
// //         if (table) {
// //             new DataTable(table);  
// //         }
// //     } else {
// //         console.error('DataTable is not defined');
// //     }
// // });

// // let submit=document.getElementById('submit');
// // let table=document.getElementById('table');

// // let isDataTableInitialized=false;

// // submit.onclick = (event) => {
// //     event.preventDefault();
// //     const tableBody=table.tBodies[0];
// //     if (tableBody) {
// //         // Optional: remove DataTables "No data available" row if it exists
// //         const emptyRow = tableBody.querySelector('.dataTables_empty');
// //         if (emptyRow && tableBody.rows.length === 1) {
// //             emptyRow.parentElement.remove(); // remove the entire <tr>
// //         }
// //     }
    
// //     table.style.display = 'block';
    
// //     let row = table.insertRow(-1);

    
// //     let productName = row.insertCell(0);
// //     let employeeId = row.insertCell(1);
// //     let extendable = row.insertCell(2);
// //     let serialNo = row.insertCell(3);
// //     let category = row.insertCell(4);
// //     let model = row.insertCell(5);
// //     let purchaseDate = row.insertCell(6);
// //     let warrantyDate = row.insertCell(7);
// //     let accessories = row.insertCell(8);
// //     let accWarrantyDate = row.insertCell(9);
// //     let action = row.insertCell(10);


    
// //     productName.innerHTML = document.getElementById('product-name').value;
// //     employeeId.innerHTML = document.getElementById('employee-id').value;
// //     extendable.innerHTML = document.getElementById('extendable').value;
// //     serialNo.innerHTML = document.getElementById('serial-no').value;
// //     category.innerHTML = document.getElementById('category').value;
// //     model.innerHTML = document.getElementById('model').value;
// //     purchaseDate.innerHTML = document.getElementById('purchase-date').value;
// //     warrantyDate.innerHTML = document.getElementById('warranty-date').value;
// //     accessories.innerHTML = document.getElementById('accessories').value;
// //     accWarrantyDate.innerHTML = document.getElementById('acc-warranty-date').value;
    
// //    if(!isDataTableInitialized){
// //     new DataTable(table);
// //     isDataTableInitialized=true;
// //    }

 
   
// // }

// document.addEventListener('DOMContentLoaded', function () {
//     if (typeof DataTable !== 'undefined') {
//         const table = new DataTable('#table');  // Save instance in a variable

//         // Handle the submit logic with DataTables API
//         document.getElementById('submit').onclick = function (event) {
//             event.preventDefault();

//             const data = [
//                 document.getElementById('product-name').value,
//                 document.getElementById('employee-id').value,
//                 document.getElementById('serial-no').value,
//                 document.getElementById('category').value,
//                 document.getElementById('brand').value,
//                 document.getElementById('model').value,
//                 document.getElementById('purchase-date').value,
//                 document.getElementById('warranty-start-date').value,
//                 document.getElementById('warranty-end-date').value,
//                 document.getElementById('extendable').value,
              
//                 `
//                 <button class="edit-row" id="edit-row">Edit</button>
//                 <button class="delete-row" id="delete-row">Delete</button>
//                 <button class="extend-warranty" id="extend-warranty">Extend Warranty</button>
//                 <button class="extend-warranty" id="extend-warranty">Warranty History</button>


                
//                 `
//             ];

//             table.row.add(data).draw(); 
//         };
//     } else {
//         console.error('DataTable is not defined');
//     }
// });





// document.querySelector('a[href="#logout"]').addEventListener('click', function(e) {
//     e.preventDefault();
 
//     fetch('/logout')
//         .then(() => {

//             window.location.href = '/login';
//         })
//         .catch(err => {
//             console.error('Logout failed:', err);
//         });
// });




// claude

let records = document.getElementById('assests');

// popup modal
const registerProduct = document.getElementById('register-product');

// active state for menu items
let menuItems = document.querySelectorAll('.menu-item');

function setActiveMenu(clickedItem) {
    menuItems.forEach(item => item.classList.remove('active-menu'));
    clickedItem.classList.add('active-menu');
}

// Show only warranty records
function showWarrantyRecords(event) {
    registerProduct.style.display = 'none';
    records.style.display = 'block';
    if (event) setActiveMenu(event.target);
    
    // Load assets from database
    loadAssetsFromDatabase();
}

// Default load view
window.onload = function() {
    showWarrantyRecords();
};

// Show Product Registration form
function showRegisterationForm(event) {
    event.preventDefault();
    registerProduct.style.display = 'block';
    registerProduct.classList.add('reg-popup');
}
  
// Cancel form
function cancelForm(event) {
    event.preventDefault();
    registerProduct.style.display = 'none';
    registerProduct.classList.remove('reg-popup');
}

// Format date for display
function formatDate(dateString) {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD format
}

// Load assets from database
function loadAssetsFromDatabase() {
    fetch('/api/assets')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(assets => {
            if (window.assetsTable) {
                // Clear existing data and add new data
                window.assetsTable.clear().draw();
                assets.forEach(asset => {
                    window.assetsTable.row.add([
                        asset.product_name,
                        asset.employee_id,
                        asset.serial_no,
                        asset.category,
                        asset.brand,
                        asset.model,
                        formatDate(asset.purchase_date),
                        formatDate(asset.warranty_start_date),
                        formatDate(asset.warranty_end_date),
                        asset.warranty_extendable ? 'Yes' : 'No',
                        `
                        <button class="edit-row" data-id="${asset.id}">Edit</button>
                        <button class="delete-row" data-id="${asset.id}">Delete</button>
                        <button class="extend-warranty" data-id="${asset.id}">Extend Warranty</button>
                        <button class="warranty-history" data-id="${asset.id}">Warranty History</button>
                        `
                    ]).draw();
                });
            }
        })
        .catch(error => {
            console.error('Error loading assets:', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize DataTable
    window.assetsTable = new DataTable('#table', {
        columnDefs: [
            { targets: -1, orderable: false } // Disable sorting on the last column (actions)
        ]
    });
    
    // Handle form submission
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault();
        
        const formData = {
            product_name: document.getElementById('product-name').value,
            employee_id: document.getElementById('employee-id').value,
            serial_no: document.getElementById('serial-no').value,
            category: document.getElementById('category').value,
            brand: document.getElementById('brand').value,
            model: document.getElementById('model').value,
            purchase_date: document.getElementById('purchase-date').value,
            warranty_start_date: document.getElementById('warranty-start-date').value,
            warranty_end_date: document.getElementById('warranty-end-date').value,
            warranty_extendable: document.getElementById('extendable').value
        };
        
        // Validate form data (you can add more validation as needed)
        // if (!formData.product_name || !formData.employee_id || !formData.serial_no) {
        //     alert('Please fill in all required fields');
        //     return;
        // }
        
        // Submit to server
        fetch('/api/assets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(newAsset => {
            // Hide the form
            cancelForm({ preventDefault: () => {} });
            
            // Refresh the table
            loadAssetsFromDatabase();
            
            // Reset the form
            document.querySelector('.form').reset();
        })
        .catch(error => {
            console.error('Error adding asset:', error);
            alert('Failed to add asset. Please try again.');
        });
    });
    
    // Handle delete button clicks using event delegation
    document.querySelector('table').addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-row')) {
            const assetId = event.target.getAttribute('data-id');
            
            if (confirm('Are you sure you want to delete this asset?')) {
                fetch(`/api/assets/${assetId}`, {
                    method: 'DELETE'
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(() => {
                    // Refresh the table
                    loadAssetsFromDatabase();
                })
                .catch(error => {
                    console.error('Error deleting asset:', error);
                    alert('Failed to delete asset. Please try again.');
                });
            }
        }
    });
    
    // Handle logout
    document.querySelector('a[href="#logout"]').addEventListener('click', function(e) {
        e.preventDefault();
        
        fetch('/logout')
            .then(() => {
                window.location.href = '/login';
            })
            .catch(err => {
                console.error('Logout failed:', err);
            });
    });
});





