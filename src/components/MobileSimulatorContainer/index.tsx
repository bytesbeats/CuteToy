import "./style.css";

/**
 * @name MobileSimulatorContainerProps
 * @description MobileSimulatorContainer 组件的属性
 * @param {string} className - 类名
 * @param {React.CSSProperties} style - 样式
 */
export type MobileSimulatorContainerProps = {
  style?: React.CSSProperties;
  className?: string;
  children?: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNode[];
};

/**
 * @name 容器组件
 */
const MobileSimulatorContainer = (props: MobileSimulatorContainerProps) => {
  const { className, style, children } = props;
  return (
    <div className={`mobile ${className}`} style={style}>
      <div className="mobile-content">{children}</div>
    </div>
  );
};

export default MobileSimulatorContainer;
