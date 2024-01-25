
// select html with class save button, gave it event listen when clicked,(jQuery event listener)
$(".saveBtn").on("click",function(){

    console.log("You clicked save button"); // testing to see if the save button clicked and worked from the console 
    
    // this will grab the value using siblings method, make it specific by using class name and description (relative to line 40 html)
    // "$(this)" is used to get/display the content while the (".description") is used get class from html (relative to line 40 html)
    
    var textvalue = $(this).siblings(".description").val()  // this will display the text/content written in textArea in the console
    
    console.log(textvalue); // consologing the input on text area

})

// This code is displaying current date utilizing dayJs 
function currentDay (){
    var currentDay = dayjs().format('dddd, MMMM D, YYYY h:mm A')    // declare variable and formating to display time, day and current date  
    $("#currentDay").text("Current Date: " + currentDay)      // The #currentDay is an id picked from html line 31, .text "Cuurent Date" is use write Current date as shown

    console.log(currentDay);                // consologing to show its working 
    
}
currentDay()                                    // calling the function 
