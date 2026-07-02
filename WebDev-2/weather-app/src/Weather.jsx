// useState lets this component remember values like the city, weather result, loading state, and error message.
// useEffect lets this component run code automatically when the component first appears on the page.
import { useEffect, useState } from "react";

// This imports the CSS file that styles the HTML/JSX elements returned by this component.
import "./Weather.css";

// These imports turn image files into JavaScript variables that can be used inside <img src={...} />.
import searchIcon from "./assets/search.png";
import clearIcon from "./assets/clear.png";
import cloudIcon from "./assets/cloud.png";
import drizzleIcon from "./assets/drizzle.png";
import rainIcon from "./assets/rain.png";
import snowIcon from "./assets/snow.png";
import windIcon from "./assets/wind.png";
import humidityIcon from "./assets/humidity.png";

// This reads your OpenWeather API key from the Vite environment variable named VITE_APP_ID.
// import.meta.env is how Vite exposes environment variables to frontend code.
const apiKey = import.meta.env.VITE_APP_ID;

// This object is like a dictionary: each OpenWeather icon code points to one image in our app.
// Example: if the API says the weather icon is "10d", our app will show rainIcon.
const weatherIcons = {
  // "01d" means clear sky during the day.
  "01d": clearIcon,
  // "01n" means clear sky at night.
  "01n": clearIcon,
  // "02d" means a few clouds during the day.
  "02d": cloudIcon,
  // "02n" means a few clouds at night.
  "02n": cloudIcon,
  // "03d" means scattered clouds during the day.
  "03d": cloudIcon,
  // "03n" means scattered clouds at night.
  "03n": cloudIcon,
  // "04d" means broken clouds during the day.
  "04d": cloudIcon,
  // "04n" means broken clouds at night.
  "04n": cloudIcon,
  // "09d" means shower rain during the day.
  "09d": drizzleIcon,
  // "09n" means shower rain at night.
  "09n": drizzleIcon,
  // "10d" means rain during the day.
  "10d": rainIcon,
  // "10n" means rain at night.
  "10n": rainIcon,
  // "11d" means thunderstorm during the day, and this app reuses the rain image for it.
  "11d": rainIcon,
  // "11n" means thunderstorm at night, and this app reuses the rain image for it.
  "11n": rainIcon,
  // "13d" means snow during the day.
  "13d": snowIcon,
  // "13n" means snow at night.
  "13n": snowIcon,
  // "50d" means mist/fog during the day, and this app reuses the cloud image for it.
  "50d": cloudIcon,
  // "50n" means mist/fog at night, and this app reuses the cloud image for it.
  "50n": cloudIcon,
};

