<template>
  <vuestro-container>
    <vuestro-card color="var(--vuestro-purple)" overflow-hidden>
      <template #heading><span class="drag">Area Chart</span></template>
      <template #description>The Vuestro Line Chart is flexible enough to be used with a categorical x axis as well as a time scale.</template>
      <div class="chart-wrapper">
        <vuestro-area-chart :data="data" :options="options1"></vuestro-area-chart>
      </div>
    </vuestro-card>

    <vuestro-card overflow-hidden>
      <template #subheading>Set the notFilled: true option for a line chart</template>
      <div class="chart-wrapper">
        <vuestro-area-chart :data="data" :options="options2"></vuestro-area-chart>
      </div>
    </vuestro-card>

    <vuestro-card overflow-hidden>
      <template #subheading>Set the stacked: true option to render as stacked areas</template>
      <div class="chart-wrapper">
        <vuestro-area-chart :data="data" :options="options5"></vuestro-area-chart>
      </div>
    </vuestro-card>

    <vuestro-card overflow-hidden>
      <template #subheading>Set the showAxes: true option to show axes and use a render function to manipulate value scale labels</template>
      <div class="chart-wrapper">
        <vuestro-area-chart :data="data" :options="options3"></vuestro-area-chart>
      </div>
    </vuestro-card>

    <vuestro-card overflow-hidden>
      <template #subheading>Change the data property and the chart will update</template>
      <div class="chart-wrapper">
        <vuestro-area-chart :data="dynamicData" :options="options4"></vuestro-area-chart>
      </div>
    </vuestro-card>

  </vuestro-container>
</template>

<script>

/* global Vue */
export default {
  name: 'AreaChart',
  data() {
    return {
      data: [
        {
          key: '2019-10-01T00:00:00Z',
          value1: 2,
          value2: 12,
          value3: 8,
        },
        {
          key: '2019-10-01T01:00:00Z',
          value1: 2,
          value2: 6,
          value3: 19,
        },
        {
          key: '2019-10-01T02:00:00Z',
          value1: 3,
          value2: 33,
          value3: 8,
        },
        {
          key: '2019-10-01T03:00:00Z',
          value1: 6,
          value2: 13,
          value3: 2,
        },
        {
          key: '2019-10-01T04:00:00Z',
          value1: 1,
          value2: 13,
          value3: 2,
        },
        {
          key: '2019-10-01T05:00:00Z',
          value1: 1,
          value2: 13,
          value3: 3,
        },
        {
          key: '2019-10-01T06:00:00Z',
          value1: 32,
          value2: 13,
          value3: 2,
        },
      ],
      options1: {
        series: [
          {
            title: 'Series 1',
            field: 'value1',
          },
          {
            title: 'Series 2',
            field: 'value2',
            render(d) {
              return d.toFixed(2);
            },
          },
          {
            title: 'Series 3',
            field: 'value3',
          },
        ],
      },
      options2: {
        notFilled: true,
        series: [
          {
            title: 'Series 1',
            field: 'value1',
          },
          {
            title: 'Series 2',
            field: 'value2',
            render: Vue.filter('vuestroBytes'),
          },
          {
            title: 'Series 3',
            field: 'value3',
          },
        ],
      },
      options3: {
        showAxes: true,
        valueAxis: {
          render(d) {
            return `${d.toFixed(2)} kb`;
          },
        },
        series: [
          {
            title: 'Series 1',
            field: 'value1',
          },
          {
            title: 'Series 2',
            field: 'value2',
          },
          {
            title: 'Series 3',
            field: 'value3',
          },
        ],
      },
      options5: {
        stacked: true,
        series: [
          {
            title: 'Series 1',
            field: 'value1',
          },
          {
            title: 'Series 2',
            field: 'value2',
          },
          {
            title: 'Series 3',
            field: 'value3',
          },
        ],
      },
      dynamicData: [],
      options4: {
        utc: true,
        series: [
          {
            title: 'CPU1',
            field: 'cpu1',
          },
          {
            title: 'CPU2',
            field: 'cpu2',
          },
        ],
      },
    };
  },
  mounted() {
    setInterval(() => {
      this.dynamicData.push({
        key: new Date(),
        cpu1: Math.floor(Math.random()*(100+1)),
        cpu2: Math.floor(Math.random()*(100+1)),
      });
      if (this.dynamicData.length > 100) {
        this.dynamicData.shift();
      }
    }, 1000);
  }
};

</script>


<style scoped>

.chart-wrapper {
  flex-grow: 1;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  height: 300px;
}

.vuestro-dark .frame {
  border: 1px solid var(--vuestro-outline);
}

</style>