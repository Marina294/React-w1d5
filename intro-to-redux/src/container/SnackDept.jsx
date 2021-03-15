import React, { Component } from 'react'
import {connect} from 'react-redux'

class SnackDept extends Component {
    render() {
        // console.log(connect())
        // console.log('from snackdept component: ', this.props.data)
        return (
            <div>
                <h1>The snack Department</h1>
                <ul>
                    {/* this is where we will populate the snacks from redux store */}
                    {
                        this.props.data.map((snack, index) => (
                            <li key={index}>{snack}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        data: state.snacks.snacksData
    }
}

// const mapDispatchToProps

export default connect(mapStateToProps)(SnackDept);
