export const justifyMap = {
	start: 'flex-start',
	center: 'center',
	end: 'flex-end',
	between: 'space-between',
	around: 'space-around'
} as const;

export const alignMap = {
	start: 'flex-start',
	center: 'center',
	end: 'flex-end',
	stretch: 'stretch'
} as const;

export const textAlignMap = {
	start: 'start',
	left: 'left',
	center: 'center',
	right: 'right',
	end: 'end',
	justify: 'justify'
};

export type Justify = keyof typeof justifyMap;
export type Algin = keyof typeof alignMap;
export type TextAlign = keyof typeof textAlignMap;
