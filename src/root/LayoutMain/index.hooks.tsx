// Libs
import { useMemo } from 'react'
import { MenuProps } from 'src/antd'

// Constants
import { AppRoutes } from 'src/initializers/createRoutes'

// Hooks
import { useAppTranslation } from 'src/hooks/translation'

// Local types
type MenuItems = NonNullable<MenuProps['items']>
type MenuItem = NonNullable<MenuItems[number]>
type MenuItemKeyToKeyPathMap = Record<string, string[]>

// Local helpers

export function useHeaderItems(): MenuProps['items'] {
  const t = useAppTranslation()

  return [
    {
      key: AppRoutes.settings.path,
      label: t('root.LayoutMain.Header.items.settings'),
    },
  ]
}

export function useSiderItems(): MenuProps['items'] {
  const t = useAppTranslation()
  return [
    {
      key: 'posts',
      label: t('root.LayoutMain.Sider.items.posts.title'),
      children: [
        {
          key: AppRoutes.postsList.path,
          label: t('root.LayoutMain.Sider.items.postsList.title'),
        },
        {
          key: AppRoutes.postsCreate.path,
          label: t('root.LayoutMain.Sider.items.postsCreate.title'),
        },
      ],
    },
    {
      key: 'other',
      label: t('root.LayoutMain.Sider.items.other.title'),
      children: [
        {
          key: AppRoutes.usersLogout.path,
          label: t('root.LayoutMain.Sider.items.usersLogout.title'),
        },
      ],
    },
  ]
}

export function createMenuItemKeyToKeyPathMap(
  menuItems: MenuProps['items'],
  menuItemsKeyPaths: string[] = []
): MenuItemKeyToKeyPathMap {
  if (!menuItems) return {}
  const indexedItems: MenuItemKeyToKeyPathMap = {}
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i]
    if (!menuItem) continue
    if (typeof menuItem['key'] === 'undefined') {
      throw new Error(
        `Menu item.key should be present for ${JSON.stringify(menuItem)}`
      )
    }
    const nextMenuItemsKeyPath = [...menuItemsKeyPaths, menuItem.key.toString()]
    indexedItems[menuItem.key] = nextMenuItemsKeyPath
    if ('children' in menuItem) {
      const menuItemChildren = menuItem.children as MenuItem[]
      Object.assign(
        indexedItems,
        createMenuItemKeyToKeyPathMap(menuItemChildren, nextMenuItemsKeyPath)
      )
    }
  }
  return indexedItems
}

// Local hooks

export function useAntdMenuDefaultOpenKeys(
  locationPath?: string,
  menuItems?: MenuProps['items']
): string[] | undefined {
  if (!locationPath || !menuItems) return
  const keyToKeyPathsMap = useMemo(() => {
    return createMenuItemKeyToKeyPathMap(menuItems)
  }, [menuItems])
  return keyToKeyPathsMap[locationPath]
}

export function useAntdMenuDefaultSelectedKeys(
  locationPath?: string
): string[] {
  if (!locationPath) return []
  return [locationPath]
}
