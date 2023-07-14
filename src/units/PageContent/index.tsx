// Styles
import styles from './index.module.scss';

// Libs
import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren


const PageContent: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div
      className={styles.layoutContent}
    >
      {children}
    </div>
  );
};

export default PageContent;
