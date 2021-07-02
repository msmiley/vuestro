/* global _ */
import VuestroApp from '../components/VuestroApp';
import VuestroAreaChart from '../components/charts/VuestroAreaChart';
import VuestroAsyncText from '../components/text/VuestroAsyncText';
import VuestroBarChart from '../components/charts/VuestroBarChart';
import VuestroBreadcrumb from '../components/containers/VuestroBreadcrumb';
import VuestroButton from '../components/VuestroButton';
import VuestroCaret from '../components/VuestroCaret';
import VuestroCard from '../components/containers/VuestroCard';
import VuestroChartPanel from '../components/charts/VuestroChartPanel';
import VuestroCheckOrX from '../components/VuestroCheckOrX';
import VuestroCode from '../components/text/VuestroCode';
import VuestroContainer from '../components/containers/VuestroContainer';
import VuestroCleanKvp from '../components/text/VuestroCleanKvp';
import VuestroColorPicker from '../components/pickers/VuestroColorPicker';
import VuestroConfirm from '../components/VuestroConfirm';
import VuestroDatePicker from '../components/pickers/VuestroDatePicker';
import VuestroDropdown from '../components/VuestroDropdown';
import VuestroDonutChart from '../components/charts/VuestroDonutChart';
import VuestroDynamicTable from '../components/VuestroDynamicTable';
import VuestroEditableText from '../components/text/VuestroEditableText';
import VuestroEditor from '../components/input/VuestroEditor';
import VuestroEllipsisText from '../components/text/VuestroEllipsisText';
import VuestroUpload from '../components/input/VuestroUpload';
import VuestroForceGraph from '../components/charts/VuestroForceGraph';
import VuestroGeoPattern from '../components/VuestroGeoPattern';
import VuestroGrid from '../components/grid/VuestroGrid';
import VuestroGridBox from '../components/grid/VuestroGridBox';
import VuestroHr from '../components/VuestroHr';
import VuestroIcon from '../components/VuestroIcon';
import VuestroListButton from '../components/list/VuestroListButton';
import VuestroListGroup from '../components/list/VuestroListGroup';
import VuestroListGroupToggle from '../components/list/VuestroListGroupToggle';
import VuestroListItem from '../components/list/VuestroListItem';
import VuestroMap from '../components/charts/VuestroMap';
import VuestroModal from '../components/VuestroModal';
import VuestroMultiSelect from '../components/input/VuestroMultiSelect';
import VuestroNotifications from '../components/VuestroNotifications';
import VuestroObjectBrowser from '../components/VuestroObjectBrowser';
import VuestroPanel from '../components/containers/VuestroPanel';
import VuestroParameterList from '../components/input/VuestroParameterList';
import VuestroPill from '../components/VuestroPill';
import VuestroSankeyChart from '../components/charts/VuestroSankeyChart';
import VuestroSearchHighlight from '../components/text/VuestroSearchHighlight';
import VuestroSidebar from '../components/sidebar/VuestroSidebar';
import VuestroSpinner from '../components/input/VuestroSpinner';
import VuestroStatPanel from '../components/charts/VuestroStatPanel';
import VuestroSvgTooltip from '../components/charts/VuestroSvgTooltip';
import VuestroBarSvgTooltip from '../components/charts/VuestroBarSvgTooltip';
import VuestroSvgButton from '../components/charts/VuestroSvgButton';
import VuestroSvgLegend from '../components/charts/VuestroSvgLegend';
import VuestroTable from '../components/VuestroTable';
import VuestroTextField from '../components/input/VuestroTextField';
import VuestroTimePicker from '../components/pickers/VuestroTimePicker';
import VuestroTitle from '../components/text/VuestroTitle';
import VuestroTooltip from '../components/VuestroTooltip';
import VuestroTray from '../components/containers/VuestroTray';

import * as d3 from 'd3';
let colors = d3.scaleOrdinal(d3.schemeCategory10);

