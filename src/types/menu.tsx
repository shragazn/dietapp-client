export type TMenu = {
  title: string;
  menuOptions: menuOption[];
};

export type menuOption = {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (...args: any[]) => any;
};
