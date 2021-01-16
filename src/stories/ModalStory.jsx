import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from '../r06/Modal';
import Button from '../r04/Button';
import Text from '../r04/Text';
import ButtonWithModal from '../r06/ButtonWithModal';
import { ModalProvider, ModalConsumer1 } from '../r06/ModalProvider';
import ModalProviderWithKey, { CONFIRM_DELETE_MODAL, CREATE_MEMBER_MODAL } from '../r06/ModalProviderWithKey';


import { Consumer as ModalConsumer } from '../r06/ModalContext';

storiesOf('Modal', module)
	.addWithJSX('기본 설정', () => (
	<Modal>
		<div>
			<Text>
				정말로 삭제 하시겠습니까?
			</Text>
		</div>
		<Button primary>예</Button>
		<Button>닫기</Button>
	</Modal>
))
	.addWithJSX('ButtonWithModal', () => <ButtonWithModal />)
	.addWithJSX('ModalProvider', () => (
	<ModalProvider>
		<div>
			<Text>다음 버튼을 눌러 모달을 실행합니다.</Text>
			<ModalConsumer1>
				{({ openModal }) => <Button onPress={() => openModal()}>삭제</Button>}
			</ModalConsumer1>
		</div>
	</ModalProvider>
))
	.addWithJSX('ModalProviderWithKey', () => (
		<ModalProviderWithKey>
			<div>
				<Text>
					다음 버튼을 눌러 모달을 실행합니다.
				</Text>
			<ModalConsumer>
				{({ openModal }) => (
					<Button onPress={() => openModal(CONFIRM_DELETE_MODAL)}>모달 열기</Button>
				)}
			</ModalConsumer>
			<ModalConsumer>
				{({ openModal}) => (
					<Button onPress={() => openModal(CREATE_MEMBER_MODAL)}>회원 가입</Button>
				)}	
			</ModalConsumer>
			</div>
		</ModalProviderWithKey>
	))
	.addWithJSX('ModalWithIdAndName', () => (
		<ModalProviderWithKey>
			<div>
				<Text>
					다음 버튼을 눌러 모달을 실행합니다.
				</Text>
				<ModalConsumer>
					{({ openModal }) => (
						<Button onPress={() => openModal(CONFIRM_DELETE_MODAL, { id: 1, name: '상품 1'})}>
							모달열기
						</Button>
					)}
				
				</ModalConsumer>
			</div>
		</ModalProviderWithKey>
	));