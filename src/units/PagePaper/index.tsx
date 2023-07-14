// Styles
import styles from './index.module.scss';

// Libs
import { PropsWithChildren } from 'react';
import { Layout, theme } from 'src/antd';

export type Props = PropsWithChildren

const PagePaper: React.FC<Props> = (props) => {
  const { children } = props;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      className={styles.layoutContent}
      style={{
        background: colorBgContainer,
      }}
    >
      {children}
    </Layout>
  );
};

export default PagePaper;
