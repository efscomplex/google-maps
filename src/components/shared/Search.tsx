import React, { useState } from 'react'
import styled from 'styled-components'
import { useSuggestions } from 'store/reducers/appReducer'
import toStrongMatch from 'helpers/stringToHtmlStrongMatch'
import Autocompletion from 'components/shared/Autocompletion'
import { useStore } from 'services/providers/StoreProvider'

export default function Search() {
	const suggestions: string[] = useSuggestions()
	const { dispatch, map } = useStore()
	const [items, setItems] = useState<string[]>([])
	const [active, setActive] = useState<boolean>(false)
	const [value, setValue] = useState('')

	const onChange = ({ target }: any) => {
		setValue(target.value)
		setItems(toStrongMatch(suggestions, target.value))
		setActive(true)
	}
	const bcn = { lat: 41.38581760534082, lng: 2.1733692498093284 }

	const createMark = (e: any) => {
		const suggestion = e.target.innerText
		setValue(suggestion)
		map.createMark({ position: bcn, label: suggestion })
			.then((mark: any) => {
				dispatch('addMark', mark)
				setActive(false)
			})
			.catch((err: Error) => {
				console.log('something was wrong ', err)
			})
	}

	return (
		<SearchBox>
			<SearchBar active={active}>
				<Input
					value={value}
					autoComplete='off'
					placeholder='Buscar en google maps'
					onChange={onChange}
					//onBlur={() => setActive(false)}
					onFocus={() => setActive(true)}
				/>
				<span>&#128269;</span>
			</SearchBar>
			<Autocompletion
				items={items}
				active={active}
				onClick={createMark}
			/>
		</SearchBox>
	)
}
const SearchBox = styled('div')`
	position: absolute;
	top: 2rem;
	left: 2rem;
`
const SearchBar = styled('div')<{ active: boolean }>`
	padding: 6px 32px;
	display: flex;
	justify-content: space-between;
	gap: 0 1rem;

	background-color: #fff;
	border-radius: ${(props: any) => (props.active ? '8px 8px 0 0' : '8px')};

	box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 -1px 0px rgb(0 0 0 / 2%);

	transition: box-shadow, background-color;
	transition-duration: 0.3s;
`
const Input = styled('input')`
	border: none;
	outline: none;
	//font-size: 1rem;
	font-family: inherit;
	color: #505050;
	&::placeholder {
		color: #b8b8b8;
	}
`
