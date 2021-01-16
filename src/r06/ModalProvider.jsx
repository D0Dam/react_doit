import React, { PureComponent } from 'react';
import Modal from './Modal';
import Button from '../r04/Button';
import Text from '../r04/Text';

const { Provider, Consumer : ModalConsumer1 } = React.createContext({});

class ModalProvider extends PureComponent {
	constructor(props) {
		super(props);
		this.state = { showModal: false };
		this.handleClose = this.handleClose.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
	}
	
	handleClose() {
		this.setState({ showModal : false });
	}
	
	handleOpen() {
		this.setState({ showModal: true });
	}
	
	render() {
		return (
			<Provider value={{ openModal: this.handleOpen, closeModal: this.handleClose }}>
				{this.props.children}
				{this.state.showModal && (
					<Modal>
						<div>
							<Text>
								정말로 삭제하시겠습니까?
							</Text>
						</div>
						<Button primary>예</Button>
						<Button onPress={() => this.setState({ showModal: false })}>닫기</Button>
					</Modal>
				)}
			</Provider>
		);
	}
}

export { 
	ModalProvider,
	ModalConsumer1
};