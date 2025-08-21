import React from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        };
    }

  render() {

    const{count, count2} = this.state;

    return (
      <div className="user-card">
        <h4>Name: {this.props.name}</h4>
        <p>Location: Oros</p>
        <p>Contact: priyadalvi@gmail.com</p>
        <p>Count: {count}</p>
        <p>Count2: {count2}</p>  
        </div>
    );
    }
}

export default UserClass;