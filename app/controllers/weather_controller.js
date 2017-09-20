let cities = [];
let id = 0;

module.exports = {
  create: ( request, response ) => {
    let {name, temp, high, low, weather, wind, icon} = request.body;
    cities.push({
      id: id++,
      name: name,
      temp: temp,
      high: high,
      low: low,
      weather: weather,
      wind: wind,
      icon: icon
    })
    response.send( cities );
  },

  read: ( request, response ) => {
    response.send( cities );
  },

  update: ( request, response ) => {
    response.send( cities );
  },

  delete: ( request, response ) => {
    let weatherId = request.params.id;

    for (var i = 0; i < cities.length; i++) {
      if (cities[i].id == weatherId) {
        cities.splice(i, 1);
        break;
      }
    }
    response.send( cities );
  }
};
