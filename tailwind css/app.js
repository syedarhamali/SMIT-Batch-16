function getUserLocation() {
   navigator.geolocation.getCurrentPosition((position) => console.log(position))
}



function copyText(){
    const textElement = document.getElementById("text-element").textContent
    

    navigator.clipboard.writeText(textElement)

    alert("text copied")
    // console.log(textElement)
}

// getUserLocation()