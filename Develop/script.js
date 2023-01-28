const saveButton =document.querySelector("#.saveBtn");
const textboxEl = document.querySelector("#.description");
const today = document.querySelector("#currentDay");
const timeBlock = $(".time-block");



$(".saveBtn").on("click", function() {
    const timeStamp = $(this).parent(".description").attr("id");
    const message = $(this).parent().children().eq(1).val();
    
    localStorage.setItem(timeStamp, message);
  }
  );




// Time Blocks //
if (currentHour < hour9) {
  $("#7am-text").addClass("future");
} else if (currentHour > hour9) {
  $("#7am-text").addClass("past");
} else if (currentHour = hour9) {
  $("#7am-text").addClass("present");
}



// SAVE ANY DATA TO LOCAL STORAGE//
$("#7am-row .description").val(localStorage.getItem("7am-row"));

$("#8am-row .description").val(localStorage.getItem("#8am-row"));

$("#9am-row .description").val(localStorage.getItem("9am-row"));

$("#10am-row .description").val(localStorage.getItem("#10am-row"));

$("#11am-row .description").val(localStorage.getItem("11am-row"));

$("#12pm-row .description").val(localStorage.getItem("12pm-row"));

$("#1pm-row .description").val(localStorage.getItem("1pm-row"));

$("#2pm-row .description").val(localStorage.getItem("2pm-row"));

$("#3pm-row .description").val(localStorage.getItem("3pm-row"));

$("#4pm-row .description").val(localStorage.getItem("4pm-row"));

$("#5pm-row .description").val(localStorage.getItem("5pm-row"));
    
  timeBlock.each(function() 
  { const calendarHour = parseInt($(this).attr("id"));
    
  $(this).children().eq(1).val(localStorage.getItem(calendarHour));
    
    if (calendarHour < currentHour) {
      $(this).addClass("past");
    } else if (calendarHour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  }
  )
  
    today.text(currentDate);