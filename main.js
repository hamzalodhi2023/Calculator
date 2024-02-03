function storeData(v) {
  let value = document.getElementById("value");
  let oldValue = value.value;

  let t = oldValue.length;
  let lastChr = oldValue[t - 1];
  let oprSym = ["+", "-", "*", "/", "."];
  if (oprSym.includes(v)) {
    if (oprSym.includes(lastChr)) {
      let removerLast = oldValue.slice(0, -1);
      value.value = removerLast + v;
    } else {
      value.value = oldValue + v;
    }
  } else {
    value.value = oldValue + v;
  }
}

function calData(params) {
  let value = document.getElementById("value");
  let oldValue = eval(value.value);
  value.value = oldValue;
}

function clsData() {
  document.getElementById("value").value = "";
}
