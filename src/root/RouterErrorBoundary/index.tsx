// Libs
import { useRouteError } from 'react-router';
import { Result } from 'src/antd';

const RouterErrorBoundary: React.FC = () => {
  const error = useRouteError() as Error;

  return (
    <Result
      title={error?.name}
      subTitle={error?.message}
    >
      <pre>
        {error?.stack}
      </pre>
    </Result>
  )
}

export default RouterErrorBoundary;
