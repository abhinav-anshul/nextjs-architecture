export type Props = {
  name: string;
  gender: 'male' | 'female';
  salary?: number;
  weight?: number;
};

//    they are not logicaly link with male and female
//    how we can check wheater its male or female

export type MaleProps = {
  gender: 'male';
  age: number;
};

export type FemaleProps = {
  gender: 'female';
  salary: number;
};

export type PersonStatusProps = {
  name: string;
} & (MaleProps | FemaleProps);
