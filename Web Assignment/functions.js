function CateRateFunction() {
  var raidboss = document.getElementById("raidboss");
  var berry = document.getElementById("berry");
  var throwbonus = document.getElementById("throwbonus");
  var curveball = document.getElementById("curveball");
  var medal = document.getElementById("medal");

  if (raidboss.options[raidboss.selectedIndex].value == "" ||
    berry.options[berry.selectedIndex].value == "" ||
    throwbonus.options[throwbonus.selectedIndex].value == "" ||
    medal.options[medal.selectedIndex].value == "") {
    alert('Please Select Everything!');
  } else {

    var raidbossname = raidboss.options[raidboss.selectedIndex].text;
    var berryname = berry.options[berry.selectedIndex].text;
    var throwbonusname = throwbonus.options[throwbonus.selectedIndex].text;
    var curveballname = curveball.options[curveball.selectedIndex].text;
    var medalname = medal.options[medal.selectedIndex].text;

    var basecatchrate;

    switch (raidbossname) {
      case "Mewtwo":
        basecatchrate = 0.06;
        break;
      default:
        basecatchrate = 0.02;
    }

    var berryrate;

    switch (berryname) {
      case "Golden Razzberry":
        berryrate = 2.5;
        break;
      case "Razzberry":
        berryrate = 1.5;
        break;
      default:
        berryrate = 1;
    }

    var throwbonusrate;

    switch (throwbonusname) {
      case "Nice":
        throwbonusrate = 1.2;
        break;
      case "Great":
        throwbonusrate = 1.5;
        break;
      case "Excellent":
        throwbonusrate = 1.8;
        break;
      default:
        throwbonusrate = 1;
    }

    var curveballrate;

    switch (curveballname) {
      case "Yes":
        curveballrate = 1.7;
        break;
      default:
        curveballrate = 1;
    }

    var medalrate;

    switch (medalname) {
      case "Gold(Single Type)":
        medalrate = 1.3;
        break;
      case "Silver(Single Type)":
        medalrate = 1.2;
        break;
      case "Bronze(Single Type)":
        medalrate = 1.1;
        break;
      default:
        medalrate = 1;
    }

    var Probability = 1 - Math.pow((1 - (basecatchrate / (2 * 0.59740001))), (medalrate * curveballrate * throwbonusrate * berryrate))
    var percent = (Probability * 100).toFixed(2) + '%'
    document.getElementById("Probability").innerHTML = "Chance Per Throw = " + percent;

  }
}
