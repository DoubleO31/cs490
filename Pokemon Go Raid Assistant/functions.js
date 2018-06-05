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

// from https://stackoverflow.com/questions/8877249/generate-random-integers-with-probabilities
function getRandom1() {
  var num = Math.random();
  if (num < 0.39) return "2 Super Potions";
  else if (num < 0.588) return "1 Rare candy";
  else if (num < 0.786) return "2 Revives";
  else if (num < 0.984) return "1 Golden Razzberry";
  else if (num < 0.99) return "Fast TM";
  else return "Charge TM";
}

function getRandom2() {
  var num = Math.random();
  if (num < 0.394) return "3 Super Potions";
  else if (num < 0.591) return "1 Rare candy";
  else if (num < 0.788) return "2 Revives";
  else if (num < 0.985) return "2 Golden Razzberries";
  else if (num < 0.99) return "Fast TM";
  else return "Charge TM";
}

function getRandom3() {
  var num = Math.random();
  if (num < 0.377) return "4 Super Potions";
  else if (num < 0.566) return "2 Rare candys";
  else if (num < 0.755) return "3 Revives";
  else if (num < 0.944) return "2 Golden Razzberries";
  else if (num < 0.98) return "Fast TM";
  else return "Charge TM";
}

function getRandom4() {
  var num = Math.random();
  if (num < 0.368) return "2 Hyper Potions";
  else if (num < 0.552) return "2 Rare candys";
  else if (num < 0.736) return "3 Revives";
  else if (num < 0.92) return "3 Golden Razzberries";
  else if (num < 0.965) return "Fast TM";
  else return "Charge TM";
}

function getRandom5() {
  var num = Math.random();
  if (num < 0.357) return "3 Hyper Potions";
  else if (num < 0.536) return "3 Rare candys";
  else if (num < 0.715) return "3 Revives";
  else if (num < 0.894) return "3 Golden Razzberries";
  else if (num < 0.948) return "Fast TM";
  else return "Charge TM";
}

function RewardFunction() {
  var raidbosstier = document.getElementById("raidbosstier");
  var ballsearned = document.getElementById("balls");



  if (raidbosstier.options[raidbosstier.selectedIndex].value == "" ||
    ballsearned.options[ballsearned.selectedIndex].value == "") {
    alert('Please Select Everything!');
  }
  else {

    var raidbosstiervalue = raidbosstier.options[raidbosstier.selectedIndex].value;
    var ballsearnednum = ballsearned.options[ballsearned.selectedIndex].text;


    var bundle;
    if (raidbosstiervalue == 1) {
      switch (ballsearnednum) {
        case "6":
          bundle = 1;
          break;
        default:
          bundle = 2;
      }
    } else if (raidbosstiervalue == 2) {
      switch (ballsearnednum) {
        case "6":
          bundle = 2;
          break;
        case "7":
        case "8":
        case "9":
        case "10":
          bundle = 3;
          break;
        default:
          bundle = 4;
      }
    } else if (raidbosstiervalue == 3) {
      switch (ballsearnednum) {
        case "6":
          bundle = 3;
          break;
        case "7":
        case "8":
          bundle = 4;
          break;
        case "9":
        case "10":
        case "11":
          bundle = 5;
          break;
        default:
          bundle = 6;
      }
    } else if (raidbosstiervalue == 4 || raidbosstiervalue == 5) {
      switch (ballsearnednum) {
        case "6":
          bundle = 4;
          break;
        case "7":
        case "8":
          bundle = 5;
          break;
        case "9":
        case "10":
          bundle = 6;
          break;
        case "11":
        case "12":
          bundle = 7;
          break;
        default:
          bundle = 8;
      }
    }
  document.getElementById("Rewardlist").innerHTML = "Chance Per Throw = ";

    var reward = [];
    if (raidbosstiervalue == 1) {
      for (i = 0; i < bundle; i++) {
        reward.push(getRandom1());
      }
    } else if (raidbosstiervalue == 2) {
      for (i = 0; i < bundle; i++) {
        reward.push(getRandom2());
      }
    }else if (raidbosstiervalue == 3) {
      for (i = 0; i < bundle; i++) {
        reward.push(getRandom3());
      }
    }else if (raidbosstiervalue == 4) {
      for (i = 0; i < bundle; i++) {
        reward.push(getRandom4());
      }
    }else if (raidbosstiervalue == 5) {
      for (i = 0; i < bundle; i++) {
        reward.push(getRandom5());
      }
    }

  document.getElementById("Rewardlist").innerHTML = "Your Reward: " + JSON.stringify(reward, null, 4);

  }

}
