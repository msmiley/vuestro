<template>
  <vuestro-card>
    This is the Home View for the vuestro-breadcrumb example.

    <p>This page should contain the top-level data and view. Once the user clicks on something of interest, the view will change and the vuestro-breadcrumb component will keep track of the breadcrumb trail and provide links back up the trail.
    </p>

    <vuestro-card>
      <template #description>
        Table Edit Example
      </template>
      <vuestro-panel>
        <vuestro-table :data="list">
          <template #row-buttons="{ item, index }">
            <vuestro-button round no-border @click="onEdit(item)">
              <vuestro-icon name="edit"></vuestro-icon>
            </vuestro-button>
            <vuestro-confirm></vuestro-confirm>
          </template>
        </vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #description>
        File Browser Example
      </template>
      <vuestro-button size="tall" @click="onFileBrowser">
        <template #icon>
          <vuestro-icon name="folder-open"></vuestro-icon>
        </template>
        File Browser
      </vuestro-button>
    </vuestro-card>

    <vuestro-card>
      <template #description>
        Implementation details
      </template>
      <span>Each view for this breadcrumb must be backed by a component. You need to define a <em>pages</em> array for the vuestro-breadcrumb component describing the initial state. Your subcomponent will them either emit <em>descend</em> or <em>ascend</em> to move within the stack. The vuestro-breadcrumb component will take care of jumping up in the stack in response to a user clicking a breadcrumb. Also, the vuestro-breadcrumb component will update the url with a serialized copy of the stack for bookmarking. On load, if the serialized stack is in the url, it will load that instead of the initial state.</span>
    </vuestro-card>
  </vuestro-card>
</template>

<script>

export default {
  name: 'Home',
  props: ['data', 'options'],
  data() {
    return {
      list: [
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
    getTitle() {
      return 'Home';
    },
    getIcon() {
      return 'home';
    },
    onEdit(item) {
      this.$emit('descend', {
        title: 'Edit',
        icon: 'pen',
        component: 'edit',
        data: item,
        options: {},
      });
    },
    onFileBrowser() {
      this.$emit('descend', {
        title: '/',
        component: 'file-browser',
        options: {
          path: '/',
        },
      })
    },
    refresh() {
      console.log('refresh called');
    },
  }
};

</script>