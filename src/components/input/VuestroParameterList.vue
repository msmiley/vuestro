<template>
  <vuestro-container gutter="none" column content="stretch">
    <!--PARAMETER ITEMs-->
    <vuestro-geo-pattern class="vuestro-parameter-list-item"
                         v-for="(p, idx) in parameters" :key="p.field"
                         :seed="`${p.type}_type`">
      <!--TITLE BAR-->
      <vuestro-container justify="space-between" gutter="none" align="center">
        <div class="vuestro-parameter-list-name">
          <vuestro-caret v-if="p.collapsible"
                         :collapsed="isCollapsed(p)"
                         @click="toggleCollapse(p)">
          </vuestro-caret>

          <vuestro-icon v-if="p.icon" :name="p.icon"></vuestro-icon>
          {{ p.title }}
        </div>
        <div class="vuestro-parameter-list-type" v-if="!hideType">
          {{ p.type | vuestroTitleCase }}
        </div>
      </vuestro-container>
      <!--BODY/CONTENT-->
      <vuestro-container v-if="!isCollapsed(p)"
                         class="vuestro-parameter-list-body"
                         column
                         gutter="sm"
                         content="stretch">
        <div class="vuestro-parameter-list-description">{{ p.description }}</div>
        <!--OBJECT-->
        <template v-if="p.type === 'object'">
          <!--OMG RECURSION!!!-->
          <vuestro-parameter-list :value="value[p.field] || {}"
                                  :parameters="p.items"
                                  @input="setField(p, ...arguments)">
          </vuestro-parameter-list>
        </template>
        <!--ARRAY-->
        <vuestro-container v-else-if="p.type === 'array'"
                           column content="stretch" gutter="none">
          <template v-if="p.items === 'string'">
            <vuestro-container column content="stretch" gutter="none">
              <div class="vuestro-parameter-list-array-item"
                   v-for="(item, idx) in value[p.field]" :key="idx">
                <vuestro-text-field variant="shaded"
                                    stretch
                                    auto-focus
                                    :value="item"
                                    @input="setArrayItem(p, idx, ...arguments)">
                </vuestro-text-field>
                <vuestro-button round no-border
                                variant="danger" size="sm"
                                @click="removeArrayItem(p, idx)">
                  <vuestro-icon name="trash"></vuestro-icon>
                </vuestro-button>
              </div>
            </vuestro-container>
            <vuestro-button size="sm" round no-border
                            @click="onAddNewArrayItem(p)">
              <vuestro-icon name="plus"></vuestro-icon>
            </vuestro-button>
          </template>
        </vuestro-container>
        <!--DATE-->
        <vuestro-dropdown v-else-if="p.type === 'date'" stretch no-scroll>
          <template #button>
            <vuestro-button pill variant="text">
              <template v-if="value[p.field]">{{ value[p.field] | vuestroIsoDate }}</template>
              <template v-else>Select Date...</template>
            </vuestro-button>
          </template>
          <template #default="{ close }">
            <vuestro-container gutter="none" justify="center">
              <vuestro-date-picker :value="value[p.field]"
                                   @input="(d) => { setField(p, d); close(); }">
              </vuestro-date-picker>
            </vuestro-container>
          </template>
        </vuestro-dropdown>
        <!--BOOLEAN-->
        <vuestro-container v-else-if="p.type === 'boolean'"
                           justify="space-between"
                           gutter="sm"
                           overflow-hidden>
          <vuestro-button pill stretch no-margin
                          variant="success"
                          :value="value[p.field]"
                          @click="setField(p, true)">
            Yes
          </vuestro-button>
          <div style="width: 0.4em"></div>
          <vuestro-button pill stretch no-margin
                          variant="danger"
                          :value="value[p.field] === false"
                          @click="setField(p, false)">
            No
          </vuestro-button>
        </vuestro-container>
        <!--OPTION/SELECT-->
        <vuestro-dropdown v-else-if="p.type === 'option'"
                          stretch close-on-content-click>
          <template #button>
            <vuestro-button pill value variant="info">
              {{ value[p.field] || 'Select...' }}
            </vuestro-button>
          </template>
          <vuestro-list-button v-for="o in p.options" :key="o"
                               @click="setField(p, o)">
            {{ o }}
          </vuestro-list-button>
        </vuestro-dropdown>
        <vuestro-editor v-else-if="p.type === 'text'"
                        :options="editorOptions"
                        :value="value[p.field]"
                        @input="setField(p, ...arguments)">
        </vuestro-editor>
        <!--STRING/DEFAULT-->
        <vuestro-text-field v-else
                            stretch
                            size="md"
                            :readonly="readonly"
                            :validate="(v) => validate(p.type, v)"
                            :value="value[p.field]"
                            @input="setField(p, ...arguments)">
        </vuestro-text-field>
      </vuestro-container>
    </vuestro-geo-pattern>

  </vuestro-container>
