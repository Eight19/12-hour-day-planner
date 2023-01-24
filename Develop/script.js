const saveButton =document.querySelector("#.saveBtn");
const textboxEl = document.querySelector("#.description");
const today = document.querySelector("#currentDay");
const timeBlock = $(".time-block");
const currentDate = dayjs().format("dddd, MMMM D, YYYY")
const currentHour = moment().format('H');


$(".saveBtn").on("click", function() {
    const timeStamp = $(this).parent(".description").attr("id");
    const message = $(this).parent().children().eq(1).val();
    
    localStorage.setItem(timeStamp, message);
  }
  );
const hour7 = 7;
const hour8 = 8;
const hour9 = 9;
const hour10 = 10;
const hour11 = 11;
const hour12 = 12;
const hour1 = 13;
const hour2 = 14;
const hour3 = 15;
const hour4 = 16;
const hour5 = 17;



// Time Blocks //
if (currentHour < hour9) {
  $("#7am-text").addClass("future");
} else if (currentHour > hour9) {
  $("#7am-text").addClass("past");
} else if (currentHour = hour9) {
  $("#7am-text").addClass("present");
}

if (currentHour < hour10) {
  $("#8am-text").addClass("future");
} else if (currentHour > hour10) {
  $("#8am-text").addClass("past");
} else if (currentHour = hour10) {
  $("#8am-text").addClass("present");
}

if (currentHour < hour9) {
    $("#9am-text").addClass("future");
} else if (currentHour > hour9) {
    $("#9am-text").addClass("past");
} else if (currentHour = hour9) {
    $("#9am-text").addClass("present");
}

 
if (currentHour < hour10) {
    $("#10am-text").addClass("future");
} else if (currentHour > hour10) {
    $("#10am-text").addClass("past");
} else if (currentHour = hour10) {
    $("#10am-text").addClass("present");
}


if (currentHour < hour11) {
    $("#11am-text").addClass("future");
} else if (currentHour > hour11) {
    $("#11am-text").addClass("past");
} else if (currentHour = hour11) {
    $("#11am-text").addClass("present");
}


if (currentHour < hour12) {
    $("#12pm-text").addClass("future");
} else if (currentHour > hour12) {
    $("#12pm-text").addClass("past");
} else if (currentHour = hour12) {
    $("#12pm-text").addClass("present");
}


if (currentHour < hour1) {
    $("#1pm-text").addClass("future");
} else if (currentHour > hour1) {
    $("#1pm-text").addClass("past");
} else if (currentHour = hour1) {
    $("#1pm-text").addClass("present");
}

if (currentHour < hour2) {
    $("#2pm-text").addClass("future");
} else if (currentHour > hour2) {
    $("#2pm-text").addClass("past");
} else if (currentHour = hour2) {
    $("#2pm-text").addClass("present");
}

if (currentHour < hour3) {
    $("#3pm-text").addClass("future");
} else if (currentHour > hour3) {
    $("#3pm-text").addClass("past");
} else if (currentHour = hour3) {
    $("#3pm-text").addClass("present");
}

if (currentHour < hour4) {
    $("#4pm-text").addClass("future");
} else if (currentHour > hour4) {
    $("#4pm-text").addClass("past");
} else if (currentHour = hour4) {
    $("#4pm-text").addClass("present");
}

if (currentHour < hour5) {
    $("#5pm-text").addClass("future");
} else if (currentHour > hour5) {
    $("#5pm-text").addClass("past");
} else if (currentHour = hour5) {
    $("#5pm-text").addClass("present");
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