import './testimonials.scss';
import TurnIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { testimonialData } from '../../data';

const Testimonials = () => {
	return (
		<div className='testimonials' id='testimonials'>
			<h2>Testimonials</h2>
			<div className='testimonial-container'>
				{testimonialData.map((t) => (
					<div className={t.featured ? 'card featured' : 'card'} key={t.id}>
						<div className='top'>
							<TurnIcon className='icon' />
							<img src={t.img} alt='' />
							{t.icon}
						</div>
						<div className='center'>{t.desc}</div>
						<div className='bottom'>
							<h4>{t.name}</h4>
							<h5>{t.title}</h5>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
