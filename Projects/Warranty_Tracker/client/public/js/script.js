

// let assets = document.getElementById('assets');

// // popup modal
// const registerProduct = document.getElementById('register-product');

// // active state for menu items
// let menuItems = document.querySelectorAll('.menu-item');

// function setActiveMenu(clickedItem) {
//     menuItems.forEach(item => item.classList.remove('active-menu'));
//     clickedItem.classList.add('active-menu');
// }

// // Show only warranty assets
// function showWarrantyAssets(event) {
//     registerProduct.style.display = 'none';
//     assets.style.display = 'block';
//     if (event) setActiveMenu(event.target);
    
    
// }

// // Default load view
// window.onload = function() {
//     showWarrantyAssets();
// };

// // Show Product Registration form
// function showRegisterationForm(event) {
//     event.preventDefault();
//     registerProduct.style.display = 'block';
//     registerProduct.classList.add('reg-popup');
// }
  
// // Cancel form
// function cancelForm(event) {
//     event.preventDefault();
//     registerProduct.style.display = 'none';
//     registerProduct.classList.remove('reg-popup');
// }


// let currentRow=null;

// let dataTable;

// document.addEventListener('DOMContentLoaded', function (event) {
//     event.preventDefault();
//     if (typeof DataTable !== 'undefined') {
//          dataTable = new DataTable('#table',{
//           scrollX: true,
//           scrollY: '400px',
//           scrollCollapse: true,
//             layout: {
//                 topStart: 'pageLength'
//                 // topEnd: 'buttons'
//             },
//   pageLength: 4, // Default rows per page
//   lengthMenu: [4, 10, 20, 25], // Options for "Show X entries"
//   buttons: [
//     {
//       extend: 'columnsToggle',
//       text: 'Column Visibility'
//     },
//     {
//       extend: 'excel',
//       text: 'Excel',
//       exportOptions: { columns: ':visible' }
//     },
//     {
//       extend: 'copy',
//       text: 'Copy',
//       exportOptions: { columns: ':visible' }
//     }
//   ]
//          });
//         document.getElementById('submit').onclick = function (event) {
//             event.preventDefault();

//             const files = document.getElementById('images').files;
//             let imageFilenames = [];
//             for (let i = 0; i < files.length; i++) {
//                 imageFilenames.push(files[i].name);
//             }
//             const imagesDisplay = imageFilenames.length > 0 ?
//                 `<button class="view-images-btn" onclick="viewImages(this, '${imageFilenames.join(',')}')">View Images</button>` :
//                 'No images uploaded';

//             const data = [
//                 document.getElementById('asset-id').value,
//                 document.getElementById('employee-id').value,
//                 document.getElementById('serial-no').value,
//                 document.getElementById('category').value,
//                 document.getElementById('brand').value,
//                 document.getElementById('model').value,
//                 document.getElementById('purchased-from').value,
//                 document.getElementById('purchase-date').value,
//                 document.getElementById('warranty-start-date').value,
//                 document.getElementById('warranty-end-date').value,
//                 document.getElementById('extendable').value,
//                 document.getElementById('price').value,
                
//                 imagesDisplay,
//                 `
//                 <button class="edit-row" onclick="editRow(this)"><span class="edit-icon"><i class="ri-edit-box-line"></i></span>Edit</button>
//                 <button class="delete-row" onclick="deleteRow(this)"><span class="delete-icon"><i class="ri-delete-bin-line"></i></span>Delete</button>
//                 <button class="extend-warranty" id="extendWarrantyBtn" onclick="showExtendWarrantyPopup(event)">Extend Warranty</button>
//                 <button class="warranty-history" onclick="showWarrantyHistory(event)">Warranty History</button>
//                 `
//             ];

//             if (currentRow) {
//                 dataTable.row(currentRow).data(data).draw();
//                 currentRow = null;
//                 document.getElementById('submit').innerText = 'Submit';
//             } else {
//                 dataTable.row.add(data).draw();
//             }
//             cancelForm(event);
//             const form=document.getElementById('asset-form');
//             form.reset();


//              try{
//     const response = await fetch('http://localhost:3000/api/createAsset',{
//         method:'POST',
//         headers:{'Content-Type':'application/json'},
//         body:JSON.stringify(formData)
//     });
//     const result= await response.json();

