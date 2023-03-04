import { TitleSize } from "./TitleSize";

const Title: React.FC<TitleProperties> = ({ title, titleSize }) => {
  const determineTitle = (): JSX.Element => {
    switch (titleSize) {
      case TitleSize.One: {
        return <h1 className="title is-1">{title}</h1>;
      }
      case TitleSize.Two: {
        return <h2 className="title is-2">{title}</h2>;
      }
      case TitleSize.Three: {
        return <h3 className="title is-3">{title}</h3>;
      }
      case TitleSize.Four: {
        return <h4 className="title is-4">{title}</h4>;
      }
      case TitleSize.Five: {
        return <h5 className="title is-5">{title}</h5>;
      }
      case TitleSize.Six: {
        return <h6 className="title is-6">{title}</h6>;
      }
      default: {
        return <h6 className="title is-6">{title}</h6>;
      }
    }
  };

  return determineTitle();
};

interface TitleProperties {
  title: string;
  titleSize: TitleSize;
}

export default Title;
