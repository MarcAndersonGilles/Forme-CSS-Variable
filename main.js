

const inputs = document.querySelectorAll(".controls input")

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
   
  
    const suffix = input.dataset.sizing || "";
   
    // const dataVariable = input.dataset.variable || "";
    // document.documentElement.style.setProperty(`--${name}`, value)
   document.documentElement.style.setProperty(`--${input.name}`, e.target.value + suffix )
   console.log(input)
   console.log(input.name)
   console.log(suffix)
   console.log(e.target.value)
 
  })
})






