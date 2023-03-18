let dugme = document.querySelector('.btn');
let tekst = document.querySelector('.naslov');
let polja = document.querySelectorAll(".polje");
let pobednickiprikaz =getComputedStyle(document.body).getPropertyValue('--winning-blocks');
let X = "X";
let O = "O";
let trenutniplayer = X;
let prostor = Array(9).fill(null);
let zapocni = () =>{
    polja.forEach(polje => polje.addEventListener("click",odradi));
}
function odradi(e){
   const id = e.target.id;
   if(!prostor[id]){
    prostor[id]= trenutniplayer;
    e.target.innerText = trenutniplayer;
    if(pobednik()!= false){
        let boja = pobednik();
        boja.map(polje =>polja[polje].style.backgroundColor =pobednickiprikaz);
        alert(trenutniplayer + " je pobednik!");
        polja.forEach(polje => polje.removeEventListener('click',odradi))
    }
    trenutniplayer = trenutniplayer == X ? O:X;
   }
}
   const DobitnaKomb =[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
   ]
function pobednik(){
for (const condition of DobitnaKomb) {
    let [a,b,c]= condition;
    if(prostor[a] && (prostor[a]==prostor[b] && prostor[a] == prostor[c])){
        return [a,b,c];
        }
        }
            return false;      
    }
dugme.addEventListener("click", restart)
function restart(){
    prostor.fill(null);
    polja.forEach(polje =>{
        polje.innerText = "";
        polje.style.backgroundColor="";
        polje.addEventListener('click', odradi);
    })

}
zapocni()
