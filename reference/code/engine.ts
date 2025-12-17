/**
 * engine.ts
 * Minimal golden-path engine-core skeleton
 */

export class Engine {
  constructor(story) {
    this.story = story;
  }

  newGame(character) {
    return {
      version: "1.3.0",
      storyBundleId: this.story.id,
      currentSceneId: this.story.story.startScene,
      character,
      flags: {},
      vars: {}
    };
  }

  getCurrentScene(state) {
    return this.story.story.scenes.find(s => s.id === state.currentSceneId);
  }

  applyEffects(state, effects) {
    effects?.forEach(e => {
      if (e.type === "setFlag") state.flags[e.key] = e.value;
      if (e.type === "modifyStat") {
        state.character.stats[e.key] =
          (state.character.stats[e.key] ?? 0) + e.delta;
      }
    });
  }

  selectAction(state, actionId) {
    const scene = this.getCurrentScene(state);
    const action = scene.actions?.find(a => a.id === actionId);
    if (!action) return state;
    this.applyEffects(state, action.effects);
    return state;
  }
}