// Weather is a React component, which means it is a function that returns UI.
const Weather = () => {
  // city stores the text currently typed in the search input.
  // setCity is the function used to change city.
  // useState("") means the input starts as an empty string.
  const [city, setCity] = useState("");

  // weatherData stores the cleaned-up weather information we want to show on the screen.
  // setWeatherData changes weatherData.
  // useState(null) means there is no weather result yet when the component first starts.
  const [weatherData, setWeatherData] = useState(null);

  // loading tells React whether the app is currently waiting for the API response.
  // setLoading changes loading.
  // false means "we are not loading right now".
  const [loading, setLoading] = useState(false);

  // error stores an error message, for example when the city is empty or the API fails.
  // setError changes error.
  // "" means there is no error message at the start.
  const [error, setError] = useState("");

  // search is an async function because it waits for the weather API using await.
  // cityName is the city this function should search for.
  const search = async (cityName) => {
    // trim() removes extra spaces from the beginning and end of the city name.
    // Example: "  Mumbai  " becomes "Mumbai".
    const trimmedCity = cityName.trim();

    // !trimmedCity means "if trimmedCity is empty".
    // This prevents the app from searching when the user did not type a city.
    if (!trimmedCity) {
      // This puts a friendly error message into the error state.
      // When error has text, React shows it in the return section below.
      setError("Please enter a city name.");

      // return stops the search function here, so the API is not called.
      return;
    }

    // !apiKey means "if the API key is missing".
    // Without the key, OpenWeather will not allow this app to request weather data.
    if (!apiKey) {
      // This saves an error message telling the user/developer what is wrong.
      setError("Weather API key is missing.");

      // return stops the function because there is no point calling the API without a key.
      return;
    }

    // try contains the code that might fail, such as calling the API.
    try {
      // setLoading(true) means "we are now waiting for data".
      // This makes the Loading... message appear in the UI.
      setLoading(true);

      // setError("") clears any old error before starting a new search.
      setError("");

      // This builds the full API URL.
      // encodeURIComponent safely puts the city name into a URL, even if the city has spaces.
      // units=metric means temperatures come back in Celsius.
      // appid=${apiKey} sends your API key to OpenWeather.
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        trimmedCity
      )}&units=metric&appid=${apiKey}`;

      // fetch(url) sends a network request to OpenWeather.
      // await means JavaScript waits here until the response arrives.
      const response = await fetch(url);

      // response.json() converts the API response from JSON text into a JavaScript object.
      // The data object now contains properties like main, wind, weather, and name.
      const data = await response.json();

      // response.ok is true for successful responses like 200.
      // If it is false, the city might be invalid or the API request might have failed.
      if (!response.ok) {
        // throw creates an error and jumps to the catch block below.
        // data.message is the message sent by the API; the second string is a backup message.
        throw new Error(data.message || "Could not find weather data.");
      }

      // setWeatherData saves only the pieces of API data that this UI needs.
      // This is easier than passing the huge API object directly into the JSX.
      setWeatherData({
        // data.main.humidity is the humidity percentage from OpenWeather.
        humidity: data.main.humidity,

        // data.wind.speed is the wind speed from OpenWeather.
        windSpeed: data.wind.speed,

        // data.main.temp is the temperature.
        // Math.round(...) removes decimals, so 28.6 becomes 29.
        temperature: Math.round(data.main.temp),

        // data.name is the city/location name returned by the API.
        location: data.name,

        // data.weather is an array because the API can return multiple weather conditions.
        // [0] means "take the first item in that array".
        // description is text like "clear sky" or "light rain".
        description: data.weather[0].description,

        // data.weather[0].icon is an OpenWeather icon code like "01d" or "10n".
        // weatherIcons[...] looks up the matching local image for that code.
        // || clearIcon means "if no matching image is found, use clearIcon as the default".
        icon: weatherIcons[data.weather[0].icon] || clearIcon,
      });
      // catch runs if anything inside try fails, including fetch errors or the throw above.
    } catch (err) {
      // If the search failed, remove the old weather data so stale information is not shown.
      setWeatherData(null);

      // err.message contains the error text, and we save it so the UI can display it.
      setError(err.message);
      // finally always runs after try or catch, whether the search succeeded or failed.
    } finally {
      // setLoading(false) means "we are finished waiting".
      // This hides the Loading... message.
      setLoading(false);
    }
  };

  // handleSubmit runs when the user submits the search form.
  const handleSubmit = (event) => {
    // preventDefault stops the browser from refreshing the page after the form is submitted.
    event.preventDefault();

    // This calls our search function using the current value stored in city.
    search(city);
  };

  // useEffect runs after React puts this component on the screen for the first time.
  useEffect(() => {
    // This automatically loads Mumbai weather when the app first opens.
    search("Mumbai");
    // The empty array [] means this effect should run only once, not after every re-render.
  }, []);

  // The return statement describes what this component should show on the page.
  // JSX looks like HTML, but it is actually JavaScript syntax used by React.
  return (
    // This main div wraps the whole weather card.
    // className connects this element to the .weather styles in Weather.css.
    <div className="weather">
      {/* This form contains the search input and search button. */}
      {/* onSubmit={handleSubmit} means handleSubmit runs when the user presses Enter or clicks the submit button. */}
      <form className="search-bar" onSubmit={handleSubmit}>
        {/* This input lets the user type a city name. */}
        <input
          // type="text" means this is a normal text input.
          type="text"
          // placeholder is the grey hint text shown when the input is empty.
          placeholder="Enter city name"
          // value={city} makes this a controlled input, meaning React state controls what is displayed.
          value={city}
          // onChange runs every time the user types.
          // event.target.value is the latest text inside the input.
          // setCity(...) saves that text in the city state.
          onChange={(event) => setCity(event.target.value)}
        />
        {/* This button submits the form. */}
        <button type="submit" aria-label="Search weather">
          {/* This image shows the search icon inside the button. alt="" means screen readers can ignore this decorative image. */}
          <img src={searchIcon} alt="" />
        </button>
      </form>

      {/* loading && means "show the paragraph only if loading is true". */}
      {loading && <p className="status-message">Loading...</p>}

      {/* error && means "show the paragraph only if error contains a message". */}
      {error && <p className="status-message error-message">{error}</p>}

      {/* !loading means "not loading". */}
      {/* weatherData means "we have weather data to show". */}
      {/* So this whole block appears only when loading is false and weatherData exists. */}
      {!loading && weatherData && (
        /* <>...</> is a React Fragment.
           It groups multiple elements together without adding an extra div to the HTML. */
        <>
          {/* This displays the main weather icon chosen in setWeatherData above. */}
          <img
            // src points to the image file to display.
            src={weatherData.icon}
            // alt describes the image for screen readers, using text like "clear sky".
            alt={weatherData.description}
            // className applies the .weather-icon styles from Weather.css.
            className="weather-icon"
          />
          {/* This displays the rounded temperature, followed by the Celsius symbol. */}
          <p className="temperature">{weatherData.temperature}°C</p>

          {/* This displays the city/location name returned by the API. */}
          <p className="location">{weatherData.location}</p>

          {/* This displays the weather description, such as "clear sky". */}
          <p className="description">{weatherData.description}</p>

          {/* This div groups the smaller humidity and wind information. */}
          <div className="weather-data">
            {/* This column shows humidity information. */}
            <div className="col">
              {/* Decorative humidity icon. */}
              <img src={humidityIcon} alt="" />
              {/* This div groups the humidity number and label together. */}
              <div>
                {/* Shows the humidity percentage from weatherData. */}
                <p>{weatherData.humidity}%</p>
                {/* Label explaining what the number means. */}
                <span>Humidity</span>
              </div>
            </div>

            {/* This column shows wind speed information. */}
            <div className="col">
              {/* Decorative wind icon. */}
              <img src={windIcon} alt="" />
              {/* This div groups the wind speed number and label together. */}
              <div>
                {/* Shows the wind speed from weatherData, followed by meters per second. */}
                <p>{weatherData.windSpeed} m/s</p>
                {/* Label explaining what the number means. */}
                <span>Wind speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// This exports the Weather component so another file, usually App.jsx, can import and render it.
export default Weather;
