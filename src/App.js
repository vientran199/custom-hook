import AsyncComp from "./components/AsyncComp";
import DebounceComp from "./components/DebounceComp";
import DeepCompareEffect from "./components/DeepCompareEffectComp";
import EffectOnceComp from "./components/EffectOnceComp";
import EventListenerComp from "./components/EventListenerComp";
import GeolocationComp from "./components/GeolocationComp";
import MediaQueryComp from "./components/MediaQueryComp";
import OnScreenComp from "./components/OnScreenComp";
import PreviousComp from "./components/PreviousComp";
import SizeComp from "./components/SizeComp";
import StateWithHistoryComp from "./components/StateWithHistoryComp";
import StateWithValidationComp from "./components/StateWithValidationComp";
import TimeOutComp from "./components/TimeOutComp";
import ToggleComp from "./components/ToggleComp";
import WindowSizeComp from "./components/WindowSizeComp";
import useLocalStorage from "./hooks/useLocalStorage";
import useUpdateLogger from "./hooks/useUpdateLogger";

function App() {
  const [name, setName] = useLocalStorage('name', '')
  useUpdateLogger(name)

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />

      <br /> <br />

      <ToggleComp />

      <br /> <br />

      <TimeOutComp />

      <br /> <br />
      <DebounceComp />

      <br /> <br />
      <PreviousComp />

      <br /> <br />
      <StateWithHistoryComp />

      <br /> <br />
      <AsyncComp />

      <br /> <br />
      <DeepCompareEffect />

      <br /> <br />
      <EventListenerComp />

      <br /> <br />
      <OnScreenComp />

      <br /> <br />
      <WindowSizeComp />

      <br /> <br />
      <MediaQueryComp />

      <br /> <br />
      <GeolocationComp />

      <br /> <br />
      <StateWithValidationComp />

      <br /> <br />
      <SizeComp />

      <br /> <br />
      <EffectOnceComp />
    </>
  );
}

export default App;
