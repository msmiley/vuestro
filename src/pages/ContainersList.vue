<template>
  <vuestro-container no-wrap>
    <vuestro-card cols=4 color="var(--vuestro-orange)" scroll>
      <template #heading>
        <span>List</span>
        <!--LIST TOOLBAR BUTTONS-->
        <vuestro-container grow=0 gutter="none">
					<vuestro-button pill @click="onNew" variant="success" value>
					  <template #icon>
  						<vuestro-icon name="plus"></vuestro-icon>
						</template>
						New
					</vuestro-button>
					<vuestro-button round no-border @click="reload">
						<vuestro-icon name="sync-alt" :pulse="loading"></vuestro-icon>
					</vuestro-button>
				</vuestro-container>
      </template>
      <!--SEARCH BOX-->
      <template #description>
        <vuestro-text-field variant="search" v-model="searchTerm" stretch></vuestro-text-field>
      </template>
      <!--THE LIST-->
      <vuestro-container justify="center" v-if="filteredItems.length === 0">No matching items</vuestro-container>
      <vuestro-list-item v-else v-for="i in filteredItems" :key="i.name" :selected="selectedItem == i" @click="onClick(i)">
        <template #icon>
          <vuestro-icon name="user"></vuestro-icon>
        </template>
        <template #title>{{ i.sender }}</template>
        <template #description>{{ i.subject }}</template>
        <!-- <template #content>{{ i.content }}</template>  -->
        <template #buttons>
          <vuestro-button round no-border size="sm" @click="onEdit(i)">
            <vuestro-icon name="pen"></vuestro-icon>
          </vuestro-button>
					<vuestro-confirm @confirm="onConfirm(i)"></vuestro-confirm>
        </template>
      </vuestro-list-item>
    </vuestro-card>
    <vuestro-card cols=8>
      <vuestro-panel>
        <template #title>Details</template>
        <vuestro-container>
          <vuestro-object-browser :data="selectedItem"></vuestro-object-browser>
        </vuestro-container>
      </vuestro-panel>
    </vuestro-card>
  </vuestro-container>
</template>

<script>

export default {
  name: 'ContainersList',
  data() {
    return {
      loading: false,
      items: [{"id":1,"sender":"Ozzie Gooder","subject":"Front-line 5th generation utilisation","content":"Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.","date":"2021-03-08T01:46:52Z","read":true},
{"id":2,"sender":"Jesse Comben","subject":"Stand-alone 3rd generation workforce","content":"Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.","date":"2021-03-14T02:19:46Z","read":true},
{"id":3,"sender":"Raeann Fraschetti","subject":"Cross-platform explicit budgetary management","content":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.","date":"2020-07-28T08:24:27Z","read":false},
{"id":4,"sender":"Johna Callery","subject":"Synergistic stable Graphic Interface","content":"Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.","date":"2020-04-27T06:23:31Z","read":false},
{"id":5,"sender":"Jenelle Ofield","subject":"Object-based executive array","content":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.","date":"2021-03-05T20:59:12Z","read":false},
{"id":6,"sender":"Aleen Cunnane","subject":"Fundamental needs-based ability","content":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.","date":"2020-08-29T20:35:14Z","read":true},
{"id":7,"sender":"Maribelle Blanchard","subject":"Secured analyzing moratorium","content":"Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.","date":"2020-08-25T17:12:59Z","read":true},
{"id":8,"sender":"Nissa Louis","subject":"Innovative national workforce","content":"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","date":"2020-06-25T06:26:49Z","read":false},
{"id":9,"sender":"Archie Farra","subject":"Compatible bandwidth-monitored leverage","content":"Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.","date":"2020-07-26T00:30:13Z","read":false},
{"id":10,"sender":"Trevar Calton","subject":"Decentralized solution-oriented support","content":"Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.","date":"2021-03-24T15:19:46Z","read":true},
{"id":11,"sender":"Giacomo Blodgetts","subject":"Horizontal motivating strategy","content":"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.","date":"2021-02-21T10:35:27Z","read":true},
{"id":12,"sender":"Amanda Heine","subject":"Public-key high-level instruction set","content":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.","date":"2020-10-21T11:54:15Z","read":false},
{"id":13,"sender":"Arnoldo Hoffman","subject":"Profound methodical workforce","content":"Integer non velit.","date":"2020-09-15T14:19:03Z","read":false},
{"id":14,"sender":"Bartlett Garmey","subject":"User-friendly mobile contingency","content":"Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.","date":"2021-04-04T02:31:50Z","read":true},
{"id":15,"sender":"North Domke","subject":"Customizable uniform monitoring","content":"Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.","date":"2021-02-25T10:18:13Z","read":true},
{"id":16,"sender":"Flynn Casbourne","subject":"Polarised high-level flexibility","content":"Sed vel enim sit amet nunc viverra dapibus.","date":"2020-11-10T07:16:55Z","read":true},
{"id":17,"sender":"North O'Hannen","subject":"Business-focused neutral capability","content":"Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.","date":"2021-03-12T06:57:47Z","read":false},
{"id":18,"sender":"Angeli Melia","subject":"Configurable composite firmware","content":"Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.","date":"2020-05-14T21:31:00Z","read":true},
{"id":19,"sender":"Chryste McWilliams","subject":"Configurable 24/7 knowledge base","content":"Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.","date":"2020-07-27T15:53:02Z","read":false},
{"id":20,"sender":"Jarret Mitchard","subject":"Multi-layered solution-oriented task-force","content":"Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","date":"2020-12-11T12:48:20Z","read":false}],
      selectedItem: null,
      searchTerm: '',
    };
  },
  computed: {
    filteredItems() {
      let ret = [];
      if (this.searchTerm.length > 0) {
        let regex = new RegExp(this.searchTerm, 'i');
        ret = _.filter(this.items, (o) => {
          return regex.test(Object.values(o).join(' '));
        });
      } else {
        ret = this.items;
      }
      return ret;
    },
  },
  methods: {
    onNew() {
      this.items.push({
        sender: `New Item ${this.items.length + 1}`,
        subject: 'new subject',
        content: 'new content',
        date: (new Date()).toISOString()
      });
    },
    reload() {

    },
    onClick(i) {
      this.selectedItem = i;
    },
    onEdit(i) {
      alert(`looks like you want to edit ${JSON.stringify(i)}`);
    },
    onConfirm(i) {
      alert(`looks like you want to delete ${JSON.stringify(i)}`);
    },
  },
};

</script>

<style scoped>

</style>