import '../styles/Navbar.css'

export default function Navbar() {
	return (
		<nav className='navbar'>
			<ul className='option-list'>
				<li className='option-item'>All Stays</li>
				<li className='option-item'>Norway</li>
				<li className='option-item'>Finland</li>
				<li className='option-item'>Sweden</li>
				<li className='option-item'>Switzerland</li>
			</ul>
			<div className='options'>
				<div className='switch-cont'>
					<label className='switch'>
						<input className='switch-input' type="checkbox" />
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