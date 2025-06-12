
document.addEventListener("DOMContentLoaded", (e) => {
e.preventDefault();

  const sidebar = document.getElementById("sidebar");
  const toggleSidebar = document.getElementById("toggle-sidebar");
  const openSidebar = document.getElementById("open-sidebar");


  toggleSidebar.addEventListener("click", () => {
    sidebar.style.display = "none";
    toggleSidebar.style.display = "none";
    openSidebar.style.display = "inline";
  });

  openSidebar.addEventListener("click", () => {
    sidebar.style.display = "block";
    toggleSidebar.style.display = "inline";
    openSidebar.style.display = "none";
  });


  const dataTable = new DataTable('#table-data', {
    scrollX: true,
    scrollY: '400px',
    scrollCollapse: true,
    layout: {
      topStart: 'buttons',
      topEnd: 'pageLength'
    },
    // pageLength: 5,
    lengthMenu: [5, 10, 20, 25],
    buttons: [
      {
        extend: 'columnsToggle',
        text: 'Column Visibility'
      },
      {
        extend: 'excel',
        text: 'Excel',
        exportOptions: {
          columns: ':visible'
        }
      },
      {
        extend: 'copy',
        text: 'Copy',
        exportOptions: {
          columns: ':visible'
        }
      }
    ]
  });


// Tempus Dominus

const startDate = new tempusDominus.TempusDominus(document.getElementById('start-date'),
{
display: {
  theme: 'light',
  viewMode: 'calendar',
  inline: false,
  keepOpen: false,
  calendarWeeks: false,
  toolbarPlacement: 'bottom',
  buttons: {
    today: true,
    clear: true,
    close: true
  },
  components: {
    calendar: true,
    date: true,
    month: true,
    year: true,
    decades: true,
    clock: true,
    hours: true,
    minutes: true,
    seconds: true,
    // useTwentyfourHour: false
  }
}
});

  
const endDate = new tempusDominus.TempusDominus(document.getElementById('end-date'),
{
display: {
  theme: 'light',
  viewMode: 'calendar',
  inline: false,
  keepOpen: false,
  calendarWeeks: false,
  toolbarPlacement: 'bottom',
  buttons: {
    today: true,
    clear: true,
    close: true
  },
  components: {
    calendar: true,
    date: true,
    month: true,
    year: true,
    decades: true,
    clock: true,
    hours: true,
    minutes: true,
    seconds: true,
    // useTwentyfourHour: false
  }
}
});




  // For loading filter

  document.getElementById('load-filter').addEventListener('click', () => {
    let transport = document.getElementById('transport').value.trim();
    let vehicle = document.getElementById('vehicle').value.trim();
    let number = document.getElementById('number').value.trim();
    // let startDate = document.getElementById('start-date').value.trim();
    // let endDate = document.getElementById('end-date').value.trim();

    const params = new URLSearchParams(); 
    
    if(transport) params.append('transport',transport);
    if(vehicle) params.append('vehicle',vehicle);
    if(number) params.append('number',number);

      if (!transport && !vehicle && !number) {
        alert("Please select at least one filter before loading.");
        return;
      }


 fetch(`/api/filterJobCards?${params.toString()}`)
  .then(res => {
    console.log(res);
    if(!res.ok){
      console.log(res);
       throw new Error(`HTTP ${res.status}`);
    }
     
    return res.json();
  })
  .then(data => {
    if (data.result && data.result.length > 0) {
      dataTable.clear();

      const rows = data.result.map(jobCard => [
        jobCard.Number || '',
        jobCard.ClientName || '',
        jobCard.TransportName || '',
        jobCard.Vehicle || '',
        jobCard.Vehicle_Inward || '',
        jobCard.JcTime ? new Date(jobCard.JcTime).toLocaleString() : '',
        jobCard.Vehicle_In_Time ? new Date(jobCard.Vehicle_In_Time).toLocaleString() : '',
        jobCard.Vehicle_Out_Time ? new Date(jobCard.Vehicle_Out_Time).toLocaleString() : '',
        jobCard.Closing_Time ? new Date(jobCard.Closing_Time).toLocaleString() : ''
      ]);
       dataTable.rows.add(rows).draw();

      
    }
     
    else {
      dataTable.clear().draw();
      console.log('No matching job cards found.');
    }
  })
  .catch(err => console.error('Error in fetching job cards:', err));


    
  });

  // for clear filter

  document.getElementById('clear-filter').addEventListener('click', (e) => {
    e.preventDefault();

 
    
    number.selectedIndex = 0;
    transport.selectedIndex = 0;
    vehicle.selectedIndex = 0;


     fetch('/api/getJobCards')
     .then(res =>res.json())
     .then(data =>{
       console.log('Filter response:', data); 
      if(data.success && Array.isArray(data.result)){
        const loadData = data.result.map(item => [
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

        dataTable.clear();
        dataTable.rows.add(loadData);
        dataTable.draw();
      }
     })
     .catch(err => console.error('Error in reloading the job cards',err));
   

  })



  fetch('/api/getJobCards')
    .then(res => res.json())
    .then(data => {
      if (data.success && Array.isArray(data.result)) {
        const fetchRows = data.result.map(item => [
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

        dataTable.clear();
        dataTable.rows.add(fetchRows);
        dataTable.draw();
      }
    })
    .catch(err => console.error('Error in fetching job cards:', err));
});

