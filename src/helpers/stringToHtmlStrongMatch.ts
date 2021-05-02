export default (list: string[], value: string) => {
	const regexp = new RegExp(value, 'i')

	return list.reduce((prev: string[], next) => {
		const matched = regexp.exec(next)
		if (matched) {
			const marked = next.replace(
				regexp,
				`<strong>${matched[0]}</strong>`
			)
			return [...prev, marked]
		}
		return prev
	}, [])
}
