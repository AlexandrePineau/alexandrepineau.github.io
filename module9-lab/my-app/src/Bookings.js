import React from 'react';

export const Bookings = () => (
    <div>
        <div className="container">
            <h2 id="bookings">~Bookings~</h2>
            <h3>
                Book a consultation
                                </h3>
            <form>
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

                <p>Select 3 popssible dates for an appointment</p>
                <label>Date 1</label><br />
                <input type="datetime-local" id="date1" /><br /><br />
                <label>Date 2</label><br />
                <input type="datetime-local" id="date2" /><br /><br />
                <label>Date 3</label><br />
                <input type="datetime-local" id="date3" /><br /><br />

                <label>Additional comments</label><br />
                <input type="text" id="coments" /><br /><br />

                <button type="button"><b>Submit</b></button>
            </form>
        </div>
    </div>
)