function owlInitialize() {
    if ($(window).width() < 786) {
        $('.prdt_category').addClass("owl-carousel");
        $('.owl-carousel').owlCarousel({
            loop:true,    
            margin: 5,  
            nav:false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false, 
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,

            responsive:{
                0:{
                    items:1,           
                },
                480:{
                    items:1,           
                },
                786:{
                    items:2,           
                }, 
                1000:{
                    items:4,                
                }
            }
        });

        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        })  
    }else{
        $('.owl-carousel').owlCarousel('destroy');
        $('.prdt_category').removeClass("owl-carousel");
    }
    }


$(document).ready(function(e) {
    owlInitialize();
    });
    $(window).resize(function() {
    owlInitialize();
    });



$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

       window.onload = function(){
            var image = new Image();
            image.src = "pics/1.jpg";
            image.onload = function(){
                document.getElementById("youtube").src = image.src;
            }

            var image2 = new Image();
            image2.src = "pics/3.jpg";
            image2.onload = function(){
                document.getElementById("youtube").src = image.src;
            }
        }






            var image = document.images[1];
            var bigImage = document.createElement("IMG");

            bigImage.onload = function(){
                image.src = this.src;
                image.className ="";
                }
            

            setTimeout(function(){
                bigImage.src = "pics/monile.png";
            }, 1500);







            $(document).ready(function(e) {
                $('#myCarousel').carousel({
                    interval: 5000
                  });
                
                  // Control buttons
                  $('.next').click(function () {
                    $('.carousel').carousel('next');
                    return false;
                  });
                  $('.prev').click(function () {
                    $('.carousel').carousel('prev');
                    return false;
                  });
                
                  // On carousel scroll
                  $("#myCarousel").on("slide.bs.carousel", function (e) {
                    var $e = $(e.relatedTarget);
                    var idx = $e.index();
                    var itemsPerSlide = 3;
                    var totalItems = $(".carousel-item").length;
                    if (idx >= totalItems - (itemsPerSlide - 1)) {
                      var it = itemsPerSlide -
                          (totalItems - idx);
                      for (var i = 0; i < it; i++) {
                        // append slides to end 
                        if (e.direction == "left") {
                          $(
                            ".carousel-item").eq(i).appendTo(".carousel-inner");
                        } else {
                          $(".carousel-item").eq(0).appendTo(".carousel-inner");
                        }
                      }
                    }
                  });
                });
            



