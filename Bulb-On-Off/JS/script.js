	var check=true;
 	document.querySelector('button').style.backgroundColor='#4CAF50';

	function myFunction(){
		if(check){
			check=false;
			document.querySelector('#img').src='Image/lighton.png';
			document.querySelector('button').innerHTML='OFF';
			document.querySelector('button').style.backgroundColor='#f44336';					
		}else{
			check=true;
			document.querySelector('button').innerHTML='ON';			
			document.querySelector('button').style.backgroundColor='#4CAF50';
			document.querySelector('#img').src='Image/lightoff.png';
		}
	}

// const light = document.querySelector('#bulb');

// light.addEventListener('click', function(e){

//     e.target.classList.toggle('bulb-on');

// })
