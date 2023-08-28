export type ButtonType = {
  name: string;
  buttonStyle: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type CardDataType = {
  id: number;
  title: string;
  description: string;
};

export type CardDataTypeProps = {
  cardData: CardDataType[];
};

export type FooterDataType = {
  name: string;
  list: string[];
};

export type ShortenUrlFormType = {
  shortenUrl: string;
};
