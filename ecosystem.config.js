module.exports = {
  apps: [{
    name: "stw_app",
    script: "npm",
    args: "start",
    env: {
      PORT: 3003
    },
      log_file: './logs/pm2.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      merge_logs: true,
      time: true
  }]
};