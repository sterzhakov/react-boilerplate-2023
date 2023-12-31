// Translation
import RU from './ru'

const EN: typeof RU = {
  pages: {
    PostsFindAll: {
      title: 'Posts',
    },
    PostsFindOne: {
      title: 'Post',
      columns: {
        id: { label: 'Id', },
        title: { label: 'Title', },
        userId: { label: 'UserId', },
        body: { label: 'Body', },
      },
    },
    PostsUpdate: {
      title: 'Post update',
      modules: {
        FormUpdate: {
          saveButton: 'Save',
        }
      }
    },
    PostsCreate: {
      title: 'Post create',
      modules: {
        FormCreate: {
          saveButton: 'Create',
        }
      }
    },
    SettingsUpdate: {
      title: 'Settings',
      modules: {
        LocalForm: {
          title: 'Local settings',
          saveButton: 'Save',
          inputs: {
            locale: { title: 'Language' }
          }
        }
      }
    },
  },
  entities: {
    Posts: {
      Descriptions: {
        title: 'Post',
        items: {
          id: { label: 'Id' },
          userId: { label: 'User id' },
          title: { label: 'Title' },
          body: { label: 'Body' },
        }
      },
      Form: {
        saveButton: {
          title: 'Save',
        },
        inputs: {
          title: { label: 'Title', },
          userId: { label: 'UserId', },
          body: { label: 'Body', },
        },
      },
      Search: {
        searchButton: 'Search',
        inputs: {
          userId: { label: 'User id', },
          title: { label: 'Title', },
          body: { label: 'Body', },
        },
      },
      Table: {
        columns: {
          id: { label: 'Id', },
          userId: { label: 'User id', },
          title: { label: 'Title', },
          actions: { label: 'Acions', },
        },
        action: {
          edit: { label: 'Edit' }
        }
      },
    },
    Settings: {
      Form: {
        saveButton: {
          title: 'Save',
        },
      }
    }
  },
  units: {
    SiderLoader: {
      moduleIsLoading: 'Module loading...',
    },
    PageLoader: {
      moduleIsLoading: 'Module loading...',
    }
  },
  components: {},
  antd: {
    Table: {
      triggerDesc: 'Descend sort text',
      triggerAsc: 'Ascend sort text',
      cancelSort: 'Cancel sort text'
    }
  },
  root: {
    NotFound: {
      title: 'Page not found',
      resultTitle: '404',
      resultTitleDescription: 'The page you are looking for does not exist.',
      resultTitleButton: 'Go to the main page',
    },
    AccessDenied: {
      title: 'Access denied',
      resultTitle: '403',
      resultTitleDescription: 'You are not authorized to view this page',
      resultTitleButton: 'Go to the main page',
    },
    Initialize: {
      appLoading: 'Initializing app...',
    },
    LayoutMain: {
      Header: {
        logo: {
          title: 'Admin'
        },
        items: {
          settings: 'Settings'
        }
      },
      Sider: {
        items: {
          posts: { title: 'Posts' },
          postsList: { title: 'Posts all' },
          postsCreate: { title: 'Post create' },
          usersLogout: { title: 'Logout' },
          other: { title: 'Other' },
        }
      }
    }
  }
}

export default EN
