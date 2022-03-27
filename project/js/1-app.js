
    let screenHeight=$(window).height();
    // console.log(screenHeight);
    $(window).scroll(function(){
        let currentPosition=$(this).scrollTop();
        // console.log(currentPosition);
        if(currentPosition > screenHeight-100){
            $(".site-nav").addClass("site-nav-scroll");
        }
        else{
            $(".site-nav").removeClass("site-nav-scroll");
            setActive("home");
        }
    });
$(".navbar-toggler").click(function(){
  let result=$(".navbar-collapse").hasClass("show");
//   console.log(result);
  if(result){
      $(".menu-icon").removeClass("feather-x").addClass("feather-menu");
  }
  else{
      $(".menu-icon").removeClass("feather-menu").addClass("feather-x");
  }
});
function setActive(current){
    $(".nav-link").removeClass("current-section");
    $(`.nav-link[href='#${current}']`).addClass("current-section");

}
function navScroll(){
    let currentSection=$("section[id]");
    currentSection.waypoint(function(direction){
    
    if(direction=="down"){
        let currentId=$(this.element).attr("id");
        console.log(currentId);
        setActive(currentId);
    }
    },{
        offset:"150px"
    });
    currentSection.waypoint(function(direction){
    
        if(direction=="up"){
            let currentId=$(this.element).attr("id");
            console.log(currentId);
            setActive(currentId);
        }
        },{
            offset:"50px"
        });
    

    
}
navScroll();


// var waypoints = $('#home').waypoint(function(direction) {
//     console.log("I'm home"); 
//     $(".nav-link").removeClass("current-section");
//     $(".nav-link[href='#home']").addClass("current-section");
//   }, {
//     offset: '25%'
//   })
//   var waypoints = $('#about').waypoint(function(direction) {
//     console.log("I'm about"); 
//     $(".nav-link").removeClass("current-section");
//     $(".nav-link[href='#about']").addClass("current-section");
//   }, {
//     offset: '25%'
//   })
//   var waypoints = $('#services').waypoint(function(direction) {
//     console.log("I'm services");
//     $(".nav-link").removeClass("current-section"); 
//     $(".nav-link[href='#services']").addClass("current-section");
//   }, {
//     offset: '25%'
//   })
//   var waypoints = $('#pricing').waypoint(function(direction) {
//     console.log("I'm services"); 
//     $(".nav-link").removeClass("current-section");
//     $(".nav-link[href='#pricing']").addClass("current-section");
//   }, {
//     offset: '25%'
//   })
//   var waypoints = $('#contact').waypoint(function(direction) {
//     console.log("I'm services"); 
//     $(".nav-link").removeClass("current-section");
//     $(".nav-link[href='#contact']").addClass("current-section");
//   }, {
//     offset: '25%' 
//   })
