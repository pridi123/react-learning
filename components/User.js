import { useState } from "react";

const User = ({name}) => {

    const [count] = useState(3);
    const [count2] = useState(5);

    return <div className="user-card">
        <h4>Name : {name}</h4>
        <p>Location: Oros</p>
        <p>Contact: priyadalvi@gmail.com</p>
        <p>Count: {count}</p>
        <p>Count2: {count2}</p>
        </div>
}

export default User;