var flipper=1;

function flip(){
    if(flipper==1)
    {
        document.getElementById("third").innerHTML = " ";
        
        
        flipper=0;
    }
    else{
        
        document.getElementById("third").innerHTML = '            <ul class="tiles">
                        <div class="col1 clearfix">

                            <li class="tile tile-big tile-3 slideTextUp">
                                <a href="http://www.easports.com/fifa" target="_blank">
                                    <div id="img-fifa">
                                        <p></p>
                                    </div>
                                    <div>
                                        <p>
                                            <img id="icon-fifa" src="/img/fifa15.jpg" />
                                        </p>
                                    </div>
                                </a>
                            </li>


                            <li class="tile tile-big tile-1 slideTextUp">
                                <a href="http://thecrew-game.ubi.com/" target="_blank">
                                    <div id="img-crew">
                                        <p></p>
                                    </div>
                                    <div>
                                        <p>
                                            <img id="icon-crew" src="/img/crew-icon.jpg" />
                                        </p>
                                    </div>
                                </a>
                            </li>


                            <li class="tile tile-big tile-1 slideTextUp">
                                <a href="http://www.callofduty.com/advancedwarfare" target="_blank">
                                    <div id="img-cod">
                                        <p></p>
                                    </div>
                                    <div>
                                        <p>
                                            <img id="icon-cod" src="/img/cod-icon.png" />
                                        </p>
                                    </div>
                                </a>
                            </li>


                        </div>

                        <div class="col2 clearfix">

<li class="tile tile-big tile-5 slideTextUp">
                                <a href="http://watchdogs.ubi.com/" target="_blank">
                                    <div>
                                        <p>
                                            <img id="icon-watchdogs" src="/img/watchdogs.jpg" />
                                        </p>
                                    </div>
                                    <div id="watchdogsfont">
                                        <p>Watchdogs</p>
                                    </div>
                                </a>
                            </li>
<!--

                            <li class="tile tile-small tile tile-2 rotate3d rotate3dY">
                                <div class="faces">
                                    <a href="http://leagueoflegends.com" target="_blank">
                                        <div class="front" id="icon-lol"><span></span>
                                        </div>
                                    </a>
                                    <a href="http://www.teamfortress.com/" target="_blank">
                                        <div class="back" id="icon-tf2">
                                            <p></p>
                                        </div>
                                    </a>
                                </div>
                            </li>

                            <li class="tile tile-small last tile-2 rotate3d rotate3dY">
                                <div class="faces">
                                    <a href="http://steamcommunity.com/app/221380" target="_blank">

                                        <div class="front" id="icon-aoe2"><span></span>
                                        </div>
                                    </a>


                                    <a href="http://thinkwithportals.com/" target="_blank">
                                        <div class="back" id="icon-p2">
                                            <p></p>
                                        </div>
                                    </a>
                                </div>
                            </li>

-->

                            <a href="http://dota2.com" target="_blank">
                                <li class="tile tile-big tile-2 slideTextLeft ">

                                    <div>
                                        <p>
                                            <img id="icon-dota2" src="/img/dota2-logo.jpg" />
                                        </p>
                                    </div>
                                    <div id="dota2font">
                                        <p>Dota2</p>
                                    </div>
                                </li>
                            </a>
                            <!--Tiles with a 3D effect should have the following structure:
            1) a container inside the tile with class of .faces
            2) 2 figure elements, one with class .front and the other with class .back-->
                            <li class="tile tile-small tile tile-2 rotate3d rotate3dY">
                                <div class="faces">

                                    <div class="front" id="icon-blur"><span></span>
                                    </div>

                                    <a href="http://l4d.com" target="_blank">
                                        <div class="back" id="icon-l4d2">
                                            <p></p>
                                        </div>
                                    </a>
                                </div>
                            </li>

                            <li class="tile tile-small last tile-2 rotate3d rotate3dY">
                                <div class="faces">
                                    <a href="http://warframe.com" target="_blank">
                                        <div class="front" id="icon-wf"><span></span>
                                        </div>
                                    </a>

                                    <a href="http://needforspeed.com/most-wanted" target="_blank">
                                        <div class="back" id="icon-nfs">
                                            <p></p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </div>

                        <div class="col3 clearfix">
                            <a href="http://www.counter-strike.net" target="_blank">
                                <li class="tile tile-2xbig tile-9 fig-tile" id="icon-csgo">
                                </li>
                            </a>

                            <li class="tile tile-big tile-5">
                                <a onclick="flip()">
                                    <div>
                                        <p>
                                            <img id="icon-watchdogs" src="/img/dots.png" />
                                        </p>
                                    </div>
                                </a>
                            </li>

                        </div>
                    </ul>        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        ';
        
        
        
        
        
        
        
        flipper=1;
    }
}

