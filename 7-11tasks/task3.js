var myArray= ["alex","mercer","madrasa","rashed2","emad","hala"]

// document.write((l(myArray)));



function shortname(x){

for(let i=0 ; x<myArray.length-1;i++)

{var y=myArray[0];

if (myArray[i].length<=y.length)
{
y=myArray[i];
}
}
return y;
}
document.write(shortname(myArray));