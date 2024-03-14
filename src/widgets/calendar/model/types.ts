import { Day } from '../../../entities/day/model'

export type DateType = {
	month: number
	year: number
}

export type Week = Array<Day | null>
export type Month = {
	weeks: Week[]
}
