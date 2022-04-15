import './menu.scss';

const Menu = ({ menuOpen, setMenuOpen }) => {
	const menuItems = [
		{
			id: 0,
			href: '#intro',
			title: 'Home',
		},
		{
			id: 1,
			href: '#portfolio',
			title: 'Portfolio',
		},
		{
			id: 2,
			href: '#works',
			title: 'Works',
		},
		{
			id: 3,
			href: '#testimonials',
			title: 'Testimonials',
		},
		{
			id: 4,
			href: '#contact',
			title: 'Contact',
		},
	];
	return (
		<div className={menuOpen ? 'menu active' : 'menu'}>
			<ul>
				{menuItems.map((item) => (
					<li key={item.id} onClick={() => setMenuOpen(false)}>
						<a href={item.href}>{item.title}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Menu;
