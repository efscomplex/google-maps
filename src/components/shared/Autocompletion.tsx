import React from 'react'
import styled from 'styled-components'

type Props = {
	items: string[]
	active: boolean
	[key: string]: any
}
const createMarkup = (str: string) => {
	return { __html: str }
}
const Autocompletion: React.FC<Props> = ({ items, active, ...props }) => {
	const render = items.map((item) => (
		<li dangerouslySetInnerHTML={createMarkup(item)} />
	))
	const className = active ? 'autocom-box active' : 'autocom-box'
	return (
		<Wrapper className={className} {...props}>
			{React.Children.toArray(render)}
		</Wrapper>
	)
}

const Wrapper = styled('div')`
	padding: 0;
	opacity: 0;
	pointer-events: none;
	max-height: 280px;
	overflow-y: auto;
	background: #fff;
	border-radius: 0 0 8px 8px;
	&.active {
		opacity: 1;
	}
	li {
		list-style: none;
		padding: 8px 12px;
		display: none;
		width: 100%;
		cursor: default;
		border-radius: 3px;
		:hover {
			background: #efefef;
		}
	}
	&.active li {
		padding: 10px 8px;
		opacity: 1;
		pointer-events: auto;
		display: block;
	}
`
export default Autocompletion
