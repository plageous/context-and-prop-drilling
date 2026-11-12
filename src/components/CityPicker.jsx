import { useContext } from "react";
import { CityContext } from "../context/CityContext.jsx";
import forecasts from "../data/forecasts.json";

function CityPicker() {
  const { cityId, setCityId } = useContext(CityContext);

  return (
    <label className="city-picker">
      City
      <select value={cityId} onChange={(e) => setCityId(e.target.value)}>
        {forecasts.map((forecast) => (
          <option key={forecast.id} value={forecast.id}>
            {forecast.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default CityPicker;
