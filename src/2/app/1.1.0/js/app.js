
(function (D,W){

  var  header = D.getElementsByTagName('header')[0],
           main = D.getElementsByTagName('main')[0],
           search = D.getElementById('search'),
           searchIcon = D.getElementById('search-icon'),
           menu = D.getElementById('menu');

  var isSearch = false;

  var shadow = D.createElement('div');
          shadow.className = 'shadow';

    D.onclick = function (e){
      if (e.target !== search) {
        if (header.className.indexOf('search-spread') > -1 & isSearch) {
          console.log(e.target);
          header.className = header.className.replace('search-spread','');
          isSearch = false;
        }
      }
    }

	search.onclick = function (){
        if (!isSearch) {
          header.className += 'search-spread';
        }
        isSearch = true;
	 }

    menu.onclick = function (){
      var cn = main.className,
              an = 'toggle';
      if (cn.indexOf(an) < 0) {
        main.className += an;
        main.removeChild(shadow);
      } else {
        main.className = cn.replace('toggle','');
        main.appendChild(shadow);
      }
    }

})(document,window);