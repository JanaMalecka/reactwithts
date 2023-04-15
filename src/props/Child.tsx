interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export const ChildAsFCLonger: React.FunctionComponent<ChildProps> = ({
  color,
}) => {
  return <div>{color}</div>;
};

//few methods how to use interface

// 1. export const Child = ({ color }: ChildProps)
// TS understand that Child is a function that will receive an argument of type 'ChildProps'
// downside: TS doesn't understand that we are defining a React Component

//explicit component type annotation
// 2. export const ChildAsFC: React.FC<ChildProps> = ({ color })
// FC function component
// 'Child' will be a React function component, might have properties assigned to it like 'propTypes' and 'contextTypes'
// 'Child' will receive props object of type 'ChildProps' <ChildProps>

// error Property 'children' does not exist on type 'ChildProps'. - we now must include the children in the interface along with our other props: children?: React.ReactNode;
