var myArray= ["alex","mercer","madrasa","rashed2","emad","hala"]

document.write((l(myArray)));



function l(myArray){

for(let x=0 ; x<myArray.length-1;x++)

{var y=myArray[0];

if (myArray[x].length<=y.length)
{
y=myArray[x];
}
}
return y;
}