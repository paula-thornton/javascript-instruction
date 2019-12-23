
        console.log("Welcome to the Invoice Total Calculator");
        console.log();  // print a blank line

        // perform invoice calculations until choice isn't equal to "y" or "Y"
            // get the invoice subtotal from the user
	    subtotal = 300;
            console.log("Subtotal:   " + subtotal);
      
	    
            // calculate the discount amount and total
            if (subtotal >= 500) {
            	discountPercent = .25;
            } else if (subtotal >= 200) {
                discountPercent = .2;
            } else if (subtotal >= 100) {
                discountPercent = .1;
            } else {
                discountPercent = 0.0;
            }
            discountAmount = subtotal * discountPercent;
            total = subtotal - discountAmount;

            // display the discount amount and total
            message = "Discount percent: " + discountPercent + "\n"
                           + "Discount amount:  " + discountAmount + "\n"
                           + "Invoice total:    " + total + "\n";            
            console.log(message);

            // see if the user wants to continue
           
