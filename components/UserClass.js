import React from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0,
        };
    }

  render() {

    const{count} = this.state;

    return (
      <div className="user-card">
        <h4>Name: {this.props.name}</h4>
        <p>Location: Oros</p>
        <p>Contact: priyadalvi@gmail.com</p>
        <p>Count: {count}</p>
        <button
          onClick={() => {
            //Never update state directly
            this.setState({ count: count + 1 });
            console.log("Button clicked");
          }}
          > Increment </button>
        </div>
    );
    }
}

export default UserClass;