function preloader(){
  
    
    <!--//--><![CDATA[//><!--

			if (document.images) {
                
				img0 = new Image();
				img1 = new Image();
				img2 = new Image();
				img3 = new Image();
				img4 = new Image();
				img5 = new Image();
				img6 = new Image();
				img7 = new Image();
                
				img0.src = "../img/mainbg.jpg";
				img1.src = "../img/mainbg1.jpg";
				img2.src = "../img/mainbg2.jpg";
				img3.src = "../img/mainbg3.jpg";
				img4.src = "../img/mainbg4.jpg";
				img5.src = "../img/mainbg5.jpg";
				img6.src = "../img/mainbg6.jpg";
				img7.src = "../img/mainbg7.jpg";
			}
    init();
		//--><!]]>
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

addLoadEvent(preloader);



var init = function() {
    
  
    document.getElementById("blankBG").style.opacity = 0;
    document.getElementById("blankBG").style.display = "none";
    
  var i =0;
  var images = ['../img/mainbg1.jpg','../img/mainbg2.jpg','../img/mainbg3.jpg','../img/mainbg4.jpg','../img/mainbg5.jpg','../img/mainbg6.jpg','../img/mainbg7.jpg','../img/mainbg.jpg'];
  var image = $('#bgs');

  image.css('background-image', 'url("../img/mainbg.jpg")')
  
  setInterval(function(){  

   image.fadeOut(500, function () {

   image.css('background-image', 'url(' + images [i++] +')');
       
   image.fadeIn(500);

   });

   if(i == images.length)
    i = 0;
  }, 8000);           
 

    

};


















(function(){
    //get the background-color for each tile and apply it as background color for the cooresponding screen
    $('.tile').each(function(){
        var $this= $(this),
            page = $this.data('page-name'),
            bgcolor = $this.css('background-color'),
            textColor = $this.css('color');
            
            //if the tile rotates, we'll use the colors of the front face
            if($this.hasClass('rotate3d')) {
              frontface = $this.find('.front');
              bgcolor = frontface.css('background-color');
              textColor = frontface.css('color');
            }

            //if the tile has an image and a caption, we'll use the caption styles
            if($this.hasClass('fig-tile')) {
              caption = $this.find('figcaption');
              bgcolor = caption.css('background-color');
              textColor = caption.css('color');
            }

        $this.on('click',function(){
          $('.'+page).css({'background-color': bgcolor, 'color': textColor})
                     .find('.close-button').css({'background-color': textColor, 'color': bgcolor});
        });
    });

	  function showDashBoard(){
      for(var i = 1; i <= 3; i++) {
        $('.col'+i).each(function(){
            $(this).addClass('fadeInForward-'+i).removeClass('fadeOutback');
        });
      }
    }

    function fadeDashBoard(){
      for(var i = 1; i <= 3; i++) {
        $('.col'+i).addClass('fadeOutback').removeClass('fadeInForward-'+i);
      }
    }
  
    
  //listen for when a tile is clicked
  //retrieve the type of page it opens from its data attribute
  //based on the type of page, add corresponding class to page and fade the dashboard
  $('.tile').each(function(){
    var $this= $(this),
        pageType = $this.data('page-type'),
        page = $this.data('page-name');
        
    $this.on('click',function(){
      if(pageType === "s-page"){
          fadeDashBoard();
          $('.'+page).addClass('slidePageInFromLeft').removeClass('slidePageBackLeft');
        }
        else{
          $('.'+page).addClass('openpage');
          fadeDashBoard();
        }
    });
  });

  //when a close button is clicked:
  //close the page
  //wait till the page is closed and fade dashboard back in
  $('.r-close-button').click(function(){
      $(this).parent().addClass('slidePageLeft')
          .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                $(this).removeClass('slidePageLeft').removeClass('openpage');
              });
      showDashBoard();
  });
  $('.s-close-button').click(function(){
      $(this).parent().removeClass('slidePageInFromLeft').addClass('slidePageBackLeft');
      showDashBoard();
  });

})();


  $(document).ready(function () {

        // you want to enable the pointer events only on click;

        $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#canvas1').on('click', function () {
            $('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
        });

        // you want to disable pointer events when the mouse leave the canvas area;

        $("#map_canvas1").mouseleave(function () {
            $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        });
    });