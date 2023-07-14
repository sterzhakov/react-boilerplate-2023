// Styles
import styles from './index.module.scss'

// Libs
import { Layout, Menu, theme, Typography, MenuProps, Button } from 'src/antd'
import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { Outlet, useMatches, useNavigate } from 'react-router'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import classNames from 'classnames'

// Constants
import { isAppRoute } from '../../initializers/createRoutes/index.helpers'

// Hooks
import { useAppTranslation } from 'src/hooks/translation'
import {
  useAntdMenuDefaultOpenKeys,
  useAntdMenuDefaultSelectedKeys,
  useHeaderItems,
  useSiderItems,
} from './index.hooks'

// Initializers
import { AppRoutes } from 'src/initializers/createRoutes'

type Props = PropsWithChildren

const LayoutMain: React.FC<Props> = () => {
  // Inits
  const {
    token: { colorBgContainer, colorWhite },
  } = theme.useToken()

  const [isSiderMenuCollapsed, setIsSiderMenuCollapsed] = useState(false)
  const navigate = useNavigate()
  const routeMatches = useMatches()
  const t = useAppTranslation()
  const lastMatch = routeMatches.at(-1)

  const headerItems = useHeaderItems()
  const siderItems = useSiderItems()

  const headerSelectedKeys = useAntdMenuDefaultSelectedKeys(lastMatch?.pathname)
  const headerOpenKeys = useAntdMenuDefaultOpenKeys(
    lastMatch?.pathname,
    headerItems
  )
  const siderSelectedKeys = useAntdMenuDefaultSelectedKeys(lastMatch?.pathname)
  const siderOpenKeys = useAntdMenuDefaultOpenKeys(
    lastMatch?.pathname,
    siderItems
  )

  const handleLogoClick = useCallback(
    (_event: React.MouseEvent<HTMLDivElement>) => {
      navigate(AppRoutes.home.path)
    },
    []
  )

  const handleMenuCommonClick = useCallback<NonNullable<MenuProps['onClick']>>(
    (menuItem) => {
      if (isAppRoute(menuItem.key)) {
        const routeTo = menuItem.key
        return navigate(routeTo)
      }
    },
    []
  )

  const handleSiderMenuClick = useCallback<NonNullable<MenuProps['onClick']>>(
    (menuItem) => {
      handleMenuCommonClick(menuItem)
    },
    []
  )

  const handleHeaderMenuClick = useCallback<NonNullable<MenuProps['onClick']>>(
    (menuItem) => {
      handleMenuCommonClick(menuItem)
    },
    []
  )

  return (
    <Layout className={styles.layout}>
      <Layout.Header className={styles.header}>
        <Button
          type='text'
          className={classNames(styles.collapseButton, {
            [styles.collapseButtonIsCollapsed]: isSiderMenuCollapsed
          })}
          icon={
            isSiderMenuCollapsed ? (
              <MenuUnfoldOutlined
                className={styles.collapseButtonIcon}
              />
            ) : (
              <MenuFoldOutlined
                className={styles.collapseButtonIcon}
              />
            )
          }
          onClick={() => setIsSiderMenuCollapsed(!isSiderMenuCollapsed)}
        />
        <div className={styles.logo} onClick={handleLogoClick}>
          <Typography.Title level={3} style={{ color: colorWhite }}>
            {t('root.LayoutMain.Header.logo.title')}
          </Typography.Title>
        </div>
        <Menu
          className={styles.menu}
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={headerSelectedKeys}
          defaultOpenKeys={headerOpenKeys}
          selectedKeys={headerOpenKeys}
          openKeys={headerOpenKeys}
          onClick={handleHeaderMenuClick}
          items={headerItems}
        />
      </Layout.Header>
      <Layout>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={isSiderMenuCollapsed}
          breakpoint='lg'
          collapsedWidth={0}
          width={250}
          className={styles.sider}
          style={{ background: colorBgContainer }}
        >
            <Menu
              mode='inline'
              defaultSelectedKeys={siderSelectedKeys}
              defaultOpenKeys={siderOpenKeys}
              selectedKeys={siderOpenKeys}
              onClick={handleSiderMenuClick}
              className={styles.siderMenu}
              items={siderItems}
            />
          </Layout.Sider>
          {/* <ErrorBoundary
            fallbackRender={(props) => {

              return props.error.toString();
            }}
          > */}
          <Outlet />
          {/* </ErrorBoundary> */}
        </Layout>
    </Layout>
  )
}

export default LayoutMain
