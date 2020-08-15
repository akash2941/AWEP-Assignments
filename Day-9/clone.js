function like(btnElement)
{
 let lcount = Number(btnElement.children[0].innerHTML);
 lcount++;
 btnElement.children[0].innerHTML = lcount;
}