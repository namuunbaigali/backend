app.get("/generateNumbers", (res, req) => {
  let result;
  for (let i = 0; i < 10000; i++) {
    let n = "";
    if (i < 1000) {
      n += "0";
    }
    if (i < 100) {
      n += "0";
    }
    if (i < 10) {
      n += "0";
    }
    result += `9911${n}\n`;
  }
  fs.writeFileSync("phone txt", result);
  res.json("Done");
});

app.get("/numbers", (req, res) => {
  const numbers = fs.readFileSync("phones.txt", "utf-8");
  res.json(numbers.split("\n"));
});
