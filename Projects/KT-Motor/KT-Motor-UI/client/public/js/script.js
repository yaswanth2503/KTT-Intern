

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




fetch('/api/getJobCardList')
  .then(res => res.json())
  .then(data => {
    if (data.success && Array.isArray(data.result)) {
      const table = $('#table-data').DataTable({
        destroy: true
      });

      table.clear(); 

      data.result.forEach(item => {
        table.row.add([
          item.Number,
          item.ClientName,
          item.TransportName,
          item.Vehicle,
          item.Vehicle_Inward,
          new Date(item.JcTime).toLocaleString(),
          new Date(item.Vehicle_In_Time).toLocaleString(),
          new Date(item.Vehicle_Out_Time).toLocaleString(),
          new Date(item.Closing_Time).toLocaleString()
        ]);
      });

      table.draw(); 
    }
  })
  .catch(err => console.error('Error fetching job cards:', err));
