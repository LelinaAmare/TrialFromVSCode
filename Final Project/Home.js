
$('.program-holder').mouseover(
    function(){
       // $(this).parent().css({'background-color': "white"});
        $(this).parent().css({'background-color': "white"});
        $(this).parent().css({'transition': "background-color 2s ease"});
        $('#program-header').css({'color': "black"});
        $('#o').css({'border-bottom': "4px solid black"});
        $('#program-header').css({'border-bottom': "1px solid black"});
   }

  // ).mouseout(
  //   function(){
  //     $(this).parent().css({'background-color': "rgb(192,39,39)"});
  //     $(this).parent().css({'transition': "background-color 3s ease"});
      
  //       // $(this).parent().css({'background-color': "rgb(192,39,39)"});
  //       $('#program-header').css({'color': "white"});
  //       $('#o').css({'border-bottom': "4px solid white"});
  //       $('#program-header').css({'border-bottom': "1px solid white"});
 
  //   } 
  );




  //PICTURES TO SLIDE
  

// $(function(){

//   var width=1382;
//   var animationSpeed=1000;
//   var pause=3000;
//   var currentSlide=1;
  
//   var $slider=$('#slider');
//   var $slideContainer=$slider.find('.slides');
//   var $slides=$slideContainer.find('.slide');
//   //var interval;

// //function startSlider(){
// //   interval=
//   setInterval(function(){
//       $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
//           currentSlide++;
//           if(currentSlide === $slides.length){
//               currentSlide =1;
//               $slideContainer.css('margin-left', 0);
//           }
//       });
//   },pause);
//   // }
//   // function stopSlider(){
//   //     clearInterval(interval);
//   // }

//   // $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
//   // startSlider();
// });




  //PICTURES TO SLIDE 2
  

  $(function(){

    var width=730;
    var animationSpeed=1000;
    var pause=3000;
    var currentSlide=1;
    
    var $slider=$('#slider-2');
    var $slideContainer=$slider.find('.slides-2');
    var $slides=$slideContainer.find('.slide-2');
    //var interval;
  
  //function startSlider(){
  //   interval=
    setInterval(function(){
        $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
            currentSlide++;
            if(currentSlide === $slides.length){
                currentSlide =1;
                $slideContainer.css('margin-left', 0);
            }
        });
    },pause);
    // }
    // function stopSlider(){
    //     clearInterval(interval);
    // }
  
    // $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
    // startSlider();
  });
  


  

  //PICTURES TO SLIDE 2
  

  $(function(){

    var width=640;
    var animationSpeed=1000;
    var pause=3000;
    var currentSlide=1;
    
    var $slider=$('#slider-3');
    var $slideContainer=$slider.find('.slides-3');
    var $slides=$slideContainer.find('.slide-3');
    //var interval;
  
  //function startSlider(){
  //   interval=
    setInterval(function(){
        $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
            currentSlide++;
            if(currentSlide === $slides.length){
                currentSlide =1;
                $slideContainer.css('margin-left', 0);
            }
        });
    },pause);
    // }
    // function stopSlider(){
    //     clearInterval(interval);
    // }
  
    // $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
    // startSlider();
  });
  