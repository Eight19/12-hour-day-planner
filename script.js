var saveButton = $(".saveBtn");
var textboxEl = $(".description");
var today = $("#currentDay");
var timeBlock = $(".time-block");
var currentDate = dayjs().format("dddd, MMMM D, YYYY")
var currentHour = dayjs().hour();

$(function () 

{ saveButton.on("click", function(event) {
    var timeStamp = $(event.target).parent().attr("id");
    var message = $(event.target).parent().children().eq(1).val();
    localStorage.setItem(timeStamp, message);
  }
  );

  
  timeBlock.each(function() 
  { var calendarHour = parseInt($(this).attr("id"));
    
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
}
);