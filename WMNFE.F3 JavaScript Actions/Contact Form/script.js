function printError(Id, Msg) {
  document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {
  var name = document.Form.name.value;
  var email = document.Form.email.value;
  var emailcom = document.Form.emailcom.value;
  var mobile = document.Form.mobile.value;
  var address = document.Form.address.value;

  var nameErr = (emailErr = emailcomErr = mobileErr = addressErr = true);

  if (name == "") {
    printError("nameErr", "Please enter your full name");
    var elem = document.getElementById("name");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regexname =
      /^(?!\s)(?!.*\s\s)(?:[a-zA-Z]+[\.',-]?)+\s(?:[a-zA-Z]+[\.',-]?)+$/;
    if (regexname.test(name.trim()) === false) {
      printError("nameErr", "Please enter a valid name");
      var elem = document.getElementById("name");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("nameErr", "");
      nameErr = false;
      var elem = document.getElementById("name");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  if (email == "") {
    printError("emailErr", "Please enter your email address");
    var elem = document.getElementById("email");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regexemail =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (regexemail.test(email.trim()) === false) {
      printError("emailErr", "Please enter a valid email address");
      var elem = document.getElementById("email");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("emailErr", "");
      emailEr = false;
      var elem = document.getElementById("email");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  if (emailcom == "") {
    printError("emailComErr", "Please confirm your email address");
    var elem = document.getElementById("emailcom");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    if (email.trim() !== emailcom) {
      printError("emailComErr", "Emails do not match");
      var elem = document.getElementById("emailcom");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("emailComErr", "");
      emailComErr = false;
      var elem = document.getElementById("emailcom");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  if (mobile == "") {
    printError("mobileErr", "Please enter your mobile number");
    var elem = document.getElementById("mobile");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regexmob = /^[0-9]{10}$/;
    if (regexmob.test(mobile.trim()) === false) {
      printError("mobileErr", "Please enter a valid 10 digit mobile number");
      var elem = document.getElementById("mobile");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("mobileErr", "");
      mobileErr = false;
      var elem = document.getElementById("mobile");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  if (address == "") {
    printError("addressErr", "Please enter your address");
    var elem = document.getElementById("address");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regexadd = /^[A-Za-z\s]+\s[0-9,-]+,[\s]*[0-9]{5}\s[A-Za-z\s]+$/;
    if (regexadd.test(address.trim()) === false) {
      printError("addressErr", "Please enter a valid address");
      var elem = document.getElementById("addressErr");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("addressErr", "");
      addressErr = false;
      var elem = document.getElementById("address");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  if ((nameErr || emailErr || emailComErr || mobileErr || addressErr) == true) {
    return false;
  }
}
