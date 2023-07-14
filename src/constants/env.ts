// Constants
import packageJson from '../../package.json'

export const NODE_ENV = process.env['NODE_ENV']
export const REACT_APP_ROUTER_BASE_URL = process.env['REACT_APP_ROUTER_BASE_URL']
export const REACT_APP_API_URL = process.env['REACT_APP_API_URL']
export const REACT_APP_IS_MOCKS_ENABLED = process.env['REACT_APP_IS_MOCKS_ENABLED']
export const IS_MOCKS_ENABLED = REACT_APP_IS_MOCKS_ENABLED === 'true'
export const BUSINESS_API_URL = 'https://jsonplaceholder.typicode.com'
export const APP_VERSION = packageJson.version

