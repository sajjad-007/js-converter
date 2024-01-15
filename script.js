let input = document.querySelector(".inputbox");
let submitBtn = document.querySelector(".submitbtn");
let resetBtn = document.querySelector(".resetbtn");
let result = document.querySelector(".result");
let faka = document.querySelector(".faka")

submitBtn.addEventListener("click",function () {
    if (input.value < 0 || input.value > 100) {
        alert("Warning, you can only enter 0-100")
    } else if(input.value >= 0 && input.value <= 39) {
        result.innerHTML = "You failed, study hard next time";
        faka.src = "images/img_01.jpeg";
    }else if(input.value >= 40 && input.value <= 49){
        result.innerHTML = `Your grade is "C"`
        faka.src = "images/img_2.jpg";
    }else if(input.value >= 50 && input.value <= 59){
        result.innerHTML = `Your grade is "D"`
        faka.src = "images/img_3.jpg";
    }else if(input.value >= 60 && input.value <= 69){
        result.innerHTML = `Your grade is "B"`
        faka.src = "images/img_4.jpg";
    }else if(input.value >= 70 && input.value <= 79){
        result.innerHTML = `Your grade is "A-"`
        faka.src = "images/img_5.jpg";
    }else if(input.value >= 80 && input.value <= 89){
        result.innerHTML = `Your grade is "A"`
        faka.src = "images/img_6.jpeg";
    }else if(input.value >= 90 && input.value <= 100){
        result.innerHTML = `Congratuation, I am GPA 5 "A+"`
        faka.src = "images/img_7.jpg";
    }
    
})

resetBtn.addEventListener("click",function () {
    input.value = "";
    result.innerHTML = ""; 
    faka.src = "";

})