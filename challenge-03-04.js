function printCollatz(n) 
    { 
        while (n != 1) 
        { 
            document.write(n + " "); 
 
            if ((n & 1) != 0) 
                n = 3*n + 1; 
 
            else
                n = parseInt(n/2, 10); 
        } 
 
        document.write(n); 
    } 
 
    printCollatz(6); 
    