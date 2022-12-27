var xmlhttp = new XMLHttpRequest();
var theUrl = "/json-handler";
xmlhttp.open("POST", theUrl);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send(
  JSON.stringify({
    email: "abdiraimovameerim8@gmail.com",
    response: { name: "meerim" },
  }),
);
