$(".openIcon").on("click", function () {
  $(".open").css({
    left: "0",
  });
  $(".openIcon").css({
    left: "285px",
  });
});

$(".fa-xmark").on("click", function () {
  $(".open").animate(
    {
      left: "-100%",
    },
    500
  );

  $(".openIcon").animate(
    {
      left: "20px",
    },
    200
  );
});
$(".card").on("click", function () {
  $(this).find("p").slideToggle(); // Target the <p> inside the clicked card
});

$("textarea").on("input", function () {
  let count = $(this).val().length;

  $(".dec").text(`you have ${100 - count} characters to write it`);
});

// Calculate the time difference in milliseconds
setInterval(() => {
  const data = new Date();
  const timeParty = new Date(2025, 1, 1, 0, 0, 0);
  const timeDifference = timeParty - data;

  // Convert the time difference to different units
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the result
  document.querySelector(".days").innerHTML = days + " D";
  document.querySelector(".hours").innerHTML = hours + " H";
  document.querySelector(".minutes").innerHTML = minutes + " M";
  document.querySelector(".seconds").innerHTML = seconds + " S";
}, 1000);
