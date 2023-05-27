$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    // Display alert with collected information
    var notification = 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message;
    alert(notification);

    // Reset the form
    $('form')[0].reset();
  });
});
function initMap() {
  // Create a new map instance
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.1694, lng: 71.4491 }, // Set the initial center of the map
    zoom: 12 // Set the initial zoom level
  });

  // You can add markers, polygons, or other map elements here
  // For example:
  const marker = new google.maps.Marker({
    position: { lat: 51.1694, lng: 71.4491 },
    map: map,
    title: "Astana"
  });
}
