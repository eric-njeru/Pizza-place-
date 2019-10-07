function getReceipt() {
    orderText = ""; // These initialize as empty strings but get passed from  
    subtotalText = ""; // function to function, growing line by line into a full receipt
    var runningTotal = 0;
    var sizeTotal = 0;
      var sizeArray = document.getElementsByName("size");
  // loop over them all
  for (var i=0; i<sizeArray.length; i++) {
     // And stick the checked ones onto an array...
     if (sizeArray[i].checked) {
        var selectedSize = sizeArray[i].value;
        orderText = orderText+selectedSize+"<br>";
     }
  }
  if (selectedSize === "personal") {
          sizeTotal = 6;
          subtotalText = subtotalText+sizeTotal+"<br>";
  } else if (selectedSize === "medium") {
          sizeTotal = 10;
          subtotalText = subtotalText+sizeTotal+"<br>";
  } else if (selectedSize === "large") {
          sizeTotal = 14;
          subtotalText = subtotalText+sizeTotal+"<br>";
  } else if (selectedSize === "xlarge") {
          sizeTotal = 16;
          subtotalText = subtotalText+sizeTotal+"<br>";
  }
  runningTotal = sizeTotal;
  getCrust(runningTotal,orderText,subtotalText)
};

