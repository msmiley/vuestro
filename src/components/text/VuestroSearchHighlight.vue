<template>
  <span>
    <span v-for="(t, idx) in getTokens()" :key="idx">
      <span v-if="t.type == 'plain'">{{ t.text }}</span>
      <span v-else-if="t.type == 'highlight'" class="vuestro-search-highlight">{{ t.text }}</span>
    </span>
  </span>
</template>

<script>

export default {
  name: 'VuestroSearchHighlight',
  props: {
    searchTerm: { type: String, required: true }, // the search term
    sensitive: { type: Boolean, default: false }, // true for case-sensitive
  },
  methods: {
    getTokens() {
      let text = this.$slots.default[0].text;
      if (text) {
        let regex;
        if (this.sensitive) {
          regex = new RegExp(`(${this.searchTerm})`, 'g');
        } else {
          regex = new RegExp(`(${this.searchTerm})`, 'gi');
        }
        // replace all occurrences with the search term surrounded by a
        // special delimiter which will be used to split the string
        let replstr = text.replaceAll(regex, '@@@@$&@@@@');
        let split = replstr.split('@@@@');

        // tokens are the parts of the processed string, so that the template
        // above can render plain text and hightlighted text separately
        let tokens = [];

        if (split.length > 1) {
          for (let i=0; i < split.length; i+=2) {
            // always add split[i] as plain text, split[i+1] is the search term match if present
            tokens.push({
              type: 'plain',
              text: split[i],
            });
            if (split[i+1]) {
              tokens.push({
                type: 'highlight',
                text: split[i+1],
              });
            }
          }
        } else {
          // if no matches were present, use entire string as plain text token
          tokens.push({
            type: 'plain',
            text,
          });
        }
        return tokens;
      }
    },
  },
};

</script>

<style>

.vuestro-app {
  --vuestro-highlight-bg: var(--vuestro-yellow);
  --vuestro-highlight-fg: var(--vuestro-text-color-inverse);
}

</style>

<style scoped>

.vuestro-search-highlight {
  background-color: var(--vuestro-highlight-bg);
  color: var(--vuestro-highlight-fg);
}

</style>