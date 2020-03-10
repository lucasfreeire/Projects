
 jQuery(document).ready(  function () {     //OR   $(documents).ready(  function () {} );

$("body").empty();

$("body").append("<h1>WELCOME</h1><p>Topic One</p><ul><li>item 1</li><li>item 2</li><li>item 3</li></ul>");
$("ul").css({"background-color":"gray"});
$("h1").css("border","1px dashed black");

$("li")[1].remove();

//jQuery .next(), .prev()
//jQuery . parent(), .child()

$("body").children("ul").prev().prev().next(); // = to $("p");
$("body").prev(); 


 });


/*jQuery(document).ready(  function () {

    console.log("hello");

    jQuery("h1").css( {"font-size": "100px", "color":"pink"} );

    jQuery("ul").css({
        "border":"10px solid green"
    });

    jQuery("button").click(function () {
        console.log("hello");

        jQuery("body").css({
            "background-color":"black"
        });

        jQuery("h1").css({
            "margin-top": "300px"
        })
    });*/

// jQuery(document).ready(function () {

//     $("#light-off").click(function () {

//         $("body").css({"background-color":"black", "color":"white"});   //OR     $("body").css("color","white");     //

//     });

//     $("#light-on").click(function() {
//         $("body").css({"background-color":"white", "color":"black"});
//     });
  
//     //New JavaScript function, takes two arguments, first is callbak, second is how long in milliseconds.
//     setTimeout (function() {

//         // Add an element to teh webpage. .append()//
//        $("ol").append("<li>This was added after the fact.</li>");

//        $("body").append("<h1>New section</h1><p>Welcome to this new section</p>")

//         //Adds an element to the start of the child list, .prepend()
//        $("body").prepend("<h1 style='color: red'>Alert! new viruse!</h1>");

//        //Adds an html as a chil, replacing existing children, .html()
//        $("ol").html("<li>All task done!</li>");

//     }, 5000);

//     $("#recycleButton").click(function (){
//      //Removes the element you have selected.
//         $('body').remove();

//      //Removes all children of the element you have selected.
//        $("body").empty(); 
//     });
// });

