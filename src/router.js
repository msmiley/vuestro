/* global Vue */
import Router from 'vue-router';

import Dashboard from './pages/Dashboard';
import Charts from './pages/Charts';
import ChartsAreaChart from './pages/ChartsAreaChart';
import ChartsBarChart from './pages/ChartsBarChart';
import ChartsMap from './pages/ChartsMap';
import ChartsSankey from './pages/ChartsSankey';
import ChartsForceGraph from './pages/ChartsForceGraph';
import Buttons from './pages/Buttons';
import Pickers from './pages/Pickers';
import Pills from './pages/Pills';
import Inputs from './pages/Inputs';
import InputsSpinner from './pages/InputsSpinner';
import InputsText from './pages/InputsText';
import InputsSearch from './pages/InputsSearch';
import InputsMulti from './pages/InputsMulti';
import Containers from './pages/Containers';
import ContainersBreadcrumb from './pages/ContainersBreadcrumb';
import ContainersContainer from './pages/ContainersContainer';
import ContainersCard from './pages/ContainersCard';
import ContainersColumn from './pages/ContainersColumn';
import ContainersList from './pages/ContainersList';
import ContainersRow from './pages/ContainersRow';
import ContainersPanel from './pages/ContainersPanel';
import ContainersPanelScroll from './pages/ContainersPanelScroll';
import Popups from './pages/Popups';
import PopupsDropdown from './pages/PopupsDropdown';
import PopupsModal from './pages/PopupsModal';
import PopupsTooltip from './pages/PopupsTooltip';
import Data from './pages/Data';
import DataTable from './pages/DataTable';
import DynamicTable from './pages/DynamicTable';
import DataObjectBrowser from './pages/DataObjectBrowser';
import Typography from './pages/Typography';
import Plugin from './pages/Plugin';
import PluginDirectives from './pages/PluginDirectives';
import PluginMixins from './pages/PluginMixins';
import PluginColors from './pages/PluginColors';
import PluginFilters from './pages/PluginFilters';
import InputsEditor from './pages/InputsEditor';
import Example from './pages/Example';
import ExampleForms from './pages/ExampleForms';
import Settings from './pages/Settings';


