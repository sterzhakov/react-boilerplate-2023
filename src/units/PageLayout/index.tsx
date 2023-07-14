// Styles
import styles from './index.module.scss';

// Libs
import { PropsWithChildren } from 'react';
import { Layout } from 'src/antd';

// Local types
export type Props = PropsWithChildren;

const PageLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <Layout.Content
      className={styles.layout}
    >
      {children}
    </Layout.Content>
  );
};

export default PageLayout;