</template>

<script>

/* global _ */

export default {
  name: 'VuestroParameterList',
  props: {
    value: { type: Object }, // the object these parameters will be set on
    readonly: { type: Boolean, default: false }, // true if parameters should be read only
    hideType: { type: Boolean, default: false }, // true to hide type (e.g. String, Number, etc)
    parameters: { type: Array, required: true }, // the parameter list, schema:
    //  [
    //    {
    //      title: '<the UI-friendly name>',
    //      description: '<the UI-friendly description>',
    //      field: '<the actual field name set in value object>',
    //      type: 'string|number|option|boolean',
    //      options: ['<array of strings, only for option type>'],
    //  ]
  },
  data() {
    return {
      collapsed: {},
      editorOptions: {
        wrap: true,
        minLines: 10,
        maxLines: Infinity,
      },
    };
  },
  methods: {
    setField(param, value) {
      let newVal = _.cloneDeep(this.value);
      // coerce value
      switch (param.type) {
        case 'number':
          newVal[param.field] = parseFloat(value);
          if (isNaN(newVal[param.field])) {
            newVal[param.field] = null;
          }
          break;
        case 'boolean':
          newVal[param.field] = !!value;
          break;
        default:
          newVal[param.field] = value;
      }
      this.$emit('input', newVal);
    },
    onAddNewArrayItem(param) {
      let newVal = _.cloneDeep(this.value);
      if (!_.isArray(newVal[param.field])) {
        newVal[param.field] = [];
      }
      newVal[param.field].push('');
      this.$emit('input', newVal);
    },
    setArrayItem(param, idx, value) {
      let newVal = _.cloneDeep(this.value);
      newVal[param.field][idx] = value;
      this.$emit('input', newVal);
    },
    removeArrayItem(param, idx) {
      let newVal = _.cloneDeep(this.value);
      newVal[param.field].splice(idx, 1);
      this.$emit('input', newVal);
    },
    validate(t, d) {
      // only validate number entries
      if (t === 'number') {
        if (d.length === 0 || `${d}`.match(/^[\d\.\-]+$/)) {
          return false;
        } else {
          return 'Must be a number';
        }
      }
    },
    isCollapsed(param) {
      if (this.collapsed[param.field] === undefined) {
        if (param.collapsed === undefined) {
          this.$set(this.collapsed, param.field, false);
        } else {
          this.$set(this.collapsed, param.field, !!this.collapsed);
        }
      }
      return this.collapsed[param.field];
    },
    toggleCollapse(param) {
      this.$set(this.collapsed, param.field, !this.collapsed[param.field]);
    },
  },
};

</script>

<style>

.vuestro-app {
  --vuestro-parameter-list-item-margin: 0.2em 0.2em;
  --vuestro-parameter-list-title-font-size: 1.05em;
  --vuestro-parameter-list-title-font-weight: 500;
  --vuestro-parameter-list-title-padding: 0.2em 0.4em;
  --vuestro-parameter-list-type-font-size: 0.8em;
  --vuestro-parameter-list-type-font-weight: 500;
  --vuestro-parameter-list-description-font-size: 0.9em;
}

</style>

<style scoped>

.vuestro-parameter-list-item {
  margin: var(--vuestro-parameter-list-item-margin);
  border-radius: var(--vuestro-control-border-radius);
}
.vuestro-parameter-list-name {
  padding: var(--vuestro-parameter-list-title-padding);
  display: flex;
  font-size: var(--vuestro-parameter-list-title-font-size);
  font-weight: var(--vuestro-parameter-list-title-font-weight);
}
.vuestro-parameter-list-name > .vuestro-icon {
  margin-left: 0.1em;
  margin-right: 0.3em;
}

.vuestro-parameter-list-type {
  margin-left: auto;
  margin-right: 0.5em;
  font-size: var(--vuestro-parameter-list-type-font-size);
  font-weight: var(--vuestro-parameter-list-type-font-weight);
}
.vuestro-parameter-list-body {
  background-color: var(--vuestro-panel-bg);
  margin: 1px;
  border-radius: var(--vuestro-control-border-radius);
}
.vuestro-parameter-list-body > .vuestro-text-field {
  margin-top: 0;
  margin-bottom: 0.2em;
}
.vuestro-parameter-list-description {
  font-size: var(--vuestro-parameter-list-description-font-size);
  padding: 0.2em 0.4em;
}

.vuestro-parameter-list-array-item {
  display: flex;
  margin: 0 0.2em;
}
.vuestro-parameter-list-array-item > .vuestro-text-field {
  margin: 1px 0;
}

</style>