Vue.use(Router);

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      meta: {
        title: 'Dashboard',
        sidebar: true,
        icon: 'tachometer-alt',
      },
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard,
    },
    {
      meta: {
        title: 'Containers',
        sidebar: true,
        icon: 'boxes',
      },
      name: 'containers',
      path: '/containers',
      component: Containers,
      children: [
        {
          meta: {
            title: 'Container',
            sidebar: true,
          },
          name: 'container',
          path: 'container',
          component: ContainersContainer,
        },
        {
          meta: {
            title: 'Cards',
            sidebar: true,
          },
          name: 'card-container',
          path: 'card-container',
          component: ContainersCard,
        },
        {
          meta: {
            title: 'Columns',
            sidebar: true,
          },
          name: 'column-container',
          path: 'column-container',
          component: ContainersColumn,
        },
        {
          meta: {
            title: 'Lists',
            sidebar: true,
          },
          name: 'list-container',
          path: 'list-container',
          component: ContainersList,
        },
        {
          meta: {
            title: 'Rows',
            sidebar: true,
          },
          name: 'row-container',
          path: 'row-container',
          component: ContainersRow,
        },
        {
          meta: {
            title: 'Panels',
            sidebar: true,
          },
          name: 'panel-container',
          path: 'panel-container',
          component: ContainersPanel,
        },
        {
          meta: {
            title: 'Panel Scroll',
            sidebar: true,
          },
          name: 'panel-scroll',
          path: 'panel-scroll',
          component: ContainersPanelScroll,
        },
        {
          meta: {
            title: 'Breadcrumb',
            sidebar: true,
          },
          name: 'breadcrumb',
          path: 'breadcrumb',
          component: ContainersBreadcrumb,
        },
      ],
    },
    {
      meta: {
        title: 'Charts',
        sidebar: true,
        icon: 'chart-area',
      },
      name: 'charts',
      path: '/charts',
      component: Charts,
      children: [
        {
          meta: {
            title: 'Area Chart',
            sidebar: true,
          },
          name: 'area-chart',
          path: 'area-chart',
          component: ChartsAreaChart,
        },
        {
          meta: {
            title: 'Bar Chart',
            sidebar: true,
          },
          name: 'bar-chart',
          path: 'bar-chart',
          component: ChartsBarChart,
        },
        {
          meta: {
            title: 'Sankey',
            sidebar: true,
          },
          name: 'sankey-charts',
          path: 'sankey-charts',
          component: ChartsSankey,
        },
        {
          meta: {
            title: 'Force Graph',
            sidebar: true,
          },
          name: 'force-graph',
          path: 'force-graph',
          component: ChartsForceGraph,
        },
        {
          meta: {
            title: 'Map',
            sidebar: true,
          },
          name: 'map',
          path: 'map',
          component: ChartsMap,
        },
      ]
    },
    {
      meta: {
        title: 'Buttons',
        sidebar: true,
        icon: 'th',
        scrollTop: 0,
      },
      name: 'buttons',
      path: '/buttons',
      component: Buttons,
    },
    {
      meta: {
        title: 'Pickers',
        sidebar: true,
        icon: 'hand-point-left',
        scrollTop: 0,
      },
      name: 'pickers',
      path: '/pickers',
      component: Pickers,
    },
    {
      meta: {
        title: 'Popups',
        sidebar: true,
        icon: 'layer-group',
      },
      name: 'popups',
      path: '/popups',
      component: Popups,
      children: [
        {
          meta: {
            title: 'Dropdown',
            sidebar: true,
          },
          name: 'dropdown',
          path: 'dropdown',
          component: PopupsDropdown,
        },
        {
          meta: {
            title: 'Modal',
            sidebar: true,
          },
          name: 'modal',
          path: 'modal',
          component: PopupsModal,
        },
        {
          meta: {
            title: 'Tooltips',
            sidebar: true,
          },
          name: 'tooltip',
          path: 'tooltip',
          component: PopupsTooltip,
        },
      ]
    },
    {
      meta: {
        title: 'Pills',
        sidebar: true,
        icon: 'capsules',
      },
      name: 'pills',
      path: '/pills',
      component: Pills,
    },
    {
      meta: {
        title: 'Typography',
        sidebar: true,
        icon: 'font',
      },
      name: 'typography',
      path: '/typography',
      component: Typography,
    },
    {
      meta: {
        title: 'Data',
        sidebar: true,
        icon: 'table',
      },
      name: 'datacontainers',
      path: '/datacontainers',
      component: Data,
      children: [
        {
          meta: {
            title: 'Table',
            sidebar: true,
          },
          name: 'table',
          path: 'table',
          component: DataTable,
        },
        {
          meta: {
            title: 'Dynamic Table',
            sidebar: true,
          },
          name: 'dynamic-table',
          path: 'dynamic-table',
          component: DynamicTable,
        },
        {
          meta: {
            title: 'Object Browser',
            sidebar: true,
          },
          name: 'object-browser',
          path: 'object-browser',
          component: DataObjectBrowser,
        },
      ]
    },
    {
      meta: {
        title: 'Inputs',
        sidebar: true,
        icon: 'i-cursor',
      },
      name: 'inputs',
      path: '/inputs',
      component: Inputs,
      children: [
        {
          meta: {
            title: 'Text',
            sidebar: true,
          },
          name: 'inputs-text',
          path: 'inputs-text',
          component: InputsText,
        },
        {
          meta: {
            title: 'Spinner',
            sidebar: true,
          },
          name: 'inputs-spinner',
          path: 'inputs-spinner',
          component: InputsSpinner,
        },
        {
          meta: {
            title: 'Search',
            sidebar: true,
          },
          name: 'inputs-search',
          path: 'inputs-search',
          component: InputsSearch,
        },
        {
          meta: {
            title: 'Multi',
            sidebar: true,
          },
          name: 'inputs-multi',
          path: 'inputs-multi',
          component: InputsMulti,
        },
        {
          meta: {
            title: 'Editor',
            sidebar: true,
          },
          name: 'inputs-editor',
          path: 'inputs-editor',
          component: InputsEditor,
        },
      ]
    },
    {
      meta: {
        title: 'Example UIs',
        sidebar: true,
        icon: 'puzzle-piece',
      },
      name: 'example',
      path: '/example',
      component: Example,
      children: [
        {
          meta: {
            title: 'Forms',
            sidebar: true,
          },
          name: 'example-forms',
          path: 'example-forms',
          component: ExampleForms,
        },
      ]
    },
    {
      meta: {
        title: 'Plugin',
        // sidebar: true,
        sidebarBottom: true,
        icon: 'puzzle-piece',
        bgColor: 'var(--vuestro-purple)',
        fgColor: 'var(--vuestro-text-color-inverse)',
      },
      name: 'plugin',
      path: '/plugin',
      component: Plugin,
      children: [
        {
          meta: {
            title: 'Colors',
            sidebar: true,
          },
          name: 'colors',
          path: 'colors',
          component: PluginColors,
        },
        {
          meta: {
            title: 'Directives',
            sidebar: true,
          },
          name: 'directives',
          path: 'directives',
          component: PluginDirectives,
        },
        {
          meta: {
            title: 'Mixins',
            sidebar: true,
          },
          name: 'mixins',
          path: 'mixins',
          component: PluginMixins,
        },
        {
          meta: {
            title: 'Filters',
            sidebar: true,
          },
          name: 'filters',
          path: 'filters',
          component: PluginFilters,
        },
      ]
    },
    {
      meta: {
        title: 'Settings',
        sidebar: true,
        icon: 'cogs',
        bgColor: 'var(--vuestro-cyan)',
        fgColor: 'var(--vuestro-text-color-inverse)',
      },
      name: 'settings',
      path: '/settings',
      component: Settings,
    },
    { path: '/*', redirect: '/dashboard' } // redirect to dashboard
  ],
});