//     if(response.ok){
//         console.log(result.message);
//         alert("Asset created successfully");
//     }

//     else{
//         alert("Asset creation failed");
//         console.log(formData);
//         console.log(result.message);

//     }
//  }

//  catch(error){
//     console.error('Error in creating asset',error.message)
//  }
//         }

      
//     } else {
//         console.error('DataTable is not defined');
//     }
// });





// function editRow(button) {
//     const row = button.closest('tr');
//     currentRow = row;
//     const data = dataTable.row(row).data();

//     document.getElementById('asset-id').value = data[0];
//     document.getElementById('employee-id').value = data[1];
//     document.getElementById('serial-no').value = data[2];
//     document.getElementById('category').value = data[3];
//     document.getElementById('brand').value = data[4];
//     document.getElementById('model').value = data[5];
//     document.getElementById('purchased-from').value = data[6];
//     document.getElementById('purchase-date').value = data[7];
//     document.getElementById('warranty-start-date').value = data[8];
//     document.getElementById('warranty-end-date').value = data[9];
//     document.getElementById('extendable').value = data[10];
//     document.getElementById('price').value = data[11];
//     // document.getElementById('images').value= data[12];

    
//     const imagesDisplay = data[12] !== 'No images uploaded' ? data[12] : 'No images uploaded';
//     document.getElementById('imageViewerContent').innerHTML = imagesDisplay;

//     registerProduct.style.display = 'block';    
//     registerProduct.classList.add('reg-popup');
//     document.getElementById('submit').innerText = 'Update';
// }   


// // delete a row
//  function deleteRow(button) {
//       const row=button.closest('tr');
//       const table=$('#table').DataTable();
//       table.row(row).remove().draw()
      
//  }




//  const extendWarrantyPopup = document.getElementById('extendWarranty-popup');


//  function showExtendWarrantyPopup(event) {
//     event.preventDefault();
//     // const extendable = document.getElementById('extendable').value;
//     extendWarrantyPopup.style.display = 'block';
//     // if (extendable === 'Yes') {
      
//     // } 
//     // else if (extendable === 'SELECT') {
//     //     alert("Please select an option Yes or No");
//     // } else {
//     //     alert('This asset has no warranty');
//     // }
// }

// function cancelExtendForm(event) {
//     event.preventDefault();
//     extendWarrantyPopup.style.display = 'none';
// }

// // Warranty History Popup 

// const warrantyHistoryPopup = document.getElementById('warranty-history-popup');
// function showWarrantyHistory(event) {
//     event.preventDefault();

//     // const extendable = document.getElementById('extendable').value;  
//     warrantyHistoryPopup.style.display = 'block';
//     // if (extendable === 'YES') {
        
//     // } 
//     // else if (extendable === 'SELECT') {
//     //     alert("Please select an option Yes or No");
//     // } else {
//     //     alert('This asset has no warranty, so no warranty history available.');
//     // }
// }









let assets = document.getElementById('asset-form');
const registerProduct = document.getElementById('register-product');
let menuItems = document.querySelectorAll('.menu-item');
let currentRow = null;
let dataTable;

function setActiveMenu(clickedItem) {
    menuItems.forEach(item => item.classList.remove('active-menu'));
    clickedItem.classList.add('active-menu');
}

function showWarrantyAssets(event) {
    registerProduct.style.display = 'none';
    assets.style.display = 'block';
    if (event) setActiveMenu(event.target);
}

function showRegisterationForm(event) {
    event.preventDefault();
    registerProduct.style.display = 'block';
    registerProduct.classList.add('reg-popup');
}

function cancelForm(event) {
    event.preventDefault();
    registerProduct.style.display = 'none';
    registerProduct.classList.remove('reg-popup');
}

window.onload = function () {
    showWarrantyAssets();
};

