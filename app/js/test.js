import  {getWords}  from "./words";

getWords().then((res)=>{
    console.log(res); 
    words = res.Words
    var html = ""
    for (let i = 0; i < words.length; i++) {
        // console.log(words[i])
        // alert(words[i].WordText)
        html += "<li>" + words[i].WordText + "，" + words[i].Translation + "</li>"
    }
    document.getElementById("ul").innerHTML = html   
},(error)=>{
    console.log(error);    
    
})

// console.log('test');
