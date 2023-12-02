import { AnimatePresence } from 'framer-motion';
import type { ChatSettings, TwitchMessage } from '../../types';
import { Message } from './message';
import './style.css';
import { CustomSettings } from './settings';

type Props = {
	messages: TwitchMessage[];
	settings: ChatSettings & CustomSettings;
};

export function Container(props: Props) {
	const { messages, settings } = props;

	return (
		<div className='container' style={{
			backgroundColor: settings.background ? "#040405" : 'transparent',
		}}>
			<div
				className='wrapper wobbley'
				style={{
					fontSize: settings.fontSize || 16,
					textAlign: settings.alignment || 'left',
				}}
			>
				{messages.map((message) => (
					<AnimatePresence key={message.id}>
						<Message message={message} settings={settings} />
					</AnimatePresence>
				))}
			</div>
			{settings.background ? <div className='radial-effect' /> : null}
			{settings.background ?
				<div className='trame-effect'>
					<div className='trame-effect__block--1' />
					<div className='trame-effect__block--2' />
				</div>
				: null}
		</div >
	);
}
