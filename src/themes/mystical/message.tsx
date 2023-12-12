import { ChatSettings, TwitchMessage } from '../../types';
import { motion } from 'framer-motion';
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

    const usernameAnimation = {
        initial: {
            opacity: 0,
            top: '-45%',
        },
        in: {
            opacity: 1,
            top: '-40%',
            transition: {
                duration: 0.6,
                delay: .4,
                ease: 'easeInOut',
                type: 'spring',
            },
        },
    };

    const contentAnimation = {
        initial: {
            opacity: 0,
            scale: 0.95,
        },
        in: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: .7,
                delay: .2,
                ease: 'easeInOut',
                type: 'spring',
            },
        },
    };


    return (
        <motion.div
            layout={settings.scrollAnimation}
            className='mystical__message'
            variants={hideAnimation}
            initial='initial'
            animate='in'
        >
            <div
                className='mystical__message__inner'
                style={{
                    alignItems:
                        settings.alignment === 'left'
                            ? 'flex-start'
                            : settings.alignment === 'center'
                                ? 'center'
                                : 'flex-end',
                }}
            >
                <motion.div
                    variants={usernameAnimation}
                    initial={settings?.animation ? 'initial' : false}
                    animate={settings?.animation ? 'in' : false}
                    style={settings?.alignment === 'left' ? {
                        left: '0.5em'
                    } : settings?.alignment === 'right' ? {
                        right: '0.5em'
                    } : {
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}
                    className='mystical__message__username'
                >
                    <div className='mystical__message__username--badges'>
                        {message.badges.map((badge) => (
                            <img src={`/badges/${badge}.png`} alt={badge} key={badge} />
                        ))}
                    </div>
                    <p>{message.username}</p>
                </motion.div>

                <motion.div
                    variants={contentAnimation}
                    initial={settings?.animation ? 'initial' : false}
                    animate={settings?.animation ? 'in' : false}
                    className='mystical__message__content'
                    dangerouslySetInnerHTML={{ __html: message.message }}
                ></motion.div>
            </div>
        </motion.div>
    );
}
