const meet_bar = document.querySelector(".partners>.bar");
function addMeetAnimation(observer, element) {
  meet_bar.classList.add("bar-animation");
  observer.unobserve(element);
}

handleIntersection(document.querySelector(".partners"), addMeetAnimation);



let info = document.querySelector(".info");
function increment() {
  reset();
  let client_no_element = document.querySelector("#clients>h2");
  let exp_element = document.querySelector("#exp>h2");
  let mem_element = document.querySelector("#members>h2");
  let mem_no = parseInt(mem_element.innerHTML);
  let exp_no = parseInt(exp_element.innerHTML);
  let client_no = parseInt(client_no_element.innerHTML);
  var interval = setInterval(async () => {
    client_no += 1;
    client_no_element.innerHTML = client_no;
    if (client_no % 50 == 0 && client_no < 250) {
      exp_no += 1;
      exp_element.innerHTML = exp_no;
    }
    if (client_no % 5 == 0 && client_no < 290) {
      mem_no += 1;
      mem_element.innerHTML = mem_no;
    }
    if (client_no == 399) {
      clearInterval(interval);
      setTimeout(() => {
        client_no += 1;
        exp_no += 1;
        mem_no += 1;
        mem_element.innerHTML = mem_no;
        exp_element.innerHTML = exp_no;
        client_no_element.innerHTML = client_no;
      }, 750);
    }
  }, 5);
}
function reset() {
  document.querySelector("#clients>h2").innerHTML = "0";
  document.querySelector("#exp>h2").innerHTML = "0";
  document.querySelector("#members>h2").innerHTML = "0";
}
handleIntersection(info, increment);
