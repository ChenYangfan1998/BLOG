module.exports = {
  port: process.env.PORT || 2800,
  db: {
    database: process.env.DB_NAME || 'blog',
    user: process.env.DB_USER || 'blog',
    password: process.env.DB_PASS || 'blog',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'blog',
      storage: './../../blog.sqlite'
    }
  },
  uploadUrl: 'src/public/upload/',
  user: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  },
  uploadKey: process.env.UPLOADKEY || 'upload'
};
