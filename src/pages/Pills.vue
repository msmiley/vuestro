<template>
  <vuestro-container>
    <vuestro-card color="var(--vuestro-purple)">
      <template #heading>Pills</template>
      <template #description>
        Pills are a great way to represent either key-value pairs, or "grabbable" bits of information. They consist of an color-accented title along with a value. If a title is not provided, the first letter of the value property will be used for the accent dot.
      </template>
      <vuestro-container>
        <vuestro-pill>
          <template #value>Pill Value</template>
        </vuestro-pill>
      </vuestro-container>
    </vuestro-card>

    <vuestro-card>
      <template #description>
        <span>Use VuestroPill with any combination of <vuestro-code>icon</vuestro-code>, <vuestro-code>title</vuestro-code>, and <vuestro-code>value</vuestro-code> slots</span>
      </template>
      <vuestro-container>
        <vuestro-pill>
          <template #icon>
            <vuestro-icon name="pills"></vuestro-icon>
          </template>
        </vuestro-pill>
        <vuestro-pill>
          <template #icon>
            <vuestro-icon name="pills"></vuestro-icon>
          </template>
          <template #title>title</template>
        </vuestro-pill>
        <vuestro-pill>
          <template #title>title</template>
        </vuestro-pill>
        <vuestro-pill>
          <template #icon>
            <vuestro-icon name="pills"></vuestro-icon>
          </template>
          <template #title>title</template>
          <template #value>value</template>
        </vuestro-pill>
        <vuestro-pill>
          <template #title>title</template>
          <template #value>value</template>
        </vuestro-pill>
        <vuestro-pill>
          <template #value>value</template>
        </vuestro-pill>
      </vuestro-container>
    </vuestro-card>

    <vuestro-card>
      <template #description>
        <span>Use the <vuestro-code>title-buttons</vuestro-code> slot to add some buttons to the title template</span>
      </template>
      <vuestro-container>
        <vuestro-pill>
          <template #title>Slot Title</template>
          <template #title-buttons>
            <vuestro-button round no-border variant="white">
              <vuestro-icon name="times"></vuestro-icon>
            </vuestro-button>
          </template>
        </vuestro-pill>
        <vuestro-pill>
          <template #icon>
            <vuestro-icon name="tractor" scale="0.8"></vuestro-icon>
          </template>
          <template #title>Tractor</template>
          <template #title-buttons>
            <vuestro-button round no-border variant="white">
              <vuestro-icon name="save"></vuestro-icon>
            </vuestro-button>
            <vuestro-button round no-border variant="white">
              <vuestro-icon name="times"></vuestro-icon>
            </vuestro-button>
          </template>
        </vuestro-pill>
      </vuestro-container>
    </vuestro-card>

    <vuestro-card>
      <template #description>
        <span>Enable a shadow by setting the <vuestro-code>shadow</vuestro-code> property (more obvious in light mode)</span>
      </template>
      <vuestro-container>
        <vuestro-pill shadow>
          <template #value>Shadow</template>
        </vuestro-pill>
      </vuestro-container>
    </vuestro-card>

    <vuestro-card>
      <template #description>
        Use a VuestroTray to keep pills together!
      </template>
  		<vuestro-tray title="Pill Tray" variant="outline">
  			<vuestro-pill>
  			  <template #title>Pill Value</template>
  			</vuestro-pill>
  			<vuestro-pill>
  			  <template #value>Pill Value</template>
			  </vuestro-pill>
  		</vuestro-tray>
    </vuestro-card>

    <vuestro-card>
      <template #description>
        Pills can also have different colors by specifying a color property
      </template>
      <vuestro-container>
        <vuestro-pill color="var(--vuestro-orange)">
          <template #value>Orange</template>
        </vuestro-pill>
        <vuestro-pill color="var(--vuestro-green)">
          <template #value>Green</template>
        </vuestro-pill>
        <vuestro-pill color="var(--vuestro-red)">
          <template #value>Red</template>
        </vuestro-pill>
        <vuestro-pill color="var(--vuestro-blue)">
          <template #value>Blue</template>
        </vuestro-pill>
        <vuestro-pill color="var(--vuestro-purple)">
          <template #value>Purple</template>
        </vuestro-pill>
      </vuestro-container>
    </vuestro-card>

    <vuestro-card>
      <template #description>
        ...or a different size by specifying a size property {'sm', 'md', 'lg', 'xl'}
      </template>
      <vuestro-container align="flex-start">
        <vuestro-pill color="var(--vuestro-orange)" size="sm">
          <template #value>Orange</template>
        </vuestro-pill>
        <vuestro-pill color="var(--vuestro-green)" size="md">
          <template #value>Green</template>
        </vuestro-pill>
        <vuestro-pill color="var(--vuestro-red)" size="lg">
          <template #value>Red</template>
        </vuestro-pill>
        <vuestro-pill color="var(--vuestro-blue)" size="xl">
          <template #value>Blue</template>
        </vuestro-pill>
      </vuestro-container>
    </vuestro-card>

    <vuestro-card>
      <template #description>
        <span>...or a different radius by defining the <em>--vuestro-pill-radius</em> CSS var (with units)</span>
      </template>
      <vuestro-container>
        <vuestro-pill>
          <template #title>Default</template>
          <template #value>Radius</template>
        </vuestro-pill>
        <vuestro-pill style="--vuestro-pill-radius:4px">
          <template #title>4px</template>
          <template #value>Radius</template>
        </vuestro-pill>
        <vuestro-pill style="--vuestro-pill-radius:0.5em">
          <template #title>0.5em</template>
          <template #value>Radius</template>
        </vuestro-pill>
        <vuestro-pill style="--vuestro-pill-radius:0">
          <template #title>0</template>
          <template #value>Radius</template>
        </vuestro-pill>
      </vuestro-container>
    </vuestro-card>

    <vuestro-card>
      <template #description>
        <span>Define an <vuestro-code>@click</vuestro-code> handler to make the pill clickable</span>
      </template>
      <vuestro-container>
        <vuestro-pill @click="exampleClicked = !exampleClicked">
          <template #title>Clickable</template>
        </vuestro-pill>
        <span class="example-action-text" v-if="exampleClicked">Pill clicked!</span>
      </vuestro-container>
    </vuestro-card>

    <vuestro-card>
      <template #description>
        <span>Define an <vuestro-code>@close</vuestro-code> handler to show a close button and emit close event</span>
      </template>
      <vuestro-container>
        <vuestro-pill v-if="!exampleClosed" closable @close="exampleClosed = true">
          <template #title>Close</template>
          <template #value>Me</template>
        </vuestro-pill>
        <span class="example-action-text" v-if="exampleClosed">
          Pill closed! <vuestro-button variant="link" @click="exampleClosed = false">Click</vuestro-button> to reopen.
        </span>
      </vuestro-container>
    </vuestro-card>

    <vuestro-card>
      <template #description>
        <span>Combining <vuestro-code>@click</vuestro-code> and <vuestro-code>@close</vuestro-code> will yield expected results</span>
      </template>
      <vuestro-container>
        <vuestro-pill v-if="!exampleClosed" @close="exampleClosed = true" @click="exampleClicked = !exampleClicked">
          <template #value>
            Click or close
          </template>
        </vuestro-pill>
        <span class="example-action-text" v-if="exampleClosed">
          Pill closed! <vuestro-button variant="link" @click="exampleClosed = false">Click</vuestro-button> to reopen.
        </span>
        <span class="example-action-text" v-if="exampleClicked">Pill clicked!</span>
      </vuestro-container>
    </vuestro-card>

    <vuestro-card>
      <template #description>
        A pill will refuse to wrap and will show an ellipsis when the value is too long to fit in the provided space
      </template>
      <vuestro-container class="example-constrained-width">
        <vuestro-pill>
          <template #title>Long Title</template>
          <template #value>Long Value</template>
        </vuestro-pill>
      </vuestro-container>
    </vuestro-card>

    <vuestro-card>
      <template #description>
        <span>Set the <vuestro-code>geopattern</vuestro-code> property for a generated geometric background based on the <vuestro-code>title</vuestro-code> string</span>
      </template>
      <vuestro-container>
        <vuestro-pill geopattern>
          <template #title>
            This string generated the background!!!
          </template>
        </vuestro-pill>
        <vuestro-pill geopattern="theseed">
          <template #title>
            ...or set geopattern to a string to set the seed!
          </template>
        </vuestro-pill>
      </vuestro-container>
    </vuestro-card>

    <vuestro-card>
      <vuestro-container align="flex-start">
        <vuestro-pill color="#00A1FF">
          <template #title>&nbsp;</template>
        </vuestro-pill>
        <vuestro-pill color="#FF42A1">
          <template #title>&nbsp;</template>
        </vuestro-pill>
        <vuestro-pill color="#1DB100">
          <template #title>&nbsp;</template>
        </vuestro-pill>
        <vuestro-pill color="#00AB8E">
          <template #title>&nbsp;</template>
        </vuestro-pill>
        <vuestro-pill color="#F27200">
          <template #title>&nbsp;</template>
        </vuestro-pill>
      </vuestro-container>
    </vuestro-card>
  </vuestro-container>
</template>

<script>

export default {
  name: 'Pills',
  data() {
    return {
      exampleClicked: false,
      exampleClosed: false,
    };
  }
};

</script>

<style scoped>

.example-align-items-start {
  display: flex;
  align-items: flex-start;
}

.example-action-text {
  margin-left: 10px;
  margin-right: 10px;
  align-self: center;
  display: flex;
  align-items: center;
}

.example-constrained-width {
  width:120px;
}

</style>