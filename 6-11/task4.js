var s=0 ;
for ( let a=0; a<=100; a++) {
    s=a+s;
    document.write("index : "+a+", sumation : "+s+"<br>");
    if (s>100)
    break;
}