document.addEventListener('DOMContentLoaded', async function () {
  const submitBtn = document.getElementById('submit');
  const imageInput = document.querySelector('input[type="file"]');
  const imagesDiv = document.getElementById('imageViewerContent');
  const assetForm = document.getElementById('asset-form');

  let dataTable;
  let currentRow = null;

  // Initialize DataTable after DOM is ready
  if (typeof DataTable !== 'undefined') {
    dataTable = new DataTable('#table', {
      scrollX: true,
      scrollY: '400px',
      scrollCollapse: true,
      layout: { topStart: 'pageLength' },
      pageLength: 4,
      lengthMenu: [4, 10, 20, 25],
      buttons: [
        {
          extend: 'columnsToggle',
          text: 'Column Visibility'
        },
        {
          extend: 'excel',
          text: 'Excel',
          exportOptions: { columns: ':visible' }
        },
        {
          extend: 'copy',
          text: 'Copy',
          exportOptions: { columns: ':visible' }
        }
      ]
    });

    // Load assets after DataTable is ready
    await loadAssets();
  } else {
    console.error('DataTable is not defined');
    return;
  }

 
  async function loadAssets() {
    try {
      const response = await fetch('http://localhost:4000/api/asset');
      const result = await response.json();

      if (response.ok && Array.isArray(result.result)) {
        result.result.forEach(asset => {
          const imagesDisplay = asset.Asset_Images?.length
            ? `<button class="view-images-btn" onclick="viewImages(this, '${asset.Asset_Images.join(',')}')">View Images</button>`
            : 'No images uploaded';

          const rowData = [
            asset.Asset_Id,
            asset.Employee_Id,
            asset.Serial_Number,
            asset.Category,
            asset.Brand,
            asset.Model,
            asset.Purchased_From,
            asset.Purchased_Date,
            asset.Warranty_Start_Date,
            asset.Warranty_End_Date,
            asset.Warranty_Extendable,
            asset.Asset_Price,
            imagesDisplay,
            `
            <button class="edit-row" onclick="editRow(this)"><i class="ri-edit-box-line"></i> Edit</button>
            <button class="delete-row" onclick="deleteRow(this)"><i class="ri-delete-bin-line"></i> Delete</button>
            <button class="extend-warranty" onclick="showExtendWarrantyPopup(event)">Extend Warranty</button>
            <button class="warranty-history" onclick="showWarrantyHistory(event)">Warranty History</button>
            `
          ];

          dataTable.row.add(rowData).draw();
        });
      } else {
        console.warn('No assets found or unexpected response format:', result);
      }
    } catch (error) {
      console.error('Error loading assets:', error.message);
    }
  }

  // Submit handler
  submitBtn.addEventListener('click', async function (event) {
    event.preventDefault();

    const files = imageInput.files;
    const formData = new FormData();

    for (const file of files) {
      formData.append('images', file);
    }

    formData.append('Asset_Id', document.getElementById('asset-id').value);
    formData.append('Employee_Id', document.getElementById('employee-id').value);
    formData.append('Serial_Number', document.getElementById('serial-no').value);
    formData.append('Category', document.getElementById('category').value);
    formData.append('Brand', document.getElementById('brand').value);
    formData.append('Model', document.getElementById('model').value);
    formData.append('Purchased_From', document.getElementById('purchased-from').value);
    formData.append('Purchased_Date', document.getElementById('purchase-date').value);
    formData.append('Warranty_Start_Date', document.getElementById('warranty-start-date').value);
    formData.append('Warranty_End_Date', document.getElementById('warranty-end-date').value);

    const extendableValue = document.getElementById('extendable').value;
    formData.append('Warranty_Extendable', extendableValue === 'Yes');

    formData.append('Asset_Price', document.getElementById('price').value);

    try {
      const response = await fetch('http://localhost:4000/api/asset', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (response.ok) {
        alert("Asset created successfully!");

        const imageFilenames = Array.from(files).map(f => f.name);
        const imagesDisplay = imageFilenames.length > 0
          ? `<button class="view-images-btn" onclick="viewImages(this, '${imageFilenames.join(',')}')">View Images</button>`
          : 'No images uploaded';

        const data = [
          formData.get('Asset_Id'),
          formData.get('Employee_Id'),
          formData.get('Serial_Number'),
          formData.get('Category'),
          formData.get('Brand'),
          formData.get('Model'),
          formData.get('Purchased_From'),
          formData.get('Purchased_Date'),
          formData.get('Warranty_Start_Date'),
          formData.get('Warranty_End_Date'),
          formData.get('Warranty_Extendable') === 'true' || formData.get('Warranty_Extendable') === true,
          formData.get('Asset_Price'),
          imagesDisplay,
          `
          <button class="edit-row" onclick="editRow(this)"><i class="ri-edit-box-line"></i> Edit</button>
          <button class="delete-row" onclick="deleteRow(this)"><i class="ri-delete-bin-line"></i> Delete</button>
          <button class="extend-warranty" onclick="showExtendWarrantyPopup(event)">Extend Warranty</button>
          <button class="warranty-history" onclick="showWarrantyHistory(event)">Warranty History</button>
          `
        ];

        if (currentRow) {
          dataTable.row(currentRow).data(data).draw();
          currentRow = null;
          submitBtn.innerText = 'Submit';
        } else {
          dataTable.row.add(data).draw();
        }

        assetForm.reset();
        cancelForm(event);
      } else {
        alert("Asset creation failed: " + result.error);
        console.error(result);
      }
    } catch (err) {
      console.error('Error in creating asset:', err.message);
      alert("Request failed");
    }
  });
});


function editRow(button) {
    const row = button.closest('tr');
    currentRow = row;
    const data = dataTable.row(row).data();

    document.getElementById('asset-id').value = data[0];
    document.getElementById('employee-id').value = data[1];
    document.getElementById('serial-no').value = data[2];
    document.getElementById('category').value = data[3];
    document.getElementById('brand').value = data[4];
    document.getElementById('model').value = data[5];
    document.getElementById('purchased-from').value = data[6];
    document.getElementById('purchase-date').value = data[7];
    document.getElementById('warranty-start-date').value = data[8];
    document.getElementById('warranty-end-date').value = data[9];
    document.getElementById('extendable').value = data[10];
    document.getElementById('price').value = data[11];

    const imagesDisplay = data[12] !== 'No images uploaded' ? data[12] : 'No images uploaded';
    document.getElementById('imageViewerContent').innerHTML = imagesDisplay;

    registerProduct.style.display = 'block';
    registerProduct.classList.add('reg-popup');
    document.getElementById('submit').innerText = 'Update';
}

function deleteRow(button) {
    const row = button.closest('tr');
    dataTable.row(row).remove().draw();
}

// Extend warranty
const extendWarrantyPopup = document.getElementById('extendWarranty-popup');

function showExtendWarrantyPopup(event) {
    event.preventDefault();
    extendWarrantyPopup.style.display = 'block';
}

function cancelExtendForm(event) {
    event.preventDefault();
    extendWarrantyPopup.style.display = 'none';
}

// Warranty history
const warrantyHistoryPopup = document.getElementById('warranty-history-popup');

function showWarrantyHistory(event) {
    event.preventDefault();
    warrantyHistoryPopup.style.display = 'block';
}

function cancelHistoryForm(event) {
    event.preventDefault();
    warrantyHistoryPopup.style.display = 'none';
}

// Image viewer
const imageViewerPopup = document.getElementById('imageViewerPopup');
const imageViewerContent = document.getElementById('imageViewerContent');

function viewImages(button, filenames) {
    imageViewerContent.innerHTML = '';
    const imageArray = filenames.split(',');

    imageArray.forEach(filename => {
        const img = document.createElement('img');
        img.src = '/public/uploads/' + filename;
        img.alt = filename;
        imageViewerContent.appendChild(img);
    });

    imageViewerPopup.style.display = 'flex';
}

function closeImageViewer() {
    imageViewerPopup.style.display = 'none';
    imageViewerContent.innerHTML = '';
}

// Filter (future implementation)
function loadFilter(event) {
    event.preventDefault();
    const categoryFilter = document.getElementById('filter-category').value;
    const brandFilter = document.getElementById('filter-brand').value;
    const modelFilter = document.getElementById('filter-model').value;

    // Apply filters if needed
}


// fetching data from db

fetch('api/asset')
.then(res => res.json())
.then(data => {
 
   if(data.success && Array.isArray(data.result)){
    const fetchRows = data.result.map(asset =>[
      asset.Asset_Id,
      asset.Employee_Id,
      asset.Serial_Number,
      asset.Category,
      asset.Brand,
      asset.Model,
      asset.Purchased_From,
      asset.Purchased_Date,
      asset.Warranty_Start_Date,
      asset.Warranty_End_Date,
      asset.Warranty_Extendable,
      asset.Asset_Price,
      asset.Asset_Images
    ]);

  dataTable.clear();
  dataTable.rows.add(fetchRows);
  dataTable.draw();
  dataTable.columns.adjust();
   }
})
.catch(error => {
  console.error('Error fetching assets:', error.message);
});