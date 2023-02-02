//*Day, date, and time imported from day.js*//
$(function () {
  today = dayjs().format("dddd, MMMM D, YYYY h:mm A");
  const todaysDate = $("#currentDay");
  todaysDate.text(today);
  const currentTime = dayjs().hour();
  console.log(currentDay);
  

  //*Saves user input to local storage*//
  $(".time-block").on("click", ".saveBtn", function(event) {
    
   const value = $(this).prev().val();
   const hour = $(this).parent().attr("id");
   localStorage.setItem(hour, value);
    
  })
//*Retrieve saved user input from local storage on page reload*//
  $(".description").each(function() {
   const userInput = localStorage.getItem($(this).parent().attr("id"));
    $(this).val(userInput);
    console.log(userInput);
  })
//*Log"s time according to time blocks*.//
  $(".description").each(function() {
   const timeSlot = parseInt($(this).parent(0).attr("id"));
    console.log(timeSlot);
      if (timeSlot < currentTime) {
        $(this).parent().addClass("past");
      } else if (timeSlot === currentTime) {
        $(this).parent().addClass("present");
      } else {
        $(this).parent().addClass("future");
      }
        });
   
  });
  //*Clear"s planner contents and local storage*//
  $("#clearSectionBtn").click(function (event) {
    event.preventDefault;
  $("textarea").val(""); localStorage.clear();
  });