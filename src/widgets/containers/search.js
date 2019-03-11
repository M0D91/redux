import React, {Component} from 'react';
import Search from '../components/search';
import {connect} from 'react-redux';

class SearchContainer extends Component {
    state = {
        value: ''
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('enviado');
        console.log(this.input.value);

        this.props.dispatch({
            type: 'SEARCH_VIDEO',
            payload: {
                query: this.input.value,
            }
        })
    }

    handleInputChange = (event) => {
        this.setState({
            // value: event.target.value
            value: this.input.value.replace(' ','-')
        })
    }

    setInputRef = (element) =>{
        this.input = element;
    }

    render() {
        return(
            <Search
                handleSubmit={this.handleSubmit}
                setRef={this.setInputRef}
                handleChange={this.handleInputChange}
                value={this.state.value}
                />
        )
    }
}

export default connect() (SearchContainer);