function validate() {
  var name = document.getElementById("dispname")
  var currName = document.getElementById("dispnameVal")
  var email = document.getElementById("email")
  var currEmail = document.getElementById("emailVal")
  var phone = document.getElementById("phone")
  var currPhone = document.getElementById("phoneVal")
  var zip = document.getElementById("zip")
  var currZip = document.getElementById("zipVal")
  var pw1 = document.getElementById("pw1")
  var currPw = document.getElementById("pw1Val")
  var pw2 = document.getElementById("pw2")

  //get the output div and clear it so it can get new input
  var out = document.getElementById("output");
  out.innerHTML = "";
  
  //test everything first
  out.innerHTML += validName(name.value,currName.innerHTML);
  out.innerHTML += validEmail(email.value,currEmail.innerHTML);
  out.innerHTML += validPhone(phone.value,currPhone.innerHTML);
  out.innerHTML += validZip(zip.value,currZip.innerHTML);
  out.innerHTML += validPassA(pw1.value,currPw.innerHTML);
  out.innerHTML += validPassB(pw1.value,pw2.value);

  if(out.innerHTML === "") { //that is, if none of the valid functions returned an error message
    if(name.value !== "") {
      out.innerHTML += "Display name updated from " + currName.innerHTML + " to " + name.value + ".</br>";
      currName.innerHTML = name.value;
      name.value = "";
    }
    if(email.value !== "") {
      out.innerHTML += "Email address updated from " + currEmail.innerHTML + " to " + email.value + ".</br>";
      currEmail.innerHTML = email.value;
      email.value = "";
    }
    if(phone.value !== "") {
      out.innerHTML += "Phone number updated from " + currPhone.innerHTML + " to " + phone.value + ".</br>";
      currPhone.innerHTML = phone.value;
      phone.value = "";
    }
    if(zip.value !== "") {
      out.innerHTML += "Zip code updated from " + currZip.innerHTML + " to " + zip.value + ".</br>";
      currZip.innerHTML = zip.value;
      zip.value = "";
    }
    if(pw1.value !== "") {
      out.innerHTML += "Password updated from " + currPw.innerHTML + " to " + pw1.value + ".</br>";
      currPw.innerHTML = pw1.value;
      pw1.value = "";
      pw2.value = "";
    }
  }
}


//"valid" functions make sure there are no problems - return a string. If string is empty, then no problems found. Otherwise, returns the problem.
function validName(name,currName) {
  if(name === currName) {
    return "Names match.<br>";
  }
  if(name === "" || /[0-9a-zA-Z ]+/.test(name)) {
    return "";
  } 
  return "Invalid name.<br>";
}

function validEmail(email,currEmail) {
  if(email === currEmail) {
    return "Emails match.<br>";
  }
  if(email === "" || /[A-Za-z][A-Za-z0-9.]{0,}@[A-Za-z0-9.]+.[A-Za-z0-9.]/.test(currEmail)) {
    return "";
  }
  return "Invalid email.<br>";
}

function validPhone(phone,currPhone) {
  if(phone === currPhone) {
    return "Phone numbers match.<br>";
  }
  if(phone === "" || /[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(phone)) {
    return "";
  }
  return "Invalid phone number.<br>";
}

function validZip(zip,currZip) {
  if(zip === currZip) {
    return "Zip codes match.<br>";
  }
  if(zip === "" || /[0-9]{5}/.test(zip)) {
    return "";
  }
  return "Invalid zip code.<br>";
}

//tests password is not same as current
function validPassA(pw1,currpw) {
  if(pw1 === currpw) {
    return "Password matches old password.";
  }
  return "";
}

//tests passwords match
function validPassB(pw1,pw2) {
  if(pw1 === pw2 || pw1 == "") {
    return "";
  }
  return "Password and confirmation do not match.";
}