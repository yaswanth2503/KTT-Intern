

const sidebar = document.getElementById("sidebar");
const toggleSidebar = document.getElementById("toggle-sidebar");
const openSidebar = document.getElementById("open-sidebar");
const jobcardList = document.getElementById("jobcard-list");

toggleSidebar.addEventListener("click",()=>{
    //  sidebar.classList.toggle("collapsed");
    //  setTimeout(function () {
    //  $($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw();
    //  }, 100);

    sidebar.style.display = "none";
    toggleSidebar.style.display = "none";
    openSidebar.style.display = "inline";
    // jobcardList.style.width="1200px";
    // jobcardList.style.marginTop="0px";

});

openSidebar.addEventListener("click",()=>{
    sidebar.style.display = "block";
    toggleSidebar.style.display = "inline";
    openSidebar.style.display = "none";
});
    



$(document).ready(function () {
    $('#table-data').DataTable({
        scrollX: true,
        scrollY: true,
        scrollCollapse: true,
        responsive: false,
        lengthChange: true, 
        dom: 'Blfrtip',
        lengthMenu: [4, 10, 20, 25], 
        buttons: [
          
             {
                extend: 'colvis',
                text: 'Column Visibility'
            },
            {
                extend: 'excelHtml5',
                text: 'Excel',
                exportOptions: {
                    columns: ':visible'
                }
            },
              {
                extend: 'copyHtml5',
                text: 'Copy',
                exportOptions: {
                    columns: ':visible'
                }
            }
           
        ]
    });
});
