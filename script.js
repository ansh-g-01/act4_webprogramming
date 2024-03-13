function validateForm() 
    {
  /*  var username = document.getElementById('username').value;
    var st_id = document.getElementById('st_id').value;*/
    var c1=parseInt(document.getElementById('c1').value);
    var m1=parseInt(document.getElementById('m1').value);
    var c2=parseInt(document.getElementById('c2').value);
    var m2=parseInt(document.getElementById('m2').value);
    var c3=parseInt(document.getElementById('c3').value);
    var m3=parseInt(document.getElementById('m3').value);

    var gpa = (getValue(m1)*c1 + getValue(m2)*c2+ getValue(m3)*c3)/(c1+c2+c3);

    alert("You GPA is :" +gpa);
}

function getValue(m)
 {

if(m>=90)
{
    return 10;
}
else if(m>=80)
{
    return 9;
}
else if(m>=70)
{
   return 8 ;
}
else if(m>=60)
{
    return 7;
}
else if(m>=55)
{
    return 6;
}
else if(m>=50)
{
    return 5;
}

else
{
    return 0;
}
    
}


/*
alert('Response Details:\nUsername '+da);
    var responseDiv = document.getElementById('response');
    responseDiv.innerHTML = 'Response Details:\nUsername ';
    responseDiv.classList.remove('hidden');

    */