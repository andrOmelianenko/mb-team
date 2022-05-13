import s from './index.module.sass';

const Typography = (props) => {
  const {
    className = '',
    color = 'black', // black | white | gray_1 | gray_3
    size = 14, // 14 | 16 | 18 | 24 | 32 | 48
    weight = 'normal', // normal | bold
    component = 'p', // p | span | h1 | h2 | h3 | h4 | h5 | h6,
    align = 'left', // left | center | right
    children,
    ...other
  } = props;

  const styles = [
    s[`color_${color}`],
    s[`size_${size}`],
    s[`weight_${weight}`],
    s[`align_${align}`],
    className,
  ];

  const Component = component;

  return (
    <Component
      className={styles.join(' ')}
      {...other}
    >
      {children}
    </Component>
  );
};

export default Typography;
