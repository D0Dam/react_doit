import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../r04/Button';
import ButtonWithContext from './ButtonWithContext';

function RowBComponent() {
	return <Button>버튼</Button>;
}

function RowCComponent() {
	return <ButtonWithContext>버튼</ButtonWithContext>;
}

function TableComponent() {
	return (
		<table>
			<RowBComponent />
			<RowCComponent />
		</table>
	);
}

class HomePageComponent extends PureComponent {
	constructor(props) {
		super(props);
		
		this.state = {loading: false };
		this.setLoading = this.setLoading.bind(this);
		this.toggleLoading = this.toggleLoading.bind(this);
	}
	
	getChildContext() {
		return {
			loading: this.state.loading,
			setLoading: this.setLoading,
		};
	}
	
	setLoading(loading) {
    this.setState({ loading });
  }
	
	toggleLoading(loading) {
		this.setState(({ loading }) => ({loading: !loading }));
	}
	
	render() {
		return (
			<div>
				<TableComponent />
				<Button onPress={this.toggleLoading}>상태 변경</Button>
			</div>
		);
	}
}

HomePageComponent.childContextTypes = {
	loading: PropTypes.bool,
	setLoading: PropTypes.func,
};

export default HomePageComponent;