import '../styles/PropertyCard.css'
import { PropertyData } from '../types';

interface PropertyCardProps {
	propertyData: PropertyData[] | null;
}

export default function PropertyCard({ propertyData }: PropertyCardProps) {
	return (
		<>
			{propertyData ? (
				propertyData.map(property => (
					<li key={property.id} className='card-item'>
						<div className='card-img-cont'>
							<img className='card-img' src={property.image} alt="" />
							{property.superhost ? (
								<div className='card-mark'>
									Superhost
									<img src="Starfill.svg" alt="" />
								</div>
							) : (
								null
							)}
						</div>
						<div className='card-info'>
							<h1 className='card-title'>{property.title}</h1>
							<p className='card-description'>{property.description}</p>
							<div className='card-capacity'>
								<div className='card-bedrooms'>
									<img src="Home_duotone.svg" alt="" />
									{property.capacity.bedroom} bedroom
								</div>
								<div className='card-guests'>
									<img src="User_alt_duotone.svg" alt="" />
									{property.capacity.people} guests
								</div>
							</div>
							<div className='card-additionally-info'>
								<div className='card-price'><big>${property.price}</big>/night</div>
								<div className='card-rating'>
									<img src="Starfill.svg" alt="" />
									{property.rating}
								</div>
							</div>
						</div>
					</li>
				))
			) : (
				<p>Property were not found</p>
			)}
		</>
	)
}