
// select html with class save button, gave it event listen when clicked,(jQuery event listener)
$(".saveBtn").on("click",function(){

    console.log("You clicked save button"); // testing to see if the save button clicked and worked from the console 
    
    // this will grab the value using siblings method, make it specific by using class name and description (relative to line 40 html)
    // "$(this)" is used to get/display the content while the (".description") is used get class from html (relative to line 40 html)
    
    var textvalue = $(this).siblings(".description").val()  // this will display the text/content written in textArea in the console
    
    console.log(textvalue); // consologing the input on text area


})
