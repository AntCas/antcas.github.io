window.addEventListener("load", function () {
  function getEmail(zip_form, email_form) {
    var ZIP_CODE = zip_form.getElementsByClassName("zip").item(Object).value;
    var API_KEY = "51911d2087da4bd0bee0d54a1f44be32";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","http://congress.api.sunlightfoundation.com/legislators/locate?zip=" + ZIP_CODE + "&apikey=" + API_KEY, false);
    xmlhttp.send();
    var result = JSON.parse(xmlhttp.responseText);
    var last_name = result.results[0].last_name;
    var name = result.results[0].first_name + " " + last_name;
    email_form.rep_name = name;
    var email = result.results[0].oc_email;
    email_form.email=email;
    var message = "The Honorable " + name + "\nU.S. House of Representatives\n" + "Washington, D.C. 20515\n\n" + "Dear Representative " + last_name + ",\n\n" + "The legislation addressing (describe issue concisely, or use exact name of bill before legislature) is of paramount interest to me because I am a (Certified Academic Language Therapist, parent, teacher, etc.) This issue directly impacts (my students, my profession, the way we as professionals will be able to function effectively, my child, etc.)\n\n" + "I am primarily concerned about (describe major specific concern within the larger issue) because (state reasons or examples briefly, with only as many relevant details as necessary to make your point clearly.) Other aspects of this same issue that affect (my student, profession, child) are (describe briefly any secondary concerns and supporting situations, reasons, examples, etc.)\n\n" + "Although I have read reports of your position in the newspapers, I realize this may not fully represent your viewpoint. Therefore, I will look forward to your reply expressing your opinions, and your current stance on the issue.\n\n" + "Thank you for your consideration of my viewpoint on this matter. I believe it is an important issue, and would like to see the legislation (pass, fail, or be amended) to ensure effective educational services for the students involved.\n\n" + "Sincerely,\n";
/*
      Your name,
      Address
      Phone Number
      Email Address
*/

    email_form.getElementsByClassName("message").item(Object).value=message;
  }
  function sendData(email_form) {
    var rep_email = email_form.email;
    var message = email_form.getElementsByClassName("message").item(Object).value;
    var name = email_form.getElementsByClassName("name").item(Object).value;
    var email = email_form.getElementsByClassName("email").item(Object).value;
    var address = email_form.getElementsByClassName("address").item(Object).value;
    message += name + "\n" + email + "\n" + address;
    message = message.replace(/\n/g, "<br/>");
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': '0_ltv1aERNTre0GBGYifeA',
        'message': {
          'from_email': email,
          'to': [
              {
                'email': rep_email,
                'type': 'to'
              },
          ],
          'autotext': 'true',
          'subject': 'The Student Debt Crisis',
          'html': message
        }
      }
   }).done(function(response) {
     console.log(response); // if you're into that sorta thing
     alert("Thank You!\n\nAn Email was sent to " + email_form.rep_name + ".");
   });
  }
  /* Find Representative Form */
  var zip_form = document.getElementById("findzip");

  /* Email Form */
  var email_form = document.getElementById("actnowform");

  zip_form.addEventListener("submit", function(event) {
    event.preventDefault();

    getEmail(zip_form, email_form);
  });

  // to takeover its submit event.
  email_form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData(email_form);
  });
});

