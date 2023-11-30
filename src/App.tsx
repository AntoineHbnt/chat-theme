import { ChatDemo } from './components/chat-demo';
import { Container } from './themes/capsule/container';
import { themeSettings } from './themes/capsule/settings';
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
