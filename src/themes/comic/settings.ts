import { ChatSettings } from '../../types';

export type CustomSettings = {};

export const themeSettings: ChatSettings & CustomSettings = {
	isDemo: true,
	alignment: 'right',
	fontSize: 20,
	scrollAnimation: true,
	animation: true,
};
