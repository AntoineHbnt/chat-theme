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
			/* [settings?.alignment === 'left' ? 'right' : 'left']: 50, */
			scale: 0

		},
		in: {
			scale: 1,
			/* [settings?.alignment === 'left' ? 'right' : 'left']: 0, */
			transition: {
				duration: 1,
				ease: 'easeInOut',
				type: 'spring',
				stiffness: 260,
				damping: 20,
			},
		},
	};

	const bubbleArrowAnimation: Variants = {
		initial: {
			transform: 'translate(40%, 100%)'
		},
		in: {
			transform: 'translate(40%, 150%)',
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
				className='comic__message__wrapper'
			>
				<div className='comic__message__inner'>
					<div className='comic__message__username'>
						<p>{message.username}</p>
					</div>
					<div
						className='comic__message__content'
						dangerouslySetInnerHTML={{ __html: message.message }}
					/>
				</div>
				<div className='comic__message__appendix'>
					<div className='corner bottom-left' />
					<div className='corner top-right' />
					<motion.div
						variants={bubbleArrowAnimation}
						initial={settings?.animation ? 'initial' : false}
						animate={settings?.animation ? 'in' : false}
						className='triangle right'
					/>
				</div>
			</motion.div>
		</motion.div>
	);
}
