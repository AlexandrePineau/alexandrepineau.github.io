import React from 'react';

export const Bookings = () => {
    return (
        <div>
            <div className="container">
                <h2>
                    Book a consultation
            </h2>
                <div className="row">
                    <div className="col-lg-6">
                        <form id="f1">
                        <h5>Your info</h5><hr />
                        <label>Your full name</label><br />
                        <input type="text" id="name1" placeholder="Firstname Lastname" /><br /><br />

                        <label>Your business (optional)</label><br />
                        <input type="text" id="business" placeholder="ABC123 inc." /><br /><br />

                        <label>Your email address</label><br />
                        <input type="text" id="email" placeholder="example@email.com" /><br /><br />

                        <label>Choose a service</label><br />
                        <select id="servicelist">
                            <option></option>
                            <option>Basic website design</option>
                            <option>Premium website design</option>
                            <option>Web hosting</option>
                            <option>Logo design</option>
                        </select><br /><br />
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <form name="f2">
                        <h5>Select 3 popssible dates for an appointment</h5><hr />
                        <label>Date 1</label><br />
                        <input type="datetime-local" id="date1" /><br /><br />
                        <label>Date 2</label><br />
                        <input type="datetime-local" id="date2" /><br /><br />
                        <label>Date 3</label><br />
                        <input type="datetime-local" id="date3" /><br /><br />

                        <label>Additional comments (optional)</label><br />
                        <input type="text" id="coments" /><br /><br />
                        </form>
                    </div>
                </div>
                <button className="btn btn-block btn-primary" onClick={checkForm} type="submit"><b>Submit</b></button>
            </div>
        </div>
    );
}

function checkForm(e) {
    var name1 = document.getElementById("name1").value;
    var email = document.getElementById("email").value;
    var services = document.getElementById("servicelist").value;
    var date1 = document.getElementById("date1").value;
    var date2 = document.getElementById("date2").value;
    var date3 = document.getElementById("date3").value;

    var str = "missing";
    if (name1 == "") {
        str += " name, ";
    }

    if (email == "") {
        str += " email, ";
    }

    if (services == "") {
        str += " service choice, ";
    }

    if (date1 == "" || date2 == "" || date3 == "") {
        str += "dates";
    }

    if(str == "missing"){
        alert("Your request has sucessfully been sent!");
    }
    else{
        alert(str);
    }
}