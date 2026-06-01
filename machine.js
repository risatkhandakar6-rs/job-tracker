
let currentFilter = 'all';
function showonly(id) {
  const allSection = document.getElementById('all');
  const interviewSection = document.getElementById('interview');
  const rejectionSection = document.getElementById('rejected');
  

  allSection.classList.add('hidden');
  interviewSection.classList.add('hidden');
  rejectionSection.classList.add('hidden');
 

  const selected = document.getElementById(id);
  selected.classList.remove('hidden');

  currentFilter = id;
   updateAvailableJobsText(id);
  
}
function updateAvailableJobsText(currentFilter) {
  const availableJobsText = document.getElementById('available-jobs');
  const totalAll = Number(document.getElementById('total-all').innerText);

  if (currentFilter === 'all') {
    availableJobsText.innerText = `${totalAll} jobs`;
  }
  
  else if (currentFilter === 'interview') {
    const interviewCount = document.getElementById('interview-container').children.length;
    availableJobsText.innerText = `${interviewCount} of ${totalAll} jobs`;
    
  }
  
  
  else if (currentFilter === 'rejected') {
    const rejectedCount = document.getElementById('rejected-container').children.length;
    availableJobsText.innerText = `${rejectedCount} of ${totalAll} jobs`;
  }
}



document.querySelectorAll('.trash-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const card = this.closest('.job-card');

    // counter-1
    const totalAll = document.getElementById('total-all');
    totalAll.innerText = Number(totalAll.innerText) - 1;
   
  //  card delet
    card.remove();
     updateAvailableJobsText(currentFilter);
  })
})


document.addEventListener('click', function (x) {
  if (x.target.closest('.fa-trash-can')) {
    const box = x.target.closest('div[class*="mt-3"]').parentElement;
    const badge = box.querySelector('.badge');

    if (badge) {
      if (badge.classList.contains('badge-success')) {
        document.getElementById('total-interview').innerText = Number(document.getElementById('total-interview').innertext) - 1;

      } else {
        document.getElementById('total-rejcted').innerText = Number(document.getElementById('total-rejected').innerText) - 1
      }
      
    }
    box.remove();
    updateAvailableJobsText(currentFilter);
  }
});