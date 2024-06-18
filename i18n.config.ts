import ru from './src/lang/ru.json'
import en from './src/lang/en.json'

export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'ru',
	strategy: 'no_prefix',
	messages: {
		ru,
		en
	}
}))
