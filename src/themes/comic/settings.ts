import { ChatSettings } from '../../types';

// eslint-disable-next-line @typescript-eslint/ban-types
export type CustomSettings = {};

export const themeSettings: ChatSettings & CustomSettings = {
	isDemo: true,
	alignment: 'center',
	fontSize: 20,
	scrollAnimation: true,
	animation: true,
};
