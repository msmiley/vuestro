<template>
  <vuestro-container>
    <vuestro-card color="#f47633">
      <template #heading>VuestroTable</template>
      <template #description>
        VuestroTable is a fully-reactive component which provides basic datatable functionality such as sort, while leveraging Vue slots to allow itself to be composed into a parent providing more complex functionality.
      </template>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        Basic table with auto-generated column names
      </template>
      <vuestro-panel>
        <vuestro-table :data="exampleData"></vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        Specify columns array property to format column headers and provide options such as padding, sortable, classes, sort (default direction), and a render function.
      </template>
      <vuestro-panel>
        <vuestro-table :options="exampleOptions" :data="exampleData"></vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        <span>Provide a template for cells and headers through the cell/header slot. The slot scope object <vuestro-code>item</vuestro-code> contains a column specifier for headers and both the column specifier and row data item for cells.</span>
      </template>
      <vuestro-panel>
        <vuestro-table :options="{ ...exampleOptions, scroll: true }" :data="exampleData">
          <template #header="{ item }">
            {{ item }}
          </template>
          <template #cell="{ item }">
            {{ item }}
          </template>
        </vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        <span>Provide a template for the entire row through the <vuestro-code>row</vuestro-code> slot. The slot must contain enough <vuestro-code>td</vuestro-code> elements to fill the row. Also, some of the column options such as align won't work unless implemented manually.</span>
      </template>
      <vuestro-panel>
        <vuestro-table :options="{ ...exampleOptions, scroll: true }" :data="exampleData">
          <template #row="{ item }">
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
          </template>
        </vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        <span>Specify <vuestro-code>component</vuestro-code> header property to use a Vue component to render a particular column</span>
      </template>
      <vuestro-panel>
        <vuestro-table :options="exampleOptions2" :data="exampleData"></vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        Set the no-data slot to provide a message when data length is zero.
      </template>
      <vuestro-panel>
        <vuestro-table :options="exampleOptions2" :data="[]">
          <template #no-data>
            <vuestro-icon name="ghost" scale=2></vuestro-icon>
            No data to show
          </template>
        </vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        <span>Set the <vuestro-code>noHeader: true</vuestro-code> option to skip the header row</span>
      </template>
      <vuestro-panel>
        <vuestro-table :options="exampleOptions3" :data="exampleData"></vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        <span>Set the <vuestro-code>scroll: true</vuestro-code> option to let the table scroll horizontally</span>
      </template>
      <vuestro-panel>
        <vuestro-table :options="{ ...exampleOptions4, scroll: true }" :data="exampleData">
        </vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        <span>Set the <vuestro-code>async: true</vuestro-code> column option to render a spinner while the value is null</span>
      </template>
      <vuestro-panel>
        <vuestro-table :options="exampleOptions4" :data="exampleData">
        </vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        <span>Set the <vuestro-code>header-buttons</vuestro-code> or <vuestro-code>row-buttons</vuestro-code> slot to provide buttons at the end of the header or row</span>
      </template>
      <vuestro-panel>
        <vuestro-table :options="exampleOptions2" :data="exampleData">
          <template #header-buttons>
            <vuestro-button round no-border>
              <vuestro-icon name="plus"></vuestro-icon>
            </vuestro-button>
          </template>
          <template #row-buttons="{ index }">
            <vuestro-button round no-border>
              <vuestro-icon name="eye"></vuestro-icon>
            </vuestro-button>
            <vuestro-button round no-border>
              <vuestro-icon name="edit"></vuestro-icon>
            </vuestro-button>
            <vuestro-confirm></vuestro-confirm>
          </template>
        </vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        <span>Set the <vuestro-code>detail</vuestro-code> slot to provide an expandable detail row</span>
      </template>
      <vuestro-panel>
        <vuestro-table ref="tableWithDetail"
                       :options="exampleOptions2"
                       :data="exampleData">
          <template #header-buttons>
            <vuestro-button pill no-border @click="$refs.tableWithDetail.expandAll()">
              <template #icon>
                <vuestro-icon name="expand-alt"></vuestro-icon>
              </template>
              Expand All
            </vuestro-button>
            <vuestro-button pill no-border @click="$refs.tableWithDetail.collapseAll()">
              <template #icon>
                <vuestro-icon name="compress-alt"></vuestro-icon>
              </template>
              Collapse All
            </vuestro-button>
          </template>
          <template #row-buttons="{ index }">
            <vuestro-button round no-border>
              <vuestro-icon name="eye"></vuestro-icon>
            </vuestro-button>
            <vuestro-button round no-border>
              <vuestro-icon name="edit"></vuestro-icon>
            </vuestro-button>
            <vuestro-confirm></vuestro-confirm>
          </template>
          <template #detail="{ item }">
            <vuestro-container>
              Detail row with access to data as &nbsp;<vuestro-code>item</vuestro-code>:
              <vuestro-card>
                <vuestro-object-browser :data="item"></vuestro-object-browser>
              </vuestro-card>
            </vuestro-container>
          </template>
        </vuestro-table>
      </vuestro-panel>
    </vuestro-card>

  </vuestro-container>
