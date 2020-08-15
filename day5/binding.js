let counter=100;

function increment()
{
   let counterele = document.querySelector("#counterid");

   counter = counter + 1;

   counterele.innerHTML = counter;

}

function decrement()
{
let counterele = document.querySelector("#counterid");

counter = counter -1;

counterele.innerHTML = counter
}