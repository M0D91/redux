import React, {Component} from 'react';
import RegularError from '../components/regularError';

class HandleError extends Component {
    state = {
        handleError: false,
    }
    // Manejador de errores componentDidCatch.
    // Recibe 2 parametros: el error que ha ocurrido y la info del mismo
    componentDidCatch(error, info) {
        // envia el error a un servicio como Sentry
        this.setState({
            handleError: true,
        })
    }
    render() {
        if (this.state.handleError) {
            return (
                <RegularError />
            )
        }
        return this.props.children
    }
}

export default HandleError;