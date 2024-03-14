import { useState } from 'react'
import {
	StyledSelectCountryArrow,
	StyledSelectCountryItem,
	StyledSelectCountryList,
	StyledSelectCountrySection,
	StyledSelectedCountry,
	StyledSelectedCountryLabel,
} from '.'
import { Country } from '../../../shared/lib/holidays'
import { useOutside } from '../model'

export const SelectCountry = ({
	countries,
	country: selectedCountry,
	selectCountry,
}: Props) => {
	const [openSelect, setOpenSelect] = useState<boolean>(false)
	const ref = useOutside(() => setOpenSelect(false))
	return (
		<StyledSelectCountrySection ref={ref}>
			<StyledSelectedCountryLabel>Select country</StyledSelectedCountryLabel>

			<StyledSelectedCountry onClick={() => setOpenSelect(prev => !prev)}>
				{selectedCountry && selectedCountry.name}
				<StyledSelectCountryArrow
					src='/arrow.svg'
					alt='arrow'
					$open={openSelect}
				/>
			</StyledSelectedCountry>
			{openSelect && (
				<StyledSelectCountryList>
					{countries &&
						countries.map(country => (
							<StyledSelectCountryItem
								key={country.countryCode}
								onClick={() => {
									selectCountry(country)
									setOpenSelect(false)
								}}
							>
								{country.name}
							</StyledSelectCountryItem>
						))}
				</StyledSelectCountryList>
			)}
		</StyledSelectCountrySection>
	)
}

type Props = {
	countries: Country[] | undefined
	country: Country | null
	selectCountry: (country: Country) => void
}
