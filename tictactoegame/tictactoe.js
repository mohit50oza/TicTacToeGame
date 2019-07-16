// JAVASCRIPT Assignment for html_assignment_7
var check=0;
var XO = 0;
var win = parseInt(0);
var result=document.getElementById("result");

function clickfunction(a)
{
  var div = a.childNodes[0];
  if (div.innerHTML == "X" || div.innerHTML == "O")
  {
      alert("This Box is already selected");
  }
  else
    {
          if (XO%2 == 0)
          {
           div.innerHTML = "X";
           result.innerHTML = "O's Turn";
          }
          else
          {
            div.innerHTML = "O";
            result.innerHTML = "X's Turn";
          }
    XO++;
    var winner = winnercheck();
		winner = parseInt(winner);
		win = win + winner;
		console.log(win);
		if(win>1)
		{
			alert("GAME HAS ALREADY FINISHED.Press Replay to Rebegin Or Press Ok.");
			location.reload();
		}
		else if(win==1)
		{
			if(XO%2 == 0)
      {
			     result.innerHTML="O has Won.Congrats";
			}
			else
			{
			     result.innerHTML="X has Won.Congrats";
			}
			check=1;
		}
		var drawornot = drawcheck();
		if(drawornot == 1)
		{
			result.innerHTML="Game is Draw";
		}
  }
}
function winnercheck()
{
		var div1=document.getElementById("one");
		var div2=document.getElementById("two");
		var div3=document.getElementById("three");
		var div4=document.getElementById("four");
		var div5=document.getElementById("five");
		var div6=document.getElementById("six");
		var div7=document.getElementById("seven");
		var div8=document.getElementById("eight");
		var div9=document.getElementById("nine");
	if(div1.innerHTML !==" " && div1.innerHTML == div2.innerHTML && div2.innerHTML == div3.innerHTML)
  {
		winnerdiv(div1,div2,div3);
	}
	else if(div4.innerHTML !==" " && div4.innerHTML == div5.innerHTML && div5.innerHTML == div6.innerHTML)
  {
		winnerdiv(div4,div5,div6);
	}
	else if(div7.innerHTML !==" " && div7.innerHTML == div8.innerHTML && div8.innerHTML == div9.innerHTML)
  {
		winnerdiv(div7,div8,div9);
	}
	else if(div1.innerHTML !==" " && div1.innerHTML == div4.innerHTML && div1.innerHTML == div7.innerHTML)
  {
		winnerdiv(div1,div4,div7);
	}
	else if(div2.innerHTML !==" " && div2.innerHTML == div5.innerHTML && div5.innerHTML == div8.innerHTML)
  {
		winnerdiv(div2,div5,div8);
	}
	else if(div3.innerHTML !==" " && div3.innerHTML == div6.innerHTML && div6.innerHTML == div9.innerHTML)
  {
		winnerdiv(div3,div6,div9);
	}
	else if(div1.innerHTML !==" " && div1.innerHTML == div5.innerHTML && div5.innerHTML == div9.innerHTML)
  {
		winnerdiv(div1,div5,div9);
	}
	else if(div3.innerHTML !==" " && div3.innerHTML == div5.innerHTML && div5.innerHTML == div7.innerHTML)
  {
		winnerdiv(div3,div5,div7);
	}
	else
  {
    return 0;
  }
	return 1;
}
function drawcheck()
{
	var boxes=document.getElementsByClassName("block");
	for(var i=0; i<=boxes.length-1; i++)
	{
		if(boxes[i].innerHTML ==" ")
		{
			break;
		}
	}
	if(i == boxes.length && check!=1)
	{
		check=1;
		return 1;
	}
	return 0;
}
function winnerdiv(div1,div2,div3)
{
	div1.style.backgroundColor="#FFC300";
	div2.style.backgroundColor="#FFC300";
	div3.style.backgroundColor="#FFC300";
}
