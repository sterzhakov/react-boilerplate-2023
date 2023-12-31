const RU = {
  pages: {
    PostsFindAll: {
      title: 'Посты',
    },
    PostsFindOne: {
      title: 'Пост',
      columns: {
        id: { label: 'Id', },
        title: { label: 'Заголовок', },
        userId: { label: 'Id пользователя', },
        body: { label: 'Текст', },
      },
    },
    PostsUpdate: {
      title: 'Обновление поста',
      modules: {
        FormUpdate: {
          saveButton: 'Сохранить',
        }
      }
    },
    PostsCreate: {
      title: 'Создание поста',
      modules: {
        FormCreate: {
          saveButton: 'Создать',
        }
      }
    },
    SettingsUpdate: {
      title: 'Настройки',
      modules: {
        LocalForm: {
          title: 'Локальные настройки',
          saveButton: 'Сохранить',
          inputs: {
            locale: { title: 'Язык' }
          }
        }
      }
    },
  },
  entities: {
    Posts: {
      Descriptions: {
        title: 'Пост',
        items: {
          id: { label: 'Id' },
          userId: { label: 'Id пользователя' },
          title: { label: 'Заголовок' },
          body: { label: 'Текст' },
        }
      },
      Form: {
        saveButton: {
          title: 'Сохранить',
        },
        inputs: {
          title: { label: 'Заголовок', },
          userId: { label: 'Id пользователя', },
          body: { label: 'Текст', },
        },
      },
      Search: {
        searchButton: 'Искать',
        inputs: {
          userId: { label: 'Id пользователя', },
          title: { label: 'Заголовок', },
          body: { label: 'Текст', },
        },
      },
      Table: {
        columns: {
          id: { label: 'Id', },
          userId: { label: 'Id пользователя', },
          title: { label: 'Заголовок', },
          actions: { label: 'Действия', },
        },
        action: {
          edit: { label: 'Править' }
        }
      },
    },
    Settings: {
      Form: {
        saveButton: {
          title: 'Сохранить',
        },
      }
    }
  },
  units: {
    SiderLoader: {
      moduleIsLoading: 'Модуль загружается...',
    },
    PageLoader: {
      moduleIsLoading: 'Модуль загружается...',
    }
  },
  components: {},
  antd: {
    Table: {
      triggerDesc: 'Отсортировать по увыбанию',
      triggerAsc: 'Отсортировать по возрастанию',
      cancelSort: 'Отменить сортировку'
    }
  },
  root: {
    NotFound: {
      title: 'Страница не найдена',
      resultTitle: '404',
      resultTitleDescription: 'Страница которую вы ищите не существует.',
      resultTitleButton: 'Вернуться на главную',
    },
    AccessDenied: {
      title: 'Доступ запрещен',
      resultTitle: '403',
      resultTitleDescription: 'У вас нет прав для просмотра этой страницы',
      resultTitleButton: 'Вернуться на главную',
    },
    Initialize: {
      appLoading: 'Инициализация приложения...',
    },
    LayoutMain: {
      Header: {
        logo: {
          title: 'Админ'
        },
        items: {
          settings: 'Настройки'
        }
      },
      Sider: {
        items: {
          posts: { title: 'Посты' },
          postsList: { title: 'Все посты' },
          postsCreate: { title: 'Создать пост' },
          usersLogout: { title: 'Выйти' },
          other: { title: 'Другое' },
        }
      }
    }
  }
}

export default RU
