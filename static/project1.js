 function changeStyle(stylesheetTitle) {
   var style1 = document.getElementById("style1");
   var style2 = document.getElementById("style2");
   var mystylesheets = [style1,style2];
   for (var i = 0; i < mystylesheets.length; i++) {
   	 mystylesheets[i].disabled = true;
   	 if (mystylesheets[i].title == stylesheetTitle) {
         mystylesheets[i].disabled = false;
   	     }
     }
}


			const selectFontSize = document.getElementById("vis1"); 
        const updateElement = document.getElementById("vis"); 
  
        selectFontSize.addEventListener("change", function () { 
            const selectedValue = selectFontSize.value; 
            updateElement.style.fontSize = selectedValue; 
        }); 


function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    // for Internet Explorer 8 and below. For Blogger, you should use &amp;&amp; instead of &&.
    } else if (document.selection && document.selection.type != "Control") { 
        text = document.selection.createRange().text;
    }
    return text;
}


// Get the button:
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
		

