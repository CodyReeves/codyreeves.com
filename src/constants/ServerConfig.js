const mode = "dev"

const config = {
	url: {
		dev: '',
		stg: '',
		prod: ''
	},
	key: {
		dev: 'AbcdEfg',
		stg: 'AbcdEfg',
		prod: 'AbcdEfg'
	}
}

export const host_url = () => config.url[mode]
export const api_key = () => config.key[mode]



