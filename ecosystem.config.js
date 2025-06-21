module.exports = {
  apps: [
    {
      name: 'stw_app',  // ← исправлено
      script: 'node_modules/.bin/next',
      args: 'start',
      cwd: '/home/stw_user/projects/stw_app',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3003
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3003
      },
      log_file: '/var/log/pm2/stw_app.log',      // ← исправлено
      out_file: '/var/log/pm2/stw_app-out.log', // ← исправлено
      error_file: '/var/log/pm2/stw_app-error.log', // ← исправлено
      time: true
    }
  ]
};