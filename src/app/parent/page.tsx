import Child from './child/page';

const Parent = () => {
  return (
    <>
      <Child name="ali" gender="male" age={25} />
    </>
  );
};

export default Parent;
