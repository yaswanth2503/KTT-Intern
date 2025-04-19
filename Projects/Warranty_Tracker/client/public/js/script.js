let dashboard = document.getElementById('dashboard');
let records = document.getElementById('warranty-records');

// popup modal
const registerProduct=document.getElementById('register-product')

// show accessories warranty
const showAccessoriesWarranty=document.querySelectorAll('.accessories-grp');

// active state for menu items
let menuItems=document.querySelectorAll('.menu-item');

function setActiveMenu(clickedItem){
    menuItems.forEach(item=>item.classList.remove('active-menu'));
    clickedItem.classList.add('active-menu');
}

// Show only dashboard
function showDashboard(event) {
  
    dashboard.style.display = 'block';
    records.style.display = 'none';
    if (event) setActiveMenu(event.target);
}


// Show only warranty records
function showWarrantyRecords(event) {
   
    dashboard.style.display = 'none';
    registerProduct.style.display = 'none';
    records.style.display = 'block';
    if (event) setActiveMenu(event.target);
}

// Default load view
window.onload = function(){
    showDashboard(); 
    
};


// Show Product Registeration form

function showRegisterationForm(event){
    event.preventDefault();
    registerProduct.style.display = 'block';
    registerProduct.classList.add('reg-popup')
}
  
// Cancel form

function cancelForm(event){
    event.preventDefault();
    registerProduct.style.display = 'none';
    registerProduct.classList.remove('reg-popup');
}


// add Accessories Warranty
function addAccessoriesWarranty(event){
    event.preventDefault();
    if(!event) 
        showAccessoriesWarranty.forEach(el => el.style.display = 'none');

    showAccessoriesWarranty.forEach(el => el.style.display = 'block');
    
}


//Inserting the form datas into the table

let submit=document.getElementById('submit');
let table=document.getElementById('table');

submit.onclick=(event)=>{
    event.preventDefault();
    table.style.display='block';
    row=table.insertRow(-1);
 
    let productName=row.insertCell(0);
    let employeeId=row.insertCell(1);
    let extendable=row.insertCell(2);
    let serialNo=row.insertCell(3);
    let category=row.insertCell(4);
    let model=row.insertCell(5);
    let purchaseDate=row.insertCell(6);
    let warrantyDate=row.insertCell(7);
    let accessories=row.insertCell(8);
    let accWarrantyDate=row.insertCell(9);


     productName.innerHTML=document.getElementById('product-name').value;
     employeeId.innerHTML=document.getElementById('employee-id').value;
     extendable.innerHTML=document.getElementById('extendable').value;
     serialNo.innerHTML=document.getElementById('serial-no').value;
     category.innerHTML=document.getElementById('category').value;
     model.innerHTML=document.getElementById('model').value;
     purchaseDate.innerHTML=document.getElementById('purchase-date').value;
     warrantyDate.innerHTML=document.getElementById('warranty-date').value;
     accessories.innerHTML=document.getElementById('accessories').value;
     accWarrantyDate.innerHTML=document.getElementById('acc-warranty-date').value;
     return false;
}