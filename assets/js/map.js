// Map

	// map initialization - and address cordinates
	const map = L.map('map').setView([53.14489151258115, -1.202486721389562], 14)
	
	//osm layer
	const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		
	});
	
	osm.addTo(map)

	
	// map marker
	const marker = L.marker([53.14489151258115, -1.202486721389562])

	
	// marker popup
	const popup = marker.bindPopup("No Location name").openPopup()
	popup.addTo(map)
	
	// leaflet handlers
	map.scrollWheelZoom.disable()
	// map.dragging.disable()