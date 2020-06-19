// export const fetchLocationId = async city => {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3a2a56b8ef7c636b609ba31acd020cb1`,
//     );
//     const locations = await response.json();
//     return locations.city.id;
//   };

export const fetchLatLon = async city => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3a2a56b8ef7c636b609ba31acd020cb1`);
  const locations = await response.json();
  return {
    id: locations.city.id,
    name: locations.city.name,
    lat: locations.city.coord.lat,
    lon: locations.city.coord.lon,
    temp_1: locations.list[1].main.temp,
    temp_2: locations.list[2].main.temp,
    temp_3: locations.list[4].main.temp,
    icon_1: locations.list[1].weather[0].icon,
    icon_2: locations.list[2].weather[0].icon,
    icon_3: locations.list[4].weather[0].icon,
    time_1: locations.list[1].dt_txt,
    time_2: locations.list[2].dt_txt,
    time_3: locations.list[4].dt_txt,

  };
};

export const fetchWeather = async (lat,lon) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&%20exclude=hourly,daily&appid=3a2a56b8ef7c636b609ba31acd020cb1`,
      );
  const data = await response.json();

  return {
    weather: data.current.weather[0].description,
    temperature: data.current.temp,
    visibility: data.current.visibility,
    wind: data.current.wind_speed,
    humidity: data.current.humidity,
    icon: data.current.weather[0].icon,
    pressure: data.current.pressure,
  };
}

// export const fetchDetailWeather = async (lat,lon) => {
//   const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&%20exclude=hourly,daily&appid=3a2a56b8ef7c636b609ba31acd020cb1`,
//       );
//   const detail = await response.json();
//   return {
//     report:{
//       hour:[detail.hourly[1],detail.hourly[2],detail.hourly[3],detail.hourly[4],detail.hourly[5],detail.hourly[6], detail.hourly[7], detail.hourly[8], detail.hourly[9], detail.hourly[10], detail.hourly[11], detail.hourly[12]],
//       day:[detail.daily[1],detail.daily[2],detail.daily[3],detail.daily[4],detail.daily[5],detail.daily[6],detail.daily[7]]
//     }


//   }
// }

  

    // report: {
    //   hour: [data.hourly[1], data.hourly[2], data.hourly[3], data.hourly[4], data.hourly[5], data.hourly[6], data.hourly[7], data.hourly[8], data.hourly[9], data.hourly[10], data.hourly[11], data.hourly[12]],
    //   day: [data.daily[1], data.daily[2], data.daily[3], data.daily[4],data.daily[5], data.daily[6], data.daily[7]]
    // }

  // export const fetchDayWeather = async (lat,lon) => {
  //   const response = await fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
  //   exclude=hourly,daily&appid=3a2a56b8ef7c636b609ba31acd020cb1`);
  //   const day = await response.json();

  //   return{
  //     report:{
  //       temperature_day: day.daily.temp.day,
  //       icon_day: day.daily.weather[0].icon,
  //       weather_day: day.daily.weather[0].description
  //     }
  //   }

  // }
  