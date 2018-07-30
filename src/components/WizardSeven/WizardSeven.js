import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCredit } from '../../ducks/reducer';

class WizardSeven extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={(e) => this.props.updateCredit(e.target.value)}>Excellent</button></Link>
                        <Link to="/wEight"><button onClick={(e) => this.props.updateCredit(e.target.value)}>Good</button></Link>
                        <Link to="/wEight"><button onClick={(e) => this.props.updateCredit(e.target.value)}>Fair</button></Link>
                        <Link to="/wEight"><button onClick={(e) => this.props.updateCredit(e.target.value)}>Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        credit: state.credit
    }
}

export default connect(mapStateToProps, {updateCredit})(WizardSeven);