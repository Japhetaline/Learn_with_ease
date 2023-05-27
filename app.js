 // Set the target date for the countdown
 const targetDate = new Date('June 26, 2023 00:00:00').getTime();

 // Update the countdown every second
 const countdown = setInterval(() => {
   // Get the current date and time
   const now = new Date().getTime();

   // Find the time remaining between now and the target date
   const timeRemaining = targetDate - now;

   // Calculate the days, hours, minutes, and seconds remaining
   const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

   // Format the countdown as a string
   const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

   // Update the HTML element with the countdown
   document.getElementById('countdown').textContent = countdownString;

   // Check if the countdown has reached zero
   if (timeRemaining < 0) {
     clearInterval(countdown);
     document.getElementById('countdown').textContent = 'Countdown has ended!';
     // You can perform any actions you want when the countdown ends
   }
 }, 1000);