import type { CountyPageData } from './countyTypes'
import { group1Counties } from './counties-group1'
import { group2Counties } from './counties-group2'
import { group3Counties } from './counties-group3'
import { group4Counties } from './counties-group4'

export type { CountyPageData }

export const allCounties: CountyPageData[] = [
  ...group1Counties,
  ...group2Counties,
  ...group3Counties,
  ...group4Counties,
]
