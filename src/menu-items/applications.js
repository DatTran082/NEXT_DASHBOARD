// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  BuildOutlined,
  CalendarOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  MessageOutlined,
  ToolOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  AppstoreAddOutlined
} from '@ant-design/icons';

// icons
const icons = {
  BuildOutlined,
  CalendarOutlined,
  CustomerServiceOutlined,
  MessageOutlined,
  ToolOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  AppstoreAddOutlined,
  FileTextOutlined
};

// ==============================|| MENU ITEMS - APPLICATIONS ||============================== //

const applications = {
  id: 'group-applications',
  title: <FormattedMessage id="applications" />,
  icon: icons.AppstoreAddOutlined,
  type: 'group',
  children: [
    {
      id: 'tools',
      title: <FormattedMessage id="tools" />,
      type: 'collapse',
      icon: icons.ToolOutlined,
      children: [
        {
          id: 'json',
          title: <FormattedMessage id="json" />,
          type: 'item',
          url: '/apps/tools/json'
        },
        {
          id: 'text',
          title: <FormattedMessage id="text" />,
          type: 'item',
          url: '/apps/tools/text'
        }
      ]
    },
    {
      id: 'chat',
      title: <FormattedMessage id="chat" />,
      type: 'item',
      url: '/apps/chat',
      icon: icons.MessageOutlined,
      breadcrumbs: false
    },
    {
      id: 'calendar',
      title: <FormattedMessage id="calendar" />,
      type: 'item',
      url: '/apps/calendar',
      icon: icons.CalendarOutlined
    },
    {
      id: 'kanban',
      title: <FormattedMessage id="kanban" />,
      type: 'item',
      icon: BuildOutlined,
      url: '/apps/kanban/board'
    },
    {
      id: 'customer',
      title: <FormattedMessage id="customer" />,
      type: 'collapse',
      icon: icons.CustomerServiceOutlined,
      children: [
        {
          id: 'customer-list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/apps/customer/list'
        },
        {
          id: 'customer-card',
          title: <FormattedMessage id="cards" />,
          type: 'item',
          url: '/apps/customer/card'
        }
      ]
    },
    {
      id: 'invoice',
      title: <FormattedMessage id="invoice" />,
      url: '/apps/invoice/dashboard',
      type: 'collapse',
      icon: icons.FileTextOutlined,
      breadcrumbs: true,
      children: [
        {
          id: 'create',
          title: <FormattedMessage id="create" />,
          type: 'item',
          url: '/apps/invoice/create'
        },
        {
          id: 'details',
          title: <FormattedMessage id="details" />,
          type: 'item',
          url: '/apps/invoice/details/1'
        },
        {
          id: 'list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/apps/invoice/list'
        },
        {
          id: 'edit',
          title: <FormattedMessage id="edit" />,
          type: 'item',
          url: '/apps/invoice/edit/1'
        }
      ]
    },
    {
      id: 'profile',
      title: <FormattedMessage id="profile" />,
      type: 'collapse',
      icon: icons.UserOutlined,
      children: [
        {
          id: 'user-profile',
          title: <FormattedMessage id="user-profile" />,
          type: 'item',
          url: '/apps/profiles/user/personal',
          breadcrumbs: false
        },
        {
          id: 'account-profile',
          title: <FormattedMessage id="account-profile" />,
          type: 'item',
          url: '/apps/profiles/account/basic'
        }
      ]
    },
    {
      id: 'e-commerce',
      title: <FormattedMessage id="e-commerce" />,
      type: 'collapse',
      icon: icons.ShoppingCartOutlined,
      children: [
        {
          id: 'products',
          title: <FormattedMessage id="products" />,
          type: 'item',
          url: '/apps/e-commerce/products'
        },
        {
          id: 'product-details',
          title: <FormattedMessage id="product-details" />,
          type: 'item',
          url: '/apps/e-commerce/product-details/1',
          breadcrumbs: false
        },
        {
          id: 'product-list',
          title: <FormattedMessage id="product-list" />,
          type: 'item',
          url: '/apps/e-commerce/products-list',
          breadcrumbs: false
        },
        {
          id: 'add-new-product',
          title: <FormattedMessage id="add-new-product" />,
          type: 'item',
          url: '/apps/e-commerce/add-product'
        },
        {
          id: 'checkout',
          title: <FormattedMessage id="checkout" />,
          type: 'item',
          url: '/apps/e-commerce/checkout'
        }
      ]
    }
  ]
};

export default applications;
