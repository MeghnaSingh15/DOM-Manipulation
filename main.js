
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const clearBtn = document.getElementById('clear');
const errorDisplay = document.getElementById('error');

let count = 1;


function updateDisplay() {
    countDisplay.textContent = count;
}


updateDisplay();


incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
    errorDisplay.classList.add('hidden'); 
    clearBtn.classList.remove('hidden');  
});


decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
    
    if (count === 0) {
        errorDisplay.classList.remove('hidden'); 
    } else {
        errorDisplay.classList.add('hidden'); 
    }

    if (count === 0) {
        clearBtn.classList.add('hidden');  
    }
});


clearBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
    clearBtn.classList.add('hidden');  
    errorDisplay.classList.add('hidden'); 
});
