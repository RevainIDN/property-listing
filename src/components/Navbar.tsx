import '../styles/Navbar.css'
import { PropertyData } from '../types'

interface NavbarProps {
	propertyData: PropertyData[] | null;
	propertyLocation: string;
	setPropertyLocation: React.Dispatch<React.SetStateAction<string>>;
	setIsPropertySuperhost: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ propertyData, propertyLocation, setPropertyLocation, setIsPropertySuperhost }: NavbarProps) {
	const handleProperty = (e: React.MouseEvent<HTMLElement>) => {
		const value = e.currentTarget.getAttribute('data-value');
		setPropertyLocation(value || '');
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsPropertySuperhost(e.target.checked);
	}

	return (
		<nav className='navbar'>
			<ul className='option-list'>
				<li className={`option-item ${propertyLocation === '' ? 'option-imet--active' : ''}`} data-value='' onClick={handleProperty}>All Stays</li>
				<li className={`option-item ${propertyLocation === 'Norway' ? 'option-imet--active' : ''}`} data-value='Norway' onClick={handleProperty}>Norway</li>
				<li className={`option-item ${propertyLocation === 'Finland' ? 'option-imet--active' : ''}`} data-value='Finland' onClick={handleProperty}>Finland</li>
				<li className={`option-item ${propertyLocation === 'Sweden' ? 'option-imet--active' : ''}`} data-value='Sweden' onClick={handleProperty}>Sweden</li>
				<li className={`option-item ${propertyLocation === 'Switzerland' ? 'option-imet--active' : ''}`} data-value='Switzerland' onClick={handleProperty}>Switzerland</li>
			</ul>
			<div className='options'>
				<div className='switch-cont'>
					<label className='switch'>
						<input className='switch-input' type="checkbox" onChange={handleChange} />
						<span className='switch-slider'></span>
					</label>
					<p>Superhost</p>
				</div>
				<div className='dropdown-cont'>
					<div className='dropdown-list'>Property type</div>
					<img className='dropdown-icon' src="Expand_down.svg" alt="" />
				</div>
			</div>
		</nav>
	)
}