document.getElementById('rejected-1').addEventListener('click', function () {

  const card = this.closest('.job-card');
  if (card.dataset.moved === "true") return;
  card.dataset.moved = "true";


  card.querySelector('.interview-btn').style.pointerEvents = 'none';
  card.querySelector('.reject-btn').style.pointerEvents = 'none';

  

  const totalRejects = document.getElementById('total-rejected');
  const rejected = totalRejects.innerText;
  const newRejected = Number(rejected) + 1;
  totalRejects.innerText = newRejected;

 
  
  document.getElementById('badge-rejected-1').classList.remove('hidden');

  


  // append to interview container

  const rejectedContainer = document.getElementById('rejected-container');
  const newRejectedElements = document.createElement('div');
  newRejectedElements.innerHTML = `
  <div class=" bg-[#FFFFFF] mt-3 pl-5 pb-5">
      <div class="flex justify-between">
        <h1 class="pt-5 font-bold text-[16px]">Mobile First Corp</h1>
        <button class=" pr-2"><i class="fa-solid fa-trash-can"></i></button>
      </div>
      <p class="text-[#64748B]">React Native Developer</p>
      <div class="flex gap-3">
        <p class="pt-3 text-[#64748B]">Remote</p>
        <ul class="list-disc list-inside flex gap-3 pt-3 text-[#64748B]">
          <li>Full Time</li>
          <li>$130,000 - $175,000</li>
        </ul>
      </div>

     <div class="badge badge-error">Rejected</div>
      <p class="pt-3 text-[#64748B] pb-2">Build cross-platform mobile applications using React Native. Work on products
        used
        by millions of
        users
        worldwide.</p>
      <button id="inner-interview-" class="move-interview btn btn-outline btn-accent">Interview</button>
      <button class="move-rejected btn btn-outline btn-error ">Rejected</button>
    </div>

  `
  rejectedContainer.append(newRejectedElements);


  // btns
  const rejectedBtn = newRejectedElements.querySelector('.move-rejected');
  const interviewBtn = newRejectedElements.querySelector('.move-interview');

  // interview-click
  
  
  interviewBtn.addEventListener('click', function () {
   
    const interviewContainer = document.getElementById('interview-container');

    if (interviewContainer.contains(newRejectedElements)) return;


   
    const badge = newRejectedElements.querySelector('.badge');
    badge.innerText = 'Interview';
    badge.classList.remove('badge-error');
    badge.classList.add('badge-success');

    document.getElementById('total-interview').innerText = Number(document.getElementById('total-interview').innerText) + 1;

    const totalRejected = document.getElementById('total-rejected');
    totalRejected.innerText =
      Number(totalRejected.innerText) - 1;
    
    

    interviewContainer.append(newRejectedElements);
    updateAvailableJobsText(currentFilter);
  
    
    document.getElementById('interview-empty-msg').classList.add('hidden');
  
    if (rejectedContainer.children.length === 0) {
      document.getElementById('rejected-empty-msg').classList.remove('hidden')
    }


  });
   
  rejectedBtn.addEventListener('click', function () {
    const rejectedContainer = document.getElementById('rejected-container');

    if (rejectedContainer.contains(newRejectedElements)) return;

    const badgeAnother = newRejectedElements.querySelector
      ('.badge');
    badgeAnother.innerText = 'Rejected'
    badgeAnother.classList.remove('badge-success');
    badgeAnother.classList.add('badge-error');

    document.getElementById('total-rejected').innerText = Number(document.getElementById('total-rejected').innerText) + 1;

    const totalInterview = document.getElementById('total-interview');
    totalInterview.innerText =
      Number(totalInterview.innerText) - 1;
    
      
    
    
     
    rejectedContainer.append(newRejectedElements);
    updateAvailableJobsText(currentFilter);
  

    document.getElementById('rejected-empty-msg').classList.add('hidden');

    const interviewContainer = document.getElementById('interview-container')
    if (interviewContainer.children.length === 0) {
      document.getElementById('interview-empty-msg').classList.remove('hidden')
    }


    
  })
 

  const emptyMsg = document.getElementById('rejected-empty-msg');
  if (emptyMsg) {
    emptyMsg.classList.add('hidden');
  }
  return;

 
});