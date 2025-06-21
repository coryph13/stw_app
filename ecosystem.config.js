module.exports = {
  apps: [
    {
      name: 'stw_app',
      script: 'node_modules/.bin/next',
      args: 'start -p 3003',
      instances: 1,
      autorestart: true,
      max_memory_restart: '300M',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3003
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3003
      },
      log_file: './logs/pm2.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      merge_logs: true,
      time: true
    }
  ]
};