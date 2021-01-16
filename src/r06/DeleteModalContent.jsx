import React from 'react';
import Button from '../r04/Button';
import Text from '../r04/Text';
import { Consumer } from './ModalContext';

export default function DeleteModalContent({ id, name }){
	return (
		<Consumer>
			{({ closeModal }) => (
				<div>
					<div>
						<Text>{name}을 정말로 삭제할거야??? 잉??</Text>
					</div>
					<Button primary>예</Button>
					<Button onPress={closeModal}>닫기</Button>
				</div>
			)}
		</Consumer>
	);
}