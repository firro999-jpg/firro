function startgame() {
    let name = prompt('whats ur name?');
    let result = document.getElementById('results');
    result.innerHTML= 'welcome' + name + '!<br>';
    for (let i = 1; i <=3; i++){
        let num = prompt('enter a number bigger than 5:');
        if ( num > 5){
            result.innerHTML += 'round' + i + ': great!<br>';

        } else{ 
            result.innerHTML  += 'round' + i + ':try again <br>';
        }
    }
}