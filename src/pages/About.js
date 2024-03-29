import { useState, useEffect } from 'react';


function About(props) {
    //create state to hold data
    const [about, setAbout] = useState(null);


//create a function to make an api call
const getAboutData = async () => {
    //make api call to get response
    const response = await fetch(props.URL + 'about');
    //turn response into js object
    const data = await response.json();
    //set the about state to the date
    setAbout(data)
};

//make an initial call for the data inside a useEffect, so it only happens once a component loads
useEffect(() => getAboutData(), []);

//define a function that will return the JSX needed once we get the data
const loaded = () => (
    <div>
        <h2>{about.name}</h2>
        <h3>{about.email}</h3>
        <p>{about.bio}</p>
    </div>
);

//if data arrives return the result of loaded, if not, an h1 that says loading
return about ? loaded() : <h1>Loading...</h1>;
}

export default About;