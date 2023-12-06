import { ChatDemo } from './components/chat-demo';
import { Container } from './themes/comic/container';
import { themeSettings } from './themes/comic/settings';
import { generateTwitchMessage } from './utils/generate-chat-message';

export function App() {
	return (
		<main>
			<div className='message-presentation'>
				<Container
					messages={[generateTwitchMessage()]}
					settings={themeSettings}
				/>
			</div>
			<div className='message-demo'>
				<ChatDemo />
			</div>
		</main>
	);
}
