import './navbar.scss';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = ({ menuOpen, setMenuOpen }) => {
	return (
		<div className={menuOpen ? 'navbar active' : 'navbar'}>
			<div className='wrapper'>
				<div className='left'>
					<a href='#intro'>
						<img
							src={menuOpen ? '/katana-logo.png' : '/katana-logo-light.png'}
							alt=''
							className='logo'
						/>
					</a>
					<div className='item-container'>
						<PersonIcon className='icon' />
						<span>+1 858-248-7569</span>
					</div>
					<div className='item-container'>
						<MailIcon className='icon' />
						<span>brandon@digitalkatana.dev</span>
					</div>
				</div>
				<div className='right'>
					<div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
						<span className='line1'></span>
						<span className='line2'></span>
						<span className='line3'></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
