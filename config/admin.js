module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f70ba87924d623d261459a9c16c25549'),
  },
});
