const myButton = document.getElementById('actionButton');
const linkInput = document.getElementById('linkInput');
const errorMessage = document.getElementById('errorMessage');

myButton.onclick = () =>{
    let myUrl = document.getElementById('linkInput').value;

    fetch('https://rel.ink/api/links/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"url": myUrl})
    })
    .then(data => data.json()) 
    .then(data =>{

        if(data.hashid){
            let newUrl = 'https://rel.ink/'+data.hashid;

            linkInput.style.border='1px solid var(--light-violet)';
            linkInput.style.color='var(--light-violet)';
            linkInput.value ='';
            errorMessage.textContent = '';
    
            const linkContainer = document.getElementById('addContainer');
            linkContainer.innerHTML += `
            <div class="resultContainer">
                <div class="longUrlContainer">  
                    <p class="longUrl">${myUrl}</p>
                </div>
                <div class="shortUrlContainer">
                    <p class="shortUrl">${newUrl}</p>
                </div>
                <div class="copyButtonContainer">
                    <div class="copyButton" id="copyButton">Copy</div>
                </div>
            </div>    
            `
        }

        else{

            linkInput.style.border='5px solid var(--red)';
            linkInput.style.color='var(--red)';
            errorMessage.textContent = 'Please add a valid link';
        }
        
    })
}



