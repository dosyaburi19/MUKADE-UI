export const formatTerminalStyleText = (text?: string): string => {
	if (!text) return '';
	return '[' + text + ']';
};
