import './intro.scss';
import DownArrowIcon from '@mui/icons-material/KeyboardArrowDown';

const Intro = () => {
	return (
		<div className='intro' id='intro'>
			<div className='left'>
				<div className='img-container'>
					<img src='/me.png' alt='' />
				</div>
			</div>
			<div className='right'>
				<div className='wrapper'>
					<h2>Hi There, Welcome to</h2>
					<h1>DigitalKatana.dev</h1>
					<h2>I'm Brandon Benoit</h2>
					<h3>
						Freelance <span>Developer</span>
					</h3>
				</div>
				<a href='#portfolio'>
					<DownArrowIcon className='icon' />
				</a>
			</div>
		</div>
	);
};

export default Intro;