</template>

<script>

/* global Vue */
export default {
  name: 'Table',
  data() {
    return {
      exampleOptions: {
        columns: [
          {
            field: 'firstName',
            title: 'First Name',
            sortable: true,
          },
          {
            field: 'lastName',
            title: 'Last Name (specified class)',
            sortable: true,
            sort: 'asc',
            classes: 'test-column-class',
          },
          {
            field: 'phone',
            title: 'Phone No. (centered, render fn)',
            align: 'center',
            render: Vue.filter('vuestroPhoneUS'),
            classes: (field, row) => {
              if (row[field] === '5553728112') {
                return 'test-column-class';
              }
            }
          },
          {
            field: 'email',
            title: 'Email (right-justified, zero padding)',
            align: 'right',
            padding: 0,
          },
          {
            field: 'subObject.subField1',
            title: 'SubObject Field1',
            align: 'right',
          }
        ],
      },
      exampleOptions2: {
        columns: [
          {
            field: 'firstName',
            title: 'First Name',
            sortable: true,
          },
          {
            field: 'lastName',
            title: 'Last Name',
            sortable: true,
          },
          {
            field: 'phone',
            title: 'Phone No. (centered, render fn)',
            align: 'center',
            render: Vue.filter('vuestroPhoneUS'),
          },
          {
            field: 'email',
            title: 'Email (VuestroEditableText component)',
            align: 'right',
            component: 'VuestroEditableText',
          },
        ],
      },
      exampleOptions3: {
        noHeader: true,
      },
      exampleOptions4: {
        columns: [
          {
            field: 'firstName',
            title: 'First Name',
            sortable: true,
          },
          {
            field: 'lastName',
            title: 'Last Name',
            sortable: true,
          },
          {
            field: 'phone',
            title: 'Phone No. (centered, render fn)',
            align: 'center',
            render: Vue.filter('vuestroPhoneUS'),
          },
          {
            field: 'email',
            title: 'Email (VuestroEditableText component)',
            align: 'right',
            component: 'VuestroEditableText',
          },
          {
            field: 'asyncField',
            title: 'Async Field',
            async: true,
          }
        ],
      },
      exampleData: [
        {
          firstName: 'Trent',
          lastName: 'Wilson',
          phone: '5553344232',
          email: 'goodtime@club.net',
          subObject: {
            subField1: 33,
            subField2: 'test1',
          }
        },
        {
          firstName: 'Ashley',
          lastName: 'Dobson',
          phone: '5553728112',
          email: 'youwish@gmail.com',
          subObject: {
            subField1: 12,
            subField2: 'test2',
          }
        },
        {
          firstName: 'Grace',
          lastName: 'Johnson',
          phone: '5552918382',
          email: 'oldmaid@caring.org',
          subObject: {
            subField1: 4,
            subField2: 'test3',
          }
        },
        {
          firstName: 'Trent',
          lastName: 'Washington',
          phone: '5558382833',
          email: 'justintime@ymail.net',
          subObject: {
            subField1: 25,
            subField2: 'test4',
          }
        },
      ],
    };
  },
  methods: {
    onDelete(index) {
      console.log(index);
    },
  },
};

</script>

<style scoped>

.vuestro-table >>> .test-column-class {
  font-weight: 700;
  padding: 10px;
}

</style>