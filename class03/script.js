import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Rohit Gupta");
  console.log(text);
}

doStuff();
