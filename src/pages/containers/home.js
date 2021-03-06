import React, {Component} from 'react';
import HomeLayout from '../components/homeLayout';
import Categories from '../../categories/components/categories';
import Related from '../components/relatedLayout';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../errors/containers/handleError';
import VideoPlayer from '../../player/containers/videoPlayer';

import {connect} from 'react-redux';

class Home extends Component {
    state = {
        modalVisible: false,
        // handleError: false,
    }
    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media: media
        })
    }
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    }
    // Manejador de errores componentDidCatch.
    // Recibe 2 parametros: el error que ha ocurrido y la info del mismo
   
    render() { 
        return (
            // console.log('Soy un home muy loco')
            <HandleError>
                <HomeLayout>
                    <Related/>
                    <Categories
                        categories={this.props.categories}
                        handleOpenModal={this.handleOpenModal}
                        search = {this.props.search}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal 
                                handleClick={this.handleCloseModal}>
                                <VideoPlayer
                                    autoplay
                                    src={this.state.media.src}
                                    title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        categories: state.data.categories,
        search: state.search
    }
}

export default connect(mapStateToProps) (Home);