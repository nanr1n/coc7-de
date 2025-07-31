const MODULE_ID = 'coc7-de'; // Change this ID!

// No need to change the code below this line, but it’s your module so do it if you want!

Hooks.on('init', () => {
  game.settings.register(MODULE_ID, 'autoRegisterBabel', {
    name: 'Automatically activate translation via Babele',
    hint: 'Automatically implements Babele translations without needing to point to the directory containing the translations.',
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
    requiresReload: true,
  });

  if (game.settings.get(MODULE_ID, 'autoRegisterBabel')) {
    Hooks.once('babele.init', (babele) => {
      babele.register({
        module: MODULE_ID,
        lang: 'de',
        dir: 'compendium/de',
      });
    });
  }
});
