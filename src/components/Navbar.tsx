import '../styles/Navbar.css'
import React, { useState } from 'react';

interface NavbarProps {
	propertyLocation: string;
	setPropertyLocation: React.Dispatch<React.SetStateAction<string>>;
	setIsPropertySuperhost: React.Dispatch<React.SetStateAction<boolean>>;
	setNumberBedrooms: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Navbar({ propertyLocation, setPropertyLocation, setIsPropertySuperhost, setNumberBedrooms }: NavbarProps) {
	const [isOpenDropdownList, setIsOpenDropdownList] = useState<boolean>(false);

	const handleClickProperty = (e: React.MouseEvent<HTMLElement>) => {
		const value = e.currentTarget.getAttribute('data-value');
		setPropertyLocation(value || '');
	}

	const handleChangeProperty = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsPropertySuperhost(e.target.checked);
	}

	const handleSelectProperty = (e: React.MouseEvent<HTMLElement>) => {
		const value = e.currentTarget.getAttribute('data-value');
		setNumberBedrooms(value);
	}

	const openDropdownList = () => {
		setIsOpenDropdownList(prev => !prev)
	}

	return (
		<nav className='navbar'>
			<ul className='option-list'>
				<li className={`option-item ${propertyLocation === '' ? 'option-imet--active' : ''}`} data-value='' onClick={handleClickProperty}>All Stays</li>
				<li className={`option-item ${propertyLocation === 'Norway' ? 'option-imet--active' : ''}`} data-value='Norway' onClick={handleClickProperty}>Norway</li>
				<li className={`option-item ${propertyLocation === 'Finland' ? 'option-imet--active' : ''}`} data-value='Finland' onClick={handleClickProperty}>Finland</li>
				<li className={`option-item ${propertyLocation === 'Sweden' ? 'option-imet--active' : ''}`} data-value='Sweden' onClick={handleClickProperty}>Sweden</li>
				<li className={`option-item ${propertyLocation === 'Switzerland' ? 'option-imet--active' : ''}`} data-value='Switzerland' onClick={handleClickProperty}>Switzerland</li>
			</ul>
			<div className='options'>
				<div className='switch-cont'>
					<label className='switch'>
						<input className='switch-input' type="checkbox" onChange={handleChangeProperty} />
						<span className='switch-slider'></span>
					</label>
					<p>Superhost</p>
				</div>
				<div className='dropdown-cont' onClick={openDropdownList}>
					<div className='dropdown-title'>Property type</div>
					<img className='dropdown-icon' src="Expand_down.svg" alt="" />
					<ul className='dropdown-list' style={{ display: isOpenDropdownList ? 'flex' : 'none' }}>
						<li className='dropdown-item' data-value={null} onClick={handleSelectProperty}>All</li>
						<li className='dropdown-item' data-value='1' onClick={handleSelectProperty}>One Bedroom</li>
						<li className='dropdown-item' data-value='2' onClick={handleSelectProperty}>Two Bedrooms</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}