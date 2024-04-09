module.exports = {
  apps: [
    {
      name: 'pereverzev_prod',
      script: '.output/server/index.mjs',
      max_memory_restart: '600M',
    },
  ],
};
