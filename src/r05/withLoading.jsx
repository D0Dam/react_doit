import React from 'react';

export default function (loadingMessage = '로딩 중') {
	return function withLoading(WrappedComponent) {
		const { displayName, name: componentName } = WrappedComponent;
		const wrappedComponentName = displayName || componentName;
	
	function withLoading({ isLoading, ...otherProps }) {
		if(isLoading) return loadingMessage;
		return(
			<WrappedComponent {...otherProps}/>
		);
	}
	withLoading.displayName = `withLoading(${wrappedComponentName})`;
	return withLoading;
	}
}