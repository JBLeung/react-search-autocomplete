import Fuse from 'fuse.js'

import { SearchIcon } from '../components/SearchIcon'
import { ClearIcon } from '../components/ClearIcon'

export interface DefaultTheme {
  height?: string
  border?: string
  borderRadius?: string
  backgroundColor?: string
  boxShadow?: string
  hoverBackgroundColor?: string
  color?: string
  fontSize?: string
  fontFamily?: string
  searchIconColor?: string
  clearIconColor?: string
  lineColor?: string
  placeholderColor?: string
  zIndex?: number
  clearIconMargin?: string
  searchIconMargin?: string,
  CustomSearchIcon?: Function,
  CustomClearIcon?: Function
}

const defaultTheme: DefaultTheme = {
  height: '44px',
  border: '1px solid #dfe1e5',
  borderRadius: '24px',
  backgroundColor: 'white',
  boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px',
  hoverBackgroundColor: '#eee',
  color: '#212121',
  fontSize: '16px',
  fontFamily: 'Arial',
  searchIconColor: 'grey',
  clearIconColor: 'grey',
  lineColor: 'rgb(232, 234, 237)',
  placeholderColor: 'grey',
  zIndex: 0,
  clearIconMargin: '3px 14px 0 0',
  searchIconMargin: '0 0 0 16px',
  CustomSearchIcon: SearchIcon,
  CustomClearIcon: ClearIcon
}

const defaultFuseOptions: Fuse.IFuseOptions<any> = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  minMatchCharLength: 1,
  keys: ['name']
}

export { defaultTheme, defaultFuseOptions }
