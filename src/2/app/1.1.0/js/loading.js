
(function(W,D){
   var widthHalf = W.innerWidth / 2,
	  	 heightHalf = W.innerHeight / 2,
			 cube = {
			   	dom: null,
			   	x: 0,
			   	y: 0,
			   	z: 0,
			   	is_down: false,
			   	cordiate: function (e){
			   		cube.x = parseInt(widthHalf - e.x);
			   		cube.y = parseInt(heightHalf - e.y);
			   		cube.move(cube.x, cube.y, cube.z);
			   	},
			   	wheel: function (e){
			   	   cube.z = e.wheelDelta / 2;
			   	   cube.dom.style.transform = 'translate3d(' + cube.x + 'px,' + cube.y + 'px,' + cube.z + 'px)';
			   	},
			   	down: function (e){
			   		e.preventDefault();
			   		cube.is_down = true;
			   	},
			   	up: function (){
			   		cube.is_down = false;
			   	},
			   	move: function (x, y, z){
			   			if (!this.is_down) {
			   			this.dom.style.transform = 'translate3d(' + cube.x + 'px,' + cube.y + 'px,0)';
			   			} else {
			   	   		this.dom.style.transform += 'rotateX(' + cube.x + 'deg) rotateY(' + cube.y + 'deg)';
			   			}
			   	},
			   	init: function (){
			   		this.dom = D.getElementById('cube');
			   		return this.cordiate;
			   	}
		   }

		cube.init();

		D.addEventListener('mousemove', cube.cordiate, true);
		D.addEventListener('mousewheel', cube.wheel, true);
		D.addEventListener('mousedown', cube.down, true);
		D.addEventListener('mouseup', cube.up, true);

})(window,document);