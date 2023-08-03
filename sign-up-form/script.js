const openBtns = document.querySelectorAll('.open__action');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal');
const header = document.getElementById('header');
const input = document.querySelector("#phone");
const inputs = document.querySelectorAll('input');


openBtns.forEach(openBtn => openBtn.addEventListener('click', () => {
    modal.classList.add('open');
    header.classList.add('modal');
}));

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    header.classList.remove('modal');
});



window.intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: callback => {
        fetch("https://ipapi.co/json")
          .then(res => res.json())
          .then(data => callback(data.country_code))
          .catch(() => callback("us"));
      },
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});

inputs.forEach(input => {
    input.addEventListener('input', () => {
        console.log(input.value.trim())
        if(input.value.trim() !== '') {
            input.classList.add('filled');
        } else {
            input.classList.remove('filled');
        }
    })
})