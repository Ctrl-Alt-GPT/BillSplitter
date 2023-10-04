import '../../styles/Card.css';

const Card = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: React.ReactNode;
}) => {
  const classes = 'card ' + className;

  return <div className={classes}>{children}</div>;
};

export default Card;
