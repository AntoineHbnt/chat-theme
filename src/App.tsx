import { ChatDemo } from './components/chat-demo';
import { Container } from './themes/mystical/container';
import { themeSettings } from './themes/mystical/settings';
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
