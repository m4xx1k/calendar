export type Country = {
	countryCode: string
	name: string
}
export type HolidayTypes =
	| 'Public'
	| 'Bank'
	| 'School'
	| 'Authorities'
	| 'Optional'
	| 'Observance'

export type PublicHoliday = {
	description?: string
	date: string // Format: YYYY-MM-DD
	localName?: string | null
	name?: string | null
	countryCode?: string | null
	fixed: boolean
	global: boolean
	counties?: string[] | null // ISO-3166-2 - Federal states
	launchYear?: number | null
	types?: HolidayTypes[] | null
}
