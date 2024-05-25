module.exports = app => {

  const ExperiencesRouter = require("./experience.routes")
  app.use("/api/experience", ExperiencesRouter)

  const PackageRouter = require('./package.routes')
  app.use('/api/package', PackageRouter)

  const AuthRouter = require('./auth.routes')
  app.use('/api/user', AuthRouter)

}