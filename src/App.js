import AsyncComp from "./components/AsyncComp";
import ClickOutSideComp from "./components/ClickOutSideComp";
import CookieComp from "./components/CookieComp";
import CopyToClipboardComp from "./components/CopyToClipboardComp";
import DarkModeComp from "./components/DarkModeComp";
import DebounceComp from "./components/DebounceComp";
import DeepCompareEffect from "./components/DeepCompareEffectComp";
import EffectOnceComp from "./components/EffectOnceComp";
import EventListenerComp from "./components/EventListenerComp";
import ExitPromptComp from "./components/ExitPromptComp";
import GeolocationComp from "./components/GeolocationComp";
import MediaQueryComp from "./components/MediaQueryComp";
import OnScreenComp from "./components/OnScreenComp";
import PreviousComp from "./components/PreviousComp";
import SizeComp from "./components/SizeComp";
import StateWithHistoryComp from "./components/StateWithHistoryComp";
import StateWithValidationComp from "./components/StateWithValidationComp";
import TimeOutComp from "./components/TimeOutComp";
import ToggleComp from "./components/ToggleComp";
import TranslationComp from "./components/TranslationComp";
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
      {/* <EffectOnceComp /> */}

      <br /> <br />
      <ClickOutSideComp />

      <br /> <br />
      <DarkModeComp />

      <br /> <br />
      <CopyToClipboardComp />

      <br /> <br />
      <CookieComp />

      <br /> <br />
      <TranslationComp />

      <br /> <br />
      <ExitPromptComp />
    </>
  );
}

export default App;
