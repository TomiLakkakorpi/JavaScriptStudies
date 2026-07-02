const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click",submit);

async function submit(event) {
    event.preventDefault();
    const guess = guessInput.value;
    const request = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({"guess":guess})
    }
    const response = await fetch("/guess",request);
    if(response.ok) {
        const result = await response.json();

        const resultHeader = document.getElementById("result");
        if(result.correct) {
            resultHeader.textContent = "Congratulations! You guessed the number!";
        }
        else if(result.tooLow) {
            resultHeader.textContent = "Your guess is too low. Try again!";
        }
        else if(result.tooHigh) {
            resultHeader.textContent = "Your guess is too high. Try again!";
        }
    } else {
        console.log("Server responded with a status "+response.status);
    }   
}