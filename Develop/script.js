const saveButton =document.querySelector("#.saveBtn");
const textboxEl = document.querySelector("#.description");
const today = document.querySelector("#currentDay");
const timeBlock = $(".time-block");
const currentDate = dayjs().format("dddd, MMMM D, YYYY")
const currentHour = dayjs().hour();

$(".saveBtn").on("click", function() {
    const timeStamp = $(this).parent(".description").attr("id");
    const message = $(this).parent().children().eq(1).val();
    
    localStorage.setItem(timeStamp, message);
  }
  );

  
  
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