import { useEffect, useState } from 'react';
import { generateTwitchMessage } from '../utils/generate-chat-message';
import { TwitchMessage } from '../types';
import { Container } from '../themes/template/container';
import { themeSettings } from '../themes/template/settings';

export function ChatDemo() {
	const [messages, setMessages] = useState<TwitchMessage[]>([]);

	useEffect(() => {
		setMessages((d) => {
			if (d.length >= 50) d.shift();
			const newMessage = generateTwitchMessage('twitch');
			return [...d, newMessage] as TwitchMessage[];
		});

		const interval = setInterval(() => {
			setMessages((d) => {
				if (d.length >= 50) d.shift();
				const newMessage = generateTwitchMessage('twitch');
				return [...d, newMessage] as TwitchMessage[];
			});
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className='chat-demo'>
			<Container messages={messages} settings={themeSettings} />
		</div>
	);
}
