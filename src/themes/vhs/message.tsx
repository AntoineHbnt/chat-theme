import { ChatSettings, TwitchMessage } from '../../types';
import { motion } from 'framer-motion';
import { CustomSettings } from './settings';
import { useEffect, useRef, useState } from 'react';

type Props = {
	message: TwitchMessage;
	settings: ChatSettings & CustomSettings;
};

export function Message(props: Props) {
	const { message, settings } = props;
	const messageContentRef = useRef<HTMLDivElement>(null);
	const messageUsernameRef = useRef<HTMLDivElement>(null);

	const [messageContent, setMessageContent] = useState<string | undefined>(undefined);
	const [messageUsername, setMessageUsername] = useState<string | undefined>(undefined);

	useEffect(() => {
		if (!messageContent) setMessageContent(messageContentRef.current?.innerText);
		if (!messageUsername) setMessageUsername(messageUsernameRef.current?.innerText);
	}, []);


	const hideAnimation = {
		initial: {
			opacity: 1,
		},
		in: {
			opacity: 0,
			transition: {
				duration: 0.3,
				delay:
					settings?.hideTime === 0 || !settings?.hideTime
						? 100000
						: settings?.hideTime,
				ease: 'easeInOut',
				type: 'spring',
			},
		},
	};

	const displayAnimation = {
		initial: {
			[settings?.alignment === 'left' ? 'right' : 'left']: 50,
		},
		in: {
			[settings?.alignment === 'left' ? 'right' : 'left']: 0,
			transition: {
				duration: 1,
				ease: 'easeInOut',
				type: 'spring',
				stiffness: 260,
				damping: 20,
			},
		},
	};

	return (
		<motion.div
			layout={settings.scrollAnimation}
			className='message'
			variants={hideAnimation}
			initial='initial'
			animate='in'
		>
			<motion.div
				variants={displayAnimation}
				initial={settings?.animation ? 'initial' : false}
				animate={settings?.animation ? 'in' : false}
				className='message__inner'
				style={{
					alignItems:
						settings.alignment === 'left'
							? 'flex-start'
							: settings.alignment === 'center'
								? 'center'
								: 'flex-end',
				}}
			>
				<div className='message__username'>
					<p
						ref={messageUsernameRef}
						className='glitch'
						data-background={settings.background}
						data-text={messageUsername}
					>
						{message.username}
					</p>
				</div>

				<div
					ref={messageContentRef}
					data-text={messageContent}
					data-background={settings.background}
					className='message__content glitch'
					dangerouslySetInnerHTML={{ __html: message.message }}
				></div>
			</motion.div>
		</motion.div>
	);
}
