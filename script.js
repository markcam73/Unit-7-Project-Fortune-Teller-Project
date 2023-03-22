let counter=0;

$("button").click(function() {
    let name = $(".question1").val();
    let favshow = $(".question2").val();
    let hrswatched =$(".question3").val();
    let total= (hrswatched * 52)*30;
    console.log(name, favshow, hrswatched, total);
    $(".fortune-display").append("<p>"+name+ " you love to TV and your favorite show is  "+ favshow +". By 2050 you will have watched "+ total+ " hours of TV. </p>");
   counter= counter + 1;
     $(".counter-display").text("Counter: "+ counter);
    
});