var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/script.js',
        '/manifest.js',
        '/vendor.js',
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(CACHE_NAME) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});














var largura = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var altura = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
console.log(altura);
console.log(largura);



			let timer = "";
			let velocidade = 0;
			let pontos=0;
			let score = document.querySelector(".score");
			let contar = 0;
			let botaoIniciar = document.querySelector(".iniciar");
			let inicio = false;
			let reinicio = document.querySelector(".reiniciar")
			let recorde = document.querySelector(".recorde");
			let fundo = document.querySelector(".fundo");
			let divPontos= document.querySelector(".mostrarPontos");
			let musicaescolhida="";
			let numero ="";
			let numeros="";
			let aleat="";


			div2.style.animationPlayState = "paused";

	score.style.display = "none";

	let speed2 = "1s"
	let speed3 = "0.8s"
   let speed4 = "0.95s"


	   if(largura < 500 && largura > 400) {


		   div2.style.animationDuration = speed4;


	   }

	   if(largura < 400 && largura > 320) {


		div2.style.animationDuration = speed3;


	}

	   if(largura > 600) {

console.log("bah")
div2.style.animationDuration = speed4

	   }
            // mover cursor 2 - automático
		


	
            // Mover cursor 1  - através dos botões
			function iniciar() {

				jaFoiClicado=true;

				fundo.style.backgroundImage = "url('./icon/fundoroxo.jpg')";



				divPontos.style.display="none"

				div2.style.animationPlayState = "running";

				setTimeout(function libera() {
				jaFoiClicado=false;
				
				
				}, 100);

				

				clicarBotao();

				pontinhos();

				pararLocalStorage = false

score.style.display="block";
botaoIniciar.style.display="none";

musicafundo.play();
musicafundo.volume = 0.05;

				if (contador != 0) {
					
					para();
				}
			
	}








	

var _player = new Audio;

function playNext() {
/* Objects */



/* Aplication */
var tracks = [
  './astrothunder.mp3',
  './aintsafe.mp3',
];


  var track = tracks[Math.floor(Math.random() * tracks.length)];

  _player.src = track;
  _player.play();





var trocarMusicas = setInterval(() => {


_player.pause();
playNext();
		
		  let div1Left= parseInt(getComputedStyle(div1).left);
				let div1Top= parseInt(getComputedStyle(div1).top);
				let div1Height= parseInt(getComputedStyle(div1).height);
				let div1Width= parseInt(getComputedStyle(div1).width);

				let div2Left= parseInt(getComputedStyle(div2).left);
				let div2Top= parseInt(getComputedStyle(div2).top);
				let div2Height= parseInt(getComputedStyle(div2).height);
				let div2Width= parseInt(getComputedStyle(div2).width);
				
				let fundoHeight= parseInt(getComputedStyle(fundo).height);
				let fundoWidth= parseInt(getComputedStyle(fundo).width);

			


					if (((div1Left >= div2Left)&&(div1Left <= div2Left + div2Width))&&
						((div1Top >= div2Top)&&(div1Top <= div2Top + div2Height))){
					
							_player.pause();
							clearTimeout(trocarMusicas);
					
							
					}
					if (((div2Left >= div1Left)&&(div2Left <= div1Left + div1Width))&&
						((div2Top >= div1Top)&&(div2Top <= div1Top + div1Height))){
						
							_player.pause();
							clearTimeout(trocarMusicas);
	
							
							
					}
		
		},20000);






}



	


	




	function move(Direcao) {

				

		if (contador != 0) {
			
			para();
		}
		


		if (Direcao == "acima") {
			timer = setInterval("acima()",30);


	
			
			contador ++;
			
score++;


		}
	
		
if( largura < 2220) {



			clearInterval(timer);
			timer = setInterval("acima()",8 );

		

}

if( largura > 720 && largura < 2220) {

alert('720 ATÉ 2220')

	clearInterval(timer);
	timer = setInterval("acima()",0.3 );



}












				


	
}













	
	function acima() {
		let div1Top= parseInt(getComputedStyle(div1).top);
		sompulo.play();
		
		div1.style.top = div1Top-5 ;
		if(div1Top <= 0 ){
			clearInterval(timer)
			timer = setInterval("baixo()",33);
		


		}

	//velocidade do obstáculo

	

	}



















		
