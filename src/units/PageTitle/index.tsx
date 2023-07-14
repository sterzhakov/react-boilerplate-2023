// Libs
import { PropsWithChildren } from 'react';
import { Typography } from 'src/antd';

export type Props = PropsWithChildren;

const PageTitle: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <Typography.Title level={2}>
      {children}
    </Typography.Title>
  );
};

export default PageTitle;
