var imagem=[
    "https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0.png",

    
    "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2017/12/palmeiras1-1.jpg",

    "https://wallpapercave.com/wp/wp1902283.jpg"

]
var nome=[
    "flamengo","palmeiras","santos"
]

var i=0
function proximo(){
   i++
   if(i>2) 
   {i=0}
   document.getElementById("imagens").scr=imagem[i]

   document.getElementById("nome").innerHTML=nome[i]
}

