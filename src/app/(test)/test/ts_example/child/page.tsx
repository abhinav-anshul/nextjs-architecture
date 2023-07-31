import { PersonStatusProps } from '@/@types/example';

const Child = (props: PersonStatusProps) => {
  return (
    <div>
      <span>
        {props.gender}
        {props.name}
      </span>
    </div>
  );
};

export default Child;
