<template>
<div class="mk-reactions-viewer" :class="{ isMe }">
	<x-reaction v-for="(count, reaction) in reactions" :reaction="reaction" :count="count" :note="note" :key="reaction"/>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import XReaction from './reactions-viewer.reaction.vue';

export default Vue.extend({
	components: {
		XReaction
	},
	props: {
		note: {
			type: Object,
			required: true
		},
	},
	computed: {
		reactions(): any {
			return this.note.reactions;
		},
		isMe(): boolean {
			return this.$store.getters.isSignedIn && this.$store.state.i.id === this.note.userId;
		},
	},
});
</script>

<style lang="stylus" scoped>
.mk-reactions-viewer
	margin: 4px -2px

	&:empty
		display none

	&.isMe
		> span
			cursor default !important

			&:hover
				background var(--reactionViewerButtonBg) !important
</style>
