import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {GET_LEADS} from '../../actions/leads';

export class Leads extends Component {

    static propTypes = {
        leads: PropTypes.array.isRequired
    }

    render() {
        return (
            <div>
                <h1> LEADS LIST HERE</h1>
            </div>
        );
    }
}

const mapStateToPRops = state => ({
    leads: state.leads.leads //leads reducer -> state of lead
});

export default connect(mapStateToPRops)(Leads);
