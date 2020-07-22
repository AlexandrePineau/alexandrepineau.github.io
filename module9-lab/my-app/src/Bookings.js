import React from 'react';

export const Bookings = () => (
    <div>
        <div className="container">
            <h2>
                Book a consultation
            </h2>
            <div className="row">
                <div className="col-lg-6">
                        <h5>Your info</h5><hr/>
                        <label>Your full name</label><br />
                        <input type="text" id="fullname" placeholder="Firstname Lastname" /><br /><br />

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
                </div>
                <div className="col-lg-6">
                    <h5>Select 3 popssible dates for an appointment</h5><hr />
                        <label>Date 1</label><br />
                        <input type="datetime-local" id="date1" /><br /><br />
                        <label>Date 2</label><br />
                        <input type="datetime-local" id="date2" /><br /><br />
                        <label>Date 3</label><br />
                        <input type="datetime-local" id="date3" /><br /><br />

                        <label>Additional comments</label><br />
                        <input type="text" id="coments" /><br /><br />
                </div>
            </div>
            <button className="btn btn-block btn-primary" type="button"><b>Submit</b></button>
        </div>
    </div>
)