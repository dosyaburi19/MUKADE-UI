export const formatStyles = (sx?: { [key: string]: string }): string => {
	if (!sx) return '';

	let formattedStyle = '';
	const styleEntries = Object.entries(sx);

	for (const [key, value] of styleEntries) {
		const lowerKey = key.replace(/[A-Z]/g, (value) => '-' + value.toLocaleLowerCase());
		formattedStyle += `${lowerKey}:${value};`;
	}

	return formattedStyle;
};
