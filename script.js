$(".start-button").click(function() {  
    $(".start-button").hide();
    $(".Uppercut").show();
    $(".Jab").show();
    $(".message-1").show();
    $(".firstImage").hide();
     $(".jabthree").hide();
    $(".reset").hide();
  
   
    
        
});

$(".Uppercut").click(function() {
    $(".SecondImage").show();
    $(".Jab").hide();  
    $(".message-1").text("OH NO! Caleb Plant saw that coming. It's ok you still have time left in the round to come back. What's the next move Canelo should do to retaliate?");
    $(".jabtwo").show();
    $(".Uppercut").hide();
    $(".Jab").show();
         $(".jabthree").hide();
    $(".reset").hide();
    
        
});
$(".jabtwo").click(function() {
    $(".fifthImage").show();
    $(".ThirdImage").hide();
    $(".SecondImage").hide();
    $(".message-1").text("PLANT SAW THAT COMING AGAIN. YOU CAN'T MESS UP AGAIN.");
    $(".jabthree").hide();
    $(".jabtwo").hide();
    $(".jabthree").show();
});
$(".Jab").click(function() {
    $(".ThirdImage").show();
    $(".message-1").text("CALEB FELT THAT PUNCH. HE'S HURT. HOW YOU PLAN ON CAPTAILZING!");
    $(".Uppercut").hide();
    $(".Jab").hide();
    $(".Double-Hook").show();
    $(".jabthree").hide();
    $(".jabtwo").show();
    $(".SecondImage").hide();
     $(".fifthImage").hide();
    $(".reset").hide();
    
});
$(".Double-Hook").click(function() {
    $(".fourthImage").show();
    $(".SecondImage").hide();
      $(".message-1").text("HE'S WOBBLED. HE'S WOBBLED. FINISH HIM OFF");
    $(".ThirdImage").hide();
    $(".Double-Hook").hide();
    $(".keepGoing").show();
         $(".jabthree").hide();
    $(".reset").hide();
  $(".fifthImage").hide();
    $(".jabthree").show();
    $(".jabtwo").hide();
    
});
$(".keepGoing").click(function() {
    $(".keepGoing").hide();
    $(".seventhImage").show();
    $(".fourthImage").hide();
    $(".message-1").text("YOU KNOCKED HIM OUT. YOU KNOCKED HIM OUT. THE REF WAVED THE FIGHT OFF. CLICK THE BUTTON TO CELEBRATE WITH CANELO");
    $(".celebrate").show();
    $(".jabtwo").hide();
         $(".jabthree").hide();
     $(".reset").hide();
});
$(".celebrate").click(function() {
    $(".celebrate").hide();
    $(".seventhImage").hide();
    $(".Canelowinning").show();
    $(".message-1").text("CONGRATULATIONS.YOU MADE CANELO THE FIRST-EVER UNDISPUTED SUPER-MIDDLEWEIGHT CHAMPION AND THE FIRST MEXICAN FIGHTER TO ACCOMPLISH THE FEAT");
         $(".jabthree").hide();
     $(".reset").show();
});
$(".jabthree").click(function() {
       $(".Calebwinning").show();
       $(".message-1").text("CALEB PLANT BEATS CANELO OFF OF POINTS. CALEB PLANT IS THE FIRST-EVER UNDISPUTED SUPER-MIDDLEWEIGHT CHAMPION");
     $(".fifthImage").hide();
     $(".jabtwo").hide();
     $(".Jab").hide();
    $(".jabthree").hide();
    $(".reset").show();
    $(".Double-Hook").hide();
     $(".fourthImage").hide();   
    $(".keepGoing").hide();
});
$(".reset").click(function(){
    $(".firstImage").show();
    $(".reset").hide();
    $(".start-button").show();
    $(".message-1").hide();
    $(".Calebwinning").hide();
    $(".Double-Hook").hide();
    $(".Canelowinning").hide();
});
    