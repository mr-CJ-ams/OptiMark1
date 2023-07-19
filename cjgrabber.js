/*This code is used to create a custom scrollbar with a progress indicator
 for a horizontally scrolling container with the class "snap-scroll". 
 It creates a new "div" element with the class "scrollbar", and a child "div "
 element with the class "scrollbar-progress". The "scrollbar" element is appended to 
 the "snap-scroll" element.

The code also adds an event listener to the "snapScroll" element, which listens
 for the "scroll" event. When the event is fired, the code calculates the current
  scroll position and maximum scroll position of the "snap-scroll" element, 
  and uses these values to calculate the width of the "scrollbar-progress" 
  element as a percentage of the maximum scroll width. The progress indicator
   is then updated by setting the width of the "scrollbar-progress" element
    using inline styles.*/

const snapScroll = document.querySelector('.snap-scroll');
const scrollbar = document.createElement('div');
scrollbar.classList.add('scrollbar');
const scrollbarProgress = document.createElement('div');
scrollbarProgress.classList.add('scrollbar-progress');
scrollbar.appendChild(scrollbarProgress);
snapScroll.appendChild(scrollbar);

snapScroll.addEventListener('scroll', function() {
  const scrollPosition = snapScroll.scrollLeft;
  const maxScroll = snapScroll.scrollWidth - snapScroll.clientWidth;
  const scrollbarProgressWidth = (scrollPosition / maxScroll) * 100;
  scrollbarProgress.style.width = `${scrollbarProgressWidth}%`;
});




/*This JavaScript code selects all the links in the navigation menu of 
a web page and adds an event listener to each of them. When a link is clicked,
 the code removes the "active" class from all the links and adds it only 
 to the clicked link. This is often used to highlight the currently active 
 page or section in a navigation menu, so the user can easily see where 
 they are on the website.*/

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // remove the active class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    // add the active class to the clicked link
    this.classList.add('active');
  });
});

/*the "markDownloaded" function is called when the button is clicked.
 The function adds the "downloaded" class to the button, which changes 
 the background color from gray to green. You can add this code to the 
 buttons in your download options to achieve the desired behavior.*/

// get all the download buttons
const downloadButtons = document.querySelectorAll('.download-btn');

// add event listeners to each button
downloadButtons.forEach(button => {
  button.addEventListener('click', () => {
    // add the 'green' class to the clicked button
    button.classList.add('green');
  });
});








/*This code sets up event listeners for the download buttons,
as well as the buttons that control the display of the quality
and file type options. When the "Download Video" button is clicked,
the video options are displayed and the audio options are hidden. 
When the "Download Audio" button is clicked, the audio options are 
displayed and the video options are hidden. Clicking the "Video Quality" 
button toggles the display of the video quality options, while clicking the 
"Audio Type" button toggles the display of the audio type options, 
and clicking the "Audio Quality" button toggles the display of the 
audio quality options. */

// Select all required elements
const downloadVideoButton = document.querySelector('.download-video');
const downloadAudioButton = document.querySelector('.download-audio');
const videoOptions = document.querySelector('.video-options');
const audioOptions = document.querySelector('.audio-options');
const videoQualityButton = document.querySelector('.video-quality');
const audioTypeButton = document.querySelector('.audio-type');
const audioQualityButton = document.querySelector('.audio-quality');
const videoQualityOptions = document.querySelector('.video-options .quality-options');
const audioTypeOptions = document.querySelector('.audio-options .type-options');
const audioQualityOptions = document.querySelector('.audio-options .quality-options');
const scrollSnapContainer = document.querySelector('.scroll-snap-container');
const arrowButton = document.querySelector('.arrow');

// Toggle the display of the video and audio options
downloadVideoButton.addEventListener('click', function() {
  videoOptions.style.display = 'flex';
  audioOptions.style.display = 'none';
  scrollSnapContainer.style.display = 'none';
});

downloadAudioButton.addEventListener('click', function() {
  audioOptions.style.display = 'flex';
  videoOptions.style.display = 'none';
  scrollSnapContainer.style.display = 'none';
});

// Toggle the display of the video quality options
videoQualityButton.addEventListener('click', function() {
  videoQualityOptions.style.display = (videoQualityOptions.style.display === 'none'
    ? 'flex'
    : 'none');
});

// Toggle the display of the audio type options
audioTypeButton.addEventListener('click', function() {
  audioTypeOptions.style.display = (audioTypeOptions.style.display === 'none'
    ? 'flex'
    : 'none');
});

// Toggle the display of the audio quality options
audioQualityButton.addEventListener('click', function() {
  audioQualityOptions.style.display = (audioQualityOptions.style.display === 'none'
    ? 'flex'
    : 'none');
});

// Toggle the display of the scroll snap container
arrowButton.addEventListener('click', function() {
  scrollSnapContainer.style.display = (scrollSnapContainer.style.display === 'none'
    ? 'flex'
    : 'none');
});




/* image downloader with file type and quality options:*/
