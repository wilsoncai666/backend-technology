module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'acf8a07acbc6fe00c5342bdf64df575c'),
  },
});
