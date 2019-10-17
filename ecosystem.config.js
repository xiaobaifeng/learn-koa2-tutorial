module.exports = {
  apps : [{
    name: 'LearnKoa2',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '106.54.253.221',
      post: 22,
      ref  : 'origin/master',
      repo : 'git@github.com:xiaobaifeng/learn-koa2-tutorial.git',
      path : '/root/projects/learn-koa2',
      'post-deploy' : 'npm i && pm2 reload ecosystem.config.js --env production'
    }
  }
};
