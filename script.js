function calculate_criteria(event) {

    event.preventDefault();
    let username = document.getElementById("username").value
    let age = document.getElementById("age").value
    let experience = document.getElementById("experience").value
    let percentage = document.getElementById("percentage").value

    let result = ""

    if (age <= 20 || experience < 1 || percentage < 70) {
        result = "Sorry!! " + username + "You Are Not Eligible For Our Criteria"
    } else {
        result = "Congrats!! " + username + " You Are Hiring For Teaching"
    }


    let output = document.getElementById("output");
    output.innerText = result;


    output.style.display = "block";



}


