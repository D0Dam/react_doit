import React from 'react';
import branch from 'recompose/branch';
import Button from '../r04/Button';

function isLoading(props) {
	console.log(props.isLoading);
	return props.isLoading;
}

function LoadingButton(props) {
	return <Button disabled>로딩 중</Button>;
}

export default branch(
	isLoading,
	() => LoadingButton,
)(Button);