function baixo() {
			let div1Top= parseInt(getComputedStyle(div1).top);
			let fundoHeight= parseInt(getComputedStyle(chao).height)-10;
			let div1Height= parseInt(getComputedStyle(div1).height);


			if(largura > 600) {


				div1.style.top = div1Top+12;

			}
			else {


			div1.style.top = div1Top+10;

			}
			if(div1Top >= fundoHeight){
				clearInterval(timer);

				jaFoiClicado= false;
			
			}
		}
	
			





























		

			
            // Parar cursores
			function para2(){
				clearInterval(m);
			}
			function para() {
				clearInterval(timer);
				
			}

			function colisao(){
				let div1Left= parseInt(getComputedStyle(div1).left);
				let div1Top= parseInt(getComputedStyle(div1).top);
				let div1Height= parseInt(getComputedStyle(div1).height);
				let div1Width= parseInt(getComputedStyle(div1).width);

				let div2Left= parseInt(getComputedStyle(div2).left);
				let div2Top= parseInt(getComputedStyle(div2).top);
				let div2Height= parseInt(getComputedStyle(div2).height);
				let div2Width= parseInt(getComputedStyle(div2).width);
				
				let fundoHeight= parseInt(getComputedStyle(fundo).height);
				let fundoWidth= parseInt(getComputedStyle(fundo).width);

			


					if (((div1Left >= div2Left)&&(div1Left <= div2Left + div2Width))&&
						((div1Top >= div2Top)&&(div1Top <= div2Top + div2Height))){
							para2();
							para();
							clicarBotao();
							inicio= true;
							velocidade=0;
							pontuacaoStorage();
						pontosarmazenados2 = true
							botaoreiniciar();
							divPontos.style.display="block"
							recordes();
							musicafundo.pause();
							musicafundo.currentTime = 0;
							chao.style.top= 60 + "%"
							musicas[0].pause();
							musicas[0].currentTime = 0;
							_player.pause();
							clearInterval(trocarMusicas);
					
							
					}
					if (((div2Left >= div1Left)&&(div2Left <= div1Left + div1Width))&&
						((div2Top >= div1Top)&&(div2Top <= div1Top + div1Height))){
							para2();
							para();
							clicarBotao();
							inicio = true;
							velocidade=0;
							divPontos.style.display="block"
						    mostrarPontos()
							pontuacaoStorage();
							chao.style.top= 60 + "%"
							pontosarmazenados2 = true
							botaoreiniciar();
							recordes();
							musicafundo.pause();
							musicafundo.currentTime = 0;
							musicas[0].pause()
							musicas[0].currentTime = 0;
							_player.pause();
							clearInterval(trocarMusicas);
	
							
							
					}
				}

function pontinhos() { 
	
	
	pontadas = setInterval((pontadas) => {


contar ++;
score.innerHTML = "SCORE: " + contar ;



},150);




}









var pararLocalStorage = false;


		function pontuacaoStorage() {

		if(!pararLocalStorage) {

			var pegarPontosparaStorage = contar;
			
			
		
			// Pega a lista já cadastrada, se não houver vira um array vazio
			var array_recordes = JSON.parse(localStorage.getItem('array-recordes') || '[]');
			// Adiciona pessoa ao cadastro
			array_recordes.push(
				pegarPontosparaStorage,
	
			);
		
			// Salva a lista alterada
			localStorage.setItem("array-recordes", JSON.stringify(array_recordes));
		
			console.log('Salva com sucesso.');
			
				 maximo =	array_recordes.sort(function(a, b){return b - a;});

		

			console.log(maximo[0]);
			console.log(maximo[1]);
			console.log(maximo[2]);
			botaoreiniciar();


contar=0;
		

  clearInterval(pontadas);
  pararLocalStorage = true;
			}

}


function recordes() {




recorde.style.display="block"

if(maximo[1] == undefined && maximo[2] == undefined) {


maximo[1]="";
maximo[2]="";

}
if(maximo[1] !== undefined && maximo[2] == undefined) {
	maximo[2]="";
	
	}
	

recorde.innerHTML = "BEST: " + maximo[0] + "          "+ maximo[1] + "          " + maximo [2] ;




}



function botaoreiniciar(){

	gameover.play();
div1.style.display = "none"

div2.style.display = "none"

	inicio = false;

reinicio.style.display = "flex";


}







				function reiniciar() {

					jaFoiClicado= false;

					div1.style.top= 50 + "%";
					div1.style.display="block"
					reinicio.style.display = "none";

					div2.style.display="block"

contar= 0;
velocidade=0;

clearInterval(m)
clearInterval(timer)

div2.style.left= +100 + "%";

iniciar();


				}
				let div2Left= parseInt(getComputedStyle(div2).left);

if(div2Left == 0+"vw" ) {

	
	console.log("bah telecken na real que foi o quedeu pae")
}


var result = document.getElementById('.div2'), currentPercent = 0;
var showPercent = window.setInterval(function() {
  if(currentPercent < 100)
  {
    currentPercent += 1;

  }

  if(currentPercent == 100) {

	console.log("tefude")
  }
  else {
    currentPercent = 0;
  }

}, 40);

function mostrarPontos() {





divPontos.innerHTML = "Sua pontuação foi " + contar






}

 // começa com false pra poder ser clicado pela primeira vez
var jaFoiClicado = false;
function clicarBotao() {
  if (!jaFoiClicado) {

	if(contar > 100) {


		console.log("Oii");

	

		if(contar > 120) {

		
			console.log("bahh")
		}
	}
	
	move(acima);

	sompulo.play();
    console.log("primeira vez");
    // substitui aqui dentro pelo seu código
    jaFoiClicado = true;
  } 


}









				


		

            //Ao carregar a página estas linhas são executadas. 
			let contador = 0;
            let cont = 0;
	   		var m ="" //Funções que são chamadas a cada 15 e 5 milisegundos
			let n = setInterval("colisao()", 5);
			let contadorpulo = 0;



			var sompulo = new Audio();
sompulo.src = 'pulo.wav';

var musicafundo = new Audio();
musicafundo.src = 'musicafundo.wav';


var gameover = new Audio();
gameover.src = 'gameover.wav';


var aintsafe = new Audio();
aintsafe.src = 'aintsafe.mp3';

var astrothunder = new Audio();
astrothunder.src = 'astrothunder.mp3';
			
            