const interviewBtn2 = document.getElementById('interview-2');
interviewBtn2.addEventListener('click', function(){
  
  


  const card = this.closest('.job-card');
  if (card.dataset.moved === "true") return;
  card.dataset.moved = "true";

  // totalIntrview count
  const totalIntrview = document.getElementById('total-interview');
  totalIntrview.innerText = Number(totalIntrview.innerText) + 1;

  // add badge
  document.getElementById('badge-interview-2').classList.remove('hidden')

  // append to interview container
  const interviewContainer = document.getElementById('interview-container');
  const newInterview = document.createElement('div');
  newInterview.innerHTML = `<div class="bg-[#FFFFFF] mt-3 pl-5 pb-5">
      <div class="flex justify-between">
        <h1 class="pt-5 font-bold text-[16px]">Mobile Second Corp</h1>
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

  // btns
  const rejectedBtn = newInterview.querySelector('.move-rejected');
  const interviewBtn = newInterview.querySelector('.move-interview');

  // interview to rejected

  rejectedBtn.addEventListener('click', function () {
    const rejectedContainer = document.getElementById('rejected-container');
    if (rejectedContainer.contains(newInterview)) return;
    rejectedContainer.append(newInterview);
    updateAvailableJobsText(currentFilter);

    // badge
    const badgeRejected = newInterview.querySelector('.badge');
    badgeRejected.innerText = 'Rejected';
    badgeRejected.classList.remove('badge-success');
    badgeRejected.classList.add('badge-error');

    document.getElementById('total-rejected').innerText = Number(document.getElementById('total-rejected').innerText) + 1;
    document.getElementById('total-interview').innerText = Number(document.getElementById('total-interview').innerText) - 1;
   
    document.getElementById('rejected-empty-msg').classList.add('hidden')
    
    // empty msg
    const interviewContainer = document.getElementById('interview-container');
    if (interviewContainer.children.length === 0) {
      document.getElementById('interview-empty-msg').classList.remove('hidden')
    }
  });

//  interview from rejected

  
  interviewBtn.addEventListener('click', function () {
    const interviewContainer = document.getElementById('interview-container');
    if (interviewContainer.contains(newInterview)) return;

    // badge
    const badgeInterview = newInterview.querySelector('.badge');
    badgeInterview.innerText = 'Interview';
    badgeInterview.classList.remove('badge-error');
    badgeInterview.classList.add('badge-success');




    interviewContainer.append(newInterview);
    updateAvailableJobsText(currentFilter);
    document.getElementById('interview-empty-msg').classList.add('hidden');

    // count
    document.getElementById('total-interview').innerText = Number(document.getElementById('total-interview').innerText) + 1;
    document.getElementById('total-rejected').innerText = Number(document.getElementById('total-rejected').innerText) - 1;

    // empty msg

    const rejectedContainer = document.getElementById('rejected-container');
    if (rejectedContainer.children.length === 0) {
      document.getElementById('rejected-empty-msg').classList.remove('hidden')
    }

  })

  if (interviewContainer.children.length > 0) {
    document.getElementById('interview-empty-msg').classList.add('hidden');
  }
});