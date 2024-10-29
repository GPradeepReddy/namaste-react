import React from 'react'

class UserClass extends React.Component {



    constructor(props) {
        console.log("User class comp constructor");
        super(props);
        this.state = {
            count1: 0,
            count2: 2
        }
    }

    render() {
        console.log("User class render");
        const { name, location, number } = this.props;
        return (
            <div>
                <p>{name} - {location} - {number}</p>
                <p>Count1: {this.state.count1}</p>
                <p>Count2: {this.state.count2}</p>
                <button onClick={() => {
                    this.setState(prevState => ({
                        count1: prevState.count1 + 1,
                        count2: prevState.count2 + 2
                    }))
                }}>Increment Count</button>
            </div>
        )
    }

    componentDidMount() {
        console.log("User class comp did mount");
        this.timer = setInterval(() => {
            this.setState(prevState => ({
                count1: prevState.count1 + 1,
                count2: prevState.count2 + 2
            }))
        }, 1000)
    }

    componentWillUnmount() {
        console.log("User class comp will unmount");
        clearInterval(this.timer)
    }
}

export default UserClass;
