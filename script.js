// Basic JS for contact form handling and simple interactions
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name')?.value?.trim() || '';
      const email = document.getElementById('email')?.value?.trim() || '';
      const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
      const interests = Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(i=>i.value);
      const bio = document.getElementById('bio')?.value?.trim() || '';
      const msgEl = document.getElementById('formMessage');

      if(!name || !email || !gender){
        alert('Please fill in Name, Email and Gender.');
        return;
      }

      // Here: you can add AJAX to send to a backend or an email service.
      // For now we simply show a confirmation and print to console.
      const data = {name,email,gender,interests,bio,submittedAt:new Date().toISOString()};
      console.log('Contact form submission:', data);

      if(msgEl){
        msgEl.textContent = '✅ Thanks ' + name + '! Your message has been recorded locally (check console).';
        msgEl.classList.remove('muted');
      }
      form.reset();
    });
  }
});