const progressBar = document.getElementById('progress')
const checkboxList = document.querySelectorAll('.check')
const inputFields = document.querySelectorAll('.check1')
const warning = document.getElementById('warning')
const taskBar=document.querySelectorAll(".task-bar")
checkboxList.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const allFieldsFilled = [...inputFields].every((input) => {
            return input.value.trim()
        })
        if (allFieldsFilled) {
            const taskbar = checkbox.closest('.task-bar')
            taskbar.classList.toggle('completed')
            
        }else{
            warning.classList.remove('hidden');
           
        }
    })
})
// let allINputFieldFilled=false;
