import React, {Component} from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
    state = {
        value: 'Luis Fonsi'
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('enviado');
        console.log(this.input.value);
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

export default SearchContainer;