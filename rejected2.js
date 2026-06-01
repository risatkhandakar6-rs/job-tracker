const rejectedBtn2 = document.getElementById('rejected-2');
rejectedBtn2.addEventListener('click', function () {

  // duplicat stop
  const card = this.closest('.job-card');
  if (card.dataset.moved === 'true') return;
  card.dataset.moved = 'true';

  // badge

  document.getElementById('badge-rejected-2').classList.remove('hidden');

  // count
  const totalRejected = document.getElementById('total-rejected');
  totalRejected.innerText = Number(totalRejected.innerText) + 1;

  const rejectedContainer = document.getElementById('rejected-container');
  const newRejectedElements = document.createElement('div');
  newRejectedElements.innerHTML=` <div class="bg-[#FFFFFF] mt-3 pl-5 pb-5">
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
  const interviewBtn = newRejectedElements.querySelector('.move-interview');
  const rejectedBtn = newRejectedElements.querySelector('.move-rejected');

   if (rejectedContainer.children.length > 0) {
    document.getElementById('rejected-empty-msg').classList.add('hidden')
  }

  // interview click
 
  interviewBtn.addEventListener('click', function () {
    const interviewContainer = document.getElementById('interview-container');
    if (interviewContainer.contains(newRejectedElements)) return;
    interviewContainer.append(newRejectedElements);
     updateAvailableJobsText(currentFilter);

    // badge
    const badgeInterview = newRejectedElements.querySelector('.badge');
    badgeInterview.innerText = 'Interview';
    badgeInterview.classList.remove('badge-error');
    badgeInterview.classList.add('badge-success')

    // count
    document.getElementById('total-interview').innerText = Number(document.getElementById('total-interview').innerText) + 1;
    document.getElementById('total-rejected').innerText = Number(document.getElementById('total-rejected').innerText) - 1;

    document.getElementById('interview-empty-msg').classList.add('hidden')
    if (rejectedContainer.children.length === 0) {
      document.getElementById('rejected-empty-msg').classList.remove('hidden');
    }

    
  })
  // rejected from intrview
  rejectedBtn.addEventListener('click', function () {
    const rejectedContainer = document.getElementById('rejected-container');
    if (rejectedContainer.contains(newRejectedElements)) return;
    rejectedContainer.append(newRejectedElements)
     updateAvailableJobsText(currentFilter);
    // badge
    const badgeRejected = newRejectedElements.querySelector('.badge');
    badgeRejected.innerText = 'Rejected';
    badgeRejected.classList.remove('badge-success');
    badgeRejected.classList.add('badge-error');

    // count
    document.getElementById('total-rejected').innerText = Number(document.getElementById('total-rejected').innerText) + 1;
    document.getElementById('total-interview').innerText = Number(document.getElementById('total-interview').innerText) - 1;

    // empty msg
    const emptyMsg = document.getElementById('rejected-empty-msg').classList.add('hidden');
    const interviewContainer = document.getElementById('interview-container');
    if (interviewContainer.children.length === 0) {
      document.getElementById('interview-empty-msg').classList.remove('hidden');
    }
  })




  
})