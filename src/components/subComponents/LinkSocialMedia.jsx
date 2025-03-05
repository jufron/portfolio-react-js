import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const LinkSocialMedia = ({ href, iconName, className }) => {
    return (
        <a
            href={href}
            className={`social-link w-15 h-15 border-2 flex items-center justify-center rounded-full transition-colors ${className}`}
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={iconName} size="lg" />
        </a>
    );
};

export default LinkSocialMedia;
