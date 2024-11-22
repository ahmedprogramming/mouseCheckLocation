let yAxis = document.querySelector(".yAxis")
let xAxis = document.querySelector(".xAxis")
let mouseChecker = document.querySelector(".mouseChecker")
let body = document.body
body.addEventListener("mousemove", (event) => {
    yAxis.innerHTML = `( ${event.clientY}`
    xAxis.innerHTML = `, ${event.clientX} )`
    mouseChecker.style.top = `${event.clientY + 50}px`
    mouseChecker.style.left = `${event.clientX - 80}px`
})