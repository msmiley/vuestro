<template>
  <vuestro-container no-wrap column shrink>
    <vuestro-card cols="0" stretch>
      <template #heading>
        VuestroSidebar
      </template>
      <p>
        Use the VuestroSidebar to show a navigation menu on the side of the page. It automatically retrieves routes from the app's router.
      </p>
      <p>
        Use the following <code>meta</code> properties to customize the display of a route in the sidebar.
      </p>

<vuestro-editor lang="javascript" :options="editorOptions">{
  meta: {
    // Display name in the sidebar.
    title: 'Dashboard',
    // To hide a route from the sidebar, set this to false.
    sidebar: true,
    // Icon to show in the sidebar
    icon: 'tachometer-alt',
  },
  name: 'dashboard',
  path: '/dashboard',
  component: Dashboard,
}</vuestro-editor>
    </vuestro-card>

    <vuestro-card cols="0" stretch>
      <p>
        By default, VuestroSidebar looks at the routes in <code>this.$router.options.routes</code>. You may set the <code>routes</code> prop to override this. For example, let's create a sidebar that only shows the children of the <strong>Charts</strong> route.
      </p>

      <vuestro-container>
        <vuestro-card cols="4">
          <vuestro-panel style="--vuestro-panel-bg: var(--vuestro-purple)">
            <vuestro-sidebar :routes="routes"></vuestro-sidebar>
          </vuestro-panel>
        </vuestro-card>
        <vuestro-card cols="8">
          <vuestro-editor lang="javascript" :options="editorOptions">Vue.component('my-page', {
  template: '&lt;vuestro-sidebar :routes="routes"&gt;&lt;/vuestro-sidebar&gt;'
  data() {
    return {
      routes: _.cloneDeep(this.$router.options.routes.find(r => r.name === 'charts').children),
    };
  }
})</vuestro-editor>
        </vuestro-card>
      </vuestro-container>
    </vuestro-card>
  </vuestro-container>
</template>

<script>

export default {
  name: 'NavigationSidebar',
  data() {
    return {
      routes: _.cloneDeep(this.$router.options.routes.find(r => r.name === 'charts').children),
      editorOptions: {
        readOnly: true,
        useWorker: false,
        maxLines: 20,
      },
    }
  },
  mounted() {
    console.log(this.$router.options.routes.find(r => r.name === 'sidebar'));
  },
}

</script>