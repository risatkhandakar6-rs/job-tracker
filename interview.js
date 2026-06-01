


const interviewBtn1 = document.getElementById('interview-1')

document.getElementById('interview-1').addEventListener('click', function () {


 
  // duplicat stop

  const card = this.closest('.job-card');
  if (card.dataset.moved === "true") return;
  card.dataset.moved = "true";

 

  // interview count

  const totalInterview = document.getElementById('total-interview');
  const interview = totalInterview.innerText;
  const newInterviews = Number(interview) + 1;
  totalInterview.innerText = newInterviews;


  // add badge

  document.getElementById('badge-interview-1').classList.remove('hidden');

  

  // append to interview container

  const interviewContainer = document.getElementById('interview-container');
  const newInterview = document.createElement('div');
  newInterview.innerHTML = `
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

     <div class="badge badge-success">Interview</div>
      <p class="pt-3 text-[#64748B] pb-2">Build cross-platform mobile applications using React Native. Work on products
        used
        by millions of
        users
        worldwide.</p>
      <button  class="move-interview btn btn-outline btn-accent">Interview</button>
      <button  class=" move-rejected btn btn-outline btn-error ">Rejected</button>
    </div>

  `
  interviewContainer.append(newInterview);
  document.getElementById('interview-empty-msg').classList.add('hidden');


  // btns

  const rejectedBtn = newInterview.querySelector('.move-rejected');

  const interviewBtn = newInterview.querySelector('.move-interview');

  const trashBtn = newInterview.querySelector('.trash-btn');



  
  // reject -click

 
  rejectedBtn.addEventListener('click', function () {
   
   const rejectedContainer = document.getElementById('rejected-container');

  if (rejectedContainer.contains(newInterview)) return;
    // badge
    const badge = newInterview.querySelector('.badge');
    badge.innerText = 'Rejected';
    badge.classList.remove('badge-success');
    badge.classList.add('badge-error');

    // count
    document.getElementById('total-rejected').innerText = Number(document.getElementById('total-rejected').innerText) + 1;
    document.getElementById('total-interview').innerText = Number(document.getElementById('total-interview').innerText) - 1;
   
    
    // move to reject

    
    rejectedContainer.append(newInterview);
   updateAvailableJobsText(currentFilter);

    // hide reject empty msg
    document.getElementById('rejected-empty-msg').classList.add('hidden');

    const interviewContainer = document.getElementById('interview-container')
    if (interviewContainer.children.length === 0) {
      document.getElementById('interview-empty-msg').classList.remove('hidden')
    }


    
  });

  //  interview from rejected

 
  interviewBtn.addEventListener('click', function () {
     const interviewContainer = document.getElementById('interview-container');
   if (interviewContainer.contains(newInterview)) return;
    // badge
    const badgeAnother = newInterview.querySelector('.badge');
    badgeAnother.innerText='Interview'
    badgeAnother.classList.remove('badge-error');
    badgeAnother.classList.add('badge-success');



    document.getElementById('total-interview').innerText = Number(document.getElementById('total-interview').innerText) + 1;
     document.getElementById('total-rejected').innerText = Number(document.getElementById('total-rejected').innerText) - 1;

  

    interviewContainer.append(newInterview);
    updateAvailableJobsText(currentFilter);
    document.getElementById('interview-empty-msg').classList.add('hidden');

    
    const rejectedContainer = document.getElementById('rejected-container')
    if (rejectedContainer.children.length === 0) {
      document.getElementById('rejected-empty-msg').classList.remove('hidden')
    }

   
  });


  

 
})