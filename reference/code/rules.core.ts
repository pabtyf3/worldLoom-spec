/**
 * rules.core.ts
 * Reference RuleModule implementation for v1.3
 */

export const CoreRules = {
  id: "rules.core",
  system: "Custom",

  evaluateCondition(cond, state) {
    switch (cond.type) {
      case "flag":
        return !!state.flags[cond.key] === (cond.value ?? true);
      case "stat":
        const v = state.character.stats[cond.key] ?? 0;
        if (cond.operator === "gte") return v >= cond.value;
        if (cond.operator === "gt") return v > cond.value;
        if (cond.operator === "lte") return v <= cond.value;
        if (cond.operator === "lt") return v < cond.value;
        return v === cond.value;
      default:
        return false;
    }
  },

  resolve(ctx) {
    if (ctx.hook?.type === "skillCheck") {
      const roll = ctx.rng?.int(1, 20) ?? 10;
      const stat = ctx.hook.payload?.stat;
      const dc = ctx.hook.payload?.dc ?? 10;
      const total = roll + (ctx.state.character.stats[stat] ?? 0);
      return {
        outcome: total >= dc ? "success" : "failure",
        narrative: total >= dc ? "You succeed." : "You fail."
      };
    }
    return {};
  }
};
