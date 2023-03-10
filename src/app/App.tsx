import { Outlet } from "react-router-dom";
import Title from "../common/elements/title/Title";
import { TitleSize } from "../common/elements/title/TitleSize";
import {
  useCreateStore,
  defaultApplicationState,
  applicationReducer,
  ApplicationContext,
} from "../stores";

const App: React.FC = () => {
  const store = useCreateStore(defaultApplicationState(), applicationReducer);

  return (
    <ApplicationContext.Provider value={store}>
      <header>
        <nav>
          <Title
            titleSize={TitleSize.One}
            title="Jungle Navigation Industries"
          />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </ApplicationContext.Provider>
  );
};

export default App;
