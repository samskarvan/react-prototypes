import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateTime } from '../actions/index';

class Clock extends Component {
    componentDidMount(){
        setInterval(this.props.updateTime, 1000);
    }
    render(){
        <div className="text-center mt-5">
        <h1>Some text inside of it</h1>
        </div>
    }
}

function mapStateToProps(state){
    return{
        time: state.clock.time
    }
}
export default connect(mapStateToProps,{updateTime})(Clock);