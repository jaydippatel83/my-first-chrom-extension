async function helloWorld(){
    let [tab] = await chrome.tabs.query({active: true});
    chrome.scripting.executeScript({
        target:{ tabId: tab.id},
        func:()=>{
            alert("Alert from chrome extension");
        }
    })
} 


const button = document.getElementById('myButton'); 
button.addEventListener('click', helloWorld);