export default {
  install(Vue, options) {
    Vue.component(VuestroApp.name, VuestroApp);
    Vue.component(VuestroAreaChart.name, VuestroAreaChart);
    Vue.component(VuestroAsyncText.name, VuestroAsyncText);
    Vue.component(VuestroBarChart.name, VuestroBarChart);
    Vue.component(VuestroBreadcrumb.name, VuestroBreadcrumb);
    Vue.component(VuestroButton.name, VuestroButton);
    Vue.component(VuestroCaret.name, VuestroCaret);
    Vue.component(VuestroCard.name, VuestroCard);
    Vue.component(VuestroChartPanel.name, VuestroChartPanel);
    Vue.component(VuestroCheckOrX.name, VuestroCheckOrX);
    Vue.component(VuestroConfirm.name, VuestroConfirm);
    Vue.component(VuestroContainer.name, VuestroContainer);
    Vue.component(VuestroCleanKvp.name, VuestroCleanKvp);
    Vue.component(VuestroCode.name, VuestroCode);
    Vue.component(VuestroColorPicker.name, VuestroColorPicker);
    Vue.component(VuestroDatePicker.name, VuestroDatePicker);
    Vue.component(VuestroDropdown.name, VuestroDropdown);
    Vue.component(VuestroDonutChart.name, VuestroDonutChart);
    Vue.component(VuestroDynamicTable.name, VuestroDynamicTable);
    Vue.component(VuestroEditableText.name, VuestroEditableText);
    Vue.component(VuestroEditor.name, VuestroEditor);
    Vue.component(VuestroEllipsisText.name, VuestroEllipsisText);
    Vue.component(VuestroForceGraph.name, VuestroForceGraph);
    Vue.component(VuestroGeoPattern.name, VuestroGeoPattern);
    Vue.component(VuestroGrid.name, VuestroGrid);
    Vue.component(VuestroGridBox.name, VuestroGridBox);
    Vue.component(VuestroHr.name, VuestroHr);
    Vue.component(VuestroIcon.name, VuestroIcon);
    Vue.component(VuestroListButton.name, VuestroListButton);
    Vue.component(VuestroListGroup.name, VuestroListGroup);
    Vue.component(VuestroListGroupToggle.name, VuestroListGroupToggle);
    Vue.component(VuestroListItem.name, VuestroListItem);
    Vue.component(VuestroMap.name, VuestroMap);
    Vue.component(VuestroModal.name, VuestroModal);
    Vue.component(VuestroMultiSelect.name, VuestroMultiSelect);
    Vue.component(VuestroNotifications.name, VuestroNotifications);
    Vue.component(VuestroObjectBrowser.name, VuestroObjectBrowser);
    Vue.component(VuestroPanel.name, VuestroPanel);
    Vue.component(VuestroParameterList.name, VuestroParameterList);
    Vue.component(VuestroPill.name, VuestroPill);
    Vue.component(VuestroSankeyChart.name, VuestroSankeyChart);
    Vue.component(VuestroSidebar.name, VuestroSidebar);
    Vue.component(VuestroSpinner.name, VuestroSpinner);
    Vue.component(VuestroStatPanel.name, VuestroStatPanel);
    Vue.component(VuestroSvgTooltip.name, VuestroSvgTooltip);
    Vue.component(VuestroBarSvgTooltip.name, VuestroBarSvgTooltip);
    Vue.component(VuestroSearchHighlight.name, VuestroSearchHighlight);
    Vue.component(VuestroSvgButton.name, VuestroSvgButton);
    Vue.component(VuestroSvgLegend.name, VuestroSvgLegend);
    Vue.component(VuestroTable.name, VuestroTable);
    Vue.component(VuestroTextField.name, VuestroTextField);
    Vue.component(VuestroTimePicker.name, VuestroTimePicker);
    Vue.component(VuestroTitle.name, VuestroTitle);
    Vue.component(VuestroTooltip.name, VuestroTooltip);
    Vue.component(VuestroTray.name, VuestroTray);
    Vue.component(VuestroUpload.name, VuestroUpload);

    Vue.filter('vuestroCommas', (d) => {
      if (d === null || d === undefined) {
        return '';
      }
      if (typeof(d) === 'number') {
        return Number(d).toLocaleString('en');
      }
      if (typeof(d) === 'string') {
        let n = Number(parseFloat(d)).toLocaleString('en');
        if (!isNaN(n)) {
          return n;
        }
      }
      return d;
    });

    Vue.filter('vuestroPhoneUS', (d) => {
      if (d === null || d === undefined) {
        return '';
      }
      if (typeof(d) === 'number') {
        d = `${d}`;
      }
      return d.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    });

    Vue.filter('vuestroHMS', (d) => {
      if (d === null || d === undefined) {
        return '';
      }
      if (_.isString(d)) {
        d = new Date(d);
      }
      return `${('0' + d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}:${('0' + d.getSeconds()).slice(-2)}`;
    });

    Vue.filter('vuestroIsoDate', (d) => {
      if (d === null || d === undefined) {
        return '';
      }
      if (_.isString(d)) {
        d = new Date(d);
      }
      return d.toISOString();
    });

    Vue.filter('vuestroDate', (d) => {
      if (d === null || d === undefined) {
        return '';
      }
      if (_.isString(d)) {
        d = new Date(d);
      }
      return d.toLocaleString();
    });

    Vue.filter('vuestroLocaleDate', (d) => {
      if (d === null || d === undefined) {
        return '';
      }
      if (_.isString(d)) {
        d = new Date(d);
      }
      return d.toLocaleDateString();
    });

    Vue.filter('vuestroLocaleTime', (d) => {
      if (d === null || d === undefined) {
        return '';
      }
      if (_.isString(d)) {
        d = new Date(d);
      }
      return d.toLocaleTimeString();
    });

    Vue.filter('vuestroBytes', (intNum) => {
      if (intNum === null || intNum === undefined) {
        return '';
      }
      const suffixes = ['B', 'kB', 'MB', 'GB', 'TB', 'PB'];
      if (intNum < 1000) {
        return intNum.toFixed(1) + suffixes[0];
      }
      let i = parseInt(Math.floor(Math.log(intNum) / Math.log(1000)), 10);
      return (intNum / Math.pow(1000, i)).toFixed(1) + suffixes[i];
    });

    Vue.filter('vuestroHumanNum', (intNum) => {
      if (intNum == null || intNum === undefined) {
        return '';
      }
      const suffixes = ['k', 'M', 'B', 'T', 'Qd', 'Qn', 'Sx', 'Sp', 'O', 'N', 'D', 'G', 'Gp'];
      if (intNum < 1000) {
        return intNum % 1 > 0 ? intNum.toFixed(1):intNum;
      }
      let i = parseInt(Math.floor(Math.log(intNum) / Math.log(1000)), 10) - 1;
      return (intNum / Math.pow(1000, i+1)).toFixed(1) + suffixes[i];
    });

    Vue.filter('vuestroTitleCase', (str) => {
      return str.split(' ').map(function(word, idx) {
        let exceptions = [
          // short conjunctions
          'and', 'as', 'but', 'for', 'if', 'nor', 'or', 'so', 'yet',
          // articles
          'a', 'an', 'the',
          // short prepositions
          'as', 'at', 'by', 'in', 'of', 'off', 'on', 'per', 'to', 'up', 'via',
          // Apple words
          'iOS', 'macOS', 'iCloud',
        ];
        if (idx === 0 || exceptions.indexOf(word) < 0) {
          let hyphenated = word.split('-');
          if (hyphenated.length > 1) {
            return hyphenated.map(function(word) {
              return word.replace(word[0], word[0].toUpperCase());
            }).join('-');
          }
          return word.replace(word[0], word[0].toUpperCase());
        }
        return word;
      }).join(' ');
    });

    Vue.directive('vuestro-blur', {
      bind: function (el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          if (!(el == event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
      },
      unbind: function (el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
      },
    });

    Vue.mixin({
      methods: {
        vuestroDownloadAsJson(data, filename) {
          if (!data || !filename) {
            console.error('downloadAsJSON needs data and filename params');
            return;
          }
          var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data,null,2));
          var downloadAnchorNode = document.createElement('a');
          downloadAnchorNode.setAttribute("href", dataStr);
          downloadAnchorNode.setAttribute("download", filename);
          document.body.appendChild(downloadAnchorNode); // required for firefox
          downloadAnchorNode.click();
          downloadAnchorNode.remove();
        },
        vuestroDownloadWithIframe(url) {
          let hiddenIFrameID = `vuestroDownloadWithIframe-${Date.now()}`;
          let iframe = document.createElement('iframe');
          iframe.id = hiddenIFrameID;
          iframe.style.display = 'none';
          document.body.appendChild(iframe);
          iframe.src = url;
        },
        vuestroGet(object, path, defaultVal) {
          return _.get(object, path, defaultVal);
        },
        vuestroGetValueById({ data, idField, idValue, field, backupText }) {
          let q = {};
          q[idField] = idValue;
          let doc = _.find(data, q);
          if (doc && doc[field]) {
            return doc[field];
          } else {
            return backupText;
          }
        },
        vuestroGenerateId(length) {
          function dec2hex (dec) {
            return dec < 10 ? '0' + String(dec):dec.toString(16);
          }
          var arr = new Uint8Array((length || 40) / 2);
          window.crypto.getRandomValues(arr);
          return Array.from(arr, dec2hex).join('');
        },
        vuestroColorPalette() {
          return [
            '--vuestro-indigo',
            '--vuestro-purple',
            '--vuestro-magenta',
            '--vuestro-pink',

            '--vuestro-prussian',
            '--vuestro-royal',
            '--vuestro-blue',
            '--vuestro-cobalt',
            '--vuestro-cyan',
            '--vuestro-teal',

            '--vuestro-green',
            '--vuestro-emerald',
            '--vuestro-yellow',
            '--vuestro-gold',

            '--vuestro-orange',
            '--vuestro-salmon',
            '--vuestro-brick',
            '--vuestro-red',
          ];
        },
        vuestroChartColorGenerator(idx) {
          return colors(idx);
        },
      }
    });
  }
};
