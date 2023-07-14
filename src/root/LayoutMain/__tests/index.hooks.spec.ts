// Helpers
import { createMenuItemKeyToKeyPathMap } from '../index.hooks'

describe('Helpers for layout main', () => {
  it('createMenuItemKeyToKeyPathMap', () => {
    const MENU_ITEMS = [
      {
        key: 'postsGroup',
        label: 'Посты',
        children: [
          {
            key: 'postsList',
            label: 'Все посты',
          },
          {
            key: 'postsCreate',
            label: 'Создать пост',
          },
        ],
      },
      {
        key: 'usersGroup',
        label: 'Пользователь',
        children: [
          {
            key: 'usersLogout',
            label: 'Выйти',
          },
        ],
      },
    ]

    expect(createMenuItemKeyToKeyPathMap(MENU_ITEMS)).toEqual({
      postsGroup: ['postsGroup'],
      postsList: ['postsGroup', 'postsList'],
      postsCreate: ['postsGroup', 'postsCreate'],
      usersGroup: ['usersGroup'],
      usersLogout: ['usersGroup', 'usersLogout'],
    })
  })
})
