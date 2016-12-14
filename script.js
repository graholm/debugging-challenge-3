$("#add-button").click(function() {
  $("#add-display").html("4!")
  console.log ("4")
})

$("#picture-button").click(function() {
  $("#picture-display").html ('<img src="http://kingofwallpapers.com/picture/picture-006.jpg"/>')
  console.log ("picture")
})  

$("#counter-button").click(function() {
  countclicks()
  $("#counter-display").html(number)
}) 

var number = 0

function countclicks()
{ 
  number = number +100;
}