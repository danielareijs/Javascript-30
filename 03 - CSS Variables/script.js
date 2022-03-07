
const inputs = document.querySelectorAll('input');

handleInputChange = (e) => {
    const suffix = e.target.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix)
}

inputs.forEach(input =>{
    input.addEventListener('change', (e) => handleInputChange(e))
    input.addEventListener('mousemove', (e) => handleInputChange(e))
})