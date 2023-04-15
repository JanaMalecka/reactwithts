// import { Child } from './Child';
import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
      hgcdgh
    </ChildAsFC>
  );
};

export default Parent;
