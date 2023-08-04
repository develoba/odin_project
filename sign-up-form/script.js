const openBtns = document.querySelectorAll('.open__action');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal');
const header = document.getElementById('header');
const input = document.querySelector("#phone");
const inputs = document.querySelectorAll('input');

// input control
const form = document.getElementById('form');
const fileContainer = document.querySelector('.file-input-container');
const fileInput = document.getElementById('cv');
const fileLabel = document.getElementById('file-label');
const fileText = document.getElementById('file-text');
const progressBar = document.getElementById('progress-bar');
const progressBarAfter = document.getElementById('progress-bar--after');
const deleteIcon = document.getElementById('delete-icon');

//Change page when click on submit
const submitBtn = document.getElementById('submitBtn');
const successContainer = document.getElementById('success-container');


const initialFileText = fileText.innerHTML;


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
});

//input control
fileLabel.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileLabel.style.borderStyle = 'solid';
});
fileLabel.addEventListener('dragleave', (e) => {
    e.preventDefault();
    fileLabel.style.borderStyle = 'dashed';
});
fileLabel.addEventListener('drop', (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    uploadFile(file);
    
});
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    uploadFile(file);
})

deleteIcon.addEventListener('click', () => {
    resetFileInput();
    fileContainer.appendChild(fileInput);
});

// submitBtn.addEventListener('click', () => {
//     form.style.display = 'none'
// });
form.addEventListener('submit', () => {
    const allFieldsValid = form.checkValidity()

    if (!allFieldsValid) {
        e.preventDefault();
    } else {
        successContainer.style.display = 'block';
        form.style.display = 'none';
    }

    submitBtn.disabled = !allFieldsValid;
});


function uploadFile(file) {
    const totalSize = file.size;
    let uploadedSize = 0;

    const updateProgressBar = () => {
        let progress = (uploadedSize / totalSize) * 100;
        progressBarAfter.style.width = `${progress}%`;

        if (progress >= 100) {
            fileText.style.display = 'block';
            fileText.textContent = file.name;
            fileText.style.textAlign = 'left';
            fileContainer.removeChild(fileInput);
            progressBar.style.display = 'none';
        }
    };
    const simulateUpload = () => {
        fileText.style.display = 'none';
        fileLabel.style.border = 'none';
        setTimeout(() => {
            uploadedSize += 10000;
            updateProgressBar();
    
            if (uploadedSize < totalSize) {
                simulateUpload();
            }
    
        }, 50);
    }
    progressBarAfter.style.width = "0%";
    progressBar.style.display = 'block';
    deleteIcon.style.display = 'block';
    simulateUpload();
}

function resetFileInput() {
    deleteIcon.style.display = 'none';
    fileText.innerHTML = initialFileText;
    fileText.style.textAlign = 'center';
    fileLabel.style.border = '1px dashed rgba(255,255,255,.5)';
}