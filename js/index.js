let result = {
    
        "tag": "",
        "free": true,
        "role": false,
        "user": "abhaypaswan8867",
        "email": "abhaypaswan8867@gmail.com",
        "score": 0.64,
        "state": "deliverable",
        "domain": "gmail.com",
        "reason": "valid_mailbox",
        "mx_found": true,
        "catch_all": null,
        "disposable": false,
        "smtp_check": true,
        "did_you_mean": "",
        "format_valid": true
      
}
var rescount=document.querySelector("#resultcount");

submitbtn.addEventListener("click", async (e)=>{
    e.preventDefault()
    rescount.innerHTML = ` <img src="img/loading.svg" alt="">`
    console.log("This is clicked")
    let key="ema_live_knJM5FfWfecuOtHQLmdn0M1U7xBl99qcxNglG6B9"
    let email =document.getElementById("email").value
    console.log(email);
    let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url);
    let result = await res.json();
    let str=``;
for(key of Object.keys(result)){
    str=str+`<div> ${key}:${result[key]}</div>`
}
console.log(str);

rescount.innerHTML=str
})

