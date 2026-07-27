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

export type Justify = keyof typeof justifyMap;
export type Align = keyof typeof alignMap;

export type TextAlign = 'start' | 'left' | 'center' | 'right' | 'end' | 'justify';
export type Font = 'mono' | 'vt';
export type TextVariant = 'crt' | 'led';
export type TextTone = 'default' | 'dim' | 'primary' | 'success' | 'warn' | 'danger';
