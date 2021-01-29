for(let i = 0; i < profiles.length; i++) {
	axios
		.get(profiles[i])
		.then(response => {
			if (response.data.type != 'disambiguation') {
				peopleData.push(response.data)
			}
			return peopleData
		})
		.then(peopleData => {
			console.log(peopleData)
			const data = 'Mike';
			commit('setPeopleData', data)
		})
}