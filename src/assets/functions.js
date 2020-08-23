const cityes = [
	'Алматы',
	'Нур-Султан',
	'Шымкент',
	'Актобе',
	'Караганда',
	'Тараз',
	'Павлодар',
	'Усть-Каменогорск',
	'Семей',
	'Атырау',
	'Костанай',
	'Кызылорда',
	'Уральск',
	'Кызылорда',
	'Петропавловск	',
	'Актау',
	'Темиртау',
	'Туркестан',
	'Кокшетау',
	'Талдыкорган',
	'Экибастуз',
	'Рудный'
]
const generateName = () => {
	return {
		name: Math.random().toString(36).substring(7),
		value: Math.round(Math.random() * 100)
	} 
}

const createTab = () => {
	let result = []
	while(Math.random() >= 0.5)
		result.push({
			content: generateName(),
			tabs: Math.random() >= 0.5 ? createTab() : []
		})
	return result
}

module.exports.generateCityes = () => {
	let result = cityes.map(x => {
		return {
			content: {
				name: x,
				value: Math.round(Math.random() * 100)
			},
			tabs: createTab()
		}
	})
	console.log(result)
	return result
}
