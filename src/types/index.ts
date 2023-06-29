export type ButtonType = {
  name: string;
  type?: boolean;
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
