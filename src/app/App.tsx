import { Outlet } from "react-router-dom";
import Title from "../common/elements/title/Title";
import { TitleSize } from "../common/elements/title/TitleSize";

const App: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default App;
