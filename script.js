// select html with class save button, gave it event listen when clicked,(jQuery event listener)
$(".saveBtn").on("click", function () {
  console.log("You clicked save button"); // testing to see if the save button clicked and worked from the console

  // this will grab the value using siblings method, make it specific by using class name and description (relative to line 40 html)
  // "$(this)" is used to get/display the content while the (".description") is used get class from html (relative to line 40 html)
  var key = this.parentElement.id;
  var textvalue = $(this).siblings(".description").val(); // this will display the text/content written in textArea in the console

  console.log(textvalue); // consologing the input on text area

  localStorage.setItem(key, textvalue); // this is to store data to local storage
});

// this is the cuurent hour info declared to be access in global
var currentHour = dayjs().hour();
console.log(currentHour);

// each time block id caller to keep the text displayed in the description text area
$(".time-block").each(function () {
  $(this).children(".description").val(localStorage.getItem(this.id)); // for each time block the description is called from local storage and displayed
  var hour = parseInt(this.id.substring(4));
  // loop function to determine current hour, past and future and display according to color code
  if (hour < currentHour) {
    $(this).addClass("past").removeClass("present future");
  } else if (hour == currentHour) {
    $(this).addClass("present").removeClass("past future");
  } else {
    $(this).addClass("future").removeClass("present past");
  }
  console.log(hour);
});

// This code is displaying current date utilizing dayJs
function currentDay() {
  var currentDay = dayjs().format("dddd, MMMM D, YYYY h:mm A"); // declare variable and formating to display time, day and current date
  $("#currentDay").text("Current Date: " + currentDay); // The #currentDay is an id picked from html line 31, .text "Cuurent Date" is use write Current date as shown

  console.log(currentDay); // consologing to show its working
}
currentDay(); // calling the function

/* // this functions is delcared to update each hour text aret with a color base on current time
function hourUpdater() {
  var currentHour = dayjs().hour();
  $("#textArea9am").addClass("present"); // used the css class present to add the coolor to the present time block

  console.log(currentHour);
}

hourUpdater(); */
