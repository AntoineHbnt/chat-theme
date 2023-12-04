import { ChatSettings } from '../../types';

export type CustomSettings = {};

export const themeSettings: ChatSettings & CustomSettings = {
	isDemo: true,
	alignment: 'center',
	fontSize: 16,
	scrollAnimation: true,
	animation: true,
	background: true,
};
