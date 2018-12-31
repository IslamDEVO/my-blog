let projects_imeges = [
  [
    "https://raw.githubusercontent.com/IslamDEVO/To-Do-List/master/screenshots/add_todo_dark.png",
    "https://raw.githubusercontent.com/IslamDEVO/To-Do-List/master/screenshots/add_todo_light.png",
    "https://raw.githubusercontent.com/IslamDEVO/To-Do-List/master/screenshots/app_icon.png",
    "https://raw.githubusercontent.com/IslamDEVO/To-Do-List/master/screenshots/main_empty_dark.png",
    "https://raw.githubusercontent.com/IslamDEVO/To-Do-List/master/screenshots/main_full_dark.png",
    "https://raw.githubusercontent.com/IslamDEVO/To-Do-List/master/screenshots/main_full_light.png",
    "https://raw.githubusercontent.com/IslamDEVO/To-Do-List/master/screenshots/screenshot_notification.png",
    "https://raw.githubusercontent.com/IslamDEVO/To-Do-List/master/screenshots/screenshot_reminder_date.png",
    "https://raw.githubusercontent.com/IslamDEVO/To-Do-List/master/screenshots/screenshot_reminder_time.png",
    "https://raw.githubusercontent.com/IslamDEVO/To-Do-List/master/screenshots/screenshot_todo_snooze.png",
    "https://raw.githubusercontent.com/IslamDEVO/To-Do-List/master/screenshots/todo_date_dark.png",
    "https://raw.githubusercontent.com/IslamDEVO/To-Do-List/master/screenshots/todo_time_dark.png"
  ],
  [
    "https://raw.githubusercontent.com/IslamDEVO/Recorder/master/images/Capture1.PNG",
    "https://raw.githubusercontent.com/IslamDEVO/Recorder/master/images/Capture2.PNG",
    "https://raw.githubusercontent.com/IslamDEVO/Recorder/master/images/Capture3.PNG",
    "https://raw.githubusercontent.com/IslamDEVO/Recorder/master/images/Capture4.PNG"
  ]
];
let selected_project = 0;
let show = document.querySelectorAll(".show"),
  wrap = document.querySelector(".wrap"),
  work = document.querySelector("#work"),
  close = document.querySelector("#close"),
  sliderImages = document.querySelector(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;
// set wrap hidden
wrap.style.display = "none";
// set close slider event
close.addEventListener("click", function() {
  work.style.display = "block";
  wrap.style.display = "none";
});

// Init slider
function startSlide(projeect_num) {
  selected_project = projeect_num;
  work.style.display = "none";
  wrap.style.display = "block";
  sliderImages.style.backgroundImage =
    "url(" + projects_imeges[selected_project][current] + ")";
  sliderImages.style.display = "block";
}
//set event show for each project
show[0].addEventListener("click", function() {
  startSlide(0);
});
show[1].addEventListener("click", function() {
  startSlide(1);
});

// Left arrow click
arrowLeft.addEventListener("click", function() {
  current--;
  if (current < 0) {
    current = projects_imeges[selected_project].length - 1;
  }
  sliderImages.style.backgroundImage =
    "url(" + projects_imeges[selected_project][current] + ")";
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  current++;
  if (current > projects_imeges[selected_project].length - 1) {
    current = 0;
  }
  sliderImages.style.backgroundImage =
    "url(" + projects_imeges[selected_project][current] + ")";
});

//startSlide(projeect_num);
