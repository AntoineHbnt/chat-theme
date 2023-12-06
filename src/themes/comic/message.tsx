import { ChatSettings, TwitchMessage } from '../../types';
import { Variants, motion } from 'framer-motion';
import { CustomSettings } from './settings';

type Props = {
	message: TwitchMessage;
	settings: ChatSettings & CustomSettings;
};

export function Message(props: Props) {
	const { message, settings } = props;

	const hideAnimation = {
		initial: {
			opacity: 1,
		},
		in: {
			opacity: 0,
			transition: {
				duration: 0.3,
				delay: settings?.hideTime === 0 || !settings?.hideTime ? 100000 : settings?.hideTime,
				ease: 'easeInOut',
				type: 'spring',
			},
		},
	};

	const displayAnimation = {
		initial: {
			opacity: 0,
			scale: 0,
		},
		in: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 5,
				ease: 'easeInOut',
				type: 'spring',
				stiffness: 260,
				damping: 20,
			},
		},
	};
	const bubbleArrowAnimation: Variants = {
		initial: {
			transform: settings.alignment === "right" ?
				'translate(40%, 100%)' : 'translate(-40%, 100%)'
		},
		in: {
			transform: settings.alignment === "right" ?
				'translate(40%, 150%)' : 'translate(-40%, 150%)',
			transition: {
				duration: 1,
				ease: 'easeIn',
				type: 'spring',
				stiffness: 260,
				damping: 20,
				delay: 0.3
			},
		},
	};

	return (
		<motion.div
			layout={settings.scrollAnimation}
			className='comic__message '
			variants={hideAnimation}
			initial='initial'
			animate='in'
			style={{
				justifyContent:
					settings.alignment === 'left'
						? 'flex-start'
						: settings.alignment === 'center'
							? 'center'
							: 'flex-end',
			}}
		>

			<motion.div
				variants={displayAnimation}
				initial={settings?.animation ? 'initial' : false}
				animate={settings?.animation ? 'in' : false}
				className={`comic__message__wrapper ${settings.alignment === 'right' ? 'shadow-right' : 'shadow-left'}`}
			>
				<div className='comic__message__inner'>
					<div
						className='comic__message__username'
						style={{
							textAlign: settings.alignment,
						}}
					>
						<p>{message.username}</p>
					</div>
					<div
						className='comic__message__content'
						dangerouslySetInnerHTML={{ __html: message.message }}
					/>
				</div>
				<div className='comic__message__appendix'>
					<motion.div
						variants={bubbleArrowAnimation}
						initial={settings?.animation ? 'initial' : false}
						animate={settings?.animation ? 'in' : false}
						className={`triangle ${settings.alignment === 'right' ? 'right' : settings.alignment === 'center' ? 'center' : 'left'}`}
					/>
				</div>
			</motion.div>
		</motion.div>
	);
}
