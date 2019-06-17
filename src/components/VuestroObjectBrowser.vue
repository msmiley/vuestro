<template>
  <div class="vuestro-object-browser-item">
    <div v-for="(v, k) in data" :key="k">
      <div class="vuestro-object-browser-item-gutter">
        <vuestro-caret v-if="isObject(v) || isArray(v)" :collapsed="isCollapsed(k)" @click="toggleCollapse(k)"></vuestro-caret>
      </div>
      <div class="vuestro-object-browser-item-kv">
        <div class="vuestro-object-browser-item-key-title">{{ k }}:</div>
        <template v-if="isObject(v) || isArray(v)">
          <span v-if="isArray(v)">Array[{{ v.length }}]</span>
          <span v-else>Object[{{ Object.keys(v).length }}]</span>
          <div v-if="expanded.indexOf(k) >= 0" class="vuestro-object-browser-item-sub">
            <vuestro-object-browser :expand-all="expandAll" :data="v"></vuestro-object-browser>
          </div>
        </template>
        <template v-else>
          <span v-if="isString(v)" class="vuestro-object-browser-item-string" title="String">{{ JSON.stringify(v) }}</span>
          <span v-if="isBoolean(v)" class="vuestro-object-browser-item-bool" title="Boolean">{{ v }}</span>
          <span v-if="isDate(v)" class="vuestro-object-browser-item-date" title="Date">{{ v.toISOString() }}</span>
          <span v-if="isNumber(v)" class="vuestro-object-browser-item-number" title="Number">{{ v }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

/* global _ */

export default {
  name: 'VuestroObjectBrowser',
  props: {
    data: { required: true },
    expandAll: { type: Boolean, default: false },
  },
  data() {
    return {
      expanded: [],
    };
  },
  watch: {
    data() {
      this.checkExpandAll();
    },
  },
  mounted() {
    this.checkExpandAll();
  },
  methods: {
    checkExpandAll() {
      if (this.expandAll) {
        _.forEach(this.data, (d, i) => {
          this.expanded.push(i);
        });
      }
    },
    isCollapsed(d) {
      return this.expanded.indexOf(d) < 0;
    },
    isObject(d) {
      return _.isPlainObject(d);
    },
    isArray(d) {
      return _.isArray(d);
    },
    isBoolean(d) {
      return _.isBoolean(d);
    },
    isDate(d) {
      return _.isDate(d);
    },
    isString(d) {
      return _.isString(d);
    },
    isNumber(d) {
      return _.isNumber(d);
    },
    toggleCollapse(d) {
      let idx = this.expanded.indexOf(d);
      if (idx < 0) {
        // add to expanded
        this.expanded.push(d);
      } else {
        // remove from expanded
        this.expanded.splice(idx, 1);
      }
    },
  }
};

</script>

<style>

.vuestro-app {
  --vuestro-object-browser-key-fg: var(--vuestro-purple);
  --vuestro-object-browser-string-fg: var(--vuestro-orange);
  --vuestro-object-browser-bool-fg: var(--vuestro-blue);
  --vuestro-object-browser-date-fg: var(--vuestro-green);
  --vuestro-object-browser-number-fg: var(--vuestro-indigo);
}

</style>

<style scoped>

.vuestro-object-browser-item {
  padding: 4px;
}

.vuestro-object-browser-item > div {
  display: flex;
}

.vuestro-object-browser-item-gutter {
  width: 20px;
  padding-top: 2px;
}

.vuestro-object-browser-item-kv {
  padding-top: 2px;
  padding-bottom: 2px;
}

.vuestro-object-browser-item-key {
  display: flex;
}
.vuestro-object-browser-item-key-title {
  font-weight: 500;
  text-align: right;
  display: inline-block;
  min-width: 10px;
  color: var(--vuestro-object-browser-key-fg);
}

.vuestro-object-browser-item-string {
  color: var(--vuestro-object-browser-string-fg);
}

.vuestro-object-browser-item-bool {
  color: var(--vuestro-object-browser-bool-fg);
}

.vuestro-object-browser-item-date {
  color: var(--vuestro-object-browser-date-fg);
}

.vuestro-object-browser-item-number {
  color: var(--vuestro-object-browser-number-fg);
}

</style>