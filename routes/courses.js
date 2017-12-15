var express = require('express')
var router = express.Router()
var courses = require('../services/courses')

router.use(function (req, res, next) {
  courses.getCourses().then(function (courseCollection) {
    req.courses = courseCollection.items
    next()
  })
})

router.get('/', function (req, res, next) {
  res.render('index', {
    'title': 'Courses',
    'courses': req.courses
  })
})

module.exports = router
